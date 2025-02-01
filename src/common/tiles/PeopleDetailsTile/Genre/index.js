import { DetailsTileContainer, DetailsTileGenreItem } from "./styled";

export const Genre = ({ genres }) => {

    if (!Array.isArray(genres)) {
        return null;
    }

    return (
        <DetailsTileContainer>
            {genres.map((genre) => (
                <DetailsTileGenreItem key={genre.id}>{genre.name}</DetailsTileGenreItem>
            ))}
        </DetailsTileContainer>
    );
};