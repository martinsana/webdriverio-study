describe('Dynamic Loading Page', () => {
  it('should wait the hidden element to show', async () => {
    const btnStart = await $('#start button');
    const textFinish = await $('#finish h4');
    const elLoading = await $('#loading');

    await browser.url('/dynamic_loading/1');
    await btnStart.click();
    //await elLoading.waitForDisplayed();
    //await elLoading.waitForDisplayed({ reverse: true });
    await textFinish.waitForDisplayed();
    await expect(textFinish.getText()).toEqual('Hello World!');
  });
});
