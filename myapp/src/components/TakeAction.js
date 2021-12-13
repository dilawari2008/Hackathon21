import { Component } from "react";
import { Button } from 'antd';
import TakeActionModal from "./TakeActionModal";

class TakeAction extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    setIsModalVisible = (showModal) => {
        this.setState({
            ...this.state,
            isModalVisible:showModal
        });
    }

    showModal = () => {
        this.setIsModalVisible(true);
    };

    handleCancel = () => {
        this.setIsModalVisible(false);
    };
    
    render() {
        return(
            <div>
                <Button type="primary" ghost style={{borderRadius : '0px'}} onClick={this.showModal}>
                    Take Action
                </Button>
                <TakeActionModal visible={this.state.isModalVisible} onCancel={this.handleCancel} vehicle = {this.props.vehicle}/>
            </div>
        );
    }
}

export default TakeAction;