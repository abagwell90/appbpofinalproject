import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const sellHome = ['Preforeclosure', 'Illness/Death in the Family ', 'Inherited Property/Estate', 'Loss of Job', 'Retirement', 'No Longer Able to Maintain Home', 'Other'];




const renderNumberSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Pick # 1 - 10...</option>
      {numbers.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderHomeSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Why Are You Selling Home?...</option>
      {sellHome.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);



const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form class="react-form-container" onSubmit={handleSubmit}>
     <br></br>
        <h4>ABOUT YOUR HOME - PART 2</h4>

      

<br></br><br></br>

      <h5> Rate The Overall Condition Of Your Home<br></br>From Scale of 1 to 10: <br></br>1 Being the Worst And 10 the Best</h5>

<div>
    <Field name="homeCondition" component={renderNumberSelector} />
  </div>
  
  <br></br>

  <h5> Why Are You Looking <br></br>To Sell Your Home? <br></br></h5>

<div>
    <Field name="sellingHome" component={renderHomeSelector} />
  </div>
  
  <br></br>




      <div>
        <label>Tell us any <br></br>additional comments <br></br>about your home</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
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
})(WizardFormThirdPage);
