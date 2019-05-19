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
import zipPhoto from "../images/zip4x3.jpg";
import blueCavePhoto from "../images/blueCave4x3.jpg";
import raftingPhoto from "../images/rafting4x3.jpg";
import mainImage from "../images/plitvice16x9.jpg";

export default () => {
  return (
    <Layout>
      <MainImage src={mainImage} />

      <Container>
        <Link to="/krka/">
          <TripItem>
            <img src={krkaPhoto} alt="Krka" width="100%" />
            <TripItemHeading>Krka Waterfalls</TripItemHeading>
            <TripItemDescription>
              Our program includes a fascinating tour of an authentically
              restored ensemble of stone small houses, experience the rich
              diversity of flora and fauna there.
            </TripItemDescription>
          </TripItem>
        </Link>

        <Link to="/zip/">
          <TripItem>
            <img src={zipPhoto} alt="Zip line" width="100%" />
            <TripItemHeading>Zip line</TripItemHeading>
            <TripItemDescription>
              Zipline is an adrenaline entertainment where guests descend
              through the canyon down the steel wire rope, secured with a belt.
              Adventure also includes training and a short walk in nature.
            </TripItemDescription>
          </TripItem>
        </Link>

        <TripItem>
          <img src={blueCavePhoto} alt="Blue Cave" width="100%" />
          <TripItemHeading>Blue Cave</TripItemHeading>
          <TripItemDescription>
            Our program includes a fascinating tour of an authentically restored
            ensemble of stone small houses, experience the rich diversity of
            flora and fauna there.
          </TripItemDescription>
        </TripItem>

        <TripItem>
          <img src={raftingPhoto} alt="Rafting" width="100%" />
          <TripItemHeading>Rafting</TripItemHeading>
          <TripItemDescription>
            Our program includes a fascinating tour of an authentically restored
            ensemble of stone small houses, experience the rich diversity of
            flora and fauna there.
          </TripItemDescription>
        </TripItem>
      </Container>
    </Layout>
  );
};
