import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 49 — Against Ammon, Edom, Damascus, Kedar, and Elam
 *
 * A series of oracles against the distant nations: Ammon, Edom, Damascus, Kedar,
 * and Elam. The message is consistent: God's sovereignty extends to every corner
 * of the world. No nation is beyond God's reach or judgment. No empire can boast
 * of power independent from God. All history unfolds according to God's purposes.
 */
export const JEREMIAH_49: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 49,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Jeremiah 49 expands the oracle against the nations to include five separate peoples: Ammon, Edom, Damascus, Kedar, and Elam. These represent the compass points of the known world—east, south, north, and further east. The effect is to demonstrate that God&apos;s judgment reaches everywhere. There is no safe place, no distant corner, where a nation can escape from the reach of God&apos;s purposes.',
    'The repetition of the theme reinforces the point: each nation has its own particular sin, its own reason for judgment. Yet all stand under the same sovereign God. This message would have been striking to the exiles in Babylon, who might have believed that once they were removed from their land, they were somehow beyond God&apos;s concern. Jeremiah assures them: no. God cares for His people across all distances. And God judges all nations with equal certainty.',
  ],

  sections: [
    /* ─── Jeremiah 49:1–6 — Against Ammon ───────────────────────────── */
    {
      ref: 'Jeremiah 49:1–6',
      title: 'The Nations Face Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(1, 'Concerning the Ammonites, thus saith the Lord; Hath Israel no sons? hath he no heir? why then doth their king inherit Gad, and his people dwell in his cities?'),
            plain(5, 'But afterward I will bring again the captivity of the Ammonites, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer49-ammon',
          html:
            'The Ammonites have seized the territory of Gad, which belonged to Israel. They do this as if Gad had no heir, as if Israel were without children to claim their inheritance. But God will reverse this. The Ammonites will be judged. Yet even in judgment, there is a promise of restoration. "Afterward I will bring again the captivity of the Ammonites." Even the enemies of God&apos;s people are not beyond the possibility of restoration.',
        },
        {
          kind: 'carry',
          html:
            'This passage reveals a pattern: human kingdoms rise and fall, territories change hands, the powerful dominate the weak. But all of this occurs within God&apos;s sovereign plan. No taking of territory, no matter how successful, stands outside God&apos;s ultimate purposes. The Ammonites may hold Gad for a time, but God will reverse it.',
        },
        {
          kind: 'reflection',
          id: 'jer49-taken',
          prompt: 'What has been "taken" from you—opportunity, security, relationships, peace? How does God&apos;s promise of reversal and restoration speak to your situation?',
        },
      ],
    },

    /* ─── Jeremiah 49:15–16 — Against Edom ──────────────────────────── */
    {
      ref: 'Jeremiah 49:15–16',
      title: 'Pride Falls Before God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(15, 'For, behold, I will make thee small among the heathen, and despised among men.'),
            plain(16, 'Thy terribleness hath deceived thee, and the pride of thine heart, O thou that dwellest in the clefts of the rock, that holdest the height of the hill: though thou shouldest make thy nest as high as the eagle, I will bring thee down from thence, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer49-edom-pride',
          html:
            'Edom, dwelling in the clefts of the rock, in strongholds high in the hills, believed themselves safe and impregnable. Their "terribleness"—their reputation for fierceness—had deceived them into thinking they could escape God&apos;s judgment. But God will make them small and despised. No height, no fortress, no nest high as the eagle&apos;s—nothing can protect a nation from God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'jer49-nest',
          html:
            'The image of the eagle&apos;s nest speaks to pride and exaltation. Yet even the eagle, at the height of its domain, is subject to God&apos;s judgment. Edom believed in its own strength and security. But pride itself is the trap that leads to downfall.',
        },
        {
          kind: 'christ',
          id: 'jer49-christ-humility',
          title: 'Christ Connection — Pride Humbled, Humility Exalted',
          html:
            'Edom&apos;s pride is brought low. In Christ, this principle is transformed into gospel mercy. Christ, who "thought it not robbery to be equal with God," humbled Himself and became obedient unto death. And through His humility, He was exalted to the right hand of the Father. The proud are brought low. The humble are exalted. Christ teaches us that the way up is the way down—down into surrender, down into service, down into the death to self that leads to resurrection.',
        },
        {
          kind: 'carry',
          html:
            'Where are you trusting in your own strength or position to protect you? What height or fortress are you building to feel secure? God&apos;s word invites us to release such defenses and trust instead in His care.',
        },
        {
          kind: 'reflection',
          id: 'jer49-proud',
          prompt: 'Where have you been deceived by your own strength or reputation? How might God be calling you to humble yourself before Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will make thee small among the heathen, and despised among men. Thy terribleness hath deceived thee, and the pride of thine heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 49 · Study Guide',
  },
};
