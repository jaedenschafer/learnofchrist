import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 4 — Christ Over Creation
 *
 * Jesus teaches by the sea in parables: the sower, the lamp, the growing seed,
 * the mustard seed. Seeds are scattered, some fall on hard ground, some among
 * thorns, some on good soil. The kingdom is small and hidden, growing without
 * the farmer&apos;s comprehension. Then, in the evening, Jesus and His disciples
 * get into a boat. A storm arises. The wind and waves are so violent the boat is
 * nearly swamped. The disciples wake Jesus in panic. He rebukes the wind and
 * says to the sea: "Peace, be still." The wind ceases. The sea becomes calm. He
 * asks them: "Why are ye so fearful? how is it that ye have no faith?" Christ is
 * Lord of creation itself. The kingdom grows in hiddenness. Christ rules over all.
 */
export const MARK_4: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 4,

  estimatedMinutes: { beginner: 2, intermediate: 7, deep: 9 },
  intros: [
    'Mark 4 is the chapter of parables and mysteries. Jesus sits by the sea, and great multitudes gather. He teaches them in parables—not because He wishes to obscure the truth, but because the truth requires a change of vision. A seed falls on hard ground, on rocky soil, among thorns, and on good soil. Each bears a different result. The parable is simple enough on the surface. But what does the seed represent? What kind of soil is your heart? The kingdom of God is compared to a mustard seed, smallest of seeds, growing into a great shrub. It is hidden in the world, growing imperceptibly, until suddenly it is large and impossible to ignore.',
    'Then comes the storm on the sea. The disciples have left the crowds and set out by boat. Exhausted, Jesus falls asleep. A great wind and waves rise, and the disciples wake Him in terror. He rises and rebukes the wind and sea: "Peace, be still." And immediately there is a great calm. The disciples are even more afraid. They ask one another: "What manner of man is this, that even the wind and the sea obey him?" Mark is asking his readers the same question: What manner of man is Jesus, that creation itself responds to His voice?',
  ],

  sections: [
    /* ─── Mark 4:1–20 — The Sower ─────────────────────────────────────── */
    {
      ref: 'Mark 4:1–20',
      title: 'The Seed and the Soil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(3, 'Hearken; Behold, there went out a sower to sow:'),
            plain(4, 'And it came to pass, as he sowed, some fell by the way side, and the fowls of the air came and devoured it up.'),
            plain(5, 'And some fell on stony ground, where it had not much earth; and immediately it sprang up, because it had no depth of earth:'),
            plain(7, 'And some fell among thorns, and the thorns grew up, and choked it, and it yielded no fruit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-4-78mid-1',
          html:
            'Jesus finishes the parable of the sower; the disciples ask Him to explain it. From public mystery comes private revelation for those who follow Him.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(8, 'And other fell on good ground, and did yield fruit that sprang up and increased; and brought forth, some thirty, and some sixty, and some an hundred.'),
            plain(9, 'And he said unto them, He that hath ears to hear, let him hear.'),
            plain(14, 'The sower soweth the word.'),
            plain(15, 'And these are they by the way side, where the word is sown; but when they have heard, Satan cometh immediately, and taketh away the word that was sown in their hearts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark4-parable-purpose',
          html:
            'Jesus teaches in parables. Mark tells us that the crowds are gathered, yet "He spake the word unto them, as they were able to hear it." The parable is not evasive. It is pedagogical. A parable requires the listener to interpret, to participate, to make the connection between the image and the truth being taught. A parable cannot be passively received. It demands active, engaged listening.',
        },
        {
          kind: 'commentary',
          id: 'mark4-four-soils',
          html:
            'The parable of the sower is about receptivity[res:sefaria-torah-seeds]. A sower scatters seed without discrimination. Some falls on hard ground and is taken by birds. Some falls on rocky soil and springs up quickly but withers because there is no depth. Some falls among thorns and is choked. Only some falls on good soil and bears fruit—thirty, sixty, a hundredfold. The parable is asking each listener: What kind of soil is your heart?',
        },
        {
          kind: 'greek',
          id: 'mark4-logos',
          title: 'Logos — Word',
          script: 'λόγος',
          translit: '<strong>Logos</strong> · word; speech; message; divine principle',
          description:
            'The sower sows the word—the logos, the message of the kingdom. In John&apos;s gospel, Jesus Himself is identified as the Logos, the Word through whom all things were created. Here, the word is the seed. Its fate depends on the soil into which it falls.',
        },
        {
          kind: 'commentary',
          id: 'mark4-impediments',
          html:
            'Mark details the impediments to the word&apos;s growth: Satan steals it from hard hearts; troubles and persecutions cause shallow faith to wither; the cares of this world, the deceitfulness of riches, and the desire for other things choke the word. None of these are evil in themselves. But they can crowd out the word and prevent its bearing fruit.',
        },
        {
          kind: 'christ',
          id: 'mark4-christ-sower',
          title: 'Christ Connection — The Seed of God&apos;s Kingdom',
          html:
            'Jesus is the sower of the word. But more, He is Himself the seed—sown into the ground, dying and rising, bearing much fruit. His death and resurrection will produce a harvest beyond measure. The kingdom spreads not through power or visibility but through the faithful sowing of the word and the fruit that grows from hearts that receive it.',
        },
        {
          kind: 'carry',
          html:
            'The parable invites self-examination. What distracts you from the word? Is your heart like hard ground, resistant to God&apos;s voice? Is it rocky, receiving the word without depth? Is it overgrown with thorns? Or is it good soil, ready to receive and bear fruit?',
        },
        {
          kind: 'reflection',
          id: 'mark4-what-soil',
          prompt: 'What conditions in your life would need to change for you to be good soil for God&apos;s word? What thorns need to be cleared?',
        },
      ],
    },

    /* ─── Mark 4:21–34 — The Growing Seed and the Mustard Seed ─────────── */
    {
      ref: 'Mark 4:21–34',
      title: 'Hidden Growth, Visible Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(26, 'And he said, So is the kingdom of God, as if a man should cast seed into the ground;'),
            plain(27, 'And should sleep, and rise night and day, and the seed should spring and grow up, he knoweth not how.'),
            plain(28, 'For the earth bringeth forth fruit of herself; first the blade, then the ear, after that the full corn in the ear.'),
            plain(30, 'And he said, Whereunto shall we liken the kingdom of God? or with what comparison shall we compare it?'),
            plain(31, 'It is like a grain of mustard seed, which, when it is sown in the earth, is less than all the seeds that be in the earth:'),
            plain(32, 'But when it is sown, it groweth up, and becometh greater than all herbs, and shooteth out great branches; so that the fowls of the air may lodge in the branches thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark4-seed-grows',
          html:
            'The kingdom of God is like a man casting seed into the ground. He sleeps and wakes. He does not force the growth. The seed springs and grows up "he knoweth not how." The earth brings forth fruit by itself. This is a parable of trust and hiddenness. The kingdom is not arrived at through human striving or visible mechanism. It grows according to laws beyond our comprehension or control.',
        },
        {
          kind: 'commentary',
          id: 'mark4-mustard-seed',
          html:
            'The mustard seed is the smallest of seeds. Yet it grows into a shrub so large that birds lodge in its branches. The kingdom starts small, insignificant, hidden. It is not proclaimed with trumpet fanfares or visible power. Yet it grows to a scale that exceeds all human expectation. The smallest seed becomes the largest plant. The least likely source produces the greatest harvest.',
        },
        {
          kind: 'greek',
          id: 'mark4-sperma',
          title: 'Sperma — Seed',
          script: 'σπέρμα',
          translit: '<strong>Sperma</strong> · seed; generation; offspring; descendant',
          description:
            'The Greek word sperma refers to the seed as both physical reality and as potential—what it will become. A seed contains, in hidden form, the entire future tree. The kingdom is present in its small, hidden beginning, containing within itself its ultimate glorified form.',
        },
        {
          kind: 'commentary',
          id: 'mark4-parable-method',
          html:
            'Mark emphasizes that Jesus teaches many parables, and "without a parable spake he not unto them." But in private, "He expounded all things to his disciples." The parables are not meant to conceal from the willing, but to reveal to the attentive. They sort the hearers: those who hear but do not understand, and those who see in the parable their own story and the story of God&apos;s kingdom.',
        },
        {
          kind: 'christ',
          id: 'mark4-christ-hidden',
          title: 'Christ Connection — The Seed That Falls to the Ground',
          html:
            'Jesus Himself is the grain of wheat that falls to the ground and dies, bearing much fruit. His kingdom begins with a crucified man, with apparent defeat and obscurity. Yet it grows to encompass the world. What seems defeated is victorious. What appears hidden is transforming all things.',
        },
        {
          kind: 'carry',
          html:
            'These parables teach patience and faith. The kingdom does not advance by human manipulation or control. It grows in ways we cannot fully explain or direct. Our task is to be faithful—to sow the seed, to tend the soil, to trust the growth that comes not from our strength but from the life in the seed itself.',
        },
        {
          kind: 'reflection',
          id: 'mark4-hidden-growth',
          prompt: 'Where in your life have you seen God work in hidden ways, producing growth you did not expect or direct? How has that enlarged your faith?',
        },
      ],
    },

    /* ─── Mark 4:35–41 — Stilling the Storm ───────────────────────────── */
    {
      ref: 'Mark 4:35–41',
      title: 'Lord of Wind and Wave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(35, 'And the same day, when the even was come, he saith unto them, Let us pass over unto the other side.'),
            plain(37, 'And there arose a great storm of wind, and the waves beat into the ship, so that it was now full.'),
            plain(38, 'And he was in the hinder part of the ship, asleep on a pillow: and they awake him, and say unto him, Master, carest thou not that we perish?'),
            plain(39, 'And he arose, and rebuked the wind, and said unto the sea, Peace, be still: and the wind ceased, and there was a great calm.'),
            plain(40, 'And he said unto them, Why are ye so fearful? how is it that ye have no faith?'),
            plain(41, 'And they feared exceedingly, and said one to another, What manner of man is this, that even the wind and the sea obey him?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark4-storm-arises',
          html:
            'Jesus and His disciples set out by boat to cross the sea. Jesus falls asleep, exhausted from teaching. A great storm arises. The waves beat into the ship. The disciples are terrified. They wake Jesus: "Carest thou not that we perish?" This is not mere physical fear. It is the ancient fear of chaos, of being swallowed by waters beyond human control. But more: it is the fear that Jesus does not care, that He is indifferent to their plight.',
        },
        {
          kind: 'commentary',
          id: 'mark4-peace-be-still',
          html:
            'Jesus rises and rebukes the wind and says to the sea: "Peace, be still."[res:sefaria-creation-psalms] The wind ceases. The sea becomes calm. This is not coincidence or luck. The disciples recognize this as an exercise of power—power that belongs to God alone. In the Old Testament, it is God who commands the seas, who sets their boundaries, who rides on the wind. Jesus speaks as one who has authority over creation itself.',
        },
        {
          kind: 'greek',
          id: 'mark4-phobos',
          title: 'Phobos — Fear',
          script: 'φόβος',
          translit: '<strong>Phobos</strong> · fear; reverence; awe before the holy',
          description:
            'The disciples first fear the storm. Then Jesus asks: "Why are ye so fearful?" But after the stilling, they fear "exceedingly." This is a different fear—not fear of destruction but fear of the divine, reverence and awe before one who has revealed himself as Lord of creation.',
        },
        {
          kind: 'commentary',
          id: 'mark4-faith',
          html:
            'Jesus asks: "How is it that ye have no faith?"[res:intertextual-psalm-35] This is not reproach for cowardice. It is a call to a deeper trust. To have faith is to believe that even when Jesus seems absent or asleep, even when the waters rise, He is present and in control. Faith is not the absence of fear, but the conviction that God is more powerful than the storm.',
        },
        {
          kind: 'christ',
          id: 'mark4-christ-lord',
          title: 'Christ Connection — Dominion Over All Creation',
          html:
            'The stilling of the storm reveals Jesus as Lord of creation. He has the power that belongs to God: command over the forces of chaos and destruction. His kingdom is not merely spiritual. It extends over all that is—wind and wave, demons and disease, the very structure of the physical world. In Him, the cosmos bows.',
        },
        {
          kind: 'carry',
          html:
            'Mark 4 closes with a fundamental question posed to the reader: What manner of man is this? The answer the reader gives will shape their entire understanding of who Jesus is and what faith means. Is He a wise teacher? A moral exemplar? Or is He the Lord of creation, the one to whom all things owe their being and obedience?',
        },
        {
          kind: 'reflection',
          id: 'mark4-storms',
          prompt: 'What storms are you facing right now? Where are you struggling to trust that Jesus has authority even over these circumstances?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Why are ye so fearful? how is it that ye have no faith? And they feared exceedingly, and said one to another, What manner of man is this, that even the wind and the sea obey him?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 4 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-torah-seeds',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 11: Agricultural Parables',
      url: 'https://www.sefaria.org/Deuteronomy.11.10-17?lang=bi',
      description: 'Torah passage on receiving the word and bearing fruit, establishing the agricultural metaphor Jesus uses.',
    },
    {
      id: 'sefaria-creation-psalms',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 89: God Commands the Sea',
      url: 'https://www.sefaria.org/Psalms.89.8-10?lang=bi',
      description: 'Psalm texts asserting that God alone commands the waves and wind, framing Jesus&apos; dominion over creation.',
    },
    {
      id: 'intertextual-psalm-35',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 35:3 ↔ Mark 4:40 (Faith & Deliverance)',
      url: 'https://intertextual.bible/text/psalms-35.3/mark-4.40',
      description: 'Intertextual link showing how Mark echoes psalms of trust and divine protection in the storm narrative.',
    },
  ],

  hasHebrew: false,
};
