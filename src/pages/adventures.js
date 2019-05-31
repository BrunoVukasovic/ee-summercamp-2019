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
import canyoningPhoto from "../images/4x3/canyoning.jpg";
import divingPhoto from "../images/4x3/diving.jpg";
import raftingPhoto from "../images/4x3/rafting.jpg";
import zipPhoto from "../images/4x3/zip.jpg";
import mainImage from "../images/rafting.jpg";

export default () => (
  <Layout>
    <MainImage src={mainImage} />

    <Container>
      <Link to="/canyoning">
        <TripItem>
          <img src={canyoningPhoto} alt="canyoning" width="100%" />
          <TripItemHeading>Canyoning</TripItemHeading>
          <TripItemDescription>
            You slowly go down the canyon while the sound of the river
            amplifies, so after a ten-minute walk you will find yourself deep in
            the canyon carved by Cetina River. You walk through the river and
            rapids, pass through subterranean tunnels, swim in natural river
            basins, bypass waterfalls and lakes...
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/diving">
        <TripItem>
          <img src={divingPhoto} alt="diving" width="100%" />
          <TripItemHeading>Diving</TripItemHeading>
          <TripItemDescription>
            Safety and a serious approach are the most important for relaxed
            diving, and for those reasons our priorities are quality choice and
            education of the guides, and a quality preparation before the dive.
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/rafting">
        <TripItem>
          <img src={raftingPhoto} alt="rafting" width="100%" />
          <TripItemHeading>Rafting</TripItemHeading>
          <TripItemDescription>
            If you’re looking for a fun and exciting outdoor adventure during
            your vacation in Split, we have exactly what you need! This is an
            exciting and popular adventure sport that brings friends and
            families together to share a unique, memorable experience.
          </TripItemDescription>
        </TripItem>
      </Link>

      <Link to="/zip">
        <TripItem>
          <img src={zipPhoto} alt="Zip line" width="100%" />
          <TripItemHeading>Zip line</TripItemHeading>
          <TripItemDescription>
            Zipline is located 3 km from Omis, in the canyon of the Cetina River
            and consists of eight wires total length of 2100m . Depending on the
            size of the group, zipline gives you up to 3 hours of unforgettable
            fun and beautiful nature.
          </TripItemDescription>
        </TripItem>
      </Link>
    </Container>
  </Layout>
);
