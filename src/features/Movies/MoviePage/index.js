import { MoviePoster } from "../../../common/MoviePoster";
import { Wrapper } from "../../../Wrapper";
function MoviePage() {
  return (
    <Wrapper>
    <Section
        sectionHeader=""
        body={
            <MovieDetail />
        }
    />
</Wrapper>
  );
}

export default MoviePage;
