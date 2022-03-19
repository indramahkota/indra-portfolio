import MSG from "./Msg";

export function getLocalStorage(): Storage {
  if (!window.localStorage) throw new Error(MSG.LOCAL_STORAGE_NOT_SUPPORTED);
  return window.localStorage;
}

export default class Utils {
  static setLCS(key: string, value: string): void {
    if (key === "") throw new Error(MSG.LOCAL_STORAGE_KEY_CAN_NOT_BE_EMPTY);
    getLocalStorage().setItem(key, value);
  }

  static getLCS(key: string): string | null {
    if (key === "") throw new Error(MSG.LOCAL_STORAGE_KEY_CAN_NOT_BE_EMPTY);
    return getLocalStorage().getItem(key);
  }

  static capitalizeWords(text: string): string {
    return text.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
  }
}
