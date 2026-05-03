import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 29 — David's Offering, Prayer, Solomon Enthroned
 *
 * At the end of his life, David challenges the assembled people: "Who is
 * willing to consecrate his service this day unto the Lord?" The response is
 * overwhelming. Gold, silver, bronze, iron, precious stones flow toward the
 * building of the house of God — a freewill offering born not of command but
 * of genuine devotion. Then David prays one of Scripture's great prayers:
 * "All things come of thee, and of thine own have we given thee." He is dying,
 * his kingdom passing to Solomon. And in his final act, he teaches Israel the
 * deepest theology of stewardship: we are strangers on borrowed time, giving
 * back what was always God's. Solomon is anointed a second time and made king.
 * David dies full of years, riches, and honour. The king's reign is complete.
 */
export const CHRONICLES_1_29: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 29,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 19 },
  intros: [
    'The book of 1 Chronicles closes with David in his final season — not in weakness, but in a kind of sacred completion. He has gathered all Israel at Jerusalem. Solomon, his son, has been chosen by God to build the house of the Lord. But before the kingdom passes entirely to the younger generation, David speaks to the assembled people with words that reveal the heart of a man who has spent a lifetime serving the God of heaven.',
    'What follows is one of Scripture&apos;s richest passages on stewardship, covenant devotion, and the proper relationship between God and His people. David challenges the congregation: "Who is willing?" And the people respond with such abundance that the text notes they rejoiced with perfect heart. Then comes David&apos;s prayer — a model of theological depth and pastoral tenderness, acknowledging that all wealth, all power, all honor flow from God&apos;s hand, and that we are merely stewards of what was never truly ours. In this final chapter, we see how a great king dies: not grasping, not afraid, but at peace in the knowledge that his work has been unto the Lord.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 29',
    quote:
      '"All things come of thee, and of thine own have we given thee." In his final act as king, David teaches Israel that stewardship — not possession — is the calling of God&apos;s people. A model of dying well, at peace with what passes away.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 29 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 29:1–5 — David's Challenge ───────────────────────── */
    {
      ref: '1 Chronicles 29:1–5',
      title: 'Who Is Willing?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(1, 'And David the king said unto all the congregation, Solomon my son, whom alone God hath chosen, is yet young and tender, and the work is great: for the palace is not for man, but for the Lord God.'),
            plain(2, 'Now I have prepared with all my might for the house of my God: gold for things of gold, silver for silver, brass for brass, iron for iron, wood for wood; onyx stones, stones to be set, glistering stones, of divers colours, all manner of precious stones, marble stones in abundance.'),
            plain(3, 'Moreover, because I have set my affection to the house of my God, I have of mine own proper good, of gold and silver, which I have given to the house of my God, over and above all that I have prepared: 3,000 talents of gold, of the gold of Ophir, 7,000 talents of refined silver.'),
            plain(4, 'Who then is willing to consecrate his service this day unto the Lord?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'great-work',
          html:
            'David stands before all Israel and frames the work with two truths. First, Solomon is young — "yet young and tender." The work is not easy, and the crown passes to one with much to learn. Second, and more importantly, "the palace is not for man, but for the Lord God." The house being built is not a monument to human achievement. It is a dwelling place for the living God. This reframing is everything. What might seem like a mighty building project becomes an act of worship.',
        },
        {
          kind: 'commentary',
          id: 'affection-house',
          html:
            'The king confesses: "I have set my affection to the house of my God." His heart is bound to this work. The materials he lists — gold, silver, brass, iron, wood, precious stones of every kind — are staggering. And then he adds a personal confession: "I have of mine own proper good... given to the house of my God, over and above all that I have prepared." David is not merely commanding the people. He is giving his own treasure first. He loves this work.',
        },
        {
          kind: 'hebrew',
          id: 'nedavah',
          title: 'Nedavah — "Freewill Offering"',
          script: 'נְדָבָה',
          translit: '<strong>Nedavah</strong> · freewill offering; offering given willingly and generously',
          description:
            'The word "nedavah" in Hebrew denotes a gift offered freely, prompted by love rather than command. It is the opposite of a tax or a forced levy. When David asks, "Who then is willing to consecrate his service?" he is inviting the people into an act of "nedavah" — a gift from a heart moved by devotion. This spirit of willing sacrifice is the foundation of true worship.',
        },
        {
          kind: 'carry',
          html:
            'We often frame giving as obligation — what we must give to the church, to charity, to God. But David models something deeper. He gives because his affection is set on the house of God. He gives first, and then asks others if they will join him in this willing devotion. What in your life — what cause, what person, what work — commands your affection so deeply that you would give freely, without being asked?',
        },
        {
          kind: 'reflection',
          id: 'willing-challenge',
          prompt: 'David sets his own affection on the work before asking others to join him. What have you given willingly because your heart was set on it, not because you were obligated?',
        },
      ],
    },

    /* ─── 1 Chronicles 29:6–9 — The Willing Response ──────────────────────── */
    {
      ref: '1 Chronicles 29:6–9',
      title: 'The Willing Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(6, 'Then the chief of the fathers and princes of the tribes of Israel, and the captains of thousands and of hundreds, with the rulers of the king&apos;s work, offered willingly,'),
            plain(7, 'And gave for the service of the house of God of gold 5,000 talents and 10,000 drams, and of silver 10,000 talents, and of brass 18,000 talents, and lapis lazuli stones 100,000 talents.'),
            plain(8, 'And they with whom precious stones were found gave them to the treasure of the house of the Lord, by the hand of Jehiel the Gershonite.'),
            plain(9, 'Then the people rejoiced, for that they offered willingly, because with perfect heart they offered willingly to the Lord: and David the king also rejoiced with great joy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'leaders-first',
          html:
            'The people respond to David&apos;s challenge. But notice who responds first: "the chief of the fathers and princes of the tribes... the captains of thousands and of hundreds... the rulers of the king&apos;s work." Leadership does not command from a distance. Leadership gives first. The abundance that follows — talents of gold and silver, bronze in vast quantities, precious stones — flows from leaders who have already opened their hands.',
        },
        {
          kind: 'commentary',
          id: 'perfect-heart',
          html:
            'The text uses a remarkable phrase: "because with perfect heart they offered willingly to the Lord." The Hebrew speaks of a "whole heart" — not a divided heart, not a grudging gift, but one given without reservation or complaint. And this wholeness of heart produces joy: "Then the people rejoiced." The connection is profound. When we give from a whole heart — not because we must, but because our affections are bound to the work — we find joy in the giving itself.',
        },
        {
          kind: 'hebrew',
          id: 'tam-lev',
          title: 'Tam — "Whole" or "Perfect"',
          script: 'תָּם',
          translit: '<strong>Tam</strong> · whole, complete, perfect, without blemish',
          description:
            'When Scripture says they gave "with perfect heart," the underlying Hebrew is "tam" — wholeness, completeness, without division or inner contradiction. A "tam" heart is one that is unified around a single purpose. It does not hold back. It does not calculate advantage. It is "all in." This is the heart God delights in.',
        },
        {
          kind: 'carry',
          html:
            'The text tells us not only what was given, but how it was received: with rejoicing. There is a profound truth here. When we give from a whole heart — when our affections align with our actions — we experience joy. But when we give grudgingly, with part of us hoping to keep what we have given, we miss that joy entirely. David teaches us that the deepest satisfaction comes not from what we possess, but from what we have freely given.',
        },
        {
          kind: 'reflection',
          id: 'perfect-heart-2',
          prompt: 'When have you given something — time, money, service — with a whole and undivided heart? How did it feel different from times when you gave reluctantly?',
        },
      ],
    },

    /* ─── 1 Chronicles 29:10–19 — David's Great Prayer ──────────────────── */
    {
      ref: '1 Chronicles 29:10–19',
      title: 'The Prayer of a Dying King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(10, 'Wherefore David blessed the Lord before all the congregation: and David said, Blessed be thou, Lord God of Israel our father, for ever and ever.'),
            plain(11, 'Thine, O Lord, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine; thine is the kingdom, O Lord, and thou art exalted as head above all.'),
            plain(12, 'Both riches and honour come of thee, and thou reignest over all; and in thine hand is power and might; and in thine hand it is to make great, and to give strength unto all.'),
            plain(13, 'Now therefore, our God, we thank thee, and praise thy glorious name.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'blessing-lord',
          html:
            'As the people stand ready to give their treasures, David stands before them and prays. The prayer opens not with petition, but with blessing: "Blessed be thou, Lord God of Israel." Before asking anything of God, David sanctifies the moment by offering praise. The prayer that follows is one of the great theological utterances of Scripture. In it, David uses language that moves beyond national politics into cosmic truth: God is Lord of all that is in heaven and in earth. His kingdom is exalted above all. This is not prayer in the mode of negotiation. It is prayer in the mode of recognition — acknowledging reality as it truly is.',
        },
        {
          kind: 'commentary',
          id: 'riches-honour',
          html:
            'David speaks directly: "Both riches and honour come of thee." The people are gathered to give vast treasures. But David, the king who has conquered kingdoms and accumulated great wealth, reminds them — and himself — that all of it originates in God. The hand that seems to possess is ultimately the hand that has received. The throne that seems secure is ultimately held in God&apos;s keeping. This is not false humility. It is clarity about the true source of all things.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(14, 'But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee.'),
            plain(15, 'For we are strangers before thee, and sojourners, as were all our fathers: our days on the earth are as a shadow, and there is none abiding.'),
            plain(16, 'O Lord our God, all this store that we have prepared to build thee an house for thine holy name cometh of thine hand, and is all thine own.'),
            plain(17, 'I know also, my God, that thou triest the heart, and hast pleasure in uprightness. As for me, in the uprightness of mine heart I have willingly offered all these things: and now have I seen with joy thy people, which are present here, to offer willingly unto thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'all-things-come',
          html:
            'Here is the bedrock of stewardship theology: "All things come of thee, and of thine own have we given thee." The people have just offered vast treasures. Yet the prayer acknowledges that even these gifts are not truly the people&apos;s to give. They are God&apos;s own, loaned to the people for a season. A steward is not a possessor. A steward is a caretaker, a keeper, a returner of what was always God&apos;s. This single sentence contains the whole spiritual economy of the Old Testament.',
        },
        {
          kind: 'commentary',
          id: 'strangers-sojourners',
          html:
            'The prayer moves deeper. David speaks of the pilgrimage of God&apos;s people: "We are strangers before thee, and sojourners, as were all our fathers." This echoes Abraham, who, as the letter to the Hebrews will later note, looked for a city whose builder and maker is God. The earth is not our permanent home. Our days are "as a shadow" — brief, insubstantial, passing. The awareness of our own transience is not despair in Scripture. It is the beginning of wisdom. When we understand that we too will pass away, we are liberated from the illusion of possession. We hold nothing. We are grateful for the loan.',
        },
        {
          kind: 'hebrew',
          id: 'natan',
          title: 'Natan — "To Give"',
          script: 'נָתַן',
          translit: '<strong>Natan</strong> · to give, to place, to set; the foundational verb of stewardship',
          description:
            'The verb "natan" appears throughout this passage: "all things come of thee, and of thine own have we given thee" uses a form of "natan." In Hebrew, the act of giving — real giving, from the heart — is tied to agency and intention. But here, the people are "giving back" what was always God&apos;s. True giving, the prayer suggests, is recognition that we are returning what we have held only temporarily.',
        },
        {
          kind: 'commentary',
          id: 'tries-heart',
          html:
            'David confesses: "Thou triest the heart, and hast pleasure in uprightness." God is not interested in the size of the gift. He looks at the heart from which it flows. A widow&apos;s two mites will be treasured above a rich man&apos;s abundance. David has given willingly, "in the uprightness of [his] heart," and he speaks this truth before the people so they understand: God sees you. God sees whether your gift flows from a heart turned toward Him.',
        },
        {
          kind: 'hebrew',
          id: 'tsel',
          title: 'Tsel — "Shadow"',
          script: 'צֵל',
          translit: '<strong>Tsel</strong> · shadow; something fleeting and insubstantial',
          description:
            'David says our days are "as a shadow." The Hebrew word is "tsel" — something cast by the sun, which moves and vanishes. It is used to evoke the brevity and transience of human life. Yet embedded in this image is a paradox: a shadow is only cast because there is light. Our days are brief, but they are illuminated by the presence of the Eternal. In that light, even the shortest life is significant.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(18, 'O Lord God of Abraham, Isaac, and of Israel, our fathers, keep this for ever in the imagination of the thoughts of the heart of thy people, and prepare their heart unto thee:'),
            plain(19, 'And give unto Solomon my son a perfect heart, to keep thy commandments, thy testimonies, and thy statutes, and to do all these things, and to build the palace, for the which I have made provision.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'perfect-heart-solomon',
          html:
            'David&apos;s final petition is for his son. "Give unto Solomon my son a perfect heart" — the same word we encountered in the people&apos;s offering. David does not pray that Solomon will be great, powerful, or wise (though he is those things). He prays that Solomon will have a heart wholly devoted to keeping God&apos;s commandments and statutes. The work is great. But the work can only be done by a man whose heart is wholly turned toward God. This is the prayer of a father who is about to pass his kingdom to his son, and who knows that the throne means nothing if the heart is not right.',
        },
        {
          kind: 'christ',
          id: 'christ-king-throne',
          title: 'Christ Connection — The King on the Father&apos;s Throne',
          html:
            'David is dying, and the kingdom passes to Solomon. But Solomon himself is a figure, a type pointing forward to the One whose kingdom will have no end. The New Testament speaks of Christ as "seated at the right hand of God" (Mark 16:19), or in the language of Revelation, as the One "that sitteth on the throne of God" (Revelation 3:21). Just as Solomon sat "on the throne of the Lord" as king (1 Chronicles 29:23), so Christ is exalted at the Father&apos;s right hand, not merely as a king among kings, but as the Eternal King whose reign is forever. And just as David prayed for Solomon to have a perfect heart kept to God&apos;s commandments, so Christ is the one who perfectly fulfilled the law and embodied complete devotion to the Father. The church, in turn, inherits the calling that David laid out: we are stewards, not possessors; pilgrims, not settlers; servants of the Eternal King.',
        },
        {
          kind: 'carry',
          html:
            'David&apos;s prayer teaches us that the deepest security does not come from what we own, but from understanding what we are. We are stewards. We are pilgrims. Our days are as a shadow. But in that shadow, we are held in the hand of God. We are invited to give freely, to hold loosely, to invest our brief years in building the house of God. That is not a diminishment. That is a liberation. What would change in your life if you truly believed that you are a steward, not a possessor?',
        },
        {
          kind: 'reflection',
          id: 'steward-prayer',
          prompt: 'David prays for Solomon to have a "perfect heart" devoted to God&apos;s law, not for riches or power. What would it mean for you to pray for a whole heart rather than for the things you think you need?',
        },
      ],
    },

    /* ─── 1 Chronicles 29:20–25 — Solomon Enthroned ──────────────────────── */
    {
      ref: '1 Chronicles 29:20–25',
      title: 'Solomon Enthroned the Second Time',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(20, 'And David said to all the congregation, Now bless the Lord your God. And all the congregation blessed the Lord God of their fathers, and bowed down their heads, and worshipped the Lord, and the king.'),
            plain(21, 'And they sacrificed sacrifices unto the Lord, and offered burnt offerings unto the Lord, on the morrow after that day, even 1,000 bullocks, 1,000 rams, and 1,000 lambs, with their drink offerings, and sacrifices in abundance for all Israel:'),
            plain(22, 'And did eat and drink before the Lord on that day with great gladness. And they made Solomon the son of David king the second time, and anointed him unto the Lord to be the chief governor, and Zadok to be priest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'bless-lord',
          html:
            'After the prayer, David calls the people to bless the Lord. And they do: they bow down, they worship. What follows is a ceremony of covenant renewal — a thousand bullocks, a thousand rams, a thousand lambs offered to the Lord, and then a feast "before the Lord on that day with great gladness." This is not a solemn occasion, despite being the moment of transition from David to Solomon. It is joyful. The people have given willingly. Their king has prayed with a whole heart. The house of God will be built. There is gladness.',
        },
        {
          kind: 'commentary',
          id: 'second-time',
          html:
            'The text notes that Solomon is made king "the second time." He was crowned once before (in 1 Kings 1), but this is his second anointing — a public ratification by the assembled people of Israel, witnessed by the leaders of all the tribes. He is "anointed unto the Lord to be the chief governor." The anointing is not merely political. It is sacred. He is appointed not just to rule, but to serve God by building the temple.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(23, 'Then Solomon sat on the throne of the Lord as king instead of David his father, and prospered; and all Israel obeyed him.'),
            plain(24, 'And all the princes, and the mighty men, and all the sons likewise of king David, submitted themselves unto Solomon the king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'throne-of-lord',
          html:
            'The phrase "the throne of the Lord" is extraordinary. In one sense, Solomon sits on an earthly throne in Jerusalem. But in another sense, the throne he sits upon is not merely a human seat of power. It is "the throne of the Lord." This sanctification of the political order — the understanding that a faithful king sits in God&apos;s stead, representing God&apos;s rule — is central to Old Testament theology. Solomon prospers. All Israel obeys. The princes and mighty men submit. The transition is seamless because the people understand that they are not submitting to a man, but to the Lord&apos;s anointed.',
        },
        {
          kind: 'carry',
          html:
            'When a kingdom is built on the worship of God, when its leaders are chosen not for power but for devotion, when the people understand that they are serving God through their covenant, then the kingdom stands strong. Conversely, when leaders forget that they sit on "the throne of the Lord" and begin to believe the throne is theirs — when they rule for themselves rather than for God — the kingdom crumbles. This applies not only to ancient Israel, but to every nation, every family, every life. Do you rule your own life for your own sake, or do you understand yourself as seated on a throne that belongs to God?',
        },
        {
          kind: 'reflection',
          id: 'throne-lord',
          prompt: 'Solomon sat on "the throne of the Lord," not merely on a human throne. In what areas of your life could you recognize that you are stewarding something that belongs to God, not truly ruling in your own right?',
        },
      ],
    },

    /* ─── 1 Chronicles 29:26–30 — David's Death ─────────────────────────── */
    {
      ref: '1 Chronicles 29:26–30',
      title: 'A King Dies Full of Years',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(26, 'Thus David the son of Jesse reigned over all Israel.'),
            plain(27, 'And the time that he reigned over Israel was forty years; seven years reigned he in Hebron, and thirty and three years reigned he in Jerusalem.'),
            plain(28, 'And he died in a good old age, full of days, riches, and honour: and Solomon his son reigned in his stead.'),
            plain(29, 'Now the acts of David the king, first and last, behold, they are written in the book of Samuel the seer, and in the book of Nathan the prophet, and in the book of Gad the seer:'),
            plain(30, 'With all his reign and his might, and the times that went over him, and over Israel, and over all the kingdoms of the countries.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'forty-years',
          html:
            'David reigned forty years. Seven in Hebron, while the kingdom was being unified; thirty-three in Jerusalem. A long reign. A life lived at the center of power. Yet the summary of his death is not about conquests or magnificence. It is about wholeness: "He died in a good old age, full of days, riches, and honour." The phrase "good old age" speaks of completeness. His days were not cut short. He lived to see his work completed. His son established. His temple planned. He could die satisfied that the calling God gave him had been fulfilled.',
        },
        {
          kind: 'commentary',
          id: 'good-death',
          html:
            'In Scripture, a "good death" is one that comes at the appointed time, in the fullness of years, having completed one&apos;s work, having seen one&apos;s children prosper. This is how David dies. Not in disgrace. Not cut down by enemies. Not raging against the dying of the light. But full, complete, ready to pass his kingdom to another. The contrast with other kings — with Saul, who dies on a sword; with many later kings, who die in judgment — is stark. David&apos;s death is the reward of a man who, whatever his failures, ultimately devoted himself to the Lord.',
        },
        {
          kind: 'hebrew',
          id: 'yom',
          title: 'Yom — "Days"; A Full Life',
          script: 'יוֹם',
          translit: '<strong>Yom</strong> · day; used in "full of days" to mean a life fully lived',
          description:
            'When the text says David died "full of days," it uses the Hebrew "yom" — literally, "days." But "full of days" means more than merely aging. It means a life so full of experience, of meaning, of purpose that every day counted. David was "full of days" — his life was not merely long, but full. Every year had substance.',
        },
        {
          kind: 'carry',
          html:
            'We fear that our lives will be cut short, that we will not have time to accomplish what matters. But David teaches us something different. What matters is not how much time we have, but whether we use it well. David had forty years of power and influence. A peasant may have seventy. But if the peasant lives "full of days" — giving freely, loving God, serving others — his life is as complete as David&apos;s. We are not measured by years, but by whether we have lived the years we were given with our whole heart.',
        },
        {
          kind: 'christ',
          id: 'christ-eternal-king',
          title: 'Christ Connection — The Eternal King',
          html:
            'David dies, and the kingdom passes to Solomon. But both live and reign in the shadow of One who will not pass away. Christ, in the New Testament, is described not as a king who will one day die and pass his throne to another, but as the King who reigns forever (Revelation 11:15; Luke 1:32–33). He is "the King of Kings," and "his kingdom is an everlasting kingdom, and his dominion is from generation to generation" (Daniel 4:3). Where David ruled for forty years and then died, Christ reigns without end. And where David, in his final prayer, expressed the deepest theological wisdom — that all things come from God and we are stewards, not possessors — so Christ taught us to "seek first the kingdom of God, and his righteousness" (Matthew 6:33), and to hold all earthly possessions lightly. The church is called to live in the same spirit David modeled: to rule our little kingdoms, to steward our resources, to give freely, and to remember always that we serve "the throne of the Lord."',
        },
        {
          kind: 'carry',
          html:
            'David dies and is remembered. The text says his acts "are written in the book of Samuel the seer, and in the book of Nathan the prophet, and in the book of Gad the seer." But more than that, his heart endures in the hearts of God&apos;s people. A man who devoted himself to God, who built a house for His name, who taught his people stewardship and willing devotion, dies "full of days, riches, and honour" — not because he grasped for wealth, but because he gave it away. Not because he clung to power, but because he released it to another. Not because he lived for himself, but because he lived unto God. That is how to die well. That is how to leave a kingdom behind that endures.',
        },
        {
          kind: 'reflection',
          id: 'good-death-2',
          prompt: 'What would it look like for you to die "full of days" — not merely old, but having lived a life of meaning, devotion, and wholehearted service? What legacy are you building toward?',
        },
      ],
    },
  ],
};
