import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { selectPeople, selectPeopleState, selectError, fetchPopularPeople, selectTotalPages, selectTotalResults } from "../peopleSlice";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { useQueryParameter } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { Pagination } from "../../../common/Pagination";
import { Error } from "../../../common/Error";
import { Loading } from "../../../common/Loading";

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const peopleCount = people?.results?.length || 0;
  const { loading, error } = useSelector(selectPeopleState);
  const searchQuery = useQueryParameter(searchQueryParamName) || "";

  const { search } = useLocation();
  const page = Number(new URLSearchParams(search).get("page")) || 1;

  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);


  useEffect(() => {
    dispatch(fetchPopularPeople(page));
  }, [dispatch, page]);

  if (error) {
    return <p>Error fetching people: {error}</p>;
  }

  return (
    <>
      <Wrapper>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : peopleCount > 0 ? (
          <MainContent
            mainHeader="Popular people"
            body={
              <PersonsContent>
                {people?.results?.map(({ id, profile_path, name }) => (
                  <PersonTile
                    extraMargin={true}
                    showSubtitle={false}
                    key={id}
                    id={id}
                    profilePath={profile_path}
                    name={name}
                  />
                ))}
              </PersonsContent>
            }
          />
        ) : (
          <p>No people found</p>
        )}
      </Wrapper>
      <Pagination
        page={page}
        totalPages={totalPages}
      />
    </>
  )
}

export default PeopleList;
