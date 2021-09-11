import React, { ReactElement } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import LayoutElement from '../styles/LayoutElement'

interface LayoutProps {
    pageTitle: string,
    description?: string
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children, description = 'NextJs Blog' }) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content="@argentinux" key="twhandle" />

                <title>NextJs | {pageTitle}</title>
            </Head>
            <LayoutElement>
                <Header></Header>
                <main>{children}</main>
                <Footer></Footer>
            </LayoutElement>
        </>
    )
}

export default Layout