import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 2 — the camp arranged in order around the tabernacle.
 *
 * The chapter opens up one of the oldest architectural statements in
 * Scripture: Israel&apos;s camp is organized as a cross, with God at the center.
 * The design itself is the sermon.
 */
export const NUMBERS_2: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 2,

  estimatedMinutes: { beginner: 8, intermediate: 11, deep: 14 },
  intros: [
    'Numbers 1 counted Israel — nearly two million people organized into twelve tribes. Numbers 2 answers a question that follows every census: where do they actually go? The answer is breathtaking in its geometry. Israel is arranged as a massive square, with the tabernacle — the tent where God dwells — at the absolute center. On each of the four sides stand three tribes, a cluster of families held in place by a unifying order. The camp is not arranged around comfort or commerce or defense. It is arranged around worship.',
    'Judah takes the east, the position of honor and the leading edge of every march. Reuben stands to the south. Ephraim to the west. Dan to the north. Between the camp and the tabernacle runs a buffer of Levites — the priests and caretakers of God&apos;s dwelling. What makes this passage worth your time is this: you can draw it. And when you do, you see a cross. The tabernacle sits at the intersection, and the camp spreads out in four directions, with Judah — the tribe that will eventually bear the Messiah — leading the way north toward the land of promise.',
  ],

  sections: [
    /* ─── Numbers 2:1–9 — Judah Leads East ───────────────────────────── */
    {
      ref: 'Numbers 2:1–9',
      title: 'Judah East — The Lion&apos;s Position',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [t('And the Lord spake unto Moses and unto Aaron, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Every man of the children of Israel shall pitch by his own '),
                t('standard'),
                t(', '),
                t('with the ensign of their father&apos;s house'),
                t(': far off about the tabernacle of the congregation shall they pitch.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nums2-camp-order',
          html:
            'The word &ldquo;standard&rdquo; is <em>degel</em>, the banner or flag under which each tribe camps. Each family knew which tribe&apos;s banner to look for, which section of the camp was theirs. The camp was not a chaotic swarm — it was a militia, an assembly, a people organized around something larger than themselves. And at the center of that organization: the tabernacle.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('And '),
                hp('on the east side', 'judah-east'),
                t(' toward the rising of the sun shall they of the standard of the camp of '),
                hp('Judah pitch', 'christ-lion'),
                t(' throughout their armies: and '),
                hg('Nahshon the son of Amminadab shall be captain', 'nums2-judah-captain'),
                t(' of the children of Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judah-east',
          html:
            'East is where the sun rises. It is the direction of glory, of beginning. In Israel&apos;s camp, Judah gets the place of honor — first to strike camp, first to move, first to enter the land. The east side is the front door.',
        },
        {
          kind: 'commentary',
          id: 'nums2-judah-captain',
          html:
            'Nahshon will appear again in the genealogy of Matthew 1 — his name sits in the direct line leading to Jesus. The captain of Judah is a man whose own lineage points toward the King.',
        },
        {
          kind: 'christ',
          id: 'christ-lion',
          title: 'Christ Connection — The Lion of the Tribe of Judah',
          html:
            'Genesis blesses Judah: &ldquo;The sceptre shall not depart from Judah… until Shiloh come&rdquo; (Gen. 49:10). Revelation names the Messiah directly: &ldquo;The Lion of the tribe of Judah, the Root of David, hath prevailed&rdquo; (Rev. 5:5). The tribe that camps at the east — the place of honor, the direction of light — carries the promise of the one who will one day say, &ldquo;I am the light of the world&rdquo; (John 8:12).',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('And his host, and those that were numbered of them, were '),
                hg('threescore and fourteen thousand and six hundred', 'nums2-judah-count'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [t('And those that pitch next unto him shall be the tribe of Issachar: and Nethaneel the son of Zuar shall be captain of the children of Issachar.')],
            },
            {
              number: 6,
              spans: [t('And his host, and those that were numbered thereof, were fifty and four thousand and four hundred.')],
            },
            {
              number: 7,
              spans: [t('Then the tribe of Zebulun: and Eliab the son of Helon shall be the captain of the children of Zebulun.')],
            },
            {
              number: 8,
              spans: [t('And his host, and those that were numbered thereof, were fifty and seven thousand and four hundred.')],
            },
            {
              number: 9,
              spans: [
                t('All that were numbered in the camp of Judah were '),
                hg('an hundred and fourscore thousand and six thousand and four hundred', 'nums2-judah-total'),
                t(', throughout their armies. These shall first set forth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nums2-judah-count',
          html:
            'Judah&apos;s tribe alone outnumbers many other tribes combined. The numbers underscore what the geography already declares: Judah is the leading force, the one who sets the direction for the whole assembly.',
        },
        {
          kind: 'commentary',
          id: 'nums2-judah-total',
          html:
            'The phrase &ldquo;These shall first set forth&rdquo; closes the Judah section. On any march, Judah moves first. The east position, the highest count, the first departure — this is the role Judah holds in Israel&apos;s story, and it will never be forgotten.',
        },
        {
          kind: 'carry',
          html:
            'Judah&apos;s people were not passive. They were organized, numbered, counted, assigned a standard to march under. And they marched in a direction — toward the land of promise. Your own life is not a random assembly. You have been given gifts, a place, a direction. The question Numbers 2 asks is simple: are you marching toward something larger than yourself? Are you part of something that centers on God?',
        },
        {
          kind: 'reflection',
          id: 'judah-reflect',
          prompt:
            'What is your Judah — the role or gift God has given you that puts you at the front, leading others somewhere? Are you actually moving in that direction, or have you parked?',
        },
      ],
    },

    /* ─── Numbers 2:10–16 — Reuben South ──────────────────────────────── */
    {
      ref: 'Numbers 2:10–16',
      title: 'Reuben South — The Second Rank',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 10,
              spans: [
                t('On '),
                hy('the south side', 'reuben-south'),
                t(' shall be the standard of the camp of Reuben according to their armies: and the captain of the children of Reuben shall be Elizur the son of Shedeur.'),
              ],
            },
            {
              number: 11,
              spans: [t('And his host, and those that were numbered thereof, were forty and six thousand and five hundred.')],
            },
            {
              number: 12,
              spans: [t('And those that pitch by him shall be the tribe of Simeon: and the captain of the children of Simeon shall be Shelumiel the son of Zurishaddai.')],
            },
            {
              number: 13,
              spans: [t('And his host, and those that were numbered of them, were fifty and nine thousand and three hundred.')],
            },
            {
              number: 14,
              spans: [t('Then the tribe of Gad: and the captain of the sons of Gad shall be Eliasaph the son of Deuel.')],
            },
            {
              number: 15,
              spans: [t('And his host, and those that were numbered of them, were forty and five thousand and six hundred.')],
            },
            {
              number: 16,
              spans: [
                t('All that were numbered in the camp of Reuben were '),
                hg('an hundred and fifty and one thousand and four hundred and fifty', 'nums2-reuben-total'),
                t(', throughout their armies: and they shall set forth in the second rank.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'reuben-south',
          html:
            'South is the left side when you face east toward the rising sun. Reuben, Israel&apos;s firstborn, does not lead. Jacob&apos;s blessing stripped him of his birthright; Judah carries the scepter instead. The south side is honored, but secondary. Reuben camps in the second rank.',
        },
        {
          kind: 'commentary',
          id: 'nums2-reuben-total',
          html:
            'The phrase &ldquo;they shall set forth in the second rank&rdquo; tells the order of the march. Judah goes first, breaking camp and moving toward the next stop. Reuben follows. The camp is not a scattered mob — it is a column, a procession, organized from front to back.',
        },
        {
          kind: 'carry',
          html:
            'The second rank is not a position of shame. Reuben&apos;s tribe still numbers in the tens of thousands. They are organized, equipped, purposeful. If you are not at the front, it does not mean you are less important — it may mean you are meant to help others move forward, to hold the line, to steady what has already started. The camp needs its second rank.',
        },
        {
          kind: 'reflection',
          id: 'reuben-reflect',
          prompt:
            'What role have you played that was not the spotlight role, but was necessary? How did that strengthen the whole assembly?',
        },
      ],
    },

    /* ─── Numbers 2:18–24 — Ephraim West ──────────────────────────────── */
    {
      ref: 'Numbers 2:18–24',
      title: 'Ephraim West — Behind the Center',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('On '),
                hy('the west side', 'ephraim-west'),
                t(' shall be the standard of the camp of Ephraim according to their armies: and the captain of the sons of Ephraim shall be Elishama the son of Ammihud.'),
              ],
            },
            {
              number: 19,
              spans: [t('And his host, and those that were numbered thereof, were forty thousand and five hundred.')],
            },
            {
              number: 20,
              spans: [t('And by him shall be the tribe of Manasseh: and the captain of the children of Manasseh shall be Gamaliel the son of Pedahzur.')],
            },
            {
              number: 21,
              spans: [t('And his host, and those that were numbered of them, were thirty and two thousand and two hundred.')],
            },
            {
              number: 22,
              spans: [t('Then the tribe of Benjamin: and the captain of the sons of Benjamin shall be Abidan the son of Gideoni.')],
            },
            {
              number: 23,
              spans: [t('And his host, and those that were numbered of them, were thirty and five thousand and four hundred.')],
            },
            {
              number: 24,
              spans: [
                t('All that were numbered of the camp of Ephraim were '),
                hg('an hundred thousand and eight thousand and one hundred', 'nums2-ephraim-total'),
                t(', throughout their armies: and they shall set forth in the third rank.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ephraim-west',
          html:
            'West is the rear when facing east. Ephraim, Joseph&apos;s favored son, camps at the back of the main assembly. Behind them will come the most fragile and central thing in the camp: the Levites and the tabernacle itself.',
        },
        {
          kind: 'commentary',
          id: 'nums2-ephraim-total',
          html:
            'Ephraim&apos;s count is smaller than Judah&apos;s but still formidable. The third rank is a protection, a shield for what comes behind. The camp&apos;s geometry puts the holiest thing — God&apos;s tent — at the center, guarded on all four sides.',
        },
        {
          kind: 'carry',
          html:
            'The back rank sees what the front rank cannot see. They know what the journey looks like from behind. They know who fell back, who is struggling, who needs help. Ephraim&apos;s position is not a demotion — it is a vantage point. Some of the most important work happens when you are not in front.',
        },
        {
          kind: 'reflection',
          id: 'ephraim-reflect',
          prompt:
            'Who are you protecting or holding steady from your current position? What would change if you saw that as your primary calling this season?',
        },
      ],
    },

    /* ─── Numbers 2:25–31 — Dan North ────────────────────────────────── */
    {
      ref: 'Numbers 2:25–31',
      title: 'Dan North — The Rear Guard',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 25,
              spans: [
                t('The standard of the camp of Dan shall be '),
                hy('on the north side', 'dan-north'),
                t(' by their armies: and the captain of the children of Dan shall be Ahiezer the son of Ammishaddai.'),
              ],
            },
            {
              number: 26,
              spans: [t('And his host, and those that were numbered thereof, were threescore and two thousand and seven hundred.')],
            },
            {
              number: 27,
              spans: [t('And those that pitch by him shall be the tribe of Asher: and the captain of the children of Asher shall be Pagiel the son of Ocran.')],
            },
            {
              number: 28,
              spans: [t('And his host, and those that were numbered of them, were forty and one thousand and five hundred.')],
            },
            {
              number: 29,
              spans: [t('Then the tribe of Naphtali: and the captain of the children of Naphtali shall be Ahira the son of Enan.')],
            },
            {
              number: 30,
              spans: [t('And his host, and those that were numbered of them, were fifty and three thousand and four hundred.')],
            },
            {
              number: 31,
              spans: [
                t('All they that were numbered in the camp of Dan were '),
                hg('an hundred thousand and fifty and seven thousand and six hundred', 'nums2-dan-total'),
                t(': they shall take their journey last.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dan-north',
          html:
            'North is the final direction. Dan closes the formation — not at the center but at the rear, covering the camp&apos;s withdrawal. They are the last to break camp, the last to leave, the ones who make sure nothing is abandoned.',
        },
        {
          kind: 'commentary',
          id: 'nums2-dan-total',
          html:
            'Dan&apos;s tribe is second-largest in the camp. The rear guard is not a position of weakness — it is a position of strength. The camp&apos;s safety depends on those who are willing to cover the retreat, to hold ground while others move.',
        },
        {
          kind: 'carry',
          html:
            'Somebody has to be the last to leave. Somebody has to make sure the thing you all built together doesn&apos;t fall apart while people are moving to the next place. That person is often forgotten by those who get to the new place first. But the camp could not have survived without them.',
        },
        {
          kind: 'reflection',
          id: 'dan-reflect',
          prompt:
            'When have you been the last to move, the one holding ground while others advance? What did you learn about yourself in that position?',
        },
      ],
    },

    /* ─── Numbers 2:32–34 — The Levites at Center ────────────────────── */
    {
      ref: 'Numbers 2:32–34',
      title: 'The Levites at the Center',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 32,
              spans: [
                t('These are those which were numbered of the children of Israel by the house of their fathers: all those that were numbered of the camps throughout their hosts were '),
                hg('six hundred thousand and three thousand and five hundred and fifty', 'nums2-grand-total'),
                t('.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('But the Levites were '),
                hp('not numbered', 'levites-uncount'),
                t(' among the children of Israel; as the Lord commanded Moses.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And the children of Israel did according to all that the Lord commanded Moses: so they pitched by their standards, and so they set forth, '),
                hp('every one after their families', 'camp-order'),
                t(', according to the house of their fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nums2-grand-total',
          html:
            'The census of Israel — not counting women, children, or the very old — numbers over 600,000 fighting men. This is not a tiny band of wanderers. This is a nation, a civilization on the move. And every single person knows which tribe they belong to, which banner they camp under, which direction their family faces.',
        },
        {
          kind: 'commentary',
          id: 'levites-uncount',
          html:
            'The Levites are not counted in the military census because they are not soldiers. They are priests and caretakers. They camp between the main assembly and the tabernacle — a buffer, a boundary, a sacred wall. Their job is not to fight with the other tribes but to tend the one thing all twelve tribes center their lives around.',
        },
        {
          kind: 'christ',
          id: 'camp-order',
          title: 'Christ Connection — God at the Center',
          html:
            'The camp is a cross. The tabernacle sits at the intersection, the holy of holies at the very center. Paul writes to the church: &ldquo;For ye are the temple of God… know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?&rdquo; (1 Cor. 3:16–17). And to the Ephesians: &ldquo;A holy temple in the Lord… a habitation of God through the Spirit&rdquo; (Eph. 2:21–22). What Numbers 2 reveals in the geometry of a camp spreading in four directions — that God is the center that holds everything together — is the same truth the church lives out: each individual is a living stone in a building whose cornerstone is Jesus, and whose foundation is that one central thing: the person and presence of God.',
        },
        {
          kind: 'carry',
          html:
            'Your life is not random. You are part of an assembly, a people arranged around something — or someone. The question is whether that center is actually holding. Is God at the middle of your work, your family, your friendships, your decisions? Or have you drifted into an arrangement where the center is a career, a person, a success, a fear? Numbers 2 invites you back to the geometry of your own soul: What is at the center? What are all the other things arranged around?',
        },
        {
          kind: 'reflection',
          id: 'center-reflect',
          prompt:
            'Draw a quick diagram of your own life right now. What is at the center? What are the four sides of your world arranged around it? Is that center holding everything together, or is it crumbling?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchTitle: /camp/i,
          matchArtist: /israelite/i,
          caption: 'Numbers 2 — The Camp Arranged',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 2',
    quote:
      'Israel camped in a vast square around the tabernacle — Judah to the east, Reuben to the south, Ephraim to the west, Dan to the north, with the Levites in the center guarding God&apos;s tent. The arrangement is a cross with God at the center.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 2 · Study Guide',
  },
};
