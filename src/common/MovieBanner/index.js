import {
  Wrapper,
  Background,
  BannerContainer,
  BannerImage,
  BannerContent,
  Title,
} from "./styled.js";
import PosterBig from "../../images/posterBig.png";
import { Ratings } from "../MovieBanner/Ratings";

export const MovieBanner = () => {
  return (
    <Wrapper>
      <Background />
      <BannerContainer>
        <BannerImage src={PosterBig} alt="Poster of Mulan long title" />
        <BannerContent>
          <Title>Mulan long title</Title>
          <Ratings ratings={{ rate: "7,8", maxRate: "/ 10", votes: "335" }} />
        </BannerContent>
      </BannerContainer>
    </Wrapper>
  );
};
