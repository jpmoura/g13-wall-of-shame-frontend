/* eslint-disable class-methods-use-this */
import Shame from '../models/shame';
import BaseService from './base-service';

export default class ShameService extends BaseService {
  constructor() {
    super('http://mourajoao.ddns.net:9001/');
  }

  list(): Promise<Array<Shame>> {
    return super.get<Array<Shame>>('shame');
  }

  create(shame: Shame): Promise<Shame> {
    return super.post<Shame>('shame', shame);
  }
}
