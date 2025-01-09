import { Section } from "../../common/Section";
import { Wrapper } from "../../Wrapper";
import { Content } from "./styled";
import { MovieTile } from "../../common/MovieTile";

function MovieList() {
    return (
        <Wrapper>
            <Section
                sectionHeader="Popular movies"
                body={
                    <>
                        <Content>
                            <MovieTile/>
                            <MovieTile/>
                            <MovieTile/>
                            <MovieTile/>
                            <MovieTile/>
                            <MovieTile/>
                        </Content>
                    </>
                }
            />
        </Wrapper>
    );
}

export default MovieList;