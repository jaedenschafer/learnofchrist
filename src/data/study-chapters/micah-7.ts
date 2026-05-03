import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Micah 7 — The Mercy That Casts Sins Away
 *
 * Micah laments the corruption of Israel. "Woe is me...the faithful man ceaseth
 * from among the earth." But then: "Who is a God like unto thee, that pardoneth
 * iniquity...thou wilt cast all their sins into the depths of the sea."
 */
export const MICAH_7: RichChapterContent = {
  bookSlug: 'micah',
  bookName: 'Micah',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Micah begins chapter 7 in despair. There is no faithful man left. All seek their own gain. Brother deals treacherously with brother. None can be trusted. The faithful have disappeared from the earth. This is not abstract theological lamentation. This is a man who has looked at his society and seen it rot from the inside.',
    'But despair is not the final word. God is the final word. And God&apos;s character is revealed in an extraordinary question: "Who is a God like unto thee, that pardoneth iniquity?" God pardons. He does not merely overlook sin. He actively forgives it, casts it into the depths of the sea where it will never be found again. This is the hope that transcends the darkness.',
  ],

  sections: [
    {
      ref: 'Micah 7:1–7',
      title: 'The Corruption of Society',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Woe is me! for I am as when they have gathered the summer fruits, as the grapegleanings of the vintage: there is no cluster to eat: my soul desired the firstripe fruit.'),
            plain(2, 'The good man is perished out of the earth: and there is none upright among men: they all lie in wait for blood; they hunt every man his brother with a net.'),
            plain(3, 'That they may do evil with both hands earnestly, the king and the judge ask for a reward; and the great man, he uttereth his mischievous desire: so they wrap it up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-7-78mid-1',
          html:
            'Micah turns from lament to confession of trust — &quot;I will look unto the LORD; I will wait for the God of my salvation.&quot; The book ends in hope.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(4, 'The best of them is but as a brier: the most upright is sharper than a thorn hedge: the day of thy watchmen and thy visitation cometh; now shall be their confusion.'),
            plain(5, 'Trust ye not in a friend, put ye not confidence in a guide: keep the doors of thy mouth from her that lieth in thy bosom.'),
            plain(6, 'For the son dishonoureth the father, the daughter riseth up against her mother, the daughter in law against her mother in law; a man&apos;s enemies are the men of his own house.'),
            plain(7, 'Therefore I will look unto the Lord; I will wait for the God of my salvation: my God will hear me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah7-corruption',
          html:
            'Micah is like a laborer after harvest, searching for fruit. But the vineyard is bare. The good man has perished. All that remains are those who lie in wait for blood, who hunt one another, who have thrown off every restraint of decency. Kings and judges ask openly for bribes. The powerful make no attempt to hide their evil.',
        },
        {
          kind: 'hebrew',
          id: 'micah7-batach',
          title: 'Batach — "Trust"',
          script: 'בָּטַח',
          translit: '<strong>Batach</strong> · to trust; to rely; to confide in',
          description:
            'Micah says: trust not in a friend, put not confidence in a guide. The word "batach" suggests the deepest kind of trust—the kind we extend to those closest to us. And Micah says: do not do this. Even the closest can betray.',
        },
        {
          kind: 'christ',
          id: 'micah7-christ-look',
          title: 'Christ Connection — Looking to God in Darkness',
          html:
            '"Therefore I will look unto the Lord; I will wait for the God of my salvation: my God will hear me." In the darkness of betrayal and corruption, Micah turns his eye toward God. Christ embodies this posture perfectly. In Gethsemane, facing death, He looks toward the Father. In the darkness of the cross, He cries out to God. His faith is not grounded in a corruption-free world but in God Himself.',
        },
        {
          kind: 'carry',
          html:
            'When those closest betray us, when society crumbles, when every human institution proves corrupt, there remains one to whom we can look: the God who sees all, judges all, and promises to save. Micah&apos;s despair is not permanent because it does not rest on the world. It rests on God.',
        },
        {
          kind: 'reflection',
          id: 'micah7-look',
          prompt:
            'When you have encountered betrayal or corruption, have you found yourself looking toward God? What does that looking, that waiting, look like for you?',
        },
      ],
    },

    {
      ref: 'Micah 7:8–20',
      title: 'The God Who Pardons Iniquity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(8, 'Rejoice not against me, O mine enemy: when I fall, I shall arise; when I sit in darkness, the Lord shall be a light unto me.'),
            plain(9, 'I will bear the indignation of the Lord, because I have sinned against him, until he plead my cause, and execute judgment for me: he will bring me forth to the light, and I shall behold his righteousness.'),
            plain(10, 'Then she that is mine enemy shall see it, and shame shall cover her which said unto me, Where is the Lord thy God? now shall they be trodden down as the mire of the streets.'),
            plain(11, 'In the day that thy walls are to be built, in that day shall the decree be far removed.'),
            plain(12, 'In that day also he shall come even to thee from Assyria, and from the fortified cities, and from the fortress even to the river, and from sea to sea, and from mountain to mountain.'),
            plain(13, 'Notwithstanding the land shall be desolate because of them that dwell therein, for the fruit of their doings.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah7-vision-complete',
          html: 'The vision of restoration is complete. The walls will be rebuilt. The peoples from far distant lands will gather to the God of Israel. The nations will fear Him. And yet the land will be desolate for those who dwelt in it and brought judgment upon themselves. The merciful vision belongs only to the faithful remnant.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(14, 'Feed thy people with thy rod, the flock of thy hand, which dwell solitarily in the wood, in the midst of Carmel: let them feed in Bashan and Gilead, as in the days of old.'),
            plain(15, 'According to the days of thy coming out of the land of Egypt will I shew unto him marvellous things.'),
            plain(16, 'The nations shall see and be confounded at all their might: they shall lay their hand upon their mouth, their ears shall be deaf.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-7-78mid-2',
          html:
            'Micah turns from lament to confession of trust — &quot;I will look unto the LORD; I will wait for the God of my salvation.&quot; The book ends in hope.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(17, 'They shall lick the dust like a serpent, they shall move out of their holes like worms of the earth: they shall be afraid of the Lord our God, and shall fear because of thee.'),
            plain(18, 'Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his people? he retaineth not his anger for ever, because he delighteth in mercy.'),
            plain(19, 'He will turn again, he will have compassion upon us; he will subdue our iniquities under his feet; and thou wilt cast all their sins into the depths of the sea.'),
            plain(20, 'Thou wilt perform the truth to Jacob, and the mercy to Abraham, which thou hast sworn unto our fathers from the days of old.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah7-pardons',
          html:
            'The rhetorical question is devastating: "Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his people?" The answer is: no one. No earthly power, no human judge, no mere mortal king has such authority or such mercy. This is unique to God—His willingness not merely to forgive but to forget, to cast sins into the depths of the sea.',
        },
        {
          kind: 'commentary',
          id: 'micah7-sea',
          html:
            'The image is extraordinary. God does not merely pardon. He casts sin into the depths of the sea—the deepest, most inaccessible place. The sin is not merely forgiven. It is removed from the presence of God, placed where it will never be retrieved. This is the completeness of God&apos;s forgiveness.',
        },
        {
          kind: 'christ',
          id: 'micah7-christ-casts',
          title: 'Christ Connection — Christ Casts Sins Away',
          html:
            'In Hebrews 9:26, Christ is described as "once offered to bear the sins of many." Through His sacrifice, our sins are cast away—completely removed, never to be held against us. His death and resurrection accomplish what Micah dreamed of: sins so thoroughly forgiven that they are as though they never were.',
        },
        {
          kind: 'carry',
          html:
            'The good news of Scripture is not that God helps us become sinless. It is that God casts our sins—all of them—into the depths of the sea. They are gone. The judgment we deserve has been executed on Christ. We are free. The remnant—the small group of faithful ones—experiences this mercy completely.',
        },
        {
          kind: 'reflection',
          id: 'micah7-mercy',
          prompt:
            'If your sins have been cast into the depths of the sea—removed, forgotten, no longer held against you—how should that change how you live and how you relate to others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Who is a God like unto thee, that pardoneth iniquity...thou wilt cast all their sins into the depths of the sea.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Micah 7 · Study Guide',
  },

  hasHebrew: true,
};
