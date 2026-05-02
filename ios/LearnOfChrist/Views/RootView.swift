// RootView.swift
// ────────────────────────────────────────────────────────────────────────────
// Initial app screen. v1 boots straight into Genesis 1 from the published
// content packs — no auth, no onboarding. The whole point of this view
// in the foundation phase is to prove the loop:
//
//   manifest fetch → pack download → cache → render
//
// Once we have a real Bible browser tab, RootView swaps to a TabView.

import SwiftUI

struct RootView: View {
    @State private var loadState: LoadState = .idle
    @State private var pack: ContentPack?

    enum LoadState: Equatable {
        case idle
        case loading
        case ready
        case failed(String)
    }

    var body: some View {
        NavigationStack {
            Group {
                switch loadState {
                case .idle, .loading:
                    loadingView
                case .ready:
                    if let pack, let chapter1 = pack.chapter(1) {
                        ChapterReaderView(chapter: chapter1)
                    } else {
                        Text("Pack loaded but chapter 1 missing.")
                            .foregroundStyle(.secondary)
                    }
                case .failed(let message):
                    failureView(message: message)
                }
            }
            .navigationTitle("Learn of Christ")
            .navigationBarTitleDisplayMode(.inline)
        }
        .task {
            await loadGenesis()
        }
    }

    private var loadingView: some View {
        VStack(spacing: 16) {
            ProgressView()
            Text("Fetching the latest content…")
                .foregroundStyle(.secondary)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private func failureView(message: String) -> some View {
        VStack(spacing: 12) {
            Image(systemName: "exclamationmark.triangle")
                .font(.largeTitle)
                .foregroundStyle(.orange)
            Text("Couldn't load content")
                .font(.headline)
            Text(message)
                .font(.callout)
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)
            Button("Try again") {
                Task { await loadGenesis() }
            }
            .buttonStyle(.borderedProminent)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private func loadGenesis() async {
        loadState = .loading
        do {
            let manifest = try await ContentService.shared.fetchManifest()
            guard let entry = manifest.entries.first(where: { $0.book == "genesis" }) else {
                throw NSError(
                    domain: "LearnOfChrist",
                    code: 404,
                    userInfo: [NSLocalizedDescriptionKey: "Genesis pack not found in manifest"]
                )
            }
            let pack = try await ContentService.shared.loadPack(entry)
            self.pack = pack
            self.loadState = .ready
        } catch {
            self.loadState = .failed(error.localizedDescription)
        }
    }
}

#Preview {
    RootView()
}
