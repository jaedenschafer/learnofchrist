import { hp, hy, hg, t, type RichChapterContent } from './types';

export const EXODUS_13: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 13,

  estimatedMinutes: { beginner: 8, intermediate: 11, deep: 14 },
  intros: [
    'Exodus 13 is about belonging. Every firstborn — of humans, of animals — belongs to God. It is the rule written into the Exodus itself: God claims the firstborn because He redeemed the firstborn. The people of Israel walk out of Egypt, and God makes a covenant written in flesh: every son who comes into a family now belongs to the Lord first. Redemption is costly, and it marks everything it touches.',
    'The chapter also marks the path God takes His people by. He does not take the road to Philistia — the short route, the safe route, the sensible route. Instead He leads them into the wilderness. Sometimes the detour is the faithfulness. God walks ahead in a pillar of cloud by day and a pillar of fire by night — His visible presence, His company, His proof that He has not abandoned them. Joseph&apos;s bones are carried with them, a reminder that God keeps His promises even when bodies have to wait in tombs.',
  ],

  sections: [
    /* ─── Exodus 13:1–2 — Firstborn Belong to God ─────────────────────── */
    {
      ref: 'Exodus 13:1–2',
      title: 'Firstborn Set Apart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                hy('Sanctify', 'hebrew-qodesh'),
                t(' unto me all the firstborn, whatsoever '),
                hg('openeth the womb', 'c-firstborn'),
                t(' among the children of Israel, both of man and of beast: it is mine.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qodesh',
          title: 'Qodesh — &ldquo;set apart&rdquo;',
          script: 'קֹדֶשׁ',
          translit: '<strong>qodesh</strong> · consecrated, belonging to God alone',
          description:
            'The firstborn are not dedicated to God as an afterthought — they are qodesh, permanently set apart, like the temple or the altar. They belong to Him in a category of their own.',
        },
        {
          kind: 'commentary',
          id: 'c-firstborn',
          html:
            'In the Exodus, God killed every firstborn of Egypt but passed over the houses marked with blood. Now He claims the firstborn of Israel for Himself. This is not punishment; it is the proof of redemption written in the very beginning of life. The firstborn is a reminder that God redeemed this whole people from death[res:exodus-departure].',
        },
        {
          kind: 'carry',
          html:
            'Every beginning carries a debt. Every new thing — a job, a child, a season — arrives because something has already been redeemed, already paid for. The firstborn law of Exodus is a call to remember that the first thing that arrives in your life is not yours to hoard. It belongs to the God who brought you out. That first paycheck, that first fruit, that first idea — they are marked. They belong to Him.',
        },
        {
          kind: 'reflection',
          id: 'firstborn-set-apart',
          prompt:
            'What is the first thing in your life right now that needs to be set apart as belonging to God? How would your day change if you treated it that way?',
        },
      ],
    },

    /* ─── Exodus 13:3–10 — Remember the Feast ────────────────────────── */
    {
      ref: 'Exodus 13:3–10',
      title: 'The Feast of Unleavened Bread',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 3,
              spans: [
                t('And Moses said unto the people, '),
                hg('Remember this day', 'c-remember'),
                t(', in which ye came out from Egypt, out of the house of bondage; for by strength of hand the LORD brought you out from this place: there shall no leavened bread be eaten.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-remember',
          html:
            'God does not ask them to understand the theology of leaven. He asks them to remember — to carry the taste and weight of the escape in their bodies, year after year. Leavened bread is what you eat when you have time to wait. Unleavened bread is what you eat when you run. This meal is a body&apos;s memory of what redemption felt like[res:pillar-fire].',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('This day came ye out in the month Abib.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it shall be when the LORD shall bring thee into the land of the Canaanites, and the Hittites, and the Amorites, and the Hivites, and the Jebusites, which he sware unto thy fathers to give thee, a land flowing with milk and honey, that thou shalt keep this service in this month.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Seven days thou shalt eat '),
                hy('unleavened bread', 'c-unleavened'),
                t(', and in the seventh day shall be a feast to the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unleavened',
          html:
            'God has not yet brought them to the land, but He speaks as if He has. The future land is already real to Him. And when they get there, the feast does not stop. It becomes permanent — not as a law they obey reluctantly, but as a remembrance they keep forever, in the place of rest, long after the escape is finished.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 7,
              spans: [
                t('Unleavened bread shall be eaten seven days; and there shall no leavened bread be seen with thee, neither shall there be leaven seen with thee in all thy quarters.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And thou shalt shew thy son in that day, saying, This is done because of that which the LORD did for me when I came forth out of Egypt.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And it shall be for a sign unto thee upon thine hand, and for a memorial between thine eyes, that the LORD&apos;s law may be in thy mouth: for with a strong hand hath the LORD brought thee out of Egypt.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Thou shalt therefore keep this ordinance in his season from year to year.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The feast is how a whole people keeps redemption from becoming a story that fades. Year after year, your child asks, &ldquo;Why do we eat this bread without leaven?&rdquo; And you have to tell them: because God brought us out. It is a meal that requires you to remember out loud, to name what He did, to eat the history of His faithfulness. What rhythm in your own life keeps you from forgetting what He has already done?',
        },
        {
          kind: 'reflection',
          id: 'feast-remember',
          prompt:
            'What is one redemption in your life that needs to become a rhythm you return to — a day, a meal, a practice that keeps you from forgetting?',
        },
      ],
    },

    /* ─── Exodus 13:11–16 — Redemption of the Firstborn ────────────────── */
    {
      ref: 'Exodus 13:11–16',
      title: 'Redemption by the Lamb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 11,
              spans: [
                t('And it shall be when the LORD shall bring thee into the land of the Canaanites, as he sware unto thee and to thy fathers, and shall give it thee,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('That thou shalt set apart unto the LORD all that openeth the matrix, and every firstling that cometh of a beast which thou hast; the males shall be the LORD&apos;s.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And every firstling of an ass thou shalt redeem with a lamb; and if thou wilt not redeem it, then thou shalt break his neck: and all the firstborn of man among thy children shalt thou redeem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-redeem-lamb',
          html:
            'The firstborn male of every family could have been sacrificed to God — that is the standard of His claim. Instead, God gives a way out: a lamb can take the place of the son. The lamb dies; the son lives. This is the mechanism of substitution written into the law itself.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 14,
              spans: [
                t('And it shall be when thy son asketh thee in time to come, saying, What is this? that thou shalt say unto him, By strength of hand the LORD brought us out from Egypt, from the house of bondage:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And it came to pass, when Pharaoh would hardly let us go, that the LORD slew all the firstborn in the land of Egypt, both the firstborn of man, and the firstborn of beast: therefore I sacrifice to the LORD all that openeth the matrix, being males; but all the firstborn of my children I redeem.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And it shall be for a '),
                hy('token', 'c-token'),
                t(' upon thine hand, and for frontlets between thine eyes: for by strength of hand the LORD brought us out of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-token',
          html:
            'The redemption price is worn as a sign. It marks the body as God&apos;s. A man who redeems his firstborn is declaring in public: I do not own my own child. God does. I have bought him back at the price of a life.',
        },
        {
          kind: 'christ',
          id: 'christ-lamb',
          title: 'Christ Connection — The Firstborn Redeemed by the Lamb',
          html:
            'Luke records Mary and Joseph bringing the infant Jesus to the temple to redeem him as the firstborn — Luke 2:23 cites this very passage. The irony is absolute: the Lamb who will redeem all the firstborn has Himself arrived as a firstborn. But in the fullness of time, Jesus does not merely die as a substitute for one son — He becomes the Lamb whose blood redeems all of us. John sees it: &ldquo;Behold the Lamb of God, which taketh away the sin of the world&rdquo; (John 1:29). Every firstborn redeemed by a lamb in Exodus is a foreshadow of the one Lamb redeemed at the cross.',
        },
        {
          kind: 'carry',
          html:
            'You were bought with a price — not silver, not the life of an animal, but the life of God in flesh. The Lamb who stands at the center of your redemption is not far away. The price has already been paid. To live redeemed is simply to live remembering: you do not belong to yourself anymore. You belong to the One who bought you. That is not bondage. That is the only freedom there is.',
        },
        {
          kind: 'reflection',
          id: 'firstborn-redeemed',
          prompt:
            'Jesus was redeemed as a firstborn under this very law. What does it change to know that the Lamb who redeems you was Himself obedient to every law He gave?',
        },
      ],
    },

    /* ─── Exodus 13:17–18 — The Wilderness Road ──────────────────────── */
    {
      ref: 'Exodus 13:17–18',
      title: 'Not the Shortest Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 17,
              spans: [
                t('And it came to pass, when Pharaoh had let the people go, that God led them not through the way of the land of the Philistines, although that was near; for God said, Lest peradventure the people '),
                hg('repent when they see war', 'c-war-turn'),
                t(', and they return to Egypt:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But God led them about, through the way of the wilderness of the Red sea: and the children of Israel went up harnessed out of the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-war-turn',
          html:
            'God does not take them the shortest way. The Philistine road is straight and clear. But it has war at the end — Philistine soldiers. God chooses the long way, the hard way, the wilderness way. He knows they are not yet ready to fight. They would turn back. Sometimes the detour is the route of faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'When you are being led out of something — a pattern, a place, a version of yourself that was never meant to hold you — the path rarely looks like what you imagined. It is longer. It seems to go the wrong direction. You pass through a desert when you could have, you thought, walked straight into the Promised Land. But God sees what you are not yet ready to face. The long way is love. The wilderness is His way of getting you ready before you arrive.',
        },
        {
          kind: 'reflection',
          id: 'wilderness-road',
          prompt:
            'Where is God leading you the long way right now instead of the quick one? Can you name one way the detour is becoming clearer as protection?',
        },
      ],
    },

    /* ─── Exodus 13:19 — Joseph&apos;s Bones ───────────────────────────────── */
    {
      ref: 'Exodus 13:19',
      title: 'Promise Kept',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 19,
              spans: [
                t('And '),
                hg('Moses took the bones of Joseph', 'c-joseph-bones'),
                t(' with him: for he had straitly sworn the children of Israel, saying, God will surely visit you; and ye shall carry up my bones away hence with you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joseph-bones',
          html:
            'Joseph died in Egypt, but he never believed Egypt was his home. Genesis 50:25 records his oath: &ldquo;God will surely visit you; and ye shall carry up my bones away hence with you.&rdquo; Now, four hundred years later, Moses carries those bones out. God is that faithful. He keeps promises written in tombs. No one is left behind.',
        },
        {
          kind: 'carry',
          html:
            'When you follow God, you are not leaving the dead behind. You are not erasing the past. The bones of Joseph travel with Israel into the wilderness and eventually into the Promised Land. The faithfulness you cannot see yet — the promise made to someone you loved, the restoration that seems impossible — is being carried toward you. God does not move on without collecting what was left in the grave.',
        },
        {
          kind: 'reflection',
          id: 'joseph-bones',
          prompt:
            'What promise made to you or someone you love seems buried? How does Joseph&apos;s bones being carried out teach you about the God who waits in your future?',
        },
      ],
    },

    /* ─── Exodus 13:20–22 — Pillar of Cloud and Fire ────────────────── */
    {
      ref: 'Exodus 13:20–22',
      title: 'God Goes Before',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 20,
              spans: [
                t('And they took their journey from Succoth, and encamped in Etham, in the edge of the wilderness.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And '),
                hp('the LORD went before them', 'christ-presence'),
                t(' by day in a '),
                hy('pillar of a cloud', 'hebrew-ammud-anan'),
                t(', to lead them the way; and by night in a '),
                hy('pillar of fire', 'hebrew-ammud-esh'),
                t(', to give them light; to go by day and night:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('He took not away the pillar of the cloud by day, nor the pillar of fire by night, from before the people.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ammud-anan',
          title: 'Ammud he-anan — &ldquo;pillar of cloud&rdquo;',
          script: 'עַמּוּד הֶעָנָן',
          translit: '<strong>ammud</strong> · pillar; <strong>he-anan</strong> · the cloud',
          description:
            'God&apos;s visible presence — you can see it, touch the shadow of it, orient your day by it. Not a whisper. Not a feeling. A pillar, solid enough to lead a nation.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ammud-esh',
          title: 'Ammud ha-esh — &ldquo;pillar of fire&rdquo;',
          script: 'עַמּוּד הָאֵשׁ',
          translit: '<strong>ammud</strong> · pillar; <strong>ha-esh</strong> · the fire',
          description:
            'By night, God does not disappear. The fire grows brighter. The presence that leads by day becomes the presence that illuminates the dark. God&apos;s company is unbroken.',
        },
        {
          kind: 'commentary',
          id: 'c-pillar-cloud',
          html:
            'Notice: the pillar never leaves. &ldquo;He took not away the pillar.&rdquo; Forty years in the wilderness, and God&apos;s visible presence does not vanish for a single day. They do not have to navigate by memory. They do not have to guess. The evidence that God is there is concrete, visible, and constant.',
        },
        {
          kind: 'christ',
          id: 'christ-presence',
          title: 'Christ Connection — The Word Tabernacled',
          html:
            'The pillar of cloud and fire is God&apos;s visible companionship in the wilderness. Later, this same presence will fill the Tabernacle they are about to build — a portable tent where God will dwell among them. John connects the whole arc: &ldquo;The Word was made flesh, and dwelt among us… and we beheld his glory&rdquo; (John 1:14). The Greek word for &ldquo;dwelt&rdquo; is <em>eskenosen</em> — literally, &ldquo;pitched a tent.&rdquo; Jesus is the Tabernacle made flesh. God in human form, walking the same earth His people walk, visible and company.',
        },
        {
          kind: 'carry',
          html:
            'In your own wilderness — the dark season you cannot see past, the day when you do not know which way to turn — God has not left you without a sign. The Presence is still there. You may not feel it, but the text is clear: He does not take away His pillar. In the darkest night, look for the fire. It is His promise to remain, not for a season, but for the whole journey home.',
        },
        {
          kind: 'artwork',
          matchTitle: /pillar|cloud|fire|exodus|wilderness/i,
          caption: 'Exodus 13:21–22 · Pillar of Cloud and Fire',
        },
        {
          kind: 'reflection',
          id: 'pillar-fire',
          prompt:
            'Where is God leading you that you cannot yet see? How might trusting His pillar to guide you change the way you walk?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 13',
    quote:
      'Every firstborn belongs to God, redeemed by the lamb. The feast of unleavened bread remembers the Exodus forever. God leads His people not by the shortest road but by the wilderness, with a pillar of cloud by day and a pillar of fire by night, never leaving them without His presence.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 13 · Study Guide',
  },


  resources: [
    {
      id: 'exodus-departure',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Exodus: Departure',
      url: 'https://www.bibleodyssey.org/dictionary/exodus/',
      description: 'Study of the exodus narrative and theology.',
    },
    {
      id: 'pillar-fire-2',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Cloud and Fire',
      url: 'https://www.sefaria.org/Exodus.13',
      description: 'Hebrew text on the pillar and divine guidance.',
    },
  ],

  hasHebrew: true,
};
