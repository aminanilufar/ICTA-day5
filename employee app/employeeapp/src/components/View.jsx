import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [user, setuser] = useState([])
    var navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((response) => {
                console.log(response.data)
                setuser(response.data)
            })
    },)

    const delval = (id) => {
        console.log(id)
        axios.delete("http://localhost:3004/remove/"+id)
            .then((response) => {
                alert(response.data.message)
                window.location.reload()
            })
            .catch((error) => console.log(error) )
    }
    const updateval = (val) => {
        console.log(val)
        navigate('/f',{state:{val}})
    }
    
        return (
            <div>
                <br /><br />
                <Typography variant='h3'>Employee Details</Typography>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Age</b></TableCell>
                            <TableCell><b>Department</b></TableCell>
                            <TableCell><b>Salary</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Department}</TableCell>
                                    <TableCell>{val.Salary}</TableCell>
                                    <Button variant='contained' onClick={() => { delval(val._id) }}>DELETE</Button>&nbsp;&nbsp;
                                   <Button variant='contained' onClick={() => { updateval(val) }}>UPDATE</Button>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }

export default View
