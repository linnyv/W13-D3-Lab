const React = require('react');

class Show extends React.Component {
  render() {
    return (
      <div>
        <h1> Vegetables Show Page </h1>
        The { this.props.vegetable.name } is { this.props.vegetable.color } and { this.props.vegetable.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
      </div>
    )
  }
}

module.exports = Show;