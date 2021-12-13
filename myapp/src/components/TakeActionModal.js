import { Component } from "react";
import { Modal,Button } from "antd";
import { connect } from 'react-redux';
import { changeStatus } from '../redux/actionCreators/VehicleActions.js';

class TakeActionModal extends Component {
    render(){
        const {vehicle} = this.props;
        const nextStatus = vehicle.status=='inbound'?'warehouse':(vehicle.status=='warehouse'?'dispatched':null);
        const prevStatus = vehicle.status=='inbound'?null:(vehicle.status=='warehouse'?'inbound':'warehouse');
        console.log("vehicle received",vehicle);


        return(
            <div>
                <Modal title={'Take Action For - '+ vehicle.drivername+ ' ' + vehicle.vehicleno} visible={this.props.visible} onCancel={this.props.onCancel} footer={null} >
                    <div >
                        <Button style={{width:'100%',marginTop:'10px',marginBottom:'5px'}} type='primary'
                            disabled = {vehicle.status == 'dispatched'}
                            onClick = {() => this.props.changeStatus(vehicle.vehicleno,nextStatus)}
                        >
                        {nextStatus == null?'Proceed':'Proceed To - ' + nextStatus}
                        </Button>
                    </div>
                    <div>
                        <Button style={{width:'100%',marginTop:'5px',marginBottom:'10px'}}  type='primary'
                            disabled = {vehicle.status == 'inbound'}
                            onClick = {() => this.props.changeStatus(vehicle.vehicleno,prevStatus)}
                        >
                        {prevStatus==null?'Revert':'Revert To - ' + prevStatus}
                        </Button>
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
        changeStatus : (vehicleno,newStatus) => {
            dispatch(changeStatus(vehicleno,newStatus));
        }
    });
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(TakeActionModal);
