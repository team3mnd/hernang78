import React from 'react';

class BottonAccess extends React.Component {

  render() {
    return (
      <div  className="btn btn-dark m-2">
        <a className="text-white" href="index.html" >{this.props.title}</a>
      </div>
    );
  }

}

export default BottonAccess;