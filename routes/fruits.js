const express = require("express")
// the express module is a web application framework for Node.js that provides a set of features for building web applications. It allows us to create routes, handle requests and responses, and manage middleware. In this file, we are using the express module to create a router that will handle the routes for the fruits resource. The router will be used to define the routes for getting all fruits and getting a specific fruit by name. Finally, the router is exported to be used in the main application file (app.js) where it will be mounted on a specific path (e.g., "/fruits").
const router = express.Router();
// a router is a mini express application that can be used to handle routes for a specific resource. In this case, we are creating a router for the fruits resource. The router will be used to define the routes for the fruits resource, which will allow us to get all fruits and get a specific fruit by name. Finally, the router is exported to be used in the main application file (app.js) where it will be mounted on a specific path (e.g., "/fruits").
// mounting on a specific path means that all the routes defined in this router will be prefixed with the path that we mount it on. For example, if we mount this router on "/fruits", then the route to get all fruits will be "/fruits/" and the route to get a specific fruit by name will be "/fruits/:name". This allows us to organize our routes and keep them modular.
const fruits = require("../controllers/fruits");
// The express module is imported and the router is created using the express.Router() method. The fruits controller is also imported to handle the request and response for the routes defined in this file. The router will be used to define the routes for the fruits resource, which will allow us to get all fruits and get a specific fruit by name. Finally, the router is exported to be used in the main application file (app.js) where it will be mounted on a specific path (e.g., "/fruits").

router.get("/", fruits.index)
// The router.get method is used to define a route for the GET HTTP method. The first argument is the path for the route, which in this case is the root path ("/"). The second argument is the controller function that will handle the request and response for this route, which in this case is the index function from the fruits controller. When a GET request is made to the root path, the index function will be called and it will return an array of all the fruits in the fruits.json file.
router.get("/:name", fruits.show)
// /:name is a route parameter that allows us to capture the value of the name parameter in the request. When a GET request is made to this route with a specific name (e.g., "/fruits/apple"), the show function from the fruits controller will be called and it will return the fruit object that matches the name parameter in the request. If there is no fruit that matches the name parameter, it will return an error message saying that the fruit doesn't exist.
router.post("/", fruits.create)
// The router.post method is used to define a route for the POST HTTP method. The first argument is the path for the route, which in this case is the root path ("/"). The second argument is the controller function that will handle the request and response for this route, which in this case is the create function from the fruits controller. When a POST request is made to the root path, the create function will be called and it will create a new fruit object based on the data provided in the request body.
router.patch("/:name", fruits.update)

// router.delete("/:name", fruits.destroy);
// // The router.delete method is used to define a route for the DELETE HTTP method. The first argument is the path for the route, which in this case is "/:name". The second argument is the controller function that will handle the request and response for this route, which in this case is the destroy function from the fruits controller. 
// // When a DELETE request is made to this route with a specific name (e.g., "/fruits/apple"), the destroy function will be called and it will delete the fruit object that matches the name parameter in the request. If there is no fruit that matches the name parameter, it will return an error message saying that the fruit doesn't exist.

router.delete("/:name", fruits.destroy)

module.exports = router