import React, {Component} from 'react';
import '../App.css';
class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: '',
      password_confirmation: ''
    };
  }

  handlePhoneNum = (phoneNumber) => {
    const maxNr = /^[0-9\b]*$/;
    if (phoneNumber === '' || maxNr.test(phoneNumber.target.value)) {
      this.setState({
        phone_number: phoneNumber.target.value
      })
    }
  }

  onChange = (e) => {
    if (e.target) {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.password_confirmation) {
      const data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        password: this.state.password
      }
      this.props.signUp(data);
    }
  }

  render() {
    const {first_name, last_name, email, phone_number, password, password_confirmation} = this.state;
    const FirstName = (
      <label>
        <input type        = "text"
               name        = "first_name"
               value       = {first_name}
               onChange    = {this.onChange}
               placeholder = "First Name"
               required    = "required" />

      </label>
    )
    const LastName = (
      <label>
        <input type        = "text"
               name        = "last_name"
               value       = {last_name}
               onChange    = {this.onChange}
               placeholder = "Last Name" />
      </label>
    )
    const PhoneNumber = (
      <label>
        <input type        = "text"
               name        = "phone_number"
               value       = {phone_number}
               placeholder = "Phone Number"
               onChange    = {this.handlePhoneNum} />
      </label>
    )
    const Email = (
      <label>
        <input type        = "email"
               name        = "email"
               value       = {email}
               onChange    = {this.onChange}
               placeholder = "Email Address" />
      </label>
    )
    const Password = (
      <label>
        <input type        = "password"
               name        = "password"
               value       = {password}
               placeholder = "Password"
               onChange    = {this.onChange} />
      </label>
    )
    const PasswordConfirm = (
      <label>
        <input type        = "password"
               name        = "password_confirmation"
               value       = {password_confirmation}
               placeholder = "Password Confirmation"
               onChange    = {this.onChange} />
      </label>
    )
    return (
      <div>
        <form onSubmit = {this.handleFormSubmit}>
          {FirstName}<br/>
          {LastName}<br/>
          {PhoneNumber}<br/>
          {Email}<br/>
          {Password}<br/>
          {PasswordConfirm}<br/>
          <input className="btnfrm btn waves-effect waves-light btn-flat modal-action modal-close" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default register;