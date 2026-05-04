import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Psalm 118 — The Rejected Stone Becomes the Cornerstone
 *
 * "Give thanks unto the Lord; for he is good: because his mercy endureth for ever."
 * A processional hymn of thanksgiving, celebrating God's mercy and deliverance.
 * The central image: "The stone which the builders refused is become the head stone
 * of the corner." Matthew 21:42 and Peter in Acts 4:11 apply this directly to
 * Christ — rejected by the religious establishment, yet becoming the foundation
 * upon which the new creation rests. "Save now, I beseech thee, O Lord" (Hosanna)
 * echoes through the Gospels as the cry at Christ's entry to Jerusalem.
 */
export const PSALMS_118: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 118,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 118',
  },
  intros: [
    'Psalm 118 is a song of thanksgiving, heard by ancient pilgrims approaching the temple, chanted by those who had passed through the deep waters of trouble and found themselves delivered on the other side. It opens not with complaint or fear, but with exhortation: "Give thanks unto the Lord; for he is good: because his mercy endureth for ever." The entire psalm is shaped by this conviction — that God&apos;s goodness is not conditional, not earned, not fleeting, but eternal. Again and again it returns to the refrain: His mercy endureth for ever.',
    'But the psalm is also realistic about the path to thanksgiving. The singer has been "pressed on every side," "the Lord chastened me sore," yet did not give him over unto death. And at the center of the psalm stands a peculiar image: the rejected stone. The builders cast it aside, deemed it worthless. Yet God elevated it to the head of the corner—the place of supreme importance. This paradox, rejected and elevated in the same breath, speaks directly to Christ.',
  ],

  sections: [
    /* ─── Psalm 118:1–18 — Thanksgiving and Deliverance ──────────────────── */
    {
      ref: 'Psalm 118:1–18',
      title: 'The Mercy That Endures Forever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 118,
          lines: [
            plain(1, 'O give thanks unto the Lord; for he is good: because his mercy endureth for ever.'),
            plain(2, 'Let Israel now say, that his mercy endureth for ever.'),
            plain(3, 'Let the house of Aaron now say, that his mercy endureth for ever.'),
            plain(4, 'Let them now that fear the Lord say, that his mercy endureth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps118-mercy',
          html:
            'The four-fold call to thanksgiving—Israel, the priests (house of Aaron), and all who fear the Lord—is not an invitation to casual gratitude. It is a summons to recognize the fundamental character of God: He is good, and His mercy is eternal. Not sometimes good. Not merciful when we deserve it. Good by essence. Merciful forever. This is the ground upon which all thanksgiving stands. [res:sefaria-psalm-118]',
        },
        {
          kind: 'commentary',
          id: 'ps118-deliverance',
          html:
            'The psalm then turns to personal testimony. "I called upon the Lord in distress." The distress is real—the singer has been pressed on every side, but the Lord answered. "The Lord is on my side; I will not fear: what can man do unto me?" To have God on your side is to have shifted from terror to confidence, not because the danger has passed, but because the presence of the Lord has come near.',
        },
        {
          kind: 'commentary',
          id: 'ps118-strength',
          html:
            'Yet the psalm does not minimize suffering. "The Lord chastened me sore: but he gave me not over unto death." Discipline, pain, correction—these came. But they did not end in death. They ended in life, in deliverance, in standing before the gates of righteousness to enter and give thanks.',
        },
      ],
    },

    /* ─── Psalm 118:19–29 — The Rejected Stone Exalted ──────────────────── */
    {
      ref: 'Psalm 118:19–29',
      title: 'The Stone the Builders Refused',
      blocks: [
        {
          kind: 'scripture',
          chapter: 118,
          lines: [
            plain(22, 'The stone which the builders refused is become the head stone of the corner.'),
            plain(23, 'This is the Lord&apos;s doing; it is marvellous in our eyes.'),
            plain(24, 'This is the day which the Lord hath made: we will rejoice and be glad in it.'),
            plain(26, 'Blessed be he that cometh in the name of the Lord:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps118-stone',
          html:
            'The metaphor is stark. The builders—those responsible for constructing God&apos;s people—rejected this stone. They saw no value in it. Yet God took that very stone and placed it at the head of the corner, the most important, most visible, most load-bearing position in the entire structure. The paradox is absolute: what was cast out became foundational. What was deemed worthless became precious. This is precisely what the Gospel writers claim happened to Christ—rejected by the religious authorities, yet becoming the corner upon which the entire new temple of God rests.',
        },
        {
          kind: 'hebrew',
          id: 'ps118-ebhen',
          title: 'Eben — "Stone" (Cornerstone)',
          script: 'אֶבֶן',
          translit: '<strong>Eben</strong> · stone; the building block',
          description:
            'The Hebrew word eben means stone—a building material, a foundation, a weight. It can be precious or rejected. In Jewish temple theology, the cornerstone (eben pinnat) was the stone that locked two walls together, bearing the weight of the entire structure. To call someone the cornerstone was to name them as foundational, irreplaceable, essential to the integrity of the whole.',
        },
        {
          kind: 'christ',
          id: 'ps118-christ-corner',
          title: 'Christ Connection — The Rejected Stone Exalted',
          html:
            'In Matthew 21:42, when Jesus cleanses the temple and teaches about the vineyard whose workers reject and kill the owner&apos;s son, He cites this very psalm: "The stone which the builders refused, the same is become the head of the corner." Peter echoes it in Acts 4:11, proclaiming Christ as the stone rejected by the Sanhedrin but chosen by God as the cornerstone of the new covenant. The metaphor is perfect: Christ was rejected by those who thought they held authority over God&apos;s people. Yet God used His rejection as the very means of laying the foundation of the Church. Where human judgment saw waste, God saw the cornerstone. [res:bible-odyssey-psalm-118]',
        },
        {
          kind: 'commentary',
          id: 'ps118-day',
          html:
            '"This is the day which the Lord hath made: we will rejoice and be glad in it." The day spoken of here is not merely the historical moment of deliverance, but the eschatological day—the day of God&apos;s ultimate vindication and triumph. It is a day already made by the Lord, already secured, already given to us. Our task is to rejoice in it, to gladden ourselves in it, to recognize it as God&apos;s work, not our own.',
        },
        {
          kind: 'commentary',
          id: 'ps118-hosanna',
          html:
            '"Blessed be he that cometh in the name of the Lord." The Hebrew word used at Christ&apos;s triumphal entry—"Hosanna" (save now)—echoes in this verse. It is a prayer and a blessing combined: "May God save the one who comes in God&apos;s name." And then the most remarkable reversal: the rejected stone, the outcast, becomes the object of blessing and hope. All rejoicing flows through Him.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 118 asks a searching question of anyone who experiences rejection, failure, or dismissal: What if your rejection is not your end? What if the very thing that seems to disqualify you—cast out, deemed worthless, broken—is precisely what God will use to lay a foundation? The psalm calls those who have suffered, those who have been set aside by those in power, to give thanks not because the suffering was good, but because God&apos;s mercy endures through it, and His purposes cannot be thwarted by human judgment.',
        },
        {
          kind: 'reflection',
          id: 'ps118-rejected',
          prompt:
            'Have you ever been rejected, dismissed, or told you were worthless? What would it mean to trust that God&apos;s judgment of your value is different from—and more true than—the judgment of those around you? How does that change your understanding of rejection? [res:intertextual-psalm-118-matthew-21-matthew-23]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The stone which the builders refused is become the head stone of the corner. This is the Lord&apos;s doing; it is marvellous in our eyes.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 118 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-118',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 118 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.118',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-118',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 118 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+118',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'intertextual-psalm-118-matthew-21-matthew-23',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 118:26 in Matthew 21:9 (triumphal entry)',
      url: 'https://intertextual.bible/search?q=Psalm+118+Matthew+21+9',
      description: 'New Testament connection showing how this Psalm is quoted or referenced.',
    },
  ],

  hasHebrew: true,
};
