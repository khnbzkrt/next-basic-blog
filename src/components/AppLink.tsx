import React from 'react'
import Link, { LinkProps } from 'next/link'

interface ApplinkProps extends LinkProps {
    label: string
}

const AppLink: React.FC<ApplinkProps> = ({ href, label }) => {
    return (
        <Link href={href} >
            <a>{label}</a>
        </Link>
    )
}

export default AppLink
