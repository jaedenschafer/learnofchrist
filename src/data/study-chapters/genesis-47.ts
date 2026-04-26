import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 47 — Joseph&apos;s stewardship, Jacob&apos;s pilgrimage, and the
 * political economy of the famine.
 *
 * The brothers are presented to Pharaoh and given Goshen. Jacob, brought
 * before Pharaoh, offers a blessing — &ldquo;the days of the years of my
 * pilgrimage are an hundred and thirty years: few and evil have the days
 * of the years of my life been.&rdquo; The famine deepens. The Egyptians,
 * in five stages, surrender their money, cattle, land, bodies, and labor
 * to Pharaoh. Israel, meanwhile, grows and multiplies in Goshen. Jacob,
 * near death, makes Joseph swear to bury him in Canaan with his fathers.
 *
 * The chapter does not moralise the hard edges of Joseph&apos;s statecraft
 * — it reports them. And it sets up the irony that will follow: the son
 * of Israel, now the chief steward of Egypt, while Egypt descends into
 * servitude.
 */
export const GENESIS_47: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 47,

  intros: [
    'Genesis 47 is the story of two peoples under one famine. Joseph has brought his family to Egypt, and now they meet Pharaoh. The scene moves fast: brothers presenting themselves, Jacob blessing the king, the famine tightening its grip. One by one the Egyptians trade their freedom for bread — first their money, then their animals, then their land, then their bodies. By verse 25 they are calling themselves Pharaoh&apos;s servants, grateful for the mercy of slavery. And in the middle of all this collapse, Israel is growing, multiplying, taking root in Goshen.',
    'The chapter&apos;s last notes are quiet. Jacob is dying. His final words are not blessings over Egypt or thanks for Joseph&apos;s power. They are a command: <em>bury me not in Egypt.</em> A pilgrim&apos;s last instruction. Everything in this chapter — the contrast between Egypt&apos;s loss of freedom and Israel&apos;s flourishing, the patriarch&apos;s refusal to call Egypt home — points to a country he will never see in this life, and to a Deliverer who will be born from the people growing in Goshen.',
  ],

  sections: [
    /* ─── Genesis 47:1–6 — The Brothers Before Pharaoh ──────────────────── */
    {
      ref: 'Genesis 47:1–6',
      title: 'The Brothers Before Pharaoh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Joseph came and told Pharaoh, saying, My father and my brethren, and their flocks, and their herds, and all that they have, are come out of the land of Canaan; and, behold, they are now in the land of Goshen.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he took some of his brethren, even '),
                hg('five men', 'c-five'),
                t(', and presented them unto Pharaoh.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Pharaoh said unto his brethren, '),
                hg('What is your occupation?', 'c-work'),
                t(' And they said unto Pharaoh, Thy servants are shepherds, both we, and our fathers.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And they said unto Pharaoh, For to sojourn in the land are we come; for thy servant hath no pasture for his flocks; for the famine is sore in the land of Canaan: now therefore, we pray thee, let thy servants dwell in the land of Goshen.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Pharaoh spake unto Joseph, saying, Thy father and thy brethren are come unto thee:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('The land of Egypt is before thee; in '),
                hg('the best of the land', 'c-goshen'),
                t(' make thy father and brethren to dwell; in the land of Goshen let them dwell: and if thou knowest any men of activity among them, then '),
                hp('make them rulers over my cattle', 'christ-joseph-rule'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-five',
          html:
            'Joseph presents five of his brothers to Pharaoh — not all twelve, just a sample. These men are shepherds, and Egyptians held shepherds in contempt (Genesis 46:34 makes this explicit). Yet Pharaoh accepts them anyway, because Joseph&apos;s recommendation carries weight. The brothers are admitted not on their own merit but on Joseph&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'c-work',
          html:
            'Pharaoh&apos;s question is straightforward: what do you do? The brothers answer honestly: shepherds. They are not hiding their work or pretending to be something else. They are who they are. And Pharaoh, seeing they are skilled at something he needs, makes them rulers over his own cattle. Not the other way around — he does not ask them to change or prove themselves first.',
        },
        {
          kind: 'commentary',
          id: 'christ-joseph-rule',
          html:
            'Pharaoh sees the brothers are competent and immediately gives them authority. They are not conquered or subjugated; they are elevated. Joseph&apos;s wisdom did not just save them from the famine — it elevated them in Egypt. This is a taste of what Joseph himself has experienced: because of his faithfulness in hidden places, he has been lifted to rule over a nation.',
        },
        {
          kind: 'commentary',
          id: 'c-goshen',
          html:
            'Goshen is described as &ldquo;the best of the land.&rdquo; The text is not cynical here — Pharaoh means it as a gift. He is rewarding Joseph&apos;s wisdom and faithfulness by giving his family the richest pasture in Egypt. For the moment, the arrangement is generous.',
        },
        {
          kind: 'carry',
          html:
            'Joseph&apos;s brothers are brought forward not because they are qualified shepherds but because Joseph loves them. There are rooms in your life where you have access not on your own credentials but on someone else&apos;s word — a teacher who vouches for you, a parent who opens a door, a friend who introduces you. Joseph&apos;s recommendation is his gift to his brothers. That someone is willing to stake their own reputation on you is grace, whether you see it that way yet or not.',
        },
        {
          kind: 'reflection',
          id: 'gen47-presented',
          prompt: 'Whose word has opened a door for you? How has being vouched for changed what you could do?',
        },
      ],
    },

    /* ─── Genesis 47:7–12 — Jacob Before Pharaoh ────────────────────────── */
    {
      ref: 'Genesis 47:7–12',
      title: 'Jacob&apos;s Audience and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            {
              number: 7,
              spans: [
                t('And Joseph brought in Jacob his father, and set him before Pharaoh: and Jacob '),
                hg('blessed Pharaoh', 'c-bless-pharaoh'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Pharaoh said unto Jacob, How old art thou?'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Jacob said unto Pharaoh, '),
                hy('The days of the years of my pilgrimage', 'hebrew-megurim'),
                t(' are an hundred and thirty years: '),
                hp('few and evil have the days of the years of my life been', 'christ-vita-brevis'),
                t('; and have not attained unto the days of the years of the life of my fathers in the days of their pilgrimage.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Jacob blessed Pharaoh, and went out from the presence of Pharaoh.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Joseph placed his father and his brethren, and gave them a possession in the land of Egypt, in the best of the land, in the land of Rameses, as Pharaoh had commanded.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Joseph nourished his father, and his brethren, and all his father&apos;s household, with bread, according to their families.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bless-pharaoh',
          html:
            'A pilgrim blesses a king. The word-order of the scene is worth noticing: Jacob is <em>brought in</em> and <em>set before</em> Pharaoh like a gift Joseph is giving. Then Jacob does something that reverses the entire power dynamic. He blesses. In the ancient world blessing is not merely kind words — it is the transfer of a real power, and only someone greater can bless someone lesser.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-megurim',
          title: 'Megurim — &ldquo;pilgrimage, sojournings&rdquo;',
          script: 'מְגוּרִים',
          translit: '<strong>megurim</strong> · sojournings, temporary dwellings',
          description:
            'Jacob calls his whole life a <em>pilgrimage</em>. Not a home, not a settlement — a temporary stay. The author of Hebrews later picks up this word: &ldquo;These all died in faith, not having received the promises… and confessed that they were strangers and pilgrims on the earth&rdquo; (Heb. 11:13). Jacob is naming what his life has been: a journey to somewhere else.',
        },
        {
          kind: 'christ',
          id: 'christ-vita-brevis',
          title: 'Christ Connection — Few and Evil Days',
          html:
            'Jacob&apos;s words are bleak: &ldquo;few and evil have the days of the years of my life been.&rdquo; He is not exaggerating — he has lived through famine, family betrayal, exile, loss. And yet he is blessed. James echoes him centuries later: &ldquo;What is your life? It is even a vapour, that appeareth for a little time, and then vanisheth away&rdquo; (James 4:14). The Bible does not pretend the world is not broken. Christ did not come to a perfect world. He came to one where days are few and often hard — and He came anyway, grieving with us, promising that the last word is not suffering but resurrection.',
        },
        {
          kind: 'carry',
          html:
            'Jacob stands before the most powerful man in the world and tells him the truth: my life has been hard. Few days, evil days. Not because Jacob is ungrateful — he is about to be settled in the best land in Egypt — but because <em>that is what his life has been.</em> If your days have been hard, naming them is not the same as denying God&apos;s faithfulness. It is the same thing Jacob did before Pharaoh: telling the truth. God did not call you to pretend the weight is lighter than it is.',
        },
        {
          kind: 'reflection',
          id: 'gen47-jacob-life',
          prompt: 'What is honest about where you are right now — what few or hard thing are you living in? And where, despite that, have you felt blessed?',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob/i,
          caption: 'Genesis 47:7–10 · Jacob Blesses Pharaoh',
        },
      ],
    },

    /* ─── Genesis 47:13–26 — The Famine and Consolidation ─────────────── */
    {
      ref: 'Genesis 47:13–26',
      title: 'The Famine Deepens; Egypt Becomes Pharaoh&apos;s',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            {
              number: 13,
              spans: [
                t('And '),
                hg('there was no bread in all the land', 'c-famine-deep'),
                t('; for the famine was very sore, so that the land of Egypt and all the land of Canaan fainted by reason of the famine.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Joseph gathered up all the money that was found in the land of Egypt, and in the land of Canaan, for the corn which they bought: and Joseph brought the money into Pharaoh&apos;s house.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And when money failed in the land of Egypt, and in the land of Canaan, all the Egyptians came unto Joseph, and said, Give us bread: for why should we die in thy presence? for the money faileth.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Joseph said, Give your cattle; and I will give you for your cattle, if money fail.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And they brought their cattle unto Joseph: and Joseph gave them bread in exchange for horses, and for the flocks, and for the cattle of the herds, and for the asses: and he fed them with bread for all their cattle for that year.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('When that year was ended, they came unto him the second year, and said unto him, We will not hide it from my lord, how that our money is spent; my lord also hath our herds of cattle; there is not ought left in the sight of my lord, but our bodies, and our lands:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Wherefore shall we die before thine eyes, both we and our land? buy us and our land for bread, and we and our land will be servants unto Pharaoh: and give us seed, that we may live, and not die, that the land be not desolate.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Joseph bought all the land of Egypt for Pharaoh; for the Egyptians sold every man his field, because the famine prevailed over them: so the land became Pharaoh&apos;s.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And as for the people, he removed them to cities from one end of the borders of Egypt even to the other end thereof.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Only the land of the priests bought he not; for the priests had a portion assigned them of Pharaoh, and did eat their portion which Pharaoh gave them: wherefore they sold not their lands.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Then Joseph said unto the people, Behold, I have bought you this day and your land for Pharaoh: now here is seed for you, and ye shall sow the land.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And it shall come to pass in the increase, that ye shall give the fifth part unto Pharaoh, and four parts shall be your own, for seed of the field, and for your food, and for them of your households, and for food for your little ones.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they said, '),
                hp('Thou hast saved our lives', 'christ-sold'),
                t(': let us find grace in the sight of my lord, and we will be Pharaoh&apos;s servants.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Joseph made it a law over the land of Egypt unto this day, that Pharaoh should have the fifth part; except the land of the priests only, which became not Pharaoh&apos;s.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-famine-deep',
          html:
            'By verse 13, the famine is absolute. There is no bread anywhere — neither in Egypt nor in Canaan. The text is unsparing. The people are <em>fainting</em>. And Joseph is their only lifeline. What follows is a five-stage descent into servitude, each stage triggered by a different shortage.',
        },
        {
          kind: 'carry',
          html:
            'The chapter does not pause to moralise what is happening. Joseph is wise. He is also consolidating power. He takes the money, then the animals, then the land, then the people. By stage five they are calling themselves Pharaoh&apos;s servants, grateful for the mercy of living. The text reports it without commentary — the same way hard reality often arrives. What matters now is that you are aware of what is happening in your own world. Where are you trading freedom for security? Where are you being asked to give more and more for less and less? The names for this are different now, but the pattern is the same.',
        },
        {
          kind: 'reflection',
          id: 'gen47-stages',
          prompt: 'What have you given up, slowly, to meet a need that felt urgent at the time? What would it take to notice you&apos;ve given it?',
        },
      ],
    },

    /* ─── Genesis 47:27 — Israel Grows in Goshen ──────────────────────── */
    {
      ref: 'Genesis 47:27',
      title: 'Israel Grows; Egypt Diminishes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            {
              number: 27,
              spans: [
                t('And Israel dwelt in the land of Goshen; and they had possessions therein, and '),
                hg('grew, and multiplied exceedingly', 'c-israel-grows'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-israel-grows',
          html:
            'The sentence is short, but the contrast it creates is devastating. While Egypt has been consolidating under one king — losing money, animals, land, then freedom itself — Israel is doing what God promised Abraham: growing and multiplying. The text does not explain the irony. It does not need to. In the same verse, one people becomes Pharaoh&apos;s servants and another people begins to become a nation.',
        },
        {
          kind: 'christ',
          id: 'christ-sold',
          title: 'Christ Connection — The Bondservant Who Sets Free',
          html:
            'The Egyptians say to Joseph: &ldquo;Thou hast saved our lives.&rdquo; They are grateful, and they mean it. But saved from death into servitude is a thin mercy. Paul will later write: &ldquo;For ye are bought with a price: be not ye the servants of men&rdquo; (1 Cor. 7:23). Christ did not come to trade one kind of servitude for another. He came to pay a price once for all, to buy a people back to freedom. The Exodus that will follow is always where this chapter points — a redemption that will not leave God&apos;s people in Egypt&apos;s hands for another generation.',
        },
        {
          kind: 'carry',
          html:
            'There are kinds of arrangements that feel like mercy while they are happening and feel like chains afterwards. A relationship that feels like rescue until you notice you cannot leave. A job that saves you from poverty but that asks more of you every year. A system that fed you but that expects servitude in return. The text does not ask you to judge Joseph&apos;s statecraft. It asks you to notice what happened. And to notice what God&apos;s answer to servitude has always been: <em>not a better master, but freedom.</em>',
        },
        {
          kind: 'reflection',
          id: 'gen47-mercy',
          prompt: 'Where have you confused a rescue with a home? What did it take to notice the difference?',
        },
        {
          kind: 'artwork',
          matchTitle: /goshen|egypt|pharaoh/i,
          caption: 'Genesis 47:27 · Israel Grows in Goshen',
        },
      ],
    },

    /* ─── Genesis 47:28–31 — Jacob&apos;s Deathbed Oath ────────────────── */
    {
      ref: 'Genesis 47:28–31',
      title: 'A Pilgrim&apos;s Last Instruction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            {
              number: 28,
              spans: [
                t('And Jacob lived in the land of Egypt seventeen years: so the whole age of Jacob was an hundred forty and seven years.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And the time drew nigh that Israel must die: and he called his son Joseph, and said unto him, If now I have found grace in thy sight, '),
                hg('put, I pray thee, thy hand under my thigh', 'c-oath'),
                t('; and deal kindly and truly with me: '),
                hp('bury me not, I pray thee, in Egypt', 'christ-home-coming'),
                t(':'),
              ],
            },
            {
              number: 30,
              spans: [
                t('But I will lie with my fathers, and thou shalt carry me out of Egypt, and bury me in their buryingplace. And he said, I will do as thou hast said.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And he said, Swear unto me. And he sware unto him. And Israel bowed himself upon the bed&apos;s head.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oath',
          html:
            'Jacob makes Joseph swear by placing his hand under Jacob&apos;s thigh — a covenant gesture, the same one Abraham will use with his servant in Genesis 24. This is the solemn-most vow a son can make. Jacob is binding Joseph to a promise that will require him to disobey Pharaoh if necessary, to carry his father&apos;s corpse across the desert, to bury him in a land he has not seen since he was a boy.',
        },
        {
          kind: 'commentary',
          id: 'c-home',
          html:
            'Jacob has been seventeen years in Egypt. He has been cared for, provision-rich, at the center of power because of his son. And his last words are: <em>bury me not here.</em> Egypt is not his home. It never was. The famine brought him here; death will take him away. The chapter that opened with Israel growing in Goshen ends with a patriarch pointing past Egypt to a grave in Canaan. That is where he belongs.',
        },
        {
          kind: 'christ',
          id: 'christ-home-coming',
          title: 'Christ Connection — A Pilgrim&apos;s Hope',
          html:
            'The author of Hebrews quotes this moment and then goes further: &ldquo;These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth. For they that say such things declare plainly that they seek a country&rdquo; (Heb. 11:13–14). Jacob&apos;s last instruction declares that there is a country he seeks, and it is not the one where he lived longest. Every pilgrim since has carried the same knowledge: this is not the home the promises point to. We are looking toward a city, and the Lamb is its light.',
        },
        {
          kind: 'carry',
          html:
            'There are places that feed you, keep you safe, give you work and family and a name. And there are places that are <em>yours</em> — the ones your story belongs to. Jacob lived in Egypt, but he belonged elsewhere. If you have been confusing provision with home, or security with where you finally fit, his last words are a question: What country are you <em>actually</em> seeking? Not where you are safe, but where you are meant to be.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'gen47-home',
          prompt: 'If you had to name the country you are actually seeking — the one this world is not — what would you say it is?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 47',
    quote:
      'Jacob blessed Pharaoh with a pilgrim&apos;s realism: few and evil have been my days. Yet his last instruction was not to rest in Egypt, but to be buried in the land of his fathers — a home he would never see, but never forgot.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 47 · Study Guide',
  },
};
