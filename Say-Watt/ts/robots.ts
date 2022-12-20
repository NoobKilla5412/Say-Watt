// @ts-ignore
const content: HTMLDivElement = document.getElementById('content');
fetch('/json/robots.json')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element: { type: string; content: string }) => {
      content.innerHTML += `<${element.type}>${element.content || ''}</${element.type}>`;
    });
  });
