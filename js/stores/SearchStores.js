var SearchDispatcher = require('../dispatcher/SearchDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _episodes = {};

function create(articleList) {
  for (var i in articleList) {
    var trackId = articleList[i].trackId;
    _episodes[trackId] = {
      trackId: trackId,
      artistName: articleList[i].artistName,
      trackName: articleList[i].trackName,
      releaseDate: articleList[i].releaseDate,
      icon_url: articleList[i].artworkUrl60,
      preview: articleList[i].previewUrl
    }
  }
}

function destroy(id) {
  delete _episodes[id];
}

function destroyCompleted() {
  for (var id in _episodes) {
    destroy(id);
  }
}

var SearchStores = assign({}, EventEmitter.prototype, {

  areAllComplete: function() {
    for (var id in _episodes) {
      if (!_episodes[id].complete) {
        return false;
      }
    }
    return true;
  },

  getAll: function() {
    return _episodes;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
SearchDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case AppConstants.TODO_CREATE:
      articleList = action.articleList;
      if (text !== '') {
        create(articleList);
        SearchStores.emitChange();
      }
      break;

    case AppConstants.TODO_DESTROY:
      destroy(action.id);
      SearchStores.emitChange();
      break;

    case AppConstants.TODO_DESTROY_COMPLETED:
      destroyCompleted();
      SearchStores.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = SearchStores;
