import { Component } from "react";
import { Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import AddVehicleModal from "./AddVehicleModal";

class AddVehicle extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    setIsModalVisible = (context) => {
        this.setState({
            ...this.state,
            isModalVisible:context
        });
    }

    showModal = () => {
        this.setIsModalVisible(true);
    };
    
    handleOk = () => {
        this.setIsModalVisible(false);
    };
    
    handleCancel = () => {
        this.setIsModalVisible(false);
    };
    
    render() {       
        
        return(
            <div className="centerHorizontal">
                <Button type="primary"  icon={<UserAddOutlined />} size='large' style={{borderRadius : '0px'}} onClick={this.showModal}>
                    Approve Vehicle Manually
                </Button>
                <AddVehicleModal visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}/>
            </div>
        );
    }
}

export default AddVehicle;