var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _articles = {};

function create(articleList) {
  for (var i in articleList) {
    var ms = Date.parse(articleList[i].releaseDate);
    var dt = new Date(ms);
    var trackId = articleList[i].trackId;
    _articles[trackId] = {
      trackId: trackId,
      artistName: articleList[i].artistName,
      trackName: articleList[i].trackName,
      releaseDate: dt.toLocaleString(),
      icon_url: articleList[i].artworkUrl60,
      preview: articleList[i].previewUrl
    }
  }
}

function destroy(id) {
  delete _articles[id];
}

function destroyCompleted() {
  for (var id in _articles) {
    destroy(id);
  }
}

var AppStores = assign({}, EventEmitter.prototype, {

  areAllComplete: function() {
    for (var id in _articles) {
      if (!_articles[id].complete) {
        return false;
      }
    }
    return true;
  },

  getAll: function() {
    return _articles;
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
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case AppConstants.TODO_CREATE:
      articleList = action.articleList;
      if (text !== '') {
        create(articleList);
        AppStores.emitChange();
      }
      break;

    case AppConstants.TODO_DESTROY:
      destroy(action.id);
      AppStores.emitChange();
      break;

    case AppConstants.TODO_DESTROY_COMPLETED:
      destroyCompleted();
      AppStores.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = AppStores;
