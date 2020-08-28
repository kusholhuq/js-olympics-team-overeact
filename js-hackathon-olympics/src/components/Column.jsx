import React from 'react';

export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='w-100'>
        <header className='border mx-0 w-100'>
          Column Title
        </header>
        <div>
          TEST
        </div>
      </div>
    )
  }
}
