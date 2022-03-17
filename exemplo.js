exports.executa_teste = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! - ' + "Key1: " + event.key1 + " ----- "  + JSON.stringify(event)),
    };
    return response;
};

// no lambda, colocar HandlerInfo: index.executa_teste
