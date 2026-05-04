import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 15 — The Cross
 *
 * Jesus is brought before Pilate. The chief priests accuse Him. Pilate asks:
 * "Art thou the King of the Jews?" Jesus answers: "Thou sayest it." Pilate finds
 * no fault in Him yet delivers Him to be crucified. The soldiers mock Him, place
 * a crown of thorns on His head, a purple robe on His body. They crucify Him
 * between two thieves. "My God, my God, why hast thou forsaken me?" The veil of
 * the temple is torn in two. A centurion, seeing how He died, says: "Truly this
 * man was the Son of God." Jesus is buried in the tomb of Joseph of Arimathea.
 * The cross is the center. At the cross, Jesus bears the sins of the world. At
 * the cross, the temple veil tears and access to God is opened to all. At the
 * cross, even the executioner recognizes divinity.
 */
export const MARK_15: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 15,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /The Dead Christ/i,
    caption: 'Mark 15',
  },
  intros: [
    'Mark 15 is the account of the passion and death of Jesus. He is brought before Pilate and accused by the chief priests. Pilate asks: "Art thou the King of the Jews?" Jesus answers enigmatically: "Thou sayest it." The chief priests make many accusations, but Jesus does not answer them. Pilate is astonished. He finds no fault in Him, yet he wishes to please the crowd and satisfy the chief priests. He releases Barabbas, a murderer, and delivers Jesus to be crucified.',
    'Jesus is led out to a place called Golgotha (the place of a skull). They offer Him wine mingled with myrrh, but He refuses it. They crucify Him between two thieves. The hours pass. Darkness covers the land. Jesus cries out: "Eloi, Eloi, lama sabachthani?" (My God, my God, why hast thou forsaken me?). He is thirsty. Someone offers Him sour wine. He cries out with a loud voice and expires. The veil of the temple is torn in two from top to bottom. The centurion, witnessing His death, declares: "Truly this man was the Son of God." Jesus is buried in a tomb belonging to Joseph of Arimathea, a member of the Sanhedrin who had not consented to the crucifixion.',
  ],

  sections: [
    /* ─── Mark 15:1–39 — The Crucifixion ──────────────────────────────── */
    {
      ref: 'Mark 15:1–39',
      title: 'The Son of God Forsaken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(2, 'And Pilate asked him, Art thou the King of the Jews? And he answering said unto him, Thou sayest it.'),
            plain(24, 'And when they had crucified him, they parted his garments, casting lots upon them, what every man should take.'),
            plain(34, 'And at the ninth hour Jesus cried with a loud voice, saying, Eloi, Eloi, lama sabachthani? which is, being interpreted, My God, my God, why hast thou forsaken me?'),
            plain(37, 'And Jesus cried with a loud voice, and gave up the ghost.'),
            plain(38, 'And the veil of the temple was rent in twain from the top to the bottom.'),
            plain(39, 'And when the centurion, which stood over against him, saw that he so cried out, and gave up the ghost, he said, Truly this man was the Son of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark15-pilate-king',
          html:
            'Pilate asks: "Art thou the King of the Jews?" Jesus answers: "Thou sayest it." He neither fully affirms nor fully denies the charge. He is King, but not in the way Pilate imagines. Not a political revolutionary but the King of heaven and earth. Pilate finds no guilt in Him, yet he delivers Him to crucifixion to satisfy the crowd and the chief priests. Justice is perverted. The innocent is condemned so that the guilty can be released.',
        },
        {
          kind: 'commentary',
          id: 'mark15-crucifixion',
          html:
            'The soldiers crucify Jesus between two thieves. They cast lots for His garments, fulfilling the Psalm: "They parted my garments among them, and upon my vesture did they cast lots." The inscription above His head reads: "The King of the Jews." They mock Him: "He saved others; himself he cannot save." But they do not understand: He could save Himself. He chooses not to. His willingness to suffer is redemptive.',
        },
        {
          kind: 'greek',
          id: 'mark15-crucifixion-stauros',
          title: 'Stauros — Cross',
          script: 'σταυρός',
          translit: '<strong>Stauros</strong> · cross; instrument of execution; sign of shame and death',
          description:
            'The cross (stauros) was an instrument of torture and capital punishment, reserved for criminals and slaves. For Jesus to die on the cross is for Him to be publicly humiliated and destroyed. Yet the cross becomes the means of redemption, the sign of God&apos;s love.',
        },
        {
          kind: 'commentary',
          id: 'mark15-forsaken',
          html:
            'At the ninth hour (3 PM), Jesus cries out: "Eloi, Eloi, lama sabachthani?"[res:intertextual-psalm22] (My God, my God, why hast thou forsaken me?). This is the opening line of Psalm 22, a psalm of suffering and vindication. Jesus experiences abandonment—not merely physical pain but spiritual desolation. He is separated from the Father. This is the meaning of His death: He bears the weight of human sin, the judgment that sin deserves, the alienation from God that sin produces.',
        },
        {
          kind: 'commentary',
          id: 'mark15-veil-torn',
          html:
            'As Jesus dies, the veil of the temple is torn in two from top to bottom[res:sefaria-temple-veil]. The veil separated the holy place from the most holy place, where God dwelled. No one could approach except the high priest once a year. Now the veil is torn. Access to God is opened. Through the death of Jesus, the barrier between God and humanity is removed. All who believe can now enter into God&apos;s presence.',
        },
        {
          kind: 'commentary',
          id: 'mark15-centurion',
          html:
            'A centurion—a Roman soldier, an outsider to the covenant—witnesses Jesus&apos; death and declares: "Truly this man was the Son of God."[res:bible-odyssey-divine-sonship] He does not use the title hesitantly. He proclaims it. The confession comes from one who has no stake in Jerusalem&apos;s politics, no interest in defending Jesus&apos; disciples. He sees the manner of Jesus&apos; death—the cry, the giving up of the spirit—and recognizes divinity.',
        },
        {
          kind: 'christ',
          id: 'mark15-christ-cross',
          title: 'Christ Connection — The Lamb Slain for the World',
          html:
            'The cross is the center of the gospel. In Jesus&apos; death, redemption is accomplished. He bears the sins of humanity. He experiences the separation from God that sin deserves. Yet He does so willingly, as a ransom for many, opening the way for all to be reconciled to God.',
        },
        {
          kind: 'carry',
          html:
            'The cross is not the defeat of God&apos;s plan but its culmination. What looks like failure and humiliation is the means by which God conquers sin and death. The cry of forsakenness leads to the tearing of the veil and the confession of the centurion. God&apos;s power is shown in weakness.',
        },
        {
          kind: 'reflection',
          id: 'mark15-cross-meaning',
          prompt: 'What does the cross of Jesus mean to you personally? How has His death changed your relationship with God?',
        },
      ],
    },

    /* ─── Mark 15:40–47 — Burial ──────────────────────────────────────── */
    {
      ref: 'Mark 15:40–47',
      title: 'Burial in Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(40, 'There were also women looking on afar off: among whom was Mary Magdalene, and Mary the mother of James the less and of Joses, and Salome;'),
            plain(42, 'And now when the even was come, because it was the preparation, that is, the day before the sabbath,'),
            plain(43, 'Joseph of Arimathaea, an honourable counsellor, which also waited for the kingdom of God, came, and went in boldly unto Pilate, and craved the body of Jesus.'),
            plain(46, 'And he bought fine linen, and took him down, and wrapped him in the linen, and laid him in a sepulchre which was hewn out of a stone, and rolled a stone unto the door of the sepulchre.'),
            plain(47, 'And Mary Magdalene and Mary the mother of Joses beheld where he was laid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark15-women-witness',
          html:
            'Women followers of Jesus watch from afar: Mary Magdalene, Mary the mother of James and Joses, and Salome. The male disciples have fled. The women remain, faithful to the end. They will be the first to encounter the risen Jesus. Their faithfulness in the face of Jesus&apos; death becomes the foundation of the resurrection testimony.',
        },
        {
          kind: 'commentary',
          id: 'mark15-joseph-arimathea',
          html:
            'Joseph of Arimathaea, a member of the Sanhedrin—one of those who condemned Jesus—comes boldly to ask Pilate for Jesus&apos; body. He is described as "an honourable counsellor, which also waited for the kingdom of God." He recognizes in Jesus the one he has been waiting for. He takes the body, wraps it in fine linen, and lays it in his own unused tomb.',
        },
        {
          kind: 'greek',
          id: 'mark15-mnēmeion',
          title: 'Mnēmeion — Tomb, Sepulcher',
          script: 'μνημείον',
          translit: '<strong>Mnēmeion</strong> · tomb; sepulcher; place of burial',
          description:
            'The tomb is prepared for a king, not a criminal. Joseph provides his own new tomb. This honors Jesus even in death. The resurrection will come from this place of entombment.',
        },
        {
          kind: 'commentary',
          id: 'mark15-stone-rolled',
          html:
            'Joseph rolls a stone to the door of the sepulchre. The tomb is sealed. Jesus is dead and buried. All seems finished. The kingdom hope dies with Him. Yet Mark places this burial at the seam between death and resurrection. The women see where He is laid. They will return after the Sabbath with spices to anoint Him. They will find the stone rolled away and hear the word: "He is risen."',
        },
        {
          kind: 'christ',
          id: 'mark15-christ-buried',
          title: 'Christ Connection — Death and the Promise of Resurrection',
          html:
            'Jesus&apos; burial in a sealed tomb is not the end. It is the precondition for the resurrection. The stone that seals the tomb will not prevent the rising. Death cannot hold Him. The grave is the womb from which He will emerge glorified.',
        },
        {
          kind: 'carry',
          html:
            'The burial in Joseph&apos;s tomb shows that even in death, Jesus is honored. The women&apos;s faithfulness, their knowledge of where He is laid, becomes the foundation for the resurrection testimony. Death is swallowed up. Hope endures.',
        },
        {
          kind: 'reflection',
          id: 'mark15-hope-death',
          prompt: 'When you face loss or death, what grounds your hope? How does Jesus&apos; resurrection change your understanding of death?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My God, my God, why hast thou forsaken me? The veil of the temple was rent in twain...Truly this man was the Son of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 15 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-psalm22',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 22 & the Crucifixion',
      url: 'https://intertextual.bible/text/psalms-22/mark-15.34',
      description: 'Intertextual links showing how Jesus fulfilled Psalm 22, a psalm of suffering that describes the details of the crucifixion.',
    },
    {
      id: 'sefaria-temple-veil',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Temple Veil (Exodus 26)',
      url: 'https://www.sefaria.org/Exodus.26.31-35?lang=bi',
      description: 'Torah description of the veil in the tabernacle and temple, establishing its role as the barrier between human and divine, torn by Jesus\' death.',
    },
    {
      id: 'bible-odyssey-divine-sonship',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Son of God Christology',
      url: 'https://www.bibleodyssey.org/dictionary/son-of-god/',
      description: 'Open-access entry on Jesus\' identity as God&apos;s Son, examined through the lens of the centurion&apos;s confession at the cross.',
    },
  ],

  hasHebrew: false,
};
