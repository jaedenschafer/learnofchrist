import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 22 — The Bloody City
 *
 * Jerusalem is a "bloody city." Murder fills her streets. Her leaders devour
 * the people. Her prophets lie for hire. Her priests violate the holy. Her
 * princes shed blood. Corruption is absolute and systemic. Yet in the midst of
 * this catalogue of wickedness comes one of Scripture&apos;s most poignant
 * passages: "I sought for a man among them, that should make up the hedge, and
 * stand in the gap before me for the land, that I should not destroy it: but I
 * found none." No one stands in the breach. No one intercedes. No one bears the
 * burden of the city&apos;s sin on their shoulders. This is the role that Christ,
 * the One who stands in the gap, will fulfill.
 */
export const EZEKIEL_22: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 22,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  topicTags: ['judgment', 'glory', 'hope', 'second-coming'],
  opener: {
    topical: true,
    caption: 'Ezekiel 22',
  },
  intros: [
    'Ezekiel 22 is a fierce accusation. It does not mince words. Jerusalem is a "bloody city." Violence, murder, idolatry, corruption—they fill every level of society. The leaders are like roaring lions, tearing their prey. The priests profane the holy. The prophets whitewash with falsehood. No one is innocent. No one escapes the verdict.',
    'Yet the most heartbreaking verse comes at the center: "I sought for a man among them, that should make up the hedge, and stand in the gap before me for the land, that I should not destroy it: but I found none." Judgment comes not merely from corruption itself, but from the absence of anyone willing to stand between God and the city, to bear the burden, to intercede. This absence opens the door for Christ—the One who will ultimately stand in the gap.',
  ],

  sections: [
    {
      ref: 'Ezekiel 22:1–16',
      title: 'The Bloody City Indicted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(2, 'Now, thou son of man, wilt thou judge, wilt thou judge the bloody city? yea, thou shalt shew her all her abominations.'),
            plain(3, 'Then say thou, Thus saith the Lord God, The city sheddeth blood in the midst of it, that her time may come, and maketh idols against herself to defile herself.'),
            plain(6, 'Behold, the princes of Israel, every one were in thee have they used their power to shed blood.'),
            plain(7, 'In thee have they set light by father and mother: in the midst of thee have they dealt by oppression with the stranger, in thee have they vexed the fatherless and the widow.'),
            plain(12, 'In thee are men that carry tales to shed blood: and in thee they eat upon the mountains: in the midst of thee they commit lewdness.'),
            plain(13, 'Behold, therefore I have smitten mine hand at thy dishonest gain which thou hast made, and at thy blood which hath been in the midst of thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek22-bloody',
          html: 'Jerusalem is "bloody"—not metaphorically, but literally. Blood fills her streets. The city perpetuates itself through violence. "The city sheddeth blood in the midst of it, that her time may come"—she murders so that she can hold power a little longer. And alongside the shedding of blood, she makes idols to defile herself. Violence and idolatry go hand in hand[res:bibleodyssey-ezekiel].',
        },
        {
          kind: 'commentary',
          id: 'ezek22-all-classes',
          html: 'And it is not one class that fails. It is all of them. The princes use their power to shed blood. The people dishonor parents, oppress strangers, vex the fatherless and widow. Some carry tales to shed blood. Some commit lewdness. From the highest to the lowest, the city is corrupted. This is not a failure of individuals. It is a failure of the whole system[res:gog-magog-bibleodyssey].',
        },
        {
          kind: 'hebrew',
          id: 'ezek22-blood-dam',
          title: 'Dam — "Blood" (Life, Covenant)',
          script: 'דָם',
          translit: '<strong>Dam</strong> · blood; life; the sealing of covenants',
          description:
            'In Scripture, blood is life. "The life of the flesh is in the blood" (Lev 17:11). To shed blood is not merely to commit murder. It is to violate the sacredness of life itself. When the city "sheddeth blood," she is violating the covenant that binds God to His people.',
        },
        {
          kind: 'reflection',
          id: 'ezek22-corruption',
          prompt: 'Look at the corruption Ezekiel describes—violence, dishonoring parents, oppression of the vulnerable, slander. Which of these do you see in your own culture? In your own heart?',
        },
      ],
    },

    {
      ref: 'Ezekiel 22:23–31',
      title: 'The Gap That No One Fills',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(25, 'There is a conspiracy of her prophets in the midst thereof, like a roaring lion ravening the prey; they have devoured souls; they have taken the treasure and precious things; they have made her many widows in the midst thereof.'),
            plain(26, 'Her priests have violated my law, and have profaned mine holy things: they have put no difference between the holy and profane, neither have they shewed difference between the unclean and the clean, and have hid their eyes from my sabbaths, and I am profaned among them.'),
            plain(27, 'Her princes in the midst thereof are like wolves ravening the prey, to shed blood, and to destroy souls, to get dishonest gain.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-city-burns',
          html: '<p>Jerusalem is a furnace; God will melt the city and its false leaders together. Corruption runs too deep for surface fixes.</p>[res:tyre-archaeology]',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(28, 'And her prophets have daubed them with untempered morter, seeing vanity, and divining lies unto them, saying, Thus saith the Lord God, when the Lord hath not spoken.'),
            plain(29, 'The people of the land have used oppression, and exercised robbery, and have vexed the poor and needy: yea, they have oppressed the stranger wrongfully.'),
            plain(30, 'And I sought for a man among them, that should make up the hedge, and stand in the gap before me for the land, that I should not destroy it: but I found none.'),
            plain(31, 'Therefore have I poured out mine indignation upon them; I have consumed them with the fire of my wrath: their own way have I recompensed upon their heads, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek22-prophets-priests',
          html: 'The prophets prophesy falsely, lulling people with false hope. The priests violate the holy, making no distinction between clean and unclean, sacred and profane. The princes are like wolves, shedding blood for gain. Leadership at every level has failed. Those who should have called the people back to God have instead led them deeper into corruption.',
        },
        {
          kind: 'commentary',
          id: 'ezek22-sought',
          html: 'Then comes the most piercing moment in the chapter: "I sought for a man among them, that should make up the hedge, and stand in the gap before me for the land, that I should not destroy it: but I found none." God is searching. He is looking for someone—anyone—who will take the burden of the city upon himself, who will stand between God&apos;s wrath and the people, who will intercede. The hedge is the boundary between God&apos;s holiness and human sin. To stand in the gap is to bear that boundary in one&apos;s own person. But no one is found.',
        },
        {
          kind: 'christ',
          id: 'ezek22-christ-gap',
          title: 'Christ Connection — The One Who Stands in the Gap',
          html: 'Ezekiel&apos;s search for "a man" who would stand in the gap remained unfulfilled in his own time. But in Christ, that search found its answer. Jesus is the One who stands between God&apos;s holiness and human sin. At the Cross, He bears the judgment that should have fallen on us. He offers His righteousness as a hedge between us and destruction. In Pauline language, Christ is our "propitiation"—the satisfaction of God&apos;s just judgment. He is the mediator, the one standing in the gap.',
        },
        {
          kind: 'carry',
          html:
            'We live in cities not less bloody than ancient Jerusalem. We see corruption at every level, false words from those who should speak truth, violence perpetuated and justified. And God still searches. He searches not only for prophets and priests to repent, but for anyone willing to stand in the gap—to bear some small portion of the burden, to intercede, to be a voice for justice. We cannot do what Christ does. But we can join Him in His work.',
        },
        {
          kind: 'reflection',
          id: 'ezek22-gap',
          prompt: 'Where might God be calling you to stand in the gap—to speak truth, to defend the vulnerable, to intercede in prayer?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I sought for a man among them, that should make up the hedge, and stand in the gap before me for the land, that I should not destroy it: but I found none.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 22 · Study Guide',
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
      id: 'gog-magog-bibleodyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gog and Magog',
      url: 'https://www.bibleodyssey.org/dictionary/gog/',
      description: 'SBL entry on the mysterious Gog figure in Ezekiel and Revelation.',
    },
    {
      id: 'tyre-archaeology',
      kind: 'archaeology',
      source: 'Israel Museum / ToposText',
      label: 'Tyre Archaeology (Ezek 26-28)',
      url: 'https://www.imj.org.il/en',
      description: 'Archaeological record of ancient Tyre, subject of Ezekiel&apos;s prophecies.',
    }
  ],

  hasHebrew: true,
};
