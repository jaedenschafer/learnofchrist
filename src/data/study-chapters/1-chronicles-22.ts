import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 22 — David Prepares for the Temple; Charges Solomon
 *
 * David is denied the privilege of building the temple because he was a man of
 * war. But he will not sit idle. Instead, he prepares abundantly: 100,000 talents
 * of gold, 1,000,000 talents of silver, timber, stone, craftsmen. He identifies
 * the threshing floor of Ornan as the future site. Then he calls his son Solomon
 * — whose name means "his peace" — and charges him to build God&apos;s house. The
 * principle emerges: the right person at the right time. David prepares; Solomon
 * executes. A man of war cannot lay the foundation of peace. But his preparation
 * makes the builder&apos;s work possible. And behind both stands a greater pattern —
 * the Father preparing the way, and the Son whose kingdom is peace.
 */
export const CHRONICLES_1_22: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 22,

  intros: [
    'David has conquered Jerusalem. He has brought the ark of the covenant into the city. He has gathered the strangers in the land and commanded them to prepare stone and timber. His heart is full of the vision: a house for the Lord God of Israel, a place of worship worthy of the eternal King.',
    'But there is a word the Lord has spoken to him, and David does not resist it. He was a man of blood. His hands have shed much blood in great wars. He will not build the temple of the Lord God. Instead, something more difficult: he will prepare for another to build it. He will gather the materials, marshal the resources, and then hand them to his son Solomon. This is the work of a king who understands his own limitations and trusts God&apos;s larger plan.',
    'In this chapter, we see the principle of divine timing: the right person in the right season. David could not be the temple-builder. But his preparation, his vision, his gathering of materials — these make Solomon&apos;s work possible. And as we read of David&apos;s charge to Solomon, we hear words that echo across the centuries, words spoken also to Joshua at the threshold of the Promised Land: "Be strong and of good courage." In Solomon&apos;s name — Shelomoh, "his peace" — we glimpse the One whose kingdom will be built on peace, the One whose Father prepared all things before the foundation of the world.',
  ],

  sections: [
    /* ─── 1 Chronicles 22:1–2 — The Threshing Floor Identified ───────────── */
    {
      ref: '1 Chronicles 22:1–2',
      title: 'The Threshing Floor — The Temple Site Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('Then David said, '),
                hg('This is the house of the Lord God, and this is the altar of the burnt offering for Israel', 'chr22-altar-identified'),
                t('.'),
              ],
            },
            plain(2, 'And David commanded to gather together the strangers that were in the land of Israel; and he set masons to hew wrought stones to build the house of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr22-altar-identified',
          html:
            'David stands on the threshing floor of Ornan, the place where the Lord halted a plague by fire upon the altar. And in this moment of recognition, David declares: "This is the house of the Lord God, and this is the altar of the burnt offering for Israel." Not "this will be." Not "God has promised." But "this is" — as if the temple were already built in his vision, already consecrated by what has happened here. David sees what others do not yet see. The work has begun in his heart before the first stone is laid.',
        },
        {
          kind: 'commentary',
          html:
            'David then commands the strangers in the land of Israel — the resident aliens and servants — to gather and to hew wrought stones. The temple is not the work of priests alone. It is the work of a people. The foreigner, the stranger, the one not yet fully incorporated into the congregation — all have a part in the preparation. This prefigures a truth that will reach its fullness in Christ: that the temple of God is built not from one people, but from many peoples brought together in covenant.',
        },
        {
          kind: 'hebrew',
          id: 'chr22-bayit',
          title: 'Bayit — "House"',
          script: 'בַּיִת',
          translit: '<strong>Bayit</strong> · house; dwelling place; temple',
          description:
            'The word "bayit" encompasses both the ordinary dwelling and the sacred temple. When David says "this is the house of the Lord," he uses the same word he would use for his own palace. There is no elevated vocabulary needed — the Lord&apos;s house is his dwelling place, his home on earth, the place where He is met.',
        },
        {
          kind: 'carry',
          html:
            'David recognizes a place before it is built. He sees the future and names it. Do you recognize the work God is calling you to, even before its completion? Do you see the larger picture of what God is building in your life and speak it aloud, even when others see only an ordinary threshing floor?',
        },
        {
          kind: 'reflection',
          id: 'chr22-recognize',
          prompt: 'When have you recognized God&apos;s work before it was complete? How did you respond to what you saw?',
        },
      ],
    },

    /* ─── 1 Chronicles 22:3–5 — David&apos;s Abundant Preparation ────────────── */
    {
      ref: '1 Chronicles 22:3–5',
      title: 'The Staggering Preparation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 3,
              spans: [
                t('And David prepared '),
                hg('iron in abundance', 'chr22-iron-abundance'),
                t(' for the nails and the joinings; and brass in abundance without weight; cedar trees in abundance: for the Zidonians and they of Tyre brought much cedar wood to David.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And David said, Solomon my son is young and tender, and the house that is to be builded for the Lord must be '),
                hg('exceeding magnifical, of fame and of glory throughout all countries', 'chr22-magnifical'),
                t(': I will therefore now make preparation for it. So David prepared abundantly before his death.'),
              ],
            },
            plain(5, 'Then he called for Solomon his son, and charged him to build an house for the Lord God of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr22-iron-abundance',
          html:
            'Iron for nails, brass for joinings, cedar trees — not just sufficient quantities, but abundance without measure. The text emphasizes the generosity and scale: "iron in abundance," "brass without weight," "cedar trees in abundance." This is not mere provision. This is overwhelming preparation. David is pouring his wealth, his authority, his vision into the materials for a house he will not build. This is the work of a man who understands that his legacy lies not in doing, but in enabling another to do.',
        },
        {
          kind: 'commentary',
          id: 'chr22-magnifical',
          html:
            'The word "magnifical" — exceeding great, surpassingly splendid — captures David&apos;s vision. This house is not to be merely functional. It is to be of fame and glory throughout all countries. It is to be a witness to the nations that the God of Israel is great. David&apos;s vision extends beyond Israel&apos;s borders. He imagines a temple so beautiful, so well-built, that distant peoples will hear of it and know the greatness of the God it honors.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, '(Later: 1 Chronicles 22:14–16 — The Full Measure of Preparation) "Now, behold, in my trouble I have prepared for the house of the Lord an hundred thousand talents of gold, and a thousand thousand talents of silver; and of brass and iron without weight; for it is in abundance... the workmen also are with thee in abundance, hewers and workers of stone and timber, and all manner of cunning men for every manner of work."'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'One hundred thousand talents of gold. One million talents of silver. To translate these staggering numbers: 100,000 talents of gold would be approximately 3,750 tons. This is not a building project. This is a national sacrifice. David is placing into Solomon&apos;s hands resources of almost incomprehensible scale. No single temple could use all of this. But David gives it all, trusting that what is left will be for the ongoing work of worship, for the priesthood, for generations of sacrifices. He gives not what is convenient, but what costs him.',
        },
        {
          kind: 'hebrew',
          id: 'chr22-kabed',
          title: 'Kabed — "Heavy" or "Weighty"',
          script: 'כָּבֵד',
          translit: '<strong>Kabed</strong> · heavy; to be heavy with wealth or honor',
          description:
            'David&apos;s preparation is described as kabed — weighty, heavy with significance and substance. In Hebrew, the same word can mean both "heavy" (physically weighty) and "heavy" (bearing great importance or honor). David&apos;s work is both literally heavy — mountains of materials — and spiritually heavy with purpose and glory.',
        },
        {
          kind: 'carry',
          html:
            'David prepares abundantly, pouring resources into a work he will not see completed. This is not obligation. It is love. It is the willingness to enable another&apos;s calling at great cost to yourself. In your own life, where are you called to prepare the way for others? What are you willing to give so that another may build?',
        },
        {
          kind: 'reflection',
          id: 'chr22-abundance',
          prompt: 'David prepares with abundance, not scarcity. What keeps you from preparing abundantly for work that will outlive you? What would it look like to trust God&apos;s provision that deeply?',
        },
      ],
    },

    /* ─── 1 Chronicles 22:6–9 — The Charge to Solomon; The Name of Peace ────── */
    {
      ref: '1 Chronicles 22:6–9',
      title: 'The Name of Peace — Solomon and the Builder',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 6,
              spans: [
                t('And he said unto Solomon his son, As for me, it was in my mind to build an house unto the name of the Lord my God:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('But the word of the Lord came to me, saying, Thou hast '),
                hg('shed blood abundantly', 'chr22-shed-blood'),
                t(', and hast made great wars: thou shalt not build an house unto my name, because thou hast shed much blood upon the earth in my sight.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Behold, a son shall be born to thee, who shall be a man of '),
                hp('rest', 'chr22-rest-menuchah'),
                t('; and I will give him rest from all his enemies round about: for his name shall be '),
                hp('Solomon', 'chr22-solomon-shelomoh'),
                t(', and I will give peace and quietness unto Israel in his days.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('He shall build an house for my name; and he shall be my son, and I will be his father; and I will establish the throne of his kingdom over Israel for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr22-shed-blood',
          html:
            'David does not hide from the word of the Lord. He tells Solomon plainly: I am a man of war. I have shed blood abundantly. I have made great wars. And because of this — not as punishment, but as a matter of divine order — I will not build the temple. There is a principle here: the builder must be suited to the work. David was suited to conquer. Solomon is suited to build in peace. The principle applies beyond temples: the one who breaks ground is not always the one who should plant the garden.',
        },
        {
          kind: 'commentary',
          id: 'chr22-rest-menuchah',
          html:
            '"A son shall be born to thee, who shall be a man of rest." The Hebrew word is menuchah — rest, peace, a place of dwelling. Not rest as idleness, but rest as the stability needed for sacred work. A man of rest does not rage. He does not conquer by the sword. He creates space where others can worship, where the people can dwell in safety under the shelter of God&apos;s house.',
        },
        {
          kind: 'hebrew',
          id: 'chr22-solomon-shelomoh',
          title: 'Shelomoh — "Solomon" or "His Peace"',
          script: 'שְׁלֹמֹה',
          translit: '<strong>Shelomoh</strong> · Solomon; from shalom (peace)',
          description:
            'The name Solomon comes from the Hebrew shalom, peace. But more precisely, Shelomoh means "his peace" — the peace belonging to God, given to Israel through the son. This is not a generic peace, but a specific divine gift. When a son is born and named Solomon, he is given a name that prophesies what his reign will accomplish: he will be the channel through which God gives peace to His people.',
        },
        {
          kind: 'commentary',
          html:
            'And God speaks of His relationship to Solomon in language of covenant permanence: "He shall be my son, and I will be his father." These are the words of adoption, of binding love. Just as God called David His son (2 Samuel 7:14), so God calls Solomon His son. The line of covenant passes through both, and the promise of an everlasting throne reaches through them toward its ultimate fulfillment.',
        },
        {
          kind: 'christ',
          id: 'chr22-christ-prince-peace',
          title: 'Christ Connection — The Prince of Peace',
          html:
            'In Solomon we see a foreshadowing of Christ. Solomon is the son born in peace, who receives a throne that will be established forever. But when we turn to the prophet Isaiah, we hear words that echo this pattern and exceed it: "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace" (Isaiah 9:6). The Prince of Peace — this is Christ. His kingdom is not built on conquest, but on the restoration of the broken relationship between God and humanity. And His throne will be established forever, not over a temporal Israel, but over all creation. The Father prepared all things; the Son executes the eternal covenant. Solomon is the pattern; Christ is the fulfillment.',
        },
        {
          kind: 'carry',
          html:
            'Do you resist the word God speaks to you about your own limitations? David does not. He accepts that he is not the builder. And in that acceptance, he becomes something more important: the preparer, the one who makes the way possible. Sometimes our greatest contribution is not the work we do ourselves, but the work we enable others to do. This requires humility. It requires trust. It requires the willingness to step aside and bless what another accomplishes.',
        },
        {
          kind: 'reflection',
          id: 'chr22-solomon-charge',
          prompt: 'What work is God calling you to that requires you to step aside and trust another to complete? How does accepting your own limitations change the way you serve?',
        },
      ],
    },

    /* ─── 1 Chronicles 22:11–13 — "Be Strong and of Good Courage" ────────── */
    {
      ref: '1 Chronicles 22:11–13',
      title: 'Be Strong and of Good Courage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 11,
              spans: [
                t('Now, my son, the Lord be with thee; and prosper thou, and build the house of the Lord thy God, as he hath said of thee.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Only the Lord give thee wisdom and understanding, and give thee charge concerning Israel, that thou mayest '),
                hg('keep the law of the Lord thy God', 'chr22-keep-law'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Then shalt thou prosper, if thou takest heed to fulfil the statutes and judgments which the Lord charged Moses with concerning Israel: '),
                hp('Be strong, and of good courage', 'chr22-strong-courage'),
                t('; dread not, nor be dismayed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr22-keep-law',
          html:
            'David does not charge Solomon merely to build. He charges him to keep the law of the Lord thy God. The temple is not merely a building. It is the sign of covenant obedience. To build the house without keeping the law would be to build on sand. The prosperity promised to Solomon flows from obedience to the statutes and judgments given to Moses. David understands that the greatest offering is not stone or gold, but a heart turned toward God.',
        },
        {
          kind: 'hebrew',
          id: 'chr22-chazak',
          title: 'Chazak ve&apos;Ematz — "Be Strong and of Good Courage"',
          script: 'חָזַק וֶאֱמָץ',
          translit: '<strong>Chazak ve&apos;ematz</strong> · be strong and courageous; be firm and steadfast',
          description:
            'These are the same words spoken to Joshua at the threshold of the Promised Land: "Be strong and of good courage" (Joshua 1:6–9). They appear in the face of an overwhelming task — the conquest of a land, the building of a temple, the leading of a people. They are words that acknowledge the difficulty of the work, while affirming that God is present. To be strong and courageous is not to be without fear, but to move forward in spite of fear, trusting in God&apos;s presence.',
        },
        {
          kind: 'commentary',
          id: 'chr22-strong-courage',
          html:
            'David speaks to Solomon as a father speaks to a son at a threshold moment. The work ahead is great. The responsibility is immense. "Dread not, nor be dismayed," David says — not because the work is easy, but because the Lord is present. The word that steadied Joshua at the entrance to Canaan now steadies Solomon at the threshold of temple-building. Both are called to a work that exceeds their own strength, and both are invited to trust in a strength beyond themselves.',
        },
        {
          kind: 'carry',
          html:
            'What work stands before you that feels too large, too costly, too demanding for your own strength? David&apos;s charge to Solomon is also the Lord&apos;s charge to you: "Be strong and of good courage; dread not, nor be dismayed." Not because the task is small, but because the God who called you is greater than any task He sets before you.',
        },
        {
          kind: 'reflection',
          id: 'chr22-strong-courage-reflection',
          prompt: 'When have you been called to something that required courage and trust in God rather than confidence in your own ability? How did you move forward?',
        },
      ],
    },

    /* ─── 1 Chronicles 22:14–19 — The Command to the Princes of Israel ────── */
    {
      ref: '1 Chronicles 22:14–19',
      title: 'The Command to the Princes — All Israel Serves the Work',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 14,
              spans: [
                t('Now, behold, in my trouble I have prepared for the house of the Lord an hundred thousand talents of gold, and a thousand thousand talents of silver; and of brass and iron without weight; for it is in abundance: timber also and stone have I prepared; and thou mayest add thereto.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Moreover there are workmen with thee in abundance, hewers and workers of stone and timber, and all manner of cunning men for every manner of work.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Of the gold, the silver, and the brass, and the iron, there is no number. Arise therefore, and be doing, and the Lord be with thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('David also commanded all the princes of Israel to help Solomon his son, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Is not the Lord your God with you? and hath he not given you rest on every side? for he hath given the inhabitants of the land into mine hand; and the land is subdued before the Lord, and before his people.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Now '),
                hg('set your heart and your soul to seek the Lord your God', 'chr22-seek-god'),
                t('; arise therefore, and build ye the sanctuary of the Lord God, to bring the ark of the covenant of the Lord, and the holy vessels of God, into the house that is to be built to the name of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr22-seek-god',
          html:
            'David calls the princes to a work of faith, not mere labor. "Set your heart and your soul to seek the Lord your God." This is not a building project managed from a distance. This is a pilgrimage. Each person who works on the temple walks in a deeper knowledge of God. The prince who hauls stones, the craftsman who cuts timber — all are on a journey toward deeper covenant with the God whose house they build.',
        },
        {
          kind: 'commentary',
          html:
            'David reminds the princes of what God has already done: "Is not the Lord your God with you? and hath he not given you rest on every side?" The work of the temple is not a work of desperation or fear. It flows from security. The land is subdued. The enemies are at peace. Now, in this season of rest, the people are called to the deeper work — not the work of conquest, but the work of worship.',
        },
        {
          kind: 'commentary',
          html:
            'The purpose of all this labor is now made clear: to bring the ark of the covenant of the Lord, and the holy vessels of God, into the house. The temple is not an end in itself. It is a container for the holy things — the ark that represents God&apos;s presence, the vessels that hold the remembrance of what God has done. The entire nation labors so that Israel may have a place to meet God, to be reminded of His covenant, to pass on the knowledge of His ways to future generations.',
        },
        {
          kind: 'carry',
          html:
            'What are you building for? Not for yourself, not for fame, but to create a place where others can meet God. The work that seems hidden, hard, or costly is the work that makes worship possible. When you serve in ways no one notices, you are part of the larger work: preparing a place where others encounter the holy.',
        },
        {
          kind: 'reflection',
          id: 'chr22-seek-goal',
          prompt: 'Where in your life are you building with your whole heart and soul, not just your hands? What makes the work matter more than the effort it costs?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 22',
    quote:
      'David prepares abundantly for a house he will not build. Solomon, the man of peace, will execute the work. This is the pattern: the Father prepares; the Son builds. David teaches us that our greatest legacy may lie not in what we accomplish ourselves, but in what we enable others to accomplish.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 22 · Study Guide',
  },

  hasHebrew: true,
};
