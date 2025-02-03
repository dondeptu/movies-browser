import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { selectPeople, selectError, fetchPopularPeople, selectTotalPages, selectTotalResults } from "../peopleSlice";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { useQueryParameter } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { Pagination } from "../../../common/Pagination";

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const peopleCount = people?.results?.length || 0;
  const error = useSelector(selectError);
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
    <Wrapper>
      <MainContent
        mainHeader="Popular people"
        body={
          <PersonsContent>
            <PersonTile showSubtitle={false} />
            {/* <PersonTile extraMargin showSubtitle={false} />
            <PersonTile />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} />
            <PersonTile extraMargin showSubtitle={false} /> */}
          </PersonsContent>
        }
      />
      <Pagination
        page={page}
        totalPages={totalPages}
      />
    </Wrapper>
  );
}

export default PeopleList;
