const Fruit = require("../models/Fruit");

const index = async (req, res) => {
  try {
    // The index function is an asynchronous function that handles the request and response for the route. It uses a try-catch block to handle any errors that may occur during the execution of the function.
    const fruits = await Fruit.showAll();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: err });
    // we use a 500 instead of a 404 because the error is a server error, not a client error. The error message is sent in the response as an object with an error property that contains the error message.
    // we know it is a server error because the index function is trying to access the showAll method of the Fruit class, which is a server-side operation. If there is an error in the showAll method, it will throw an error that will be caught in the catch block and sent in the response with a 500 status code.
  }
}; //const can hold a function

const show = async (req, res) => {
  const name = req.params.name.toLowerCase(); // The show function is an asynchronous function that handles the request and response for the route. It uses a try-catch block to handle any errors that may occur during the execution of the function.
  // The name variable is assigned the value of the name parameter in the request, which is converted to lowercase using the toLowerCase method.
  try {
    const fruit = await Fruit.show(name);
    // The fruit variable is assigned the value of the show method of the Fruit class, which takes the name as an argument and returns a fruit object if it exists. If the fruit doesn't exist, it throws an error message.
    // This is a static function that is called on the Fruit class itself, rather than on an instance of the Fruit class. The difference between a static and object function is that a static function is called on the class itself, while an object function is called on an instance of the class. In this case, the show method is a static function because it is called on the Fruit class and not on an instance of the Fruit class.
    // The show method is an asynchronous function that returns a promise. We use the await keyword to wait for the promise to resolve and return the fruit object. If the promise is rejected, it will throw an error that will be caught in the catch block.
    // an instance of the fruit class is a specific fruit object that is created using the constructor of the Fruit class. For example, if we have a fruit object with the name "apple", we can create an instance of the Fruit class by calling new Fruit(apple). This will create a new Fruit object with the properties of the apple fruit object.
    res.status(200).send(fruit);
  } catch (err) {
    res.status(404).send({ error: err });
    // we use a 404 instead of a 500 because the error is not a server error, but rather a client error because the client is requesting a fruit that doesn't exist. The error message is sent in the response as an object with an error property that contains the error message.
    // we know this is not a server error because the show method of the Fruit class is working as expected, but the client is requesting a fruit that doesn't exist, which is a client error. If there is an error in the show method, it will throw an error that will be caught in the catch block and sent in the response with a 404 status code.
  }
};

const create = async (req, res) => {
  try {
    const newFruit = await Fruit.create(req.body);
    res.status(201).send(newFruit); // 200 is used for successful GET requests, while 201 is used for successful POST requests that create a new resource. In this case, since we are creating a new fruit, we use a 201 status code to indicate that the resource was successfully created.
  } catch (err) {
    res.status(409).send({ error: err }); // we use a 409 status code to indicate a conflict error, which occurs when there is a conflict with the current state of the resource. In this case, if the fruit already exists, it will throw an error that will be caught in the catch block and sent in the response with a 409 status code to indicate that there is a conflict with the existing resource.
  }
};

const update = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.show(name);
    const result = await fruit.update(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const destroy = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.show(name);
    const result = await fruit.destroy();
    res.sendStatus(204); // 204 is used to indicate that the request was successful and there is no content to send in the response. In this case, since we are deleting a fruit, we use a 204 status code to indicate that the resource was successfully deleted and there is no content to send back to the client.
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
