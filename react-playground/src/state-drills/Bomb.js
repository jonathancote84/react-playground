import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bomb: 'tick',
            count: 0, 
            
        }
    }
    componentDidMount() {
        let interval = setInterval(() => {
              this.setState({count: this.state.count + 1 })
              if (this.state.count % 8 === 0){
                  this.setState({bomb: 'BOOM!!!!'});
                  clearInterval(interval)
                  console.log ('the bomb went off!')
              } else if (this.state.count % 2 === 0) {
                  this.setState({bomb:'tick'})
                  
              } else {
                  this.setState({bomb:'tock'})
              }
        }, 1000)
    }
    render () {
        return (
            <div>
                <p>{this.state.bomb}</p>
            </div>
        )
    }
}

export default Bomb
