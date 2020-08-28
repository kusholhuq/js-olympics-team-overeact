import React from 'react';
import Column from './Column';

export default class ColumnContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columnCount: 3
    }
  }

  render(){
    return (
      <div className='container'>
        <div className='row d-flex'>
          <div className='col border'>
            <Column/>
          </div>
          <div className='col border'>Column2</div>
          <div className='col border'>Column2</div>
        </div>
      </div>
    )
  }
}
