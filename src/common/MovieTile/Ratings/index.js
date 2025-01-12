import { Rate, StarIcon, Votes, Wrapper } from "./styled";

export const Ratings = ({ ratings }) => {
    return (
        <Wrapper>
            <StarIcon />
            <Rate>{ratings.rate}</Rate>
            <Votes>{ratings.votes} votes</Votes>
        </Wrapper>
    );
};