// ! se tiene que usar el type module en package.json

// * read a Api
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
