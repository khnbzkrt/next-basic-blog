import React from 'react'
import Layout from '../components/Layout';
import { Container } from '../styles/Containers';
import { Paragraph, Title } from '../styles/TextElements';

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
    return (
        <Layout pageTitle="About">
            <Container>
                <Title>About</Title>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem, rerum, possimus voluptatibus consectetur earum sed assumenda animi itaque expedita adipisci ea. Quisquam eveniet tempore consectetur sed dolorum assumenda soluta.</Paragraph>
            </Container>
        </Layout>
    )
}

export default About;