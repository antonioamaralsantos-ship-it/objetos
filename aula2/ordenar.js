const clientes = require("./clientes.json");

function ordenar(lista,propriedade){
    const resultados = lista.sort((a, b) => {
        if (a[propiedade] < b[propiedade]){
            return -1;
        }
        if (a[propiedade] < b[propiedade]){
            return 1;
        }
        return 0;
    });
    return resultados;
}