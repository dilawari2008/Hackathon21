const initState = {
    isModalVisible: false,
    searchValueExists: false,
    searchedVehicle:{}
}

const setIsModalVisible = (currState,payload) => {
    const newState = {
        ...currState,
        isModalVisible:payload.showModal,
        searchValueExists:payload.searchValueExists
    }
    return newState;
}

const setSearchedVehicle = (currState,payload) => {
    const newState = {
        ...currState,
        searchedVehicle:{
            ...payload
        }
    }

    return newState;
}

const searchReducer = (state = initState, action) => {
    switch (action.type){
        case 'SET_MODAL_VSIBLE':
            state = setIsModalVisible(state,action.payload);
            break;
        case 'SET_SEARCHED_VEHICLE':
            state = setSearchedVehicle(state,action.payload);
        default:
            break;
    }
    return state;
}

export default searchReducer;