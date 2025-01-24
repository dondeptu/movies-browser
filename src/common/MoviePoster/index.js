import { Wrapper, Background, Poster, PosterDetails, Title } from "./styled.js";
import PosterBig from "../../images/posterBig.png";
import { Ratings } from "../MoviePoster/Ratings";

export const MoviePoster = () => {
  return (
    <Wrapper>
      <Background />
      <Poster src={PosterBig} alt="Poster of Mulan long title" />
      <PosterDetails>
        <Title>Mulan long title</Title>
        <Ratings ratings={{ rate: "7,8", maxRate: "/ 10", votes: "335" }} />
      </PosterDetails>
    </Wrapper>
  );
};
