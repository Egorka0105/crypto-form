export class storageService {
  static isServer = typeof window === 'undefined';

  static storage: Storage | null = !this.isServer ? localStorage : null;

  static getItem: <T>(key: string) => T | null = (key: string) => {
    if (!this.storage) return null;

    const data: string | null = this.storage.getItem(key);
    if (typeof data === 'string' || data === null) {
      return data;
    }
    return JSON.parse(data);
  };

  static setItem = (key: string, data: unknown) => {
    if (!this.storage) return null;
    this.storage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
  };

  static deleteItem = (key: string) => {
    if (!this.storage) return null;
    this.storage.removeItem(key);
  };
}
