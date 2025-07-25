import axios from "axios";

const GEOCODE_API = import.meta.env.VITE_GEOCODE_API;

export async function getAddress({ latitude, longitude }) {
  try {
    const res = await axios.get(GEOCODE_API, {
      params: {
        latitude,
        longitude,
      },
    });

    return res.data;
  } catch (err) {
    throw Error("Failed getting address");
  }
}

