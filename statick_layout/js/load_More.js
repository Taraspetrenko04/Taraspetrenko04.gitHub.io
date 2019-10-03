             $(function () {
                 document.querySelector(".bottom-load-more").addEventListener('click', clickButton);

                 function clickButton(event) {
                     let animationView = $('.floatingBarsG');
                     animationView[0].style.display = "block";

                     let buttonSelect = $(".bottom-load-more");
                     buttonSelect[0].style.display = "none";

                     let blockSelect = $(".pictures-two");

                     setTimeout(function () {
                         blockSelect[0].style.display = "flex";
                         animationView[0].style.display = "none";
                         //buttonSelect[0].style.display="flex";
                     }, 2500)
                 }
             })
