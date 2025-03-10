import React from 'react'

const Display = ({ userName, age, email, gender, file, selectedValue, sub, subject }) => {
    console.log("Display--", sub);
    console.log("Display--", subject);
    console.log("Display------", age);
    console.log("Display------", email);
    console.log("Display------", gender);
    console.log("Display------", file);

    return (
        <>
            {sub === 'true' ? (<div className='card-component'>
                <img src={file} alt="profile pic" />
                <p>Username: {userName}</p>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>Age: {age}</p>
                <p>Stream: {selectedValue}</p>
                <p>Subjects: {subject}</p>

            </div>) : (<h1>No data available</h1>)}
        </>

    )
}

export default Display