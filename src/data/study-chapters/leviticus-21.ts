import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 21 — Holiness Code for Priests
 *
 * The priest in Israel is set apart for special closeness to God's presence.
 * Leviticus 21 builds a boundary around the priesthood: rules about mourning,
 * marriage, physical wholeness. The logic sounds strange to modern ears, but
 * it all points forward. The priest without blemish prefigures the one who
 * would become the unblemished High Priest. Every mark in this chapter is a
 * shadow; Christ is the substance.
 */
export const LEVITICUS_21: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 21,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  topicTags: ['holiness', 'sacrifice', 'priest', 'worship'],
  opener: {
    topical: true,
    caption: 'Leviticus 21',
  },
  intros: [
    'Leviticus 21 is the holiness code for priests. They live under stricter rules than the people around them — rules about mourning the dead, about whom they may marry, about physical wholeness. To modern ears these rules sound harsh, especially the rule about the priest with a physical defect: he cannot approach the altar, even if his brothers with unbroken bodies do. But the chapter is not about cruelty. It is about what the priest&apos;s body pointed to.',
    'In Israel&apos;s system, a priest mediated between a holy God and an unholy people. His body was a sign. An unblemished priest stood in the gap between two worlds. But a priest can only point; he cannot save. The chapter was always waiting for a High Priest who would carry no defect, no stain, no mark — not as a sign of something greater, but as the thing itself. In Jesus, the sign and the reality meet.',
  ],

  bottomShare: {
    label: 'Share Leviticus 21',
    quote:
      'The priest who is holy to his God, who draws near to Him, who bears no blemish and is separated from anything defiling, stands in a pattern that points to Christ — holy, harmless, undefiled, the unblemished High Priest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 21 · Study Guide',
  },

  sections: [
    /* ─── Leviticus 21:1–6 — The Priest&apos;s Mourning ────────────────────── */
    {
      ref: 'Leviticus 21:1–6',
      title: 'Set Apart: Boundaries on Mourning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD said unto Moses, Speak unto the '),
                hy('priests', 'c-kohen'),
                t(' the sons of Aaron, and say unto them, There shall '),
                hg('none of them', 'c-defiling-dead'),
                t(' be defiled for the dead among his people:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('But for his '),
                hg('kin, that is near unto him', 'c-close-kin'),
                t(', that is, for his mother, and for his father, and for his son, and for his daughter, and for his brother,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And for his sister a virgin, that is nigh unto him, which hath had no husband; for her may he be defiled.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But he shall not defile himself, being a chief man among his people, to profane himself:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('They shall not make '),
                hy('baldness upon their head', 'c-mourning-marks'),
                t(', neither shall they shave off the corner of their beard, nor '),
                hy('make a cutting in their flesh', 'c-mourning-marks'),
                t(':'),
              ],
            },
            {
              number: 6,
              spans: [
                t('They shall be '),
                hp('holy unto their God', 'christ-holy-priest'),
                t(', and not profane the name of their God: for the offerings of the LORD made by fire, and the bread of their God, they do offer: therefore they shall be holy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kohen',
          html:
            'The Hebrew word <em>kohen</em> is not the same as a general elder or leader. A priest is set apart to draw near to God&apos;s presence, to tend the altar, to bear the people&apos;s offerings. That closeness sets limits.',
        },
        {
          kind: 'commentary',
          id: 'c-defiling-dead',
          html:
            'A dead body made a person ritually unclean[res:sefaria-leviticus-21]. The ordinary Israelite could touch a parent or sibling and go through purification. A priest could not — not even for the most immediate loss. The one exception: close family. Father, mother, son, daughter, brother, virgin sister. Even kings and high priests observed this boundary. The law assumes the grief is real. It just redirects it.',
        },
        {
          kind: 'commentary',
          id: 'c-close-kin',
          html:
            'A priest could mourn his unmarried sister because she was still part of his household. A married sister belonged to her husband&apos;s family. The lines run according to covenant structure — who you are bound to, who you are responsible for.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kohen',
          title: 'Kohen — &ldquo;priest&rdquo;',
          script: 'כֹּהֵן',
          translit: '<strong>kohen</strong> · one who stands near, who draws near',
          description:
            'The word probably comes from a verb meaning to stand before or attend upon. A priest attends God&apos;s presence. He cannot be carelessly defiled while bearing that office.',
        },
        {
          kind: 'commentary',
          id: 'c-mourning-marks',
          html:
            'Baldness, shaved beard, cuts in the flesh — these were the outward signs of grief across the ancient Mediterranean. The priest cannot wear them. Not because grief is wrong, but because the priest&apos;s body belongs to his office. He cannot use it to signal his own sorrow in public.',
        },
        {
          kind: 'christ',
          id: 'christ-holy-priest',
          title: 'Christ Connection — The Wholly Holy Priest',
          html:
            'Hebrews speaks of Jesus as the High Priest who is &ldquo;holy, harmless, undefiled, separate from sinners&rdquo; (Heb. 7:26). Everything the Levitical priest pointed to — holiness, separation, wholeness — Christ was. And because He was, He didn&apos;t just point to a boundary. He destroyed it. He touched the dead and raised them. He healed the unclean. He became the priest whose very presence made things clean instead of the other way around.',
        },
        {
          kind: 'carry',
          html:
            'Grief is real, and mourning has its season. But if you serve God — in a church, a ministry, a job where your integrity is your offering — there are times when you lead from the unshaken part of yourself. The priestly idea is that some pieces of your inner life do not get paraded in public. That is not hypocrisy. That is faithfulness. The priest knew how to grieve; he just didn&apos;t turn his grief into theater.',
        },
        {
          kind: 'reflection',
          id: 'lev21-mourning',
          prompt:
            'Where do you grieve in private but lead in public? How do you hold both the private sorrow and the public faithfulness?',
        },
      ],
    },

    /* ─── Leviticus 21:7–9 — Marriage Rules ──────────────────────────── */
    {
      ref: 'Leviticus 21:7–9',
      title: 'Set Apart: Marriage Boundaries',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 7,
              spans: [
                t('They shall '),
                hg('not take a wife that is a whore, or profane', 'c-marriage-rules'),
                t('; neither shall they take a woman put away from her husband: for he is holy unto his God.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Thou shalt sanctify him therefore; for he offereth the bread of thy God: he shall be holy unto thee: for I the LORD, which sanctify you, am holy.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the daughter of any priest, if she '),
                hg('profane herself by playing the whore', 'c-priest-daughter'),
                t(', she profaneth her father: '),
                hy('she shall be burnt with fire', 'c-burnt-fire'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-marriage-rules',
          html:
            'A priest cannot marry a woman with a history of sexual unfaithfulness or a woman divorced from a prior husband. The logic is not about shame — it is about representation. The priest and his wife together embody the covenant between God and Israel. A marriage fractured or begun in infidelity cannot serve that symbolic function. This is peculiar to the priest. It does not apply to the people.',
        },
        {
          kind: 'commentary',
          id: 'c-priest-daughter',
          html:
            'A priest&apos;s daughter who becomes sexually unfaithful is burned. She bears her father&apos;s name and status, and her act is treated as a profaning of the priesthood itself. The law is severe — but notice it applies only to the priest&apos;s family, whose bodies are instruments of the office.',
        },
        {
          kind: 'commentary',
          id: 'c-burnt-fire',
          html:
            'Fire was purification. The priest and his family represented a covenant. To break covenant through sexual unfaithfulness was to break the sign itself. The fire erased the violation; it also erased her from among the living. The law is not about punishment for guilt so much as about repair of the broken symbol. In a different covenant — the new covenant in Christ — the broken symbol is not erased, but restored.',
        },
        {
          kind: 'carry',
          html:
            'The priest married carefully because his marriage was not private. It was a sign to the people. If you lead in any capacity — parent, pastor, public figure — your covenant commitments show something to the people you lead. That doesn&apos;t mean you are perfect. It means the care you take with your word, with fidelity, with how you keep what you promise — that matters. Not because your worth depends on it, but because your witness does.',
        },
        {
          kind: 'reflection',
          id: 'lev21-marriage',
          prompt: 'Whose story have you shaped by how faithfully you kept your covenants? Whose have you hurt by breaking them?',
        },
      ],
    },

    /* ─── Leviticus 21:10–15 — The High Priest ───────────────────────── */
    {
      ref: 'Leviticus 21:10–15',
      title: 'The High Priest: Higher Boundaries',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 10,
              spans: [
                t('And he that is the high priest among his brethren, upon whose head the '),
                hy('anointing oil', 'c-anointing'),
                t(' was poured, and that is consecrated to put on the garments, shall not uncover his head, nor rend his clothes;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Neither shall he go in to any dead body, nor '),
                hg('defile himself for his father, or for his mother', 'c-high-priest-mourning'),
                t(';'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Neither shall he go out of the sanctuary, lest he profane the sanctuary of his God; for the crown of the anointing oil of his God is upon him: I am the LORD.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he shall take a '),
                hg('wife in her virginity', 'c-hp-marriage'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('A widow, or a divorced woman, or profane, or an harlot, these shall he not take: but he shall take a virgin of his own people to wife.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Neither shall he profane his seed among his people: for I the LORD do '),
                hp('sanctify him', 'christ-sanctify-hp'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-anointing',
          html:
            'The high priest is anointed with oil — set apart for the very closest access to God. He enters the Holy of Holies once a year. His rules are stricter than any other priest&apos;s.',
        },
        {
          kind: 'commentary',
          id: 'c-high-priest-mourning',
          html:
            'The high priest cannot defile himself for anyone — not even his mother or father. Not because he doesn&apos;t love them, but because his office is absolute. He is the channel through which the whole nation stands before God. If he leaves his post, the whole nation is left unrepresented.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mum',
          title: 'Mum — &ldquo;blemish&rdquo;',
          script: 'מוּם',
          translit: '<strong>mum</strong> · a defect, a flaw, something that breaks wholeness',
          description:
            'The word runs throughout this chapter. Any visible flaw — broken bone, blindness, scar, missing limb — is a <em>mum</em>. It doesn&apos;t make the person less valuable in God&apos;s eyes, but it disqualifies him from the altar. The sign had to be whole to point to the one who would be whole.',
        },
        {
          kind: 'commentary',
          id: 'c-hp-marriage',
          html:
            'The high priest must marry a virgin. Not a second wife, not a divorced woman, not a widow. One man, one woman, their first marriage, her virginity unbroken. It is an extreme rule — and it gives the figure of the high priest a singular, unbroken quality. He is set apart in his very household.',
        },
        {
          kind: 'christ',
          id: 'christ-sanctify-hp',
          title: 'Christ Connection — The Unblemished High Priest',
          html:
            'Every rule in Leviticus 21 describes what the high priest must not be. He must not be defiled. He must not be broken. He must not be stained. Hebrews sees Jesus and says: &ldquo;Such an high priest became us, who is holy, harmless, undefiled, separate from sinners, and made higher than the heavens&rdquo; (Heb. 7:26). Christ is the high priest without blemish. He is the whole sign pointing to nothing beyond Himself.',
        },
        {
          kind: 'carry',
          html:
            'You are not a priest in the Levitical sense. But if you are in Christ, you are a priest in a deeper sense — part of what 1 Peter calls &ldquo;a royal priesthood.&rdquo; You don&apos;t have to be physically perfect to draw near. You don&apos;t have to earn your way in. But the priest&apos;s care about wholeness, about keeping boundaries, about the integrity of the offering — those things still matter. Not to make you acceptable. To show others what drawing near to God actually looks like.',
        },
        {
          kind: 'reflection',
          id: 'lev21-hp',
          prompt:
            'What does it mean to you that Jesus is the perfect High Priest — so you don&apos;t have to be? Where does that free you?',
        },
      ],
    },

    /* ─── Leviticus 21:16–24 — Physical Wholeness ─────────────────────── */
    {
      ref: 'Leviticus 21:16–24',
      title: 'The Priest With a Blemish: What He Cannot Do',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 16,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Speak unto Aaron, saying, Whosoever he be of thy seed in their generations that hath any '),
                hy('blemish', 'c-mum'),
                t(', let him not approach to offer the bread of his God.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For whatsoever man he be that hath a blemish, he shall not approach: a blind man, or a lame, or he that hath a flat nose, or any thing superfluous,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Or a man that is brokenfooted, or brokenhanded,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev21-priest-people',
          html:
            'The restrictions for the common priest finish here. What follows applies differently to Israel&apos;s people.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 20,
              spans: [
                t('Or crookbackt, or a dwarf, or that hath a blemish in his eye, or be scurvy, or scabbed, or hath his stones broken;'),
              ],
            },
            {
              number: 21,
              spans: [
                t('No man that hath a blemish of the seed of Aaron the priest shall come nigh to offer the offerings of the LORD made by fire: he hath a blemish; he shall not come nigh to offer the bread of his God.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('He may eat the '),
                hg('bread of his God', 'c-he-may-eat'),
                t(', both of the most holy, and of the holy:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Only he shall not go in unto the vail, nor come nigh unto the altar, because he hath a blemish; that he profane not my sanctuaries: for I the LORD do sanctify them.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Thus spake Moses unto Aaron, and to his sons, and unto all the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mum',
          html:
            'The blemish list is detailed and painful: blind, lame, flat-nosed, broken-footed, broken-handed, crooked-backed, a dwarf, eye defects, scurvy, scabs, crushed testicles[res:bibleodyssey-priestly-atonement]. The text doesn&apos;t hide the body&apos;s imperfections. It names them. The point is not that the person is worthless. It is that the sign cannot be whole if the body is broken.',
        },
        {
          kind: 'commentary',
          id: 'c-he-may-eat',
          html:
            'This is the mercy in the law[res:intertextual-hebrews-7-leviticus-21]. The blemished priest cannot stand at the altar. But he is still part of the priestly family. He still eats the holy bread. He is not cast out. He is not dishonored. He simply cannot be the sign. The law provides for him while protecting the integrity of the office. Later, Lev. 21:22 will say more: he can eat the holy food, both the most holy and the holy. He is sustained by the covenant he cannot represent.',
        },
        {
          kind: 'carry',
          html:
            'You may have broken things about you — grief you carry, a past you can&apos;t undo, a limitation that won&apos;t heal, a loss that reshaped you. The new covenant doesn&apos;t tell you the brokenness doesn&apos;t matter. It tells you your brokenness doesn&apos;t disqualify you from the offering. You can draw near. You can bring what you have. Jesus is the unblemished priest; you are the one He represents. The barrier is gone. You are fed at the table regardless.',
        },
        {
          kind: 'reflection',
          id: 'lev21-blemish',
          prompt:
            'What blemish — what broken or limited part of you — have you thought disqualified you from drawing near to God? How does it change things that Jesus is whole for both of you?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-leviticus-21',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 21 — Sefaria Community Notes',
      url: 'https://www.sefaria.org/Leviticus.21',
      description: 'Annotated text with rabbinic commentary on priestly purity and holiness standards.',
    },
    {
      id: 'bibleodyssey-priestly-atonement',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'The Priesthood and Atonement in Ancient Israel',
      url: 'https://www.bibleodyssey.org',
      description: 'Overview of priestly functions, mediation, and the symbolism of physical wholeness.',
    },
    {
      id: 'intertextual-hebrews-7-leviticus-21',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Perfect High Priest — Hebrews 7',
      url: 'https://intertextual.bible/',
      description: 'Jesus as the unblemished, eternal High Priest who fulfills the priestly order.',
    },
  ],
};
