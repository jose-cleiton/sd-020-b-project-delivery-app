import { expect, test } from 'vitest';

import Product, { ProductProps } from './Products';

test('create a product', () => {
  const props: ProductProps = {
    id: 1,
    name: 'Product name',
    price: 10.0,
    url_image: 'http://example.com/image.png',
  };
  const product = new Product(props);

  expect(product.id).toBe(1);
  expect(product.name).toBe('Product name');
  expect(product.price).toBe(10.0);
  expect(product.url_image).toBe('http://example.com/image.png');
  expect(product).toEqual(product);
});
