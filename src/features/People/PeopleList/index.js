import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainContent } from "../../../common/MainContent";
import { Wrapper } from "../../../Wrapper";
import { selectPeople, selectPeopleState } from "../peopleSlice";
import { startFetchPeople } from "../peopleSlice";
import { PersonsContent } from "../../../common/tiles/Persons/styled";
import { PersonTile } from "../../../common/tiles/Persons/PersonTile";
import { Error } from "../../../common/Error";
import { Loading } from "../../../common/Loading";

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const peopleCount = people?.results?.length;
  const { loading, error } = useSelector(selectPeopleState);

  useEffect(() => {
    dispatch(startFetchPeople());
  }, [dispatch]);

  return (
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
  );
}

export default PeopleList;
