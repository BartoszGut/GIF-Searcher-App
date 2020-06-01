import React from 'react'

const MasonryItem = ({url,image}) => {
    return (
        <a href={url}>
            <div className="my-masonry_item">
                <img src={image} alt="" />
            </div>
        </a>
    );
}

export default MasonryItem;