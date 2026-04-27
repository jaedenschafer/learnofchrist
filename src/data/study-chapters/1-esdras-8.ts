import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Esdras 8 — Ezra&apos;s Journey and Commission
 *
 * Ezra, a scribe skilled in the law of Moses, is commissioned by the king to
 * travel to Jerusalem and teach the people God&apos;s commandments. He leads a
 * second group of exiles home. Upon arrival, he hears that the people have
 * taken foreign wives and compromised their covenant. Ezra grieves.
 */
export const FIRST_ESDRAS_8: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 8,

  intros: [
    'Ezra is not a warrior or a king, but a scholar. He is devoted to the law of God. When the king grants him permission to return to Jerusalem with a second wave of exiles, Ezra sees the opportunity as sacred. He will bring the law. He will teach the people. He will strengthen their covenant.',
    'But upon arrival, Ezra receives disturbing news. The people have married foreign wives. They have begun to adopt pagan customs. The very commandments he came to teach are being broken. Ezra is devastated. His mission has arrived at a moment of crisis. The people are forgetting who they are.',
  ],

  sections: [
    {
      ref: '1 Esdras 8:1–25',
      title: 'Ezra&apos;s Commission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'After these things, when the reign of Artaxerxes king of Persia was established, Esdras went up from Babylon.'),
            plain(8, 'And the king gave him commandment to do all these things, and to make a commandment unto all the treasurers and governors.'),
            plain(9, 'That whatsoever Esdras the priest and reader of the law of the Lord commandeth, should be done unto him, without fail.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras8-commission',
          html:
            'Ezra is not returning as a fugitive but as an official emissary of the king. The king grants him authority to implement the law of God. This is remarkable: a pagan king endorses the teaching of Israel&apos;s law. Ezra travels with royal backing, and the law travels with him.',
        },
        {
          kind: 'hebrew',
          id: 'esdras8-sofer',
          title: 'Sofer — Scribe',
          script: 'סֹוף‍ֵר',
          translit: '<strong>Sofer</strong> · scribe; one who writes; scholar',
          description:
            'Ezra is a sofer—one who knows the law because he has studied it, copied it, meditated on it. The scribe is not merely a copyist but a teacher, a keeper of wisdom. In Jewish tradition, the sofer is essential to transmission of the covenant.',
        },
        {
          kind: 'christ',
          id: 'esdras8-christ-teacher',
          title: 'Christ Connection — The Teacher of the Law',
          html:
            'Jesus teaches with authority that exceeds the scribes. He does not merely repeat the law; He fulfills it and transcends it. He is not a sofer recording words but the Living Word Himself speaking.',
        },
        {
          kind: 'carry',
          html:
            'Ezra devoted his life to knowing and teaching God&apos;s word. This was not academic exercise. It was his calling, his passion. Do you have such passion for God&apos;s word? Not as duty, but as devotion?',
        },
        {
          kind: 'reflection',
          id: 'esdras8-devoted',
          prompt: 'How devoted are you to learning God&apos;s word? What would it mean to approach it with Ezra&apos;s passion?',
        },
      ],
    },

    {
      ref: '1 Esdras 8:63–90',
      title: 'The Crisis Discovered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(68, 'And Esdras the priest stood up, and said unto them, Ye have transgressed the law, and married strange women, thereby to increase the trespasses of Israel.'),
            plain(85, 'Separate yourselves from the strangers of the land, and from the strange women.'),
            plain(88, 'Then all the congregation answered with a loud voice, Great is the word that thou hast spoken: as thou hast said, so will we do.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras8-crisis',
          html:
            'Ezra confronts the people with their transgression. The intermarriage is not a personal matter; it is a covenant violation. To marry those outside the covenant is to weaken the covenant itself. Yet when Ezra speaks, the people respond. They recognize the truth and commit to reform. Confession precedes restoration.',
        },
        {
          kind: 'greek',
          id: 'esdras8-parabasis',
          title: 'Parabasis — Transgression',
          script: 'παράβασις',
          translit: '<strong>Parabasis</strong> · transgression; violation; going beyond the line',
          description:
            'Parabasis is the violation of a law. To transgress is to go beyond the boundary set by God. The returnees have done this. Ezra calls them to account. But accountability leads to repentance and restoration.',
        },
        {
          kind: 'christ',
          id: 'esdras8-christ-rebuke',
          title: 'Christ Connection — The Loving Rebuke',
          html:
            'Jesus rebukes the churches in Revelation, but with the purpose of repentance and restoration. His rebuke is an act of love. "Those whom I love, I reprove," He says. Ezra&apos;s rebuke reflects the heart of Christ: to call us back to covenant, to wholeness.',
        },
        {
          kind: 'carry',
          html:
            'When you are confronted with your own transgression, how do you respond? The people of Jerusalem respond with immediate acknowledgment: "Great is the word. We will do it." This is the path to restoration.',
        },
        {
          kind: 'reflection',
          id: 'esdras8-confronted',
          prompt: 'When has God confronted you through someone who spoke truth in love? How did you respond? What happened?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Ye have transgressed the law, and married strange women, thereby to increase the trespasses of Israel. Separate yourselves from the strangers of the land, and from the strange women. Then all the congregation answered, Great is the word that thou hast spoken: as thou hast said, so will we do.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 8 · Study Guide',
  },

  hasHebrew: true,
};
