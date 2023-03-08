
export interface SalesProps {
  id: number;
  user_id: number;
  seller_id: number;
  total_price: number;
  delivery_address: string;
  delivery_number: string;
  sale_date: Date;
  status: string;
}

export default class Sales {
  private props: SalesProps;

  get id() {
    return this.props.id;
  }

  get user_id() {
    return this.props.user_id;
  }

  get seller_id() {
    return this.props.seller_id;
  }

  get total_price() {
    return this.props.total_price;
  }

  get delivery_address() {
    return this.props.delivery_address;
  }

  get delivery_number() {
    return this.props.delivery_number;
  }

  get sale_date() {
    return this.props.sale_date;
  }

  get status() {
    return this.props.status;
  }

  public set user_id(user_id: number) {
    this.props.user_id = user_id;
  }

  public set seller_id(seller_id: number) {
    this.props.seller_id = seller_id;
  }

  public set total_price(total_price: number) {
    this.props.total_price = total_price;
  }

  public set delivery_address(delivery_address: string) {
    this.props.delivery_address = delivery_address;
  }

  public set delivery_number(delivery_number: string) {
    this.props.delivery_number = delivery_number;
  }

  public set sale_date(sale_date: Date) {
    this.props.sale_date = sale_date;
  }

  public set status(status: string) {
    this.props.status = status;
  }

  constructor(props: SalesProps) {
    this.props = props;
  }
}
