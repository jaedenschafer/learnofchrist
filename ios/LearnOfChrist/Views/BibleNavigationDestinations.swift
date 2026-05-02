// BibleNavigationDestinations.swift
// ────────────────────────────────────────────────────────────────────────────
// Shared navigation routing for any NavigationStack that needs to be
// able to push a book → chapter → reader. Both the Read tab (which
// roots at BookGridView) and the Library tab (which roots at activity
// rows that link to chapters) attach this so a tap anywhere in the app
// resolves to the same set of destinations.
//
// Adding a new screen with the same destinations is one line:
//     NavigationStack { … }.bibleNavigationDestinations()

import SwiftUI

extension View {
    func bibleNavigationDestinations() -> some View {
        self
            .navigationDestination(for: BibleBook.self) { book in
                ChapterListView(book: book)
            }
            .navigationDestination(for: ChapterRoute.self) { route in
                ChapterLoaderView(route: route)
            }
    }
}
