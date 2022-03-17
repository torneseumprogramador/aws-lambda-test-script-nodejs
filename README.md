# No console da AWS criar a função Lambda.
### No campo: HandlerInfo: colocar a chamada a função criada no node.js "index.executa_teste", index = nome d arquivo, executa_teste nome da função
```node
exports.executa_teste = async (parametro) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! ------ '  + JSON.stringify(parametro)),
    };
    return response;
};
```


# Ao enviar uma mensagem por SNS chegará algo neste formado por parametro
```json
{
   "Records":[
      {
         "EventSource":"aws:sns",
         "EventVersion":"1.0",
         "EventSubscriptionArn":"arn:aws:sns:sa-east-1:763818760783:chamar-lambda:a539f45c-102b-4cba-a873-0d5fb1f0540b",
         "Sns":{
            "Type":"Notification",
            "MessageId":"e1d5a962-777e-54ef-83e4-f3cfca12c807",
            "TopicArn":"arn:aws:sns:sa-east-1:763818760783:chamar-lambda",
            "Subject":"teste",
            "Message":"{key1: \"Danilo\"}",
            "Timestamp":"2022-03-17T22:50:20.206Z",
            "SignatureVersion":"1",
            "Signature":"--------------",
            "SigningCertUrl":"https://sns.sa-east-1.amazonaws.com/SimpleNotificationService-7ff5318490ec183fbaddaa2a969abfda.pem",
            "UnsubscribeUrl":"https://sns.sa-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:sa-east-1:763818760783:chamar-lambda:a539f45c-102b-4cba-a873-0d5fb1f0540b",
            "MessageAttributes":{
               
            }
         }
      }
   ]
}
```

# Para chamar uma função lambda via http, utilzar o API Gateway via trigger
https://stackoverflow.com/questions/29877220/invoke-a-aws-lambda-function-by-a-http-request
- Criar uma API gateway - https://sa-east-1.console.aws.amazon.com/apigateway/home?region=sa-east-1
- Criar uma trigger no lambda
- Chamar a url que mostrará na trigger, exemplo: https://is2ajtx985.execute-api.sa-east-1.amazonaws.com/prod/poc_lambda?nome=danilo
- Pegar os parametros no queryStringParameters que vem ao chamar a url
