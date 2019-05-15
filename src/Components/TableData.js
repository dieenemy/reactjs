import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (idUser) => {
      this.props.deleteUser(idUser);
        
    }
    mappingDataUSer = () => 
        this.props.dataUserProps.map((value,key) =>(
            <TableDataRow deleteButtonClick={(idUser) =>this.deleteButtonClick(idUser)} editFunClick={(user) => this.props.editFun(value)} userName={value.name} key={key} stt={key} tel={value.tel} permission={value.Permission} id={value.id} changeEditUserStatus={() => this.props.changeEditUserStatus()}/>
        ))
    
    // this.props.editFunc co san va duoc truyen tu App.js

    render() {
        // console.log(this.props.dataUserProps)
        return (
                <div className="col">
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>Authorities</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.mappingDataUSer()}
                        
                        </tbody>
                    </table>
                </div>

        );
    }
}

export default TableData;