import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 13 — Abram and Lot part ways. A chapter about generosity and the
 * sight of the soul. Abram, the promise-bearer, defers to his nephew Lot.
 * Lot's eyes see the plain of Jordan as "even as the garden of the LORD,"
 * but it leads toward Sodom. Abram looks by faith, not by sight — and God
 * reaffirms the land promise.
 */
export const GENESIS_13: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 13,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 12 },
  intros: [
    'Genesis 13 is a chapter about what we choose with our eyes and what we choose by faith. Abram and Lot have grown too rich to share the same pastures; their herdsmen quarrel over water and grazing. In any other story, the older man and the promise-bearer would claim the best land for himself. Abram does the opposite. He offers Lot first choice — an act of deference so complete it foreshadows the one who "made himself of no reputation." Lot\'s eyes see what looks like Eden. But the text whispers: it is toward Sodom.',
    'The chapter turns on a single Hebrew phrase, *nasa\' eynayim* — "to lift up the eyes." Lot lifts his eyes toward the well-watered plain. Then God tells Abram to lift his eyes too, and look in every direction, and promise him all he can see. What Lot chose by sight, Abram receives [res:bibleodyssey-abraham-covenant] by promise. What Lot saw as beautiful, God says is destined for judgment. The same gaze. Different destinations.',
  ],

  bottomShare: {
    label: 'Share Genesis 13',
    quote:
      'Abram offered Lot the choice of the land, though he had greater rights. Lot chose by what his eyes could see. Abram chose to trust God&apos;s promise and dwell in tents, looking for "a city which hath foundations, whose builder and maker is God."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 13 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-13',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 13 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.13',
      description: 'Hebrew text with rabbinic commentary on Abram&apos;s generosity, the separation from Lot, and the renewal of the land promise.',
    },
    {
      id: 'pennmuseum-abraham-era',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Mari & Nuzi Tablets (Abraham&apos;s era)',
      url: 'https://www.penn.museum/collections/west-asia/',
      description: 'Ancient Near Eastern documents illuminating family customs, inheritance disputes, and pastoral economies in Abraham&apos;s world.',
    },
    {
      id: 'bibleodyssey-abraham-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Abraham and the Covenant',
      url: 'https://www.bibleodyssey.org/articles/abraham-sarah/',
      description: 'SBL article exploring Abraham&apos;s faith, trust in God&apos;s promise despite what his eyes see, and the foundations of the covenant.',
    },
  ],

  sections: [
    /* ─── Genesis 13:1–4 — Abram Returns to the Altar ─────────────────── */
    {
      ref: 'Genesis 13:1–4',
      title: 'Abram Returns to the Altar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('And Abram went up out of Egypt, he, and his wife, and all that he had, and Lot with him, into the south.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Abram was '),
                hg('very rich in cattle, in silver, and in gold', 'c-abram-wealth'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he went on his journeys from the south even to '),
                hy('Bethel', 'hebrew-bethel'),
                t(', unto the place where his tent had been at the beginning, between Bethel and Hai;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Unto the place of the '),
                hg('altar which he had made there at the first', 'c-altar-return'),
                t(': and there Abram '),
                hy('called on the name of the LORD', 'hebrew-qara'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abram-wealth',
          html:
            'Abram&apos;s time in Egypt was fruitful and strange. He acquired cattle, silver, and gold — wealth that will become the seed of conflict. The narrator does not tell us whether Abram&apos;s growing riches were a blessing or a trial. The next scene will answer[res:sefaria-genesis-13][res:pennmuseum-abraham-era].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bethel',
          title: 'Bethel — &ldquo;house of God&rdquo;',
          script: 'בֵּית־אֵל',
          translit: '<strong>Bethel</strong> · house of God',
          description:
            'Bethel is where Abram first built an altar to the LORD after leaving Haran. Returning here is a deliberate turning toward God. The place itself is a landmark, a sacred geography of his own making.',
        },
        {
          kind: 'commentary',
          id: 'c-altar-return',
          html:
            'Abram does not ask God for more. He goes back to the altar he had made himself — and there, after Egypt and its compromises, after his wife was taken into Pharaoh&apos;s house, after all the complication, he simply calls on the LORD&apos;s name. The altar precedes the prayer. The place he had set apart for God becomes the place he finds his way back.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qara',
          title: 'Qara — &ldquo;called upon&rdquo;',
          script: 'קָרָא',
          translit: '<strong>qara</strong> · to call upon, to cry out, to summon',
          description:
            'The word for calling on God&apos;s name is not whispered prayer but a public, deliberate utterance — as if Abram stands at his altar and says the LORD&apos;s name aloud, making it known, making it witnessed.',
        },
        {
          kind: 'carry',
          html:
            'You may have an altar you built in a past season — a place you set apart for God. Not a building, maybe, but a corner of your day, or a discipline you kept, or a decision you made to keep His name at the center. Life gets complicated. You drift. And sometimes the faithfulness is not a fresh revelation, but a return: to go back to that place and call on His name again. The altar you built is still there.',
        },
        {
          kind: 'reflection',
          id: 'gen13-altar',
          prompt:
            'Where is your Bethel? What altar, discipline, or sacred geography have you drifted from? What would it take to walk back?',
        },
      ],
    },

    /* ─── Genesis 13:5–9 — The Strife Between Herdsmen ──────────────────── */
    {
      ref: 'Genesis 13:5–9',
      title: 'Strife Over Pasture, Generosity in Reply',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 5,
              spans: [
                t('And Lot also, which went with Abram, had flocks, and herds, and '),
                hg('tents', 'c-tents-lot'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the land was not able to bear them, that they might dwell together: for their substance was great, so that they could not dwell together.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And there was a '),
                hg('strife between the herdsmen of Abram&apos;s cattle and the herdsmen of Lot&apos;s cattle', 'c-strife'),
                t(': and the Canaanite and the Perizzite dwelled then in the land.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Abram said unto Lot, '),
                hp('Let there be no strife, I pray thee, between me and thee, and between my herdsmen and thy herdsmen', 'christ-abram-defer'),
                t('; for we be '),
                hg('brethren', 'c-brethren'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Is not the whole land before thee? '),
                hg('separate thyself from me', 'c-separation'),
                t(': if thou wilt take the left hand, then I will go to the right; or if thou depart to the right hand, then I will go to the left.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tents-lot',
          html:
            'Lot is not yet a man of walls and cities. He still lives in tents, as Abram does. The difference will come when he sees the plain of Jordan. For now, they are both nomads, both rich, both living off the land.',
        },
        {
          kind: 'commentary',
          id: 'c-strife',
          html:
            'The conflict is not between Abram and Lot themselves, but between their servants. Yet Abram takes responsibility for it. Rather than let bitterness take root between uncle and nephew, he acts immediately to separate them. This restraint is itself a choice.',
        },
        {
          kind: 'commentary',
          id: 'c-brethren',
          html:
            'Abram calls Lot his brother — not in the sense of blood (they are uncle and nephew) but in the sense of covenant family. The same covenant that binds them is precisely what makes their separation bearable. They are brothers in God&apos;s family, not competitors for God&apos;s land.',
        },
        {
          kind: 'christ',
          id: 'christ-abram-defer',
          title: 'Christ Connection — The Sacrifice of Precedence',
          html:
            'Abram is the elder, the promise-bearer, the one to whom God has already appeared and spoken. By every right he should claim the first choice. Instead he yields it to Lot. Paul names this kind of deference as Christ&apos;s own posture: Jesus &ldquo;made himself of no reputation, and took upon him the form of a servant&rdquo; (Phil. 2:7). Abram&apos;s willingness to take the second place, to let his heir choose first, is a quiet foreshadowing of the one who emptied Himself for the sake of His people.',
        },
        {
          kind: 'commentary',
          id: 'c-separation',
          html:
            'Abram does not command. He offers Lot a choice with both hands open: left or right, Lot decides, Abram will take what is left. There is a graciousness here that is almost tender — acknowledging Lot&apos;s dignity even as Abram lets go of what could have been his.',
        },
        {
          kind: 'carry',
          html:
            'Generosity of this kind — not the spectacular kind, but the kind that lives in the small moments of everyday precedence — is rarer than you might think. Who chooses the restaurant, the movie, whose schedule changes. These little surrenders cost something because they involve letting go of the right to be first. But they are not loss. Abram gives up the choice and receives his nephew&apos;s respect. He yields and finds he has more, not less.',
        },
        {
          kind: 'reflection',
          id: 'gen13-precedence',
          prompt:
            'Where are you tempted to claim first place when generosity would mean offering it? What would change if you did?',
        },
      ],
    },

    /* ─── Genesis 13:10–13 — Lot Chooses by Sight ────────────────────── */
    {
      ref: 'Genesis 13:10–13',
      title: 'Lot Lifts His Eyes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 10,
              spans: [
                t('And Lot '),
                hy('lifted up his eyes', 'hebrew-nasa-eynayim'),
                t(', and beheld all the plain of Jordan, that it was well watered every where, before the LORD destroyed Sodom and Gomorrah, '),
                hg('even as the garden of the LORD', 'c-lot-sees-eden'),
                t(', like the land of Egypt, as thou comest unto Zoar.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then Lot chose him all the plain of Jordan; and Lot journeyed east: and they separated themselves the one from the other.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Abram dwelled in the land of Canaan, and Lot dwelled in the cities of the plain, and '),
                hg('pitched his tent toward Sodom', 'c-toward-sodom'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But the men of Sodom were '),
                hg('wicked and sinners before the LORD', 'c-sodom-wickedness'),
                t(' exceedingly.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nasa-eynayim',
          title: 'Nasa&apos; Eynayim — &ldquo;lifted up his eyes&rdquo;',
          script: 'נָשָׂא עֵינַיִם',
          translit: '<strong>nasa&apos; eynayim</strong> · lifted up the eyes; looked about; perceived',
          description:
            'This same idiom appears twice in Genesis 13: Lot lifts his eyes toward Sodom (v.10), and God tells Abram to lift his eyes and look in every direction (v.14). The same verb, the same act of seeing — but seeing toward different destinations, with different eyes.',
        },
        {
          kind: 'commentary',
          id: 'c-lot-sees-eden',
          html:
            'Lot sees the plain of Jordan and it looks to him like Eden. The narrator does not say Lot is wrong about what he sees — the land is beautiful, well-watered, green. But what Lot sees as Eden, God is about to judge. The narrator knows something Lot&apos;s eyes cannot see: this garden is already doomed. Sight is not the same as sight.',
        },
        {
          kind: 'commentary',
          id: 'c-toward-sodom',
          html:
            'Lot pitched his tent <em>toward</em> Sodom. Not in Sodom yet, but oriented that way. A small choice about direction. Small choices about what we look toward have a way of becoming large patterns. Lot&apos;s choice to pitch toward Sodom is a choice, repeated daily, until finally he is living inside its walls.',
        },
        {
          kind: 'commentary',
          id: 'c-sodom-wickedness',
          html:
            'The verse is an editorial comment from the narrator. It arrives just after Lot has pitched his tent toward Sodom — not to condemn Lot as wicked, but to let the reader know what Lot&apos;s eyes cannot yet see. A warning, whispered.',
        },
        {
          kind: 'carry',
          html:
            'You know the feeling of looking at something and thinking <em>that looks good</em>. A place, a person, a way of life, a financial move — something that promises to be fruitful, well-watered, like a garden. Your eyes see the green. But the eyes have limits. They cannot see the future. They cannot see the character of the people inside the walls. They cannot see what will be true in seven years. Sometimes the most important sight is the sight that knows it is incomplete.',
        },
        {
          kind: 'reflection',
          id: 'gen13-sight',
          prompt:
            'What is something that looks beautiful to your eyes right now? What might your eyes not be able to see about it?',
        },
        {
          kind: 'artwork',
          matchTitle: /lot/i,
          matchArtist: /separat/i,
          caption: 'Genesis 13:10–13 · Lot Lifts His Eyes',
        },
      ],
    },

    /* ─── Genesis 13:14–18 — God Renews the Promise ────────────────────── */
    {
      ref: 'Genesis 13:14–18',
      title: 'The Promise Renewed by Walking',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 14,
              spans: [
                t('And the LORD said unto Abram, after that Lot was separated from him, '),
                hp('Lift up now thine eyes, and look from the place where thou art northward, and southward, and eastward, and westward', 'christ-promise-walk'),
                t(':'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For all the land which thou seest, to thee will I give it, and to thy seed for ever.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And I will make thy seed as the dust of the earth: so that if a man can number the dust of the earth, then shall thy seed also be numbered.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Arise, take a walk through the land in the length of it and in the breadth of it; for I will give it unto thee.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Then Abram removed his tent, and came and dwelt in the plain of Mamre, which is in Hebron, and '),
                hg('built there an altar unto the LORD', 'c-altar-promise'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altar-promise',
          html:
            'Abram builds another altar. Wherever he stops, he marks the place with worship. The land itself becomes sacred through his acknowledgment of it as God&apos;s gift. This is not idolatry; it is the opposite — a refusal to forget that the land is not his because he conquered it or because it looks good, but because God has given it.',
        },
        {
          kind: 'christ',
          id: 'christ-promise-walk',
          title: 'Christ Connection — By Promise, Not by Sight',
          html:
            'Paul drives straight to this moment: &ldquo;By faith Abraham, when he was called to go out into a place which he should after receive for an inheritance, obeyed; and he went out, not knowing whither he went. By faith he sojourned in the land of promise, as in a strange country, dwelling in tabernacles with Isaac and Jacob, the heirs with him of the same promise: for he looked for a city which hath foundations, whose builder and maker is God&rdquo; (Heb. 11:8–10). Abram lived in tents his whole life, always looking forward. He never saw the promise fulfilled. But he saw the one who gave it. And he chose to trust that sight over the sight of his own eyes. This is the root of all faith: <em>now we see through a glass, darkly,</em> Paul writes, <em>but then face to face</em> (1 Cor. 13:12). Lot chose what he could see. Abram chose whom he could trust.',
        },
        {
          kind: 'carry',
          html:
            'You are living by promise if you are living by something you cannot yet see. Not by what your circumstances look like today, not by what your bank account says, not by what the next quarter projects. By promise. The difference is this: a promise is not a guess about the future. A promise belongs to someone. It has a face, a voice, a name. You live by promise when you live as if <em>the one who made this promise is faithful,</em> even when the evidence available to you is incomplete.',
        },
        {
          kind: 'reflection',
          id: 'gen13-promise',
          prompt:
            'What promise from God are you living out without yet seeing it fulfilled? How is that different from just hoping things will work out?',
        },
        {
          kind: 'artwork',
          matchTitle: /abraham/i,
          matchArtist: /promise/i,
          caption: 'Genesis 13:14–18 · The Renewed Promise',
        },
      ],
    },
  ],
};
