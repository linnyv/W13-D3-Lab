const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/vegetables/new">Create a New Vegetable</a>
        </nav>
        <h1>Vegetables Index Page</h1>
        <ul>
          {
            this.props.vegetables?.map((vegetable, i) => {
              return (
                <li key={i}>
                  The <a href={`/vegetables/${vegetable._id}`}> { vegetable.name } </a> is { vegetable.color } and { vegetable.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index;