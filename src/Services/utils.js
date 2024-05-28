import axios from 'axios';

const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(new Error(`Geolocation error: ${error.message}`));
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }
        );
      }
    });
  };

const reverseGeocode = async (latitude, longitude) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0].formatted_address;
    } else {
      throw new Error("No address found for the given coordinates");
    }
  } catch (error) {
    throw new Error(`Reverse geocoding error: ${error.message}`);
  }
};

export { getCurrentLocation, reverseGeocode };
