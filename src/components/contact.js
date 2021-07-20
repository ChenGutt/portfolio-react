import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_Jd3k4HkxsjtAMuoXdIR6N";

    const onSubmit = (data, r) => {
        sendEmail(serviceID, templateID, {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        },
            userID
        )
        r.target.reset()
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {

        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Thank you for your email! I will get back to you as soon as possible!")
            }).catch(err => console.log(`Something went wrong ${err}`));
    }

    return (
        <div id="contact" className="contact">
            <div className="text-center input-box">
                <h1>Contact me</h1>
                <p>Please fill out the form and I will get back to you as soon as possible.</p>
                <span className="success-message">
                    {successMessage}
                </span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">

                            {/* NAME INPUT */}

                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="*Name"
                                    name="name"
                                    aria-invalid={errors.name ? "true" : "false"}
                                    {...register("name", {
                                        required: "Please enter your name",
                                        minLength: {
                                            value: 2,
                                            message:
                                                "Please enter a name with fewer than 20 characters",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>

                            <small className="error-message">
                                {errors.name && errors.name.message}
                            </small>



                            {/* PHONE INPUT */}

                            <div className="text-center">
                                <input id="phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="*Phone Number"
                                    name="phone"
                                    aria-invalid={errors.phone ? "true" : "false"}
                                    {...register("phone", {
                                        required: "Please enter your phone number",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Phone number must be at least 6 digits",
                                        },
                                    })} />
                                <div className="line"></div>
                            </div>

                            <small className="error-message">
                                {errors.phone && errors.phone.message}
                            </small>

                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="*Email"
                                    name="email"
                                    aria-invalid={errors.email ? "true" : "false"}
                                    {...register("email", {
                                        required: "Please fill in an email address",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid Email"
                                        },
                                        message:
                                            "email address must be valid",
                                    },
                                    )} />
                                <div className="line"></div>
                            </div>


                            <small className="error-message">
                                {errors.email && errors.email.message}
                            </small>


                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="*Subject"
                                    name="subject"
                                    aria-invalid={errors.phone ? "true" : "false"}
                                    {...register("subject", {
                                        required: "Oops! You forget to add the subject",
                                    },
                                    )} />
                                <div className="line"></div>
                            </div>

                            <small className="error-message">
                                {errors.subject && errors.subject.message}
                            </small>

                        </div>

                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea id="description" type="text" className="form-control" placeholder="Message..." name="description"  {...register("description")}></textarea>
                                <div className="line"></div>
                            </div>
                            <button className="btn btn-main contact-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact