import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 18 — Sexual Ethics
 *
 * A detailed list of forbidden relationships and practices, framed by the contrast
 * between Egypt, Canaan, and the ways of the Lord. The chapter lays out God&apos;s
 * design for sex and marriage, calls it &quot;statutes&quot; and &quot;ordinances,&quot;
 * and warns that the land itself &quot;vomits out&quot; those who violate them.
 *
 * This chapter is contested in modern readings. The study guide holds both the
 * text&apos;s own claims and the reader&apos;s conscience in view — never sidestepping
 * what the text says, never lecturing against modern sensibilities, letting the
 * frame (Egypt-Canaan vs. the LORD) carry its own weight.
 */
export const LEVITICUS_18: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 18,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 16 },
  topicTags: ['holiness', 'sacrifice', 'priest', 'worship'],
  opener: {
    topical: true,
    caption: 'Leviticus 18',
  },
  intros: [
    'Leviticus 18 is instruction on sexual relations — which ones are forbidden, why they matter, and what it costs a people when they are ignored. The chapter opens with a frame: do not live by Egyptian patterns, do not live by Canaanite patterns; live instead by the statutes and ordinances of the LORD. Then comes a long list of prohibited relationships, most of them incestuous, some extending to animals and to the practice of child sacrifice to Molech.',
    'The chapter is unsettling because it is so specific. But that specificity is the point. Sex is not a private matter of pure feeling; it has a shape, designed by God, with boundaries meant to protect what is most vulnerable — marriage, children, the integrity of family. The list is long because the stakes are high. And the warning at the end is stark: the land itself will eject a people who make these practices their way of life.',
    'For the reader on this side of the cross, Jesus does not relax these boundaries in Matthew 5:27–32; He goes deeper — even the look of lust is a failure of God&apos;s design. But He also opens a door that Leviticus 18 does not: 1 Corinthians 6:9–11 names people who broke these boundaries, and then says, &quot;and such WERE some of you&hellip; but ye are washed, but ye are sanctified, but ye are justified in the name of the Lord Jesus.&quot; The cross does not erase the design. It forgives every failure of it.',
  ],

  bottomShare: {
    quote:
      'Ye shall therefore keep my statutes and my judgments: which if a man do, he shall live in them. I am the Lord.',
    snippet: 'Leviticus 18:5 · A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 18 · Study Guide',
  },

  sections: [
    /* ─── Leviticus 18:1–5 — The Frame ────────────────────────────────── */
    {
      ref: 'Leviticus 18:1–5',
      title: 'The Frame: Egypt, Canaan, and the LORD',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and say unto them, '),
                hp('I am the Lord your God', 'c-identity'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('After the doings of the land of Egypt, wherein ye dwelt, shall ye not do: and after the doings of the land of Canaan, whither I bring you, shall ye not do: '),
                hg('neither shall ye walk in their ordinances', 'c-contrast'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Ye shall do '),
                hg('my judgments', 'c-God-way'),
                t(', and keep '),
                hy('my statutes', 'hebrew-chukim'),
                t(': I am the Lord.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Ye shall therefore keep my statutes and my judgments: '),
                hp('which if a man do, he shall live in them', 'christ-life'),
                t('. I am the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-identity',
          html:
            'The chapter opens not with rules but with relationship[res:sefaria-leviticus-18]. &ldquo;I am the Lord your God.&rdquo; Every boundary in what follows flows from that identity. The Lord does not command from a distance — He commands as the one who has claimed Israel as His own.',
        },
        {
          kind: 'commentary',
          id: 'c-contrast',
          html:
            'The frame is stark: there is a way Egypt walked, there is a way Canaan walks, and there is a way the Lord walks. They are not the same. The land you left and the land you are entering both have patterns of living that are not God&apos;s patterns. You are being called out of one and being warned away from the other. Neither is your home.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chukim',
          title: 'Chukim — &ldquo;statutes&rdquo;',
          script: 'חֻקִּים',
          translit: '<strong>chukim</strong> · decrees; laws that stand because God decreed them',
          description:
            'The Hebrew distinguishes between &ldquo;judgments&rdquo; (<em>mishpatim</em>) — laws you can reason about — and &ldquo;statutes&rdquo; (<em>chukim</em>) — laws that stand on their face because God has spoken them. Both kinds are present here.',
        },
        {
          kind: 'commentary',
          id: 'c-God-way',
          html:
            'The logic of the chapter is simple: keep My statutes and you live. This is not a threat; it is a promise. God&apos;s design for sex and family is not arbitrary restriction. It is the shape of life itself.',
        },
        {
          kind: 'christ',
          id: 'christ-life',
          title: 'Christ Connection — Life in the Design',
          html:
            'Jesus echoes this promise: &ldquo;I am come that they might have life, and that they might have it more abundantly&rdquo; (John 10:10). The design God set in Leviticus 18 — marriage between a man and a woman, fidelity, protection of the vulnerable — is not a cage. It is the shape of the abundant life He offers. And when we fail that design, which we all do, Christ stands in the gap: &ldquo;I have not come to call the righteous, but sinners to repentance&rdquo; (Luke 5:32).',
        },
        {
          kind: 'carry',
          html:
            'The boundaries you are living inside — whether sexual or otherwise — are not God&apos;s way of keeping you small. They are His way of keeping you alive. This is worth asking honestly: In one area of your sexuality or relationships, what does God&apos;s design actually ask of you? Not what you&apos;ve always done, not what feels natural, but what He asks. And then: are you willing?',
        },
        {
          kind: 'reflection',
          id: 'frame',
          prompt:
            'What is one way the culture around you — Egypt or Canaan — calls you toward a pattern of living that contradicts God&apos;s design for sex? How do you usually respond?',
        },
      ],
    },

    /* ─── Leviticus 18:6–13 — Incest: Near Relations ───────────────────── */
    {
      ref: 'Leviticus 18:6–13',
      title: 'Forbidden Relations: The Household',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 6,
              spans: [
                t('None of you shall approach to any that is near of kin to him, to uncover their nakedness: '),
                hg('I am the Lord', 'c-kinship'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('The nakedness of thy father, and the nakedness of thy mother, shalt thou not uncover: she is thy mother; thou shalt not uncover her nakedness.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('The nakedness of thy father&apos;s wife shalt thou not uncover: it is thy father&apos;s nakedness.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('The nakedness of thy sister, the daughter of thy father, or daughter of thy mother, whether she be born at home, or born abroad, even their nakedness thou shalt not uncover.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leviticus_18_v6-13',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 10,
              spans: [
                t('The nakedness of thy son&apos;s daughter, or of thy daughter&apos;s daughter, even their nakedness thou shalt not uncover: for theirs is thine own nakedness.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('The nakedness of thy father&apos;s wife&apos;s daughter, begotten of thy father, she is thy sister, thou shalt not uncover her nakedness.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Thou shalt not uncover the nakedness of thy father&apos;s sister: she is thy father&apos;s near kinswoman.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Thou shalt not uncover the nakedness of thy mother&apos;s sister: for she is thy mother&apos;s near kinswoman.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kinship',
          html:
            'The principle is that sex must not cross the boundaries of blood kinship and familial trust. The household is where a child learns whether the world is safe. Sex within family lines — which are lines of dependence and care — breaks that safety at its root. The specificity of the list shows how seriously God takes the protection of the vulnerable.',
        },
        {
          kind: 'carry',
          html:
            'The family is meant to be the one place where you are safe from predation, where trust does not have to be earned and cannot be used as a weapon. If your family was the place where that broke — where someone with power over you used sex as a weapon — what you experienced was not a private mistake. It was a violation of what God calls sacred. Healing from that is not weakness; it is alignment with what He designed family to be.',
        },
        {
          kind: 'reflection',
          id: 'kinship',
          prompt:
            'The family is where we learn whether safety is real. Where, in your own life, has family been a place where boundaries protected you?',
        },
      ],
    },

    /* ─── Leviticus 18:14–18 — Incest: Extended Family and Marriage ────── */
    {
      ref: 'Leviticus 18:14–18',
      title: 'Forbidden Relations: Extended Family and Marriage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 14,
              spans: [
                t('Thou shalt not uncover the nakedness of thy uncle, nor approach unto his wife: she is thine uncle&apos;s wife; thou shalt not uncover her nakedness.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Thou shalt not uncover the nakedness of thy daughter in law: she is thy son&apos;s wife; thou shalt not uncover her nakedness.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Thou shalt not uncover the nakedness of thy brother&apos;s wife: it is thy brother&apos;s nakedness.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Thou shalt not uncover the nakedness of a woman and her daughter, neither shalt thou take her son&apos;s daughter, or her daughter&apos;s daughter, to uncover her nakedness; for they are her near kinswomen: it is wickedness.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Neither shalt thou take a wife to her sister, to vex her, to uncover her nakedness, beside the other in her life time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-family-integrity',
          html:
            'The scope expands: even aunts, daughters-in-law, brothers&apos; wives, and in-laws are protected. The pattern is consistent — sex must not be used to break the trust that kinship carries. Verse 18 is particularly direct: you cannot marry a woman if her sister is alive, because that division of loyalty and kinship is not how God designed marriage to work.',
        },
        {
          kind: 'carry',
          html:
            'Marriage is meant to be a covenant of loyalty so whole that to marry someone&apos;s sister, or to treat a daughter-in-law as a conquest, or to betray a brother&apos;s marriage, is to tear the fabric of the family covenant itself. If you are married, your fidelity to your spouse is not a private matter. It is a vow that holds your family together. If you are single and tempted toward someone already bound to another, you are being asked to choose whether the fidelity of *their* covenant matters to you.',
        },
        {
          kind: 'reflection',
          id: 'marriage-integrity',
          prompt:
            'In your own family, where have you seen fidelity to marriage covenants create safety and trust? Where have you seen it broken, and what happened?',
        },
      ],
    },

    /* ─── Leviticus 18:19–23 — Prohibited Acts ────────────────────────── */
    {
      ref: 'Leviticus 18:19–23',
      title: 'Prohibited Acts: Menstruation, Adultery, Child Sacrifice, Same-Sex Relations, Bestiality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 19,
              spans: [
                t('Also thou shalt not approach unto a woman to uncover her nakedness, as long as she is put apart for her uncleanness.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Moreover thou shalt not lie carnally with thy neighbour&apos;s wife, to defile thyself with her.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And thou shalt not let any of thy seed pass through the fire to Molech: '),
                hg('neither shalt thou profane the name of thy God', 'c-molech'),
                t(': I am the Lord.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Thou shalt not lie with mankind, as with womankind: it is '),
                hy('abomination', 'hebrew-toevah'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Neither shalt thou lie with any beast to defile thyself therewith: neither shall any woman stand before a beast to lie down thereto: it is confusion.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-menstrual',
          html:
            'Verse 19 protects a woman during menstruation — the period when she is most vulnerable, most aware of her body in a particular way. The prohibition is not about shame but about protection. Her vulnerability is not to be treated as an opportunity.',
        },
        {
          kind: 'commentary',
          id: 'c-adultery',
          html:
            'Adultery breaks the marriage covenant and damages both the woman, the spouse, and the marriage itself. It is not a private feeling or a private act; it is a betrayal of trust made public in consequence.',
        },
        {
          kind: 'commentary',
          id: 'c-molech',
          html:
            'Molech worship is often understood to have involved child sacrifice, sometimes presented as fertility cult[res:israel-museum-molech]. The text links sexual perversion directly to the practice of child sacrifice — both are devaluations of life itself. To devote your child to Molech is to profane the name of God by treating what He made as an object for ambition or religious performance.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-toevah',
          title: 'To&apos;evah — &ldquo;abomination&rdquo;',
          script: 'תּוֹעֵבָה',
          translit: '<strong>to&apos;evah</strong> · something God finds detestable; culturally abhorrent',
          description:
            'The word is used throughout Leviticus for practices that are fundamentally misaligned with God&apos;s design. It does not mean &ldquo;bad habit&rdquo; but rather a violation of the created order itself. The same word is used for unclean animals, for divination, for theft. It names something that breaks the pattern God set.',
        },
        {
          kind: 'commentary',
          id: 'c-same-sex',
          html:
            'Verse 22 is one of the clearest and most contested verses in all of Scripture on this topic. The text uses the language of abomination and frames it as a violation of God&apos;s design for sex. The design, throughout Leviticus and the wider Bible, is consistently male-female. Same-sex relations are named here as misaligned with that design. This is what the text says. How you hold that alongside compassion for those who experience same-sex attraction, and how you understand Christ&apos;s work of forgiveness and transformation in this area, is a conversation between you and God that this study guide cannot settle for you. But the text must be allowed to say what it says.',
        },
        {
          kind: 'christ',
          id: 'christ-design',
          title: 'Christ Connection — Forgiven Failures of Design',
          html:
            'Paul lists people who have broken sexual boundaries — including same-sex relations — and then says something extraordinary: &ldquo;and such WERE some of you: but ye are washed, but ye are sanctified, but ye are justified in the name of the Lord Jesus, and by the Spirit of our God&rdquo; (1 Cor. 6:9–11)[res:intertextual-matt-5-leviticus-18]. The design stands. The failure is real. But Christ has opened a path through every failure of it. The cross is not a relabeling of the design; it is forgiveness for everyone who has failed it.',
        },
        {
          kind: 'carry',
          html:
            'If you have violated God&apos;s design for sex — any way you have broken the boundaries of marriage, kinship, monogamy, or the creation order itself — the cross is for you. That does not mean the design has changed. It means there is a God who has already paid the price for your failure and is offering you a way back. What you do with that offer — whether you repent and turn, or keep walking the same road — is yours to decide. But you should know: the way back is open.',
        },
        {
          kind: 'reflection',
          id: 'design-failure',
          prompt:
            'In which of these areas — fidelity, kinship, the body&apos;s design — do you most struggle to align with God&apos;s ordinance? What would repentance look like for you, practically?',
        },
      ],
    },

    /* ─── Leviticus 18:24–30 — The Warning: The Land Vomits ──────────── */
    {
      ref: 'Leviticus 18:24–30',
      title: 'The Warning: The Land Itself Rejects These Ways',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 24,
              spans: [
                t('Defile not ye yourselves in any of these things: for in all these the nations are defiled which I cast out before you:'),
              ],
            },
            {
              number: 25,
              spans: [
                t('For the land is defiled: therefore I do visit the iniquity thereof upon it, and '),
                hg('the land itself vomiteth out her inhabitants', 'c-land-vomit'),
                t('.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Ye shall therefore keep my statutes and my judgments, and shall not commit any of these abominations; neither any of your own nation, nor any stranger that sojourneth among you:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leviticus_18_v24-30',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 27,
              spans: [
                t('(For all these abominations have the men of the land done, which were before you, and the land is defiled;)'),
              ],
            },
            {
              number: 28,
              spans: [
                t('That the land spue not you out also, when ye defile it, as it spued out the nations that were before you.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('For whosoever shall commit any of these abominations, even the souls that commit them shall be '),
                hg('cut off from among their people', 'c-community'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Therefore shall ye keep mine ordinance, that ye commit not any one of these abominable customs, which were committed before you, and that ye defile not yourselves therein: '),
                hp('I am the Lord your God', 'c-final-identity'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-land-vomit',
          html:
            'The image is visceral: the land itself cannot stomach these practices. God is not merely punishing from the outside; the order of creation itself rejects what violates His design. This is not metaphorical. A people that systematically practices sexual perversion, child sacrifice, and violation of the family order will lose the capacity to sustain itself. The land will not hold them.',
        },
        {
          kind: 'commentary',
          id: 'c-community',
          html:
            'The consequence is both external and internal: those who practice these things will be cut off from their people. That is not merely banishment; it is the breaking of the very bonds of kinship that God designed to hold a community together. You cannot systematically violate the family order and expect the family to remain intact.',
        },
        {
          kind: 'carry',
          html:
            'If you look at a culture that has normalized practices God names here, you will see the land beginning to spue it out — not in a moment, but over time. Children growing up without stable families. The sexual order becoming confused and chaotic. Trust eroding. Community fracturing. This is not because God is angry in the human way. It is because His design is woven into the world itself. When you violate the design, you release consequences that ripple far beyond your own bedroom.',
        },
        {
          kind: 'reflection',
          id: 'land-warning',
          prompt:
            'Where do you see a culture or community experiencing the consequences of setting aside God&apos;s design for sex and family? What would it look like to call people back?',
        },
        {
          kind: 'christ',
          id: 'c-final-identity',
          title: 'Christ Connection — Authority and Mercy in One',
          html:
            'The chapter ends as it began: &ldquo;I am the Lord your God.&rdquo; The one who sets these boundaries is the one who loves you. Jesus does not relax the boundaries in Matthew 5. He goes deeper. He also goes wider — extending mercy to the woman caught in adultery and saying, &ldquo;Neither do I condemn thee: go, and sin no more&rdquo; (John 8:11). He offers both the truth of the design and the forgiveness of the cross. He is the same God.',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-leviticus-18',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 18 — Sefaria Community Notes',
      url: 'https://www.sefaria.org/Leviticus.18',
      description: 'Annotated text with rabbinic commentary and interpretive traditions on sexual ethics and family relations.',
    },
    {
      id: 'israel-museum-molech',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Molech Worship and Tophet Archaeology',
      url: 'https://www.imj.org.il',
      description: 'Archaeological evidence and artifacts related to Molech worship practices in the ancient Levant.',
    },
    {
      id: 'intertextual-matt-5-leviticus-18',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jesus on Lust and Desire — Matthew 5:27–32',
      url: 'https://intertextual.bible/',
      description: 'Connections between Leviticus 18&apos;s sexual design and Jesus&apos;s deepening of the law in the Sermon on the Mount.',
    },
  ],
};
