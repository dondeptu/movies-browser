import { DetailsTileContainer, DetailsTileGenreItem } from "./styled";

export const Genre = ({ genres, genresError }) => {

    if (!Array.isArray(genres)|| genresError) {
        return <p> N/A</p>;
    }

    return (
        <DetailsTileContainer>
            {genres.map((genre) => (
                <DetailsTileGenreItem key={genre.id}>{genre.name}</DetailsTileGenreItem>
            ))}
        </DetailsTileContainer>
    );
};