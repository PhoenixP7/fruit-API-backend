
const express = require("express");
const cors = require("cors"); //Another example of middleware is the cors middleware, which is used to enable Cross-Origin Resource Sharing (CORS) in our API. CORS is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. By using the cors middleware, we can allow our API to be accessed from different domains, which is useful when we want to allow clients from different origins to access our API.
const app = express();
const fruits = require("./routes/fruits");

app.get('/', (req, res) => {
    res.send("Hello from the Fruit API");
});

app.use(cors()); // This line of code is used to enable Cross-Origin Resource Sharing (CORS) in our API. CORS is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. By using the cors middleware, we can allow our API to be accessed from different domains, which is useful when we want to allow clients from different origins to access our API.
app.use(express.json()); // This line of code is used to parse incoming JSON requests and make the data available in the req.body property of the request object. It is a built-in middleware function in Express that parses incoming requests with JSON payloads and is based on the body-parser module. By using this middleware, we can easily access the data sent in the request body when handling POST requests to create new fruits in our API.
app.use("/fruits", fruits); // This line of code tells the Express application to use the fruits router for any requests that start with "/fruits". So, when a request is made to "/fruits", it will be handled by the routes defined in the fruits router.
// http://localhost:3000/fruits will trigger the index function in the fruits controller, which will return a list of fruits from the Fruit model.

module.exports = app;