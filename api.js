var axios = requiere('axios');

function salvar(nome, dia){
    axios.post('https://sheetdb.io/api/v1/wizows9elba4z',{
        "data": {
            "nome": dia
        }
    },)
}

salvar("maicon", "x-burguer");
console.log("OK")