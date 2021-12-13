import { Component } from "react";
import { Button } from 'antd';

class VehicleStatusButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            inbound: false,
            warehouse: false,
            dispatched: false
        }
    }

    render() {
        return(
            <div className="centerHorizontal">
                <Button type="primary"  ghost={!this.props.ghost} icon={this.props.icon} size='large' style={{borderRadius : '0px',border: 'none'}}
                onClick={()=> this.props.handleClick(this.props.buttonName)}
                >
                    {this.props.buttonName}
                </Button>
            </div>
        );
    }
}

export default VehicleStatusButton;