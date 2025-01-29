import {
  Wrapper,
  Background,
  BannerContainer,
  BannerImage,
  BannerContent,
  Title,
} from "./styled.js";
import BannerBig from "../../../../../images/bannerBig.png";
import { Ratings } from "../MovieBanner/Ratings";

export const MovieBanner = () => {
  return (
    <Wrapper>
      <Background />
      <BannerContainer>
        <BannerImage src={BannerBig} alt="Poster of Mulan long title" />
        <BannerContent>
          <Title>Mulan long title</Title>
          <Ratings ratings={{ rate: "7,8", maxRate: "/ 10", votes: "335" }} />
        </BannerContent>
      </BannerContainer>
    </Wrapper>
  );
};
