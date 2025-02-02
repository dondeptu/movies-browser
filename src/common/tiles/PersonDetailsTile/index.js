
import { theme } from "../../../theme.js";
import { useEffect, useState } from 'react';
import { InfoAboutBirth } from './InfoAboutBirth/index.js';
import { PersonDescription } from '../MovieDetailsTile/Description/index.js';
import { Poster, PosterWrapper, TileContent, TileTitle, Wrapper } from "../MovieDetailsTile/styled.js";
import posterLiu from "../../../images/posterLiu.png";
// import { MissingPoster } from '../MissingPoster/index.js';

export const PersonDetailsTile = () => {

  const personName = "Liu Yifei";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= theme.breakpoint.mobileMax);
  const handleResize = () => setIsMobile(window.innerWidth <= theme.breakpoint.mobileMax);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const personDescriptionText = "Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.";


  return (
    <Wrapper>
      <PosterWrapper>
        <Poster src={posterLiu} alt="poster of Liu" />
        {/* {Poster ? (
          <Poster src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`poster of ${title}`} />
        ) : (
          <MissingPoster />
        )} */}
      </PosterWrapper>
      <TileContent>
        {personName ? <TileTitle>{personName}</TileTitle> : <TileTitle>Person name not available</TileTitle>}
        <InfoAboutBirth info={{ dateOfBirth: "25.08.1987", placeOfBirth: "Wuhan, Hubei, China" }} />
      </TileContent>
      <PersonDescription personDescription={personDescriptionText} />
    </Wrapper >
  )
};