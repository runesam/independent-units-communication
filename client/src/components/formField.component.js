import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { TextFieldComponent } from '.';

const FormFieldComponent = (props) => {
    const {
        field: {
            name,
            type,
            label,
            validators,
        },
    } = props;
    return (
        <Field
            name={name}
            type={type}
            label={label}
            placeholder={label}
            validate={validators}
            component={TextFieldComponent}
        />
    );
};

FormFieldComponent.propTypes = {
    field: PropTypes.shape({}).isRequired,
};

export default FormFieldComponent;
