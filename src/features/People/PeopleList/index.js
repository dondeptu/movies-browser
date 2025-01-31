import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { selectPeople } from "../peopleSlice";
import { startFetch } from "../peopleSlice";
import { resetPage } from "../../../common/Pagination/paginationSlice";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const peopleCount = people?.results?.length;

  useEffect(() => {
    dispatch(startFetch());
  }, [dispatch, people]);

  return (
    <Wrapper>
      {peopleCount > 0 ? (
        <MainContent
          mainHeader="Popular people"
          body={
            <PersonsContent>
              {people.results.map(({ id, profile_path, name }) => (
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
  );
}

export default PeopleList;
