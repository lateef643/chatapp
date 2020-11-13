import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { FaBeer } from 'react-icons/fa';
import Fields from './components/fields';
import { DiRuby } from "react-icons/di";

const formData = [
    {
        name: 'username',
        type: 'text',
        className: 'fadeIn second',
        id: 'login',
        label: 'Username'
    },
    {
        name: 'password',
        type: 'text',
        className: 'fadeIn second',
        id: 'password',
        label: 'Password'
    },
]


function Welcome() {
    return(
            <div className="wrapper ">
                <div id="formContent">
            
                        <div className="ff">
                            
                            {/* <FaBeer /> */}
                            <DiRuby color='lightblue' size="50"  />
                         

                           
                        </div>
                    
                        
                        <form>
                               <Fields formData={formData} />
                                <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>
                    
                        
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
            
                </div>
            </div>
    )
}

export default Welcome;