import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jonah 1 — The Prophet's Flight
 *
 * God commands Jonah to preach repentance to Nineveh, the capital of Assyria—
 * Israel&apos;s mortal enemy. Jonah refuses and flees to Tarshish. A great storm
 * arises, and the heathen sailors cry out to their gods while Jonah sleeps.
 * Realizing God&apos;s judgment falls on him, the sailors cast lots, then cast
 * Jonah into the sea. He sinks into the deep, swallowed by a great fish.
 */
export const JONAH_1: RichChapterContent = {
  bookSlug: 'jonah',
  bookName: 'Jonah',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'The book of Jonah opens with a direct command. "Arise, go to Nineveh, that great city, and cry against it; for their wickedness is come up before me." But Jonah does not arise. He does not go east toward Assyria. Instead, he rises and goes west, to Tarshish—as far from Nineveh as his feet can carry him. This is not a story about obedience. It is a story about refusal, flight, and the discovery that there is nowhere to hide from God&apos;s purpose.',
    'As Jonah flees by ship, a great storm arises. The pagan sailors are terrified, each crying to his own god. But Jonah sleeps in the hold, indifferent, perhaps even welcoming death as an escape from God&apos;s call. The sailors cast lots to discover who has brought this calamity upon them. The lot falls on Jonah. And when the truth emerges—that he is a Hebrew, a worshiper of the God who made heaven and earth, the God who stirs the sea—the sailors face a choice between their fear of nature and their fear of God.',
  ],

  sections: [
    {
      ref: 'Jonah 1:1–3',
      title: 'The Command and the Flight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Now the word of the Lord came unto Jonah the son of Amittai, saying,'),
            plain(2, 'Arise, go to Nineveh, that great city, and cry against it; for their wickedness is come up before me.'),
            plain(3, 'But Jonah rose up to flee unto Tarshish from the presence of the Lord, and went down to Joppa; and he found a ship going to Tarshish: so he paid the fare thereof, and went down into it, to go with them unto Tarshish from the presence of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah1-command',
          html:
            'God&apos;s word to Jonah is unambiguous: Arise. Go. Cry out. But Jonah&apos;s response is equally clear: he does not arise to obey, but to flee. The repetition is deliberate—"he paid the fare" and "went down into it" and "to go with them unto Tarshish from the presence of the Lord." Jonah believes he can escape God by traveling to the edge of the known world. He has not yet learned that you cannot flee from the presence of the God who fills heaven and earth.',
        },
        {
          kind: 'hebrew',
          id: 'jonah1-min-panai',
          title: 'Min-Panai — "From the Presence Of"',
          script: 'מִן־פָּנַי',
          translit: '<strong>Min-panai</strong> · from the presence of; from before; away from',
          description:
            'The Hebrew phrase "min-panai" appears twice in verse 3, underscoring Jonah&apos;s deliberate separation from God&apos;s presence. But the reader already knows: the God whose presence Jonah flees is the God who brought sea and sky into being. Flight is futile. Yet Jonah tries.',
        },
        {
          kind: 'christ',
          id: 'jonah1-christ-storm',
          title: 'Christ Connection — The Storm and the Sleeper',
          html:
            'In Matthew 4, Jesus sleeps in a boat while a great storm threatens His disciples. When they wake Him in terror, He speaks and the wind and waves obey. The parallel is striking: Jonah fleeing God&apos;s call, asleep while judgment rolls toward him; Christ at rest while the elements rage, at peace because He dwells in perfect alignment with the Father&apos;s will. One runs from God&apos;s purpose and finds no peace. The other rests in it completely.',
        },
        {
          kind: 'carry',
          html:
            'When God calls us to something that frightens us—something costly, something that asks us to bless those we resent, something that demands we surrender control—our first instinct is often to run. We book passage on the first ship heading away. But the storm that rises may not be the world. It may be God Himself, calling us back.',
        },
        {
          kind: 'reflection',
          id: 'jonah1-where-fleeing',
          prompt:
            'What call from God have you been tempted to refuse? Where are you fleeing to, and what storms is that flight creating in your life?',
        },
      ],
    },

    {
      ref: 'Jonah 1:4–16',
      title: 'The Storm and the Lot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'But the Lord sent out a great wind into the sea, and there was a mighty tempest in the sea, so that the ship was like to be broken.'),
            plain(5, 'Then the mariners were afraid, and cried every man unto his god: and they cast forth the wares that were in the ship into the sea, to lighten it of them. But Jonah was gone down into the sides of the ship; and he lay, and was fast asleep.'),
            plain(6, 'So the shipmaster came to him, and said unto him, Why sleepest thou? arise, call upon thy God, if so be that God will think upon us, that we perish not.'),
            plain(7, 'And they said every one to his fellow, Come, and let us cast lots, that we may know for whose cause this evil is upon us. So they cast lots, and the lot fell upon Jonah.'),
            plain(8, 'Then said they unto him, Tell us, we pray thee, for whose cause this evil is upon us; What is thine occupation? and whence comest thou? what is thy country? and of what people art thou?'),
            plain(9, 'And he said unto them, I am an Hebrew; and I fear the Lord, the God of heaven, which hath made the sea and the dry land.'),
            plain(10, 'Then were the men exceedingly afraid, and said unto him, Why hast thou done this? For the men knew that he fled from the presence of the Lord, because he had told them.'),
            plain(11, 'Then said they unto him, What shall we do unto thee, that the sea may be calm unto us? for the sea wrought, and was tempestuous.'),
            plain(12, 'And he said unto them, Take me up, and cast me forth into the sea; so shall the sea be calm unto you: for I know that for my sake this great tempest is upon you.'),
            plain(13, 'Nevertheless the men rowed hard to bring it to the land; but they could not: for the sea wrought, and was tempestuous against them.'),
            plain(14, 'Wherefore they cried unto the Lord, and said, We beseech thee, O Lord, we beseech thee, let us not perish for this man&apos;s life, and lay not upon us innocent blood: for thou, O Lord, hast done as it pleased thee.'),
            plain(15, 'So they took up Jonah, and cast him forth into the sea: and the sea ceased from her waging. And the sea was calm.'),
            plain(16, 'Then the men feared the Lord exceedingly, and offered a sacrifice unto the Lord, and made vows.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah1-storm-sent',
          html:
            'The Lord sends the storm. This is not random weather. This is God Himself pursuing the prophet He called. The heathen sailors, terrified and faithful to their own gods, cast cargo overboard—all the things a merchant fears to lose. But Jonah sleeps. His indifference is almost contemptuous. Let the ship sink. Let the storm take him. Anything but Nineveh.',
        },
        {
          kind: 'commentary',
          id: 'jonah1-lot',
          html:
            'The cast of the lots is the pivot. Pagan religion meets the God of Israel. The sailors seek their gods&apos; guidance through divination; instead, the lot reveals God&apos;s hand at work. They interrogate Jonah, and he confesses: he fears the Lord, the God of heaven, the God who made the sea and the dry land. And now the sailors understand: this God whose prophet they carry is the same God who rules the waters that rage around them.',
        },
        {
          kind: 'christ',
          id: 'jonah1-christ-descent',
          title: 'Christ Connection — Into the Deep',
          html:
            'Jonah descends into the sea; Christ descends into death and the grave. The great fish that swallows Jonah is a shadow of the tomb that could not hold the risen Christ. But the pattern is the same: descent into darkness, and then—resurrection. The three days Jonah spends in the fish&apos;s belly foreshadow Christ&apos;s three days in the grave, and the emergence from death into new life.',
        },
        {
          kind: 'carry',
          html:
            'The sailors offer sacrifice to the Lord after the sea grows calm. They have witnessed something that their own gods could not do—power over the very elements. And their response is worship. Sometimes we encounter God not in the temple but in the storm. Sometimes our knowledge of Him comes not through comfort but through crisis. The sailors knew more of God in that boat than they had known before.',
        },
        {
          kind: 'reflection',
          id: 'jonah1-depths',
          prompt:
            'Like Jonah cast into the sea, we sometimes find ourselves in situations we brought upon ourselves through disobedience. When you are in the depths, does it take the darkness itself to bring you back to God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Jonah rose up to flee unto Tarshish from the presence of the Lord...But the Lord sent out a great wind into the sea, and there was a mighty tempest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jonah 1 · Study Guide',
  },

  hasHebrew: true,
};
