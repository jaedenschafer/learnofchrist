import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 27 — The Cross
 *
 * Judas, seeing Jesus is condemned, throws down the thirty pieces of silver and
 * hangs himself. Jesus is delivered to Pilate. "Art thou the King of the Jews?"
 * Pilate finds no fault but releases Barabbas at the people&apos;s demand. Jesus is
 * scourged, mocked, led to Golgotha. On the cross: "My God, my God, why hast thou
 * forsaken me?" The veil of the temple is torn. "Truly this was the Son of God."
 * Jesus is buried in Joseph&apos;s tomb. The resurrection cannot be delayed.
 */
export const MATTHEW_27: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 27,

  estimatedMinutes: { 5: 2, 10: 5, 15: 7 },
  intros: [
    'When morning comes, the chief priests and elders of the people take counsel against Jesus to put Him to death. They bind Him, lead Him away, and deliver Him to Pontius Pilate, the Roman governor. Pilate asks: "Art thou the King of the Jews?" Jesus says: "Thou sayest." Yet He answers little else. Pilate perceives He is being delivered for envy.',
    'The crowd demands the release of Barabbas, a notorious prisoner, and the crucifixion of Jesus. Pilate washes his hands, declaring himself innocent of the blood. But he yields to the crowd. Jesus is scourged and led away to be crucified. At Golgotha, He is offered wine mingled with gall. He refuses. He is crucified between two thieves. The darkness falls. The veil of the temple is torn in two. An earthquake. The centurion and those with him, seeing the earthquake and all that is done, say: "Truly this was the Son of God."',
  ],

  sections: [
    /* ─── Matthew 27:1–44 — Trial and Crucifixion ───────────────────────── */
    {
      ref: 'Matthew 27:1–44',
      title: 'Condemned and Crucified',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(2, 'And when they had bound him, they led him away, and delivered him to Pontius Pilate the governor.'),
            plain(11, 'And Jesus stood before the governor: and the governor asked him, saying, Art thou the King of the Jews? And Jesus said unto him, Thou sayest.'),
            plain(24, 'When Pilate saw that he could prevail nothing, but that rather a tumult was made, he took water, and washed his hands before the multitude, saying, I am innocent of the blood of this just person: see ye to it.'),
            plain(35, 'And they crucified him, and parted his garments, casting lots: that it might be fulfilled which was spoken by the prophet, He divided my garments among them, and upon my vesture did they cast lots.'),
            plain(46, 'And about the ninth hour Jesus cried with a loud voice, saying, Eli, Eli, lama sabachthani? that is to say, My God, my God, why hast thou forsaken me?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt27-pilate',
          html:
            'Pilate asks Jesus: "Art thou the King of the Jews?" Jesus answers: "Thou sayest"—a response that is neither denial nor explicit claim, but leaves Pilate uncertain. Pilate finds no fault in Him. Yet the crowd demands crucifixion. Pilate is politically pressured. He washes his hands, declaring innocence. But his gesture fails to erase his guilt. He delivers the innocent to death to save his own position.',
        },
        {
          kind: 'commentary',
          id: 'matt27-barabbas',
          html:
            'The crowd chooses Barabbas—a notorious prisoner, a murderer and insurrectionist—over Jesus. They prefer a revolutionary who takes what he wants to a humble teacher who offers spiritual transformation. The choice is not merely between two individuals but between two ways: earthly power and heavenly kingdom, violence and love, self-seeking and self-giving.',
        },
        {
          kind: 'greek',
          id: 'matt27-stauroo',
          title: 'Stauroo — Crucified; Impaled',
          script: 'σταυρόω',
          translit: '<strong>Stauroo</strong> · to crucify; to fasten to a cross; to execute by crucifixion',
          description:
            'Crucifixion was the cruelest form of Roman execution, reserved for slaves and the lowest criminals. To say Jesus was crucified is to emphasize the shame, the degradation, the absolute vulnerability and suffering of the death He endured.',
        },
        {
          kind: 'commentary',
          id: 'matt27-golgotha',
          html:
            'They lead Jesus to Golgotha—the place of the skull. He is offered wine mingled with gall—a narcotic meant to dull pain. He tastes it but refuses to drink. He will endure the cross conscious and present. They crucify Him and cast lots for His garments, fulfilling the psalm: "They parted my garments among them, and upon my vesture did they cast lots." Even in His death, Scripture is fulfilled.',
        },
        {
          kind: 'commentary',
          id: 'matt27-mocked',
          html:
            'Jesus hangs between two thieves. The people pass by, wagging their heads and blaspheming: "Thou that destroyest the temple... save thyself." The chief priests mock Him: "He saved others; himself he cannot save." If He is the Son of God, let God deliver Him. The mockery echoes the temptation in the wilderness: prove your divinity, save yourself. But Jesus does not.  His refusal to save Himself is His greatest act of love.',
        },
        {
          kind: 'christ',
          id: 'matt27-christ-cross',
          title: 'Christ Connection — Christ on the Cross',
          html:
            'Jesus endures the cross as the Lamb of God, bearing the sins of the world. The innocent suffers in place of the guilty. The righteous dies for the unrighteous. His suffering is redemptive—the price paid for human sin, the sacrifice that opens the way to reconciliation with God.',
        },
        {
          kind: 'carry',
          html:
            'Standing before the cross, we encounter the depth of love—willing suffering, vulnerable exposure, absolute surrender. What does Christ&apos;s suffering mean for how you bear your own suffering? What can you surrender into His hands?',
        },
        {
          kind: 'reflection',
          id: 'matt27-cross',
          prompt: 'The crowd chose Barabbas over Jesus. If faced with the same choice, who or what would you choose? What does that reveal about your deepest values?',
        },
      ],
    },

    /* ─── Matthew 27:45–66 — Darkness, Death, and Resurrection Promise ────── */
    {
      ref: 'Matthew 27:45–66',
      title: 'The Veil Torn, the Stone Rolled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(45, 'Now from the sixth hour there was darkness over all the land unto the ninth hour.'),
            plain(46, 'And about the ninth hour Jesus cried with a loud voice, saying, Eli, Eli, lama sabachthani? that is to say, My God, my God, why hast thou forsaken me?'),
            plain(50, 'Jesus, when he had cried again with a loud voice, yielded up the ghost.'),
            plain(51, 'And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake: and the rocks rent;'),
            plain(54, 'Now when the centurion, and they that were with him, watching Jesus, saw the earthquake, and those things that were done, they feared greatly, saying, Truly this was the Son of God.'),
            plain(60, 'And when Joseph... was come, he went to Pilate, and begged the body of Jesus. Then Pilate commanded the body to be delivered.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt27-darkness',
          html:
            'From the sixth hour to the ninth hour, darkness covers the land. Midday becomes midnight. The sun fails. Darkness represents the absence of God&apos;s presence, the judgment of God, the price being paid. In that darkness, Jesus cries: "Eli, Eli, lama sabachthani? My God, my God, why hast thou forsaken me?" He experiences separation from the Father—the consequence of bearing the sins of the world.',
        },
        {
          kind: 'commentary',
          id: 'matt27-forsaken',
          html:
            'This is the deepest suffering—not physical pain alone, but the sense of abandonment. Jesus cries not as one who has lost faith, but as one quoting Psalm 22, a psalm of abandonment that culminates in vindication. His cry is agony, but it is also prayer. He addresses God. He does not despair. Even in forsakenness, He trusts.',
        },
        {
          kind: 'greek',
          id: 'matt27-katapetasma',
          title: 'Katapetasma — Veil',
          script: 'κατάπετασμα',
          translit: '<strong>Katapetasma</strong> · veil; curtain; the veil separating the holy place from the holy of holies',
          description:
            'The veil separated the holy place from the holy of holies, where God&apos;s presence dwelt. Only the high priest could enter once a year. Its tearing signals that the barrier is removed. All now have access to God through Christ.',
        },
        {
          kind: 'commentary',
          id: 'matt27-veil-torn',
          html:
            'At the moment Jesus dies, the veil of the temple is torn in two, from top to bottom. The tearing is not from human hands but from divine action. The barrier between God and humanity is destroyed. What was hidden behind the veil—God&apos;s presence, God&apos;s mercy—is now accessible to all. The old system of sacrifices and priestly mediation is complete. Christ has opened the way.',
        },
        {
          kind: 'commentary',
          id: 'matt27-centurion',
          html:
            'The centurion who executes Jesus, seeing the earthquake and witnessing all that occurs, says: "Truly this was the Son of God." The Roman soldier recognizes what the Jewish authorities refused to acknowledge. In death, Jesus is vindicated. In the very act of being condemned as a criminal, He is declared the Son of God.',
        },
        {
          kind: 'commentary',
          id: 'matt27-burial',
          html:
            'Joseph of Arimathea, a rich man and a disciple of Jesus, goes to Pilate and begs the body. Pilate commands it to be delivered. Joseph wraps it in clean linen and lays it in his own new tomb, rolling a great stone at the entrance. The burial honors Jesus&apos; humanity. Yet the stone cannot keep Him. The resurrection is near.',
        },
        {
          kind: 'christ',
          id: 'matt27-christ-sacrificial',
          title: 'Christ Connection — Christ the Final Sacrifice',
          html:
            'Jesus&apos; death fulfills all Old Testament prophecy and sacrifice. His blood cleanses. His body is broken. The veil is torn. Access to God is opened. The old covenant is fulfilled. A new covenant in His blood is sealed.',
        },
        {
          kind: 'carry',
          html:
            'The cross is where love encounters sin, where grace absorbs judgment, where the innocent pays the price for the guilty. Standing at the foot of the cross, we are invited to trust that Jesus&apos; death is sufficient, that no amount of striving can add to what He accomplished, that we are loved and redeemed.',
        },
        {
          kind: 'reflection',
          id: 'matt27-sacrifice',
          prompt: 'Jesus cried "Why hast thou forsaken me?" and yet trusted His Father. In what darkness might you need to trust God&apos;s presence even when you cannot feel it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The veil of the temple was rent in twain... Truly this was the Son of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 27 · Study Guide',
  },

  hasHebrew: false,
};
