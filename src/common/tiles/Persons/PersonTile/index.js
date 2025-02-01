import { ContentPerson, PersonImage, PersonName, PersonSubtitle, PersonTileWrapper } from "./styled";
import posterLiu from "../../../../images/posterLiu.png";
import { toPeoplePage } from "../../../../routes";

export const PersonTile = ({id, extraMargin, showSubtitle = true }) => (
    <PersonTileWrapper to={toPeoplePage({ id: id })}>
        <PersonImage src={posterLiu} alt="poster of Lui" />
        <ContentPerson extraMargin={extraMargin}>
            <PersonName>Liu Yifei Long Name Long name</PersonName>
            {showSubtitle && <PersonSubtitle>Mulan</PersonSubtitle>}
        </ContentPerson>
    </PersonTileWrapper>
);