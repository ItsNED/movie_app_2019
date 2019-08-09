import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count - 1}));
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
