import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 50 — Against Babylon
 *
 * The oracle against Babylon is the longest and most dramatic. Babylon the great,
 * the superpower of the age, will fall. Its king will be captured. Its walls will
 * be broken down. And God will gather Israel like a shepherd gathers scattered sheep.
 * "Israel is a scattered sheep; the lions have driven him away." But Christ the
 * Shepherd will gather them home.
 */
export const JEREMIAH_50: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 50,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Babylon is the empire that has conquered Israel and taken the people into exile. Babylon is the superpower that seems invincible, eternal, written into the very structure of the world. Yet God speaks against Babylon with absolute certainty: it will fall. "Declare ye among the nations, and publish, and set up a standard; publish, and conceal not: say, Babylon is taken, Bel is confounded, Merodach is broken in pieces."',
    'The vision of Babylon&apos;s fall would have seemed impossible to the exiles. How could a superpower be defeated? How could the walls and armies and resources of Babylon be overcome? Yet God&apos;s word is clear. And even more importantly, God does not simply speak of Babylon&apos;s fall. He speaks of His people&apos;s restoration. "Israel is a scattered sheep; the lions have driven him away." But the Shepherd will seek out and gather His flock.',
  ],

  sections: [
    /* ─── Jeremiah 50:1–10 — Babylon&apos;s Downfall ────────────────────── */
    {
      ref: 'Jeremiah 50:1–10',
      title: 'The Fall of the Great Empire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(2, 'Declare ye among the nations, and publish, and set up a standard; publish, and conceal not: say, Babylon is taken, Bel is confounded, Merodach is broken in pieces; her idols are confounded, her images are broken in pieces.'),
            plain(8, 'Remove out of the midst of Babylon, and go forth out of the land of the Chaldeans, and be as the he goats before the flocks.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer50-babylon-taken',
          html:
            'God proclaims with absolute certainty that Babylon will fall. The proclamation is public, declared among the nations. Bel (the chief god of Babylon) and Merodach (another form of the god Marduk) are confounded and broken. The idols in which Babylon has placed its trust are shattered. This is not a prediction of political instability or weakness. This is a statement that Babylon&apos;s entire religious and cultural foundation is false and will be exposed.',
        },
        {
          kind: 'commentary',
          id: 'jer50-remove',
          html:
            'God calls His people to leave Babylon. "Remove out of the midst of Babylon, and go forth out of the land of the Chaldeans, and be as the he goats before the flocks." The image is of male goats—strong, vigorous, leading the flocks. No longer will Israel follow passively. No longer will Israel be scattered and vulnerable. Israel will lead the way out of exile.',
        },
        {
          kind: 'carry',
          html:
            'This passage speaks to anyone who feels trapped by the powers of this world. Babylon represents the system that seems to have captured you, the forces that seem permanent and overwhelming. Yet God&apos;s word declares: even Babylon falls. Even the great powers of the world are not beyond God&apos;s reach. And if you belong to God, His call is to remove yourself from the systems that do not serve His purposes.',
        },
        {
          kind: 'reflection',
          id: 'jer50-remove-babylon',
          prompt: 'In what "Babylon" do you find yourself—what system or power has captured your attention and allegiance? What does God&apos;s call to "remove out of the midst of Babylon" look like for you?',
        },
      ],
    },

    /* ─── Jeremiah 50:17–20 — The Scattered Sheep ───────────────────── */
    {
      ref: 'Jeremiah 50:17–20',
      title: 'The Shepherd Gathers His Flock',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(17, 'Israel is a scattered sheep; the lions have driven him away: first the king of Assyria hath devoured him; and last this Nebuchadrezzar king of Babylon hath broken his bones.'),
            plain(19, 'Therefore will I bring Israel again to his habitation, and he shall feed in Carmel and Bashan, and his soul shall be satisfied upon mount Ephraim and Gilead.'),
            plain(20, 'In those days, and in that time, saith the Lord, the iniquity of Israel shall be sought for, and there shall be none; and the sins of Judah, and they shall not be found: for I will pardon them whom I reserve.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer50-scattered',
          html:
            'The image of Israel as scattered sheep is one of the most poignant in scripture. The lions—the empires that have preyed upon Israel—have driven the flock in all directions. Assyria devoured Israel in the north. Babylon has broken Judah in the south. The people are scattered, vulnerable, without direction or protection.',
        },
        {
          kind: 'commentary',
          id: 'jer50-habitation',
          html:
            'Yet God promises restoration. Israel will be brought again to his habitation. He will feed in the rich lands—Carmel, Bashan, Ephraim, Gilead—lands of abundance. His soul will be satisfied. More than this, God will pardon Israel&apos;s iniquity. When that day comes, Israel&apos;s sins "shall not be found." They will be pardoned and forgotten, as if they had never been.',
        },
        {
          kind: 'hebrew',
          id: 'jer50-tzon',
          title: 'Tzon — "Sheep" (Tsone)',
          script: 'צֹאן',
          translit: '<strong>Tsone</strong> · flock; sheep; animals under a shepherd&apos;s care',
          description:
            'The Hebrew word tzon means "flock" or "sheep"—the vulnerable animals that depend entirely on the shepherd for protection, food, and direction. To call Israel a scattered flock is to acknowledge both their current vulnerability and their ultimate dependence on the Shepherd God.',
        },
        {
          kind: 'christ',
          id: 'jer50-christ-shepherd',
          title: 'Christ Connection — The Good Shepherd',
          html:
            'Jesus calls Himself the good shepherd. He goes out in search of the lost sheep. He brings them back to the fold. He lays down His life for the sheep. In Christ, the prophecy of Jeremiah 50 finds its ultimate fulfillment. Christ is the Shepherd who seeks out the scattered, gathers the vulnerable, leads them to green pastures, restores their souls, and forgives their sins completely. In the resurrection, the scattered flock of humanity is gathered into one fold under one Shepherd.',
        },
        {
          kind: 'carry',
          html:
            'You may feel scattered, driven in different directions by the powers and pressures of the world. You may feel vulnerable and lost. But if you are God&apos;s, the promise is clear: you will be gathered. You will be brought home. You will be satisfied. And your sins will be pardoned.',
        },
        {
          kind: 'reflection',
          id: 'jer50-shepherd',
          prompt: 'In what ways do you feel scattered like a sheep without a shepherd? What would it mean for you to be gathered, brought home, and satisfied by the Shepherd&apos;s care?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Israel is a scattered sheep; the lions have driven him away...Therefore will I bring Israel again to his habitation, and he shall feed in Carmel and Bashan.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 50 · Study Guide',
  },
};
