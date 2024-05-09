class HoloENFansClient {
	private baseURL: string;
	private headers: Headers;

	constructor(token: string) {
		this.baseURL = 'https://cms.holoen.fans?locale=en&depth=3';
		this.headers = new Headers({
			Authorization: `API-Key ${token}`,
			Cookie: 'lng=en'
		});
	}

	async get<T = any>(path: string, params?: Record<string, any>): Promise<T> {
		const urlObj = new URL(path, this.baseURL);
		if (params) {
			Object.keys(params).forEach((key) => urlObj.searchParams.append(key, params[key]));
		}
		const response = await fetch(urlObj.toString(), { headers: this.headers });
		return response.json();
	}

	// Add other methods like put, delete, etc. as needed
}

export default HoloENFansClient;
