import { ContentPerson, PersonImage, PersonName, PersonSubtitle, PersonTileWrapper } from "./styled";

export const PersonTile = ({ id, profilePath, name, character, extraMargin, showSubtitle = true }) => {
    return (
    
    <PersonTileWrapper>
        {profilePath ? (
        <PersonImage src={`https://image.tmdb.org/t/p/w500${profilePath}`} alt={`poster of ${name}`} />
        ) : ( <p>No poster</p>
    )}
        <ContentPerson $extraMargin={extraMargin}>
            {name && <PersonName>{name}</PersonName>}
            {showSubtitle && character &&<PersonSubtitle>{character}</PersonSubtitle>}
        </ContentPerson>
    </PersonTileWrapper>
)
};