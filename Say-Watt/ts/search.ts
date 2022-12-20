const urlParams = new URLSearchParams(window.location.search);
// @ts-ignore
const query: string = urlParams.get('q');
const lowerQuery = query!.toLowerCase() || query;
const newTitle = document.createElement('title');
newTitle.innerHTML = query ? `${query} &#8211; Say Watt` : 'Search &#8211; Say Watt';
document.head.append(newTitle);
// @ts-ignore
const queryInput: HTMLInputElement = document.getElementById('q');
queryInput.value = query;
// @ts-ignore
const results: HTMLDivElement = document.getElementById('results');
var numResults = 0;
type Page = {
  title: string;
  description: string;
  content: string;
  link: string;
};
type Data = {
  title: string;
  description: string;
  content: string;
  link: string;
}[];
function checkData(element: Page) {
  return element.title.toLowerCase().includes(lowerQuery) || element.description.toLowerCase().includes(lowerQuery) || element.content.toLowerCase().includes(lowerQuery);
}
if (query.length >= 1) {
  fetch('/json/pages.json')
    .then((data) => data.json())
    .then((data: Data) => {
      data.forEach((element) => {
        if (checkData(element)) {
          results.innerHTML += `<div class="jumbotron"><h3><a href="${element.link}">${element.title}</a></h3><p>${element.description}</p></div>`;
          numResults++;
        }
        document.getElementById('title')!.innerHTML = `${numResults} result${numResults > 1 ? 's' : ''} for ${query}:`;
      });
    });
} else {
  document.write('The search query must be at least 1 character.');
  throw new Error('The search query must be at least 1 character.');
}
