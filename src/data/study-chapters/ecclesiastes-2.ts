import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 2 — Pleasure, Pursuits, and Emptiness
 *
 * The Preacher embarks on a grand experiment. He will pursue every pleasure,
 * build every monument, gather every possession. He will have vineyards and
 * gardens, servants and treasures. He will deny himself nothing. And yet,
 * after accumulating all of it, he finds: "All was vanity and vexation of
 * spirit, and there was no profit under the sun." The deeper the pleasure,
 * the greater the emptiness that follows.
 */
export const ECCLESIASTES_2: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 2,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 7 },
  topicTags: ['wisdom', 'suffering', 'sovereignty', 'providence'],
  opener: {
    topical: true,
    caption: 'Ecclesiastes 2',
  },
  intros: [
    'Having established that all under the sun is vanity, the Preacher sets out to test this claim. Perhaps he has been too hasty. Perhaps if he pursues pleasure—real, tangible, intense pleasure—he will find meaning. Perhaps if he builds something great, something that bears his name, something of substance, he will have profit. So he embarks on an experiment, armed with wealth, power, and the freedom to do whatever he desires. He pursues mirth, wine, gardens, servants, music, women. And he observes it all with the eye of a scientist testing a hypothesis.',
    'What emerges is a portrait of the human condition when everything is permitted and nothing is denied. The results are clear: every pursuit yields the same conclusion. Pleasure passes and leaves a hollow ache. Building ends in ruin. Wisdom brings no advantage over folly. And most troubling of all, death comes for the wise and the fool alike. The accumulation of a lifetime is left to others, who may squander it. And so the Preacher concludes: "All was vanity and vexation of spirit."',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 2:1–11',
      title: 'The Pursuit of Pleasure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'I said in mine heart, Go to now, I will prove thee with mirth, therefore enjoy pleasure: and, behold, this also is vanity.'),
            plain(2, 'I said of laughter, It is mad: and of mirth, What doeth it?'),
            plain(3, 'I sought in mine heart to give myself unto wine, yet acquainting mine heart with wisdom; and to lay hold on folly, till I might see what was that good for the sons of men, which they should do under the heaven all the days of their life.'),
            plain(4, 'I made me great works; I builded me houses; I planted me vineyards:'),
            plain(5, 'I made me gardens and orchards, and I planted trees in them of all kind of fruits:'),
            plain(6, 'I made me pools of water, to water therewith the wood that bringeth forth trees:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc2-pleasure-pursuit',
          html: 'The Preacher tests pleasure and laughter, wine and building—but all yield only emptiness.[res:british-museum-mesopotamia]',
        },
        {
          kind: 'greek',
          id: 'ecc2-pneuma',
          title: 'Pneuma — "Spirit"',
          script: 'πνεῦμα',
          translit: '<strong>Pneuma</strong> · breath; spirit; wind',
          description: 'Like the Hebrew ruach, pneuma can mean wind, breath, or spirit—what is invisible yet powerful.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(7, 'I got me servants and maidens, and had servants born in my house; also I had great possessions of great and small cattle above all that were before me in Jerusalem:'),
            plain(8, 'I gathered me also silver and gold, and the peculiar treasure of kings and of the provinces: I gat me men singers and women singers, and the delights of the sons of men, as musical instruments, and that of all sorts.'),
            plain(9, 'So I was great, and increased more than all that were before me in Jerusalem: also my wisdom remained with me.'),
            plain(10, 'And whatsoever mine eyes desired I kept not from them, I withheld not my heart from any joy; for my heart rejoiced in all my labour: and this was my portion of all my labour.'),
            plain(11, 'Then I looked on all the works that my hands had wrought, and on the labour that I had laboured to do: and, behold, all was vanity and vexation of spirit, and there was no profit under the sun.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc2-experiment',
          html:
            'The Preacher announces his experiment with clinical precision. He will prove pleasure, test it, see whether it holds meaning. He will pursue mirth, and he will do this while retaining wisdom—he will observe himself as he pursues pleasure, noting what he discovers. This is important: the Preacher does not pursue pleasure mindlessly. He pursues it with eyes open, documenting what happens. And what happens is disillusionment.[res:sefaria-ecclesiastes-2]',
        },
        {
          kind: 'commentary',
          id: 'ecc2-abundance',
          html:
            'The scope of the Preacher&apos;s experiment is staggering. He builds houses, plants vineyards and gardens with all kinds of fruit trees, creates pools, accumulates servants and herds, gathers silver and gold, employs singers and musicians, and surrounds himself with all the delights available to the sons of men. He achieves what many would consider the ultimate human success: wealth, power, pleasure, recognition. And he withholds nothing—whatever his eyes desire, he keeps it. His heart rejoices in all his labor.[res:theoi-stoic-epicurean]',
        },
        {
          kind: 'commentary',
          id: 'ecc2-conclusion',
          html:
            'But then comes the verdict. After surveying all this—all he has built, all he has accumulated, all he has pursued—the Preacher looks on it and judges: "All was vanity and vexation of spirit, and there was no profit under the sun." The moment of satisfaction is followed by a hollowness. The pursuit itself energized him, but its fulfillment brings only emptiness. What he has built will not be remembered. What he has accumulated will be left to others. And he will be forgotten.',
        },
        {
          kind: 'carry',
          html:
            'Every human being faces this question: If you could have anything, would it satisfy? If you could build something permanent, would it be permanent? If pleasure itself could be your daily bread, would it fulfill you? The Preacher&apos;s honest answer is no. But this honesty is not despair—it is clarity. It is the prerequisite for looking beyond pleasure to Something that truly satisfies.',
        },
        {
          kind: 'reflection',
          id: 'ecc2-pleasure-test',
          prompt: 'What pleasure, if you pursued it intensely, do you suspect would ultimately disappoint you? What are you pursuing that you suspect will not fulfill?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 2:12–26',
      title: 'Wisdom, Folly, and Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'And I turned myself to behold wisdom, and madness, and folly: for what can the man do that cometh after the king? even that which hath been already done.'),
            plain(13, 'Then I saw that wisdom excelleth folly, as far as light excelleth darkness.'),
            plain(14, 'The wise man&apos;s eyes are in his head; but the fool walketh in darkness: and I myself perceived that one event happeneth to them all.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc2a-mid-pleasure-madness',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(15, 'Then said I in my heart, As it happeneth to the fool, so it happeneth even to me; and why was I then more wise? Then I said in my heart, that this also is vanity.'),
            plain(16, 'For there is no remembrance of the wise more than of the fool for ever; seeing that which now is in the days to come shall all be forgotten. And how dieth the wise man? as the fool.'),
            plain(17, 'Therefore I hated life; because the work that is wrought under the sun is grievous unto me: for all is vanity and vexation of spirit.'),
            plain(18, 'Yea, I hated all my labour which I had taken under the sun: because I should leave it unto the man that shall be after me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc2-wisdom-temporary',
          html: 'Wisdom does indeed excel folly—as light excels darkness. The wise man&apos;s eyes are in his head; he sees where he is going. But the Preacher&apos;s devastating observation is this: "one event happeneth to them all." Wise and fool both face the same fate. Both die. Both are forgotten. The wise man&apos;s advantage during his lifetime is real, but death negates it. He must leave his work to someone else—perhaps a fool. This realization turns his joy into hatred of life itself. All is vanity.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(19, 'And who knoweth whether he shall be a wise man or a fool? yet shall he have rule over all my labour wherein I have laboured, and wherein I have shewed myself wise under the sun. This is also vanity.'),
            plain(20, 'Therefore I went about to cause my heart to despair of all the labour which I had taken under the sun.'),
            plain(21, 'For there is a man whose labour is in wisdom, and in knowledge, and in equity; yet to a man that hath not laboured therein shall he leave it for his portion. This also is vanity and a great evil.'),
            plain(22, 'For what hath man of all his labour, and of the vexation of his heart, wherein he hath laboured under the sun?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc2b-mid-labor-despair',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(23, 'For all his days are sorrows, and his travail grief; yea, his heart taketh not rest in the night. This is also vanity.'),
            plain(24, 'There is nothing better for a man, than that he should eat and drink, and that he should make his soul enjoy good in his labour. This also I saw, that it was of the hand of God.'),
            plain(25, 'For who can eat, or who else can hasten hereunto, more than I?'),
            plain(26, 'For God giveth to a man that is good in his sight wisdom, and knowledge, and joy: but to the sinner he giveth travail, to gather and to heap up, that he may give to him that is good before God. This is also vanity and vexation of spirit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc2-wisdom-folly',
          html:
            'The Preacher turns from pleasure to wisdom. Does wisdom have value? Yes—wisdom is to folly as light is to darkness. The wise man&apos;s eyes are in his head; he sees where he is going. The fool walks in darkness. This is indisputable. And yet—and here is the Preacher&apos;s devastating observation—"one event happeneth to them all." Wise man and fool face the same fate. Both die. Both are forgotten. Both return to dust. The advantage of wisdom in this life is real but ultimately negated by death.',
        },
        {
          kind: 'commentary',
          id: 'ecc2-death-level',
          html:
            '"How dieth the wise man? as the fool." This line cuts to the heart of the problem. Wisdom does not exempt a person from death. It does not make death less final. The wise man has an advantage during his lifetime, but at the end, the grave makes him equal to the fool. And his life&apos;s work—all he has built, all he has created—must be left to someone else, who may be a fool. The work of a lifetime can be squandered by an heir.',
        },
        {
          kind: 'commentary',
          id: 'ecc2-rest',
          html:
            'The Preacher then offers a middle counsel: "There is nothing better for a man, than that he should eat and drink, and that he should make his soul enjoy good in his labour." This is not hedonism. It is acceptance. It is the recognition that labor itself, when engaged in without desperation, without trying to extract cosmic meaning from it, can provide simple satisfaction. To eat, to drink, to find joy in one&apos;s work—this is good. And crucially, it comes from the hand of God. Pleasure and labor are not evil in themselves. They become vain only when we expect them to provide ultimate meaning.',
        },
        {
          kind: 'christ',
          id: 'ecc2-christ-labor',
          title: 'Christ Connection — Labor Redeemed',
          html:
            'Christ taught that His yoke is easy and His burden is light. He knew labor, building and creating with His hands. But His work had meaning that transcended the physical. When Jesus said "It is finished," He spoke of work that would never be undone, never left to a foolish heir, never rendered useless by death. In Him, labor is transformed from vexation of spirit to purpose. The Christian works not to build a monument to himself, but to do God&apos;s will. And in doing God&apos;s will, one participates in something eternal.',
        },
        {
          kind: 'reflection',
          id: 'ecc2-what-inherit',
          prompt: 'What are you building or accumulating that you will leave to others? Does that reality change how you view your work? What would it mean to labor not for a monument that will be forgotten, but for something that serves God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'All was vanity and vexation of spirit, and there was no profit under the sun...There is nothing better for a man, than that he should eat and drink, and that he should make his soul enjoy good in his labour.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 2 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-ecclesiastes-2',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ecclesiastes 2',
      url: 'https://www.sefaria.org/Ecclesiastes.2',
      description: 'Sefaria open-access source text and translations for Ecclesiastes 2.',
    },
    {
      id: 'british-museum-mesopotamia',
      kind: 'museum',
      source: 'British Museum',
      label: 'ANE Wisdom Literature (Mesopotamia)',
      url: 'https://www.britishmuseum.org/',
      description: 'Mesopotamian wisdom texts paralleling Ecclesiastes&apos; quest for meaning under existential circularity.',
    },
  ],

  hasHebrew: true,
};
