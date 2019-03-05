import React, { Component } from 'react';

export default class Input extends Component {

    onChange = (e) => {
        e.persist();
        this.props.onChange(e.target.value);
    }

    render() {
        const { value, placeholder } = this.props;

        return <input type="text" placeholder={placeholder} value={value} onChange={this.onChange.bind(this)} />
    }
}