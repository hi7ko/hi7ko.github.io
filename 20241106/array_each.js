let answer=document.querySelector('#answer');

//while
let i=0;
let html='';
while (i<fruitNames.length) {
    html+='<li>${fruitNames[i]}</li>';
    i++;
}
answer.innerHTML='<ul>${html}</ul>';

