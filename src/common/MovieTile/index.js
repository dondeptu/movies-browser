import { Genre } from "./Genre";
import { Ratings } from "./Ratings";
import { Details, InfoContent, Poster, MissingPoster, ReleaseDate, StyledIconCamera, Title, Wrapper, PosterWrapper } from "./styled";

export const MovieTile = ({ poster_path, title, release_date, vote_average, vote_count }) => (
    <Wrapper>
        <PosterWrapper>
            {poster_path ? (
                <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`poster of ${title}`} />
            ) : (
                <MissingPoster>
                    <StyledIconCamera />
                </MissingPoster>
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
    </Wrapper>
);
