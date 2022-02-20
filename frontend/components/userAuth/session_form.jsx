import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoAccount = this.handleDemoAccount.bind(this);
  }

  handleDemoAccount(e){
    e.preventDefault();
    const demo = {
      username: "Happy Camper", 
      password: "password1"
    }
    this.props.processFormDemo(demo);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className='session-form___errors'>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  linkSwap(){
    const { pathname } = this.props.location;
    
    if (pathname === '/login' || pathname === '/signup') {
      return (
        <div className='auth-alternate-link'>{this.props.navLink}</div>
      )
    } else {
        return(
          <div className='auth-alternate-link' onClick={() => this.props.switchModal(this.props.modalType)}>{this.props.navLink}</div>
        )
      }
  }

  render() {
    if (this.props.currentUser) {
      this.props.closeModal()
    }
    return (
      <div className="login-background">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <p className='login-head'>{this.props.welcome}</p>
            <p className='login-sub-head'>{this.props.subline}</p>
            <hr />
            <button className="session-submit" id="sess-button" onClick={this.handleDemoAccount}>Demo Account</button>

            <div>{this.renderErrors()}</div>

                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder='Enter username'
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder='Enter password'
                />
              <br/>

              <input className="session-submit" id="sess-button" type="submit" value={this.props.formType} onClick={this.handleSubmit}/>
              
              <br /><br />
              <hr className='hr-last' />
              {this.linkSwap()}
              {/* <div className='auth-alternate-link' onClick={() => this.props.switchModal(this.props.modalType)}>{this.props.navLink}</div> */}
          </form>
        </div>
      </div>
      
    );
  }
}

export default SessionForm;
