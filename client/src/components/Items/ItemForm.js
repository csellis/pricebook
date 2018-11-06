// ItemForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import ItemField from './ItemField';

class ItemForm extends Component {
    renderFields() {
        return (
            <div>
                <Field type="text" name="title" component={ItemField} />
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values=> console.log(values))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(ItemForm);