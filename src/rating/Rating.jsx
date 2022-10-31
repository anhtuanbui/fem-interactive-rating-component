import React, { Component } from 'react';
import star from '../images/icon-star.svg';
import thankyou from '../images/illustration-thank-you.svg';
import './Rating.scss';

var thankyouPage = false;
var numberChosen = 0;

export class Rating extends Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    if (thankyouPage === true) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className='rating container'>
        <div className="rating-wrapper">
          {thankyouPage ? <ThankYou /> : <Rate />}
        </div>
      </div>
    )
  }
}

export class Rate extends Component {

  numberClicked = (e) => {
    numberChosen = e.target.getAttribute('data-value');
    document.getElementsByClassName("rate__numbers--number")[numberChosen - 1].classList.add("rate__numbers--number-selected");

    let docArray = Array.from(document.getElementsByClassName("rate__numbers--number"));
    docArray.forEach((element, index) => {
      if (index !== numberChosen - 1) {
        element.classList.remove("rate__numbers--number-selected");
      }
    });
  }

  buttonClicked = (e) => {
    if (numberChosen !== 0) {
      thankyouPage = true;
    }
  }
  render() {
    return (
      <div className='rate'>
        <div className="rate__star">
          <img src={star} alt="icon star" />
        </div>
        <h1>How did we do?</h1>
        <p className='rate__text'>Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!</p>
        <div className="rate__numbers">
          <div className={`rate__numbers--number ${this.numberChosen === 1 ? "rate__numbers--number-selected" : ""}`} data-value="1" onClick={this.numberClicked}>1</div>
          <div className={`rate__numbers--number ${this.numberChosen === 2 ? "rate__numbers--number-selected" : ""}`} data-value="2" onClick={this.numberClicked}>2</div>
          <div className={`rate__numbers--number ${this.numberChosen === 3 ? "rate__numbers--number-selected" : ""}`} data-value="3" onClick={this.numberClicked}>3</div>
          <div className={`rate__numbers--number ${this.numberChosen === 4 ? "rate__numbers--number-selected" : ""}`} data-value="4" onClick={this.numberClicked}>4</div>
          <div className={`rate__numbers--number ${this.numberChosen === 5 ? "rate__numbers--number-selected" : ""}`} data-value="5" onClick={this.numberClicked}>5</div>
        </div>
        <button onClick={this.buttonClicked}>SUBMIT</button>
      </div>
    )
  }
}

export class ThankYou extends Component {
  render() {
    return (
      <div className='thankyou'>
        <div className="thankyou__img">
          <img src={thankyou} alt="thank you state illustration" />
        </div>
        <p className='thankyou__notice'>You selected {numberChosen} out of 5</p>
        <h1>Thank you!</h1>
        <p className='thankyou__text'>We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!</p>
      </div>
    )
  }
}

export default Rating