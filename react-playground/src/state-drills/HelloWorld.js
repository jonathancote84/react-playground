import React from 'react';


 class HelloWorld extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            clicked: 'world'
        }
    }

    handleWorld = () => {
        this.setState({
            clicked: 'world'
        })
    }
    handleFriend = () => {
        this.setState({
            clicked: 'friend'
        })
    }
    handleReact = () => {
        this.setState({
            clicked: 'react'
        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.clicked}!</p>
                <button onClick={this.handleWorld}>World</button>
                <button onClick={this.handleFriend}>Friend</button>
                <button onClick={this.handleReact}>React</button>
            </div>
        )
    }
 }

 export default HelloWorld