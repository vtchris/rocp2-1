const countries = document.getElementById("countries");
const countriesArray = [];
const countryBtn = document.getElementById("findCountryBtn");
const countryInput = document.getElementById("countryInput");
const main = document.getElementById("main");

countryBtn.addEventListener("click", (e) => {
  e.preventDefault();

 let country = countriesArray.find(c => c.name.toLowerCase() == countryInput.value.toLowerCase());

  if(country){
    
    sessionStorage.setItem('country',country.name)
    displayData(country);
  }else{
    alert("Country not found, please try again.");
  }
});

function displayData(country) {
  console.log(country);

  const flag = country.flag;
  const name = country.name;
  const nativeName = country.nativeName;
  const capital = country.capital;
  const pop = country.population;
  const currency = country.currencies[0].name;
  const currSymbol = country.currencies[0].symbol || '';
 
  //Add LIs with country data
  let ul = document.getElementById('stats');
  ul.innerHTML = '';
  ul.appendChild(createLI(`<label>Country:</label><strong>${name}</strong> <em class="text-muted">${nativeName}</em>`));
  ul.appendChild(createLI(`<label>Flag:</label><img src='${flag}' alt='flag' style='border:1px solid gray;width:75px' />`));
  ul.appendChild(createLI(`<label>Capital:</label><strong>${capital}</strong>`));
  ul.appendChild(createLI(`<label>Population:</label><strong>${pop}</strong>`));
  ul.appendChild(createLI(`<label>Currency:</label><strong>${currency}</strong> <em class='text-muted'>${currSymbol}</em>`));
  
}

let createLI = str => {
  let li = document.createElement('li');
  li.innerHTML = str;
  return li;
}

countryInput.addEventListener("keyup", (e) => {

  if (countryInput.value.length > 3) {
   
    getCountryList(countryInput.value);
  }
});

let appendOptions = (list) => {
    // Clear pre-existing list
    countries.innerHTML = "";

    list = list.sort((a, b) => (a.name > b.name ? 1 : -1));
    countriesArray.length = 0;

    // Create a new options list for drop-down
    list.forEach((e) => {
        countriesArray.push(e)
        let option = document.createElement('option');
        option.value = e.name;
        countries.appendChild(option);
    });

    console.log(countriesArray)
};
