var React = require('react');
var $ = require('jQuery');
var SearchDispatcher = require('../dispatcher/SearchDispatcher');
var AppConstants = require('../constants/AppConstants');

var ITUNES_BASE_URL = 'https://itunes.apple.com/search?term=';
var ITUNES_PROPS_URL = '&media=music&entity=musicTrack&country=jp&lang=ja_jp&limit=20&callback=?';

var SearchActions = {
  searchList: function(word) {
    var url = ITUNES_BASE_URL + encodeURIComponent(word) + ITUNES_PROPS_URL;
    $.getJSON(url,
    function(res){
      SearchDispatcher.dispatch({
        actionType: AppConstants.TODO_CREATE,
        articleList: res.results
      });
    });
  },
  deleteAll: function() {
    SearchDispatcher.dispatch({
      actionType: AppConstants.TODO_DESTROY_COMPLETED,
    });
  },
};

module.exports = SearchActions;
