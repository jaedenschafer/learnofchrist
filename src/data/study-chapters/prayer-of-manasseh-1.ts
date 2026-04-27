import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Prayer of Manasseh 1 — The King&apos;s Repentance
 *
 * Manasseh, king of Judah, is captured and carried into exile in Babylon. In
 * his captivity, he turns from his former ways. He acknowledges his sins before
 * God: idolatry, violence, wickedness of every kind. He bows the knee of his
 * heart and begs mercy. His prayer is the cry of a soul seeking restoration.
 */
export const PRAYER_OF_MANASSEH_1: RichChapterContent = {
  bookSlug: 'prayer-of-manasseh',
  bookName: 'Prayer of Manasseh',
  chapter: 1,

  intros: [
    'Manasseh was a king who ruled for fifty-five years and did what was evil in the sight of the Lord. He built altars to foreign gods, shed innocent blood, and led Judah into darkness. For most of his reign, he turned away from God. Yet in captivity, something shifts. He recognizes his own need. He turns to the God he had rejected.',
    'This brief prayer is one of the Bible&apos;s most powerful testimonies to repentance. It is not the prayer of a saint but of a sinner. Manasseh names his sins without excuse. He offers no justification. He simply cries out for mercy. And in his crying, he becomes a model for all who have wandered far and wish to come home.',
  ],

  sections: [
    {
      ref: 'Prayer of Manasseh 1–13',
      title: 'The Sinner&apos;s Cry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'O Lord, Almighty God of our fathers, God of Abraham, Isaac, and Jacob, and of all their righteous seed;'),
            plain(7, 'Thou, O Lord, being full of compassion, longsuffering, and plenteous in mercy, dost repent of the evils of men.'),
            plain(10, 'I have sinned above the number of the sands of the sea: my transgressions are multiplied, O Lord, they are multiplied.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom1-sinner',
          html:
            'Manasseh begins by invoking God&apos;s character: full of compassion, longsuffering, merciful. He anchors his prayer not in his own goodness but in God&apos;s nature. Then he names his sin. The image is stunning: his transgressions are as numerous as the sands of the sea. He does not minimize. He does not excuse. He simply speaks the truth.',
        },
        {
          kind: 'hebrew',
          id: 'pom1-asham',
          title: 'Asham — Guilt; Transgression',
          script: 'אָשָׁם',
          translit: '<strong>Asham</strong> · guilt; sin; transgression',
          description:
            'Asham is the weight of one&apos;s culpability. To name asham is to accept responsibility. Manasseh carries the weight of his sins. He does not attempt to shift blame. He stands under the burden he has created.',
        },
        {
          kind: 'christ',
          id: 'pom1-christ-burden',
          title: 'Christ Connection — The One Who Bears Our Burden',
          html:
            'Manasseh stands under his guilt. Jesus comes to stand under our guilt. He takes upon Himself the weight of all transgression. In the cross, He carries what Manasseh names: the accumulated sins, multiplied beyond counting.',
        },
        {
          kind: 'carry',
          html:
            'If you have sinned greatly, Manasseh&apos;s example is for you. Do not hide. Do not excuse. Do not minimize. Name your sin before God. Speak the truth. God&apos;s mercy is greater than all your transgressions.',
        },
        {
          kind: 'reflection',
          id: 'pom1-name',
          prompt: 'What sin do you find hardest to name? What would it mean to speak it aloud before God?',
        },
      ],
    },

    {
      ref: 'Prayer of Manasseh 11–15',
      title: 'The Plea for Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(11, 'I am not worthy to behold and to see the height of heaven for the multitude of mine iniquities.'),
            plain(13, 'Now therefore I bow the knee of my heart, beseeching thee of mercy.'),
            plain(14, 'I have sinned, O Lord, I have sinned, and I acknowledge mine iniquities: I beseech thee, forgive me, I beseech thee, forgive me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom1-bow',
          html:
            'Manasseh speaks of bowing the knee of his heart. It is an interior posture—a bending of the will before God. He does not merely say words of repentance. He bows. His whole self comes before God in submission. And he repeats his plea: "Forgive me, I beseech thee, forgive me." The repetition is not empty. It is the passionate cry of a drowning man.',
        },
        {
          kind: 'greek',
          id: 'pom1-hikesia',
          title: 'Hikesia — Supplication; Entreaty',
          script: 'ἱκεσία',
          translit: '<strong>Hikesia</strong> · supplication; earnest plea; entreaty',
          description:
            'Hikesia is not a calm request. It is a desperate plea from one who has nowhere else to turn. Manasseh makes hikesia. He is not confident in his own deservingness. He appeals to God&apos;s mercy alone.',
        },
        {
          kind: 'christ',
          id: 'pom1-christ-mercy',
          title: 'Christ Connection — The Mercy Seat',
          html:
            'In the temple, the mercy seat was the place where God&apos;s mercy was manifested. Christ is our Mercy Seat. In Him, the throne of judgment becomes a throne of grace. He invites the guilty to bow the knee and find mercy.',
        },
        {
          kind: 'carry',
          html:
            'You need not be worthy. You need not deserve mercy. You need only to bow the knee and ask. God&apos;s mercy is not earned by good behavior. It is given to those who ask. This is the gospel. This is Manasseh&apos;s testimony. This can be yours.',
        },
        {
          kind: 'reflection',
          id: 'pom1-mercy',
          prompt: 'Do you believe God&apos;s mercy is available to you? What would it mean to bow the knee of your heart and ask?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have sinned, O Lord, I have sinned, and I acknowledge mine iniquities. Now therefore I bow the knee of my heart, beseeching thee of mercy. I beseech thee, forgive me, I beseech thee, forgive me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Prayer of Manasseh · Study Guide',
  },

  hasHebrew: true,
};
