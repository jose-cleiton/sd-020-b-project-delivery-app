import { expect, test } from 'vitest';

import SalesProducts from './Salesproducts';

test('create a SalesProduct', () => {
  const salesProduct = new SalesProducts({
    id: 1,
    sale_id: 2,
    product_id: 3,
    quantity: 4,
  });

  expect(salesProduct.id).toBe(1);
  expect(salesProduct.sale_id).toBe(2);
  expect(salesProduct.product_id).toBe(3);
  expect(salesProduct.quantity).toBe(4);

  salesProduct.sale_id = 5;
  expect(salesProduct.sale_id).toBe(5);

  salesProduct.product_id = 6;
  expect(salesProduct.product_id).toBe(6);

  salesProduct.quantity = 7;
  expect(salesProduct.quantity).toBe(7);

  expect(salesProduct).toEqual(salesProduct);
});
