import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const OBADIAH_1: RichChapterContent = {
  bookSlug: 'obadiah',
  bookName: 'Obadiah',
  chapter: 1,

  intros: [
    'Obadiah is the shortest book of the Old Testament — a single chapter of 21 verses. Yet it contains a sweeping vision of God\'s judgment on Edom and the ultimate establishment of God\'s kingdom. Edom had done violence to Jacob and stood at the crossroads rejoicing when Jerusalem fell. Now Edom itself will be brought low.',
    'The book opens with judgment and closes with salvation: "And the kingdom shall be the Lord\'s." This is the arc of all Scripture — human pride brought low, God\'s kingdom established, His rule made manifest over all the earth. Edom represents the pride of those who think they can escape God\'s judgment by exalting themselves. They cannot.',
  ],

  bottomShare: {
    label: 'Share Obadiah',
    quote:
      '"And the kingdom shall be the Lord\'s." God\'s kingdom will be established over all the earth, and all those who exalt themselves against Him will be brought low.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Obadiah · Study Guide',
  },

  sections: [
    {
      ref: 'Obadiah 1–9',
      title: 'The Pride of Edom and Its Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('The vision of Obadiah. Thus saith the Lord God concerning Edom; We have heard a rumour from the Lord, and an ambassador is sent among the heathen, '),
                hp('Arise ye, and let us rise up against her in battle', 'obadiah1-edom'),
                t('.'),
              ],
            },
            plain(2, 'Behold, I have made thee small among the heathen: thou art greatly despised.'),
            plain(3, 'The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground?'),
            plain(4, 'Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the Lord.'),
            plain(5, 'If thieves came to thee, if robbers by night, (how art thou cut off!) would they not have stolen till they had enough? if the grapegatherers came to thee, would they not leave some grapes?'),
            plain(6, 'But how are the things of Esau searched out! how are his hidden things sought up!'),
            plain(7, 'All the men of thy covenant are brought even to the border: the men that were at peace with thee have deceived thee, and prevailed against thee; they that eat thy bread have laid a wound under thee: there is none understanding in him.'),
            plain(8, 'Shall I not in that day, saith the Lord, even destroy the wise men out of Edom, and understanding out of the mount of Esau?'),
            plain(9, 'And thy mighty men, O Teman, shall be dismayed, to the end that every one of the mount of Esau may be cut off by slaughter.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'obadiah1-pride',
          html:
            'Edom\'s pride is its undoing. Though it dwells high in the clefts of the rock, though it exalts itself like an eagle, God will bring it down. Even if only thieves came, they would steal some and move on. But Edom\'s hidden things will be completely searched out. Its allies will betray it. The proud will be brought to nothing.',
        },
        {
          kind: 'hebrew',
          id: 'obadiah1-gaon',
          title: 'Hebrew Word Study',
          script: 'גָּאוֹן',
          translit: 'gaon',
          description: 'pride, arrogance, excellence',
        },
        {
          kind: 'christ',
          id: 'obadiah1-humility',
          title: 'Christ Connection',
          html:
            'Christ is humble before God the Father, even as He humbles all the proud. He who exalted Himself as the eagle is brought down. Those who come to Christ must surrender their pride, their confidence in themselves. Only then can the kingdom of God be established in their hearts.',
        },
        {
          kind: 'carry',
          html:
            'Pride is the sin that deceives us most deeply. It tells us we are secure, that no one can touch us, that we answer to no one. But Edom\'s example shows that exaltation before God leads to humiliation. Where are you tempted to think yourself beyond God\'s reach? What pride must be laid low in your heart?',
        },
        {
          kind: 'reflection',
          id: 'obadiah1-pride-reflection',
          prompt:
            'Edom\'s pride deceived it and led to its destruction. What pride in your own heart might be deceiving you? How will you cultivate humility before God?',
        },
      ],
    },

    {
      ref: 'Obadiah 10–21',
      title: 'Edom\'s Violence and the Kingdom of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('For thy violence against thy brother Jacob shame shall cover thee, and thou shalt be cut off for ever.'),
              ],
            },
            plain(11, 'In the day that thou stoodest on the other side, in the day that the strangers carried away captive his forces, and foreigners entered into his gates, and cast lots upon Jerusalem, even thou wast as one of them.'),
            plain(12, 'But thou shouldest not have looked on the day of thy brother in the day that he became a stranger; neither shouldest thou have rejoiced over the children of Judah in the day of their destruction; neither shouldest thou have spoken proudly in the day of distress.'),
            plain(13, 'Thou shouldest not have entered into the gate of my people in the day of their calamity; yea, thou shouldest not have looked on their affliction in the day of their calamity, nor have laid hands on their substance in the day of their calamity;'),
            plain(14, 'Neither shouldest thou have stood in the crossway, to cut off those of his that did escape; neither shouldest thou have delivered up those of his that did remain in the day of distress.'),
            plain(15, 'For the day of the Lord is near upon all the heathen: as thou hast done, it shall be done unto thee: thy reward shall return upon thine own head.'),
            plain(16, 'For as ye have drunk upon my holy mountain, so shall all the heathen drink continually, yea, they shall drink, and they shall swallow down, and they shall be as though they had not been.'),
            {
              number: 17,
              spans: [
                t('But upon mount Zion shall be deliverance, and there shall be '),
                hp('holiness', 'obadiah1-holiness'),
                t('; and the house of Jacob shall possess their possessions.'),
              ],
            },
            plain(18, 'And the house of Jacob shall be a fire, and the house of Joseph a flame, and the house of Esau for stubble: and they shall kindle in them, and devour them; and there shall not be any remaining of the house of Esau; for the Lord hath spoken it.'),
            plain(19, 'And they of the south shall possess the mount of Esau; and they of the plain the Philistines: and they shall possess the fields of Ephraim, and the fields of Samaria: and Benjamin shall possess Gilead.'),
            plain(20, 'And the captivity of this host of the children of Israel shall possess that which is of the Canaanites, even unto Zarephath; and the captivity of Jerusalem, which is in Sepharad, shall possess the cities of the south.'),
            {
              number: 21,
              spans: [
                t('And '),
                hp('saviors shall come up on mount Zion to judge the mount of Esau', 'obadiah1-saviors'),
                t('; and '),
                hp('the kingdom shall be the Lord\'s', 'obadiah1-kingdom'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'obadiah1-violence',
          html:
            'Edom\'s sin was not merely pride but violence against Jacob and rejoicing when Jerusalem fell. At the crossroads, Edom stood and cut off those who escaped. For this violence against his brother, Edom will be cut off forever. The principle is clear: "As thou hast done, it shall be done unto thee." Yet the final vision is of deliverance for Zion and the establishment of God\'s kingdom. Saviors will come up on Mount Zion, and the kingdom shall be the Lord\'s.',
        },
        {
          kind: 'hebrew',
          id: 'obadiah1-kodesh',
          title: 'Hebrew Word Study',
          script: 'קֹדֶשׁ',
          translit: 'kodesh',
          description: 'holiness, sanctity, sacred place',
        },
        {
          kind: 'christ',
          id: 'obadiah1-christ-king',
          title: 'Christ Connection',
          html:
            'Christ is the savior who comes up on Mount Zion to establish the kingdom of God. He judges the proud and exalts the humble. His kingdom will not end. "The kingdom shall be the Lord\'s" — and Christ, as God incarnate, is the eternal ruler of this kingdom. All pride must fall before Him.',
        },
        {
          kind: 'carry',
          html:
            'Obadiah shows us that standing by while others suffer, rejoicing at their calamity, or profiting from their distress brings God\'s judgment. We are called to side with the oppressed, not with their oppressors. What injustices around you are you tempted to ignore or benefit from? How will you stand on the side of holiness and justice?',
        },
        {
          kind: 'reflection',
          id: 'obadiah1-kingdom-reflection',
          prompt:
            'The kingdom shall be the Lord\'s. What does it mean for the kingdom to be fully God\'s in your heart? Where do you still hold back parts of your life from His rule?',
        },
      ],
    },

    {
      ref: 'Obadiah 1 · All',
      title: 'The Establishment of God\'s Kingdom',
      blocks: [
        {
          kind: 'commentary',
          id: 'obadiah1-theme',
          html:
            'Obadiah teaches that God\'s judgment on pride and violence is certain, and that God\'s kingdom will be established over all the earth. No nation or person can exalt themselves beyond God\'s reach. The final word of Obadiah — "the kingdom shall be the Lord\'s" — echoes through Scripture as the ultimate promise. Whatever human pride rises up, it will fall. Whatever seems secure in itself will crumble. But the kingdom of God, built on holiness and justice, will stand forever.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
