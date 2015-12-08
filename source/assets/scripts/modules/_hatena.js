var choco = choco || {};

(function($)
{
  "use strict";

  /**
   * @class Hatena
   */

  function Hatena(url, sort, $dom, tag) {
    this.url  = url;
    this.sort = sort;
    this.$dom = $dom;
    this.tag  = tag || 'p';

    this.init.apply(this);
  }

  Hatena.prototype = {

    init: function() {
      this.loadEntries();
    },

    loadEntries: function() {
      var _this = this;
      var d = $.Deferred();

      $.ajax({
        type: 'GET',
        url:  'http://b.hatena.ne.jp/entrylist/json',
        data: {
          sort: _this.sort,
          url: _this.url
        },
        dataType: 'jsonp',
        jsonp : 'callback',
        success: function(data) {
          _this.appendHtml(_this.$dom, _this.setDataForEachEntries(data));
          d.resolve();
        },
        error: function(e) {
          console.log(e);
        }
      });
      return d.promise();
    },

    setDataForEachEntries: function(entries) {
      var _this = this;
      var htmlTag = _this.tag;
      var title, link, count, htmlSrc;
      var newCommers = [];

      if(entries.length <= 0) return;

      $.each(entries, function(index, entry){
        title = entry.title;
        link  = entry.link;
        count = entry.count;

        htmlSrc  = '<' + htmlTag + '>';
        htmlSrc += '<a href="' + link + '">';
        htmlSrc += title;
        htmlSrc += '</a>';
        htmlSrc += ' (B! :: ' + count + ') ';
        htmlSrc += '</' + htmlTag + '>';

        newCommers.push(htmlSrc);
      });

      return newCommers;
    },

    appendHtml: function($dom, htmlSrcArray) {

      if(htmlSrcArray.length <= 0) return;
      $.each(htmlSrcArray, function(index, htmlSrc){
        $dom.append(htmlSrc);
      });
    }
  };

  // export
  choco.Hatena = Hatena;

})(jQuery);