// @ts-ignore
const days: HTMLDivElement = document.getElementById('days');
fetch('/json/log.json')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element: { date: string; content: string }) => {
      days.innerHTML += `<div class="jumbotron"><p>${element.date}</p><p>${element.content}</p></div>`;
    });
  });
