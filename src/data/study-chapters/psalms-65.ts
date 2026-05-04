import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Psalm 65 — Praise Waiteth for Thee
 *
 * Praise and thanksgiving rise before God in Zion. The psalmist celebrates
 * a God who hears prayer, forgives iniquity, and chooses those who draw near.
 * This choosing is not arbitrary—it flows from God's desire for relationship.
 * And then the vision expands: the earth itself becomes a testimony. God waters
 * the furrows, settles the ridges, blesses the year with His goodness. The
 * harvest[res:sefaria-psalms-65] is ripe not through human effort alone, but through the generous
 * hand of the Creator.
 */
export const PSALMS_65: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 65,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 65',
  },
  intros: [
    'Psalm 65 begins with an act of praise that precedes even the spoken word. "Praise waiteth for thee, O God, in Sion." This is not a psalm that begs God to hear. It is a psalm in which praise itself has become a posture, a stance, a readiness. The psalmist stands in Zion—the city of God—and from that position, praise is what naturally follows. The God of Zion is the God who hears prayer, the God who forgives transgressions, the God who invites His people to draw near.',
    'But the psalm does not stop with the worship of God in His sanctuary. It expands outward to encompass creation itself. God waters the earth. He blesses the year with His goodness. The valleys are covered with flocks. The pastures clothe themselves with joy. This is the vision of a God who is not distant from His creation, but intimately involved in its flourishing—the God of the harvest, the God of abundance, the God whose care extends from the heart of the worshipper to the farthest corner of creation.',
  ],

  sections: [
    /* ─── Psalm 65:1–5 — Praise and Pardon ────────────────────────────── */
    {
      ref: 'Psalm 65:1–5',
      title: 'Praise Waiteth for Thee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 65,
          lines: [
            plain(1, 'Praise waiteth for thee, O God, in Sion: and unto thee shall the vow be performed.'),
            plain(2, 'O thou that hearest prayer, unto thee shall all flesh come.'),
            plain(3, 'Iniquities prevail against me: as for our transgressions, thou shalt purge them away.'),
            plain(4, 'Blessed is the man whom thou choosest, and causest to approach unto thee, that he may dwell in thy courts: we shall be satisfied with the goodness of thy house, even of thy holy temple.'),
            plain(5, 'By terrible things in righteousness wilt thou answer us, O God of our salvation; thou art the confidence of all the ends of the earth, and of them that are afar off upon the sea:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms65-praise-waits',
          html:
            'The opening line is striking in its reversal of expectation. We expect the worshipper to rush forward with praise, to storm heaven with petition. Instead, praise itself waits. It is a held posture, a readiness, a silence filled with intention. This is not the praise of those carried away by emotion. This is the praise of those who have positioned themselves in the presence of God and wait for His word, His answer, His response. Praise, in this reading, is not something we do to God. It is something we become in relation to God[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'commentary',
          id: 'psalms65-all-flesh',
          html:
            '"O thou that hearest prayer, unto thee shall all flesh come." The scope expands immediately from Zion to the whole world. "All flesh"—not just Israel, not just the righteous, but all humanity—is invited to approach this God who hears. But this invitation carries a condition: there is a barrier. Iniquities prevail. Transgressions weigh us down. We cannot draw near to God while carrying the weight of our own rebellion. And so the prayer moves from praise to confession: "Purge them away."',
        },
        {
          kind: 'hebrew',
          id: 'psalms65-dabar',
          title: 'Dabar — "Word" (The Creative Word)',
          script: 'דָּבָר',
          translit: '<strong>Dabar</strong> · word; matter; thing; the spoken word that accomplishes',
          description:
            'The Hebrew dabar carries both the sense of "word" and "thing"—the word that is spoken and the thing that comes into being. This is the word that creates, that sustains, that performs. When God speaks His word, reality follows. This same dabar is used throughout the psalm to describe God\'s creative work.',
        },
        {
          kind: 'christ',
          id: 'psalms65-christ-harvest',
          title: 'Christ Connection — The Chosen One',
          html:
            'Psalm 65 speaks of those whom God chooses and brings near. This is Christ—the chosen one, the beloved, the one who in His own person fulfills what the psalmist describes. "Blessed is the man whom thou choosest." Jesus is the man whom God chose, caused to approach, invited to dwell in the sanctuary. And through Him, all who trust in Him are brought near, seated in the heavenly places, satisfied with the goodness of God\'s house.',
        },
        {
          kind: 'carry',
          html:
            'The psalmist moves from personal confession to cosmic confidence. Yes, our iniquities prevail—but they do not have the final word. God\'s answer is "by terrible things in righteousness." God\'s justice cannot be separated from His mercy. His righteousness judges sin, but it also purges us. The same God who removes our transgressions is "the confidence of all the ends of the earth." We can rest our hope, our trust, our entire lives on the reality of a God whose justice and mercy meet.',
        },
        {
          kind: 'reflection',
          id: 'psalms65-drawn-near',
          prompt:
            'What does it mean to "dwell in thy courts" and be "satisfied with the goodness of thy house"? When have you experienced the closeness of God\'s presence, and how did that closeness change you?',
        },
      ],
    },

    /* ─── Psalm 65:6–13 — The God of Harvest ──────────────────────────── */
    {
      ref: 'Psalm 65:6–13',
      title: 'Behold the Works of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 65,
          lines: [
            plain(6, 'Which by his strength setteth fast the mountains; being girded about with might:'),
            plain(7, 'Which stilleth the noise of the seas, the noise of their waves, and the tumult of the people.'),
            plain(8, 'They also that dwell in the uttermost parts are afraid at thy tokens: thou makest the outgoings of the morning and evening to rejoice.'),
            plain(9, 'Thou visitest the earth, and waterest it: thou greatly enrichest it with the river of God, which is full of water: thou preparest them corn, when thou hast so provided for it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-65-78mid-1',
          html:
            'Praise and prayer in Zion shift to cosmic wonder at creation and blessing. The house of God expands to the whole earth.',
        },
        {
          kind: 'scripture',
          chapter: 65,
          lines: [
            plain(10, 'Thou waterest the ridges thereof abundantly: thou settlest the furrows thereof: thou makest it soft with showers: thou blessest the increase thereof.'),
            plain(11, 'Thou crownest the year with thy goodness; and thy paths drop fatness.'),
            plain(12, 'They drop upon the pastures of the wilderness: and the little hills rejoice on every side.'),
            plain(13, 'The pastures are clothed with flocks; the valleys also are covered with corn; they shout for joy, they also sing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms65-strength',
          html:
            'The psalm now shifts from the sanctuary to the cosmos. God is not merely the God of worship. He is the God of creation, the one who by His strength has set the mountains fast, girded Himself with might. The same God who forgives sins and hears prayer is the God who commands the very structures of earth. And His power is not violent or arbitrary. He "stilleth the noise of the seas." He brings order to chaos, silence to turmoil. Even the tumult of the people—their rebellion, their noise—finds its rest in God\'s sovereign calm.',
        },
        {
          kind: 'commentary',
          id: 'psalms65-tokens',
          html:
            '"Thou makest the outgoings of the morning and evening to rejoice." The sun rises and sets not in mere mechanical repetition, but in joy. The whole cosmos is called to witness God\'s works. From the uttermost parts of the earth to the farthest reaches of human habitation, the signs (tokens) of God\'s handiwork inspire both awe and gladness. The creation testifies.',
        },
        {
          kind: 'commentary',
          id: 'psalms65-visitation',
          html:
            'God "visiteth the earth, and waterest it." This is the language of divine care, the intimate attention of a gardener. God does not rule the earth from a distance. He comes to it. He waters the furrows. He softens the ground with showers. He blesses the increase. This is the God who notices, who tends, who ensures that the harvest rises not by chance but by His deliberate hand. The "river of God, which is full of water"—the river that sustains all life—flows from God\'s infinite abundance.',
        },
        {
          kind: 'hebrew',
          id: 'psalms65-paqad',
          title: 'Paqad — "Visit" (Divine Visitation)',
          script: 'פָּקַד',
          translit: '<strong>Paqad</strong> · to visit; to care for; to oversee; to remember with purpose',
          description:
            'Paqad carries the sense of purposeful visitation—God coming to care for, to attend to, to bring about what He has determined. It is the word used when God "visits" His people for judgment or blessing, when He remembers them with intention. Here, God visits the earth itself with care and fertility[res:bible-odyssey-harvest-psalms].',
        },
        {
          kind: 'christ',
          id: 'psalms65-christ-harvest-souls',
          title: 'Christ Connection — The Harvest of Souls',
          html:
            'Psalm 65\'s vision of a bountiful harvest—valleys covered with corn, pastures clothed with flocks, everything clothed with joy—points forward to the great harvest of souls. Jesus speaks of harvest throughout His ministry: "The harvest is plentiful, but the laborers are few." He Himself is the grain of wheat that falls to the ground and dies, producing much fruit. The ultimate harvest is not of wheat and barley, but of souls gathered into God\'s kingdom.',
        },
        {
          kind: 'carry',
          html:
            'The psalm invites us to see our ordinary world—the sunrise, the rain, the growing crops, the flourishing pastures—as the constant work of God\'s hands. We live in a world of divine generosity. The year is crowned with God\'s goodness not because we have earned it, but because God delights in abundance. The invitation is to move from receiving God\'s care without awareness to receiving it with gratitude, to recognize that our food, our shelter, our very breath are gifts of the God who waters the earth and blesses the increase.',
        },
        {
          kind: 'reflection',
          id: 'psalms65-creation-testifies',
          prompt:
            'Look at the natural world around you—a plant, a tree, a field, the sky. What does it testify about God? How might beholding creation shift your sense of God\'s care and provision?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Praise waiteth for thee, O God, in Sion: and unto thee shall the vow be performed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 65 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-65',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 65 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.65',
      description: 'Harvest hymn with Jewish medieval interpretation.',
    },
    {
      id: 'bibleodyssey-hymns-praise',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Hymns of Praise in the Psalter',
      url: 'https://www.bibleodyssey.org/articles/hymns/',
      description: 'SBL essay on the hymn genre — communal, doxological psalms that frame the Psalter&apos;s arc.',
    },

  ],

  hasHebrew: true,
};
