import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {

  render() {

  	const todos = this.props.todos.map(todo => {
  		return <Todo text={todo} />
  	})

    return(
      <div>{todos}</div>
    );
  }
};

const mapStateToProps = state => {
	return { todos: state.todos }
}

 
export default connect(mapStateToProps)(TodosContainer);