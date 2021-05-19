import React, { Component } from 'react';

class AddForm extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: '' });
    }

    render() { 
        return ( 
            <form 
            className='form'
            onSubmit={this.onSubmit}
            >
                <input className='input'
                type="text"
                name='title'
                placeholder='Add Your Todos...'
                value={this.state.title}
                onChange={this.onChange}
                autoComplete='off'
                dir='auto'
                />
            </form>
         );
    }
}
 
export default AddForm;