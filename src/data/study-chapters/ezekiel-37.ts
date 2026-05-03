import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 37 — The Valley of Dry Bones
 *
 * In one of Scripture&apos;s most vivid visions, Ezekiel is taken to a valley filled with
 * dry bones—the slain of Israel, scattered and bleached and dead. God asks: "Can these
 * bones live?" And Ezekiel speaks the word of the Lord to the bones. They come together.
 * Sinews appear. Flesh grows. Skin covers them. But they lie still, until the Spirit
 * breathes into them and they stand up, an exceeding great army. This is resurrection.
 * This is the work of God&apos;s Spirit.
 */
export const EZEKIEL_37: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 37,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'The vision begins in death. Ezekiel is set down in a valley of dry bones—not merely a graveyard, but a place of absolute desolation. The bones are so old and scattered that they seem to have no connection to life. They are the bones of a destroyed people, a nation beyond hope of restoration. And God asks Ezekiel: "Son of man, can these bones live?" The question is not rhetorical. It is the fundamental question of faith: Is anything too dead for God to resurrect?',
    'What follows is the most literal description of resurrection in Scripture. Bones come together. Sinews bind them. Flesh grows on them. Skin covers them. But they are still dead—still bodies without breath. Until Ezekiel is commanded to prophesy to the wind, to call the breath of life from the four winds of heaven. And the breath enters them, and they live. They stand up. They are an exceeding great army. This is not metaphor. This is how resurrection works: first the reassembly, then the breath of life, then living again.',
  ],

  sections: [
    {
      ref: 'Ezekiel 37:1–10',
      title: 'The Bones Come Alive',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(1, 'The hand of the Lord was upon me, and carried me out in the spirit of the Lord, and set me down in the midst of the valley which was full of bones,'),
            plain(3, 'And he said unto me, Son of man, can these bones live? And I answered, O Lord God, thou knowest.'),
            plain(4, 'Again he said unto me, Prophesy upon these bones, and say unto them, O ye dry bones, hear the word of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-bones-rise',
          html: '<p>Dry bones live, graves open, breath returns: the dead rise and know the Lord. Death is not the end of God&apos;s story.</p>[res:bibleodyssey-ezekiel]',
        },
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(5, 'Thus saith the Lord God unto these bones; Behold, I will cause breath to enter into you, and ye shall live:'),
            plain(7, 'So I prophesied as I was commanded: and as I prophesied, there was a noise, and behold a shaking, and the bones came together, bone to his bone.'),
            plain(8, 'And when I beheld, lo, the sinews and the flesh came up upon them, and the skin covered them above: but there was no breath in them.'),
            plain(10, 'So I prophesied as he commanded me, and the breath came into them, and they lived, and stood up upon their feet, an exceeding great army.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel37-can-live',
          html: 'The question is meant to break Ezekiel&apos;s confidence in what is merely possible. Ezekiel answers honestly: "O Lord God, thou knowest." He does not say, "No, they cannot." He does not say, "Yes, they can." He says: I don&apos;t know. You alone know. This is the only honest answer when confronted with the impossible. Faith is not pretending you know better. Faith is admitting you don&apos;t know, but trusting that God does[res:sefaria-ezekiel][res:sefaria-ezekiel-37].',
        },
        {
          kind: 'commentary',
          id: 'ezekiel37-noise',
          html: 'The prophet hears a noise—a rustling, a sound of movement. The bones are coming to life, but not yet alive. They are assembling themselves. The process is visible, audible. Resurrection is not invisible or instantaneous. It is a progression: bones to sinews to flesh to skin. Only then breath. Only then life.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel37-ruach',
          title: 'Ruach — "Breath/Spirit" ',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · breath; wind; spirit; the life force',
          description:
            'The word ruach means breath, wind, and spirit simultaneously. It is the life-giving breath, the animating force, the Spirit of God. Without ruach, the bodies are assembled but dead. With it, they live.',
        },
        {
          kind: 'christ',
          id: 'ezekiel37-christ-resurrection',
          title: 'Christ Connection — Resurrection Through Christ',
          html: 'In 1 Corinthians 15, Paul writes that Christ is "the first fruits of them that slept," the first to be raised from the dead. And in Him, all who believe will be made alive. The valley of dry bones is a vision of what Christ accomplishes: the gathering of the scattered, the resurrection of the dead, the breathing of the Spirit into lifeless forms. We are the bones in the valley. Christ is the one who raises us.',
        },
        {
          kind: 'carry',
          html:
            'If you feel like dry bones—scattered, disconnected, without purpose or life—Ezekiel&apos;s vision is for you. God sees you in that state. And He is not asking if you can raise yourself. He is asking if you can believe that He can. The assembly happens through His word. The life comes through His Spirit.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel37-dead-places',
          prompt: 'What feels like a valley of dry bones in your life? Is there something so dead you have stopped believing God could resurrect it?',
        },
      ],
    },

    {
      ref: 'Ezekiel 37:11–28',
      title: 'The Promise of Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(11, 'Then he said unto me, Son of man, these bones are the whole house of Israel: behold, they say, Our bones are dried, and our hope is lost: we are cut off for our parts.'),
            plain(12, 'Therefore prophesy and say unto them, Thus saith the Lord God; Behold, O my people, I will open your graves, and cause you to come up out of your graves, and bring you into the land of Israel.'),
            plain(24, 'And David my servant shall be king over them; and they all shall have one shepherd: they shall also walk in my judgments, and observe my statutes, and do them.'),
            plain(26, 'Moreover I will make a covenant of peace with them; it shall be an everlasting covenant with them: and I will place them, and multiply them, and will set my sanctuary in the midst of them for evermore.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel37-interpret',
          html:
            'The vision is now interpreted. The dry bones are Israel—exiled, broken, convinced that they are beyond hope. "Our hope is lost. We are cut off for our parts." They have given up. They have accepted their own death. But God does not accept it.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel37-covenant',
          html:
            'God promises not only resurrection but covenant. He will make peace with His people. The covenant will be everlasting. His sanctuary will dwell in their midst forever. This is not merely restoration to a former state. It is a permanent, eternal reconciliation.',
        },
        {
          kind: 'carry',
          html:
            'The promise of return is not for the faithful alone. It is offered to those who have abandoned hope, who have accepted their own death. All that is required is that they be reassembled by God&apos;s word and animated by His Spirit. The rest is accomplished by Him.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel37-everlasting',
          prompt: 'What would it mean to trust in an everlasting covenant, one that cannot be broken even by your failure? How might that change the way you live?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O ye dry bones, hear the word of the Lord...the breath came into them, and they lived.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 37 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-ezekiel',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Ezekiel',
      url: 'https://www.bibleodyssey.org/passages/main-articles/ezekiel/',
      description: 'Peer-reviewed SBL entry on the prophet Ezekiel and the Babylonian exile.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-ezekiel-37',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel 37 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ezekiel.37',
      description: 'The Hebrew text of Ezekiel 37 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
