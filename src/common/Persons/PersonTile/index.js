import { ContentPerson, PersonImage, PersonName, PersonSubtitle, PersonTileWrapper } from "./styled";
import posterLiu from "../../../images/posterLiu.png";

export const PersonTile = ({ showSubtitle = true }) => (
    <PersonTileWrapper>
        <PersonImage src={posterLiu} alt="poster of Lui" />
        <ContentPerson>
            <PersonName>Liu Yifei Long Name Long name</PersonName>
            {showSubtitle && <PersonSubtitle>Mulan</PersonSubtitle>}
        </ContentPerson>
    </PersonTileWrapper>
);