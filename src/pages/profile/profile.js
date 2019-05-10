import React from "react";

import { Container, Cover, Info, Name, Age, Details } from "./styles";
import picture from "~/assets/images/isaac-james-cv.jpg";

export default function profile() {
  return (
    <>
      <Container>
        <Cover source={picture} alt="profile-picture" />
      </Container>
      <Info>
        <Name>Isaac, 23</Name>
        <Details>UFC - Quixadá</Details>
      </Info>
    </>
  );
}
