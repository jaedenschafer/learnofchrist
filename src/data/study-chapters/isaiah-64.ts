import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 64 — A Plea for God\'s Presence and Justice
 *
 * "Oh that thou wouldest rend the heavens, that thou wouldest come down, that
 * the mountains might flow down at thy presence!" The people cry for God to
 * break through, to make His presence known, as He did at Sinai. Yet they
 * confess: "We are all as an unclean thing, and all our righteousnesses are as
 * filthy rags: and we all do fade as a leaf; and our iniquities, like the wind,
 * have taken us away." They plead for mercy: "Thou art our Father; we are the
 * clay, and thou our potter."
 */
export const ISAIAH_64: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 64,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'Isaiah 64 is a prayer that oscillates between desperate longing for God\'s presence and profound humility about human sin. The people want God to come as He came at Sinai, with fire and power, to vindicate His name and His people. Yet they know they are unworthy. Their righteousness, at best, is like filthy rags. They are clay in the hands of a potter. They have no claim on God except His nature as Father and Creator. The chapter teaches a paradox: genuine confidence before God is rooted not in our righteousness, but in our acceptance of our unworthiness and God\'s grace.',
  ],

  sections: [
    {
      ref: 'Isaiah 64:1–7',
      title: 'Longing for God\'s Manifest Presence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 64,
          lines: [
            plain(1, 'Oh that thou wouldest rend the heavens, that thou wouldest come down, that the mountains might flow down at thy presence,'),
            plain(2, 'As when the melting fire burneth, the fire causeth the waters to boil, to make thy name known to thine adversaries, that the nations may tremble at thy presence!'),
            plain(3, 'When thou didst terrible things which we looked not for, thou camest down, the mountains flowed down at thy presence.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-potter-clay',
          html:
            '<p>We are the clay; You are the potter. We are all Your work. Do not stay angry forever; remember we are Your servants.[res:sefaria-isaiah-64]</p>',        },
        {
          kind: 'hebrew',
          id: 'isaiah64-yatzar',
          title: 'Yatzar — "Formed"',
          script: 'יָצַר',
          translit: '<strong>Yatzar</strong> · formed; created; shaped',
          description: 'God is the potter; Israel is the clay He has formed.',
        },
        {
          kind: 'scripture',
          chapter: 64,
          lines: [
            plain(4, 'For since the beginning of the world men have not heard, nor perceived by the ear, neither hath the eye seen, O God, beside thee, what he hath prepared for them that love him.'),
            plain(5, 'Thou meetest him that rejoiceth and worketh righteousness, those that remember thee in thy ways: behold, thou art wroth; for we have sinned: in those is continuance, and we shall be saved.'),
            plain(6, 'But we are all as an unclean thing, and all our righteousnesses are as filthy rags: and we all do fade as a leaf; and our iniquities, like the wind, have taken us away.'),
            plain(7, 'And there is none that calleth upon thy name, that stirreth up himself to take hold of thee: for thou hast hid thy face from us, and hast consumed us, because of our iniquities.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa64-rend',
          html:
            'The prayer opens with an intense longing: Oh that You would rend the heavens! Break through the barrier. Come down. The mountains would flow down at Your presence, as they did at Sinai. The fire that melts rock, that causes waters to boil—this is the fire of God\'s manifest presence[res:sefaria-isaiah-64-v1][res:bibleodyssey-isaiah-overview-64].',
        },
        {
          kind: 'commentary',
          id: 'isa64-righteousnesses',
          html:
            'Yet the people confess: All our righteousnesses are as filthy rags. We have no righteousness to present to God. Our good works, our moral striving—all of it falls short. We fade as leaves. Our iniquities blow us away like wind. This is humility: the recognition that we have nothing to offer God except our need.',        },
        {
          kind: 'hebrew',
          id: 'isa64-begad',
          title: 'Begad — "Garment" (Rags)',
          script: 'בֶּגֶד',
          translit: '<strong>Begad</strong> · garment; cloth; clothing',
          description:
            'The image is of filthy rags used for menstruation. This is not refined or poetic imagery. It is raw, stark, describing something unclean and rejected. Our righteousness, in God\'s sight, is like this.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 64 teaches a liberating truth: God does not need your righteousness. He needs your brokenness, your honesty, your plea for mercy. You are clay. He is the Potter. Your job is not to be good enough. Your job is to yield to His hands.',        },
      ],
    },

    {
      ref: 'Isaiah 64:8–12',
      title: 'The Potter and the Clay',
      blocks: [
        {
          kind: 'scripture',
          chapter: 64,
          lines: [
            plain(8, 'But now, O Lord, thou art our Father; we are the clay, and thou our potter; and we all are the work of thy hand.'),
            plain(9, 'Be not wroth very sore, O Lord, neither remember iniquity for ever: behold, see, we beseech thee, we are all thy people.'),
            plain(10, 'Thy holy cities are a wilderness, Zion is a wilderness, Jerusalem a desolation.'),
            plain(11, 'Our holy and our beautiful house, where our fathers praised thee, is burned up with fire: and all our pleasant things are laid waste.'),
            plain(12, 'Wilt thou refrain thyself for these things, O Lord? wilt thou hold thy peace, and afflict us very sore?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa64-potter',
          html:
            'Now comes the turning point. "O Lord, thou art our Father. We are the clay, and thou our potter." This is not an accusation, but a plea. The Potter has the right to shape the clay as He wills. The clay does not argue with the Potter. It yields. And in yielding, it discovers its purpose.',        },
        {
          kind: 'commentary',
          id: 'isa64-cities',
          html:
            'The prayer acknowledges the devastation: the holy cities are wilderness, Zion is desolate, Jerusalem is a ruin. The holy house where the fathers praised the Lord is burned with fire. All pleasant things are laid waste. Yet even in this devastation, the prayer is not despair. It is an appeal to God\'s nature: Will you refrain yourself? Will you hold your peace?',
        },
        {
          kind: 'christ',
          id: 'isa64-christ-potter',
          title: 'Christ Connection — The New Creation',
          html:
            'In Romans 9, Paul uses this very image of the Potter and clay to describe God\'s sovereignty in salvation. Christ is the new creation, the perfectly yielded vessel. And through Him, believers become "new creations"—clay remade by the Potter\'s hand into vessels of honor. We are not broken and discarded, but reformed and repurposed.',
        },
        {
          kind: 'carry',
          html:
            'To accept that we are clay in God\'s hands is to find freedom. We do not have to be perfect. We do not have to prove our worth. We need only to yield to the Potter\'s hands. Our job is not to shape ourselves. Our job is to let ourselves be shaped.',
        },
        {
          kind: 'reflection',
          id: 'isa64-potter-2',
          prompt: 'In what ways are you resisting the Potter\'s hands? What would it look like to surrender fully to His shaping, even if it is painful?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We are all as an unclean thing...Thou art our Father; we are the clay, and thou our potter.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 64 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-64',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 64',
      url: 'https://www.sefaria.org/Isaiah.64',
      description: 'Sefaria open-access source text and translations for Isaiah 64.',
    },
    {
      id: 'sefaria-isaiah-64-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 64 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.64',
      description: 'The Hebrew text of Isaiah 64 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-isaiah-overview-64',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Isaiah — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/isaiah/',
      description: 'Open-access SBL essay on the historical and literary setting of Isaiah.',
    },

  ],

  hasHebrew: true,
};
