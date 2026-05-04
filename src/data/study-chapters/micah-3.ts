import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Micah 3 — Princes and Prophets Rebuked
 *
 * Micah condemns the rulers and judges who tear flesh from the bones of the
 * people. He denounces false prophets who prophesy for hire. The true prophet
 * declares God&apos;s judgment and cannot be deceived.
 */
export const MICAH_3: RichChapterContent = {
  bookSlug: 'micah',
  bookName: 'Micah',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  topicTags: ['justice', 'judgment', 'hope', 'humility'],
  opener: {
    topical: true,
    caption: 'Micah 3',
  },
  intros: [
    'Micah speaks directly to the heads of Jacob, the rulers and judges. They are supposed to know justice. Instead, they hate good and love evil. They strip the skin from the bones of the oppressed. They devour the flesh of the people, breaking them in pieces. And they are blind to what they are doing.',
    'But worse than unjust rulers are false prophets—those who say "thus saith the Lord" when the Lord has not spoken, those who prophesy for hire, those who twist Scripture to suit the desires of those who pay them. Micah stands against both: against the corruption of civil authority and the corruption of religious authority. He declares that the true prophet speaks God&apos;s judgment without fear and without falsehood.',
  ],

  sections: [
    {
      ref: 'Micah 3:1–7',
      title: 'The Judgment on Rulers and Prophets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'And I said, Hear, I pray you, O heads of Jacob, and ye princes of the house of Israel; Is it not for you to know judgment?'),
            plain(2, 'Who hate the good, and love the evil; who pluck off their skin from off them, and their flesh from off their bones;'),
            plain(3, 'Who also eat the flesh of my people, and flay their skin from off them; and they break their bones, and chop them in pieces, as for the pot, and as flesh within the caldron.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-3-78mid-1',
          html:
            'The prophet turns from the corrupt heads to the corrupt prophets. Both have sold the people&apos;s welfare for bread; both will face the same silence from God[res:bibleodyssey-micah-prophecy][res:intertextual-micah-3-revelation].',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(4, 'Then shall they cry unto the Lord, but he will not hear them: he will even hide his face from them at that time, as they have behaved themselves ill in their doings.'),
            plain(5, 'Thus saith the Lord concerning the prophets that make my people err, that bite with their teeth, and cry, Peace; and he that putteth not into their mouths, they even prepare war against him.'),
            plain(6, 'Therefore night shall be unto you, that ye shall not have a vision; and it shall be dark unto you, that ye shall not divine; and the sun shall go down upon the prophets, and the day shall be dark over them.'),
            plain(7, 'Then shall the seers be ashamed, and the diviners confounded: yea, they shall all cover their lips; for there is no answer of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah3-judge',
          html:
            'The rulers are meant to know judgment. It is their office, their calling. But they have perverted it. The language is visceral—they strip skin, they pluck flesh from bones, they boil the people like meat in a caldron. This is not metaphor alone. It describes the very real violence of exploitative rulers who regard the people they govern as less than human[res:sefaria-micah-3].',
        },
        {
          kind: 'hebrew',
          id: 'micah3-neshach',
          title: 'Neshach — "Bite"',
          script: 'נִשְׁכ',
          translit: '<strong>Neshach</strong> · to bite; to wound with the teeth',
          description:
            'The false prophets "bite with their teeth." They are like beasts, tearing and consuming. Yet they cry "Peace!" to those who feed them, and prepare war against those who do not. They have become predatory creatures masquerading as shepherds.',
        },
        {
          kind: 'christ',
          id: 'micah3-christ-prophet',
          title: 'Christ Connection — Christ the True Prophet',
          html:
            'Christ is the Prophet who cannot be bought, who speaks truth regardless of who listens or who pays. He did not prophesy for hire. He did not twist Scripture for comfort. He spoke the hard word: judgment on those who oppress the poor, mercy for those who repent. He is the fulfillment of the true prophetic office.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of conflicting voices, all claiming authority. Some speak for money or fame. Some bend truth to suit their audience. The test of a true prophet—then and now—is whether they speak God&apos;s word or merely what is pleasing to their hearers.',
        },
        {
          kind: 'reflection',
          id: 'micah3-truth-speak',
          prompt:
            'Are there truths you are afraid to speak because they might displease others? Or truths you listen to not because they are true, but because they are pleasant to hear?',
        },
      ],
    },

    {
      ref: 'Micah 3:8–12',
      title: 'The True Prophet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(8, 'But truly I am full of power by the spirit of the Lord, and of judgment, and of might, to declare unto Jacob his transgression, and to Israel his sin.'),
            plain(9, 'Hear this, I pray you, ye heads of Jacob, and princes of the house of Israel, that abhor judgment, and pervert all equity.'),
            plain(10, 'They build up Zion with blood, and Jerusalem with iniquity.'),
            plain(11, 'The heads thereof judge for reward, and the priests thereof teach for hire, and the prophets thereof divine for money: yet will they lean upon the Lord, and say, Is not the Lord among us? none evil can come upon us.'),
            plain(12, 'Therefore shall Zion for your sake be plowed as a field, and Jerusalem shall become heaps, and the mountain of the house as the high places of the forest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah3-spirit',
          html:
            'Micah contrasts himself with the false prophets. He is full of power by the Spirit of the Lord, filled with judgment and might. His calling is to declare Jacob&apos;s transgression, Israel&apos;s sin. He does not speak for hire. He speaks because he is compelled by God&apos;s Spirit to speak truth.',
        },
        {
          kind: 'commentary',
          id: 'micah3-false-security',
          html:
            'The leaders build Zion with blood and Jerusalem with iniquity. They judge for reward, teach for hire, prophesy for money. And yet they say, "Is not the Lord among us? None evil can come upon us." They have built false security on a foundation of corruption. But God will not be used to sanctify injustice.',
        },
        {
          kind: 'christ',
          id: 'micah3-christ-judgment',
          title: 'Christ Connection — Christ Declares Judgment and Calls to Repentance',
          html:
            'In Revelation 3, Christ addresses the church at Laodicea, wealthy and self-satisfied, saying "Thou art wretched, and miserable, and poor, and blind, and naked." Like Micah, Christ diagnoses the spiritual condition precisely. But He also calls them to repentance: "I counsel thee to buy of me gold tried in the fire." Judgment and mercy are inseparable in His ministry.',
        },
        {
          kind: 'carry',
          html:
            'The ultimate consequence of building a society on corruption is collapse. Zion will be plowed as a field. Jerusalem will become heaps. The mountain of the house will be like the high places of the forest—overrun, wild, no longer a place of worship. God will not allow evil to stand eternally, no matter how beautiful the structures built upon it.',
        },
        {
          kind: 'reflection',
          id: 'micah3-foundation',
          prompt:
            'What are you building your life on? If the foundation is injustice, what would it take to rebuild on truth?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'But truly I am full of power by the spirit of the Lord, and of judgment, and of might, to declare unto Jacob his transgression.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Micah 3 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-micah-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Micah 3 · Texts & Translations',
      url: 'https://www.sefaria.org/Micah.3',
      description: 'Primary sources on Micah&apos;s indictment of corrupt rulers and false prophets, and the promise of ruin for Jerusalem built on injustice.',
    },
    {
      id: 'intertextual-micah-3-revelation',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Micah 3 → Revelation 3 — Judgment on False Confidence',
      url: 'https://intertextual.bible/search?query=micah+revelation',
      description: 'Connection between Micah&apos;s exposure of false security and Christ&apos;s diagnosis of the Laodicean church.',
    },
  ],

  hasHebrew: true,
};
