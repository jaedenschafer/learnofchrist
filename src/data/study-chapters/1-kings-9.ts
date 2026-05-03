import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 9 — The Lord Appears a Second Time
 *
 * After Solomon finishes the temple and the royal palace, the Lord appears
 * to him a second time, as once at Gibeon. This time, the promise comes with
 * a warning. The covenant is conditional: if Solomon walks in the way of his
 * father David, the throne will be established forever. But if he turns away,
 * the house will be cut off, Israel will become a byword, and the temple will
 * be cast out of the Lord&apos;s sight. This chapter sets up everything that
 * follows in Kings — the constant tension between obedience and disobedience,
 * covenant and judgment. The building projects are described: the temple is
 * finished, Solomon&apos;s navy brings exotic wealth, and yet beneath the
 * prosperity runs an undercurrent of warning that will echo through every
 * page to come.
 */
export const KINGS_1_9: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 9,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 21 },
  intros: [
    'The house of the Lord is finished. The walls are built, the altar is set, the sacred fire burns. Solomon has done what his father David could not — he has raised the temple to its full magnificence. And he has built his own palace, greater still, and all the cities of his dominion. The work is complete. All the desire of Solomon is satisfied.',
    'But when a work is finished, when a vision is realized, there comes a moment of reckoning. Has God accepted what we have built? Has God been pleased with our offering? And if He has, what now? What is the cost of keeping what we have been given? In 1 Kings 9, the Lord appears to Solomon a second time, and the message is as much a warning as it is a blessing. The promise comes with a condition. The throne will be established forever — but only if.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 9',
    quote:
      'The Lord appeared to Solomon and said, "I have hallowed this house which thou hast built, to put my name there for ever." But then came the warning: "If ye shall at all turn from following me... then will I cut off Israel out of the land."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 9 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 9:1–9 — The Lord Appears: Promise and Warning ──────────────── */
    {
      ref: '1 Kings 9:1–9',
      title: 'The Lord Appears: Promise and Warning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when Solomon had finished the building of the house of the Lord, and the king&apos;s house, and all Solomon&apos;s desire which he was pleased to do,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That the Lord '),
                hp('appeared to Solomon the second time', 'second-appearance'),
                t(', as he had appeared unto him at Gibeon.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the Lord said unto him, I have heard thy prayer and thy supplication, that thou hast made before me: I have '),
                hp('hallowed this house', 'hallowed-house'),
                t(', which thou hast built, to put my name there for ever; and mine eyes and mine heart shall be there perpetually.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And if thou wilt '),
                hg('walk before me', 'conditional-obedience'),
                t(', as David thy father walked, in integrity of heart, and in uprightness, to do according to all that I have commanded thee, and wilt keep my statutes and my judgments;'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Then I will '),
                hp('establish the throne of thy kingdom upon Israel for ever', 'throne-established-forever'),
                t(', as I promised to David thy father, saying, There shall not fail thee a man upon the throne of Israel.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But if ye shall at all '),
                hg('turn from following me', 'covenant-break'),
                t(', ye or your children, and will not keep my commandments and my statutes which I have set before you, but go and serve other gods, and worship them:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then I will '),
                hg('cut off Israel', 'cut-off-israel'),
                t(' out of the land which I have given them; and this house, which I have hallowed for my name, will I cast out of my sight; and Israel shall be a proverb and a byword among all people:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And at this house, which is high, every one that passeth by it shall be astonished, and shall hiss; and they shall say, Why hath the Lord done thus unto this land, and to this house?'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And they shall answer, Because they forsook the Lord their God, who brought forth their fathers out of the land of Egypt, and have taken hold upon other gods, and have worshipped them, and served them: therefore hath the Lord brought upon them all this evil.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'second-appearance',
          html:
            'The Lord appears to Solomon a second time. The first appearance was at Gibeon, in 1 Kings 3, where Solomon asked for a wise and understanding heart. Now the Lord comes again, but not unsummoned. This appearance comes after the work is done. The sanctuary is finished. All of Solomon&apos;s desire is satisfied. And in this moment of completion, the Lord comes to speak.',
        },
        {
          kind: 'commentary',
          id: 'hallowed-house',
          html:
            'God does not tell Solomon that the building was impressive or well-constructed. He says, "I have hallowed this house." The word is <em>hallowed</em> — set apart, consecrated, made holy. It is not the hands of Solomon that have made this house sacred. It is the Lord Himself. He has put His name there, and His eyes and His heart shall be there perpetually. The temple will be not merely a building, but a dwelling place of the divine presence.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qiddash',
          title: 'Qiddash — "Hallowed" or "Sanctified"',
          script: 'קִדַּשׁ',
          translit: '<strong>Qiddash</strong> · to sanctify; to set apart for a sacred purpose',
          description:
            'The verb "to hallow" carries the sense of consecration, of setting something apart from ordinary use for divine purpose. When God says "I have hallowed this house," He is claiming it, making it His own. The hallowing is God&apos;s action, not Solomon&apos;s. The builder prepares the structure; God declares it holy.',
        },
        {
          kind: 'commentary',
          id: 'conditional-obedience',
          html:
            'Now comes the condition. "If thou wilt walk before me, as David thy father walked..." The promise is absolute only if obedience follows. David walked in integrity of heart and in uprightness, keeping the Lord&apos;s statutes and judgments. If Solomon does the same, the throne will be his. If not, there is another story entirely.',
        },
        {
          kind: 'commentary',
          id: 'throne-established-forever',
          html:
            'The promise itself is magnificent: "I will establish the throne of thy kingdom upon Israel for ever." This echoes the covenant made to David in 2 Samuel 7. The throne shall endure. There shall not fail a man upon the throne of Israel. But the entire promise rests on the fulcrum of "if." Covenant with God is not a transaction. It is a relationship. And a relationship requires loyalty, obedience, the choosing of God again and again.',
        },
        {
          kind: 'commentary',
          id: 'covenant-break',
          html:
            'The alternative is spelled out with terrible clarity. If Solomon or his children turn from following the Lord, if they will not keep His commandments, if they go and serve other gods, then the covenant breaks. The condition is violated. And the consequences follow with equal clarity.',
        },
        {
          kind: 'commentary',
          id: 'cut-off-israel',
          html:
            'God will cut off Israel from the land He gave them. The house that has been hallowed will be cast out of His sight. The people will become a proverb and a byword. Those who pass the temple will hiss and wonder: "Why hath the Lord done thus?" And the answer will echo: "Because they forsook the Lord their God." This is not punishment arbitrary or capricious. It is the natural consequence of breaking covenant.',
        },
        {
          kind: 'carry',
          html:
            'What we have been given comes to us on a condition we may not at first recognize. We are given grace, forgiveness, a place in God&apos;s family. But the gift is meant to call forth something from us in return. Not because God demands it, but because love requires response. A gift refused is grace despised. When we turn from the Lord, we do not leave Him unchanged; we leave ourselves abandoned to the consequences of our own choice. What grace has God given you, and what obedience does it call forth?',
        },
        {
          kind: 'reflection',
          id: 'promise-warning',
          prompt:
            'Solomon hears both a promise and a warning in the same moment. The Lord says the throne will be established forever — and yet it will not, if obedience fails. How do you hold together the promises God makes with the real possibility that you could break covenant and lose what He offers?',
        },
      ],
    },

    /* ─── 1 Kings 9:10–14 — The Land of Cabul ──────────────────────────── */
    {
      ref: '1 Kings 9:10–14',
      title: 'The Lands of Cabul — A Broken Alliance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 10,
              spans: [
                t('And it came to pass at the end of twenty years, when Solomon had built the two houses, the house of the Lord, and the king&apos;s house,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('(Now Hiram king of Tyre had furnished Solomon with cedar trees and fir trees, and with gold, according to all his desire,) that then king Solomon gave Hiram twenty cities in the land of Galilee.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Hiram came out from Tyre to see the cities which Solomon had given him; and they pleased him not.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he said, What cities are these which thou hast given me, my brother? And he called them the land of '),
                hy('Cabul', 'cabul-worthless'),
                t(' unto this day.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Hiram sent to the king six score talents of gold.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hiram-alliance',
          html:
            'For twenty years, Hiram, king of Tyre, has furnished Solomon with cedar and fir and gold — the materials of his greatness. This is a transaction dressed in the language of brotherhood. Hiram and Solomon are allies, trading partners, perhaps friends. But now, when Solomon attempts to settle the debt, he offers twenty cities in Galilee. Hiram comes to see them. And he is not pleased.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cabul',
          title: 'Cabul — "Worthless" or "Good for Nothing"',
          script: 'כָּבוּל',
          translit: '<strong>Cabul</strong> · worthless; of little account; fit for nothing',
          description:
            'The name Cabul appears nowhere else in Scripture. Its meaning is disputed among scholars, but the text makes clear what Hiram intends: the cities are worthless to him, good for nothing. He does not accept them as payment. He does not thank Solomon for them. He calls them by a name that will stick to the land "unto this day." The alliance, for all its show of brotherhood, has cracked.',
        },
        {
          kind: 'commentary',
          id: 'cabul-worthless',
          html:
            'In calling the cities Cabul — worthless — Hiram delivers an insult that cannot be unseen. The king of Tyre is saying that what Solomon has offered as repayment is beneath his dignity, beneath the value of what he has given. The relationship was never equal. Solomon is indebted. And now his attempt to settle the account has failed. Hiram sends gold back to Solomon, accepting no cities. The transaction ends, but the breach remains.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes in our attempt to repay what we owe, we discover we cannot. The debt is greater than we can satisfy. We offer what we have — our time, our effort, our resources — and find it is not enough, or worse, not what was wanted. There is a humility in accepting that some debts cannot be repaid, only forgiven. And there is a wisdom in recognizing when an arrangement has broken down beyond our ability to repair it.',
        },
        {
          kind: 'reflection',
          id: 'cabul-land',
          prompt:
            'Hiram rejects Solomon&apos;s offer and names the cities Cabul — worthless. Have you ever offered restitution or repayment for something and found it was refused or deemed inadequate? What did you do next?',
        },
      ],
    },

    /* ─── 1 Kings 9:15–23 — Solomon's Building Program ──────────────────── */
    {
      ref: '1 Kings 9:15–23',
      title: 'The Levy and the Building Program',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 15,
              spans: [
                t('And this is the reason of the '),
                hg('levy', 'hebrew-levy'),
                t(' which king Solomon raised; to build the house of the Lord, and his own house, and Millo, and the wall of Jerusalem, and Hazor, and Megiddo, and Gezer;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('For Pharaoh king of Egypt had gone up, and taken Gezer, and burnt it with fire, and slain the Canaanites that dwelt in the city, and given it for a present unto his daughter, Solomon&apos;s wife.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Solomon built Gezer, and Beth-horon the nether,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Baalath, and Tadmor in the wilderness, in the land,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And all the cities of store that Solomon had, and cities for his chariots, and cities for his horsemen, and that which Solomon desired to build in Lebanon, and throughout all the land of his dominion.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And all the people that were left of the Amorites, and the Hittites, and the Perizzites, and the Hivites, and the Jebusites, which were not of the children of Israel,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Their children that were left after them in the land, whom the children of Israel also were not able utterly to destroy, upon those did Solomon levy a tribute of '),
                t('bondservice'),
                t('; and so they are unto this day.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('But of the children of Israel did Solomon make no bondmen: but they were men of war, and his servants, and his princes, and his captains, and rulers of his chariots, and his horsemen.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('These were the chief of the officers that were over Solomon&apos;s work, five hundred and fifty, and they bare rule over the people that wrought in the work.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'levy-system',
          html:
            'The building program of Solomon is staggering in scope. The temple, the palace, Millo (the great wall of Jerusalem), and the fortified cities — Hazor, Megiddo, Gezer, Beth-horon, Baalath, Tadmor in the wilderness. The list goes on: storage cities, chariot cities, horsemen cities, everything Solomon desires. To accomplish this, he raises a levy — conscripted labor from those who are not Israelites.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levy',
          title: 'Mas — "Levy" or "Forced Labor"',
          script: 'מַס',
          translit: '<strong>Mas</strong> · levy; tribute; forced labor or conscription',
          description:
            'The word <em>mas</em> refers to forced labor imposed as tribute. It is the labor of those who owe allegiance to the king. In Solomon&apos;s time, this labor falls on the Canaanite peoples who remain in the land — the Amorites, Hittites, Perizzites, Hivites, and Jebusites. They work without choice.',
        },
        {
          kind: 'commentary',
          id: 'canaanites-enslaved',
          html:
            'The Canaanites who were not destroyed in the conquest become Solomon&apos;s slave labor. They could not be "utterly destroyed," and so they remain — now subject to forced service. It is a consequence of the incomplete conquest. Joshua did not finish the work; the burden falls on later generations.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mas-labor',
          title: 'Mas Oved — "Forced Labor" or "Bondservice"',
          script: 'מַס עֲבֹד',
          translit: '<strong>Mas oved</strong> · forced labor; corvée; slavery imposed as tribute',
          description:
            'The phrase "levy of bondservice" is a strong one. The labor is not voluntary. It is imposed. The Canaanites have no say in whether they will work or not. Yet they are not, by the text&apos;s definition, enslaved in the way the Egyptian slaves were enslaved. They remain in the land; they have identity and community. But their labor belongs to the king.',
        },
        {
          kind: 'commentary',
          id: 'israelites-spared',
          html:
            'A crucial distinction: "Of the children of Israel did Solomon make no bondmen." Israelites are not drafted for common labor. They serve as men of war, servants, princes, captains, rulers of chariots and horsemen. The distinction between Canaanite and Israelite is preserved. But this distinction will not hold. In chapter 12, when Rehoboam takes the throne, he will impose the same levy on Israel. And that will break the kingdom.',
        },
        {
          kind: 'commentary',
          id: 'officers-five-hundred',
          html:
            'Five hundred and fifty officers oversee the work. The administrative structure is immense. The work is coordinated, systematic, vast in scale. This is a kingdom functioning at the height of its organization and power.',
        },
        {
          kind: 'carry',
          html:
            'Power tempts us to arrange the world for our own purposes. Solomon uses his authority to build — and what he builds is magnificent, honoring God and elevating his own glory. But he does so at a cost. The Canaanites bear labor they did not choose. The system that spares Israelites now will, in one generation, turn against them. Power that seems benign at one moment can become oppressive at another. What power do you wield, and are you aware of the weight it places on others?',
        },
        {
          kind: 'reflection',
          id: 'levy-system-reflection',
          prompt:
            'Solomon imposes forced labor on the Canaanites but spares the Israelites. Does this distinction make the practice just? What would it have cost Solomon to accomplish his building program differently?',
        },
      ],
    },

    /* ─── 1 Kings 9:24–25 — The Three Annual Feasts ──────────────────────── */
    {
      ref: '1 Kings 9:24–25',
      title: 'The Three Annual Feasts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 24,
              spans: [
                t('And Pharaoh&apos;s daughter came up out of the city of David unto her house which Solomon had built for her: then did he build Millo.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And '),
                hg('three times in a year', 'three-times-yearly'),
                t(' did Solomon offer burnt offerings and peace offerings upon the altar which he built unto the Lord, and he burnt incense upon the altar that was before the Lord. So he finished the house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'pharaoh-daughter',
          html:
            'Solomon has married the daughter of Pharaoh — a political alliance of enormous significance. She is brought from the City of David to a house he has built for her. The marriage is a display of power and diplomatic acumen. But it is also, from a later Israelite perspective, the beginning of a dangerous pattern: Solomon will marry many foreign women, and these marriages will turn his heart away from the Lord (1 Kings 11:1–8).',
        },
        {
          kind: 'commentary',
          id: 'three-times-yearly',
          html:
            'Despite the implied complexity of Solomon&apos;s personal life and political entanglements, he keeps the law. Three times in a year he offers burnt offerings and peace offerings. He burns incense before the altar. These are the three great festivals of Israel — Passover, Pentecost, and Tabernacles. This is the rhythm of the Mosaic law, maintained. The king, for all his wisdom and his building, is still subject to the law of God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-olot',
          title: 'Olot and Shelamim — "Burnt Offerings" and "Peace Offerings"',
          script: 'עוֹלוֹת וּשְׁלָמִים',
          translit: '<strong>Olot</strong> · burnt offerings; <strong>Shelamim</strong> · peace offerings; fellowship offerings',
          description:
            'The burnt offerings (olot) were consumed entirely by fire, ascending as smoke to heaven — a total offering of submission and devotion. The peace offerings (shelamim) involved the offering of an animal, with portions given to the priest, portions to the offerer, and portions burned on the altar. They were occasions of fellowship and celebration. Together, they represent the full spectrum of Israel&apos;s covenant worship.',
        },
        {
          kind: 'carry',
          html:
            'We can build greatly. We can achieve politically. We can surround ourselves with display and power. But the foundation must remain: the keeping of the law of God, the offering of ourselves, the willingness to show up at the altar three times a year and present ourselves and our gifts. The law is not a burden that diminishes us; it is the shape of a life lived in remembrance of God.',
        },
        {
          kind: 'reflection',
          id: 'feasts-rhythm',
          prompt:
            'Solomon maintains the pattern of the three annual feasts throughout all his building and political maneuvering. What regular practices do you maintain that keep you aligned with God, no matter what else is happening in your life?',
        },
      ],
    },

    /* ─── 1 Kings 9:26–28 — The Navy at Ophir ────────────────────────────── */
    {
      ref: '1 Kings 9:26–28',
      title: 'The Navy at Ophir',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 26,
              spans: [
                t('And king Solomon made a navy of ships in Eziongeber, beside Eloth, on the shore of the Red sea, in the land of Edom.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Hiram sent in the navy his servants, shipmen that had knowledge of the sea, with the servants of Solomon.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And they came to '),
                hy('Ophir', 'ophir-gold'),
                t(', and fetched from thence gold, four hundred and twenty talents, and brought it to king Solomon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'navy-eziongeber',
          html:
            'Solomon builds a navy at Eziongeber, on the Red Sea. This is a remarkable achievement for an inland kingdom. The ships are crewed by Hiram&apos;s men — experienced sailors who know the sea. Solomon provides the vision and the resources; Hiram provides the seafaring knowledge. Despite the breach over the land of Cabul, they maintain a working partnership.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ophir',
          title: 'Ophir — The Source of Exotic Gold',
          script: 'אוֹפִיר',
          translit: '<strong>Ophir</strong> · a distant land from which precious metals and goods were obtained',
          description:
            'Ophir is mentioned frequently in Scripture as a source of gold, precious stones, and exotic imports. Its exact location is uncertain — it may be in Africa, the Arabian Peninsula, or even as far as India or Sri Lanka. What matters is that it is distant, exotic, and wealthy. To reach it is to extend the reach of Solomon&apos;s power and wealth across the known world.',
        },
        {
          kind: 'commentary',
          id: 'ophir-gold',
          html:
            'Four hundred and twenty talents of gold. In contemporary measures, this is approximately 13.5 tons — an almost incomprehensible quantity. The gold comes from a far country, brought back in ships. It is the fruit of trade, of naval knowledge, of Solomon&apos;s ambition to extend his reach beyond the borders of Israel. The navy is not merely a commercial venture; it is a symbol of Solomon&apos;s power reaching across the seas.',
        },
        {
          kind: 'commentary',
          id: 'wealth-pouring-in',
          html:
            'By the end of chapter 9, Solomon stands at the apex of power and wealth. The temple is finished. The palace is built. The cities are fortified. The labor system is in place. And now gold pours in from the distant lands. Solomon has achieved what no Israelite king before him has achieved. But the chapter ends at a moment of precarious balance — and the warning that opened it will echo through every page to come.',
        },
        {
          kind: 'christ',
          id: 'christ-connection-covenant',
          title: 'Christ Connection — The Yes and the If',
          html:
            'Solomon hears a magnificent promise: &quot;I will establish the throne of thy kingdom upon Israel for ever.&quot; But it is suspended on a condition: &quot;If thou wilt walk before me.&quot; The promise is real; the condition is real. And in the end, Solomon will not keep the condition. His heart will turn to other gods (1 Kings 11:1–9). But in Christ, the promise and the condition are met in a different way. Paul writes: &quot;For all the promises of God in him are yea, and in him Amen&quot; (2 Corinthians 1:20). Christ fulfills the condition on our behalf. He walks before the Father in perfect integrity. He keeps the statutes and judgments. And because He does, the promise passes not to a kingdom that might fall away, but to an unshakeable kingdom: &quot;Wherefore we receiving a kingdom which cannot be moved, let us have grace, whereby we may serve God acceptably with reverence and godly fear&quot; (Hebrews 12:28).',
        },
        {
          kind: 'carry',
          html:
            'The promises we receive come with conditions. We are promised grace, adoption, sonship — but they call forth a response. We are called to walk before the Lord, to keep His commandments, to offer ourselves three times a year at the altar of remembrance. The condition is not a punishment; it is the shape of love. And when we fail — when Solomon fails, when we fail — we discover that there is One who succeeded in our place, and whose success becomes our foundation.',
        },
        {
          kind: 'reflection',
          id: 'navy-ophir',
          prompt:
            'Solomon stands at the peak of his wealth and power at the end of chapter 9. Knowing what will come in chapter 10 and 11, what do you think he should have done differently? What warning or word from the Lord&apos;s appearance do you think he failed to heed?',
        },
      ],
    },
  ],
};
