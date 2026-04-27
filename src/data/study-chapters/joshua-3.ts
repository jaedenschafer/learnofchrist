import { hp, hy, hg, t, type RichChapterContent } from './types';

export const JOSHUA_3: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 3,

  intros: [
    'Joshua 3 is the story of Israel crossing the Jordan River — the final barrier between the wilderness and the promised land. The Jordan runs at flood stage. The priests carry the ark of God. When their feet touch the water, the river stops entirely. The priests stand on dry ground in the middle of the riverbed while all Israel crosses over. It is the second great sign of God&apos;s presence that defines a generation: the Red Sea for those who left Egypt, the Jordan for those who will inherit Canaan.',
    'The passage is built on a pattern that runs through all of Scripture: the people must follow the ark (the manifest presence of God), keep their distance from it in reverence, and obey without seeing the outcome in advance. God does not explain the miracle. He asks for faith first — then the waters part.',
  ],

  sections: [
    /* ─── Joshua 3:1–4 — Sanctify Yourselves ────────────────────────────── */
    {
      ref: 'Joshua 3:1–4',
      title: 'Sanctify Yourselves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('And Joshua rose early; and they removed from Shittim, and came to Jordan, he and all the children of Israel, and lodged there before they passed over.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And it came to pass after three days, that the officers went through the host;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And they commanded the people, saying, '),
                hy('When ye see the ark of the covenant', 'joshua-ark'),
                t(' of the Lord your God, and the priests the Levites bearing it, then ye shall '),
                hg('remove from your place, and go after it', 'joshua-follow'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Yet there shall be a space between you and it, about '),
                hy('two thousand cubits', 'joshua-distance'),
                t(' by measure: come not near unto it, that ye may know the way by which ye must go: for '),
                hp('ye have not passed this way heretofore', 'christ-new-path'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-follow',
          html:
            'Israel must follow the ark. Not Moses, not Joshua, not even the cloud pillar anymore. The physical presence of God, carried by the priests, leads the way. For a generation that has never crossed a river like this, that has never seen the promised land, that has heard only reports and stories — obedience means following something they cannot yet understand.',
        },
        {
          kind: 'hebrew',
          id: 'joshua-ark',
          title: 'Aron — &ldquo;ark&rdquo;',
          script: 'אָרוֹן',
          translit: '<strong>aron</strong> · a chest, a container, a covenant-bearer',
          description:
            'The ark holds the two tablets of the law. It is the throne of God in the wilderness. Where the ark goes, God goes. Israel&apos;s whole posture toward the impossible — the flooded Jordan — is shaped by the fact that the ark is going first.',
        },
        {
          kind: 'commentary',
          id: 'joshua-distance',
          html:
            'Two thousand cubits — roughly half a mile. Distance and proximity both matter. The ark must be followed, yet not crowded, not presumed upon. There is a reverence that keeps space. God goes before; we follow behind, keeping the distance that honour requires.',
        },
        {
          kind: 'carry',
          html:
            'In your own walk, what are you following? And is there a reverent distance in it, or have you crowded in trying to control the outcome? The deepest obedience often looks like this: following something you cannot yet see clearly, honoring its place ahead of you, trusting the one moving in front without needing to micromanage the route.',
        },
        {
          kind: 'reflection',
          id: 'sanctify',
          prompt:
            'What waters are you standing before right now — something you cannot cross without God moving first? How might you step closer to the reverent following the text describes, rather than trying to figure it out yourself?',
        },
      ],
    },

    /* ─── Joshua 3:5–7 — The Lord Will Do Wonders ───────────────────────── */
    {
      ref: 'Joshua 3:5–7',
      title: 'The Lord Will Do Wonders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 5,
              spans: [
                t('And Joshua said unto the people, '),
                hy('Sanctify yourselves', 'joshua-sanctify'),
                t(': for tomorrow the Lord will do '),
                hg('wonders among you', 'joshua-wonders'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Joshua spake unto the priests, saying, Take up the ark of the covenant, and pass over before the people. And they took up the ark of the covenant, and went before the people.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the Lord said unto Joshua, This day will I begin to '),
                hp('magnify thee in the sight of all Israel', 'christ-magnify'),
                t(', that they may know that, as I was with Moses, so I will be with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-sanctify',
          html:
            'Sanctify means to set apart, to cleanse, to make holy. Joshua calls the people to inner readiness — they cannot make the miracle happen by washing, but they can prepare their hearts to receive it. Sanctification is not cause, but it is prerequisite. God moves for a people who have made themselves ready to honor what He is about to do.',
        },
        {
          kind: 'hebrew',
          id: 'joshua-wonders',
          title: 'Nifla&apos;ot — &ldquo;wonders&rdquo;',
          script: 'נִפְלָאוֹת',
          translit: '<strong>nifla&apos;ot</strong> · things separated, set apart, extraordinary beyond human capacity',
          description:
            'Wonders are not tricks or displays. They are God&apos;s acts that separate Him from human power, that make plain He alone can do what He is about to do. The Jordan crossing is a wonder: the river is at its worst, the people are at their most helpless, and God moves.',
        },
        {
          kind: 'commentary',
          id: 'joshua-wonders-2',
          html:
            'Notice what God does not do: He does not ask the priests to find another place to ford. He does not suggest waiting until the water recedes. He chooses the moment of flood — the time the obstacle is at its worst. His power is not shown when the path is easy; it is shown when we are most dependent.',
        },
        {
          kind: 'christ',
          id: 'christ-magnify',
          title: 'Christ Connection — Magnified Through His Weakness',
          html:
            'God tells Joshua: "I will magnify you as I magnified Moses." Later, Christ will tell His disciples: "Greater love hath no man than this, that a man lay down his life for his friends" (John 15:13). Christ&apos;s magnification came through the cross — the moment He looked weakest. God magnifies His leaders not through displays of power, but through their obedience unto death. Joshua steps into the Jordan first, in faith; Christ entered death itself so that a people who could not save themselves might live.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a place where all your skill and effort feel small, where the obstacle seems larger than you, take it as the exact moment God often chooses to work. He does not need your competence; He needs your willingness to step in on His word alone. That is where magnification — real magnification, the kind that lasts — begins.',
        },
        {
          kind: 'reflection',
          id: 'wonders',
          prompt:
            'When did you last see God move in a way that could not be explained by human effort? What made that moment possible — what did you have to give up or trust?',
        },
      ],
    },

    /* ─── Joshua 3:8–10 — The Ark Passes Over ──────────────────────────── */
    {
      ref: 'Joshua 3:8–10',
      title: 'The Ark Passes Over',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('And thou shalt command the priests that bear the ark of the covenant, saying, When ye are come to the brim of the water of '),
                hy('Jordan', 'joshua-jordan'),
                t(', ye shall stand still in Jordan.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Joshua said unto the children of Israel, Come hither, and hear the words of the Lord your God. Hereby ye shall know that '),
                hg('the living God is among you', 'joshua-living-god'),
                t(', and that he will without fail drive out from before you the Canaanites, and the Hittites, and the Hivites, and the Perizzites, and the Girgashites, and the Amorites, and the Jebusites.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Behold, the ark of the covenant of '),
                hp('the Lord of all the earth', 'christ-lord-of-all'),
                t(' passeth over before you into Jordan.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'joshua-jordan',
          title: 'Yarden — &ldquo;Jordan&rdquo;',
          script: 'יַרְדֵּן',
          translit: '<strong>Yarden</strong> · the descender, the river that flows down from north to south',
          description:
            'The Jordan is not a peaceful river to cross. It flows downward, cutting a deep valley. At harvest time it floods its banks. The name itself speaks of descent and difficulty — yet this is precisely where God asks His people to step.',
        },
        {
          kind: 'commentary',
          id: 'joshua-living-god',
          html:
            'Joshua lists eight nations — the obstacles that seem insurmountable. But his word to Israel is: one God. Not eight gods competing with one God. Not a god as powerful as these nations&apos; gods. The living God. The one who alone breathes, moves, acts. When the presence of God is real and active among a people, all other powers shrink to their true size.',
        },
        {
          kind: 'christ',
          id: 'christ-lord-of-all',
          title: 'Christ Connection — The Ark as God&apos;s Throne',
          html:
            'The ark holds the law; it is the footstool of God&apos;s throne. Paul writes that Christ is "the image of the invisible God" (Colossians 1:15), and "in him dwelleth all the fulness of the Godhead bodily" (Colossians 2:9). What the ark was in the wilderness — the visible, accessible place where God&apos;s presence could be encountered — Christ is in the age of grace. He goes before His people into the deepest waters. Where He is, God Himself is present.',
        },
        {
          kind: 'carry',
          html:
            'When you face an obstacle that feels like standing before the Jordan at flood stage, the first truth to recover is: the living God is with you. Not with Israel only, not with Joshua only. The same God who led them across is present wherever His Spirit indwells His people. The nations and obstacles you face have no power that exceeds His.',
        },
        {
          kind: 'reflection',
          id: 'lord-of-all',
          prompt:
            'What does it actually mean to you, right now, that the living God is among you? What would it change if you lived tomorrow as though you believed it?',
        },
      ],
    },

    /* ─── Joshua 3:11–13 — The Priests Step Into the Flood ──────────────── */
    {
      ref: 'Joshua 3:11–13',
      title: 'The Priests Step Into the Flood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('Behold, the ark of the covenant of the Lord of all the earth passeth over before you into Jordan.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Now therefore take you twelve men out of the tribes of Israel, out of every tribe a man.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And it shall come to pass, as soon as the soles of the feet of the priests that bear the ark of the Lord, the Lord of all the earth, shall rest in the waters of Jordan, that the waters of Jordan shall be '),
                hy('cut off', 'joshua-cut-off'),
                t(' from above; and they shall '),
                hg('stand upon an heap', 'joshua-heap'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'joshua-cut-off',
          title: 'Karath — &ldquo;cut off&rdquo;',
          script: 'כָּרַת',
          translit: '<strong>karath</strong> · to cut, to sever, to covenant (the root of "covenant" is literally "cutting")',
          description:
            'The same word used for making a covenant — to cut a covenant — is used here for cutting off the waters. The waters do not flow around the priests; they are severed, separated, held back. It is an act of divine covenant: God cuts the waters so His people can pass.',
        },
        {
          kind: 'commentary',
          id: 'joshua-heap',
          html:
            'The text will tell us where the water piles up: near the city of Adam, at a place called Zaretan. The water does not disappear; it gathers into a heap, dammed up by God&apos;s hand. Below, toward the Dead Sea, the waters fail and are cut off. For the priests and for Israel, there is dry ground.',
        },
        {
          kind: 'commentary',
          id: 'priests-step',
          html:
            'Notice the order: the priests must step in first. They do not wait for the river to stop before advancing. The word of God comes first — "as soon as the soles of your feet touch the water, the waters will be cut off." Faith does not wait for sight. The priests step in on the promise, and then the waters part. This is the only order that matters: obedience first, then deliverance.',
        },
        {
          kind: 'carry',
          html:
            'There is something terrifying and holy in stepping forward when the obstacle is still in front of you. That is what the priests do. They do not negotiate with the water. They do not test the depth. They walk toward it in obedience to God&apos;s word. And the instant their foot touches the surface, the waters part. In your own life, where are you waiting for absolute certainty before you step? Where might God be waiting for you to step first?',
        },
        {
          kind: 'reflection',
          id: 'priests-step',
          prompt:
            'What would change if you took a step of obedience before you had seen the outcome? What is one small step you can take today on God&apos;s word alone?',
        },
      ],
    },

    /* ─── Joshua 3:14–16 — The Waters Heap Up ────────────────────────────── */
    {
      ref: 'Joshua 3:14–16',
      title: 'The Waters Heap Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                t('And it came to pass, when the people removed from their tents, to pass over Jordan, and the priests bearing the ark of the covenant before the people;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And as they that bare the ark were come unto Jordan, and the feet of the priests that bare the ark were dipped in the brim of the water, (for '),
                hg('Jordan overfloweth all his banks', 'joshua-overflow'),
                t(' all the time of harvest,)'),
              ],
            },
            {
              number: 16,
              spans: [
                t('That the waters which came down from above stood and '),
                hg('rose up upon an heap', 'joshua-heap-2'),
                t(' very far from the city Adam, that is beside Zaretan: and those that came down toward the sea of the plain, even the '),
                hy('salt sea', 'joshua-salt-sea'),
                t(', failed, were cut off: and the people passed over right against Jericho.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-overflow',
          html:
            'The text pauses to remind us: this is not a normal time to cross. The Jordan overflows at harvest. The water is at its worst — deep, fast, impassable by any natural means. And God chooses precisely this moment. Not because He wants to show off. But because when the obstacle is at its worst, we cannot mistake His hand for our own effort.',
        },
        {
          kind: 'hebrew',
          id: 'joshua-salt-sea',
          title: 'Yam Hammelach — &ldquo;the Salt Sea&rdquo;',
          script: 'יָם הַמֶּלַח',
          translit: '<strong>yam hammelach</strong> · the Dead Sea, where nothing lives, the lowest point of the land',
          description:
            'The waters flow down toward the Dead Sea — toward death, toward the lowest place. But the people cross toward Jericho, toward life, toward the land God promised. The direction of the water and the direction of the people are opposite. God parts what flows toward death so His people can go toward life.',
        },
        {
          kind: 'commentary',
          id: 'joshua-heap-2',
          html:
            'The waters gather at Adam — a name that means "man" or "humankind." Thousands of miles upstream, the waters pile up at the city of Adam. The precision is not incidental. The text is saying: from the very human place upriver, waters are held back so that God&apos;s people can pass. God does not eliminate the obstacle; He gathers it, controls it, makes it stand as a monument to His power.',
        },
        {
          kind: 'artwork',
          matchTitle: /jordan/i,
          matchArtist: /tissot/i,
          caption: 'Joshua 3:14–16 · Crossing the Jordan',
        },
        {
          kind: 'reflection',
          id: 'waters-heap',
          prompt:
            'Think of a situation where God has held something back in your life — a difficulty, a loss, a consequence — long enough for you to pass through. What did it teach you about His nature?',
        },
      ],
    },

    /* ─── Joshua 3:17 — All the People Crossed ─────────────────────────── */
    {
      ref: 'Joshua 3:17',
      title: 'All the People Crossed on Dry Ground',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 17,
              spans: [
                t('And the priests that bare the ark of the covenant of the Lord stood firm on '),
                hg('dry ground in the midst of Jordan', 'joshua-dry-ground'),
                t(', and all the Israelites passed over on dry ground, until all the people were passed clean over Jordan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-dry-ground',
          html:
            'The priests do not move. They stand unmoved while the entire nation walks past them — men, women, children, livestock, and everything they possess. The presence of God, embodied in the ark and the priests bearing it, is stable. They do not waver. The ground under them is dry. And because the ark stands firm in the midst of the waters, all the people can pass through safely.',
        },
        {
          kind: 'commentary',
          id: 'all-people-crossed',
          html:
            'Not a single person was left behind. Not a child was lost. All the people were passed clean over. This is the sign of God&apos;s care — not that a select few made it, but that His presence was sufficient for everyone. The whole nation, at its most vulnerable in the middle of a river that wants to sweep them away, crossed on dry ground because one thing held firm: the presence of God.',
        },
        {
          kind: 'christ',
          id: 'christ-holds-firm',
          title: 'Christ Connection — The Ark Holds Back the Waters',
          html:
            'In the book of Hebrews, we are told that Christ "upholding all things by the word of his power" (Hebrews 1:3). The waters of judgment, the flood of what we deserve — Christ holds it back. He stands in the midst while His people pass through. The moment His feet touched the water (so to speak) on the cross, the waters that would have destroyed us were held at bay. We do not walk through death to the other side; we walk through it on dry ground because He stands firm in the midst.',
        },
        {
          kind: 'carry',
          html:
            'You are not meant to be afraid of the Jordan in your life — the obstacle that feels like you are walking through a river that could take you. Not because the obstacle is not real, but because something has already stepped in ahead of you and made the ground hold. Where you are most vulnerable, you are most protected, if you will follow.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'dry-ground',
          prompt:
            'What does it mean to cross on "dry ground" — to move through an obstacle without being destroyed by it? Where is God making that kind of passage possible for you right now?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 3',
    quote:
      'The priests carried the ark of the covenant into the Jordan. When their feet touched the water, the river stopped. All Israel crossed on dry ground while the priests stood firm in the midst of the waters.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 3 · Study Guide',
  },
};
