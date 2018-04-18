# Meal-Maker

Have you ever gone to a restaurant that has a big menu selection, and struggled to decide what to order? This little app helps you make your decision by randomizing your order selection. Every time you eat, it's a surprise!

## Javascript OBJECTS - What I learned:

* Javascript **objects** are containers that can store data and functions. _Unlike an array_, the data stored in an **object** is not ordered. We can only access and objects data by calling it's associated _key_.

* Create a Javascript object using _key/value_ pairs, and the following notation:

```
let house = {
 city: 'Costa Mesa',
 houseNumber: 3209,
 accupants: ['Will Taormina', 'Yvonne Nguyen', 'Kimmie Nguyen', 'Marin Rommie', 'Koda Bear', 'Bianca Nguyen'],
 hasRoof: true
}
```

* Accessing object properties:

  * the most common way to access a key's value, is to use _.dot notation,_ which references the 'key', and returns the 'value'.

  ```
  console.log(house.hasRoof)
  ```

  // returns true

  * another way to access a key's value is through bracket notation. The syntax looks like this:

  ```
  console.log(house['city'])
  ```

  * one advantage that 'bracket' object notation has over '.dot' object notation is that you can use an abstracted variable to select the key's of an object. Then, as the variable changes, so too does the selected key.

* Adding a property to an object:

  * objects are considered mutable, which means they are _changeable_ after they are created.

    * in fact, even if you save an object as a const, you can still access and change the key / value pairs inside of it.

  * We can attach a new key/value pairs, or edit existing pairs, using both .dot and bracket notation.

  ```
  house['rooms'] = ['Living Room', 'Dining Room', 'Garage', 'Bedrooms', 'Kitchen'];
  // or
  house.rooms = ['Living Room', 'Dining Room', 'Garage', 'Bedrooms', 'Kitchen'];
  ```

* When objects have key / function pairs, we call them a **method.**

```
let house = {
 city: 'Costa Mesa',
 houseNumber: 3209,
 accupants: ['Will Taormina', 'Yvonne Nguyen', 'Kimmie Nguyen', 'Marin Rommie', 'Koda Bear',
 rooms: ['Living Room', 'Dining Room', 'Garage', 'Bedrooms', 'Kitchen'],'Bianca Nguyen'],
 hasRoof: true,
 dogsAreAwake: true,
// new key/function pair added to the house object here:
sleepRitual() {
 if(this.dogsAreAwake){
return 'lock all the doors, turn off all the lights. Go to sleep.';
} else {
 return `We'll just open the blinds for now, because the dogs are still asleep.`
}
}
wakeRitual: () {return 'take dogs out for a pee, open the blinds, and put fresh water for the dogs, feed dogs breakfast'
}
console.log(house.sleepRitual());
```

* The **this** keyword:

  * the 'this' keyword allows us to use existing key's as parameters in functions within the same object. With the use of the 'this' keyword, these parameters would return as 'undefined', and out of scope for the object.
  * the 'this' keyword refers to the object we call it inside.

- Object Design Patterns - Getters and Setters:

  * Getter and Setter methods get and set the properties of an object. The advantages of getters and setters are:

    * you can check if new data is valid, before setting a property

      * did the new developer working on this project input the correct data type? If not, this validation will catch the error.

    * you can perform an action on the data while you are getting or setting a property

    * you can control which properties can be set and retrieved.

  * Once you set the properties of an object, you need a way to get them. **Getters** are used to get the property values inside of an object.
    * We call the getter method the same way we would access a property, without a method.

* Representing real world objects in Javascript.

* Accessing object properties

* Accessing objects methods

* Creating object 'getter' and 'setter' methods

Final Thought: A javascript object help describe and represent real items, in the real world. A real-world object like a house or a car, has a tremendous amount of data associated with how you might describe it. In other words, the house object has many layers of data associated with it. Understanding this data structure complexity is an important first step in being able to use Javascript to improve the world around you.
