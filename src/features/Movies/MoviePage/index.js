import { MainContent } from "../../../common/MainContent";
import { PersonTile } from "../../../common/Persons/PersonTile";
import { PersonsContent } from "../../../common/Persons/styled";
import { Wrapper } from "../../../Wrapper";
function MoviePage() {
    return (
        <Wrapper>
            <MainContent
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
            < MainContent
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