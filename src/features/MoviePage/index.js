// import { Wrapper } from "./style";
import { Wrapper } from "../../Wrapper";
import { Section } from "../../common/Section";
// import PersonsSection from "../../common/PersonsSection";
import { PersonTile } from "../../common/PersonTile";
import { Content } from "../MovieList/styled";
function MoviePage() {
    return (
        <Wrapper>
            <Section
                sectionHeader="Cast"
                body={
                    <Content>
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                        <PersonTile />
                    </Content>
                }
            />
            <Section
                sectionHeader="Crew"
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