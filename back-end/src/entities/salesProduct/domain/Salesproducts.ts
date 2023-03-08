export interface SalesProductsProps {
  id: number;
  sale_id: number;
  product_id: number;
  quantity: number;
}

export default class SalesProducts {
  private props: SalesProductsProps;

  get id() {
    return this.props.id;
  }

  get sale_id() {
    return this.props.sale_id;
  }

  get product_id() {
    return this.props.product_id;
  }

  get quantity() {
    return this.props.quantity;
  }

  public set sale_id(sale_id: number) {
    this.props.sale_id = sale_id;
  }

  public set product_id(product_id: number) {
    this.props.product_id = product_id;
  }

  public set quantity(quantity: number) {
    this.props.quantity = quantity;
  }

  constructor(props: SalesProductsProps) {
    this.props = props;
  }
}
