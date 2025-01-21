import { MovieDetailsTile } from "../../common/MovieDetailsTile";
import { Section } from "../../common/Section";
import { Wrapper } from "../../Wrapper";
function MoviePage() {
    return (
        <Wrapper>
            <Section
                sectionHeader=""
                body={
                    <MovieDetailsTile />
                }
            />
        </Wrapper>
    );
}

export default MoviePage;