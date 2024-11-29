const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // le hace falta un punto para trabajar con la clase
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // hace falta la palabra reservada async ya que esta va con el await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`)// Mandamos a traer la informacion pero que hacemos con la informacion
  .then((response)=>{ 
    return response.json(); // transformamos la informacion en JSON para trabajar con ella
  }).then((data)=>{ //Guardamos la informacion para trabajar con ella
    console.log(data); // Incorporamos este console log para que nos de la informacion
    localStorage.setItem("name",data.name);
    localStorage.setItem("blog",data.blog);
    localStorage.setItem("location",data.location);
  })
   // Mandamos a traer la informacion y mandamos cambiar los datos en el html
  $n.textContent = localStorage.getItem("name");
  $b.textContent = localStorage.getItem("blog");
  $l.textContent = localStorage.getItem("location");
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`// no estaba bien nombrada la variable
}
displayUser('stolinski').catch(handleError);