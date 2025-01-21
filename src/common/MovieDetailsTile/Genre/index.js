import { DetailsTileContainer, DetailsTileGenreItem } from "./styled";

export const Genre = ({ genres }) => {
    return (
        <DetailsTileContainer>
            {genres.map(({ tag }) => (
                <DetailsTileGenreItem key={tag}>{tag}</DetailsTileGenreItem>
            ))}
        </DetailsTileContainer>
    );
};