import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CustomButton } from '../src/components/Button';

describe('CustomButton', () => {
  test('renders correctly', () => {
    const { getByText } = render(<CustomButton title="Test Button" onPress={() => {}} />);
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeTruthy();
  });

  test('calls onPress prop when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CustomButton title="Test Button" onPress={onPressMock} />);
    const buttonElement = getByText('Test Button');

    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });
});
