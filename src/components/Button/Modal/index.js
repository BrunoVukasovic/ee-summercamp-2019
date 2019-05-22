import React, { Component } from "react";
import styles from "./styles.module.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props.type);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    // Contact Us button
    if (this.props.type === "Contact Us" || this.props.type === "Contact us") {
      return (
        <div>
          <h3>Trip: {this.props.trip}</h3>

          <label for="fname">First Name:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your name.."
          />

          <label for="lname">Last Name:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your last name.."
          />

          <label for="pnumber">Phone Number:</label>
          <input
            className={styles.InputText}
            type="number"
            placeholder="Your phone number.."
          />

          <label for="email">E-mail:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your e-mail.."
          />

          <label for="message">Message:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your message.."
          />
        </div>
      );
    }
    // Book Now button
    else {
      return (
        <div>
          <h3>Trip: {this.props.trip}</h3>

          <label for="fname">First Name:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your name.."
          />

          <label for="lname">Last Name:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your last name.."
          />

          <label for="pnumber">Phone Number:</label>
          <input
            className={styles.InputText}
            type="number"
            placeholder="Your phone number.."
          />

          <label for="email">E-mail:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your e-mail.."
          />

          <label for="date">Date:</label>
          <input className={styles.InputText} type="date" />

          <label for="pnumber">Time:</label>
          <input className={styles.InputText} type="time" />

          <label for="message">Message:</label>
          <input
            className={styles.InputText}
            type="text"
            placeholder="Your message.."
          />
        </div>
      );
    }
  }
}

export default Modal;
