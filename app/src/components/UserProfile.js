import React from 'react';

function UserProfile() {
    return (
        <>
            <main className="profile-page">
                <section className="section-profile-cover section-shaped my-0">
                    <div className="shape shape-style-1 shape-primary shape-skew alpha-4">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
                <section className="section section-skew">
                    <div className="container">
                        <div className="card card-profile shadow mt--300">
                            <div className="px-4">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                            <a href="#">
                                                <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle" alt="Team"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                        <div className="card-profile-actions py-4 mt-lg-0">
                                            <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                                            <a href="#" className="btn btn-sm btn-default float-right">Message</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-1">
                                        <div className="card-profile-stats d-flex justify-content-center">
                                            <div>
                                                <span className="heading">22</span>
                                                <span className="description">Friends</span>
                                            </div>
                                            <div>
                                                <span className="heading">10</span>
                                                <span className="description">Photos</span>
                                            </div>
                                            <div>
                                                <span className="heading">89</span>
                                                <span className="description">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <h3>Jessica Jones
                                        <span className="font-weight-light">, 27</span>
                                    </h3>
                                    <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>Bucharest, Romania</div>
                                    <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer</div>
                                    <div><i className="ni education_hat mr-2"></i>University of Computer Science</div>
                                </div>
                                <div className="mt-5 py-5 border-top text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-9">
                                            <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                                            <a href="#">Show more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

export default UserProfile;