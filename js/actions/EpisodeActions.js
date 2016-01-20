var React = require('react');
var $ = require('jQuery');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ITUNES_API_BASE = 'https://itunes.apple.com/search?term=music&media=music&entity=musicTrack&country=jp&lang=ja_jp&limit=20&offset=';


var EpisodeActions = {
  getList: function(page) {
    var url = ITUNES_API_BASE + encodeURIComponent(page) + '&callback=?';
    $.getJSON(url,
    function(res){
      AppDispatcher.dispatch({
        actionType: AppConstants.TODO_CREATE,
        articleList: res.results
      });
    });
  },
  deleteAll: function() {
    AppDispatcher.dispatch({
      actionType: AppConstants.TODO_DESTROY_COMPLETED,
    });
  },
};

module.exports = EpisodeActions;
