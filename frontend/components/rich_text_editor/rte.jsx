import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';

class TextEditor extends Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            onChange: PropTypes.func,
            value: RichTextEditor.createEmptyValue()
        };
        this.onChange = this.onChange.bind(this);
    };

    onChange(value) {
        this.setState({ value });
        if (this.state.onChange) {
            // Send the changes up to the parent component as an HTML string.
            // This is here to demonstrate using `.toString()` but in a real app it
            // would be better to avoid generating a string on each change.
            this.state.onChange(
                value.toString('html')
            );
        }
    };

    render() {
        return (
            <RichTextEditor
                value={this.state.value}
                onChange={this.onChange}
            />
        );
    }
}

export default TextEditor;