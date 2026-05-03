import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 22 — neighbor responsibility, creation categories, sexual purity
 * and covenant order, with careful protections woven through the laws.
 */
export const DEUTERONOMY_22: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 22,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 15 },
  intros: [
    'Deuteronomy 22 is a chapter about what holiness looks like in the details of ordinary life. It begins with lost property and wandering animals, moves to the boundaries of creation — how God has separated things and made them distinct — and then settles into the hardest part: the laws that govern sexual desire and covenant, laws that treat the human body as something God cares about.',
    'The opening words set the tone: "Thou mayest not hide thyself." Responsibility is not optional; it is woven into what it means to live as God&apos;s people. But notice too how carefully these laws protect the vulnerable — the woman who could not cry out, the person whose reputation has been falsely attacked. God&apos;s law is detailed, and the details matter.',
  ],

  sections: [
    /* ─── Deuteronomy 22:1–4 — Neighbor Responsibility ─────────────────── */
    {
      ref: 'Deuteronomy 22:1–4',
      title: 'The Lost and the Wandering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('Thou shalt '),
                t('not see thy brother&apos;s ox or his sheep'),
                t(' go astray, and '),
                hp('hide thyself from them', 'deut22-witness'),
                t(': thou shalt in any case bring them again unto thy brother.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And if thy brother be '),
                t('not nigh unto thee'),
                t(', or if thou know him not, then thou shalt bring it unto thine own house, and it shall be with thee until thy brother seek after it, and thou shalt restore it to him again.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('In like manner shalt thou do '),
                t('with his ass'),
                t('; and so shalt thou do with his raiment; and with all lost things of thy brother&apos;s, which he hath lost, and thou hast found, thou shalt do likewise: thou mayest not hide thyself.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Thou shalt not see thy brother&apos;s ass or his ox fall in the way, and hide thyself from them: thou shalt surely help him to lift them up again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-witness',
          html:
            'The Hebrew phrase is stark: "you may not hide yourself." The law assumes you will be a <em>witness</em> to your neighbor&apos;s need and forbids you the luxury of looking away. This is not sentiment; it is command. The parable of the Good Samaritan — the priest and the Levite who pass by on the other side — draws its moral weight entirely from this passage. The Samaritan alone obeys what Deuteronomy demands: he sees a need, he stops, he acts.',
        },
        {
          kind: 'carry',
          html:
            'You will pass something lost or broken in someone else&apos;s life this week. A rumor that is circulating, a relationship that has collapsed, a person whose name comes up and you could speak up for them. The ancient law is unflinching: "thou mayest not hide thyself." What is one small thing you see that belongs back to someone, and what will it cost you to bring it?',
        },
        {
          kind: 'reflection',
          id: 'deut22-neighbor',
          prompt:
            'When have you seen someone else&apos;s loss or trouble and looked away? What would change if you believed God was asking you not to hide from that?',
        },
      ],
    },

    /* ─── Deuteronomy 22:5–11 — Categories and Creation Distinction ────── */
    {
      ref: 'Deuteronomy 22:5–11',
      title: 'The Boundaries God Made',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 5,
              spans: [
                t('The woman shall not wear that which pertaineth unto a man, neither shall a man put on a woman&apos;s garment: for all that do so are '),
                hy('abomination unto the Lord', 'hebrew-toevah'),
                t(' thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-toevah',
          title: 'Toevah — "abomination"',
          script: 'תּוֹעֵבָה',
          translit: '<strong>toevah</strong> · something detestable; a violation of order',
          description:
            'The word does not mean merely "disliked." It refers to what violates the created order — like mixing kinds of animals or seeds. God has made categories good; blurring them is a kind of chaos.',
        },
        {
          kind: 'commentary',
          id: 'deut22-categories',
          html:
            'This law sits in a chapter full of laws about keeping categories separate — different seeds in a vineyard, different animals plowing together, wool and linen in the same garment. The theology underneath is not shame or fear. It is that God made distinctions at creation, called them good, and they belong. The law preserves what the first chapter of the Bible established.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 6,
              spans: [
                t('If a bird&apos;s nest chance to be before thee in the way in any tree, or on the ground, whether they be young ones, or eggs, and the dam sitting upon the young, or upon the eggs, thou shalt not take the dam '),
                hp('with the young', 'deut22-mother'),
                t(':'),
              ],
            },
            {
              number: 7,
              spans: [
                t('But thou shalt in any case let the dam go, and take the young to thee; that '),
                t('it may be well with thee'),
                t(', and that thou mayest prolong thy days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-mother',
          html:
            'The law shows mercy to the mother bird. You may take the young for food — provision is allowed — but you must let the mother go. The promise attached is extraordinary: obedience to this small mercy is linked to days being prolonged. The same language appears in the Fifth Commandment about honoring father and mother. Both laws protect the source of life.',
        },
        {
          kind: 'christ',
          id: 'deut22-tassel',
          title: 'Christ Connection — The Touched Tassel',
          html:
            'The woman with an issue of blood for twelve years "came behind him, and touched the border of his garment: and immediately her issue of blood stanched" (Luke 8:44). The word Matthew uses is <em>tsitsit</em> — the same tassel God commanded in Deuteronomy 22:12. Every Jew wore them as a reminder of the law. She reached for that law, for obedience, for holiness made visible — and touched healing instead. Christ does not cancel the law; He embodies it.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 8,
              spans: [
                t('When thou buildest a new house, then thou shalt make a '),
                t('battlement'),
                t(' for thy roof, that thou bring not blood upon thine house, if any man fall from thence.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-battlement',
          html:
            'A battlement is a fence, a railing — a practical thing. God cares that a roof is safe, that no one falls from it. Holiness is not abstract. It touches the details of how you build, what you protect, whose safety matters. The verb is striking: "bring not blood upon your house." If you knew the danger and did nothing, the blood is <em>your</em> responsibility.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 9,
              spans: [
                t('Thou shalt not sow thy vineyard with divers seeds: lest the fruit of thy seed which thou hast sown, and the fruit of thy vineyard, be defiled.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Thou shalt not plow with an ox and an ass together.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Thou shalt not wear a garment of divers sorts, as of woollen and linen together.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-mingled',
          html:
            'The same word appears in each: <em>kilaim</em>, mixtures, mingled things. Seeds, animals, fabrics — keep them separate. This is not hygiene or efficiency; it is a theological statement. God made kinds. The law protects what creation ordered. In a world that loves to blur all boundaries, to say "this is not that" is a radical act of obedience.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 12,
              spans: [
                t('Thou shalt make thee '),
                hy('fringes', 'hebrew-tsitsit'),
                t(' upon the four quarters of thy vesture, wherewith thou coverest thyself.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsitsit',
          title: 'Tsitsit — "fringes"',
          script: 'צִיצִית',
          translit: '<strong>tsitsit</strong> · tassel or fringe; a visible sign',
          description:
            'The tsitsit were reminders on the edge of every garment, visible to the eye. They were meant to be noticed — to catch the eye and turn the mind back to the law. Jesus wore them. So did every faithful Jew. A law bound into the fabric of life itself.',
        },
        {
          kind: 'carry',
          html:
            'You are marked by the categories you choose. How you speak about men and women. What you celebrate and what you mourn. The boundaries you keep and the ones you blur. God&apos;s law asks for clarity, not cruelty. That boundary in your life that feels like restraint? It may be a tassel — a visible reminder that you belong to something larger than yourself.',
        },
        {
          kind: 'reflection',
          id: 'deut22-boundaries',
          prompt:
            'What boundary has God made clear in creation that your culture is telling you to erase? What would it cost to honor it?',
        },
      ],
    },

    /* ─── Deuteronomy 22:13–21 — Slander Against the Bride ────────────── */
    {
      ref: 'Deuteronomy 22:13–21',
      title: 'False Accusation and the Bride&apos;s Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 13,
              spans: [
                t('If any man take a wife, and go in unto her, and hate her,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And give occasions of speech against her, and bring up an evil name upon her, saying, I took this woman, and when I came to her, I found her not a maid:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Then shall the father and the mother of the damsel take and bring forth the tokens of her virginity unto the elders of the city in the gate:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the damsel&apos;s father shall say unto the elders, I gave my daughter unto this man to wife, and he hateth her;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-marriage-protections',
          html:
            'The case-laws move from the husband&apos;s accusation to the woman&apos;s defense. The text refuses to assume the man speaks the truth simply because he speaks first.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 17,
              spans: [
                t('And, lo, he hath given occasions of speech against her, saying, I found her not a maid; and yet these are the tokens of my daughter&apos;s virginity. And they shall spread the cloth before the elders of the city.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the elders of that city shall take that man and chastise him;'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they shall amerce him in an hundred shekels of silver, and give them unto the father of the damsel, because he hath brought up an evil name upon a virgin of Israel: and she shall be his wife; he may not put her away all his days.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But if this thing be true, and the tokens of virginity be not found for the damsel:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Then they shall bring out the damsel to the door of her father&apos;s house, and the men of her city shall stone her with stones that she die: because she hath wrought folly in Israel, to play the whore in her father&apos;s house: so shalt thou put away evil from among you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-slander',
          html:
            'This law is shocking in its severity — against the man who slanders his bride. He hated her, so he damages her reputation to divorce her. The law forbids it. If his accusation is false, he pays a fine and is bound to her forever. His slander is treated as a form of violence — an attack on her name, her worth, her future. God takes the bride&apos;s reputation as seriously as He takes her safety. The law does not allow a man to lie his way out of a covenant.',
        },
        {
          kind: 'carry',
          html:
            'A reputation is not a small thing. In your church, your workplace, your family — you know whose name is being questioned, whose character is being whispered about. The law of Deuteronomy 22 is unsparing: bringing up an evil name is evil. It costs something to stay silent when others speak. It costs more to defend someone when their reputation is under attack. But that is the law: do not hide yourself from your brother&apos;s loss — including the loss of their good name.',
        },
        {
          kind: 'reflection',
          id: 'deut22-slander-2',
          prompt:
            'Is there someone whose reputation you have heard attacked but not defended? What would it look like to repair that?',
        },
      ],
    },

    /* ─── Deuteronomy 22:22–27 — Careful Protections in Sexual Law ────── */
    {
      ref: 'Deuteronomy 22:22–27',
      title: 'The Covenantal Body and the Careful Presumption',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 22,
              spans: [
                t('If a man be found lying with a woman married to an husband, then they shall both of them die, both the man that lay with the woman, and the woman: so shalt thou put away evil from Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-adultery',
          html:
            'Adultery breaks covenant. The law treats it as a capital offense against the covenant order itself. Both die — not because shame falls heavier on the woman, but because both have violated a binding sacred oath. The theology underneath is that human sexuality is covenantal; it is meant to be bound, exclusive, sealed. A violation of that covenant is treated as a violation of the social fabric itself.',
        },

        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 23,
              spans: [
                t('If a damsel that is a virgin be betrothed unto an husband, and a man find her in the city, and lie with her;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Then ye shall bring them both out unto the gate of that city, and ye shall stone them with stones that they die; the damsel, because she cried not out, being in the city; and the man, because he hath humbled his cousin: so thou shalt put away evil from among you.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('But if a man find a betrothed damsel in the field, and the man force her, and lie with her: then the man only that lay with her shall die:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('But unto the damsel thou shalt do nothing; there is no sin in the damsel: for as when a man riseth against his neighbour, and slayeth him, even so is this matter:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('For he found her in the field, and the betrothed damsel cried, and there was none to save her.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-field',
          html:
            'The distinction is precise and speaks to the law&apos;s theology of consent and circumstance. In the city, where she could have cried out and been heard, the presumption is that she could have resisted. In the field, where no one would hear her, the only guilty party is the man. The law does not assume a woman is guilty until proven otherwise. Instead, it asks: <em>could she actually have been heard?</em> If the answer is no, she is innocent. The man alone is culpable. This is mercy woven into the law — a careful protection for the woman whose voice could not carry.',
        },
        {
          kind: 'carry',
          html:
            'You will meet someone whose vulnerability or circumstance made resistance impossible. A child, a person without power, someone in a situation where speaking up would have cost them everything. The law of Deuteronomy 22 says: look at what was actually possible for them, not what you think they should have done. Mercy for the person who could not speak. Justice against the person who spoke over their silence.',
        },
        {
          kind: 'reflection',
          id: 'deut22-protect',
          prompt:
            'Who in your life has a voice that cannot be heard in the room? What would it mean to protect their silence as if it were innocence?',
        },
      ],
    },

    /* ─── Deuteronomy 22:28–30 — The Unbetrothed Virgin ────────────────── */
    {
      ref: 'Deuteronomy 22:28–30',
      title: 'Obligation and Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 28,
              spans: [
                t('If a man find a damsel that is a virgin, which is not betrothed, and lay hold on her, and lie with her, and they be found;'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Then the man that lay with her shall give unto the damsel&apos;s father fifty shekels of silver, and she shall be his wife; because he hath humbled her, he may not put her away all his days.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('A man shall not take his father&apos;s wife, nor discover his father&apos;s skirt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut22-virgin',
          html:
            'The man is bound. He took her, so he owes her a bride-price, and he must marry her and cannot divorce her. There is no mercy for him here — only obligation. She is not ruined because he will not abandon her. But notice what the law is really saying: a man&apos;s violation of a woman is not erased by marriage. It is <em>redeemed</em> by it. He takes on a covenant instead of being released from consequences. The law protects the woman&apos;s future, even as it holds the man to an unbreakable oath.',
        },
        {
          kind: 'christ',
          id: 'deut22-redemption',
          title: 'Christ Connection — Redemption Through Covenant',
          html:
            'The man who violates is bound not released. Paul says the husband is to love his wife "as Christ also loved the church, and gave himself for it" (Ephesians 5:25). Christ&apos;s covenant is eternally binding, never revoked. The man in Deuteronomy becomes a kind of picture: you have broken something, and the only way forward is lifelong binding covenant with the one you have hurt. That is closer to what Christ does for us than we might expect.',
        },
        {
          kind: 'carry',
          html:
            'There are wrongs in your own life you cannot undo. A word spoken, a trust broken, damage done. The law of Deuteronomy 22 offers no escape for the guilty party — only a way forward that honors what was broken. Not erasure. Not forgetting. But a binding covenant that says: I owe you my presence, my faithfulness, my future. That is the shape of genuine repentance.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'deut22-covenant',
          prompt:
            'What would it mean for you to bind yourself to repair something you have broken — not through a grand gesture, but through faithful presence?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 22',
    quote:
      'God&apos;s law governs neighbor responsibility, the boundaries He made in creation, and the covenant of human sexuality — with careful protections for the vulnerable woven throughout.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 22 · Study Guide',
  },
};
