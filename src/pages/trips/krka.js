import React, { Component } from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/krka.jpg";

export default class Krka extends Component {
  componentDidMount() {
    // to display properly on mobile
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip="Krka">Contact Us</Button>
          <Button trip="Krka">Book Now</Button>
        </ButtonContainer>
        <h2>Krka</h2>
        <TripDescription>
          Adventure starts at our meeting point. We are on the way to Krka
          National park from Split in the air-conditioned mini-van or bus.{" "}
          <br /> <br />
          In about an hour and 30 minutes we arrive to Krka National Park and
          embark on a tour. First up is the charming town of Skradin where we
          take the <strong>30-minutes boat ride</strong> to Skradinski buk and
          back, one of the most famous Croatian natural beauties and the largest
          travertine waterfall in Europe.
          <br /> <br />
          Skradinski buk is the last of seven waterfalls on the Krka River but
          sure not the least as it creates most travertine cascades, islands and
          lakes. In over 17 steps of Skradinski buk, spread over 800 meters in
          length, lies one of the most unusual and beautiful landscape images of
          the National Park.
          <br /> <br />
          Our program includes a{" "}
          <strong>
            fascinating tour of an authentically restored ensemble of stone
            small houses
          </strong>
          , workshops, exhibits and watermills and a beautiful walk through
          forest pathways and wooden bridges designed to let you experience the
          rich diversity of flora and fauna there.
          <br /> <br />
          Enjoy the magnificent Skradinski buk, lunch and{" "}
          <strong>free time for swimming and paddling</strong> under a little
          waterfall; the perfect way to cool off in the sweltering summer day!
          The final adventure is a visit to a historic, seaside city of Sibenik,
          available only in March, April, May and October. The return to Split
          along the coast road is gorgeous – picturesque villages and beautiful
          offshore islands.
          <br /> <br />
          <strong>NOTE:</strong> Guests should have proper clothing for taking
          the tour: sportswear, bathing suite, comfortable shoes, additional
          clothes for change. Out of season warm sweater. <br /> <br />
          <br /> <br />
        </TripDescription>
      </Layout>
    );
  }
}
