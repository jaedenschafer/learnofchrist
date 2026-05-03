import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_51: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 51,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 51 is the prayer of a man who has done the unthinkable. He has taken another man&apos;s wife; he has arranged for her husband to be killed in battle. And then, as his deed lay hidden, God sent a prophet to him. Nathan came with a story about a rich man who took the poor man&apos;s only lamb. David heard the story and his anger burned. "As the Lord liveth, the man that hath done this thing shall surely die." And Nathan said, "Thou art the man." In that moment, David&apos;s comfortable sin became unbearable.',
    'What follows is this psalm—not a prayer of excuses, but a prayer of devastation. David does not ask for mere pardon. He asks to be made new. "Wash me throughly from mine iniquity," he cries. "Purge me with hyssop...and I shall be clean: wash me, and I shall be whiter than snow." He knows that no outward cleansing will suffice. He needs his very heart remade. "Create in me a clean heart, O God; and renew a right spirit within me."',
  ],

  sections: [
    {
      ref: 'Psalm 51:1–9',
      title: 'The Plea for Cleansing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 51,
          lines: [
            plain(1, 'Have mercy upon me, O God, according to thy lovingkindness: according unto the multitude of thy tender mercies blot out my transgressions.'),
            plain(2, 'Wash me throughly from mine iniquity, and cleanse me from my sin.'),
            plain(3, 'For I acknowledge my transgressions: and my sin is ever before me.'),
            plain(4, 'Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mightest be justified when thou speakest, and be clear when thou judgest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps51-confession-plea',
          html:
            'The cry for mercy is urgent. Now watch what unfolds—the broken and contrite heart.',
        },
        {
          kind: 'scripture',
          chapter: 51,
          lines: [
            plain(5, 'Behold, I was shapen in iniquity; and in sin did my mother conceive me.'),
            plain(6, 'Behold, thou desirest truth in the inward parts: and in the hidden part thou shalt make me to know wisdom.'),
            plain(7, 'Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow.'),
            plain(8, 'Make me to hear joy and gladness; that the bones which thou hast broken may rejoice.'),
            plain(9, 'Hide thy face from my sins, and blot out all mine iniquities.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms51-mercy',
          html: 'David begins not with explanation or excuse, but with a plea for mercy. "Have mercy upon me, O God, according to thy lovingkindness." He does not appeal to his own righteousness. He knows he has none. He appeals to God&apos;s character—His mercies, which are without number.',
        },
        {
          kind: 'hebrew',
          id: 'psalms51-kabas',
          title: 'Kabas — "Blot out"',
          script: 'כָּבַס',
          translit: '<strong>Kabas</strong> · to wash thoroughly; to blot out; to erase',
          description: 'The verb kabas means to wash clothes thoroughly, to rub and scrub until clean. Then it comes to mean to blot out, to erase. David&apos;s sin must be scrubbed away, erased utterly from the record.',
        },
        {
          kind: 'commentary',
          id: 'psalms51-acknowledge',
          html: 'David moves from pleading to acknowledgment. "I acknowledge my transgressions: and my sin is ever before me." He does not hide from his deed. He does not minimize it. The weight of it is always present.',
        },
        {
          kind: 'commentary',
          id: 'psalms51-against-thee',
          html: 'And then the deepest recognition: "Against thee, thee only, have I sinned, and done this evil in thy sight." Every sin is, at its root, a sin against God. A man sins against his neighbor, yes. But before he does that, he has sinned against the holiness of God.',
        },
        {
          kind: 'commentary',
          id: 'psalms51-broken-bones',
          html: 'David asks God to "make me to hear joy and gladness; that the bones which thou hast broken may rejoice." God&apos;s judgment has broken him. And yet David asks not that the breaking be undone, but that the broken bones may hear joy. Repentance means being so renewed that even the broken places can know gladness.',
        },
        {
          kind: 'christ',
          id: 'psalms51-christ-clean-heart',
          title: 'Christ Connection — The New Heart',
          html: 'David cries, "Create in me a clean heart, O God." No act of will, no penance, no ritual can create a clean heart. Only God can. Christ alone can transform a broken, sin-stained heart into a vessel fit for God&apos;s dwelling.',
        },
        {
          kind: 'carry',
          html: 'The modern world often treats sin as a psychological problem or a social problem. David understood something deeper: sin is a stain on the soul, a brokenness in the core of who we are. We cannot fix ourselves. We need God to create something new in us.',
        },
        {
          kind: 'reflection',
          id: 'psalms51-clean-heart',
          prompt: 'What sin weighs most heavily on your conscience? Can you ask God, as David did, to create in you a clean heart?',
        },
      ],
    },

    {
      ref: 'Psalm 51:10–17',
      title: 'A New Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 51,
          lines: [
            plain(10, 'Create in me a clean heart, O God; and renew a right spirit within me.'),
            plain(11, 'Cast me not away from thy presence; and take not thy holy spirit from me.'),
            plain(12, 'Restore unto me the joy of thy salvation; and uphold me with thy free spirit.'),
            plain(13, 'Then will I teach transgressors thy ways; and sinners shall be converted unto thee.'),
            plain(15, 'O Lord, open thou my lips; and my mouth shall shew forth thy praise.'),
            plain(16, 'For thou delightest not in sacrifice; neither wilt thou be pleased with burnt offering.'),
            plain(17, 'The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms51-renew-spirit',
          html: 'The appeal deepens: "Create in me a clean heart, O God; and renew a right spirit within me." David has asked for cleansing. Now he asks for renewal. This is not something David can achieve through his own effort. It must be given. It must be created.',
        },
        {
          kind: 'commentary',
          id: 'psalms51-cast-not-away',
          html: '"Cast me not away from thy presence; and take not thy holy spirit from me." David knows the danger. Saul, too, had sinned grievously. And the Spirit of the Lord departed from Saul. The fear that grips David is the fear not of punishment, but of abandonment.',
        },
        {
          kind: 'commentary',
          id: 'psalms51-restore-joy',
          html: '"Restore unto me the joy of thy salvation; and uphold me with thy free spirit." David asks not for salvation itself—that work is already done. He asks for the joy of it to be restored to him. Sin has stolen his joy. He asks God to help him see that he is saved, that he is loved.',
        },
        {
          kind: 'commentary',
          id: 'psalms51-teach-sinners',
          html: '"Then will I teach transgressors thy ways; and sinners shall be converted unto thee." David does not ask to be hidden away. He asks to be restored to usefulness. Out of his own brokenness, he will teach others. His sin and repentance will become a testimony to God&apos;s grace.',
        },
        {
          kind: 'commentary',
          id: 'psalms51-broken-heart',
          html: 'The psalm concludes with a radical claim: "The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise." God does not delight in the externals of religion. He delights in genuine sorrow for sin and genuine turning back to Him.',
        },
        {
          kind: 'carry',
          html: 'Repentance is not information—telling God what you already know He knows. Repentance is transformation. It is asking God to remake you, to give you a new heart, to renew your spirit.',
        },
        {
          kind: 'reflection',
          id: 'psalms51-teach-transgressors',
          prompt: 'Have you been restored after genuine repentance? How has your own brokenness become a way to help others find their way back to God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Create in me a clean heart, O God; and renew a right spirit within me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 51 · Study Guide',
  },

  hasHebrew: true,
};
