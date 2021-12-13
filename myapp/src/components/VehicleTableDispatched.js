import { Component } from "react";
import { Table } from 'antd';
import TakeAction from "./TakeAction";
import {connect} from 'react-redux';

class VehicleTableDispatched extends Component {    
      
    render() {
        const columns = [
            {
                title: 'Serial No.',
                width: 70,
                dataIndex: 'slno',
                key: 'slno',
                align: 'center',
                fixed: 'left'
              },
            {
              title: 'Vehicle No.',
              width: 100,
              dataIndex: 'vehicleno',
              key: 'vehicleno',
              align: 'center',
              fixed: 'left'
            },
            {
                title: 'Current Status',
                width: 100,
                dataIndex: 'status',
                key: 'status',
                align: 'center',
                fixed: 'left'
            },
            {
              title: 'Driver\'s Name',
              width: 100,
              dataIndex: 'drivername',
              key: 'drivername',
              align: 'center',
            },
            {
              title: 'Driver Age',
              dataIndex: 'age',
              width: 100,
              key: 'age',
              align: 'center',
            },
            {
              title: 'Arriving From',
              dataIndex: 'from',
              key: 'from',
              width: 150,
              align: 'center',
            },
            {
              title: 'Bound To',
              dataIndex: 'to',
              key: 'to',
              width: 150,
              align: 'center',
            },
            {
              title: 'Date Of Dispatch',
              dataIndex: 'dod',
              key: 'dod',
              width: 100,
              align: 'center',
            },
            {
                title: 'Dispatch Time',
                dataIndex: 'dt',
                key: 'dt',
                width: 100,
                align: 'center',
              },
            {
              title: 'Action',
              key: 'operation',
              align: 'center',
              fixed: 'right',
              width: 150,
              render: (row) => {
                return(
                  <div>
                    <TakeAction vehicle = {row}/>
                  </div>
                );
              },
            },
          ];
          
          const data = this.props.vehicleData.filter( vehicle => {
            return (vehicle.status!='dispatched' ? false : true);
          } );
    
          const data1 = [];
    
          for (let i = 0; i < data.length; i++) {
            data1.push({
              key: i,
              slno: i+1,
              vehicleno: data[i].vehicleno,
              status: data[i].status,
              drivername: data[i].drivername,
              age: data[i].driverage,
              from: data[i].dayFrom,
              to: data[i].dayTo,
              dod: data[i].date,
              dt: data[i].time,
            });
          }
          

        return(
            <div>
                <Table columns={columns} dataSource={data1} scroll={{ x: 1500, y: 450 }} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return({
      vehicleData : state.vehicleReducer.data
  });
}

const mapDispatchToProps = (dispatch) => {
  return({

  });
}

export default connect(mapStateToProps,mapDispatchToProps)(VehicleTableDispatched);