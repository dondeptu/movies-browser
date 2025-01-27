import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
import { MainContent } from "../../../common/MainContent";
import { MovieBanner } from "../../../common/MovieBanner";
import { SectionBanner } from "../../../common/SectionBanner";
import { Wrapper } from "../../../Wrapper";
function MoviePage() {
    return (
        <>
    <SectionBanner body={<MovieBanner />} />
        <Wrapper>
            <MainContent
                mainHeader=""
                body={
                    <MovieDetailsTile />
                }
            />
        </Wrapper>
        </>
    );
}

export default MoviePage;
