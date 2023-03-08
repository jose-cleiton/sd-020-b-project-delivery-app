
import { expect, test } from 'vitest';

import Sales, { SalesProps } from './Sales';

test('create a sale', () => {
  const saleProps: SalesProps = {
    id: 1,
    user_id: 1,
    seller_id: 1,
    total_price: 50,
    delivery_address: 'Rua A',
    delivery_number: '123',
    sale_date: new Date(),
    status: 'in_progress',
  };

  const sale = new Sales(saleProps);

  expect(sale.id).toBe(1);
  expect(sale.user_id).toBe(1);
  expect(sale.seller_id).toBe(1);
  expect(sale.total_price).toBe(50);
  expect(sale.delivery_address).toBe('Rua A');
  expect(sale.delivery_number).toBe('123');
  expect(sale.sale_date).toBeInstanceOf(Date);
  expect(sale.status).toBe('in_progress');
  expect(sale).toEqual(sale);
});
