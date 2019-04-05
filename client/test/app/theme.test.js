import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Theme from 'app/theme';

describe('<Theme />', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<Theme>app</Theme>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
