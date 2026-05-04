import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 5 — Moses and Aaron bring Pharaoh the word from the Lord.
 * Pharaoh replies: "Who is the LORD, that I should obey his voice?"
 * He increases the burden on Israel — demanding bricks without straw.
 * The people turn on Moses. Moses turns on God.
 * A chapter on suffering between announcement and deliverance.
 */
export const EXODUS_5: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 12 },
  opener: {
    matchTitle: /Moses Demands Israel/i,
    caption: 'Exodus 5',
  },
  intros: [
    'Exodus 5 is the moment deliverance is announced—and everything gets worse. Moses and Aaron stand before Pharaoh with a direct command from the Lord: "Let my people go, that they may hold a feast unto me in the wilderness." Pharaoh responds with a single question that echoes through the centuries: "Who is the LORD, that I should obey his voice?"',
    'What follows is immediate punishment. The taskmasters increase the burden. Israel must gather straw for their own bricks—impossible labor with an unchanged quota. The people turn against Moses. Moses turns against God, crying out in the desert: "Wherefore hast thou so evil entreated this people?" The pattern is complete: deliverance announced, suffering increased, the deliverer abandoned, the deliverer questioning God. This pattern is not unique to Israel at the brick kilns. It will appear again, nearly identical, at a cross outside Jerusalem.',
  ],

  sections: [
    /* ─── Exodus 5:1–3 — The Demand ───────────────────────────────── */
    {
      ref: 'Exodus 5:1–3',
      title: 'The Demand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('And afterward Moses and Aaron went in, and told Pharaoh, '),
                hp('Thus saith the LORD God of Israel', 'christ-voice'),
                t(', '),
                hg('Let my people go', 'demand-go'),
                t(', that they may hold a feast unto me in the wilderness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'demand-go',
          html:
            'The demand is framed not as enslavement to escape, but as worship to attend. God is not railing against Pharaoh&apos;s cruelty—He is claiming His people for His own purposes[res:pharaoh-hardened]. From Pharaoh&apos;s throne room, the issue is not justice but authority: who owns these people?',
        },
        {
          kind: 'christ',
          id: 'christ-voice',
          title: 'Christ Connection — The Voice Pharaoh Does Not Recognize',
          html:
            'Pharaoh hears the demand and his reply is absolute: "Who is the LORD?" He does not recognize the voice. Two centuries later, the Pharisees would stand before Jesus and ask the same thing in different words: "By what authority doest thou these things?" (Matt. 21:23). The person standing before them claimed to be God&apos;s voice and God&apos;s messenger—and they, like Pharaoh, wanted nothing to do with it. Rejecting God&apos;s voice is ancient. It is also fatal[res:sefaria-exodus-5].',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 2,
              spans: [
                t('And Pharaoh said, '),
                hg('Who is the LORD', 'nescience'),
                t(', that I should obey his voice to let Israel go? I know not the LORD, neither will I let Israel go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nescience',
          html:
            'Pharaoh&apos;s statement is not philosophical—"Who is the LORD?" is an act of power. He is saying: I do not acknowledge this God. I will not obey Him. Your God&apos;s claim is irrelevant in my domain. This is rebellion stated plainly, with absolute confidence[res:egyptian-labor].',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('And they said, The God of the Hebrews hath met with us: let us go, we pray thee, three days&apos; journey into the desert, and sacrifice unto the LORD our God; lest he fall upon us with pestilence, or with the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'pleading-tone',
          html:
            'Notice the shift in tone. Moses and Aaron soften their language—"we pray thee," "lest he fall upon us." They are trying to persuade Pharaoh through appeal to self-interest. It will not work. You cannot negotiate with absolute refusal.',
        },
        {
          kind: 'carry',
          html:
            'When you have spoken God&apos;s truth and been met with "Who is the LORD?"—when the person in front of you refuses to acknowledge that anything outside their own will matters—you stand where Moses stood. That refusal is not confusion. It is choice.',
        },
        {
          kind: 'reflection',
          id: 'demand',
          prompt: 'Where have you spoken God&apos;s word to someone and felt it hit a wall of "I don&apos;t acknowledge that"? What happened in you then?',
        },
      ],
    },

    /* ─── Exodus 5:4–9 — The Harder Demand ───────────────────────────── */
    {
      ref: 'Exodus 5:4–9',
      title: 'The Burden Increases',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 4,
              spans: [
                t('And the king of Egypt said unto them, Wherefore do ye, Moses and Aaron, let the people from their works? get you unto your burdens.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'interruption-of-work',
          html:
            'Pharaoh dismisses them. What follows is not retaliation—it is administration. This is what injustice looks like in practical terms: not rage, but bureaucratic cruelty. Pharaoh does not even see them anymore. They are already forgotten.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 5,
              spans: [
                t('And Pharaoh said, Behold, the people of the land now are many, and ye make them rest from their burdens.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Pharaoh commanded the same day the '),
                hy('taskmasters', 'hebrew-netsav'),
                t(' of the people, and their '),
                hy('officers', 'hebrew-shoterim'),
                t(', saying,'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-netsav',
          title: 'Netsav — &ldquo;taskmasters&rdquo;',
          script: 'נֵצֶב',
          translit: '<strong>netsav</strong> · the stationed ones, the overseers',
          description:
            'The Egyptian overseers who stood over the Hebrew slaves and drove the work forward. In the Song of Moses, Israel will remember these men—and they will be drowned in the sea.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('Ye shall no more give the people straw to make brick, as heretofore: let them go and gather straw for themselves.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the tale of the bricks, which they did make heretofore, ye shall lay upon them; ye shall not diminish it: for they be idle; therefore they cry, saying, Let us go and sacrifice to our God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'quota-unchanged',
          html:
            'This is the cruelty: the quota stays the same. Israel must make the same number of bricks with the same speed—but now without the straw provided to them. Pharaoh is not punishing them for rebellion; he is proving that their God cannot protect them. Every brick they fail to make is evidence that the God of the Hebrews is powerless.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shoterim',
          title: 'Shoterim — &ldquo;officers&rdquo;',
          script: 'שֹׁטְרִים',
          translit: '<strong>shoterim</strong> · the officers, the midway authority',
          description:
            'The Hebrew officers who carried orders between Pharaoh&apos;s taskmasters and the people. They stand in the middle—belonging to neither side, trusted by neither.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 9,
              spans: [
                t('Let there more work be laid upon the men, that they may labour therein; and let them not regard vain words.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vain-words',
          html:
            'Pharaoh knows Moses&apos;s words are "vain"—useless, powerless in this place. He is confident that increased work will silence them. Suffering, he believes, is the answer to faith.',
        },
        {
          kind: 'carry',
          html:
            'When you announce good news and the world responds by making things harder, you are not outside God&apos;s design. You are in it. The increase of burden is not a sign that God has withdrawn—it is the sign that the old order is being directly challenged. Every impossible quota is an invisible war being fought.',
        },
        {
          kind: 'reflection',
          id: 'burden',
          prompt: 'When has speaking or living your faith made things harder, not easier? What did you believe about God in that season?',
        },
        {
          kind: 'artwork',
          matchTitle: /plague.*brick|brick.*brick|straw/i,
          caption: 'Exodus 5:7–9 · Bricks Without Straw',
        },
      ],
    },

    /* ─── Exodus 5:10–18 — The Work Continues ────────────────────────── */
    {
      ref: 'Exodus 5:10–18',
      title: 'The Impossible Labor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 10,
              spans: [
                t('And the taskmasters of the people went out, and their officers, and they spake to the people, saying, Thus saith Pharaoh, I will not give you straw.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Go ye, get you straw where ye can find it: yet not ought of your work shall be diminished.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'command-structure',
          html:
            'The command travels down the line: from Pharaoh to his taskmasters to his officers to the people. Each layer is powerless to change the order. None of them are evil men, necessarily—they are simply caught in the machine. This is how systemic oppression works.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 12,
              spans: [
                t('So the people were scattered abroad throughout all the land of Egypt to gather stubble instead of straw.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the taskmasters hasted them, saying, Fulfil your works, your daily tasks, as when there was straw.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the officers of the children of Israel, which Pharaoh&apos;s taskmasters had set over them, '),
                hg('were beaten', 'c-beaten'),
                t(', saying, Wherefore have ye not fulfilled your task in making brick both yesterday and to-day, as heretofore?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beaten',
          html:
            'The violence escalates. The Hebrew officers—the middle men—are beaten because the quota cannot be met. They are whipped for the impossible. This is where the machinery of oppression breaks flesh against flesh.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('Then the officers of the children of Israel came and cried unto Pharaoh, saying, Wherefore dealest thou thus with thy servants?'),
              ],
            },
            {
              number: 16,
              spans: [
                t('There is no straw given unto thy servants, and they say to us, Make brick: and, behold, thy servants are beaten; but the fault is in thine own people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'appeal-fails',
          html:
            'The officers appeal to reason. They lay out the logical contradiction: no straw, same quota, impossible task. Pharaoh will not hear it. You cannot appeal to justice before someone who is the source of injustice.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 17,
              spans: [
                t('But he said, '),
                hg('Ye are idle', 'c-idle'),
                t(': ye are idle: therefore ye say, Let us go and sacrifice to the LORD.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Go therefore now, and work; for there shall no straw be given you, yet shall ye deliver the tale of bricks.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-idle',
          html:
            'Pharaoh&apos;s diagnosis is final: laziness. Not his cruelty, not the contradiction of the quota—their laziness. He does not dialogue. He closes the door and sends them back to work. This is the posture of power that will not listen.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever been in a situation where the rules are impossible and the authority over you will not acknowledge it, where your reasonable appeal is met with blame—you have tasted what Israel tasted. The machinery grinds on, indifferent to logic. But machinery can break.',
        },
        {
          kind: 'reflection',
          id: 'labor',
          prompt: 'Where are you being asked to do the impossible, and what lies are you being told about whose fault that is?',
        },
      ],
    },

    /* ─── Exodus 5:19–23 — Israel Turns on Moses ─────────────────────── */
    {
      ref: 'Exodus 5:19–23',
      title: 'The People Accuse the Deliverer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 19,
              spans: [
                t('And the officers of the children of Israel did see that they were in evil case, after it was said, '),
                hg('Ye shall not minish ought from your bricks of your daily task', 'c-evil-case'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-evil-case',
          html:
            'The Hebrew officers see the trap clearly. They understand what has happened: announcing freedom made things worse. The deliverance was announced, and the burden increased. This is not how salvation is supposed to work.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 20,
              spans: [
                t('And they met Moses and Aaron, who stood in the way, as they came forth from Pharaoh:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And they said unto them, '),
                hp('The LORD look upon you, and judge', 'christ-judgment-deferred'),
                t('; because ye have made us to '),
                hg('stink before Pharaoh', 'c-stink'),
                t(', and in the sight of his servants, to put a sword in their hand to slay us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stink',
          html:
            'To "stink" before someone is to be odious to them—worthless, repulsive. Israel is saying: You have made us contemptible. You brought God&apos;s word, and now we are marked for death. Your faith has killed us.',
        },
        {
          kind: 'christ',
          id: 'christ-judgment-deferred',
          title: 'Christ Connection — When Deliverance Increases Suffering',
          html:
            'The accusations against Moses echo centuries later in the passion narrative. Luke records the disciples on the road to Emmaus saying, "We trusted that it had been he which should have redeemed Israel" (Luke 24:21)—they trusted, and He was crucified. Matthew records Jesus on the cross: "My God, my God, why hast thou forsaken me?" (Matt. 27:46). The pattern is identical: deliverance announced, suffering increased, the deliverer abandoned, the deliverer crying out to God. It is the pattern of true redemption. Suffering between announcement and fulfillment is not a sign that God has failed—it is the structure of the gospel.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 22,
              spans: [
                t('And Moses returned unto the LORD, and said, '),
                hp('Lord, wherefore hast thou so evil entreated this people', 'christ-anguish'),
                t('? why is it that thou hast sent me?'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For since I came to Pharaoh to speak in thy name, he hath done evil to this people; neither hast thou delivered thy people at all.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'moses-anguish',
          html:
            'Moses now does what the people did—he accuses God. He is alone in the wilderness, crying out to the God who sent him. He has obedience and nothing else. His obedience has made things worse. He is not asking for explanation; he is asking why God would abandon him.',
        },
        {
          kind: 'christ',
          id: 'christ-anguish',
          title: 'Christ Connection — The Cry of the Deliverer',
          html:
            'This is the second Christ pattern in the chapter: not just the people&apos;s accusation, but the deliverer&apos;s anguish. Jesus in Gethsemane: "O my Father, if it be possible, let this cup pass from me" (Matt. 26:39). Jesus on the cross: "My God, my God, why hast thou forsaken me?" (Matt. 27:46). Both the abandonment and the cry are real. Both are inside the redemptive work. God does not remove His voice to comfort the deliverer—the deliverer must trust that the deliverance is real even when he cannot see it.',
        },
        {
          kind: 'carry',
          html:
            'You stand at the brick kilns if you have spoken God&apos;s truth and been met with accusation—if those you came to help now believe you are the reason they suffer. That ground is holy. The deliverance may be invisible. Your obedience may feel useless. But you are not alone—you are in the pattern. God does not erase the suffering or rush the timeline. He stands with the deliverer in the anguish.',
        },
        {
          kind: 'reflection',
          id: 'moses-cry',
          prompt: 'Where have you obeyed God and seen things get harder? What would it take to trust that the deliverance is still real?',
        },
        {
          kind: 'artwork',
          matchTitle: /lament|egyptian|slavery|moses.*alone|wilderness|cry/i,
          caption: 'Exodus 5:22–23 · Moses Cries Out to God',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 5',
    quote:
      'The deliverance is announced—and everything gets harder. But suffering between announcement and fulfillment is not a sign that God has failed. It is the structure of the gospel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 5 · Study Guide',
  },


  resources: [
    {
      id: 'pharaoh-hardened',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Pharaoh: Hardened Heart',
      url: 'https://www.bibleodyssey.org/dictionary/pharaoh/',
      description: 'Study of Pharaoh&apos;s role and the theology of hardening.',
    },
    {
      id: 'egyptian-labor',
      kind: 'archaeology',
      source: 'Penn Museum',
      label: 'Egyptian Labor Systems',
      url: 'https://www.penn.museum/sites/expedition/',
      description: 'Archaeological evidence on taskmasters and forced labor.',
    },
    {
      id: 'sefaria-exodus-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 5 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.5',
      description: 'The Hebrew text of Exodus 5 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
