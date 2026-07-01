# Nouns Reader

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-brightgreen.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey.svg)]()
[![Nouns DAO](https://img.shields.io/badge/%E2%8C%90%20Nouns_DAO-CC0-yellow.svg)](https://nouns.wtf)

A CC0 EPUB ebook reader for iOS, Android, and Web. Built for the Nouns DAO ecosystem using [Readium](https://readium.org/) — the industry-standard ebook rendering engine.

Forked from [react-native-readium](https://github.com/5-stones/react-native-readium).

---

## Overview

- Render EPUB 2 and EPUB 3 ebooks on iOS, Android, and Web
- Dark, Light, and Sepia reading modes
- Full-text search, table of contents navigation
- Highlights and annotations
- Customizable font size and page margins
- Location tracking and bookmarks

## Installation

### Prerequisites

- **Node** >= 20
- **JDK 17** (Android)
- **iOS** >= 13.4, Xcode 16.2+, Swift 6.0

```sh
yarn add nouns-reader react-native-nitro-modules
```

### iOS

Add the Readium podspec source to your Podfile:

```rb
source 'https://github.com/readium/podspecs'
source 'https://cdn.cocoapods.org/'

target 'YourApp' do
  config = use_native_modules!
  readium_pods
  post_install do |installer|
    react_native_post_install(installer, ...)
    readium_post_install(installer)
  end
end
```

### Android

`compileSdkVersion` >= 31 required. Enable core library desugaring if needed.

## Usage

```tsx
import { ReadiumView } from 'nouns-reader';
import type { File } from 'nouns-reader';

const MyReader: React.FC = () => {
  const [file] = useState<File>({
    url: '/path/to/book.epub',
  });

  return <ReadiumView file={file} />;
};
```

## Supported Formats

| Format | Support |
|--------|---------|
| EPUB 2 | Yes |
| EPUB 3 | Yes |
| PDF    | Planned |
| CBZ    | Planned |

## License

[CC0 1.0 Universal](LICENSE) — Public Domain Dedication.

This is a fork of [react-native-readium](https://github.com/5-stones/react-native-readium) (originally MIT licensed).

## Contributing

CC0 means you can do anything with this code. PRs welcome.

---

Built with [Readium](https://readium.org/) · [Nouns DAO](https://nouns.wtf)
