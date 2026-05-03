import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 40 — Preservation of the Remnant
 *
 * Jerusalem has fallen. Most are exiled. But God leaves a remnant in the land.
 * Gedaliah is appointed governor over the poor, and Jeremiah joins him. The
 * promise of Jeremiah 29 is enacted: God preserves a remnant that will be the
 * seed of restoration.
 */
export const JEREMIAH_40: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 40,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 2 },
  intros: [
    'After the fall of Jerusalem, exile seems total. The powerful are taken to Babylon. The Temple is burned. The walls are broken. But God has preserved a promise: not all are exiled. A remnant remains. These are the poor of the land, those left behind in the chaos of war. And over this remnant, God raises a governor—Gedaliah—and sends Jeremiah to walk among them.',
    'The pattern is ancient. In Noah&apos;s flood, a remnant was saved. Through Joseph, a remnant of Israel came to Egypt and was preserved. In exile, a remnant will be the seed of restoration. God never entirely abandons His people. Always there is a faithful few, a small group through whom restoration can flow.',
  ],

  sections: [
    {
      ref: 'Jeremiah 40:1–12',
      title: 'The Remnant Gathered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(1, 'The word that came to Jeremiah from the Lord, after that Nebuzaradan the captain of the guard had let him go from Ramah, when he had taken him being bound in chains among all that were carried away captive of Jerusalem and Judah, which were carried away captive unto Babylon.'),
            plain(5, 'Now while he was not yet gone back, he said, Go back also to Gedaliah the son of Ahikam the son of Shaphan, whom the king of Babylon hath made governor over the cities of Judah, and dwell with him among the people: or go wheresoever it seemeth convenient unto thee to go. So the captain of the guard gave him victuals and a reward, and let him go.'),
            plain(7, 'Then all the Jews that were in Moab, and among the Ammonites, and in Edom, and that were in all the countries, heard that the king of Babylon had left a remnant of Judah, and that he had set over them Gedaliah the son of Ahikam the son of Shaphan.'),
            plain(11, 'Likewise when all the Jews that were in Moab, and among the Ammonites, and in Edom, and that were in all the countries, heard that the king of Babylon had left a remnant in Judah, and that he had set over them Gedaliah the son of Ahikam, they came to the land of Judah, to Gedaliah, unto Mizpah, and gathered wine and summer fruits very much.'),
            plain(12, 'Also Johanan the son of Kareah, and all the captains of the forces that were in the fields, came to Gedaliah to Mizpah,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer40-remnant',
          html:
            'God does not exile all Israel. Even when judgment is total, even when the mighty are taken away, God leaves a remnant. The word "remnant"—she&apos;ar in Hebrew—means what remains, what is left over. But in biblical theology, the remnant is never incidental. It is precious. It is the seed through which restoration will come.',
        },
        {
          kind: 'commentary',
          id: 'jer40-gedaliah',
          html:
            'Gedaliah is appointed governor not by Israel&apos;s king, but by Babylon&apos;s. This is a remarkable arrangement. The pagan empire leaves a Jewish governor in place. Jeremiah, though he could go to Babylon, chooses to stay with Gedaliah and the remnant. The prophet ministers to the small group, encouraging them, speaking hope into their despair.',
        },
        {
          kind: 'commentary',
          id: 'jer40-gather',
          html:
            'Word spreads among the scattered Jews: there is a remnant in the land. There is leadership. There is the possibility of beginning again. And they come. From Moab, from Ammonites, from Edom, Jews who had fled in different directions hear that home is possible and return. The harvest of wine and summer fruits begins again. Life resumes.',
        },
        {
          kind: 'carry',
          html:
            'Even in your own exile—whether from God, from community, from home—God preserves a remnant of hope. There is always a small group, a seed, a beginning point from which restoration can flow. You are not alone. You are not forgotten. God leaves a remnant in every catastrophe.',
        },
        {
          kind: 'reflection',
          id: 'jer40-remnant-hope',
          prompt: 'What remnant of hope or faith do you hold onto in your own times of exile or loss? How might you be part of gathering and encouraging other remnants—other faithful ones—toward restoration?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The king of Babylon hath left a remnant of Judah, and that he had set over them Gedaliah...they came to the land of Judah...and gathered wine and summer fruits very much.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 40 · Study Guide',
  },

  hasHebrew: false,
};
