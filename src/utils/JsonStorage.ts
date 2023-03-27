export class JsonStorage {
  static getItem<T = any>(key: string): T {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static setItem(key: string, value: any): void {
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
