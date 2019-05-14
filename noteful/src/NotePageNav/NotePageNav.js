import React from 'react'
import CircleButton from '../NavCircleButton/NavCircleButton'
import './NotePageNav.css'

export default function NotePageNav(props) {
    return (
        <div className='NotePageNav'>
            <CircleButton
                tag='button'
                role='link'
                onClick={() => props.history.goBack()}
                className='NotePageNav__back-button'
            >
                goBack
            </CircleButton>
            {props.folder && (
                <h3 className='NotePageNav__folder-name'>
                    {props.folder.name}
                </h3>
            )}
        </div>
    )
}

NotePageNav.defaultProps = {
    history: {
        goBack: () => {}
    }
}