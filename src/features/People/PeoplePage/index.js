import { PersonTile } from "../../../common/Persons/PersonTile";
import { PersonsContent } from "../../../common/Persons/styled";
import { Section } from "../../../common/Section";
import { Wrapper } from "../../../Wrapper";

function PeoplePage() {
  return (
    <Wrapper>
      <Section
        sectionHeader="Popular people"
        body={
          <PersonsContent>
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
            <PersonTile showSubtitle={false} />
          </PersonsContent>
        }
      />
    </Wrapper>
  );
}

export default PeoplePage;
