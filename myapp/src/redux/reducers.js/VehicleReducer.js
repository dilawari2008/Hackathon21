import axios from 'axios';

const initState = {
    data:[
        {
            vehicleno: "UT12DF1233",
            status: "inbound",
            drivername: "RISHABH PANT",
            driverage: "24",
            dayFrom: "HARIDWAR",
            dayTo: "CHENNAI",
            date: "2021-12-11",
            time: "16:23"
        },
        {
            vehicleno: "RQ12FF7891",
            status: "inbound",
            drivername: "AJAY DEVGN",
            driverage: "35",
            dayFrom: "MUMBAI",
            dayTo: "KOLKATA",
            date: "2021-12-11",
            time: "16:25"
        },
        {
            vehicleno: "AS12DF1234",
            status: "inbound",
            drivername: "MS DHONI",
            driverage: "30",
            dayFrom: "RANCHI",
            dayTo: "MUMBAI",
            date: "2021-12-11",
            time: "16:22"
        },
        {
            vehicleno: "TW16QF4574",
            status: "warehouse",
            drivername: "KESHAV KUMAR",
            driverage: "22",
            dayFrom: "PATNA",
            dayTo: "LONDON",
            date: "2021-12-11",
            time: "16:30"
        },
        {
            vehicleno: "TJ16LF4074",
            status: "warehouse",
            drivername: "VAGISH DILAWARI",
            driverage: "22",
            dayFrom: "CUTTACK",
            dayTo: "BANARAS",
            date: "2021-12-11",
            time: "16:31"
        },
        {
            vehicleno: "UJ16LF4070",
            status: "warehouse",
            drivername: "RAGHAV KABRA",
            driverage: "22",
            dayFrom: "AGRA",
            dayTo: "MEERUT",
            date: "2021-12-11",
            time: "16:31"
        },
        {
            vehicleno: "SW23TY1594",
            status: "inbound",
            drivername: "AKSHAY KUMAR",
            driverage: "35",
            dayFrom: "DELHI",
            dayTo: "BANGALORE",
            date: "2021-12-11",
            time: "16:26"
        },
        {
            vehicleno: "ND23PO8974",
            status: "inbound",
            drivername: "RAJ VARDHAN",
            driverage: "22",
            dayFrom: "DELHI",
            dayTo: "NOIDA",
            date: "2021-12-11",
            time: "16:27"
        },
        {
            vehicleno: "RW16EF4584",
            status: "inbound",
            drivername: "JUSTIN BIEBER",
            driverage: "26",
            dayFrom: "TORONTO",
            dayTo: "CHICAGO",
            date: "2021-12-11",
            time: "16:29"
        },
        {
            vehicleno: "AS12DF1235",
            status: "inbound",
            drivername: "VIRAT KOHLI",
            driverage: "30",
            dayFrom: "DELHI",
            dayTo: "INDORE",
            date: "2021-12-11",
            time: "16:22"
        },
        {
            vehicleno: "GH12DF1235",
            status: "inbound",
            drivername: "ROHIT SHARMA",
            driverage: "32",
            dayFrom: "NAGPUR",
            dayTo: "BHOPAL",
            date: "2021-12-11",
            time: "16:23"
        },
        {
            vehicleno: "WQ12DF7894",
            status: "dispatched",
            drivername: "YUZUVENDRA CHAHAL",
            driverage: "25",
            dayFrom: "KANPUR",
            dayTo: "LUCKNOW",
            date: "2021-12-11",
            time: "16:24"
        },
        {
            vehicleno: "RC12FF2584",
            status: "inbound",
            drivername: "CHARLIE PUTH",
            driverage: "22",
            dayFrom: "VANCOUVER",
            dayTo: "NEW YORK",
            date: "2021-12-11",
            time: "16:26"
        },
    ]
}

const findNewState = (currState,payload) => {
    const filteredVehicle = currState.data.filter(vehicle => {
        return payload.vehicleno == vehicle.vehicleno;
    });
    const vehicleArray = currState.data.filter(vehicle => {
        return payload.vehicleno != vehicle.vehicleno;
    });
    const vehicle = filteredVehicle[0];
    vehicle.status = payload.newStatus;
    const newVehicleArray = [
        ...vehicleArray,
        vehicle
    ]
    const newState = {
        ...currState,
        data : newVehicleArray
    }
    return newState;
}

const addVehicle = (currState,payload) => {
    const newData = [
        ...currState.data,
        payload
    ];
    const newState = {
        ...currState,
        data:[
            ...newData
        ]
    }
    return newState;
}

const setDataIntoState = (currState,payload) => {
    console.log('payload',payload);
    console.log('currState',currState);
    const newData = [
        ...payload.data
    ];
    console.log('newdata',newData);
    const newState = {
        ...currState,
        data:[
            ...newData
        ],
    }
    console.log('newState=',newState);
    return newState;
}

const vehicleReducer = (state = initState, action) => {
    switch (action.type){
        case 'CHANGE_STATUS':
            state = findNewState(state,action.payload)
            break;
        case 'ADD_VEHICLE':
            state = addVehicle(state,action.payload);
            break;
        case 'RELOAD':
            console.log('entered reducer reload');
            state = setDataIntoState(state,action.payload);
            break;
        default:
            break;
    }
    return state;
}

export default vehicleReducer;