import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Numbers 36 — The chiefs of Manasseh approach Moses with a concern: the
 * statute from Numbers 27 allows Zelophehad&apos;s daughters to inherit if they
 * marry within the tribe, their inheritance will pass to another tribe and
 * diminish Manasseh&apos;s allotment even at Jubilee. Moses, "according to the word
 * of the Lord," affirms their concern. The daughters may marry whom they please,
 * but only within their father&apos;s tribe. Inheritance must not pass from tribe to
 * tribe. Zelophehad&apos;s daughters marry their cousins, sons of their father&apos;s
 * brothers, within Manasseh. The book closes: the Lord commanded all these
 * statutes by the hand of Moses in the plains of Moab by Jordan near Jericho —
 * Israel stands on the threshold of Canaan, all things prepared.
 *
 * Key themes: Law is not rigid; it accommodates mercy and order together. The
 * daughters submit cheerfully, their personal blessing held in line with
 * covenant order. The book closes on the very threshold of inheritance. This
 * points forward to Christ securing an inheritance incorruptible and undefiled.
 */
export const NUMBERS_36: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 36,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 13 },
  intros: [
    'Numbers 36 opens with the chiefs of Manasseh — the leaders of Machir&apos;s family — approaching Moses with a problem. The statute from Numbers 27 is good and right: if a man dies without sons, his daughters inherit. But what about the tribes? If Zelophehad&apos;s daughters marry men from another tribe, their inheritance goes with them to that tribe. Over time, Manasseh loses land and shrinks. Even at the Jubilee, when all land returns to its original owners, the daughters&apos; inheritance does not return — it stays in the other tribe. The law as it stands creates a loophole that unravels tribal boundaries.',
    'Moses listens. He brings the matter before the Lord. The Lord affirms the chiefs&apos; concern and gives a ruling: the statute stands. The daughters may marry whomever they choose. But they must marry within the tribe. The inheritance system stays intact. Mercy toward the daughters and order among the tribes are not enemies. Both can be honored together. Zelophehad&apos;s five daughters — Mahlah, Tirzah, Hoglah, Milcah, and Noah — marry their cousins, the sons of their father&apos;s brothers. The family stays whole. The inheritance stays in Manasseh.',
    'The book ends. No more wilderness. No more wandering. The people stand in the plains of Moab, by the Jordan, near Jericho. Everything is in place: the law is settled, the leaders are appointed, the tribes are positioned. The next turn of the page is Deuteronomy — and the final words will be: "I have set before you life and death, blessing and curse: therefore choose life" (Deut. 30:15). Numbers ends not with arrival but with readiness. The threshold. The choice. The door opening onto everything God promised.',
  ],

  bottomShare: {
    label: 'Share Numbers 36',
    quote:
      'The daughters of Zelophehad married within their tribe so their inheritance would not pass to another tribe. The book closes: "These are the commandments and the judgments which the Lord commanded by the hand of Moses unto the children of Israel in the plains of Moab by Jordan near Jericho."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 36 · Study Guide',
  },

  sections: [
    /* ─── Numbers 36:1–4 — Manasseh Raises Their Concern ────────────────── */
    {
      ref: 'Numbers 36:1–4',
      title: 'The Chiefs of Manasseh Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            verse(1,
              t('And the chief fathers of the families of the children of Gilead, the son of Machir, the son of Manasseh, of the families of Manasseh, came near, and spake before Moses, and before the princes, the chief fathers of the children of Israel:')
            ),
            verse(2,
              t('And they said, The Lord commanded my lord to '),
              hg('give the land for an inheritance by lot to the children of Israel', 'land-by-lot'),
              t(': and my lord was commanded by the Lord to give the inheritance of Zelophehad our brother unto his daughters.')
            ),
            verse(3,
              t('Now if they be married to any of the sons of the other tribes of the children of Israel, then shall their inheritance be taken from the inheritance of our fathers, and shall be put to the inheritance of the tribe whereunto they are received: so shall it be taken from the lot of our inheritance.')
            ),
            verse(4,
              t('And when the jubile of the children of Israel shall be, then shall their inheritance be put unto the inheritance of the tribe whereunto they are received: so shall their inheritance be taken away from the inheritance of the tribe of our fathers.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'land-by-lot',
          html:
            'The chiefs understand the whole system. The Lord gave the land by lot to the twelve tribes. Each tribe receives a fixed portion. If that portion can be parceled out to other tribes through marriage, the map itself becomes unstable. The boundary between Manasseh and its neighbors blurs. The inheritance God assigned becomes uncertain.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-concern',
          html:
            'Notice how the chiefs speak. They are not angry. They do not accuse the daughters of wrongdoing. They raise a <em>technical</em> problem: the law from Numbers 27 is good, but it creates an unforeseen consequence. They are thinking like administrators, not like men defending their territory. They bring the problem to Moses and ask for guidance.',
        },
        {
          kind: 'carry',
          html:
            'When you see a problem — not in someone else&apos;s life, but in a system or a law that was meant to help — the faithful response is not to attack the law or the people it was meant to protect. It is to bring the problem to the person with authority and ask for wisdom. The chiefs could have said the daughters shouldn&apos;t inherit at all. Instead they said: the law is right, but it needs one more thing.',
        },
        {
          kind: 'reflection',
          id: 'reflection-manasseh',
          prompt: 'When have you noticed a law or a rule that was meant to help one group but created a problem somewhere else? How did you respond?',
        },
      ],
    },

    /* ─── Numbers 36:5–9 — The Lord&apos;s Answer ──────────────────────────── */
    {
      ref: 'Numbers 36:5–9',
      title: 'The Word of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            verse(5,
              t('And Moses commanded the children of Israel '),
              hp('according to the word of the Lord', 'word-of-lord-36'),
              t(', saying, The tribe of the sons of Joseph hath said well.')
            ),
            verse(6,
              t('This is the thing which the Lord hath commanded concerning the daughters of Zelophehad, saying, '),
              hg('Let them marry to whom they think best', 'marry-whom-they-will'),
              t('; only to the family of the tribe of their father shall they marry.')
            ),
            verse(7,
              t('So shall not the inheritance of the children of Israel remove from tribe to tribe: for every one of the children of Israel shall keep himself to the inheritance of the tribe of his fathers.')
            ),
            verse(8,
              t('And every daughter, that possesseth an inheritance in any tribe of the children of Israel, shall be wife unto one of the family of the tribe of her father, that the children of Israel may enjoy every man the inheritance of his fathers.')
            ),
            verse(9,
              t('Neither shall the inheritance remove from one tribe to another tribe; but every one of the tribes of the children of Israel shall keep himself to his own inheritance.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'word-of-lord-36',
          html:
            'Moses does not make this ruling from his own wisdom. He says, "according to the word of the Lord." He is not the lawmaker; he is the messenger. The statute comes from God, not from Moses or from the assembled leaders. This is how the Bible understands authority: even Moses, even the greatest prophet, is under God.',
        },
        {
          kind: 'commentary',
          id: 'marry-whom-they-will',
          html:
            'The statute is breathtaking in its balance. The daughters are not forced into marriages they do not choose. They retain their agency: "let them marry to whom they think best." At the same time, there is a boundary: only within the tribe. Freedom and order are not opposites here. They work together.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-matteh',
          title: 'Matteh — "tribe"',
          script: 'מַטֶּה',
          translit: '<strong>matteh</strong> · rod, staff, tribe; the sign of authority and identity',
          description:
            'A matteh was originally a rod or staff — the sign of a leader&apos;s authority (like Aaron&apos;s rod). By extension it became the name for the tribe itself. To keep inheritance within your matteh is to keep your identity, your place in Israel, intact.',
        },
        {
          kind: 'commentary',
          id: 'statute-repeats',
          html:
            'The same statute is given three times in verses 6, 7, and 9 — "keep himself to the inheritance of the tribe of his fathers." Repetition in Scripture is emphasis. The tribal boundaries are not negotiable. Not because women are inferior or daughters cannot inherit. Not because the daughters are wrong. But because the map of Israel, the very shape of the covenant community, depends on it.',
        },
        {
          kind: 'commentary',
          id: 'mercy-and-order',
          html:
            'Here is the theological point: mercy and order are not enemies. God did not choose between affirming the daughters and protecting the tribes. He did both. The daughters inherit — their father&apos;s name is not erased, their family line survives. The tribes stay intact — Manasseh does not shrink, the map does not blur. Both goods are preserved together.',
        },
        {
          kind: 'christ',
          id: 'christ-inheritance',
          title: 'Christ Connection — An Inheritance Incorruptible',
          html:
            'Peter writes: "To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you" (1 Peter 1:4). Numbers 36 is a story about protecting an earthly inheritance — land that must stay within a tribe, even as it honors the daughters. But that inheritance, for all its beauty, can be lost. Boundaries can blur. Generations can pass and forget. Jesus inherits and secures an inheritance that cannot blur, cannot be taken, cannot corrupt. He brings His people into a covenant not written on parchment but written on the heart, an inheritance not measured in acres but in the very presence of God.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a position where you must hold two things together — mercy for a person and order for a system, fairness for the few and stability for the many — God says it is possible. Not by collapsing one into the other, but by listening, by asking for wisdom, by letting mercy speak and letting justice answer, and by trusting that there is a way to honor both. You may not see it at first. But it is there.',
        },
        {
          kind: 'reflection',
          id: 'reflection-statute',
          prompt: 'Where in your own life do you need to hold mercy and order together? What would it look like to honor both?',
        },
      ],
    },

    /* ─── Numbers 36:10–13 — The Daughters Obey ────────────────────────── */
    {
      ref: 'Numbers 36:10–13',
      title: 'The Daughters Marry Within Their Tribe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            verse(10,
              t('Even as the Lord commanded Moses, so did the daughters of Zelophehad:')
            ),
            verse(11,
              t('For '),
              hg('Mahlah, Tirzah, and Hoglah, and Milcah, and Noah', 'five-daughters-36'),
              t(', the daughters of Zelophehad, were married unto their father&apos;s brothers&apos; sons.')
            ),
            verse(12,
              t('And they were married into the families of the sons of Manasseh the son of Joseph: and their inheritance remained in the tribe of the family of their father.')
            ),
            verse(13,
              t('These are the commandments and the judgments, which '),
              hp('the Lord commanded by the hand of Moses', 'moses-hand'),
              t(' unto the children of Israel in the plains of Moab by Jordan near Jericho.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'five-daughters-36',
          html:
            'The five names appear one last time: Mahlah, Tirzah, Hoglah, Milcah, and Noah. They are named in the inheritance law (Numbers 27) and named again in the statute that completes it (Numbers 36). This is how Israel remembers. The daughters are not forgotten. They are part of the legal record.',
        },
        {
          kind: 'commentary',
          id: 'marry-cousins',
          html:
            'They marry their father&apos;s brothers&apos; sons — their cousins. This keeps the family whole and the tribe intact. The inheritance stays in Manasseh, within their father&apos;s family line. It is a solution that honors everyone: the daughters get the inheritance, the family line continues, the tribe is not fractured.',
        },
        {
          kind: 'commentary',
          id: 'inheritance-remained',
          html:
            'The text emphasizes: "their inheritance remained in the tribe." Not scattered, not divided, not passed away. It remained. The daughters secured both their own future and their family&apos;s place in the land. Their obedience to the statute was not a loss. It was the protection of everything their father wanted for them.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the life you are offered — the man God puts in your path, the place you are called to, the boundary you are asked to respect — feels smaller than the vision in your heart. But the daughters of Zelophehad teach us that accepting a boundary is not always a diminishment. It can be a protection. It can be a way to keep what matters most. They married their cousins and kept their inheritance, their name, their father&apos;s place in Israel. They chose the narrower road and arrived exactly where they needed to be.',
        },
        {
          kind: 'reflection',
          id: 'reflection-obey',
          prompt: 'Where have you found that keeping a boundary, accepting a limit, or honoring a structure actually protected what you wanted most?',
        },
      ],
    },

    /* ─── Numbers 36:13 — The Book Closes ────────────────────────────── */
    {
      ref: 'Closing Frame · Numbers 36:13',
      title: 'The Plains of Moab: Ready to Cross',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            verse(13,
              t('These are the commandments and the judgments, which the Lord commanded by the hand of Moses unto the children of Israel in the plains of Moab by Jordan near Jericho.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'closing-frame',
          html:
            'The book of Numbers ends not with arrival but with readiness. "In the plains of Moab by Jordan near Jericho" — Israel stands at the very edge. The river is in sight. The land is in sight. They have been wandering for forty years, and now they are here. The statutes are settled. The leaders are appointed. The inheritance is divided. Nothing is left but to cross.',
        },
        {
          kind: 'commentary',
          id: 'by-hand-of-moses',
          html:
            'All these commandments and judgments came "by the hand of Moses." Moses is the instrument, not the author. He stands at the threshold but will not cross. He is the one who brings the people to the edge of everything God promised, and then steps back so Joshua can lead them in. The greatest prophet of Israel teaches his successor and releases him into his destiny.',
        },
        {
          kind: 'commentary',
          id: 'plains-of-moab',
          html:
            'The plains of Moab are not Canaan. They are the last stop. They are Egypt not yet entered. This is where every believer stands sometimes — between the old life and the new, between the desert and the promised land, between what you were and what God is calling you to become. The threshold is not nothing. At the threshold, you are prepared. You are ready. You are standing on the very ground where the promise becomes real.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a season of waiting — between one chapter and another, between the old life and the new, standing at some kind of threshold — this is sacred ground. The plains of Moab. Not yet across, but fully ready. All the preparation is behind you. All the commandments are in your heart. The river is in sight. The promise is real. Trust that you are exactly where you need to be, and that the crossing is coming.',
        },
        {
          kind: 'artwork',
          matchTitle: /canaan|promised land|jordan/i,
          caption: 'Numbers 36:13 · The Threshold of Inheritance',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'reflection-threshold',
          prompt: 'What threshold are you standing at right now? What would it mean to trust that you are fully prepared to cross?',
        },
        {
          kind: 'christ',
          id: 'christ-closing',
          title: 'Christ Connection — The Inheritance Secured',
          html:
            'Numbers ends at the threshold. Canaan is promised but not yet possessed. Jesus fulfills that promise. He does not stand at the threshold; He enters the Holy of Holies as High Priest and secures an inheritance for His people — not acres of land, but the presence of God Himself, forever. Hebrews says He is "the mediator of a better covenant, which was established upon better promises" (Heb. 8:6). Better than Canaan. Better than Moses. Better than the Law. The one all of Numbers has been pointing toward.',
        },
      ],
    },
  ],
};
