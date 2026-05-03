import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 16 — David Anointed; "The Lord Looketh on the Heart"
 *
 * After Saul&apos;s rejection, the Lord sends Samuel to Bethlehem to anoint the
 * next king from among Jesse&apos;s sons. But as Samuel looks at each brother in turn,
 * he is stopped — not by what he sees, but by what God sees. "Man looketh on
 * the outward appearance, but the Lord looketh on the heart." David, the youngest,
 * the shepherd, the overlooked, is anointed in secret among his brothers. And in
 * that moment, the Spirit of the Lord comes upon him, and departs from Saul.
 *
 * The scene closes with David, the future king, soothing the rejected king with
 * a harp — a portrait of Christ ministering to His enemies, and a foreshadowing
 * of the broken kingdom made whole.
 */
export const SAMUEL_1_16: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 16,

  estimatedMinutes: { beginner: 3, intermediate: 12, deep: 15 },
  intros: [
    'The book of Samuel turns here — from the end of one dynasty to the beginning of another. Saul is rejected. The kingdom is being torn from his hand. And the Lord tells Samuel: "How long wilt thou mourn for Saul, seeing I have rejected him from reigning over Israel?" The task now is to anoint a new king, but not through power or armies or the counsel of men. Instead, the Lord will choose.',
    'David&apos;s anointing happens in secret, in a small Bethlehem town, in the house of a shepherd named Jesse. It is not a coronation with trumpets. It is not witnessed by priests or elders or the people of Israel. It is a private act, a hidden act, a mystery. And it is this very hiddenness that teaches the chapter&apos;s central truth: "Man looketh on the outward appearance, but the Lord looketh on the heart." The God who chooses does not look as men look. He sees what is invisible to us — the heart of a shepherd boy, and in that heart, a king.',
  ],

  opener: {
    matchArtist: /rembrandt|tissot|corot/i,
    matchTitle: /david|samuel|anointed|jesse/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 16',
    quote:
      'Samuel was sent to anoint a new king in Jesse&apos;s house, but he looked on outward appearance while the Lord looked on the heart. David, the youngest shepherd, was anointed, and the Spirit of the Lord came upon him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 16 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-samuel-anoints',
      kind: 'study',
      source: 'Sefaria',
      label: 'Samuel Anoints David',
      url: 'https://www.sefaria.org/1_Samuel.16',
      description: 'Samuel&apos;s secret anointing of young David as God&apos;s chosen king over Israel.',
    },
    {
      id: 'bible-odyssey-david-king',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'David: From Shepherd to King',
      url: 'https://www.bibleodyssey.org/dictionary/david/',
      description: 'David&apos;s rise from obscurity to become Israel&apos;s greatest and most celebrated king.',
    },
    {
      id: 'iaa-david-evidence',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Archaeological Evidence for David',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological corroboration of David&apos;s existence and reign in Iron Age Judah.',
    },
  ],

  sections: [
    /* ─── 1 Samuel 16:1–5 — Samuel Sent to Bethlehem ──────────────────── */
    {
      ref: '1 Samuel 16:1–5',
      title: 'Samuel Sent to Bethlehem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              1,
              'And the Lord said unto Samuel, How long wilt thou mourn for Saul, seeing I have rejected him from reigning over Israel? fill thine horn with oil, and go, I will send thee to Jesse the Bethlehemite: for I have provided me a king among his sons.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mourn-saul',
          html:
            'The Lord cuts off Samuel&apos;s grief. Samuel has been mourning Saul — a king rejected, a calling failed, a hope shattered. But God says: enough. I have already chosen another. The chapter will not be about Saul&apos;s tragedy, though it hovers in the background. It will be about the God who sees beyond the rejected king to the one hidden in the fields[res:sefaria-samuel-anoints][res:bible-odyssey-david-king][res:iaa-david-evidence].',
        },
        {
          kind: 'commentary',
          id: 'c-horn-oil',
          html:
            'Samuel is to fill his horn with oil — the sign of anointing, the mark of kingship. He will carry this oil to Bethlehem, and he will anoint one of Jesse&apos;s sons as king. But the journey itself is dangerous. Saul will hear of it and may kill him.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              2,
              'And Samuel said, How can I go? if Saul hear it, he will kill me. And the Lord said, Take an heifer with thee, and say, I am come to sacrifice to the Lord:'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear-saul',
          html:
            'Samuel&apos;s fear is real. Saul is still king, still powerful, still capable of violence against anyone he perceives as a threat. Samuel is a prophet, but he is also a man. He is afraid. And the Lord gives him a cover for his journey — a heifer for sacrifice. He will go to Bethlehem as a priest, not as an anointer of kings.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              3,
              'And call Jesse to the sacrifice, and I will shew thee what thou shalt do: and thou shalt anoint unto me him whom I name unto thee.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-i-will-shew',
          html:
            'The Lord will show Samuel whom to anoint. Samuel does not choose. He does not judge by appearance or by the order of birth or by strength or by any visible standard. When he arrives, the Lord will speak, and Samuel will obey.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              4,
              'And Samuel did that which the Lord spake, and came to Beth-lehem. And the elders of the town trembled at his coming, and said, Comest thou peaceably?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-trembled',
          html:
            'The elders of Bethlehem tremble at Samuel&apos;s coming. Prophets do not arrive casually. When a man of God appears, it carries weight — the weight of divine purpose. The elders ask if his coming is peaceful. They sense that something is afoot.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              5,
              'And he said, Peaceably: I am come to sacrifice unto the Lord: sanctify yourselves, and come with me to the sacrifice. And he sanctified Jesse and his sons, and called them to the sacrifice.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sanctify',
          html:
            'Samuel tells them he has come for a sacrifice. The words are true — there will be a sacrifice, a bullock will be offered. But the deeper purpose is hidden. He sanctifies Jesse and his sons, preparing them for something they do not yet know. They prepare themselves for a meal, but they are being prepared for a king.',
        },
      ],
    },

    /* ─── 1 Samuel 16:6–13 — Seven Sons Pass Before Samuel ─────────────── */
    {
      ref: '1 Samuel 16:6–13',
      title: 'The Seven Brothers Refused',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              6,
              'And it came to pass, when they were come, that he looked on Eliab, and said, Surely the Lord&apos;s anointed is before him.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eliab',
          html:
            'Samuel sees Eliab, the firstborn, and his eye stops. Eliab is tall, he is handsome, he is the oldest — everything that should mark him as king. Samuel, even Samuel the prophet, even Samuel who has been sent by the Lord, looks on the outward appearance.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 7,
              spans: [
                t('But the Lord said unto Samuel, '),
                hp('Look not on his countenance, or on the height of his stature', 'c-look-not'),
                t('; because I have refused him: for '),
                hp('the Lord seeth not as man seeth', 'c-lord-seeth'),
                t('; for '),
                hp('man looketh on the outward appearance, but the Lord looketh on the heart', 'c-heart-looketh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-look-not',
          html:
            'The Lord stops Samuel in the middle of his judgment. Do not look at his appearance, do not look at his height. I have refused him. And in those words is the central principle of the chapter — what you see is not what matters.',
        },
        {
          kind: 'commentary',
          id: 'c-lord-seeth',
          html:
            'The Lord does not see as man sees. This is not merely a statement about divine omniscience. It is a statement about divine values. Men see the exterior and judge by it. God sees the interior and judges by that.',
        },
        {
          kind: 'hebrew',
          id: 'c-heart-looketh',
          title: 'Levav — The Heart',
          script: 'לֵבָב',
          translit: '<strong>Levav</strong> · the heart; the seat of will, understanding, and moral character',
          description:
            'The heart in Hebrew Scripture is not sentimentality or emotion alone. It is the center of the whole person — the place where will and understanding and moral choice reside. When the Lord looks on the heart, He is looking at the actual being, the true character, the deepest reality of who a person is. "The Lord looketh on the heart" — the real self, not the self that walks the streets.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(8, 'Then Jesse called Abinadab, and made him pass before Samuel. And he said, Neither hath the Lord chosen this.'),
          ],
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              9,
              'Then Jesse made Shammah to pass by. And he said, Neither hath the Lord chosen this.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seven-pass',
          html:
            'One by one, seven of Jesse&apos;s sons pass before Samuel. Abinadab — no. Shammah — no. The text does not tell us what Samuel sees in each of them, but it is enough: each one is refused. Each one fails some test that the Lord, looking on the heart, perceives.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(10, 'Again, Jesse made seven of his sons to pass before Samuel. And Samuel said unto Jesse, The Lord hath not chosen these.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-not-chosen',
          html:
            'All seven have passed, and Samuel says it plainly: the Lord has not chosen any of them. Samuel&apos;s certainty is absolute. He is not hesitating or wondering. This is the word of the Lord. None of these seven are the king.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              11,
              'And Samuel said unto Jesse, Are here all thy children? And he said, There remaineth yet the youngest, and, behold, he keepeth the sheep. And Samuel said unto Jesse, Send and fetch him: for we will not sit down till he come hither.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-youngest-shepherd',
          html:
            'There is one more son — the youngest. He is not in the house with the others. He is in the field, keeping the sheep. The youngest and the lowliest. The one who tends the flocks, the one not deemed important enough to be called in. The one least likely to be king. And Samuel says: send and fetch him. We will not sit down until he comes.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              12,
              'And he sent, and brought him in. Now he was ruddy, and withal of a beautiful countenance, and goodly to look to. And the Lord said, Arise, anoint him: for this is he.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-ruddy',
          html:
            'David is brought in. He is ruddy — his face is flushed, his complexion is florid, his appearance is striking and youthful. He is beautiful to look upon. And the Lord says: this is the one. But here is the puzzle: David is also goodly to look at. He is also outwardly handsome. So is the Lord choosing on the basis of appearance? No. The point is deeper: David is beautiful, but his beauty is not the reason. The text mentions his appearance only to show that God&apos;s choice of David overrides the refusal of the others. David is chosen, but not because of what Samuel&apos;s eye can see.',
        },
        {
          kind: 'hebrew',
          id: 'c-admoni',
          title: 'Admoni — Ruddy, Red-Complexioned',
          script: 'אַדְמוֹנִי',
          translit: '<strong>Admoni</strong> · ruddy; red-faced; having a flushed or reddish complexion',
          description:
            'The word "ruddy" carries symbolic weight. It speaks of vigor, youth, life-force. Some traditions associate redness with passion and fire. But the text emphasizes that David&apos;s beauty is not the criterion of choice — it is simply what the eye perceives. The real choosing happens at a level Samuel cannot see.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              13,
              'Then Samuel took the horn of oil, and anointed him in the midst of his brethren: and the Spirit of the Lord came upon David from that day forward. So Samuel rose up and went to Ramah.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-anoint-midst',
          html:
            'Samuel anoints David publicly, in the midst of his brethren. This is not a secret private act. His brothers are there. The elders of the town are there. All are witnesses. The youngest, the shepherd, is anointed king in front of them all. And in that moment, something enters David: the Spirit of the Lord comes upon him.',
        },
        {
          kind: 'hebrew',
          id: 'c-mashach',
          title: 'Mashach — To Anoint',
          script: 'מָשַׁח',
          translit: '<strong>Mashach</strong> · to anoint; to pour oil upon; to consecrate by anointing',
          description:
            'Anointing with oil is an act of consecration and setting apart. It marks someone as chosen, as claimed by God, as belonging to Him. The oil is poured, the person is marked, and from that moment forward they are no longer ordinary — they are set apart for a divine purpose.',
        },
        {
          kind: 'hebrew',
          id: 'c-spirit-ruach',
          title: 'Ruach — The Spirit',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · spirit; breath; the Spirit of God',
          description:
            'When the Spirit of the Lord comes upon David, something divine enters him. The Hebrew word <em>ruach</em> is breath, wind, spirit — the very force of God&apos;s being. It is the same Spirit that rested on the judges, the prophets, the anointed kings. From that day forward, David is no longer merely the shepherd boy. He is anointed and spirit-filled.',
        },
        {
          kind: 'carry',
          html:
            'You may be the youngest in your family, the least noticed, the one kept in the background. You may be tending the flocks while others gather in the hall. You may wonder if there is any calling for you, any purpose, any anointing. But the God who chose David does not choose as the world chooses. He looks on the heart. And He can call the overlooked and make them a king.',
        },
        {
          kind: 'reflection',
          id: 'chosen-heart',
          prompt:
            'What in your heart might the Lord be looking at that the world does not see? Where have you been overlooked, and where is God calling you to step forward?',
        },
      ],
    },

    /* ─── 1 Samuel 16:14–23 — The Spirit Departs from Saul ─────────────── */
    {
      ref: '1 Samuel 16:14–23',
      title: 'The Spirit Departs from Saul, David at His Court',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              14,
              'But the Spirit of the Lord departed from Saul, and an evil spirit from the Lord troubled him.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spirit-departed',
          html:
            'In the same moment that the Spirit comes upon David, the Spirit departs from Saul. This is not coincidence. One king loses the Spirit. Another king receives it. The anointing has shifted. Saul&apos;s era is over. The kingdom is being torn from his hand, and he feels it.',
        },
        {
          kind: 'commentary',
          id: 'c-evil-spirit',
          html:
            'The text says "an evil spirit from the Lord troubled him." This phrase troubles many readers. How can God send an evil spirit? The key is the word "troubled" — the spirit does not possess or control Saul, but rather disturbs him, unsettles him, torments him. Some theologians understand this as God withdrawing His restraining grace, allowing Saul to be oppressed by the darkness he has already chosen. Others see it as God permitting a spirit of despair or madness to afflict him. Either way, the connection is clear: in the absence of God&apos;s Spirit, disorder and darkness move in.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              15,
              'And Saul&apos;s servants said unto him, Behold now, an evil spirit from God troubleth thee.'
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              16,
              'Let our lord now command thy servants, which are before thee, to seek out a man, who is a cunning player on an harp: and it shall come to pass, when the evil spirit from God is upon thee, that he shall play with his hand, and thou shalt be well.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-harp-remedy',
          html:
            'Saul&apos;s servants perceive his disturbance. They offer a remedy: let us find a man who plays the harp, and when the evil spirit troubles you, he shall play, and you shall be well. It is a simple remedy, and yet profound — music to soothe the troubled spirit. Some healings come not through power but through beauty.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(17, 'And Saul said unto his servants, Provide me now a man that can play well.'),
          ],
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              18,
              'Then answered one of the servants, and said, Behold, I have seen a son of Jesse the Bethlehemite, that is cunning in playing, and a mighty valiant man, and a man of war, and prudent in matters, and a comely person, and the Lord is with him.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-servant',
          html:
            'One of Saul&apos;s servants speaks up: I know a man — David of Bethlehem. He plays the harp, he is strong and valiant, he is shrewd and wise, he is comely to look upon, and — most tellingly — the Lord is with him. The servant has perceived what happened in Bethlehem. David is anointed, and it shows. Something about him declares that God is with him.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              19,
              'Wherefore Saul sent messengers unto Jesse, and said, Send me David thy son, which is with the sheep.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-send',
          html:
            'Saul sends for David. The irony deepens: Saul is inviting the man who has been anointed to replace him into his own court. He does not know this. He sees only a young man with a gift for music, someone who might soothe his troubled spirit. But he is summoning his own successor.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              20,
              'And Jesse took an ass laden with bread, and a bottle of wine, and a kid, and sent them by David his son unto Saul.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jesse-gift',
          html:
            'Jesse sends David to the king&apos;s court, and he sends gifts: bread, wine, a young goat. He is honoring the king, showing respect and deference. He does not know that his youngest son, the shepherd, has already been anointed as the future king. The gifts move from the hidden one to the rejected one.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              21,
              'And David came to Saul, and stood before him: and he loved him greatly; and he became his armourbearer.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-loved-greatly',
          html:
            'David arrives, and Saul loves him greatly. Not a casual liking, but a genuine affection. Saul finds in David something he can trust, something that draws his heart. And David enters his service as armourbearer — a place of honor and intimacy, close to the king.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              22,
              'And Saul sent unto Jesse, saying, Let David, I pray thee, stand before me; for he hath found favour in my sight.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-favour',
          html:
            'Saul formally asks Jesse to let David remain at court. He has found favor in the king&apos;s sight. The shepherd boy from Bethlehem is now a man of the king&apos;s household. He is ascending, even as Saul — though he does not yet fully know it — is descending.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 23,
              spans: [
                t('And it came to pass, when the evil spirit from God was upon Saul, that '),
                hy('David took an harp', 'c-david-harp'),
                t(', and '),
                hg('played with his hand', 'c-played'),
                t(': so '),
                hg('Saul was refreshed, and was well, and the evil spirit departed from him', 'c-refreshed'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-harp',
          html:
            'Whenever the evil spirit came upon Saul, David would take up his harp. The beauty of music becomes the antidote to the darkness. There is something about the shepherd&apos;s playing that speaks to the king&apos;s tortured soul.',
        },
        {
          kind: 'commentary',
          id: 'c-played',
          html:
            'David played with his hand — a simple act, but laden with power. The same hand that will hold the slingshot, that will wield the sword, that will hold the scepter, first holds the harp. The future warrior and king is a musician.',
        },
        {
          kind: 'commentary',
          id: 'c-refreshed',
          html:
            'Saul is refreshed. The word implies restoration, revival, a return to himself. The evil spirit departs when David plays. The troubled king finds peace in the presence of the anointed shepherd. This is the last moment of their harmony — soon Saul&apos;s jealousy will rise up, and he will seek to kill the man who has been sent to help him.',
        },
        {
          kind: 'christ',
          id: 'christ-shepherd-king',
          title: 'Christ Connection — The Shepherd-King Anointed',
          html:
            'David is anointed as king while still a shepherd. The New Testament will call Jesus "the good shepherd" and the "King of kings." In Matthew 3:16–17, when Christ is baptized, "the Spirit of God descending like a dove: and lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased." Just as David is anointed and the Spirit comes upon him, so Jesus is anointed with the Spirit at His baptism. Both are chosen not for outward appearance but for the heart; both are kings who serve; both are shepherds to their people. And just as David sooths the troubled Saul with the beauty of music, so Christ offers His peace to those troubled and oppressed by darkness.',
        },
        {
          kind: 'christ',
          id: 'christ-outward-appearance',
          title: 'Christ Connection — "Man Looketh on the Outward Appearance"',
          html:
            'When Jesus walked the earth, He did not appear like a king. He came from Nazareth, a town so small it is barely mentioned elsewhere. He had no earthly power, no armies, no throne. By every outward standard, He was an unlikely Messiah. The religious leaders, who prided themselves on their wisdom and status, rejected Him. They looked on the outward appearance and found Him wanting. But God was looking on the heart — the heart that would empty itself, that would love perfectly, that would die for the redemption of the world. "Behold my servant, whom I have chosen; my beloved, in whom my soul is well pleased" (Matthew 12:18). The same God who looked past the firstborn and chose the youngest looks past the worldly measures of greatness and chooses Christ — and through Him, calls us all to a kingdom not of this world.',
        },
        {
          kind: 'carry',
          html:
            'The chapter closes with David playing his harp for a troubled king, and the evil spirit departing. There is power in presence, in faithfulness, in the quiet offering of what you have — a song, a gift, a willingness to serve. You may feel overlooked. You may be in a place where the great and important pass by you. But the God who chose David in the fields is still looking on hearts. And if you are faithful in what seems small, He will set you in a place far greater than you imagine.',
        },
        {
          kind: 'reflection',
          id: 'king-and-servant',
          prompt:
            'David is both the anointed king and the servant to the troubled king. Where in your life are you called to be both — to know your own worth and calling, and yet to serve faithfully in the place you are right now?',
        },
      ],
    },
  ],
};
