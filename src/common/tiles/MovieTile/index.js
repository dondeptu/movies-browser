import { Genre } from "./Genre";
import { Ratings } from "./Ratings";
import {
  Details,
  InfoContent,
  Poster,
  ReleaseDate,
  Title,
  StyledLink,
  PosterWrapper,
} from "./styled";
import { toMoviePage } from "../../../routes";
import { MissingPoster } from "../MissingPoster";

export const MovieTile = ({
  id,
  posterPath,
  title,
  releaseDate,
  genreIds,
  voteAverage,
  voteCount,
  castCharacter = undefined,
  crewJob = undefined,
  genresError,
}) => {
  const displayCrewJob = crewJob;

  return (
    <StyledLink to={toMoviePage({ id: id })}>
      <PosterWrapper>
        {posterPath ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w342${posterPath}`}
            alt={`poster of ${title}`}
          />
        ) : (
          <MissingPoster />
        )}
      </PosterWrapper>
      <InfoContent>
        <Details>
          {title && <Title>{title}</Title>}
          {releaseDate && (
            <ReleaseDate>
              {castCharacter
                ? `${castCharacter} (${releaseDate.slice(0, 4)})`
                : crewJob
                ? `${displayCrewJob}(${releaseDate.slice(0, 4)})`
                : releaseDate.slice(0, 4)}
            </ReleaseDate>
          )}
          <Genre genreIds={genreIds} genresError={genresError} />
        </Details>
        <Ratings ratings={{ rate: voteAverage, votes: voteCount }} />
      </InfoContent>
    </StyledLink>
  );
};
