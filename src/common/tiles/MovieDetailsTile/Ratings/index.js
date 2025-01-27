import { MaxRate, Rate, StarIcon, Votes, Wrapper } from "./styled";

export const Ratings = ({ ratings }) => {
    return (
        <Wrapper>
            {ratings.votes > 0 ? (
                <>
                    <StarIcon />
                    <Rate>{ratings.rate.toFixed(1).toString().replace('.', ',')}</Rate>
                    <MaxRate>{ratings.maxRate}</MaxRate>
                    <Votes>{ratings.votes} votes</Votes>
                </>
            ) : (
                <Votes>No votes yet</Votes>
            )}

        </Wrapper>
    );
};