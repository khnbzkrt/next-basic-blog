import React from 'react'
import { Container } from '../styles/Containers';
import HeaderElement from '../styles/HeaderElement';
import { Logo } from '../styles/TextElements';
import AppLink from './AppLink';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderElement>
            <Container>
                <Logo>
                    <AppLink href="/" label="Next.js"></AppLink>
                </Logo>
                <nav>
                    <AppLink href="/about" label="About"></AppLink>
                    <AppLink href="/contact" label="Contact"></AppLink>
                </nav>
            </Container>
        </HeaderElement>
    )
}
export default Header;