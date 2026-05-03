import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 7 — Ebenezer: "Hitherto Hath the Lord Helped Us"
 *
 * This chapter marks a turning point for Israel: after 20 years of
 * lamentation, the people repent, return to the Lord, and witness
 * His deliverance from the Philistines. Samuel sets a stone as a memorial
 * and names it Ebenezer — the stone of help.
 */
export const SAMUEL_1_7: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 7,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 15 },
  intros: [
    'For 20 years, Israel has lamented after the Lord. The ark of the covenant sits in a private house in Kirjath-jearim, and the people live in a kind of unfinished grief — the presence of God is near, but not with them. Then Samuel speaks: "If ye do return unto the Lord with all your hearts… put away the strange gods… he will deliver you out of the hand of the Philistines." The people hear him. They gather at Mizpeh, pour out water as a sign of their poured-out hearts, confess their sin. As an offering rises from the altar, the Lord thunders—a sound so loud and terrible that the Philistines scatter in panic. Israel pursues them and wins a complete victory.',
    'The chapter ends with a stone. Samuel sets up a stone between Mizpeh and Shen and calls it Ebenezer — "the stone of help" — saying, "Hitherto hath the Lord helped us." It is one of the most human sentences in Scripture. The past tense looking backward becomes hope for the future. And for the reader who knows Christ, that stone plants itself everywhere: at Calvary, at the empty tomb, at the throne of grace. Jesus is our Ebenezer. The thunder that came down for Israel fell on Him instead.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /samuel|ebenezer|mizpeh/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 7',
    quote:
      'After 20 years of lamentation, Israel turned back to the Lord, put away their idols, and confessed their sin. The Lord delivered them from the Philistines with a mighty thunder. Samuel set a stone and called it Ebenezer—"the stone of help"—saying, "Hitherto hath the Lord helped us."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 7 · Study Guide',
  },

  sections: [
    /* ─── Twenty Years of Lament and Samuel&apos;s Call ──────────────────────── */
    {
      ref: '1 Samuel 7:1–4',
      title: 'Twenty Years of Lament and the Call to Repent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('And the men of Kirjath-jearim came, and '),
                hg('fetched up the ark of the Lord', 'c-ark-comes'),
                t(', and brought it into the house of Abinadab in the hill, and sanctified Eleazar his son to keep the ark of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ark-comes',
          html:
            'The ark—the seat of God&apos;s presence—has been captured by the Philistines and sent back to Israel, but it cannot return to the Tabernacle yet. It rests in a private home. The people are not yet ready. Eleazar is sanctified to keep it, but the ark cannot move forward into public worship until Israel itself has repented.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 2,
              spans: [
                t('And it came to pass, while the ark abode in Kirjath-jearim, that '),
                hy('the time was long', 'hebrew-masped'),
                t('; for it was twenty years: and all the house of Israel '),
                hy('lamented after the Lord', 'hebrew-masped'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-masped',
          title: 'Masped — "lamented"',
          script: 'מָשְׁפַד',
          translit: '<strong>masped</strong> · wailed, mourned, grieved',
          description:
            'Twenty years of genuine sorrow. Not despair without hope, but the deep longing of a people who know they have strayed from the presence they were made for. Lament is the grammar of repentance.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('And Samuel spake unto all the house of Israel, saying, '),
                hp('If ye do return unto the Lord with all your hearts', 'christ-return'),
                t(', then put away '),
                hy('the strange gods and Ashtaroth', 'c-idols'),
                t(' from among you, and '),
                hg('prepare your hearts unto the Lord', 'c-prepare'),
                t(', and serve him only: and he will deliver you out of the hand of the Philistines.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-idols',
          html:
            'Baalim are the male fertility gods; Ashtaroth (plural of Astarte) are the female counterparts. These are not distant philosophical errors—they are the gods of the surrounding nations, the gods of comfort and power and visible presence. Israel has been drawn after them for two decades. Repentance is not inward feeling alone; it is concrete: idols come out, the Lord comes in.',
        },
        {
          kind: 'commentary',
          id: 'c-prepare',
          html:
            'To "prepare the heart" is to make room. Like clearing ground before planting. The metaphor suggests a physical work—sorting, sorting out, removing what does not belong, then making the ground ready to receive what does.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 4,
              spans: [
                t('Then the children of Israel did put away Baalim and Ashtaroth, and served the Lord only.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-return',
          title: 'Christ Connection — Return to the Father',
          html:
            'Repentance in Hebrew is <em>teshuva</em>—a turning back, a returning. Jesus teaches the same: &ldquo;If any man will come after me, let him deny himself, and take up his cross, and follow me&rdquo; (Matt. 16:24). Or in His own return parable: &ldquo;I have sinned against heaven, and before thee&rdquo; (Luke 15:18). To return to the Lord is to walk away from every other throne, every other voice, and face Him alone. It is the simplest and hardest thing a person can do.',
        },
        {
          kind: 'carry',
          html:
            'Those 20 years of lamentation were not wasted time. They were the slow breaking of the heart that finally says: no more. No more the distant comfort of false gods. I want the real thing. If your own 20 years have come, if you have mourned enough to finally say yes to Him completely, that moment of choice—all your heart, all the idols out—is the very moment when deliverance becomes possible.',
        },
        {
          kind: 'reflection',
          id: 'lament-return',
          prompt:
            'What false god has called to you longest? When you finally put it away—completely, not halfway—what changes?',
        },
      ],
    },

    /* ─── Mizpeh: Gathered and Poured Out ────────────────────────────────── */
    {
      ref: '1 Samuel 7:5–6',
      title: 'Mizpeh: Gathered and Poured Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 5,
              spans: [
                t('And Samuel said, '),
                hg('Gather all Israel to Mizpeh', 'c-gather'),
                t(', and I will pray for you unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gather',
          html:
            'Mizpeh means "watchtower"—a high place where Israel assembles. This is not a solitary repentance but a corporate one. All Israel comes together. The prophet calls them to remember that they are a people, a covenant people, and their repentance is a covenant act.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [
                t('And they gathered together to Mizpeh, and '),
                hg('drew water, and poured it out before the Lord', 'c-water'),
                t(', and fasted, and said there, '),
                hp('We have sinned against the Lord', 'christ-confession'),
                t('. And Samuel judged the children of Israel in Mizpeh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-water',
          html:
            'Water poured out cannot be gathered back. It is the symbol of a life spent, of self given away. In 2 Samuel 23:16, David will not drink water his men risk their lives to bring him—he pours it out before the Lord because &ldquo;shall I drink the blood of the men that went in jeopardy of their lives?&rdquo; To pour water is to say: I am no longer holding back myself. I am poured out for Him. It is the grammar of the cross.',
        },
        {
          kind: 'christ',
          id: 'christ-confession',
          title: 'Christ Connection — Confession and Judgment',
          html:
            'Confession is not self-condemnation—it is truth-telling: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness&rdquo; (1 John 1:9). The judgment Samuel enacts here—the bringing of sin into the light—is the same judgment Jesus enacts: not to condemn, but to heal. &ldquo;For God sent not his Son into the world to condemn the world; but that the world through him might be saved&rdquo; (John 3:17). Judgment that flows from love always aims at restoration.',
        },
        {
          kind: 'carry',
          html:
            'Confession is not something to dread. The water poured out is not the end of the story. It is the beginning of the possibility of being clean, of moving forward, of the invisible made visible and forgiven. Whatever needs to be said aloud—to God, to a trusted witness—say it in that spirit. Confession is the freedom of no longer hiding.',
        },
        {
          kind: 'reflection',
          id: 'mizpeh-water',
          prompt:
            'What needs to be confessed in your life today? When did you last pour yourself out completely before God?',
        },
        {
          kind: 'artwork',
          matchTitle: /mizpeh|water|repentance/i,
          caption: '1 Samuel 7:5–6 · Gathered and Poured Out',
        },
      ],
    },

    /* ─── The Thunder and the Deliverance ─────────────────────────────────── */
    {
      ref: '1 Samuel 7:7–11',
      title: 'The Philistine Attack and Divine Thunder',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 7,
              spans: [
                t('And when the Philistines heard that the children of Israel were gathered together to Mizpeh, the lords of the Philistines went up against Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 8,
              spans: [
                t('And the children of Israel were '),
                hy('afraid', 'c-fear'),
                t(': and said to Samuel, '),
                hg('Cease not to cry unto the Lord our God for us', 'c-cry'),
                t(', that he will save us out of the hand of the Philistines.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear',
          html:
            'Fear is honest. The Philistines outnumber them. The Philistines are militarily superior. And Israel, just hours or days into their repentance, has no weapons, no war strategy—only a prophet and their fresh confession. In that moment of terror, they do what they have just learned: cry out to God.',
        },
        {
          kind: 'commentary',
          id: 'c-cry',
          html:
            'The people understand: they cannot fix this. Samuel—their judge, their intercessor—is not their savior. Only the Lord is. They ask him to do what he was already doing: intercede. Asking for prayer is asking for someone to stand in the gap between you and the throne of God.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 9,
              spans: [
                t('And Samuel took a sucking lamb, and offered it for a burnt offering wholly unto the Lord; and '),
                hp('Samuel cried unto the Lord for Israel', 'c-intercession'),
                t('; and the Lord '),
                t('heard him'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-intercession',
          html:
            'An offering ascends, and a cry ascends with it. Samuel stands in the role of priest and prophet both—offering the sacrifice and crying to God. The sacrifice does not compel God; it is the outer shape of a heart turned toward Him. The cry is the real offering.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-hearken',
          title: 'Shama — "heard"',
          script: 'שָׁמַע',
          translit: '<strong>shama</strong> · heard, listened, obeyed',
          description:
            'To hear in Hebrew is to listen with the intent to obey. God does not simply receive the sound of Samuel&apos;s cry—He hears it in a way that includes response.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 10,
              spans: [
                t('And as Samuel was offering up the burnt offering, the Philistines drew near to battle against Israel: but '),
                hg('the Lord thundered with a great thunder on that day upon the Philistines', 'c-thunder'),
                t(', and '),
                hg('discomfited them', 'c-rout'),
                t('; and they were '),
                t('smitten before Israel'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thunder',
          html:
            'Ra&apos;am is the Hebrew word. The sound of God&apos;s voice in judgment. Thunder in Scripture is often God speaking—and when it falls on the Philistines, it is not ambiguous. God has intervened.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-raam',
          title: 'Ra&apos;am — "thundered"',
          script: 'רָעַם',
          translit: '<strong>ra&apos;am</strong> · thundered, roared',
          description:
            'The same word used when God roars in judgment. A sound that cannot be mistaken. A voice that stops armies in their tracks.',
        },
        {
          kind: 'commentary',
          id: 'c-rout',
          html:
            'To be discomfited is to be thrown into confusion, broken, routed. The Philistines do not engage in pitched battle. One voice from heaven and they scatter.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('And the men of Israel went out of Mizpeh, and pursued the Philistines, and smote them, until they came under Beth-car.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-thunder',
          title: 'Christ Connection — Thunder Turned Toward Him',
          html:
            'The thunder that falls on the Philistines is the thunder of God&apos;s judgment. In Gethsemane, Jesus prays that His soul be saved from that hour—from the very judgment this passage shows. But He does not run. Instead: &ldquo;Father, glorify thy name&rdquo; (John 12:28). And the voice from heaven comes. Then, on Calvary, that thunder falls on Him instead. The cross is the moment when the judgment due to us fell on Him, so that the only thunder we hear in our future is the sound of His triumph.',
        },
        {
          kind: 'carry',
          html:
            'The thunder that saves Israel is the sound of God&apos;s judgment against their enemies. But it terrifies their enemies and delivers them. When you face an enemy—fear, shame, addiction, the weight of unforgiveness—the thunder of God&apos;s judgment has fallen on that enemy at the cross. You do not have to wait for deliverance. The victory is already won.',
        },
        {
          kind: 'reflection',
          id: 'thunder',
          prompt:
            'When have you experienced God intervening in a way that felt sudden and impossible—a judgment on what was destroying you?',
        },
      ],
    },

    /* ─── Ebenezer: The Stone of Help ────────────────────────────────────── */
    {
      ref: '1 Samuel 7:12',
      title: 'Ebenezer: The Stone of Help',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 12,
              spans: [
                t('Then Samuel took a '),
                hg('stone', 'c-stone'),
                t(', and set it between Mizpeh and Shen, and called the name of it '),
                hy('EBENEZER', 'hebrew-ebenezer'),
                t(', saying, '),
                hp('Hitherto hath the Lord helped us', 'christ-ebenezer'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stone',
          html:
            'A stone is what remains. It cannot be moved. It becomes a landmark—a place you can point to and say: here. This is where God was. Stones throughout Scripture mark covenants and memory: Jacob at Bethel, Joshua setting up twelve stones from the Jordan, Rachel&apos;s tomb. A stone is the way the past speaks to the future.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ebenezer',
          title: 'Ebenezer — "Stone of Help"',
          script: 'אֶבֶן הָעֵזֶר',
          translit: '<strong>Eben Ha&apos;ezer</strong> · stone of help',
          description:
            'אֶבֶן (stone) + עֵזֶר (help). From the root עָזַר meaning to help, to aid, to sustain. Not a distant God, but one who comes near. Help that is visible, solid, set in a place you can walk past and remember.',
        },
        {
          kind: 'commentary',
          id: 'c-hitherto',
          html:
            'Hitherto—up to this point, until now. Past tense. Samuel is not praying for help yet to come. He is naming what has already happened. That is the grammar of faith: not "the Lord will help," but "the Lord has helped." The stone stands as a witness that this is true.',
        },
        {
          kind: 'christ',
          id: 'christ-ebenezer',
          title: 'Christ Connection — Christ Our Ebenezer',
          html:
            'The cross is Jesus&apos; Ebenezer. Set between the old creation and the new. Between death and resurrection. Between judgment and mercy. At the foot of it, anyone who has fallen can say: hitherto the Lord has helped me. Not someday. Not eventually. Now. &ldquo;It is finished&rdquo; (John 19:30). The victory is accomplished. The stone is set. The help is real and within reach.',
        },
        {
          kind: 'carry',
          html:
            'Where is your Ebenezer? Where has God come through in a way you can point to and say: there. That is real. That is proof He helps. He does not ask you to live on faith alone—He gives you stones to stand on. Bread that was eaten yesterday teaches faith for today&apos;s hunger. The friend who stayed, the prayer that was answered, the dark that God held you through—these are your Ebenezers. Name them. Set them up. Let them speak to your future.',
        },
        {
          kind: 'reflection',
          id: 'ebenezer',
          prompt:
            'What is your Ebenezer? Where can you look back and say with certainty: the Lord helped me there. And what does that stone tell you about today?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchTitle: /ebenezer|stone|memorial/i,
          caption: '1 Samuel 7:12 · Ebenezer, Stone of Help',
        },
      ],
    },

    /* ─── The Aftermath: Peace and Samuel&apos;s Leadership ─────────────── */
    {
      ref: '1 Samuel 7:13–17',
      title: 'Peace and Samuel&apos;s Faithful Circuit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 13,
              spans: [
                t('And the Philistines were subdued, and came no more into the coast of Israel: and '),
                hg('the hand of the Lord was against the Philistines all the days of Samuel', 'c-restrain'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-restrain',
          html:
            'The victory at Mizpeh is not temporary. The judgment endures. For all of Samuel&apos;s days—decades—the Philistines remain subdued. What God accomplishes is lasting.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 14,
              spans: [
                t('And the cities which the Philistines had taken from Israel were restored to Israel, from Ekron even unto Gath; and the coasts thereof did Israel deliver out of the hands of the Philistines. And there was peace between Israel and the Amorites.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 15,
              spans: [
                t('And Samuel judged Israel all the days of his life.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he '),
                hg('went from year to year in circuit', 'c-circuit'),
                t(' to Bethel, and Gilgal, and Mizpeh, and judged Israel in all those places.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And his return was to Ramah; for there was his house; and there he judged Israel; and he '),
                hg('built an altar unto the Lord', 'c-altar'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-circuit',
          html:
            'Samuel does not rule from a palace. He travels. He comes to the people. He shows up at Bethel, Gilgal, Mizpeh—the holy places and the places of judgment—and he judges them. A leader whose authority is grounded in truth and faithfulness, not in position.',
        },
        {
          kind: 'commentary',
          id: 'c-altar',
          html:
            'At his home in Ramah, Samuel builds an altar. His life is a kind of continuous offering—teaching, praying, interceding. The altar is not just a place of sacrifice; it is a place where heaven and earth meet. Samuel&apos;s whole life has become that meeting place.',
        },
        {
          kind: 'carry',
          html:
            'Samuel&apos;s life teaches a simple thing: after the great victory, after the stone is set, life goes on. He judges, he travels, he teaches, he intercedes. The miracles do not exempt him from faithfulness in small things. And the small things—showing up, being available, praying—are how a people stay delivered.',
        },
        {
          kind: 'reflection',
          id: 'after-ebenezer',
          prompt:
            'After a great answered prayer or a moment of deep deliverance, how do you live? What does faithfulness look like in the quiet seasons between miracles?',
        },
      ],
    },
  ],
};
