import md5 from 'md5';
import { HttpException } from '../errors/http-exception.error';

export class HashHelper {
  static encoded(value: string): string {
    try {
      const hash = md5(value);

      return hash;
    } catch (error) {
      throw new HttpException(500, 'Fail on encode');
    }
  }

  static decoded(value: string, hash: string): boolean {
    try {
      const hashDecoded = md5(value);

      return hashDecoded === hash;
    } catch (error) {
      throw new HttpException(500, 'Fail on decoded');
    }
  }
}
