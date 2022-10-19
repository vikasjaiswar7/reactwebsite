import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    FullName: "",
    phone: "",
    email: "",
    Message: "",
  });
  const InputEvent = (Event) => {
    const { name, value } = Event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSumbit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.FullName}. My email address is ${data.Email}, and my phone number is ${data.number}, Here is what I watn to say ${data.Message}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="FullName"
                  value={data.FullName}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Email"
                  value={data.Email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="Message"
                  value={data.Message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-primary text-center "
                  type="submit"  onClick={formSumbit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
