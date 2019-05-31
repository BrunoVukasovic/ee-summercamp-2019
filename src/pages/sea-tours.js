import React from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Container,
  MainImage,
  TripItem,
  TripItemHeading,
  TripItemDescription
} from "../components";
import bluecavePhoto from "../images/4x3/blue-cave.jpg";
import bracPhoto from "../images/4x3/brac.jpg";
import sailingPhoto from "../images/4x3/sailing.jpg";
import mainImage from "../images/sailing.jpg";

export default () => (
  <Layout>
    <MainImage src={mainImage} />

    <Container>
      <Link to="/blue-cave">
        <TripItem>
          <img src={bluecavePhoto} alt="blue-cave" width="100%" />
          <TripItemHeading>Blue Cave</TripItemHeading>
          <TripItemDescription>
            For all sea lovers, but also for those who want to see something
            unique, Blue cave tour from Split is perfect excursion! Jump on
            speedboat for an early morning exciting 90 minutes ride to Biševo
            Island and the Blue cave visit from Split.
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/brac">
        <TripItem>
          <img src={bracPhoto} alt="brac" width="100%" />
          <TripItemHeading>Brač</TripItemHeading>
          <TripItemDescription>
            Discover the inland of island Brač during the organized 2 hour
            panoramic bus tour from Supetar to Bol with professional guide,
            including a stop on “Vidova Gora” to enjoy breathtaking views and
            take photos.
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/sailing">
        <TripItem>
          <img src={sailingPhoto} alt="sailing" width="100%" />
          <TripItemHeading>Sailing</TripItemHeading>
          <TripItemDescription>
            Set sail with us and cruise to the islands of Šolta, Brač or Čiovo
            on an unforgettable sailing tour. Anchor in secluded bay, discover
            rich underwater life while snorkeling. Visibility in the Adriatic
            can be clear up to 30 meters so snorkeling is a must.
          </TripItemDescription>
        </TripItem>
      </Link>
    </Container>
  </Layout>
);
