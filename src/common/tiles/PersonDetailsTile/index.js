import { formatDate } from "../../../features/utils.js";
import { InfoAboutBirth } from "./InfoAboutBirth/index.js";
import { PersonDescription } from "../MovieDetailsTile/Description/index.js";
import {
  Poster,
  PosterWrapper,
  TileContent,
  TileTitle,
  Wrapper,
} from "../../StylesDetailsTile/styled.js";
import { MissingPersonPoster } from "../Persons/MissingPersonPoster/index.js";

export const PersonDetailsTile = ({
  personDetailsSize,
  profilePath,
  name,
  birthday,
  placeOfBirth,
  biography,
}) => {
  return (
    <Wrapper $personDetailsSize={personDetailsSize}>
      <PosterWrapper $personDetailsSize={personDetailsSize}>
        {profilePath ? (
          <Poster
            src={`https://image.tmdb.org/t/p/h632${profilePath}`}
            alt={`poster of ${name}`}
          />
        ) : (
          <MissingPersonPoster />
        )}
      </PosterWrapper>
      <TileContent>
        {name ? (
          <TileTitle $personDetailsSize={personDetailsSize}>{name}</TileTitle>
        ) : (
          <TileTitle>Title not available</TileTitle>
        )}
        <InfoAboutBirth
          $personDetailsSize={personDetailsSize}
          info={{
            dateOfBirth: formatDate(birthday),
            placeOfBirth: placeOfBirth,
          }}
        />
      </TileContent>
      <PersonDescription personDescription={{ biography }} />
    </Wrapper>
  );
};
