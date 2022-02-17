describe('Main Page', () => {
  it('Verify list itens', async () => {
    await browser.url('/');

    const listExamples = await $$('ul li');
    await expect(listExamples).toBeElementsArrayOfSize({ gte: 1 });
  });
});
