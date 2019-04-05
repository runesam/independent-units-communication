import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Routes from 'app/routes';

describe('<Routes />', () => {
    it('matches the snapshot', () => {
        const wrapper = shallow(<Routes />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
