"use strict";
// function offCanvasColorNormal() {
//   document.getElementById('offcanvas').style.background = '#470047';
//   for (let a = 0; a < navLinks.length; a++) {
//     navLinks[a].style.color = 'white';
//   }
//   for (let b = 0; b < dropdownMenus.length; b++) {
//     dropdownMenus[b].style.background = '#470047';
//   }
//   for (let c = 0; c < dropdownItems.length; c++) {
//     dropdownItems[c].style.color = 'white';
//   }
//   if (document.getElementsByClassName('dropdown-item active')[0]) {
//     document.getElementsByClassName('dropdown-item active')[0].style.color = 'yellow';
//   }
//   document.getElementsByClassName('nav-link active')[0].style.color = 'yellow';
//   document.getElementsByClassName('navbar-brand')[1].style.color = 'white';
// }
var docName = "";
document.addEventListener("DOMContentLoaded", (e) => {
    fetch("/navbar.html")
        .then((data) => data.text())
        .then((data) => {
        document.getElementById("navbarDiv").innerHTML = data;
        const links = document.getElementsByClassName("nav-link");
        for (var link of links) {
            if (docName == link.innerHTML)
                link.className = "nav-link active";
        }
    });
    fetch("/footer.html")
        .then((data) => data.text())
        .then((data) => {
        document.getElementById("footer").innerHTML = data;
    });
});
