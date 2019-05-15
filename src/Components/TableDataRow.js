import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1){ return "Admin"}
        else if(this.props.permission === 2){ return "Moderator"}
        else { return "Normal User"}
    }
    editClick = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
        
    }

    render() {
        // co thuoc tinh this.props.editFunClick duoc truyen tu TableData
        return (
                 <tr>
                            <td >{this.props.stt}</td>
                            <td>{this.props.userName}</td>
                            <td>{this.props.tel}</td>
                            <td>{this.permissionShow()}</td>
                            <td>
                            <div className="btn btn-warning repair" onClick={() => this.editClick()}><i className="fa fa-edit    " />Repair</div>
                            <div className="btn btn-danger delete" onClick={(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-edit    " />Delete</div>
                            </td>
                        </tr>
        );
    }
}

export default TableDataRow; 