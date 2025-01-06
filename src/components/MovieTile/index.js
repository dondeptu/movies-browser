import { TileImage, TileTags, TileTag, TileWrapper, TileSubTitle, TileDescription } from './styled.js';
import { TileContent, TileTitle } from '../commonStyle/styled.js';
import { ContentItem, NameItem, Production, ProductionItem } from '../ProductionInfo/styled.js';
import { Rating, RatingContainer, VoteEvaluation, RatingStar, MaxRating, NumbersOfVotes } from '../Rating/styled.js';
import posterMulan from '../../images/posterMulan.png';
import shapeStar from '../../images/Shapes/shapeStar.svg';


export const MovieTile = () => {

  return (
    <TileWrapper>
      <TileImage src={posterMulan} alt="" />

      <TileContent>
        <TileTitle>
          Mulan
        </TileTitle>

        <TileSubTitle>
          2020
        </TileSubTitle>

        <Production>
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
        </Production>

        <TileTags>
          <TileTag>
            Action
          </TileTag>
          <TileTag>
            Adventure
          </TileTag>
          <TileTag>
            Drama
          </TileTag>
        </TileTags>

        <RatingContainer>
          <Rating>
            <RatingStar src={shapeStar} alt="Star_rating" />
            <VoteEvaluation>
              7,8
            </VoteEvaluation>
          </Rating>
          <MaxRating>
            /10
          </MaxRating>
          <NumbersOfVotes>
            335 vote
          </NumbersOfVotes>
        </RatingContainer>

        <TileDescription>
          A young Chinese maiden disguises herself as a male warrior in order to save her father.
          Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
        </TileDescription>

      </TileContent>
    </TileWrapper>
  )
};
