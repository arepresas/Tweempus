import { faker } from '@faker-js/faker';

export class Utils {
  static generateRandomIntNumber(min: number = 0, max: number = 10000): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateRandomFloatNumber(
    min: number = 0,
    max: number = 10000
  ): number {
    return Math.random() * (max - min + 1) + min;
  }

  static generateRandomDate(min: number = 0, max: number = 10000): Date {
    return new Date(this.generateRandomIntNumber(min, max));
  }

  static generateRandomString(length: number = 10): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static generateRandomName(): string {
    return faker.name.findName();
  }

  static generateRandomWebsite(): string {
    return faker.internet.domainName();
  }
}
