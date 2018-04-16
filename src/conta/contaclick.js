import React from 'react';
import './contaclick.css';

import Button from 'material-ui/Button';


// export default class ContaClick extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             clicks: 0
//         }
//     }

//     maisUm = () => this.setState({ clicks: this.state.clicks + 1 });
//     menosUm = () => this.setState({ clicks: this.state.clicks - 1 });
    

//     render() {
//         return (
//             <div>
//                 <h2>How many clicks?</h2>
//                 <p>{this.state.clicks}</p>
//                 {/* <button onClick={this.maisUm}> +1 </button>
//                 <button className="menosUm" onClick={this.menosUm}> -1 </button>                 */}
//                 <Button variant="raised" color="primary" onClick={this.maisUm}>
//                     +1
//                 </Button>
//                 <Button className ="menosUm" variant="raised" color="secondary" onClick={this.menosUm}>
//                     -1
//                 </Button>
//             </div>
//         )
//     }
// }

import { withStyles } from 'material-ui';

const styles = {
    menosUm: {
        marginLeft: 10,
    }
}

class ContaClick extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clicks: 0
        }
    }

    maisUm = () => this.setState({ clicks: this.state.clicks + 1 });
    menosUm = () => this.setState({ clicks: this.state.clicks - 1 });
    

    render() {
        return (
            <div>
                <h2>How many clicks?</h2>
                <p>{this.state.clicks}</p>
                {/* <button onClick={this.maisUm}> +1 </button>
                <button className="menosUm" onClick={this.menosUm}> -1 </button>                 */}
                <Button variant="raised" color="primary" onClick={this.maisUm}>
                    +1
                </Button>
                <Button className ={this.props.classes.menosUm} variant="raised" color="secondary" onClick={this.menosUm}>
                    -1
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(ContaClick);
