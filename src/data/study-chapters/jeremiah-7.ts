import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 7 — The Temple Sermon
 *
 * "Trust ye not in lying words, saying, The temple of the Lord, The temple of
 * the Lord, The temple of the Lord, are these." Jeremiah stands at the temple
 * gate and confronts a fundamental illusion: that the physical building, no
 * matter how sacred, can protect a people who have abandoned God. The repetition
 * of "The temple of the Lord" is mocking—a chant, a magic spell that has no power.
 * God then quotes what Jesus would quote 600 years later: "Is this house, which is
 * called by my name, become a den of robbers?" The temple is not a refuge for the
 * guilty. It is the place where mercy meets justice, where true worship requires
 * true obedience.
 */
export const JEREMIAH_7: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'Jeremiah 7 opens with the prophet standing at the gate of the house of the Lord, proclaiming a word that will enrage the priests and the people. The word is this: your trust in the temple is a lie. You say, "The temple of the Lord, the temple of the Lord, the temple of the Lord"—you chant it, you make it a refrain, as if the building itself has power. But it does not. A physical building cannot substitute for a transformed heart. The temple will not protect you if you are unrepentant.',
    'Jeremiah then describes what makes the temple a true sanctuary: it is where the righteous dwell, where those who execute judgment and show mercy come to worship. But if those who come are unrepentant, if they steal, murder, commit adultery, swear falsely, burn incense to Baal, and then come to the temple saying "We are delivered to do all these abominations"—if they do this, then the temple becomes not a sanctuary but a den of robbers. This sermon will be quoted by Jesus six centuries later, when He overturns the tables and quotes these very words.',
  ],

  sections: [
    {
      ref: 'Jeremiah 7:1–15',
      title: 'The Illusion of the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'The word that came to Jeremiah from the Lord, saying,'),
            plain(2, 'Stand in the gate of the Lord&apos;s house, and proclaim there this word, and say, Hear the word of the Lord, all ye of Judah, that enter in at these gates to worship the Lord.'),
            plain(3, 'Thus saith the Lord of hosts, the God of Israel, Amend your ways and your doings, and I will cause you to dwell in this place.'),
            plain(4, 'Trust ye not in lying words, saying, The temple of the Lord, The temple of the Lord, The temple of the Lord, are these.'),
            plain(5, 'For if ye thoroughly amend your ways and your doings; if ye thoroughly execute judgment between a man and his neighbour;'),
            plain(6, 'If ye oppress not the stranger, the fatherless, and the widow, and shed not innocent blood in this place, and walk not after other gods to your hurt:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer7-amend-dwell',
          html:
            'The condition is clear and concrete: amend your ways, execute justice, protect the vulnerable, turn from other gods. If you do this, you will dwell in the land. The covenant promise hinges on the people&apos;s choice.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(7, 'Then will I cause you to dwell in this place, in the land that I gave to your fathers, for ever and ever.'),
            plain(8, 'Behold, ye trust in lying words, that cannot profit.'),
            plain(9, 'Will ye steal, murder, and commit adultery, and swear falsely, and burn incense unto Baal, and walk after other gods whom ye know not;'),
            plain(10, 'And come and stand before me in this house, which is called by my name, and say, We are delivered to do all these abominations?'),
            plain(11, 'Is this house, which is called by my name, become a den of robbers in your eyes? Behold, even I have seen it, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer7-lying-words',
          html: 'The repetition of "The temple of the Lord" three times is deliberately mocking. It is the chant of those who believe that the physical building has magical power, that merely being there or saying its name will protect them. Jeremiah breaks the spell by calling it what it is: a lie. The temple is not a talisman. It is not a charm that works through repetition. Its sanctity depends entirely on the holiness of those who worship in it.',
        },
        {
          kind: 'hebrew',
          id: 'jer7-sheker',
          title: 'Sheker — "Lying" (Deceptive Words)',
          script: 'שֶׁקֶר',
          translit: '<strong>Sheker</strong> · lie; falsehood; deception',
          description: 'The Hebrew word sheker refers to words that deceive, that do not correspond to reality. The trust in the temple is sheker—it is a false confidence, a belief that does not match reality. The temple has no power to save the unrepentant. To trust in it is to trust in something that cannot deliver.',
        },
        {
          kind: 'commentary',
          id: 'jer7-den',
          html: 'Jesus would quote this verse verbatim when He overturned the tables in the temple. The phrase "den of robbers" is striking. It is not that the people robbing the poor and the weak rob them in the temple—it is that they come to the temple itself to hide from the consequences of their robbery. The temple becomes a den of robbers: a place where those guilty of crime hide out. The sacred space is corrupted by its use as a refuge for the guilty.',
        },
        {
          kind: 'commentary',
          id: 'jer7-amend',
          html: 'God&apos;s condition is clear: "Amend your ways and your doings, and I will cause you to dwell in this place." The promise of the land depends not on the temple but on righteousness. Execute judgment. Do not oppress the stranger, the fatherless, the widow. Do not shed innocent blood. Do not burn incense to other gods. These are the conditions. If these are met, the temple becomes a true sanctuary. If not, it is merely a building.',
        },
        {
          kind: 'christ',
          id: 'jer7-christ-temple',
          title: 'Christ Connection — The Temple Cleansed',
          html: 'In Matthew 21:12–13, Jesus drives out the money changers and says, "It is written, My house shall be called the house of prayer; but ye have made it a den of thieves." Jesus quotes Jeremiah&apos;s language and fulfills Jeremiah&apos;s indictment. More than that, Jesus Himself becomes the true temple—the place where God dwells. In John 2:19, He says, "Destroy this temple, and in three days I will raise it up." His body is the temple. And those who enter into Him do so not through outward rituals but through repentance and faith.',
        },
        {
          kind: 'carry',
          html: 'We all tend to trust in external things—in buildings, in rituals, in communities, in practices—to secure us spiritually. We say the right things, we go to the right places, we perform the right actions. Yet if the heart is unrepentant, if we live in contradiction to what we say we believe, then all of these external things become lies. What external "temple" are you relying on? What would true repentance look like in your life?',
        },
        {
          kind: 'reflection',
          id: 'jer7-what-temple',
          prompt: 'Where do you trust in external religious practices or buildings rather than in real transformation of heart? How could your worship become more authentic?',
        },
      ],
    },

    {
      ref: 'Jeremiah 7:16–34',
      title: 'The Price of Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(16, 'Therefore pray not thou for this people, neither lift up cry nor prayer for them, neither make intercession to me: for I will not hear thee.'),
            plain(17, 'Seest thou not what they do in the cities of Judah and in the streets of Jerusalem?'),
            plain(18, 'The children gather wood, and the fathers kindle the fire, and the women knead their dough, to make cakes to the queen of heaven; and they pour out drink offerings unto other gods, to provoke me to anger.'),
            plain(26, 'Therefore will I do unto this house, which is called by my name, wherein ye trust, and unto the place which I gave to you and to your fathers, as I have done to Shiloh.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-7-78mid-1',
          html:
            'The temple sermon turns. Jeremiah stops asking the people to amend their ways and starts naming the offerings that no longer reach God.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(27, 'And I will cast you out of my sight, as I have cast out all your brethren, the whole seed of Ephraim.'),
            plain(30, 'For the children of Judah have done evil in my sight, saith the Lord: they have set their abominations in the house which is called by my name, to pollute it.'),
            plain(31, 'And they have built the high places of Tophet, in the valley of the son of Hinnom, to burn their sons and their daughters in the fire; which I commanded them not, neither came it into my heart.'),
            plain(32, 'Therefore, behold, the days come, saith the Lord, that it shall no more be called Tophet, nor The valley of the son of Hinnom, but The valley of slaughter: for they shall bury in Tophet, till there be no place.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer7-no-prayer',
          html: 'God tells Jeremiah something extraordinary: "Pray not thou for this people." God is withdrawing even the possibility of intercessory prayer. Jeremiah, the great intercessor, is told to stop. The point of refusal has been reached. The mercy that was always available is being withdrawn. The door is closing.',
        },
        {
          kind: 'commentary',
          id: 'jer7-queen-heaven',
          html: 'The people have turned to the worship of the queen of heaven—likely the goddess Astarte/Ishtar. This worship involves the whole family, the whole community. The children gather wood, the fathers kindle the fire, the women knead dough to make cakes. It is a corporate, communal, intentional embrace of idolatry. And it is done to provoke God. The idolatry is not accidental but deliberate.',
        },
        {
          kind: 'commentary',
          id: 'jer7-tophet',
          html: 'The description of child sacrifice in Tophet is the most horrifying in all of Jeremiah. The valley of Hinnom will become the valley of slaughter. The bodies will be piled so high that there will be no more room to bury them. This is the consequence of turning from God to embrace the gods of surrounding nations. The judgment is not merely exile but annihilation.',
        },
        {
          kind: 'carry',
          html: 'This chapter shows a people whose rejection of God is complete and communal. They do not merely refrain from obedience; they actively pursue other gods. They corrupt the temple. They burn their own children in sacrifice. The judgment that comes is the logical outcome. Yet the chapter begins with an invitation to amend and dwell in the place forever. The tragedy is that the invitation was refused.',
        },
        {
          kind: 'reflection',
          id: 'jer7-what-refused',
          prompt: 'What invitation from God are you refusing or ignoring? What would it look like to truly amend your ways and accept that invitation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Trust ye not in lying words, saying, The temple of the Lord, The temple of the Lord, The temple of the Lord, are these. Is this house, which is called by my name, become a den of robbers in your eyes?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 7 · Study Guide',
  },

  hasHebrew: true,
};
