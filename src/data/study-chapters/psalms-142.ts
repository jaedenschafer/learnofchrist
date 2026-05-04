import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 142 — From the Grave to Freedom
 *
 * "I cried unto the Lord with my voice; with my voice unto the Lord did I make
 * my supplication." The psalmist is in a cave, brought very low, trapped. His
 * spirit fails. He knows not the way. Yet he cries out to God. "Bring my soul
 * out of prison." And the psalm carries implicit hope: just as a prisoner is
 * brought out, just as the grave releases the righteous, so the Lord will
 * deliver the psalmist from his confines. The cave becomes a image of death,
 * and deliverance an image of resurrection.
 */
export const PSALMS_142: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 142,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 142',
  },
  intros: [
    'Psalm 142 is titled "Maschil of David; A Prayer when he was in the cave." David once fled into caves to escape Saul&apos;s persecution—he hid in the cave of Adullam, in caves in the wilderness of Judea. This psalm is offered from that place of confinement. The psalmist is trapped, his spirit failing, his enemies near. He cries out to God from the darkness. And the prayer is one of desperate hope: "Bring my soul out of prison, that I may praise thy name." Even in the cave, even in despair, the psalmist trusts that deliverance will come.',
  ],

  sections: [
    {
      ref: 'Psalm 142:1–4',
      title: 'Crying from the Cave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 142,
          lines: [
            plain(1, 'I cried unto the Lord with my voice; with my voice unto the Lord did I make my supplication.'),
            plain(2, 'I poured out my complaint before him; I shewed before him my trouble.'),
            plain(3, 'When my spirit was overwhelmed within me, then thou knewest my path: in the way wherein I walked have they privily laid a snare for me.'),
            plain(4, 'I looked on my right hand, and beheld, but there was no man that would know me: refuge failed me; no man cared for my soul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm142-cried',
          html:
            '"I cried unto the Lord with my voice; with my voice unto the Lord did I make my supplication." The repetition emphasizes that the cry is not silent, not internal, but voiced, spoken, poured out. The psalmist is not keeping his pain private. He cries aloud to God. [res:sefaria-psalm-142]',
        },
        {
          kind: 'hebrew',
          id: 'psalm142-shakach',
          title: 'Shakach — "Overwhelmed" (Faint)',
          script: 'שָׁכַח',
          translit: '<strong>Shakach</strong> · to overwhelm, to wrap up, to be faint or weak (different from the usual "forget")',
          description:
            'When the spirit is overwhelmed, the soul is wrapped in darkness, weakened, nearly failing. It is a state of near-despair, of losing the will to continue.',
        },
        {
          kind: 'commentary',
          id: 'psalm142-trouble',
          html:
            '"I poured out my complaint before him; I shewed before him my trouble." The psalmist does not hide his distress. He pours it out, displays it, makes it known to God. There is an honesty here—he shows his trouble not as a test of faith, but as genuine anguish needing a response[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'commentary',
          id: 'psalm142-right-hand',
          html:
            '"I looked on my right hand, and beheld, but there was no man that would know me: refuge failed me; no man cared for my soul." The right hand was the place where an ally would stand in battle. But the psalmist looks and finds nothing. No one knows him. No refuge remains. No one cares for his soul. He is utterly alone, trapped, abandoned. This is the depth of his despair.',
        },
        {
          kind: 'carry',
          html:
            'There&apos;s a moment when you stop pretending everything is fine—when you actually tell God what&apos;s broken instead of the polite version. The right people might tell you to "be strong" or "stay positive." But here, in this cave, you don&apos;t have to. You can say the real thing: <em>I am terrified. I am lonely. I don&apos;t know if I&apos;ll make it.</em> And God hears you. He listens to the raw prayer—the one without the edit, without the filter. That honesty is where healing begins.',
        },
      ],
    },

    {
      ref: 'Psalm 142:5–7',
      title: 'Bring My Soul Out of Prison',
      blocks: [
        {
          kind: 'scripture',
          chapter: 142,
          lines: [
            plain(5, 'I cried unto thee, O Lord: I said, Thou art my refuge and my portion in the land of the living.'),
            plain(6, 'Attend unto my cry; for I am brought very low: deliver me from my persecutors; for they are stronger than I.'),
            plain(7, 'Bring my soul out of prison, that I may praise thy name: the righteous shall compass me about; for thou shalt deal bountifully with me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm142-my-refuge',
          html:
            '"I cried unto thee, O Lord: I said, Thou art my refuge and my portion in the land of the living." The shift is abrupt and complete. From despair and abandonment, the psalmist turns to affirmation. He declares that the Lord is his refuge. Not the right hand, not other people, but God. And God is his portion "in the land of the living"—in this life, now, in the reality of earthly existence. God alone sustains the psalmist.',
        },
        {
          kind: 'commentary',
          id: 'psalm142-very-low',
          html:
            '"Attend unto my cry; for I am brought very low: deliver me from my persecutors; for they are stronger than I." The psalmist knows his weakness. His persecutors are stronger. He cannot save himself. His only recourse is God&apos;s attention and God&apos;s power.',
        },
        {
          kind: 'commentary',
          id: 'psalm142-prison',
          html:
            '"Bring my soul out of prison, that I may praise thy name." The prison is both literal—the cave, the place of hiding—and metaphorical. The soul is imprisoned by fear, by despair, by the power of enemies. To be brought out of prison is not merely physical escape. It is the release of the soul to freedom, to joy, to praise. And the promise is that when the Lord delivers him, the righteous will gather around him. God will deal bountifully with him. What was meant for his destruction will become his deliverance.',
        },
        {
          kind: 'christ',
          id: 'psalm142-christ-prison',
          title: 'Christ Connection — Released from Death',
          html:
            'David hid in caves. Christ descended into the grave, into the prison of death. But unlike David, whose cave imprisonment was temporary, Christ&apos;s "imprisonment" in death was the imprisonment of all humanity. His resurrection—His being brought out of that prison—is our deliverance. Because He rose, we rise. Because His soul was brought out of prison, ours can be. And His resurrection becomes the occasion for praise, as Psalm 142 proclaims. [res:bible-odyssey-psalm-142]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I cried unto the Lord with my voice...Bring my soul out of prison, that I may praise thy name.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 142 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-142',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 142 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.142',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-142',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 142 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+142',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },

  ],

  hasHebrew: true,
};
