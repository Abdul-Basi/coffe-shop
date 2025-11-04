# React Native Coffee Shop App




A mobile app originally built with React Native CLI. This repository has been updated to be compatible with Expo so you can run it easily with the Expo CLI.

## Key Features

- **Coffee Shop Locator:** Discover the best coffee shops nearby with ratings and reviews.
- **Menu Browsing:** Explore coffee shop menus, complete with descriptions and images.
- **Cart and Ordering:** Build your coffee order in the cart, customize it, and proceed to checkout.
- **Saved Favorites:** Save your favorite coffee drinks for quick ordering.
- **Order History:** Keep track of your previous orders for easy reordering.
- **iOS Dependencies:** For iOS users, make sure to run `pod install` in the `ios` directory to install necessary dependencies.

## Installation (Expo)

2. Navigate to the project directory: `cd Coffee-Shop-App-React-Native`
3. Install dependencies: `npm install` or `yarn`

## Usage (Expo)

- Start the development server and open the Expo devtools: `npm run start` or `yarn start`
- To open on Android emulator/device: `npm run android` (runs `expo start --android`)
- To open on iOS simulator/device: `npm run ios` (runs `expo start --ios`)
- To run in web browser: `npm run web` (runs `expo start --web`)

Notes:
- You can also run `npx expo start` without installing the global CLI.
- Some native libraries used in this project may require additional Expo config or replacement packages. If you hit native build errors, see the notes below.

Migration notes:
- Native modules such as `react-native-splash-screen`, `lottie-react-native`, and some community native modules may require Expo equivalents (`expo-splash-screen`, `lottie-react-native` via config plugins, `@expo/vector-icons`, `expo-linear-gradient`) or running `expo prebuild` to create native projects.
- If you previously used CocoaPods directly, Expo manages native dependencies for the managed workflow. For a custom native setup use `expo prebuild` or eject.


## License

This project is licensed under the [MIT License](LICENSE.md).

## Contact

For questions or support, please contact me [Here](abdulbasit505basit@gmail.com).

---

Savor your coffee shop experiences! ☕📱

