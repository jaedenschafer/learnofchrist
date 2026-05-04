import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 26 — Betrayal and Submission
 *
 * The Passover feast approaches. Jesus is anointed at Bethany. Judas agrees to
 * betray Him for thirty pieces of silver. The Last Supper: "This is my body...
 * this is my blood of the covenant." In Gethsemane: "Not as I will, but as thou
 * wilt." The agony of prayer, sweating drops of blood. Judas betrays Him with a
 * kiss. Jesus is arrested. The trial before the Sanhedrin. Peter denies knowing Him
 * three times. The chapter culminates in submission—Christ moves toward the cross.
 */
export const MATTHEW_26: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 26,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 7 },
  opener: {
    matchTitle: /Meal of Our Lord/i,
    caption: 'Matthew 26',
  },
  intros: [
    'The hour approaches. Jesus says to His disciples: "Ye know that after two days is the feast of the passover, and the Son of man shall be delivered up to be crucified." In Bethany, at the house of Simon the leper, a woman approaches with an alabaster box of precious ointment and anoints Jesus&apos; head. Some are indignant. Jesus defends her: "Wheresoever this gospel shall be preached... there shall also this, that this woman hath done, be told for a memorial of her."',
    'Judas Iscariot, one of the twelve, goes to the chief priests and says: "What will ye give me, and I will deliver him unto you?" They covenant with him for thirty pieces of silver. That night, Jesus gathers His disciples to eat the Passover. During the meal, He takes bread, blesses it, breaks it, and gives it to them: "Take, eat; this is my body." Then He takes the cup and says: "This is my blood of the covenant, which is shed for many for the remission of sins." The old covenant is fulfilled. A new covenant, sealed in Christ&apos;s blood, is established.',
  ],

  sections: [
    /* ─── Matthew 26:1–35 — The Last Supper ──────────────────────────────── */
    {
      ref: 'Matthew 26:1–35',
      title: 'Anointing and Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(6, 'Now when Jesus was in Bethany, in the house of Simon the leper,'),
            plain(7, 'There came unto him a woman having an alabaster box of very precious ointment, and poured it on his head, as he sat at meat.'),
            plain(26, 'And as they were eating, Jesus took bread, and blessed it, and brake it, and gave it to the disciples, and said, Take, eat; this is my body.'),
            plain(27, 'And he took the cup, and gave thanks, and gave it to them, saying, Drink ye all of it;'),
            plain(28, 'For this is my blood of the covenant, which is shed for many for the remission of sins.'),
            plain(31, 'Then saith Jesus unto them, All ye shall be offended because of me this night: for it is written, I will smite the shepherd, and the sheep of the flock shall be scattered abroad.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt26-anointing',
          html:
            'A woman breaks an alabaster box of precious ointment and anoints Jesus&apos; head. Some, including Judas, object: "Why this waste? for this ointment might have been sold for much, and given to the poor." But Jesus praises her: "Why trouble ye the woman? for she hath wrought a good work upon me." In anointing His head, she anoints Him as king and, unknowingly, prepares His body for burial. Her act of love and devotion becomes a memorial[res:sefaria-exodus-12-passover].',
        },
        {
          kind: 'commentary',
          id: 'matt26-last-supper',
          html:
            'Jesus takes bread and blesses it [res:intertextual-last-supper]. "Take, eat; this is my body." He takes the cup. "This is my blood of the covenant, which is shed for many for the remission of sins." The meal recapitulates the Exodus—the Passover lamb whose blood spares the firstborn. But now Jesus Himself is the Lamb. His blood is the price of redemption. The covenant is not written on stone but sealed in His flesh.',
        },
        {
          kind: 'greek',
          id: 'matt26-soma',
          title: 'Soma — Body',
          script: 'σῶμα',
          translit: '<strong>Soma</strong> · body; the physical form; the material body',
          description:
            'Jesus says "This is my body"—not a symbol or metaphor, but a real offering of Himself. His body, given for the sins of many, becomes the sustenance of the church. To eat and drink is to enter covenant, to receive His sacrifice, to be united with Him.',
        },
        {
          kind: 'commentary',
          id: 'matt26-betrayal',
          html:
            'Jesus tells His disciples: "All ye shall be offended because of me this night." He quotes Zechariah: "I will smite the shepherd, and the sheep of the flock shall be scattered abroad." Yet He promises: "After I am risen again, I will go before you into Galilee." Even in announcing His death, Jesus speaks of resurrection. His disciples will flee. Yet He will gather them again.',
        },
        {
          kind: 'christ',
          id: 'matt26-christ-covenant',
          title: 'Christ Connection — Christ the Covenant Sacrifice',
          html:
            'Jesus fulfills all Old Testament sacrifices. He is the Passover lamb, the sin offering, the atonement. His blood seals the new covenant promised by the prophets. To believe in Christ is to enter into this covenant—to claim His death as the payment for your sins and to pledge yourself to Him as Lord.',
        },
        {
          kind: 'carry',
          html:
            'Every time we remember the Last Supper, we remember that Christ&apos;s body was broken and His blood was shed for us. What does it mean to receive that gift? To say "this is my body, broken for you" is to receive radical grace, to be claimed as His own.',
        },
        {
          kind: 'reflection',
          id: 'matt26-covenant',
          prompt: 'The woman who anointed Jesus gave what was precious without counting cost. What would it look like to give yourself to Christ with such recklessness?',
        },
      ],
    },

    /* ─── Matthew 26:36–75 — Gethsemane, Arrest, Denial ──────────────────── */
    {
      ref: 'Matthew 26:36–75',
      title: 'The Cup and the Cross',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(36, 'Then cometh Jesus with them unto a place called Gethsemane, and saith unto the disciples, Sit ye here, while I go and pray yonder.'),
            plain(39, 'And he went a little farther, and fell on his face, and prayed, saying, O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.'),
            plain(48, 'Now he that betrayed him gave them a sign, saying, Whomsoever I shall kiss, that same is he: hold him fast.'),
            plain(49, 'And forthwith he came to Jesus, and said, Hail, master; and kissed him.'),
            plain(63, 'Then said the high priest, I adjure thee by the living God, that thou tell us whether thou be the Christ, the Son of the living God.'),
            plain(64, 'Jesus saith unto him, Thou hast said: nevertheless I say unto you, Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt26-gethsemane',
          html:
            'In Gethsemane [res:bibleodyssey-gethsemane], Jesus enters His deepest agony. He takes Peter, James, and John further into the garden and prays: "O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt." The cup is His impending death, His bearing of human sin, His separation from the Father. He does not want it. Yet He submits. His will aligns with His Father&apos;s will.',
        },
        {
          kind: 'commentary',
          id: 'matt26-agony',
          html:
            'Matthew tells us Jesus was "exceeding sorrowful, even unto death." He prayed in such anguish that His sweat became as drops of blood. This is not the dignity of martyrdom but the raw human recoil from death and judgment. Yet in that very recoil, He surrenders: "Not my will, but thine, be done." Submission comes not from numbness or acceptance but from the deliberate choosing of God&apos;s will over self-preservation.',
        },
        {
          kind: 'greek',
          id: 'matt26-potterion',
          title: 'Potterion — Cup',
          script: 'ποτήριον',
          translit: '<strong>Potterion</strong> · cup; drinking cup; the cup of one&apos;s fate or destiny',
          description:
            'The cup represents Jesus&apos; destiny, the fate He must drink. In the Old Testament, the cup often symbolizes God&apos;s wrath and judgment. To drink the cup means to bear the consequence. Jesus drinks the cup meant for all humanity.',
        },
        {
          kind: 'commentary',
          id: 'matt26-betrayal-kiss',
          html:
            'Judas comes with a multitude bearing swords and staves. He greets Jesus with a kiss—the sign by which the authorities will identify Him. Jesus does not resist or rebuke Judas harshly. He says: "Friend, wherefore art thou come?" Then He submits to arrest. His disciples flee. Peter tries to defend Him with a sword, cutting off the servant&apos;s ear. Jesus rebukes him and heals the wound. "Put up again thy sword... all they that take the sword shall perish with the sword."',
        },
        {
          kind: 'commentary',
          id: 'matt26-trial',
          html:
            'Before the Sanhedrin, false witnesses testify against Jesus. Finally, the high priest adjures Jesus by the living God: "Tell us whether thou be the Christ, the Son of the living God." Jesus answers: "Thou hast said: nevertheless I say unto you, Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven." He claims to be the Son of God. This is condemned as blasphemy.',
        },
        {
          kind: 'commentary',
          id: 'matt26-peter',
          html:
            'As Jesus is being tried, Peter sits outside by a fire. A servant girl recognizes him: "Thou also wast with Jesus of Galilee." Three times, Peter denies knowing Jesus. After the third denial, the rooster crows. Peter remembers Jesus&apos; words: "Before the cock crow, thou shalt deny me thrice." Peter weeps bitterly. His faithfulness crumbled in the moment of testing.',
        },
        {
          kind: 'christ',
          id: 'matt26-christ-submitting',
          title: 'Christ Connection — Christ Submitting',
          html:
            'Jesus does not resist or flee. He walks toward the cross with eyes wide open, surrendering His will to the Father&apos;s purpose. In that submission lies our redemption. His willingness to drink the cup means we are spared. His blood cleanses us. His death restores us.',
        },
        {
          kind: 'carry',
          html:
            'Jesus teaches that all who take the sword perish with the sword. Yet His path is not violent resistance but loving submission. He submits not because He is weak but because His strength is expressed through willing sacrifice. Where do you need to let go of defending yourself and instead entrust yourself to God?',
        },
        {
          kind: 'reflection',
          id: 'matt26-will',
          prompt: 'Jesus prayed "not as I will, but as thou wilt." What is your will for your life? Where do you resist God&apos;s will? What would surrender look like?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Not as I will, but as thou wilt... This is my body... this is my blood of the covenant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 26 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-last-supper',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Last Supper — Gospel Parallels',
      url: 'https://intertextual.bible/text/matthew-26.26',
      description: 'Comparison of the Last Supper accounts across Matthew, Mark, Luke, and Paul, with theological implications for the covenant meal.',
    },
    {
      id: 'bibleodyssey-gethsemane',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gethsemane — Jesus&apos; Prayer of Submission',
      url: 'https://www.bibleodyssey.org/dictionary/gethsemane/',
      description: 'Analysis of Jesus&apos; agony in prayer and His submission to the Father&apos;s will in the face of crucifixion.',
    },
    {
      id: 'sefaria-exodus-12-passover',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 12 — The Passover Lamb',
      url: 'https://www.sefaria.org/Exodus.12',
      description: 'Old Testament foundation for understanding Jesus as the Passover Lamb whose blood is shed for the redemption of sins.',
    },
  ],

  hasHebrew: false,
};
