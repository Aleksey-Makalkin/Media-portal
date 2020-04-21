var menuButton = document.querySelector(".nav .nav-touch");
var menuHidden = false;



menuButton.onclick = function() {
    if (!menuHidden && window.innerWidth >= 715) {
        document.querySelector(".menu-bar").style.width = "25%";
        document.querySelector(".menu-bar").style.marginRight = "30px";

        menuButton.style.backgroundColor = "#D8E1E9";

        menuHidden = true;

    } else if (!menuHidden && window.innerWidth < 715) {
        document.querySelector(".menu-bar").style.float = "none";
        document.querySelector(".menu-bar").style.width = "100%";
        document.querySelector(".menu-bar").style.marginTop = "0px";

        menuButton.style.width = "100%";
        menuButton.style.backgroundColor = "#D8E1E9";

        menuHidden = true;

    } else {
        document.querySelector(".menu-bar").style.float = "left";
        document.querySelector(".menu-bar").style.width = "0%";
        document.querySelector(".menu-bar").style.marginTop = "-30px";
        document.querySelector(".menu-bar").style.marginRight = "0px";

        menuButton.style.width = "70px";
        menuButton.style.backgroundColor = "#f2f2f2";

        menuHidden = false;

    }
}
