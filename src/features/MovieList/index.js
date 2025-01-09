import { Section } from "../../common/Section";
import { TestContent } from "../../common/Section/styled";
import { Wrapper } from "../../Wrapper";
import posterMulan from "../../images/posterMulan.png";
import { Content } from "./styled";

function MovieList() {
    return (
        <Wrapper>
            <Section
                sectionHeader="Popular movies"
                body={
                    <>
                        <Content>
                            <TestContent src={posterMulan} alt="" />
                            <TestContent src={posterMulan} alt="" />
                            <TestContent src={posterMulan} alt="" />
                            <TestContent src={posterMulan} alt="" />
                            <TestContent src={posterMulan} alt="" />
                            <TestContent src={posterMulan} alt="" />
                        </Content>
                    </>
                }
            />
        </Wrapper>
    );
}

export default MovieList;