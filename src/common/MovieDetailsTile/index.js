import { Poster, Wrapper, TileTitle, ReleaseDate, TileContent } from './styled.js';
import { ProductionInfo } from './ProductionInfo/index.js';
import { Ratings } from './Ratings/index.js';
import { MovieDescription } from './Description/index.js';
import { Genre } from './Genre/index.js';
import { theme } from "../../theme.js";
import { useEffect, useState } from 'react';

export const MovieDetailsTile = ({
  poster_path,
  title,
  production_countries,
  release_date,
  vote_average,
  vote_count,
  overview
}) => {

  const formatDate = (date) => {
    if (date) {
      const [year, month, day] = date.split('-');
      return `${day}.${month}.${year}`;
    }
    return "";
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
      return "";

    return countries.map((country) => {
      if (isMobile && country.name.includes(' ')) {
        return country.iso_3166_1;
      } else {
        return country.name;
      }
    })
      .join(', ');
  };

  return (
    <Wrapper>
      <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`poster of ${title}`} />
      <TileContent>
        {title && <TileTitle>{title}</TileTitle>}
        {release_date && <ReleaseDate>{release_date.slice(0, 4)}</ReleaseDate>}
        <ProductionInfo info={{ productionCountries: getCountries(production_countries), date: formatDate(release_date) }} />
        <Genre genres={[{ tag: 'Action' }, { tag: 'Adventure' }, { tag: 'Drama' }]} />
        <Ratings ratings={{ rate: vote_average, maxRate: '/ 10', votes: vote_count }} />
      </TileContent>
      <MovieDescription movieDescription={{ description: overview }} />
    </Wrapper>
  )
};