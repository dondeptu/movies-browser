import { Wrapper, Content, NameItemDisplay, ContentItem } from "../../MovieDetailsTile/ProductionInfo/styled";

export const InfoAboutBirth = ({ info, personDetailsSize }) => {

    return (
        <Wrapper>
            <Content>
                <NameItemDisplay>Birth:</NameItemDisplay>
                <ContentItem personDetailsSize={personDetailsSize} >
                    {info.dateOfBirth}
                </ContentItem>
            </Content>
            <Content>
                <NameItemDisplay>Place of birth:</NameItemDisplay>
                <ContentItem personDetailsSize={personDetailsSize}>
                    {info.placeOfBirth}
                </ContentItem>
            </Content>
        </Wrapper>
    )
};