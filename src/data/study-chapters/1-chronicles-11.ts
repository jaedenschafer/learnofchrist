import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 11 — David Made King Over All Israel; The Mighty Men
 *
 * All Israel gathers to David at Hebron, saying "Behold, we are thy bone and
 * thy flesh," and anoints him king. He takes the stronghold of Zion (Jerusalem)
 * — Joab climbs the gutter and becomes chief. Then follows the roster of the
 * Mighty Men: Jashobeam who slew 300 at one time; Eleazar the son of Dodo who
 * fought the Philistines while all men fled; the three who broke through the
 * Philistine host to bring David water from Bethlehem, which he pours out
 * unto the Lord as a drink offering rather than drink it himself. Abishai and
 * Benaiah join the roster. The chapter ends with the names of the thirty mighty
 * men, each with brief account of his deeds. These are the men gathered to a
 * king who was once rejected and hunted — now vindicated and crowned.
 */
export const CHRONICLES_1_11: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 11,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 20 },
  intros: [
    'The books of Chronicles retell the history of Israel from a perspective that emphasizes the temple, the priesthood, and the continuity of David&apos;s line. Where 2 Samuel shows us David&apos;s personal story — his flight from Saul, his grief, his wars — 1 Chronicles frames David as the founder of a kingdom destined for the Messiah. In this chapter, David is anointed king by "all Israel," and we meet the men who gathered to him: warriors of extraordinary courage, men who broke through enemy lines and risked their lives for the man God had chosen.',
    'These mighty men are more than soldiers. They are the first community gathered around a king. When you read about them bringing water from the well of Bethlehem and David pouring it out as an offering rather than drinking it, you are watching a moment of covenantal sacrifice — the king willing to receive the costly gift of his men&apos;s devotion and transform it into worship. This pattern, of the rejected becoming king and gathering his own around him, echoes throughout Scripture and casts a long shadow forward to another king, gathered in an upper room with twelve men, where wine becomes the sign of a covenant sealed in blood.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 11',
    quote:
      'All Israel gathered themselves to David unto Hebron, saying, "Behold, we are thy bone and thy flesh." The mighty men who gathered to the once-rejected king show us what it means to recognize and covenant with the one God has chosen.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 11 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 11:1–3 — All Israel Anoints David King ──────────── */
    {
      ref: '1 Chronicles 11:1–3',
      title: 'All Israel Gathers to Anoint David King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('Then all Israel gathered themselves to David unto Hebron, saying, Behold, we are thy '),
                hg('bone and thy flesh', 'c1-11-bone-flesh'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And moreover in time past, even when Saul was king, thou wast he that leddest out and broughtest in Israel: and the Lord thy God said unto thee, Thou shalt feed my people Israel, and thou shalt be captain over my people Israel.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Therefore came all the elders of Israel to the king to Hebron; and David made a '),
                hy('covenant', 'c1-11-covenant'),
                t(' with them in Hebron before the Lord; and they '),
                hg('anointed David king', 'c1-11-anointed-king'),
                t(' over Israel, according to the word of the Lord by Samuel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-bone-flesh',
          html:
            '"We are thy bone and thy flesh." This is the language of kinship, of belonging to the same body. The people do not say, "You are our superior," or "You have conquered us." They say, "You are one of us. We are of one blood." The recognition of David as king is not imposed from outside — it is the people acknowledging what God has already chosen, that he is part of them, bone of their bone, and therefore fit to lead them.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-covenant',
          html:
            'David makes a covenant with the people. A covenant is not a contract of exchange; it is a binding of two parties into one body, one purpose. When the elders come to Hebron and David covenants with them, they are sealing themselves to a king and he is sealing himself to a people. This covenant is made "before the Lord" — the Lord is witness and guarantor.',
        },
        {
          kind: 'hebrew',
          id: 'c1-11-berith',
          title: 'Berith — "Covenant"',
          script: 'בְרִית',
          translit: '<strong>Berith</strong> · covenant; a binding agreement sealed before God',
          description:
            'The word berith carries the weight of sacred obligation. When David and Israel enter into a berith, they are not merely agreeing to terms — they are entering into a union sworn before God Himself. A covenant is deeper than a contract because it is sworn with one&apos;s whole self, for good or ill, for the duration of life.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-anointed-king',
          html:
            'The people anoint David king. The anointing is the visible sign of God&apos;s choice — oil poured on the head, set apart for the Lord&apos;s purpose. And the text says this anointing follows "the word of the Lord by Samuel" — echoing the secret anointing Samuel performed at David&apos;s home when he was still the youngest, the shepherd boy. Now the whole nation affirms what God spoke through the prophet.',
        },
        {
          kind: 'carry',
          html:
            'David is anointed king not because he seized power, but because the people recognize in him what God has already chosen. He is bone of their bone — he does not come as a foreign ruler, but as one who belongs to them and will lead them as part of them. When have you recognized in someone qualities of leadership or care that made you willing to trust them? What does it mean to give your allegiance to someone you see as truly belonging to your community, not standing above it?',
        },
        {
          kind: 'reflection',
          id: 'covenant-assembly',
          prompt: 'The people gather and covenant with David, binding themselves to him. When you commit to following someone — as a leader, mentor, or teacher — what are you really saying yes to?',
        },
      ],
    },

    /* ─── 1 Chronicles 11:4–9 — Jerusalem Taken; Joab Chief ───────────── */
    {
      ref: '1 Chronicles 11:4–9',
      title: 'The Stronghold of Zion Taken; Joab Made Chief',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('And David and all Israel went to Jerusalem: which is Jebus; where the '),
                hg('Jebusites', 'c1-11-jebusites'),
                t(' were, the inhabitants of the land.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the inhabitants of Jebus said to David, Thou shalt not come hither. Nevertheless David took the castle of Zion, which is the city of David.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And David said, Whosoever smiteth the Jebusites first shall be chief and captain. So '),
                hg('Joab the son of Zeruiah', 'c1-11-joab'),
                t(' went first up, and was chief.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And David dwelt in the castle; therefore they called it the city of David.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he built the city round about, even from Millo round about: and Joab repaired the rest of the city.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('So David waxed greater and greater: for the Lord of hosts was with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-jebusites',
          html:
            'The Jebusites occupy the stronghold of Jerusalem, a place so fortified that they say to David, "Thou shalt not come hither." It is a place of security, a capital worthy of a king. But it is not yet David&apos;s — it must be taken. The city is called Jebus after its inhabitants, but will be renamed the city of David when he takes it.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-joab',
          html:
            'Joab, the son of Zeruiah (David&apos;s sister), is the one who climbs the gutter first and takes the fortress. In reward, he becomes chief captain. Joab is ferocious in battle, loyal to David, and yet often troubled — he will commit murders that grieve David, yet David cannot bring himself to execute him. Here, he is the first warrior, the one who leads the assault on Jerusalem.',
        },
        {
          kind: 'hebrew',
          id: 'c1-11-tsion',
          title: 'Tsion — "Zion"',
          script: 'צִיּוֹן',
          translit: '<strong>Tsion</strong> (or <strong>Sion</strong>) · Zion; the stronghold, the city of God',
          description:
            'Zion begins as a physical stronghold, the fortress of Jerusalem. But it becomes something more — the symbolic center of God&apos;s kingdom on earth, the place where God dwells with His people. When the prophets speak of Zion in later years, they speak of the spiritual capital of God&apos;s people, the place from which God&apos;s word goes forth.',
        },
        {
          kind: 'carry',
          html:
            'Jerusalem seems unreachable at first — the Jebusites say David cannot come in. Yet David does come in, and the city becomes his capital. Sometimes the things that seem impossible to take hold of — a calling, a vision, a stronghold that needs to be reclaimed — can only be achieved by faith and boldness. What stronghold in your life seems unreachable? What would it take to enter it?',
        },
        {
          kind: 'reflection',
          id: 'stronghold-taken',
          prompt: 'David moved against what seemed impossible to take. What have you thought was beyond your reach, only to find that courage and faith could bridge the gap?',
        },
      ],
    },

    /* ─── 1 Chronicles 11:10–19 — The Three and the Water of Bethlehem ─── */
    {
      ref: '1 Chronicles 11:10–19',
      title: 'The Water of Bethlehem Poured Out as an Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 10,
              spans: [
                t('Now these are the chief of the mighty men whom David had, who strengthened themselves with him in his kingdom, and with all Israel, to make him king, according to the word of the Lord concerning Israel.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And this is the number of the mighty men whom David had; Jashobeam an Hachmonite, the chief of the captains: he lifted up his spear against three hundred slain by him at one time.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And after him was Eleazar the son of Dodo, the Ahohite, who was one of the three mighty men.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('He was with David at Pas-dammim, and there the Philistines were gathered together to battle, where was a parcel of ground full of barley; and the people fled before the Philistines.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they set themselves in the midst of that parcel, and delivered it, and slew the Philistines; and the Lord saved them by a great victory.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1chr11-three-mighty',
          html:
            'David is hidden in a cave; his three best men cut through enemy lines for a cup of water. He pours it out as an offering. Some loyalty cannot be drunk.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 15,
              spans: [
                t('Now three of the thirty captains went down to the rock to David, into the cave of Adullam; and the host of the Philistines encamped in the valley of Rephaim.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And David was then in the hold, and the Philistines&apos; garrison was then at Bethlehem.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And David '),
                hg('longed', 'c1-11-longed'),
                t(', and said, Oh that one would give me drink of the water of the well of Bethlehem, that is at the gate!'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the three brake through the host of the Philistines, and drew water out of the well of Bethlehem, that was by the gate, and took it, and brought it to David: but David would not drink it, but '),
                hg('poured it out', 'c1-11-poured-out'),
                t(' to the Lord,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And said, My God forbid it me, that I should do this thing: shall I drink the blood of these men that have put their lives in jeopardy? for with the jeopardy of their lives they brought it. Therefore he would not drink it. These things did these three mighty men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-longed',
          html:
            'David is in a stronghold, hiding from the Philistines. Bethlehem — his own hometown, the "house of bread" — is occupied by the enemy. A longing comes upon him, perhaps a homesickness, or the memory of simpler days: "Oh that one would give me drink of the water of the well of Bethlehem!" It is a longing spoken aloud, overheard by the three mighty men nearby.',
        },
        {
          kind: 'hebrew',
          id: 'c1-11-bethlehem',
          title: 'Bethlehem — "House of Bread"',
          script: 'בֵּית לֶ֫חֶם',
          translit: '<strong>Bethlehem</strong> · house of bread',
          description:
            'Bethlehem is David&apos;s birthplace, where he was anointed by Samuel as a shepherd boy. It is the place of sustenance and provision ("house of bread"). In Scripture, Bethlehem will be known as the birthplace of the Messiah. Here it stands as a place of memory and desire, belonging to David but occupied by enemies.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-poured-out',
          html:
            'The three mighty men break through the Philistine lines, draw water from the well, and bring it to David. But when David sees what they have done — risked their lives for this water — he refuses to drink it. Instead, he pours it out unto the Lord. The water that cost blood becomes an offering. The gift of his men&apos;s devotion is transformed into worship, into a drink offering poured out before God.',
        },
        {
          kind: 'hebrew',
          id: 'c1-11-nesek',
          title: 'Nesek — "Drink Offering"',
          script: 'נֶ֫סֶךְ',
          translit: '<strong>Nesek</strong> · drink offering; a libation poured out',
          description:
            'The drink offering is poured out in worship, never to be drunk. It is a gift released entirely to God, a covenant affirmation. When David pours the water out unto the Lord, he is saying: this gift, costly though it is, belongs to God and to His purposes. I will not take it for myself.',
        },
        {
          kind: 'christ',
          id: 'c1-11-christ-water',
          title: 'Christ Connection — The Water of Life Poured Out',
          html:
            'David refuses to drink water that cost his men&apos;s blood. He pours it out instead. This act points forward to another moment when a king, surrounded by His followers, takes a cup and says, "This is my blood of the new testament, which is shed for many for the remission of sins" (Matt 26:28). The water David would not drink becomes the wine Christ pours out — His own blood, the gift of His life laid down. In Bethlehem, Christ was born; in Bethlehem&apos;s well, men risk their blood. In the upper room, Christ&apos;s blood becomes the sign of the covenant. The pattern is written in water and in blood: a king gathering His men in covenant, and the most costly gift — one&apos;s own life — poured out for redemption.',
        },
        {
          kind: 'carry',
          html:
            'David understood something profound: when others give you their sacrifice, their risk, their love — you do not consume it selfishly. You lift it up to God. The gift given at cost becomes holy when it is released to its true purpose. When someone has sacrificed for you, how have you honored that sacrifice? How can you lift it to something greater than your own comfort?',
        },
        {
          kind: 'reflection',
          id: 'blood-water-covenant',
          prompt: 'Three men broke through enemy lines and risked their blood for water. David poured it out to God instead of drinking it. What costs are you being asked to witness and honor — costs that someone else has paid?',
        },
      ],
    },

    /* ─── 1 Chronicles 11:20–25 — Abishai and Benaiah, Mighty Men ──────── */
    {
      ref: '1 Chronicles 11:20–25',
      title: 'Abishai and Benaiah — Warriors of Extraordinary Courage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 20,
              spans: [
                t('And Abishai the brother of Joab, he was chief of the three: for lifting up his spear against three hundred, he slew them, and had a name among the three.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Of the three, he was more honourable than the two; for he was their captain: howbeit he attained not to the first three.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Benaiah the son of Jehoiada, a man of valour, of Kabzeel, who had done many acts, he smote two '),
                hg('lionlike men of Moab', 'c1-11-lionlike'),
                t(': he went down also and slew a '),
                hg('lion in a pit', 'c1-11-lion-pit'),
                t(' in time of snow:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he slew an Egyptian, a man of great stature, five cubits high; and in the Egyptian&apos;s hand was a spear like a weaver&apos;s beam; and he went down to him with a staff, and '),
                hg('plucked the spear', 'c1-11-plucked-spear'),
                t(' out of the Egyptian&apos;s hand, and slew him with his own spear.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('These things did Benaiah the son of Jehoiada, and had the name among the three mighty men.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Behold, he was honourable among the thirty, but attained not to the first three: and David set him over his guard.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-lionlike',
          html:
            'Benaiah, son of Jehoiada, has a reputation as a man of valor. He smote two "lionlike men of Moab" — men whose strength and courage were like that of lions. The comparison is not incidental; in ancient warfare, to be described as "lionlike" was to be recognized as fearsome, nearly unstoppable.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-lion-pit',
          html:
            'In the dead of winter, in time of snow, Benaiah goes down into a pit and slays a lion. It is an act of extraordinary daring — not a hunt on open ground, but a descent into the creature&apos;s own territory, in the cold when even natural predators seek shelter. The act speaks to Benaiah&apos;s willingness to face danger in its worst conditions.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-plucked-spear',
          html:
            'An Egyptian of great stature — five cubits, roughly seven and a half feet tall — comes with a spear as large as a weaver&apos;s beam. Benaiah has only a staff. Yet he goes to the Egyptian, plucks the spear from his hand, and slays him with his own weapon. It is a reversal: the weak man takes the strong man&apos;s instrument of death and turns it against him.',
        },
        {
          kind: 'hebrew',
          id: 'c1-11-gibbor',
          title: 'Gibbor — "Mighty One" or "Warrior"',
          script: 'גִּבּוֹר',
          translit: '<strong>Gibbor</strong> · mighty one; a warrior of strength and valor',
          description:
            'The mighty men are called gibborim in Hebrew — plural of gibbor. A gibbor is not merely strong; he is characterized by courage, by willingness to face danger that would make ordinary men flee. A gibbor acts when others hesitate.',
        },
        {
          kind: 'carry',
          html:
            'Benaiah slays lions and giants, overcomes enemies who seem unstoppable. Yet his courage is not reckless — it is strategic. He takes the enemy&apos;s own weapon and turns it back. He enters the pit in winter when all seems dark. What giants in your life seem too large to face? What would it take to walk into that pit, not in strength of your own, but in faith that God is with you?',
        },
        {
          kind: 'reflection',
          id: 'lion-pit',
          prompt: 'Benaiah went down into a pit in the snow to face a lion. What do you avoid facing because it seems too dark or too difficult? What would change if you believed you could overcome it?',
        },
      ],
    },

    /* ─── 1 Chronicles 11:26–47 — The Thirty Mighty Men ──────────────── */
    {
      ref: '1 Chronicles 11:26–47',
      title: 'The Thirty Mighty Men — A Community of the Valiant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 26,
              spans: [
                t('The mighty men of the armies were, Asahel the brother of Joab, Elhanan the son of Dodo of Bethlehem,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Shammoth the Harorite, Helez the Pelonite,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Ira the son of Ikkesh the Tekoite, Abiezer the Anethothite,'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Sibbecai the Hushathite, Ilai the Ahohite,'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Maharai the Netophathite, Heled the son of Baanah the Netophathite,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-split-1',
          html:
            'The roster begins with Asahel, Joab&apos;s brother — swift and strong in battle. Then come warriors from the towns of Israel: Bethlehem, the Tekoite region, the lands of the Pelonites and Hushathites. Each name is tied to a place, a home. The mighty men are not generic soldiers; they are known men from known communities.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 31,
              spans: [
                t('Ithai the son of Ribai of Gibeah, that pertained to the children of Benjamin, Benaiah the Pirathonite,'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Hurai of the brooks of Gaash, Abiel the Arbathite,'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Azmaveth the Baharumite, Eliahba the Shaalbonite,'),
              ],
            },
            {
              number: 34,
              spans: [
                t('The sons of Hashem the Gizonite, Jonathan the son of Shage the Hararite,'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Ahiam the son of Sacar the Hararite, Eliphal the son of Ur,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-split-2',
          html:
            'More names, more families: men from Benjamin and the Pirathon, from the hills and brooks of Gaash. Some are brothers fighting alongside each other — the sons of Hashem, Jonathan and his father Shage. The repetition of names and places draws us into a world of kinship networks and tribal bonds. David&apos;s army is not a collection of individuals; it is a weaving together of families and communities.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 36,
              spans: [
                t('Hepher the Mecherathite, Ahijah the Pelonite,'),
              ],
            },
            {
              number: 37,
              spans: [
                t('Hezro the Carmelite, Naarai the son of Ezbai,'),
              ],
            },
            {
              number: 38,
              spans: [
                t('Joel the brother of Nathan, Mibhar the son of Haggeri,'),
              ],
            },
            {
              number: 39,
              spans: [
                t('Zelek the Ammonite, Naharai the Berothite, the armourbearer of Joab the son of Zeruiah,'),
              ],
            },
            {
              number: 40,
              spans: [
                t('Ira the Ithrite, Gareb the Ithrite,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-split-3',
          html:
            'Here the text reveals something remarkable: Zelek the Ammonite and Naharai the Berothite stand shoulder to shoulder with men born in Israel. These are foreigners, men from outside the covenant people, who have chosen to covenant with David. They are not marginal to his army — Naharai is the armourbearer of Joab himself, a position of trust and intimacy. David&apos;s kingdom gathers not only Israelites but also those who come from beyond Israel&apos;s borders.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 41,
              spans: [
                t('Uriah the Hittite, Zabad the son of Ahlai,'),
              ],
            },
            {
              number: 42,
              spans: [
                t('Adina the son of Shiza the Reubenite, a captain of the Reubenites, and thirty with him,'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Hanan the son of Maachah, and Joshaphat the Mithnite,'),
              ],
            },
            {
              number: 44,
              spans: [
                t('Uzzia the Ashterathite, Shama and Jehiel the sons of Hotham the Aroerite,'),
              ],
            },
            {
              number: 45,
              spans: [
                t('Jediael the son of Shimri, and Joha his brother, the Tizite,'),
              ],
            },
            {
              number: 46,
              spans: [
                t('Eliel the Mahavite, and Jeribai, and Joshaviah, the sons of Elnaam, and Ithmah the Moabite,'),
              ],
            },
            {
              number: 47,
              spans: [
                t('Eliel, and Obed, and Jasiel the Mesobaite.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-11-split-4',
          html:
            'The final segment of the roster includes Uriah the Hittite (whose name will be darkened by David&apos;s later sin, but here is simply a valiant warrior), and Ithmah the Moabite. Brother pairs are woven through the list — Joha and Jediael, Shama and Jehiel. And notably, Adina the Reubenite brings thirty men with him, an entire company united under his captaincy. The mighty men are not thirty isolated heroes, but a network of families, companions, and captains, all bound to David.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-thirty',
          html:
            'The list of the thirty mighty men is long, and each name carries with it the weight of personal valor. Some are named for the cities they came from: Bethlehem, the Hararite, the Pelonite. Some are brothers fighting alongside each other. They come from every tribe of Israel — from Judah, Benjamin, the lands east of the Jordan. They are not all Israelites by birth; Uriah the Hittite and Naharai the Berothite stand in the roster, and men from Ammon and Moab. What unites them is this: they came to David, they covenanted with him, they fought under his banner.',
        },
        {
          kind: 'commentary',
          id: 'c1-11-community',
          html:
            'These thirty are not solitary heroes. They are a community gathered around one man. Each name represents not only personal courage, but loyalty to David and to each other. They fought together, bled together, and their names are preserved together in this roster. The list itself is an act of honor — to be named is to be remembered, to be recognized as one who belonged to the kingdom of David.',
        },
        {
          kind: 'carry',
          html:
            'The mighty men are named — each one remembered, each one part of a community. We tend to celebrate the greatest, the most famous — Joab, Abishai, Benaiah, Jashobeam. But the text insists on naming all thirty. Each warrior matters. Each one who gathered to David is honored. In the kingdom of God, every person who gathers to Christ, who covenants with Him, is named and remembered. You are not one of a faceless multitude. You have a name.',
        },
        {
          kind: 'reflection',
          id: 'mighty-men-named',
          prompt: 'The chapter lists thirty mighty men by name. What does it mean to you to be named, to be known not as "one of the crowd" but as a specific person in God&apos;s story?',
        },
      ],
    },

    /* ─── Christ Connection Summary ────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'christ',
          id: 'c1-11-christ-main',
          title: 'Christ Connection — The True David, Gathering His Mighty Men',
          html:
            'David was anointed as king when he was rejected and hunted. Men gathered to him in caves and strongholds, committing themselves to one whose crown had not yet visibly been won. They risked their lives — breaking through enemy lines to bring him water from Bethlehem, the house of bread. And David, receiving their costly sacrifice, poured it out unto the Lord. This pattern foreshadows Jesus. Christ is the True David, anointed by God but rejected by His own people. Yet a community gathered to Him — not in the moment of His visible power, but in His humiliation. "His own received him not; but as many as received him, to them gave he power to become the sons of God" (John 1:11–12). And in the upper room, surrounded by the men who had covenanted with Him, Christ took a cup and said, "This is my blood of the new testament, which is shed for many for the remission of sins" (Matt 26:28). The water David would not drink becomes the blood Christ pours out. The thirty men who gathered to David become the multitude scattered throughout the earth who gather to Christ. And just as the mighty men were named and remembered, so Christ promises, "The Lord knoweth them that are his" (2 Tim 2:19).',
        },
      ],
    },
  ],
};
