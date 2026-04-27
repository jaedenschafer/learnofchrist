import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const BARUCH_1: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 1,
  intros: [
    'Baruch, the scribe of Jeremiah, writes from Babylon. He gathers a scroll of confessions from those separated from Jerusalem. These are words of a people who looked at their hearts and saw truth: they have sinned and abandoned God.',
    'In Baruch 1, exiles gather to hear the scroll read aloud. As Baruch&apos;s words echo through Babylon, each feels the weight of transgression. Yet in speaking sin lies possibility of forgiveness. The confession itself is an act of faith—that God will hear, remember, and open a path home.',
  ],
  sections: [
    {
      ref: 'Baruch 1:1–14',
      title: 'The Scroll Presented',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(1, 'And these are the words of the book which Baruch wrote in Babylon,'),
          plain(3, 'And he read the words of this book in the hearing of Jeconiah and all the people that came to hear,'),
          plain(4, 'In the ears of the mighty men, and elders, and all the people, small and great, even all that dwelt at Babylon by the river Sud.'),
        ] },
        { kind: 'commentary', id: 'bar1-baruch', html: 'Baruch is Jeremiah&apos;s faithful scribe. Now in exile, he becomes the voice for the voiceless, collecting the people&apos;s confessions and making them audible. The scroll is the instrument of collective repentance. By reading it aloud, Baruch gives shape to invisible guilt and makes it something spoken and heard.' },
        { kind: 'hebrew', id: 'bar1-vidui', title: 'Vidui — Confession', script: 'וִדוּי', translit: '<strong>Vidui</strong> · confession; acknowledgment', description: 'Hebrew confession is full acknowledgment of wrongdoing, the naming of sin before God and community. In vidui, the person accepts responsibility as the first step toward restoration.' },
        { kind: 'christ', id: 'bar1-christ', title: 'Christ Connection — The One Who Confesses for Us', html: 'In exile, Baruch reads the people&apos;s confession. In the gospel, Jesus stands before God confessing on behalf of all who believe. He takes the word of repentance we cannot perfectly speak.' },
        { kind: 'carry', html: 'Baruch&apos;s scroll was read aloud. The people heard their own words reflected back. This is the power of confession—not hiding, but speaking truth in the presence of others. What confession have you avoided?' },
        { kind: 'reflection', id: 'bar1-heard', prompt: 'What would it mean to confess your sin—not in hiding, but heard by others? What makes confession difficult? What might it make possible?' },
      ],
    },
    {
      ref: 'Baruch 1:15–20',
      title: 'The Confession Spoken',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(15, 'We have sinned against the Lord our God, and shame is come upon us, and upon our fathers, from this day unto this day.'),
          plain(17, 'Now therefore hear our prayer, O Lord, and our supplications, and deliver us for thine own name&apos;s sake:'),
          plain(20, 'That we may no more depart from thy commandments.'),
        ] },
        { kind: 'commentary', id: 'bar1-shame', html: 'The people do not ask to escape consequences of sin. They ask only that God hear them. Their confession is honest acknowledgment that they turned from God. Yet even in shame, they call God "Lord." They have not abandoned their claim on His name.' },
        { kind: 'greek', id: 'bar1-metanoia', title: 'Metanoia — Turning Around', script: 'μετάνοια', translit: '<strong>Metanoia</strong> · repentance; a turning of the mind', description: 'Metanoia is not mere regret. It is complete reorientation—the whole person turning from one direction to another. The exiles turn back toward God, seeking His face.' },
        { kind: 'christ', id: 'bar1-christ-turn', title: 'Christ Connection — The Shepherd Who Turns', html: 'The exiles turn back to God in Babylon. Jesus speaks as the Shepherd who seeks the lost sheep and carries it back. But His turning is deeper—He turns toward us, laying down His life.' },
        { kind: 'carry', html: 'The people say: "Let us no more depart from thy commandments." Repentance is not a single moment but commitment to a new way of life. They ask to be restored to obedience, to right relationship with God.' },
        { kind: 'reflection', id: 'bar1-commandments', prompt: 'Where have you departed from God&apos;s way? What would it look like to turn back—not to a place, but to a life of obedience?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'We have sinned against the Lord our God. Now therefore hear our prayer, and deliver us for thine own name&apos;s sake.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 1 · Study Guide',
  },
  hasHebrew: true,
};
