
import React, { Component } from 'react';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.input,
            placeholder:this.props.placeholder,
            name: this.props.name,
        }



    }
    changeHandler = (event) => {
        this.setState({
            placeholder:(!event.target.value.length)? this.props.placeholder: event.target.value
        })
    }
    render() {
        return (<>

            <input type={this.state.input} name={this.state.name} placeholder={this.state.placeholder} onChange={this.changeHandler} /><br />
         

        </>);
    }
}

export default FormInput;
