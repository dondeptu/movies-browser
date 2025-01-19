import { Container, GenreItem } from "../Genre/styled";

export const Genre = ({ genres }) => {
    return (
        <Container>
            {genres.map(({ tag }) => (
                <GenreItem key={tag}>{tag}</GenreItem>
            ))}
        </Container>
    );
};