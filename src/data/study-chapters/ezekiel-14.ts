import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 14 — When Idolaters Seek the Prophet
 *
 * The elders of Israel come to Ezekiel to ask for a word from God. But they come
 * with idols in their hearts. And God tells Ezekiel: speak to them, but know that
 * even if the most righteous men — Noah, Daniel, Job — were to intercede for this
 * people, they could only save themselves. Each person stands alone before God.
 * Intercession cannot substitute for individual repentance.
 */
export const EZEKIEL_14: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 14,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'The elders of Israel come to Ezekiel asking for a word from the Lord. They want guidance. They want to know what the future holds. They come seeking God through His prophet. But God sees what they do not reveal: their hearts are filled with idols. They come to consult God while still holding to false gods. And God, speaking through Ezekiel, makes clear what must be understood: there is no intercessor powerful enough to save those who refuse to turn from their idols. Not Noah. Not Daniel. Not Job. Even the greatest righteous men can only save themselves through their own faithfulness. No one can carry another into salvation. Each person stands alone before God.',
  ],

  sections: [
    {
      ref: 'Ezekiel 14:1–11',
      title: 'Idols in the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'Then came certain of the elders of Israel unto me, and sat before me.'),
            plain(2, 'And the word of the Lord came unto me, saying,'),
            plain(3, 'Son of man, these men have set up their idols in their heart, and put the stumblingblock of their iniquity before their face: should I be enquired of at all by them?'),
            plain(4, 'Therefore speak unto them, and say unto them, Thus saith the Lord God; Every man of the house of Israel that setteth up his idols in his heart, and putteth the stumblingblock of his iniquity before his face, and cometh to the prophet; I the Lord will answer him that cometh according to the multitude of his idols;'),
            plain(7, 'For every one of the house of Israel, or of the stranger that sojourneth in Israel, which separateth himself from me, and setteth up his idols in his heart, and putteth the stumblingblock of his iniquity before his face, and cometh to a prophet to enquire of him concerning me; I the Lord will answer him by myself;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk14-idols-heart',
          html:
            'The elders sit before Ezekiel, but their hearts are not with Ezekiel&apos;s God. Their idols are set up in their hearts. They ask for a word, but not a word that would require them to abandon what they love. God responds to their question by answering according to the multitude of their idols. In other words, God meets them where they actually are — holding both the false gods and their desire for a word from the true God. The answer will be judgment.',
        },
        {
          kind: 'hebrew',
          id: 'ezk14-pesel-lev',
          title: 'Pesel Levavim — "Idols in the Heart"',
          script: 'פְסִילֵי לִבָּם',
          translit: '<strong>Pesel Levavim</strong> · graven images of the heart; idols enshrined within',
          description:
            'The idols Ezekiel speaks of are not merely external objects but internal commitments. They are engraved on the heart itself. These are the loves, the loyalties, the desires that a person has chosen to place above God. One can conceal external idolatry, but the idols of the heart are visible to God.',
        },
        {
          kind: 'carry',
          html:
            'We too can come to God while holding idols in our hearts. We can seek His word while refusing to abandon what we love more than Him. We can ask for guidance while unwilling to follow it if it requires sacrifice. God sees the idols enshrined within us. He does not accept worship that is divided.',
        },
        {
          kind: 'reflection',
          id: 'ezk14-idols-held',
          prompt: 'What idols are set up in your heart? What do you hold that you would not abandon even if God asked? What would it mean to have a heart wholly turned toward God?',
        },
      ],
    },

    {
      ref: 'Ezekiel 14:12–20',
      title: 'No Intercessor Can Save Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(12, 'The word of the Lord came again to me, saying,'),
            plain(13, 'Son of man, when the land sinneth against me by trespassing grievously, then will I stretch out mine hand upon it, and will break the staff of the bread thereof, and will send famine upon it, and will cut off man and beast from it:'),
            plain(14, 'Though these three men, Noah, Daniel, and Job, were in it, they should deliver but their own souls by their righteousness, saith the Lord God.'),
            plain(16, 'Or if I bring a sword upon that land, saying, Sword, go through the land; so that I cut off man and beast from it:'),
            plain(20, 'Though Noah, Daniel, and Job, were in it, as I live, saith the Lord God, they shall deliver neither son nor daughter; they shall but deliver their own souls by their righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk14-righteousness-personal',
          html:
            'God invokes three of the most righteous men in history: Noah, who alone was righteous in a generation that deserved destruction; Daniel, who will arise in later captivity as a man of unblemished faithfulness; Job, who maintained integrity through testing. Yet even these three cannot intercede for a nation that refuses repentance. They can only save themselves through their own righteousness. No proxy righteousness exists. No one can carry another into salvation through their own faith. Each person must choose.',
        },
        {
          kind: 'christ',
          id: 'ezk14-christ-intercession',
          title: 'Christ Connection — The One Who Intercedes',
          html:
            'Christ stands as the great exception to Ezekiel&apos;s principle. Where no human can intercede for another, Christ intercedes for all. His righteousness is not merely His own but is imputed to all who believe. He stands between God and humanity, and through His death and resurrection, He opens a way for salvation that transcends the principle Ezekiel announces. Yet even Christ&apos;s intercession requires a response — faith, repentance, the willingness to receive what He offers. The door Christ opens must be entered by the individual.',
        },
        {
          kind: 'carry',
          html:
            'We cannot save others through our righteousness. We cannot carry children, spouses, parents into heaven through our faith alone. Each person must turn toward God. Each person must choose. This is both sobering and liberating — sobering because we cannot control another&apos;s salvation, liberating because we are responsible only for our own faithfulness.',
        },
        {
          kind: 'reflection',
          id: 'ezk14-personal-responsibility',
          prompt: 'Have you been trying to save someone through your own righteousness? What would it mean to release that burden and call them instead to their own encounter with God? How does it free you to focus on your own relationship with Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"They shall deliver but their own souls by their righteousness." — Ezekiel 14:14',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 14 · Study Guide',
  },

  hasHebrew: true,
};
