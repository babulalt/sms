import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useDispatch} from "react-redux";
import {logout} from "../action/auth";


export const Home=()=>{
    const navigate=useNavigate()
    const dispatch = useDispatch();
    // const handleLogout= ()=>{
    // dispatch(logout());
    // navigate('/')
    // }
    return (
        <div>
        <h1>Welcome in Home page</h1>
            {/* <Button type='submit' color='primary' variant='contained' onClick={handleLogout}>Logout</Button> */}
        </div>
    )
}