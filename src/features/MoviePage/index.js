import { Wrapper } from "./style";
import PersonsSection from "../../common/PersonsSection";
import { PersonTile } from "../../common/PersonTile";
function MoviePage() {
    return (
        <Wrapper>
            <PersonsSection
                title="Cast"
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
                title="Crew"
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