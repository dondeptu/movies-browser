import { Wrapper, StarIcon, Rate, MaxRate, Votes, FirstRow } from "./styled";

export const Ratings = ({ ratings }) => {
  return (
    <Wrapper>
      <FirstRow>
        <StarIcon />
        <Rate>{ratings.rate}</Rate>
        <MaxRate>{ratings.maxRate}</MaxRate>
      </FirstRow>
      <Votes>{ratings.votes} votes</Votes>
    </Wrapper>
  );
};
