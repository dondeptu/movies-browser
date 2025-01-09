import { Section } from "../../common/Section";
import { TestContent } from "../../common/Section/styled";
import { Wrapper } from "../../Wrapper";
import posterMulan from "../../images/posterMulan.png";

function MovieList() {
    return (
        <Wrapper>
            <Section
                sectionHeader="Popular movies"
                body={
                    <>
                        <TestContent src={posterMulan} alt="" />
                        <TestContent src={posterMulan} alt="" />
                        <TestContent src={posterMulan} alt="" />
                        <TestContent src={posterMulan} alt="" />
                        <TestContent src={posterMulan} alt="" />
                        <TestContent src={posterMulan} alt="" />
                    </>
                }
            />
        </Wrapper>
    );
}

export default MovieList;