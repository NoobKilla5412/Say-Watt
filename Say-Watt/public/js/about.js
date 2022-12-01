const members = document.getElementById('members');
fetch('/json/members.json')
  .then(data => data.json())
  .then((data) => {
    data.forEach(element => {
      days.innerHTML += `<div class="jumbotron"><p>${element.name}</p><p>${element.bio}</p></div>`;
    });
  });