import React, { Component } from "react";
import {
  Layout,
  TripDescription,
  Button,
  ButtonContainer,
  MainImage
} from "../../components";
import mainImage from "../../images/plitvice.jpg";

export default class Plitvice extends Component {
  componentDidMount() {
    // to display properly on mobile
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip="Plitvice">Contact Us</Button>
          <Button trip="Plitvice">Book Now</Button>
        </ButtonContainer>
        <h2>Plitvice lakes</h2>
        <TripDescription>
          Immerse yourself in exceptional natural beauty, in a place so magical
          you can't even believe it exists. A magical mix of waterfalls and
          lakes, all set against a lush green backdrop, this national park is a
          must.
          <br /> <br />
          In about three and a half hours drive we arrive to Plitvice National
          Park, the largest, the oldest and most famous national park in
          Croatia, which was declared as UNESCO world heritage in 1979. (among
          the first in the world). Plitvice Lakes National Park is a special
          geological and hydrogeological phenomenon with natural and rich
          biodiversity. The oldest national park in Croatia represents a
          forested mountain area and a series of 16 crystal blue lakes. Lakes
          receive water from numerous rivers and streams, and they are connected
          by cascades and waterfalls. Travertine barriers, which were made in
          the period of ten thousand years ago are one of the fundamental
          features of the park. Vast forests, extraordinary beauty of lakes and
          waterfalls, flora and fauna, contrasting autumn colors, trails and
          wooden bridges form a remarkable and unforgettable beauty.
          <br /> <br />
          Upon arriving at Plitvice you will walk through woodland. The path
          takes you across Upper Lakes and then it is time for boat ride within
          the sound of the waterfalls to Lower Lakes. Get ready to walk across
          the lake on charming wooden paths, as well as an unforgettable thunder
          produced by Great Falls, 78 meters high waterfall. Tour ends with a
          panoramic train ride through the forest, but after that there is a
          plenty of time for lunch at local tavern or for a picnic in the shade,
          next to the magnificent lake.
          <br /> <br />
          <strong>NOTE:</strong> Guests should have proper clothing; sportswear,
          closed comfortable shoes. Out of season don’t forget warm sweater,
          umbrella or raincoat.
          <br /> <br />
        </TripDescription>
      </Layout>
    );
  }
}
