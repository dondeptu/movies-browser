import { Header, Wrapper } from "./styled";

export const MainContent = ({ mainHeader, body }) => (
    <Wrapper>
        <Header>
            {mainHeader}
        </Header>
        {body}
    </Wrapper>
);