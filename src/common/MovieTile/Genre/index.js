import { Container, GenreItem } from "../Genre/styled";

export const Genre = ({ genres }) => {
    return (
        <Container>
            {genres.map(({ tag }, index) => (
                <GenreItem key={index}>{tag}</GenreItem>
            ))}
        </Container>
    );
};