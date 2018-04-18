let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {},
  set appetizers(appetizerIn) {},

  get mains() {},
  set mains(mainsIn) {},

  get desserts() {},
  set desserts(dessertsIn) {},

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);

    // I need help understanding what the above statement is doing. How can we use bracket notation here for [courseName]?
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    // Did I use the right input here for the return? Should it be '[randomIndex]' or '[courseName]' or even somthing else?
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and ${
      dessert.name
    }. The total price is ${totalPrice}.`;
  }
};

menu.addDishToCourse("appetizers", "ceaser salad", 4.95);
menu.addDishToCourse("appetizers", "garden salad", 4.5);
menu.addDishToCourse("mains", "steak and potatoes", 12.75);
menu.addDishToCourse("mains", "salmon and rice", 12.0);
menu.addDishToCourse("desserts", "chocolate ice cream", 6);
menu.addDishToCourse("desserts", "chocolate cake", 7);

let meal = menu.generateRandomMeal();
console.log(meal);
