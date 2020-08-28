import React from 'react';

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
          <div className='col'>Column1</div>
          <div className='col'>Column2</div>
          <div className='col'>Column2</div>
        </div>
      </div>
    )
  }
}
