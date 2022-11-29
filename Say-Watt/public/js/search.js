const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('q');
const lowerQuery = query.toLowerCase();
document.getElementById('q').value = query;
const newTitle = document.createElement('title');
newTitle.innerHTML = query + ' &#8211; Say Watt';
document.head.append(newTitle);
const results = document.getElementById('results');
fetch('/json/pages.json')
  .then(data => data.json())
  .then((data) => {
    data.forEach(element => {
      if (element.title.toLowerCase().includes(lowerQuery) || element.description.toLowerCase().includes(lowerQuery) || element.content.toLowerCase().includes(lowerQuery)) {
        results.innerHTML += `<div class="jumbotron"><h3><a href="${element.link}">${element.title}</a></h3><p>${element.description}</p></div>`;
      }
    });
  });