import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 19 — Ephesus; The Diana Riot
 *
 * Paul comes to Ephesus and preaches mightily in the synagogue and daily in
 * the hall of Tyrannus. Special miracles occur—handkerchiefs touched by Paul
 * heal the sick and cast out demons. But the gospel threatens the livelihood of
 * those who make silver shrines of Diana. A riot erupts. The silversmiths stir
 * the crowd, "Great is Diana of the Ephesians." The city is in confusion, yet
 * through it all, the word of God grows mightily and prevails.
 */
export const ACTS_19: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 19,

  intros: [
    'Ephesus is the center of the worship of Diana—a temple considered one of the wonders of the ancient world. In this city, Paul preaches with such power that special miracles occur. Handkerchiefs and aprons touched by Paul heal the sick and cast out evil spirits. The name of Jesus is magnified.',
    'But there are those who profit from the old religion. Demetrius, a silversmith who makes shrines of Diana, watches his business threatened. He calls together the craftsmen whose livelihood depends on the worship of the goddess. They stir the crowd into a frenzy: "Great is Diana of the Ephesians!" The city erupts in confusion. Yet even in the riot, the gospel advances. The word of God grows mightily and prevails.',
  ],

  sections: [
    {
      ref: 'Acts 19:1–20',
      title: 'The Miracles and the Name of Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(11, 'And God wrought special miracles by the hands of Paul:'),
            plain(12, 'So that from his body were brought unto the sick handkerchiefs or aprons, and the diseases departed from them, and the evil spirits went out of them.'),
            plain(17, 'And this was known to all the Jews and Greeks also dwelling at Ephesus; and fear fell on them all, and the name of the Lord Jesus was magnified.'),
            plain(18, 'And many that believed came, and confessed, and shewed their deeds.'),
            plain(20, 'So mightily grew the word of God and prevailed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-miracles',
          html:
            'The miracles in Ephesus are extraordinary. Even garments that have touched Paul&apos;s skin carry healing power. This is not Paul&apos;s power, but the power of the risen Christ working through him. The miracles are not mere signs; they are declarations that Jesus is alive, that His authority extends to heal and deliver.',
        },
        {
          kind: 'greek',
          id: 'acts19-dynamis-special',
          title: 'Dynamis — Special Miracles',
          script: 'δύναμις',
          translit: '<strong>Dynamis</strong> · power; might; works of power; miraculous deeds',
          description:
            'These are not ordinary miracles, but "special" ones—uncommon works of power that testify to the extraordinary presence of God. The miracles are not performed because of Paul&apos;s faith or virtue, but because Christ&apos;s name is being proclaimed with power.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-magnified',
          title: 'Christ Connection — The Name Above All Names',
          html:
            'The fear that falls on all the Jews and Greeks when they see the miracles is the beginning of wisdom. They recognize that the name of Jesus carries power that cannot be explained by ordinary means. The miracles magnify not Paul, but Jesus. And in magnifying Jesus, they call all to alignment with His authority.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age skeptical of miracles. We are taught to explain everything naturally, psychologically, scientifically. But the early church lived in the conviction that God still acts, that the risen Christ still heals and delivers. Where might you be limiting the possibility of God&apos;s power in your life?',
        },
        {
          kind: 'reflection',
          id: 'acts19-power',
          prompt: 'Have you witnessed or experienced a miracle—something that cannot be explained except by God&apos;s direct action? How does that encounter change your understanding of Christ&apos;s ongoing power?',
        },
      ],
    },

    {
      ref: 'Acts 19:23–41',
      title: 'The Diana Riot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(25, 'Whom he called together with the workmen of like occupation, and said, Sirs, ye know that by this craft we have our wealth.'),
            plain(27, 'So that not only this our craft is in danger to be set at nought; but also that the temple of the great goddess Diana should be despised, and her magnificence should be destroyed, whom all Asia and the world worshippeth.'),
            plain(28, 'And when they heard these sayings, they were full of wrath, and cried out, saying, Great is Diana of the Ephesians.'),
            plain(32, 'Some therefore cried one thing, and some another: for the assembly was confused; and the more part knew not wherefore they were come together.'),
            plain(40, 'For we are in danger to be called in question for this day&apos;s uproar, and there is no cause whereby we may give an account of this concourse.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts19-profit',
          html:
            'Demetrius is not motivated by religious zeal. He is motivated by economics. "By this craft we have our wealth," he tells the workers. The issue is not doctrine or truth, but profit. Those who benefit from false religion or false systems have everything to lose when the truth is proclaimed.',
        },
        {
          kind: 'greek',
          id: 'acts19-thorubos',
          title: 'Thorubos — Uproar; Tumult',
          script: 'θόρυβος',
          translit: '<strong>Thorubos</strong> · uproar; tumult; noise; confusion',
          description:
            'The riot is a "thorubos"—noise and confusion without understanding. The crowd cries, "Great is Diana," but the text says they do not even know why they came together. They are moved by emotion and economic fear, not by reasoned conviction.',
        },
        {
          kind: 'christ',
          id: 'acts19-christ-unshakeable',
          title: 'Christ Connection — The Unshakeable Kingdom',
          html:
            'The gospel provokes opposition because it threatens systems of power and profit built on falsehood. But the truth cannot be silenced by riots. The word of God continues to grow and prevail even in the midst of the uproar. Christ&apos;s kingdom cannot be shaken by human fury.',
        },
        {
          kind: 'carry',
          html:
            'When you speak truth, expect opposition from those who profit from lies. It is not personal; it is structural. But do not be intimidated. The word of God prevails. Not through force or cleverness, but through the persistent power of truth proclaimed in faith.',
        },
        {
          kind: 'reflection',
          id: 'acts19-opposition',
          prompt: 'What systems of falsehood or injustice might your faith threaten? Where are you called to speak truth even when opposition arises?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Great is Diana of the Ephesians. So mightily grew the word of God and prevailed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 19 · Study Guide',
  },

  hasHebrew: false,
};
