export const checkVisibleText = (text_exact) => 
expect(element(by.text(text_exact))).toBeVisible();

export const checkNotVisibleText = (text_exact) => 
expect(element(by.text(text_exact))).toBeNotVisible();