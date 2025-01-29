import { Genre } from "./Genre";
import { Ratings } from "./Ratings";
import {
    Details,
    InfoContent,
    Poster,
    ReleaseDate,
    Title,
    StyledLink,
    PosterWrapper
} from "./styled";
import { toMoviePage } from "../../../routes";
import { MissingPoster } from "../MissingPoster";

export const MovieTile = ({ id, poster_path, title, release_date, vote_average, vote_count }) => (
    <StyledLink to={toMoviePage({ id: id })}>
        <PosterWrapper>
            {poster_path ? (
                <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`poster of ${title}`} />
            ) : (
                <MissingPoster />
            )}
        </PosterWrapper>
        <InfoContent>
            <Details>
                {title && <Title>{title}</Title>}
                {release_date && <ReleaseDate>{release_date.slice(0, 4)}</ReleaseDate>}
                <Genre genres={[{ tag: 'Action' }, { tag: 'Adventure' }, { tag: 'Drama' }]} />
            </Details>
            <Ratings ratings={{ rate: vote_average, votes: vote_count }} />
        </InfoContent>
    </StyledLink>
);
