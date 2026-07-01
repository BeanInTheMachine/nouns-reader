# Contributing

Nouns Reader is CC0 — you can do anything with this code. Build, remix, sell it, fork it — no permission needed.

## Ways to contribute

- **Report bugs** — Open an issue on GitHub
- **Submit PRs** — Fixes, features, platform improvements
- **Help others** — Answer questions in discussions

## Development

Clone and bootstrap:

```sh
git clone https://github.com/BeanInTheMachine/nouns-reader.git
cd nouns-reader
yarn bootstrap
yarn example start    # Start Metro
yarn example ios      # Run iOS
yarn example android  # Run Android
```

## Where to start

Forked from [react-native-readium](https://github.com/5-stones/react-native-readium). The core library wraps Readium's native toolkits (Swift for iOS, Kotlin for Android). The example app in `apps/` demonstrates all features.

See the [original CONTRIBUTING guide](https://github.com/5-stones/react-native-readium/blob/main/CONTRIBUTING.md) for detailed architecture info.
