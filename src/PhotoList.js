import React from 'react';

export default class PhotoList extends React.Component {

    state = {
        picturesUrl: []
    };

    componentDidMount() {
        const arrId = [2, 7, 1, 8, 3, 9];
        const apiUrl = 'https://picurl.herokuapp.com/users/';

        Promise.all(arrId.map(id =>
            fetch(apiUrl + id)
                .then(res => res.json())
                .catch(error => {
                    throw error
                })
        ))
            .then(results =>
                this.setState({
                    picturesUrl: results
                })
            )
    }

    render() {
        return (
            <div>
                {this.state.picturesUrl.map(picture =>
                    <img key={picture.url} src={picture.url} alt="new" className="round"/>
                )}
            </div>
        )
    }}