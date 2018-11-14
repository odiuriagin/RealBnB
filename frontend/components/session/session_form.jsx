import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }

 handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
 }

 handleChange(field) {
   return (e) => {
     this.setState({[field]: e.target.value});
   }
 }

 render() {
   const errors = this.props.errors.map( (err) => {
     return(<li key={err}>{err}</li>)
   });

   let name = <div></div>;

   if (this.props.formType === "Sign Up") {
     name = <input type="text" onChange={this.handleChange("name")} value={"Full Name"}/>;
   }

   return (
     <div>
       <div>
         <ul>{errors}</ul>
       </div>
       <form onSubmit={this.handleSubmit}>
         {name}
         <input type="text" onChange={this.handleChange("email")} value={"Email"}/>
         <input type="password" onChange={this.handleChange("password")} value={"Password"}/>
         <input type="submit" value={this.props.formType} />
       </form>
     </div>
   )
 }
}

export default withRouter(SessionForm);
