$(function () {
    document.querySelector('.amazing-work-panel').addEventListener('click', buttonTap);

    function buttonTap(event) {
       // console.log(event);
        //берем атрибут каждой кнопки из data-work;
        //ставим условие при нажатии на кнопки, а не на целый блок;
        if (event.target.className == 'amazing-work-buttons') {
            let tabsButton = event.target.getAttribute('data-work');

            //Убирает и добавляет клас avtive в коде
            let activeTab = document.getElementsByClassName('amazing-work-buttons');
            for (let i = 0; i < activeTab.length; i++) {
                activeTab[i].classList.remove('active');
            }
            event.target.classList.add('active');

            if (tabsButton == 0) {
                //console.log("0");
                $("div[class='graphic-design']").show();
                $("div[class='web-design']").show();
                $("div[class='landing-pages']").show();
                $("div[class='wordpress']").show();

            } else if (tabsButton == 1) {
               // console.log("1");
                $("div[class='graphic-design']").show();
                $("div[class='web-design']").hide();
                $("div[class='landing-pages']").hide();
                $("div[class='wordpress']").hide();
            } else if (tabsButton == 2) {
                //console.log("2");
                $("div[class='web-design']").show();
                $("div[class='graphic-design']").hide();
                $("div[class='landing-pages']").hide();
                $("div[class='wordpress']").hide();
            } else if (tabsButton == 3) {
                //console.log("3");
                $("div[class='web-design']").hide();
                $("div[class='graphic-design']").hide();
                $("div[class='landing-pages']").show();
                $("div[class='wordpress']").hide();
            } else {
                //console.log("4");
                $("div[class='web-design']").hide();
                $("div[class='graphic-design']").hide();
                $("div[class='landing-pages']").hide();
                $("div[class='wordpress']").show();
            }
        }
    }
})
