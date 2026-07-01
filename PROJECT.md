# Nouns Reader — Project Overview

**Repo:** https://github.com/BeanInTheMachine/nouns-reader  
**Local:** `C:\Users\solar\Nouns Reader\nouns-reader`  
**Status:** Rebranded, CI in progress (building first APK)  
**Last updated:** June 30, 2026

---

## What This Is

A CC0 EPUB reader for iOS and Android, forked from [react-native-readium](https://github.com/5-stones/react-native-readium) v5.0.0-rc.17 and rebranded for Nouns DAO. Uses the [Readium](https://readium.org/) rendering engine under the hood.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React Native (0.83.1) |
| Language | TypeScript |
| EPUB Engine | Readium (Swift Toolkit + Kotlin Toolkit) |
| Package Manager | Yarn 3.6.4 (Berry, with Corepack) |
| CI | GitHub Actions |
| Node | >= 20 |
| Android | JDK 17, compileSdk 36, Kotlin 2.1.20 |
| iOS | Xcode 16.2+, Swift 6.0, iOS 13.4+ |

---

## What's Been Done

### Rebranding (complete)
- App name: `Nouns Reader`
- Bundle ID: `wtf.nouns.reader` (Android + iOS)
- Package name: `wtf.nouns.reader` (Android, previously `com.example.reactnativereadium`)
- Root package: `nouns-reader` (previously `react-native-readium`)
- License: CC0 1.0 Universal (previously MIT)

### Theme (complete)
- Dark theme with Nouns DAO color palette
- Primary: `#FFC700` (Nouns gold), backgrounds: `#0D0D0D` / `#1A1A1A`
- Text: `#FFFFFF` / `#B0B0B0`, borders: `#333333`
- All UI components themed: HomeScreen, modals, search, reader, controls, highlights, etc.
- Launch screen: "Nouns Reader" / "CC0 · Nouns DAO"

### App Icon (complete)
- Bookhead + Noggles icon at all Android densities (mdpi → xxxhdpi, square + round)
- All iOS AppIcon sizes (iPhone, iPad, App Store 1024)
- Source file: `C:\Users\solar\Nouns Reader\nouns-reader\icon-source.png`

### CI Pipeline (in progress)
- GitHub Actions workflow: `.github/workflows/build-android.yml`
- Triggers on push to `master` or manual `workflow_dispatch`
- Builds Android release APK and uploads as artifact
- iOS build not yet set up

---

## Current State

### CI is building
The GitHub Actions pipeline is running at:  
https://github.com/BeanInTheMachine/nouns-reader/actions

Recent fixes applied:
1. `corepack enable` to activate Yarn 3.6.4
2. `chmod +x gradlew` for Linux permission
3. `--no-immutable` flag for fresh lockfile generation
4. Deleted stale `yarn.lock` (17,641 lines of old workspace refs)
5. Replaced all `react-native-readium` → `nouns-reader` in package.json, tsconfig.json, and all import paths across 22 files

### Remaining `react-native-readium` references
These are all in doc/attribution text — safe to ignore:
- `LICENSE`, `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md` (attribution to original project)
- `apps/*/README.md` (example app docs)
- `apps/example-nextjs/next.config.js` (web example webpack alias — fix when building web)
- `scripts/readium_post_install.rb` (iOS pod helper — fix when building iOS)
- `ios/Reader/EPUB/SelectionActionHandler.{h,m}` (just header comments)
- `apps/example-native/ios/Podfile.lock` (auto-generated, will regenerate)

---

## What's Next / Remaining

### Short term
1. **Verify CI passes** → download APK from Actions → test on phone
2. **If CI fails again**, check the specific error. Common next issues:
   - Gradle build errors (SDK version mismatches, missing Android SDK components)
   - React Native native module compilation issues
   - `yarn install` dependency resolution failures

### Medium term
3. **Commit the generated lockfile** back to repo once CI builds successfully
4. **iOS build** — needs a Mac with Xcode, or set up CI on a macOS runner
5. **Test on iPhone** — requires `pod install` and Xcode build
6. **Fix remaining `react-native-readium` references** in web config and scripts
7. **Rename iOS Xcode project** from `ReadiumExample` to `NounsReader` (directory + pbxproj)
8. **Rename iOS source folder** `apps/example-native/ios/ReadiumExample/` → `Apps/example-native/ios/NounsReader/`

### Long term / nice to have
9. Play Store / App Store publishing
10. Nouns DAO on-chain integration (wallet connect?)
11. OPDS catalog browsing
12. PDF / CBZ support (on Readium roadmap)

---

## Key File Map

```
nouns-reader/
├── .github/workflows/build-android.yml   ← CI pipeline
├── package.json                           ← root package (nouns-reader)
├── nouns-reader.podspec                   ← iOS CocoaPods spec
├── icon-source.png                        ← app icon source (1024px)
├── src/                                   ← library source (Readium wrapper)
├── apps/
│   ├── common-app/src/                    ← shared UI components
│   │   ├── styles/modal.ts                ← theme colors (Nouns palette)
│   │   └── components/
│   │       ├── HomeScreen.tsx             ← main library screen
│   │       ├── Reader.tsx                 ← reader view
│   │       ├── ControlBar.tsx             ← top bar with settings
│   │       ├── SearchPanel.tsx            ← full-text search
│   │       ├── TableOfContents.tsx        ← TOC navigation
│   │       ├── ReaderBottomSheet.tsx      ← bottom sheet with details
│   │       ├── PreferencesEditor.tsx      ← reader settings modal
│   │       └── highlights/               ← highlight/annotation system
│   ├── example-native/                    ← mobile app (iOS + Android)
│   │   ├── app.json                       ← app name config
│   │   ├── ios/                           ← Xcode project
│   │   │   └── ReadiumExample/           ← (needs renaming to NounsReader/)
│   │   │       ├── Info.plist            ← display name, bundle ID
│   │   │       └── LaunchScreen.storyboard ← splash screen
│   │   └── android/                       ← Android project
│   │       └── app/src/main/java/wtf/nouns/reader/
│   │           ├── MainActivity.kt       ← entry point
│   │           └── MainApplication.kt    ← app class
│   └── example-nextjs/                    ← web example (Next.js)
├── android/                               ← library native Android code
├── ios/                                   ← library native iOS code
└── web/                                   ← library web implementation
```

---

## Useful Commands

### Local development (once prerequisites installed)
```powershell
cd "C:\Users\solar\Nouns Reader\nouns-reader"
yarn bootstrap        # install deps + pods
yarn example start    # start Metro bundler
yarn example android  # run on Android device/emulator
yarn example ios      # run on iOS device/simulator
```

### Manual CI trigger
Go to https://github.com/BeanInTheMachine/nouns-reader/actions → "Build Android APK" → "Run workflow"

### Download APK from phone
https://github.com/BeanInTheMachine/nouns-reader/actions → latest run → Artifacts → nouns-reader-apk
