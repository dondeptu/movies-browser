import { TileImage, TileTags, TileTag, TileWrapper, TileTitle, TileSubTitle, TileDescription } from './styled.js';
import { TileContent } from '../commonStyle/styled.js';
import { Rating, RatingContainer, VoteEvaluation, RatingStar, MaxRating, NumbersOfVotes } from '../Rating/styled.js';
import posterMulan from '../../images/posterMulan.png';
import shapeStar from '../../images/Shapes/shapeStar.svg';
import { ProductionInfo } from '../ProductionInfo/index.js';


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

        <ProductionInfo />

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

      </TileContent>

      <TileDescription>
        A young Chinese maiden disguises herself as a male warrior in order to save her father.
        Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
      </TileDescription>

    </TileWrapper>
  )
};
