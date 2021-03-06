import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import WizardForm from "./WizardForm";
import './App.css';

//delete

const apiUrl = 'https://enigmatic-headland-41724.herokuapp.com/';

const rootEl = document.getElementById("root");
const handleSubmit = (values  ) => {
  fetch(apiUrl, { headers: {'Content-Type': 'application/json'}, method: 'POST', body: JSON.stringify(values) });

};

ReactDOM.render(

  <Provider store={store}>

    <div style={{ padding: 0 }}>

    <nav>
    <h1>Instant <a href="https://appbpofinal.herokuapp.com/" target="_blank">Cash Offer</a></h1>
    <img class="pull-right" src="https://static1.squarespace.com/static/5b1934d34611a079e4697ecf/t/5b21cb7f0e2e7289232ad832/1528941444953/BUY%2BHOUSES%2BRIDLEY%2BPA+copy.png?format=120w" alt="Italian Trulli"></img>
    <ul>
      <li>
        <a href="https://appbpofinal.herokuapp.com/">Home</a>
      </li>
      <li>
        <a href="https://www.flemingbuyshouses.com/connect">Contact</a>
      </li>
    </ul>
  </nav>
  <nav id="small">
  <br></br>
 
  
  <h1><a href="https://appbpofinal.herokuapp.com/" target="_blank">Sell</a> Your Home Today</h1>


    <ul>
      <li>
        <a href="https://www.flemingbuyshouses.com/">Home</a>
      </li>
      <li>
        <a href="https://www.flemingbuyshouses.com/connect">Contact</a>
      </li>
     
    </ul> 
  </nav>
<br></br>
      <h2>Get Instant Cash Offer</h2>


      <WizardForm onSubmit={handleSubmit} />
      {/* <Values form="wizard" /> */}

     

   
      <p class="footer" >Powered by AppBPO <img class="pull-right" src="https://images.squarespace-cdn.com/content/56caa5ed746fb93e227db2f5/1556578606301-K1AOLQCSGF1OVJRMLL2R/appbpo.png?format=100w" alt="Italian Trulli"></img> </p> 
      
    </div>



  
    


  </Provider>,
  rootEl
);

