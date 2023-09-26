// Abstract product classes
abstract class Strap {
  void use();
}

abstract class Clothing {
  void wear();
}

abstract class Notebook {
  void write();
}

// Concrete product classes
class LeatherStrap implements Strap {
  @override
  void use() {
    print("Using leather strap");
  }
}

class Uniform implements Clothing {
  @override
  void wear() {
    print("Wearing uniform");
  }
}

class SpiralNotebook implements Notebook {
  @override
  void write() {
    print("Writing in a spiral notebook");
  }
}

// Abstract factory interface
abstract class StudentFactory {
  Strap createStrap();
  Clothing createClothing();
  Notebook createNotebook();
}

// Concrete factories
class FreshmanFactory implements StudentFactory {
  @override
  Strap createStrap() {
    return LeatherStrap();
  }

  @override
  Clothing createClothing() {
    return Uniform();
  }

  @override
  Notebook createNotebook() {
    return SpiralNotebook();
  }
}

class HonoredStudentFactory implements StudentFactory {
  @override
  Strap createStrap() {
    return LeatherStrap();
  }

  @override
  Clothing createClothing() {
    return Uniform();
  }

  @override
  Notebook createNotebook() {
    return SpiralNotebook();
  }
}

class GraduateStudentFactory implements StudentFactory {
  @override
  Strap createStrap() {
    return LeatherStrap();
  }

  @override
  Clothing createClothing() {
    return Uniform();
  }

  @override
  Notebook createNotebook() {
    return SpiralNotebook();
  }
}

void main() {
  // Create factories
  StudentFactory freshmanFactory = FreshmanFactory();
  StudentFactory honoredStudentFactory = HonoredStudentFactory();
  StudentFactory graduateStudentFactory = GraduateStudentFactory();

  // Create products
  Strap strap1 = freshmanFactory.createStrap();
  Clothing clothing1 = freshmanFactory.createClothing();
  Notebook notebook1 = freshmanFactory.createNotebook();

  Strap strap2 = honoredStudentFactory.createStrap();
  Clothing clothing2 = honoredStudentFactory.createClothing();
  Notebook notebook2 = honoredStudentFactory.createNotebook();

  Strap strap3 = graduateStudentFactory.createStrap();
  Clothing clothing3 = graduateStudentFactory.createClothing();
  Notebook notebook3 = graduateStudentFactory.createNotebook();

  // Use the products
  strap1.use();
  clothing1.wear();
  notebook1.write();

  strap2.use();
  clothing2.wear();
  notebook2.write();

  strap3.use();
  clothing3.wear();
  notebook3.write();
}
