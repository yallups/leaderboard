(function() {
  document.querySelectorAll('.leaderboard-embed').forEach(function(element) {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://yallups.github.io/leaderboard/';
    iframe.width = '100%';
    iframe.height = element.getAttribute('data-height') || '600';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    element.parentNode.replaceChild(iframe, element);
  });
})();
