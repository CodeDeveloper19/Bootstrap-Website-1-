document.getElementById("date-button").addEventListener("click", () => {
    let jmediaquery = window.matchMedia( "(max-width: 900px)" )
    if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-row") {
        document.getElementById("header").classList.replace("flex-row", "flex-column")
        console.log(document.getElementById("date").classList)
    }
    else if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-column") {
        document.getElementById("header").classList.replace("flex-column", "flex-row")
        console.log(document.getElementById("date").classList)
}
})


document.getElementById("navbar-header-button").addEventListener("click", () => {
    let jmediaquery = window.matchMedia( "(max-width: 900px)" )
    if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-row") {
        document.getElementById("header").classList.replace("flex-row", "flex-column")
    }
    else if (jmediaquery.matches && document.getElementById("header").classList[5] == "flex-column") {
        document.getElementById("header").classList.replace("flex-column", "flex-row")
}
})
