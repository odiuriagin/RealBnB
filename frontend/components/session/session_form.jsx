import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
 }

 handleChange(field) {
   return (e) => this.setState({
     [field]: e.target.value
   });
 }

 componentDidUpdate(oldProps) {
   if (oldProps.formType !== this.props.formType) {
     this.props.clearErrors();
   }
 }

 componentWillUnmount(oldProps) {
    this.props.clearErrors();
 }

 render() {
   
   const errors = this.props.errors.map( (err, i) => {
     return(<li key={i}><span className="error-logo"><img src={window.error}/></span>{err}</li>)
   });

   let name = <div></div>;

   if (this.props.formType === "Sign Up") {
     name = <input type="text" placeholder="Name" onChange={this.handleChange("name")} value={this.state.name}/>;
   }

   return (
     <div className="splash-form-container">
       <a onClick={this.props.closeModal} className="close-icon"><img src={window.close_icon}/></a>
       <div>
         <ul className="errors">{errors}</ul>
       </div>
       <form className="splash-form" onSubmit={this.handleSubmit}>
         {name}
         <input type="email" placeholder="Email Address" onChange={this.handleChange("email")} value={this.state.email}/>
         <input type="password" placeholder="Password" onChange={this.handleChange("password")} value={this.state.password}/>
         <button className="splash-submit">{this.props.formType}</button>
         {this.props.otherForm}
       </form>
     </div>
   )
 }
}

export default withRouter(SessionForm);
