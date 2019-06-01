import React, { Component } from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/sailing.jpg";

export default class Sailing extends Component {
  componentDidMount() {
    // to display properly on mobile
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip="Sailing">Contact Us</Button>
          <Button trip="Sailing">Book Now</Button>
        </ButtonContainer>
        <h2>Sailing</h2>
        <TripDescription>
          Set sail with us and cruise to the islands of Šolta, Brač or Čiovo on
          an unforgettable sailing tour. Anchor in secluded bay, discover rich
          underwater life while snorkeling. Visibility in the Adriatic can be
          clear up to 30 meters so snorkeling is a must.
          <br /> <br />
          Swim in crystal clear Adriatic sea while our chef prepares light
          Dalmatian lunch with fresh ingredients. During lunch indigenous
          Croatian eco-wines will be served on the boat.
          <br /> <br />
          Tour departs at 10 am and return to Split is around 5 pm. There is no
          strict route here as sailing depends on the weather conditions but we
          know that islands Brac, Solta and Ciovo will reveal their pristine
          beauty and implant unforgettable memories.
          <br /> <br />
          Maximum number of person on the boat is 8. Boat can also be rented for
          private sail.
          <br /> <br />
          This one day trip is the perfect choice to explore the whole area
          around Split.
          <br /> <br />
        </TripDescription>
      </Layout>
    );
  }
}
