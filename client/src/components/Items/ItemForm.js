// ItemForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import ItemField from './ItemField';

const FIELDS = [
	{ label: 'Item Title', name: 'title' }
];

class ItemForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return <Field key={name} component={ItemField} type="text" label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onItemSubmit)}>
					{this.renderFields()}
					<Link to="/items" className="red btn-flat white-text">
						Cancel
          </Link>
					<button type="submit" className="teal btn-flat right white-text">
						Save
            <i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'You must provide a title.';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'itemForm'
})(ItemForm);