import posterMulan from "../../images/posterMulan.png";
import { Genre } from "./Genre";
import { GenreItem } from "./Genre/styled";
import { Details, InfoContent, Poster, Rate, Ratings, ReleaseDate, StyledStar, Title, Votes, Wrapper } from "./styled";

export const MovieTile = () => (
    <>
        <Wrapper>
            <Poster src={posterMulan} alt="poster of mulan" />
            <InfoContent>
                <Details>
                    <Title>Mulan</Title>
                    <ReleaseDate>2020</ReleaseDate>
                    <Genre genres={[{ tag: 'Action' }, { tag: 'Adventure' }]} />
                </Details>
                <Ratings>
                    <StyledStar />
                    <Rate>7.8</Rate>
                    <Votes>35 votes</Votes>
                </Ratings>
            </InfoContent>
        </Wrapper>
    </>
);
