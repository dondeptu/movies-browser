import { Genre } from "./Genre";
import { Ratings } from "./Ratings";
import { Details, InfoContent, Poster, MissingPoster, ReleaseDate, StyledIconCamera, Title, Wrapper } from "./styled";

export const MovieTile = ({ movie }) => (
    <Wrapper>
        {movie.poster_path ? (
            <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
        ) : (
            <MissingPoster>
                <StyledIconCamera />
            </MissingPoster>
        )}

        <InfoContent>
            <Details>
                <Title>Mulan</Title>
                <ReleaseDate>2020</ReleaseDate>
                <Genre genres={[{ tag: 'Action' }, { tag: 'Adventure' }, { tag: 'Drama' }]} />
            </Details>
            <Ratings ratings={{ rate: '7,8', votes: '35' }} />
        </InfoContent>
    </Wrapper>
);
