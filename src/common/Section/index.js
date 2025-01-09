import { Header, Wrapper, Content } from "./styled";

export const Section = ({ sectionHeader, body }) => (
    <Wrapper>
        <Header>
            {sectionHeader}
        </Header>
        <Content>
            {body}
        </Content>
    </Wrapper>
);