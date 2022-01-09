import React from 'react';
import Footer from '../footer/footer'

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
      username: "test_user1", 
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
    // this.props.processForm(user).then(() => this.props.history.replace('/'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <p className='login-head'>{this.props.welcome}</p>
            <p className='login-sub-head'>{this.props.subline}</p>
            <hr />
            {/* Please {this.props.formType} or {this.props.navLink} */}
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

              <input className="session-submit" id="sess-button" type="submit" value={this.props.formType} />
              
              <br /><br />
              <hr />
              
          </form>
        </div>
      </div>
      
    );
  }
}

export default SessionForm;
