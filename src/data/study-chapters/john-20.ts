import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 20 — The Resurrection
 *
 * Mary Magdalene comes to the tomb early, while it is still dark. The stone is
 * rolled away. She runs to tell Peter and John. They come and see the empty tomb,
 * the linen clothes lying, the napkin folded. Mary encounters Jesus, though she
 * does not recognize Him until He speaks her name: "Mary." Thomas was not there
 * when Jesus appeared. He declares: "Except I shall see in his hands the print of
 * the nails... I will not believe." Eight days later, Jesus appears and says to
 * Thomas: "Reach hither thy finger, and behold my hands." Thomas cries: "My Lord
 * and my God!"
 */
export const JOHN_20: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 20,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /Apparition of Jesus to/i,
    caption: 'John 20',
  },
  intros: [
    'Early in the morning, while it is still dark, Mary Magdalene comes to the tomb. The stone is rolled away. She runs to tell Peter and the beloved disciple: "They have taken away the Lord out of the sepulchre, and we know not where they have laid him." Peter and John come and see the empty tomb. They see the linen clothes lying as they were, the napkin that had covered His face rolled up in a place by itself. They believe. Yet they do not yet understand that He must rise from the dead.',
    'Mary Magdalene remains at the tomb, weeping. She encounters a figure she takes for the gardener. Then He speaks her name: "Mary." She recognizes the risen Lord. He says: "Touch me not; for I am not yet ascended to my Father: but go to my brethren, and say unto them, I ascend unto my Father, and your Father; and to my God, and your God." The separation is temporary. The reunion is assured. Thomas was not there when Jesus appeared. He refuses to believe until he sees and touches the wounds. Eight days later, Jesus appears to Thomas. And Thomas, touching the risen Christ, cries: "My Lord and my God!"',
  ],

  sections: [
    /* ─── John 20:1–23 — The Resurrection and Appearances ────────────────── */
    {
      ref: 'John 20:1–23',
      title: 'I Am Not Yet Ascended',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'The first day of the week cometh Mary Magdalene early, when it was yet dark, unto the sepulchre, and seeth the stone taken away from the sepulchre.'),
            plain(5, 'And stooping down, and looking in, she seeth the linen clothes lying; yet went she not in.'),
            plain(11, 'But Mary stood without at the sepulchre weeping: and as she wept, she stooped down, and looked into the sepulchre,'),
            plain(14, 'And when she had thus said, she turned herself back, and saw Jesus standing, and knew not that it was Jesus.'),
            plain(16, 'Jesus saith unto her, Mary. She turned herself, and saith unto him, Rabboni; which is to say, Master.'),
            plain(19, 'Then the same day at evening, being the first day of the week, when the doors were shut where the disciples were assembled for fear of the Jews, came Jesus and stood in the midst, and saith unto them, Peace be unto you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john20-dark',
          html:
            '"The first day of the week cometh Mary Magdalene early, when it was yet dark." She comes in darkness, seeking a dead body to anoint. She finds an empty tomb. She does not yet understand resurrection. She thinks the body has been taken. Her sorrow is real, her confusion complete.',
        },
        {
          kind: 'commentary',
          id: 'john20-weeping',
          html:
            'Mary stands weeping outside the tomb. Even when she sees the risen Christ, she does not recognize Him. Her grief blinds her. She mistakes Him for the gardener. Her eyes do not work until He speaks. "Mary." At the sound of her name, recognition comes. The risen Christ speaks her name personally. He does not announce Himself. He calls her by name.',
        },
        {
          kind: 'greek',
          id: 'john20-rabboni',
          title: 'Rabboni — Teacher / Master',
          script: 'ῥαββονί',
          translit: '<strong>Rabboni</strong> · my teacher; my master; a term of profound respect and affection',
          description:
            'Mary does not say "Rabbi" (a formal address) but "Rabboni"—my Teacher, my Master, expressing deep personal attachment[res:iaa-garden-tomb]. The risen Christ is not a stranger returned from the dead. He is the same Lord she knew, yet transformed.',
        },
        {
          kind: 'commentary',
          id: 'john20-ascended',
          html:
            '"Touch me not; for I am not yet ascended to my Father." Jesus does not allow clinging. The form of relationship is changing. He will ascend. He will return to the Father. Yet the bond is not broken. "Go to my brethren, and say unto them, I ascend unto my Father, and your Father; and to my God, and your God." In His ascension, He brings His disciples with Him into the Father&apos;s presence.',
        },
        {
          kind: 'commentary',
          id: 'john20-peace',
          html:
            'When Jesus appears to the disciples, He greets them: "Peace be unto you." The first word of the risen Christ is peace. Not judgment, not condemnation for their failure, but peace. The peace that comes from knowing that death has been defeated, that their Lord is alive, that redemption is accomplished.',
        },
        {
          kind: 'christ',
          id: 'john20-christ-risen',
          title: 'Christ Connection — The Living Lord',
          html:
            'The resurrection is not merely a spiritual concept. It is literal, physical, personal. Jesus appears to Mary, to the disciples, eats fish, invites touch, yet is transformed. The resurrection vindicates all that Jesus taught and promised. Death could not hold Him. His kingdom was inaugurated.',
        },
        {
          kind: 'carry',
          html:
            'You may not immediately recognize the risen Christ. You may mistake Him for someone else. Grief, confusion, fear may blind your eyes. But He knows your name. He calls you by name. When you hear His voice, recognition comes. And with recognition comes the peace that only He can give.',
        },
        {
          kind: 'reflection',
          id: 'john20-mary',
          prompt: 'What prevents you from recognizing Jesus&apos; presence in your life? What would change if you heard Him call your name?',
        },
      ],
    },

    /* ─── John 20:24–31 — Thomas and the Blessed ────────────────────────── */
    {
      ref: 'John 20:24–31',
      title: 'My Lord and My God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(24, 'But Thomas, one of the twelve, called Didymus, was not with them when Jesus came.'),
            plain(25, 'The other disciples therefore said unto him, We have seen the Lord. But he said unto them, Except I shall see in his hands the print of the nails, and put my finger into the print of the nails, and thrust my hand into his side, I will not believe.'),
            plain(27, 'Then saith he to Thomas, Reach hither thy finger, and behold my hands; and reach hither thy hand, and thrust it into my side: and be not faithless, but believing.'),
            plain(28, 'And Thomas answered and said unto him, My Lord and my God!'),
            plain(30, 'And many other signs truly did Jesus before his disciples, which are not written in this book:'),
            plain(31, 'But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john20-thomas',
          html:
            'Thomas was not present when Jesus appeared. The other disciples tell him: "We have seen the Lord." But Thomas demands empirical proof. He will not believe unless he can see the marks and touch the wounds. His doubt is not unique. It is the doubt of anyone who comes to faith after the resurrection, who does not see yet believes.',
        },
        {
          kind: 'commentary',
          id: 'john20-doubt',
          html:
            'Jesus appears to Thomas. Rather than condemning his doubt, Jesus invites his verification. "Reach hither thy finger, and behold my hands."[res:intertextual-resurrection] The wounds are still there. The risen body bears the marks of suffering. The crucifixion did not erase. It marks the risen Christ forever.',
        },
        {
          kind: 'greek',
          id: 'john20-apistos',
          title: 'Apistos — Faithless',
          script: 'ἄπιστος',
          translit: '<strong>Apistos</strong> · faithless; unbelieving; distrustful',
          description:
            'Jesus says to Thomas: "Be not faithless, but believing." Not "be not doubtful" but "be not faithless." There is a difference. Faith is not the absence of question. It is the willingness to trust despite question, to step forward despite uncertainty.',
        },
        {
          kind: 'commentary',
          id: 'john20-my-god',
          html:
            'Thomas says: "My Lord and my God!" This is the highest confession in Scripture. Thomas does not merely acknowledge resurrection. He declares Jesus&apos; divinity. In the risen Christ, Thomas sees the presence of God. The one who died is now recognized as God.',
        },
        {
          kind: 'commentary',
          id: 'john20-written',
          html:
            '"These are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name."[res:bible-odyssey-resurrection] The gospel is written so that those who did not see the resurrection bodily can still believe. Your faith is not less real because you have not seen. The text testifies. The Spirit convinces. You believe and have life.',
        },
        {
          kind: 'christ',
          id: 'john20-christ-goal',
          title: 'Christ Connection — Life Through His Name',
          html:
            'The goal of the gospel is not spectacle or proof. It is faith—trust in Jesus as Lord and God—and through that faith, eternal life. The signs recorded point beyond themselves to Jesus&apos; identity. Believing in Him, you possess life.',
        },
        {
          kind: 'carry',
          html:
            'You have not seen the risen Christ. Yet these words are written that you might believe. Your faith is not less real than Thomas&apos;s. It may be harder, requiring trust without sight. But Jesus says to you as He said to Thomas: "Blessed are they that have not seen, and yet have believed."',
        },
        {
          kind: 'reflection',
          id: 'john20-blessed',
          prompt: 'You have not seen, yet you are called to believe. What does it mean to trust in Jesus as "Lord and God" without physical encounter? How does faith without sight make your confession more profound?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Mary. He is risen. My Lord and my God. These are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 20 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-garden-tomb',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'First-Century Burial Practices in Jerusalem',
      url: 'https://www.antiquities.org.il/en/',
      description: 'Archaeological evidence of Jewish burial caves, sealed rolling stones, and tomb arrangements in Jesus&apos; era.',
    },
    {
      id: 'intertextual-resurrection',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah 26:19 ↔ John 20:9–10',
      url: 'https://intertextual.bible/search?q=Isaiah+26+19+John+20+9+10',
      description: 'The resurrection as fulfillment of Old Testament hope for bodily resurrection and return to life.',
    },
  ],

  hasHebrew: false,
};
