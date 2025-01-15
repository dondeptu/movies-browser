import { PersonImage, PersonName, PersonSubtitle, PersonTileContent, PersonTileWrapper } from "./styled";
import posterLui from "../../images/posterLui.png";

export const PersonTile = () => (
    <PersonTileWrapper>
        <PersonImage src={posterLui} alt="poster of Lui" />
        <PersonTileContent>
            <PersonName>Lui</PersonName>
            <PersonSubtitle>Mulan</PersonSubtitle>
        </PersonTileContent>
    </PersonTileWrapper>
);