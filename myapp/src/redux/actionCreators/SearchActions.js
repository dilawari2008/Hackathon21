export const setIsModalVisible = (showModal,searchValueExists) => {
    return({
        type:'SET_MODAL_VSIBLE',
        payload:{
            showModal,
            searchValueExists
        }
    });
}

export const setSearchedVehicle = (vehicle) => {
    return({
        type:'SET_SEARCHED_VEHICLE',
        payload:{
            ...vehicle
        }
    });
}