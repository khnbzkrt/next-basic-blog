import React from 'react'
import ButtonElement from '../styles/ButtonElement';
import { HeroContainer } from '../styles/Containers';
import { Paragraph, Title } from '../styles/TextElements';

interface HeroProps {

}

const Hero: React.FC<HeroProps> = () => {
    return (
        <HeroContainer>
            <Title hero>NextJs Blog</Title>
            <Paragraph light>Create a blog with NextJs and Typescript</Paragraph>
            <ButtonElement>Subscribe</ButtonElement>
        </HeroContainer>
    )
}

export default Hero;