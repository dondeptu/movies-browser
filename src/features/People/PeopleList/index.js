import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import {
  selectPeople,
  selectPeopleState,
  fetchPopularPeople,
  selectTotalPages,
  selectTotalResults,
  fetchSearchPeopleResults
} from "../peopleSlice";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { useQueryParameter } from "../../../common/Navigation/Search/queryParameters";

import { Pagination } from "../../../common/Pagination";
import { Error } from "../../../common/Error";
import { Loading } from "../../../common/Loading";
import { NoResults } from "../../../common/NoResults";
import { pageQueryParamName, searchQueryParamName } from "../../../common/Navigation/Search/QueryParamName";

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const peopleCount = people?.results?.length || 0;
  const { loading, error } = useSelector(selectPeopleState);
  const searchQuery = useQueryParameter(searchQueryParamName) || "";
  const page = Number(useQueryParameter(pageQueryParamName)) || 1;

  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);


  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchPeopleResults({
          page,
          searchQuery,
          searchType: "person"
        })
      );
    } else {
      dispatch(fetchPopularPeople(page));
    }
  }, [dispatch, page, searchQuery]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : peopleCount > 0 ? (
        <>
          <MainContent
            mainHeader={searchQuery ? `Search results for "${searchQuery}" (${totalResults})` : "Popular people"}
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
          <Pagination
            page={page}
            totalPages={totalPages}
          />
        </>
      ) : (
        <MainContent
          mainHeader={searchQuery ? `Sorry, there are no results for "${searchQuery}"` : "No people available"}
          body={<NoResults />}
        />
      )}
    </Wrapper>
  )
}

export default PeopleList;
