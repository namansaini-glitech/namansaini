import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPhotoshop } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of technologies in the web development world,
    From front-end to back-end.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          HTML , CSS <br /> JavaScript <br />
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          flexible working with <br />
          Node and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiPhotoshop size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Designing</ListTitle>
        <ListParagraph>
          Adobe Photoshop <br /> Behance
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiZend size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Programming Languages</ListTitle>
        <ListParagraph>
          php <br />
          python
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;