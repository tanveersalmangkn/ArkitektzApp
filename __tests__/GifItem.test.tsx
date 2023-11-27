import React from 'react';
import {render} from '@testing-library/react-native';
import {GifItem} from '../src/components/GifItems';

const mockGif = {
  id: 'mockId',
  url: 'mockUrl',
  type: 'mockType',
  title: 'Mock Gif',
};

describe('GifItem', () => {
  test('renders GifItem correctly', () => {
    const {getByTestId} = render(<GifItem item={mockGif} testID="gif-item" />);

    const gifItem = getByTestId('gif-item');
    expect(gifItem).toBeTruthy();

    const gifImage = getByTestId('gif-image');
    expect(gifImage).toBeTruthy();
    expect(gifImage.props.source.uri).toBe(
      `https://media.giphy.com/media/${mockGif.id}/giphy.${mockGif.type}`,
    );
  });
});
