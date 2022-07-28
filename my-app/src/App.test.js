import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from "redux-thunk";
import App from './App';

describe('With React Testing Library', () => {
    const initialState = {
        toDos: []
    };
    const mockStore = configureStore([thunk]);
    let store;

    it('Component mounts correctly"', () => {
        store = mockStore(initialState);
        const { component } = render(
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        );

        expect(component).not.toBeNull();
    });
});