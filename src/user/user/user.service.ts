import { Injectable } from '@nestjs/common';
import { ValidationService } from '../../validation/validation/validation.service';
import { z } from 'zod';

@Injectable()
export class UserService {
  constructor(private validationService: ValidationService) {}

  seyHello(name: string): string {
    const schema = z.string().max(100);
    const result = this.validationService.validate(schema, name);
    return `Hello ${result} dari service!`;
  }
}
