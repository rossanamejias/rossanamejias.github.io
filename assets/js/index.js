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

    const items = document.querySelectorAll("#vertical-scrollable-timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("active");
            }
            else{
              items[i].classList.remove("active");
            }
        }
    }
    document.addEventListener('scroll', callbackFunc, true);


    const test = document.querySelectorAll(".parent");
    for(let i=0;i<test.length;i++){
      test[i].addEventListener("mouseover", function(e){
        test[i].childNodes[3].classList.add("d-flex","flex-column","align-items-center","justify-content-center");
      });
    
      test[i].addEventListener("mouseout", function(e){
        test[i].childNodes[3].classList.remove("d-flex","flex-column","align-items-center","justify-content-center");
      });
    }
})();
 