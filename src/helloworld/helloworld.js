import PropTypes from 'prop-types';

import React from 'react';

export default class HelloWorld extends React.Component {

    render() {
        return <p>I want to play {this.props.nome}!</p>;
    }
}

HelloWorld.propTypes = {
    // definindo que o tipo da variável esperada é uma string
    nome: PropTypes.string.isRequired
}