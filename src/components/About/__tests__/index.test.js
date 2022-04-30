import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

// performs About test
describe('About component', () => {
    // Test rendering
    it('renders',() => {
        render(<About />);
    })
    // Test DOM node structure to snapshot
    it('matches snapshot DOM node structure', () => {
        // render About fragment
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})