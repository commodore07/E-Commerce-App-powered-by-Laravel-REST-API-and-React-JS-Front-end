import React, {useState,useEffect} from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';


const AdminPrivateRoute = () => {

    const history = useNavigate();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        axios.get(`/api/checkingAuthenticated`).then(res=> {
            if(res.status === 200)
            {
                setAuthenticated(true);
            }
            setloading(false);
        });

        return () => {
            setAuthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401)
        {
            swal("Unauthorized",err.response.data.message,"warning");
            history('/');
        }
        return Promise.reject(err);
    });

    if(loading)
    {
        return <h1>Loading...</h1>
    }


    return (
        Authenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

export default AdminPrivateRoute