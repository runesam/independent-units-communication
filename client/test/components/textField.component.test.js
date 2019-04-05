import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TextFieldComponent, FormFieldComponent } from 'components';
import { Field } from 'redux-form';

describe('<TextFieldComponent />', () => {
    it('matches the snapshot', () => {
        const field = {
            name: 'username',
            label: 'Email',
            type: 'email',
        };
        const formField = shallow(<FormFieldComponent field={field} />);
        const props = formField.find(Field).props();

        const wrapper = shallow(<TextFieldComponent {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
