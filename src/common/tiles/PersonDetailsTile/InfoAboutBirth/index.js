import { useEffect, useState } from "react";
import { theme } from "../../../../theme";
import { Wrapper, Content, NameItemDisplay, ContentItem } from "../../MovieDetailsTile/ProductionInfo/styled";

export const InfoAboutBirth = ({ info, personDetailsSize }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= theme.breakpoint.mobileMax);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= theme.breakpoint.mobileMax);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <Wrapper>
            <Content>
                <NameItemDisplay>
                    {isMobile ? 'Birth:' : 'Date of birth:'}
                </NameItemDisplay>
                <ContentItem personDetailsSize={personDetailsSize} >
                    {info.dateOfBirth || "Unknown"}
                </ContentItem>
            </Content>
            <Content>
                <NameItemDisplay>Place of birth:</NameItemDisplay>
                <ContentItem personDetailsSize={personDetailsSize}>
                    {info.placeOfBirth || "Unknown"}
                </ContentItem>
            </Content>
        </Wrapper>
    )
};