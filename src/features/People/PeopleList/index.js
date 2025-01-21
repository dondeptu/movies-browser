import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Section } from "../../../common/Section";
import { Wrapper } from "../../../Wrapper";
import { selectPeople, selectError } from "../peopleSlice";
import { startFetch } from "../peopleSlice";

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const peopleCount = people?.results?.length;
  const totalPages = 500;
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(startFetch());
  }, [dispatch]);

  useEffect(() => {
  console.log(`Popular people (${peopleCount} people from ${totalPages} pages)`);
}, [peopleCount, totalPages]);

  if (error) {
    return <p>Error fetching people: {error}</p>;
  }

  return (
    <Wrapper>
      <Section sectionHeader="Popular people" body="" />
    </Wrapper>
  );
}

export default PeopleList;
