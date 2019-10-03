      $(function() {
                document.querySelector('.tabs').addEventListener('click', fTabs);
                function fTabs(event) {
                    console.log(event);
                    //срабатывает только при нажатии на кнопки, не на весь блок
                    if (event.target.className == 'tabs-item') {
                        let dataTab = event.target.getAttribute('data-tab');
//создает массив и снимает клас active
                        let tabOff = document.getElementsByClassName('tabs-item');
                        for (let j = 0; j < tabOff.length; j++) {
                            tabOff[j].classList.remove('active');
                        }
//добавляет клас active
                        event.target.classList.add('active');
//создает массив и связывает его с вкладками dataTabs
                        let tabBody = document.getElementsByClassName('tabs-features-itams')
                        for (let i = 0; i < tabBody.length; i++) {
                            if (dataTab == i) {
                                tabBody[i].style.display = 'flex';
                            } else {
                                tabBody[i].style.display = 'none';
                            }
                        }
                    }
                }
            })