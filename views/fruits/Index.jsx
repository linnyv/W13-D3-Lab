const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <h1>Fruits Index Page</h1>
        <ul>
          {
            this.props.fruits?.map((fruit, i) => {
              return (
                <li key={i}>
                  The <a href={`/fruits/${fruit._id}`}> { fruit.name } </a> is { fruit.color } and { fruit.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index