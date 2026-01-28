import Browser from "webextension-polyfill";

export const SupportedLanguages = ["en", "pl"];

export function getSupportedBrowserLanguage() {
    const browserLanguage = Browser.i18n.getUILanguage().toLowerCase();
    for (const supported of SupportedLanguages) {
        if (supported.toLowerCase() === browserLanguage) {
            return browserLanguage;
        }
    }
    return SupportedLanguages[0];
}

export function getLanguageSource(language = "en") {
    return require(`./translations/${language}.json`);
}

export function translate(label: string) {
    return getLanguageSource(getSupportedBrowserLanguage())[label];
}
