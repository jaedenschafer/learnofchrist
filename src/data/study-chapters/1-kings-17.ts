import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 17 — Elijah the Prophet: Drought, Ravens, and Resurrection
 *
 * Elijah the Tishbite appears without warning before King Ahab and pronounces
 * a drought upon Israel as the consequence of turning from the Lord. The prophet
 * himself is sent to hiding — first to the brook Cherith, where ravens bring him
 * bread and meat, then to Zarephath in the land of Sidon, where a widow with only
 * a handful of meal and a cruse of oil becomes the agent of his sustenance. In
 * the widow&apos;s home, Elijah faces something deeper than hunger: a child dies.
 * The prophet stretches himself upon the boy and cries out to the Lord, and the
 * child&apos;s soul returns to him. In this chapter, we encounter a God who judges
 * sin through prophet, sustains the faithful through miracles, and raises the dead.
 */
export const KINGS_1_17: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 17,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 13 },
  intros: [
    'The kingdom of Israel has turned. King Ahab has taken a Phoenician wife, Jezebel, and with her has come the worship of Baal. The temple of the Lord stands in Jerusalem, but the northern kingdom has fractured its covenant. Into this apostasy comes a man from Gilead — a man who will stand before the king and declare that the rain itself will obey the Lord&apos;s word more faithfully than Israel obeys the Lord.',
    'Elijah&apos;s appearance marks a turning point. He speaks not as a courtier or advisor, but as one standing directly before God, with authority over the natural world itself. The drought he announces will last for years, according to his word — not because of natural cause, but because he speaks for the God who made the heavens. And as the famine spreads across the land, Elijah is hidden away, sustained in impossible ways: by birds in the desert, by the hospitality of a widow with nothing, and by the power to raise the dead.',
    'This chapter introduces us to a prophet who embodies the word of God with such force that his word itself becomes law. Here we see the God who judges unfaithfulness, who cares for the forgotten, and who has authority over death itself.',
  ],

  sections: [
    /* ─── 1 Kings 17:1 — The Word of Elijah ───────────────────────────── */
    {
      ref: '1 Kings 17:1',
      title: 'Elijah&apos;s Pronouncement',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                t('Elijah the Tishbite'),
                t(', who was of the inhabitants of Gilead, said unto Ahab, As the Lord God of Israel liveth, before whom I stand, there shall not be dew nor rain these years, but according to '),
                hp('my word', 'k1-my-word'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k1-elijah-appearance',
          html:
            'Elijah appears without introduction, without permission, without the formal protocols that would mark a prophet&apos;s entrance into the court of a king. He simply stands before Ahab and speaks. This abruptness is itself part of the message: Elijah does not negotiate or ask leave. He brings the word of the Lord, and it stands.',
        },
        {
          kind: 'hebrew',
          id: 'k1-eliyahu',
          title: 'Eliyahu — "My God is Yah"',
          script: 'אֵלִיָּ֫הוּ',
          translit: '<strong>Eliyahu</strong> · my God is Yah; God is Yahweh',
          description:
            'The name Elijah carries his message in its very syllables. El is God, and Yahu is the name of God — "my God is Yah." His identity proclaims allegiance to the Lord. In a court turning toward Baal, Elijah&apos;s very name is a confession.',
        },
        {
          kind: 'commentary',
          id: 'k1-my-word',
          html:
            'The phrase "according to my word" is extraordinary. Elijah does not say "according to the Lord&apos;s decree" or even "according to the Lord&apos;s word." He says "according to my word" — and in doing so, he claims an authority so complete that his word and God&apos;s word are one. The drought will last not by God&apos;s decree alone, but by Elijah&apos;s word. This is an authority that will astound and terrify Israel for three and a half years.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when you must speak with utter confidence in what you know to be true, even when everything around you contradicts it. Elijah stands in a pagan court and declares that the Lord alone is God, and that his word carries the weight of heaven. When you have truly heard from God, you don&apos;t negotiate that truth or soften it for your audience. You stand and speak.',
        },
        {
          kind: 'reflection',
          id: 'k1-pronouncement',
          prompt: 'When has God called you to speak a truth that seemed unlikely or went against the grain of your circumstances? How did you find courage to stand firm?',
        },
      ],
    },

    /* ─── 1 Kings 17:2–7 — Cherith and the Ravens ───────────────────── */
    {
      ref: '1 Kings 17:2–7',
      title: 'The Brook Cherith and the Ravens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(2, 'And the word of the Lord came unto him, saying,'),
            plain(3, 'Get thee hence, and turn thee eastward, and hide thyself by the brook Cherith, that is before Jordan.'),
            plain(4, 'And it shall be, that thou shalt drink of the brook; and I have commanded the ravens to feed thee there.'),
            {
              number: 5,
              spans: [
                t('So he went and did according unto the word of the Lord: for he went and dwelt by the brook Cherith, that is before Jordan.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the '),
                hy('ravens brought him bread and flesh', 'k1-ravens-feed'),
                t(' in the morning, and bread and flesh in the evening; and he drank of the brook.'),
              ],
            },
            plain(7, 'And it came to pass after a while, that the brook dried up, because there had been no rain in the land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k1-hide-cherith',
          html:
            'God tells Elijah to hide. After speaking with such authority before the king, after pronouncing a drought that will last years, the prophet is sent to hide by a forgotten brook. This is not safety born of his own power — it is safety born of obedience. Elijah does not hide because he is afraid. He hides because God tells him to. The command itself is protection.',
        },
        {
          kind: 'hebrew',
          id: 'k1-orev',
          title: 'Orev — "Raven"',
          script: 'עֹרֵב',
          translit: '<strong>orev</strong> · raven; a scavenging bird considered unclean',
          description:
            'In the Law of Moses, ravens were listed among unclean birds — creatures that consumed carrion, that were not to be eaten. Yet here, in the wilderness, they become the agents of God&apos;s provision for the prophet. The very animals deemed unfit to consume become bearers of sustenance. God uses what is despised to care for the faithful.',
        },
        {
          kind: 'commentary',
          id: 'k1-ravens-feed',
          html:
            'Twice a day, morning and evening, the ravens come with bread and flesh. This is not sporadic. This is not uncertain. The birds obey God&apos;s command as faithfully as any army, and Elijah is fed in the wilderness. A man who has just pronounced judgment over a kingdom now depends for his survival on creatures the world considers unclean. The point is unmistakable: the Lord provides for those who trust Him, and even the beasts serve God&apos;s purposes.',
        },
        {
          kind: 'commentary',
          id: 'k1-brook-dries',
          html:
            'The brook Cherith dries up. In this famine Elijah has proclaimed, even the hidden places of refuge fail. Water that sustained him runs dry. God does not keep Elijah in one place; the prophet is meant to move, to grow, to face new trials and deeper tests of faith.',
        },
        {
          kind: 'carry',
          html:
            'What sustains you? If it disappeared today, would your faith depend on something deeper? Elijah learned this lesson by the brook: no one source of supply is permanent. The real provision is not the ravens or the brook, but trust in the God who commands both. Your job is to obey when God tells you to move, even if it means leaving behind what has worked before.',
        },
        {
          kind: 'reflection',
          id: 'k1-cherith',
          prompt: 'When have you experienced a source of comfort or provision disappearing? How did you learn to trust God beyond that specific supply?',
        },
      ],
    },

    /* ─── 1 Kings 17:8–16 — Zarephath and the Widow ────────────────── */
    {
      ref: '1 Kings 17:8–16',
      title: 'The Widow and the Multiplied Meal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(8, 'And the word of the Lord came unto him, saying,'),
            plain(9, 'Arise, get thee to Zarephath, which belongeth to Zidon, and dwell there: behold, I have commanded a widow woman there to sustain thee.'),
            plain(10, 'So he arose and went to Zarephath. And when he came to the gate of the city, behold, the widow woman was there gathering of sticks: and he called to her, and said, Fetch me, I pray thee, a little water in a vessel, that I may drink.'),
            plain(11, 'And as she was going to fetch it, he called to her, and said, Bring me, I pray thee, a morsel of bread in thine hand.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k17-widow-provision',
          html:
            'Elijah flees; he finds a widow in Zarephath—faith meets provision in the land of the enemy.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 12,
              spans: [
                t('And she said, As the Lord thy God liveth, I have not a cake, but a handful of meal in a barrel, and a little oil in a cruse: and, behold, I am gathering two sticks, that I may go in and dress it for me and my son, that we may eat it, and '),
                hg('die', 'k1-prepare-to-die'),
                t('.'),
              ],
            },
            plain(13, 'And Elijah said unto her, Fear not; go and do as thou hast said: but make me thereof a little cake first, and bring it unto me, and after make for thee and for thy son.'),
            {
              number: 14,
              spans: [
                t('For thus saith the Lord God of Israel, The '),
                hp('barrel of meal shall not waste, neither shall the cruse of oil fail', 'k1-not-waste'),
                t(', until the day that the Lord sendeth rain upon the earth.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And she went and did according to the saying of Elijah: and she, and he, and her house, did eat many days.'),
              ],
            },
            plain(16, 'And the barrel of meal wasted not, neither did the cruse of oil fail, according to the word of the Lord, which he spake by Elijah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k1-zarephath',
          html:
            'Elijah is sent to Zarephath — not to Israel, but to Sidon, to the land of the Phoenicians. He is sent not to the palace but to the poorest part of the city. And he is not sent to a wealthy patron or a king, but to a widow. At the gate he finds her gathering sticks — the bare minimum of fuel to prepare the barest meal. She has nothing, and he asks her to feed him.',
        },
        {
          kind: 'commentary',
          id: 'k1-prepare-to-die',
          html:
            'The widow speaks with the resignation of one who has accepted her fate. She will bake this last cake, feed her son, and wait for death. There is no complaint in her voice, no anger — only the sad clarity of someone who sees the end. It is in this moment, when everything has been stripped away, that Elijah comes to her with the word of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'k1-not-waste',
          html:
            'The promise is radical: the barrel will not empty, the cruse will not fail. From this moment until rain falls, the meal and oil will sustain them all. Elijah demands trust at the point where trust seems impossible. The widow has one cake left, and he asks her to give it to a stranger first. She has to choose: despair or faith. She chooses faith, and in doing so, she participates in a miracle.',
        },
        {
          kind: 'carry',
          html:
            'Trust is not tested when everything is abundant. It is tested when you are down to your last meal, your last moment, your last hope. The widow did not have the luxury of half-measures. She could not trust Elijah&apos;s word and the world&apos;s logic simultaneously. She had to choose one completely. When you face a choice where you cannot have both God and the world, which do you choose?',
        },
        {
          kind: 'reflection',
          id: 'k1-widow-meal',
          prompt: 'The widow gave her last meal to feed a stranger. What is your "last meal" — what are you most afraid to give up, or most reluctant to trust God with?',
        },
      ],
    },

    /* ─── 1 Kings 17:17–24 — The Son&apos;s Death and Resurrection ────────── */
    {
      ref: '1 Kings 17:17–24',
      title: 'Death and Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 17,
              spans: [
                t('And it came to pass after these things, that the son of the woman, the mistress of the house, '),
                hg('fell sick', 'k1-son-sick'),
                t('; and his sickness was so sore, that there was no breath left in him.'),
              ],
            },
            plain(18, 'And she said unto Elijah, What have I to do with thee, O thou man of God? art thou come unto me to call my sin to remembrance, and to slay my son?'),
            plain(19, 'And he said unto her, Give me thy son. And he took him out of her bosom, and carried him up into a loft, where he abode, and laid him upon his own bed.'),
            plain(20, 'And he cried unto the Lord, and said, O Lord my God, hast thou also brought evil upon the widow with whom I sojourn, by slaying her son?'),
            {
              number: 21,
              spans: [
                t('And he stretched himself upon the child three times, and cried unto the Lord, and said, O Lord my God, I pray thee, let this child&apos;s soul come into him again.'),
              ],
            },
            plain(22, 'And the Lord heard the voice of Elijah; and the soul of the child came into him again, and he revived.'),
            plain(23, 'And Elijah took the child, and brought him down out of the chamber into the house, and delivered him unto his mother: and Elijah said, See, thy son liveth.'),
            {
              number: 24,
              spans: [
                t('And the woman said to Elijah, Now by this I know that thou art a man of God, and that the '),
                t('word of the Lord in thy mouth is truth'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k1-son-sick',
          html:
            'Just as Elijah has come to bring provision, death comes. The widow&apos;s son falls ill — not mildly, but catastrophically. "There was no breath left in him." This is not a sickness that might pass. This is death.',
        },
        {
          kind: 'commentary',
          id: 'k1-widow-questions',
          html:
            'The widow turns on Elijah. She has sheltered him, fed him from her last meal, trusted his word. And now her son is dead. Her words cut: "Art thou come unto me to call my sin to remembrance, and to slay my son?" She has been faithful, and yet her child has died. How does she make sense of this? Some interpreters have read in her words the assumption that a prophet can bring judgment. But what if she is simply asking: why has following you brought me this sorrow?',
        },
        {
          kind: 'commentary',
          id: 'k1-stretches-upon',
          html:
            'Elijah takes the child into his own bed and stretches himself upon him three times. This is not ceremonial. This is not distant. The prophet places his own body on the body of the dead boy, matching limb to limb, mouth to mouth. He becomes the channel through which the Lord works.',
        },
        {
          kind: 'commentary',
          id: 'k1-soul-returns',
          html:
            'Elijah cries to the Lord with a question: "Hast thou also brought evil upon the widow with whom I sojourn?" The prophet is not claiming credit for the resurrection. He is asking God why He would bring calamity on a woman who has shown such faithful hospitality. And the Lord answers: the child&apos;s soul returns to him, and he lives.',
        },
        {
          kind: 'christ',
          id: 'k1-christ-raises',
          title: 'Christ Connection — The Widow&apos;s Son Restored',
          html:
            'In Luke 7:11-17, Jesus comes to the gate of Nain and encounters a widow mourning her only son. "And when he saw her, he had compassion on her, and said unto her, Weep not. And he came and touched the bier: and they that bare him stood still. And he said, Young man, I say unto thee, Arise. And he that was dead sat up, and began to speak." Jesus echoes Elijah&apos;s action — restoring a widow&apos;s son to life. The comparison is unmistakable, and it points forward. If Elijah could raise the dead through the power of God, how much more can the Son of God, who is the source of that power, give life to the dead? (See also Luke 4:25-26, where Jesus explicitly cites this chapter as a pattern of divine care for the faithful.)',
        },
        {
          kind: 'carry',
          html:
            'When grief comes, when loss seems final, your faith will be tested more deeply than any prosperity ever could. The widow had to face the death of her son and somehow hold to the God she had only just come to trust through Elijah. But notice: she did not stop believing when her son died. She did not drive Elijah away. She let him take her son and cry out to God. In your darkest moments, can you still turn toward God instead of away?',
        },
        {
          kind: 'reflection',
          id: 'k1-resurrection',
          prompt: 'What "death" in your life — loss, ending, grief — have you had to trust God to raise again? How did that test transform your faith?',
        },
      ],
    },

    /* ─── The Word Confirmed ──────────────────────────────────────────── */
    {
      ref: '1 Kings 17:24 (closing)',
      title: 'The Word Confirmed',
      blocks: [
        {
          kind: 'commentary',
          id: 'k1-woman-knows',
          html:
            'The widow&apos;s final words are a declaration: "Now by this I know that thou art a man of God, and that the word of the Lord in thy mouth is truth." She has seen Elijah&apos;s word about the meal and oil fulfilled. And now she has seen his prayer answered, and her son alive again. The prophet&apos;s word is validated not by words, but by reality. The word works. The God behind that word is real.',
        },
        {
          kind: 'artwork',
          matchTitle: /Elijah|widow/i,
          caption: '1 Kings 17:17–24 — Death and Resurrection',
        },
        {
          kind: 'carry',
          html:
            'A word from God, when it is true, will bear fruit in the world. The word of the Lord is not abstract philosophy or pleasing platitudes. It is power. It sustains, it multiplies, it raises the dead. When you speak God&apos;s truth, you are speaking words that have that same power — the power to change what is dead, to multiply what seems scarce, to sustain what has no other source of supply.',
        },
        {
          kind: 'reflection',
          id: 'k1-word-confirmed',
          prompt: 'When have you seen the word of God prove true in your own life, not just in theory but in actual circumstances?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Kings 17',
    quote: 'The word of the Lord in Elijah&apos;s mouth is truth — sustaining the faithless through famine, multiplying meal and oil at the point of death, and raising the dead through the cry of one who believes.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 17 · Study Guide',
  },
};
