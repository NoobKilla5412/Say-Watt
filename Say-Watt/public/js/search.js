const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('q');
const lowerQuery = query.toLowerCase();
if (query.length >= 1) {
  document.getElementById('q').value = query;
  const newTitle = document.createElement('title');
  newTitle.innerHTML = query + ' &#8211; Say Watt';
  document.head.append(newTitle);
  const results = document.getElementById('results');
  var numResults = 0;
  fetch('/json/pages.json')
    .then(data => data.json())
    .then((data) => {
      data.forEach(element => {
        if (element.title.toLowerCase().includes(lowerQuery) || element.description.toLowerCase().includes(lowerQuery) || element.content.toLowerCase().includes(lowerQuery)) {
          results.innerHTML += `<div class="jumbotron"><h3><a href="${element.link}">${element.title}</a></h3><p>${element.description}</p></div>`;
          numResults++;
        }
        document.getElementById('title').innerHTML = `${numResults} result${numResults > 1 ? 's' : ''} for ${query}:`;
      });
    });
} else {
  console.error('The search query must be at least 1 character.');
  document.write('The search query must be at least 1 character.')
}