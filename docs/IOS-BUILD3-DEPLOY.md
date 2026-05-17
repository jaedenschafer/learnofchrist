# iOS build 3 — widgets, deep links, Read-To-Unlock

What changed since build 1/2 (and what you need to do on the Mac).

## What's in this build

1. **Real app icon.** `public/icon-512.png` composited onto a warm parchment
   gradient, drop shadow, and saved at 1024×1024 to
   `ios/LearnOfChrist/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png`.

2. **Home Screen widgets** (`ios/LearnOfChristWidgets/`):
   - Small + medium "Today's chapter" tile.
   - Tapping deep-links into the reader at the user's current rotation entry.

3. **Lock Screen widgets**:
   - Inline strip ("📖 Genesis 1") above the clock.
   - Circular accessory showing the chapter number.

4. **Read-To-Unlock**: `ios/LearnOfChrist/ScreenTime/FocusReadManager.swift` +
   `FocusReadView.swift`. Settings → "Read to unlock" enables blocking selected
   apps via Family Controls. When you finish a chapter the shield lifts for
   N minutes, then reapplies.

5. **`learnofchrist://study/<bookSlug>/<chapter>` URL scheme**, parsed in
   `ChapterRoute.parse(deepLink:)` and pushed onto the visible tab's
   navigation stack in `RootView`.

6. **Build number bumped to 2** in `project.yml` and the .xcodeproj.

## Manual steps on the Mac

The new widget extension is a *target*, not just a folder — Xcode needs the
generated project to know about it. Run from `~/code/learnofchrist/ios`:

```bash
brew install xcodegen   # if not already installed
cd ~/code/learnofchrist/ios
xcodegen generate
```

Then open the regenerated project in Xcode (close the existing window first):

```bash
open LearnOfChrist.xcodeproj
```

You'll see a second target, **LearnOfChristWidgets**, in the project navigator
with the four widget Swift files + `Info.plist` + `LearnOfChristWidgets.entitlements`.

### One-time signing for the widget target

Xcode → LearnOfChristWidgets target → Signing & Capabilities:

- Team: Jaeden Schafer (same as main app)
- Automatically manage signing: on
- "+ Capability" → **App Groups** → check
  `group.com.learnofchrist.app.shared` (Xcode will create it the first time
  and add it to your provisioning profile).

Same App Groups capability on the main **LearnOfChrist** target. The
entitlements file already lists the group; Xcode just needs to register it
with Apple.

### Re-archive + upload

Product → Archive. After it completes, Organizer → Distribute App →
App Store Connect → Upload. The new IPA will appear in TestFlight as
build 3 within ~5 minutes.

## What's NOT in this build (yet)

- **Family Controls runtime works only with the entitlement.** The
  application was submitted via
  https://developer.apple.com/contact/request/family-controls-distribution
  on 2026-05-13. Until Apple emails approval, `FocusReadManager.authorize()`
  will succeed on your dev device but the feature can't be shipped to
  external testers.

- **App Store screenshots + privacy policy URL.** Required for App Store
  review (not for TestFlight). Track separately.

## Verifying after install

1. Long-press home screen → + → search "Learn of Christ" → add small widget.
2. Open any chapter in the app. Widget should refresh to that reference within
   a minute (or instantly if you tap "Reload" in the widget gallery).
3. Lock the phone. Edit Lock Screen → Add Widgets → Learn of Christ →
   Circular. See chapter number + book icon.
4. Settings → Read to unlock → Enable Family Controls. (System will prompt.)
5. Choose apps → pick one or two distracting apps.
6. Toggle "Block selected apps" on. Try opening that app — it should be
   blocked by the system shield.
7. Open Learn of Christ, read a chapter to the bottom. The shield lifts for
   the configured number of minutes, then re-engages.
