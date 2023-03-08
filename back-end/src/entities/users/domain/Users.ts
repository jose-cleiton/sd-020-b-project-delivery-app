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


constructor(props: usersProps) {
    this.props = props;
  }

}