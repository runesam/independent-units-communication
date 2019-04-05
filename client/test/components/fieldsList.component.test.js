import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FieldsListComponent } from 'components';

describe('<FieldsListComponent />', () => {
    const fields = [
        {
            name: 'username',
            label: 'Email',
            type: 'email',
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
        },
    ];

    it('matches the snapshot', () => {
        const wrapper = shallow(<FieldsListComponent fields={fields} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
