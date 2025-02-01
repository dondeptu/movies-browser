import { Poster, Wrapper, TileTitle, ReleaseDate, TileContent, PosterWrapper } from './styled.js';
import { ProductionInfo } from './ProductionInfo/index.js';
import { Ratings } from './Ratings/index.js';
import { MovieDescription } from './Description/index.js';
import { Genre } from './Genre/index.js';
import { theme } from "../../../theme.js";
import { useEffect, useState } from 'react';
import { MissingPoster } from '../MissingPoster/index.js';
import posterLiu from  '../../../images/posterLiu.png';

export const PeopleDetailsTile = ({
  posterPath,
  title,
  productionCountries,
  releaseDate,
  genres,
  voteAverage,
  voteCount,
  overview
}) => {

  const formatDate = (date) => {
    if (date) {
      const [year, month, day] = date.split('-');
      return `${day}.${month}.${year}`;
    }
    return "Unknown";
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= theme.breakpoint.mobileMax);

  const handleResize = () => setIsMobile(window.innerWidth <= theme.breakpoint.mobileMax);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getCountries = (countries) => {
    if (!countries)
      return "Unknown";

    return countries.map((country) => {
      if (isMobile && country.name?.includes(' ')) {
        return country.iso_3166_1;
      } else {
        return country.name || "Unknown";
      }
    })
      .join(', ');
  };

  return (
    <Wrapper>
      <PosterWrapper>
        {posterPath ? (
          <Poster src={posterLiu} alt="poster of Liu" />
        ) : (
          <MissingPoster />
        )}
      </PosterWrapper>
      <TileContent>
        {title ? <TileTitle>{title}</TileTitle> : <TileTitle>Title not available</TileTitle>}
        {releaseDate ? <ReleaseDate>{releaseDate.slice(0, 4)}</ReleaseDate> : <ReleaseDate>Unknown release date</ReleaseDate>}
        <ProductionInfo info={{ productionCountries: getCountries(productionCountries), date: formatDate(releaseDate) }} />
        <Genre genres={genres} />
        <Ratings ratings={{ rate: voteAverage, maxRate: '/ 10', votes: voteCount }} />
      </TileContent>
      <MovieDescription movieDescription={{ description: overview }} />
    </Wrapper >
  )
};