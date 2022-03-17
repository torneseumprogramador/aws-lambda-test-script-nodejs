const axios = require('axios')

const func = async (params) => {
    let result = await axios.get('https://www.torneseumprogramador.com.br/?q=' + escape(JSON.stringify(params)))
      
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! - ' + "Key1: " + params.key1 + " ----- "  + JSON.stringify(params)),
        statusHttpCall: result.status
    };
    
    console.log(result.status);
    
    return response;
};

func({key1: "Danilo"});

exports.executa_teste = func;
