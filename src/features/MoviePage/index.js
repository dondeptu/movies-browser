import { Wrapper } from "./style";
import PersonsSection from "../../common/PersonsSection";
import { PersonTile } from "../../common/PersonTile";
function MoviePage() {
    return (
        <Wrapper>
            <PersonsSection
                header="Cast"
                body={
                    <>
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                    </>
                }
            />
            <PersonsSection
                header="Crew"
                body={
                    <>
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                    </>
                }
            />
        </Wrapper>
    );
}

export default MoviePage;