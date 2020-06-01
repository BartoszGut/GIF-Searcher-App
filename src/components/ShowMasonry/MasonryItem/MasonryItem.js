import React from 'react'

const MasonryItem = (props) => {
    return (
        <a href={props.url}>
            <div className="my-masonry_item">
                <img src={props.image} alt="" />
            </div>
        </a>
    );
}

export default MasonryItem;