# No console da AWS criar a função Lambda.
### No campo: HandlerInfo: colocar a chamada a função criada no node.js "index.executa_teste"
```node
exports.executa_teste = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! - ' + "Key1: " + event.key1 + " ----- "  + JSON.stringify(event)),
    };
    return response;
};
```
