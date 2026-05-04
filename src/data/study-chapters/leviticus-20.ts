import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 20 — penalties for the sins forbidden in chapter 18.
 * A hard chapter on holiness and the gravity of sin. Most offenses carry
 * the death penalty. Closes with God&apos;s call to separation: "I am the
 * LORD your God, which have separated you from other people... ye shall be
 * holy unto me."
 */
export const LEVITICUS_20: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 20,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 15 },
  topicTags: ['holiness', 'sacrifice', 'priest', 'worship'],
  opener: {
    topical: true,
    caption: 'Leviticus 20',
  },
  intros: [
    'Leviticus 20 steps into what every Old Testament law carried underneath: the consequences. Chapter 18 names the sins — Molech worship, sexual immorality, mediums consulting the dead. Chapter 20 attaches the penalties. Most carry death. A theocratic Israel living under God&apos;s direct rule operates under a different justice system than the civic nations around it, or than the nations around us now. But the force of the penalties is meant to hammer home a single point: God takes sin seriously. It is not a private mistake. It is not a harmless detour. It is a life-or-death matter.',
    'Leviticus is hard because sin is hard. The chapter doesn&apos;t soften the consequences; it lets them stand. And for us, reading this from the side of the cross, there is a deeper weight underneath: Christ absorbed every penalty these deaths represent. "The wages of sin is death," Paul will later write, "but the gift of God is eternal life through Jesus Christ our Lord." That paradox — the gravity of sin met by the grace of the cross — frames how we read this chapter.',
  ],

  showKjvNote: true,

  sections: [
    /* ─── Leviticus 20:1-8 — Molech and the Call to Holiness ──────────────── */
    {
      ref: 'Leviticus 20:1–8',
      title: 'Molech Worship and Holiness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [t('And the LORD spake unto Moses, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Again, thou shalt say to the children of Israel, Whosoever he be of the children of Israel, or of the strangers that sojourn in Israel, that '),
                hg('giveth any of his seed to Molech', 'c-molech-sin'),
                t('; he shall surely be put to death: the people of the land shall '),
                hy('stone him', 'hebrew-seqel'),
                t(' with stones.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-molech-sin',
          html:
            'Molech worship involved the sacrifice of children — the most severe sin imaginable[res:israel-museum-molech-tophet]. "Giveth any of his seed to Molech" means a parent offered his own child as a burnt offering to a false god. It is placed first in this chapter because it is the deepest violation: idolatry that consumes the most innocent, the most dependent, the most beloved.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 3,
              spans: [
                t('And '),
                hy('I will set my face', 'c-face-set'),
                t(' against that man, and will cut him off from among his people; because he hath given of his seed to Molech, to defile my sanctuary, and to profane my holy name.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-face-set',
          html:
            'The phrase "I will set my face against" occurs seven times in this chapter — God&apos;s deliberate opposition, not passive law but active judgment. God doesn&apos;t stand neutral to these sins. He turns His face toward the sinner as an adversary.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-seqel',
          title: 'Seqel — &ldquo;stone&rdquo; (as a verb)',
          script: 'סָקַל',
          translit: '<strong>seqel</strong> · to stone to death',
          description:
            'Public stoning was Israel&apos;s method of capital justice for sins against the covenant. The whole community participated, making justice visible and collective.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 4,
              spans: [
                t('And if the people of the land do any ways hide their eyes from the man, when he giveth of his seed to Molech, and kill him not:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Then '),
                hy('I will set my face against him', 'c-face-community'),
                t(', and against his family, and will cut him off, and all that go a whoring after him, to commit whoredom with Molech, from among their people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-face-community',
          html:
            'If a community refuses to execute judgment, God sets His face against the idolater <em>and the community</em> that protects him. Holiness is communal. You cannot stay holy by turning a blind eye to your neighbor&apos;s idolatry.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 6,
              spans: [
                t('And the soul that turneth after such as have familiar spirits and after wizards, to go a whoring after them, '),
                hy('I will even set my face against that soul', 'c-wizards-sin'),
                t(', and will cut him off from among his people.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Sanctify yourselves therefore, and be ye holy: for I am the LORD your God.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And ye shall keep my statutes, and do them: I am the LORD which sanctify you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wizards-sin',
          html:
            'Consulting mediums and spiritualists — seeking supernatural knowledge outside God&apos;s covenant — is grouped with Molech worship as idolatry. Both bypass the God who speaks to His people and turn to other sources of power and knowledge.',
        },
        {
          kind: 'carry',
          html:
            'The call to "sanctify yourselves" comes not after the penalties are done, but at their center. Holiness is not the result of fear alone; it is a calling to separate yourself from the patterns of the world and align with God&apos;s pattern. What parts of your life — what you watch, who you listen to, where you look for answers — still turn you toward the world instead of toward Him? Holiness begins with a choice.',
        },
        {
          kind: 'reflection',
          id: 'molech-section',
          prompt: 'What does Molech represent in your own life — a place where you sacrifice something innocent to something false, whether your time, your children&apos;s attention, or your own potential?',
        },
      ],
    },

    /* ─── Leviticus 20:9-16 — Sexual Sin and Family Covenant ───────────────── */
    {
      ref: 'Leviticus 20:9–16',
      title: 'Sexual Sin: Breaking the Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 9,
              spans: [
                t('For every one that curseth his father or his mother shall be surely put to death: he hath cursed his father or his mother; '),
                hg('his blood shall be upon him', 'c-blood-upon'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blood-upon',
          html:
            'Cursing a parent is listed here among the sexual sins of chapter 18, marking it as a fundamental break in the family covenant. The child&apos;s curse against the parent mirrors the sexual sins that come next — both violate the structure God gave the family.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 10,
              spans: [
                t('And the man that committeth adultery with another man&apos;s wife, even he that committeth adultery with his neighbour&apos;s wife, the adulterer and the adulteress shall surely be put to death.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 11,
              spans: [
                t('And the man that lieth with his father&apos;s wife hath uncovered his father&apos;s nakedness: both of them shall surely be put to death; their blood shall be upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 12,
              spans: [
                t('And if a man lie with his daughter in law, both of them shall surely be put to death: they have wrought confusion; their blood shall be upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-adultery',
          title: 'Christ Connection — Grace for the Condemned',
          html:
            'John 8 shows a woman caught in adultery, dragged before Jesus by those ready to stone her. The law of Leviticus demanded her death. "Let him that is without sin among you cast a stone," Jesus says. One by one, her accusers leave. "Neither do I condemn thee," Jesus says — not "your sin doesn&apos;t matter," but "I will bear this for you." He goes to the cross carrying the very penalty Leviticus prescribed. Rom. 6:23 frames it: "The wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord."',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 13,
              spans: [
                t('If a man also lie with mankind, as he lieth with a woman, both of them have committed an abomination: they shall surely be put to death; their blood shall be upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 14,
              spans: [
                t('And if a man take a wife and her mother, it is wickedness: they shall be burnt with fire, both he and they; that there be no wickedness among you.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 15,
              spans: [
                t('And if a man lie with a beast, he shall surely be put to death: and ye shall slay the beast.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And if a woman approach unto any beast, and lie down thereto, thou shalt kill the woman, and the beast: they shall surely be put to death; their blood shall be upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sexual-structure',
          html:
            'Leviticus structures sexuality according to God&apos;s creation: the one-flesh covenant of marriage, rooted in family, within clear boundaries. Every violation listed — adultery, incest, homosexual behavior, bestiality — crosses those boundaries. The penalty is not arbitrary cruelty; it is seriousness. God treats the structure He created as non-negotiable because what happens inside that structure — covenant, trust, fruitfulness — cannot happen outside it.',
        },
        {
          kind: 'carry',
          html:
            'This chapter speaks from a world where sexuality was offered to idols and torn from any covenant. We live in a world where sexuality is often severed from meaning, vow, or fidelity altogether — treated as appetite rather than covenant. The chapter&apos;s harshness isn&apos;t arbitrary; it&apos;s a rebuke to a culture that has made the same mistakes. If you&apos;ve crossed these lines, Christ&apos;s answer to the woman caught in adultery stands: neither condemnation nor dismissal, but "go, and sin no more." His death paid what Leviticus demanded. Your refusal to return to these patterns is your way forward.',
        },
        {
          kind: 'reflection',
          id: 'sexual-section',
          prompt: 'Where has the world&apos;s treatment of sexuality — as appetite rather than covenant — crept into your own expectations or choices?',
        },
      ],
    },

    /* ─── Leviticus 20:17-21 — More Boundary Lines ────────────────────────── */
    {
      ref: 'Leviticus 20:17–21',
      title: 'The Boundaries Stand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 17,
              spans: [
                t('And if a man shall take his sister, his father&apos;s daughter, or his mother&apos;s daughter, and see her nakedness, and she see his nakedness; it is a wicked thing; and they shall be cut off in the sight of their people: he hath uncovered his sister&apos;s nakedness; he shall bear his iniquity.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 18,
              spans: [
                t('And if a man shall lie with a woman having her sickness, and shall uncover her nakedness; he hath discovered her fountain, and she hath uncovered the fountain of her blood: and both of them shall be cut off from among their people.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 19,
              spans: [
                t('And thou shalt not uncover the nakedness of thy mother&apos;s sister, nor of thy father&apos;s sister: for he uncovereth his near kin: they shall bear their iniquity.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 20,
              spans: [
                t('And if a man shall lie with his uncle&apos;s wife, he hath uncovered his uncle&apos;s nakedness: they shall bear their sin; they shall die childless.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 21,
              spans: [
                t('And if a man shall take his brother&apos;s wife, it is an unclean thing: he hath uncovered his brother&apos;s nakedness; they shall be childless.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-boundaries',
          html:
            'Family boundaries are not arbitrary restrictions. They protect what family is meant to be: a place where you are safe because the relationships are defined, where authority is clear, where you can grow from child to adult to elder without the lines being crossed. Every sexual violation inside the family (incest, parental abuse, violation of a married sibling) destroys that safety. The word "unclean" here means not just wrong but <em>unmakes</em> the family structure itself.',
        },
        {
          kind: 'carry',
          html:
            'If a family boundary has been crossed in your own story — if you were violated, if you participated in violation — the chapter doesn&apos;t address the broken. But Christ does. His call is always: repent, and follow. You cannot undo what happened, but you can choose not to continue the pattern, and more, to bring healing to the wounded places. If you carry the shame of having crossed a line, His cross is meant for exactly that. If you carry the trauma of a boundary being violated, His healing is meant for you too.',
        },
        {
          kind: 'reflection',
          id: 'boundaries-section',
          prompt: 'What family boundaries do you most need to protect right now — whether lines you must hold or lines you must stop crossing?',
        },
      ],
    },

    /* ─── Leviticus 20:22-26 — Separation and Holiness ────────────────────── */
    {
      ref: 'Leviticus 20:22–26',
      title: 'Separation: The Heart of Holiness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 22,
              spans: [
                t('Ye shall therefore keep all my statutes, and all my judgments, and do them: that '),
                hg('the land', 'c-land-whither'),
                t(' whither I bring you to dwell therein spue you not out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-land-whither',
          html:
            'The land will "spue out" — vomit out — those who violate God&apos;s covenant. This is not metaphor. When you read the histories of Israel, you watch the land do exactly this. Unfaithfulness leads to exile, to dispersion, to loss of home. Holiness is not a private virtue; it is what holds a people in their land, what keeps them from being cast out.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 23,
              spans: [
                t('And ye shall not walk in the manners of the nation which I cast out before you: for they committed all these things, and therefore I abhorred them.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 24,
              spans: [
                t('But I have said unto you, Ye shall inherit their land, and I will give it unto you to possess it, a land that floweth with milk and honey: '),
                hp('I am the LORD your God, which have separated you from other people', 'christ-separation'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 25,
              spans: [
                t('Ye shall therefore put difference between clean beasts and unclean, and between unclean fowls and clean: and ye shall not make your souls abominable by beast, or by fowl, or by any manner of living thing that creepeth on the ground, which I have separated from you as unclean.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 26,
              spans: [
                t('And ye shall be holy unto me: for I the LORD am holy, and have severed you from other people, that ye should be mine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-severed-for-me',
          html:
            'The chapter ends where Leviticus wants you: at the heart of holiness[res:sefaria-leviticus-20]. <em>Kadosh</em> — holy — means "set apart." Israel is set apart not to be special, but to be <em>His.</em> The distinctions God calls them to keep — clean from unclean, obedience from disobedience, covenant from idolatry — all exist so that Israel can be holy (set apart) for the Lord. Holiness is not about superiority; it is about belonging to Him alone.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kadosh-lev20',
          title: 'Kadosh — &ldquo;holy&rdquo;',
          script: 'קָדוֹשׁ',
          translit: '<strong>kadosh</strong> · separated, consecrated, set apart',
          description:
            'When God says "ye shall be holy unto me," He is saying: separate yourselves, draw a line, because you belong to me. Holiness is inseparable from election — not chosen because you deserve it, but chosen to be His.',
        },
        {
          kind: 'christ',
          id: 'christ-separation',
          title: 'Christ Connection — Separated for God',
          html:
            'Jesus prays for His followers: "As thou hast sent me into the world, even so have I also sent them into the world… Sanctify them through thy truth: thy word is truth" (John 17:18–19). We are separated not from the world by physical exile, but by allegiance. "Be ye not unequally yoked with unbelievers" (2 Cor. 6:14) is not hide-in-the-church language; it is about the deepest commitments and covenants — where your loyalty finally rests. We belong to Him, and that belonging changes everything about how we move through a world that doesn&apos;t belong to Him.',
        },
        {
          kind: 'carry',
          html:
            'You are separated. Not from people, but from the patterns they live by if those patterns contradict Him. The culture around you is constantly drawing lines — this is acceptable, that is acceptable, these people are in, those people are out. You draw a different line. You separate from idolatry, from sexual chaos, from the lies that money or status or approval is your god. And that line doesn&apos;t make you proud; it makes you His. "Ye shall be holy unto me" is an invitation to belong to Him completely, to be set apart as someone who has said <em>yes</em> to Him alone.',
        },
        {
          kind: 'divider' },
        {
          kind: 'reflection',
          id: 'separation-section',
          prompt: 'Where does God want you to draw a line of separation — from a pattern, a relationship, or a source of influence? What would it cost to draw it?',
        },
      ],
    },

    /* ─── Leviticus 20:27 — Mediums and Spiritists ───────────────────────── */
    {
      ref: 'Leviticus 20:27',
      title: 'The Spiritual Boundary',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 27,
              spans: [
                t('A man also or woman that hath a familiar spirit, or that is a wizard, shall surely be put to death: they shall stone them with stones: '),
                hy('their blood', 'c-blood-final'),
                t(' shall be upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blood-final',
          html:
            'The final verse echoes the first: Molech worship and medium-consulting both bracket the chapter because both are the same fundamental sin — turning to spiritual powers other than God[res:intertextual-eph-6-leviticus-20]. A medium claims access to the dead, to hidden knowledge, to power outside God&apos;s covenant. In a culture drowning in spiritism and syncretism, Leviticus draws the hardest line: there is God, and everything else is idolatry.',
        },
        {
          kind: 'commentary',
          id: 'c-spiritual-war',
          html:
            'Paul writes: "We wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places" (Eph. 6:12). The spiritual realm is real. The choice to consult mediums, to embrace spiritism, to seek power from anything other than God is to take sides in a war you didn&apos;t start. Leviticus&apos;s severity here is not cruelty; it is a warning: some lines, once crossed, commit you to an allegiance that will cost you everything.',
        },
        {
          kind: 'carry',
          html:
            'In a world full of new spiritualties, tarot, manifestation, "good vibes," and whispers of secret knowledge, Leviticus&apos;s answer hasn&apos;t changed. God is sufficient. He speaks. He leads. He provides wisdom. Everything outside Him wearing a spiritual mask is a trap. If you&apos;ve consulted the spirits, if you&apos;ve sought power or knowledge outside God&apos;s word — repent and return. He is not locked in anger at you; He is waiting to become, again, your only source of guidance and strength.',
        },
        {
          kind: 'reflection',
          id: 'spirits-section',
          prompt: 'Where are you looking for answers, for peace, for guidance — outside of Him? What would it look like to turn completely back?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Ye shall therefore be holy: for I am the LORD your God, which have separated you from other people, that ye should be mine.',
    snippet: 'Leviticus 20:26 — A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 20 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-20',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 20 — Sefaria Community Notes',
      url: 'https://www.sefaria.org/Leviticus.20',
      description: 'Annotated text with rabbinic commentary on sexual laws, Molech worship, and separation.',
    },
    {
      id: 'israel-museum-molech-tophet',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Molech Worship and Tophet Archaeology',
      url: 'https://www.imj.org.il',
      description: 'Archaeological evidence for child sacrifice practices and Molech worship sites in ancient Canaan.',
    },
    {
      id: 'intertextual-eph-6-leviticus-20',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Spiritual Warfare and the Demonic — Ephesians 6:12',
      url: 'https://intertextalbible.com',
      description: 'Paul&apos;s teaching on spiritual powers and the connection to prohibitions against spiritism.',
    },
  ],

  hasHebrew: true,
};
