import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cookies from 'js-cookie';

import { history } from 'middleware';
import { loginSuccess } from 'actions';
import Provider from 'app/provider';

describe('<Provider />', () => {
    const calledWith = [];
    const store = {
        dispatch: jest.fn((arg) => {
            calledWith.push(arg);
            return arg;
        }),
        subscribe: jest.fn(),
        getState: jest.fn(),
    };

    describe('behaviour when there is no auth in cookies', () => {
        it('doesn\'t dispatches loginSuccess action', () => {
            shallow(
                <Provider store={store} history={history}>
                    <span>app</span>
                </Provider>,
            );
            expect(store.dispatch).toBeCalledTimes(0);
        });
    });

    describe('behaviour when there is auth in cookies', () => {
        it('dispatches loginSuccess action', () => {
            // mock cookie
            jest.mock('js-cookie');
            Cookies.getJSON = () => ({ token: 'token' });

            const action = loginSuccess({ data: { token: 'token' } });
            shallow(
                <Provider store={store} history={history}>
                    <span>app</span>
                </Provider>,
            );
            expect(store.dispatch).toBeCalledTimes(1);
            expect(store.dispatch).toBeCalledWith(action);
        });
    });

    it('matches the snapshot', () => {
        const wrapper = shallow(
            <Provider store={store} history={history}>
                <span>app</span>
            </Provider>,
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
