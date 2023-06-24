import React from 'react';

const Contact = () => {
    return (
        <>
            <section id="contact">
                <h3>Contact Info</h3>
                <p>Please use this form</p>
            </section>
            <form>
                <h4>Full Name:</h4>
                <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    style={{width: "750px"}}
                // value=""
                />
                <h4>Email:</h4>
                <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    style={{width: "750px"}}
                // value=""
                />
                <h4>Your Message:</h4>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    style={{width: "750px", height: "300px"}}
                // value=""
                />
                <br></br>
                <br></br>
                <input
                    type="submit"
                    value="Send"
                    className='btn btn-primary'
                    // onClick={handleSubmit}
                />
            </form>
        </>
    )
} 

export default Contact;