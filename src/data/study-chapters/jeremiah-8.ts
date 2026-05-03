import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 8 — The Balm in Gilead
 *
 * "Is there no balm in Gilead; is there no physician there? why then is not
 * the health of the daughter of my people recovered?" The image is of a people
 * stricken with a wound, crying out for healing. Gilead was renowned in the
 * ancient world for its balm, its healing unguents. Yet the people of Judah,
 * wounded by sin and separation from God, seek healing from physicians and
 * remedies that cannot cure. They refuse the one physician who can heal them.
 * Christ, in His work of redemption, is that balm, that physician. Through Him,
 * healing is offered to all who come.
 */
export const JEREMIAH_8: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 8,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Jeremiah 8 opens with a vision of desolation. The dead are removed from their graves and scattered before the sun and moon and stars. The bones are not allowed to rest. This is the final indignity—not even the peace of the grave is permitted. Yet the chapter then shifts to a medical image that is far more tender. Jeremiah asks: "Is there no balm in Gilead; is there no physician there? why then is not the health of the daughter of my people recovered?"',
    'The balm of Gilead was a precious medicinal substance, known throughout the ancient world for its healing properties. It was a sign of hope and restoration. Yet Jeremiah asks: why is this balm not being applied? Why does the wound not heal? The answer is implicit in the question: the people are not seeking the true physician. They are looking elsewhere, seeking false cures from false healers. And in doing so, they remain wounded, unforgiven, unhealed. Yet the question itself carries an invitation: if there is a balm, if there is a physician, then healing is possible—if the people will turn to the right source.',
  ],

  sections: [
    {
      ref: 'Jeremiah 8:1–17',
      title: 'The Stubborn Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(4, 'Moreover thou shalt say unto them, Thus saith the Lord; Shall they fall, and not arise? shall he turn away, and not return?'),
            plain(5, 'Why then is this people of Jerusalem slidden back by a perpetual backsliding? they hold fast deceit, they refuse to return.'),
            plain(6, 'I hearkened and heard, but they spake not aright: no man repented him of his wickedness, saying, What have I done? every one turned to his own course, as the horse rusheth into the battle.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-8-78mid-1',
          html:
            'The prophet pivots from indictment to lament — &quot;Is there no balm in Gilead?&quot; The same voice that announced judgment now grieves it.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(7, 'Yea, the stork in the heaven knoweth her appointed times; and the turtle, and the crane, and the swallow observe the time of their coming; but my people know not the judgment of the Lord.'),
            plain(8, 'How do ye say, We are wise, and the law of the Lord is with us? Lo, certainly in vain made he it; the pen of the scribes is in vain.'),
            plain(9, 'The wise men are ashamed, they are dismayed and taken: lo, they have rejected the word of the Lord; and what wisdom is in them?'),
            plain(10, 'Therefore will I give their wives unto others, and their fields to them that shall inherit them: for every one from the least even unto the greatest is given to covetousness, from the prophet even unto the priest every one dealeth falsely.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer8-fall',
          html: 'God poses a question: when someone falls, do they not get back up? When they turn away, do they not turn back? This is the natural human response—to recover, to correct course, to return. Yet Israel has become an exception to this natural law. They have engaged in perpetual backsliding. They have not recovered. They refuse to return.',
        },
        {
          kind: 'hebrew',
          id: 'jer8-shub',
          title: 'Shub — "Return" (Habitual Turning)',
          script: 'שׁוּב',
          translit: '<strong>Shub</strong> · to return; also: to turn; to be restored',
          description: 'The Hebrew word shub, repeated throughout Jeremiah, now appears in a description of failure: they hold fast to deceit, they refuse to shub. The same word that describes what should happen—a natural turning back—describes what is not happening. The people have paralyzed their own capacity to return.',
        },
        {
          kind: 'commentary',
          id: 'jer8-stork',
          html: 'In a striking comparison, Jeremiah notes that even animals know the judgment of the Lord—the stork, the turtle, the crane, the swallow all observe their appointed times. They migrate, they breed, they live according to natural law. Yet the people of Judah, who have the law written and the prophets speaking, do not know the judgment of God. They are less wise than birds.',
        },
        {
          kind: 'commentary',
          id: 'jer8-wise-rejected',
          html: 'The wise men boast: "We are wise, and the law of the Lord is with us." Yet their wisdom is vain. They have rejected the word of the Lord. In rejecting God&apos;s word, they have rejected the source of true wisdom. What remains is a pretense, a claim to wisdom that has no foundation.',
        },
        {
          kind: 'christ',
          id: 'jer8-christ-wisdom',
          title: 'Christ Connection — The Wisdom of God',
          html: 'In 1 Corinthians 1:24, Paul writes of Christ as "the power of God, and the wisdom of God." The false wisdom that rejects God&apos;s word is contrasted with the true wisdom that is found in Christ. Jesus said, "I am the way, the truth, and the life." To follow Christ is to align oneself with the ultimate wisdom—the word of God made flesh. Those who reject Him reject the source of true understanding.',
        },
        {
          kind: 'carry',
          html: 'The chapter exposes a kind of resistance that feels familiar. The people claim to be wise, to have God&apos;s law, yet they refuse to obey it. We too can claim knowledge while refusing to act on it. We can say we believe while continuing in the patterns we know are wrong. The tragedy is that we resist the very thing that would heal us.',
        },
        {
          kind: 'reflection',
          id: 'jer8-what-know',
          prompt: 'What do you know you should do, but refuse to do? Where is your claimed wisdom contradicted by your actions?',
        },
      ],
    },

    {
      ref: 'Jeremiah 8:18–22',
      title: 'The Cry for Healing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(18, 'When I would comfort myself against sorrow, my heart is faint in me.'),
            plain(19, 'Behold the voice of the cry of the daughter of my people because of them that dwell in a far country: Is not the Lord in Zion? is not her king in her? Why have they provoked me to anger with their graven images, and with strange vanities?'),
            plain(20, 'The harvest is past, the summer is ended, and we are not saved.'),
            plain(21, 'For the hurt of the daughter of my people am I hurt: I am black; astonishment hath taken hold of me.'),
            plain(22, 'Is there no balm in Gilead; is there no physician there? why then is not the health of the daughter of my people recovered?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer8-balm',
          html: 'The cry reaches its emotional peak: "Is there no balm in Gilead; is there no physician there? why then is not the health of the daughter of my people recovered?" The question assumes the possibility of healing. Balm exists. Physicians exist. Yet the people are not healed. Why? Because they are not seeking the true source of healing. They are looking elsewhere, to false physicians and false remedies.',
        },
        {
          kind: 'hebrew',
          id: 'jer8-rophe',
          title: 'Rophe — "Physician" (Healer)',
          script: 'רֹפֵא',
          translit: '<strong>Rophe</strong> · physician; healer; one who heals wounds',
          description: 'The Hebrew word rophe refers to a healer, someone who has the skill to treat wounds and disease. In the spiritual sense, God is the ultimate rophe. He alone can heal the wounds of sin. To refuse His healing is to remain wounded.',
        },
        {
          kind: 'commentary',
          id: 'jer8-harvest-past',
          html: '"The harvest is past, the summer is ended, and we are not saved." The seasons have passed. The time for gathering fruit has come and gone. And still, no salvation. The people remain in their wounded state. The opportunity to seek healing is passing.',
        },
        {
          kind: 'carry',
          html: 'This chapter poses its most important question to each reader: Is there not a balm for your wounds? Is there not a physician for your sickness? The answer is yes. Christ is the balm. Christ is the physician. Yet healing requires turning from false remedies, from the false physicians we consult—the voices that tell us our wounds are not real, that we can heal ourselves, that we do not need redemption. It requires coming, broken and honest, to the one who can truly heal.',
        },
        {
          kind: 'reflection',
          id: 'jer8-wounds',
          prompt: 'What wound are you carrying? What false physician or false remedy have you been trusting? What would it mean to turn to Christ as the true physician?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Is there no balm in Gilead; is there no physician there? why then is not the health of the daughter of my people recovered?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 8 · Study Guide',
  },

  hasHebrew: true,
};
