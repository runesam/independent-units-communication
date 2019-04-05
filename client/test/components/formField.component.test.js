import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Field } from 'redux-form';

import { FormFieldComponent } from 'components';

describe('<FormFieldComponent />', () => {
    const field = {
        name: 'username',
        label: 'Email',
        type: 'email',
    };

    it('matches the snapshot', () => {
        const wrapper = shallow(<FormFieldComponent parent="test" field={field} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render the field with the right name', () => {
        const wrapper = shallow(<FormFieldComponent field={field} />);
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(Field)).toHaveLength(1);
        const { name } = wrapper.find(Field).props();
        expect(name).toEqual('username');
    });
});
