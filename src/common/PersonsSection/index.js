import { SectionPerson, Section, TitleSection } from "./styled.js";

const PersonsSection = ({ title, body }) => (
  <Section>
    <TitleSection>{title}</TitleSection>
    <SectionPerson>
      {body}
    </SectionPerson>
  </Section>
);

export default PersonsSection;