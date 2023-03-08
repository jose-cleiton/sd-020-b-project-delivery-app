// import Sales, { SalesProps } from "../domain/Sales";
// import { CreateProduct } from "../../products/use-cases/create-products";

// interface CreateSaleRequest {
//   user_id: number;
//   products: {
//     product_id: number;
//     quantity: number;
//   }[];
//   delivery_address: string;
//   delivery_number: string;
// }

// type CreateSaleResponse = Sales;

// export class CreateSale {
//   async execute({
//     user_id,
//     products,
//     delivery_address,
//     delivery_number,
//   }: CreateSaleRequest): Promise<Sales> {
//     const defaultProps: SalesProps = {
//       id: 0,
//       user_id,
//       seller_id: 0,
//       total_price: 0,
//       delivery_address,
//       delivery_number,
//       sale_date: new Date(),
//       status: "em processamento",
//     };

//     const saleProps = Object.assign(defaultProps);

//     const sale = new Sales(saleProps);

//     let totalPrice = 0;
//     for (const { product_id, quantity } of products) {
//       const createProduct = new CreateProduct();
//       const product = await createProduct.execute({ productId: product_id });


//       totalPrice += product.price * quantity;

//       sale.addProduct(product_id, quantity);
//     }

//     sale.setTotalPrice(totalPrice);

//     return sale;
//   }
// }
