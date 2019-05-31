import React from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/brac.jpg";

export default () => {
  return (
    <Layout>
      <MainImage src={mainImage} />

      <ButtonContainer>
        <Button trip="Brac">Contact Us</Button>
        <Button trip="Brac">Book Now</Button>
      </ButtonContainer>
      <h2>Brač</h2>
      <TripDescription>
        Golden horn and Bol tour from Split starts with 1 hour cruise on the
        mega catamaran to island Brač, starting with Summer Blues welcome drink.
        <br /> <br />
        Discover the inland of island Brač during the organized 2 hour panoramic
        bus tour from Supetar to Bol with professional guide, including a stop
        on “Vidova Gora” to enjoy breathtaking views and take photos.
        <br /> <br />
        Finaly we arrive at the famous beach Golden Horn where you’ll have 2
        hours free time for swimming and sun.
        <br /> <br />
        Early afternoon, at 15:00, we’ll walk through the village of Bol and
        continue our journey on the Summer Blues catamaran. While we cruise
        along the south side of island Brač and admire the views of wineyards,
        lunch will be served and the bar with the all inclusive drinks is open
        till the end of the excursion.
        <br /> <br />
        Our next highlight is the natural bay „Lučice“ where catamaran anchors
        for a swim stop, enjoy every second in the pure paradise. We are relaxed
        and ready to start the sailing tour to Split including one more swim
        stop in another hidden bay of island Brač.
        <br /> <br />
        On board more fresh fruits and delicious dailly cakes are served; the
        bar with drinks is still open and the dance music entertainment during
        the sunset
        <br /> <br />
      </TripDescription>
    </Layout>
  );
};
