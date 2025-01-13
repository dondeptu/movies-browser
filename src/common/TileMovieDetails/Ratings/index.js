import { MaxRating, Rate, StarIcon, Votes, Wrapper } from "./styled";

export const Ratings = ({ ratings }) => {
    return (
        <Wrapper>
            <StarIcon />
            <Rate>{ratings.rate}</Rate>
            <MaxRating>{ratings.maxRate}</MaxRating>
            <Votes>{ratings.votes} votes</Votes>
        </Wrapper>
    );
};