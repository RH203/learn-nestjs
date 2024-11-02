import { Injectable } from '@nestjs/common';

@Injectable()
export class Connection {
  getName(): string {
    return null;
  }
}

export class MySqlConnection extends Connection {
  getName(): string {
    return 'MySQLConnection';
  }
}

export class MongoDbConnection extends Connection {
  getName(): string {
    return 'MongoDbConnection';
  }
}
