import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 29 — Heart and Lips; the Table Sealed
 *
 * Isaiah 29 begins with judgment on Jerusalem—"Ariel, Ariel, the city where
 * David dwelt." Yet the prophecy then contains a critique and a promise. The
 * people draw near to God with their mouth and honor Him with their lips, but
 * their heart is far from Him. Yet in that day of blindness, the deaf shall
 * hear, the blind shall see, and the poor shall rejoice in the Holy One of Israel.
 */
export const ISAIAH_29: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 29,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  intros: [
    'Isaiah 29 addresses Jerusalem directly, using the name Ariel—"the lion of God" or the city where God dwells. Yet it is a word of judgment. The city will be brought low, laid siege to, and made to speak "as one that hath a familiar spirit, and that chirpeth out of the dust." Yet amidst the judgment lies a promise: the deaf shall hear the words of the book, and the blind shall see out of obscurity and darkness. The judgment is not final; it is the pathway to transformation.',
    'The chapter quoted in Matthew 15:8 critiques lip-service and the separation of external religiosity from inner conviction. Christ quotes this verse to the Pharisees when they question why His disciples do not follow the traditions of the elders. The passage teaches that God desires the heart, not merely the lips.',
  ],

  sections: [
    {
      ref: 'Isaiah 29:1–16',
      title: 'Jerusalem Judged; the Heart Far from God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(1, 'Woe to Ariel, to Ariel, the city where David dwelt! add ye year to year; let them kill sacrifices.'),
            plain(2, 'Yet I will distress Ariel, and there shall be heaviness and sorrow: and it shall be unto me as Ariel.'),
            plain(3, 'And I will camp against thee round about, and will lay siege against thee with a mount, and I will raise forts against thee.'),
            plain(4, 'And thou shalt be brought down, and shalt speak out of the ground, and thy speech shall be low out of the dust; and thy voice shall be, as one that hath a familiar spirit, and that chirpeth out of the dust; and thy speech shall whisper out of the dust.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa29-sleep-wake',
          html:
            'The oracle moves from the numbness to the awakening. From sleep comes the opening of eyes.[res:sefaria-isaiah-29]',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(5, 'Moreover the multitude of thy strangers shall be like small dust, and the multitude of the terrible ones shall be as chaff that passeth away: yea, it shall be at an instant suddenly.'),
            plain(6, 'Thou shalt be visited of the Lord of hosts with thunder, and with earthquake, and great noise, with storm and tempest, and the flame of devouring fire.'),
            plain(7, 'And the multitude of all the nations that fight against Ariel, even all that fight against her and her munition, and that distress her, shall be as a dream of a night vision.'),
            plain(8, 'It shall even be as when an hungry man dreameth, and, behold, he eateth; but he awaketh, and his soul is empty: or as when a thirsty man dreameth, and, behold, he drinketh; but he awaketh, and, behold, he is faint, and his soul hath appetite: so shall the multitude of all the nations be, that fight against mount Zion.'),
            plain(9, 'Stay yourselves, and wonder; cry ye out, and cry: they are drunken, but not with wine; they stagger, but not with strong drink.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa29-split-1',
          html:
            'The enemy&apos;s attack collapses like a dream. Hunger and thirst that seemed real upon waking prove false. So too the Assyrian threat will vanish. Yet the people themselves are drunken—not from wine, but from God&apos;s "spirit of deep sleep." They cannot see. They cannot hear. Spiritual blindness is the true curse.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(10, 'For the Lord hath poured upon you the spirit of deep sleep, and hath closed your eyes: the prophets and your rulers, the seers hath he covered.'),
            plain(11, 'And the vision of all is become unto you as the words of a book that is sealed, which men deliver to one that is learned, saying, Read this, I pray thee: and he saith, I cannot; for it is sealed:'),
            plain(12, 'And the book is delivered to him that is not learned, saying, Read this, I pray thee: and he saith, I am not learned.'),
            plain(13, 'Wherefore the Lord said, Forasmuch as this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me, and their fear of me is taught by the precept of men;'),
            plain(14, 'Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder: for the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa29-split-2',
          html:
            'The people honor God with their lips while their heart is far away. This is the crisis at the center: lip-service masking inner separation. God&apos;s response is a "marvelous work"—the undoing of all their confidence, the silencing of their wise men. What looks wise will be revealed as foolishness.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(15, 'Woe unto them that seek deep to hide their counsel from the Lord, and their works are in the dark, and they say, Who seeth us? and who knoweth us?'),
            plain(16, 'Surely your turning of things upside down shall be esteemed as the potter&apos;s clay: for shall the work say of him that made it, He made me not? or shall the thing framed say of him that framed it, He had no understanding?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah29-ariel',
          html:
            '"Woe to Ariel, to Ariel, the city where David dwelt!" The repetition of "Ariel" emphasizes both the city&apos;s identity as God&apos;s dwelling place and its need for judgment. The city "adds year to year, lets them kill sacrifices"—continuing in its religious practices while the heart of the people has turned away.',
        },
        {
          kind: 'commentary',
          id: 'isaiah29-distress',
          html:
            '"And I will distress Ariel, and there shall be heaviness and sorrow." God announces judgment through siege and siege fortifications. The city will be brought down, brought low. Yet in verse 7, the nations that fight against Ariel are revealed as a dream—they seem real and terrible, but they pass away like a night vision.',
        },
        {
          kind: 'commentary',
          id: 'isaiah29-sealed',
          html:
            'The image of the sealed book is powerful: the vision becomes like a sealed book that the learned man cannot read and the unlearned man will not read. The people are blind to God&apos;s word. Their eyes are covered; their understanding is sealed. This is not ignorance of facts, but spiritual blindness—the inability or unwillingness to perceive God&apos;s truth.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah29-mouth',
          title: 'Pi — "Mouth" (Speech; Words)',
          script: 'פִּי',
          translit: '<strong>Pi</strong> · mouth; speech; words; the source of words',
          description:
            'When the people honor God "with their lips," they use the mouth but not the heart. Pi suggests the source of speech and action. Words from the mouth alone, without the heart behind them, are empty and dishonoring.',
        },
        {
          kind: 'commentary',
          id: 'isaiah29-heart',
          html:
            '"Wherefore the Lord said, Forasmuch as this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me." This is the critique that Christ will echo when He quotes this very verse. The problem is not what they say, but what they are. The heart is far from God even while the lips speak His name.',
        },
        {
          kind: 'christ',
          id: 'isaiah29-christ-heart',
          title: 'Christ Connection — The Heart, Not the Lips',
          html:
            'In Matthew 15:7–9, Jesus quotes Isaiah 29:13: "This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me. But in vain they do worship me, teaching for doctrines the commandments of men." Christ emphasized that religious practice without inner transformation is worthless. True worship flows from the heart that has been transformed by His grace. It is not performance or adherence to external rules, but love of God expressed through a changed life.',
        },
        {
          kind: 'carry',
          html:
            'The passage invites searching self-examination. Are we drawing near to God with our mouth while our heart remains far from Him? Do we speak the language of faith while living lives shaped by other values? True worship requires the alignment of heart and lips, action and word.',
        },
        {
          kind: 'reflection',
          id: 'isaiah29-heart-align',
          prompt: 'Where in your life have you honored God with your lips while your heart was far from Him? What would it take to realign your heart with what you say and the commitments you make?',
        },
      ],
    },

    {
      ref: 'Isaiah 29:17–24',
      title: 'The Transformation; the Deaf Shall Hear, the Blind Shall See',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(17, 'Is it not yet a very little while, till Lebanon shall be turned into a fruitful field, and the fruitful field shall be esteemed as a forest?'),
            plain(18, 'And in that day shall the deaf hear the words of the book, and the eyes of the blind shall see out of obscurity, and out of darkness.'),
            plain(19, 'The meek also shall increase their joy in the Lord, and the poor among men shall rejoice in the Holy One of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa29-split-3',
          html:
            'The promise breaks through suddenly: "In that day shall the deaf hear the words of the book, and the eyes of the blind shall see." The sealed book will be opened. Those locked in darkness will see light. The meek will find joy. Judgment is not the final word. Restoration comes.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(20, 'For the terrible one is brought to nought, and the scorner is consumed, and all that watch for iniquity are cut off:'),
            plain(21, 'That make a man an offender for a word, and lay a snare for him that reproveth in the gate, and turn aside the just for a thing of nought.'),
            plain(22, 'Therefore thus saith the Lord, who redeemed Abraham, concerning the house of Jacob, Jacob shall not now be ashamed, neither shall his face now wax pale.'),
            plain(23, 'But when he seeth his children, the work of my hands, in the midst of him, they shall sanctify my name, and sanctify the Holy One of Jacob, and shall fear the God of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa29-split-4',
          html:
            'The transformation spreads through the family and the nation. Jacob will not be ashamed. His children—"the work of my hands"—will sanctify God&apos;s name. From shame to honor, from silence to witness. The curse is inverted.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(24, 'They also that erred in spirit shall come to understanding, and they that murmured shall learn doctrine.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah29-inversion',
          html:
            'The movement from judgment to restoration is swift and startling. "In that day shall the deaf hear the words of the book, and the eyes of the blind shall see out of obscurity, and out of darkness." Those who were sealed in blindness will suddenly perceive. The book that was sealed will be opened to them. Spiritual blindness will be lifted.',
        },
        {
          kind: 'commentary',
          id: 'isaiah29-meek',
          html:
            '"The meek also shall increase their joy in the Lord, and the poor among men shall rejoice in the Holy One of Israel." The last will be first. Those who were despised and rejected will find their joy restored. They will rejoice in the Holy One of Israel—the God who has redeemed Abraham and promised blessing to Jacob.',
        },
        {
          kind: 'commentary',
          id: 'isaiah29-erred',
          html:
            '"They also that erred in spirit shall come to understanding, and they that murmured shall learn doctrine." Even those who were lost and wandering, who murmured against God, will be brought to understanding. The transformation is universal—all Israel will be restored, all will come to right understanding.',
        },
        {
          kind: 'carry',
          html:
            'The passage offers profound hope: that even blindness can be healed, that the sealed book can be opened, that those who have gone astray can return to understanding. God&apos;s judgment is not meant to destroy but to transform, to break the seals and open the eyes.',
        },
        {
          kind: 'reflection',
          id: 'isaiah29-healing',
          prompt: 'In what ways are you spiritually blind or deaf? What truths about God or yourself are you unable to perceive? What would it mean to have those scales removed from your eyes?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Wherefore the Lord said, Forasmuch as this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 29 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-29',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 29',
      url: 'https://www.sefaria.org/Isaiah.29',
      description: 'Sefaria open-access source text and translations for Isaiah 29.',
    },
  ],

  hasHebrew: true,
};
