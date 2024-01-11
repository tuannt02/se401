/**
 * Mẫu Factory Method
 * Author: Nguyễn Thái Tuấn
 */

// Step 1: Tạo interface cho các dịch vụ
interface Service {
  calculateFee(): number;
}

// Step 2: Triển khai các lớp cụ thể cho từng loại dịch vụ
class LaundryService implements Service {
  private unitPrice: number;
  private weight: number;

  constructor(unitPrice: number, weight: number) {
    this.unitPrice = unitPrice;
    this.weight = weight;
  }

  calculateFee(): number {
    return this.unitPrice * this.weight;
  }
}

class PrintingService implements Service {
  private pageCount: number;
  private unitPrice: number;

  constructor(pageCount: number, unitPrice: number) {
    this.pageCount = pageCount;
    this.unitPrice = unitPrice;
  }

  calculateFee(): number {
    return this.pageCount * this.unitPrice;
  }
}

class RentalService implements Service {
  private hoursRented: number;
  private hourlyRate: number;

  constructor(hoursRented: number, hourlyRate: number) {
    this.hoursRented = hoursRented;
    this.hourlyRate = hourlyRate;
  }

  calculateFee(): number {
    return this.hoursRented * this.hourlyRate;
  }
}

// Step 3: Mẫu Factory Method
class ServiceFactory {
  static createService(serviceType: string, options: any): Service | null {
    switch (serviceType.toLowerCase()) {
      case "laundry":
        return new LaundryService(options.unitPrice, options.weight);
      case "printing":
        return new PrintingService(options.pageCount, options.unitPrice);
      case "rental":
        return new RentalService(options.hoursRented, options.hourlyRate);
      default:
        return null;
    }
  }
}

// Step 4: Sử dụng Factory Method để tạo đối tượng dịch vụ
const serviceType = "laundry";
const serviceOptions = { unitPrice: 5, weight: 10 };

const serviceInstance = ServiceFactory.createService(
  serviceType,
  serviceOptions
);

if (serviceInstance) {
  const fee = serviceInstance.calculateFee();
  console.log(`Fee for ${serviceType} service: ${fee}`);
} else {
  console.log("Invalid service type.");
}
