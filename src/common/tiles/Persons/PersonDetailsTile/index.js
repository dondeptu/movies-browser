import { Poster, Wrapper, TileTitle, ReleaseDate, TileContent, PosterWrapper } from './styled.js';
import { ProductionInfo } from './ProductionInfo/index.js';
import { Ratings } from './Ratings/index.js';
import { MovieDescription } from './Description/index.js';
import { Genre } from './Genre/index.js';
import { theme } from "../../../theme.js";
import { useEffect, useState } from 'react';
import { MissingPoster } from '../MissingPoster/index.js';

export const PersonDetailsTile = () => { 

  const [isMobile, setIsMobile] = useState(window.innerWidth <= theme.breakpoint.mobileMax);

  const handleResize = () => setIsMobile(window.innerWidth <= theme.breakpoint.mobileMax);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <Wrapper>
      <PosterWrapper>
        {posterPath ? (
          <Poster src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`poster of ${title}`} />
        ) : (
          <MissingPoster />
        )}
      </PosterWrapper>
      <TileContent>
        {title ? <TileTitle>{title}</TileTitle> : <TileTitle>Title not available</TileTitle>}
        {releaseDate ? <DateOfBirth as ='ReleaseDate'>{releaseDate.slice(0, 4)}</DateOfBirth> : <DateOfBirth as = 'ReleaseDate'>Unknown date of birth</DateOfBirth>}
        <PlaceOfBirth as='ProductionInfo' info={{ productionCountries: getCountries(productionCountries), date: formatDate(releaseDate) }} />        
      </TileContent>
      <MovieDescription movieDescription={{ description: overview }} />
    </Wrapper >
  )
};