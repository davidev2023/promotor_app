
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
'Setembro', 'Otubro', 'Novembro', 'Dezembro'] 


let data = new Date();
let diaNumero = data.getDay();
let dia = data.getDate();
let mes = meses[data.getMonth()];
let ano = data.getFullYear();

let ativo = document.querySelector(".semana li:nth-child("+diaNumero+")")
ativo.classList.add('atual');


let h1 = document.createElement('h1');
h1.innerHTML = dia;
ativo.appendChild(h1);

let h2 = document.createElement('h2');
h2.innerHTML = mes;
ativo.appendChild(h2);

let h3 = document.createElement('h3');
h3.innerHTML = ano;
ativo.appendChild(h3);