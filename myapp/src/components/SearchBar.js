import { Component } from "react";
import { Input } from 'antd';
import { ScanOutlined } from '@ant-design/icons';
import ScanModal from './ScanModal';
import {connect} from 'react-redux';
import { setIsModalVisible,setSearchedVehicle } from "../redux/actionCreators/SearchActions";

const { Search } = Input;

class SearchBar extends Component {
    showModal = (context) => {
        this.props.setIsModalVisible(true,context);
    };
    
    handleCancel = () => {
        this.props.setIsModalVisible(false,false);
    };

    checkIfValueExists = (value) => {
        const searchVehicle = this.props.vehicleData.filter(vehicle => {
            return vehicle.vehicleno == value;
        });
        console.log("searchvehicle",searchVehicle);
        const vehicle = searchVehicle[0];
        if(vehicle!=null){
            this.props.setSearchedVehicle(vehicle);
            return true;
        }
        return false;
    }

    onSearch = (value) => {
        const context = this.checkIfValueExists(value);
        this.showModal(context);
    }
    

    render() {
        

        return(
            <div className="searchBarWidth centerHorizontal" style={{paddingTop:'0px' , paddingBottom:'40px'}}>
                <Search
                    placeholder="Scan the Vehicle Number"
                    allowClear
                    enterButton={ <ScanOutlined /> }
                    size="large"
                    onSearch={this.onSearch}
                    />
                <ScanModal visible={this.props.isModalVisible} onCancel={this.handleCancel} context = {this.props.searchValueExists}
                vehicle={this.props.searchedVehicle}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        vehicleData : state.vehicleReducer.data,
        searchedVehicle : state.searchReducer.searchedVehicle,
        searchValueExists : state.searchReducer.searchValueExists,
        isModalVisible : state.searchReducer.isModalVisible
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        setIsModalVisible : (showModal,searchValueExists) => {
            dispatch(setIsModalVisible(showModal,searchValueExists))
        },
        setSearchedVehicle : (vehicle) => {
            dispatch(setSearchedVehicle(vehicle));
        }
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);