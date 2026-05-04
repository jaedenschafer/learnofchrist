import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 22 — The Last Supper, Gethsemane, and Betrayal
 *
 * Jesus eats the Passover with His disciples. He takes bread, blesses it,
 * breaks it, and says: "This is my body which is given for you: this do in
 * remembrance of me." The cup likewise: "This cup is the new covenant in my
 * blood, which is shed for you." Judas will betray Him. Peter will deny Him
 * three times. Yet Jesus prays for Peter: "I have prayed for thee, that thy
 * faith fail not." In Gethsemane, Jesus sweats blood. "Father, if thou be
 * willing, remove this cup from me: nevertheless not my will, but thine, be
 * done." An angel strengthens Him. He is arrested, denied, condemned.
 */
export const LUKE_22: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 22,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Jesus Led from Caiaphas/i,
    caption: 'Luke 22',
  },
  intros: [
    'The feast of unleavened bread draws near. Jesus sends Peter and John to prepare the Passover. At evening, Jesus sits with the twelve. He says: "With desire I have desired to eat this passover with you before I suffer." He takes bread, blesses it, breaks it, and gives it to them: "This is my body which is given for you: this do in remembrance of me." Likewise the cup: "This cup is the new covenant in my blood." Yet one of the twelve will betray Him. The disciples begin to question who it is. Jesus says: "The Son of man goeth, as it was determined: but woe unto that man by whom he is betrayed!"',
    'Jesus goes to the Mount of Olives. He says to the disciples: "Pray that ye enter not into temptation." He withdraws and prays: "Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done." An angel from heaven appears, strengthening Him. His sweat becomes great drops of blood. He rises and finds the disciples sleeping from sorrow. Suddenly, a multitude comes with Judas. Judas betrays Jesus with a kiss. Peter draws his sword and cuts off the servant&apos;s ear. But Jesus says: "Suffer ye thus far," and heals the ear.',
  ],

  sections: [
    {
      ref: 'Luke 22:1–20',
      title: 'The Passover and the New Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(15, 'And he said unto them, With desire I have desired to eat this passover with you before I suffer:'),
            plain(19, 'And he took bread, and gave thanks, and brake it, and gave unto them, saying, This is my body which is given for you: this do in remembrance of me.'),
            plain(20, 'Likewise also the cup after supper, saying, This cup is the new covenant in my blood, which is shed for you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke22-passover',
          html:
            'Jesus eats the Passover with His disciples[res:sefaria-passover-lamb]. For centuries, the Passover commemorated the exodus from Egypt, the lamb&apos;s blood on the doorposts, deliverance from death. Now Jesus, the Lamb of God, inaugurates a new Passover. His body is broken for them. His blood is shed. The ancient feast finds its fulfillment.',
        },
        {
          kind: 'greek',
          id: 'luke22-diathēkē',
          title: 'Diathēkē — Covenant; Testament; Will',
          script: 'διαθήκη',
          translit: '<strong>Diathēkē</strong> · covenant; testament; will; agreement',
          description:
            'The new covenant sealed in Jesus&apos; blood supersedes the old. It is not a modification of the old but a new and final covenant—God&apos;s will expressed in sacrifice and grace.',
        },
        {
          kind: 'commentary',
          id: 'luke22-remembrance',
          html:
            '"This do in remembrance of me." The meal is not magic. It is memory. Disciples gather to remember what Jesus did, what His body and blood mean, that He gave Himself for them. Remembrance is the bond between present and redemptive past.',
        },
        {
          kind: 'commentary',
          id: 'luke22-betrayal',
          html:
            'Yet at this meal of intimate communion, betrayal looms. Judas sits with them. Jesus knows He will be betrayed. He says: "Woe unto that man by whom he is betrayed!" Sin enters the most sacred moment. Evil works even at the table of the Lord.',
        },
        {
          kind: 'christ',
          id: 'luke22-christ-body-blood',
          title: 'Christ Connection — The Sacrifice Offered',
          html:
            'Jesus offers His body and blood as the new Passover. The ancient memorial becomes present reality. He gives Himself—literally, in covenant, in sacrifice. The Eucharist is His self-giving made perpetual.',
        },
        {
          kind: 'reflection',
          id: 'luke22-supper-reflect',
          prompt: 'What does it mean to eat the body and drink the blood of Christ? How does remembrance bind you to His sacrifice?',
        },
      ],
    },

    {
      ref: 'Luke 22:39–71',
      title: 'Gethsemane, Arrest, and Denial',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(42, 'Saying, Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done.'),
            plain(48, 'But Jesus said unto him, Judas, betrayest thou the Son of man with a kiss?'),
            plain(54, 'Then took they him, and led him into the high priest&apos;s house. And Peter followed afar off.'),
            plain(61, 'And the Lord turned, and looked upon Peter. And Peter remembered the word of the Lord, how he had said unto him, Before the cock crow, thou shalt deny me thrice.'),
            plain(70, 'Then said they all, Art thou then the Son of God? And he said unto them, Ye say that I am.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke22-gethsemane',
          html:
            'In Gethsemane, Jesus prays: "Father, if thou be willing, remove this cup from me[res:sefaria-gethsemane]." The cup is suffering, death, separation from the Father. Jesus does not deny the anguish. But He submits: "Not my will, but thine, be done." His sweat becomes great drops of blood. An angel strengthens Him. This is prayer at the edge of the abyss.',
        },
        {
          kind: 'commentary',
          id: 'luke22-judas-kiss',
          html:
            'Judas comes with a multitude carrying swords and staves. He betrays Jesus with a kiss—the sign of intimate affection becomes the signal of betrayal[res:bible-odyssey-judas]. Jesus asks: "Judas, betrayest thou the Son of man with a kiss?" The question hangs unanswered. Some sins require no response.',
        },
        {
          kind: 'greek',
          id: 'luke22-arneomai',
          title: 'Arneomai — Deny; Disown; Refuse',
          script: 'ἀρνέομαι',
          translit: '<strong>Arneomai</strong> · deny; disown; refuse; renounce',
          description:
            'Peter denies Jesus three times—before he fully knows what he is saying. Fear masquerades as prudence. Yet the denial reveals the human heart&apos;s weakness when unsupported by grace.',
        },
        {
          kind: 'commentary',
          id: 'luke22-peter-restored',
          html:
            'Peter denies Jesus three times. Then: "The Lord turned, and looked upon Peter." One look. The gaze of Jesus pierces Peter&apos;s soul. He remembers the warning. He remembers who he has denied. Yet this look is not condemnation. It will become the basis of restoration. The gaze of Christ redeems.',
        },
        {
          kind: 'christ',
          id: 'luke22-christ-suffering',
          title: 'Christ Connection — The Obedient Son',
          html:
            'Jesus submits to the will of the Father. He is arrested, tried, denied. Yet He remains faithful. His obedience is not passive but active, chosen, costly. He gives Himself.',
        },
        {
          kind: 'carry',
          html:
            'Tomorrow you will face something hard. Not someday—soon. The conversation you&apos;re dreading. The loss you&apos;re anticipating. The surrender you don&apos;t want to make. Before it arrives, practice the prayer: "Not my will, but thine, be done." Not once in the moment, but now, while you can still think clearly. Jesus agonized in Gethsemane beforehand so that on the cross He could trust. Your prayer now prepares you then.',
        },
        {
          kind: 'reflection',
          id: 'luke22-gethsemane-reflect',
          prompt: 'How does Jesus&apos; prayer in Gethsemane reveal both His humanity and His faith? When have you had to surrender your will to God&apos;s?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'This is my body which is given for you. Not my will, but thine, be done. The Lord turned and looked upon Peter.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 22 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-passover-lamb',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Passover Lamb and Redemption in Jewish Tradition',
      url: 'https://www.sefaria.org/search?q=passover%20lamb%20exodus%20blood&tab=text',
      description: 'Sefaria texts on the Passover narrative and the lamb symbolism in Jewish redemptive theology.',
    },
    {
      id: 'sefaria-gethsemane',
      kind: 'study',
      source: 'Sefaria',
      label: 'Submission and Suffering in Jewish Prayer',
      url: 'https://www.sefaria.org/search?q=prayer%20submission%20suffering%20God%20will&tab=text',
      description: 'Sefaria texts on prayer, anguish, and submission to the divine will in Jewish spirituality.',
    },
    {
      id: 'bible-odyssey-judas',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Judas and Betrayal in the Gospel Narrative',
      url: 'https://www.bibleodyssey.org/dictionary/judas-iscariot/',
      description: 'Open-access entry on Judas, his role as an apostle, and the meaning of his betrayal.',
    },
  ],

  hasHebrew: false,
};
