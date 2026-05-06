//How to run the programme
const app = require("./app");
// To run the program, you need to have Node.js installed on your computer. Once you have Node.js installed, you can navigate to the directory where your app.js file is located in the terminal and run the command "node app.js". This will start the server and you should see a message in the terminal that says "Server is running on port 3000". You can then open your web browser and go to "http://localhost:3000" to see the message "Hello from the Fruit API". You can also go to "http://localhost:3000/fruits" to see a list of all the fruits in the fruits.json file, and "http://localhost:3000/fruits/:name" (replace :name with the name of a fruit) to see a specific fruit by name.
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// app.get('/', (req, res) => { // Defines a route handler for the root URL ('/'). When a GET request is made to this URL, the callback function is executed. The GET function says, when a client makes a HTTP request to /, execute the following code. The callback function takes two parameters: 'req' (the request object) and 'res' (the response object). 
// // App is the instance of the Express application created earlier. The get method is used to define a route handler for GET requests to the specified path ('/').
//   res.send({"Welcome": "Hello World!"}); // The response object carries a function called send. Sends the response back to the client. 
//   // This line returns a JSON object with a key "Welcome" and a value "Hello World!" when the root URL is accessed. The send function can send various types of responses, including strings, objects, or even files. In this case, it sends a JSON object as the response to the client.
// });

// app.get('/name', (req, res) => {
//     res.send(req.query) // This line sends the request parameters back to the client as the response. The req.params object contains any route parameters defined in the URL. However, since there are no route parameters defined in this case, it will return an empty object. If you want to send a specific response, you can modify this line to send a custom message or data instead.
// ; // Defines another route handler for the URL '/name'. When a GET request is made to this URL, the callback function is executed.
// });

// app.get('/param/:id', (req, res) => {
//     res.send(req.params) // This line sends the route parameters back to the client as the response. The req.params object contains any route parameters defined in the URL. In this case, it will return an object with a key 'id' and its corresponding value when a GET request is made to '/param/:id'. For example, if a request is made to '/param/123', the response will be { "id": "123" }.
// });

// app.get('/query', (req, res) => {
//     res.send(req.query) // This line sends the query parameters back to the client as the response. The req.query object contains any query parameters included in the URL. For example, if a request is made to '/query?name=John&age=30', the response will be { "name": "John", "age": "30" }.
// });

// app.listen(port, () => { // 'listening for requests on the specified port'. Starts the Express server on the specified port.
//   console.log(`Simple API listening on port ${port}`); // Logs a message to the console indicating that the server is running and provides the URL where it can be accessed. The backticks (`) are used for template literals, allowing the inclusion of the 'port' variable in the string.
// });

