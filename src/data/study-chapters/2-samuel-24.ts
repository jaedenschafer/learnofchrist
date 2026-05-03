import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Samuel 24 — David's Census: The Sin of Measuring
 *
 * The anger of the Lord is kindled against Israel. God moves David to number
 * the people — a census that David himself recognizes as pride, as a failure
 * of trust. Joab resists. David's heart smites him immediately after. When
 * given three options for judgment — famine, flight, or pestilence — David
 * chooses to fall into the Lord's hands rather than man's. The plague is
 * stayed at the threshing floor of Araunah the Jebusite, where the angel of
 * the Lord stands with drawn sword. David refuses to offer that which costs
 * him nothing. He buys the threshing floor at full price and builds an altar.
 * This is the site where Solomon will build the temple. This is the ground
 * where David learns that true sacrifice is costly, and that mercy is greater
 * than judgment.
 */
export const SAMUEL_2_24: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 24,

  estimatedMinutes: { 5: 6, 10: 12, 15: 17 },
  intros: [
    'The book of 2 Samuel draws to a close with a chapter that captures a central thread of David&apos;s entire reign: the tension between human will and divine purpose, between pride and repentance, between judgment and mercy. God moves David to number Israel and Judah — a census that, on its face, seems like an act of governance. But David&apos;s own heart recognizes it as something darker. It is an expression of pride, a desire to measure and count rather than to trust.',
    'What follows is not a simple story of sin and punishment. It is a profound meditation on how the Lord deals with His people: offering choices, accepting repentance, showing mercy even in judgment. And it ends not with David punished, but with David learning the deepest lesson of his reign: "I will not offer burnt offerings unto the Lord my God of that which doth cost me nothing." The chapter concludes with David buying the threshing floor of Araunah at full price. This ground, purchased through David&apos;s own sacrifice, becomes the site of Solomon&apos;s temple. The pattern is set: the Lord&apos;s house will be built on ground that cost someone everything.',
  ],

  bottomShare: {
    label: 'Share 2 Samuel 24',
    quote:
      'David refuses to offer that which costs him nothing. His sacrifice at Araunah&apos;s threshing floor teaches the deepest lesson of stewardship: what we give to God must come at a price to ourselves.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 24 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 24:1–9 — The Proud Census ───────────────────────────── */
    {
      ref: '2 Samuel 24:1–9',
      title: 'The Temptation to Count',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 1,
              spans: [
                t('And again the anger of the Lord was kindled against Israel, and he moved David '),
                hg('against them', 's24-moved-against'),
                t(' to say, Go, number Israel and Judah.'),
              ],
            },
            plain(2, 'For the king said to Joab the captain of the host, which was with him, Go now through all the tribes of Israel, from Dan even to Beer-sheba, and number ye the people, that I may know the number of the people.'),
            {
              number: 3,
              spans: [
                t('And Joab said unto the king, Now the Lord thy God '),
                hg('add unto the people', 's24-joab-blessing'),
                t(', how many soever they be, an hundredfold, and that the eyes of my lord the king may see it: but why doth my lord the king delight in this thing?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-moved-against',
          html:
            'The opening is charged with mystery. "The anger of the Lord was kindled against Israel." The cause is not yet named. And then: "he moved David against them to say, Go, number Israel and Judah." God&apos;s anger is kindled, and David is moved to act. First Chronicles 21:1 offers a parallel account: "Satan provoked David to number Israel." Both accounts are true — the text holds both: God permits, Satan incites, and David chooses. The census is the occasion for divine displeasure to manifest, but the deeper issue is what the census itself represents.',
        },
        {
          kind: 'commentary',
          id: 's24-joab-blessing',
          html:
            'Joab&apos;s response is crucial. He does not say "this is wrong because God forbids it." He protests on almost spiritual grounds: "the Lord thy God add unto the people ... an hundredfold." Joab is saying: May God bless the people, not measure them. His protest is subtle but cutting. He asks David directly: "why doth my lord the king delight in this thing?" Why this obsession with counting? The implication: numbers are not the measure of blessing. Trust is.',
        },
        {
          kind: 'hebrew',
          id: 's24-paqad',
          title: 'Paqad — "To Number" or "To Oversee"',
          script: 'פָּקַד',
          translit: '<strong>Paqad</strong> · to count; to muster; to take stock of; to oversee',
          description:
            'The verb "paqad" appears throughout the census accounts. It means not merely to count, but to take a detailed census, to muster forces, to take stock. The related noun "pequdim" means "those who are mustered" or "those accounted for." When David insists on numbering the people, he is doing more than a headcount — he is taking stock, measuring, reducing people to a sum. This is where pride enters: in the reduction of the living, breathing people of Israel to a number that David can know and count.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(4, 'Notwithstanding the king\'s word prevailed against Joab, and against the captain of the host. And Joab and the captain of the host went out from the presence of the king, to number the people of Israel.'),
            plain(5, 'And they passed over Jordan, and pitched in Aroer, on the right side of the city that lieth in the midst of the river of Gad, and toward Jazer:'),
            plain(6, 'Then they came to Gilead, and to the land of Tahtim-hodshi; and they came to Dan-jaan, and about to Zidon,'),
            plain(7, 'And came to the strong hold of Tyre, and to all the cities of the Hivites, and of the Canaanites: and they went out to the south of Judah, even to Beer-sheba.'),
            plain(8, 'So when they had gone through all the land, they came to Jerusalem at the end of nine months and twenty days.'),
            {
              number: 9,
              spans: [
                t('And Joab gave up the sum of the number of the people unto the king: and there were in Israel '),
                hy('eight hundred thousand', 's24-eight-hundred'),
                t(' valiant men that drew the sword; and the men of Judah were '),
                hy('five hundred thousand', 's24-five-hundred'),
                t(' men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-eight-hundred',
          html:
            'The census is complete. Eight hundred thousand in Israel, five hundred thousand in Judah. These are not small numbers. They represent a kingdom of immense military power. And now David knows the count. He has what he sought — the measure of his strength. But in that moment of knowledge comes the recognition of what he has done.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of metrics. We count followers, measure engagement, track performance, reduce people and outcomes to numbers we can manage and display. The temptation to count, to measure, to reduce the living to data is not new. It is the oldest form of pride. Joab knew this: numbering the people is a way of saying "I trust in what I can measure" rather than "I trust in the Lord." Where are you tempted to count rather than to trust?',
        },
        {
          kind: 'reflection',
          id: 'temptation-count',
          prompt: 'David&apos;s desire to count the people came from wanting to know their number — to possess a measurement of his strength. What are you tempted to measure or count in order to feel secure or successful?',
        },
      ],
    },

    /* ─── 2 Samuel 24:10–14 — Repentance and the Three Choices ──────────── */
    {
      ref: '2 Samuel 24:10–14',
      title: 'The Heart Smites Him; The Three Choices',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 10,
              spans: [
                t('And David\'s heart '),
                hg('smote him', 's24-heart-smote'),
                t(' after that he had numbered the people. And David said unto the Lord, I have sinned greatly in that I have done: and now, I beseech thee, O Lord, take away the iniquity of thy servant; for I have done very foolishly.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-heart-smote',
          html:
            'David does not wait for a prophet to come to him. His own heart smites him — his own conscience recognizes what he has done. The numbering is complete, and in that completion, he sees the sin. "I have sinned greatly." Not "I made a mistake." Not "I was following the king&apos;s orders." But "I have sinned greatly, and I have done very foolishly." This is the response of a man who has been trained by the Holy Spirit to recognize his own corruption.',
        },
        {
          kind: 'hebrew',
          id: 's24-naka',
          title: 'Naka — "To Strike" or "To Smite"',
          script: 'נָכָה',
          translit: '<strong>Naka</strong> · to strike; to smite; to beat; to wound',
          description:
            'The word "naka" (his heart smote him) is the same word used throughout Scripture for striking, wounding, or defeating an enemy. David&apos;s heart strikes against him — as if his own conscience has become his adversary. The organ that governed his choice now accuses him. This is the beginning of repentance: when the heart turns against its own sin.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(11, 'For when David was up in the morning, the word of the Lord came unto Gad the prophet, David\'s seer, saying,'),
            {
              number: 12,
              spans: [
                t('Go and say unto David, Thus saith the Lord, I offer thee '),
                hg('three things', 's24-three-choices'),
                t('; choose thee one of them, that I may do it unto thee.'),
              ],
            },
            plain(13, 'So Gad came to David, and told him: and said unto him, Shall seven years of famine come unto thee in thy land? or wilt thou flee three months before thine enemies, while they pursue thee? or that there be three days\' pestilence in thy land? now advise thee, and see what answer I shall return to him that sent me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 's24-three-choices',
          html:
            'The Lord offers three forms of judgment. All are severe. A seven-year famine would devastate the land and its people. Three months of fleeing from enemies would leave David humiliated and exposed. Three days of pestilence would bring death on a massive scale. There is no "good" choice here. But there is a principle at work: David is being given agency even in judgment. He must choose which form his discipline will take. The Lord is not imposing judgment arbitrarily; He is allowing David to exercise judgment about his own punishment.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 14,
              spans: [
                t('And David said unto Gad, I am in a '),
                hg('great strait', 's24-great-strait'),
                t(': let us fall now into the hand of the Lord; for his mercies are great: and let me not fall into the hand of man.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-great-strait',
          html:
            'David&apos;s choice is eloquent. He chooses to "fall into the hand of the Lord" rather than into the hand of man. Why? Because he trusts that the Lord&apos;s mercies are great. A famine caused by God, a flight from enemies caused by God — both would rest upon human agents. But pestilence — death sent directly by the Lord — places the outcome in the hands of the One whose mercies David has experienced his whole life. David is saying: I would rather be judged by the Lord directly than by the mechanisms of human action. His mercies are great.',
        },
        {
          kind: 'carry',
          html:
            'David&apos;s choice teaches us something about trust. Even in judgment, he trusts the Lord more than circumstances. Even when facing severe consequences, he chooses the judgment that places him most directly in the Lord&apos;s hands. Where are you afraid to fall into the Lord&apos;s hands? What circumstances do you trust more than His mercy?',
        },
        {
          kind: 'reflection',
          id: 'three-choices',
          prompt: 'When you face consequences for your own actions, do you fear the judgment itself or the way it comes? What would it mean to choose the path that places you most directly in God&apos;s hands?',
        },
      ],
    },

    /* ─── 2 Samuel 24:15–17 — The Plague and the Angel Stayed ──────────── */
    {
      ref: '2 Samuel 24:15–17',
      title: 'The Angel at the Threshing Floor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 15,
              spans: [
                t('So the Lord sent a '),
                hy('pestilence', 's24-pestilence'),
                t(' upon Israel from the morning even to the time appointed: and there died of the people from Dan even to Beer-sheba seventy thousand men.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And when the angel stretched out his hand upon Jerusalem to destroy it, the Lord repented him of the evil, and said to the angel that destroyed the people, It is enough: stay now thine hand. And the angel of the Lord was by the '),
                hy('threshingplace of Araunah', 's24-araunah'),
                t(' the Jebusite.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And David spake unto the Lord when he saw the angel that smote the people, and said, Lo, I have sinned, and I have done wickedly: but these '),
                hg('sheep, what have they done', 's24-sheep'),
                t('? let thine hand, I pray thee, be against me, and against my father\'s house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-pestilence',
          html:
            'The plague is swift and terrible. Seventy thousand die. The pestilence that David chose has come, and in three days the death toll is immense. And yet at the moment the angel stretches out his hand toward Jerusalem to complete the destruction, the Lord stays his hand. "It is enough." Not because the judgment is insufficient, but because mercy intervenes. The Lord sees the angel at the threshing floor — the site where David will later purchase ground for an altar. The judgment is arrested not arbitrarily, but at a place that will become sacred.',
        },
        {
          kind: 'hebrew',
          id: 's24-goren',
          title: 'Goren — "Threshing Floor"',
          script: 'גֹּרֶן',
          translit: '<strong>Goren</strong> · threshing floor; place of harvest and separation',
          description:
            'The "goren," or threshing floor, is where grain is separated from chaff, where the harvest is processed and made useful. It is a place of labor, of dividing the valuable from the worthless. That the angel stands at this place is significant: judgment and mercy are not opposites here, but part of a single process. The threshing floor is where what is useful is preserved and what is waste is cast away.',
        },
        {
          kind: 'commentary',
          id: 's24-sheep',
          html:
            'David&apos;s response is not self-centered. He does not ask "Why is this happening to me?" He asks for the people. "These sheep, what have they done?" The metaphor is striking — David calls the people "sheep," a word that speaks both of the innocence of those who have died and of their dependence on a shepherd. Seventy thousand people have died because of David&apos;s sin. And David sees this. He does not hide from it. He asks that the judgment fall upon him and his house, not on the innocent.',
        },
        {
          kind: 'carry',
          html:
            'When we sin, others suffer. Not always, not in every consequence, but often the ripple of our choices extends beyond ourselves. David understands this. Rather than being grateful that he survives, he grieves that others died because of his choice. And he asks to bear the cost himself. This is the heart of true repentance — not just confession, but willingness to bear the consequences and spare others.',
        },
        {
          kind: 'reflection',
          id: 'angel-threshing-floor',
          prompt: 'David asks that the judgment fall on him and his house, not on the innocent people. When your choices have affected others, how do you respond to their suffering?',
        },
      ],
    },

    /* ─── 2 Samuel 24:18–25 — The Threshing Floor Purchased ──────────────── */
    {
      ref: '2 Samuel 24:18–25',
      title: '"I Will Not Offer That Which Costs Me Nothing"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 18,
              spans: [
                t('And Gad came that day to David, and said unto him, Go up, rear an altar unto the Lord in the threshingfloor of Araunah the Jebusite.'),
              ],
            },
            plain(19, 'And David, according to the saying of Gad, went up as the Lord commanded.'),
            {
              number: 20,
              spans: [
                t('And Araunah looked out, and saw the king and his servants coming on toward him: and Araunah '),
                hg('went out', 's24-araunah-bows'),
                t(', and bowed himself before the king on his face upon the ground.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Araunah said, Wherefore is my lord the king come to his servant? And David said, To buy the threshingfloor of thee, to build an altar unto the Lord, that the '),
                hg('plague', 's24-plague-stayed'),
                t(' may be stayed from the people.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Araunah said unto David, Let my lord the king take and offer up what seemeth good unto him: behold, here be oxen for burnt sacrifice, and threshing instruments and other instruments of the oxen for wood: All these things did Araunah, as a king, give unto the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-araunah-bows',
          html:
            'Araunah is a Jebusite — a native of Jerusalem from the time before David conquered the city. His willingness to offer David the threshing floor freely, to provide oxen and wood for the sacrifice, is an act of generosity and respect. Araunah sees David not as a conqueror, but as the Lord&apos;s anointed. He offers everything freely, as "a king" giving to a king.',
        },
        {
          kind: 'commentary',
          id: 's24-plague-stayed',
          html:
            'David&apos;s stated purpose is clear: to build an altar so that the plague may be stayed. But the altar is not merely functional — it is not "If I build an altar, the plague will stop." The altar is an act of atonement, a place where David acknowledges the sovereignty of God and seeks His favor. The sacrifice offered here is meant to repair the relationship between David and the Lord.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 23,
              spans: [
                t('And the king said unto Araunah, Nay; but I will surely '),
                hp('buy it of thee at a price', 's24-surely-buy'),
                t(': neither will I offer burnt offerings unto the Lord my God of that '),
                hp('which doth cost me nothing', 's24-costs-nothing'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-surely-buy',
          html:
            'David&apos;s refusal is absolute. "I will surely buy it of thee at a price." The emphasis on purchase, on payment, on cost is deliberate. David will not accept a gift. He will not offer a sacrifice that costs him nothing. This is not about transaction — it is about the principle of true offering. What he gives to the Lord must come from his own substance, his own labor, his own loss.',
        },
        {
          kind: 'commentary',
          id: 's24-costs-nothing',
          html:
            '"Neither will I offer burnt offerings unto the Lord my God of that which doth cost me nothing." This is the beating heart of the chapter. A sacrifice is not truly a sacrifice if it costs the one offering nothing. The word "korban," used for sacrifice throughout Scripture, comes from the root "karav," meaning "to draw near." A true sacrifice draws you near to God by costing you something. It requires you to part with what you have, to surrender what you possess. This is how offering works: through loss, through relinquishment, through cost.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(24, 'So David bought the threshingfloor and the oxen for fifty shekels of silver.'),
            {
              number: 25,
              spans: [
                t('And David built there an altar unto the Lord, and offered burnt offerings and peace offerings. So the Lord was intreated for the land, and the '),
                hg('plague was stayed', 's24-plague-stayed-final'),
                t(' from Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's24-plague-stayed-final',
          html:
            'David pays fifty shekels of silver (though 1 Chronicles 21:25 mentions six hundred shekels for the entire site — either different accounts or different phases of purchase). He builds an altar. He offers burnt offerings — gifts that are entirely consumed — and peace offerings — meals shared with the Lord. And the result: "the Lord was intreated." God accepts the offering. The plague is stayed. The relationship is restored.',
        },
        {
          kind: 'hebrew',
          id: 's24-naham',
          title: 'Nacham — "To Be Sorry" or "To Repent" (God&apos;s Repentance)',
          script: 'נִחַם',
          translit: '<strong>Nacham</strong> · to change one&apos;s mind; to relent; to show compassion',
          description:
            'When the text says "the Lord repented him of the evil," the word is "nacham" — a word that in relation to God means He changed His intention, relented from judgment, showed compassion. This is not inconsistency on God&apos;s part, but a response to repentance. David repents; the sacrifice is offered; and the Lord relents. The structure of covenant is restored: repentance met by mercy.',
        },
        {
          kind: 'christ',
          id: 's24-christ-purchased',
          title: 'Christ Connection — The Ultimate Sacrifice That Costs Everything',
          html:
            'The threshing floor of Araunah becomes the site where Solomon builds the temple (2 Chronicles 3:1). David purchased this ground at full price. On this same location, centuries later, Christ will be crucified — the ultimate Sacrifice, purchased not with silver but with blood. "I will not offer that which costs me nothing" becomes the cry of the Son Himself, who emptied Himself, took on flesh, descended into death. The Cross is the most costly offering ever made. Nothing is spared. Nothing is held back. And through that offering, the plague of sin is stayed, the relationship between humanity and God is restored. The pattern David sets — true offering requires true cost — reaches its ultimate fulfillment in the One who paid the full price for our redemption.',
        },
        {
          kind: 'carry',
          html:
            'We live in a culture of convenience, of cheap grace, of offerings that cost us nothing. We are tempted to give our surplus, our time that is already free, our attention that is already there. David teaches us a harder, deeper way: true offering means surrender. It means giving something that you would otherwise keep. The widow&apos;s mite is more valuable than the rich man&apos;s abundance because it costs her something. What would it mean to offer the Lord not from your surplus, but from your substance?',
        },
        {
          kind: 'reflection',
          id: 'costs-nothing',
          prompt: 'David refuses to offer sacrifice that costs him nothing. What does a costly offering look like in your own life — not just gifts of time or money, but something that requires genuine surrender?',
        },
      ],
    },
  ],
};
