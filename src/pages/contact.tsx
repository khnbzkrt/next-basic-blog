import React from 'react'
import Layout from '../components/Layout';
import { Container } from '../styles/Containers';
import { Paragraph, Title } from '../styles/TextElements';

interface ContactProps {

}

const Contact: React.FC<ContactProps> = () => {
    return (
        <Layout pageTitle="Contact">
            <Container>
                <Title>Contact</Title>
                <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ut magnam earum, ipsa ex dignissimos, inventore voluptate tempore corrupti veritatis voluptatem beatae doloremque, quibusdam dolorem possimus. Impedit laboriosam saepe aliquam? </Paragraph>
            </Container>
        </Layout>
    )
}

export default Contact;