import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Chronicles 15 — The Ark Brought Home Rightly
 *
 * David learned hard lessons from chapter 13's disaster. When the ark was
 * carried on a cart instead of by Levite hands on staves, Uzzah died and the
 * ark stalled for three months. Now David assembles the people again, with
 * the proper reverence: the Levites sanctify themselves, the singers and
 * musicians organize under the chiefs Heman, Asaph, and Ethan, and the
 * procession moves with both joy and order. The ark comes home to the city of
 * David with shouting, music, and David dancing in the ephod. But Michal
 * watches from a window and despises him in her heart — the unbelieving eye,
 * the heart that cannot see worship in the king's joy.
 *
 * This chapter teaches us about the importance of approaching God by His
 * appointed means, about the sacredness of order in worship, about the courage
 * it takes to worship freely, and about the danger of a divided heart.
 */
export const CHRONICLES_1_15: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 15,

  estimatedMinutes: { beginner: 4, intermediate: 9, deep: 14 },
  intros: [
    'The first attempt to bring the ark of God to Jerusalem ended in tragedy. In 1 Chronicles 13, David assembled Israel, and the ark was placed on a new cart — the way the Philistines had transported it. When the oxen stumbled, Uzzah reached out to steady it and was struck dead on the spot. The God who gives life guards the holiness of His presence. David learned that day that the ark of the covenant was not to be carried by cart, but by Levites, on their shoulders, with the wooden staves that God had appointed.',
    'After three months of waiting — the ark resting in the house of Obed-edom, and the Lord blessing that household abundantly — David was ready to try again. But this time, nothing would be left to assumption. The Levites would be sanctified. The singers and musicians would be appointed by name, with instruments and song. The elders and captains would go to bring the ark up "with joy." This is a chapter about learning to approach God the way He has ordained — not from human convenience, but from reverence, from order, and from the joy that comes when we align our worship to His will.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 15',
    quote:
      'David learned that the ark of God was to be carried by Levites, sanctified and set apart. Worship belongs to those who have prepared their hearts. The procession came with joy and music — but also with order, care, and reverence for the holiness of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 15 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 15:1–3 — A Place Prepared, a Purpose Declared ──── */
    {
      ref: '1 Chronicles 15:1–3',
      title: 'A Place Prepared, a Purpose Declared',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'And David made him houses in the city of David, and prepared a place for the ark of God, and pitched for it a tent.'),
            plain(2, 'Then David said, None ought to carry the ark of God but the Levites: for them hath the Lord chosen to carry the ark of God, and to minister unto him for ever.'),
            plain(3, 'And David gathered all Israel together to Jerusalem, to bring up the ark of the Lord unto his place, which he had prepared for it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'place-prepared',
          html:
            'David has prepared a physical place for the ark — a tent in Jerusalem, the city of David. But more than that, he has prepared his mind. He knows now what he learned in chapter 13: the ark of God is not carried by human ingenuity or by making it convenient. It is carried by those whom the Lord has chosen. The Levites. And only the Levites.',
        },
        {
          kind: 'hebrew',
          id: 'leviyyim-chosen',
          title: 'Leviyyim — "The Levites"',
          script: 'לְוִיִּם',
          translit: '<strong>Leviyyim</strong> · Levites; descendants of Levi, set apart for sacred service',
          description:
            'The Levites are the tribe chosen by God to care for the tabernacle, to minister before Him, to carry the sacred vessels. They are not chosen by David&apos;s decision; they are chosen by the Lord. The text emphasizes this: "the Lord chose." To carry the ark is a privilege and a responsibility that belongs to a set-apart people, prepared and sanctified for holy work.',
        },
        {
          kind: 'carry',
          html:
            'There are things in life that cannot be done by anyone, in any way. The God who cares about order cares about reverence, about boundaries, about who approaches His holiness. This is not arbitrary — it is the structure of creation itself. We cannot come to God however we please. We come by the way He has made open. And that way is always through sanctified hearts.',
        },
        {
          kind: 'reflection',
          id: 'place-prepared-reflect',
          prompt: 'What does it mean that God has chosen certain people for certain tasks? How does this shape the way we think about spiritual leadership and authority?',
        },
      ],
    },

    /* ─── 1 Chronicles 15:4–13 — Sanctify Yourselves ────────────────────── */
    {
      ref: '1 Chronicles 15:4–13',
      title: 'Sanctify Yourselves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(4, 'And David assembled the children of Aaron and the Levites:'),
            plain(5, 'Of the sons of Kohath; Uriel the chief, and his brethren an hundred and twenty:'),
            plain(6, 'Of the sons of Merari; Asaiah the chief, and his brethren two hundred and twenty:'),
            plain(7, 'Of the sons of Gershom; Joel the chief, and his brethren an hundred and thirty:'),
            plain(8, 'Of the sons of Elizaphan; Shemaiah the chief, and his brethren two hundred:'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr15-priests-prepared',
          html:
            'Sons of Aaron, sons of Levi — David names every house that will carry the ark. The first attempt failed because anyone could touch it; this time only consecrated hands will.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(9, 'Of the sons of Hebron; Eliel the chief, and his brethren fourscore:'),
            plain(10, 'Of the sons of Uzziel; Amminadab the chief, and his brethren an hundred and twelve.'),
            plain(11, 'And David called for Zadok and Abiathar the priests, and for the Levites, for Uriel, Asaiah, and Joel, Shemaiah, and Eliel, and Amminadab,'),
            {
              number: 12,
              spans: [
                t('And said unto them, Ye are the chief of the fathers of the Levites: '),
                hg('sanctify yourselves, both ye and your brethren', 'sanctify-command'),
                t(', that ye may bring up the ark of the Lord God of Israel unto the place that I have prepared for it.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('For because ye did it not at the first, the Lord our God made a breach upon us, '),
                hp('for that we sought him not after the due order', 'due-order'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'family-heads',
          html:
            'David gathers the Levites by their family heads — six of them, each with their brethren. The precision here is important. The Levites are not a random collection; they are a structured, covenantal people. They know their genealogy, their lineage, their place in the sacred order. And they are now called together for a sacred task.',
        },
        {
          kind: 'commentary',
          id: 'sanctify-command',
          html:
            'David&apos;s command is stark: "Sanctify yourselves." Not "prepare the cart." Not "gather the musicians." But "sanctify yourselves and your brethren." Sanctification is a preparation of the heart, a separating from the ordinary, a setting apart for the sacred. It is an act of will and of grace. The Levites must approach this sacred work not as they approach any other task, but as a priesthood prepared in body and spirit.',
        },
        {
          kind: 'hebrew',
          id: 'qadash-sanctify',
          title: 'Qadash — "Sanctify" or "Make Holy"',
          script: 'קָדַשׁ',
          translit: '<strong>Qadash</strong> · to sanctify; to set apart; to make holy',
          description:
            'To sanctify is not merely to be clean. It is to be separated from the common, set apart for God&apos;s purpose. It involves ritual washing (later), purification of mind and heart, and a deliberate turning of oneself toward God. When David calls on the Levites to sanctify themselves, he is calling them to a state of reverent readiness — not casual, not convenient, but wholly dedicated.',
        },
        {
          kind: 'commentary',
          id: 'due-order',
          html:
            'Here is the painful truth David has learned: "We sought him not after the due order." In chapter 13, they sought God&apos;s blessing, but not in the way He had ordained. They used a cart. They did not sanctify themselves. And Uzzah died, and the ark stalled. The Lord made "a breach" — a breach of judgment, a breaking open. And it happened precisely because they did not seek God according to His appointed way.',
        },
        {
          kind: 'hebrew',
          id: 'mishpat-order',
          title: 'Mishpat — "Due Order" or "Judgment"',
          script: 'מִשְׁפָּט',
          translit: '<strong>Mishpat</strong> · judgment; order; the right way; a decree',
          description:
            'Mishpat is the divinely ordained order of things. It is not arbitrary custom; it is the structure God has woven into creation itself. To seek God "after the due order" is to align ourselves with how God has made the world to work — including how we are to approach His holiness. To ignore mishpat is to invite judgment.',
        },
        {
          kind: 'carry',
          html:
            'How many times do we approach God, approach our callings, approach sacred things with a kind of casual confidence — "we have good intentions, surely that is enough"? David learned that it is not. God has appointed a way. And if we will not walk that way, the breach comes not from God&apos;s indifference, but from His terrible care for holiness. Our sanctification is not optional. It is the price of approaching Him.',
        },
        {
          kind: 'reflection',
          id: 'sanctify-reflect',
          prompt: 'What does it mean for you to sanctify yourself — to set yourself apart — when you approach God in prayer, study, or worship? What would change if you took this more seriously?',
        },
      ],
    },

    /* ─── 1 Chronicles 15:14–24 — The Levites Bear the Ark ──────────────── */
    {
      ref: '1 Chronicles 15:14–24',
      title: 'The Levites Bear the Ark',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(14, 'So the priests and the Levites sanctified themselves to bring up the ark of the Lord God of Israel.'),
            {
              number: 15,
              spans: [
                t('And the children of the Levites '),
                hy('bare the ark of God upon their shoulders with the staves thereon', 'levites-bear'),
                t(', as Moses commanded according to the word of the Lord.'),
              ],
            },
            plain(16, 'And David spake to the chief of the Levites to appoint their brethren to be the singers with instruments of musick, psalteries, harps, and cymbals, sounding, by lifting up the voice with joy.'),
            plain(17, 'So the Levites appointed Heman the son of Joel; and of his brethren, Asaph the son of Berechiah; and of the sons of Merari their brethren, Ethan the son of Kushaiah;'),
            plain(18, 'And with them their brethren of the second degree, Zechariah, Ben, and Jaaziel, and Shemiramoth, and Jehiel, and Unni, Eliab, and Benaiah, and Maaseiah, and Mattithiah, and Elipheleh, and Mikneiah, and Obed-edom, and Jeiel, the porters.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr15-bearers-named',
          html:
            'These are the families David assigns to carry the ark — sanctified Levites, no shortcuts this time. The first attempt ended in Uzzah&apos;s death because the bearers were wrong; this list is the chronicler&apos;s way of saying David has finally read the manual.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(19, 'So the singers, Heman, Asaph, and Ethan, were appointed to sound with cymbals of brass;'),
            plain(20, 'And Zechariah, and Aziel, and Shemiramoth, and Jehiel, and Unni, and Eliab, and Maaseiah, and Benaiah, with psalteries on Alamoth;'),
            plain(21, 'And Mattithiah, and Elipheleh, and Mikneiah, and Obed-edom, and Jeiel, and Azaziah, with harps on the Sheminith to excel.'),
            plain(22, 'And Chenaniah, chief of the Levites, was for song: he instructed about the song, because he was skilful.'),
            plain(23, 'And Berechiah and Elkanah were doorkeepers for the ark.'),
            plain(24, 'And Shebaniah, and Jehoshaphat, and Nathanael, and Amasai, and Zechariah, and Benaiah, and Eliezer, the priests, did blow with the trumpets before the ark of God: and Obed-edom and Jehiah were doorkeepers for the ark.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'levites-bear',
          html:
            'Now the Levites do what they were chosen to do. They bear the ark "upon their shoulders with the staves thereon" — not on a cart, not by human machinery, but by human strength and sacred duty. And it is done "as Moses commanded according to the word of the Lord." There is no innovation here. This is obedience to what God Himself ordained when the tabernacle was built in the wilderness.',
        },
        {
          kind: 'commentary',
          id: 'singers-appointed',
          html:
            'But the ark is not carried in silence. David appoints singers and musicians — a whole order of them. Heman, Asaph, and Ethan, the chief singers, with bronze cymbals. Others with psalteries and harps on different registers. Priests with trumpets. This is not chaos or spontaneous joy. This is organized, intentional music — music created for this sacred moment.',
        },
        {
          kind: 'commentary',
          id: 'chenaniah-master',
          html:
            'Chenaniah, the chief of the Levites, is appointed for song — and we are told "he instructed about the song, because he was skilful." Here is a sacred art form with a director. Chenaniah knows music not as entertainment, but as ministry. He is skilled, and his skill is placed in service of the ark&apos;s journey. This is a picture of music integrated into worship — not imposed from outside, but arising from the order and joy of the people of God.',
        },
        {
          kind: 'hebrew',
          id: 'knenim-skilled',
          title: 'Knenim — "Skilled" or "Understanding"',
          script: 'כֵּן',
          translit: '<strong>Knenim</strong> · understanding; skillfully; with knowledge',
          description:
            'Chenaniah is described as "skilful" — he understands music not as mere technique but as something integrated into the sacred purpose. The Hebrew speaks of understanding, knowledge, the ability to direct something complex toward a right end. His skill is in service of the ark and the assembly.',
        },
        {
          kind: 'carry',
          html:
            'In this passage, we see the full mobilization of a people for a sacred purpose. The Levites carry. The singers sing. The priests blow trumpets. The doorkeepers guard. Every person has a role, and every role is essential. This teaches us that worship is not a solitary act. It is a community engaged together — each with their gift, each with their calling, all moving in the same direction.',
        },
        {
          kind: 'reflection',
          id: 'bearers-reflect',
          prompt: 'What is your role in the worship of God and the carrying of His presence in your community? How do you contribute to the unified joy of the people of God?',
        },
      ],
    },

    /* ─── 1 Chronicles 15:25–29 — The Ark Comes Home ────────────────────── */
    {
      ref: '1 Chronicles 15:25–29',
      title: 'The Ark Comes Home with Joy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(25, 'So David, and the elders of Israel, and the captains over thousands, went to bring up the ark of the covenant of the Lord out of the house of Obed-edom with joy.'),
            plain(26, 'And it came to pass, when God helped the Levites that bare the ark of the covenant of the Lord, that they offered seven bullocks and seven rams.'),
            plain(27, 'And David was clothed with a robe of fine linen, and all the Levites that bare the ark, and the singers, and Chenaniah the master of the song with the singers: David also had upon him an ephod of linen.'),
            plain(28, 'Thus all Israel brought up the ark of the covenant of the Lord with shouting, and with sound of the cornet, with trumpets, and with cymbals, making a noise with psalteries and harps.'),
            {
              number: 29,
              spans: [
                t('And it came to pass, as the ark of the covenant of the Lord came into the city of David, that '),
                hg('Michal the daughter of Saul looking out at a window saw king David dancing and playing', 'michal-sees'),
                t(': and she '),
                t('despised him in her heart'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'elders-captains',
          html:
            'David does not bring up the ark alone. He comes with the elders of Israel and the captains over thousands — the whole leadership of the nation. This is a state act, a solemn assembly. And it is brought "with joy." The text wants us to see both things at once: solemnity and joy, reverence and gladness. These are not opposites.',
        },
        {
          kind: 'commentary',
          id: 'god-helped',
          html:
            'A crucial phrase: "when God helped the Levites that bare the ark." The Levites do not trust in their own strength. God helps them. And in response, they offer sacrifices — seven bullocks and seven rams — an offering of gratitude and celebration.',
        },
        {
          kind: 'commentary',
          id: 'david-clothed',
          html:
            'David himself is clothed in the garments of the priesthood — a robe of fine linen, an ephod. This is not arrogance. It is a statement that the king is now acting in a sacred capacity, drawing the people into the presence of God. His body, his dress, his visible role have changed. He is set apart for this moment.',
        },
        {
          kind: 'commentary',
          id: 'procession-full',
          html:
            'The procession is overwhelming: shouting, the sound of the cornet and trumpets, cymbals, psalteries, and harps. It is loud, exuberant, full of noise and joy. This is not the muted solemnity of a funeral. This is celebration. The ark of God is coming home. The people are moved to praise.',
        },
        {
          kind: 'commentary',
          id: 'michal-sees',
          html:
            'But into this moment of unified joy comes a dissenting eye. Michal, daughter of Saul, looks out from a window. She sees David dancing and playing. And instead of being moved to celebration, "she despised him in her heart." Here is the unbelieving spectator inside the king&apos;s own household. Here is the heart that cannot see worship because it cannot see joy. Here is the division that will echo through the rest of David&apos;s reign.',
        },
        {
          kind: 'hebrew',
          id: 'raqad-dance',
          title: 'Raqad — "Dance"',
          script: 'רָקַד',
          translit: '<strong>Raqad</strong> · to dance; to leap; to skip for joy',
          description:
            'David is dancing — the same verb appears when the people danced before the golden calf in Exodus. But here the context is entirely different. David dances before the ark of the Lord. His body moves with joy, with celebration, with a kind of holy abandon. Michal sees the same act and despises it. The dancing itself is not the problem. The problem is that she cannot see worship in it.',
        },
        {
          kind: 'carry',
          html:
            'Notice the juxtaposition: the procession moves "with joy" and with the help of God, and in that same moment, a human heart turns away in contempt. The presence of the sacred does not move everyone to repentance or joy. Some respond with rejection. Some, like Michal, stand apart and judge. The question for us: which will we be? Those who dance before the ark, or those who look from the window and despise?',
        },
        {
          kind: 'reflection',
          id: 'ark-home-reflect',
          prompt: 'Do you find joy in worship? When you see others worship freely, with abandon, with dancing or emotional expression, what is your instinctive response?',
        },
      ],
    },

    {
      title: 'Christ Connection and Carry',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-connection',
          title: 'Christ Connection — The True Levite and the Way of Worship',
          html: 'This chapter moves through the order of worship. The Levites are chosen and sanctified. The musicians are appointed. The ark is carried not by machines but by shoulders, set apart. The procession moves with joy and noise, ordered yet exuberant. The New Testament shows who that way is. In Hebrews 7, Jesus is presented as &quot;a priest forever after the order of Melchizedek.&quot; In John 4:24, Jesus tells the Samaritan woman that those who worship must &quot;worship in spirit and in truth.&quot; In 1 Corinthians 14:40, Paul writes that in the church, &quot;let all things be done decently and in order.&quot;',
        },
        {
          kind: 'carry',
          html: 'David learned a harsh lesson when he tried to move the ark his own way. The God of the covenant will not be managed by our convenience. He has appointed a way; if we would approach Him, we must sanctify ourselves and walk that way. When the Levites carry the ark rightly, when the singers rejoice, joy overflows.',
        },
        {
          kind: 'reflection',
          id: 'final-reflection',
          prompt: 'David experienced both the disaster of approaching God wrongly and the joy of approaching Him rightly. What have you learned about how to approach God? What role does sanctification, joy, and order play in your own experience of faith?',
        },
      ],
    },
  ],
};
