// api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const req = async <T>(
  path: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    // Provide an explicit type for the 'error' variable
    throw new Error(`API request error: ${error.message}`);
  }
};
