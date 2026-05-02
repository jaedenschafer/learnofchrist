# Learn of Christ — iOS

Native SwiftUI app, iOS 17+. Bundle id: `com.learnofchrist.app`.

This is the v1 foundation: fetch the published content manifest from
Supabase Storage, download the per-book pack the user opens, render it.
No AI features, no in-app purchases, no rate limiting — see
`../docs/MOBILE-PLATFORM-STRATEGY.md` for the full v1 scope.

## First-time setup

1. Install **Xcode** from the Mac App Store. (Command Line Tools alone
   are not enough — `xcodebuild` and the iOS Simulator runtime live
   inside the full Xcode bundle.)
2. After installing Xcode, point your developer tools at it:
   ```sh
   sudo xcode-select -s /Applications/Xcode.app
   ```
3. Install **xcodegen** if you don't have it (Homebrew is the easiest path):
   ```sh
   brew install xcodegen
   ```
4. Generate the Xcode project from `project.yml`:
   ```sh
   cd ios
   xcodegen generate
   ```
5. Open the generated workspace:
   ```sh
   open LearnOfChrist.xcodeproj
   ```
6. Hit ⌘R. The app should launch in the Simulator, fetch the manifest,
   download the Genesis pack, and render Genesis 1.

## Project layout

```
ios/
├── project.yml                          xcodegen source of truth
├── LearnOfChrist.xcodeproj/             generated; commit it
└── LearnOfChrist/
    ├── LearnOfChristApp.swift           @main entry
    ├── Models/
    │   ├── ContentManifest.swift        manifest.json shape
    │   └── RichChapterContent.swift     pack JSON shape (Block enum + Codable)
    ├── Networking/
    │   └── ContentService.swift         fetch + hash-validate packs
    ├── Persistence/
    │   └── PackCache.swift              file cache in Application Support
    ├── Views/
    │   ├── RootView.swift               loads manifest → pack → reader
    │   └── Reader/
    │       └── ChapterReaderView.swift  renders the rich block kinds
    └── Resources/
        └── Assets.xcassets/
            ├── AppIcon.appiconset/
            └── AccentColor.colorset/
```

## What's deliberately out of scope right now

- Auth / Sign in with Apple — the app boots straight into Genesis.
- Multi-book browsing — RootView hard-codes Genesis 1 to prove the loop.
- Translation switcher / lens toggle / depth toggle — coming after the
  reader UX is locked in.
- Widgets, Watch, CarPlay — Phase 5+ in the platform plan.

## Editing the project structure

Edit `project.yml`, then re-run `xcodegen generate`. Don't edit the
`.xcodeproj` directly — your changes will be clobbered next regen.
