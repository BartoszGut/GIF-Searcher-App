import React from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm/SearchForm';
import ShowMasonry from '../components/ShowMasonry/ShowMasonry';

const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=fVHf3cJuIKttAuNe59TVG9gARnxlirSd';

class GiphyGifs extends React.Component {

    state = {
        gifs: [],
        query: '',        
        error: null
    };

    handleInputChange = e => {
        this.setState({
            query: e.target.value
        })
    }

    handleChangeSubmit = e => {
        e.preventDefault();
        axios.get(API_URL, {
            params: {
                q: this.state.query,
                limit: 50,
                offset: 0,
                rating: 'G',
                lang: 'en'
            }
        }).then(({ data: { data } }) => {
            this.setState({ gifs: data });
        }).catch(error => {
            this.setState({ error });
        });
    }

    handleChangeReset = e => {
        this.setState({
            gifs: [],
            query: ''
        })
    }

    render() {
        const { gifs, loading, error, } = this.state;
        return (
            <>
                <SearchForm
                    value={this.state.query}
                    change={this.handleInputChange}
                    submit={this.handleChangeSubmit}
                    reset={this.handleChangeReset}
                />
                <ShowMasonry
                    gifs={gifs}
                    loading={loading}
                    error={error}
                />
            </>
        )
    }

}

export default GiphyGifs;