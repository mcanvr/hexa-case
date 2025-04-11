# hexa-case

This is a React Native application built with Expo that leverages **Artificial Intelligence** to generate unique logos based on user-provided text prompts and selected style preferences.

## ✨ Features

- **AI-Powered Logo Generation:** Create logos tailored to your needs using AI, driven by your text descriptions.
- **Style Selection:** Choose from a diverse range of logo styles to match your brand identity.
- **Responsive Design:** Adapts seamlessly to different screen sizes thanks to NativeWind.
- **State Management:** Utilizes Redux Toolkit for efficient and predictable state management.
- **Navigation:** Handled by Expo Router for smooth screen transitions.

## 🚀 Tech Stack

- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS for React Native), `tailwind-merge`, `clsx`
- **State Management:** Redux Toolkit, React Redux
- **Routing:** Expo Router
- **API Client:** Axios (Likely used for AI model communication)
- **UI Components:** Expo Vector Icons, React Native SVG, Lottie React Native
- **Fonts:** Expo Google Fonts (Manrope)
- **Utilities:** Expo Secure Store
- **Linting/Formatting:** ESLint, Prettier

## 🏁 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Yarn or npm
- Expo Go app on your mobile device or an emulator/simulator
- Expo CLI: `npm install -g expo-cli`

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd hexa-case
    ```
2.  Install dependencies:
    ```bash
    yarn install
    # or
    npm install
    ```

### Running the App

1.  Start the development server:
    ```bash
    yarn start
    # or
    npm start
    ```
2.  Follow the instructions in the terminal to open the app:
    - Scan the QR code with the Expo Go app (Android) or the Camera app (iOS).
    - Press `a` to run on an Android emulator/device.
    - Press `i` to run on an iOS simulator/device.
    - Press `w` to run in the web browser.

## 📁 Folder Structure

```
hexa-case/
├── .expo/            # Expo configuration and cache
├── api/              # API service definitions (e.g., communication with AI backend)
├── app/              # Expo Router screens and layout configuration
├── assets/           # Static assets like images and fonts
├── components/       # Reusable UI components (e.g., Prompt input, Style selection)
├── hooks/            # Custom React hooks
├── locales/          # Internationalization files
├── node_modules/     # Project dependencies
├── store/            # Redux Toolkit store, slices, and configuration
├── utils/            # Utility functions and helpers
├── .eslintrc.js      # ESLint configuration
├── .gitignore        # Git ignore rules
├── app.json          # Expo app configuration
├── babel.config.js   # Babel configuration
├── metro.config.js   # Metro bundler configuration
├── package.json      # Project metadata and dependencies
├── prettier.config.js # Prettier configuration
├── README.md         # This file
├── tailwind.config.js # NativeWind (Tailwind CSS) configuration
└── tsconfig.json     # TypeScript configuration
```

## 📜 Available Scripts

In the project directory, you can run:

- `yarn start` or `npm start`: Starts the Expo development server.
- `yarn android` or `npm run android`: Starts the app on a connected Android device or emulator.
- `yarn ios` or `npm run ios`: Starts the app on an iOS simulator or device.
- `yarn web` or `npm run web`: Starts the app in a web browser.
- `yarn lint`: Lints the code using ESLint and checks formatting with Prettier.
- `yarn format`: Lints the code with ESLint and formats it using Prettier.
- `yarn prebuild`: Creates the native `android` and `ios` directories.

## ✍️ Author

- **Mehmet Can Vardar** - mcanvr@icloud.com
