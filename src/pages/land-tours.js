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
import krkaPhoto from "../images/4x3/krka.jpg";
import dubrovnikPhoto from "../images/4x3/dubrovnik.jpg";
import plitivcePhoto from "../images/4x3/plitvice.jpg";
import mainImage from "../images/krka.jpg";

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
    </Container>
  </Layout>
);
