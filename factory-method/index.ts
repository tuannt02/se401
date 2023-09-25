interface TaxMethod {
  assessableIncome: number;
  calculateTax(): number;
}

class VietNamTaxMethod implements TaxMethod {
  assessableIncome: number;

  constructor(assessableIncome: number) {
    this.assessableIncome = assessableIncome;
  }

  public calculateTax() {
    const base = this.assessableIncome;

    if (base <= 5000000) {
      return Math.round(0.05 * base);
    } else if (base <= 10000000) {
      return Math.round(0.1 * base) + 250000;
    } else if (base <= 18000000) {
      return Math.round(0.15 * base) + 750000;
    } else if (base <= 32000000) {
      return Math.round(0.2 * base) + 1950000;
    } else if (base <= 52000000) {
      return Math.round(0.25 * base) + 4750000;
    } else if (base <= 80000000) {
      return Math.round(0.3 * base) + 9750000;
    } else {
      return Math.round(0.35 * base) + 18150000;
    }
  }
}

class ChinaTaxMethod implements TaxMethod {
  assessableIncome: number;

  constructor(assessableIncome: number) {
    this.assessableIncome = assessableIncome;
  }

  public calculateTax() {
    const base = this.assessableIncome;

    if (base <= 10010000) {
      return Math.round((1 - 0.97) * base);
    } else if (base <= 40035000) {
      return Math.round((1 - 0.9) * base);
    } else if (base <= 83407407) {
      return Math.round((1 - 0.8) * base);
    } else if (base <= 116770370) {
      return Math.round((1 - 0.75) * base);
    } else if (base <= 183496296) {
      return Math.round((1 - 0.7) * base);
    } else if (base <= 266903704) {
      return Math.round((1 - 0.65) * base);
    } else {
      return Math.round((1 - 0.55) * base);
    }
  }
}

abstract class Tax {
  assessableIncome: number;

  constructor(assessableIncome: number) {
    this.assessableIncome = assessableIncome;
  }

  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public abstract taxFactoryMethod(): TaxMethod;

  public print(): string {
    const taxMethod = this.taxFactoryMethod();
    return `Tax: ${taxMethod.calculateTax()}`;
  }
}

class VietNamTax extends Tax {
  constructor(assessableIncome: number) {
    super(assessableIncome);
  }

  public taxFactoryMethod(): TaxMethod {
    return new VietNamTaxMethod(this.assessableIncome);
  }
}

class ChinaTax extends Tax {
  constructor(assessableIncome: number) {
    super(assessableIncome);
  }

  public taxFactoryMethod(): TaxMethod {
    return new ChinaTaxMethod(this.assessableIncome);
  }
}

function clientCode(creator: Tax) {
  console.log(creator.print());
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log("App: Launched with the VietNamTax.");
clientCode(new VietNamTax(11000000));
console.log("");

console.log("App: Launched with the ChinaTax.");
clientCode(new ChinaTax(11000000));
