import React, { Component } from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/rafting.jpg";

export default class Rafting extends Component {
  componentDidMount() {
    // to display properly on mobile
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip="Rafting">Contact Us</Button>
          <Button trip="Rafting">Book Now</Button>
        </ButtonContainer>
        <h2>Rafting on Cetina</h2>
        <TripDescription>
          If you’re looking for a fun and exciting outdoor adventure during your
          vacation in Split, we have exactly what you need! Rafting on Cetina
          river from Split has long been an exciting and popular adventure sport
          that brings friends and families together to share a unique, memorable
          experience. Rafting on the Cetina river from Split is the most popular
          trip for a reason: there simply isn't a better way to beat the heat
          than to climb into a raft and take off down a cool river.
          <br /> <br />
          Rafting in protected area of the river canyon attracts many tourists
          every summer. The quiet parts of the river and the second and third
          grade rapids enable a three hour combination of adventure and
          relaxation in the amazing Cetina river canyon.
          <br /> <br />
          Rafting on Cetina river from Split starts with transfer by a van to
          the starting point where skippers, equipment and boats already wait
          for you. Skippers will give you basic instructions about the trip and
          help you choose the suitable equipment. From there, the rafting
          adventure can start and you can enjoy three hours of rafting on the
          nine kilometers long route. Cetina is of one of the most beautiful
          Croatian rivers where you can see rapids, waterfalls, caves and quiet
          parts of the river rich in flora and fauna. After the unforgettable
          adventure you can change your clothes at the finish point. If you want
          to experience the rafting adventure on the Cetina River you do not
          need to be physically prepared or experienced.
          <br /> <br />
          Children aged 7 – 12 can also experience this adventure, but
          accompanied by their parents.
          <br /> <br />
          Distance from start to finish: 9.000 meters
          <br /> <br />
          River temperature: Between 14°C and 17°C. It depends on the season.
          <br /> <br />
          Swimming: you can swim at few of the stops during the trip.
          <br /> <br />
          Rafting equipment: inflatable boats, neoprene pants and jacket, a life
          jacket, a helmet and a paddle.
          <br /> <br />
          Equipment & Staff: All equipment used is registered and certified at
          the EU. All customers must wear Personal Flotation Devices (PFD) and
          helmets at all times while on the river. All of our professional
          guides are registered at Croatian mountain rescue service. Our tour
          leaders are IRF(International rafting federation) certified. Staff
          members speak Croatian and English.
          <br /> <br />
        </TripDescription>
      </Layout>
    );
  }
}
