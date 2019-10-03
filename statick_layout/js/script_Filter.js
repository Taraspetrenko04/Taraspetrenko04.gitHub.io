$(function () {
    document.querySelector('.amazing-work-panel').addEventListener('click', buttonTap);

    function buttonTap(event) {
        /* Добавляем/удаляем клас active на кнопках */
        let activeTab = document.getElementsByClassName('amazing-work-buttons');
            for (let i = 0; i < activeTab.length; i++) {
                activeTab[i].classList.remove('active');
            }
            event.target.classList.add('active');
        /* сортируем картинки в зависимости от их приадлежости к кнопке */
        let category = event.target.getAttribute("data-info");
        let portfolioItems = document.getElementsByClassName("portfolio-item");
        let portfolioItemsCategory = document.getElementsByClassName(category);
        for (let i = 0; i < portfolioItems.length; i++) {
            portfolioItems[i].style.display = "none";
        }

        for (let i = 0; i < portfolioItemsCategory.length; i++) {
            portfolioItemsCategory[i].style.display = "block";
        }
    }
})
