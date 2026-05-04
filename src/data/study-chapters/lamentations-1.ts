import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Lamentations 1 — How the City Sits Solitary
 *
 * "How doth the city sit solitary, that was full of people!" Jerusalem, once great
 * and full of life, now sits empty and abandoned. The poem mourns in acrostic form,
 * moving through Hebrew alphabet and layers of grief. Yet even in the depths of
 * sorrow, the voice of the city itself cries out to God. "See, O Lord, and consider;
 * for I am become vile."
 */
export const LAMENTATIONS_1: RichChapterContent = {
  bookSlug: 'lamentations',
  bookName: 'Lamentations',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Jeremiah/i,
    caption: 'Lamentations 1',
  },
  intros: [
    'The book of Lamentations stands as one of the most raw and honest expressions of grief in scripture. Five acrostic poems—one for each chapter, with some chapters using the full 22-letter Hebrew alphabet—give voice to the anguish of those who witnessed the fall of Jerusalem. Lamentations 1 opens with the most haunting line in all of scripture: "How doth the city sit solitary, that was full of people! how is she become as a widow!" Jerusalem, the mother city, the place of God&apos;s temple, is widowed, bereft, desolate.',
    'Yet in this deepest moment of grief and abandonment, something remarkable happens. The city begins to speak. She acknowledges her own sin. She calls out to God for recognition of her suffering. She is not silent before her pain. She voices it. She brings it to God. And in this act of lament—of honest, unfiltered grief brought to God—there is a paradoxical movement toward healing.',
  ],

  sections: [
    /* ─── Lamentations 1:1–11 — The City Widowed ───────────────────── */
    {
      ref: 'Lamentations 1:1–11',
      title: 'Solitude and Abandonment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'How doth the city sit solitary, that was full of people! how is she become as a widow! she that was great among the nations, and princess among the provinces, how is she become tributary!'),
            plain(2, 'She weepeth sore in the night, and her tears are on her cheeks: among all her lovers she hath none to comfort her: all her friends have dealt treacherously with her, they are become her enemies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam1-solitary',
          html: 'The opening image is desolation personified. Jerusalem sits solitary—the city that was once filled with voices and people, with commerce and movement, now empty. She is like a widow, stripped of her husband&apos;s protection and provision. She who was great among the nations, who held a princess-like status, is now tributary—reduced to paying taxes to conquerors, her sovereignty stripped away[res:bibleodyssey-lament][res:sefaria-lamentations-1].',
        },
        {
          kind: 'commentary',
          id: 'lam1-lovers-betray',
          html: 'The "lovers" are likely the nations Jerusalem sought alliance with—Egypt, perhaps others. They promised protection and aid. Now they have all betrayed her. They have become her enemies. There is no one to comfort her. The text emphasizes the completeness of the abandonment. Not even one friend remains loyal. All have proved false[res:sumerian-lamentations].',
        },
        {
          kind: 'carry',
          html: 'This passage speaks to the experience of deep abandonment and loss. Everyone you trusted proves false. Everyone you thought would help you turns away. You are left alone. The genius of Lamentations is that it does not gloss over this reality with false comfort. It names the abandonment. It gives voice to it. And in that voicing, something begins to shift.',
        },
        {
          kind: 'reflection',
          id: 'lam1-who-comfort',
          prompt: 'When you have felt most alone, most abandoned, what kept you going? Is there a "lover" or "friend" you trusted that proved false? How do you grieve that betrayal?',
        },
      ],
    },

    /* ─── Lamentations 1:12–22 — The City Speaks ──────────────────── */
    {
      ref: 'Lamentations 1:12–22',
      title: 'Crying Out to God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'Is it nothing to you, all ye that pass by? behold, and see if there be any sorrow like unto my sorrow, which is done unto me, wherewith the Lord hath afflicted me in the day of his fierce anger.'),
            plain(18, 'The Lord is righteous; for I have rebelled against his commandment: hear, I pray you, all people, and behold my sorrow: my virgins and my young men are gone into captivity.'),
            plain(20, 'Behold, O Lord; for I am in distress: my bowels are troubled; mine heart is turned within me; for I have grievously rebelled: abroad the sword bereaveth, at home there is as it were death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam1-behold',
          html: 'In verse 12, the city itself begins to speak. She cries out to passersby: "Look! See if there is any sorrow like my sorrow!" She calls attention to her suffering. She insists on being witnessed. She will not be silent in her pain. This is a profound spiritual principle: lament that is witnessed is less isolating than lament that is hidden.',
        },
        {
          kind: 'commentary',
          id: 'lam1-righteous',
          html:
            'Remarkably, even in the depths of her suffering, Jerusalem acknowledges God&apos;s righteousness. "The Lord is righteous; for I have rebelled against his commandment." She does not blame God for injustice. She recognizes her own guilt. And having named her own sin, she cries out again: "Behold my sorrow." She brings both her guilt and her pain to God without trying to hide either.',
        },
        {
          kind: 'commentary',
          id: 'lam1-bowels-heart',
          html:
            'The final cry is visceral: "My bowels are troubled; mine heart is turned within me." Jerusalem is not speaking abstractly about sorrow. She is describing the physical, embodied experience of anguish. Her insides are in turmoil. Her heart is overturned. The suffering is total—not merely intellectual or spiritual, but bodily.',
        },
        {
          kind: 'hebrew',
          id: 'lam1-hamah',
          title: 'Hamah — "Troubled" (Hamoh)',
          script: 'הַמָּה',
          translit: '<strong>Hamoh</strong> · troubled; disturbed; in turmoil; rolling like waves',
          description:
            'The Hebrew word hamah conveys the sense of inner turmoil, of emotions rolling and churning like waves. It is a physical word, describing the bodily experience of deep distress. Jerusalem&apos;s bowels are hamah—troubled, disturbed, in internal chaos.',
        },
        {
          kind: 'christ',
          id: 'lam1-christ-wept',
          title: 'Christ Connection — Christ Wept Over Jerusalem',
          html:
            'Luke 19:41 records a striking moment: "And when he was come near, he beheld the city, and wept over it." Jesus, riding toward Jerusalem, weeps over the city. He sees what will come—the siege, the destruction, the scattered people. And He weeps. In that moment, Christ embodies the lament of Lamentations. He does not distance Himself from human suffering. He enters into it. He makes it His own. In the crucifixion, Christ becomes the one who grieves, the one who suffers, the one who is abandoned. He laments for us and with us.',
        },
        {
          kind: 'carry',
          html:
            'Lamentations invites us to bring our pain to God without apology, without hiding it, without trying to make it more palatable. Like Jerusalem, we can acknowledge both our own guilt and our anguish. We can bring both to God and insist on being witnessed. God does not turn away from our lament. He receives it. He grieves with us.',
        },
        {
          kind: 'reflection',
          id: 'lam1-lament',
          prompt: 'What grief are you carrying that you have not fully voiced? What would it look like to lament honestly before God, acknowledging both your pain and any way you have contributed to it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'How doth the city sit solitary, that was full of people! how is she become as a widow! she that was great among the nations, and princess among the provinces, how is she become tributary!',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Lamentations 1 · Study Guide',
  },  resources: [
    {
      id: 'sumerian-lamentations',
      kind: 'museum',
      source: 'British Museum',
      label: 'Sumerian City Laments',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA9319',
      description: 'ANE parallels to Lamentations: Sumerian lament poetry over destroyed cities.',
    },
    {
      id: 'sefaria-lamentations-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Lamentations 1 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Lamentations.1',
      description: 'The Hebrew text of Lamentations 1 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],
};
