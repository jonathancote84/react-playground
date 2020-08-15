import React, { Component } from 'react'
import langaugeSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {
    static contextType = LanguageContext;

    render() {
        const copy = langaugeSpecificCopy[this.context.lang] || {}
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button 
                    onClick={() => this.context.setLang('klingon')}
                >
                    Klingon!{' '}
                    <span role='img' aria-label='klingon'>🖖</span>
                </button>
            </section>
        )
    }
}

export default GreatGrandChild