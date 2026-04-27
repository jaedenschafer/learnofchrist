import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 9 — Weeping and Wisdom
 *
 * "Oh that my head were waters, and mine eyes a fountain of tears, that I
 * might weep day and night for the slain of the daughter of my people!" The
 * prophet expresses a sorrow so deep that he wishes his entire being could be
 * transformed into tears. Yet in the midst of this lamentation, God speaks
 * through Jeremiah a word of profound wisdom: "Let not the wise man glory in
 * his wisdom... but let him that glorieth glory in this, that he understandeth
 * and knoweth me." True glory is not in intellectual achievement but in knowing
 * God. This word, quoted by Paul in 1 Corinthians 1:31, points to the
 * reorientation of all values that Christ brings.
 */
export const JEREMIAH_9: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 9,

  intros: [
    'Jeremiah 9 opens with one of the most wrenching lines in Scripture. Jeremiah wishes his head were water, his eyes a fountain of tears, so that he could weep day and night for those who are dying. This is not abstract lament. This is a prophet whose heart is breaking under the weight of God&apos;s word and God&apos;s people&apos;s refusal. He wants to weep constantly. His entire being wants to become tears.',
    'Yet within this sorrow, God speaks a word that reorders all human values. "Let not the wise man glory in his wisdom, neither let the mighty man glory in his might, let not the rich man glory in his riches: But let him that glorieth glory in this, that he understandeth and knoweth me, that I am the Lord which exercise lovingkindness, judgment, and righteousness, in the earth: for in these things I delight." The true glory is not in what you know, what you can do, or what you possess. It is in knowing God—in having an intimate, relational knowledge of the One who exercises mercy and justice.',
  ],

  sections: [
    {
      ref: 'Jeremiah 9:1–11',
      title: 'The Depth of Sorrow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Oh that my head were waters, and mine eyes a fountain of tears, that I might weep day and night for the slain of the daughter of my people!'),
            plain(2, 'Oh that I had in the wilderness a lodging place of wayfaring men; that I might leave my people, and go from them! for they be all adulterers, an assembly of treacherous men.'),
            plain(3, 'And they bend their tongues like their bow for lies: but they are not valiant for the truth upon the earth; for they proceed from evil to evil, and they know not me, saith the Lord.'),
            plain(4, 'Take ye heed every one of his neighbour, and trust ye not in any brother: for every brother will utterly supplant, and every neighbour will walk with slanders.'),
            plain(5, 'And they will deceive every one his neighbour, and will not speak the truth: they have taught their tongue to speak lies, and weary themselves to commit iniquity.'),
            plain(6, 'Thine habitation is in the midst of deceit; through deceit they refuse to know me, saith the Lord.'),
            plain(8, 'Therefore thus saith the Lord of hosts, Behold, I will melt them, and try them; for how shall I do for the daughter of my people?'),
            plain(9, 'Their tongue is as an arrow shot out; it speaketh deceit: one speaketh peaceably to his neighbour with his mouth, but in heart he layeth his wait.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer9-waters',
          html: 'Jeremiah&apos;s desire is extraordinary. He does not wish merely to weep. He wishes his entire being could be transformed into tears so that he could weep perpetually, without ceasing, for those who have died as a consequence of the people&apos;s rebellion against God. This reveals the depth of the prophet&apos;s compassion and his internalization of God&apos;s grief.',
        },
        {
          kind: 'hebrew',
          id: 'jer9-sheker',
          title: 'Sheker — "Lies" (Deceit)',
          script: 'שֶׁקֶר',
          translit: '<strong>Sheker</strong> · lies; falsehood; deceit',
          description: 'The Hebrew word sheker appears repeatedly in this section. The people bend their tongue like a bow—they aim and shoot lies. They speak deceit. They have taught their tongue to speak lies. Dishonesty is not accidental; it is cultivated, practiced, perfected.',
        },
        {
          kind: 'commentary',
          id: 'jer9-bow',
          html: 'The image of the tongue as a bow that shoots arrows of lies is vivid. The tongue is a weapon of destruction. One person speaks peacefully to their neighbor with their mouth, but in their heart they lay an ambush. What is said and what is meant are in complete contradiction. In such a society, trust becomes impossible.',
        },
        {
          kind: 'commentary',
          id: 'jer9-no-know',
          html: 'Underlying all the social breakdown—the lies, the betrayal, the deceit—is one core problem: "They know not me." The people have cut themselves off from knowledge of God. And in severing themselves from Him, they have severed themselves from the source of truth, integrity, and trustworthiness.',
        },
        {
          kind: 'christ',
          id: 'jer9-christ-truth',
          title: 'Christ Connection — The Truth Made Flesh',
          html: 'In John 14:6, Jesus says, "I am the way, the truth, and the life." Christ is truth itself. To know Him is to know truth. To trust Him is to trust the one who cannot lie, who cannot deceive, whose every word is reliable and true. In a world of lies and deception, Christ stands as the foundation of all that is true and trustworthy.',
        },
        {
          kind: 'carry',
          html: 'Jeremiah&apos;s anguish over a people characterized by lies speaks to something deep in the human condition. We live in societies built on deception, where lies are normalized, where what is said hides what is meant. We contribute to this, we are shaped by it, we are wounded by it. The invitation is to know the One who cannot lie, who speaks truth, who offers truth as the foundation of all relationship.',
        },
        {
          kind: 'reflection',
          id: 'jer9-what-lie',
          prompt: 'Where are you living as if lies were truth? Where are you either telling lies or believing them? What would it mean to anchor yourself in the one who is truth itself?',
        },
      ],
    },

    {
      ref: 'Jeremiah 9:23–26',
      title: 'True Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(23, 'Thus saith the Lord, Let not the wise man glory in his wisdom, neither let the mighty man glory in his might, let not the rich man glory in his riches: But let him that glorieth glory in this, that he understandeth and knoweth me, that I am the Lord which exercise lovingkindness, judgment, and righteousness, in the earth: for in these things I delight.'),
            plain(24, 'Behold, the days come, saith the Lord, that I will punish all them which are circumcised with the uncircumcised;'),
            plain(25, 'Egypt, and Judah, and Edom, and the children of Ammon, and Moab, and all that are in the utmost corners, that dwell in the wilderness: for all these nations are uncircumcised, and all the house of Israel are uncircumcised in the heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer9-glory',
          html: 'In a single verse, Jeremiah reorders all human values. Wisdom, might, wealth—the things the world glories in—are not the true measure of a person. What matters is knowing God. Not knowing about God, but knowing God intimately, relationally. Understanding Him. This is what is worthy of glory. And the God to be known is one characterized by lovingkindness, judgment, and righteousness—mercy and justice working together.',
        },
        {
          kind: 'commentary',
          id: 'jer9-circumcised',
          html: 'God then speaks of circumcision—both physical and spiritual. The nations around Israel are uncircumcised. But more importantly, Israel itself is "uncircumcised in the heart." The external sign of the covenant is useless without the internal reality. This distinction will echo throughout the New Testament, where Paul speaks of circumcision of the heart as what truly marks God&apos;s people.',
        },
        {
          kind: 'carry',
          html: 'What would it look like to glory in knowing God rather than in your own accomplishments? To find your identity not in what you have achieved or acquired, but in your relationship with the God who exercises mercy and justice? This is the reorientation that Christ brings. It is available to anyone who turns from the false measures of success and turns toward the one who alone is worthy of glory.',
        },
        {
          kind: 'reflection',
          id: 'jer9-what-glory',
          prompt: 'What are you currently glorying in—your wisdom, your strength, your possessions? How could you reorient your life to glory instead in knowing God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let not the wise man glory in his wisdom, neither let the mighty man glory in his might, let not the rich man glory in his riches: But let him that glorieth glory in this, that he understandeth and knoweth me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 9 · Study Guide',
  },

  hasHebrew: true,
};
