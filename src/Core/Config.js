import { injectable, inject } from 'inversify'

@injectable()
export class Config {
  constructor() {
    this.apiUrl = 'http://localhost:4040'
  }
}
