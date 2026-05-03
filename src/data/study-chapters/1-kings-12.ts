import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Kings 12 — The Kingdom Divided
 *
 * Rehoboam ascends to the throne as Solomon&apos;s successor. The people come
 * to him at Shechem with a simple request: lighten the burden your father
 * placed upon us, and we will serve you faithfully. It is a moment of mercy,
 * a chance to win the people&apos;s hearts. But Rehoboam, counseled by the young
 * men who have grown up with him, chooses arrogance instead of servant-
 * leadership. He speaks threats. He rejects the wisdom of elders. And in that
 * moment, a kingdom that has stood united under David and Solomon tears in two.
 *
 * What follows is equally tragic: Jeroboam, fearing that pilgrimage to the
 * temple in Jerusalem will turn his new kingdom back to Rehoboam, creates a
 * substitute religion — two golden calves, priests chosen from the lowest of
 * the people, a false feast. He repeats the sin of Aaron in the wilderness,
 * and his people, having seen the kingdom divide, now see worship itself divided
 * from truth. This is what happens when we choose convenience over covenant,
 * when we make gods suited to our comfort rather than gods who call us higher.
 */
export const KINGS_1_12: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 12,

  estimatedMinutes: { 5: 7, 10: 13, 15: 17 },
  intros: [
    'At the end of Solomon&apos;s reign, the kingdom he ruled is fractured beneath a facade of splendor. The building projects are magnificent, but the burden on the people is crushing. Heavy taxes. Forced labor. A yoke, as the text will say, that has become grievous.',
    'Rehoboam, Solomon&apos;s son, inherits a throne teetering on the edge of collapse. The people gather at Shechem — not to rebel, but to negotiate. They ask their new king to lighten the load. It is a reasonable request, an offer of continued loyalty in exchange for relief. And Rehoboam will have to choose: will he be a servant-king, or a tyrant?',
    'His choice, and the events that follow, tear the kingdom in two. The northern tribes will follow Jeroboam. The southern tribes will remain with the house of David. And in the resulting division, we will see not just political catastrophe, but spiritual catastrophe — a kingdom split, and worship itself corrupted.',
  ],

  showKjvNote: true,

  sections: [
    /* ─── 1 Kings 12:1–7 — The People&apos;s Request ────────────────────────── */
    {
      ref: '1 Kings 12:1–7',
      title: 'The People Make a Plea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              1,
              'And Rehoboam went to Shechem: for all Israel were come to Shechem to make him king.',
            ),
            plain(
              2,
              'And it came to pass, when Jeroboam the son of Nebat, who was yet in Egypt, heard of it, (for he was fled from the presence of king Solomon, and Jeroboam dwelt in Egypt;)',
            ),
            plain(
              3,
              'That they sent and called him. And Jeroboam and all the congregation of Israel came, and spake unto Rehoboam, saying,',
            ),
            {
              number: 4,
              spans: [
                t('Thy father made our '),
                hy('yoke grievous', 'yoke-grievous'),
                t(': now therefore make thou the grievous service of thy father, and his heavy yoke which he put upon us, '),
                hy('lighter', 'yoke-lighter'),
                t(', and we will serve thee.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he said unto them, Depart yet for three days, then come again to me. And the people departed.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And king Rehoboam consulted with the old men, that stood before Solomon his father while he yet lived, saying, How do ye advise that I may answer this people?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And they spake unto him, saying, If thou wilt be a '),
                hg('servant unto this people', 'servant-people'),
                t(' this day, and wilt serve them, and answer them, and speak '),
                hg('good words to them', 'good-words'),
                t(', then they will be thy servants for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'yoke-grievous',
          html:
            'The Hebrew word used here, <em>ol</em>, speaks of a yoke — the wooden frame that binds oxen together, forcing them to pull in the direction their master wishes. Solomon&apos;s heavy taxation and forced labor have made the people feel less like free subjects and more like beasts of burden. The memory is raw. They do not come in rebellion; they come in exhaustion.',
        },
        {
          kind: 'commentary',
          id: 'yoke-lighter',
          html:
            'The people&apos;s request is not unreasonable. They offer continued service — loyalty and obedience — in exchange for a lighter hand. They are willing to accept a new king, to submit themselves to his rule. All they ask is that the burden be eased. It is an act of mercy they extend to their new sovereign, a chance for him to build his reign on the consent of the governed rather than on force.',
        },
        {
          kind: 'commentary',
          id: 'servant-people',
          html:
            'The old men—counselors who served Solomon when he was alive—understand what makes a kingdom stable. They counsel service. Not weakness, not capitulation, but the willingness to listen, to bear the people&apos;s burdens, to speak kind words. A servant-king is not a weak king. A servant-king is one whose authority is strengthened by the willing loyalty of those beneath him.',
        },
        {
          kind: 'hebrew',
          id: 'ol-yoke',
          title: 'Ol — "Yoke"',
          script: 'עֹל',
          translit: '<strong>Ol</strong> · yoke; burden; that which binds and constrains',
          description:
            'The yoke appears throughout Scripture as a symbol of service, burden, and constraint. When a king&apos;s hand is heavy, he places a heavy yoke on his people. When God invites us into relationship, He offers a yoke — but His is light, His is easy (Matthew 11:30). The contrast between the unbearable yoke of Rehoboam and the easy yoke of Christ will echo throughout this chapter.',
        },
        {
          kind: 'carry',
          html:
            'When we are given authority—whether as parents, leaders, teachers, or friends—we face the same choice Rehoboam faced. Will we use it to dominate, to extract what benefits us? Or will we serve those under our care? The people came to Rehoboam offering their loyalty if he would lighten their burden. He had been given a path to genuine kingship. He chose otherwise.',
        },
        {
          kind: 'reflection',
          id: 'people-plea',
          prompt:
            'When have you been in a position to ease someone&apos;s burden or to increase it? How did you decide which path to take?',
        },
      ],
    },

    /* ─── 1 Kings 12:8–14 — Rehoboam&apos;s Foolish Answer ─────────────────────── */
    {
      ref: '1 Kings 12:8–14',
      title: 'The Young Men&apos;s Counsel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              8,
              'But he forsook the counsel of the old men, which they had given him, and consulted with the young men that were grown up with him, and which stood before him:',
            ),
            {
              number: 9,
              spans: [
                t('And he said unto them, What counsel give ye that we may answer this people, who have spoken to me, saying, Make the yoke which thy father did lay upon us lighter?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the young men that were grown up with him spake unto him, saying, Thus shalt thou speak unto this people that spake unto thee, saying, Thy father made our yoke heavy, but make thou it lighter unto us; thus shalt thou say unto them, My little finger shall be thicker than my father&apos;s loins.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And now whereas my father did '),
                hg('lade you with a heavy yoke', 'yoke-heavy'),
                t(', I will add to your yoke: my father hath '),
                hg('chastised you with whips', 'whips'),
                t(', but I will chastise you with '),
                hg('scorpions', 'scorpions'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('So Jeroboam and all the people came to Rehoboam the third day, as the king had appointed.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the king answered the people '),
                hg('roughly', 'roughly'),
                t(', and forsook the counsel of the old men which they gave him;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And spake to them after the counsel of the young men, saying, My father made your yoke heavy, and I will add to your yoke: my father also chastised you with whips, but I will chastise you with scorpions.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'yoke-heavy',
          html:
            'Rehoboam rejects the counsel of experience and accepts the counsel of peers. The young men promise him that a show of strength—a declaration that his hand will be even heavier than his father&apos;s—will secure the people&apos;s submission. They are wrong. Strength without wisdom is tyranny. And the people sense it immediately.',
        },
        {
          kind: 'commentary',
          id: 'whips',
          html:
            'The whip was Solomon&apos;s tool of coercion. Heavy taxation, forced labor, the exaction of resources. But Rehoboam promises something worse—not just the whip, but the scorpion. This is hyperbole, but it is a powerful hyperbole: you think my father was harsh? I will be merciless.',
        },
        {
          kind: 'commentary',
          id: 'scorpions',
          html:
            'The scorpion suggests torture more severe than mere beating. It is a threat that crosses a line—from demanding labor and tribute to promising suffering and pain. In making this threat, Rehoboam reveals something fundamental about himself: he has confused power with kingship, threat with authority, fear with loyalty.',
        },
        {
          kind: 'commentary',
          id: 'roughly',
          html:
            'The text emphasizes that Rehoboam answered <em>roughly</em>—harshly, without mercy, without the diplomacy a wise king would employ. He does not say these words in sorrow or reluctance. He speaks them with the arrogance of a young man who believes his youth is invincibility and his harshness is strength.',
        },
        {
          kind: 'carry',
          html:
            'There is a moment in every leader&apos;s life when they must choose: will I listen to the wisdom that comes from experience, or will I rely on the confidence of those my own age, who have not yet learned what failure teaches? Rehoboam chose. And his choice cost him a kingdom.',
        },
        {
          kind: 'reflection',
          id: 'foolish-answer',
          prompt:
            'When have you rejected wise counsel because it came from someone older or more experienced than you? What did that choice cost you?',
        },
      ],
    },

    /* ─── 1 Kings 12:15–19 — "To Your Tents, O Israel" ──────────────────── */
    {
      ref: '1 Kings 12:15–19',
      title: 'The Kingdom Divides',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('Howbeit the king hearkened not unto the people; for the cause was from the Lord, that he might perform his saying, which the Lord spake by Ahijah the Shilonite unto Jeroboam the son of Nebat.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('So when all Israel saw that the king hearkened not unto them, the people answered the king, saying, What portion have we in David? neither have we inheritance in the son of Jesse: '),
                hp('to your tents, O Israel', 'to-your-tents'),
                t(': now see to thine own house, David.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('So Israel departed unto their tents.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But as for the children of Israel which dwelt in the cities of Judah, Rehoboam reigned over them.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Then king Rehoboam sent Adoram, who was over the tribute; and all Israel stoned him with stones, that he died. Therefore king Rehoboam made speed to get him up to his chariot, to flee to Jerusalem.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('So Israel rebelled against the house of David unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cause-from-lord',
          html:
            'The text states plainly: this division was part of God&apos;s sovereign purpose. Ahijah the prophet had already announced to Jeroboam that he would rule ten tribes. Solomon&apos;s sin—his turning from the path, his multiplying of wives and wealth—bore its fruit not in his own generation alone, but in his son&apos;s. Rehoboam&apos;s foolishness did not create the division; it revealed it. God had already decreed it.',
        },
        {
          kind: 'commentary',
          id: 'to-your-tents',
          html:
            'This cry, "to your tents, O Israel," echoes an earlier moment in Scripture (2 Samuel 20:1), when a man named Sheba used the same words to call Israel away from David. It was the rallying cry of rebellion, the refusal of the southern kingdom&apos;s authority. Now it is spoken again. An old fault line—the tension between north and south that has simmered since the beginning of the united kingdom—tears open.',
        },
        {
          kind: 'commentary',
          id: 'portion-david',
          html:
            'The people ask: "What portion have we in David?" This is not a new complaint. For decades, the north has felt dominated by the south, its interests secondary to Jerusalem and Judah. Now, faced with Rehoboam&apos;s arrogance, they see no reason to remain bound to a dynasty that offers them nothing but burden. They choose their own way.',
        },
        {
          kind: 'hebrew',
          id: 'nachal-lot',
          title: 'Nachall — "Portion" or "Inheritance"',
          script: 'נַחֲלָה',
          translit: '<strong>Nachall</strong> · lot; inheritance; portion assigned by God',
          description:
            'The word "portion" in "What portion have we in David?" is <em>nachall</em> — an inheritance, a lot, something assigned by covenant. The people are saying: we have no covenant stake in the house of David. We owe it nothing. When the king refuses to serve us, we owe him nothing in return.',
        },
        {
          kind: 'carry',
          html:
            'A kingdom that is held together by force alone will fracture the moment force is threatened. A kingdom held together by genuine care, by listening to the people, by the willingness of a leader to bear the burdens of those he leads—that kingdom endures. Rehoboam had the chance to build the latter. He chose the former. And it cost him everything.',
        },
        {
          kind: 'reflection',
          id: 'kingdom-divides',
          prompt:
            'Have you ever witnessed the breaking of a community—a family, a team, a church—that resulted from a leader&apos;s arrogance or refusal to listen? What would have changed if that leader had humbled themselves?',
        },
      ],
    },

    /* ─── 1 Kings 12:25–30 — Jeroboam&apos;s Two Calves ──────────────────────── */
    {
      ref: '1 Kings 12:25–30',
      title: 'The Golden Calves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              25,
              'Then Jeroboam built Shechem in mount Ephraim, and dwelt therein; and went out from thence, and built Penuel.',
            ),
            {
              number: 26,
              spans: [
                t('And Jeroboam said in his heart, Now shall the kingdom return to the house of David:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('If this people go up to do sacrifice in the house of the Lord at Jerusalem, then shall the heart of this people turn again unto their lord, even unto Rehoboam king of Judah, and they will kill me, and go again to Rehoboam king of Judah.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Whereupon the king took counsel, and made two '),
                hy('calves of gold', 'calves-gold'),
                t(': and said unto the people, '),
                hy('It is too much for you to go up to Jerusalem', 'too-much'),
                t(': '),
                hy('behold thy gods, O Israel, which brought thee up out of the land of Egypt', 'behold-gods'),
                t('.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And he set the one in Bethel, and the other put he in Dan.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And this thing became a '),
                hg('sin', 'sin-became'),
                t(': for the people went to worship before the one, even unto Dan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'calves-gold',
          html:
            'Jeroboam&apos;s fear is understandable. If his people travel south to worship at the temple in Jerusalem, will they not renew their allegiance to Rehoboam? Will his new kingdom not collapse? And so he makes two golden calves—one in Bethel, one in Dan, at the northern and southern borders of his realm. Let his people worship without traveling. Let them be bound to him by ease and proximity.',
        },
        {
          kind: 'commentary',
          id: 'too-much',
          html:
            'The appeal to convenience is shrewd. "It is too much for you to go all the way to Jerusalem." Why endure hardship? Why not worship here, at home, where your king has prepared a place for you? Spiritual convenience is a powerful tool of deception. The easier path rarely leads toward truth.',
        },
        {
          kind: 'commentary',
          id: 'behold-gods',
          html:
            'But notice what Jeroboam says—the exact words matter. "Behold thy gods, O Israel, which brought thee up out of the land of Egypt." These are not his words alone. These are the words of Aaron, spoken in Exodus 32:4, when the people grew impatient with Moses and demanded a god they could see, touch, hold. Jeroboam repeats Aaron&apos;s sin. History is repeating itself, not as triumph, but as catastrophe.',
        },
        {
          kind: 'commentary',
          id: 'sin-became',
          html:
            'The text does not shy away from judgment. "This thing became a sin." Not a mistake, not a pragmatic compromise, but sin. Sin because it replaces the true worship of God with a substitute, worship designed for human comfort rather than divine truth. And the people, having seen their kingdom divided, now see worship itself divided from reality.',
        },
        {
          kind: 'hebrew',
          id: 'egel-calf',
          title: 'Egel — "Calf"',
          script: 'עֵגֶל',
          translit: '<strong>Egel</strong> · calf; a young bull',
          description:
            'The calf is a recurring symbol of false worship in Scripture. In Exodus, it is the golden calf—the thing Israel fashioned when they grew impatient with the invisible God. Here, Jeroboam does not invent a new sin; he repeats an old one. The calf represents our tendency to shrink the divine into something manageable, visible, comforting. A god we can see. A god who will not ask too much of us.',
        },
        {
          kind: 'hebrew',
          id: 'chattat-sin',
          title: 'Chattat — "Sin"',
          script: 'חַטָּאת',
          translit: '<strong>Chattat</strong> · sin; offense; that which misses the mark',
          description:
            'Sin is not merely breaking a rule. It is missing the mark, falling short of what God intends. Jeroboam&apos;s substitution of golden calves for pilgrimage to Jerusalem is a sin because it misses the mark of true worship. It may look like worship. It may satisfy the people. But it is not what God ordained.',
        },
        {
          kind: 'carry',
          html:
            'We all face the temptation Jeroboam faced: to create a religion that costs us less, asks us less, fits more easily into our lives. A god of convenience rather than a God who calls us to die to ourselves. The path of true discipleship often requires us to travel, to sacrifice, to do hard things. The path of substitution is always easier. And always destructive.',
        },
        {
          kind: 'reflection',
          id: 'golden-calves',
          prompt:
            'What are the "golden calves" in your own life—the substitutes for true devotion that offer convenience in place of integrity? What would it cost you to turn away from them?',
        },
      ],
    },

    /* ─── 1 Kings 12:31–33 — The False Priests and False Feast ────────────── */
    {
      ref: '1 Kings 12:31–33',
      title: 'A Substitute Religion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 31,
              spans: [
                t('And he made an house of high places, and made priests of the lowest of the people, which were not of the sons of Levi.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And Jeroboam ordained a feast in the eighth month, on the fifteenth day of the month, like unto the feast that is in Judah, and he offered upon the altar. So did he in Bethel, sacrificing unto the calves that he had made: and he placed in Bethel the priests of the high places which he had made.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('So he offered upon the altar which he had made in Bethel the fifteenth day of the eighth month, even in the month which he had devised of his own heart; and ordained a feast unto the children of Israel: and he offered upon the altar, and burnt incense.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'high-places',
          html:
            'Jeroboam does not merely set up two calves. He builds an entire apparatus of false worship. High places—altars on hills and ridges—scatter across the northern kingdom. Each one is a rival to the temple in Jerusalem, a place where the people can worship without leaving home. Convenience multiplied.',
        },
        {
          kind: 'commentary',
          id: 'priests-lowest',
          html:
            'Jeroboam chooses priests not from the sons of Levi—the tribe set apart by God for priestly service—but from the lowest of the people. This is radical. He strips the priesthood of its sacred status and makes it a political office, filled not by divine calling but by royal appointment. The entire structure of true worship is dismantled and replaced with a bureaucracy.',
        },
        {
          kind: 'commentary',
          id: 'false-feast',
          html:
            'The true feast—Tabernacles—occurs in the seventh month. Jeroboam moves it to the eighth month, changing even the calendar of worship to suit his political purposes. This is not a different interpretation of the same thing. This is a wholesale invention of a substitute religion, one that looks like the real thing but is designed by human hands for human convenience.',
        },
        {
          kind: 'christ',
          id: 'christ-true-king',
          title: 'Christ Connection — The True King and the Easy Yoke',
          html:
            'Rehoboam promised a heavier yoke. Jeroboam promised easier worship. Both were lies. Both crushed the kingdom. But in the New Testament, Christ offers what neither king could offer: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light" (Matthew 11:29–30). The yoke of Christ is easy not because it costs nothing, but because it is borne by One who knows what we carry and carries it with us. True worship, in spirit and in truth, cannot be replicated by substitute altars or convenient gods (John 4:24). And true kingship belongs to Christ alone, the <hp>Anointed One</hp> who came not to be served, but to serve, and to give his life as a ransom for many (Matthew 20:28). Where Rehoboam and Jeroboam both failed, Christ succeeds—not through force or convenience, but through love that calls us to die to ourselves and live in him.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of convenience religions. Faith that asks nothing difficult. Prayer that requires no silence or sacrifice. Community that demands no real commitment. Yet true encounter with God requires us to step away from our comfort, to abandon the calves we have made, to worship not what is easy but what is true. The kingdom of God is not built on convenience. It is built on covenant.',
        },
        {
          kind: 'reflection',
          id: 'false-worship',
          prompt:
            'What does it look like to worship in "spirit and truth" rather than relying on convenient substitutes? How does your own practice of faith compare to what Christ called His followers to?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Kings 12',
    quote:
      'A kingdom divided against itself cannot stand. When pride and arrogance replace wisdom and service, when convenience replaces covenant, the very foundation crumbles. Yet in Christ alone do we find a King whose yoke is easy, whose rule is rooted in love, and whose worship calls us not to convenience, but to truth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 12 · Study Guide',
  },

  hasHebrew: true,
};
