import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    // this.props.checkConnectProps
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj:{}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
        // console.log(info);
    
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser getUserEditInfo={(info) => this.getUserEditInfo(info)} userEditObject={this.props.userEditObject} changeEditUserStatus={() => this.props.changeEditUserStatus()}/>
        }
    }
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }
    hienThinut = () => {
        if(this.props.hienThiForm === true){
            return   <div className="btn btn-block btn-outline-secondary" onClick={() =>this.props.ketNoi()} >Close</div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() =>this.props.ketNoi()}>Add new</div>
        }
    }
    render() {
        return (
                <div className="col-12">
                    {this.isShowEditForm()}
                    <div className="form-group">
                        <div className="btn-group" style={{width: '100%'}}>
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Enter keyword"  />
                        <div className="btn btn-info" onClick={(dl) =>  this.props.checkConnectProps(this.state.tempValue)}>Search</div>
                  
                        </div>
                        <div className="btn-group1 mt-4">
                           {this.hienThinut()}
                        </div>
                    </div>
                    <hr/>
                </div>
        );
    }
}

export default Search;