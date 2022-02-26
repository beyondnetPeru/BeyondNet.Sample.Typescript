class OrderController {
  PUT():
  Createorder(payloadDto: any) {

  }
}

// array articulos / items
const createOrder = (payloadDto: any) => {
  SVGAnimatedNumberList.publish()
}


const createOrderHandler = (payloadDto: any) => {

    const {id, product, quantity, family } = payloadDto;

    if (!orderservice.validate()) throw new OrderException("No hay stock");

    Product.


    const order = Order.Create(id, product, quantity);

}

class SharedEmail {
  Notify(type: string = "email") {
      //Factory, IoC
      notifier.send();
  }
}



export default class Order {
  Id: string;
  Product: string;
  Quantity: number;


  /**
   *
   */
  private constructor(id: string, product: Product, quantity: number) {
    this.Id = id;
    this.Product = product;
    this.Quantity = quantity;


  }

  public static Create(id: string, product: string, quantity: number): Order {
    return new Order(id, product, quantity);
  }


}
