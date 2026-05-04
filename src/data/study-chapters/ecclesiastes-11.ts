import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 11 — Sow Your Seed
 *
 * "Cast thy bread upon the waters: for thou shalt find it after many days."
 * The Preacher counsels not paralysis but action. Do not wait for perfect
 * conditions. Plant even when you do not know if it will grow. Give generously
 * even when you do not know the return. Work in the morning and evening, for
 * you do not know which will succeed. The Preacher teaches a faithful
 * persistence: do what is yours to do, even in uncertainty.
 */
export const ECCLESIASTES_11: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 11,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  opener: {
    matchTitle: /The Voyage of Life/i,
    caption: 'Ecclesiastes 11',
  },
  intros: [
    'The Preacher now shifts tone. He has spent Ecclesiastes describing vanity, futility, the uncertainty of life. And yet, he does not counsel withdrawal. He counsels action. Action in faith. The results are uncertain—you do not know what the future holds. But you have been given this moment, this day, this opportunity. And you are invited to act faithfully, not knowing the outcome.',
    'He begins with paradoxes. Cast your bread on the water, an apparently wasteful act. Yet you will find it again after many days—perhaps not literally, but the point is that generosity and sowing return in ways you cannot predict. Do not wait for perfect wind or perfect weather. The farmer who waits for perfect conditions never plants. Do not refuse to give because you might lose what you give. The refusal to give guarantees that good never happens. The Preacher is teaching a theology of faithful action: do what is before you, trust the rest to God, and remember that you are young and the future is unknown.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 11:1–8',
      title: 'Sow and Give Without Knowing the Outcome',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'Cast thy bread upon the waters: for thou shalt find it after many days.'),
            plain(2, 'Give a portion to seven, and also to eight; for thou knowest not what evil shall be upon the earth.'),
            plain(3, 'If the clouds be full of rain, they empty themselves upon the earth: and if the tree fall toward the south, or toward the north, in the place where the tree falleth, there it shall be.'),
            plain(4, 'He that observeth the wind shall not sow; and he that regardeth the clouds shall not reap.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc11-mid-wisdom-fear',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.[res:british-museum-mesopotamia]',
        },
        {
          kind: 'greek',
          id: 'ecc11-tyche',
          title: 'Tyche — "Chance" or "Fortune"',
          script: 'τύχη',
          translit: '<strong>Tyche</strong> · chance; fortune; fate',
          description: 'The Preacher acknowledges that much of life is beyond calculation—chance and fortune operate under the sun.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(5, 'As thou knowest not what is the way of the spirit, nor how the bones do grow in the womb of her that is with child: even so thou knowest not the works of God who maketh all.'),
            plain(6, 'In the morning sow thy seed, and in the evening withhold not thine hand: for thou knowest not whether shall prosper, either this or that, or whether they both shall be alike good.'),
            plain(7, 'Truly the light is sweet, and a pleasant thing it is for the eyes to behold the sun:'),
            plain(8, 'But if a man live many years, and rejoice in them all; yet let him remember the days of darkness; for they shall be many. All that cometh is vanity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc11-cast-bread',
          html:
            '"Cast thy bread upon the waters: for thou shalt find it after many days." The image is of food cast into a river, apparently lost forever. Yet bread cast upon waters will eventually be found, carried downstream, reaching distant shores. The Preacher counsels generosity. Give. Invest. Plant. Do not hoard because you fear loss. The returns are not immediate, not visible, not guaranteed—but they come.[res:sefaria-ecclesiastes-11]',
        },
        {
          kind: 'commentary',
          id: 'ecc11-seven-eight',
          html:
            '"Give a portion to seven, and also to eight; for thou knowest not what evil shall be upon the earth." Spread your giving widely. You do not know what calamity will strike. The person you help today might be your savior in tomorrow&apos;s crisis. Or perhaps not. But the principle is this: generosity is wisdom in an uncertain world. The person who gives to many is protected by the networks of goodness he has created.[res:theoi-stoic-epicurean]',
        },
        {
          kind: 'commentary',
          id: 'ecc11-wind-observer',
          html:
            '"He that observeth the wind shall not sow; and he that regardeth the clouds shall not reap." Waiting for perfect conditions means never acting. The farmer must sow when it is time to sow, not when the weather is perfect. He must reap when it is harvest time, not when skies are clear. Life does not wait for our readiness. The Preacher counsels a kind of faith: do what is yours to do, and trust the rest.',
        },
        {
          kind: 'commentary',
          id: 'ecc11-morning-evening',
          html:
            '"In the morning sow thy seed, and in the evening withhold not thine hand." The Preacher gives a practical answer: do your work continuously. Plant in the morning. Continue in the evening. Do not hesitate. Do not wait. "For thou knowest not whether shall prosper, either this or that, or whether they both shall be alike good." You do not know which effort will bear fruit. So be diligent in all your efforts.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher invites us to a different relationship with the future. Not to deny uncertainty, but to accept it and act anyway. You do not know what will happen. But that is not a reason to refuse to act. That is a reason to act faithfully, widely, generously, without demanding certainty.',
        },
        {
          kind: 'reflection',
          id: 'ecc11-what-withhold',
          prompt: 'What are you withholding? From whom could you cast bread on the waters? What effort do you refuse to undertake because you cannot guarantee the outcome? And what would change if you sowed anyway, without knowing the harvest?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 11:9–10',
      title: 'Youth and the Account Before God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(9, 'Rejoice, O young man, in thy youth; and let thy heart cheer thee in the days of thy youth, and walk in the ways of thine heart, and in the sight of thine eyes: but know thou, that for all these things God will bring thee into judgment.'),
            plain(10, 'Therefore remove sorrow from thy heart, and put away evil from thy flesh: for childhood and youth are vanity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc11-rejoice-young',
          html:
            'The Preacher speaks to the young. Rejoice. Enjoy your youth. Let your heart cheer you. But do not forget: God will bring you into judgment for all of this. The young often live as if there will be no reckoning, no accountability. They do what seems good in their own eyes, without considering the consequences. But the Preacher teaches: there will be a judgment. What you do now matters. What you become matters. Because you will have to answer for it.',
        },
        {
          kind: 'commentary',
          id: 'ecc11-remove-sorrow',
          html:
            '"Therefore remove sorrow from thy heart, and put away evil from thy flesh." This is not a call to asceticism. It is a call to refuse what harms. Do not carry sorrow into your youth. Do not embrace evil. Put it away from yourself. And remember: childhood and youth are vanity. The pleasures of youth, pursued for their own sake, ultimately satisfy nothing. But the young person who recognizes that these years are a gift, who uses them wisely, who acts as if they will give account—such a person finds true joy.',
        },
        {
          kind: 'christ',
          id: 'ecc11-faithful-sowing',
          title: 'Christ Connection — Faithful Sowing',
          html:
            'Jesus taught about sowing and reaping. The farmer goes out and scatters seed. Some falls on the path, some on rocky ground, some among thorns. But some falls on good soil and bears fruit—thirty, sixty, a hundredfold. The sower does not determine the outcome. He scatters the seed faithfully. Similarly, Christ taught us to sow what we believe to be true and right, without demanding to see the immediate harvest. And He Himself sowed His life into the world, trusting that the harvest would come. The faithful sowing of life, of word, of love—this is what endures.',
        },
        {
          kind: 'reflection',
          id: 'ecc11-judgment',
          prompt: 'Do you live as if you will give account for your actions? How would your choices change if you truly believed you would have to answer to God for what you do now? And what does it mean to rejoice in this moment, even knowing judgment is coming?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Cast thy bread upon the waters: for thou shalt find it after many days...In the morning sow thy seed, and in the evening withhold not thine hand.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 11 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-ecclesiastes-11',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ecclesiastes 11',
      url: 'https://www.sefaria.org/Ecclesiastes.11',
      description: 'Sefaria open-access source text and translations for Ecclesiastes 11.',
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
