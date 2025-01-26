import { Wrapper, Background, Banner, BannerDetails, Title } from "./styled.js";
import PosterBig from "../../images/posterBig.png";
import { Ratings } from "../MovieBanner/Ratings";

export const MovieBanner = () => {
  return (
    <Wrapper>
      <Background />
      <Banner src={PosterBig} alt="Poster of Mulan long title" />
      <BannerDetails>
        <Title>Mulan long title</Title>
        <Ratings ratings={{ rate: "7,8", maxRate: "/ 10", votes: "335" }} />
      </BannerDetails>
    </Wrapper>
  );
};
