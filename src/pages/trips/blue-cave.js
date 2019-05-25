import React from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/BlueCave16x9.jpg";

export default () => {
  return (
    <Layout>
      <MainImage src={mainImage} />

      <ButtonContainer>
        <Button trip="Blue Cave">Contact Us</Button>
        <Button>Book Now</Button>
      </ButtonContainer>
      <h2>Blue Cave</h2>
      <TripDescription>
        For all sea lovers, but also for those who want to see something unique,
        Blue cave tour from Split is perfect excursion! Jump on speedboat for an
        early morning exciting{" "}
        <strong> 90 minutes ride to Biševo Island </strong>and the Blue cave
        visit from Split. We will arrive around 09:30h, just in time for
        memorable scenery when the sunlight reflects through the sea and
        illuminates the entire cave in <strong>aquamarine blue light</strong>.
        Listen the story from official local guide of how the cave was
        discovered and what makes the magic.
        <br /> <br />
        After the cave tour, we are back on a speedboat to our next attraction
        which is <strong>Monk Seal cave</strong>, where the Mediterranean monk
        seal used to reside. Passing beside picturesque southern side of the
        island Vis, where full of caves, beaches and diverse forms of nature and
        rocks caused by changes on the sea, our next destination is Stiniva bay,
        voted best European beach in 2016., where we'll stop for a swim in the
        unique narrow bay that ends with a white pebbles beach.
        <br /> <br />
        Afterwards we stop on Budikovac island for a longer swim on hidden white
        pebble beach with turquoise sea color. On our way to the island of Hvar
        you will enjoy the panoramic view of the amazing archipelago of Pakleni
        islands – the oldest and the most famous Hvar’s resort, spacious lagoon
        with shallow sandy beaches, surrounded by pine forest, fragrant heather
        and rosemary bushes and various exotic plants.
        <br /> <br />
        Free time for a lunch in Palmizana at Pakleni islands. Our final stop is
        town of Hvar, on the island Hvar,
        <strong> one of most beautiful harbours of the world</strong>, with
        beautiful nature and surroundings, as well a rich cultural heritage,
        with walls dating back to the 7th century, and many 15th-17th century
        Venetian era noble houses. Explore the town by yourself and enjoy the
        real Mediterranean atmosphere and local hospitality.
        <br /> <br />
        Our Blue cave and Hvar tour from Split ends with a quiet ride on the
        smooth sea at sunset, so you can enjoy all the beauty and all the colors
        of the sunset at the open sea. There you will have more time for
        swimming and sunbathing on a beautiful pebble beach.
        <br /> <br />
        <strong>NOTE:</strong> Guest should have proper clothing, wind jacket,
        bathing suite, hat, additional clothes for change, towel, sunglasses and
        suncream.
        <br /> <br />
      </TripDescription>
    </Layout>
  );
};
