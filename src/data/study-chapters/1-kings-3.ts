import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 3 — Solomon's Wisdom
 *
 * Solomon comes to the throne of Israel as a young man. In a dream at Gibeon,
 * God appears to him and offers: "Ask what I shall give thee." Solomon does not
 * ask for long life, riches, or the defeat of his enemies. He asks for an
 * "understanding heart" — wisdom to judge his people. God is pleased. He gives
 * Solomon not only the wisdom he asked for, but riches, honor, and length of
 * days besides. The chapter closes with the famous judgment of the two women
 * and the child — a test that reveals true motherhood through sacrificial love.
 * In Solomon, we see a king who chooses wisdom, and in the sword test, we see
 * wisdom revealed in the hearts of the people.
 */
export const KINGS_1_3: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 3,

  intros: [
    'Solomon inherits the throne of his father David at a moment of both promise and peril. Israel is secure, but young. Solomon himself is described as "but a little child" — not unprepared, but newly anointed, aware of the magnitude of the burden he carries. The chapter opens with a political marriage to Pharaoh&apos;s daughter and the building of the temple — the immediate work of a new king. But then Solomon travels to Gibeon, to the great high place, to offer sacrifice. And there, in a dream, he encounters the living God.',
    'What happens next defines Solomon&apos;s reign and establishes him as the pattern of the wise ruler. God offers him a blank check — "Ask what I shall give thee." In that moment, Solomon reveals his heart. He asks not for power, not for victory, not for treasure, but for understanding — an "hearing heart" that can discern between good and evil. God is so pleased by this request that He gives Solomon far more than he asked: not only surpassing wisdom, but riches, honor, and peace besides. And the chapter ends not with abstract wisdom, but with wisdom made visible — in the judgment of two women and the living child, where the truth is revealed not by evidence or law, but by the yearning of a mother&apos;s bowels.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 3',
    quote:
      'Solomon asked for an understanding heart to judge his people. And God, pleased by his request for wisdom above all things, gave him not only wisdom, but riches, honor, and the capacity to discern the sacred in the hearts of men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 3 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 3:1–3 — Solomon's Mixed Beginning ───────────────────── */
    {
      ref: '1 Kings 3:1–3',
      title: 'A Mixed Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'And Solomon made affinity with Pharaoh king of Egypt, and took Pharaoh&apos;s daughter, and brought her into the city of David, until he had made an end of building his own house, and the house of the Lord, and the wall of Jerusalem round about.'),
            plain(2, 'Only the people sacrificed in high places, because there was no house built unto the name of the Lord, until those days.'),
            {
              number: 3,
              spans: [
                t('Solomon '),
                hg('loved the Lord', 'solomon-love-lord'),
                t(', walking in the statutes of David his father: only he sacrificed and burnt incense in '),
                hg('high places', 'high-places-then'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'pharaoh-daughter',
          html:
            'Solomon&apos;s first political act is a marriage to Pharaoh&apos;s daughter — a strategic alliance with Egypt, the great power of the ancient world. This is practical statecraft. But it immediately signals a tension: Solomon is making his own way, aligning himself with foreign powers, building his own house before the house of the Lord is complete. The new king is politically savvy, but the text notes this alignment with a certain coolness. We are meant to notice that Solomon has made "affinity" — a covenant of kinship — with a foreign king.',
        },
        {
          kind: 'commentary',
          id: 'no-temple-yet',
          html:
            'For generations, Israel has sacrificed at high places — local altars on hilltops, scattered throughout the land. There is no centralized temple yet. Solomon will build one, but for now, the worship of Israel is dispersed. The text is clear: the high places are permitted, even necessary, because the house of the Lord has not yet been built. This is a provisional arrangement, not the final word.',
        },
        {
          kind: 'commentary',
          id: 'solomon-love-lord',
          html:
            'Yet despite his political maneuvering, the text affirms that Solomon loved the Lord. He walks in the statutes of David his father. He sacrifices and burns incense. The tension in Solomon&apos;s character is already present: he is a lover of God and a practitioner of statecraft, often at odds with each other. His heart is divided, or at least, it has not yet been purified by the refiner&apos;s fire of experience.',
        },
        {
          kind: 'carry',
          html:
            'We often begin our spiritual journeys with mixed motivations — we love God, yes, but we also love the world, security, recognition, alliances. We make practical compromises thinking they are harmless. The chapter does not condemn Solomon for these choices yet. But it sets the stage: a king with the love of God in his heart, but also the wisdom of the world still upon him. What happens next will test where his true loyalty lies.',
        },
        {
          kind: 'reflection',
          id: 'mixed-beginning',
          prompt: 'When you came to faith, what "practical compromises" or "foreign alliances" did you think were harmless? How did God eventually call you to choose more fully?',
        },
      ],
    },

    /* ─── 1 Kings 3:4–7 — The Dream at Gibeon ──────────────────────────── */
    {
      ref: '1 Kings 3:4–7',
      title: 'The Dream at Gibeon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(4, 'And the king went to Gibeon to sacrifice there; for that was the great high place: a thousand burnt offerings did Solomon offer upon that altar.'),
            {
              number: 5,
              spans: [
                t('In Gibeon the Lord '),
                hp('appeared to Solomon in a dream', 'dream-gibeon'),
                t(' by night: and God said, Ask what I shall give thee.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Solomon said, Thou hast shewed unto thy servant David my father great mercy, according as he walked before thee in truth, and in righteousness, and in uprightness of heart with thee; and thou hast kept for him this great kindness, that thou hast given him a son to sit on his throne, as it is this day.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And now, O Lord my God, thou hast made thy servant king instead of David my father: and I am but a '),
                hg('little child', 'little-child'),
                t(': I know not how to go out or come in.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gibeon-thousand-offerings',
          html:
            'Solomon goes to Gibeon, the greatest of the high places, and offers a thousand burnt offerings. This is not a private prayer. This is a public act of worship on a massive scale — an act that declares Solomon&apos;s piety to all Israel. He is invoking heaven. And heaven responds.',
        },
        {
          kind: 'commentary',
          id: 'dream-gibeon',
          html:
            'God appears to Solomon in a dream — not in a vision while awake, but in sleep, when the ordinary defenses of the mind are lowered. In dreams, God often speaks to those who are open to Him. And His first word to Solomon is an invitation: "Ask what I shall give thee." It is a moment of absolute openness — God is offering Solomon anything he desires. The young king must choose.',
        },
        {
          kind: 'hebrew',
          id: '1k3-chazak',
          title: 'Chazak — "To Strengthen" or "To Hold Firm"',
          script: 'חָזַק',
          translit: '<strong>Chazak</strong> · to be strong; to be firm; to hold fast',
          description:
            'The verb "to strengthen" carries the sense of both power and steadfastness. Solomon is made king (chazak) — given the strength and authority to rule. But the question is: what will he do with that strength? Will he use it for himself, or in service to his people? The answer he gives will define his reign.',
        },
        {
          kind: 'commentary',
          id: 'david-mercy',
          html:
            'Solomon&apos;s first words in response are not a request, but acknowledgment. He remembers his father David, the mercy God showed him, the faithfulness David walked in. Solomon is not asking God to do anything new — he is reminding himself of who God is and who his father was. This is the prayer of someone who understands that the kingdom he has inherited is a gift, not a possession.',
        },
        {
          kind: 'commentary',
          id: 'little-child',
          html:
            'Solomon describes himself as "a little child" — not literally young, but spiritually small, aware of his own inadequacy. "I know not how to go out or come in" is an idiom for spiritual direction, for the capacity to lead. Solomon is confessing his need. In that confession lies the beginning of wisdom.',
        },
        {
          kind: 'carry',
          html:
            'God often comes to us in the quiet places — in prayer, in dreams, in moments when the world is still. And when He comes, He asks: "What do you want?" The answer we give reveals who we are. Do we ask for what we can use, or what we need? Do we ask for power, or for the wisdom to use power well? Solomon&apos;s answer begins with humility — an acknowledgment that he is small and the task is great.',
        },
        {
          kind: 'reflection',
          id: 'dream-asks',
          prompt: 'If God appeared to you in a dream and asked, "What shall I give thee?" — what would you ask for? What does your answer reveal about your values?',
        },
      ],
    },

    /* ─── 1 Kings 3:8–10 — "Give Therefore Thy Servant an Understanding Heart" */
    {
      ref: '1 Kings 3:8–10',
      title: 'The Prayer for Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('And thy servant is in the midst of thy people which thou hast chosen, a great people, that cannot be numbered nor counted for multitude.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Give therefore thy servant an '),
                hy('understanding heart', 'lev-shomea'),
                t(' to judge thy people, that I may '),
                hg('discern between good and bad', 'discern-good-bad'),
                t(': for who is able to judge this thy so great a people?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the '),
                hp('speech pleased the Lord', 'speech-pleased'),
                t(', that Solomon had asked this thing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'great-people',
          html:
            'Solomon looks at the task before him — a nation uncounted and uncountable, chosen by God, vast in numbers and complexity. He does not shrink from the description. He does not minimize the challenge. He sees clearly what lies ahead.',
        },
        {
          kind: 'hebrew',
          id: '1k3-lev-shomea',
          title: 'Lev Shomea — "A Hearing Heart"',
          script: 'לֵב שֹׁמֵ֫עַ',
          translit: '<strong>Lev shomea</strong> · a hearing heart; a listening heart',
          description:
            'Solomon asks not for a "wise heart" or a "strong heart" but a "hearing heart" — a heart that listens. Wisdom, in the biblical sense, is not the accumulation of knowledge or the development of clever reasoning. It is the capacity to listen — to God, to truth, to the cries of those you serve. A hearing heart is open to instruction, aware of its own limitations, responsive to reality. This is the deepest form of wisdom.',
        },
        {
          kind: 'commentary',
          id: 'discern-good-bad',
          html:
            'Solomon asks to discern between good and bad — not merely between right and wrong in the legal sense, but between what serves life and what serves death, what builds and what tears down. The judge must do more than apply law. He must perceive the hidden character of things and people. He must see what is truly good even when it wears the mask of evil, and what is truly evil even when it wears the mask of good.',
        },
        {
          kind: 'hebrew',
          id: '1k3-mishpat',
          title: 'Mishpat — "Judgment" or "Justice"',
          script: 'מִשְׁפָּט',
          translit: '<strong>Mishpat</strong> · judgment; justice; the capacity to judge rightly',
          description:
            'Mishpat is not merely the pronouncement of a sentence, but the capacity to perceive what is just and what is unjust. It is the virtue of a king — the ability to see into the hearts of his people and judge not by appearances, but by truth. Solomon is asking for the gift of discernment.',
        },
        {
          kind: 'commentary',
          id: 'speech-pleased',
          html:
            'The text says the speech pleased the Lord. Why? Because Solomon did not ask for the things that normally drive people to power — long life, riches, the destruction of enemies. He asked for the one thing that would make him a servant to his people. He asked to be able to see them, to understand them, to judge them rightly. In that request, God sees the heart of a true king.',
        },
        {
          kind: 'christ',
          id: '1k3-greater-solomon',
          title: 'Christ Connection — The Greater Solomon',
          html:
            'Jesus later invoked this passage when He told His disciples, "Behold, a greater than Solomon is here" (Matthew 12:42). Christ is the wisdom of God made incarnate (1 Corinthians 1:24). Where Solomon asked for a hearing heart to judge his people, Jesus lived as the one who truly listens — to the woman at the well, to Zacchaeus in the tree, to the thief on the cross. He sees not by outward appearance but by the truth written in the heart. And His judgments are not condemnations but mercies that call forth repentance and faith.',
        },
        {
          kind: 'carry',
          html:
            'What do you ask for when you pray? What would you choose if given the choice? Solomon teaches us that the deepest desire should not be for what we can possess, but for what we can give — the capacity to serve well, to discern truth, to judge mercifully. The hearing heart is not a passive thing. It is the active choice to listen over speaking, to understand over condemning.',
        },
        {
          kind: 'reflection',
          id: 'hearing-heart',
          prompt: 'What would it look like to pray for an "understanding heart" in your own relationships? Where do you need to listen more and judge less?',
        },
      ],
    },

    /* ─── 1 Kings 3:11–14 — God's Pleasure and Added Gifts ──────────────── */
    {
      ref: '1 Kings 3:11–14',
      title: 'God&apos;s Pleasure and the Gifts Beyond Asking',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('And God said unto him, Because thou hast asked this thing, and hast not asked for thyself long life; neither hast asked riches for thyself, nor hast asked the '),
                hg('life of thine enemies', 'life-enemies'),
                t('; but hast asked for thyself understanding to discern judgment;'),
              ],
            },
            plain(12, 'Behold, I have done according to thy words: lo, I have given thee a wise and an understanding heart; so that there was none like thee before thee, neither after thee shall any arise like unto thee.'),
            {
              number: 13,
              spans: [
                t('And I have also given thee that which thou hast not asked, both '),
                hp('riches', 'riches-given'),
                t(', and '),
                hp('honour', 'honour-given'),
                t(': so that there shall not be any among the kings like unto thee all thy days.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And if thou wilt walk in my ways, to keep my statutes and my commandments, as thy father David did walk, then I will lengthen thy days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'not-asked',
          html:
            'God emphasizes what Solomon did not ask for — the things that would normally be the first petition of a young king. He did not ask for long life, the security of his reign extended through decades. He did not ask for riches, the material abundance that would fund his ambitions. He did not ask for the death of his enemies, the confidence that comes from knowing that those who might oppose him are eliminated. These are the natural human desires that come with power. Solomon rejected them all.',
        },
        {
          kind: 'commentary',
          id: 'life-enemies',
          html:
            'The phrase "life of thine enemies" is worth pausing over. A young king, newly made, might reasonably fear the persons who could challenge his rule — older generals, ambitious princes, supporters of his older brothers. But Solomon asks for none of this security. He does not ask God to remove his rivals. He asks instead to be able to judge them wisely if the occasion comes. This shows a deep trust in God&apos;s providence rather than in human machinations.',
        },
        {
          kind: 'hebrew',
          id: '1k3-chokhma',
          title: 'Chokhma — "Wisdom"',
          script: 'חָכְמָה',
          translit: '<strong>Chokhma</strong> · wisdom; understanding; the capacity to perceive what is true and act accordingly',
          description:
            'Wisdom in Hebrew is not a cold intellectual virtue, but a living capacity to perceive reality as it is and act in accordance with it. It is bound up with justice, with fear of God, with the ability to make right choices in complex situations. Solomon is given wisdom without limit — "there was none like thee before thee, neither after thee shall any arise like unto thee."',
        },
        {
          kind: 'commentary',
          id: 'riches-given',
          html:
            'But then God gives Solomon what he did not ask for — riches and honor besides. This is a pattern in Scripture: when we seek first the kingdom of God and His righteousness, all these things are added unto us. Solomon asked for wisdom; God gave him wisdom and threw in the things that would normally distract from wisdom. This is the generosity of God, offering more than we request.',
        },
        {
          kind: 'commentary',
          id: 'honour-given',
          html:
            'Honor — the respect and recognition of the peoples around him — comes not because Solomon sought it, but because he is wise. Wisdom draws honor to itself. A king who judges justly, who listens to his people, who sees truly, will be honored by his people and his neighbors. It is a fruit that grows naturally from the root of wisdom.',
        },
        {
          kind: 'commentary',
          id: 'if-thou-wilt-walk',
          html:
            'But there is a condition: "If thou wilt walk in my ways, to keep my statutes and my commandments." The gifts are not unconditional. Solomon must continue to walk before God as his father David did. The promise of long life and continued blessing is bound to faithfulness. Solomon&apos;s choice — to seek wisdom above all — is good. But his continued reign depends on whether he continues to choose God.',
        },
        {
          kind: 'carry',
          html:
            'When we ask God for what we truly need rather than what we think we want, we are surprised by how much more He gives. But the gifts come with responsibility. They are not trophies to display, but tools to use in the service of righteousness. The question Solomon faces — will he continue to walk in God&apos;s ways now that he has been blessed? — is the question every person of faith faces when circumstances improve.',
        },
        {
          kind: 'reflection',
          id: 'gifts-beyond',
          prompt: 'Has God ever given you something you didn&apos;t ask for? How did it change your responsibility before Him?',
        },
      ],
    },

    /* ─── 1 Kings 3:15–18 — The Two Women and the Child ─────────────────── */
    {
      ref: '1 Kings 3:15–18',
      title: 'The Two Women at the Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 15,
              spans: [
                t('And Solomon awoke; and, behold, it was a dream. And he came to Jerusalem, and stood before the '),
                hg('ark of the covenant', 'ark-covenant'),
                t(' of the Lord, and offered up burnt offerings, and offered peace offerings, and made a feast to all his servants.'),
              ],
            },
            plain(16, 'Then came two women, that were harlots, unto the king, and stood before him.'),
            {
              number: 17,
              spans: [
                t('And the one woman said, O my lord, I and this woman dwell in one house; and I was delivered of a child with her in the house.'),
              ],
            },
            plain(18, 'And it came to pass the third day after that I was delivered, that this woman was delivered also: and we were together; no one was with us in the house, save we two in the house.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'awoke-dream',
          html:
            'Solomon awakes from the dream. What he has seen and heard is real — the presence of God is real, the promise is real — but it came to him in sleep. He returns immediately to Jerusalem and stands before the ark of the covenant, the visible sign of God&apos;s presence among His people. And he offers sacrifices — burnt offerings (wholly given to God) and peace offerings (shared between altar and worshippers). The dream has changed him. He is now a man in covenant with God.',
        },
        {
          kind: 'commentary',
          id: 'two-women',
          html:
            'And now, almost immediately, the wisdom of God is put to the test. Two women come before Solomon — women of low status (harlots, in the language of the text), women whose case is not a matter of law or contract, but of competing claims and broken trust. They represent the marginal people of the kingdom, those who would normally have no one to defend them. That they come to the king directly shows they believe he will listen. They believe Solomon will see them.',
        },
        {
          kind: 'commentary',
          id: 'one-house',
          html:
            'The two women share a house. They are poor enough that two women must live together, sharing a space. One gives birth to a son. Three days later, the other also gives birth. And then, in the night, one of the women smothers her own child in her sleep (or, as the older woman will later claim, deliberately) and exchanges the living child for the dead one. By morning, a terrible question has arisen: which child is the living one? Which woman is the true mother? The law provides no clear answer.',
        },
        {
          kind: 'carry',
          html:
            'The test of wisdom often comes not in abstract situations, but in the messy reality of human suffering and deception. Two women come before Solomon, and one tells a story, and the other contradicts it. The king cannot simply apply a rule. He must see into the depths of the situation. He must understand not law, but human nature — the mother&apos;s love, the liar&apos;s desperation, the competing claims of justice and mercy.',
        },
        {
          kind: 'reflection',
          id: 'competing-claims',
          prompt: 'When have you had to make a judgment between competing claims or stories? What did you rely on to discern the truth?',
        },
      ],
    },

    /* ─── 1 Kings 3:19–27 — The Sword Test and the True Mother ────────────── */
    {
      ref: '1 Kings 3:19–27',
      title: 'The Sword Test Reveals the True Mother',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(19, 'And this woman\'s child died in the night; because she overlaid it.'),
            plain(20, 'And she arose at midnight, and took my son from beside me, while thine handmaid slept, and laid it in her bosom, and laid her dead child in my bosom.'),
            plain(21, 'And when I rose in the morning to give my child suck, behold, it was dead: but when I had considered it in the morning, behold, it was not my son, which I had bare.'),
            {
              number: 22,
              spans: [
                t('Then said the other woman, Nay; but the '),
                hg('living is my son', 'living-child'),
                t(', and the dead is thy son: and this said, No; but the dead is thy son, and the living is my son. Thus they spake before the king.'),
              ],
            },
            plain(23, 'Then said the king, The one saith, This is my son that liveth, and thy son is the dead: and the other saith, Nay; but thy son is the dead, and my son is the living: Bring me a sword.'),
            {
              number: 24,
              spans: [
                t('And they brought a sword before the king. And the king said, '),
                hy('Divide the living child in two', 'divide-child'),
                t(', give half to the one, and half to the other.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Then spake the woman whose the living child was unto the king, for her bowels yearned upon her son, and she said, O my lord, give her the living child, and in no wise slay it. But the '),
                hp('other said', 'other-divided'),
                t(', Let it be neither mine nor thine, but divide it.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Then the king answered and said, Give her the '),
                hp('living child', 'give-living'),
                t(', and in no wise slay it: she is the mother thereof.'),
              ],
            },
            plain(27, 'And all Israel heard of the judgment which the king had judged; and they feared the king: for they saw that the wisdom of God was in him, to do judgment.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'dead-child',
          html:
            'One woman tells the story: my child died in the night — not through my neglect or cruelty, but through an accident. I was asleep. I rolled over, and he was beneath me. When I woke, he was dead. In my grief, in the darkness, I took her living child and laid it in my bosom, and my dead child in hers. In the morning, when I looked carefully, I saw it was not my son I held.',
        },
        {
          kind: 'commentary',
          id: 'other-contradicts',
          html:
            'The other woman contradicts her flatly. No, the living child is mine. You took my son. You laid your dead child in my arms. The contradiction is total. Both women cannot be telling the truth. One of them is lying — either about the exchange, or about the accident itself. The king cannot know which simply by hearing the two accounts.',
        },
        {
          kind: 'commentary',
          id: 'divide-child',
          html:
            'Solomon&apos;s judgment is shocking. He orders the child divided in two — half to each woman. It is a test, not a real intention. The king is saying: if you both claim this child, and you both believe your claims are just, then perhaps we should split the difference. But no just mother could accept this solution.',
        },
        {
          kind: 'hebrew',
          id: '1k3-rachamim',
          title: 'Rachamim — "Compassion" or "Mercies"',
          script: 'רַחֲמִים',
          translit: '<strong>Rachamim</strong> · mercies; compassion; from <strong>rechem</strong>, meaning womb',
          description:
            'The root of "compassion" in Hebrew is the womb — the seat of maternal love. True compassion is not sentimental feeling, but the visceral, protective love of a mother for her child. When Solomon&apos;s judgment reveals the true mother, it is because her bowels — her mercies, her womb-love — yearns upon her son. Truth is revealed not through argument, but through the overflow of genuine love.',
        },
        {
          kind: 'commentary',
          id: 'bowels-yearned',
          html:
            'The text says "her bowels yearned upon her son." This is the moment of truth. The true mother hears the judgment and cannot bear it. She does not care that she will lose the case. She does not care that her rival will take the child. All she can think of is the child&apos;s life. She cries out: "Give her the living child! Do not slay it!" Her love overflows. She cannot hide it.',
        },
        {
          kind: 'commentary',
          id: 'other-divided',
          html:
            'The other woman says: "Let it be neither mine nor thine, but divide it." She is willing to accept the division. She would rather destroy the child than lose the game. Her words reveal her heart — she does not love this child. She loves the victory.',
        },
        {
          kind: 'christ',
          id: '1k3-christ-sacrifice',
          title: 'Christ Connection — The King Who Would Not Divide What God Joined',
          html:
            'Solomon judges not by law, but by perceiving which claimant loves the child truly. This echoes through to Christ, the Greater Solomon, who faces a different question: "If you are the Son of God, come down from the cross." The true King does not defend His claim through displays of power or legal argument. He reveals His kingship through sacrificial love — through the willingness to give up everything so that His people might live. And just as Solomon recognized the true mother by her readiness to sacrifice the child rather than see it die, the world is meant to recognize Christ&apos;s kingship by His readiness to sacrifice Himself rather than see His people condemned.',
        },
        {
          kind: 'commentary',
          id: 'wisdom-of-god',
          html:
            'All Israel hears of this judgment and fears Solomon. They see that the wisdom of God is in him. Wisdom is not proven by arguments or displays of learning. It is proven by the capacity to see truly into the hearts of people and to judge in ways that serve justice and mercy both. Solomon has shown that wisdom by perceiving not the facts (which both women disputed), but the truth — the deep truth that love reveals.',
        },
        {
          kind: 'carry',
          html:
            'The true test of a leader is not how they handle clear-cut cases where right and wrong are obvious. It is how they handle ambiguous situations where both sides have claims, where the facts are disputed, where only the heart can reveal the truth. And the way to lead in such situations is not to accumulate power, but to listen so deeply that you can hear the difference between what is claimed and what is true. Solomon teaches us that wisdom is not hard, but tender — it knows what genuine love sounds like.',
        },
        {
          kind: 'reflection',
          id: 'true-mother',
          prompt: 'The true mother reveals herself not through winning an argument, but through her willingness to sacrifice. What would you be willing to sacrifice to protect what you truly love?',
        },
      ],
    },
  ],
};
