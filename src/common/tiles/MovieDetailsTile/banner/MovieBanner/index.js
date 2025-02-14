import {
  Wrapper,  
  BannerContainer,
  BannerImage,
  BannerContent,
  Title,
} from "./styled.js";
import { Ratings } from "../MovieBanner/Ratings";
import { useState } from "react";

export const MovieBanner = ({ backdropPath, title, voteAverage, voteCount }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Wrapper>
      <BannerContainer >
        {backdropPath &&
          <BannerImage src={`https://image.tmdb.org/t/p/original${backdropPath}`} alt={`poster of ${title}`}
            className={imageLoaded ? "loaded" : ""}
            onLoad={() => setImageLoaded(true)}
          />
        }
        <BannerContent imageLoaded={imageLoaded}>
          {title ? <Title>{title}</Title> : <Title>Title not available</Title>}
          <Ratings ratings={{ rate: voteAverage, maxRate: '/ 10', votes: voteCount }} />
        </BannerContent>
      </BannerContainer>
    </Wrapper>
  );
};
