import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 15 — "Fear not, Abram; I am thy shield"
 *
 * This chapter contains two of the most theologically significant scenes in
 * the Old Testament: (1) Abram's faith counted for righteousness (v.6) — the
 * verse Paul builds his entire doctrine of justification on in Romans 4 and
 * Galatians 3; and (2) the covenant of pieces (vv.9–21) — God's self-curse
 * ceremony ratifying His promise, where God alone passes between the cut
 * animals, taking upon Himself the covenant penalty if the promise fails.
 */
export const GENESIS_15: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 15,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 15 },
  intros: [
    'Abram has left his homeland. He has been promised an heir and a land so vast it cannot be counted. But he is childless, and his adopted servant will inherit everything. The chapter opens with God saying something personal, something almost breathed: "Fear not, Abram: I am thy shield, and thy exceeding great reward." And then Abram does something simple — he believes God — and God counts that belief as righteousness. That single verse has shaped the entire Christian understanding of how we stand before God.',
    'But Abram asks for proof. He needs to see how the promise holds. So God takes him through a ceremony ancient shepherds knew well: the covenant of pieces. Abram cuts animals in half and lays them out. God fills the air with smoke and fire, and then does something no other god in the ancient world ever does — He passes alone between the pieces. In every covenant you make with a human, both parties walk the path. But here, God walks both paths. God binds Himself so completely to keep His word that if He fails, let Him be torn in pieces like the animals. And then God speaks a prophecy: Abram&apos;s descendants will be enslaved for 400 years, but they will come out with great substance. The chapter ends not with celebration, but with trust.',
  ],

  sections: [
    /* ─── Genesis 15:1–6 — Fear Not, Abram ───────────────────────────── */
    {
      ref: 'Genesis 15:1–6',
      title: 'Fear Not, Abram; I Am Thy Shield',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                t('After these things the word of the LORD came unto Abram in a '),
                hg('vision', 'c-vision'),
                t(', saying, '),
                hp('Fear not, Abram: I am thy shield, and thy exceeding great reward', 'christ-shield'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-vision',
          html:
            'Abram is afraid. He has just returned from war, from walking among nations mightier than his own, from the kind of power that moves armies and reshapes borders. And God does not begin with strategy or reassurance about military might. He begins with intimacy: <em>Fear not</em>. The first word a king speaks to his servant is not policy. It is a voice.',
        },
        {
          kind: 'christ',
          id: 'christ-shield',
          title: 'Christ Connection — Your Shield and Your Reward',
          html:
            'Abram cannot see how the promises hold. He needs protection and inheritance both. Jesus is Himself both: "the author and finisher of our faith" (Heb. 12:2), and the one "seated in the heavenly places, far above all principality, and power, and might, and dominion, and every name that is named" (Eph. 1:20–21). For the believer, Christ is the shield that stands between you and the chaos of a world that moves against you, and the "exceeding great reward" — the inheritance you have in Him (Eph. 1:14).',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 2,
              spans: [
                t('And Abram said, Lord GOD, '),
                hg('what wilt thou give me, seeing I go childless', 'c-childless'),
                t(', and the steward of my house is this Eliezer of Damascus?'),
              ],
            },
            {
              number: 3,
              spans: [t('And Abram said, Behold, to me thou hast given no seed: and, lo, one born in my house is mine heir.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-childless',
          html:
            'Abram is honest. He does not pretend the promise makes sense. He holds God&apos;s word and his own emptiness at the same time — the prayer of every person who has believed God for something they cannot see. The tension between God&apos;s word and the world&apos;s silence is where faith lives.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 4,
              spans: [
                t('And, behold, the word of the LORD came unto him, saying, '),
                hg('This shall not be thine heir', 'c-heir'),
                t('; but he that shall come forth out of thine own bowels shall be thine heir.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he brought him forth abroad, and said, '),
                t('Look now toward heaven, and tell the stars, if thou be able to number them'),
                t(': and he said unto him, So shall thy seed be.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heir',
          html:
            'God will not allow an adopted heir. The promise must run through Abram&apos;s own blood. The promise is not that Abram will have security — but that he will have a son. That is the thing that cannot happen. That is the thing God promises.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 6,
              spans: [
                t('And he '),
                hp('believed in the LORD', 'christ-faith-reckoned'),
                t('; and he '),
                hy('counted it to him for righteousness', 'hebrew-chashav'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chashav',
          title: 'Chashav — "reckoned, counted"',
          script: 'חָשַׁב',
          translit: '<strong>chashav</strong> · to count, reckon, account, esteem as',
          description:
            'This verb means to set something down in the ledger, to mark it as belonging in a certain account. Paul seized on this exact word in Romans 4:3 to explain how salvation works: your belief is marked, recorded, entered into God&apos;s book as if it were righteousness itself. The verb is the hinge of Christian theology.',
        },
        {
          kind: 'christ',
          id: 'christ-faith-reckoned',
          title: 'Christ Connection — Faith Counted as Righteousness',
          html:
            'Abram believed, and God reckoned it as righteousness. Paul quotes this verse twice — in Romans 4:3 and Galatians 3:6 — and builds the entire doctrine of justification by faith on these few words. The believer is not righteous by works; righteousness is reckoned to the believer&apos;s account through faith alone. And Paul identifies the "Seed" promised to Abram as Christ Himself: "Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ" (Gal. 3:16). Faith in Christ, recorded in Heaven as righteousness — that is how Abram stands. That is how we stand.',
        },
        {
          kind: 'carry',
          html:
            'You are probably keeping a ledger too — of your failures, your delays, the ways you have fallen short. And you are trying to make the numbers come out. But Genesis 15:6 says your belief itself is what gets recorded. Not your success. Not your accomplishment. Your faith. The moment you actually believe God about the thing He has promised you, something happens in His books that you cannot see. Let that stand.',
        },
        {
          kind: 'reflection',
          id: 'gen15-faith',
          prompt:
            'What is the Seed — the promise — that you are finding hard to believe God for? What would it mean to actually believe He will do it, before you see it?',
        },
      ],
    },

    /* ─── Genesis 15:7–11 — Abram Asks for Assurance ────────────────── */
    {
      ref: 'Genesis 15:7–11',
      title: 'Abram Asks for Assurance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 7,
              spans: [
                t('And he said unto him, I am the LORD that brought thee out of Ur of the Chaldees, to give thee '),
                hg('this land to inherit it', 'c-inherit'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he said, '),
                hg('Lord GOD, whereby shall I know that I shall inherit it?', 'c-know'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inherit',
          html:
            'God reminds Abram of rescue that already happened: <em>I brought thee out.</em> That is the opener for what God is about to do. Your past deliverance is God&apos;s way of saying <em>I have kept My word before.</em>',
        },
        {
          kind: 'commentary',
          id: 'c-know',
          html:
            'Abram has already believed and it has been reckoned as righteousness. But now he asks for something different — not faith, but <em>knowledge</em>. <em>Whereby shall I know?</em> He is not doubting God. He is asking for a sign. And God grants it. The kind God gives him is not a lightning flash from heaven. It is covenant.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 9,
              spans: [
                t('And he said unto him, '),
                hg('Take me an heifer of three years old, and a she goat of three years old, and a ram of three years old, and a turtledove, and a young pigeon', 'c-animals'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he took unto him all these, and '),
                hg('divided them in the midst, and laid each piece one against another', 'c-divided'),
                t(': but the birds divided he not.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And when the fowls came down upon the carcases, Abram '),
                hg('drove them away', 'c-drove'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-animals',
          html:
            'The ritual Abram performs was known throughout the ancient Near East. When two parties made a binding covenant, they would cut animals in half and walk between the pieces together. The ceremony meant: <em>if I break this oath, let what happened to these animals happen to me.</em> It is an unspeakably solemn act.',
        },
        {
          kind: 'commentary',
          id: 'c-divided',
          html:
            'Abram is not hesitant. He acts with the decisiveness of a man who knows what he is doing. He cuts the animals lengthwise and lays them on the ground. The birds — which do not die — remain whole.',
        },
        {
          kind: 'commentary',
          id: 'c-drove',
          html:
            'Abram keeps watch. He stays awake, warding off the scavengers, protecting the covenant pieces. This detail matters. Covenant is not passive. Abram is keeping vigil.',
        },
        {
          kind: 'carry',
          html:
            'Before God does His part in the ceremony, Abram does his. He shows up. He cuts. He watches. He stands guard. Faith is not passivity. It is the kind of active trust that says <em>I believe this is real, so I will show up and do what I can, and wait for God to do what only God can do.</em>',
        },
        {
          kind: 'reflection',
          id: 'gen15-covenant',
          prompt:
            'What is the covenant God is making with you — the promise you are guarding, the vigil you are keeping? What does it look like to actively trust while you wait?',
        },
      ],
    },

    /* ─── Genesis 15:12–16 — The Prophecy of Slavery and Exodus ────── */
    {
      ref: 'Genesis 15:12–16',
      title: 'The Prophecy: Four Hundred Years in Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 12,
              spans: [
                t('And when the sun was going down, a '),
                hy('deep sleep fell upon Abram', 'hebrew-tardemah'),
                t('; and, lo, an '),
                hp('horror of great darkness fell upon him', 'christ-burden'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tardemah',
          title: 'Tardemah — "deep sleep"',
          script: 'תַּרְדֵּמָה',
          translit: '<strong>tardemah</strong> · a deep sleep, a trance',
          description:
            'This is the same word used of Adam&apos;s sleep in Genesis 2:21, before the rib was taken and Eve was formed. It is not ordinary sleep — it is the kind of sleep God Himself brings, a kind of death-like state from which something new will be born.',
        },
        {
          kind: 'christ',
          id: 'christ-burden',
          title: 'Christ Connection — The Weight of the Promise',
          html:
            'Abram does not see the glory alone. First comes darkness — <em>a horror of great darkness.</em> The promise carries weight. And Abram must see the cost before he sees the glory. Paul writes of Christ: "He shall see of the travail of his soul, and shall be satisfied" (Isa. 53:11). The burden of covenant is seen in the darkness before the fire appears.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 13,
              spans: [
                t('And he said unto Abram, '),
                hg('Know of a surety that thy seed shall be a stranger in a land that is not theirs, and shall serve them; and they shall afflict them four hundred years', 'c-four-hundred'),
                t(';'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And also that nation, whom they shall serve, will I judge: and afterward shall they come out with '),
                hg('great substance', 'c-substance'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And thou shalt go to thy fathers in peace; thou shalt be '),
                hg('buried in a good old age', 'c-good-old-age'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But in the fourth generation they shall come hither again: for the '),
                hg('iniquity of the Amorites is not yet full', 'c-amorite-iniquity'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-four-hundred',
          html:
            'Abram is told: your children will be enslaved. Not metaphorically. Not in some distant way. Your own blood, afflicted for four centuries. The promise of the land comes with a dark road to get there. God does not hide the cost from Abram.',
        },
        {
          kind: 'commentary',
          id: 'c-substance',
          html:
            'But they will not leave empty-handed. They will come out with <em>great substance</em> — not just survival, but wealth. Not just escape, but deliverance with honor. The Exodus story makes this concrete: the Egyptians gave Israel "jewels of silver, and jewels of gold, and raiment" (Exod. 12:35). God does not ask His people to endure without vindicating them.',
        },
        {
          kind: 'commentary',
          id: 'c-good-old-age',
          html:
            'Abram himself will not see the slavery or the exodus. He will die an old man, at peace, secure in the promise even though he will not live to see it fulfilled. This is the definition of faith — to die believing for a thing you will not live to see.',
        },
        {
          kind: 'commentary',
          id: 'c-amorite-iniquity',
          html:
            'God does not act on a whim. The Amorites — the people living in the land — have time to repent. The judgment that will clear the land for Abram&apos;s descendants is not arbitrary. It will come only when the moral measure is full. This detail matters. God is not conquering the land for Abram&apos;s sake alone — He is clearing it because its inhabitants have turned from righteousness.',
        },
        {
          kind: 'carry',
          html:
            'If you are waiting for a promise, you may have to wait longer than you can see. Your children&apos;s children may enter what you will not. And in the meantime, the promise sustains you — not with the sight of it, but with the word of it. That is enough. Abram lived his whole life after this night knowing his children would suffer, knowing his grandchildren would be vindicated, knowing he would see none of it. And he died at peace. The secret is that the promise kept him the whole time.',
        },
        {
          kind: 'reflection',
          id: 'gen15-generations',
          prompt:
            'What promise are you holding that you may not live to see? How does it change your day today to trust that God will keep His word even if you do not see it?',
        },
      ],
    },

    /* ─── Genesis 15:17–21 — The Smoking Furnace and the Burning Lamp ── */
    {
      ref: 'Genesis 15:17–21',
      title: 'The Smoking Furnace and the Burning Lamp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 17,
              spans: [
                t('And it came to pass, that when the sun went down, and it was dark, behold a '),
                hg('smoking furnace, and a burning lamp that passed between those pieces', 'c-furnace-lamp'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-furnace-lamp',
          html:
            'God appears — not as two parties entering a covenant together, but alone. The <em>smoking furnace</em> is the terror of God, the holiness that consumes. The <em>burning lamp</em> is the presence of God, the light that leads. Both pass through the pieces. Both are God alone. This is unprecedented in ancient covenant. In every human covenant, both parties walk the path. But here, one walks alone.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 18,
              spans: [
                t('In the same day the LORD '),
                hp('made a covenant with Abram', 'christ-sealed-covenant'),
                t(', saying, Unto thy seed have I given this land, from the river of Egypt unto the great river, the river Euphrates:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('The Kenites, and the Kenizzites, and the Kadmonites,'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the Hittites, and the Perizzites, and the Rephaims,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the Amorites, and the Canaanites, and the Girgashites, and the Jebusites.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-karat-berit',
          title: 'Karat Berit — "to cut a covenant"',
          script: 'כָּרַת בְּרִית',
          translit: '<strong>karat</strong> berit · literally "to cut a covenant"; berit = covenant',
          description:
            'The Hebrew idiom for making a covenant is to cut it. The covenant is not signed or sealed like a document. It is enacted through the cutting of animals, through blood and death. God&apos;s promise to Abram is not a contract. It is a death. It is a covenant written in animal blood, and Abram will understand that something as real as death stands behind every word God has spoken.',
        },
        {
          kind: 'christ',
          id: 'christ-sealed-covenant',
          title: 'Christ Connection — The Cost of the Covenant',
          html:
            'In the ancient world, when a covenant was made by cutting animals, both parties walked between the pieces. But here, only God walks. Only God passes between the dead animals. God binds Himself to the covenant alone. And what does that mean? It means that if the covenant is broken, God Himself takes the curse. Two thousand years later, Paul writes: "Christ hath redeemed us from the curse of the law, being made a curse for us" (Gal. 3:13). On the cross, Christ stands where the cut animals lay. Christ is the one through whom the furnace and the lamp have passed. God in Christ takes the self-curse of the broken covenant. What humans cannot keep, Christ has kept in blood.',
        },
        {
          kind: 'carry',
          html:
            'God did not ask you to keep a covenant with Him. God made a covenant and sealed it Himself. He walked through the pieces alone. He took the penalty alone. That is not a partnership where you carry your half of the burden. That is rescue. The covenant that stands between you and God was ratified not by your faithfulness but by Christ&apos;s death. Let that word be enough.',
        },
        {
          kind: 'reflection',
          id: 'gen15-furnace',
          prompt:
            'The furnace and the lamp — the judgment and the mercy of God — passed through together. When you think of God&apos;s covenant with you in Christ, which do you feel more acutely? What would it mean to hold them both?',
        },
        {
          kind: 'artwork',
          matchTitle: /abram|abraham/i,
          matchArtist: /^(?!.*(?:sarah|hagar|family)).*covenant.*$/i,
          caption: 'Genesis 15:17–21 · The Covenant Sealed',
        },
        {
          kind: 'artwork',
          matchTitle: /abram|abraham/i,
          matchArtist: /(?:star)/i,
          caption: 'Genesis 15:5 · The Seed Like the Stars',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 15',
    quote:
      'Abram believed in the LORD; and He counted it to him for righteousness. God made a covenant with Abram and sealed it alone, taking upon Himself the curse if the promise ever fails.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 15 · Study Guide',
  },

  hasHebrew: true,
};
