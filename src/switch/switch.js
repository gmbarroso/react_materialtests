import React, {Fragment} from 'react';

import Switch from 'material-ui/Switch';

class Switches extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkedA: false,
        };
    }


    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });

        // console.log(this.state.checkedA);
    };

    render() {
        return (
            // <div>
            <Fragment>
                <Switch className="printState" checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value="checkedA" />
                <span>{this.state.checkedA.toString()}</span>
            </Fragment>
            // </div>
        )
    }
}

export default Switches;