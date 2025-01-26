import { MainContent } from "../../../common/MainContent";
import { PersonTile } from "../../../common/Persons/PersonTile";
import { PersonsContent } from "../../../common/Persons/styled";
import { Wrapper } from "../../../Wrapper";

function PeoplePage() {
  return (
    <Wrapper>
      <MainContent
        mainHeader="Popular people"
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
