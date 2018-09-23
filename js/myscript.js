function navbarFun() {
    var x = document.getElementById("navjs");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}