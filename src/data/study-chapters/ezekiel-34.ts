import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 34 — The Good Shepherd
 *
 * God pronounces woe upon the shepherds of Israel who feed themselves and neglect
 * their flocks. But He promises to raise up a new shepherd—His servant David—who
 * will feed the sheep with justice and tenderness. This is one of the most direct
 * messianic passages in the Old Testament, pointing directly to Christ, the Good
 * Shepherd who lays down His life for the sheep.
 */
export const EZEKIEL_34: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 34,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  topicTags: ['judgment', 'glory', 'hope', 'second-coming'],
  opener: {
    topical: true,
    caption: 'Ezekiel 34',
  },
  intros: [
    'The prophets of Israel are shepherds—called to tend the flock of God&apos;s people. But Israel&apos;s actual shepherds—her kings, priests, and leaders—have become corrupt. They use their position for personal gain. They do not bind up the broken, do not seek the lost, do not strengthen the weak. Instead, they rule with harshness and selfishness. The sheep are scattered. The flock is neglected. God looks at this scene and His heart burns with anger and compassion in equal measure.',
    'But God does not simply condemn the bad shepherds and leave the flock without care. He promises to do the shepherding Himself. He will seek out His sheep. He will gather the scattered ones. And then He will "set up one shepherd over them, even my servant David, and he shall feed them." This is the promise of Christ—the Shepherd who will know His sheep by name, who will lead them to green pastures, who will lay down His life for them.',
  ],

  sections: [
    {
      ref: 'Ezekiel 34:1–10',
      title: 'Woe to the Shepherds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(1, 'And the word of the Lord came unto me, saying,'),
            plain(2, 'Son of man, prophesy against the shepherds of Israel, prophesy, and say unto them, Thus saith the Lord God unto the shepherds; Woe be to the shepherds of Israel that do feed themselves! should not the shepherds feed the flocks?'),
            plain(3, 'Ye eat the fat, and ye clothe you with the wool, ye kill them that are fed: but ye feed not the flock.'),
            plain(4, 'The diseased have ye not strengthened, neither have ye healed that which was sick, neither have ye bound up that which was broken, neither have ye brought again that which was driven away, neither have ye sought that which was lost; but with force and with cruelty have ye ruled them.'),
            plain(6, 'My sheep wandered through all the mountains, and upon every high hill: yea, my flock was scattered upon all the face of the earth, and none did search or seek after them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel34-feed',
          html: 'The accusation is clear: the shepherds feed themselves. They eat the fat. They clothe themselves in wool. They take the visible, material benefits of their position, yet they do not feed the sheep. The spiritual leadership of Israel has become parasitic. The leaders benefit; the people suffer[res:bibleodyssey-ezekiel].',
        },
        {
          kind: 'commentary',
          id: 'ezekiel34-broken',
          html: 'A true shepherd has five duties: strengthen the diseased, heal the sick, bind up the broken, bring again the driven away, seek the lost. These are not military virtues or administrative achievements. They are virtues of care, tenderness, and persistence. The false shepherds of Israel have neglected all five. They rule with force and cruelty instead[res:ezekiel-revelation-intertextual].',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel34-roim',
          title: 'Roim — "Shepherds" ',
          script: 'רוֹעִים',
          translit: '<strong>Roim</strong> · shepherds; those who tend flocks; leaders',
          description:
            'In Hebrew thought, the shepherd is always a metaphor for leadership. A king is a shepherd of his people. A priest is a shepherd of the flock. The term carries the weight of responsibility and intimacy. The shepherd knows his sheep, calls them by name, leads them to safety.',
        },
        {
          kind: 'christ',
          id: 'ezekiel34-christ-shepherd',
          title: 'Christ Connection — The Good Shepherd',
          html: 'In John 10, Christ says: "I am the good shepherd. The good shepherd giveth his life for the sheep." He knows His sheep by name. He calls them forth. He does not flee when the wolf comes, as the hired shepherd does. Instead, He stands in the gap. He lays down His life. This is shepherding in its ultimate and truest form: not using the flock for personal gain, but offering the self entirely for the flock&apos;s welfare.',
        },
        {
          kind: 'carry',
          html: 'If you hold any position of leadership—as parent, teacher, employer, pastor, friend to the vulnerable—Ezekiel&apos;s word applies to you. The question is not: what am I getting from this position? It is: am I strengthening the weak, healing the sick, seeking the lost? Do those I lead feel shepherded, or exploited?',
        },
        {
          kind: 'reflection',
          id: 'ezekiel34-how-lead',
          prompt: 'In what ways are you called to shepherd others? Are you using that position primarily for their good, or for your own comfort and gain?',
        },
      ],
    },

    {
      ref: 'Ezekiel 34:11–31',
      title: 'The True Shepherd Promised',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(11, 'For thus saith the Lord God; Behold, I, even I, will both search my sheep, and seek them out.'),
            plain(12, 'As a shepherd seeketh out his flock in the day that he is among his sheep that are scattered; so will I seek out my sheep, and will deliver them out of all places where they have been scattered in the cloudy and dark day.'),
            plain(15, 'I myself will feed my flock, and I will cause them to lie down, saith the Lord God.'),
            plain(23, 'And I will set up one shepherd over them, and he shall feed them, even my servant David; he shall feed them, and he shall be their shepherd.'),
            plain(26, 'And I will make them and the places round about my hill a blessing; and I will cause the shower to come down in his season; there shall be showers of blessing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel34-search',
          html: 'God does not wait for the sheep to come back. He does not demand repentance first. Instead, He says: I will search you out. I will seek you. I will find you in the dark places and the scattered places. This is the active love of God—a shepherd who does not sit at home waiting for lost sheep to return, but who goes into the mountains and the dark valleys to find them[res:sefaria-ezekiel].',
        },
        {
          kind: 'commentary',
          id: 'ezekiel34-david',
          html: 'God promises to raise up "my servant David" as a shepherd. This cannot refer to David himself, who has long been dead. Nor can it refer merely to the line of David continuing. It points to the coming one, the Messiah, who will be called the "Son of David" and who will shepherd God&apos;s people with perfect justice and love. In Matthew 1, Christ is genealogically descended from David. In John 10, He fulfills this prophecy as the Good Shepherd.',
        },
        {
          kind: 'carry',
          html:
            'The promise of the Good Shepherd is not that the flock will never face hardship. It is that the flock will never be left alone. Christ knows you. He calls you by name. He seeks you out in your wandering. He binds up your brokenness. He leads you to pasture. This is not metaphor. This is the reality of life in Christ.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel34-sought',
          prompt: 'Can you remember a time when you felt lost or scattered, and God brought you back? What did His shepherding look like in that moment? How has it changed the way you see Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And I will set up one shepherd over them, and he shall feed them, even my servant David; he shall feed them, and he shall be their shepherd.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 34 · Study Guide',
  },  resources: [
    {
      id: 'ezekiel-revelation-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezekiel Temple Vision ↔ Revelation 21-22',
      url: 'https://intertextual.bible/search?q=Ezekiel+40+Revelation+21',
      description: 'Side-by-side comparison of Ezekiel&apos;s temple vision and John&apos;s new creation.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    }
  ],

  hasHebrew: true,
};
