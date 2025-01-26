import { MainContent } from "../../../common/MainContent";
import { PersonTile } from "../../../common/Persons/PersonTile";
import { PersonsContent } from "../../../common/Persons/styled";
import { Wrapper } from "../../../Wrapper";
function MoviePage() {
    return (
        <Wrapper>
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
            < MainContent
                mainHeader="Crew"
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