const members = document.getElementById('members');
fetch('/json/members.json')
  .then(data => data.json())
  .then((data) => {
    data.forEach(element => {
      members.innerHTML += `<div class="jumbotron"><p>${element.name}</p><p>${element.bio}</p><p><img src="image/members/${element.name.toLowerCase()}.png" width="100px"/></p></div>`;
    });
  });