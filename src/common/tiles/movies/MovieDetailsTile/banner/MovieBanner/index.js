import {
  Wrapper,
  Background,
  BannerContainer,
  BannerImage,
  BannerContent,
  Title,
} from "./styled.js";
import { Ratings } from "../MovieBanner/Ratings";

export const MovieBanner = ({ backdropPath, title, voteAverage, voteCount }) => {
  return (
    <Wrapper>
      <Background />
      <BannerContainer>
        {backdropPath &&
          <BannerImage src={`https://image.tmdb.org/t/p/original${backdropPath}`} alt={`poster of ${title}`} />
        }
        <BannerContent>
          {title ? <Title>{title}</Title> : <Title>N/A</Title>}
          <Ratings ratings={{ rate: voteAverage, maxRate: '/ 10', votes: voteCount }} />
        </BannerContent>
      </BannerContainer>
    </Wrapper>
  );
};
