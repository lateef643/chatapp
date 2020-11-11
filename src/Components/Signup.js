import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


class Signup extends Component {
    render() {
        return (
            <div className="card" id="signCard" style={{width: "30rem"}}>
                <div className="card-header text-center font-weight-bold mb-3"style={{backgroundColor: "inherit"}} >Sign Up</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            {/* <label htmlFor="username">Username:</label> */}
                            <input type="text" className="form-control" name="username" placeholder="Name"  />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Email:</label> */}
                            <input type="email" className="form-control" name="email" placeholder="Email"   />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name">Password:</label> */}
                            <input type="text" className="form-control" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="name"> Confirm Password:</label> */}
                            <input type="text" className="form-control" name="password" placeholder="Confirm Password" />
                        </div>
                        <div style={{textAlign: "center", borderRadius: "20px"}}>
                         <input type="submit" value="Create Account" className="btn btn-primary my-3" />
                        </div>      
                    </form>
                    <div style={{fontSize: "12px", textAlign: "center", cursor: "pointer"}}><p>Already have an account?Login</p></div>  
                </div>
            </div>
        )
    }
}
export default Signup;