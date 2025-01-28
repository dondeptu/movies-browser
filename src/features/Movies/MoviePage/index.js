import { PersonTile } from "../../../common/Persons/PersonTile";
import { PersonsContent } from "../../../common/Persons/styled";
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
        <MainContent mainHeader="" body={<MovieDetailsTile />} />
        <MainContent
          mainHeader="Cast"
          body={
            <PersonsContent>
              <PersonTile />
              <PersonTile />
              <PersonTile />
              <PersonTile />
              <PersonTile />
              <PersonTile />
              <PersonTile />
              <PersonTile />
            </PersonsContent>
          }
        />
        <MainContent
          mainHeader="Crew"
          body={
            <PersonsContent>
              <PersonTile />
              <PersonTile />
              <PersonTile />
            </PersonsContent>
          }
        />
      </Wrapper>
    </>
  );
}

export default MoviePage;
