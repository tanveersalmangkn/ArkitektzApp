import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useQuery} from 'react-query';
import {GifScreen} from '../src/screens/GifScreen/GifScreen';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(),
}));

describe('GifScreen', () => {
  test('renders correctly', () => {
    const mockData = {
      data: [],
      refetch: jest.fn(),
      isLoading: false,
      error: null,
    };
    (useQuery as jest.Mock).mockReturnValue(mockData);

    const {getByTestId} = render(<GifScreen />);

    const searchBar = getByTestId('search-bar');
    expect(searchBar).toBeTruthy();
  });

  test('handles search correctly', async () => {
    const mockData = {
      data: [],
      refetch: jest.fn(),
      isLoading: false,
      error: null,
    };
    (useQuery as jest.Mock).mockReturnValue(mockData);

    const {getByTestId} = render(<GifScreen />);

    const searchInput = getByTestId('search-input');
    fireEvent.changeText(searchInput, 'cats');

    const searchButton = getByTestId('search-button');
    fireEvent.press(searchButton);
  });
});
