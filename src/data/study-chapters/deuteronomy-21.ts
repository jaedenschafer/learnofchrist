import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 21 — Five civil laws, each with surprising gospel weight.
 * The chapter moves from unsolved murder to captive women to inheritance to
 * rebellious sons to the hanged tree — a progression that climaxes in the
 * cross.
 */
export const DEUTERONOMY_21: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 21,

  intros: [
    'Deuteronomy 21 presents five distinct civil laws drawn straight from the life of ancient Israel. At first they seem distant from us — rules about unsolved murders, captive women, firstborn inheritance, rebellious sons, and the bodies of the hanged. But each one carries a theological weight that echoes through Scripture and into the gospel itself.',
    'The laws show a God who cares about innocent blood, who protects the vulnerable in hard situations, who guards rights by law not preference, and who speaks a stern word to stubborn disobedience. And the final image — a body hanged on a tree — Paul will later seize as the very foundation of our redemption: Christ became the curse we deserved, hung on the tree.',
  ],

  sections: [
    /* ─── Deuteronomy 21:1–9 — The Unsolved Murder ───────────────────────── */
    {
      ref: 'Deuteronomy 21:1–9',
      title: '"Our hands have not shed this blood"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('If one be found slain in the land which the LORD thy God giveth thee to possess it, lying in the field, and it be not known who hath slain him:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 2,
              spans: [
                t('Then thy elders and thy judges shall come forth, and they shall measure unto the cities which are round about him that is slain:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 3,
              spans: [
                t('And it shall be, that the city which is next unto the slain man, even the elders of that city shall take '),
                hy('an heifer', 'eglah'),
                t(' which hath not been wrought with, and which hath not drawn in the yoke;'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'eglah',
          title: 'Eglah — "heifer"',
          script: 'אֶגְלָה',
          translit: '<strong>eglah</strong> · a young cow, never worked',
          description:
            'The heifer must be unblemished and unmarked — completely valuable, completely unused. The death of an innocent animal atones for innocent blood shed in the land. The substitution carries weight: a life for a life, because blood cries out.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 4,
              spans: [
                t('And the elders of that city shall bring down the heifer unto a rough valley, which is neither eared nor sown, and shall '),
                hg('strike off the heifer&apos;s neck there in the valley', 'unsolved-atonement'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 5,
              spans: [
                t('And the priests the sons of Levi shall come near; for them the LORD thy God hath chosen to minister unto him, and to bless in the name of the LORD; and by their word shall every controversy and every stroke be tried:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 6,
              spans: [
                t('And all the elders of that city, that are next unto the slain man, shall '),
                hg('wash their hands', 'unsolved-atonement'),
                t(' over the heifer that is beheaded in the valley:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'unsolved-atonement',
          html:
            'The ritual is stark. The nearest city is responsible—not because they did the murder, but because a murder happened in their land and they could not answer it. They wash their hands in public exoneration ("Our hands have not shed this blood"), then the priests and people together acknowledge what stands true: innocent blood has been shed, the land is defiled, and only death can answer death. The elders do not name a killer. They do not execute anyone. Instead they acknowledge the objective fact of bloodguilt and petition God for atonement on behalf of the whole community. Every one of them is implicated simply by living in a land where innocent blood was spilled.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 7,
              spans: [
                t('And they shall answer and say, Our hands have not shed this blood, neither have our eyes seen it.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 8,
              spans: [
                t('Be merciful, O LORD, unto thy people Israel, whom thou hast redeemed, and lay not innocent blood unto thy people of Israel\'s charge. And the blood shall be forgiven them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The law teaches that innocent blood is not a small matter. It stains the land, it calls for witness, it demands atonement. No injustice can simply be forgotten. Yet the law also shows mercy: the community cannot execute the unknown killer, so instead they confess their collective responsibility and ask God to be merciful. The blood is forgiven—but only through this ritual acknowledgment of what was shed. This is not heartless law. It is law that makes room for a God who remembers every innocent death.',
        },
        {
          kind: 'carry',
          html:
            'When you see injustice you cannot solve—a death in the news, a wrong without a guilty party you can name—you stand in the position of the elders. You are called to witness, to acknowledge that the blood was shed, to refuse to live as if it did not matter. You cannot always execute justice. But you can refuse to look away, and you can ask God to be merciful both to the innocent and to the land where evil went unmarked.',
        },
        {
          kind: 'reflection',
          id: 'unsolved-reflect',
          prompt:
            'When have you come across a wrong you could not right? What does this law teach about how to live faithfully in a world with unsolved injustices?',
        },
      ],
    },

    /* ─── Deuteronomy 21:10–14 — The Captive Woman ─────────────────────── */
    {
      ref: 'Deuteronomy 21:10–14',
      title: 'The dignity of the captive',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 10,
              spans: [
                t('When thou goest forth to war against thine enemies, and the LORD thy God hath delivered them into thine hands, and thou hast taken them captive,'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 11,
              spans: [
                t('And seest among the captives a '),
                hy('beautiful woman', 'captive-beauty'),
                t(', and hast a desire unto her, that thou wouldest have her to thy wife;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'captive-beauty',
          html:
            'The law does not forbid a soldier to marry a captive woman. War is brutal; hearts are strange. What it does is weave mercy into a hard situation. The man sees a woman and desires her. The law does not say "let her go." It says: this desire comes with obligations.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 12,
              spans: [
                t('Then thou shalt bring her home to thine house; and she shall '),
                hg('shave her head', 'captive-mourning'),
                t(', and pare her nails;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 13,
              spans: [
                t('And she shall put the raiment of her captivity from off her, and shall remain in thine house, and '),
                hg('bewail her father and her mother a full month', 'captive-mourning'),
                t(': and after that thou shalt go in unto her, and be her husband, and she shall be thy wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'captive-mourning',
          html:
            'The law is radical in its restraint. A month of mourning. A woman shaves her head—the customary sign of grief—and grieves her family, her people, her old life. The man must wait. He cannot take her immediately. She must mourn. She must have time to grieve what she has lost. Only after she has been allowed to lament does he lie with her as a husband. The law is not protecting the woman from desire—it is protecting her from the man&apos;s appetite overriding her humanity. She is not merchandise to be used. She is a person who has lost everything, and she deserves to weep.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 14,
              spans: [
                t('And it shall be, if thou have no delight in her, then thou shalt let her go whither she will; but thou shalt not sell her at all for money, thou shalt not make merchandise of her, because thou hast humbled her.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            "If the marriage fails, the law forbids the man to sell her as a slave. He may release her, but he cannot profit from her. Why? &quot;Because thou hast humbled her.&quot; The verb is heavy—tā&apos;ānāh, meaning to afflict, to bring low. He has already taken her from her home and her family. He cannot also use her as a commodity to make money. The law treats her body and her freedom as more valuable than his loss. This is a stunning restraint on male power in the ancient Near East.",
        },
        {
          kind: 'carry',
          html:
            'You live in a culture that constantly tempts you to turn people into means—to use them, profit from them, move on when you lose interest. The law says: when you have taken someone into your life, you cannot simply erase them or extract value from them. Restraint is not weakness. Protecting the powerless is the first act of justice.',
        },
        {
          kind: 'reflection',
          id: 'captive-reflect',
          prompt:
            'Where in your own life are you tempted to treat people as resources rather than as people bearing God&apos;s image?',
        },
      ],
    },

    /* ─── Deuteronomy 21:15–17 — The Firstborn&apos;s Right ───────────────────── */
    {
      ref: 'Deuteronomy 21:15–17',
      title: '"The right of the firstborn shall he acknowledge"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 15,
              spans: [
                t('If a man have two wives, one beloved, and another hated, and they have born him children, both the beloved and the hated; and if the firstborn son be hers that was hated:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 16,
              spans: [
                t('Then it shall be, when he maketh his sons to inherit that which he hath, that he may not make the son of the beloved firstborn before the son of the hated, which is indeed the firstborn:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 17,
              spans: [
                hy('But he shall acknowledge the son of the hated for the firstborn', 'bekhor'),
                t(', by giving him a double portion of all that he hath: for he is the beginning of his strength; the right of the firstborn is his.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'bekhor',
          title: '"Firstborn" — a right by birth, not feeling',
          script: 'בְּכוֹר',
          translit: '<strong>bekhor</strong> · the firstborn, the eldest son',
          description:
            'The firstborn&apos;s right is a legal right, not a reward for being favored. A man might prefer his beloved wife&apos;s son, but the law strips preference away. The firstborn of any mother gets the double portion. The law protects the firstborn from paternal whim.',
        },
        {
          kind: 'commentary',
          html:
            'This is a law about order and protection. A man has two wives and loves one more than the other. His beloved wife bears him a son, and that son is his favorite. He wants to give the larger inheritance to the son he loves. The law says: you cannot. The firstborn—even the firstborn of the hated wife—gets the double portion. Birthright is not negotiable. It stands as a legal right regardless of feeling. The law protects the powerless child from his father&apos;s preference. In a world built on favor and preference, the law says: no. Some rights are unshakeable.',
        },
        {
          kind: 'christ',
          id: 'christ-firstborn',
          title: 'Christ Connection — The Firstborn Among Many Brethren',
          html:
            'Paul writes of Jesus: "For whom he did foreknow, he also did predestinate to be conformed to the image of his son, that he might be the firstborn among many brethren" (Romans 8:29). Jesus is the eldest, and His right is not a matter of preference or preference of favor. He inherits the double portion—all things. And because He holds the firstborn&apos;s right, we are brought into the family as His brothers and sisters. Our standing does not depend on feeling or preference. It depends on His unshakeable right.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that privileges the favored and forgets the unfavored. But the law teaches that some rights stand above preference. Your worth before God is not determined by whether someone finds you beautiful or loves you more than others. It is determined by what God has established—that you are His image-bearer, His child, legally and eternally.',
        },
        {
          kind: 'reflection',
          id: 'firstborn-reflect',
          prompt:
            'Where are you waiting for people to prefer you? Where can you rest instead in a right that does not depend on preference?',
        },
      ],
    },

    /* ─── Deuteronomy 21:18–21 — The Rebellious Son ────────────────────── */
    {
      ref: 'Deuteronomy 21:18–21',
      title: 'A stubborn and rebellious son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 18,
              spans: [
                t('If a man have a stubborn and rebellious son, which will not obey the voice of his father, or the voice of his mother, and that, when they have chastened him, will not hearken unto them:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 19,
              spans: [
                t('Then shall his father and his mother lay hold on him, and bring him out unto the elders of his city, and unto the gate of his place;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 20,
              spans: [
                t('And they shall say unto the elders of his city, This our son is stubborn and rebellious, he will not obey our voice; he is a glutton, and a drunkard.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 21,
              spans: [
                t('And all the men of his city shall '),
                hg('stone him with stones', 'rebellious-judgment'),
                t(', that he die: so shalt thou put evil away from among you; and all Israel shall hear, and fear.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rebellious-judgment',
          html:
            'This is the harshest family law in all of Torah. The son is not accused of a specific crime—theft, murder, sexual sin. He is accused of stubbornness, of refusing to obey, of turning to appetite. His parents bring him before the elders, the city condemns him, and the men stone him. And the rationale is explicit: "so shalt thou put evil away from among you; and all Israel shall hear, and fear." The law is meant to terrify. Yet here is the astonishing fact of history: we have no record of this law ever being executed in Israel. Not once. The Pharisees debated it endlessly, imagined conditions so strict that no trial could ever meet them (the son must steal from both parents, must eat a certain kind of meat in a certain way, must drink wine to intoxication all in one session), and concluded it was written as teaching, not practice. The law stands as a stark warning—complete rejection of parental and divine order will end in death. Yet the warning was never carried out. Why? Perhaps because the gravity of the teaching was meant to move hearts toward obedience before the law ever needed to be invoked.',
        },
        {
          kind: 'carry',
          html:
            'You are not eternally bound to obey your parents. But you are called to recognize that stubborn rebellion—the refusal to hear wisdom, the turn toward appetite and self-will—leads somewhere dark. The law does not ask you to stone anyone. It asks you to fear—to understand that refusing to listen, refusing to be corrected, is a path toward death. Hear the warning before you live it.',
        },
        {
          kind: 'reflection',
          id: 'rebellious-reflect',
          prompt:
            'Where do you sense a stubborn refusal to hear in your own heart? What would it look like to turn toward obedience before the worse consequences fall?',
        },
      ],
    },

    /* ─── Deuteronomy 21:22–23 — The Hanged Tree ──────────────────────── */
    {
      ref: 'Deuteronomy 21:22–23',
      title: 'Cursed is every one that hangeth on a tree',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 22,
              spans: [
                t('And if a man have committed a sin worthy of death, and he be to be put to death, and thou hangest him on a '),
                hy('tree', 'ets-tree'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 23,
              spans: [
                t('His body shall not remain all night upon the tree, but thou shalt in any wise bury him that day; (for '),
                hp('he that is hanged is accursed of God', 'christ-curse'),
                t(';) that thy land be not defiled: for the LORD thy God giveth thee the land for an inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'ets-tree',
          title: 'Ets — "tree"',
          script: 'עֵץ',
          translit: '<strong>ets</strong> · a tree, wood, gallows',
          description:
            'The word is simple—ets, a tree. A piece of wood becomes the instrument of public execution and shame. The body is left exposed, a sign of ultimate disgrace, and this exposure defiles the land itself. Only burial—and burial the same day—can remove the defilement.',
        },
        {
          kind: 'greek',
          id: 'qelalah',
          title: 'Qelalah — the curse',
          script: 'קְלָלָה',
          translit: '<strong>qelalah</strong> · a curse, something cursed, accursed',
          description:
            'To be hanged is to be cursed—utterly cut off, outside the covenant, receiving the final judgment of the community. Yet this curse itself becomes the foundation of the gospel.',
        },
        {
          kind: 'commentary',
          html:
            'The law is clear: a man condemned to death and hanged on a tree bears a curse. Hanging itself is a form of public shame—the body left exposed for all to see that this man is cut off, rejected, accursed. The land itself is defiled by his hanging corpse. So he must be buried the same day. The defilement must be removed. The curse must not linger. This is not merely hygiene. This is theology: the hanged man is accursed, and his curse has power enough to pollute the land itself.',
        },
        {
          kind: 'christ',
          id: 'christ-curse',
          title: 'Christ Connection — The Curse Borne for Us',
          html:
            'Paul seizes this verse and applies it to the cross: "Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree" (Galatians 3:13). Jesus was hanged on a tree—literally, a cross made of wood. And in doing so, He bore the curse that belonged to us. He did not commit a sin worthy of death, yet He received the death the cursed receive. He was buried, and His burial removed the curse from those who believe in Him. The law was meant to warn us of the consequences of breaking covenant. Christ fulfilled the warning by absorbing the curse Himself. Every time you read "accursed," you can now know: that curse has been borne. That defilement has been removed. That death has been swallowed up.',
        },
        {
          kind: 'carry',
          html:
            'You carry curses you did not earn. Broken families, inherited shame, the weight of sin that was not yours to begin with. The law shows what you deserve—exposure, rejection, a land defiled by your presence. But Christ was hanged on a tree and bore that curse so you would not have to. The defilement has been removed. You can be buried with Him and raised to a new life.',
        },
        {
          kind: 'reflection',
          id: 'hanged-reflect',
          prompt:
            'What curses do you carry that you think you deserve? How does the truth that Christ bore the curse for you change the way you live today?',
        },
      ],
    },

    /* ─── Summary: Innocent Blood ────────────────────────────────────────── */
    {
      ref: 'Deuteronomy 21 — Summary',
      title: 'A law that protects the powerless',
      blocks: [
        {
          kind: 'commentary',
          html:
            'The five laws of Deuteronomy 21 move from the most abstract—innocent blood in an unsolved murder—to the most concrete—a body hanged on a tree. Yet they follow a single thread: the protection of the powerless and the acknowledgment of what is owed when power is exercised.',
        },
        {
          kind: 'commentary',
          html:
            'The unsolved murder teaches us that even when the killer is unknown, the blood still cries out. The captive woman teaches us that mercy is woven into law—that constraint on appetite is not weakness but strength. The firstborn teaches us that some rights stand above preference. The rebellious son teaches us that refusal to hear has terrible consequences. And the hanged tree teaches us that the curse of the law is real—and that Christ, alone, has borne it.',
        },
        {
          kind: 'carry',
          html:
            'You live under a law that you have broken. You deserve the curse. Yet the gospel announces that the curse has been borne. You are free not because the law was abolished, but because Christ satisfied it. That freedom is not permission to do whatever you want. It is permission to obey out of love instead of fear—to live by the same law that protects the powerless, because you yourself have been protected by Christ.',
        },
        {
          kind: 'reflection',
          id: 'summary-reflect',
          prompt:
            'Which of these five laws speaks most directly to your own need for protection or your own temptation to use power over others? Where do you see the gospel at work?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 21',
    quote:
      'Innocent blood cannot be forgotten. The powerless must be protected. Rights stand above preference. Rebellion leads to death. And Christ was cursed so we would not have to be.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 21 · Study Guide',
  },

  hasHebrew: true,
};
