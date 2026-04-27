import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FIRST_ESDRAS_2: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 2,
  intros: [
    'After decades in Babylon, the exiles receive news that transforms everything. Cyrus, the Persian king, issues a decree: the Jews may return and rebuild their temple. The decree is more than permission—it includes treasure for the work. For the first time since exile began, the way home is open.',
    'But the return is not unopposed. Neighbors—those who occupied the land during exile—oppose the rebuilding. They send letters to the Persian king, questioning the exiles&apos; loyalty. Artaxerxes halts the work. The returnees face a test of faith: will they trust God to complete what He has begun?',
  ],
  sections: [
    {
      ref: '1 Esdras 2:1–4',
      title: 'The Edict of Return',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(1, 'Now when these things were done, in the second year of the reign of Darius, the Lord stirred up the spirit of Cyrus king of Persia to make a proclamation.'),
          plain(3, 'Thus saith Cyrus: The Lord God of heaven hath given me all the kingdoms of the earth; and he hath commanded me to build him a house at Jerusalem in Judea.'),
          plain(4, 'Who is there among you of all his people? let his God be with him, and let him go up to Jerusalem, which is in Judea, and build the house of the Lord God of Israel.'),
        ] },
        { kind: 'commentary', id: 'esdras2-edict', html: 'The decree is remarkable. Cyrus, a pagan king, acknowledges the God of Israel and attributes to Him his own dominion. Whether from genuine faith or strategic wisdom, Cyrus becomes the instrument of God&apos;s restoration. He not only permits the return; he mandates it and funds it. The exiles&apos; return is possible and supported.' },
        { kind: 'hebrew', id: 'esdras2-shivat', title: 'Shivat — Return', script: 'שִׁיבַת', translit: '<strong>Shivat</strong> · return; restoration', description: 'The return from exile is not merely historical movement. It is restoration of God&apos;s purposes. To return to Jerusalem is to return to the land of promise, to the place where God&apos;s presence is manifested. Shivat is always more than geography; it is covenant restored.' },
        { kind: 'christ', id: 'esdras2-christ-decree', title: 'Christ Connection — The Word That Opens Doors', html: 'Cyrus speaks a word, and the way is opened. Jesus speaks a word, and the dead rise. He speaks to the sea, and it obeys. The Word of God has power to create, to restore, to remake all things.' },
        { kind: 'carry', html: 'The exiles had no power to liberate themselves. They could only wait. In God&apos;s time, the way was opened by an unexpected hand. What door are you waiting for God to open?' },
        { kind: 'reflection', id: 'esdras2-waiting', prompt: 'Have you ever waited for God to open a door that seemed permanently shut? What happened? How did you know when to step through?' },
      ],
    },
    {
      ref: '1 Esdras 2:16–30',
      title: 'Opposition and Halt',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(16, 'Now the adversaries of Judah and Benjamin heard that the temple of the Lord God of Israel was being built.'),
          plain(22, 'Then the people of the land weakened the hands of the people of Judas, and troubled them in building, and made their counsel of none effect.'),
          plain(30, 'At that time the work in the house of the Lord in Jerusalem was hindered; and it continued to be hindered until the second year of the reign of Darius king of Persia.'),
        ] },
        { kind: 'commentary', id: 'esdras2-hindrance', html: 'Opposition arises immediately. The adversaries fear a strong Jewish nation will threaten their power. They do not openly attack; they use letters and accusations. They poison the ear of the king. The work stops. The exiles must watch the half-built temple and wonder: will it ever be finished?' },
        { kind: 'greek', id: 'esdras2-antidikos', title: 'Antidikos — Adversary', script: 'ἀντίδικος', translit: '<strong>Antidikos</strong> · adversary; opponent; accuser', description: 'The adversaries are not mere rivals. They speak against, accuse, work to undermine. In the spiritual life, the same power opposes the building of God&apos;s kingdom. But the ultimate adversary cannot prevail.' },
        { kind: 'christ', id: 'esdras2-christ-build', title: 'Christ Connection — The Builder Who Cannot Be Stopped', html: 'Jesus says: "On this rock I will build my church, and the gates of hell will not prevail against it." The work of God cannot be hindered—not by opposition, not by kings, not by the combined power of the world.' },
        { kind: 'carry', html: 'Work for God will meet opposition. That is not a sign of failure; it is a sign of significance. The fiercest opposition comes against the most important works. Stand firm.' },
        { kind: 'reflection', id: 'esdras2-opposition', prompt: 'What work have you undertaken that has faced opposition? Did you see opposition as a sign to stop or a reason to continue?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Thus saith Cyrus: The Lord God of heaven hath given me all the kingdoms of the earth; and he hath commanded me to build him a house at Jerusalem. Who is there among you? let his God be with him, and let him go up to Jerusalem.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 2 · Study Guide',
  },
  hasHebrew: true,
};
