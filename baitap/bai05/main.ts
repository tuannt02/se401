// Adapter interface for assets and intellectual properties
interface AssetAdapter {
  getName(): string;
  getCode(): string;
  getOwnershipDate(): Date;
  getDepreciationRate(): number;
  getNetValue(year: number): number;
}

// Concrete class for assets (e.g., vehicles, real estate, production lines)
class Asset implements AssetAdapter {
  constructor(
    public name: string,
    public code: string,
    public ownershipDate: Date,
    public value: number,
    public depreciationRate: number
  ) {}

  getName(): string {
    return this.name;
  }

  getCode(): string {
    return this.code;
  }

  getOwnershipDate(): Date {
    return this.ownershipDate;
  }

  getDepreciationRate(): number {
    return this.depreciationRate;
  }

  getNetValue(year: number): number {
    const yearsOwned = year - this.ownershipDate.getFullYear();
    const depreciationFactor = Math.pow(
      1 - this.depreciationRate / 100,
      yearsOwned
    );
    return this.value * depreciationFactor;
  }
}

// Concrete class for intellectual properties (SHTT)
class IntellectualProperty implements AssetAdapter {
  constructor(
    public name: string,
    public author: string,
    public publishYear: number,
    public influenceScore: number
  ) {}

  getCode(): string {
    // Generate a unique code based on name and author (for demonstration purposes)
    return `${this.name.substr(0, 3)}_${this.author.substr(0, 3)}`;
  }

  getName(): string {
    return this.name;
  }

  getOwnershipDate(): Date {
    return new Date(this.publishYear, 0, 1);
  }

  getDepreciationRate(): number {
    return 0; // Intellectual properties do not depreciate
  }

  getNetValue(year: number): number {
    // Calculate value based on influence score and years since publication
    const yearsSincePublication = year - this.publishYear;
    return this.influenceScore * 10000000 * yearsSincePublication;
  }

  // Additional method specific to SHTT
  getInfluenceScore(): number {
    return this.influenceScore;
  }
}

// Adapter for intellectual properties to fit into the AssetAdapter interface
class IntellectualPropertyAdapter implements AssetAdapter {
  private intellectualProperty: IntellectualProperty;

  constructor(intellectualProperty: IntellectualProperty) {
    this.intellectualProperty = intellectualProperty;
  }

  getName(): string {
    return this.intellectualProperty.getName();
  }

  getCode(): string {
    return this.intellectualProperty.getCode();
  }

  getOwnershipDate(): Date {
    return this.intellectualProperty.getOwnershipDate();
  }

  getDepreciationRate(): number {
    return this.intellectualProperty.getDepreciationRate();
  }

  getNetValue(year: number): number {
    return this.intellectualProperty.getNetValue(year);
  }

  // Additional method specific to SHTT
  getInfluenceScore(): number {
    return this.intellectualProperty.getInfluenceScore();
  }
}

// Client code
const assets: AssetAdapter[] = [
  new Asset("Car", "A001", new Date(2020, 0, 1), 50000, 5),
  new Asset("Building", "B001", new Date(2015, 0, 1), 150000, 2),
  new Asset("Production Line", "P001", new Date(2018, 0, 1), 120000, 8),
  new IntellectualProperty("Patent", "John Doe", 2010, 90),
  new IntellectualProperty("Trademark", "Jane Smith", 2015, 80),
];

// Output the list of assets
console.log("List of Assets:");
for (const asset of assets) {
  console.log(`- ${asset.getName()} (${asset.getCode()})`);
}

// Output the total value of assets and intellectual properties at year X
const yearX = 2022;
let totalValue = 0;
for (const asset of assets) {
  totalValue += asset.getNetValue(yearX);
}
console.log(
  `Total value of assets and intellectual properties at year ${yearX}: ${totalValue} VND`
);

// Output the highest valued asset or intellectual property
let highestValue = 0;
let highestValueAsset: AssetAdapter | null = null;
for (const asset of assets) {
  const assetValue = asset.getNetValue(yearX);
  if (assetValue > highestValue) {
    highestValue = assetValue;
    highestValueAsset = asset;
  }
}

if (highestValueAsset) {
  console.log(
    `The highest valued asset or intellectual property is: ${highestValueAsset.getName()} (${highestValueAsset.getCode()})`
  );
}
