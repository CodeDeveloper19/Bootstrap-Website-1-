let isDateButtonOn;
let isHeaderButtonOn;
let isNavFooterButtonOn;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

document.getElementById("date-button").addEventListener("click", () => {
    counter1++;
    let jmediaquery = window.matchMedia( "(max-width: 990px)" );
    if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-row" && !isHeaderButtonOn) {
        document.getElementById("header").classList.replace("flex-row", "flex-column");
        isDateButtonOn = true;
    }
    else if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-column" && !isHeaderButtonOn) {
        document.getElementById("header").classList.replace("flex-column", "flex-row");
        isDateButtonOn = false;
    }
    else if (counter1 % 2 == 1) {
        isDateButtonOn = true;
    } 
    else if (counter1 % 2 == 0) {
        isDateButtonOn = false;
    }
})

document.getElementById("navbar-header-button").addEventListener("click", () => {
    counter2++;
    let jmediaquery = window.matchMedia( "(max-width: 990px)" );
    if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-row" && !isDateButtonOn) {
        document.getElementById("header").classList.replace("flex-row", "flex-column");
        isHeaderButtonOn = true;
    }
    else if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-column" && !isDateButtonOn) {
        document.getElementById("header").classList.replace("flex-column", "flex-row");
        isHeaderButtonOn = false;
    }
    else if (counter2 % 2 == 1) {
        isHeaderButtonOn = true;
    } 
    else if (counter2 % 2 == 0) {
        isHeaderButtonOn = false;
    }
})

document.getElementById("navbar-footer-button").addEventListener("click", () => {
    counter3++;
    let jmediaquery = window.matchMedia( "(max-width: 575px)" );
    if (counter3 % 2 == 1) {
        isNavFooterButtonOn = true;
    } 
    else if (counter3 % 2 == 0) {
        isNavFooterButtonOn = false;
    }

    if (jmediaquery.matches && isNavFooterButtonOn){
        document.querySelector("footer").classList.replace("flex-row", "flex-column");
        document.getElementById("copyright").classList.replace("justify-content-center", "justify-content-left");
        document.getElementById("navbar-footer-button").style.justifyContent = "left";
    }
    else if (jmediaquery.matches && !isNavFooterButtonOn){
        document.querySelector("footer").classList.replace("flex-column", "flex-row");
        document.getElementById("copyright").classList.replace("justify-content-left", "justify-content-center"); 
    }
})


setInterval(()=>{
    let jmediaquery = window.matchMedia( "(min-width: 575px)" );
    if (jmediaquery.matches){
        document.querySelector("footer").classList.replace("flex-column", "flex-row");
    }
}, 10)
