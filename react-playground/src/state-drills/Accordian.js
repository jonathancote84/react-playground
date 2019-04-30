import React, { Component } from "react";


//extend Accordians component
export default class Accordian extends React.Component {
    static defaultProps = {
        //default props set as empty array
        section: []
    };

    //set state null 
    state = {
        //just sets a key of activeSectionIndex: to null so we have a place to index the active section
        activeSectionIndex: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }

    renderItem(section, idx, activeSectionIndex) {
        return (
            <li className='Accordian_item' key={idx}>
                <button 
                    type='button'
                    onClick={() => this.handleSetActiveSection(idx)}
                >
                    {section.title}
                </button>
                {(activeSectionIndex === idx) && <p>{section.content}</p>}
            </li>
        )
    }
    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordian' >
                {sections.map((section, idx) => 
                    this.renderItem(section, idx, activeSectionIndex)
                )}
            </ul>
        )
    }
}