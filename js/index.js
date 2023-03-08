// Mi key private 'c4462d01e384b356028fe2bc22a80a52f80e4b4b'
// Mi public key '89373a9dd7268dbad9ff805d258784a0'
const apikey = "89373a9dd7268dbad9ff805d258784a0";
const ts = "06/03/2023, 21:44:14";
const hash = "ef58540f976cf2e2fa2dd3c250f33bb7";
const url =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=89373a9dd7268dbad9ff805d258784a0&ts=06/03/2023, 21:44:14&hash=ef58540f976cf2e2fa2dd3c250f33bb7";
const main = document.getElementById("main");

fetch(url)
  .then((response) => response.json())
  .then((response) => printData(response.data.results))

  .catch((err) => console.log(" Se ha producido un error"));

const printData = (personajes) => {
  //console.log(personajes);

  let str = '<div class="row">';
  let i = 0;
  let name = [];
  let img = [];
  let bio = [];

  for (i = 0; i < personajes.length; i++) {
    name[i] = personajes[i].name;
    img[i] =
      personajes[i].thumbnail.path + "." + personajes[i].thumbnail.extension;
    bio[i] = personajes[i].description;

    if (!name[i]) {
      name[i] = " Perdon tu supererue no tiene nombre ";
    }
    if (!img[i]) {
      img[i] = " Perdon tu supererue no tiene img ";
    }
    if (!bio[i]) {
      bio[i] = " Perdon tu supererue no tiene bio ";
    }

    str =
      str +
      `
    <div class="col-md-4">
    <div class="card" style="width: 18rem;">
      <img src="${img[i]}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${name[i]}</h5>
        <p class="card-text">${bio[i]}</p>
           </div>   
        </div>
        </div>
       
        `;
  }

  str = str + "</div";
  main.innerHTML = str;
};
