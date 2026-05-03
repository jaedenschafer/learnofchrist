import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 31 — Judgment Against Midian
 *
 * A chapter about holy war in the covenant context. God commands Israel to
 * avenge the Baal-peor incident (chapter 25), where Midian used seduction to
 * turn Israel toward idolatry. 12,000 men fight. All Midianite males die,
 * including the five kings and Balaam (the prophet who had taught Balak to
 * seduce Israel). Women and children are taken captive. Moses, seeing that
 * virgins are spared and non-virgins killed, understands the theological
 * logic: the women who led Israel into sin must die; the virgins are
 * integrated into Israel through marriage. The spoils are divided. The text
 * is morally difficult. It must be neither sanitized nor moralized. It
 * presents covenant judgment under the old covenant; Christ under the new
 * covenant absorbed the judgment such wars anticipated. The doctrine of
 * "cherem" (devoted to destruction) frames the narrative — total dedication
 * to God's purposes.
 */
export const NUMBERS_31: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 31,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 15 },
  intros: [
    'Numbers 31 is about holy war — and it is a hard text. God commands Israel to march against Midian to avenge what Midian had done in chapter 25: the seduction that turned Israel toward Baal-peor and nearly destroyed the covenant itself. The battle is total. All the Midianite males die, including the five kings and Balaam, the prophet who had taught Balak the strategy of seduction. Women and children are taken captive. But then Moses, seeing that virgin women are spared and non-virgin women are not, grasps the theological point: those who led Israel into sexual idolatry must die; those untainted by that sin are brought into Israel. The chapter never once asks whether this is just. It presents it as covenant response — God avenging His name against a people who had attacked His covenant from within.',
    'This is not a blueprint for modern warfare. This is judgment under the old covenant — the hard edge of what holiness cost in a theocratic state where covenant and nation were one. Under the new covenant, Christians do not wage physical war against nations (Eph. 6:12: "we wrestle not against flesh and blood"). Christ took the judgment such wars anticipated; He bore the wrath His people deserved. Yet the chapter teaches something that never changes: God takes sin seriously. Covenant is not casual. Seduction away from Him has weight, and the story of redemption includes justice, not just mercy.',
  ],

  showKjvNote: true,

  bottomShare: {
    label: 'Share Numbers 31',
    quote:
      'The LORD commanded Israel to avenge the seduction of Midian, which had turned the covenant people toward idolatry. The army of Israel marched to war, defeated Midian, and brought the spoils to be divided among the people and the LORD.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 31 · Study Guide',
  },

  sections: [
    /* ─── Numbers 31:1–6 — The Command to Avenge ────────────────────────── */
    {
      ref: 'Numbers 31:1–6',
      title: 'The Command to Avenge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 1,
              spans: [
                t('And the '),
                hy('LORD spake unto Moses', 'c-divine-word'),
                t(', saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Avenge the children of Israel of the Midianites: '),
                hg('afterward thou shalt be gathered unto thy people', 'c-death-nearby'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-divine-word',
          html:
            'The word comes directly from God — not Moses&apos; idea, not Israel&apos;s impulse. The text never frames this as optional or debatable. This is <em>cherem</em>, the language of covenant devotion — total dedication to God&apos;s justice.',
        },
        {
          kind: 'commentary',
          id: 'c-death-nearby',
          html:
            'Moses is told to avenge Midian, and then to die. He will not enter Canaan. Judgment begins with the leader. The man who gave the command will not live to see its aftermath. There is a seriousness here about the weight of what God orders.',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 3,
              spans: [
                t('And Moses spake unto the people, saying, '),
                hp('Arm some of yourselves unto the war, and let them go against the Midianites', 'c-israel-called'),
                t(', and avenge the LORD of Midian.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Of every tribe a thousand, throughout all the tribes of Israel, shall ye send to the war.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('So there were delivered out of the thousands of Israel, a thousand of every tribe, twelve thousand armed for war.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Moses sent them to the war, a thousand of every tribe, them and Phinehas the son of Eleazar the priest, to the war: and the holy instruments, and the trumpets to blow, in his hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-israel-called',
          html:
            'Twelve thousand men. One thousand from each of the twelve tribes. The whole nation stands behind this judgment. It is not an elite unit or a revenge militia — it is the covenant people acting as one body, executing what God has ordered.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cherem',
          title: 'Cherem — &ldquo;devoted to destruction&rdquo;',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · covenant devotion; something wholly dedicated to God',
          description:
            'The word underlying the judgment is <em>cherem</em> — not mere slaughter, but sacred devotion. The thing devoted to God cannot be kept, redeemed, or negotiated with. Cherem means: this belongs entirely to the LORD.',
        },
        {
          kind: 'carry',
          html:
            'The text does not ask us to replicate this war. We do not live in a theocracy where covenant and nation are one. But the chapter teaches covenant seriousness. When something has turned you away from God — a relationship, a habit, a voice you listen to — Scripture calls you not to negotiate with it, but to end it. &ldquo;If thy right eye offend thee, pluck it out.&rdquo; Not metaphorically compromise or manage it. End it. The total dedication the old covenant demanded of Israel toward enemies, the new covenant demands of you toward the sin that separates you from Him.',
        },
        {
          kind: 'reflection',
          id: 'num31-command',
          prompt:
            'What in your life has worked like Midian worked against Israel — pulling you away from God through something you did not at first recognize as danger? What would it mean to end it, not manage it?',
        },
      ],
    },

    /* ─── Numbers 31:7–18 — The Battle and Its Cost ────────────────────── */
    {
      ref: 'Numbers 31:7–18',
      title: 'The Battle and the Sorting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 7,
              spans: [
                t('And they warred against the Midianites, as the LORD commanded Moses; and '),
                hy('they slew all the males', 'c-all-males'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they slew the kings of Midian, beside the rest of them slain; namely, Evi, and Rekem, and Zur, and Hur, and Reba, five kings of Midian: '),
                hp('Balaam also the son of Beor they slew with the sword', 'c-balaam-dies'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-all-males',
          html:
            'Every Midianite man is killed. The five kings are named — the leadership of the seduction is destroyed. And Balaam, the prophet hired by Balak, dies with them. He had taught Balak the strategy: use women to seduce Israel into idolatry. The word travels back: "thy counsel" (31:16). Balaam&apos;s advice killed him.',
        },
        {
          kind: 'christ',
          id: 'c-balaam-dies',
          title: 'Christ Connection — Justice and Mercy Divided',
          html:
            'Balaam dies in the judgment against Midian — the false prophet whose counsel brought about his own ruin. But in the new covenant, Christ stands in the place where Balaam stands. He bears the judgment the false teachers deserve. Peter writes of false prophets who will "bring upon themselves swift destruction" (2 Peter 2:1), and then describes them so we can see them coming. Balaam&apos;s fate warns the Church; Christ&apos;s death saves it.',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 9,
              spans: [
                t('And the children of Israel took all the women of Midian captives, and their little ones, and took the spoil of all their cattle, and all their flocks, and all their goods.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they burnt all their cities wherein they dwelt, and all their goodly castles, with fire.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And they took all the spoil, and all the prey, both of men and of beasts.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 12,
              spans: [
                t('And they brought the captives, and the prey, and the spoil, unto Moses, and Eleazar the priest, and unto the congregation of the children of Israel, unto the camp at the plains of Moab, which are by Jordan near Jericho.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 13,
              spans: [
                t('And Moses, and Eleazar the priest, and all the princes of the congregation, went forth to meet them without the camp.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Moses was wroth with the officers of the host, with the captains over thousands, and captains over hundreds, which came from the battle.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he said unto them, Have ye '),
                hg('saved all the women alive', 'c-moses-angry'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-angry',
          html:
            'Moses sees that women have been spared and grows angry. His anger is not at mercy — his anger is at incomplete judgment. The women who seduced Israel at Baal-peor have been kept alive. In the ancient world, this is not a peace gesture; it is a dangerous compromise. The seducers remain. The source of the covenant-breaking temptation has not been fully removed.',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 16,
              spans: [
                t('Behold, these '),
                hp('caused the children of Israel, by the counsel of Balaam, to commit trespass against the LORD', 'c-seduction-root'),
                t(' in the matter of Peor: and there was a plague among the congregation of the LORD.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Now therefore kill every male among the little ones, and kill every woman that hath lain by man.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But all the women children, that have not known a man by lying with him, keep alive for yourselves.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seduction-root',
          html:
            'The root is named: the women had seduced Israel. Not as victims or slaves, but as the agents of Balaam&apos;s counsel. The strategy had worked. Thousands of Israelites had died in the plague (25:9). The covenant had been nearly shattered from within. Now the women are sorted: those who had been part of the seduction are executed; the virgins, who had no part in it, are spared and will be married into Israel. In the ancient Near Eastern context, this was an act of (cold) mercy — absorption into the victor&apos;s nation rather than death — but the modern reader should not soften what the text is doing. This is not a comfortable judgment.',
        },
        {
          kind: 'carry',
          html:
            'The chapter refuses to make light of seduction. When something or someone has worked to pull you away from God, the Bible calls for clarity, not compassion misnamed. You are allowed to separate completely. You are allowed to name what happened. You are allowed to live without it. Not in anger — the chapter is about covenant, not revenge — but in the kind clarity that says: this broke something. We cannot go back to how we were. The old pattern dies. What lives is what has been purified.',
        },
        {
          kind: 'reflection',
          id: 'num31-seduction',
          prompt:
            'Where have you been seduced away from God? Not dramatically — but gently, through something that looked good at first, through a counsel that sounded wise? What would it mean to stop meeting it halfway?',
        },
      ],
    },

    /* ─── Numbers 31:19–47 — Purification and Division of Spoil ─────────── */
    {
      ref: 'Numbers 31:19–47',
      title: 'Purification and the Division of Spoil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 19,
              spans: [
                t('And do ye abide without the camp seven days: whosoever hath killed any person, and whosoever hath touched any slain, '),
                hy('purify both yourselves and your captives', 'c-purification-ritual'),
                t(' on the third day, and on the seventh day.'),
              ],
            },
            {
              number: 20,
              spans: [
                t(`And purify all your raiment, and all that is made of skins, and all work of goats\' hair, and all things made of wood.`),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-purification-ritual',
          html:
            'Even in victory, even in obedience to God&apos;s command, the soldiers need purification. Taking life — even in covenant judgment — creates a ritual distance. The camp cannot go forward until those who have killed are washed, until the captives who will join Israel are cleansed. Holiness and war do not sit easily together. The chapter knows that.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tahor',
          title: 'Tahor — &ldquo;clean, pure&rdquo;',
          script: 'טָהוֹר',
          translit: '<strong>tahor</strong> · clean, pure; whole',
          description:
            'The word for purification is not about guilt or sin, but about a ritual state. <em>Tahor</em> means you are ready to be in the presence of the Holy. After war, that readiness needs to be restored. The text will not let the soldiers forget: you have done what God commanded, and you are still marked by it.',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 21,
              spans: [
                t('And Eleazar the priest said unto the men of war which went to the battle, This is the ordinance of the law which the LORD commanded Moses;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the LORD spake unto Moses, saying, Take the sum of the prey that was taken, both of man and of beast, thou, and Eleazar the priest, and the chief fathers of the congregation:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And divide the prey into two parts; between them that took the war upon them, who went out to battle, and between all the congregation:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And levy a tribute unto the LORD of the men of war which went out to battle: one soul of five hundred, both of the persons, and of the beeves, and of the asses, and of the sheep:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And give it unto Eleazar the priest, for an heave offering of the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spoils-divided',
          html:
            'The spoil is divided. Half to the soldiers who fought, half to the people. And out of both halves, a portion goes to the LORD — as if to say: this victory belongs to God first. The soldiers are compensated for their labor and risk, but the ownership of the conquest is His. This is how covenant victory works: God grants it, the nation shares it, the LORD receives the firstfruits.',
        },
        {
          kind: 'carry',
          html:
            'When you have fought something hard — addiction, a false belief, a broken relationship — and won, the chapter teaches you to stop. To purify. To divide the spoil. Part of the victory becomes discipline, rest, ritual separation. Part of it becomes community — shared with those who did not fight, because the whole covenant benefited. And part of it rises back to God — a recognition that the strength to fight was never yours alone. The modern equivalent is not a sacrifice, but a stopping. A sabbath. A moment to say: this belonged to the Lord.',
        },
        {
          kind: 'reflection',
          id: 'num31-victory',
          prompt:
            'When have you won a hard battle — over sin, over doubt, over yourself? Did you stop afterward, or did you rush forward? What did you give back to God?',
        },
      ],
    },

    /* ─── Numbers 31:48–54 — The Officers' Offering ─────────────────────── */
    {
      ref: 'Numbers 31:48–54',
      title: `The Officers' Offering`,
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 48,
              spans: [
                t('And the officers which were over thousands of the host, the captains of thousands, and captains of hundreds, came near unto Moses:'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And they said unto Moses, Thy servants have taken the sum of the men of war which are under our charge, and there '),
                hg('lacketh not one man of us', 'c-no-loss'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-loss',
          html:
            'Not one soldier died. The victory was complete and costless to Israel. This is covenant blessing — God&apos;s favor, God&apos;s protection. The officers report it with awe. Not a boast, but a recognition of something that had come from outside themselves.',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 50,
              spans: [
                t('We have therefore brought an oblation for the LORD, what every man hath gotten, of articles of gold, chains, and bracelets, rings, earrings, and tablets, to make an atonement for our souls before the LORD.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('And Moses and Eleazar the priest took the gold of them, even all wrought articles.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And all the gold of the offering that they offered up to the LORD, of the captains of thousands, and of the captains of hundreds, was sixteen thousand seven hundred and fifty shekels.'),
              ],
            },
            {
              number: 53,
              spans: [
                t('(For the men of war had taken spoil, every man for himself.)'),
              ],
            },
            {
              number: 54,
              spans: [
                t('And Moses and Eleazar the priest took the gold of the captains of thousands and of hundreds, and brought it into the tabernacle of the congregation, for a memorial before the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-officers-gift',
          html:
            'The officers give beyond what was commanded. They take personal spoil — articles of gold they could have kept — and offer them as a memorial before the LORD. Not because the law required it, but because they have seen what God did. The chapter ends not with a command obeyed, but with spontaneous worship.',
        },
        {
          kind: 'christ',
          id: 'christ-atonement',
          title: 'Christ Connection — The Memorial Before the LORD',
          html:
            'The officers place gold before the LORD as a memorial of what He has done. Jesus does the same: He takes His own body — poured out, broken, remembered in bread and wine — and places it before the Father. &ldquo;This do in remembrance of me&rdquo; (1 Cor. 11:24). The old covenant memorial was gold; the new covenant memorial is His flesh. Both are the covenant people saying to God: we saw what you did. We will not forget.',
        },
        {
          kind: 'carry',
          html:
            'The chapter ends with men bringing gold and laying it before God as a memorial. It is a picture of gratitude that has become material. You don&apos;t need gold or an altar. But you do need to stop, sometime soon, and say out loud to God: I saw what you did. I remember. I give you back something because you gave me everything. That moment — whether it is prayer, a gift, a day set apart, an act of service — is the only ending to war that does not lead to the next war.',
        },
        {
          kind: 'reflection',
          id: 'num31-memorial',
          prompt:
            'What has God done in your life that you would want to place as a memorial before Him — not to earn His favor, but to say: I saw. I remember?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-numbers-31',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 31',
      url: 'https://www.sefaria.org/Numbers.31',
      description: 'Account of the war against Midian and the laws for dividing spoils of war among warriors and the community.',
    },
    {
      id: 'balaam-death-fulfillment',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Balaam&apos;s End (Numbers 31:8)',
      url: 'https://intertextual.bible/text/numbers-31.8',
      description: 'The death of Balaam at the end of the Midian war as the completion of judgment on the false prophet.',
    },
    {
      id: 'holy-war-conquest',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Holy War in Ancient Israel',
      url: 'https://www.bibleodyssey.org/dictionary/holy-war/',
      description: 'SBL entry on the theological context of holy war and God&apos;s judgment against those who seduce Israel from covenant.',
    },
  ],
};
