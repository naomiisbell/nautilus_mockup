import React from 'react'
import Item1 from './assets/matches.png'

class Modal extends React.Component {
    render() {
        return (
            <div className="firstImg">
                <img className="matchesImg" src={Item1}></img>
            </div>
        )
    }
}

export default Modal;