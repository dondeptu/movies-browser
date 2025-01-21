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
                {movie.title && <Title>{movie.title}</Title>}
                {movie.release_date &&
                    <ReleaseDate>
                        {movie.release_date.slice(0, 4)}
                    </ReleaseDate>}
                <Genre genres={[{ tag: 'Action' }, { tag: 'Adventure' }, { tag: 'Drama' }]} />
            </Details>
            <Ratings ratings={{ rate: movie.vote_average, votes: movie.vote_count }} />
        </InfoContent>
    </Wrapper>
);
