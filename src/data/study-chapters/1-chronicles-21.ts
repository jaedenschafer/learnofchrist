import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 21 — David's Census and the Threshing Floor
 *
 * Satan stands up against Israel and provokes David to number the people.
 * Though Joab protests that the census is abominable, the king's word
 * prevails. God is displeased, and a pestilence falls upon Israel — 70,000
 * men. The angel of the Lord stands at the threshing floor of Ornan the
 * Jebusite, sword drawn over Jerusalem. David, seeing the angel, repents
 * utterly. He refuses to sacrifice what costs him nothing, and there the
 * fire of heaven falls on the altar — God's acceptance, the moment the
 * temple mount is purchased with the full price of gold.
 */
export const CHRONICLES_1_21: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 21,

  estimatedMinutes: { beginner: 6, intermediate: 15, deep: 21 },
  topicTags: ['kingship', 'worship', 'covenant', 'faithfulness'],
  opener: {
    topical: true,
    caption: '1 Chronicles 21',
  },
  intros: [
    'The book of 1 Chronicles retells the history of Israel with a particular focus: the lineage of David, the promise to his house, and the centrality of worship at the temple. In this chapter, that focus narrows further. What begins as Satan&apos;s provocation — a temptation to pride in numbering the people — becomes the occasion for God to establish the very place where His house will stand. From the place of judgment, mercy springs. From the threshing floor where the angel stands with a drawn sword, there arises the site of eternal worship. This is the story of how God answers the hardest prayers.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 21',
    quote:
      'When David saw the plague stayed and the fire fall from heaven on the altar at the threshing floor of Ornan, he understood: God&apos;s acceptance is not won by what we offer without cost. It is won by the full price paid by One who will come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 21 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-david-kingdom',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'David and the Iron Age Kingdom',
      url: 'https://www.britishmuseum.org/',
      description: 'Artifacts and inscriptions illuminating the Davidic monarchy and administration.',
    },
    {
      id: 'sefaria-1-chronicles-21',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 21 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.21',
      description: 'The Hebrew text of 1 Chronicles 21 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 21:1 — Satan Provoked David ──────────────────────── */
    {
      ref: '1 Chronicles 21:1',
      title: 'Satan Provoked the Census',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('Satan stood up against Israel', 'chr1-21-satan'),
                t(', and '),
                hp('provoked David to number Israel', 'chr1-21-provoked'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr1-21-satan',
          html:
            'The version in 2 Samuel 24 opens differently: "The Lord moved David." Here in 1 Chronicles, the emphasis shifts — "Satan stood up against Israel." Both are true. God permitted the trial; Satan incited it. Scripture holds both truths together without resolving them into a single cause. Satan is the active tempter. God is sovereign over the temptation. This parallels the opening of Job, where Satan must ask permission before testing Job&apos;s faith. The rebellion against God is Satan&apos;s act. The permission is God&apos;s. [res:british-museum-david-kingdom]',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-provoked',
          html:
            'The provocation is to number Israel. This is no military census for defense — it is an audit, a counting, a taking of inventory. It is the pride of possession: <em>my</em> people, <em>my</em> strength, <em>my</em> army. David looks at Israel and sees something to be quantified, calculated, owned. In that moment, he has stopped seeing the people as the Lord&apos;s. He sees them as his[res:sefaria-1-chronicles-21][res:bibleodyssey-1-chronicles-overview-21].',
        },
        {
          kind: 'hebrew',
          id: 'chr1-21-satan-amad',
          title: 'Amad — "Stood Up Against"',
          script: 'עָמַד',
          translit: '<strong>Amad</strong> · stood; stood up; took a stand',
          description:
            'Satan "stood up against" Israel — the Hebrew conveys not just rebellion but active opposition, a taking of a stand in hostility. The enemy does not whisper from a distance; he rises up as an adversary, with purpose and presence. This is the language of warfare, of opposition made manifest.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when we are tempted to take stock of what we have — our possessions, our influence, our power over others. These moments often feel productive, practical. But the counting itself can become the sin. When we number what we have as if we own it, we have already lost sight of the God from whom all things come. What do you tend to count when you are afraid, restless, or uncertain of your value?',
        },
        {
          kind: 'reflection',
          id: 'satan-provoked',
          prompt: 'David was provoked to number Israel — to count and possess what was not truly his to count. What in your own life are you tempted to quantify or control rather than trust to God?',
        },
      ],
    },

    /* ─── 1 Chronicles 21:2–6 — David Commands the Census; Joab Protests ─── */
    {
      ref: '1 Chronicles 21:2–6',
      title: 'Joab Speaks Against the King&apos;s Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(2, 'And David said to Joab and to the rulers of the people, Go, number Israel from Beersheba even to Dan; and bring the number of them to me, that I may know it.'),
            {
              number: 3,
              spans: [
                t('And Joab answered, The Lord make his people an hundred times so many more as they be: but, my lord the king, are they not all my lord&apos;s servants? why then doth my lord require this thing? why will he be a cause of '),
                hg('trespass to Israel', 'chr1-21-trespass'),
                t('?'),
              ],
            },
            plain(4, 'Nevertheless the king&apos;s word prevailed against Joab. Wherefore Joab departed, and went throughout all Israel, and came to Jerusalem.'),
            plain(5, 'And Joab gave the sum of the number of the people unto David. And all they of Israel were a thousand thousand and an hundred thousand men that drew sword: and Judah was four hundred threescore and ten thousand men.'),
            plain(6, 'But Levi and Benjamin counted he not among them: for the king&apos;s word was abominable unto him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr1-21-joab-protest',
          html:
            'Joab sees the danger before it happens. He appeals to David as a faithful servant — not rebelliously, but with the directness of one who has earned the right to speak truth. "Are they not all thy servants?" Joab asks. Why does the king need to count them as if they were property to be inventoried? The counting assumes ownership in a way that breaks faith with the Lord. Joab&apos;s question is not political — it is theological. He is asking David: have you forgotten that these people belong to God?',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-trespass',
          html:
            'Joab calls the census itself a "trespass" — a breach of covenant with God. It is not merely impractical or inefficient; it is a sin. The census presumes ownership that is not David&apos;s to claim. And yet the king&apos;s word prevails. Joab must obey, even though he knows the order is abominable. He obeys the king and carries out the count — but he does not count Levi and Benjamin. Even in his obedience, he protests. He does the king&apos;s will, but not completely. There is a quiet act of resistance in his refusal.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-numbers',
          html:
            'The numbers are staggering: 1,100,000 men who draw the sword in Israel; 470,000 in Judah. These are not merely military statistics. They are a king looking at his kingdom and seeing, for the first time, how vast it is. How powerful. How much his. And in that moment of seeing his own greatness reflected back to him, he has stepped into the snare Satan set.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we surround ourselves with advisors who tell us what we want to hear. Joab is a different kind of counselor — one who will speak what is true even when it contradicts what the king has decided. Do you have people in your life who can speak hard truth to you? And are you willing to hear them, even when their words challenge your plans?',
        },
        {
          kind: 'reflection',
          id: 'joab-protest',
          prompt: 'Joab saw the danger in David&apos;s command and spoke against it, but David&apos;s word prevailed. How do you respond when you see someone you respect or are under authority to making a decision you believe is wrong?',
        },
      ],
    },

    /* ─── 1 Chronicles 21:7–13 — God Displeased; Three Options ──────────── */
    {
      ref: '1 Chronicles 21:7–13',
      title: 'God&apos;s Mercy Greater Than Man&apos;s Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(7, 'And God was displeased with this thing: therefore he smote Israel.'),
            plain(8, 'And David said unto God, I have sinned greatly, because I have done this thing: but now, I beseech thee, do away the iniquity of thy servant; for I have done very foolishly.'),
            plain(9, 'And the Lord spake to Gad, David&apos;s seer, saying,'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-21-mid-9',
          html:
            '<p>These names represent the leaders and builders God raised up for specific roles.</p>',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(10, 'Go and tell David, saying, Thus saith the Lord, I offer thee three things: choose thee one of them, that I may do it unto thee.'),
            {
              number: 11,
              spans: [
                t('So Gad came to David, and said unto him, Thus saith the Lord, Choose thee'),
              ],
            },
            plain(12, 'Either three years&apos; famine; or three months to be destroyed before thy foes, whilst the sword of thine enemies overtaketh thee; or else three days the sword of the Lord, even the pestilence, in the land, and the angel of the Lord destroying throughout all the coasts of Israel. Now therefore advise thyself what word I shall bring again to him that sent me.'),
            {
              number: 13,
              spans: [
                t('And David said unto Gad, I am in a great strait: let me fall now into the hand of the Lord; for very great are '),
                hp('his mercies', 'chr1-21-mercies'),
                t(': but let me not fall into the hand of man.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr1-21-displeased',
          html:
            'God is displeased — and yet the consequences come through the hand of the Lord, not through abandonment. The plague itself is an act of discipline, not destruction. God smites Israel, but He does not cast Israel away. This is the language of a father correcting his child, not an enemy annihilating an opponent.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-confession',
          html:
            'David confesses immediately: "I have sinned greatly, because I have done this thing." There is no excuse, no political justification, no appeal to circumstances. He owns the sin utterly. "I have done very foolishly" — he uses a word that means to act without understanding, to stumble blindly. He has been a fool, and he knows it.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-three-choices',
          html:
            'God offers three options. Each is severe. Three years of famine — slow starvation of the land. Three months of warfare — the sword of enemies while Israel flees. Three days of plague — the angel of the Lord destroying throughout all the coasts. There is no easy way out. The consequence is real. But God allows David to choose the form his punishment will take. This is mercy disguised as judgment.',
        },
        {
          kind: 'hebrew',
          id: 'chr1-21-rachamim',
          title: 'Rachamim — "Mercies"',
          script: 'רַחֲמִים',
          translit: '<strong>Rachamim</strong> · mercies; compassion; bowels of compassion',
          description:
            'David says, "Very great are his mercies." The Hebrew word <strong>rachamim</strong> comes from the root meaning "womb" or "belly" — it is the visceral, embodied mercy that a mother feels for her child. Not distant compassion, but the fierce, protective mercy of a parent. David chooses to fall into the hands of God — into those mercies — rather than into the hands of man, who has no such womb-love.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-mercies',
          html:
            'In this moment, David demonstrates a profound theology. He has confessed his sin. He knows judgment must come. But he chooses to fall into the hands of God rather than man because he trusts that God&apos;s judgment is always tempered by mercy. Man judges with perfect cruelty; God judges with perfect love. It is safer to fall into the hand of the Lord — even the hand that brings plague — than into the hand of man, who will show no mercy.',
        },
        {
          kind: 'carry',
          html:
            'When we are caught in our own foolishness, we often try to negotiate, to minimize, to shift blame. David does none of these. He confesses, accepts judgment, and then trusts that the one judging him loves him more than he loves himself. That trust — that willingness to fall into God&apos;s hands even in judgment — is what opens the door for mercy to flow. What would change if you believed that God&apos;s judgment of you is an act of love?',
        },
        {
          kind: 'reflection',
          id: 'mercies-greater',
          prompt: 'David chose to fall into the hand of the Lord rather than man, trusting that God&apos;s mercies are very great. When have you had to trust that God&apos;s judgment would be more merciful than human judgment?',
        },
      ],
    },

    /* ─── 1 Chronicles 21:14–17 — The Plague; The Angel at Ornan's Floor ──── */
    {
      ref: '1 Chronicles 21:14–17',
      title: 'The Angel Stands at the Threshing Floor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(14, 'So the Lord sent pestilence upon Israel: and there fell of Israel seventy thousand men.'),
            plain(15, 'And God sent an angel unto Jerusalem to destroy it: and as he was destroying, the Lord beheld, and he repented him of the evil, and said to the angel that destroyed, It is enough, stay now thine hand. And the angel of the Lord stood by the threshingfloor of Ornan the Jebusite.'),
            {
              number: 16,
              spans: [
                t('And David lifted up his eyes, and saw the angel of the Lord stand between the earth and the heaven, having a drawn sword in his hand stretched out over Jerusalem. And David and the elders, clothed in '),
                hg('sackcloth', 'chr1-21-sackcloth'),
                t(', fell upon their faces.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And David said unto God, Is it not I that commanded the people to be numbered? even I it is that have sinned and done evil indeed; but as for these sheep, what have they done? let thine hand, I pray thee, O Lord my God, be on me, and on my father&apos;s house; but not on thy people, that they should be '),
                hg('plagued', 'chr1-21-plagued'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr1-21-seventy-thousand',
          html:
            'Seventy thousand fall to the plague. The judgment is swift and terrible. But even in judgment, God sees. He does not turn away. The angel of the Lord, with sword drawn, moves through the land — and then the Lord Himself intervenes. "It is enough, stay now thine hand." The moment when destruction is stayed is the moment when mercy becomes visible. The angel does not sheathe his sword because he has grown weary or because the punishment is complete. He stops because God Himself says enough.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-ornan-floor',
          html:
            'And the angel stands at the threshing floor of Ornan the Jebusite. This detail, seemingly minor, is everything. Of all the places in Jerusalem, the angel takes his stand here. A threshing floor is where grain is separated from chaff, where the harvest is sifted and winnowed. It is the place of separation, of judgment. It is also where the wheat is processed and made ready for bread — preparation for sustenance and life. The angel stands in a place that is both judgment and preparation. And it is in this place that God will say, "Here — here I will dwell. Here My house will stand."',
        },
        {
          kind: 'hebrew',
          id: 'chr1-21-goren',
          title: 'Goren — "Threshing Floor"',
          script: 'גֹּ֫רֶן',
          translit: '<strong>Goren</strong> · threshing floor; a place of separation and preparation',
          description:
            'A threshing floor is where the harvest lies exposed to the wind. The farmer throws the grain high, and the wind carries away the chaff while the grain falls to the ground. It is a place of exposure, of winnowing, of separation. In this chapter, it becomes the place where God Himself will meet His people, where His acceptance will fall like fire from heaven.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-sackcloth',
          html:
            'David and the elders, seeing the angel with sword drawn, fall on their faces clothed in sackcloth. The response is immediate and visceral — not calculation, not negotiation, but utter prostration. They have seen the holy, and they can do nothing but bow.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-sheep',
          html:
            'David calls the people "sheep." They are not his subjects to be numbered and possessed. They are the Lord&apos;s flock, and David is their shepherd in trust, not their owner. He now sees them as God sees them — as beloved, vulnerable, in need of care. His intercession is not a defense of the people or a plea for their innocence. It is an acknowledgment: "I did this. Let the judgment fall on me and my house, not on the flock."',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-plagued',
          html:
            'David&apos;s prayer is the prayer of one who has truly repented. He does not ask for the plague to stop. He asks that it fall on him instead. He is willing to bear the full consequence of his pride so that the innocent people are spared. This is the heart of intercession — not demanding mercy, but offering oneself.',
        },
        {
          kind: 'carry',
          html:
            'True repentance moves us from self-protection to self-sacrifice. David no longer tries to minimize his role or shift blame. He sees that others are suffering for his sin, and he is willing to bear the full weight himself. Is there a place in your life where you need to stop defending yourself and start bearing the cost of your own choices?',
        },
        {
          kind: 'reflection',
          id: 'angel-threshing-floor',
          prompt: 'David saw the angel with sword drawn and understood that God&apos;s judgment had come. In that moment, he stopped pleading his case and offered himself instead. What does true repentance look like in your own life?',
        },
      ],
    },

    /* ─── 1 Chronicles 21:18–27 — "I Will Not Offer Without Cost" ─────────── */
    {
      ref: '1 Chronicles 21:18–27',
      title: 'The Full Price and the Fire from Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(18, 'Then the angel of the Lord commanded Gad to say to David, that David should go up, and set up an altar unto the Lord in the threshingfloor of Ornan the Jebusite.'),
            plain(19, 'And David went up at the saying of Gad, which he spake in the name of the Lord.'),
            plain(20, 'And Ornan turned back, and saw the angel; and his four sons with him hid themselves. Now Ornan was threshing wheat.'),
            plain(21, 'And as David came to Ornan, Ornan looked and saw David, and went out of the threshingfloor, and bowed himself to David with his face to the ground.'),
            plain(22, 'Then David said to Ornan, Grant me the place of this threshingfloor, that I may build an altar therein unto the Lord: thou shalt grant it me for the full price: that the plague may be stayed from the people.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr21-ornan-floor',
          html:
            'David refuses to take the threshing floor as a gift. The altar that will become the temple cannot be founded on someone else&apos;s loss; it must cost the king himself.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 23,
              spans: [
                t('And Ornan said unto David, Take it to thee, my lord the king, and do that which is good in thine eyes: lo, I give thee the oxen also for burnt offerings, and the threshing instruments for wood, and the wheat for the meat offering; I give it all.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And king David said to Ornan, '),
                hp('Nay; but I will verily buy it for the full price', 'chr1-21-full-price'),
                t(': for I will not take that which is thine for the Lord, nor offer burnt offerings without cost.'),
              ],
            },
            plain(25, 'So David gave to Ornan for the place six hundred shekels of gold by weight.'),
            plain(26, 'And David built there an altar unto the Lord, and offered burnt offerings and peace offerings, and called upon the Lord; and he answered him from heaven by fire upon the altar of burnt offering.'),
            {
              number: 27,
              spans: [
                t('And the Lord commanded the angel; and he '),
                hp('put up his sword again', 'chr1-21-sword-sheathed'),
                t(' into the sheath thereof. At that time when David saw that the Lord had answered him in the threshingfloor of Ornan the Jebusite, then he sacrificed there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr1-21-gad-command',
          html:
            'Gad returns with the command of the Lord: David must build an altar at the threshing floor of Ornan. The place of judgment becomes the place of worship. The threshing floor, which God marked with His angel and His sword, is where God desires an altar to be raised. David obeys without hesitation or question.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-ornan-offers',
          html:
            'Ornan, the Jebusite, sees David and bows. He understands immediately who stands before him and what is needed. In a gesture of honor and submission, he offers everything — the land, the oxen, the threshing instruments, the wheat. He gives it all freely, wanting to serve. But David will not accept the gift.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-full-price',
          html:
            'This is the climactic moment of the chapter. David refuses Ornan&apos;s generosity with words that echo through the centuries: "I will not take that which is thine for the Lord, nor offer burnt offerings without cost." A true sacrifice is one that costs the one who offers it something real. To take what another has offered freely is to let another bear the cost of your worship. To offer to God what has cost you nothing is to tell God He is worth less to you than your comfort. David will not do this. He pays the full price — six hundred shekels of gold. And in paying that price, he teaches the meaning of sacrifice itself.',
        },
        {
          kind: 'hebrew',
          id: 'chr1-21-male-timmale',
          title: 'Male Timmale — "The Full Price"',
          script: 'מָלֵא תִּמָּלֵא',
          translit: '<strong>Male timmale</strong> · full price; the price in full',
          description:
            'David will "verily buy it for the full price." The Hebrew doubles the verb — male timmale — for emphasis: the complete price, without abatement, without discount. He will not negotiate or reduce the cost. He pays the whole value because he understands that his repentance and his worship must cost him something real.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-fire-from-heaven',
          html:
            'David builds the altar and offers the sacrifices. And the Lord answers him — not with the withdrawal of judgment or the silence of acceptance, but with visible fire from heaven, consuming the offering. The fire is God&apos;s signature, His unmistakable word: <em>I have received your offering. You are accepted.</em> The plague is stayed not by negotiation, but by David&apos;s true repentance and his willingness to offer what costs him deeply.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-sword-sheathed',
          html:
            'And then the angel sheathes his sword. The drawn sword of judgment becomes the sheathed sword of mercy. The moment of judgment passes into the moment of grace. The one who stood over Jerusalem with destruction in his hand now stands at rest, the plague ended, the sacrifice accepted, the threshing floor become the site of eternal worship.',
        },
        {
          kind: 'christ',
          id: 'chr1-21-christ-full-price',
          title: 'Christ Connection — The One Who Paid the Full Price',
          html:
            'David will not offer sacrifices without cost — he pays six hundred shekels of gold to buy the threshing floor. But the true temple, the true sacrifice, the true price is paid by Christ alone. When Paul writes, "Ye are bought with a price: therefore glorify God in your body" (1 Corinthians 6:20), he is speaking of the price Christ paid — not gold or oxen or grain, but His own blood shed on the cross. The threshing floor of Ornan, purchased for a price, points forward to Calvary, purchased with the blood of the Lamb. Christ is the One who paid the <em>full price</em> — not negotiated, not minimized, not borrowed from another, but paid out of His own sacrifice. "I will not offer burnt offerings without cost" — neither will Christ. He offers Himself, and in that costly offering, the sword of judgment is sheathed forever for those who believe. The fire from heaven that consumes David&apos;s altar consumes Christ&apos;s offering on the cross, and God&apos;s acceptance falls like fire on the perfect Sacrifice.',
        },
        {
          kind: 'carry',
          html:
            'What do you offer God that costs you nothing? A prayer said in comfort? Praise offered when it is convenient? David teaches us that true worship requires cost. Not that we earn God&apos;s favor — Christ has already paid what we cannot pay. But that we honor Him by offering what has value to us, not what we have left over after we have satisfied ourselves. Real worship is costly. Real repentance is costly. Real love is costly. What are you willing to pay to show God He matters to you?',
        },
        {
          kind: 'reflection',
          id: 'full-price',
          prompt: 'David refused to sacrifice what had cost him nothing. What in your worship, your prayers, your service is costing you something real? What would change if you began to offer God only what requires sacrifice?',
        },
      ],
    },

    /* ─── 1 Chronicles 21:28–30 — The Temple Mount Established ───────────── */
    {
      ref: '1 Chronicles 21:28–30',
      title: 'From Judgment to Worship — The Temple Mount',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(28, 'At that time when David saw that the Lord had answered him in the threshingfloor of Ornan the Jebusite, then he sacrificed there.'),
            plain(29, 'For the tabernacle of the Lord, which Moses made in the wilderness, and the altar of the burnt offering, were at that time in the high place at Gibeon.'),
            plain(30, 'But David could not go before it to enquire of God: for he was afraid because of the sword of the angel of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr1-21-answered',
          html:
            'David sees that the Lord has answered him. The fire from heaven is the unmistakable sign. And in that moment of being accepted, David sacrifices — not at Gibeon, where the tabernacle stands, but at the threshing floor of Ornan. Why? Because this place is now the place where God has met him. This is where His presence has fallen visibly. From this moment forward, this is the sacred center.',
        },
        {
          kind: 'commentary',
          id: 'chr1-21-gibeon',
          html:
            'The tabernacle remains at Gibeon, far from the city. The altar of the burnt offering stands there. But David cannot go there to inquire of God — he is afraid of the sword of the angel. The old center is no longer the place of safety. The new center, the place where the angel&apos;s sword has been sheathed, is here, at the threshing floor. And so a new truth takes root: here, at this place where God has come to David in judgment and mercy, here is where His house will stand. In 1 Chronicles 22:1, David will announce it: "This is the house of the Lord God, and this is the altar of the burnt offering for Israel." The temple mount is established not by decree, but by the presence of God.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the places where we encounter God most deeply are not the places we would have chosen. David expected to continue worshiping at Gibeon. But God met him at the threshing floor — a place of his own foolishness, his own judgment, his own need. And there, at the threshing floor, the holy became sacred. Sometimes our deepest experience of God comes not in the places we have prepared, but in the place where we have been undone. That is the place God often chooses to make His house.',
        },
        {
          kind: 'reflection',
          id: 'temple-mount',
          prompt: 'The threshing floor of Ornan, the place of judgment and mercy, became the site of the temple. What places in your own life — places of struggle, failure, or shame — might become sacred because God has met you there?',
        },
      ],
    },
  ],
};
