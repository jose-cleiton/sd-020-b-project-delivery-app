import dotenv from 'dotenv';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { HttpException } from '../errors/http-exception.error';

dotenv.config();

const jwtKey = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

class JwtHelper {
  static generate(tokenPayload: Record<string, any>): string {
    const token = jwt.sign(tokenPayload, jwtKey, {
      expiresIn: '100d',
    });

    return token;
  }

  static verify(token: string): Record<string, any> {
    try {
      const tokenPayload = jwt.verify(token, jwtKey) as Record<string, any>;
      return tokenPayload;
    } catch (error) {
      throw new HttpException(401, 'Token must be a valid token');
    }
  }
}

export { JwtHelper };
