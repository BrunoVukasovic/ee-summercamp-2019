import React from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/dubrovnik.jpg";

export default () => {
  return (
    <Layout>
      <MainImage src={mainImage} />

      <ButtonContainer>
        <Button trip="Dubrovnik">Contact Us</Button>
        <Button trip="Dubrovnik">Book Now</Button>
      </ButtonContainer>
      <h2>Dubrovnik</h2>
      <TripDescription>
        Excursion starts at the pre-arranged meeting point, where you will begin
        a full day of experiencing and discovering famous walls of Dubrovnik, a
        UNESCO World Heritage site.
        <br /> <br />
        Drive in air-conditioned van goes along the winding coast and stops at
        several overlooks for amazing panoramic views of the Dalmatian islands.
        <br /> <br />
        Arrival to Dubrovnik (Croatia's most famous medieval city and also the
        “pearl of the Adriatic”) is around noon.
        <br /> <br />
        The tour begins at the monumental Pile Gate, built on the top of
        Stradun, a splendid main promenade street of the Old Town. You will get
        to sightsee Franciscan Monastery (its cloister is one of the most
        impressive sites in the city!) then stop by the oldest pharmacy in
        Europe opened in 1317. Nearby stands Sponza Palace, notable for its
        portico with columns and elaborate stone carvings which today houses the
        State Archives.
        <br /> <br />
        Tour ends with a visit to the Cathedral where you will learn more how it
        was built on the ruins of a 12th century church, then destroyed by the
        great earthquake of 1667. The guided tour lasts for about an hour and a
        half and after sightseeing the most important parts of the Old Town,
        there's time to go back and explore its hidden corners by yourself. You
        can climb the stairs to the walls that let you walk around the Old Town
        from high up on its ramparts or even take a cable car for a amazing view
        of the famous red tile roofs and the sea.
        <br /> <br />
        Dubrovnik leaves nobody unimpressed!
        <br /> <br />
        <strong>Bring passport!</strong>
        <br /> <br />
      </TripDescription>
    </Layout>
  );
};
