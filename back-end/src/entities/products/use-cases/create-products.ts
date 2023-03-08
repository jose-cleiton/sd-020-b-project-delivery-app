import Products, { ProductProps } from "../domain/Products";

interface CreateProductRequest {
  name: string;
  price: number;
  url_image: string;
}

type CreateProductResponse = Products;

export class CreateProduct {
  async execute({
    name,
    price,
    url_image,
  }: CreateProductRequest): Promise<Products> {
    const defaultProps: ProductProps = {
      id: 0,
      name: "",
      price: 0,
      url_image: "",
     
    };

    const productProps = Object.assign(defaultProps, {
      name,
      price,
      url_image,
    });

    const product = new Products(productProps);
    return product;
  }
}
