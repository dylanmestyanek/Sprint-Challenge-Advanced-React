import React from 'react';
import ReactDOM from "react-dom"
import { fireEvent, render, cleanup} from "@testing-library/react"
import { act } from 'react-dom/test-utils'
import ReactTestUtils from "react-dom/test-utils"
import "@testing-library/jest-dom/extend-expect"
import App from './App'; 
import CardContainer from './components/CardContainer';
import { get } from 'https';

afterEach(cleanup)

test('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, div);
  })
  ReactDOM.unmountComponentAtNode(div);
});

test('Expect Card Container header to have say "Women\'s world cup players"', () => {
  setTimeout(() => {
    const { getByTestId } = render(<CardContainer />);
    getByTestId(/dataTitle/i)
  },2000)
  
})
