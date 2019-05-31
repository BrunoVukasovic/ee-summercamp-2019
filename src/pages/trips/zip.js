import React from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/zip.jpg";

export default () => {
  return (
    <Layout>
      <MainImage src={mainImage} />

      <ButtonContainer>
        <Button trip="Zip line">Contact Us</Button>
        <Button trip="Zip line">Book Now</Button>
      </ButtonContainer>
      <h2>Zip line Omiš</h2>
      <TripDescription>
        Zipline is an adrenaline entertainment where guests descend through the
        canyon down the steel wire rope, secured with a belt. Adventure also
        includes training and a short walk in nature.
        <br /> <br />
        Zipline is located 3 km from Omis, in the canyon of the Cetina River and
        consists of eight wires total length of 2100m . Depending on the size of
        the group, zipline gives you up to 3 hours of unforgettable fun and
        beautiful nature.
        <br /> <br />
        We organized the transfer to the start and back (3 km from Omis) by our
        vehicle. Before the beginning, the group goes to the training ground and
        each guest receives equipment . There are two short wires, length 25m ,
        where guides show you how to brake and act on cable. The next thing is a
        short walk to the first wire. During the walk, you can enjoy the
        beautiful, almost untouched nature and stunning views of the Cetina
        river canyon. Before each wire, one of the guides demonstrate descend,
        while the second guide attaches you and gives you instructions. First
        guide welcomes you at the beginning of the second wire. That is the
        system to pass all eight wires.
        <br /> <br />
        The finish point of a zipline tour is located 50m from the road, and
        there is our van waiting to take you back to Split.
      </TripDescription>
    </Layout>
  );
};
