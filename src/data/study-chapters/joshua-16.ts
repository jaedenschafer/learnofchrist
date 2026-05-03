import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 16 — Joseph&apos;s inheritance: Ephraim and Manasseh divide the land.
 * The theme: incomplete obedience brings compromise that later becomes a snare.
 */
export const JOSHUA_16: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 16,

  estimatedMinutes: { 5: 4, 10: 7, 15: 10 },
  intros: [
    'Joshua 16 records the fulfillment of Jacob&apos;s blessing in Genesis 48: Joseph&apos;s inheritance is split between his two sons, Ephraim and Manasseh, and they divide the best land west of the Jordan. Ephraim&apos;s territory includes Bethel — the house of God where Jacob once saw the ladder — and other sacred ground soaked in covenant promise. But there is a dark thread running through the chapter: the Canaanites of Gezer remain unconquered, allowed to live within Ephraim&apos;s borders under tribute.',
    'That detail repeats a pattern from Joshua 15. Israel was commanded to drive out the nations entirely — the herem, the complete separation that consecrates the land. Instead they chose a easier path: economic gain without full obedience. The Canaanites stay, enslaved and taxed. It sounds practical. It will later prove to be the beginning of Israel&apos;s spiritual compromise, a detail Judges will unfold in bitter detail. Every incomplete obedience to God carries a cost the obedient person rarely sees coming.',
  ],

  sections: [
    /* ─── Joshua 16:1–4 — Joseph&apos;s Children Share the Lot ─────────────────── */
    {
      ref: 'Joshua 16:1–4',
      title: '"Joseph&apos;s children take their inheritance"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('the lot of the children of Joseph', 'joseph-lot'),
                t(' fell from Jordan by Jericho, unto the water of Jericho on the east, to the wilderness that goeth up from Jericho throughout mount Bethel;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And goeth out from Bethel to Luz, and passeth along unto the borders of Archi to Ataroth;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And goeth down westward to the coast of Japhleti, unto the coast of Beth-horon the nether, and to Gezer; and the goings out thereof are at the sea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joseph-lot',
          html:
            'Jacob&apos;s blessing of Joseph in Genesis 48 is now made literal. Joseph, who was sold into Egypt, whose brothers betrayed him, receives the inheritance. Ephraim is elevated over the firstborn Manasseh — a reversal that fulfills Jacob&apos;s explicit word. The boundaries sweep from Jordan to the Mediterranean, from mountain heights to coastal plain. This is not scraps; it is premium land, given to a son who was lost and now is found.',
        },
        {
          kind: 'christ',
          id: 'christ-joseph',
          title: 'Christ Connection — The Rejected One Receives Everything',
          html:
            'Joseph foreshadows the One who is rejected, sold, betrayed — yet the one through whom all blessing flows to the nations. Peter writes of Jesus: &ldquo;Being disallowed indeed of men, but chosen of God, and precious&rdquo; (1 Peter 2:4). The very rejection that seemed to end Joseph&apos;s story became the means of his exaltation. So too the cross becomes the throne, and the One cast out becomes the cornerstone on which everything rests.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ephraim',
          title: 'Ephraim — "double fruitfulness"',
          script: 'אֶפְרַ֫יִם',
          translit: '<strong>Ephraim</strong> · the fruitful one',
          description:
            'The name echoes Genesis 41:52: "God hath made me fruitful in the land of my affliction." Even in Egypt, where Joseph suffered, God opened his fruitfulness. The land of Ephraim will carry that same promise — a place where blessing multiplies despite past hardship.',
        },
        {
          kind: 'carry',
          html:
            'If your own story includes loss, betrayal, or a season in Egypt — a place where you thought the promise had ended — notice that Joseph&apos;s naming itself declares that fruitfulness was always God&apos;s intention, even in affliction. You are not less chosen because you were rejected by others. The very thing meant to bury you may be the ground God uses to make you fruitful.',
        },
        {
          kind: 'reflection',
          id: 'joseph-rejected',
          prompt:
            'When have you felt like Joseph — cast aside, overlooked, your gifts unused? How might God be planning fruitfulness in that very place?',
        },
      ],
    },

    /* ─── Joshua 16:5–9 — Ephraim&apos;s Borders and Contested Cities ─────────── */
    {
      ref: 'Joshua 16:5–9',
      title: 'The borders of Ephraim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 5,
              spans: [
                t('And the '),
                hy('border of the children of Ephraim', 'ephraim-borders'),
                t(' according to their families was thus: even the border of their inheritance on the east side was Ataroth-addar, unto Beth-horon the upper;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the border went out toward the sea to Michmethah on the north side; and the border went about eastward to Taanath-shiloh, and passed by it on the east to Janohah;'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And it went down from Janohah to Ataroth, and to Naarath, and came to Jericho, and went out at Jordan.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('From Tappuah the border went along on the west side of the river Kanah; and the goings out thereof were at the sea. '),
                hy('This is the inheritance of the tribe of the children of Ephraim', 'ephraim-inherit'),
                t(' by their families.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ephraim-borders',
          html:
            'The boundaries are meticulously marked — east, north, west, south. Ataroth, Beth-horon, Michmethah, Taanath-shiloh, Janohah, Naarath, Jericho itself — these are not abstract coordinates but towns and heights where Ephraim will live, work, worship, and build altars. The territory frames what is Ephraim&apos;s and what is another tribe&apos;s. Clarity of inheritance matters to God.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 9,
              spans: [
                t('And all the cities that were separated for the children of Ephraim in the midst of the inheritance of the children of Manasseh, all these cities with their villages. And they drave not out the Canaanites that dwelt in Gezer: but the Canaanites dwell among the Ephraimites unto this day, and serve under tribute.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ephraim-inherit',
          html:
            'Verse 9 contains a troubling detail: some of Ephraim&apos;s cities sit inside Manasseh&apos;s territory, and the tribes overlap without friction — for now. The real problem is what comes next: the Canaanites of Gezer were never expelled. They remain &ldquo;unto this day,&rdquo; meaning this was still true when the text was written. The Canaanites work as forced labor, paying tribute. It sounds practical, but it is the first crack in Israel&apos;s obedience.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gezer',
          title: 'Gezer — a fortress city left standing',
          script: 'גֶּזֶר',
          translit: '<strong>Gezer</strong> · a city of the plain',
          description:
            'Gezer was a strategic stronghold. Perhaps leaving it in place seemed wise — fewer soldiers needed, fewer lives lost. But wisdom bent toward convenience is always a bargain with the future.',
        },
        {
          kind: 'carry',
          html:
            'There are Canaanites in your own land too — patterns, habits, small compromises you made because the full obedience seemed too costly. &ldquo;Just this one thing,&rdquo; you say. &ldquo;It&apos;s manageable. I can live with it.&rdquo; But these things rarely stay small. They remain &ldquo;unto this day&rdquo; — not in a historical record, but in your own life, until you finally address them.',
        },
        {
          kind: 'reflection',
          id: 'canaanites-compromise',
          prompt:
            'What &ldquo;Canaanites&rdquo; have you left standing in your life — concessions you made rather than obey fully? What would full obedience look like?',
        },
        {
          kind: 'artwork',
          matchTitle: /canaanite|gezer/i,
          caption: 'Joshua 16:9 · Unconquered Peoples',
        },
      ],
    },

    /* ─── Joshua 16:9b — The Cost of Tribute ────────────────────────────── */
    {
      ref: 'Joshua 16:9b',
      title: 'Serving under tribute',
      blocks: [
        {
          kind: 'commentary',
          id: 'mas-tribute',
          html:
            'The phrase &ldquo;serve under tribute&rdquo; uses the Hebrew word <em>mas</em>, which means forced labor or compulsory service. Israel chose economic gain — the labor of enslaved Canaanites — over the herem, the command to completely separate the holy from the unholy. The math looked good. The obedience did not. By Judges 1, Ephraim and other tribes will find their unconquered neighbors have become spiritual snares, leading Israel into idolatry and away from covenant.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mas',
          title: 'Mas — "forced labor, tribute"',
          script: 'מַס',
          translit: '<strong>mas</strong> · compulsory service, tax, burden',
          description:
            'The root <em>mas</em> appears in later texts to describe the corvée — forced labor systems. The word carries a weight: this is not free trade but coercion, not partnership but domination. The cost of that domination will collect interest.',
        },
        {
          kind: 'christ',
          id: 'christ-little-leaven',
          title: 'Christ Connection — The Danger of Partial Obedience',
          html:
            'Paul writes: &ldquo;A little leaven leaveneth the whole lump&rdquo; (Galatians 5:9). One Canaanite city left standing in Gezer does not seem significant. But compromise in obedience is never small. The pattern Israel set here — immediate gain over complete faithfulness — shapes the entire history of the Judges. The gods of the land begin to be whispered about. Intermarriage follows. Then comes full-blown idolatry. What began as a practical decision becomes a spiritual disaster. Partial obedience is not obedience; it is the beginning of something else.',
        },
        {
          kind: 'carry',
          html:
            'The voice that whispers &ldquo;you can live with this small compromise&rdquo; is rarely honest about what that compromise will cost a year from now, or five years from now. The leaven works slowly at first. You don&apos;t see it rising. But you will feel it eventually — the way the whole shape of your walk with God has shifted. The question is not whether you can manage one small disobedience. The question is what it will grow into.',
        },
        {
          kind: 'reflection',
          id: 'leaven-lump',
          prompt:
            'Name one area where you have been saying &ldquo;good enough&rdquo; instead of obeying fully. What leaven is that beginning to work in your spiritual life?',
        },
      ],
    },

    /* ─── Theology: The Principle of Separation ────────────────────────────── */
    {
      ref: 'Joshua 16 · The Theme',
      title: 'Sacred geography and the cost of tolerance',
      blocks: [
        {
          kind: 'commentary',
          id: 'sacred-place',
          html:
            'Notice where Ephraim&apos;s land sits: Bethel is in their inheritance. Genesis 28 is suddenly present in every boundary description — the place where Jacob rested and saw the ladder, where God promised &ldquo;I am with thee.&rdquo; Ephraim lives in sacred geography. The land itself is a perpetual reminder of God&apos;s covenant. That is the gift. But the gift comes with a command: consecrate it. Do not compromise it. The Canaanites in Gezer are not neutral neighbors; they are the test of whether Israel will keep the land holy.',
        },
        {
          kind: 'commentary',
          id: 'separation-meaning',
          html:
            'Throughout Joshua, the command is always the same: <em>drive out</em>, <em>destroy</em>, <em>take possession</em>. The land must be cleansed. This is not a reflection of ancient warfare norms (other peoples did not make this the center of their theology). It is a reflection of holiness — a principle that the holy cannot coexist with the unholy without the holy being compromised. Israel understood this. They simply chose not to believe it would cost them anything to ignore it. Every time a believer has made that same choice, history has proven them wrong.',
        },
        {
          kind: 'carry',
          html:
            'If there is any part of your internal landscape — your thoughts, your habits, your entertainment, your relationships — where you are tolerating something unholy because removing it seems too difficult or costly, you are building a Gezer. You are paying tribute to something that does not belong in the land God has given you. The land is not small. The cost of full obedience is much smaller than the cost of the compromise that seems so manageable now.',
        },
        {
          kind: 'reflection',
          id: 'sacred-land',
          prompt:
            'What would &ldquo;driving out the Canaanites&rdquo; look like in one specific area of your spiritual life? What would full obedience require?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 16',
    quote:
      'Ephraim and Manasseh inherited Joseph&apos;s land, including the sacred ground of Bethel. But they left the Canaanites of Gezer unconquered, choosing economic gain over complete obedience — a compromise that would later bear bitter fruit.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 16 · Study Guide',
  },

  hasHebrew: true,
};
