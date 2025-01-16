import { SectionPerson, PersonsHeader } from "./styled.js";

const PersonsSection = ({ title, body }) => (
  <>
    <PersonsHeader>{title}</PersonsHeader>
    <SectionPerson>{body}</SectionPerson>
  </>
);

export default PersonsSection;