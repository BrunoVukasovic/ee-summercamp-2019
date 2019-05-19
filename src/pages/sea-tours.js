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
import bluecavePhoto from "../images/blueCave4x3.jpg";
import blueLagoon from "../images/blueLagoon4x3.jpg";
import bracPhoto from "../images/brac4x3.jpg";
import hvarPhoto from "../images/hvar4x3.jpg";
import visPhoto from "../images/vis4x3.jpg";
import sailingPhoto from "../images/sailing4x3.jpg";
import mainImage from "../images/sailing16x9.jpg";

export default () => (
  <Layout>
    <MainImage src={mainImage} />

    <Container>
      <Link to="/blue-cave/">
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

      <Link to="/blue-lagoon">
        <TripItem>
          <img src={blueLagoon} alt="blue-lagoon" width="100%" />
          <TripItemHeading>Blue Lagoon</TripItemHeading>
          <TripItemDescription>
            Our speedboat leaves from Riva, so you get to experience one of the
            best panoramic views of Split, prepare your cameras! After 30
            minutes of exciting speed boat ride, we reach the first destination,
            the ancient city of Trogir, founded in the 3rd century BC and now
            UNESCO World Heritage site.{" "}
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

      <Link to="/hvar">
        <TripItem>
          <img src={hvarPhoto} alt="hvar" width="100%" />
          <TripItemHeading>Hvar</TripItemHeading>
          <TripItemDescription>
            On the island Hvar, one of most beautiful harbours of the world,
            with beautiful nature and surroundings, as well a rich cultural
            heritage, with walls dating back to the 7th century, and many
            15th-17th century Venetian era noble houses.
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

      <Link to="/vis">
        <TripItem>
          <img src={visPhoto} alt="vis" width="100%" />
          <TripItemHeading>Vis</TripItemHeading>
          <TripItemDescription>
            Jump on speedboat for an early morning exciting 90 minutes ride to
            Biševo Island and the Blue cave visit from Split. We will arrive
            around 09:30h, just in time for memorable scenery when the sunlight
            reflects through the sea and illuminates the entire cave in
            aquamarine blue light.
          </TripItemDescription>
        </TripItem>
      </Link>
    </Container>
  </Layout>
);
