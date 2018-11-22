import React from 'react';

class ApiData extends React.Component {
  render() {
    return (
      // These informations will be printed
      <div>
        <div className="row">
          <div className="col-xs-6 left">
            { this.props.icon && <img alt="weather icon" src={ this.props.icon }></img> }
          </div>
          <div className="col-xs-6 right">
            { this.props.temperature && <p> { this.props.temperature } °c </p> }
          </div>
          </div>
            { this.props.city && this.props.country && <p> { this.props.city }, { this.props.country }</p> }
            { this.props.description && <p> Description: { this.props.description } </p> }
            { this.props.wind && <p> Wind: { this.props.wind } </p> }
            { this.props.errorMessage && <p> { this.props.errorMessage } </p> }
          </div>
    );
  }
};

export default ApiData;
