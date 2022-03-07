import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




function LoginUser() {
    //* enable navigation
    const navigate = useNavigate()
    //* inisilize props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remeberme, setremeberme] = useState(false)
    const [errors, setErrors] = useState('')

    //* handle login 
    const handlSumit = async (event) => {

        event.preventDefault();
        const bodyData = {
            email: email,
            password: password,
            remeberme: remeberme,
        }
        await fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : null;
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                } else {

                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                setErrors(error)
            });

        if (!errors) {
            navigate('/user/profile')
        }
    }
    return (
        <>
            <section className="section section-lg section-shaped overflow-hidden my-0">
                <div className="shape shape-style-1 shape-zah shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="container shape-container py-0 pb-5">
                    <div className="row row-grid justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <h3 className="display-1 text-white">HELLO HELLO HELLO
                                <span className="display-4 text-white">HELLO HELLO HELLOHELLO HELLO HELLO</span>
                            </h3>
                            <p className="text-white">HELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLO.</p>
                            <div className="btn-wrapper">
                                <Link to="/" className="btn btn-success">Login Page</Link>
                                <Link to="/register" className="btn btn-white">Register Page</Link>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-lg-auto">
                            <div className="transform-perspective-right">
                                <div className="card bg-secondary shadow border-0">
                                    <div className="card-header bg-white pb-5">
                                        <div className="text-muted text-center mb-3">
                                            <small>Sign in with</small>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <Link to="/" className="btn btn-neutral btn-icon">
                                                <span className="btn-inner--icon">
                                                    <img src="../assets/img/icons/common/github.svg" alt="images" />
                                                </span>
                                                <span className="btn-inner--text">Github</span>
                                            </Link>
                                            <Link to="/" className="btn btn-neutral btn-icon">
                                                <span className="btn-inner--icon">
                                                    <img src="../assets/img/icons/common/google.svg" alt="images" />
                                                </span>
                                                <span className="btn-inner--text">Google</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Or sign in with credentials</small>

                                        </div>
                                        <form method="post" onSubmit={handlSumit}>
                                            {errors && <span>{errors}</span>}
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                    </div>
                                                    <input className="form-control" name="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                    </div>
                                                    <input className="form-control" name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" name="remeberme" id=" customCheckLogin2" checked={remeberme} onChange={(e) => setremeberme(prev => !prev)} type="checkbox" />
                                                <label className="custom-control-label" htmlFor=" customCheckLogin2">
                                                    <span>Remember me</span>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary my-4">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default LoginUser;