import axios from "axios";

export interface SearchProps {
  args: {
    city: string;
    zipcode?: string;
  };
}

export const geocoding = async ({ args: { city } }: SearchProps) => {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q='${city}'&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const api_errors = [401, 404, 429];
  if (api_errors.includes(response.status)) {
    return {
      message: "Sorry!, Please provid a valid argument",
    };
  } else {
    return response.data;
  }
};
