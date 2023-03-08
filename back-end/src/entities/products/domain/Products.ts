export interface ProductProps {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

export default class Product {
  private props: ProductProps;

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get price() {
    return this.props.price;
  }

  get url_image() {
    return this.props.url_image;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public set price(price: number) {
    this.props.price = price;
  }

  public set url_image(url_image: string) {
    this.props.url_image = url_image;
  }

  constructor(props: ProductProps) {
    this.props = props;
  }
}
