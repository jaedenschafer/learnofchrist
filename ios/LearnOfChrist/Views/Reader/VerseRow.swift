// VerseRow.swift
// ────────────────────────────────────────────────────────────────────────────
// One verse line in the scripture block. Tappable for the actions menu;
// renders the highlight tint + note badge when present.
//
// The row owns no persistence — it receives state in (`isHighlighted`,
// `hasNote`) from the parent and reports user intent out via `onAction`.
// This keeps the row pure and lets the parent batch SwiftData queries.

import SwiftUI

enum VerseAction: Hashable {
    case highlight
    case unhighlight
    case openNote
    case bookmark
    case share
    case copy
}

struct VerseRow: View {
    let line: VerseLine
    let isHighlighted: Bool
    let hasNote: Bool
    let onAction: (VerseAction) -> Void

    private var plainText: String {
        line.spans.map(\.text).joined()
    }

    var body: some View {
        HStack(alignment: .firstTextBaseline, spacing: Theme.metric.spaceXS + 2) {
            // Verse number + optional note dot.
            ZStack(alignment: .topTrailing) {
                Text("\(line.number)")
                    .font(Theme.font.eyebrow)
                    .foregroundStyle(Theme.color.secondaryLabel)
                    .frame(minWidth: Theme.metric.verseNumberMinWidth, alignment: .trailing)
                if hasNote {
                    Circle()
                        .fill(Theme.color.accent)
                        .frame(width: 6, height: 6)
                        .offset(x: 5, y: -3)
                        .accessibilityHidden(true)
                }
            }

            // Verse text — picks up the highlight wash when one exists
            // for this verse.
            Text(plainText)
                .font(Theme.font.body)
                .foregroundStyle(Theme.color.label)
                .padding(.horizontal, isHighlighted ? 4 : 0)
                .padding(.vertical, isHighlighted ? 2 : 0)
                .background(
                    isHighlighted ? Theme.color.highlight : Color.clear,
                    in: RoundedRectangle(cornerRadius: 4)
                )
                .frame(maxWidth: .infinity, alignment: .leading)
                .contentShape(Rectangle())
        }
        .contentShape(Rectangle())
        .accessibilityElement(children: .combine)
        .accessibilityLabel(accessibilityLabel)
        .accessibilityActions {
            Button(isHighlighted ? "Remove highlight" : "Highlight") {
                onAction(isHighlighted ? .unhighlight : .highlight)
            }
            Button(hasNote ? "Edit note" : "Add note") { onAction(.openNote) }
            Button("Bookmark") { onAction(.bookmark) }
            Button("Share") { onAction(.share) }
            Button("Copy") { onAction(.copy) }
        }
        .contextMenu {
            verseMenu
        }
    }

    @ViewBuilder
    private var verseMenu: some View {
        if isHighlighted {
            Button(role: .destructive) { onAction(.unhighlight) } label: {
                Label("Remove highlight", systemImage: "highlighter")
            }
        } else {
            Button { onAction(.highlight) } label: {
                Label("Highlight", systemImage: "highlighter")
            }
        }
        Button { onAction(.openNote) } label: {
            Label(hasNote ? "Edit note" : "Add note", systemImage: hasNote ? "note.text" : "square.and.pencil")
        }
        Button { onAction(.bookmark) } label: {
            Label("Bookmark verse", systemImage: "bookmark")
        }
        Divider()
        Button { onAction(.share) } label: {
            Label("Share", systemImage: "square.and.arrow.up")
        }
        Button { onAction(.copy) } label: {
            Label("Copy", systemImage: "doc.on.doc")
        }
    }

    private var accessibilityLabel: String {
        var parts = ["Verse \(line.number)", plainText]
        if isHighlighted { parts.append("highlighted") }
        if hasNote { parts.append("has a note") }
        return parts.joined(separator: ", ")
    }
}
