import React, { Component } from 'react';
import { Word } from '../shared/Word';

export class ListWord extends Component {
    genWord(word) {
        return (
            <div key={word._id}>
                <h3>{word.en}</h3>
                <p>{word.vn}</p>
            </div>
        );
    }

    render() {
        const arr = [
            { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
            { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
            { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
        ]
        return (
            <div>
                { arr.map(word => <Word wordInfo={word} key={word._id} />) }
            </div>
        );
    }
}