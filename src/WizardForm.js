import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';






class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={(arg) => {onSubmit(arg); this.nextPage(arg)}}
          />}
        {page === 4 &&
          <div style={{textAlign: "center", font: '16px, Roboto, arial, sans-serif'}}>
            Thank you for submitting our form with Fleming Properties! We will contact you right away,  <br/>
            within 24 hours, with your cash offer for your home.  <br/>
            To confirm final offer, a member of our team will need <br/>
            to do a brief inspection of your home to confirm the responses. <br/>
            
            Please reach out with any questions or concerns.  <br/><br/>




EMAIL <br/>
flemingpropmanagement@gmail.com <br/><br/>

PHONE <br/>
215-716-7035 <br/><br/>

Address: <br/>
1620 Baltimore Pike #728 <br/>
Chadds Ford PA 19317 <br/>



            </div>}
          
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
