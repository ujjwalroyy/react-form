import React, { useEffect, useState } from 'react'
import Display from './Display'

const Form = () => {
  const [selectedValue, setSelectedValue] = useState('PCM')
  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('select')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [subject, setSubject] = useState(new Map())
  const [file, setFile] = useState()
  const [sub, setSub] = useState('')
  const [myData, setMyData] = useState([])

  let data = {
    "username": userName,
    "email": email,
    "gender": gender,
    "age": age,
    "stream": selectedValue,
    "file": file,
    "subject": [...subject]
  }


  function handleRadioChange(val) {
    setSelectedValue(val)
  }

  function handleNameChange(val) {
    // console.log("Username Val ", val.target.value);
    setUserName(val.target.value)
    let usernameError = document.getElementById("username-error")
    usernameError.style.display = "none"
  }

  function handleAgeChange(val) {
    let ageVal = val.target.value
    // console.log("Age Val", ageVal);
    if (/^\d*$/.test(ageVal)) {
      setAge(ageVal)
      // console.log("Age", age);
    }
    let ageCheck = document.getElementById("age-error")
    if (age > 16) {
      ageCheck.style.display = 'none'
    }
  }
  function handleEmailChange(val) {
    setEmail(val.target.value)
    let emailCheck = document.getElementById("email-error")
    emailCheck.style.display = 'none'
  }
  function handlePasswordChange(val) {
    setPassword(val.target.value)
    let passCheck = document.getElementById("password-error")
    passCheck.style.display = 'none'

  }
  function handleConfirmPasswordChange(val) {
    setConfirmPassword(val.target.value)
    let comPass = document.getElementById("cPassword-error")
    comPass.style.display = "none"
  }

  const checkOption = [
    {
      name: "physics ",
      key: "physics",
      label: "Physics"
    },
    {
      name: "chemistry ",
      key: "chemistry",
      label: "Chemistry"
    },
    {
      name: "math ",
      key: "math",
      label: "Math"
    },
    {
      name: "bio",
      key: "bio",
      label: "Bio"
    },
  ]

  const updateMap = (key, value) => {
    setSubject((map => {
      const newMap = new Map(map)
      if (newMap.has(key)) {
        newMap.delete(key)
      }
      else {
        newMap.set(key, value)
      }
      return newMap;
    }
      // new Map(map.set(key, value))
    ))
  }
  const handleProfilePic = (val) => {
    setFile(val.target.files[0])
    // console.log("File ", file);

    // console.log("ProfilePic: ", val.target.files[0].name);
    // console.log("URL.createObjectURL(val.target.files[0] ", URL.createObjectURL(val.target.files[0]));

  }
  const handleSubjectChange = (val) => {
    updateMap(val.target.name, val.target.checked);
    // console.log("subject: ", subject);
  }
  function validateUserName(username) {
    let validUserName = /^[a-z0-9]+$/i;
    let usernameError = document.getElementById("username-error")
    if (!validUserName.test(username)) {
      usernameError.style.display = "block"
      return false;
    }
    else {
      return true;
    }
  }
  function comparePassword(password, confirmPassword) {
    let comPass = document.getElementById("cPassword-error")
    if (password !== confirmPassword) {
      comPass.style.display = "block"
      return false;
    }
    else {
      return true;
    }
  }
  function handleGenderChange(val) {
    let ageErr = document.getElementById('gender-error')
    if (val === 'select') {
      setGender(val)
      ageErr.style.display = 'block'
      return false;
    }
    else {
      ageErr.style.display = 'none'
      setGender(val)
      return true
    }
  }

  function validateLocalEmail(email) {
    let duplicateEmailCheck = document.getElementById('duplicate-error')
    let user = JSON.parse(localStorage.getItem("data"))
    let emailExist = user.some(obj => obj.email === email)
    if(emailExist){
      duplicateEmailCheck.style.display = 'block'
    }
    else{
      duplicateEmailCheck.style.display = 'none'
    }
    return emailExist

    // temp.forEach((val) =>{
    //   console.log("Local----", val.email, "Email-------", email);

    //   if (val.email === email) {
    //     console.log("Val.Email ---- ", val.email, "-----------------", email);

    //     duplicateEmailCheck.style.display = 'block'
    //     return false;
    //   }
    //   else {
    //     console.log("Val.Email Else ---- ", val.email, "----------------------", email);
    //     duplicateEmailCheck.style.display = 'none'
    //     setEmail(email)
    //     console.log(email);

    //     return true
    //   }

    // })

  }
  // useEffect(() => {
  //   validateLocalEmail(email)
  // }, [email])
  function validateEmail(email) {
    let validEmail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
    let emailCheck = document.getElementById("email-error")
    if (!validEmail.test(email)) {
      emailCheck.style.display = 'block'
      return false;
    }
    else {
      return true;
    }
  }

  // function validateSubject(subject){
  //   let subjectCheck = document.getElementById("subject-error")
  //   if(subject.length()){
  //     subjectCheck.style.display = "block"
  //   }
  // }

  function validateAge(age) {
    let ageCheck = document.getElementById("age-error")
    if (age < 16) {
      ageCheck.style.display = 'block'
      return false
    }
    else {
      ageCheck.style.display = 'none'
      return true;
    }
  }
  function validatePassword(password) {
    let validPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    let passCheck = document.getElementById("password-error")
    if (!validPass.test(password)) {
      passCheck.style.display = 'block'
      return false;
    }
    else {
      return true;
    }
  }
  function submitFormHandler() {
    if (validateUserName(userName) && validateEmail(email) && validateAge(age)) {
      setSub('true')
    }
    else {
      // console.log("Empty fields", validateUserName(userName));
      // console.log("Empty fields", validateEmail(email));
      // console.log("Empty fields", validateAge(age));
      // console.log("Empty fields", validatePassword(password));
      // console.log("Empty fields", comparePassword(password, confirmPassword));
      setSub('false')
    }
  }

  const props = { userName, email, gender, age, selectedValue, file, sub, subject }
  const genderOptions = ['select', 'Male', 'Female']


  // const render = {
  //   userName,
  //   email,
  //   gender,
  //   age,
  //   selectedValue,
  //   file,
  //   subject
  // }
  let cntInd = 0
  // function displayData() {
  //   temp.map(function (val, ind) {
  //     // console.log("Local----", val);
  //     // let res = Object.assign(data, val)
  //     // console.log("Temp ---- ", val.stream);
  //     myData.push({
  //       id: cntInd++,
  //       userName: val.username,
  //       email: val.email,
  //       gender: val.gender,
  //       age: val.age,
  //       selectedValue: val.stream,
  //       file: val.file,
  //       subject: val.subject
  //     })
  //     myData.map((item) => {
  //       // console.log("Item content ", item);
  //     })
  //     // console.log("My Data -------- Data ---------", myData[0].email)
  //     // console.log("render----", render.email);
  //     // console.log("render----", render.userName);
  //     // console.log("render----", render.age);
  //     // console.log("render----", render.gender);
  //     // console.log("render----", render.selectedValue);
  //     // console.log("render----", render.file);
  //     // console.log("render----", render.subject);

  //     // for(let key in res){
  //     //   console.log("Key---------", res[key]);

  //     //   if(res.hasOwnProperty(key)){
  //     //     console.log("res--------------", res[key]);

  //     //   }
  //     // }
  //   }
  //   )
  //   // let res = Object.assign(data, temp)
  //   // console.log("Temp ---- ", res);
  // }

  function handleClear(){
    setUserName('')
    setGender('select')
    console.log("gender ", gender);
    
    setAge('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setFile()
    setSubject((map) => {
      const newMap = new Map(map)
      newMap.clear();
      console.log("Map clear", newMap);
      return newMap;
    })
    console.log("Map clear", subject);
    
    setSelectedValue('PCM')
  }
  
  const storeData = (e) => {
    e.preventDefault()
    if (validateUserName(userName) && validateEmail(email) && validateAge(age) && validatePassword(password) && comparePassword(password, confirmPassword) && handleGenderChange(gender) && !validateLocalEmail(email)) {
      setSub('true')
      let arr = []
      let user = JSON.parse(localStorage.getItem("data")) || arr
      user.push(data)
      localStorage.setItem('data', JSON.stringify(user))
      handleClear()
      
      
      console.log("Submited", validateUserName(userName));
      console.log("Submited", validateEmail(email));
      console.log("Submited", validateAge(age));
      console.log("Submited", validatePassword(password));
      console.log("Submited", comparePassword(password, confirmPassword));
      console.log("Submited", handleGenderChange(gender));
      console.log("Submited", validatePassword(password));
      console.log("Submited", handleGenderChange(gender));

    }
    else {
      console.log("Empty fields", validateUserName(userName));
      console.log("Empty fields", validateEmail(email));
      console.log("Empty fields", validateAge(age));
      console.log("Empty fields", validatePassword(password));
      console.log("Empty fields", comparePassword(password, confirmPassword));
      console.log("Empty fields", handleGenderChange(gender));
      console.log("Empty fields", validatePassword(password));
      console.log("Empty fields", handleGenderChange(gender));
      setSub('false')
    }
  }
  // function showData() {
  //   temp.map(function (val, ind) {
  //     console.log("------", val.email);

  //   })
  // }
  // function showData(){
  //   for(let it of Object.entries(temp)){
  //     let cnt = 0;
  //     console.log("it ---", it[1]);
  //     for(let val in it[1]){
  //       props[cnt+=1]
  //       cnt++;
  //       console.log("val------", it[1][val], "ind", cnt);

  //     }
  //   }
  // }

  return (
    <>
      <form className='form-controller' name='user-form'>
        <div>Username:
          <input type='text' value={userName} onChange={handleNameChange} onInput={validateUserName} placeholder='Enter Username' minLength={6} maxLength={20} required />
          <span id='username-error' style={{ display: "none" }}>Enter valid username</span>
        </div><br />
        <div>Select Gender:
          <select value={gender} onChange={(e) => handleGenderChange(e.target.value)} required>
            {genderOptions.map((val, ind) => (
              <option key={ind}>{val}</option>
            ))}
          </select>
          <span id='gender-error' style={{ display: "none" }}>Select your gender</span>
        </div><br />
        <div>Age:
          <input type='text' value={age} onChange={handleAgeChange} onInput={validateAge} required />
          <span id='age-error' style={{ display: "none" }}>Age must be greater than 16</span>
        </div><br />
        <div>Email:
          <input type='email' value={email} onChange={handleEmailChange} onInput={validateEmail && validateLocalEmail} required />
          <span id='email-error' style={{ display: "none" }}>Enter valid Email</span>
          <span id='duplicate-error' style={{ display: "none" }}>Email already exist</span>
        </div><br />
        <div>Stream:
          <input type='radio' value={selectedValue} checked={selectedValue === "PCM"} onChange={() => {
            handleRadioChange("PCM")
          }} />PCM
          <input type='radio' value={selectedValue} checked={selectedValue === "Commerce"} onChange={() => {
            handleRadioChange("Commerce")
          }} />Commerce
          <input type='radio' value={selectedValue} checked={selectedValue === "Arts"} onChange={() => {
            handleRadioChange("Arts")
          }} />Arts
        </div><br />
        <div>Subject: {subject.get('physics')}
          {checkOption.map(it => (
            <label key={it.key}>
              {it.name}
              <input type='checkbox' name={it.name} checked={subject.get(it.name)} onChange={handleSubjectChange} />
              <span id='subject-error' style={{ display: "none" }}>Enter valid password</span>
            </label>
          ))}
        </div>
        <div>Password:
          <input type='password' value={password} onChange={handlePasswordChange} onInput={validatePassword} required />
          <span id='password-error' style={{ display: "none" }}>Enter valid password</span>
        </div>
        <div>Confirm Password:
          <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} onInput={comparePassword} required />
          <span id='cPassword-error' style={{ display: "none" }}>password and confirm password not matched</span>
        </div>
        <div>Profile Photo:
          <input type='file' onChange={handleProfilePic} required />
        </div>
      </form>
      <div>
        <button onClick={(e) => storeData(e)}>Submit</button>
      </div>

    </>
  )
}

export default Form