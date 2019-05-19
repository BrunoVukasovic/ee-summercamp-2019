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
import canyoningPhoto from "../images/canyoning4x3.jpg";
import cyclingPhoto from "../images/cycling4x3.jpg";
import divingPhoto from "../images/diving4x3.jpg";
import raftingPhoto from "../images/rafting4x3.jpg";
import seaKayakingPhoto from "../images/seaKayaking4x3.jpg";
import zipPhoto from "../images/zip4x3.jpg";
import mainImage from "../images/rafting16x9.JPG";

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

      <Link to="/cycling">
        <TripItem>
          <img src={cyclingPhoto} alt="cycling" width="100%" />
          <TripItemHeading>Cycling</TripItemHeading>
          <TripItemDescription>
            Cross country cycling throughout paths, fields and hillsides of the
            Dalmatian hinterland, by the lakeshore of Lake Peruča and canyon of
            the river Cetina ... real sources of life through the history and
            legacy.
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

      <Link to="/sea-kayaking">
        <TripItem>
          <img src={seaKayakingPhoto} alt="Sea kayaking" width="100%" />
          <TripItemHeading>Sea kayaking</TripItemHeading>
          <TripItemDescription>
            Spend a relaxing day paddling around the town of Split and
            fascinating Marjan hill while enjoying the spectacular views. Take a
            relaxing morning session or enjoy the magnificent sunset from the
            sea on the afternoon tour
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
