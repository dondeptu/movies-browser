import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Wrapper } from "../../../Wrapper";
import { MainContent } from "../../../common/MainContent";
import { Content } from "../../Movies/MovieList/styled";
import { PersonDetailsTile } from "../../../common/tiles/PersonDetailsTile";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { selectMovies } from "../../Movies/movieSlice";
import { fetchPeopleDetails, selectPeopleDetails } from "../peopleSlice";

function PeoplePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;
  const peopleDetails = useSelector(selectPeopleDetails);

  useEffect(() => {
    dispatch(fetchPeopleDetails(id));
  }, [dispatch, id]);

  const castCharacter = "Mulan";
  const crewJob = "Director";

  return (
    <Wrapper>
      <MainContent
        mainHeader=""
        body={
          <PersonDetailsTile personDetailsSize />
          //     peopleDetails ? (
          //     <PersonDetailsTile />
          //   ):(
          //   <p>No details available</p>
          // )          
        }
      />
      <MainContent
        mainHeader="Movies - cast"
        body={
          <Content>
            {movieCount > 0 ? (
              movies.results.map(({ id, poster_path, title, release_date, genre_ids, vote_average, vote_count }) => (
                <MovieTile
                  key={id}
                  id={id}
                  posterPath={poster_path}
                  title={title}
                  castCharacter={castCharacter}
                  releaseDate={release_date}
                  genreIds={genre_ids}
                  voteAverage={vote_average}
                  voteCount={vote_count}
                />
              ))
            ) : (
              <p>No movies available</p>
            )}
          </Content>
        }
      />
      < MainContent
        mainHeader="Movies - crew"
        body={
          <Content>
            {movieCount > 0 ? (
              movies.results.map(({ id, poster_path, title, release_date, genre_ids, vote_average, vote_count }) => (
                <MovieTile
                  key={id}
                  id={id}
                  posterPath={poster_path}
                  title={title}
                  crewJob={crewJob}
                  releaseDate={release_date}
                  genreIds={genre_ids}
                  voteAverage={vote_average}
                  voteCount={vote_count}
                />
              ))
            ) : (
              <p>No movies available</p>
            )}
          </Content>
        }
      />
    </Wrapper >
  );
}

export default PeoplePage;
