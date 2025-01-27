import { Container, GenreItem } from "./styled";

export const Genre = ({ genres }) => {
    return (
        <Container>
            {genres.map(({ tag }) => (
                <GenreItem key={tag}>{tag}</GenreItem>
            ))}
        </Container>
    );
};