import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Psalm 67 — Let All the Peoples Praise Thee
 *
 * This short psalm is sung to the tune of a vinedresser's song—a working
 * song, a song of labor and cultivation. It opens with a prayer for blessing[res:sefaria-psalms-67],
 * but not blessing for Israel alone. God is asked to bless His people so that
 * "thy way may be known upon earth, thy saving health among all nations[res:bible-odyssey-mission-psalms]." The
 * blessing sought is instrumental—it exists so that the nations might know God.
 * The salvation of God is not meant to be hoarded. It is meant to shine forth,
 * to be witnessed, to draw all peoples into the knowledge and praise of the God
 * who saves.
 */
export const PSALMS_67: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 67,

  estimatedMinutes: { beginner: 3, intermediate: 6, deep: 8 },
  opener: {
    matchTitle: /Utrecht Psalter Psalm/i,
    caption: 'Psalms 67',
  },
  intros: [
    'Psalm 67 is a short psalm of great scope. It begins with a prayer—"God be merciful unto us, and bless us"—but the prayer is not self-contained. It looks immediately outward: "that thy way may be known upon earth, thy saving health among all nations." The blessing requested is not for the comfort or advantage of God\'s people, but for a purpose that extends beyond them. God\'s mercy toward Israel is meant to become visible to the world as a witness to His character and His salvation.',
    'The psalm is set to the tune of a vinedresser\'s song—a working song, the kind sung in the fields and vineyards of ancient Israel. This setting suggests that the message of the psalm is not confined to the sanctuary, but is meant to be carried into the rhythms of ordinary work. In going about our daily labor, we are to remember that we are blessed not for ourselves alone, but so that through us God\'s way might become known to all people.',
  ],

  sections: [
    /* ─── Psalm 67:1–3 — Prayer for Blessing and Knowledge ──────────────── */
    {
      ref: 'Psalm 67:1–3',
      title: 'That Thy Way May Be Known',
      blocks: [
        {
          kind: 'scripture',
          chapter: 67,
          lines: [
            plain(1, 'God be merciful unto us, and bless us; and cause his face to shine upon us; Selah.'),
            plain(2, 'That thy way may be known upon earth, thy saving health among all nations.'),
            plain(3, 'Let the people praise thee, O God; let all the people praise thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms67-merciful',
          html:
            'The psalmist opens with a prayer shaped by the ancient Aaronic blessing. "God be merciful unto us, and bless us; and cause his face to shine upon us." These are the marks of God\'s favor: mercy, blessing, and the shining of His face—the presence of His attention and care. But the prayer does not stop with the request. It immediately states the purpose: "That thy way may be known upon earth, thy saving health among all nations."',
        },
        {
          kind: 'commentary',
          id: 'psalms67-way-known',
          html:
            'This is remarkable theology. God\'s blessing upon Israel is not presented as an end in itself—a reward for righteousness, a mark of special favor. Instead, it is explicitly instrumental. The blessing exists for a purpose: so that "thy way may be known upon earth." God\'s way—His character, His justice, His redemptive intention—is to be made visible through Israel\'s blessing. And this visibility is not limited to Israel. It extends to "all nations," to every people on earth. Salvation is meant to be witnessed[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'commentary',
          id: 'psalms67-saving-health',
          html:
            '"Thy saving health among all nations." The word "health" (KJV "health," but connoting salvation or wholeness) suggests that God\'s salvation is not merely forgiveness or mercy in the abstract, but a restoration of wholeness, a healing that extends to all peoples. The nations are not meant to remain outside the knowledge of God. They are meant to see, to know, to experience His salvation.',
        },
        {
          kind: 'hebrew',
          id: 'psalms67-yeshuat',
          title: 'Yesha — "Salvation" (Wholeness)',
          script: 'יְשׁוּעָה',
          translit: '<strong>Yesha</strong> · salvation; deliverance; wholeness; victory; healing',
          description:
            'Yesha is the Hebrew word for salvation, but it carries the sense not merely of forgiveness but of liberation, wholeness, and restoration. It is the state of being safe, whole, and free from danger or distress. God\'s yesha extends to all nations—a universal salvation available to all peoples.',
        },
        {
          kind: 'christ',
          id: 'psalms67-christ-universal-salvation',
          title: 'Christ Connection — Salvation to All Nations',
          html:
            'The universal scope of Psalm 67—"thy saving health among all nations"—points directly to the Great Commission: "Go ye therefore, and teach all nations" (Matthew 28:19). Christ\'s salvation is not meant for one nation, one people, one ethnicity. It is for all. The gospel is to be proclaimed to every creature, every nation, every tongue. Christ came not to save Israel alone, but to "draw all men unto me." The light of salvation is meant to shine into every corner of the world.',
        },
        {
          kind: 'carry',
          html:
            'The opening petition—"God be merciful unto us, and bless us; and cause his face to shine upon us"—is not a prayer of privilege. It is a prayer of purpose. When we ask God to bless us, we are simultaneously asking Him to use that blessing as a witness to the world. We are blessed not for ourselves alone, but so that through our lives, our choices, our character, others might come to know what God is like. This is the weight and the joy of being blessed: that we become channels through which God\'s mercy flows to others.',
        },
        {
          kind: 'reflection',
          id: 'psalms67-witness',
          prompt:
            'When others see your life—the way you handle difficulty, the way you treat people, the things you trust in—what do they learn about God? How is God\'s way made known through you? What blessing in your life might be meant as a witness to someone else?',
        },
      ],
    },

    /* ─── Psalm 67:4–7 — All the Peoples Rejoice ────────────────────────── */
    {
      ref: 'Psalm 67:4–7',
      title: 'The Peoples Rejoice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 67,
          lines: [
            plain(4, 'O let the nations be glad and sing for joy: for thou shalt judge the people righteously, and govern the nations upon earth. Selah.'),
            plain(5, 'Let the people praise thee, O God; let all the people praise thee.'),
            plain(6, 'Then shall the earth yield her increase; and God, even our God, shall bless us.'),
            plain(7, 'God shall bless us; and all the ends of the earth shall fear him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms67-judge-righteously',
          html:
            'The nations are called to be glad and to sing for joy. But the grounds for this gladness are not comfort or ease. They are righteousness and justice. "For thou shalt judge the people righteously, and govern the nations upon earth." The psalmist grounds the nations\' hope not in God\'s mercy toward them (though mercy is present), but in His just governance. God will judge the peoples with righteousness. This is the assurance: that the God who governs the world does so justly, fairly, with attention to what is right and true.',
        },
        {
          kind: 'commentary',
          id: 'psalms67-refrain',
          html:
            'The refrain returns: "Let the people praise thee, O God; let all the people praise thee." This repetition is not mere aesthetic echo. It is an insistence, a call, a gathering summons. Not just Israel. Not just the wise or the righteous or the select few. All the people. The whole world. This is the vision of universal praise, of all humanity united in the worship of the one true God.',
        },
        {
          kind: 'commentary',
          id: 'psalms67-earth-yield',
          html:
            '"Then shall the earth yield her increase; and God, even our God, shall bless us." There is a relationship here between praise and abundance. When the peoples are reconciled to God and offer Him praise, the earth itself flourishes. This is not quid pro quo—as if God rewards praise with crops. Rather, it is a vision of wholeness: when human beings are aligned with God through worship, the entire cosmos is set right. Blessing flows. The earth yields her increase. Creator and creation, humanity and nature, all move in harmony.',
        },
        {
          kind: 'hebrew',
          id: 'psalms67-yarah',
          title: 'Yarah — "Judge" (Govern with Righteousness)',
          script: 'יָרָה',
          translit: '<strong>Yarah</strong> · to judge; to rule; to govern; to shoot an arrow straight; to direct with purpose',
          description:
            'Yarah carries the sense of directing, pointing, aiming straight. A judge shoots judgment straight at its target. A governor directs a nation with purposeful guidance. This is governance with direction and intent, not arbitrary or chaotic, but aimed at justice.',
        },
        {
          kind: 'christ',
          id: 'psalms67-christ-righteous-judge',
          title: 'Christ Connection — Judge of All Nations',
          html:
            'The psalm speaks of God judging the peoples righteously and governing the nations. In the New Testament, this judgment is associated with Christ. "The Father...hath committed all judgment unto the Son" (John 5:22). Jesus will sit in judgment over all nations: "When the Son of man shall come in his glory...then shall he sit upon the throne of his glory: And before him shall be gathered all nations" (Matthew 25:31–32). The hope of the psalm is realized in Christ—the judge who is perfectly righteous, perfectly just, perfectly fair. And His judgment is not merely condemnation; it is also salvation. He offers all nations the opportunity to bow before Him in worship and receive His blessing.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 67 calls us to expand our vision of God\'s work in the world. We are not meant to think of salvation as a private transaction between ourselves and God. We are part of a larger vision: that all peoples, all nations, all humanity might come to know God\'s way and His saving health. Our own blessing is connected to this universal purpose. The earth\'s flourishing is connected to the nations\' alignment with God. We are called to work, to witness, to pray, and to live in such a way that God\'s way becomes known and the peoples are drawn to praise.',
        },
        {
          kind: 'reflection',
          id: 'psalms67-nations-see',
          prompt:
            'What part are you called to play in making God\'s way known among the nations? Whether through work, relationships, testimony, or prayer, how might your life contribute to the vision of all peoples praising God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God be merciful unto us, and bless us; and cause his face to shine upon us; That thy way may be known upon earth, thy saving health among all nations.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 67 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-67',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 67 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.67',
      description: 'Blessing hymn for all nations with Jewish commentary.',
    },
    {
      id: 'bibleodyssey-hymns-praise',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Hymns of Praise in the Psalter',
      url: 'https://www.bibleodyssey.org/articles/hymns/',
      description: 'SBL essay on the hymn genre — communal, doxological psalms that frame the Psalter&apos;s arc.',
    },

  ],

  hasHebrew: true,
};
