import { DetailsTileContainer, DetailsTileGenreItem } from "./styled";

export const Genre = ({ genres, genresError }) => {

    if (!Array.isArray(genres)|| genresError) {
        return <p> No genres available</p>;
    }

    return (
        <DetailsTileContainer>
            {genres.map((genre) => (
                <DetailsTileGenreItem key={genre.id}>{genre.name}</DetailsTileGenreItem>
            ))}
        </DetailsTileContainer>
    );
};