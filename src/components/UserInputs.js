import React from "react";

class UserInputsForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeatherData}>
        <input type="text" name="country" placeholder="Country"/>
        <input type="text" name="city" placeholder="City"/>
        <button>Show weather</button>
      </form>
    );
  }
};

export default UserInputsForm;
