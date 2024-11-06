let answer = document.querySelector('#answer');

// 最終的に作りたいHTML
// <ul>
//   <li>りんご</li>
//   <li>みかん</li>
//   <li>いちご</li>
//   <li>いちじく</li>
// </ul>

// // while
 let i = 0;
 let html = '';
while(i < fruitNames.length) {
   html += `<li>${fruitNames[i]}</li>`;
   i++;
 }
 answer.innerHTML = `<ul>${html}</ul>`;

// // for
// let i = 0;
// let html = '';
// for(let i = 0;i < fruitNames.length;i++){
//   html += `<li>${fruitNames[i]}</li>`;
// }
// answer.innerHTML = `<ul>${html}</ul>`;

// Array.forEach
let html = '';
fruitNames.forEach(function(fruitName){
    html += `<li>${fruitName}</li>`;
});
answer.innerHTML = `<ul>${html}</ul>`;