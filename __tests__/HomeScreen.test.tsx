import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {HomeScreen} from '../src/screens/Home/HomeScreen';

describe('HomeScreen', () => {
  test('renders correctly', () => {
    const mockNavigation = {navigate: jest.fn()} as any;
    const {getByTestId} = render(<HomeScreen navigation={mockNavigation} />);

    const gifButtonTestId = getByTestId('gif-button');
    const feedbackButtonTestId = getByTestId('feedback-button');

    expect(gifButtonTestId).toBeTruthy();
    expect(feedbackButtonTestId).toBeTruthy();
  });

  test('navigates to GifScreen on "Go to GIF Screen" button press', () => {
    const mockNavigation = {navigate: jest.fn()} as any;
    const {getByTestId} = render(<HomeScreen navigation={mockNavigation} />);
    const gifButton = getByTestId('gif-button');

    fireEvent.press(gifButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('GifScreen', {});
  });

  test('navigates to FeedbackScreen on "Go to Feedback Screen" button press', () => {
    const mockNavigation = {navigate: jest.fn()} as any;
    const {getByTestId} = render(<HomeScreen navigation={mockNavigation} />);
    const feedbackButton = getByTestId('feedback-button');

    fireEvent.press(feedbackButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('FeedbackScreen', {});
  });
});
