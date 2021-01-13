import React, {useState} from 'react';

const UserForm = (props) => {
    const {input, setInput} = props;
    // const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    // const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    // const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    // const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    // const [confirmpassword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("");
    
    const handleFirstname = (e) => {
        setInput({
            // grabbing whole object from App.js so we can use the key and manupulate the value "e.target.value"
            ...input,
            [e.target.name]: e.target.value
        });
        if(e.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2 characters");
        } else {
            setFirstnameError("");
        }
    };
    const handleLastname = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        if(e.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters");
        } else {
            setLastnameError("");
        }
    };
    const handleEmail = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    };
    const handlePassword = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }

    };

    const handleConfirmpassword = (e) => {
        setInput({
            ...input, // allows you to grab all the diff inputs
            [e.target.name]: e.target.value // targets the specific input field at that name label
        });
        if (e.target.value !== input.password) {
            setConfirmpasswordError("Password must match");
        } else {
            setConfirmpasswordError("");
        }
    }


    return (
        <form>
            <div className="formGroup">
                <label htmlFor="firstName">First Name: </label> 
                <input onChange={handleFirstname} type="text" name="firstName" />
            </div>
            <h5>
            { firstnameError ? 
                <p style={{color:'orange'}}>{firstnameError}</p> : ""                        
            }
            </h5>
            <div className="formGroup">
                <label htmlFor="lastName">Last Name: </label> 
                <input onChange={handleLastname} type="text" name="lastName" />
            </div>
            <h5>
                { lastnameError ? 
                    <p style={{color:'orange'}}>{lastnameError}</p> : ""                        
                }
            </h5>
            <div className="formGroup">
                <label htmlFor="email">Email: </label>
                <input onChange={handleEmail} type="text" name= "email" />
            </div>
            <h5>
                { emailError ? 
                    <p style={{color:'orange'}}>{emailError}</p> : ""                        
                }
            </h5>
            <div className="formGroup">
                <label htmlFor="password">Password: </label>
                <input onChange={handlePassword} type="password" name= "password" />
            </div>
            <h5>
                { passwordError ? 
                    <p style={{color:'orange'}}>{passwordError}</p> : ""                        
                }
                { confirmpasswordError ? 
                    <p style={{color:'orange'}}>{confirmpasswordError}</p> : ""                        
                }
            </h5>
            <div className="formGroup">
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input onChange={handleConfirmpassword} type="password" name= "confirmPassword" />
            </div>
        </form>
    );
};
    
export default UserForm;