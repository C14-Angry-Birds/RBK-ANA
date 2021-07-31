import React,{Component} from "react" ;
import "bootstrap/dist/css/bootstrap.min.css"


class SignIn extends Component {
     constructor(){
         super()
         this.state ={
             fullName:"",
             username:"",
             email:"",
             password:""
         }
         this.chanegefullname=this.chanegefullname.bind(this)
         this.chanegeusername=this.chanegeusername.bind(this)
         this.chanegeemail=this.chanegeemail.bind(this)
         this.chanegepassword=this.chanegepassword.bind(this)

     }


     chanegefullname(eve){
         this.setState({
             fullName:eve.target.value
         })
     }
     chanegeusername(eve){
        this.setState({
            username:eve.target.value
        })
    }
    chanegeemail(eve){
        this.setState({
            email:eve.target.value
        })
    }
    chanegepassword(eve){
        this.setState({
            password:eve.target.value
        })
    }
    render(){
        return (
            <div>
              <div className="container">
                  <div className="form-div">
                  <div>
                      <input type="text" placeholder="Fullname"
                      onChange={(eve) => this.chanegefullname(eve)}
                      value={this.state.fullName} 
                      className="form-controle form-group"
                      />
                       <input type="text" placeholder="Username"
                      onChange={(eve) =>this.chanegeusername(eve)}
                      value={this.state.username} 
                      className="form-controle form-group"
                      />
                       <input type="text" placeholder="E-mail"
                      onChange={(eve) =>this.chanegeEmail(eve)}
                      value={this.state.email} 
                      className="form-controle form-group"
                      />
                       <input type="password" placeholder="Your Password"
                      onChange={(eve) =>this.chanegePassword(eve)}
                      value={this.state.password} 
                      className="form-controle form-group"
                      />
                      <input type="submit" className="btn btn-danger btn-block" value="Submit"/>
                  </div>
                  </div>
                  <div/>
              </div>
            </div>
        )
    }
}


export default SignIn