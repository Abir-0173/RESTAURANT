import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Label, Col, Row } from 'reactstrap';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); // Reset form fields after submission
  };

  return (
    <div className="container">
      <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
        <div className="col-12">
          <h3>Send Us Your Feedback</h3>
          <br />
        </div>
        <div className="col-12 col-md-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="form-group">
              <Label htmlFor="firstname" md={2}>First Name</Label>
              <Col md={10}>
                <input
                  {...register("firstname", { required: "First name is required" })}
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
                />
                {errors.firstname && (
                  <div className="invalid-feedback">{errors.firstname.message}</div>
                )}
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="lastname" md={2}>Last Name</Label>
              <Col md={10}>
                <input
                  {...register("lastname", { required: "Last name is required" })}
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
                />
                {errors.lastname && (
                  <div className="invalid-feedback">{errors.lastname.message}</div>
                )}
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
              <Col md={10}>
                <input
                  {...register("telnum", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Contact number must be numeric",
                    },
                  })}
                  id="telnum"
                  name="telnum"
                  placeholder="Telephone Number"
                  className={`form-control ${errors.telnum ? "is-invalid" : ""}`}
                />
                {errors.telnum && (
                  <div className="invalid-feedback">{errors.telnum.message}</div>
                )}
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="email" md={2}>E-mail</Label>
              <Col md={10}>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  id="email"
                  name="email"
                  placeholder="E-mail Address"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </Col>
            </Row>

            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div className="form-check">
                  <Label check>
                    <input
                      {...register("agree")}
                      type="checkbox"
                      name="agree"
                      className="form-check-input"
                    />
                    <strong>May we contact you?</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <select
                  {...register("contactType")}
                  id="contactType"
                  name="contactType"
                  className="form-control"
                >
                  <option value="Tel.">Tel.</option>
                  <option value="Email">Email</option>
                </select>
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="message" md={2}>Your Message</Label>
              <Col md={10}>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  name="message"
                  rows="12"
                  placeholder="Type your message here..."
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                />
                {errors.message && (
                  <div className="invalid-feedback">{errors.message.message}</div>
                )}
              </Col>
            </Row>

            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//----------------------------------------------------------
// import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
// import { LocalForm, Control, Error } from 'react-redux-form';

// class Contact extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       firstname: '',
//       lastname: '',
//       telnum: '',
//       email: '',
//       agree: false,
//       contactType: 'Tel.',
//       message: ''
//     }
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange = event => {
//     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     })
//   }
//   handleSubmit = event => {
//     console.log(this.state);
//     event.preventDefault();
//   }
//   render() {
//     document.title = "Contact";
//     return (
//       <div className='container'>
//         <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }}>
//           <div className='col-12'>
//             <h3>Send Us Your Feedback</h3>
//             <br />
//           </div>
//           <div className='col-12 col-md-7'>
//             <LocalForm onSubmit={this.handleSubmit}>
//               <FormGroup row>
//                 <Label htmlFor='firstname' md={2}>First Name</Label>
//                 <Col md={10}>
//                   <Control.text model=".firstname" type='text' name='firstname' placeholder='First Name' /* value={this.state.firstname} onChange={this.handleInputChange}*/ />
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Label htmlFor='lastname' md={2}>Last Name</Label>
//                 <Col md={10}>
//                   <Control.text model='.lastname' name='lastname' placeholder='Last Name' />
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
//                 <Col md={10}>
//                   <Control.text model=".telnum" name='telnum' placeholder='Teliphone Number' />
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Label htmlFor='email' md={2}>E-mail</Label>
//                 <Col md={10}>
//                   <Control.text model='.email' name='email' placeholder='E-mail Address' />
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Col md={{ size: 6, offset: 2 }}>
//                   <FormGroup check>
//                     <Label check>
//                       <Control.checkbox model='.agree' type='checkbox' name='agree'/> <strong>May we contact you?</strong>
//                     </Label>
//                   </FormGroup>
//                 </Col>
//                 <Col md={{ size: 3, offset: 1 }}>
//                   <Control.select
//                     model=".contactType"
//                     name='contactType'>
//                     <option>Tel.</option>
//                     <option>Email</option>
//                   </Control.select>
//                 </Col>
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor='message' md={2}>Your Message</Label>
//                 <Col md={10}>
//                   <Control.textarea model=".message" name='message' placeholder='Type your message here...'rows="12" />
//                 </Col>
//               </FormGroup>
//               <FormGroup>
//                 <Col>
//                   <Button type='submit' color='primary'>Send Feedback</Button>
//                 </Col>
//               </FormGroup>
//             </LocalForm>
//           </div>
//         </div>
//       </div >
//     )
//   }
// }

// export default Contact;