// Кнопка для вызова меню
var menuButton = document.querySelector(".nav .nav-touch");

// Меню
var menu = document.querySelector(".menu-bar");

// false - меню скрыто    true - меню активно
var menuHidden = false;




// Функция описывает вызов меню. Так же меняет некоторые стили меню, что бы оно было адаптированно под маленькие экраны
menuButton.onclick = function() {
    if (!menuHidden && window.innerWidth >= 715) {
        menu.style.width = "25%";
        menu.style.marginRight = "30px";

        menuButton.style.backgroundColor = "#D8E1E9";

        menuHidden = true;

    } else if (!menuHidden && window.innerWidth < 715) {
        menu.style.float = "none";
        menu.style.width = "100%";
        menu.style.marginTop = "0px";

        menuButton.style.width = "100%";
        menuButton.style.backgroundColor = "#D8E1E9";

        menuHidden = true;

    } else {
        menu.style.float = "left";
        menu.style.width = "0%";
        menu.style.marginTop = "-30px";
        menu.style.marginRight = "0px";

        menuButton.style.width = "70px";
        menuButton.style.backgroundColor = "#f2f2f2";

        menuHidden = false;

    }
}




// Делаем так, что бы при изменении ширины экрана с уже открытым меню, оно так же подстраивалось под ширину экрана
window.onresize = function() {
    if (menuHidden && window.innerWidth >= 715) {
        menu.style.float = "left";
        menu.style.width = "25%";
        menu.style.marginTop = "-30px";
        menu.style.marginRight = "30px";
        menuButton.style.width = "70px";

    } else if (menuHidden && window.innerWidth < 715) {
        menu.style.float = "none";
        menu.style.width = "100%";
        menu.style.marginTop = "0px";
        menu.style.marginRight = "0px";
        menuButton.style.width = "100%";

    }
}
