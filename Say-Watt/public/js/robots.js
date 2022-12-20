"use strict";
// @ts-ignore
const content = document.getElementById('content');
fetch('/json/robots.json')
    .then((data) => data.json())
    .then((data) => {
    data.forEach((element) => {
        content.innerHTML += `<${element.type}>${element.content || ''}</${element.type}>`;
    });
});
