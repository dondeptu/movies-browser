import { Wrapper, StarIcon, Rate, MaxRate, Votes, FirstRow } from "./styled";

export const Ratings = ({ ratings }) => {
  return (
    <Wrapper>
      {ratings.votes > 0 ? (
        <>
          <FirstRow>
            <StarIcon />
            <Rate>{ratings.rate.toFixed(1).toString().replace('.', ',')}</Rate>
            <MaxRate>{ratings.maxRate}</MaxRate>
          </FirstRow>
          <Votes>{ratings.votes} votes</Votes>
        </>
      ) : (
        <Votes>No votes yet</Votes>
      )}

    </Wrapper>
  );
};
