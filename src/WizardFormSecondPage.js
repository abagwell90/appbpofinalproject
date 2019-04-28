import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
// import renderField from './renderField';


const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const renderNumberSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Pick # 1 - 10...</option>
      {numbers.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);


const windowType = ['Wood (Original)', 'Aluminium/Metal', 'Vinyl'];

const renderWindow = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Choose Your Wood Type...</option>
      {windowType.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form class="react-form-container" onSubmit={handleSubmit}>
     <br></br>
    <h4>YOUR CURRENT HOME CONDITION - PART 1</h4>
      
<br></br>
    <div>
        <label>Type of Roof</label>
        <div>
          <label>
            <Field name="rooftype" class="inline" component="input" type="radio" value="pitched roof" />
            {' '}
            Pitched
          </label>
          <label>
            <Field name="rooftype" class="inline" component="input" type="radio" value="flat roof" />
            {' '}
            Flat
          </label>
          <Field name="rooftype" component={renderError} />
        </div>
      </div>
     
    <div>
    <label>How Many Years <br></br>Ago Was Your<br></br> Roof Replaced?</label>
        <div>
          <Field
            name="roofLastReplaced"
            component="input"
            type="number"
          />
        </div>
    </div>
  
    <br></br>

    <div>
    <label>How Many Years <br></br> Ago Was HVAC <br></br> Replaced?</label>
        <div class="smallerinput">
          <Field
            name="ageoFHVAC"
            component="input"
            type="number"
            label="How Many Years Ago Was Your HVAC Replaced?"
          />
        </div>
    </div>
<br></br>

    <h5> Rate The Condition Of All Flooring In Your <br></br>Home From Scale of 1 to 10: <br></br>1 Being the Worst And 10 the Best</h5>

    <div>
        <Field name="floorCondition" component={renderNumberSelector} />
      </div>
      <br></br>
      <br></br>
      <h5> Rate The Condition of Your Kitchen In Your <br></br>Home From Scale of 1 to 10: <br></br>1 Being the Worst And 10 the Best</h5>

    <div>
        <Field name="kitchenCondition" component={renderNumberSelector} />
      </div>
      <br></br>

      <div>
    <label>How Old Are <br></br>Your Appliances<br></br> In Home?</label>
        <div>
          <Field
            name="appliancesAge"
            component="input"
            type="number"
          />
        </div>
    </div>

    <h5> If Windows Are <br></br>Older Than 10 Years <br></br>Please Choose Window Type</h5>
    <div>
        <Field name="windowType" component={renderWindow} />
      </div>
      <br></br>



      <br></br>
        <h6>Check All That Apply:</h6>



      <div class="center">
      <label htmlFor="wallPaper">         Do You Have Wallpaper In Your Home</label>
        <div>
        

          <Field class="center"
            name="wallPaper"
            id="Wall Paper In Home"
            component="input"
            type="checkbox"
          />
        </div>
      </div>


      <div class="center">
        <label htmlFor="finishedBasement">          Do You Have a Finished Basement?</label>
        <div class="center">
          <Field
            name="finishedBasement"
            id="Finished Basement"
            component="input"
            type="checkbox"
          />
        </div>
      </div>


      <div>
        <label htmlFor="waterBasement">         Do You Get Water In Your Basement?</label>
        <div>
          <Field
            name="waterBasement"
            id="Water In Basement"
            component="input"
            type="checkbox"
          />
        </div>
      </div>


      <div>
        <label htmlFor="centralAir">          Do You Have Central Air</label>
        <div>
          <Field
            name="centralAir"
            id="Cental Air In Home"
            component="input"
            type="checkbox"
          />
        </div>
      </div>


      <div class="centerdiv">
        <label class="centerdiv" htmlFor="wiring" >         Does Your Home Have Any Knob or Tube Wiring?</label>
        <div>
          <Field
            name="wiring"
            id="wiring"
            component="input"
            type="checkbox"
          />
        </div>
      </div>

      <div class="centerdiv">
        <label htmlFor="leakyRoof">         Does Your Home Have Leaky Roofs</label>
        <div>
          <Field
            name="leakyRoof"
            id="Leaky Roof"
            component="input"
            type="checkbox"
          />
        </div>
      </div>







      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
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
})(WizardFormSecondPage);
