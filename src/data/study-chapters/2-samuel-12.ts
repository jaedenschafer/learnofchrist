import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 12 — Nathan Confronts David
 *
 * The prophet Nathan arrives at the king's palace with a parable — a rich man,
 * a poor man, and a stolen lamb. David's anger kindles. "The man that hath done
 * this thing shall surely die." And then Nathan speaks four words that reshape
 * a kingdom: "Thou art the man."
 *
 * This is the Bible's anatomy of repentance — how a king hears his own sin
 * spoken back to him, confesses it wholly, bears the weight of consequence,
 * and finds grace working still. Psalm 51, one of Scripture's most profound
 * prayers, was written in this room.
 */
export const SAMUEL_2_12: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 12,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 19 },
  opener: {
    matchTitle: /Nathan/i,
    caption: '2 Samuel 12',
  },
  intros: [
    "The narrative of David&apos;s life takes a turn in chapter 12 that will echo through the rest of his reign. His sin with Bathsheba — the murder of Uriah, the taking of another man&apos;s wife — has been hidden. The kingdom moves on. But God sees, and He sends a prophet.",
    "What follows is one of the Bible&apos;s clearest portraits of confrontation, confession, and the mercy that remains even when consequences cannot be undone. David is about to meet himself in a mirror held up by a parable, and the mirror will not lie.",
  ],

  bottomShare: {
    label: 'Share 2 Samuel 12',
    quote:
      'Nathan the prophet confronted King David with his hidden sin through a parable about a stolen lamb. David\'s confession — "I have sinned against the Lord" — opens the way to forgiveness, though the consequences remain. And yet grace works still.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 12 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-nathan-parable',
      kind: 'study',
      source: 'Sefaria',
      label: 'Nathan&apos;s Parable and Confession',
      url: 'https://www.sefaria.org/2_Samuel.12',
      description: 'The prophet Nathan&apos;s parable that confronts David and leads to his confession of sin.',
    },
    {
      id: 'bible-odyssey-solomon-birth',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Solomon: Son of David and Bathsheba',
      url: 'https://www.bibleodyssey.org/dictionary/solomon/',
      description: 'Solomon&apos;s birth as God&apos;s chosen son to succeed David as Israel&apos;s next king.',
    },
    {
      id: 'intertextual-son-covenant',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'God&apos;s Promise of a Faithful Son',
      url: 'https://intertextual.bible/text/2-samuel-7',
      description: 'God&apos;s promise that David&apos;s son will build the temple and his dynasty will be eternal.',
    },
  ],

  sections: [
    /* ─── 2 Samuel 12:1–6 — Nathan's Parable ──────────────────────────── */
    {
      ref: '2 Samuel 12:1–6',
      title: 'A Story About a Stolen Lamb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord sent '),
                hg('Nathan', 'c-nathan'),
                t(' unto David. And he came unto him, and said unto him, There were two men in one city; the one rich, and the other poor.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nathan',
          html:
            'Nathan is a prophet whose name means "He gave." He is not a priest, not a member of the official religious class — he is a man to whom God has spoken, and he comes to the palace to speak. This is the second time in David\'s life a prophet has come to him. But this time, David is not listening for approval. He is about to hear something he does not want to hear.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 2,
              spans: [
                t('The rich man had exceeding many flocks and herds: But the poor man had nothing, save one little '),
                hy('ewe lamb', 'hebrew-kivshah'),
                t(', which he had bought and nourished up: it grew up together with him, and with his children; it did eat of his own meat, and drank of his own cup, and lay in his bosom, and was unto him as a daughter.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kivshah',
          title: 'Kivshah — The Ewe Lamb',
          script: 'כִּבְשָׂה',
          translit: '<strong>Kivshah</strong> · A female lamb; tenderness',
          description:
            'The Hebrew word emphasizes the lamb\'s smallness, femininity, tenderness. Not a valuable animal — a beloved one. Nathan does not describe a valuable asset. He describes an intimate bond. The lamb eats from the poor man\'s plate, drinks from his cup, sleeps in his lap, and is to him "as a daughter." This is not commerce. This is love.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 3,
              spans: [
                t('And there came a traveller unto the rich man, and he spared to take of his own flock and of his own herd, to dress for the wayfaring man that was come unto him; but took the poor man\'s lamb, and dressed it for the man that was come to him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spare',
          html:
            'The rich man "spared" to take from his own flock. He refused the courtesy expected of hospitality — to give from his own abundance. Instead, he took from the poor man. Not because he needed it. Because he could. Because power answers to no one[res:sefaria-nathan-parable][res:bible-odyssey-solomon-birth][res:intertextual-son-covenant].',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('And David\'s anger was greatly kindled against the man; and he said to Nathan, '),
                hg('As the Lord liveth', 'c-oath'),
                t(', the man that hath done this thing shall surely die: And he shall restore the lamb fourfold, because he did this thing, and because he had no pity.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oath',
          html:
            'David speaks as a judge — with perfect clarity about what justice demands. His anger is not the anger of a corrupt king. It is the anger of a man who sees power abused, the defenseless robbed, and he sentences the criminal to death and quadruple restitution. He is righteous here. He does not yet know he is sitting in judgment on himself.',
        },
        {
          kind: 'carry',
          html:
            'When we see injustice — the powerful preying on the weak, taking what is not theirs, showing no mercy — we are often quick to pronounce judgment. We see clearly what should be done. But most of us, if we are honest, are also capable of the very sin we condemn in others. The difference is usually one of opportunity and circumstance, not of character. David\'s anger here is righteous. But his own hands are not clean.',
        },

        {
          kind: 'reflection',
          id: 'own-judgment',
          prompt:
            'What sin do you find yourself most quick to judge in others? Can you trace, with honesty, a place in your own life where the same temptation has whispered to you?',
        },
      ],
    },

    /* ─── 2 Samuel 12:7–12 — "Thou Art the Man" ──────────────────────────── */
    {
      ref: '2 Samuel 12:7–12',
      title: 'Thou Art the Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('And Nathan said to David, '),
                hp('Thou art the man', 'c-thou-art'),
                t('. Thus saith the Lord God of Israel, I anointed thee king over Israel, and I delivered thee out of the hand of Saul;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thou-art',
          html:
            '"Thou art the man." Four words. The most piercing words in Scripture. David has just pronounced death on the thief, and now Nathan turns the mirror around. The rich man is not some imagined criminal in a distant city. It is the king himself. The lamb is not an abstraction. It is Uriah\'s wife, taken, dressed, consumed.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('And I delivered thee out of the hand of Saul; And I gave thee thy master\'s house, and thy master\'s wives into thy bosom, and gave thee the house of Israel and of Judah; and if that had been too little, I would moreover have given unto thee such and such things.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bounty',
          html:
            'God recounts what He has given David — not just the throne, but protection, the house of Saul, even Saul\'s wives. The Lord is saying: You did not need to take. Everything has been yours. I gave it to you. And if this was not enough, I would have given you more. The sin is not born of necessity. It is born of appetite.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('Wherefore hast thou '),
                hg('despised the commandment of the Lord', 'c-despised'),
                t(', to do evil in his sight? thou hast killed Uriah the Hittite with the sword, and hast taken his wife to be thy wife, and slain him with the sword of the children of Ammon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-despised',
          html:
            'Nathan names the sin: adultery. Murder. The taking of another man\'s wife. Uriah was not killed in battle by accident — he was put in the forefront of the battle, abandoned to die. His blood is on David\'s hands. God does not describe this as a moment of passion. He calls it despising God\'s commandment.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 8,
              spans: [
                t('Now therefore the sword shall never depart from thine house; because thou hast '),
                hy('despised me', 'c-despised-me'),
                t(', and hast taken the wife of Uriah the Hittite to be thy wife.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Thus saith the Lord, Behold, I will raise up evil against thee out of thine own house, and I will take thy wives before thine eyes, and give them unto thy neighbour, and he shall lie with thy wives in the sight of this sun.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For thou didst it secretly: but I will do this thing before all Israel, and before the sun.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-despised-me',
          html:
            'The consequences are named. The sword will never leave David\'s house. His own family will turn against him. His wives will be taken publicly. What David did in darkness will be exposed in light. This is not arbitrary punishment. It is symmetry: as David acted in secret, so God will act in the sight of the sun. As David took another man\'s wife, so his wives will be given to another. The consequence is not forgiveness deferred. It is forgiveness purchased at a price.',
        },
        {
          kind: 'christ',
          id: 'christ-man',
          title: 'Christ Connection — He Became the Man',
          html:
            'When David hears "Thou art the man," he has nowhere to run. He is the thief, the murderer, the one who deserves death. Centuries later, on a cross outside Jerusalem, Jesus will say something similar — not to condemn, but to redeem. He will take upon Himself the sin that every reader of this story recognizes in themselves. Isaiah saw it: "He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed" (Isaiah 53:5). Jesus became "the man" — not the man who took what was not his, but the man who bore the penalty that was ours. He stepped into David\'s place. He steps into ours. And His confession — "I have poured out my soul" — becomes our confession too. What David says to the Lord, we can say: the Lord has put away our sin, though the mercy it buys us is eternal, and the consequences it interrupts pass away.',
        },
      ],
    },

    /* ─── 2 Samuel 12:13 — The Confession ──────────────────────────────── */
    {
      ref: '2 Samuel 12:13',
      title: 'I Have Sinned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 13,
              spans: [
                t('And David said unto Nathan, '),
                hg('I have sinned against the Lord', 'c-confess'),
                t('. And Nathan said unto David, The Lord also hath put away thy sin; thou shalt not die.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-confess',
          html:
            'David does not defend himself. He does not explain. He does not minimize. He simply says: "I have sinned against the Lord." The confession is total. And Nathan, in that moment, speaks God\'s response: the Lord has put away thy sin. You shall not die. The death sentence David pronounced on the rich man is lifted from David himself.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-chatati',
          title: 'Chatati — I Have Sinned',
          script: 'חָטָאתִי',
          translit: '<strong>Chatati</strong> · I have sinned; I have missed the mark',
          description:
            'The Hebrew root for "sin" is to miss the mark, to fall short, to err from the path. David\'s confession is complete. And his name — David, meaning "beloved" — becomes the name of a man who was loved by God even when he had erred most deeply. The confession of sin becomes itself a kind of righteousness. Psalm 51, written in this moment, will become the prayer of every sinner who has heard these same four words turned toward themselves: "Thou art the man."',
        },

        {
          kind: 'carry',
          html:
            'There is a space between hearing your own sin named and confessing it. David occupied that space for a long time — months, perhaps — while Uriah lay dead and Bathsheba carried their child. But when the mirror is held up, something breaks open. The confession comes not because David is forced to it, but because he suddenly cannot hide from it anymore. God has seen him. And when he admits it — simply, without excuse — the response he receives is not judgment. It is grace. "The Lord also hath put away thy sin."',
        },

        {
          kind: 'reflection',
          id: 'confess',
          prompt:
            'Is there a sin you have been hiding from — something you know is wrong but have not yet named aloud, even to God? What would it take for you to make David\'s confession: "I have sinned"?',
        },
      ],
    },

    /* ─── 2 Samuel 12:14–18 — The Child Sickens and Dies ──────────────── */
    {
      ref: '2 Samuel 12:14–18',
      title: 'The Child That Was Born Unto Thee Shall Surely Die',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 14,
              spans: [
                t('Howbeit, because by this deed thou hast given great occasion to the enemies of the Lord to blaspheme, the child also that is born unto thee shall surely '),
                hg('die', 'c-child-death'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-child-death',
          html:
            'David\'s sin is forgiven. His life is spared. But the consequence remains. The child born to him and Bathsheba will die. This is not punishment for the sin — it is the shape that sin took in the world. Uriah\'s child was taken from him. Now David\'s child will be taken. The symmetry is not vindictive. It is how the world works when power and lust collide: others pay the price.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('And Nathan departed unto his house. And the Lord struck the child that Uriah\'s wife bare unto David, and it was very sick.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('David therefore besought God for the child; and David '),
                hg('fasted', 'c-fast'),
                t(', and went in, and lay all night upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fast',
          html:
            'David does not accept the sentence. He prays. He fasts. He lies on the earth — a posture of mourning, of supplication, of a man who has placed himself lower than the dust. For seven days, the king of Israel lies on the ground, begging God for the life of his child.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 17,
              spans: [
                t('And the elders of his house arose, and went to him, to raise him up from the earth: but he would not, neither did he eat bread with them.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And it came to pass on the seventh day, that the child died. And the servants of David feared to tell him that the child was dead: for they said, Behold, while the child was yet alive, we spake unto him, and he would not hearken unto our voice: how will he then vex himself, if we tell him that the child is dead?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-child-death-grief',
          html:
            'The servants are afraid to tell David. They assume that when the child dies, David\'s grief will be uncontainable — that a king who would not eat, who lay on the earth for seven days, will break entirely. But they do not yet know what David has learned: that God hears, that sin can be forgiven even when consequences remain, and that a man can survive the loss of what he loves most.',
        },
      ],
    },

    /* ─── 2 Samuel 12:19–23 — I Shall Go to Him ──────────────────────── */
    {
      ref: '2 Samuel 12:19–23',
      title: 'I Shall Go to Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 19,
              spans: [
                t('But when David saw that his servants whispered, David perceived that the child was dead: therefore David said unto his servants, Is the child dead? And they said, He is dead.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Then David arose from the earth, and '),
                hg('washed, and anointed himself', 'c-rise'),
                t(', and changed his apparel, and came into the house of the Lord, and worshipped: then he came to his own house; and when he required, they set bread before him, and he did eat.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rise',
          html:
            'David rises. He cleans himself. He anoints himself — a sign of restored dignity. He goes to the house of the Lord and worships. And he eats. This is not the behavior of a man in despair. This is the behavior of a man who has moved through grief and found something on the other side of it — not healing, not acceptance, but acceptance of what cannot be changed, and a choice to continue living.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 21,
              spans: [
                t('Then said his servants unto him, What thing is this that thou hast done? thou didst fast and weep for the child, while it was alive; but when the child was dead, thou didst rise and eat bread.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And he said, '),
                hg('While the child was yet alive, I fasted and wept', 'c-hope'),
                t(': for I said, Who can tell whether God will be gracious to me, that the child may live?'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But now he is dead, wherefore should I fast? '),
                hp('can I bring him back again? I shall go to him, but he shall not return to me', 'c-go-to-him'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hope',
          html:
            'David explains himself to the confused servants. While the child lived, there was a possibility — that God might yet be gracious, that the child might live. So David fasted and wept, not in acceptance of loss, but in hope against hope. But now the child is dead. The prayer has been answered "no." And David\'s response is not despair, but acceptance of what is.',
        },
        {
          kind: 'commentary',
          id: 'c-go-to-him',
          html:
            'And then David says something extraordinary: "I shall go to him, but he shall not return to me." This is one of the first hints in Scripture of resurrection, of life beyond death. David is saying: I cannot bring my child back from the dead. But one day, I will go to where he is. I will see him again. This is not the language of permanent separation. It is the language of hope.',
        },
        {
          kind: 'christ',
          id: 'resurrection-hope',
          title: 'Christ Connection — Hope Beyond Death',
          html:
            'David\'s quiet statement — "I shall go to him" — is not explained by the law of Moses or the historical tradition David would have known. It reads like a hope given to him by God in that moment of grief. Later, Jesus will make it explicit: "I go to prepare a place for you… that where I am, there ye may be also" (John 14:2–3). And He will show it to be true by rising from the dead Himself. The mother who loses a child, the husband who loses his wife, the friend who loses a friend — they can hear in David\'s words a promise: death is not final. Separation is not permanent. "I shall go to him."',
        },

        {
          kind: 'carry',
          html:
            'You may be carrying a loss that will not be undone in this life — a child gone, a marriage broken, a dream that will not come true. The world tells you to move on, to accept, to find meaning in what remains. But David\'s words point to something else: acceptance of the loss does not mean acceptance that the loss is final. David eats bread. David worships. David continues to live — not because the wound is healed, but because he knows that one day, "I shall go to him." The resurrection hope is not a cure for grief. It is a frame for it. And it changes everything.',
        },

        {
          kind: 'reflection',
          id: 'shall-go',
          prompt:
            'David faced the loss of his child with fasting and prayer, then with the quiet assertion that he would one day go to his child. What loss are you carrying? What would it mean for you to hope, as David did, that death is not final?',
        },
      ],
    },

    /* ─── 2 Samuel 12:24–25 — Solomon Born; God Loves Him ──────────────── */
    {
      ref: '2 Samuel 12:24–25',
      title: 'Jedidiah — Beloved of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 24,
              spans: [
                t('And David comforted Bathsheba his wife, and went in unto her, and lay with her: and she bare a son, and he called his name '),
                hy('Solomon', 'hebrew-solomon'),
                t('. And the Lord loved him;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And sent by the hand of Nathan the prophet; and he called his name '),
                hy('JEDIDIAH', 'hebrew-jedidiah'),
                t(', because of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-solomon',
          title: 'Solomon — Shalom-on (Peace)',
          script: 'שְׁלֹמֹה',
          translit: '<strong>Solomon</strong> · From "shalom," peace',
          description:
            'Solomon\'s name means peace. He is born in the aftermath of judgment, after consequence has fallen, after David has confessed and grieved. He is the child of sin — born to David and Bathsheba after Uriah\'s death — yet he is also the child of mercy. The name itself declares that even this child, born in the shadow of transgression, represents peace restoring.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-jedidiah',
          title: 'Yedidyah — Beloved of the Lord',
          script: 'יְדִידְיָה',
          translit: '<strong>Yedidyah</strong> · Loved of Yah; God\'s beloved',
          description:
            'But Solomon is also given a second name by God through Nathan the prophet: Jedidiah, "Beloved of the Lord." This name is not given to the child of David\'s power or David\'s ambition. It is given to the child born out of David\'s humiliation — the child who belongs to the Lord in a way that speaks of grace. The child of sin becomes the beloved of God. The grace name.',
        },

        {
          kind: 'commentary',
          id: 'c-loved',
          html:
            'It is striking that God Himself sends word through Nathan to name this child Jedidiah. David has just confessed his sin. The child born from that sin has died. And now a new son is born — and God names him "Beloved of the Lord." This is not spite or irony. This is mercy working through the wreckage of sin. Solomon will become a king of wisdom and power, and his very existence declares that God is working with, not against, a repentant man.',
        },

        {
          kind: 'christ',
          id: 'beloved-son',
          title: 'Christ Connection — My Beloved Son',
          html:
            'Years later, when John baptizes Jesus at the Jordan, a voice comes from heaven: "This is my beloved Son, in whom I am well pleased" (Matt. 3:17). The same voice that named Solomon Jedidiah names Jesus beloved. But the resonance goes deeper. Jesus is the son of the woman at the well, the son of the tax collector, the son born in the shadow of human sin and failure. He is called "beloved" not in spite of His compassion for sinners, but because of it. Solomon was the beloved child born after David\'s greatest transgression. Jesus is the beloved Son born into a world consumed by sin — to be the mercy that sin could not exhaust, the love that no transgression could diminish.',
        },

        {
          kind: 'carry',
          html:
            'In moments when you feel you have failed beyond recovery, when you have named your sin and seen its cost, it is possible to believe that you are diminished forever — that the best has passed, that what comes next is only consequence and decline. But David\'s life speaks differently. Out of that moment of deepest shame, a son is born — not a son who erases the sin or makes it "okay," but a son who is nevertheless loved by the Lord, who becomes a blessing, who carries forward the promise. Your repentance does not restore what was lost. But it does open the way to grace working still.',
        },

        {
          kind: 'reflection',
          id: 'jedidiah',
          prompt:
            'David saw grace work in the life of Solomon, the child born after his greatest failure. Where in your life do you see grace working not in spite of failure, but through it?',
        },
      ],
    },
  ],
};
