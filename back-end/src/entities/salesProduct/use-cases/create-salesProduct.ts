import SalesProducts, { SalesProductsProps } from "../domain/Salesproducts";

interface CreateSalesProductRequest {
  sale_id: number;
  product_id: number;
  quantity: number;
}

type CreateSalesProductResponse = SalesProducts;

export class CreateSalesProduct {
  async execute({
    sale_id,
    product_id,
    quantity,
  }: CreateSalesProductRequest): Promise<SalesProducts> {
    const defaultProps: SalesProductsProps = {
      id: 0,
      sale_id,
      product_id,
      quantity,
    };

    const salesProduct = new SalesProducts(defaultProps);
    return salesProduct;
  }
}
