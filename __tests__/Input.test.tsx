import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {TextInputField} from '../src/components/TextInput';

describe('TextInputField', () => {
  test('renders correctly with label and without placeholder', () => {
    const {getByText, getByTestId} = render(
      <TextInputField label="Username" value="" onChangeText={() => {}} />,
    );

    const labelElement = getByText('Username');
    const inputElement = getByTestId('username-input'); // Use testID instead of getByPlaceholderText

    expect(labelElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });

  test('calls onChangeText prop when text is entered', async () => {
    const onChangeTextMock = jest.fn();
    const {getByTestId} = render(
      <TextInputField
        label="Username"
        value=""
        onChangeText={onChangeTextMock}
      />,
    );

    const inputElement = getByTestId('username-input');

    fireEvent.changeText(inputElement, 'john_doe');

    await waitFor(() => {
      expect(onChangeTextMock).toHaveBeenCalledWith('john_doe');
    });
  });

  test('displays error message when error prop is provided', () => {
    const {getByText} = render(
      <TextInputField
        label="Email"
        value=""
        onChangeText={() => {}}
        error="Invalid email"
      />,
    );

    const errorElement = getByText('Invalid email');

    expect(errorElement).toBeTruthy();
  });
});
