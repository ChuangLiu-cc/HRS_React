import SearchBar from "../SearchBar";
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

afterEach(() => {
    cleanup();
})
test('should render SearchBar component', () => {
    render(<SearchBar/>);
    const titleElement = screen.getByTestId('search-bar-test-1');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Search Page');
})

test('handleRoomSelect is called', () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const {getByTestId} = render(<SearchBar />);
    const select = getByTestId('search-bar-test-2');
    fireEvent.input(select);
    expect(setStateMock).toBeCalled();
})