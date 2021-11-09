/* eslint-disable class-methods-use-this */
import Shame from '../models/shame';

const baseUrl = 'https://g13-wall-of-shame-api.herokuapp.com/';

export default class ShameService {
  async list(): Promise<Array<Shame>> {
    const response = await fetch(`${baseUrl}shame`);
    const raw = await response.json();
    return raw as Array<Shame>;
  }

  async create(shame: Shame): Promise<Shame> {
    const response = await fetch(`${baseUrl}shame`, {
      method: 'POST',
      body: JSON.stringify(shame),
    });

    const raw = await response.json();
    return raw as Shame;
  }
}
