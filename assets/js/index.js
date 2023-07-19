(function() {
    'use strict';

    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-green', 'shadow');
      } else {
        nav.classList.remove('bg-green', 'shadow');
      }
    });
})();
 