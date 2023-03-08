export interface usersProps {
  
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
  updated_at: Date;

 }

export default  class Users {

  private props: usersProps;


  get id() { 
    return this.props.id;
  }

  
  get name() { 
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }
  
  get password() {
    return this.props.password;
  }
  
  get role() { 
    return this.props.role;
  }
  

  get created_at() {
    return this.props.created_at;
  }

  get updated_at() {  
    return this.props.updated_at;
  }

  
  public set name(name: string) {
    this.props.name = name;
  }
  
  public set email(email: string) {
    this.props.email = email;
  }
  
  public set password(password: string) { 
    this.props.password = password;
  }
  

  public set role(role: string) { 
    this.props.role = role;
  }

  public set created_at(created_at: Date) { 
    this.props.created_at = created_at;
  }

  public set updated_at(updated_at: Date) { 
    this.props.updated_at = updated_at;
  }

  


constructor(props: usersProps) {
    this.props = props;
  }

}