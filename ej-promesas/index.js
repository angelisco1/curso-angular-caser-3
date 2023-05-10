// const fs = require('fs')
const fs = require('fs/promises')

console.log('INICIO')

// fs.readFile('files/1.txt', (err, data) => {
//   console.log('Data 1: ', data.toString())

//   fs.readFile('files/2.txt', (err, data) => {
//     console.log('Data 2: ', data.toString())

//     fs.readFile('files/3.txt', (err, data) => {
//       console.log('Data 3: ', data.toString())

//       console.log('FIN')
//     })

//   })
// })

fs.readFile('files/1.txt')
  .then((data) => {
    console.log('Data 1: ', data.toString())

    return fs.readFile('files/2.txt')
  })
  .then((data2) => {
    console.log('Data 2: ', data2.toString())

    return fs.readFile('files/3.txt')
  })
  .then((data3) => {
    console.log('Data 3: ', data3.toString())

    console.log('FIN')
  })
  .catch(err => {
    console.log('error')
  })

// fs.readFile('files/2.txt')
//   .then((data) => {
//     console.log('Data 2: ', data.toString())
//   })
//   .catch(err => {
//     console.log('error')
//   })

// fs.readFile('files/3.txt')
//   .then((data) => {
//     console.log('Data 3: ', data.toString())
//   })
//   .catch(err => {
//     console.log('error')
//   })
