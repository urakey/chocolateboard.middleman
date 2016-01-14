//= require "jquery/dist/jquery.min.js"
//= require "jquery_lazyload/jquery.lazyload.js"
//= require "plugins/_jquery.smoothScroll.js"
//= require "modules/_browser.js"
//= require "modules/_hatena.js"
//= require "modules/_flickr.js"

(function($)
{
  "use strict";

  //===========================================================================
  //  関数
  //===========================================================================

  /**
   * 初期読み込み時の実行処理まとめ
   */
  function init()
  {
    $('a[href^="#"]').smoothScroll({
      play: -40,
      duration: 500,
      easing: 'easeOutQuad',
      withHash: false
    });

    $('.Lazy').lazyload({
      effect: 'fadeIn',
      threshold: 200
    });

    //-------------------------------------------------------------------------
    // ** Hatena
    //-------------------------------------------------------------------------
    var hatena = new choco.Hatena($('#HatenaEntries'));

    //-------------------------------------------------------------------------
    // ** Flickr
    //-------------------------------------------------------------------------
    var flickr = new choco.Flickr($('#FlickrPhotos'));

  }

  //===========================================================================
  //  処理
  //===========================================================================

  /**
   * document 実行処理
   */

  $(document).on({
    'ready': function(){
      init();
    }
  });

  //===========================================================================
  //  Easing
  //===========================================================================

  /**
   * Easing: easeOutQuad
   */
  $.extend( jQuery.easing,{
    easeOutQuad: function (x, t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    }
  });

})(jQuery);
