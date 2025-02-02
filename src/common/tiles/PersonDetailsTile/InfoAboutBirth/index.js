import { Wrapper, Content, NameItemDisplay, ContentItem } from "../../MovieDetailsTile/ProductionInfo/styled";

export const InfoAboutBirth = ({ info }) => {

    return (
        <Wrapper>
            <Content>
                <NameItemDisplay>Birth:</NameItemDisplay>
                <ContentItem>{info.dateOfBirth}</ContentItem>
            </Content>
            <Content>
                <NameItemDisplay>Place of birth:</NameItemDisplay>
                <ContentItem>{info.placeOfBirth}</ContentItem>
            </Content>
        </Wrapper>
    )
};