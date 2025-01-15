import { Wrapper } from "./style";
import { MovieDetailsTile } from "../../common/MovieDetailsTile";
import PersonsSection from "../../common/PersonsSection";
import { PersonTile } from "../../common/PersonTile";
function MoviePage() {
    return (
        <Wrapper>
            <MovieDetailsTile />
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