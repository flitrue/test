// const Promise = require('./promise')

// Promise.all = function(iterator) {
//   let count = 0
//   let len = iterator.length
//   let res = []
//   return new Promise((resolve, reject) => {
//     for (let i in iterator) {
//       Promise.resolve(iterator[i]).then((data) => {
//         res[i] = data
//         if(++count === len) {
//           resolve(res)
//         }
//       }).catch(e => {
//         reject(e)
//       })
//     }
//   })
// }

// Promise.race = function(iterator) {
//   return new Promise((resolve, reject) => {
//     for (let p of iterator) {
//       Promise.resolve(p).then(res => {
//         resolve(res)
//       }).catch(e => {
//         reject(e)
//       }) 
//     }
//   })
// }

// var promise1 = Promise.resolve(3);
// var promise2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'foo');
// });
// var promise3 = 42;

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(12333)
  }, 2000)
})

p.then(res => {
  console.log(res)
})