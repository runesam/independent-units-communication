import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { TextFieldComponent } from '.';

const getName = (name, parent) => {
    if (parent) {
        return `${parent}.${name}`;
    }
    return name;
};

const setFieldToBeFocused = () => {
};

const FormFieldComponent = (props) => {
    const {
        field: {
            name,
            label,
            type,
            validators,
        },
        parent,
    } = props;
    return (
        <Field
            type={type}
            label={label}
            placeholder={label}
            validate={validators}
            name={getName(name, parent)}
            component={TextFieldComponent}
            setFieldToBeFocused={setFieldToBeFocused}
        />
    );
};

FormFieldComponent.propTypes = {
    field: PropTypes.shape({}).isRequired,
    parent: PropTypes.string,
};

FormFieldComponent.defaultProps = {
    parent: '',
};

export default FormFieldComponent;
