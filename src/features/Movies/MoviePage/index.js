import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
import { MovieBanner } from "../../../common/MovieBanner";
import { Section } from "../../../common/Section";
import { SectionPoster } from "../../../common/SectionBanner";
import { Wrapper } from "../../../Wrapper";
function MoviePage() {
  return (
    <>
    <SectionPoster body={<MovieBanner />} />
    <Wrapper>
      <Section sectionHeader="" body={<MovieDetailsTile />} />
    </Wrapper>
    </>
  );
}

export default MoviePage;
