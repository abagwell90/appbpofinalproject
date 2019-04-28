import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import WizardForm from "./WizardForm";
import './App.css';

const apiUrl = process.env.API_URL || 'http://localhost:4000';

const rootEl = document.getElementById("root");
const handleSubmit = (values) => {
  fetch(apiUrl, { headers: {'Content-Type': 'application/json'}, method: 'POST', body: JSON.stringify(values) });
};

ReactDOM.render(
  <Provider store={store}>


    

    <div style={{ padding: 15 }}>





      <h2>Get Instant Cash Offer</h2>


      <WizardForm onSubmit={handleSubmit} />
      <Values form="wizard" />


    </div>

  </Provider>,
  rootEl
);


