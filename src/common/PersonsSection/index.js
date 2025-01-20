import { SectionPerson, PersonsHeader } from "./styled";

const PersonsSection = ({ header, body }) => (
  <>
    <PersonsHeader>{header}</PersonsHeader>
    <SectionPerson>{body}</SectionPerson>
  </>
);

export default PersonsSection;