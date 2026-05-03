import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_17: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 17,
  estimatedMinutes: { beginner: 4, intermediate: 7, deep: 10 },
  intros: [
    'All have now fallen. Seven sons and their mother rest in a shared tomb. Over the grave stands an inscription, and the author—moved by what has unfolded—writes a memorial speech that transforms tragedy into theology.',
    'In 4 Maccabees 17, the author makes a stunning claim about the mother and her sons: their deaths are not tragedy but <em>redemption</em>. They have become a ransom for the nation. This is Jewish Second Temple theology imagining martyr-blood as the price of Israel&apos;s liberation—a longing for vicarious atonement that foreshadows Christ.',
    'As you read, listen for the structure beneath the words: a noble company, a wrestling match with tyranny, a crown of immortality earned through blood. The author is not merely mourning the dead. He is declaring them victors.',
  ],
  sections: [
    {
      ref: '4 Maccabees 17:1–6',
      title: 'The Mother&apos;s End',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            verse(1, t('And the mother, hearing that all her seven sons were dead, held her courage. Some say she leapt into the flames to join them.'),),
            verse(3, t('Others say she died of sorrow—a gentle death, her heart broken but her faith unshaken.')),
            verse(6, t('Yet in either telling, her end is the same: she did not survive them, and so she was not separated from them in death.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac17-mother-end',
          html: 'The text itself is uncertain whether she died by fire or sorrow. But 4 Maccabees will not let you choose between two bereavements. Whether she leapt or collapsed, the mother&apos;s death is a completion of her witness. She did not linger in a world without her sons. [res:sefaria-4-macc-17-atonement] [res:bible-odyssey-martyrdom] [res:perseus-logismos]',
        },
        {
          kind: 'carry',
          html: 'The impulse to follow—to join those we love in their suffering or beyond it—is one of the deepest human longings. The mother&apos;s refusal to outlive her sons is not despair. It is faithfulness: I will not be separated from what I held most dear.',
        },
      ],
    },


    {
      ref: '4 Maccabees 17:7–17',
      title: 'The Memorial Speech',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            verse(7, hg('And the author writes a memorial speech', 'mac17-memorial'), t(', calling the brothers and mother to mind.')),
            verse(9, hy('O noble company', 'mac17-noble'), t(' that wrestled the tyrant down!')),
            verse(12, t('They have become'), hp(' as it were a ransom', 'mac17-memorial-ransom'), t(' for the sin of our nation.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac17-memorial',
          html: 'In the ancient world, a memorial was not only remembrance but proclamation. The author is not writing for private grief. He is speaking publicly, as if to a gathered crowd, making certain that what these martyrs did will not be forgotten or reduced to tragedy.',
        },
        {
          kind: 'commentary',
          id: 'mac17-memorial-ransom',
          html: 'Here the author makes his central claim: these deaths are a ransom. Not a tragic waste but a redemptive payment.',
        },
        {
          kind: 'greek',
          id: 'mac17-stephanos',
          title: 'Stephanos — Crown; Victor&apos;s Prize',
          script: 'στέφανος',
          translit: '<strong>stephanos</strong> · crown; wreath; the prize given to one who has overcome',
          description: 'In Greek athletic contests, the stephanos was the crown placed on the head of the victor. 4 Maccabees uses this word for the martyrs&apos; reward—they have not merely endured but conquered.',
        },
        {
          kind: 'commentary',
          id: 'mac17-noble',
          html: 'The Greek word <em>gennaia</em> (noble) carries the sense of &ldquo;well-born,&rdquo; not by rank but by character. These are noble not because of their family name but because of their unbreakable will. They have become the true nobility of Israel.',
        },
        {
          kind: 'reflection',
          id: 'mac17-wrestling',
          prompt: 'What does it mean that the martyrs "wrestled the tyrant down"? How is their struggle more than mere death?',
        },
      ],
    },


    {
      ref: '4 Maccabees 17:18–22',
      title: 'A Ransom for the Sin of Our Nation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            verse(18, hp('Through the blood of these righteous', 'mac17-lytron'), t(' and the propitiation of their death,')),
            verse(20, t('the divine providence rescued Israel. For if they had not endured—if they had bowed to idolatry—the nation would have fallen utterly.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac17-lytron',
          html: 'This is one of the most theologically loaded verses in 4 Maccabees. The author is working with Temple language, with ransom theology, with a vision of blood as redemptive. He is not saying their blood magically accomplishes salvation. He is saying: their faithfulness paid a price that Israel could not pay alone, and in that payment, the nation is ransomed from extinction.',
        },
        {
          kind: 'greek',
          id: 'mac17-hilastērion',
          title: 'Hilastērion — Propitiation; Atoning Sacrifice',
          script: 'ἱλαστήριον',
          translit: '<strong>hilastērion</strong> · propitiatory sacrifice; the mercy seat of the Temple',
          description: 'The hilastērion is the place where God&apos;s wrath is turned aside and His mercy extended. Here it refers to the martyrs&apos; death as itself a place where the nation is reconciled to God.',
        },
        {
          kind: 'christ',
          id: 'mac17-christ-hilastērion',
          title: 'Christ Connection — Christ as Hilastērion',
          html: 'Paul writes that God set Christ forward as a <em>hilastērion</em> (Rom. 3:25), and John says Christ is the <em>hilasmos</em>—the propitiation—for the sins of the world (1 Jn 2:2). The brothers and mother foreshadow the One who would not merely point to vicarious atonement but <em>be</em> the atoning sacrifice, and do it perfectly, once and for all.',
        },
        {
          kind: 'carry',
          html: 'The longing beneath this text is profound: to believe that our suffering, when offered in faith, can mean something—not just for us but for others. This longing is not satisfied in 4 Maccabees, because human blood cannot truly atone. But it points to where it <em>is</em> satisfied: in the One whose blood is the ransom for many.',
        },
        { kind: 'reflection', id: 'mac17-lytron-prompt', prompt: 'Do you believe it is possible for one person&apos;s faithfulness to become a ransom for others? Where do you see this in Scripture or in life?' },
      ],
    },


    {
      ref: '4 Maccabees 17:23–24',
      title: 'The Propitiation of Their Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            verse(23, t('And the blood of the righteous was not spilled in vain. It became as a sweet offering before God,')),
            verse(24, t('turning away the anger of the Almighty and ransoming the soul of the nation from condemnation.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac17-sweet',
          html: 'The image of blood as a "sweet offering" is rooted in the Temple sacrifices. The smell of the burnt offering ascended to heaven as a fragrance pleasing to God. 4 Maccabees adapts this language to martyrdom: the brothers and mother have become a living sacrifice, a sweet smell before the throne, turning away judgment.',
        },
        {
          kind: 'christ',
          id: 'mac17-christ-1pet',
          title: 'Christ Connection — His Own Self Bare Our Sins',
          html: '1 Peter writes: &ldquo;His own self bare our sins in his own body on the tree&rdquo; (1 Pet 2:24). The image is nearly the same: the righteous one bearing the sins of the people, the body broken, the death becoming a ransom. But where the martyrs&apos; blood can only point, Christ&apos;s blood is sufficient. Their death is powerful; His is eternal.',
        },
        { kind: 'reflection', id: 'mac17-sweet-prompt', prompt: 'Is there something in your life that you have offered up, like a sweet offering, trusting God would redeem it?' },
      ],
    },


    {
      ref: '4 Maccabees 17:25–30',
      title: 'Divine Providence Rescued Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            verse(25, hg('The divine providence rescued Israel', 'mac17-pronoia'), t('. It did not look away.')),
            verse(27, t('The tyrant believed he was winning. He was wrong.')),
            verse(30, t('For the God of the faithful sees not by the strength of armies but by the strength of faith, and He does not abandon His people.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac17-pronoia',
          html: 'The Greek word <em>pronoia</em> (divine providence) carries the sense of God&apos;s foresight, His care and watchfulness over the future. This is not a distant God but one who sees ahead and guards His people. While the martyrs were dying, God&apos;s providence was already at work, already guaranteeing Israel&apos;s rescue.',
        },
        {
          kind: 'greek',
          id: 'mac17-pronoia-def',
          title: 'Pronoia — Divine Providence; Foresight',
          script: 'πρόνοια',
          translit: '<strong>pronoia</strong> · foresight; providential care; the watchfulness of God over creation',
          description: 'Providence is God&apos;s active, ongoing care. He does not abandon His people to the tyrant&apos;s will. He sees what is coming and has already prepared the way.',
        },
        {
          kind: 'carry',
          html: 'In your darkest seasons—when it seems the tyrant is winning, when faithfulness seems to be rewarded only with suffering—remember: you are not abandoned. God&apos;s providence is already at work, already planning your rescue. The victory may not yet be visible, but it is certain.',
        },
      ],
    },


    {
      ref: '4 Maccabees 17:31–40',
      title: 'Wrestled the Tyrant Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            verse(31, hp('O noble company that wrestled the tyrant down', 'mac17-agon'), t('!')),
            verse(35, t('Not by arms were they victorious, but by the spirit. Not by the body, but by faith.')),
            verse(40, t('They have conquered the world—not the world of empires and men, but the world of death itself.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac17-agon',
          html: 'The word for "wrestled" (<em>agon</em>) is the word for athletic contest or struggle. The image is not of passive suffering but of active combat. These are not victims lying down. They are athletes in a contest, muscles straining, refusing to yield.',
        },
        {
          kind: 'christ',
          id: 'mac17-christ-overcome',
          title: 'Christ Connection — I Have Overcome the World',
          html: 'In John 16:33, Jesus says: &ldquo;I have overcome the world.&rdquo; The martyrs, in their wrestling match with Antiochus, foreshadow the Overcomer. They wrestle a tyrant and lose their lives yet win immortal glory. Christ wrestles sin, death, and the grave—and rises on the third day. Their victory is incomplete; His is eternal.',
        },
        { kind: 'reflection', id: 'mac17-wrestling-prompt', prompt: 'The martyrs conquered not by force but by faith. Where is God asking you to stop fighting with weapons and start standing with faith?' },
      ],
    },


    {
      ref: '4 Maccabees 17:41–50',
      title: 'The Crown of Immortality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            verse(41, t('And behold, a crown of immortality has been placed upon their heads.')),
            verse(44, t('They have entered into the company of the faithful who died before them, and they wait for us in that noble cloud.')),
            verse(50, t('This is the reward of the faithful: to be crowned, to be remembered, to be reunited with all those who held the faith fast.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac17-crown',
          html: 'The crown of immortality is 4 Maccabees&apos; answer to the question: was it worth it? The text insists yes. This is not abstract theology. The martyrs are crowned, honored, remembered. Their sacrifice is vindicated by their immortal glory.',
        },
        {
          kind: 'artwork',
          matchTitle: /crown|martyr|maccab/i,
          caption: '4 Maccabees 17:41–50 · The Crown of Immortality',
        },
        {
          kind: 'carry',
          html: 'You are moving toward a crown. The faithfulness you show in obscurity, the love you give to the unlovely, the witness you bear when no one is watching—all of it is being recorded. A crown waits. Glory waits. You are already enrolled in that noble company of the faithful.',
        },
        { kind: 'reflection', id: 'mac17-crown-prompt', prompt: 'What crown are you being asked to lay at the feet of the One who wears all crowns?' },
      ],
    },
  ],
  resources: [
    {
      id: 'sefaria-4-macc-17-atonement',
      kind: 'study',
      source: 'Sefaria',
      label: '4 Maccabees 17 — Atonement Through Suffering',
      url: 'https://www.sefaria.org/IV_Maccabees.17',
      description: 'Martyrdom theology and substitutionary suffering (section 17).',
    },
    {
      id: 'bible-odyssey-martyrdom',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jewish Martyrdom and Atonement',
      url: 'https://www.bibleodyssey.org/dictionary/martyrdom/',
      description: 'Martyrdom traditions and redemptive suffering theology in Judaism.',
    },
    {
      id: 'perseus-logismos',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Logismos — Rational Deliberation',
      url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0057:entry=logi%2Fsmos',
      description: 'Greek philosophical term: reason controlling passion, central to 4 Maccabees.',
    },
  ],

  bottomShare: {
    quote: 'O noble company that wrestled the tyrant down, through the blood of these righteous and the propitiation of their death the divine providence rescued Israel. They have become as a ransom for the sin of our nation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 17 · Study Guide',
  },
};
