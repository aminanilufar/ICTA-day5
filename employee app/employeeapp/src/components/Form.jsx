import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Form = (props) => {
  var [input, setInput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log("a",location.state)
  
  const InputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  console.log(input)
  }
  const SubmitHandler = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3004/update/" + location.state.val._id, input).then((response) => {
        alert(response.data.message)
      }).catch((error) => {
        console.log(error)
      })
      navigate('/v')
    }
      else{
      axios.post("http://localhost:3004/add", input).then((response) => {
          alert(response.data.message)
      }).catch((error) => {
        console.log(error)
      })
      navigate('/v')
    }
  }
  useEffect(() => {
    if (location.state !== null) {
      setInput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Salary: location.state.val.Salary
      })
    }
  },[])
  
  return (
    <div>
      <br /><br />
      <Typography variant='h3'>FORM</Typography>
      <br /><br />
      <TextField label="NAME" variant='filled' name='Name' value={input.Name} onChange={InputHandler} /><br /><br />
      <TextField label="AGE" variant='filled' name='Age' value={input.Age} onChange={InputHandler} /> <br /><br />
      <TextField label="DEPARTMENT" variant='filled' name='Department' value={input.Department} onChange={InputHandler} />
      <br /><br />
      <TextField label="SALARY" variant='filled' name='Salary' value={input.Salary} onChange={InputHandler} /> <br /><br />
        <Link to="/v">
        <Button variant='contained' color='success' onClick={SubmitHandler}>SUBMIT</Button>
        </Link>
    </div>
  )
  }

export default Form
