import {
    getSupportedBrowserLanguage,
    getLanguageSource,
    SupportedLanguages,
} from "../app/src/engine/i18n";

describe("i18n", () => {
    it("uses English language as the default one", () => {
        browser.i18n.getUILanguage = () => "Fake test non-existing language";
        expect(getSupportedBrowserLanguage()).toBe("en");
    });

    it("has all sources matching regarding keys", () => {
        const defaultLanguage = getLanguageSource();
        for (const language of SupportedLanguages) {
            expect(Object.keys(defaultLanguage)).toStrictEqual(
                Object.keys(getLanguageSource(language))
            );
        }
    });
});
