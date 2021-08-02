import React from 'react';



class Sign_in extends React.Component {
  constructor() {
    super();
    this.state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    data: []
  }
  this.handleInput = this.handleInput.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
  this.check = this.check.bind(this)
  }


  onSubmit(event) {
    event.preventDefault();
    const { firstname, lastname, email, password } = this.state
    if (this.check()) {
      axios.post('/api/signup', { firstname, lastname, email, password })
        .then((res) => { console.log(res.data) })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  changeView() {
    
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('first name : ', this.state)
  }
  check() {
    if (this.state.firstname.length < 5) {
      alert('please check your first name')
      return false
    }
    return true
  }

  render() {
    return (
      <div className='login'>
      <form  className="formlogin">
          <label className="l_log">FirstName</label>
          <input type="text" className="inputbtn" placeholder="your First Please" />
          <label className="l_log">LastName</label>
          <input type="text" className="inputbtn" placeholder="your LastNname Please" />
          <label className="l_log">Email</label>
          <input type="text" className="inputbtn" placeholder="your Email Please" />
          <label className="l_log">Password</label>
          <input type="text" className="inputbtn" placeholder="your Password Please" />
          <label className="l_log">Password2</label>
          <input type="text" className="inputbtn" placeholder="your Password Please" />
          <button className="signin">
            REGISTER</button>
      </form>
  </div>
    );
  }
}
export default Sign_in;