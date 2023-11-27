describe('CustomButton', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should call onPress when the button is pressed', async () => {
    const onPressMock = jest.fn();

    // Render the component in the test app
    await element(by.id('test-id-of-your-component')).replaceWith(
      <CustomButton title="Press Me" onPress={onPressMock} />,
    );

    // Find and press the button
    await element(by.id('your-test-id-of-the-button')).tap();

    // Assert that the onPress function was called
    expect(onPressMock).toHaveBeenCalled();
  });
});
