// import { Wrapper } from "./style";
// import PersonsSection from "../../../common/PersonsSection";
import { MovieDetailsTile } from "../../../common/MovieDetailsTile";
// import PersonsSection from "../../../common/Persons/PersonsSection";
import { PersonTile } from "../../../common/Persons/PersonTile";
import { PersonsContent } from "../../../common/Persons/styled";
import { Section } from "../../../common/Section";
import { Wrapper } from "../../../Wrapper";
function MoviePage() {
    return (
        <Wrapper>
            <Section
                sectionHeader="Cast"
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
            < Section
                sectionHeader="Crew"
                body={
                    <PersonsContent>
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                    </PersonsContent>
                }
            />
        </Wrapper >
    );
}

export default MoviePage;