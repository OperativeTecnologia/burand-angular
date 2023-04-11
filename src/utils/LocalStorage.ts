export class LocalStorage {
  static getItem<T = unknown>(key: string): T {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static setItem(key: string, value: unknown): void {
    const stringify = JSON.stringify(value);
    localStorage.setItem(key, stringify);
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
