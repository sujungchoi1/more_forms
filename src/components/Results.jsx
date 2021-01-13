import React from 'react'

const Results = (props) => {
    const { firstName, lastName, email, password, confirmPassword } = props.data;
    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

// only works for props, not for state
// const Results = ({ firstName, lastName, email, password, confirmPassword }) => {
    
//     return (
//         <div>
//             <h2>Your Form Data</h2>
//             <p>First Name: {firstName}</p>
//             <p>Last Name: {lastName}</p>
//             <p>Email: {email}</p>
//             <p>Password: {password}</p>
//             <p>Confirm Password: {confirmPassword}</p>
//         </div>
//     );
// };

export default Results;