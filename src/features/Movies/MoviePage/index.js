import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";

function MoviePage() {
    return (
        <Wrapper>
            <MainContent
                mainHeader=""
                body={
                    <MovieDetailsTile />
                }
            />
        </Wrapper>
    );
}

export default MoviePage;