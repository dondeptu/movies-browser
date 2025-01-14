import { MaxRate, Rate, StarIcon, Votes, Wrapper } from "./styled";

export const Ratings = ({ ratings }) => {
    return (
        <Wrapper>
            <StarIcon />
            <Rate>{ratings.rate}</Rate>
            <MaxRate>{ratings.maxRate}</MaxRate>
            <Votes>{ratings.votes} votes</Votes>
        </Wrapper>
    );
};