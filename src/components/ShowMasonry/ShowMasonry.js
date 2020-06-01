import React from 'react'
import Masonry from 'react-masonry-css';
import FetchError from '../shared/FetchError/FetchError';
import MasonryItem from './MasonryItem/MasonryItem';

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
                    <MasonryItem key={gif.id} image={gif.images.fixed_width.url}/>
                ))}
            </Masonry>
        </div>
    );
}

export default ShowMasonry;