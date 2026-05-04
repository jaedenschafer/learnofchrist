import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 18 — The Arrest and Trial
 *
 * Judas comes with a company of soldiers and officers to arrest Jesus. Peter cuts
 * off the servant&apos;s ear. Jesus says: "Put up thy sword into the sheath." He is led
 * to Annas, then to Caiaphas, where false witnesses testify. Peter denies knowing Him
 * three times. Jesus is brought before Pilate. "My kingdom is not of this world."
 * Pilate asks: "What is truth?" Yet he cannot find a charge to bring against Him,
 * even as political pressure mounts.
 */
export const JOHN_18: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 18,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /Jesus Before Pilate Second/i,
    caption: 'John 18',
  },
  intros: [
    'Judas comes with a band of soldiers and officers to arrest Jesus. Jesus steps forward and asks: "Whom seek ye?" They answer: "Jesus of Nazareth." And He says: "I am he." At that word, they draw back and fall to the ground. His authority is evident even in His arrest. Yet He does not resist. When Peter draws a sword and cuts off the servant&apos;s ear, Jesus rebukes him: "Put up thy sword into the sheath: the cup which my Father hath given me, shall I not drink it?" He goes willingly to His death.',
    'Before the high priest, witnesses testify falsely against Him. Peter, warming himself by the fire, denies even knowing Him. "I am not one of his disciples, art thou?" Three times Peter denies Him. Jesus is brought before Pilate, the Roman governor. "My kingdom is not of this world." When Pilate asks, "Art thou a king then?" Jesus responds: "To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth." Yet Pilate asks the fatal question: "What is truth?" Unable to grasp or acknowledge the truth standing before him, he turns back to the crowd, unable to find guilt, yet unwilling to defend the innocent.',
  ],

  sections: [
    /* ─── John 18:1–27 — Arrest and Denial ────────────────────────────── */
    {
      ref: 'John 18:1–27',
      title: 'I Am He',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(4, 'Jesus therefore, knowing all things that should come upon him, went forth, and said unto them, Whom seek ye?'),
            plain(5, 'They answered him, Jesus of Nazareth. Jesus saith unto them, I am he.'),
            plain(6, 'As soon then as he had said unto them, I am he, they went backward, and fell to the ground.'),
            plain(10, 'Then Simon Peter having a sword drew it, and smote the high priest&apos;s servant, and cut off his right ear. The servant&apos;s name was Malchus.'),
            plain(11, 'Then said Jesus unto Peter, Put up thy sword into the sheath: the cup which my Father hath given me, shall I not drink it?'),
            plain(25, 'And Simon Peter stood and warmed himself. They said therefore unto him, Art not thou also one of his disciples? He denied it, and said, I am not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john18-know',
          html:
            '"Jesus therefore, knowing all things that should come upon him, went forth." Jesus is not caught off guard. He is not a victim of circumstance. He knows what will happen and goes willingly. He meets His arrest with calm, even stepping forward to meet them. His surrender is voluntary.',
        },
        {
          kind: 'commentary',
          id: 'john18-i-am',
          html:
            'Jesus says simply: "I am he." These words carry the weight of God&apos;s name revealed to Moses: "I AM THAT I AM." At that utterance, the soldiers and officers fall to the ground. His identity, His presence, His authority are so evident that they cannot stand before Him. Yet He does not escape. He submits to their capture.',
        },
        {
          kind: 'greek',
          id: 'john18-ego-eimi',
          title: 'Ego Eimi — I Am',
          script: 'ἐγώ εἰμι',
          translit: '<strong>Ego Eimi</strong> · I am; the affirmation of identity and being',
          description:
            'The phrase "I am" is charged with theological significance. It echoes the divine name, Yahweh[res:bible-odyssey-pilate]. When Jesus says it, He asserts His identity as God, as the eternal one, as the source of all being. Yet He stands before armed men ready to die.',
        },
        {
          kind: 'commentary',
          id: 'john18-cup',
          html:
            'When Peter draws a sword, Jesus rebukes him: "Put up thy sword into the sheath: the cup which my Father hath given me, shall I not drink it?" The cup is the symbol of His suffering and death. The Father has given it to Him. To drink it is to fulfill His mission. No force can stop this. No disciple can prevent it. It is His appointment.',
        },
        {
          kind: 'commentary',
          id: 'john18-deny',
          html:
            'Peter, who declared "I will lay down my life for thy sake," three times denies even knowing Jesus. "I am not one of his disciples." His failure is complete. Yet Jesus prayed for him: "Simon, Simon, behold, Satan hath desired to have you, that he may sift you as wheat: but I have prayed for thee, that thy faith fail not." Even in Peter&apos;s denial, Jesus is interceding for him.',
        },
        {
          kind: 'christ',
          id: 'john18-christ-willing',
          title: 'Christ Connection — The Willing Sacrifice',
          html:
            'Jesus is not a helpless victim. He is the sovereign one, going willingly to His death. He restrains Peter. He accepts the cup His Father has given. He walks toward the cross with knowledge and purpose. His death is not inflicted upon Him. It is chosen by Him.',
        },
        {
          kind: 'carry',
          html:
            'When you fear and fail, remember: Jesus knew your failure before you did. He has prayed for you. Peter&apos;s denial was complete, yet Jesus restored Him. Your failures do not surprise Jesus. They do not end His love for you. He prays for you even when you deny Him.',
        },
        {
          kind: 'reflection',
          id: 'john18-deny-restore',
          prompt: 'Have you denied Jesus through your choices, your words, your silence? How does His intercession and restoration of Peter give you hope?',
        },
      ],
    },

    /* ─── John 18:28–40 — Trial Before Pilate ──────────────────────────── */
    {
      ref: 'John 18:28–40',
      title: 'My Kingdom Is Not of This World',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(33, 'Then Pilate entered into the judgment hall again, and called Jesus, and said unto him, Art thou the King of the Jews?'),
            plain(36, 'Jesus answered, My kingdom is not of this world: if my kingdom were of this world, then would my servants fight: but now is my kingdom not from hence.'),
            plain(37, 'Pilate therefore said unto him, Art thou a king then? Jesus answered, Thou sayest that I am a king. To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth. Every one that is of the truth heareth my voice.'),
            plain(38, 'Pilate saith unto him, What is truth? And when he had said this, he went out again unto the Jews, and saith unto them, I find in him no fault at all.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john18-king',
          html:
            'Pilate asks directly: "Art thou the King of the Jews?" It is a political question. The Romans fear a king who would challenge Caesar. But Jesus clarifies: "My kingdom is not of this world." His kingdom is not territorial, not military, not political in the worldly sense. It is spiritual, internal, transcendent.',
        },
        {
          kind: 'commentary',
          id: 'john18-truth',
          html:
            '"That I should bear witness unto the truth."[res:intertextual-truth] Jesus speaks of His mission. He has come not to establish an earthly kingdom, but to bear witness to truth. Truth about God, about humanity, about redemption, about the character of love. That witness is His kingship.',
        },
        {
          kind: 'greek',
          id: 'john18-aletheia-again',
          title: 'Aletheia — Truth',
          script: 'ἀλήθεια',
          translit: '<strong>Aletheia</strong> · truth; reality; that which is genuinely so',
          description:
            'Jesus does not merely teach truth. He is truth. He bears witness to the reality of God, the reality of redemption, the reality of love. To encounter Him is to encounter truth itself, to see the world as it actually is.',
        },
        {
          kind: 'commentary',
          id: 'john18-what-truth',
          html:
            '"Pilate saith unto him, What is truth?" Pilate asks the question that will echo through the ages. What is truth? He asks cynically, expecting no real answer. He stands before the truth incarnate, yet his cynicism prevents him from seeing. He cannot grasp or accept the reality of Christ.',
        },
        {
          kind: 'commentary',
          id: 'john18-no-fault',
          html:
            '"I find in him no fault at all."[res:iaa-gabbatha] Yet knowing this, Pilate does not release Jesus. He goes back to the crowd and gives them the choice: Jesus or Barabbas. Barabbas was a robber, a criminal. The choice is stark. Yet the crowd chooses the criminal over the innocent. Pilate, unwilling to do right despite knowing it, yields to pressure and allows injustice.',
        },
        {
          kind: 'christ',
          id: 'john18-christ-truth',
          title: 'Christ Connection — Truth Itself Judged',
          html:
            'Jesus is judged by those unable or unwilling to see truth. Pilate cannot grasp it. The priests reject it. The crowd demands death for the innocent. Yet in that very judgment, truth is revealed—the truth of human depravity, the truth of God&apos;s love offering itself for redemption, the truth that light judges those who prefer darkness.',
        },
        {
          kind: 'carry',
          html:
            'Pilate had the truth before him and could not see it. We can have the truth before us and still reject it if we are committed to falsehood. Are your eyes open to see the truth standing before you? Are you willing to align yourself with truth, even when it costs?',
        },
        {
          kind: 'reflection',
          id: 'john18-hear',
          prompt: 'Are you "of the truth" and hearing Jesus&apos; voice? What truth about Christ do you need to accept, even when it challenges your comfort?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am he. The cup which my Father hath given me, shall I not drink it? My kingdom is not of this world. I came into the world, that I should bear witness unto the truth. Every one that is of the truth heareth my voice.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 18 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-gabbatha',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Gabbatha (Pavement) Archaeological Site',
      url: 'https://www.antiquities.org.il/en/',
      description: 'Archaeological evidence of the stone pavement in Jerusalem where Pilate delivered judgment on Jesus.',
    },
    {
      id: 'bible-odyssey-pilate',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Pontius Pilate',
      url: 'https://www.bibleodyssey.org/dictionary/pontius-pilate/',
      description: 'Open-access SBL entry on the Roman prefect and his role in Jesus&apos; trial.',
    },
    {
      id: 'intertextual-truth',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 85:10 ↔ John 18:37',
      url: 'https://intertextual.bible/text/psalm-85.10/john-18.37',
      description: 'Jesus as the incarnate truth, fulfilling the Old Testament&apos;s vision of truth and righteousness.',
    },
  ],

  hasHebrew: false,
};
