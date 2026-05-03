import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 40 — Comfort and the Way Prepared
 *
 * "Comfort ye, comfort ye my people, saith your God." The voice of God comes
 * to comfort. "The voice of him that crieth in the wilderness, Prepare ye the
 * way of the Lord, make straight in the desert a highway for our God." This
 * voice, which John the Baptist will echo, calls for preparation. "He shall
 * feed his flock like a shepherd...They that wait upon the Lord shall renew
 * their strength; they shall mount up with wings as eagles." The Messiah comes
 * not as a judge but as a Shepherd. And those who wait on Him find strength
 * renewed.
 */
export const ISAIAH_40: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 40,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'After the prophecy of exile comes a word of comfort. "Comfort ye, comfort ye my people." The exile is real. The loss is real. But it is not final. A voice cries out in the wilderness: prepare the way of the Lord. This is the voice that John the Baptist will embody—the one who prepares the way for the Messiah. And the Messiah comes not as a distant king but as a Shepherd. He will feed His flock. He will gather the lambs in His arms. He will gently lead those that are with young. To those who wait upon the Lord, He promises renewed strength. They shall mount up with wings as eagles. They shall run and not be weary. They shall walk and not faint. This is the promise that sustains the exiled people and speaks to every reader who faces despair.',
  ],

  sections: [
    {
      ref: 'Isaiah 40:1–11',
      title: 'Comfort and the Coming Shepherd',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(1, 'Comfort ye, comfort ye my people, saith your God.'),
            plain(2, 'Speak ye comfortably to Jerusalem, and cry unto her, that her warfare is accomplished, that her iniquity is pardoned: for she hath received of the Lord&apos;s hand double for all her sins.'),
            plain(3, 'The voice of him that crieth in the wilderness, Prepare ye the way of the Lord, make straight in the desert a highway for our God.'),
            plain(4, 'Every valley shall be exalted, and every mountain and hill shall be made low: and the crooked shall be made straight, and the rough places plain:'),
            plain(5, 'And the glory of the Lord shall be revealed, and all flesh shall see it together: for the mouth of the Lord hath spoken it.'),
            plain(6, 'The voice said, Cry. And he said, What shall I cry? All flesh is as grass, and all the goodliness thereof is as the flower of the field:'),
            plain(7, 'The grass withereth, the flower fadeth: because the spirit of the Lord bloweth upon it: surely the people is grass.'),
            plain(8, 'The grass withereth, the flower fadeth: but the word of our God shall stand for ever.'),
            plain(9, 'O Zion, that bringeth good tidings, get thee up into the high mountain; O Jerusalem, that bringeth good tidings, lift up thy voice with strength; lift it up, be not afraid; say unto the cities of Judah, Behold your God!'),
            plain(10, 'Behold, the Lord God will come with strong hand, and his arm shall rule for him: behold, his reward is with him, and his work before him.'),
            plain(11, 'He shall feed his flock like a shepherd: he shall gather the lambs with his arm, and carry them in his bosom, and shall gently lead those that are with young.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah40-comfort',
          html:
            'The opening is direct: "Comfort ye, comfort ye my people." The repetition of "comfort" signals the shift in tone. Gone are the words of judgment and exile. Now comes consolation. The exile is real, but her warfare is accomplished. Her iniquity is pardoned. She has paid the price. Now comes restoration and comfort.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah40-nahamu',
          title: 'Nahamu — "Comfort" (Console, Strengthen)',
          script: 'נָחַם',
          translit: '<strong>Nahamu</strong> · comfort, console, strengthen; to soothe pain or distress',
          description:
            'The Hebrew nahamu carries the sense of consolation and strengthening. It is not merely to sympathize, but to actively soothe and restore. When God commands "comfort my people," He is calling for active consolation—words that heal, promises that restore, assurance that the pain is not final.',
        },
        {
          kind: 'commentary',
          id: 'isaiah40-voice-wilderness',
          html:
            'The cry in the wilderness is a call to preparation: "Prepare ye the way of the Lord." Valleys will be exalted. Mountains will be made low. Crooked things will be made straight. This is the work of preparing hearts and removing obstacles. The voice that cries in the wilderness is the voice that prepares the way for God&apos;s coming. Every valley speaks to the low places in human experience. Every mountain speaks to the obstacles that seem immovable. All will be leveled in preparation for the Lord&apos;s coming.',
        },
        {
          kind: 'commentary',
          id: 'isaiah40-grass-flower',
          html:
            'The contrast is stark: all flesh is grass. The grass withers. The flower fades. All beauty and strength of the flesh is temporary. But the word of our God shall stand forever. This is the ultimate consolation. The things we see—bodies, kingdoms, empires—all fade. But God&apos;s word endures. On this promise, the exiled people must build their hope.',
        },
        {
          kind: 'christ',
          id: 'isaiah40-christ-shepherd',
          title: 'Christ Connection — The Good Shepherd',
          html:
            'Jesus calls Himself "the good shepherd" and says: "He calleth his own sheep by name, and leadeth them out." Isaiah&apos;s portrait of the shepherd—feeding His flock, gathering the lambs, carrying them in His bosom, gently leading those with young—is fulfilled in Christ. He is the Shepherd who lays down His life for the sheep, who searches for the lost lamb, who strengthens the weak and brings back the strayed.',
        },
        {
          kind: 'carry',
          html:
            'The promise of Isaiah 40 is comfort in exile. The people of Judah face captivity and loss, yet the promise comes: your warfare is accomplished. Your iniquity is pardoned. A Shepherd comes. He will feed you. He will carry you. He will strengthen you. Every reader facing darkness, loss, despair, or uncertainty can hear in these words the promise of God&apos;s presence. The circumstances may not change immediately. But the presence of the Shepherd does change everything.',
        },
        {
          kind: 'reflection',
          id: 'isaiah40-shepherd',
          prompt: 'Where do you need comfort today? What valley in your experience needs to be exalted? What impossible mountain needs to be leveled? How does it comfort you to know that a Shepherd—not a distant king, but a Shepherd—tends to you?',
        },
      ],
    },

    {
      ref: 'Isaiah 40:12–31',
      title: 'The Greatness of God and the Waiting of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(12, 'Who hath measured the waters in the hollow of his hand, and meted out heaven with the span, and comprehended the dust of the earth in a measure, and weighed the mountains in scales, and the hills in a balance?'),
            plain(13, 'Who hath directed the Spirit of the Lord, or being his counsellor hath taught him?'),
            plain(14, 'With whom took he counsel, and who instructed him, and taught him in the path of judgment, and taught him knowledge, and shewed to him the way of understanding?'),
            plain(15, 'Behold, the nations are as a drop of a bucket, and are counted as the small dust of the balance: behold, he taketh up the isles as a very little thing.'),
            plain(16, 'And Lebanon is not sufficient to burn, nor the beasts thereof sufficient for a burnt offering.'),
            plain(17, 'All nations before him are as nothing; and they are counted to him less than nothing, and vanity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah40-nations-to-idols',
          html:
            'The insistence on God&apos;s incomparability is clear: all nations are as a drop in a bucket, as dust on a balance scale—nothing before Him. Lebanon cannot provide sufficient wood for an offering to Him. All nations are counted as less than nothing. Now comes the turning point: if all nations are nothing, what about the idols that the nations make?',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(18, 'To whom then will ye liken God? or what likeness will ye compare unto him?'),
            plain(19, 'The workman melteth a graven image, and the goldsmith spreadeth it over with gold, and casteth silver chains.'),
            plain(20, 'He that is so impoverished that he hath no oblation chooseth a tree that will not rot; he seeketh unto him a cunning workman to prepare a graven image, that shall not be moved.'),
            plain(21, 'Have ye not known? have ye not heard? hath it not been told you from the beginning? have ye not understood from the foundations of the earth?'),
            plain(22, 'It is he that sitteth upon the circle of the earth, and the inhabitants thereof are as grasshoppers; that stretcheth out the heavens as a curtain, and spreadeth them out as a tent to dwell in:'),
            plain(23, 'That bringeth the princes to nothing; he maketh the judges of the earth as vanity.'),
            plain(24, 'Yea, they shall not be planted; yea, they shall not be sown; yea, their stock shall not take root in the earth: and he shall also blow upon them, and they shall wither, and the whirlwind shall take them away as stubble.'),
            plain(25, 'To whom then will ye liken me, or shall I be equal? saith the Holy One.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah40-idols-to-stars',
          html:
            'The satire on idols is complete: goldsmith spreads gold over wood, the poor man chooses a tree that will not rot and has a craftsman carve it. From ancient times the truth has been known—God sits on the circle of the earth, inhabitants are grasshoppers, princes are brought to nothing like grass. Now the passage turns to the majesty of creation itself: "To whom then will ye liken me?"—the question becomes an invitation to lift the eyes upward.',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(26, 'Lift up your eyes on high, and behold who hath created these things, that bringeth out their host by number: he calleth them all by names by the greatness of his might; for that he is strong in power; not one faileth.'),
            plain(27, 'Why sayest thou, O Jacob, and speakest, O Israel, My way is hid from the Lord, and my judgment is passed over from my God?'),
            plain(28, 'Hast thou not known? hast thou not heard, that the everlasting God, the Lord, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding.'),
            plain(29, 'He giveth power to the faint; and to them that have no might he increaseth strength.'),
            plain(30, 'Even the youths shall faint, and be weary, and the young men shall utterly fall:'),
            plain(31, 'But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah40-greatness',
          html:
            'The passage moves from comfort to the foundation of comfort: the greatness of God. Who has measured the waters in His hand? Who has weighed the mountains? Who has comprehended the dust of the earth? The questions are rhetorical. Only God. And if God has measured and weighed all creation, if all nations are as a drop in a bucket before Him, then the exiled people are not beyond His awareness or care. The God who is so great does not forget His people.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah40-koach',
          title: 'Koach — "Strength" (Power, Might)',
          script: 'כֹּחַ',
          translit: '<strong>Koach</strong> · strength, power, might; the capacity to act or endure',
          description:
            'When the passage promises that "they that wait upon the Lord shall renew their strength," the Hebrew koach refers not merely to physical strength, but to the capacity to endure, to act, to persist. Those who wait upon the Lord find their power renewed—not because they become superhuman, but because they are connected to the Source of all power.',
        },
        {
          kind: 'commentary',
          id: 'isaiah40-wait',
          html:
            'The culminating promise is for those who wait: "They shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." This is not a promise of ease. This is a promise of endurance. The eagles do not fly without effort, but they fly on the wind currents and are lifted up. So those who wait on God are lifted by forces beyond themselves. They run and do not grow weary. They walk and do not faint. Waiting—not passive resignation but active trust—transforms the human capacity to endure.',
        },
        {
          kind: 'christ',
          id: 'isaiah40-christ-renew',
          title: 'Christ Connection — Renewed Strength',
          html:
            'Christ says: "Come unto me, all ye that labour and are heavy laden, and I will give you rest...and ye shall find rest unto your souls." The renewed strength that Isaiah promises is found in trusting Christ. He is the one who causes the faint to become strong, who multiplies strength for those with no might. When believers wait on Him, abide in Him, trust in Him, their strength is renewed not through external circumstances, but through connection to the Source of all life.',
        },
        {
          kind: 'carry',
          html:
            'The chapter closes with a promise for the weary: strength will be renewed. The youths will faint. The young men will fall. But those who wait upon the Lord will mount up with wings as eagles. This is not age-dependent. This is trust-dependent. The reader who has been running on empty, striving by human strength alone, is invited to wait. To rest. To let God renew what has been exhausted. And in that renewal, to find the strength to continue.',
        },
        {
          kind: 'reflection',
          id: 'isaiah40-wait-strength',
          prompt: 'What has exhausted your strength? Where have you been running on empty? What would waiting on the Lord look like in your life? How will you let Him renew your strength?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Comfort ye, comfort ye my people...He shall feed his flock like a shepherd...They that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 40 · Study Guide',
  },

  hasHebrew: true,
};
