import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
import { MoviePoster } from "../../../common/MoviePoster";
import { Section } from "../../../common/Section";
import { SectionPoster } from "../../../common/SectionPoster";
import { Wrapper } from "../../../Wrapper";
function MoviePage() {
  return (
    <>
    <SectionPoster body={<MoviePoster />} />
    <Wrapper>
      <Section sectionHeader="" body={<MovieDetailsTile />} />
    </Wrapper>
    </>
  );
}

export default MoviePage;
