import React, { Component } from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/canyoning.jpg";

export default class Canyoning extends Component {
  componentDidMount() {
    // to display properly on mobile
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip="Canyoning">Contact Us</Button>
          <Button trip="Canyoning">Book Now</Button>
        </ButtonContainer>
        <h2>Canyoning</h2>
        <TripDescription>
          We will pick you up at arranged meeting points (if you take a
          transfer). Following the highway we will reach Zadvarje. Getting ready
          for the truly exciting adventure along the Cetina River canyon follows
          our arrival. After instructors provide you with a life-jacket, a
          helmet, a long neoprene pants and jacket, the small expedition will be
          ready for the unknown. Our tour guide will help you to get familiar
          with the route and rules of the excursion to ensure the safety of all
          participants.
          <br /> <br />
          What is canyoning? You slowly go down the canyon while the sound of
          the river amplifies, so after a ten-minute walk you will find yourself
          deep in the canyon carved by Cetina River. You walk through the river
          and rapids, pass through subterranean tunnels, swim in natural river
          basins, bypass waterfalls and lakes...That is canyoning experience!
          Swimming in the lake into which the waterfall thunders from a height
          of 60m and the climb to the “step” behind the “water curtains” will be
          an experience worth remembering. For thousands of years Cetina River
          has been flowing persistently through the canyon, creating magical
          shapes in its bed. Crystal clear and pleasant for swimming, the Cetina
          River today represents the genuine experience of the intact nature
          with its 180 meters high cliffs, wild rapids, basins, lakes,
          subterranean tunnels and a 60 meters high waterfall called Gubavica.
          <br /> <br />
          Equipment and staff: All equipment used is registered and certified at
          the EU. All participants must wear Personal Flotation Devices and
          helmets at all times while on the river.
          <br /> <br />
          All guides are registered at Croatian mountain rescue service. Our
          tour leaders are IRF (International rafting federation) certified.
          Staff members speak Croatian and English.
          <br /> <br />
        </TripDescription>
      </Layout>
    );
  }
}
