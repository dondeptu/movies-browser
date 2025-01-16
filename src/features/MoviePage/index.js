import { MovieDetailsTile } from "../../common/MovieDetailsTile";
import { Navigation } from "../../common/Navigation";
import { Wrapper } from "./styled";
function MoviePage() {
    return (
        <Wrapper>
            <Navigation />
            <MovieDetailsTile />
        </Wrapper>
    );
}

export default MoviePage;