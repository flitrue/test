// 实现一个函数 find(obj, str)，满足: 如var obj = {a:{b:{c:1}}}; find(obj,'a.b.c') //1 find(obj,'a.d.c') //undefined
function find(obj, str) {
  let arr = str.split('.');
  let newObj = obj
  for(let i = 0; i < arr.length; i++) {
    let value = newObj[arr[i]];
    if (value) {
      newObj = value;
    } else {
      return undefined
    }
  }
  return newObj
}

var obj = {a:{b:{c:1}}};
console.log(find(obj,'a..b'));