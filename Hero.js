import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          I'm Naman Saini.
        </SectionTitle>
        <SectionText>
        I am a graduate Computer Science engineer who loves designing and developing complete Responsive websites and experimenting the web specially with React. Experinced in writing and understanding complex code.   
        </SectionText>
        {/*<Button onClick={props.handleClick}> Know More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;