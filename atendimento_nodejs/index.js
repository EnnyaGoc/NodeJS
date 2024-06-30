const express = require('express');     //importando express
const app = express();                  //criando uma instancia do app express
const port = 3000;                      //definindo a porta

app.listen(port, (error) => {           //Este trecho inicia o servidor Express para escutar na porta especificada (port). Quando o servidor é iniciado, ele executa uma função de callback.
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Subiu show");

});