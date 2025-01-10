import { ContentItem, NameItem, Wrapper, ProductionItem } from "./styled";

export const ProductionInfo = () => {

    return (
        <Wrapper>
            <ProductionItem>
                <NameItem>
                    Production:
                </NameItem>
                <ContentItem>
                    China, United States of America
                </ContentItem>
            </ProductionItem>
            <ProductionItem>
                <NameItem>
                    Release date:
                </NameItem>
                <ContentItem>
                    24.10.2020
                </ContentItem>
            </ProductionItem>
        </Wrapper>
    )
};