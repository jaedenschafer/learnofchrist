import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 12 — The Purity of God&apos;s Word
 *
 * "Help, Lord; for the godly man ceaseth." The world is full of flattery and lies.
 * Every man speaketh vanity. But then comes the contrast: "The words of the Lord
 * are pure words: as silver tried in a furnace of earth, purified seven times." In
 * a world of lies, God&apos;s word stands as absolute truth, tested and purified,
 * perfect and trustworthy. Christ is the Word made flesh—the perfect embodiment of
 * God&apos;s truth.
 */
export const PSALMS_12: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 12,

  intros: [
    'Psalm 12 addresses a crisis of truthfulness. The godly are disappearing. Falsehood spreads like a weed. Every man speaketh vanity with his neighbour: with flattering lips and a double heart they speak. The world of David seems saturated with lies—lies meant to deceive, flatter, and control. In this context, David cries out for help. But as he cries, his attention is drawn upward to something pure, something undeniably true: the word of God.',
    'The psalm juxtaposes human speech and divine speech. Human words are empty, flattering, deceptive. Divine words are pure, tested, perfect. This is not mere rhetoric. This is the foundation on which trust is built. In a world of lies, God&apos;s word is the only ground of certainty.',
  ],

  sections: [
    {
      ref: 'Psalm 12:1–4',
      title: 'A Flood of Falsehood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Help, Lord; for the godly man ceaseth; for the faithful fail from among the children of men.'),
            plain(2, 'They speak vanity every one with his neighbour: with flattering lips and with a double heart do they speak.'),
            plain(3, 'The Lord shall cut off all flattering lips, and the tongue that speaketh proud things:'),
            plain(4, 'Who have said, With our tongue will we prevail: our lips are our own: who is lord over us?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps12-help',
          html:
            'David begins with an urgent cry: "Help, Lord." Not "explain," not "teach," but "help." And the reason? "The godly man ceaseth." The righteous are disappearing. The faithful are failing. The world is losing its anchors to truth. David speaks as though truthfulness is becoming extinct, as though the last true voices are being silenced.',
        },
        {
          kind: 'commentary',
          id: 'ps12-vanity',
          html:
            'Everyone speaks vanity. Not truth, not even half-truths, but complete emptiness. And they do so with flattering lips and a double heart—hearts that hold two allegiances, mouths that say one thing while intending another. The very medium of human speech has become corrupted.',
        },
        {
          kind: 'hebrew',
          id: 'ps12-sheker',
          title: 'Sheker — "Vanity" / "Lie"',
          script: 'שֶׁקֶר',
          translit: '<strong>Sheker</strong> · lie; falsehood; vanity; emptiness',
          description:
            'Sheker is not merely a false statement. It is something empty, something without substance. When people speak sheker, they are speaking nothingness—words that have been hollowed out of truth.',
        },
        {
          kind: 'commentary',
          id: 'ps12-proud',
          html:
            'These flatterers are braggarts. They boast: "Our lips are our own. Who is lord over us?" They think their tongues are their own tool to use as they wish. They think no one—not God, not anyone—has authority over them. Their pride is the source of their lies. They speak falsely because they acknowledge no authority above themselves.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world saturated with flattery and self-serving speech. Everyone is marketing, posturing, presenting a version of themselves designed to impress. In such a world, simple honesty becomes radical. Speaking truth becomes an act of resistance and faith.',
        },
      ],
    },

    {
      ref: 'Psalm 12:5–8',
      title: 'The Pure Word of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(5, 'For the oppression of the poor, for the sighing of the needy, now will I arise, saith the Lord; I will set him in safety from him that puffeth at him.'),
            plain(6, 'The words of the Lord are pure words: as silver tried in a furnace of earth, purified seven times.'),
            plain(7, 'Thou shalt keep them, O Lord, thou shalt preserve them from this generation for ever.'),
            plain(8, 'The wicked walk on every side, when the vilest men are exalted.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps12-arise',
          html:
            'In the midst of the flood of lies, God speaks. "For the oppression of the poor, for the sighing of the needy, now will I arise." The oppressed and needy cry out through all the flattering lies. They sigh beneath the weight of deception. And God hears. God will arise. God will set them in safety. Their sighing has been heard.',
        },
        {
          kind: 'commentary',
          id: 'ps12-pure',
          html:
            'Then comes the extraordinary declaration: "The words of the Lord are pure words." Not partially pure, not mostly trustworthy, but pure. And He describes how pure: "as silver tried in a furnace of earth, purified seven times." Silver is refined by fire, and the more times it is refined, the purer it becomes. God&apos;s words have been tested in the fires of the earth, and they have come out perfect.',
        },
        {
          kind: 'commentary',
          id: 'ps12-keep',
          html:
            '"Thou shalt keep them, O Lord, thou shalt preserve them from this generation for ever." God will preserve His pure words. They will not be corrupted by the lies of any generation. They will endure while empires crumble, while lies are exposed, while false words dissolve into dust.',
        },
        {
          kind: 'christ',
          id: 'ps12-christ-word',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'In John 1:1, 14, Christ is revealed as the Word—the Logos—who was with God and was God, and who became flesh and dwelt among us. He is the pure Word, the perfect utterance of God, untainted by any falsehood. To follow Christ is to anchor yourself to truth itself, the only absolutely reliable ground in a world of vanity.',
        },
        {
          kind: 'reflection',
          id: 'ps12-ceaseth',
          prompt: 'In your own life, where do you see the flood of vanity and flattery? Where can you anchor yourself to God&apos;s pure words instead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The words of the Lord are pure words: as silver tried in a furnace of earth, purified seven times.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 12 · Study Guide',
  },

  hasHebrew: true,
};
