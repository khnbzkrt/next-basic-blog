import React from 'react'
import ListingElement from '../styles/ListingElement';
import PostPreview from '../types/PostPreview';
import AppLink from './AppLink';

interface ListingItemProps {
    post: PostPreview
}

const ListingItem: React.FC<ListingItemProps> = ({ post }) => {
    return (
        <ListingElement>
            <AppLink href="/blog/[slug]" as={`/blog/${post.slug}`} label={post.title}></AppLink>
            {post.excerpt && <p>{post.excerpt}</p>}
        </ListingElement>
    )
}

export default ListingItem;