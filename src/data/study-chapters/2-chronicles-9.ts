import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Chronicles 9 — The Queen of Sheba and Solomon's Glory
 *
 * News of Solomon&apos;s wisdom reaches the far corners of the known world. The
 * Queen of Sheba comes to test him with hard questions, bringing gifts of
 * gold, spices, and precious stones. What she finds overwhelms her — not just
 * a wise king, but a man whose wealth, whose throne, whose very presence
 * speaks of God&apos;s favor. Yet even as Solomon reaches the height of human
 * power and splendor, the text holds a subtle tension: this kingdom is not
 * eternal, and the king who commands it will die. The Chronicler does not tell
 * us of Solomon&apos;s fall into idolatry (as 1 Kings does); instead, he shows us
 * Solomon at his zenith — and then records his death, and the succession to
 * his son Rehoboam.
 */
export const CHRONICLES_2_9: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 9,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 20 },
  intros: [
    'Solomon&apos;s fame has spread across the earth. Kings and merchants come seeking his presence, his wisdom, his goods. And now the Queen of Sheba, who has heard of his greatness, comes herself with a great retinue — camels bearing spices, gold, and precious stones. She comes to test him with hard questions, the way one might test the reputation of something that seems almost too great to believe.',
    'What she finds is not a disappointment but an overflow. She cannot contain her astonishment. The wisdom she has heard rumors of is real, but not just real — exceeded. The riches, the servants, the very architecture of his throne room speaks of a kingdom built on something deeper than human ingenuity. "Blessed be the Lord thy God," she says, "which delighted in thee to set thee on his throne, to be king for the Lord thy God." She recognizes what the text insists we recognize: this kingdom is God&apos;s kingdom. This wealth is God&apos;s blessing. And yet — the chapter ends with Solomon&apos;s death. The kingdom passes to his son. The question of what will happen to God&apos;s purpose when this extraordinary man is gone hangs over all his glory.',
  ],

  sections: [
    /* ─── 2 Chronicles 9:1–8 — The Queen of Sheba Tests Solomon ─────────── */
    {
      ref: '2 Chronicles 9:1–8',
      title: 'The Queen of Sheba Proves Solomon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'And when the queen of Sheba heard of the fame of Solomon, she came to prove Solomon with hard questions at Jerusalem, with a very great company, and camels that bare spices, and gold in abundance, and precious stones: and when she was come to Solomon, she communed with him of all that was in her heart.'),
            plain(2, 'And Solomon told her all her questions: and there was nothing hid from Solomon which he told her not.'),
            {
              number: 3,
              spans: [
                t('And when the queen of Sheba had seen the wisdom of Solomon, and the house that he had built,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the meat of his table, and the sitting of his servants, and the attendance of his ministers, and their apparel, and his '),
                hy('cupbearers', 'cupbearers'),
                t(', and his ascent by which he went up into the house of the Lord; there was no more spirit in her.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And she said to the king, It was a true report that I heard in mine own land of thine acts, and of thy '),
                hy('wisdom', 'wisdom-word'),
                t(':'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Howbeit I believed not their words, until I came, and mine eyes had seen it: and, behold, the one half of the greatness of thy wisdom was not told me: thou exceedest the fame that I heard.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Happy are thy men, happy are these thy servants, which stand continually before thee, and '),
                hg('hear thy wisdom', 'servants-hear'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Blessed be the Lord thy God, which delighted in thee to '),
                hp('set thee on his throne, to be king for the Lord thy God', 'sheba-covenant'),
                t(': '),
                hp('BECAUSE THY GOD LOVED ISRAEL, TO ESTABLISH THEM FOR EVER', 'israel-forever'),
                t(', therefore made he thee king over them, to do judgment and justice.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'queen-comes',
          html:
            'The Queen of Sheba comes with a great company — she does not come alone or in secret, but as a ruler in her own right, bringing tribute and seeking confirmation of what rumor has told her. She comes to "prove" Solomon with hard questions — to test whether his wisdom is genuine or merely a reputation built on exaggeration.',
        },
        {
          kind: 'commentary',
          id: 'nothing-hid',
          html:
            'Solomon does not sidestep or deflect. "There was nothing hid from Solomon which he told her not." He answers everything. This is a king so secure in his understanding that he has no need to guard his knowledge. He does not fear the questioner. He does not manage her impression. He simply tells her the truth.',
        },
        {
          kind: 'commentary',
          id: 'cupbearers',
          html:
            'The Queen observes not just Solomon&apos;s wisdom but the entire apparatus of his kingdom — the house, the table, the servants in their places, their clothing, his cupbearers, and "his ascent by which he went up into the house of the Lord." Every detail speaks. The very way he walks toward the house of God is part of his testimony.',
        },
        {
          kind: 'commentary',
          id: 'no-more-spirit',
          html:
            '"There was no more spirit in her." The phrase suggests she is breathless, overwhelmed. What she has seen exceeds what she has heard. The physical reality is richer than the rumor. And this is the first mark of true wisdom — that it is deeper and more intricate than any report can capture.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sheba',
          title: 'Sheba — שְׁבָא',
          script: 'שְׁבָא',
          translit: '<strong>Sheba</strong> · a kingdom in southern Arabia, associated with spice trade',
          description:
            'The Queen of Sheba rules over a kingdom that was one of the great mercantile centers of the ancient world. The mention of Sheba carries weight — she is not a minor ruler, but a woman of power and resources, and she comes to Solomon as one ruler to another.',
        },
        {
          kind: 'commentary',
          id: 'wisdom-word',
          html:
            'The Hebrew word here is חָכְמָה (chokhmah), wisdom. The Queen recognizes that what Solomon possesses is not merely intelligence or cleverness, but a deep understanding — a way of seeing and ordering the world that is far beyond ordinary human capacity.',
        },
        {
          kind: 'commentary',
          id: 'servants-hear',
          html:
            'The Queen observes that Solomon&apos;s servants are "happy" — they live in constant proximity to wisdom, hearing it daily. To be near wisdom is itself a kind of blessing. The servants do not fear their king; they rejoice to be in his presence.',
        },
        {
          kind: 'commentary',
          id: 'sheba-covenant',
          html:
            'The Queen&apos;s blessing shifts the focus from Solomon to the God who established him. She recognizes that Solomon&apos;s throne is not his own accomplishment; it is a gift. God "delighted" in him — the verb speaks of choice, of love, of covenant. Solomon sits on the throne "for the Lord thy God," not for himself.',
        },
        {
          kind: 'commentary',
          id: 'israel-forever',
          html:
            'The Queen understands something profound: Solomon&apos;s establishment is for Israel&apos;s sake. God loves Israel and has chosen to establish them forever — and in order to do that, God has given them this king. The Queen recognizes that the king&apos;s purpose is not personal glory but covenantal service to the nation God has chosen.',
        },
        {
          kind: 'christ',
          id: 'christ-greater',
          title: 'Christ Connection — A Greater Than Solomon',
          html:
            'The Queen of Sheba came from the ends of the earth to test Solomon&apos;s wisdom. But Jesus points to this moment and transforms it: "The queen of the south shall rise up in the judgment with this generation, and shall condemn it: for she came from the uttermost parts of the earth to hear the wisdom of Solomon; and, behold, a greater than Solomon is here" (Matthew 12:42). Christ is the wisdom of God incarnate. Where Solomon&apos;s wisdom was great but bounded by human limitation and ultimately by death, Christ&apos;s wisdom is eternal, inexhaustible, and divine. The Queen sought and found — but Christ offers what no earthly throne can give.',
        },
        {
          kind: 'carry',
          html:
            'The Queen of Sheba heard great things and made a journey to see if they were true. What great things have you heard about God, about Christ, about the way of faith — that you have not yet seen with your own eyes? What would it take for you to "prove" them, as the Queen proved Solomon? And have you found that the reality exceeds the report?',
        },
        {
          kind: 'reflection',
          id: 'queen-reflect',
          prompt: 'When the Queen tested Solomon, she found that "the one half of the greatness of thy wisdom was not told me." What have you experienced that was so much greater than what you&apos;d been told that it left you breathless?',
        },
      ],
    },

    /* ─── 2 Chronicles 9:9–12 — The Gifts and the Gold ────────────────── */
    {
      ref: '2 Chronicles 9:9–12',
      title: 'The Gifts of the Queen and the Gold of Ophir',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(9, 'And she gave the king an hundred and twenty talents of gold, and of spices great abundance, and precious stones: neither was there any such spice as the queen of Sheba gave to king Solomon.'),
            {
              number: 10,
              spans: [
                t('And the servants also of Huram, and the servants of Solomon, which brought gold from Ophir, brought algum trees and precious stones.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the king made of the algum trees terraces to the house of the Lord, and to the king&apos;s palace, and harps and psalteries for singers: and there were none such seen in the land of Judah.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And king Solomon gave to the queen of Sheba all her desire, whatsoever she asked, beside that which she had brought unto the king. So she turned, and went away to her own land, she and her servants.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'queen-gift',
          html:
            'The Queen gives 120 talents of gold — a vast sum, representing the wealth of her kingdom. She gives not just gold but spices "great abundance" and precious stones. These are not casual gifts; they are the treasures of her realm. And the text notes: "neither was there any such spice as the queen of Sheba gave to king Solomon." What she brought was unique, irreplaceable.',
        },
        {
          kind: 'commentary',
          id: 'ophir-gold',
          html:
            'While the Queen is still present, merchants arrive from Ophir with gold brought by the servants of Huram (the king of Tyre). Ophir was a place of great wealth, far away, and the gold from there was particularly prized. The text emphasizes that Solomon&apos;s wealth does not come from conquest or theft, but from trade, from the favor of other nations, from the earth itself. His kingdom is blessed.',
        },
        {
          kind: 'commentary',
          id: 'algum-terraces',
          html:
            'The algum wood — an expensive, rare wood — is used for two purposes: to make terraces (walkways or platforms) both for the house of the Lord and for the king&apos;s palace, and to make harps and psalteries for singers. That is, Solomon uses precious materials both for practical structures and for the instruments of worship. Nothing is too valuable to dedicate to God.',
        },
        {
          kind: 'carry',
          html:
            'The Queen gives what she has. Solomon gives what the Queen desires. Each gives abundantly, generously, without counting the cost. What do you hold so precious that to give it away would feel like a real sacrifice? What if that was what was being asked of you in this season?',
        },
        {
          kind: 'reflection',
          id: 'gifts-reflect',
          prompt: 'The Queen came with gifts, and Solomon gave her all she desired. What does it mean to give not out of surplus, but out of abundance — with joy, not resentment?',
        },
      ],
    },

    /* ─── 2 Chronicles 9:13–21 — The Throne of Ivory and Lions ─────────── */
    {
      ref: '2 Chronicles 9:13–21',
      title: 'The Throne of Solomon — Ivory and Gold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 13,
              spans: [
                t('Now the weight of gold that came to Solomon in one year was '),
                hg('six hundred and sixty and six talents', 'gold-666'),
                t(' of gold;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Beside that which chapmen and merchants brought: and all the kings of Arabia and governors of the country brought gold and silver to Solomon.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And king Solomon made two hundred targets of beaten gold: (six hundred shekels of gold went to one target:)'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And three hundred shields made he of beaten gold: (three hundred shekels of gold went to one shield:) and the king put them in the house of the forest of Lebanon.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Moreover the king made a '),
                hy('great throne of ivory', 'throne-ivory'),
                t(', and overlaid it with pure gold.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And there were six steps to the throne, and a footstool of gold fixed to the throne, and '),
                hy('stays on both sides of the sitting place', 'throne-stays'),
                t(', and two lions standing by the stays:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And '),
                hy('twelve lions', 'twelve-lions'),
                t(' stood there on the one side and on the other upon the six steps: there was not the like made in any kingdom.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And all the drinking vessels of the king were of gold, and all the vessels of the house of the forest of Lebanon were of pure gold: none were of silver; it was not any thing accounted of in the days of Solomon.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('For the king&apos;s ships went to Tarshish with the servants of Huram: every three years once came the ships of Tarshish bringing gold, and silver, ivory, and apes, and peacocks.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gold-666',
          html:
            'Solomon receives 666 talents of gold in a single year. This is not incidental — the number recurs in Scripture in haunting contexts. Centuries later, in Revelation, the number 666 marks the beast, the anti-christ, the great deceiver. The parallel is striking: what seems like the height of human blessing and wisdom in Solomon&apos;s case becomes, in the future, a mark of humanity&apos;s rebellion against God. Wealth and power that seem unlimited can become instruments of pride and idolatry. The text does not say this outright, but it plants the number for us to notice.',
        },
        {
          kind: 'commentary',
          id: 'throne-ivory',
          html:
            'Solomon makes a throne of ivory, overlaid with pure gold. Ivory was exotic, precious, brought from afar. To carve it and cover it with gold was an act of extravagant artistry. The throne is not merely functional; it is a statement: this is where God&apos;s chosen king sits. Everything about it speaks of transcendence.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-aryeh',
          title: 'Aryeh — אַרְיֵה',
          script: 'אַרְיֵה',
          translit: '<strong>Aryeh</strong> · lion; symbol of strength, majesty, God&apos;s power',
          description:
            'The lion appears throughout Scripture as an emblem of divine power and majesty. The root carries connotations of ferocity, courage, and unstoppable force. That Solomon&apos;s throne is flanked and supported by lions is a claim: the king sits under the protection and symbol of God&apos;s mighty power.',
        },
        {
          kind: 'commentary',
          id: 'throne-stays',
          html:
            'The "stays" — the side supports of the throne — are places where lions stand. The throne is not a simple seat but an architectural marvel, with lions as decorative and symbolic elements. They are not carved passive figures; they are described as "standing," as if ready to defend the throne and the king who sits upon it.',
        },
        {
          kind: 'commentary',
          id: 'twelve-lions',
          html:
            'Twelve lions in total: two standing beside the throne itself, and twelve along the six steps leading up to it. Twelve is the number of Israel&apos;s tribes. The lions that guard and frame Solomon&apos;s throne represent the wholeness of the kingdom, the protection of all Israel, the strength of all God&apos;s people gathered around the throne.',
        },
        {
          kind: 'christ',
          id: 'christ-lion',
          title: 'Christ Connection — The Lion of Judah Enthroned',
          html:
            'Solomon sits on a throne surrounded by lions. But the New Testament points us to a far greater Lion and a far greater throne. Jesus is called "the Lion of the tribe of Judah, the Root of David" (Revelation 5:5), and in John&apos;s vision, He sits on a throne surrounded not by carved lions but by living creatures, by the worship of heaven itself. Where Solomon&apos;s throne was temporal, glorious but destined to pass to his son, Christ&apos;s throne is eternal — "His kingdom will have no end" (Luke 1:33). The throne of ivory and gold pointed forward to a throne that no human artistry could construct, a throne upheld by God&apos;s own hand.',
        },
        {
          kind: 'carry',
          html:
            'We are tempted to believe that greatness is built on visible things — gold, ivory, power, beauty. Solomon&apos;s throne was all of these. And yet it passed away. What you build that will last is not what you ornament with the world&apos;s treasures, but what you build in hidden places — in your character, in your relationships, in your faithfulness when no one is watching. What are you building that will outlast the gold?',
        },
        {
          kind: 'reflection',
          id: 'throne-reflect',
          prompt: 'Solomon&apos;s throne was surrounded by twelve lions, representing all of Israel. What throne or authority in your own life needs to be held by something greater than yourself?',
        },
      ],
    },

    /* ─── 2 Chronicles 9:22–28 — Solomon the Wisest of All Kings ────────── */
    {
      ref: '2 Chronicles 9:22–28',
      title: 'Solomon Exceeds All Kings in Wisdom and Riches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 22,
              spans: [
                t('And '),
                hg('king Solomon passed all the kings of the earth in riches and wisdom', 'solomon-exceeds'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And all the kings of the earth '),
                hg('sought the presence of Solomon to hear his wisdom', 'kings-seek'),
                t(', which God had put in his heart.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they brought every man his present, vessels of silver, and vessels of gold, and raiment, harness, and spices, horses, and mules, a rate year by year.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Solomon had four thousand stalls for horses and chariots, and twelve thousand horsemen; whom he bestowed in the chariot cities, and with the king at Jerusalem.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And he reigned over all the kings from the river even unto the land of the Philistines, and to the border of Egypt.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the king made silver in Jerusalem as stones, and cedar trees as the sycomore trees that are in the vale, in abundance.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And they brought unto Solomon horses out of Egypt, and out of all lands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'solomon-exceeds',
          html:
            'The declaration is stark: Solomon "passed all the kings of the earth in riches and wisdom." This is not hyperbole. The text is making an absolute claim: there has never been a king like this. His wisdom is his own — God gave it to him — and his riches are unparalleled in the known world.',
        },
        {
          kind: 'commentary',
          id: 'kings-seek',
          html:
            'Kings come to Solomon, not as supplicants but as seekers. They want to hear his wisdom. This is a reversal of typical ancient Near Eastern politics — usually the great king receives tribute from lesser kings. But with Solomon, the traffic is different. Kings come because they want to learn. They want access to his understanding.',
        },
        {
          kind: 'commentary',
          id: 'god-put-heart',
          html:
            'The text emphasizes repeatedly that Solomon&apos;s wisdom "God had put in his heart." This is not human achievement alone. This is the gift of God. Solomon did not educate himself into this position; God educated his heart. And God gave him not just knowledge but the capacity to teach it, to make it living.',
        },
        {
          kind: 'commentary',
          id: 'silver-as-stones',
          html:
            'When silver becomes so abundant that it is "as stones" in a city, wealth has stopped being precious. It has become common. When cedar trees — the most valuable timber of the ancient world — become as common "as the sycomore trees that are in the vale," the usual measures of value have been inverted. Solomon&apos;s abundance is so complete that it reorders the entire economy.',
        },
        {
          kind: 'carry',
          html:
            'The kings of the earth sought Solomon&apos;s presence. Not his wealth — his wisdom. There is something in human nature that recognizes wisdom and wants to be near it, to learn from it, to let it reshape how we see the world. What wisdom are you becoming known for? What are you building your life around that would make someone want to sit at your feet and learn?',
        },
        {
          kind: 'reflection',
          id: 'kings-seek-reflect',
          prompt: 'Kings came to Solomon specifically to "hear his wisdom." What wisdom in your life is worth traveling for? What truths have you learned that you want to pass on?',
        },
      ],
    },

    /* ─── 2 Chronicles 9:29–31 — Solomon's Death and Succession ──────────── */
    {
      ref: '2 Chronicles 9:29–31',
      title: 'Solomon Reigns and Dies — The Kingdom Passes On',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 29,
              spans: [
                t('Now the rest of the acts of Solomon, first and last, are they not written in the book of Nathan the prophet, and in the prophecy of Ahijah the Shilonite, and in the visions of Iddo the seer against Jeroboam the son of Nebat?'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Solomon reigned in Jerusalem over all Israel '),
                hg('forty years', 'forty-years'),
                t('.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Solomon '),
                hp('slept with his fathers', 'sleep-fathers'),
                t(', and he was buried in the city of David his father: and Rehoboam his son reigned in his stead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'forty-years',
          html:
            'Forty years — the biblical number for a generation, for testing, for the wilderness years, for a completed season. Solomon reigned exactly as long as Israel had wandered in the wilderness before entering the promised land. His reign is a generation of peace, of building, of unparalleled blessing. And then it ends.',
        },
        {
          kind: 'commentary',
          id: 'sleep-fathers',
          html:
            '"Slept with his fathers" — the biblical euphemism for death. Solomon, who built the greatest kingdom, who accumulated wealth beyond measure, who seated himself on a throne of ivory and gold surrounded by lions, returns to the earth. His body goes to the grave. His greatness cannot buy him another day.',
        },
        {
          kind: 'commentary',
          id: 'rehoboam-succeeds',
          html:
            'Rehoboam, Solomon&apos;s son, succeeds him. The text does not linger on what this means, but those who know the rest of 2 Chronicles know the tragedy: Rehoboam will make foolish decisions that will split the kingdom. The united kingdom of David and Solomon will be broken. The succession brings not continuation but division. All of Solomon&apos;s glory could not secure his dynasty.',
        },
        {
          kind: 'christ',
          id: 'christ-eternal-throne',
          title: 'Christ Connection — The King Whose Throne Is Forever',
          html:
            'Solomon reigned forty years and died. His kingdom was split after him. His throne passed to his son and then eventually vanished from history. But the angel Gabriel, announcing the birth of Jesus, said: "He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David: and he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end" (Luke 1:32–33). Christ is the son of David whose kingdom will not be divided, will not fall to foolish successors, will not pass away. Where Solomon&apos;s throne was the highest point of human kingship, Christ&apos;s reign is the fulfillment of God&apos;s eternal purpose. Solomon points us forward to a greater Solomon, a king whose wisdom and power will never diminish, whose kingdom will never be divided or lost.',
        },
        {
          kind: 'carry',
          html:
            'Everything you build in this world will outlive your hands or it will not. Your career, your reputation, your wealth — these pass to others or disappear entirely. But what you build in the hearts of those who come after you, the wisdom you pass on, the love you kindle, the faith you model — these can outlast your life. How are you building something that will endure beyond you?',
        },
        {
          kind: 'reflection',
          id: 'death-reflect',
          prompt: 'Solomon reigned in splendor for forty years and then died. What would matter most to you at the end of a long reign — the throne you occupied, or what you passed on to those who came after?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 9',
    quote:
      'Solomon exceeded all the kings of the earth in riches and wisdom. Yet a greater than Solomon has come — Christ, whose kingdom will have no end, whose wisdom is infinite, whose throne is eternal.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 9 · Study Guide',
  },

  hasHebrew: true,
};
