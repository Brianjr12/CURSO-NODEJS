const fs = require('fs');
//* para leer los archivos
// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt', 'utf-8')
// console.log(first);
// console.log(second);

//* para crear un archivo en una ruta
// const descrip = ' y le agrego un texto'
// fs.writeFileSync('./data/third.txt', descrip,{
//   flag: 'a'
// })

// ! usando codigo asincrono
fs.readFile('./data/first.txt','utf-8', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
  });
})