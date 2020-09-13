

## BACKEND DEMO CODE

## Ejecutar la puesta en marcha de una imagen

1. Teniendo el *nombre* o *id* de la imagen docker, ejecute el siguiente comando
    ```
    docker run -p 3000:3000 <image_name>
    ```
2. Debera aparecer en consola el siguiente mensaje `app running on port. 3000`.

## Realizar consultas a la *API*

1. Teniendo el servicio en marcha puede realizar consultas mediante peticiones GET y POST a la dirección
*http://localhost:3000/api*.
2. Al ejecutar el comando `curl -X GET 'http://localhost:3000/api`, obtendra un texto de verificacion de health check de la api, similar a
`Health Check Api`.
3. Al ejecutar el comando `curl -X GET 'http://localhost:3000/api/jeyson'`, obtendra el parametro que esta enviando
como respuesta, en este caso `jeyson`.
4. Al ejecutar el comando `curl -X POST 'http://localhost:3000/api' -H 'Content-Type: application/json' -d '{"text": "jeyson"}'`

## Realizar consultas a la *API* mediante cliente

1. Verificar que cuenta con la aplicacion node.js instalado mediante `node -v`, de lo contrario instalar.

2. Estando en el directorio raiz ejecutar el comando
    ```
    node client.js "<string>"
    ```
## Realizar prueba unitarias

1. Verificar que cuenta con la aplicacion mocha instalada mediante `mocha --version`, de lo contario instalar mediante el comando
`npm install -g mocha`
2. Estando en el directorio raiz ejecutar el comando `mocha`.