import { ContentItem, NameItem, Wrapper, Content } from "./styled";

export const ProductionInfo = ({ info }) => {

    return (
        <Wrapper>
            <Content>
                <NameItem>Production:</NameItem>
                <ContentItem>{info.productionCountries}</ContentItem>
            </Content>
            <Content>
                <NameItem>Release date:</NameItem>
                <ContentItem>{info.date}</ContentItem>
            </Content>
        </Wrapper>
    )
};