import axios from 'axios';

class Service {
    reload = async() => {
        console.log("entered into service reload");
        const dataList = await axios.get('http://localhost:8080/alluser');
        console.log('dataList=',dataList);
        return dataList;
    }
    changeStatus = async(vehicleno,newStatus) => {
        console.log("entered into service changestatus");
        const requestObject = {
            vehicleno,
            status:newStatus
        }
        console.log('requestobject = ',requestObject);
        const response = await axios.put('http://localhost:8080/update',requestObject);
        console.log('put response=',response);
    }
    addVehicle = async(vehicle) => {
        console.log("entered into service addvehicle");
        const requestObject = {
            ...vehicle
        }
        console.log('requestobject = ',requestObject);
        const response = await axios.post('http://localhost:8080/insert',requestObject);
        console.log('post response=',response);
    }
}

export const service = new Service();