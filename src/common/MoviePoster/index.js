import {
  Wrapper,
  Background,
  Poster,
  PosterDetails,
  Title,
  RatingContainer,
  Star,
  Rating,
  RatingWrapper,
  TotalRating,
  Votes,
} from "./styled.js";

export const MoviePoster = ({ title, src, rating, votes }) => {
  return (
    <Wrapper>
      <Background />
      <Poster src={src} alt={title} />
      <PosterDetails>
        <Title>{title}</Title>
        <RatingWrapper>
          <RatingContainer>
            <Star />
            <Rating>{rating}</Rating>
          </RatingContainer>
          <TotalRating>/ 10</TotalRating>
          <Votes>{votes} votes</Votes>
        </RatingWrapper>
      </PosterDetails>
    </Wrapper>
  );
};
