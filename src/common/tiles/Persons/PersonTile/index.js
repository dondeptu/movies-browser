import { PersonImage, PersonName, PersonSubtitle, PersonTileWrapper } from "./styled";
import posterLiu from "../../../../images/posterLiu.png";

export const PersonTile = () => (
    <PersonTileWrapper>
        <PersonImage src={posterLiu} alt="poster of Lui" />
        <PersonName>Liu Yifei</PersonName>
        <PersonSubtitle>Mulan</PersonSubtitle>
    </PersonTileWrapper>
);