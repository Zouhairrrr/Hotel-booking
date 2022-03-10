// import React from 'react';
// import { Link} from 'react-router-dom';
// // import React, {useState} from 'react';


// const CreateHotel = () => {
//     const url="";
//     const [data,setData]=useState({
//         name: "",
//         description: "",
//         country:"",
//         city:"",
//         stars:"",
//     })
//     function handle(e){
//         const newdata={...data}
//         newdata[e.target.id] = e.target.value
//         setData(newData)
//         console.log(newData);
//     }

//     return (
//         <>
//             <section className="section section-shaped section-lg my-0">
//                 <div className="shape shape-style-1 shape-zah">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//                 <div className="container pt-lg-md">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-5">
//                             <div className="card bg-secondary shadow border-0">
//                                 <div className="card-header bg-white pb-5">
//                                     <div className="text-muted text-center mb-3">
//                                         <small>Sign up with</small>
//                                     </div>
//                                     <div className="text-center">
//                                         <Link to="#" className="btn btn-neutral btn-icon mr-4">
//                                             <span className="btn-inner--icon">
//                                                 <img src="../assets/img/icons/common/github.svg" alt="images" />
//                                             </span>
//                                             <span className="btn-inner--text">Github</span>
//                                         </Link>
//                                         <Link to="#" className="btn btn-neutral btn-icon">
//                                             <span className="btn-inner--icon">
//                                                 <img src="../assets/img/icons/common/google.svg" alt="images" />
//                                             </span>
//                                             <span className="btn-inner--text">Google</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-body px-lg-5 py-lg-5">
//                                     <div className="text-center text-muted mb-4">
//                                         <small>Or sign up with credentials</small>
//                                     </div>
//                                     <form method="post" >
//                                         <div className="form-group">
//                                             <div className="input-group input-group-alternative mb-3">
//                                                 <div className="input-group-prepend">
//                                                     <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
//                                                 </div>
//                                                 <input
//                                                     name="name"
//                                                     className="form-control" placeholder="Name" type="text"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                             <div className="input-group input-group-alternative mb-3">
//                                                 <div className="input-group-prepend">
//                                                     <span className="input-group-text"><i className="ni ni-email-83"></i></span>
//                                                 </div>
//                                                 <input
//                                                     name="email"
//                                                     className="form-control" placeholder="Email" type="email" />
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                             <div className="input-group input-group-alternative">
//                                                 <div className="input-group-prepend">
//                                                     <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
//                                                 </div>
//                                                 <input
//                                                     name="password"
//                                                     // onChange={(e) => setPassword(e.target.value)}
//                                                     className="form-control" placeholder="Password" type="password" />
//                                             </div>
//                                         </div>
//                                         <div className="text-muted font-italic">
//                                             <small>password strength:
//                                                 <span className="text-success font-weight-700">strong</span>
//                                             </small>
//                                         </div>
//                                         <div className="row my-4">
//                                             <div className="col-12">
//                                                 <div className="custom-control custom-control-alternative custom-checkbox">
//                                                     <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
//                                                     <label className="custom-control-label" htmlFor="customCheckRegister">
//                                                         <span>Already registered?
//                                                             <Link to="/">LOGIN</Link>
//                                                         </span>
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="text-center">
//                                             <button type="button" className="btn btn-primary mt-4">Create account</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }
// export default CreateHotel;