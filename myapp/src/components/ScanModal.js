import { Component } from "react";
import { Modal } from "antd";
import TakeAction from "./TakeAction";
import AddVehicle from "./AddVehicle";

const ScanModal = (props) => {
    const handleVehicleExists = () => {
        return(
            <div>
                <div className="flex-container" style={{paddingBottom:'10px'}}>
                    <p>Vehicle No.</p>
                    <div style={{paddingLeft:'20px'}}>
                        {props.vehicle.vehicleno}
                    </div>
                </div>

                <div className="flex-container" style={{paddingBottom:'10px'}}>
                    <p>Driver's Name</p>
                    <div style={{paddingLeft:'20px'}}>
                        {props.vehicle.drivername}
                    </div>
                </div>

                <div className="flex-container" style={{paddingBottom:'10px'}}>
                    <p>Departed From</p>
                    <div style={{paddingLeft:'20px'}}>
                        {props.vehicle.dayFrom}
                    </div>
                </div>

                <div className="flex-container" style={{paddingBottom:'10px'}}>
                    <p>Bound To</p>
                    <div style={{paddingLeft:'20px'}}>
                        {props.vehicle.dayTo}
                    </div>
                </div>

                <div className="flex-container" style={{paddingBottom:'10px'}}>
                    <p>Current Status</p>
                    <div style={{paddingLeft:'20px'}}>
                        {props.vehicle.status}
                    </div>
                </div>

                <div>
                    <TakeAction vehicle = {props.vehicle}/>
                </div>
            </div>
        );
    }

    const handleVehicleNotExists = () => {
        return(
            <div>
                <p>Vehicle is not inbound.Please add the vehicle manually with confirmation of the supervisor.</p>
            </div>
        );
    }
    
        if(props.context==true)
        {
            return(
                <div>
                    <Modal title="Vehicle Info" visible={props.visible} onCancel={props.onCancel} footer={null}>
                        {handleVehicleExists()}
                    </Modal>
                </div>
            );
        }
        else{
            return(
                <div>
                    <Modal title="Vehicle Info" visible={props.visible} onCancel={props.onCancel} footer={null}>
                        {handleVehicleNotExists()}
                        <AddVehicle/>
                    </Modal>
                </div>
            );
        }

}
export default ScanModal;
