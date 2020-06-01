import React from 'react'
import Masonry from 'react-masonry-css';
import FetchError from '../shared/FetchError/FetchError';

const ShowMasonry = (props) => {

    const breakpointColumnsObj = {
        default: 5,
        1100: 3,
        425: 2,
        320: 1
    };

    if (props.error) {
        return <FetchError />
    } 
    return (
        <div className="masonry-container">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {props.gifs.map(gif => (
                    <a href={gif.url}>
                        <div className="my-masonry_item">
                            <img src={gif.images.fixed_width.url} alt="" />
                        </div>
                    </a>
                ))}
            </Masonry>
        </div>
    );
}

export default ShowMasonry;