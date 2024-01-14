// Abstract product interface
interface MealItem {
  prepare(): void;
}

// Concrete product: Appetizer
class Appetizer implements MealItem {
  private description: string;

  constructor(description: string) {
      this.description = description;
  }

  prepare(): void {
      console.log(`Preparing appetizer: ${this.description}`);
  }
}

// Concrete product: Main Course
class MainCourse implements MealItem {
  private description: string;

  constructor(description: string) {
      this.description = description;
  }

  prepare(): void {
      console.log(`Preparing main course: ${this.description}`);
  }
}

// Concrete product: Dessert
class Dessert implements MealItem {
  private description: string;

  constructor(description: string) {
      this.description = description;
  }

  prepare(): void {
      console.log(`Preparing dessert: ${this.description}`);
  }
}

// Abstract Factory interface
interface MealFactory {
  createAppetizer(): MealItem;
  createMainCourse(): MealItem;
  createDessert(): MealItem;
}

/// Concrete Factory: VegetarianMealFactory
class VegetarianMealFactory implements MealFactory {
  createAppetizer(): MealItem {
      return new Appetizer("Các hạt< 200gr");
  }

  createMainCourse(): MealItem {
      return new MainCourse("Rau củ quả 500-1000gr");
  }

  createDessert(): MealItem {
      return new Dessert("Trái cây, bánh ngọt 300-500gr");
  }
}


// Concrete Factory: WeightLossMealFactory
class WeightLossMealFactory implements MealFactory {
  createAppetizer(): MealItem {
      return new Appetizer("Salad, chả giò<500gr");
  }

  createMainCourse(): MealItem {
      return new MainCourse("Gạo, thịt, cá, trứng<1000gr");
  }

  createDessert(): MealItem {
      return new Dessert("Trái cây, bánh ngọt, hạt <500gr");
  }
}

// Concrete Factory: HealthCareMealFactory
class HealthCareMealFactory implements MealFactory {
  createAppetizer(): MealItem {
      return new Appetizer("Các hạt, rau củ<300gr");
  }

  createMainCourse(): MealItem {
      return new MainCourse("Gạo lứt, thịt, cá, trừng<700gr");
  }

  createDessert(): MealItem {
      return new Dessert("Các hạt<100gr");
  }
}

// Client code
class Client {
  private mealFactory: MealFactory;

  constructor(mealFactory: MealFactory) {
    this.mealFactory = mealFactory;
  }

  prepareMeal(): void {
    const appetizer = this.mealFactory.createAppetizer();
    const mainCourse = this.mealFactory.createMainCourse();
    const dessert = this.mealFactory.createDessert();

    appetizer.prepare();
    mainCourse.prepare();
    dessert.prepare();
  }
}

// Example usage
console.log("-----Preparing a vegetarian meal:-----");
const vegetarianClient = new Client(new VegetarianMealFactory());
vegetarianClient.prepareMeal();
console.log('--------------------------------------\n');

console.log('-----Preparing a weight loss meal:-----');
const weightLossClient = new Client(new WeightLossMealFactory());
weightLossClient.prepareMeal();
console.log('--------------------------------------\n');

console.log('-----Preparing a health care meal:-----');
const healthCareClient = new Client(new HealthCareMealFactory());
healthCareClient.prepareMeal();
console.log('--------------------------------------\n');
