import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleOpenForm = () => {
    navigate("/form")
  }

  const handleShowData = () => {
    navigate("/display")
  }
  return (
    <>
    <h1>Home Page</h1>
    <button onClick={handleOpenForm}>Form</button><br/>
    <button onClick={handleShowData}>Show Data</button>
    </>
  )
}

export default Home





