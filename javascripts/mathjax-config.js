// docs/javascripts/mathjax-config.js     
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],  // 启用 $ 符号
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    packages: ['base', 'ams', 'newcommand', 'autoload']
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
    renderActions: {
      addMenu: [0, '', ''],
      checkLoading: [10, function (doc) {
        console.log('MathJax is ready!');
      }, function (doc) {
        console.log('MathJax is loading...');
      }]
    }
  },
  startup: {
    pageReady: function () {
      console.log('MathJax 3 loaded successfully!');
      return MathJax.startup.defaultPageReady();
    }
  }
};