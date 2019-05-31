import React from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/mostar.jpg";

export default () => {
  return (
    <Layout>
      <MainImage src={mainImage} />

      <ButtonContainer>
        <Button trip="Mostar">Contact Us</Button>
        <Button trip="Mostar">Book Now</Button>
      </ButtonContainer>
      <h2>Mostar</h2>
      <TripDescription>
        The journey starts with driving between the Dalmatian coast and
        hinterland.
        <br /> <br />
        Our first destination is Mostar (ancient Ottoman city known as ˈthe
        window to the Orient'), where you will get to explore the Old Bazaar,
        full of picturesque shops and crafts workshops, then sightsee the
        Mosque.
        <br /> <br />
        Afterwards, you will enjoy a walk along the famous 16th century Turkish
        bridge. After guided tour you’ll have enough free time for shopping
        unique souvenirs and opportunity to taste authentic Bosnian specialties
        like ćevapi, pita or burek.
        <br /> <br />
        Last stop is amazing Kravica Waterfall to cool-off before we return to
        Split.
        <br /> <br />
        <strong>Bring passport!</strong>
        <br /> <br />
      </TripDescription>
    </Layout>
  );
};
