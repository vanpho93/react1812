import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtVn: '', txtEn: '' }
    }
    render() {
        if (!this.props.shouldShowForm) return (
            <button
                className="btn btn-success"
            >
                Create new word
            </button>
        );
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    placeholder="English"
                    className="form-control"
                    value={this.state.txtEn}
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={this.state.txtVn}
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <button
                    className="btn btn-success"
                >
                    Add word
                </button>
                <button
                    className="btn btn-warning"
                >
                    Cancel
                </button>
            </div>
        );
    }
}

const mapStates = state => ({ shouldShowForm: state.shouldShowForm });

export const WordForm = connect(mapStates)(WordFormComponent);
