// constructor(order: Order, payment: Payment, delivery: Delivery) {
//   this.order = order.getOrder();
//   this.payment = payment.getPayment();
//   this.delivery = delivery.getDelivery();
// }

interface IOrder {}
interface IPayment {}
class PaymentSession {}
interface IDelivery {}

class Order implements IOrder {
  public getOrder(): Order {
    console.log('This is order instance');
    const order = new Order();
    return order;
  }

  public async createOrder(): Promise<IOrder> {
    console.log('Create new order success');
    return new Order();
  }
}

class Payment implements IPayment {
  public getPayment(): Payment {
    console.log('This is payment instance');
    const payment = new Payment();
    return payment;
  }

  public async initSessionPayment(order: IOrder): Promise<PaymentSession> {
    console.log('New session created: ', order);
    const payment = new PaymentSession();
    return payment;
  }
}

class Delivery implements IDelivery {
  public getDelivery(): Delivery {
    console.log('This is delivery instance');
    const payment = new Delivery();
    return payment;
  }

  public async delivering(paySession: PaymentSession) {
    console.log('Delivering....: ', paySession);
  }
}

// Facade
class ShopFacade {
  private order: Order;
  private payment: Payment;
  private delivery: Delivery;

  constructor() {
    this.order = new Order();
    this.payment = new Payment();
    this.delivery = new Delivery();
  }

  public async initOrder() {
    // Create new order
    const newOrder = await this.order.createOrder();

    // Init payment session
    const paymentSes = await this.payment.initSessionPayment(newOrder);

    // Delivery item
    await this.delivery.delivering(paymentSes);
  }
}

class App {
  public static main() {
    const shopFacade = new ShopFacade();

    // Init order
    shopFacade.initOrder();
  }
}

const app = new App();
app;
