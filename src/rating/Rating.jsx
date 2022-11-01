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
      <main>
        <div className='rating container'>
          <div className="rating-wrapper">
            {thankyouPage ? <ThankYou /> : <Rate />}
          </div>
        </div>
      </main>
    )
  }
}

export class Rate extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.state = { selectedOption: '' };
  }

  // numberClicked = (e) => {
  //   numberChosen = e.target.getAttribute('data-value');
  //   document.getElementsByClassName("rate__numbers--number")[numberChosen - 1].classList.add("rate__numbers--number-selected");

  //   let docArray = Array.from(document.getElementsByClassName("rate__numbers--number"));
  //   docArray.forEach((element, index) => {
  //     if (index !== numberChosen - 1) {
  //       element.classList.remove("rate__numbers--number-selected");
  //     }
  //   });
  // }

  buttonClicked = (e) => {
    e.preventDefault();
    if (numberChosen !== 0) {
      thankyouPage = true;
    }
  }

  onRadioChange = (e) => {
    numberChosen = e.target.value;
    this.setState({ selectedOption: e.target.value });
  }

  render() {
    return (
      <div className='rate'>
        <div className="rate__star">
          <img src={star} alt="" aria-hidden="true"/>
        </div>
        <h1>How did we do?</h1>
        <p className='rate__text'>Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!</p>
        <form>
          <div className="rate__numbers">
            <div className="rate__numbers--number">
              <input type="radio" id='number-1' name='numbers' value={1} onChange={this.onRadioChange} />
              <label htmlFor="number-1">1</label>
            </div>
            <div className="rate__numbers--number">
              <input type="radio" id='number-2' name='numbers' value={2} onChange={this.onRadioChange} />
              <label htmlFor="number-2">2</label>
            </div>
            <div className="rate__numbers--number">
              <input type="radio" id='number-3' name='numbers' value={3} onChange={this.onRadioChange} />
              <label htmlFor="number-3">3</label>
            </div>
            <div className="rate__numbers--number">
              <input type="radio" id='number-4' name='numbers' value={4} onChange={this.onRadioChange} />
              <label htmlFor="number-4">4</label>
            </div>
            <div className="rate__numbers--number">
              <input type="radio" id='number-5' name='numbers' value={5} onChange={this.onRadioChange} />
              <label htmlFor="number-5">5</label>
            </div>
          </div>
          <button onClick={this.buttonClicked}>SUBMIT</button>
        </form>
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