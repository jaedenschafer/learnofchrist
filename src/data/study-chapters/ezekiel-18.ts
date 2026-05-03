import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 18 — The Soul That Sinneth
 *
 * "The soul that sinneth, it shall die." Not the soul of his father. Not the
 * house of his father. The soul that sinneth. Ezekiel breaks the assumption of
 * collective guilt—that children inherit the judgment of their parents. Instead,
 * each person stands alone before God, responsible for his own choices. A
 * righteous man may have a wicked son. A wicked man may have a righteous son.
 * What matters is not lineage but turning. "I have no pleasure in the death of
 * him that dieth, saith the Lord God: wherefore turn yourselves, and live ye."
 * The call cuts across all categories: turn, and you will live.
 */
export const EZEKIEL_18: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 18,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Israel had a proverb: "The fathers have eaten a sour grape, and the children&apos;s teeth are set on edge." In other words, the sins of the father are visited upon the son. Jeremiah and Ezekiel both challenge this. Ezekiel does so forcefully. He describes a righteous man—one who walks in God&apos;s statutes, who does not oppress, who restores pledges, who gives bread to the hungry. Such a man will live. Then his son becomes a sinner. That son will die. The righteousness of the father does not transfer. Nor does the sin.',
    'This is liberation. It is also burden. Each person is responsible for himself. No one can hide behind his parents&apos; goodness or blame his parents&apos; failure. And God wants to make clear: He takes no pleasure in death. His desire is that sinners turn and live. The God of judgment is also, always, the God who calls to repentance.',
  ],

  sections: [
    {
      ref: 'Ezekiel 18:1–9',
      title: 'The Righteous Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(2, 'What mean ye, that ye use this proverb concerning the land of Israel, saying, The fathers have eaten sour grapes, and the children&apos;s teeth are set on edge?'),
            plain(4, 'Behold, all souls are mine; as the soul of the father, so also the soul of the son is mine: the soul that sinneth, it shall die.'),
            plain(5, 'But if a man be just, and do that which is lawful and right;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-soul-turns',
          html: '<p>Each soul answers for itself. Turn from sin, live. Turn toward evil, die. God offers the choice; you make the move.</p>[res:babylonian-exile-context]',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(6, 'And hath not eaten upon the mountains, neither hath lifted up his eyes to the idols of the house of Israel, neither hath defiled his neighbour&apos;s wife, neither hath come near to a menstruous woman,'),
            plain(7, 'And hath not oppressed any, but hath restored to the debtor his pledge, hath spoiled none by violence, hath given his bread to the hungry, and hath covered the naked with a garment;'),
            plain(8, 'He that hath not given forth upon usury, neither hath taken any increase, that hath withdrawn his hand from iniquity, hath executed true judgment between man and man,'),
            plain(9, 'Hath walked in my statutes, and hath kept my judgments, to deal truly; he is just, and shall surely live, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek18-souls',
          html: '"Behold, all souls are mine." God claims radical ownership. The soul is not the property of family lineage or tribal identity. Each person stands individually before God, owned by Him, answerable to Him. The proverb that blames parents for children&apos;s suffering assumes that sin works like inheritance—you are marked by your family&apos;s failure. But God says: No. Each soul is mine. Each soul will answer for itself[res:gog-magog-bibleodyssey].',
        },
        {
          kind: 'commentary',
          id: 'ezek18-righteous',
          html: 'Then Ezekiel catalogs the righteous man: he does not eat on the mountains (worship idols), does not lift his eyes to idols, does not defile his neighbor&apos;s wife, does not oppress, restores pledges, does not rob, gives bread to the hungry, covers the naked. This is not mystical righteousness. It is concrete, visible, relational. It touches how you treat others—the poor, the naked, the debtor. And such a man "shall surely live."',
        },
        {
          kind: 'hebrew',
          id: 'ezek18-tzaddik',
          title: 'Tzaddik — "Just" (Righteous)',
          script: 'צַדִּיק',
          translit: '<strong>Tzaddik</strong> · just, righteous, one who acts rightly in relation to others',
          description:
            'Tzaddik does not mean morally perfect. It means one who acts justly in relationship—who gives what is owed, who treats others fairly, who acts in accordance with covenant. A tzaddik is one whose life is oriented toward right relationship with God and others.',
        },
        {
          kind: 'reflection',
          id: 'ezek18-responsible',
          prompt: 'What is one area of your life where you have blamed circumstances or your upbringing, rather than taking responsibility for your own choices?',
        },
      ],
    },

    {
      ref: 'Ezekiel 18:10–20',
      title: 'The Wicked Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(10, 'If he beget a son that is a robber, a shedder of blood, and that doeth the like to any one of these things,'),
            plain(11, 'And that doeth not any of those duties, but even hath eaten upon the mountains, and defiled his neighbour&apos;s wife,'),
            plain(13, 'Hath oppressed the poor and needy, hath spoiled by violence, hath not restored the pledge, and hath lifted up his eyes to the idols, hath committed abomination,'),
            plain(13, 'Hath given forth upon usury, and hath taken increase: shall he then live? he shall not live: he hath done all these abominations; he shall surely die; his blood shall be upon him.'),
            plain(17, 'Yet say ye, Why? doth not the son bear the iniquity of the father? When the son hath done that which is lawful and right, and hath kept all my statutes, and hath done them, he shall surely live.'),
            plain(20, 'The soul that sinneth, it shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son: the righteousness of the righteous shall be upon him, and the wickedness of the wicked shall be upon him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek18-inverse',
          html: 'The righteous man may have a wicked son. The son follows a different path—becomes a robber, sheds blood, eats on the mountains, defiles neighbors, oppresses the poor. He does the opposite of what his father did. And God says: "He shall surely die." The son&apos;s wickedness is not erased by the father&apos;s righteousness. Each stands alone.',
        },
        {
          kind: 'commentary',
          id: 'ezek18-both-ways',
          html:
            'But Ezekiel also imagines the inverse: a wicked father and a righteous son. The son looks at his father&apos;s behavior and turns away. He does not rob, does not shed blood, does not oppress. He walks in God&apos;s statutes. Such a son "shall surely live." His father&apos;s wickedness does not condemn him. He is not bound by his lineage. This is not a soft word. It means: you are responsible for yourself.',
        },
        {
          kind: 'carry',
          html:
            'Neither victimhood nor privilege transfers from parent to child. You are not condemned because your father sinned. You are not saved because your father was righteous. You are what you have become. You stand where you stand. This is freedom and terror together.',
        },
        {
          kind: 'reflection',
          id: 'ezek18-generational',
          prompt: 'In what ways have you chosen a different path from your family? In what ways have you repeated their patterns? What would it look like to take full responsibility for where you are?',
        },
      ],
    },

    {
      ref: 'Ezekiel 18:21–32',
      title: 'The Call to Repentance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(21, 'But if the wicked will turn from all his sins that he hath committed, and keep all my statutes, and do that which is lawful and right, he shall surely live, he shall not die.'),
            plain(23, 'Have I any pleasure at all that the wicked should die? saith the Lord God: and not that he should turn from his ways, and live?'),
            plain(30, 'Therefore I will judge you, O house of Israel, every one according to his ways, saith the Lord God. Repent, and turn yourselves from all your transgressions; so iniquity shall not be your ruin.'),
            plain(31, 'Cast away from you all your transgressions, whereby ye have transgressed; and make you a new heart and a new spirit: for why will ye die, O house of Israel?'),
            plain(32, 'For I have no pleasure in the death of him that dieth, saith the Lord God: wherefore turn yourselves, and live ye.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek18-turn',
          html:
            'The final movement is not judgment alone. It is invitation. "If the wicked will turn from all his sins...he shall surely live." Turning—repentance—is not imagined as difficult or punitive. It is the pathway to life. And notice: God speaks to His own desire. "Have I any pleasure at all that the wicked should die?" The answer is no. His pleasure is in turning, in life, in the restoration of relationship.',
        },
        {
          kind: 'commentary',
          id: 'ezek18-pleasure',
          html:
            '"I have no pleasure in the death of him that dieth." Death in Scripture is not mere physical ending. It is separation from God, the consequence of broken covenant. That death brings God no pleasure. What brings Him pleasure is turning. "Wherefore turn yourselves, and live ye." The imperative stands open to everyone. You are not locked in. You can turn. You can live. This is the God who judges and also calls.',
        },
        {
          kind: 'christ',
          id: 'ezek18-christ-repent',
          title: 'Christ Connection — The Call to Turn',
          html:
            'Jesus begins His ministry with the same word: "The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel." Turning toward God is not a work of obedience to the law. It is the response to grace. The law shows us our sin. But grace offers the way home. Christ is the embodiment of this call—He stands between the righteous judgment of God and the sinner who turns, saying: "I have no pleasure in your death. Turn. Live."',
        },
        {
          kind: 'carry',
          html:
            'You are not locked in to your past. You are not the sum of your sins or your inheritance. At every moment, God&apos;s call stands open: turn. The fact that you have sinned does not seal you. The fact that your family sinned does not bind you. What matters is where you are going, what you are becoming, whether you are turning toward God or away.',
        },
        {
          kind: 'reflection',
          id: 'ezek18-turn-now',
          prompt: 'What does it mean for you, right now, to "turn"? Is there an area where you have resigned yourself to death—spiritually, relationally, vocationally—where God&apos;s word is: "Turn, and live"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The soul that sinneth, it shall die...I have no pleasure in the death of him that dieth, saith the Lord God: wherefore turn yourselves, and live ye.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 18 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'gog-magog-bibleodyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gog and Magog',
      url: 'https://www.bibleodyssey.org/dictionary/gog/',
      description: 'SBL entry on the mysterious Gog figure in Ezekiel and Revelation.',
    }
  ],

  hasHebrew: true,
};
