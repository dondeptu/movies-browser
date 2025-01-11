import posterMulan from "../../images/posterMulan.png";
import { Genre } from "./Genre";
import { Ratings } from "./Ratings";
import { Details, InfoContent, Poster, ReleaseDate, Title, Wrapper } from "./styled";

export const MovieTile = () => (
    <Wrapper>
        <Poster src={posterMulan} alt="poster of mulan" />
        <InfoContent>
            <Details>
                <Title>Mulan</Title>
                <ReleaseDate>2020</ReleaseDate>
                <Genre genres={[{ tag: 'Action' }, { tag: 'Adventure' }, { tag: 'Drama' }]} />
            </Details>
            <Ratings ratings={{ rate: '7,8', votes: '35' }} />
        </InfoContent>
    </Wrapper>
);
