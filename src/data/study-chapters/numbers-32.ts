import { hp, hy, hg, t, type RichChapterContent } from './types';

export const NUMBERS_32: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 32,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 12 },
  intros: [
    'The conquest of the land east of Jordan is nearly complete. Reuben, Gad, and half of Manasseh have seen the territory they conquered—lush grasslands, perfect for cattle. They approach Moses with a request: let us settle here. We will not cross the Jordan with the rest of Israel.',
    'Moses is furious. This looks exactly like the spies of Numbers 13—men looking at the promise and deciding it&apos;s too hard, choosing comfort over covenant. The three tribes negotiate: our warriors will fight at your side in the conquest of Canaan itself. We&apos;ll leave our families and flocks here, but we&apos;ll fight your battles. Only then can we return home. Moses agrees, but warns: "Be sure your sin will find you out" (v. 23). The condition is not a threat—it&apos;s a promise that faithfulness to your word matters to God.',
    'The chapter teaches that promises made to a community bind individual choices. The eastern land WAS the Lord&apos;s gift, good and real. But timing matters. Settling early, before the work is finished, breaks covenant with your brothers.',
  ],

  sections: [
    /* ─── The Request: Seeing and Wanting ─────────────────────────────── */
    {
      ref: 'Numbers 32:1–5',
      title: 'The Temptation of the Eastern Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the children of Reuben and the children of Gad had a very great multitude of cattle: and when they saw the land of Jazer, and the land of Gilead, that, behold, '),
                hg('the place was suitable for cattle', 'c-cattle-land'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('The children of Gad and the children of Reuben came and spake unto Moses, and to Eleazar the priest, and unto the princes of the congregation, saying,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Ataroth, and Dibon, and Jazer, and Nimrah, and Heshbon, and Elealeh, and Shebam, and Nebo, and Beon,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Even the country which the Lord smote before the congregation of Israel, '),
                hg('is a land for cattle', 'c-good-land'),
                t(', and thy servants have cattle:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Wherefore, said they, if we have found grace in thy sight, let this land be given unto thy servants for a possession, and '),
                hp('bring us not over Jordan', 'christ-before-work'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cattle-land',
          html:
            'The land they see is genuinely good—not a mirage, not a temptation born of deception. It is objectively suited for pastoral life, the livelihood these tribes know best. God had conquered it for Israel. So far, their logic is sound.',
        },
        {
          kind: 'commentary',
          id: 'c-good-land',
          html:
            'The tribes are not asking for something God has not given. The Lord Himself smote the kings of this land before them. What they want is actually within the promise. The problem is not what they want, but when they want it, and whether they want it instead of the work the community still faces.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nachal',
          title: 'Nachalah — &ldquo;inheritance, possession&rdquo;',
          script: 'נַחֲלָה',
          translit: '<strong>nachalah</strong> · inheritance, land-tenure, what one possesses for generations',
          description:
            'The word carries the weight of covenant. An inheritance is not a privilege you earn or revoke—it is a birthright, a place you hold for your children. The tribes invoke this language because settling land is a covenant act, not a business transaction.',
        },
        {
          kind: 'carry',
          html:
            'You see something good: a relationship that feels safe instead of demanding, work that pays better instead of requiring growth, a life that is easier instead of calling you higher. The thing you want is good—that is precisely what makes the temptation subtle. The sin is not in wanting it, but in wanting it *instead* of faithfulness to something larger than yourself.',
        },
        {
          kind: 'reflection',
          id: 'wanting',
          prompt: 'What good thing are you tempted to settle for early, before the harder work of your calling is done?',
        },
      ],
    },

    /* ─── Moses&apos; Anger: The Echo of Numbers 13 ──────────────────────────── */
    {
      ref: 'Numbers 32:6–15',
      title: 'The Pattern of Unfaith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 6,
              spans: [
                t('And Moses said unto the children of Gad and to the children of Reuben, Shall your brethren go to war, and shall ye sit here?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And wherefore discourage ye the heart of the children of Israel from going over into the land which the Lord hath given them?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Thus did your fathers: when I sent them from Kadesh-barnea to see the land, behold, '),
                hg('they discouraged the heart of the children of Israel', 'c-spies-echo'),
                t(', that they went not into the land which the Lord had given them.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the Lord&apos;s anger was kindled the same time, and he sware, saying,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Surely none of the men that came up out of Egypt, from twenty years old and upward, shall see the land which I sware unto Abraham, unto Isaac, and unto Jacob; because they have not wholly followed me:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num32-tribes-east',
          html:
            'Reuben and Gad ask to settle east of the Jordan. Moses hears it as desertion — a repeat of the spies who refused to enter. The next verses test whether their answer can hold.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 11,
              spans: [
                t('Save Caleb the son of Jephunneh the Kenezite, and Joshua the son of Nun; for they wholly followed the Lord.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the Lord&apos;s anger was kindled against Israel, and he made them wander in the wilderness forty years, until all the generation, that had done evil in the sight of the Lord, was consumed.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And, behold, ye are risen up in your fathers&apos; stead, an increase of sinful men, to augment yet the fierce anger of the Lord toward Israel.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For if ye turn away from after him, he will yet again leave you in the wilderness; and ye shall destroy all this people.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And they came near unto him, and said, We will build sheepfolds here for our cattle, and cities for our little ones:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spies-echo',
          html:
            'Moses draws the connection: your fathers discouraged Israel from entering the promised land (Num. 13). That refusal cost a generation forty years in the wilderness. Now, he sees the same pattern—tribes saying, in effect, "We&apos;ll sit this one out." The danger is not their cattle or their land request. The danger is that visible hesitation weakens the courage of the whole assembly.',
        },
        {
          kind: 'christ',
          id: 'christ-before-work',
          title: 'Christ Connection — Finishing the Work',
          html:
            'In Gethsemane, Jesus prayed, "Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done" (Luke 22:42). He did not settle on this side of Jordan. He did not ask to return home before the work was finished. Hebrews 10:24–25 echoes the same principle: "Let us consider one another to provoke unto love and to good works: not forsaking the assembling of ourselves together, as the manner of some is." The call is not to abandon your own life—it is to not abandon your brothers in their war.',
        },
        {
          kind: 'carry',
          html:
            'When you step back from a commitment you made to a community, others sense it. A youth group that&apos;s supposed to go on a mission trip loses heart when two families bail. A church plant loses momentum when a founding member decides to attend elsewhere. A marriage falters when one spouse checks out. It is not always visible—but community watches. The tribes do not understand, yet, that their visible commitment to the conquest is what the rest of Israel needs to see.',
        },
        {
          kind: 'reflection',
          id: 'hesitation',
          prompt: 'What commitment to your community are you tempted to downshift on, and what would it do to those watching?',
        },
      ],
    },

    /* ─── The Negotiation: Covenant Made ──────────────────────────────── */
    {
      ref: 'Numbers 32:16–27',
      title: 'The Promise, Restated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 16,
              spans: [
                t('And they came near unto him, and said, We will build sheepfolds here for our cattle, and cities for our little ones:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But we ourselves will go ready armed before the children of Israel, until we have brought them unto their place: and our little ones shall dwell in the fenced cities because of the inhabitants of the land.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('We will not return unto our houses, until the children of Israel have inherited every man his inheritance.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('For we will not inherit with them on yonder side Jordan, or forward; because our inheritance is fallen to us on this side Jordan eastward.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'numbers_32_v16-23',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 20,
              spans: [
                t('And Moses said unto them, '),
                hg('If ye will do this thing', 'c-condition'),
                t(', if ye will go armed before the Lord to war,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And will not return unto your houses, until the children of Israel have inherited the land which the Lord your God giveth them:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Then afterward ye shall return, and be guiltless before the Lord, and before Israel; and this land shall be your possession before the Lord.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But '),
                t('if ye will not do so, behold, ye have sinned against the Lord: and be sure your sin will find you out'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-condition',
          html:
            'The tribes adjust their proposal. They will build settlements and leave their families, but the able-bodied warriors will cross the Jordan with Moses and fight until the conquest is complete. Only then will they return to their land. It is a covenant bargain, clear and generous: we will do the hard thing first.',
        },
        {
          kind: 'commentary',
          id: 'c-sin-finds',
          html:
            'The line "be sure your sin will find you out" has become a folk proverb, a warning against hidden guilt. But its original context is not about secret sins—it is about breaking covenant with your community. If they settle early, if they abandon their brothers before the conquest is done, their sin will *find them*: in the form of Israel&apos;s failure, in the weight of broken promises, in the judgment of a God who sees covenant seriously.',
        },
        {
          kind: 'carry',
          html:
            'A promise made in front of God and witnesses is not a casual thing. Whether a marriage vow, an oath to your church, a commitment to your family, or a word given to a friend, the consequence of breaking it is not primarily punishment—it is that the breach will be known. The community will feel the loss. You cannot settle early and hide it. Your absence will be noticed. The question is whether you want to be the kind of person who keeps their word.',
        },
        {
          kind: 'reflection',
          id: 'keeping-word',
          prompt: 'When have you kept a hard promise, and what did it cost you? What did it build?',
        },
      ],
    },

    /* ─── The Confirmation: Covenant Kept ────────────────────────────── */
    {
      ref: 'Numbers 32:28–42',
      title: 'The Land Divided, the Work Ahead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 28,
              spans: [
                t('And Moses gave commandment concerning them unto Eleazar the priest, and unto Joshua the son of Nun, and unto the chief fathers of the tribes of the children of Israel:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Moses said unto them, If the children of Gad and the children of Reuben will pass with you over Jordan, every man armed to battle, before the Lord, and the land shall be subdued before you; then ye shall give them the land of Gilead for a possession:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('But if they will not pass over with you armed, they shall have possessions among you in the land of Canaan.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And the children of Gad and the children of Reuben answered, saying, As the Lord hath said unto thy servants, so will we do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'numbers_32_v28-41',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 32,
              spans: [
                t('We will pass over armed before the Lord into the land of Canaan, that the possession of our inheritance on this side Jordan may be sure unto us.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And the children of Gad and the children of Reuben spake unto Moses, saying, Thy servants will do as my lord commandeth.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('Our little ones, our wives, our flocks, and all our cattle, shall be there in the cities of Gilead:'),
              ],
            },
            {
              number: 41,
              spans: [
                t('But thy servants will go over, every man that is armed for the war, before the Lord to battle, as my lord saith.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant-confirmed',
          html:
            'The tribes now understand the terms. Moses makes clear: you will only keep your inheritance *if* you fight. If you refuse, you forfeit it. The word of God travels through Moses, Eleazar, Joshua, and the tribal leaders. The covenant is not between three tribes and Moses—it is between the whole assembly and God. Settling the land east of Jordan is not a side issue. It is part of the conquest, and the conquest is not over until the last tribe has inherited. [res:joshua-covenant-fulfillment]',
        },
        {
          kind: 'carry',
          html:
            'You cannot claim a blessing and then refuse the condition that makes it real. "I want to be married but I don&apos;t want to fight through conflict." "I want to be part of the church but I don&apos;t want to show up when it&apos;s hard." "I want the inheritance but I want to settle before the work is done." God honors what you actually choose. The tribes chose well: they fought. And they received. That is the pattern of covenant.',
        },
        {
          kind: 'reflection',
          id: 'covenant-blessing',
          prompt: 'What blessing are you claiming? What is the hard part that comes with it that you&apos;re tempted to skip?',
        },
      ],
    },

    /* ─── The Voice: East of Jordan Is Good ───────────────────────────── */
    {
      ref: 'Numbers 32 (summary)',
      title: 'The Land East, the Timing West',
      blocks: [
        {
          kind: 'commentary',
          html:
            'It is important to hear what the chapter does NOT say: "You are sinful for wanting the eastern land." Reuben, Gad, and half of Manasseh do eventually settle that territory (32:34–38), and God blesses them there. The land is real. The cattle are real. The gift is real. [res:sefaria-numbers-32]',
        },
        {
          kind: 'commentary',
          html:
            'What matters is sequence. Not "what do you want," but "when do you want it, and at what cost to your brothers?" The Reubenites&apos; temptation is the great American temptation: to settle early, to get comfortable, to stop short of the full promise because the partial promise looks pretty good. "I could be here forever," they think—and they are right. But "forever here" means "never there." Never the full inheritance. Never the seat at the table with the whole congregation of Israel. [res:gilead-geography-settlement]',
        },
        {
          kind: 'artwork',
          matchTitle: /canaan|land|jordan|promised/i,
          caption: 'Numbers 32 — The eastern land, good and real; but the promised land required the whole assembly to fight.',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-numbers-32',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 32 — Full Text & Mefarshim',
      url: 'https://www.sefaria.org/Numbers.32',
      description: 'Complete Hebrew and English text with classical rabbinic commentary on the tribal settlement east of Jordan.',
    },
    {
      id: 'joshua-covenant-fulfillment',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Joshua 1 — The Tribes Keep Their Covenant',
      url: 'https://www.intertextual.org/texts/joshua',
      description: 'How the eastern tribes fulfill their Numbers 32 promise by fighting with Joshua before returning to inherit their land.',
    },
  ],

  bottomShare: {
    quote: 'Be sure your sin will find you out.',
    snippet: 'Numbers 32:23 — the cost of breaking covenant with your community is not hidden; it is borne by everyone who watches you settle early.',
    ref: 'Numbers 32:23',
  },
};
