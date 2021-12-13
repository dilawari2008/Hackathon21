import { service } from '../../service/service';

/* export const changeStatus = (vehicleno,newStatus) => {
    return({
        type:'CHANGE_STATUS',
        payload:{
            vehicleno:vehicleno,
            newStatus:newStatus
        }
    });
} */

export const changeStatus = (vehicleno,newStatus) => {
    return async dispatch => {
        try{
            await service.changeStatus(vehicleno,newStatus);
            const payload = await service.reload();
            console.log('received new payload after changeStatus',payload);
            dispatch({
                type:'RELOAD',
                payload:payload
            });
        }
        catch(e)
        {
            console.log("error reload",e);
        }
    }
}
export const addVehicle = (vehicle) => {
    return async dispatch => {
        try{
            await service.addVehicle(vehicle);
            const payload = await service.reload();
            console.log('received new payload after addvehicle',payload);
            dispatch({
                type:'RELOAD',
                payload:payload
            });
        }
        catch(e)
        {
            console.log("error reload",e);
        }
    }
}

/* export const addVehicle = (vehicle) => {
    return({
        type:'ADD_VEHICLE',
        payload:{
            ...vehicle
        }
    });
} */

export const reload = () => {
    return async dispatch => {
        try{
            const payload = await service.reload();
            console.log('received payload',payload);
            dispatch({
                type:'RELOAD',
                payload:payload
            });
        }
        catch(e){
            console.log("error reload",e);
        }
    }
}