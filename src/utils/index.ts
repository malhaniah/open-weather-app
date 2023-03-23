import axios from "axios";

export interface SearchProps {
  city: string;
  zipcode?: string;
}

interface geocodingTypes {
  name: string;
  local_names: {
    af: string;
    ar: string;
    ascii: string;
    az: string;
    bg: string;
    ca: string;
    da: string;
    de: string;
    el: string;
    en: string;
    eu: string;
    fa: string;
    feature_name: string;
    fi: string;
    fr: string;
    gl: string;
    he: string;
    hi: string;
    hr: string;
    hu: string;
    id: string;
    it: string;
    ja: string;
    la: string;
    lt: string;
    mk: string;
    nl: string;
    no: string;
    pl: string;
    pt: string;
    ro: string;
    ru: string;
    sk: string;
    sl: string;
    sr: string;
    th: string;
    tr: string;
    vi: string;
    zu: string;
  };
  lat: Number;
  lon: Number;
  country: string;
  state: string;
}

export async function geocoding({ city, zipcode }: SearchProps) {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q='${city}'&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const api_errors = [401, 404, 429];
  if (!api_errors.includes(response.status)) {
    return response.data[0];
  }
}

export const weather = async (city: string, zipcode?: string) => {
  const geocords = (await geocoding({
    city: city.charAt(0).toUpperCase() + city.slice(1),
    zipcode: zipcode,
  })) as geocodingTypes;

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${geocords.lat}&lon=${geocords.lon}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );

  console.log(response.data)
};
