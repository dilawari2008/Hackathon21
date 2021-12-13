import { Component } from "react";
import { Modal,Input } from "antd";
import { addVehicle } from '../redux/actionCreators/VehicleActions.js';
import {connect} from 'react-redux';

class AddVehicleModal extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            vehicleno:'',
            status:'',
            drivername:'',
            driverage: '',
            dayFrom: '',
            dayTo: '',
            date: '',
            time: '',
        }
    }
    handleOk(){
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes();
        if(this.state.vehicleno=='' || this.state.drivername=='' || this.state.driverage=='' || this.state.dayFrom=='' || this.state.dayTo=='')return;
        const vehicle = {
            ...this.state,
            status:'warehouse',
            date:date,
            time:time
        }
        this.props.addVehicle(vehicle);
        this.props.onOk();
    }
    setVehicleNo(e){
        this.setState({
            ...this.state,
            vehicleno:e.target.value
        });
    }
    setDriverName(e){
        this.setState({
            ...this.state,
            drivername:e.target.value
        });
    }
    setDriverAge(e){
        this.setState({
            ...this.state,
            driverage:e.target.value
        });
    }
    setFrom(e){
        this.setState({
            ...this.state,
            dayFrom:e.target.value
        });
    }
    setTo(e){
        this.setState({
            ...this.state,
            dayTo:e.target.value
        });
    }
    render(){
        return(
            <div>
                <Modal title="Approve Vehicle Entry" visible={this.props.visible} onOk={this.handleOk.bind(this)} onCancel={this.props.onCancel}>
                    <div className="flex-container" style={{paddingBottom:'10px'}}>
                        <p>Vehicle No.</p>
                        <div style={{paddingLeft:'20px'}}>
                            <Input placeholder="Enter Vehicle No." size='medium' onChange={(value)=>this.setVehicleNo(value)}/>
                        </div>
                    </div>
                    <div className="flex-container" style={{paddingBottom:'10px'}}>
                        <p>Driver's Name</p>
                        <div style={{paddingLeft:'20px'}}>
                            <Input placeholder="Enter Driver's Name" size='medium' onChange={(value)=>this.setDriverName(value)}/>
                        </div>
                    </div>
                    <div className="flex-container" style={{paddingBottom:'10px'}}>
                        <p>Driver's Age</p>
                        <div style={{paddingLeft:'20px'}}>
                            <Input placeholder="Enter Driver's Age" size='medium' onChange={(value)=>this.setDriverAge(value)}/>
                        </div>
                    </div>
                    <div className="flex-container" style={{paddingBottom:'10px'}}>
                        <p>Arrived From</p>
                        <div style={{paddingLeft:'20px'}}>
                            <Input placeholder="Enter Arrived From" size='medium' onChange={(value)=>this.setFrom(value)}/>
                        </div>
                    </div>
                    <div className="flex-container" style={{paddingBottom:'10px'}}>
                        <p>Bound To</p>
                        <div style={{paddingLeft:'20px'}}>
                            <Input placeholder="Enter Bound To" size='medium' onChange={(value)=>this.setTo(value)}/>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return({
        
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        addVehicle : (vehicle) => {
            dispatch(addVehicle(vehicle));
        }
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(AddVehicleModal);
