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
import krkaPhoto from "../images/krka4x3.jpg";
import klisPhoto from "../images/klis4x3.jpg";
import omisPhoto from "../images/omis4x3.jpg";
import dubrovnikPhoto from "../images/dubrovnik4x3.jpg";
import mostarPhoto from "../images/mostar4x3.jpg";
import plitivcePhoto from "../images/plitvice4x3.jpg";
import mainImage from "../images/krka16x9.jpg";

export default () => (
  <Layout>
    <MainImage src={mainImage} />

    <Container>
      <Link to="/krka">
        <TripItem>
          <img src={krkaPhoto} alt="Krka" width="100%" />
          <TripItemHeading>Krka Waterfalls</TripItemHeading>
          <TripItemDescription>
            Our program includes a fascinating tour of an authentically restored
            ensemble of stone small houses, experience the rich diversity of
            flora and fauna there.
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/plitvice">
        <TripItem>
          <img src={plitivcePhoto} alt="Plitvice" width="100%" />
          <TripItemHeading>Plitvice lakes</TripItemHeading>
          <TripItemDescription>
            Immerse yourself in exceptional natural beauty, in a place so
            magical you can't even believe it exists. A magical mix of
            waterfalls and lakes, all set against a lush green backdrop, this
            national park is a must.{" "}
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/klis">
        <TripItem>
          <img src={klisPhoto} alt="Klis" width="100%" />
          <TripItemHeading>Klis</TripItemHeading>
          <TripItemDescription>
            Klis fortress is famous for its supreme position and the historical
            role it played. It was built overlooking the mountain pass between
            surrounding Mosor and Kozjak mountains, protecting the coastal area
            with Ilyrian, Roman and Slavic inhabitants from inland invaders
            (barbarians and Ottomans) for centuries.
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/omis">
        <TripItem>
          <img src={omisPhoto} alt="Omis" width="100%" />
          <TripItemHeading>Omiš</TripItemHeading>
          <TripItemDescription>
            Comfortably ensconced in car or minivan, with English speaking
            driver-guide we will arrive to Omiš. This small beautiful town
            famous for pirates of Omiš whose ships were a centuries-long symbol
            of retaliation, courage and strength, has become a modern tourist
            settlement.
          </TripItemDescription>
        </TripItem>
      </Link>
      <Link to="/dubrovnik">
        <TripItem>
          <img src={dubrovnikPhoto} alt="Dubrovnik" width="100%" />
          <TripItemHeading>Dubrovnik</TripItemHeading>
          <TripItemDescription>
            The tour begins at the monumental Pile Gate, built on the top of
            Stradun, a splendid main promenade street of the Old Town. You will
            get to sightsee Franciscan Monastery (its cloister is one of the
            most impressive sites in the city!).
          </TripItemDescription>
        </TripItem>
      </Link>
      <Link to="/mostar">
        <TripItem>
          <img src={mostarPhoto} alt="Mostar" width="100%" />
          <TripItemHeading>Mostar</TripItemHeading>
          <TripItemDescription>
            Our first destination is Mostar (ancient Ottoman city known as ˈthe
            window to the Orient'), where you will get to explore the Old
            Bazaar, full of picturesque shops and crafts workshops, then
            sightsee the Mosque.
          </TripItemDescription>
        </TripItem>
      </Link>
    </Container>
  </Layout>
);
