import { MissingPersonPoster } from "../MissingPersonPoster";
import {
  ContentPerson,
  PersonImage,
  PersonName,
  PersonSubtitle,
  PersonTileWrapper,
} from "./styled";

export const PersonTile = ({
  profilePath,
  name,
  character,
  extraMargin,
  job,
  showSubtitle = true,
}) => {
  return (
    <PersonTileWrapper>
      {profilePath ? (
        <PersonImage
          src={`https://image.tmdb.org/t/p/w500${profilePath}`}
          alt={`poster of ${name}`}
        />
      ) : (
        <MissingPersonPoster/>
      )}
      <ContentPerson $extraMargin={extraMargin}>
        {name && <PersonName>{name}</PersonName>}
        {showSubtitle && <PersonSubtitle>{character || job}</PersonSubtitle>}
      </ContentPerson>
    </PersonTileWrapper>
  );
};
