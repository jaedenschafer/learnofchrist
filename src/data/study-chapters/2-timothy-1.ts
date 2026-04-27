import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Timothy 1 — Power, Love, and a Sound Mind
 *
 * Paul writes from prison. The end is near. Yet his words to Timothy ring with
 * courage, not despair. He reminds Timothy that God has not given the spirit of
 * fear, but of power, and of love, and of a sound mind. This is Paul&apos;s legacy
 * to his son in the faith: not comfort, but calling. Not ease, but endurance.
 * The gospel is worth suffering for.
 */
export const SECOND_TIMOTHY_1: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 1,

  intros: [
    'Paul writes his final letter. He is in chains, awaiting execution. Rome does not recognize Christian faith as legitimate religion. The emperor is hostile. Believers are turning away from Paul for fear of association. Yet Paul does not rage or despair. He turns to Timothy with a clear-eyed encouragement. The gospel does not promise comfort in this age. It promises power to endure, love to sustain, and a mind kept clear by God&apos;s Spirit.',
    'Timothy is young. He is in a city hostile to the gospel. Pressure mounts to compromise. Paul&apos;s word is not "avoid danger" but "be strong in the grace that is in Christ Jesus." Not immunity from suffering. Not escape from the conflict. But strength, love, and clarity to face it.',
  ],

  sections: [
    /* ─── 2 Timothy 1:1–7 — Not a Spirit of Fear ───────────────────────── */
    {
      ref: '2 Timothy 1:1–7',
      title: 'Power, Love, and a Sound Mind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, an apostle of Jesus Christ by the will of God, according to the promise of life which is in Christ Jesus,'),
            plain(2, 'To Timothy, my dearly beloved son: Grace, mercy, and peace, from God the Father and Christ Jesus our Lord.'),
            plain(3, 'I thank God, whom I serve from my forefathers with a pure conscience, that without ceasing I have remembrance of thee in my prayers night and day;'),
            plain(6, 'Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands.'),
            plain(7, 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim2-apostle-will',
          html:
            'Paul opens by grounding his apostleship in God&apos;s will, not human appointment. His authority does not rest on survival or popular acclaim. It rests on divine calling. And his promise to Timothy is rooted in "the promise of life which is in Christ Jesus"—not temporal survival, but eternal life. This is what Paul will be executed for. This is what he asks Timothy to defend.',
        },
        {
          kind: 'greek',
          id: 'tim2-dynamis',
          title: 'Dynamis — Power, Strength, Might',
          script: 'δύναμις',
          translit: '<strong>Dynamis</strong> · power; strength; miracle-working power; might',
          description:
            'Dynamis is not mere authority. It is the active force to accomplish what is willed. God does not give us fear. He gives us dynamis—the power to act, to speak, to endure what comes. This power is not automatic. It must be "stirred up," awakened through prayer and submission.',
        },
        {
          kind: 'commentary',
          id: 'tim2-fear-vs-power',
          html:
            'Fear is not a gift from God. It is a craven spirit that whispers "protect yourself, hide, deny the gospel to save your skin." But God has given a different spirit: power to resist, love that casts out fear, and a sound mind—a disciplined intellect, not confused by panic. These three compose the armor of the Spirit-filled believer.',
        },
        {
          kind: 'christ',
          id: 'tim2-christ-strength',
          title: 'Christ Connection — Strength for Suffering',
          html:
            'Jesus in Gethsemane prayed so intensely that His sweat fell as blood. He faced crucifixion with full human emotion. Yet He moved toward it with resolve rooted in love for His Father and for us. This is the power Paul speaks of—not insensitivity but willingness to suffer out of love.',
        },
        {
          kind: 'carry',
          html:
            'Where does fear grip you? Where do you feel the pressure to deny or hide the faith? Paul&apos;s word is stark: God has not given you the spirit of fear. That comes from somewhere else. But you have been given power, love, and a sound mind. Trust these. When fear whispers, silence it with the truth: you are equipped. You are called. You are loved.',
        },
        {
          kind: 'reflection',
          id: 'tim2-fear-power',
          prompt: 'In what area of your life is fear most active? How would you act differently if you truly believed God has given you power, love, and a sound mind?',
        },
      ],
    },

    /* ─── 2 Timothy 1:8–18 — Suffering for the Gospel ────────────────── */
    {
      ref: '2 Timothy 1:8–18',
      title: 'Be Not Ashamed of the Gospel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(8, 'Be not thou therefore ashamed of the testimony of our Lord, nor of me his prisoner: but be thou partaker of the afflictions of the gospel according to the power of God;'),
            plain(9, 'Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace, which was given us in Christ Jesus before the world began;'),
            plain(10, 'But is now made manifest by the appearing of our Saviour Jesus Christ, who hath abolished death, and hath brought life and immortality to light through the gospel:'),
            plain(12, 'For the which cause I also suffer these things: nevertheless I am not ashamed: for I know whom I have believed, and am persuaded that he is able to keep that which I have committed unto him against that day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim2-not-ashamed',
          html:
            'Paul does not ask Timothy to be brave in the abstract. He calls him to be unashamed of three things: the testimony of the Lord, Paul himself, and the afflictions that come with the gospel. This is counterintuitive. Usually we are ashamed of suffering, of association with the condemned, of unpopular truth. Paul inverts the order. The gospel is not shameful. Denying it would be.',
        },
        {
          kind: 'greek',
          id: 'tim2-epikalumma',
          title: 'Epaischnuno — Be Ashamed',
          script: 'ἐπαισχύνομαι',
          translit: '<strong>Epaischnuno</strong> · to be ashamed; to be put to shame; to shrink back',
          description:
            'Shame is not guilt. It is the feeling that you should hide, that you and your beliefs are unworthy of public acknowledgment. Paul knows that pressure. But he refuses it. His faith is not something to hide. It is life itself.',
        },
        {
          kind: 'commentary',
          id: 'tim2-called-before-ages',
          html:
            '"Which was given us in Christ Jesus before the world began." Your salvation is not accidental. Not a backup plan. Not God&apos;s plan B after sin disrupted plan A. It was conceived in God&apos;s counsel before time itself. This gives immense dignity to your calling. You are not a latecomer. You are part of an eternal purpose.',
        },
        {
          kind: 'christ',
          id: 'tim2-christ-abolishes-death',
          title: 'Christ Connection — Victor Over Death',
          html:
            'Jesus "hath abolished death, and hath brought life and immortality to light through the gospel." This is the heart of it. Death is the ultimate fear. Christ has stripped it of its power. This is not metaphor. It is the proclamation of the resurrection. The gospel is the announcement that death has been defeated.',
        },
        {
          kind: 'carry',
          html:
            'Paul says "I know whom I have believed." Not what he has believed—though doctrinal truth matters. But whom. His faith is in a person. When fear comes, when doubts arise about doctrine or strategy, the person of Jesus stands unchanging. "And am persuaded that he is able to keep that which I have committed unto him." Have you committed your soul to Christ? Then He is faithful. Not a question of your merit. A question of His faithfulness.',
        },
        {
          kind: 'reflection',
          id: 'tim2-commitment',
          prompt: 'What does it mean to commit what matters most to Christ "against that day"? What are you still holding back?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 1 · Study Guide',
  },

  hasHebrew: false,
};
