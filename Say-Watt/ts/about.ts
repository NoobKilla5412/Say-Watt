// @ts-ignore
const members: HTMLDivElement = document.getElementById('members');
fetch('/json/members.json')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element: { name: string; bio: string }) => {
      members.innerHTML += `<div class="jumbotron">
           <p>
             ${element.name}
           </p>
           <p>
             ${element.bio}
           </p>
           <p>
             <img src="/image/members/${element.name.toLowerCase().replace(/\s/, '-')}.png" height="150px"/>
           </p>
         </div>`;
    });
  });
