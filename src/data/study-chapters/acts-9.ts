import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 9 — Saul&apos;s Conversion on the Damascus Road
 *
 * Saul, breathing threats and slaughter against the disciples, obtains letters
 * to the synagogues in Damascus to bind and bring back any believers he finds.
 * But on the road, a light flashes around him. He falls to the ground and hears
 * a voice: "Saul, Saul, why persecutest thou me?" It is Jesus. Saul is struck
 * blind and led to Damascus, where Ananias prays for him, his sight is restored,
 * and he is baptized. The persecutor becomes the persecuted, and an apostle
 * is born.
 */
export const ACTS_9: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 9,

  intros: [
    'Saul was present at Stephen&apos;s stoning, approving of his death. Now, consumed by zeal for the law and the traditions of his fathers, Saul enters the synagogues, arresting believers and bringing them in chains to Jerusalem. His fury knows no bounds. He obtains letters from the high priest to pursue the church even to Damascus, a hundred miles away.',
    'But on that road, in the moment of Saul&apos;s greatest confidence and power, everything changes. A light brighter than the sun flashes from heaven. Saul falls blind and deaf to the world around him, yet hearing a voice that will reshape his entire life. "Saul, why persecutest thou me?" In that moment, the persecutor encounters the One he has been persecuting, and his heart is turned inside out.',
  ],

  sections: [
    {
      ref: 'Acts 9:1–19',
      title: 'The Vision and the Conversion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'And Saul, yet breathing out threatenings and slaughter against the disciples of the Lord, went unto the high priest,'),
            plain(3, 'And as he journeyed, he came near Damascus: and suddenly there shined round about him a light from heaven:'),
            plain(4, 'And he fell to the earth, and heard a voice saying unto him, Saul, Saul, why persecutest thou me?'),
            plain(5, 'And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest: it is hard for thee to kick against the pricks.'),
            plain(11, 'And the Lord said unto him, Arise, and go into the street which is called Straight: and inquire in the house of Judas for one called Saul, of Tarsus: for, behold, he prayeth.'),
            plain(17, 'And Ananias went his way, and entered into the house; and putting his hands on him said, Brother Saul, the Lord, even Jesus, that appeared unto thee in the way as thou camest, hath sent me, that thou mightest receive thy sight, and be filled with the Holy Ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-breathing',
          html:
            'The description of Saul "breathing out threatenings and slaughter" is visceral. His very breath is violence. He is not a casual opponent of the church; he is consumed by fury. This is important: the conversion we are about to witness is not a small adjustment. It is a total reversal of the deepest animating force of Saul&apos;s life.',
        },
        {
          kind: 'greek',
          id: 'acts9-emporeuomai',
          title: 'Emporeuomai — Breathing Out',
          script: 'ἐμπνέω',
          translit: '<strong>Empneo</strong> · to breathe on; to breathe out; to inspire with',
          description:
            'Saul does not merely hold hostile opinions; his very life-breath is hostility. He is animated by persecution. The image suggests that to know Saul as he was, you would need only to breathe the air around him and feel the menace. His conversion is not a modification of his character; it is a resurrection.',
        },
        {
          kind: 'commentary',
          id: 'acts9-light-from-heaven',
          html:
            'The light that strikes Saul is not a gentle illumination. It is sudden and overwhelming, brighter than the sun at midday. Saul is struck blind by this light. His natural sight is taken away, yet his spiritual eyes are about to open. Blindness becomes the condition of true seeing.',
        },
        {
          kind: 'christ',
          id: 'acts9-christ-persecuted',
          title: 'Christ Connection — Christ Identifies with the Persecuted',
          html:
            'When Jesus asks, "Why persecutest thou me?" He reveals that He identifies with His suffering disciples. To persecute the church is to persecute Christ. This is the profound unity of the body of Christ—His members are so bound to Him that what is done to them is done to Him. And it is this identification that transforms Saul&apos;s understanding completely.',
        },
        {
          kind: 'carry',
          html:
            'Saul believed he was defending God when he was actually fighting against Him. How often do we defend positions, protect privileges, or attack those we perceive as threats, not realizing we are resisting God&apos;s own purposes? The grace is that even violent opposition can be met with mercy. Saul&apos;s blindness becomes his redemption.',
        },
        {
          kind: 'reflection',
          id: 'acts9-blindness-sight',
          prompt: 'Where might you be "breathing" opposition without realizing it? What would it mean for your deepest certainties to be turned upside down by an encounter with Christ?',
        },
      ],
    },

    {
      ref: 'Acts 9:20–31',
      title: 'The New Saul: From Persecutor to Apostle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(20, 'And straightway he preached Christ in the synagogues, that he is the Son of God.'),
            plain(23, 'And after that many days were fulfilled, the Jews took counsel to kill him.'),
            plain(26, 'And when Saul was come to Jerusalem, he assayed to join himself to the disciples: but they were all afraid of him, and believed not that he was a disciple.'),
            plain(27, 'But Barnabas took him, and brought him to the apostles, and declared unto them how he had seen the Lord in the way, and that he had spoken to him, and how he had preached boldly at Damascus in the name of Jesus.'),
            plain(31, 'Then had the churches rest throughout all Judaea and Galilee and Samaria, and were edified; and walking in the fear of the Lord, and in the comfort of the Holy Ghost, were multiplied.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-straightway',
          html:
            'Saul does not wait or take time to sort out his new faith. "Straightway he preached Christ." The persecutor immediately becomes the proclaimer. He goes into the very synagogues where he had come to bind believers and now proclaims that Jesus is the Son of God. The change is not gradual; it is immediate and complete.',
        },
        {
          kind: 'greek',
          id: 'acts9-exousia',
          title: 'Exousia — Authority; Boldness',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; power; ability; boldness; right',
          description:
            'Saul preaches "boldly"—not timidly or cautiously, but with full conviction. This is not the caution of a new believer trying to find his way. This is the boldness of a man who has seen the risen Christ and has been remade by that encounter. His former confidence in his righteousness is redirected as confidence in Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts9-barnabas',
          html:
            'The disciples in Jerusalem fear Saul. They know his history; they cannot yet believe his conversion is genuine. Barnabas steps forward—his very name means "son of encouragement." He vouches for Saul, tells the apostles of his vision and his bold preaching in Damascus. Barnabas becomes the bridge between Saul&apos;s old self and his new identity.',
        },
        {
          kind: 'christ',
          id: 'acts9-christ-transformation',
          title: 'Christ Connection — The Persistent Redeemer',
          html:
            'Christ does not reject Saul because of his past. He does not say, "You have persecuted My followers; I can never forgive you." Instead, Christ chooses Saul and remakes him into His greatest apostle. This is the scandal of grace: it works backward through time, rewriting the worst of our histories into the substance of our redemption.',
        },
        {
          kind: 'carry',
          html:
            'If Saul—persecutor, murderer of saints—could be transformed into Paul, the apostle to the Gentiles, then no one is irredeemable. No amount of opposition to God, no depth of blindness, is beyond the reach of Christ&apos;s grace. Your worst self, your greatest failures, are not your final word. Conversion is always possible.',
        },
        {
          kind: 'reflection',
          id: 'acts9-conversion',
          prompt: 'What part of you would resist being turned upside down? Where is your Damascus road? What part of you most needs to encounter the risen Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And he fell to the earth, and heard a voice saying unto him, Saul, Saul, why persecutest thou me? And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 9 · Study Guide',
  },

  hasHebrew: false,
};
