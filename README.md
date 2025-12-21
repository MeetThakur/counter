<p align="center">
  <img src="./assets/images/icon.png" width="128" height="128" alt="Tallies Logo" />
</p>

<h1 align="center">Tallies</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.3.0-blue.svg" alt="Version" />
  <img src="https://img.shields.io/badge/Expo-SDK%2054-lightgrey.svg" alt="Expo" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" />
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-orange.svg" alt="Platform" />
</p>

---

**Tallies** is a simple, elegant, and powerful tally counter app built with Expo and React Native. Designed for efficiency and ease of use, it allows you to track multiple counters, set goals, and manage your data with modern gestures and interaction patterns.

## ✨ Key Features

- 📊 **Multiple Counters** – Track unlimited tallies for anything you need.
- 🎯 **Goal Tracking** – Set targets for your counters and visualize your progress with smooth progress bars.
- 🤏 **Gesture-Driven UX** – Swipe to delete or edit. Long-press to rearrange your counters via dragging.
- ➕ **Smart Increments** – Tap to increment/decrement. Long-press the buttons to add/subtract custom amounts.
- 🌓 **Dynamic Theming** – Seamlessly switch between light and dark modes.
- 📦 **Bulk Operations** – Select multiple items to reset or delete them all at once.
- ✨ **Haptic Feedback** – Tactile feedback for every interaction (tap, long-press, swipe).
- 🔄 **Backup & Restore** – Export your counters to a JSON file and import them back anytime.
- 🔍 **Search & Sort** – Find counters quickly and sort them by name, count, or date.
- ↩️ **Safety Undo** – Accidents happen. Get a 5-second window to restore deleted counters.

## 🚀 Quick Start

### Prerequisites

- Node.js installed
- Expo Go app on your mobile device (optional, for testing)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start the app
npx expo start
```

## 🛠️ Tech Stack

- **Framework**: [Expo SDK 54](https://expo.dev/)
- **Core**: [React Native](https://reactnative.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based)
- **State & Storage**: [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Interactions**: [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- **Utility**: [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/), [React Native Draggable FlatList](https://github.com/computerjazz/react-native-draggable-flatlist)

## 📱 Build APK

We recommend using Expo Application Services (EAS) for building:

```bash
# Cloud build for Android
npx eas-cli build --platform android --profile preview
```

## 📂 Project Structure

```text
├── app/            # Expo Router screens and layouts
├── components/     # Reusable UI components
├── constants/      # App constants (Colors, Typography)
├── contexts/       # React Contexts (Theme)
├── hooks/          # Custom React hooks (useCounters, useSelection)
├── utils/          # Helper functions (DataManager, Export/Import)
└── assets/         # Images, fonts, and static assets
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  <img src="./assets/images/icon.png" width="32" height="32" alt="Tallies Icon" /><br/>
  Made with ❤️ for productivity
</p>
