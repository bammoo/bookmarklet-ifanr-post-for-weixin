javascript: void(0);
(function($) {
  var version = '版本：v.0.0.2。 update at：2015-7-23';

  // 去背景
  $('html, body, #container, #container-inner, #content-outer, #content').css('background-color', 'transparent');

  // 设置字体
  $('article p, article div').css('font-size', '16px');
  $('article p, article h3, article h2, article h1').css('padding', '0 15px');
  $('.entry-content').find('span[id^="more"]').remove();
  $('.entry-content').find('h1, h2 ,h3').css('font-weight', '700');
  $('.entry-content').find('img').css('max-width', 'inherit');

  alert('已完成！' + version);
  console.log('已完成！' + version)
})(jQuery)