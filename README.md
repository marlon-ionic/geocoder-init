# Geocoder Init

This project is a simple implementation of the Google geocoder using Ionic framework. The app loads the Google SDKs using the `@googlemaps/js-api-loader` library (along with the `@types/google.maps` for better TypeScript support). Using the api-loader, the app initializes the Google Maps SDK and the Geocoder service. The app then uses the Geocoder service to reverse geocode the user's current location.

## Installation

1. Clone the repository: `git clone https://github.com/marlon-ionic/geocoder-init.git`
2. Navigate to the project directory: `cd geocoder-init`
3. Install dependencies: `npm install`
4. **IMPORANT**: Add your Google Maps API key to a `.env` file in the root of the project. Your `.env` file should look like this:

   ```bash
   NG_APP_GOOGLE_API_KEY=YOUR_API_KEY_GOES_HERE
   ```

## Usage

1. Build the project: `ionic build`
2. Run the project via an emulator or device using `npx cap run android` or `npx cap run ios`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
