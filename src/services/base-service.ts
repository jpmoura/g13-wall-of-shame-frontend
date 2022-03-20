import RequestMethod from '../models/enum/request-method';

export default abstract class BaseService {
  constructor(private readonly baseUrl: string) {
    if (!baseUrl.endsWith('/')) {
      this.baseUrl = `${baseUrl}/`;
    }
  }

  private async makeRequest(method: RequestMethod, endpoint: string, payload?: unknown): Promise<any> {
    const requestInit: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (payload) {
      requestInit.body = JSON.stringify(payload);
    }

    const rawResponse = await fetch(`${this.baseUrl}${endpoint}`, requestInit);
    return rawResponse.json();
  }

  protected get<TResponse>(endpoint: string): Promise<TResponse> {
    return this.makeRequest(RequestMethod.Get, endpoint);
  }

  protected post<TResponse = any>(endpoint: string, payload?: unknown): Promise<TResponse> {
    return this.makeRequest(RequestMethod.Post, endpoint, payload);
  }
}
