import { ContentItem, NameItem, Wrapper, ProductionItem } from "./styled";

export const ProductionInfo = ({ info }) => {

    return (
        <Wrapper>
            <ProductionItem>
                <NameItem>Production:</NameItem>
                <ContentItem>{info.productionCountries}</ContentItem>
            </ProductionItem>
            <ProductionItem>
                <NameItem>Release date:</NameItem>
                <ContentItem>{info.date}</ContentItem>
            </ProductionItem>
        </Wrapper>
    )
};