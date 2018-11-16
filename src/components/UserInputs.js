import React from "react";

class UserInputsForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeatherData}>
        <input type="text" name="country" placeholder="Type in country"/>
        <input type="text" name="city" placeholder="Type in city"/>
        <button>Show weather</button>
      </form>
    );
  }
};

export default UserInputsForm;
