import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 1 — The Fear of the Lord is the Beginning of Knowledge
 *
 * The book of Proverbs opens not with law or narrative, but with an invitation
 * to wisdom. "The fear of the Lord is the beginning of knowledge." Wisdom
 * herself is personified, speaking in the streets and calling to the simple.
 * She offers discernment, understanding, and righteousness to all who will
 * listen. But there is a cost to refusal. When sinners entice and the simple
 * turn away from wisdom's call, calamity comes like a whirlwind. The chapter
 * sets the stage: wisdom and folly contend for every heart.
 */
export const PROVERBS_1: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 7, deep: 10 },
  topicTags: ['wisdom', 'righteousness', 'folly', 'integrity'],
  opener: {
    topical: true,
    caption: 'Proverbs 1',
  },
  intros: [
    'The book of Proverbs begins with a premise: that life is not random, but shaped by the choices we make about wisdom and understanding. The book claims to teach "the fear of the Lord"—not terror of punishment, but reverent recognition of God&apos;s supremacy—as the very foundation of knowledge. Without this fear, without this rootedness in the reality of God, knowledge itself becomes empty and even dangerous.',
    'Wisdom is personified in these opening verses not as an abstract principle but as a voice, calling in the marketplace, crying at the gates, reaching out to all who will hear. Her invitation is public and urgent. But her offer can be refused. And refusal, Proverbs insists, leads not merely to mere disadvantage but to judgment—to calamity that comes when the simple turn away from the call of wisdom and choose instead to walk with sinners.',
  ],

  sections: [
    {
      ref: 'Proverbs 1:1–6',
      title: 'The Purpose of Proverbs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The proverbs of Solomon the son of David, king of Israel;'),
            plain(2, 'To know wisdom and instruction; to perceive the words of understanding;'),
            plain(3, 'To receive the instruction of wisdom, justice, and judgment, and equity;'),
            plain(4, 'To give subtilty to the simple, to the young man knowledge and discretion.'),
            plain(5, 'A wise man will hear, and will increase learning; and a man of understanding shall attain unto wise counsels:'),
            plain(6, 'To understand a proverb, and the interpretation; the words of the wise, and their dark sayings.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov1-purpose',
          html: 'These opening verses declare the entire purpose of the book: not to entertain or merely to instruct in practical matters, but to form the reader in wisdom. The word "proverb" (Hebrew <em>mashal</em>) means a comparison, a saying that holds up a mirror to life. Each proverb is a distilled truth, drawn from long observation of how the world actually works when people live in fear of the Lord. Solomon, the king renowned for his wisdom, offers these sayings to make the simple wise, to deepen the understanding of those already thoughtful, and to teach all who will listen the art of discernment.[res:sefaria-proverbs-1]',
        },
        {
          kind: 'hebrew',
          id: 'prov1-yirah',
          title: 'Yirah — "Fear" (Reverence)',
          script: 'יִרְאַת',
          translit: '<strong>Yirah</strong> · fear; awe; reverence before God',
          description: 'The Hebrew word yirah can mean "fear" in the sense of dread, but in the context of knowing God, it means something richer: reverential awe, a profound respect for God&apos;s power and majesty that orients the whole of life. It is not the fear that paralyzes but the fear that awakens. It is what keeps a person honest, humble, and aligned with the truth. To fear the Lord is to begin to live in reality.',
        },
        {
          kind: 'carry',
          html: 'What wisdom are you seeking? Is your search for knowledge rooted in reverence for God, or are you building a life on sand? The opening of Proverbs invites you to ask whether your understanding is leading you toward God or away from Him. Every choice to listen to wisdom, every choice to seek discernment, is a choice to order your life according to the way the world truly is.',
        },
        {
          kind: 'reflection',
          id: 'prov1-seek-wisdom',
          prompt: 'What would change in your daily decisions if you truly feared the Lord—if you genuinely believed that God&apos;s supremacy shapes the way the world works? Where do you currently seek wisdom from sources that do not begin with this fear?',
        },
      ],
    },

    {
      ref: 'Proverbs 1:7–9',
      title: 'The Fear of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(7, 'The fear of the Lord is the beginning of knowledge: but fools despise wisdom and instruction.'),
            plain(8, 'My son, hear the instruction of thy father, and forsake not the law of thy mother:'),
            plain(9, 'For they shall be an ornament of grace unto thy head, and chains about thy neck.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov1-beginning',
          html: 'Here is the central claim of the entire book. The fear of the Lord is not one wisdom among many. It is the beginning—the foundation, the starting point, the bedrock. All other understanding flows from this root. By contrast, fools are those who "despise wisdom and instruction." The fool is not merely ignorant but defiant. He has chosen not to listen, not to learn, not to order his life according to truth. He has chosen his own way.[res:british-museum-amenemope]',
        },
        {
          kind: 'commentary',
          id: 'prov1-father-mother',
          html: 'The instruction of father and mother is called the beginning of wisdom because the family is where reverence for God is first taught—not through lecturing but through the patient, persistent modeling of a life lived in fear of the Lord. These words of parents are described as an ornament of grace, adorning the child like jewelry, and as chains about the neck—not chains of bondage but chains of connection, tethering the young person to the wisdom that will save his life. They bind him to truth.[res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'christ',
          id: 'prov1-christ-wisdom',
          title: 'Christ Connection — Christ the Wisdom of God',
          html: 'Paul writes in 1 Corinthians 1:24 and 1:30 that Christ is "the power of God, and the wisdom of God," and that of God "are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption." The wisdom that Proverbs calls us to seek is ultimately not a principle but a person—Jesus, the Wisdom of God incarnate. To fear the Lord is to orient yourself toward Christ, the One in whom all true understanding dwells.',
        },
        {
          kind: 'reflection',
          id: 'prov1-ornament',
          prompt: 'Who were the voices in your life that first taught you to fear the Lord? How have their words shaped the way you move through the world? What wisdom are you passing on to others?',
        },
      ],
    },

    {
      ref: 'Proverbs 1:10–19',
      title: 'Wisdom Warns Against the Way of Sinners',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(10, 'My son, if sinners entice thee, consent thou not.'),
            plain(11, 'If they say, Come with us, let us lay wait for blood, let us lurk privily for the innocent without cause:'),
            plain(12, 'Let us swallow them up alive as the grave; and whole, as those that go down into the pit:'),
            plain(13, 'We shall find all precious substance, we shall fill our houses with spoil:'),
            plain(14, 'Cast in thy lot among us; let us all have one purse:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov-1-wisdom-refuse',
          html:
            'Wisdom calls. The simple refuse. Complacency blinds them. Scoffers mock. So wisdom laughs back—laughs at their calamity when it comes. The fool had his chance. He made his choice. Now fear will teach what scorn rejected.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(15, 'My son, walk not thou in the way with them; refrain thy foot from their path:'),
            plain(16, 'For their feet run to evil, and make haste to shed blood.'),
            plain(17, 'Surely in vain the net is spread in the sight of any bird.'),
            plain(18, 'And they lay wait for their own blood; they lurk privily for their own lives.'),
            plain(19, 'So are the ways of every one that is greedy of gain; which taketh away the life of the owners thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov1-entice',
          html: 'The seduction of sin is presented not as something crude but as something enticing, something that appeals to the desire for wealth, for community, for belonging. The sinners offer not merely to do evil but to do it together, to pool resources, to share the spoil. This is the deep cunning of temptation: it does not ask you to sin alone, but to sin as part of a group, to find your identity in the collective pursuit of gain at any cost. The path seems attractive. But the proverb cuts through: what seems like profit is actually the path to death.',
        },
        {
          kind: 'commentary',
          id: 'prov1-bird-net',
          html: 'The image of the bird and the net is devastating in its simplicity. "Surely in vain the net is spread in the sight of any bird." The bird, if it sees the net, will not fly into it. But sinners who are greedy of gain cannot see. They are so fixated on the prey they plan to catch that they do not see they themselves are being caught. Their violence returns upon their own heads. The way of greed consumes those who walk it.',
        },
        {
          kind: 'carry',
          html: 'When temptation comes, it will not come labeled as evil. It will come as an invitation to belong, to prosper, to be part of something. The protection against this is not merely to say no once, but to cultivate such a deep orientation toward the fear of the Lord that you can see the net before your feet. The choice to walk with wisdom is a choice made not in a moment but day by day, step by step.',
        },
        {
          kind: 'reflection',
          id: 'prov1-temptation',
          prompt: 'What temptations in your own life come wrapped in the promise of gain or belonging? How could you cultivate the clarity to see the net before you step into it?',
        },
      ],
    },

    {
      ref: 'Proverbs 1:20–33',
      title: 'Wisdom Calls, and Refusal Brings Calamity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(20, 'Wisdom crieth without; she uttereth her voice in the streets:'),
            plain(21, 'She crieth in the chief place of concourse, in the openings of the gates: in the city she uttereth her words, saying,'),
            plain(22, 'How long, ye simple, will ye love simplicity? and the scorners delight in their scorning, and fools hate knowledge?'),
            plain(23, 'Turn you at my reproof: behold, I will pour out my spirit unto you, I will make known my words unto you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov1-mid-fools-love',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(24, 'Because I have called, and ye refused; I have stretched out my hand, and no man regarded;'),
            plain(25, 'But ye have set at nought all my counsel, and would none of my reproof:'),
            plain(26, 'I also will laugh at your calamity; I will mock when your fear cometh;'),
            plain(27, 'When your fear cometh as desolation, and your destruction cometh as a whirlwind; when distress and anguish cometh upon you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov1-wisdom-offers-rejected',
          html: 'Wisdom&apos;s offer is public, and her rejection is progressive. First she calls. Then she is refused. The simple love their simplicity too much to change. But something darker emerges: there is consequence. The mockery Wisdom spoke of is not external judgment but a pivot point—from invitation to inevitable unfolding. When fear finally comes, there is no protection.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(28, 'Then shall they call upon me, but I will not answer; they shall seek me early, but they shall not find me:'),
            plain(29, 'For that they hated knowledge, and did not choose the fear of the Lord:'),
            plain(30, 'They would none of my counsel: they despised all my reproof.'),
            plain(31, 'Therefore shall they eat of the fruit of their own way, and be filled with their own devices.'),
            plain(32, 'For the turning away of the simple shall slay them, and the prosperity of fools shall destroy them.'),
            plain(33, 'But whoso hearkeneth unto me shall dwell safely, and shall be quiet from fear of evil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov1-wisdom-cries',
          html: 'Wisdom is not hidden in temples or available only to the learned. She cries aloud in the streets, at the gates, in the marketplace—the places where ordinary people gather. Her offer is public. Her call is urgent. She is not asking for much: only that the simple turn away from simplicity, that the scorners stop their scorning, that fools choose knowledge. But she is rejected. And rejection has consequences.',
        },
        {
          kind: 'commentary',
          id: 'prov1-laughing-calamity',
          html: 'The image of Wisdom laughing at calamity is jarring, but it speaks to a terrible truth: when someone refuses wisdom, when they reject her reproof again and again, there comes a point when Wisdom herself steps back. She does not force her way into a hardened heart. She does not prevent the natural consequences of folly from falling. When fear finally comes upon the fool—not the reverent fear of the Lord, but the paralyzing fear of their own ruin—they cry out to Wisdom, but she does not answer. It is too late.',
        },
        {
          kind: 'commentary',
          id: 'prov1-fruit-own-way',
          html: 'Yet there is mercy even here, of a kind. "They shall eat of the fruit of their own way." This is not arbitrary punishment from without, but the natural harvest of the seeds they have sown. The way of greed, of violence, of the rejection of God&apos;s order, yields its own bitter fruit. And that fruit is the deepest teacher of all—if only one will learn.',
        },
        {
          kind: 'carry',
          html: 'Wisdom calls to you. She is not silent. The question Proverbs poses to every reader is this: Will you hear? Will you turn? Or will you continue, only to discover too late that your refusals have cost you everything? The promise for those who listen is not merely wealth or safety, but something deeper: the ability to dwell safely, to be quiet from fear of evil, to live in the presence of the God whose wisdom is the beginning of all knowledge.',
        },
        {
          kind: 'reflection',
          id: 'prov1-which-voice',
          prompt: 'Whose voice are you listening to? Whose counsel are you following? What would it mean for you to truly turn toward the fear of the Lord?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The fear of the Lord is the beginning of knowledge: but fools despise wisdom and instruction.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 1 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-proverbs-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 1',
      url: 'https://www.sefaria.org/Proverbs.1',
      description: 'Sefaria open-access source text and translations for Proverbs 1.',
    },
    {
      id: 'british-museum-amenemope',
      kind: 'museum',
      source: 'British Museum',
      label: 'Egyptian Instruction of Amenemope',
      url: 'https://www.britishmuseum.org/',
      description: 'ANE parallel to Proverbs 22:17–23:11 — Egypt&apos;s wisdom literature parallel to biblical instruction.',
    },
    {
      id: 'cambridge-up-proverbs-wisdom',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Proverbs and Ancient Near Eastern Wisdom',
      url: 'https://www.cambridge.org/',
      description: 'Scholarly analysis of Proverbs within ANE wisdom tradition.',
    },
  ],

  hasHebrew: true,
};
