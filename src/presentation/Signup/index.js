import React from 'react';
import Navbar from '../../Navbar';
import Welcome from '../../Welcome';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { FaBeer } from 'react-icons/fa';
import { DiRuby } from "react-icons/di";
import Fields from '../../components/fields';

const formData = [
    {
        name: 'username',
        type: 'text',
        className: 'fadeIn second',
        id: 'login',
        label: ' Name'
    },
    {
        name: 'password',
        type: 'text',
        className: 'fadeIn second',
        id: 'password',
        label: 'Email'
    },
    {
        name: 'password',
        type: 'text',
        className: 'fadeIn second',
        id: 'password',
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


const Signup = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper ">
                <div id="formContent">
            
                        <div className="ff">
                            
                            {/* <FaBeer /> */}
                            <DiRuby color='lightblue' size="50"  />
                         

                           
                        </div>
                    
                        
                        <form>
                               <Fields formData={formData} />
                                <input type="submit" className="fadeIn fourth" value="Create Account"/>
                        </form>
                    
                        
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
            
                </div>
            </div>
        </>
    )
}


export default Signup;