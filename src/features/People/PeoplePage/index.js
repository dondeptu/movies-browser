import { useDispatch, useSelector } from "react-redux";
import { MainContent } from "../../../common/MainContent";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { Wrapper } from "../../../Wrapper";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { fetchPeopleDetails } from "../peopleSlice";
import { Content } from "../../Movies/MovieList/styled";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { selectMovies } from "../../Movies/movieSlice";
import { PersonDetailsTile } from "../../../common/tiles/Persons/PersonDetailsTile";

function PeoplePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const peopleDetails = useSelector(selectPeopleDetails);
  const movies = useSelector(selectMovies);
  const movieCount = movies?.results?.length || 0;

  useEffect(() => {
    dispatch(fetchPeopleDetails(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      <MainContent
        mainHeader=""
        body={
          <PersonDetailsTile />
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
          <PersonsContent>
            <PersonTile />
            <PersonTile />
            <PersonTile />
          </PersonsContent>
        }
      />
    </Wrapper >
  );
}

export default PeoplePage;
