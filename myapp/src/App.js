import {Component} from 'react';
import "antd/dist/antd.css";

import SearchBar from './components/SearchBar';
import Header from './components/Header';
import AddVehicle from './components/AddVehicle';
import VehicleStatusButton from './components/VehicleStatusButton';
import { reload } from './redux/actionCreators/VehicleActions';

import { FileSearchOutlined,LogoutOutlined,LoginOutlined } from '@ant-design/icons';
import VehicleTable from './components/VehicleTable';
import {connect} from 'react-redux';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        inbound: false,
        warehouse: false,
        dispatched: false
    }
}

async componentDidMount(){
  console.log("component mounted");
    this.props.reload();
}

  handleClick = (context) => {
    console.log("entered handle reload");
    this.props.reload();
    if(context=='Inbound Vehicles')
    {
      this.setState(
        {
          ...this.state,
          inbound:!this.state.inbound,
          warehouse:false,
          dispatched:false
        }
      );  
    }
    else if(context=='Warehouse Vehicles')
    {
      this.setState(
        {
          ...this.state,
          warehouse:!this.state.warehouse,
          inbound:false,
          dispatched:false
        }
      );
    }
    else if(context=='Dispatched Vehicles')
    {
      this.setState(
        {
          ...this.state,
          dispatched:!this.state.dispatched,
          inbound:false,
          warehouse:false
        }
      );
    }
  }

  render(){
    return (
        <div style={{ 
          backgroundImage: `url("https://cdn.wallpapersafari.com/27/32/jt4AoG.jpg")` 
        }}>
          <div>
            <Header/>
            <SearchBar/>
            <div className='flex-container' style={{paddingTop:'0px' , paddingBottom:'40px'}}>
              <div className='flex-container centerHorizontal'>
                <VehicleStatusButton buttonName='Inbound Vehicles' icon={<LoginOutlined/>} handleClick={this.handleClick} ghost={this.state.inbound}/>
                <VehicleStatusButton buttonName='Warehouse Vehicles' icon={<FileSearchOutlined/>} handleClick={this.handleClick} ghost={this.state.warehouse}/>
                <VehicleStatusButton buttonName='Dispatched Vehicles' icon={<LogoutOutlined/>} handleClick={this.handleClick} ghost={this.state.dispatched}/>
              </div>
              <AddVehicle/>
            </div>
            <VehicleTable tableContext={this.state} />
          </div>
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
      reload : () => dispatch(reload())
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
