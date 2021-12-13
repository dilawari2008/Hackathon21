import { Component } from "react";
import VehicleTableDispatched from "./VehicleTableDispatched";
import VehicleTableInbound from "./VehicleTableInbound";
import VehicleTableWarehouse from "./VehicleTableWarehouse";

class VehicleTable extends Component {
    render(){
        if(this.props.tableContext.inbound==true){
            return(
                <div>
                    <VehicleTableInbound/>
                </div>
            );
        }
        else if(this.props.tableContext.warehouse==true){
            return(
                <div>
                    <VehicleTableWarehouse/>
                </div>
            );
        }
        else if(this.props.tableContext.dispatched==true){
            return(
                <div>
                    <VehicleTableDispatched/>
                </div>
            );
        }
        else{
            return(
                <div>

                </div>
            );
        }
        }
}

export default VehicleTable;