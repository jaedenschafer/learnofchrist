import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 25 — Justice, labor, family law, and memory.
 * The Kinsman-Redeemer theme (Ruth connection), Paul's quotations
 * (muzzled ox, forty stripes), and the perpetual enemy Amalek.
 */
export const DEUTERONOMY_25: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 25,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 16 },
  intros: [
    'Deuteronomy 25 is a chapter about limits and protections — the law sets boundaries on punishment, demands fair treatment of workers, makes room for the brother-in-law to restore a widow&apos;s name and inheritance, requires honest measures in the marketplace, and commands Israel never to forget what Amalek did. Behind every law stands the same posture: God cares for the weak. He will not let the powerful run unchecked.',
    'The chapter weaves together several Old Testament threads that will loop forward into the New Testament. Paul quotes the muzzled ox to defend ministers&apos; wages. Ruth&apos;s whole story turns on the levirate law explained here. And the refusal to forget Amalek echoes through Israel&apos;s memory all the way to Esther. For the Christian reader, the kinsman-redeemer foreshadows the work of Christ.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 25',
    quote:
      'God&apos;s law protects workers, guards the family name through kinship, demands honest dealing, and calls His people to remember both justice and mercy.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 25 · Study Guide',
  },

  sections: [
    /* ─── Deuteronomy 25:1–3 — Limits on Punishment ───────────────────── */
    {
      ref: 'Deuteronomy 25:1–3',
      title: 'Justice Within Bounds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 1,
              spans: [
                t('If there be '),
                hg('a controversy', 'c-controversy'),
                t(' between men, and they come unto judgment, that the judges may judge them; then they shall '),
                hy('justify the righteous', 'c-tsedek'),
                t(', and condemn the wicked.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And it shall be, if the wicked man be worthy to be beaten, that the judge shall cause him to lie down, and to be beaten before his face, '),
                hg('according to his fault, by a certain number', 'c-measure'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Forty stripes he may give him, and not exceed: lest, if he should exceed, and beat him above these with many stripes, then thy brother should seem vile unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tsedek',
          html:
            'The verb <em>tsadak</em> — to justify, to declare righteous — rests judgment first. The judge&apos;s task is not to punish the accused, but to declare who stands righteous. In a corrupt world, that act of public declaration was itself an act of justice.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsedek',
          title: 'Tsedek — "justice" or "righteousness"',
          script: 'צֶדֶק',
          translit: '<strong>tsedek</strong> · the right standing, fair order, divine justice',
          description:
            'The law does not exist to satisfy a desire for vengeance. It exists to restore and protect the community&apos;s right standing. Even punishment has limits.',
        },
        {
          kind: 'commentary',
          id: 'c-measure',
          html:
            'The Torah gives a very specific cap: forty stripes, no more. Paul would later receive this punishment five times and survived it (2 Corinthians 11:24). The Jewish tradition read this even more strictly, counting out thirty-nine stripes to ensure no accidental overstep — a mercy built on top of mercy.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world obsessed with uncapping punishment — life sentences for nonviolent crime, cancellations that never end, shaming that extends beyond the deed itself. God&apos;s law set a boundary and called it justice. Whatever someone did, they do not deserve to become vile in your memory forever. Accountability is necessary; erasure is not.',
        },
        {
          kind: 'reflection',
          id: 'dt25-justice',
          prompt:
            'Is there someone in your life or community who has become "vile" to you, past the measure of their actual fault? What would it mean to remember both the wrong and their humanity?',
        },
      ],
    },

    /* ─── Deuteronomy 25:4 — The Unmuzzled Ox (Labor's Due) ──────────── */
    {
      ref: 'Deuteronomy 25:4',
      title: "Don&apos;t Muzzle the Ox",
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 4,
              spans: [
                t('Thou shalt not '),
                hp('muzzle the ox', 'c-ox-paul'),
                t(' when he treadeth out the corn.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ox-paul',
          html:
            'One of the Bible&apos;s shortest laws, and among its most quoted. An ox treading out grain — separating the kernels from the chaff by walking over it — would naturally eat some of the grain. The law says: let him. Do not rig the rules to prevent his natural sustenance. He is working. He deserves to eat.',
        },
        {
          kind: 'commentary',
          id: 'c-ox-labor',
          html:
            'Paul quotes this law twice — in 1 Corinthians 9:9 and again in 1 Timothy 5:18 — to argue that people who labor in the gospel deserve wages. "For the scripture saith, Thou shalt not muzzle the ox that treadeth out the corn. And, The labourer is worthy of his reward." God&apos;s care for the ox&apos;s sustenance reveals His care for the laborer&apos;s. The principle is simple: work deserves pay.',
        },
        {
          kind: 'christ',
          id: 'christ-labor',
          title: 'Christ Connection — The Worker&apos;s Wage',
          html:
            'Jesus tells His disciples, "The labourer is worthy of his meat" (Matthew 10:10). The same principle echoes through Paul&apos;s letters — those who preach the gospel should live by the gospel (1 Corinthians 9:14). Christ&apos;s kingdom does not exploit; it honors the work of those who build it. The ox treading grain prefigures the person whose work feeds others.',
        },
        {
          kind: 'carry',
          html:
            'A teacher, a caregiver, a custodian, a therapist, a mechanic — whoever works deserves to eat. If you control someone&apos;s wages or work, God&apos;s law is simple: let them have what they&apos;ve earned. Do not rig the system. Do not squeeze unpaid labor out of someone&apos;s need. The ox treading grain set the standard twenty-five hundred years ago.',
        },
        {
          kind: 'reflection',
          id: 'dt25-ox',
          prompt:
            'Who in your life or sphere of influence is working without being paid fairly? What one thing could you do this week to honor the principle of the unmuzzled ox?',
        },
      ],
    },

    /* ─── Deuteronomy 25:5–10 — The Levirate Marriage ──────────────── */
    {
      ref: 'Deuteronomy 25:5–10',
      title: 'The Kinsman-Redeemer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 5,
              spans: [
                t('If brethren dwell together, and one of them die, and have no child, the wife of the dead shall not '),
                hg('marry without unto a stranger', 'c-levir'),
                t(': her '),
                hy('husband&apos;s brother', 'hebrew-yabam'),
                t(' shall go in unto her, and take her to him to wife, and perform the duty of an husband&apos;s brother unto her.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And it shall be, that the firstborn which she beareth shall '),
                hg('succeed in the name of his brother', 'c-name-redeemed'),
                t(' which is dead, that his name be not put out of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levir',
          html:
            'The levirate law — from the Latin <em>levir</em>, brother-in-law — protects the widow and ensures the deceased brother&apos;s line does not vanish. In a world where a woman&apos;s security came through bearing sons, this law guaranteed her a path forward. The widow could not simply be cast aside; the brother-in-law was obligated to step in.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yabam',
          title: 'Yabam — "brother-in-law" or "levir"',
          script: 'יָבָם',
          translit: '<strong>yabam</strong> · the brother who takes up the duty',
          description:
            'The yabam is not marrying for love (though love could follow) — he is marrying to restore his brother&apos;s name and protect his widow. Kinship duty comes first.',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 7,
              spans: [
                t('And if the man will not take his brother&apos;s wife, then let his brother&apos;s wife go up to the gate unto the elders, and say, My husband&apos;s brother refuseth to raise up unto his brother a name in Israel: he will not perform the duty of my husband&apos;s brother.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Then the elders of his city shall call him, and speak unto him: and if he stand to it, and say, I will not take her;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then shall his brother&apos;s wife come unto him in the presence of the elders, and '),
                hg('loose his shoe from off his foot', 'c-shoe'),
                t(', and spit in his face, and shall answer and say, So shall it be done unto that man that will not build up his brother&apos;s house.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And his name shall be called in Israel, '),
                hg('The house of him that hath his shoe loosed', 'c-shame'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shoe',
          html:
            'The loosening of the shoe was an ancient sign of property transfer. When Boaz redeemed Ruth, Ruth asked him to remove his shoe as a witness to the transaction (Ruth 4:7–8). Here, the widow loosens the brother&apos;s shoe as a public sign that he has refused to take up his duty, and the responsibility passes to someone else. The spit is a sign of public shame — not private humiliation, but communal witness that he broke his obligation.',
        },
        {
          kind: 'commentary',
          id: 'c-name-redeemed',
          html:
            'The child born to the widow through her brother-in-law bears the dead brother&apos;s name. In Israel&apos;s world, a name without descendants was a kind of death. This law kept names, lineages, and families alive. It is the background against which Ruth&apos;s whole story moves — and Jesus Himself will be born into this lineage through David.',
        },
        {
          kind: 'christ',
          id: 'christ-redeemer',
          title: 'Christ Connection — The Kinsman-Redeemer',
          html:
            'Ruth&apos;s story plays out entirely in the light of this law. Boaz is her kinsman-redeemer — a <em>goel</em>, the one legally bound to restore what was lost. Paul draws the connection to Christ: "God sent forth his Son, made of a woman… to redeem them that were under the law" (Galatians 4:4–5). Jesus is the ultimate Kinsman-Redeemer — related to us by becoming human, authorized to restore what we have lost, bearing our name and our nature eternally. The shoe transferred; the price was paid; our name is redeemed.',
        },
        {
          kind: 'carry',
          html:
            'You may know what it feels like to be like the widow — left behind, unsure how to move forward, waiting for someone strong to step in. Or you may know what it feels like to be like the brother-in-law, called to a duty you didn&apos;t expect. Either way, the law teaches this: obligation, kinship, and the restoration of what was lost are sacred. Christ took on both roles — He became your kinsman, and He did the work.',
        },
        {
          kind: 'reflection',
          id: 'dt25-redeemer',
          prompt:
            'What in your story has felt lost or passed over? Where do you need a kinsman-redeemer — someone bound by obligation and love to restore what was taken?',
        },
      ],
    },

    /* ─── Deuteronomy 25:11–12 — The Assault Penalty ──────────────── */
    {
      ref: 'Deuteronomy 25:11–12',
      title: 'Bodily Honor in Dispute',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 11,
              spans: [
                t('When men strive together one with another, and the wife of the one draweth near for to deliver her husband out of the hand of him that smiteth him, and '),
                hp('putteth forth her hand, and taketh him by the secrets', 'c-shame-violence'),
                t(':'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then thou shalt '),
                hg('cut off her hand', 'c-amputation'),
                t('; thine eye shall not pity her.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shame-violence',
          html:
            'A wife is stepping in to defend her husband in a fight. She reaches out and grabs the genitals of his opponent. The law sees this as a violation of bodily honor — not a matter of proportional harm, but a matter of sexual shame imposed in public. The act violates a boundary that the law treats as fundamental.',
        },
        {
          kind: 'commentary',
          id: 'c-amputation',
          html:
            'This is the only place in the Torah where amputation is commanded as a legal penalty. The harshness is deliberate — it sends a message about the seriousness of violating someone&apos;s bodily integrity. You do not touch another person&apos;s intimate parts for shame or victory. The law protects the body as sacred space.',
        },
        {
          kind: 'carry',
          html:
            'The ancient law teaches a modern truth: mockery and violation of someone&apos;s body — whether physical, sexual, or through humiliation — is not just fighting dirty. It is a kind of violation the law itself forbids. Whether it happens in conflict, online, in photos shared without consent, or in words meant to shame, the principle holds. Bodily honor is inviolable.',
        },
        {
          kind: 'reflection',
          id: 'dt25-honor',
          prompt:
            'Where have you crossed a line with someone&apos;s bodily honor, or had it crossed against you? What would honoring that boundary mean going forward?',
        },
      ],
    },

    /* ─── Deuteronomy 25:13–16 — Just Weights ──────────────────────── */
    {
      ref: 'Deuteronomy 25:13–16',
      title: 'Honest Measures in the Market',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 13,
              spans: [
                t('Thou shalt not have in thy bag '),
                hg('divers weights', 'c-weights'),
                t(', a great and a small.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Thou shalt not have in thine house divers measures, a great and a small.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But thou shalt have a perfect and just weight, a perfect and just measure shalt thou have: that thy days may be lengthened in the land which the Lord thy God giveth thee.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('For all that do such things, and all that do unrighteously, are an abomination unto the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-weight',
          title: 'Eben — "stone" or "weight"',
          script: 'אֶבֶן',
          translit: '<strong>eben</strong> · the stone used to weigh grain or silver',
          description:
            'Ancient merchants used stones as weights on a balance. A merchant with two sets — one heavier for selling, one lighter for buying — could rig every transaction. The law demands one honest stone.',
        },
        {
          kind: 'commentary',
          id: 'c-weights',
          html:
            'An ancient merchant&apos;s fraud: use a heavier weight when selling your goods (so the customer gives less), use a lighter weight when buying others&apos; goods (so you pay less). The law does not allow a merchant to keep two sets. The market is moral territory. Honesty is not a suggestion; it is a commandment.',
        },
        {
          kind: 'commentary',
          id: 'c-market-life',
          html:
            'The promise is stunning: honest measures, and your days will be lengthened in the land. Corruption tears a society apart; honesty builds it. God ties the health of a nation to the honesty of its smallest transactions. When you cheat the grocer, you are not just cheating the grocer. You are slowly poisoning the community you live in.',
        },
        {
          kind: 'christ',
          id: 'christ-market',
          title: 'Christ Connection — Truth in the Market',
          html:
            'Jesus cleansed the temple by overturning the tables of those who changed money — not because commerce was evil, but because fraud in the house of God betrayed everything. Paul writes, "Let no man deceive you with vain words" (Ephesians 5:6). Christ calls His followers to be "wise as serpents, and harmless as doves" (Matthew 10:16) — shrewd enough to see dishonesty, but too loving to practice it. The market is Christ&apos;s, and so is its honesty.',
        },
        {
          kind: 'carry',
          html:
            'Every time you price something honestly, every time you give someone more than they paid for, every time you admit a mistake even when it costs you, you are echoing this law. The small dealings — the meal you priced fairly, the invoice you sent correctly, the story you told without exaggeration — are not small. They are how a trustworthy world gets built.',
        },
        {
          kind: 'reflection',
          id: 'dt25-measure',
          prompt:
            'Where in your work or dealings have you used different measures with different people? What would it cost to switch to one honest weight?',
        },
      ],
    },

    /* ─── Deuteronomy 25:17–19 — Remember Amalek ────────────────── */
    {
      ref: 'Deuteronomy 25:17–19',
      title: 'Remember Amalek',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 17,
              spans: [
                t('Remember what '),
                hy('Amalek', 'hebrew-amalek'),
                t(' did unto thee by the way, when ye were come forth out of Egypt;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('How he met thee by the way, and smote the hindmost of thee, even all that were feeble behind thee, when thou wast faint and weary; and he feared not God.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Therefore it shall be, when the Lord thy God hath given thee rest from all thine enemies round about, in the land which the Lord thy God giveth thee for an inheritance to possess it, that thou shalt '),
                hg('blot out the remembrance of Amalek', 'c-amalek-blot'),
                t(' from under heaven; thou shalt not forget it.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-amalek',
          title: 'Amalek — the perpetual enemy',
          script: 'אַמָלֵק',
          translit: '<strong>Amalek</strong> · the nation that attacked the feeble from behind',
          description:
            'Amalek was a nomadic people who ambushed Israel in the wilderness. They attacked the young, old, and sick — those who could not fight back. Amalek became a symbol of cowardly evil that preys on the weak.',
        },
        {
          kind: 'commentary',
          id: 'c-amalek-blot',
          html:
            'The command is paradoxical: "blot out the remembrance of Amalek… thou shalt not forget it." Israel must never forget what Amalek did. The memory serves as a warning: there are enemies who will always strike at the vulnerable. The eradication of Amalek&apos;s remembrance is something only God can complete. Centuries later, Esther saves her people from Haman the Agagite — Amalek&apos;s descendant — showing that the threat persists.',
        },
        {
          kind: 'commentary',
          id: 'c-amalek-weak',
          html:
            'Amalek&apos;s sin was not that he fought Israel — it was that he struck the feeble who could not defend themselves. This is cruelty wearing the mask of cowardice. God will not forget it. Neither should Israel.',
        },
        {
          kind: 'christ',
          id: 'christ-amalek',
          title: 'Christ Connection — The Final Blotting Out',
          html:
            'Amalek stands in Scripture as a type of the enemy who strikes the weak. But Christ is the ultimate warrior who blots out all such evil. "He is despised and rejected of men" — yet "upon him was the chastisement of our peace" (Isaiah 53:3, 5). The final battle is won not by crushing the feeble alongside their oppressors, but by Christ absorbing the blow meant for the helpless. He does for us what the judge will do for Israel: He remembers, He judges, and He restores.',
        },
        {
          kind: 'carry',
          html:
            'You know Amalek. He strikes in mockery toward the vulnerable, in cruelty toward children, in laws that punish the poor. Every time you stand with the feeble — by speaking up, by refusing to look away, by honoring what is small and defenseless — you are remembering Amalek&apos;s shame and announcing that his way will not prevail. Christ blots it out.',
        },
        {
          kind: 'reflection',
          id: 'dt25-amalek',
          prompt:
            'Where do you see Amalek&apos;s cowardice in the world — cruelty toward the vulnerable, mockery of the weak? What does it mean for you to "not forget" while trusting Christ to blot it out?',
        },
      ],
    },
  ],
};
