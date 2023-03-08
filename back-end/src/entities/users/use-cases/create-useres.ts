import Users, { usersProps } from "../domain/Users";

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

type CreateUserResponse = Users;

export class CreateUser {
  async execute({
    name,
    email,
    password,
  }: CreateUserRequest): Promise<Users> {
    const defaultProps: usersProps = {
      id: 0,
      name: "",
      email: "",
      password: "",
      role: "",
      created_at: new Date(),
      updated_at: new Date(),
    };

    const userProps = Object.assign(defaultProps, {
      name,
      email,
      password,
    });

    const user = new Users(userProps);
    return user;
  }
}
