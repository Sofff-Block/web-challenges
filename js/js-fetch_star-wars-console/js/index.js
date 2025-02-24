console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const data = await fetch(url); // Daten abrufen
  const dataobj = await data.json();
  console.log(dataobj);
  console.log(dataobj.results[2].eye_color);

  //console.log(dataobj.results[6].name); // nur auf Namen zugreifen
}

fetchData();
