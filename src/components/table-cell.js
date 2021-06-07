import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const TableCell = () => {

        return (
      <div className='main-table'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Index</th>
              <th scope='col'>Player</th>
              <th scope='col'>CellNo</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
}

export default TableCell;
