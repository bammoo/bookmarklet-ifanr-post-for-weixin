// javascript: void(
(function() {
  var d = document;
  var w = window;
  var f = 'http://mindstore.io/mind/create/';
  /*var f='http://192.168.1.57:8080/lime/mind/create/';*/
  var l = d.location;
  var e = encodeURIComponent;
  var p = '?mind_title=' + d.title;
  var u = '&mind_url=' + e(l.href);
  var g = f + p + u;

  function a() {
    if (!w.open(g, 't', 'toolbar=0,resizable=0,scrollbars=1,status=1,width=700,height=500')) {
      l.href = g;
    }
  }
  if (/Firefox/.test(navigator.userAgent)) {
    setTimeout(a, 0);
  } else {
    a();
  }
  void(0);
})()
// );