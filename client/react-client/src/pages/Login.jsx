import React from 'react';



class Login extends React.Component {
  constructor() {
    super();
    this.state = {}

  }
  render() {
    return (
      <div className='login'>
      <form  className="formlogin">
          <label className="l_log">FullName</label>
          <input type="text" className="inputbtn" placeholder="your First Please" />
          <label className="l_log">Email</label>
          <input type="text" className="inputbtn" placeholder="your Email Please" />
          <label className="l_log">Password</label>
          <input type="text" className="inputbtn" placeholder="your Password Please" />
          
          <button className="signin">
            LOGIN</button>
      </form>
  </div>
    );
  }
}
export default Login;