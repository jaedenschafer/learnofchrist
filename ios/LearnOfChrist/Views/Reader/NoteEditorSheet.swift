// NoteEditorSheet.swift
// ────────────────────────────────────────────────────────────────────────────
// Sheet for writing or editing a verse-level note. Opens with the
// existing note prefilled (if any). Save is autosave on dismiss; Delete
// soft-deletes via the store; Cancel discards unsaved edits.

import SwiftUI

struct NoteEditorSheet: View {
    let bookSlug: String
    let bookName: String
    let chapter: Int
    let verse: Int
    /// Current note body, if a note already exists. Empty string means
    /// "no note yet."
    @Binding var initialBody: String

    @Environment(\.dismiss) private var dismiss
    @Environment(UserDataStore.self) private var userData

    @State private var draft: String = ""
    @FocusState private var focused: Bool

    var body: some View {
        NavigationStack {
            VStack(alignment: .leading, spacing: Theme.metric.spaceS) {
                Text(referenceLabel)
                    .font(Theme.font.eyebrow)
                    .tracking(1.5)
                    .foregroundStyle(Theme.color.secondaryLabel)

                TextEditor(text: $draft)
                    .scrollContentBackground(.hidden)
                    .font(Theme.font.body)
                    .padding(Theme.metric.spaceM)
                    .frame(minHeight: 220)
                    .themeFill(.subtle, radius: Theme.metric.radiusMD)
                    .focused($focused)
            }
            .padding(.horizontal, Theme.metric.readerHorizontalPadding)
            .padding(.top, Theme.metric.spaceL)
            .frame(maxHeight: .infinity, alignment: .top)
            .background(Theme.color.background)
            .navigationTitle("Note")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    Button("Cancel") { dismiss() }
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Save") {
                        save()
                        dismiss()
                    }
                    .bold()
                    .disabled(draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                }
                if !initialBody.isEmpty {
                    ToolbarItem(placement: .bottomBar) {
                        Button(role: .destructive) {
                            // Save with empty body → upsertNote treats
                            // empty as "delete" via not inserting + no-op
                            // on existing rows that we'd then soft-delete.
                            // But we want explicit delete semantics, so
                            // call into the store with a clear empty.
                            draft = ""
                            save()
                            dismiss()
                        } label: {
                            Label("Delete note", systemImage: "trash")
                        }
                    }
                }
            }
        }
        .onAppear {
            draft = initialBody
            focused = true
        }
        .presentationDetents([.medium, .large])
    }

    private var referenceLabel: String {
        "\(bookName.uppercased()) \(chapter):\(verse)"
    }

    private func save() {
        userData.upsertNote(
            bookSlug: bookSlug,
            chapter: chapter,
            verse: verse,
            body: draft.trimmingCharacters(in: .whitespacesAndNewlines)
        )
    }
}
