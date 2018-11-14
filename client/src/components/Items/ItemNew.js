
import React, { Component } from 'react';
import ItemForm from './ItemForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ItemNew = ({ formValues, saveItem, history }) => {
	return (
		<div>
			<ItemForm onItemSubmit={() => saveItem(formValues, history)} />
		</div>
	)
}

function mapStateToProps(state) {
	if (!state.form || !state.form.itemForm || !state.form.itemForm.values) { return {} }
	return { formValues: state.form.itemForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ItemNew));