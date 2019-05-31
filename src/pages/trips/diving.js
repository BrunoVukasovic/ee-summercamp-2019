import React from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/diving.jpg";

export default () => {
  return (
    <Layout>
      <MainImage src={mainImage} />

      <ButtonContainer>
        <Button trip="Diving">Contact Us</Button>
        <Button trip="Diving">Book Now</Button>
      </ButtonContainer>
      <h2>Diving</h2>
      <TripDescription>
        Safety and a serious approach are the most important for relaxed diving,
        and for those reasons our priorities are quality choice and education of
        the guides, and a quality preparation before the dive. Discover a new
        dimension of the world with us and take our diving courses done by old
        American diving school PADI (Professional Association of Diving
        Instructors), oldest and biggest diving organization in the world.
        <br /> <br />
        We offer you a diving trips on attractive diving locations on daily
        basis.
        <br /> <br />
        Diving trips can be half-day or one-day trips.
        <br /> <br />
        Half-day diving trip consist of one dive on attractive location of your
        choice. Departure is at 10:00 AM, return to Split at 14:00 PM.
        <br /> <br />
        One-day diving trip consists of two dives on attractive locations of
        your choice. Departure is at 10:00 AM, arrival to Split at 16:00 PM.
        <br /> <br />
        Locations of diving trips are: <br /> <br />
        Island Čiovo (Wreck Pajo and Red rocks)
        <br /> <br />
        Kluda
        <br /> <br />
        Kraljevac (Wreck Dube)
        <br /> <br />
        Island Šolta (Wreck Ribolovac)
        <br /> <br />
        Island Brač (Cave Dragon’s eye)
        <br /> <br />
        Island Hvar, and other locations upon agreement.
        <br /> <br />
        <br /> <br />
        Besides trips, we offer diving courses are for all age 8-78 years old
        candidates.
        <br /> <br />
        Also you can do many specialities like: boat diving, deep diving, dry
        suit diving, night diving, search and recovery, underwater navigation,
        underwater photography, wreck diving.
        <br /> <br />
      </TripDescription>
    </Layout>
  );
};
