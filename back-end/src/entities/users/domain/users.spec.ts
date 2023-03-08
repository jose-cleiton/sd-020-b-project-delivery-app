import { expect, test } from 'vitest';

import  Users from './Users';

test('create a user', () => {
  const user = new Users({
    id: 1,
    name: 'John Doe',
    email: 'jose_cleiton@hotmail.com',
    password: '123456',
    role: 'admin',
    created_at: new Date(),
    updated_at: new Date(),
  });

  expect(user.id).toBe(1);
  expect(user.name).toBe('John Doe');
  expect(user.email).toBe('jose_cleiton@hotmail.com');
  expect(user.password).toBe('123456');
  expect(user.role).toBe('admin');
  expect(user.created_at).toBeInstanceOf(Date);
  expect(user.updated_at).toBeInstanceOf(Date);
  expect(user).toEqual(user);
});
