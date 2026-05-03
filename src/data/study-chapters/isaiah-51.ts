import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 51 — The God of Comfort
 *
 * In a moment of national despair, Isaiah calls the people to remember their
 * origins. "Look unto Abraham your father, and unto Sarah that bare you."
 * God has sanctified and called them. "I, even I, am he that comforteth you."
 * The redemption promised is near. God will dry up the sea and bring His people
 * home in singing and everlasting joy.
 */
export const ISAIAH_51: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 51,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'When God\'s people are overwhelmed by suffering, they need perspective. They need to remember who they are and whose they are. Isaiah 51 begins by calling the people to look backward to Abraham and Sarah, to remember that God called one and blessed them. That same God still stands. Though the current tribulation feels unending, the Lord\'s salvation is near. His redemption will not delay. The chapter is a pastoral word to a people in exile, reminding them that the God who began the covenant will complete it.',
  ],

  sections: [
    {
      ref: 'Isaiah 51:1–6',
      title: 'Remember Your Father, Look to Your God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 51,
          lines: [
            plain(1, 'Hearken to me, ye that follow after righteousness, ye that seek the Lord: look unto the rock whence ye are hewn, and to the hole of the pit whence ye are digged.'),
            plain(2, 'Look unto Abraham your father, and unto Sarah that bare you: for I called him alone, and blessed him, and increased him.'),
            plain(3, 'For the Lord shall comfort Zion: he will comfort all her waste places; and he will make her wilderness like Eden, and her desert like the garden of the Lord; joy and gladness shall be found therein, thanksgiving, and the voice of melody.'),
            plain(4, 'Hearken unto me, my people; and give ear unto me, O my nation: for a law shall proceed from me, and I will make my judgment to rest for a light of the people.'),
            plain(5, 'My righteousness is near; my salvation shall go forth, and mine arms shall judge the people; the isles shall wait upon me, and on mine arm shall they trust.'),
            plain(6, 'Lift up your eyes to the heavens, and look upon the earth beneath: for the heavens shall vanish away like smoke, and the earth shall wax old like a garment, and they that dwell therein shall die in like manner: but my salvation shall be for ever, and my righteousness shall not be abolished.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa51-rock',
          html:
            'Isaiah calls the people to look at the rock from which they were hewn, the hole of the pit from which they were dug. Abraham was called alone, a wanderer, and from him God raised up a nation. Sarah, barren, became a mother of multitudes. From insignificant origins, God brought forth a great people.[res:sefaria-isaiah-51] Now, in exile, that same people can remember that God\'s power is not limited by their current straits[res:sefaria-isaiah-51-v1].',
        },
        {
          kind: 'hebrew',
          id: 'isaiah51-tzion',
          title: 'Tzion — "Zion"',
          script: 'צִיּוֹן',
          translit: '<strong>Tzion</strong> · Zion; the beloved city',
          description: 'Zion is the beloved city, the place where God dwells with His people.',
        },
        {
          kind: 'commentary',
          id: 'isa51-comfort',
          html:
            'God will comfort Zion. He will restore her waste places. The wilderness will become Eden. This is not merely external restoration. This is a reversal of the Fall itself. The place that has become barren will bloom again. The judgment that has fallen will be transformed into a light for the peoples.[res:intertextual-isaiah-servant-nt] God\'s righteousness will be revealed.',
        },
        {
          kind: 'hebrew',
          id: 'isa51-necham',
          title: 'Necham — "Comfort" (Nachem)',
          script: 'נַחַם',
          translit: '<strong>Nachem</strong> · to comfort; to console; to compassionately restore',
          description:
            'The Hebrew verb nachem carries the sense of compassionate restoration. It is the comfort not of mere words, but of transformative action. God does not merely say He is sorry for Zion\'s suffering. He actively restores, rebuilds, and refreshes.',
        },
        {
          kind: 'carry',
          html:
            'In times of despair, God invites us to remember. Not to be nostalgic, but to see in the past God\'s faithfulness. If He called Abraham from nothing and made him the father of multitudes, if He brought Sarah from barrenness to motherhood, what can He not do in our own lives? The God who changes deserts into gardens is not limited by our circumstances.',
        },
      ],
    },

    {
      ref: 'Isaiah 51:7–12',
      title: 'Fear Not the Reproach of Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 51,
          lines: [
            plain(7, 'Hearken unto me, ye that know righteousness, the people in whose heart is my law; fear ye not the reproach of men, neither be ye afraid of their revilings.'),
            plain(8, 'For the moth shall eat them up like a garment, and the worm shall eat them like wool: but my righteousness shall be for ever, and my salvation from generation to generation.'),
            plain(9, 'Awake, awake, put on strength, O arm of the Lord; awake, as in the ancient days, in the generations of old. Art thou not it that hath cut Rahab, and wounded the dragon?'),
            plain(10, 'Art thou not it which hath dried the sea, the waters of the great deep; that hath made the depths of the sea a way for the ransomed to go over?'),
            plain(11, 'Therefore the redeemed of the Lord shall return, and come with singing unto Zion; and everlasting joy shall be upon their head: they shall obtain gladness and joy; and sorrow and mourning shall flee away.'),
            plain(12, 'I, even I, am he that comforteth you: who art thou, that thou shouldest be afraid of a man that shall die, and of the son of man which shall be made as grass;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa51-reproach',
          html:
            'Those who know righteousness, those in whose hearts God\'s law dwells, are commanded: Do not fear the reproach of men. Do not be afraid of their revilings. What does this mean? That the judgment of ungodly people is of no ultimate consequence. Their garments will be eaten by moths, their strength by worms. But God\'s righteousness is eternal. It endures forever.',
        },
        {
          kind: 'commentary',
          id: 'isa51-dragon',
          html:
            'Isaiah calls upon the arm of the Lord to awake. He reminds God of His ancient deeds: He cut Rahab, wounded the dragon, dried the Red Sea. These images refer to God\'s redemptive acts in history—His power over chaos and oppression. The redeemed will return with singing, with everlasting joy. Sorrow and mourning will flee away.',
        },
        {
          kind: 'christ',
          id: 'isa51-christ-comfort',
          title: 'Christ Connection — The Comforter',
          html:
            'Christ is the ultimate fulfillment of God\'s comfort. He came to heal the brokenhearted, to announce freedom to the captives. He emptied Himself, became human, suffered with us, and rose again to bring us everlasting joy. The wilderness of our despair becomes the garden of His presence.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah\'s question is devastating: Why should you fear a man who will die? What power does the reproach of the ungodly really have over the redeemed of the Lord? We fear men\'s judgment far more than we fear the judgment of God, yet it is God\'s judgment that matters eternally. The reversal God calls for is radical: Do not fear men. Fear God alone.',
        },
        {
          kind: 'reflection',
          id: 'isa51-fear',
          prompt: 'What reproach or judgment of others do you fear? How would your actions change if you truly believed that God\'s righteousness endures forever while all human judgment perishes?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I, even I, am he that comforteth you: who art thou, that thou shouldest be afraid of a man that shall die?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 51 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-51',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 51',
      url: 'https://www.sefaria.org/Isaiah.51',
      description: 'Sefaria open-access source text and translations for Isaiah 51.',
    },
    {
      id: 'intertextual-isaiah-servant-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah Servant Song ↔ NT Fulfillment',
      url: 'https://intertextual.bible/',
      description: 'Servant songs (esp. Isaiah 53) and New Testament fulfillment in Christ.',
    },
    {
      id: 'sefaria-isaiah-51-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 51 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.51',
      description: 'The Hebrew text of Isaiah 51 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
