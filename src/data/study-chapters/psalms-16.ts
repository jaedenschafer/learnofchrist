import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 16 — Resurrection Hope
 *
 * "Preserve me, O God: for in thee do I put my trust." David rests his hope in God
 * alone. But the psalm&apos;s most stunning declaration comes in verse 10: "THOU WILT
 * NOT LEAVE MY SOUL IN HELL; NEITHER WILT THOU SUFFER THINE HOLY ONE TO SEE
 * CORRUPTION." Peter quotes this in Acts 2:25–31, applying it directly to Christ&apos;s
 * resurrection[res:intertextual-psalms-16-nt]. David&apos;s hope in preservation becomes Christ&apos;s triumph over death.
 */
export const PSALMS_16: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 16,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 16 is a psalm of trust spoken by a man who knows something about abandonment, loss, and the fear of death. David asks God to preserve[res:sefaria-psalms-16] him, to keep him safe. The psalm is framed by the decision to trust: at the beginning, "in thee do I put my trust," and at the end, "I shall not be moved" because the Lord is at my right hand. Yet the heart of the psalm is one of the most mysterious and profound statements in the Old Testament: a declaration that God will not leave His holy one to see corruption—a statement that will echo in the Resurrection.',
    'The psalm moves from David&apos;s personal trust, through his choice of the Lord above all other loves, to a statement that transcends David himself. Peter in Acts 2 will hear in verse 10 the voice of the Christ—the Holy One who was not left in death, whose body did not decay, who rose triumphant.',
  ],

  sections: [
    {
      ref: 'Psalm 16:1–7',
      title: 'Trust in God Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'Preserve me, O God: for in thee do I put my trust.'),
            plain(2, 'O my soul, thou hast said unto the Lord, Thou art my Lord: my goodness extendeth not to thee;'),
            plain(3, 'But to the saints that are in the earth, and to the excellent, in whom is all my delight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-16-78mid-1',
          html:
            'From the blessing of inheritance[res:bible-odyssey-inheritance-psalms] to the blessing of presence. God as portion becomes God as guide.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(4, 'Their sorrows shall be multiplied that hasten after another god: their drink offerings of blood will I not offer, nor take up their names into my lips.'),
            plain(5, 'The Lord is the portion of mine inheritance and of my cup: thou maintainest my lot.'),
            plain(6, 'The lines are fallen unto me in pleasant places; yea, I have a goodly heritage.'),
            plain(7, 'I will bless the Lord, who hath given me counsel: my reins also instruct me in the night seasons.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps16-preserve',
          html:
            'David opens with a request: "Preserve me, O God." And then he gives his reason: "For in thee do I put my trust." His preservation is grounded entirely on his trust in God. He is not asking to be preserved because he deserves it, because he is strong, because he has earned favor. He is asking because he has committed himself entirely to God.',
        },
        {
          kind: 'commentary',
          id: 'ps16-my-lord',
          html:
            'David declares to his own soul: "Thou art my Lord." God is his Lord, his Master, his King. And the remarkable admission that follows: "My goodness extendeth not to thee." David is saying that he has nothing good to offer to God, that any goodness he possesses does not extend into the presence of God. He is bankrupt before God, and yet he trusts Him.',
        },
        {
          kind: 'hebrew',
          id: 'ps16-qedushshim',
          title: 'Qedoshim — "Saints" / "Holy Ones"',
          script: 'קְדוֹשִׁים',
          translit: '<strong>Qedoshim</strong> · holy ones; saints; those set apart',
          description:
            'The saints are those separated unto God, those who belong to Him. David&apos;s delight is in the excellent ones—the righteous. His fellowship is with them, his love is for them, because they too belong to God.',
        },
        {
          kind: 'commentary',
          id: 'ps16-another-god',
          html:
            'Those who chase after another god—who seek fulfillment in idols, in wealth, in power, in anything but God—their sorrows multiply. This is not punishment imposed by God but the natural consequence of building your life on a false foundation. David refuses this path. He will not even speak the names of other gods. His lips are sealed against them.',
        },
        {
          kind: 'commentary',
          id: 'ps16-portion',
          html:
            '"The Lord is the portion of mine inheritance." In the division of land among the tribes of Israel, the Levites received no territorial portion—God Himself was their inheritance. David claims this: God Himself is his treasure, his lot, his heritage. This is why he can be content. He has what matters most.',
        },
        {
          kind: 'commentary',
          id: 'ps16-counsel',
          html:
            'God has given David counsel, and even in the night seasons—the dark times—his reins instruct him. His inner being, his deepest self, is being guided by God. He has placed the Lord always before him, and because of this, he stands secure.',
        },
        {
          kind: 'carry',
          html:
            'Preservation does not come from trying to earn God&apos;s favor. It comes from naming God as Lord, from ordering your desires around Him, from choosing His people and His way even when other paths seem promising. Safety is not found in self-reliance but in complete dependence on God.',
        },
      ],
    },

    {
      ref: 'Psalm 16:8–11',
      title: 'The Portion and the Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(8, 'I have set the Lord always before me: because he is at my right hand, I shall not be moved.'),
            plain(9, 'Therefore my heart is glad, and my glory rejoiceth: my flesh also shall rest in hope.'),
            plain(10, 'For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.'),
            plain(11, 'Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps16-glad',
          html:
            'From this security flows gladness. "Therefore my heart is glad, and my glory rejoiceth: my flesh also shall rest in hope." His heart is glad, his glory rejoices, and his flesh—his physical body—rests in hope. The whole of him, inner and outer, is anchored in hope.',
        },
        {
          kind: 'christ',
          id: 'ps16-christ-resurrection',
          title: 'Christ Connection — Resurrection Victory',
          html:
            'On the Day of Pentecost, Peter stands and quotes this very passage: "Thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption" (Acts 2:27). Peter applies this directly to Christ—the Holy One who was not left in the grave, whose body did not decay, who rose on the third day. In Christ, David&apos;s hope is fulfilled. Our hope is fulfilled.',
        },
        {
          kind: 'commentary',
          id: 'ps16-hell-corruption',
          html:
            'The phrase "hell" here refers to Sheol, the grave, the place of the dead. David declares that God will not abandon him to the grave, that his soul will not be left there forever, that his body will not see corruption. This is the hope of the resurrection[res:intertextual-psalms-16-nt]. For those who trust in God, death is not the end. It is the threshold of life eternal.',
        },
        {
          kind: 'reflection',
          id: 'ps16-path-life',
          prompt: 'What does it mean to have the Lord as your portion rather than pursuing other inheritances? How does the hope of resurrection change how you face death? [res:intertextual-psalm-16-acts-2-resurrection]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord is the portion of mine inheritance. Thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 16 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-16',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 16 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.16',
      description: 'Psalm of trust and safety with medieval Jewish interpretation.',
    },
    {
      id: 'intertextual-psalms-16-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 16 in Acts 2 & 1 Corinthians 15',
      url: 'https://intertextual.bible/text/psalm-16',
      description: 'Apostolic interpretation of Psalm 16 as prophecy of resurrection.',
    },
    {
      id: 'bible-odyssey-inheritance-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Inheritance & Possession',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms about God as inheritance and eternal possession.',
    },
  ],

  hasHebrew: true,
};
