import React from 'react';

class ApiData extends React.Component {
  render() {
    return (
      // These informations will be printed
      <div>
        { this.props.city && this.props.country && <p> { this.props.city }, { this.props.country }</p> }
        { this.props.temperature && <p> { this.props.temperature } </p> }
        { this.props.description && <p> { this.props.description } </p> }
        { this.props.wind && <p> { this.props.wind } </p> }
      </div>
    );
  }
};

export default ApiData;
