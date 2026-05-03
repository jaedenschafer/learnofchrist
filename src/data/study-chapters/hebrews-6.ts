import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Hebrews 6 — Leave the foundation, press on to maturity.
 *
 * A chapter about apostasy, unchanging promise, and the unshakeable hope
 * anchored in Christ who has gone before us within the veil.
 */
export const HEBREWS_6: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 6,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 17 },
  intros: [
    'Hebrews 6 is a passage of two voices: warning and comfort. The author begins with a plea to spiritual maturity—leave behind the foundational teachings of Christ and press on to perfection. Then comes the hardest apostasy passage in Scripture: some who have tasted heavenly gifts, experienced the Spirit, known God&apos;s power, fall away into deliberate rejection. Such falling away is impossible to heal. Yet even as he writes this, the author softens. "But, beloved, we are persuaded better things of you." He trusts his readers. He knows they are not apostates.',
    'The passage anchors all its hope in God&apos;s immutable promise and oath. God swore by Himself—by His own unchanging nature. He cannot lie. Your hope, then, is not fragile; it is unshakeable. It is fastened to Christ, who has already entered the veil, who is your forerunner, who sits in the very place your hope reaches to. Nothing can break that anchor.',
    'For the reader, this chapter asks: Have you tasted of the Lord&apos;s goodness? Then what next? Do you press on to maturity, or do you settle at the foundation? Do you hold fast to that taste you have known, or are you drifting? And when storms come—when faith feels thin and the world seems to win—do you remember where your anchor is fastened?',
  ],

  sections: [
    /* ─── Hebrews 6:1–3 — Leaving the Principles ──────────────────────────── */
    {
      ref: 'Hebrews 6:1–3',
      title: 'Leaving the Principles, Going On to Perfection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              1,
              t('Therefore leaving the '),
              hg('principles of the doctrine of Christ', 'h6-doctrines'),
              t(', let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-doctrines',
          html:
            'The "principles of the doctrine of Christ" are the foundational teachings—not false teachings, but <em>basics.</em> Repentance from dead works. Faith in God. The doctrines of baptism, laying on of hands, resurrection, and eternal judgment (listed in verses 2). These are where every believer begins. But they are not where every believer stays.',
        },
        {
          kind: 'greek',
          id: 'h6-teleiotis',
          title: 'Teleiotēs — "Perfection"',
          script: 'τελειότης',
          translit: '<strong>teleiotēs</strong> · maturity, completion, the state of being fully grown',
          description:
            'Not sinless perfection, but spiritual maturity. A child learns to talk, then to read; you don&apos;t keep teaching the alphabet. The author is calling his readers to move beyond catechism into deep, adult understanding of Christ.',
        },
        {
          kind: 'commentary',
          id: 'h6-laying-again',
          html:
            'To "lay again the foundation" of repentance and faith is to keep circling back to basics, never moving forward. Some believers get stuck here—always repenting, always doubting whether their faith is real enough, never pressing into the deeper work God wants to do in them. The author is saying: you have tasted. You know the foundation is solid. Now climb.',
        },
        {
          kind: 'carry',
          html:
            'You know more of Christ than you did five years ago. But are you still circling the same foundational questions—Is He real? Does He forgive me? Do I matter to Him? Or have you moved deeper? The foundation holds. Now let your faith mature. Let it deepen. Let it shape how you work, how you love, how you speak. The basics don&apos;t change. But you do.',
        },
        {
          kind: 'reflection',
          id: 'h6-basics-deepen',
          prompt:
            'What foundational truth about Christ do you know well? How has your understanding of it deepened beyond where it was a year ago?',
        },
      ],
    },

    /* ─── Hebrews 6:1–3 (cont.) — The Six Foundational Doctrines ──────────── */
    {
      ref: 'Hebrews 6:1–2',
      title: 'The Six Foundational Doctrines',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              2,
              t('Of the doctrine of '),
              hg('baptisms, and of laying on of hands', 'h6-baptisms'),
              t(', and of resurrection of the dead, and of '),
              hg('eternal judgment', 'h6-eternal'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-baptisms',
          html:
            'The plural "baptisms" likely includes Jewish ritual washings and Christian baptism—the external markers of transition and commitment. "Laying on of hands" is the prayer-touch that sets apart and empowers. These doctrines are not trivial, but they are where faith begins, not where it lives.',
        },
        {
          kind: 'commentary',
          id: 'h6-eternal',
          html:
            'The doctrines of the resurrection and eternal judgment are the bookends of time itself—what awaits us beyond death. These foundational truths deserve serious thought, but the author is reminding his readers: you already know this. The question is not whether these things are true. The question is: now what? How will you live in light of them?',
        },
        {
          kind: 'commentary',
          id: 'h6-perfection-pathway',
          html:
            'Hebrews is always building toward the priesthood of Christ. These six foundational doctrines are real. They matter. But they point beyond themselves to a person—Jesus, the High Priest who has already passed through the heavens. Growing in Christ means moving from understanding <em>about</em> Him to knowing <em>Him</em>.',
        },
      ],
    },

    /* ─── Hebrews 6:3 — God Will Permit ──────────────────────────────────── */
    {
      ref: 'Hebrews 6:3',
      title: 'God&apos;s Permission to Move Forward',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              3,
              t('And this will we do, if '),
              hy('God permit', 'h6-permit'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-permit',
          html:
            'A quiet reminder: spiritual growth is not earned by effort alone. God must permit it. The author is saying, "We will press forward—if the Spirit opens that way." There is a rhythm of human striving and divine grace. You show up. You dig in. You hunger for deeper things. And God, in His kindness, makes the path clear.',
        },
      ],
    },

    /* ─── Hebrews 6:4–6 — The Apostasy Warning ────────────────────────────── */
    {
      ref: 'Hebrews 6:4–6',
      title: 'The Impossible Renewal: Apostasy and Its Finality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              4,
              t('For it is impossible for those who were once enlightened, and have tasted of the heavenly gift, and were made partakers of the Holy Ghost,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-illumination',
          html:
            'Illumination—"once enlightened"—is not a vague spiritual impression. It is being brought into light, shown the truth about Christ, made able to see what others are blind to. This person is not a casual inquirer. They have been enlightened. They have tasted the heavenly gift—they have experienced grace directly. They have been made partakers of the Holy Ghost—the Spirit has worked in their lives. This is not intellectual assent. This is lived experience.',
        },
        {
          kind: 'greek',
          id: 'h6-geuomai',
          title: 'Geuomai — "To Taste"',
          script: 'γεύομαι',
          translit: '<strong>geuomai</strong> · to taste; to experience; to sample',
          description:
            'To taste is to know directly, not by report alone. They have not merely heard the gospel preached. They have tasted it—experienced the reality of God&apos;s grace themselves.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              5,
              t('And have '),
              hy('tasted the good word of God', 'h6-word-tasted'),
              t(', and the powers of the world to come,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-word-tasted',
          html:
            'The "good word of God"—the gospel itself—and the "powers of the world to come"—miracles, signs, the tangible work of the Holy Spirit. These are not theoretical experiences. They have seen God work.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              6,
              t('If they shall '),
              hg('fall away', 'h6-parapesontas'),
              t(', to renew them again unto repentance; seeing they '),
              hp('crucify to themselves the Son of God afresh', 'h6-afresh'),
              t(', and put him to an open shame.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-parapesontas',
          html:
            'This is the word that makes commentators wrestle. "Fall away"—<em>parapipto</em> or related—means to commit apostasy, to turn away, to abandon what one has known to be true. This is not a stumble. This is not a doubt that passes. This is a deliberate, sustained turning from Christ.',
        },
        {
          kind: 'commentary',
          id: 'h6-afresh',
          html:
            'The language is stark: to crucify Christ afresh, to put Him to open shame. Apostasy is not a private matter. It is a public denial of His work, a joining of those who rejected Him. And once someone has known the truth and deliberately rejected it, the pathway back is described as "impossible." This warning hangs over the passage—not as threat to the believing, but as clarity about the cost of knowing Christ and turning away.',
        },
        {
          kind: 'christ',
          id: 'h6-christ-shame',
          title: 'Christ Connection — His Shame and the Cost of Rejection',
          html:
            'Jesus was shamed at Calvary. He bore that shame so that you would not have to. To deliberately reject Him after knowing His grace is to say: "Your shame did not matter to me. Your sacrifice is worthless." Yet even in Hebrews 6&apos;s warning, the gospel holds: Christ has already entered the veil. His work is done. The apostasy passage does not negate His power. It clarifies the seriousness of knowing Him and choosing to turn away. The grace remains. The warning remains. Both are true.',
        },
        {
          kind: 'reflection',
          id: 'h6-hold-fast',
          prompt:
            'What are you tempted to walk away from about Christ? What would it cost you to hold fast to what you have tasted?',
        },
      ],
    },

    /* ─── Hebrews 6:7–8 — The Land That Bears Fruit ─────────────────────── */
    {
      ref: 'Hebrews 6:7–8',
      title: 'Land That Bears Fruit and Land That Burns',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              7,
              t('For the earth which drinketh in the rain that cometh oft upon it, and bringeth forth herbs meet for them by whom it is dressed, receiveth blessing from God:'),
            ),
            verse(
              8,
              t('But that which beareth thorns and briers is rejected, and is nigh unto cursing; whose end is to be burned.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-dual-harvest',
          html:
            'The same rain falls on both lands. The same conditions. Yet one produces fruit and the other thorns. It is not accident. The difference is in what the soil has been made to do. A believer receiving God&apos;s grace can grow in Christ—or can remain hardened. The choice is active.',
        },
      ],
    },

    /* ─── Hebrews 6:9–11 — But Beloved, Better Things ──────────────────────── */
    {
      ref: 'Hebrews 6:9–11',
      title: 'Better Things and the Diligence of Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              9,
              t('But, beloved, we are persuaded better things of you, and things that accompany salvation; though we thus speak.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-beloved',
          html:
            'After the weight of apostasy warning, the author turns to his readers with tenderness. "Beloved." He loves them. He has not written to condemn them. He has written to warn them—and in this verse, to assure them. He is "persuaded better things of you." He believes in their faithfulness.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              10,
              t('For God is not unrighteous to forget your '),
              hp('work and labour of love', 'h6-love-labor'),
              t(', which ye have shewed toward his name, in that ye have ministered to the saints, and do minister.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-love-labor',
          html:
            'This is the answer to despair. If you have loved others in the name of Christ, if you have served the saints, God sees it. He will not forget it. You worry that your faith is not enough, that you are not spiritual enough—but your hands have done the work of Christ. God remembers that. God honors that.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              11,
              t('And we desire that every one of you do shew the same diligence to the full assurance of hope unto the end;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-diligence-hope',
          html:
            'The "full assurance of hope"—not a weak, wavering hope, but a hope that fills you, that you are absolutely certain of. And this assurance reaches "unto the end"—not just for a season, but for the whole of your life. The author is asking for diligence: intentional, persistent faithfulness to the end.',
        },
        {
          kind: 'carry',
          html:
            'When you have served another person in Jesus&apos; name—when you have shown up, listened, given time you didn&apos;t think you had—God saw it. He remembers. You are not unseen. You are not forgotten. Now, press on. Be diligent. Let your hope grow stronger as you go, until you reach the end firm and sure.',
        },
        {
          kind: 'reflection',
          id: 'h6-labor-seen',
          prompt:
            'What labor of love have you offered this week? How would your faith shift if you truly believed God has not forgotten it?',
        },
      ],
    },

    /* ─── Hebrews 6:12 — Followers Who Inherit ────────────────────────────── */
    {
      ref: 'Hebrews 6:12',
      title: 'Followers of Faith and Patience Who Inherit the Promises',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              12,
              t('That ye be not slothful, but '),
              hy('followers of them who through faith and patience inherit the promises', 'h6-inherit'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-inherit',
          html:
            'The author points backward in Scripture—to Abraham, to the patriarchs, to all who held on through difficulty and saw God come through. They did not rush. They did not quit. They believed, waited, endured, and in the end received what God had promised. You are called to follow their pattern.',
        },
        {
          kind: 'carry',
          html:
            'You are not the first to wait for God to come through. You are not the first to doubt, to grow weary, to wonder if He will do what He said. But those who came before you held on. They inherited the promise. Their faithfulness was not wasted. Neither will yours be.',
        },
      ],
    },

    /* ─── Hebrews 6:13–15 — God Sware by Himself ───────────────────────────── */
    {
      ref: 'Hebrews 6:13–15',
      title: 'God Sware by Himself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              13,
              t('For when God made promise to Abraham, because he could swear by no greater, he sware by '),
              hp('himself', 'h6-sware-self'),
              t(','),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-sware-self',
          html:
            'In the ancient world, you swear by someone greater than yourself to show you are bound by your word. But there is no one greater than God. So God swears by the only thing equal to Himself: His own name, His own being. When God makes an oath, He is putting Himself on the line. His character is at stake.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              14,
              t('Saying, Surely blessing I will bless thee, and multiplying I will multiply thee.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-double-promise',
          html:
            'The doubled words—"blessing I will bless," "multiplying I will multiply"—are Hebrew emphasis. [res:sefaria-genesis14-oath] God is not tentatively promising. He is emphatically, utterly, completely binding Himself to this promise. To Abraham and his offspring.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              15,
              t('And so, after he had patiently endured, he obtained the promise.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-obtained',
          html:
            'Abraham waited. The promise did not come immediately. It took decades. But he held on, and he saw it fulfilled. This is the pattern the author sets before his readers: God swears. You wait. You endure. You receive. Not quickly, but surely.',
        },
      ],
    },

    /* ─── Hebrews 6:16–18 — Two Immutable Things ──────────────────────────── */
    {
      ref: 'Hebrews 6:16–18',
      title: 'Two Immutable Things: God Cannot Lie',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              16,
              t('For men verily swear by the greater: and an oath for confirmation is to them an end of all strife.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-men-swear',
          html:
            'This is how human justice works. When two people are in dispute, they swear an oath by something greater—by God, by the law—and the oath settles the matter. The oath is binding because the thing sworn by is greater and more reliable than either party.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              17,
              t('Wherein God, willing more abundantly to shew unto the heirs of promise the immutability of his counsel, confirmed it by an oath:'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'h6-ametathetos',
          title: 'Ametathetos — "Immutable"',
          script: 'ἀμετάθετος',
          translit: '<strong>ametathetos</strong> · unchangeable, unchanging, that cannot be moved or altered',
          description:
            'God&apos;s counsel is not subject to revision. It does not shift with circumstances or moods. When God promises, that promise is immutable—forever fixed, forever sure.',
        },
        {
          kind: 'commentary',
          id: 'h6-abundance',
          html:
            'God wants you to know, <em>abundantly</em>, that His promise cannot be changed. It is not a casual statement. It is oath-bound. It is sworn by His own being. He is doing everything He can to assure you that what He has said will happen.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              18,
              t('That by two immutable things, in which it was '),
              hg('impossible for God to lie', 'h6-cannot-lie'),
              t(', we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-cannot-lie',
          html:
            'Two immutable things: God&apos;s word and God&apos;s oath. Both are unchangeable. Together they make something logically impossible—God lying. It cannot happen. Your hope rests on the bedrock of God&apos;s nature itself.',
        },
        {
          kind: 'christ',
          id: 'h6-christ-oath',
          title: 'Christ Connection — The Oath-Keeper at God&apos;s Right Hand',
          html:
            '[res:intertextual-psalm110-oath] Psalm 110:4 speaks of one who is "a priest for ever after the order of Melchisedec"—a promise God swore by oath. Hebrews will show us that this is Christ. The very oath God swore, He swore about Jesus. Your hope is not in a distant God; it is in Christ, the one who perfectly fulfills every promise God ever made. His presence at God&apos;s right hand is the proof that God keeps His oath.',
        },
        {
          kind: 'carry',
          html:
            'You have been afraid that God might change His mind. You have wondered if His promises hold when your circumstances are hard. Here is the answer: God has sworn an oath about your future. It is impossible for Him to lie. Your hope is not fragile. It is mathematically certain.',
        },
      ],
    },

    /* ─── Hebrews 6:19–20 — The Anchor and the Forerunner ────────────────── */
    {
      ref: 'Hebrews 6:19–20',
      title: 'An Anchor Sure and Stedfast, Within the Veil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              19,
              t('Which hope we have as an '),
              hg('anchor of the soul', 'h6-anchor-soul'),
              t(', both sure and stedfast, and which '),
              hy('entereth into that within the veil', 'h6-veil-holy'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-anchor-soul',
          html:
            'An anchor is what holds a ship in place when the sea rages. Your soul is the ship. Your hope is the anchor. When waves of doubt, despair, or fear threaten to pull you under, your hope in Christ holds you firm.',
        },
        {
          kind: 'greek',
          id: 'h6-agkura',
          title: 'Agkura — "Anchor"',
          script: 'ἄγκυρα',
          translit: '<strong>agkura</strong> · anchor; that which holds secure',
          description:
            'An anchor is what holds a ship in place when the sea rages. Your soul is the ship. Your hope is the anchor. When waves of doubt, despair, or fear threaten to pull you under, your hope in Christ holds you firm.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              20,
              t('Whither the '),
              hy('forerunner is for us entered', 'h6-forerunner-entered'),
              t(', even Jesus, made an high priest for ever after the order of Melchisedec.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'h6-forerunner-entered',
          html:
            'A forerunner is one who goes ahead to scout the way and report back. Jesus has entered within the veil, into God&apos;s very presence. He is your forerunner—He has gone first, and you will follow.',
        },
        {
          kind: 'greek',
          id: 'h6-prodromos',
          title: 'Prodromos — "Forerunner"',
          script: 'πρόδρομος',
          translit: '<strong>prodromos</strong> · one who runs before; a scout who goes ahead to secure the path',
          description:
            'A forerunner blazes the trail. He goes first through dangerous territory and returns to report: "The way is safe. Follow me." Jesus has gone before you through the veil into the very presence of God. You will follow.',
        },
        {
          kind: 'commentary',
          id: 'h6-veil-holy',
          html:
            'The veil in the temple separated the holy place from the most holy place, where God&apos;s presence dwelt. [res:met-tabernacle-veil] To "enter within the veil" is to enter God&apos;s sanctuary, His throne room. Your hope is not a distant wish. It reaches all the way into heaven itself, to the very place where Christ now sits.',
        },
        {
          kind: 'christ',
          id: 'h6-christ-forerunner',
          title: 'Christ Connection — The Forerunner Who Has Gone Before',
          html:
            'Jesus is not waiting for you in heaven as a distant hope. He has already entered. He is your forerunner. He pioneered the path through the veil for all who believe. Hebrews 4:14 reminds us: "Jesus, the Son of God," has "passed into the heavens." He is not left you as an orphan. He has gone ahead to secure your place. Your anchor is fastened to Him. Your hope follows where He has gone.',
        },
        {
          kind: 'commentary',
          id: 'h6-melchisedec',
          html:
            'Melchisedec appears only briefly in Genesis and the psalms—a mysterious figure who is king and priest at once, with no recorded genealogy or death. The author of Hebrews will spend chapters 7–10 unpacking how Jesus fulfills this order, how His priesthood is superior to the old covenant priesthood. For now, the point is simple: Christ is a High Priest. He is seated. He is praying for you.',
        },
        {
          kind: 'carry',
          html:
            'When life is turbulent—when you are drifting in dark waters, when doubt threatens, when fear seems to win—stop and remember where your anchor is fastened. It reaches into heaven. It touches the throne of God. It is fastened to Jesus, who is already there, holding it secure. You will not drift away. Your anchor holds. And the forerunner has already gone ahead to prepare the way for you to follow.',
        },
        {
          kind: 'reflection',
          id: 'h6-anchor-reach',
          prompt:
            'When storms come—doubt, loss, fear—where do you naturally look for stability? How would it change your day to remember that your hope is anchored in Christ within the veil?',
        },
        {
          kind: 'artwork',
          matchTitle: /anchor/i,
          caption: 'Hebrews 6:19 — The Anchor of Hope',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Which hope we have as an anchor of the soul, both sure and stedfast, and which entereth into that within the veil; Whither the forerunner is for us entered, even Jesus, made an high priest for ever after the order of Melchisedec.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 6 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis14-oath',
      kind: 'study',
      source: 'Sefaria',
      label: 'Genesis 14:19–20 — Melchisedec&apos;s Blessing',
      url: 'https://www.sefaria.org/Genesis.14.19-20',
      description: 'The blessing by Melchisedec that grounds God&apos;s oath to Abraham and foreshadows Christ&apos;s priesthood.',
    },
    {
      id: 'intertextual-psalm110-oath',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 110:4 ↔ Hebrews 6:17–20',
      url: 'https://intertextual.bible/text/psalms-110.4/hebrews-6.17',
      description: 'God&apos;s immutable oath about the eternal priest connects Genesis, Psalms, and Christ.',
    },
    {
      id: 'met-tabernacle-veil',
      kind: 'archaeology',
      source: 'The Met Museum',
      label: 'Sanctuary Vessels and the Temple Veil',
      url: 'https://www.metmuseum.org/art/collection/search/543995',
      description: 'Visual context for the veil that separated the Holy of Holies, central metaphor in Hebrews 6.',
    },
  ],

  hasHebrew: false,
};
