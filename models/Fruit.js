const fruits = require("../fruits.json");
// The fruits variable is assigned the value of the fruits.json file, which is an array of fruit objects. Each fruit object contains properties such as genus, name, id, family, order, and nutritions. 
class Fruit { // The Fruit class is defined to represent a fruit object. It has a constructor that takes a fruit object as an argument and assigns its properties to the instance of the Fruit class. It also has two static methods, showAll and show, that return all fruits and a specific fruit by name, respectively.
    constructor(fruit) { //A constructur is a special method for creating and initializing an object created with a class. It is called when a new instance of the class is created.
        this.genus = fruit.genus; // The constructor takes a fruit object as an argument and assigns its properties to the instance of the Fruit class.
        this.name = fruit.name; 
        this.id = fruit.id; // The id property is assigned the value of fruit.id, which is the unique identifier for each fruit in the fruits array.
        this.family = fruit.family; // The family property is assigned the value of fruit.family, which is the family to which the fruit belongs.
        this.order = fruit.order; // pre-defined property of the fruit object that is assigned to the order property of the Fruit class instance.   
        this.nutritions = fruit.nutritions; // a pre-defined property is in visual studio code is already defined in the fruits.json file and is assigned to the nutritions property of the Fruit class instance. The nutritions property is an object that contains the nutritional information for the fruit, such as carbohydrates, protein, fat, calories, and sugar.
    }

    static showAll() { // The showAll method is a static method that returns an array of all the fruits in the fruits array.
        return fruits.map(fruit => new Fruit(fruit)); //object.property
        // map method creates a new array populated with the results of calling a provided function on every element in the calling array. 
        // In this case, we are creating a new Fruit object for each fruit in the fruits array and returning an array of Fruit objects.
    }

    static show(name) { // The show method takes a name as an argument and searches for a fruit with that name in the fruits array.
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name);
    // The find method returns the value of the first element in the provided array that satisfies the provided testing function.
        if(fruit) { 
            throw "The fruit already exists";// "if there is an object". If the find method returns a fruit, we check if it exists. If it does, we create a new Fruit object and return it. If it doesn't, we throw an error message saying that the fruit doesn't exist.
            return new Fruit(fruit); // If the fruit is found, we create a new Fruit object and return it.
        } else {
            newFruit["id"]= fruits.length + 1; // If the fruit is not found, we create a new fruit object with the name property set to the name argument and the id property set to the length of the fruits array plus one (to ensure a unique id). We then add this new fruit object to the fruits array and return it.
            fruits.push(newFruit);
            return new Fruit(newFruit);
        }
    }

    static create(data) { // The create method is a static method that takes a fruit object as an argument and creates a new fruit object in the fruits array. This method is not implemented in this code, but it can be implemented to allow users to add new fruits to the fruits array.
        const newFruit = data;
        console.log(data); // This line logs the new fruit object to the console. In a real implementation, this method would add the new fruit object to the fruits array and return the newly created fruit object.
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === data.name.toLowerCase());
    
        if (fruit) { 
            throw "The fruit already exists";
        } else {
            newFruit.id = fruits.length + 1; // This line assigns a new id to the new fruit object. The id is set to the length of the fruits array plus one, which ensures that each new fruit object has a unique id.
            fruits.push(newFruit); // This line adds the new fruit object to the fruits array. In a real implementation, this method would also save the updated fruits array to the fruits.json file to persist the changes.
            return new Fruit(newFruit);
        }
    };

    update(data){
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase());

        if(updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit);
        } else {
            throw "Fruit not found"
        }
    }

    destroy() {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        
        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit) // The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present. In this case, we are finding the index of the deleted fruit in the fruits array.
            fruits.splice(index, 1) // The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. In this case, we are removing one element at the index of the deleted fruit from the fruits array.
        } else {
            throw "Fruit not found"
        }
    }
}


module.exports = Fruit;