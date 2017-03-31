
import React, { Component } from 'react';

//important concepts 1) classes 2) state 3)import export
//creating a functional component and a class component
//Below is a class based component using ES6.
class SearchBar extends Component {
//STEP 1:
//   render() {
//     return <input onChange={this.onInputChange} />;
//   }
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
// }

// STEP 2: Still gets the same functionality as above but is now
//using ES6 syntax.
//    render(){
//    return < input onChange={event => console.log(event.target.value)}/>;
//   }
// }
//STEP 3: Talking about state.
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

//STEP 4: working on referencing state.
//this updated the input value.
//   render() {
//     return (
//       <div>
//       <input onChange={event => this.setState({ term: event.target.value})} />
//       Value of the input: {this.state.term}
//     </div>
//     );
//   }
// }
//Turning the input into a controlled component.
  render() {
    return (
      <div className="search-bar">
      <input
        value ={this.state.term}
          onChange={event => this.onInputChange( event.target.value )} />
    </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
