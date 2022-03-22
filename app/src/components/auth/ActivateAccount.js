import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';






function ActivateAccount() {

    const api = axios.create({
        baseURL: 'http://localhost:8082/',
        'Content-Type': 'application/json'
    })
    const navigate = useNavigate();
    const { token } = useParams()
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState("");
    const [userId, setUserId] = useState('');


    useEffect(() => {
        const activate = () => {
            api.get(`/auth/activateAccount/${token}`)
                .then((response) => {
                    const user = response.data.message
                    setUserId(response.data.data._id)
                    setSuccess(user);

                    if (!response.data.success) {
                        navigate('/auth/ForgotPassword');
                        return
                    }
                    setTimeout(() => { navigate('/auth/resetPassword', { state: userId }) }, 2000)
                })
                .catch((error) => {
                    const user = error.response.data.message
                    setErrors(user);
                    setTimeout(() => { navigate('/') }, 1000)
                })
        }
        activate()
    })
    return (
        <>
            <div className="container">
                {errors && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <span className="alert-inner--text"><strong>Warning!</strong> {errors}!</span>
                </div>}

                {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <span className="alert-inner--text"><strong>Success!</strong> {success}!</span>
                </div>}
            </div>
        </>
    )
}


export default ActivateAccount;