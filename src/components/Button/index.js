import React, { Component } from "react";
import styles from "./styles.module.css";
import Modal from "./Modal";

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleClick(){
      this.setState({ clicked: true});
  }

  handleSubmit(){
    this.setState({ clicked: false});
  }

  render() {
    return(
      <div>
      
      <button onClick={this.handleClick} className={styles.Button}>{this.props.children}</button>

      <div className={this.state.clicked ? styles.ModalBlock : styles.ModalNone}>
        <div className={styles.ModalContent}>
          <span onClick={this.handleSubmit} className={styles.Close}>&times;</span>
          <h2>{this.props.children}</h2>
          <Modal type={this.props.children} trip={this.props.trip}></Modal>
          <div className={styles.SubmitCancleDiv}>
            <button onClick={this.handleSubmit} className={styles.Cancle}>Cancle</button>
            <button onClick={this.handleSubmit} className={styles.Submit}>Submit</button>
          </div>
        </div>

      </div>

      </div>
    );
  }
}

export default Button;

/*
export default ({ children }) => (
  <button className={styles.Button}>{children}</button>
);
*/
