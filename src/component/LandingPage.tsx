import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <>
            <div className="App">
                <header className="bg-primary text-white text-center py-5">
                    <h1>Merit Yard</h1>
                    <p>Your Path to Success Starts Here</p>
                </header>

                <main className="container mt-4 text-center">
                    <section id="about" className="py-8">
                        <div className="row">
                            <div className="">
                                <h2>About Us</h2>
                                <p>
                                    We are a leading coaching institute committed to providing
                                    high-quality education and guidance to our students.
                                </p>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">

                            </div>
                        </div>
                    </section>

                    <section id="courses" className="bg-light py-4">
                        <h2 className="text-center">Our Courses</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <img
                                        src="https://via.placeholder.com/300"
                                        alt="Course 1"
                                        className="card-img-top"
                                    />

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <img
                                        src="https://via.placeholder.com/300"
                                        alt="Course 2"
                                        className="card-img-top"
                                    />

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <img
                                        src="https://via.placeholder.com/300"
                                        alt="Course 3"
                                        className="card-img-top"
                                    />

                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="testimonials" className="py-4">
                        <h2 className="text-center">Testimonials</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p className="card-text">
                                            "The coaching institute has been instrumental in my
                                            academic growth. I highly recommend their courses!"
                                        </p>
                                        <p className="font-weight-bold">- John Doe</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p className="card-text">
                                            "I was able to improve my skills significantly with their
                                            personalized attention and guidance."
                                        </p>
                                        <p className="font-weight-bold">- Jane Smith</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p className="card-text">
                                            "The institute's faculty is knowledgeable and supportive.
                                            I owe my success to their dedication."
                                        </p>
                                        <p className="font-weight-bold">- Bob Johnson</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="py-4">
                        <div className="text-center">
                            <h2>Contact Us</h2>
                            <p>
                                For inquiries or enrollment, get in touch with us today.
                            </p>
                            <p>Email: info@merityard.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </div>
                    </section>
                </main>

                <footer className="bg-dark text-white text-center py-3">
                    <p>&copy; 2023 Coaching Institute. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default LandingPage;
