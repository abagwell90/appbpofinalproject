import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';


const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form class="react-form-container" onSubmit={handleSubmit}>
    <br></br>
    <h4>Please Enter Information For Instant Cash Offer </h4>
    <br></br>
    <br></br>


  
    <h4>ENTER CONTACT INFO </h4>

      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
        <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
      />
       <Field
        name="phone"
        type="number"
        component={renderField}
        label="Phone #"
      />
      <br></br>
      <h4>ENTER ADDRESS YOU WOULD LIKE EVALUATED</h4>
        <Field
        name="addressLineOne"
        type="text"
        component={renderField}
        label="Address Line 1"
      />
        <Field
        name="city"
        type="text"
        component={renderField}
        label="City"
      />
        <Field
        name="state"
        type="text"
        component={renderField}
        label="State"
      />
       <Field
        name="zip"
        type="text"
        component={renderField}
        label="Zip Code"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
      <br></br>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
