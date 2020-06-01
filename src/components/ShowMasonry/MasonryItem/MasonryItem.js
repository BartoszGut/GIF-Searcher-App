import React from 'react'

const MasonryItem = ({ url, image }) => {
    return (
        <div className="my-masonry_item">
            <img src={image} alt="" />
        </div>
    );
}

export default MasonryItem;