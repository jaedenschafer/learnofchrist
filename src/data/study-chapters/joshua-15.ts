import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 15 — Judah[res:iaa-judah-territory-archaeology]&apos;s Inheritance[res:bibleodyssey-judah-inheritance]. The lot of Judah and the boundaries of the
 * Promised Land belonging to the tribe destined to bring forth king and Messiah.
 * Caleb&apos;s triumph over the Anakim, Achsah&apos;s bold request for springs, and
 * the catalog of Judah&apos;s cities—from the wilderness to the sea. The Jebusites[res:intertextual-jebusites-david]
 * remain in Jerusalem, foreshadowing the delay until David.
 */
export const JOSHUA_15: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 15,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 14 },
  intros: [
    'Joshua 15 draws the map of Judah&apos;s inheritance — the land allotted to the tribe of praise. Its southern border runs from the Dead Sea to the Mediterranean, traced through Akrabbim, Kadesh-barnea, and the river of Egypt. Its northern boundary rises through Jerusalem, where the Jebusites still dwell. Every border, every city, every spring is named with precision, as if God knows the names of all His places.',
    'But the chapter is not only about geography. It is about Caleb, now old but still fierce, driving the three sons of Anak out of Hebron. It is about Achsah, his daughter, who asks her new husband Othniel not for land, but for water — for the springs that sustain life. And it is about Jerusalem, the city that will become the city of God, still unconquered, waiting for David. The map is the gospel terrain.',
  ],

  opener: {
    matchArtist: /(tissot|thomas|biblical)/i,
    matchTitle: /(judah|inheritance|canaan|map|borders?|land)/i,
    caption: 'Joshua 15 · Judah&apos;s Lot and Boundary',
  },

  bottomShare: {
    label: 'Share Joshua 15',
    quote:
      'Caleb drove out the three sons of Anak from Hebron. Othniel took the city of Kirjath-sepher and won Achsah&apos;s hand, and she asked her father for springs of water. God gave her the upper springs and the nether springs.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 15 · Study Guide',
  },

  sections: [
    /* ─── Joshua 15:1–12 — The Boundaries of Judah ───────────────────── */
    {
      ref: 'Joshua 15:1–12',
      title: '"The Lot of the Tribe of the Children of Judah"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                t('Now '),
                hy('the lot of the tribe', 'judah-lot'),
                t(' of the children of Judah by their families was thus: even to the border of Edom the wilderness of Zin southward '),
                hg('was the uttermost part', 'uttermost-south'),
                t(' of the salt sea on the south coast.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'judah-lot',
          title: 'Yehudah — "Judah (Praise)"',
          script: 'יְהוּדָה',
          translit: '<strong>Yehudah</strong> · from <strong>yadah</strong>, to praise',
          description:
            'Judah means "he will be praised" or "praise." The tribe destined to bring forth the scepter, David, and the Messiah.',
        },
        {
          kind: 'commentary',
          id: 'uttermost-south',
          html:
            'Judah&apos;s southern border runs from the Dead Sea southward to the very edge of the land — the salt sea marks the frontier between the livable and the vast wilderness. The lot is traced with geographical precision, as if God says: I know every border. I name every edge. Every place is mine.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 2,
              spans: [
                t('And their south border was from the shore of the salt sea, from the bay that looketh southward:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And it went out to the south side of Akrabbim, and passed along to Zin, and ascended up on the south side of Kadesh-barnea, and passed along to Hezron, and went up to Adar, and fetched a compass to Karkaa:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('From thence it passed toward Azmon, and went out unto the river of Egypt; and the goings out of that coast were at the sea: this shall be your south coast.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judah-southern-border',
          html:
            'The journey of Judah&apos;s southern border is a walk through memory. Kadesh-barnea is where Israel wandered for forty years after the murmuring at the spies&apos; report. The river of Egypt marks the western limit. Each name echoes a chapter in Israel&apos;s story, and now that chapter is Judah&apos;s to inherit.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 5,
              spans: [
                t('And the east border was the salt sea, even unto the end of Jordan. And their border in the north quarter was from the bay of the sea at the uttermost part of Jordan:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the border went up to Beth-hogla, and passed along by the north of Beth-arabah; and the border went up to the stone of Bohan the son of Reuben:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the border went up toward Debir from the valley of Achor, and so northward, looking toward Gilgal, that is before the going up to Adummim, which is on the south side of the river: and the border passed toward the waters of En-shemesh, and the goings out thereof were at En-rogel:'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The precision of these borders—each named, each marked, each held in God&apos;s accounting—tells you something about how God sees you. Every edge of your inheritance matters to Him. He does not hand you a vague promise; He knows your land by name. The borders you are given are not arbitrary; they are held by His word.',
        },
        {
          kind: 'reflection',
          id: 'judah-borders-reflection',
          prompt:
            'What are the "borders" of your inheritance right now — the clear boundaries of what God has given you? How does it change your faith to know God names them precisely?',
        },
      ],
    },

    /* ─── Joshua 15:13–19 — Caleb and the Three Sons of Anak ──────────── */
    {
      ref: 'Joshua 15:13–19',
      title: 'Caleb Again — "The Three Sons of Anak"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 13,
              spans: [
                t('And to Caleb the son of Jephunneh he gave a part among the children of Judah, according to the commandment of the Lord to Joshua, '),
                hg('even the city of Arba', 'caleb-arba'),
                t(' the father of Anak, which city is Hebron.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Caleb drove thence '),
                hp('the three sons of Anak', 'caleb-anak'),
                t(', Sheshai, and Ahiman, and Talmai, the children of Anak.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'caleb-arba',
          html:
            'Hebron, Arba&apos;s city. The Anakim are the giants; their father Anak has a son named Arba. Forty-five years ago, when the twelve spies returned, Judah and Caleb stood alone against the terror of these giants. &ldquo;We be not able to go up against the people; for they are stronger than we,&rdquo; said ten of the spies. Caleb said: &ldquo;Let us go up at once, and possess it; for we are well able to overcome it.&rdquo; Now Caleb, old and full of faith, drives them out with his own hand.',
        },
        {
          kind: 'hebrew',
          id: 'caleb-anak-hebrew',
          title: 'Anak — "Neck" or "Long-necked" (the Giants)',
          script: 'עָנָק',
          translit: '<strong>&apos;anak</strong> · tall, long-necked',
          description:
            'The Anakim are the giants, tall in stature and fearful in aspect. But fear is not the measure of the land. Faith is. And Caleb had faith.',
        },
        {
          kind: 'christ',
          id: 'caleb-anak',
          title: 'Christ Connection — More Than Conquerors',
          html:
            'The three sons of Anak are driven out by one old man because God is with him. This is the shape of every victory in Scripture—not by might, but by trust. Jesus spoke to His disciples about giants: &ldquo;If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you&rdquo; (Matthew 17:20). Caleb did not go up in his own strength; he went in the strength of God&apos;s word.',
        },
        {
          kind: 'carry',
          html:
            'What is your "three sons of Anak"? What looks too big, too strong, too rooted to move? The faith that moved giants in Caleb&apos;s day is the same faith available to you. It is not the size of the obstacle that matters; it is the size of the God you trust.',
        },
        {
          kind: 'reflection',
          id: 'caleb-anak-reflection',
          prompt:
            'Caleb was old and waiting decades for this victory. What giant in your life requires the kind of faith that waits, and persists, and refuses to listen to fear?',
        },
      ],
    },

    /* ─── Joshua 15:15–19 — Achsah&apos;s Request for Springs ────────────── */
    {
      ref: 'Joshua 15:15–19',
      title: '"Give Me a Blessing . . . Give Me Also Springs of Water"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 15,
              spans: [
                t('And '),
                hy('he went up thence', 'othniel-rises'),
                t(' to the inhabitants of Debir: and the name of Debir before was Kirjath-sepher.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Caleb said, He that smiteth Kirjath-sepher, and taketh it, to him will I give Achsah my daughter to wife.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And '),
                hp('Othniel the son of Kenaz', 'othniel-first-judge'),
                t(', the brother of Caleb, took it: and he gave him Achsah his daughter to wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'othniel-rises',
          html:
            'Othniel goes up. The language echoes throughout Joshua—going up is the posture of faith, of taking the land, of entering into the inheritance. Othniel is not merely a warrior; he is the first to take the next city, and thus becomes Caleb&apos;s successor in the land.',
        },
        {
          kind: 'hebrew',
          id: 'othniel-first-judge',
          title: 'Othniel — The First Judge',
          script: 'עְתְנִיאֵל',
          translit: '<strong>&apos;Otni&apos;el</strong> · after Joshua, first of the judges',
          description:
            'Othniel becomes the first judge of Israel after Joshua dies (Judges 3:9–11). His marriage to Caleb&apos;s daughter links two generations of faith.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 18,
              spans: [
                t('And it came to pass, as she came unto him, that she '),
                hy('moved him to ask', 'achsah-asks'),
                t(' of her father a field: and she lighted off her ass; and Caleb said unto her, What wouldest thou?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Who answered, Give me a blessing; for thou hast given me a south land; '),
                hp('give me also springs of water', 'achsah-blessing'),
                t('. And he gave her the upper springs, and the nether springs.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'achsah-asks',
          html:
            'Achsah does not stay silent about her need. She &ldquo;moved him&rdquo; to ask—prompted him, nudged him toward generosity. Then she asks her father directly. There is no shame in asking for what you need. There is no weakness in naming the lack.',
        },
        {
          kind: 'hebrew',
          id: 'achsah-blessing-hebrew',
          title: 'Berakah — "Blessing"',
          script: 'בְּרָכָה',
          translit: '<strong>berakhah</strong> · blessing, gift, provision',
          description:
            'Achsah asks for a berakah—a blessing. Not land alone, but the means to live in it. Not the form of inheritance, but its substance.',
        },
        {
          kind: 'christ',
          id: 'achsah-blessing',
          title: 'Christ Connection — Ask, and It Shall Be Given',
          html:
            'Achsah&apos;s courage to ask is a portrait of answered prayer. James 1:5 says, &ldquo;If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not.&rdquo; Notice: upbraideth not. God does not scold you for asking. He does not say, &ldquo;How dare you name your lack?&rdquo; He says, &ldquo;What would you have?&rdquo; And He gives. Upper springs and nether springs—both the visible provision and the hidden source.',
        },
        {
          kind: 'commentary',
          id: 'upper-nether-springs',
          html:
            'Upper springs and nether springs—the waters above and below, the visible and the hidden. Or: the present provision and the future abundance. Or: the earthly and the heavenly. Caleb gives not only the surface of the land, but the springs that sustain it. The water beneath. The abundance that feeds life.',
        },
        {
          kind: 'carry',
          html:
            'What is your south land? What gift has God given you that feels incomplete because something essential is missing? Achsah did not resent the land; she asked for the means to flourish in it. Ask. Your Father does not upbraid the honest need. He gives liberally, upper springs and nether springs both.',
        },
        {
          kind: 'reflection',
          id: 'achsah-reflection',
          prompt:
            'Is there something in your inheritance—your work, your relationship, your calling—where you are afraid to ask for what you truly need? What would change if you asked?',
        },
      ],
    },

    /* ─── Joshua 15:20–62 — The Cities of Judah ─────────────────────── */
    {
      ref: 'Joshua 15:20–62',
      title: 'The Cities of Judah — Every Name Known',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 20,
              spans: [
                t('This is the inheritance of the tribe of the children of Judah by their families.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the uttermost cities of the tribe of the children of Judah toward the coast of Edom southward were Kabzeel, and Eder, and Jagur,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judah-cities',
          html:
            'What follows is a catalog—forty-one cities, divided into south country, valley, mountain country, and the desert. Bethlehem is among them. Jerusalem is named but not fully possessed. Every city has a name. Every name is counted. This is not a list to skip; it is a roster of the places where God&apos;s people will live, work, worship, suffer, and hope. Every town, every village, every cluster of dwellings matters. God names them all.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 55,
              spans: [
                t('Maon, '),
                hg('Carmel', 'carmel-nabal'),
                t(', and Ziph, and Juttah,'),
              ],
            },
            {
              number: 56,
              spans: [
                t('And Jezreel, and Jokdeam, and Zanoah,'),
              ],
            },
            {
              number: 57,
              spans: [
                t('Kain, Gibeah, and Timnah; ten cities with their villages.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'carmel-nabal',
          html:
            'Carmel—the place where Abigail and Nabal lived, where David hid from Saul, where prophets would later dwell. Each city carries stories yet unwritten at this moment. Each name is a promise waiting to unfold.',
        },
        {
          kind: 'carry',
          html:
            'You live in one of these cities—or a city like them. Your neighborhood, your street, your home is part of a vast tapestry that God knows by name. The small things matter. The ordinary places matter. Your city, your family, your work are not beneath God&apos;s notice; they are written into His book.',
        },
        {
          kind: 'reflection',
          id: 'judah-cities-reflection',
          prompt:
            'Think of the place where you live now. How might it change your faith to believe that God named and numbered it, that it is part of His inheritance given to His people?',
        },
      ],
    },

    /* ─── Joshua 15:63 — The Jebusites Remain ────────────────────────── */
    {
      ref: 'Joshua 15:63',
      title: 'The Unconquered City — A Future for David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 63,
              spans: [
                t('As for the Jebusites the inhabitants of Jerusalem, '),
                hp('the children of Judah could not', 'jebusites-wait'),
                t(' drive them out: but the Jebusites dwell with the children of Judah at Jerusalem unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'jebusites-hebrew',
          title: 'Yebusi — "The Jebusite"',
          script: 'יְבוּסִי',
          translit: '<strong>Yebusi</strong> · inhabitant of Jerusalem',
          description:
            'The Jebusites held Jerusalem from the time of Joshua until David took it four hundred years later. The city that would become "Jerusalem the holy" was an unfinished work, waiting.',
        },
        {
          kind: 'christ',
          id: 'jebusites-wait',
          title: 'Christ Connection — The Delayed Conquest',
          html:
            'Jerusalem remains in Jebusite hands. Four centuries will pass. Then David will take the fortress and make it his capital (2 Samuel 5:6–10). From there will come the line of kings, and from David&apos;s line, the Messiah. Sometimes God&apos;s greatest works wait for the next generation. The delay is not failure; it is the shape of providence. David could not have ruled from a city he did not fully possess. The Jebusites had to remain—so that David&apos;s taking of the city would be an act of faith, not inheritance, and so that his son Solomon could build the temple on that conquered ground.',
        },
        {
          kind: 'commentary',
          id: 'jebusites-dwell',
          html:
            'The phrasing is curious: the Jebusites dwell with the children of Judah "unto this day." This marks the moment when Joshua was written—after David, after the kingdom was established. The note reminds the reader: See? Even then, at the time of writing, the fact that the Jebusites once dwelt in Jerusalem is still remembered. It was a stumbling block, a strange delay in the midst of conquest. But it was not a failure. It was a space God held open for a king named David.',
        },
        {
          kind: 'carry',
          html:
            'There are Jebusites in your story too—the things you cannot take, the battles you cannot win, the doors that remain closed in front of you. Do not mistake the closed door for God&apos;s defeat. Sometimes God holds certain ground in reserve. The delay may be His way of preparing you for what comes next. The thing you cannot conquer may be the very thing that shapes you into the person God intends you to become.',
        },
        {
          kind: 'reflection',
          id: 'jebusites-reflection',
          prompt:
            'What is the "Jerusalem" in your life—the thing you have not yet been able to possess or change? How might God be using the delay to shape something larger than you can yet see?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'iaa-judah-territory-archaeology',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'The Territory of Judah and Its Cities',
      url: 'https://www.antiquities.org.il/article-3050-en/Judah.html',
      description: 'Archaeological evidence of the cities and boundaries of Judah&apos;s tribal inheritance, including the Jebusites in Jerusalem.',
    },
    {
      id: 'bibleodyssey-judah-inheritance',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Judah&apos;s Inheritance and Jerusalem&apos;s Delayed Conquest',
      url: 'https://www.bibleodyssey.org/passages/main-passage/joshua-15',
      description: 'The extensive territory allotted to Judah, with the peculiar detail that the Jebusites remained in Jerusalem until David&apos;s later conquest.',
    },
    {
      id: 'intertextual-jebusites-david',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Jebusites from Joshua to David',
      url: 'https://intertextual.bible/search?q=jebusites+jerusalem+joshua+david+conquest',
      description: 'How the unfinished conquest of Jerusalem in Joshua&apos;s time set the stage for David&apos;s reign and the establishment of the Davidic covenant.',
    },
  ],
};
