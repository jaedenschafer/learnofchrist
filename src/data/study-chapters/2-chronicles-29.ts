import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 29 — Hezekiah Cleanses the Temple
 *
 * In the first year and first month of his reign, Hezekiah opens the doors
 * of the Lord's house and calls the priests and Levites to sanctify themselves
 * and cleanse the temple. For years, his father Ahaz had turned his back on
 * God's house. Hezekiah now reverses that course with urgent, decisive action.
 * In eight days, the work of cleansing is complete. And then comes the
 * restoration of worship itself: sacrifices, singing, the instruments of David,
 * the joy of a people returned to their King. This is the portrait of a kingdom
 * reawakening to its covenant — "the thing was done suddenly."
 */
export const CHRONICLES_2_29: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 29,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 14 },
  intros: [
    'Hezekiah is twenty-five years old when he comes to the throne. Jerusalem has been wandering. His father Ahaz had done evil in the sight of the Lord, had shut the doors of the Lord\'s house, and the wrath of God had come upon Judah. The nation has turned away. But Hezekiah feels the weight of something more than just political crisis—he feels the weight of covenant, the broken relationship between God and His people.',
    'And so in the first year of his reign, in the first month (Nisan, the month of new beginnings), Hezekiah does something no other king in this generation would have dared: he opens the doors of the house of the Lord. He does not deliberate. He does not ask permission. He does not wait for the right season. He calls together the priests and Levites and speaks to them words that will change the course of a kingdom: "Sanctify yourselves. Sanctify the house of the Lord. Carry out the filthiness from the holy place."',
    'What follows is the story of a nation remembering itself, a people returning in eight days to the God they had abandoned. The work is relentless, directed, purposeful. And when it is complete, worship erupts—not as obligation, but as the breaking forth of joy. This is what restoration looks like: the sudden outpouring of a people made whole.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 29',
    quote:
      'Hezekiah opened the doors of the Lord\'s house in his first month and first year. He did not delay. In eight days, the cleansing was complete. And when the temple was restored, worship itself was restored — "the thing was done suddenly."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 29 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 29:1–11 — Hezekiah Opens the Doors ─────────────────── */
    {
      ref: '2 Chronicles 29:1–11',
      title: 'Hezekiah Opens the Doors (First Year, First Month)',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(1, 'Hezekiah began to reign when he was five and twenty years old, and he reigned nine and twenty years in Jerusalem. And his mother\'s name was Abijah, the daughter of Zechariah.'),
            plain(2, 'And he did that which was right in the sight of the Lord, according to all that David his father had done.'),
            plain(3, 'He in the first year of his reign, in the first month, opened the doors of the house of the Lord, and repaired them.'),
            plain(4, 'And he brought in the priests and the Levites, and gathered them together into the east street,'),
            {
              number: 5,
              spans: [
                t('And said unto them, Hear me, ye Levites, '),
                t('sanctify now yourselves'),
                t(', sanctify the house of the Lord God of your fathers, and carry forth the filthiness out of the holy place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2chr29-cleansing-begins',
          html:
            'Hezekiah does not wait for a council or a popular mandate. The first month of his reign, the doors are opened, the priests are gathered, the holy place is cleansed. Reformation begins on day one or it does not begin at all.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(6, 'For our fathers have trespassed, and done that which was evil in the eyes of the Lord our God, and have forsaken him, and have turned away their faces from the habitation of the Lord, and turned their backs.'),
            plain(7, 'Also they have shut up the doors of the porch, and put out the lamps, and have not burned incense nor offered burnt offerings in the holy place unto the God of Israel.'),
            plain(8, 'Wherefore the wrath of the Lord was upon Judah and Jerusalem, and he hath delivered them to trouble, to astonishment, and to hissing, as ye see with your eyes.'),
            plain(9, 'For, lo, our fathers have fallen by the sword, and our sons and our daughters and our wives are in captivity for this.'),
            {
              number: 10,
              spans: [
                t('Now it is in mine heart to '),
                t('make a covenant with the Lord God of Israel'),
                t(', that his fierce wrath may turn away from us.'),
              ],
            },
            plain(11, 'My sons, be not now negligent: for the Lord hath chosen you to stand before him, to serve him, and that ye should minister unto him, and burn incense.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c29-first-month',
          html:
            'In the <em>first</em> month of the <em>first</em> year—Hezekiah does not wait. He does not build a coalition, survey the damage, propose reforms, or seek counsel. The moment he is crowned, he acts. This tells us something about the nature of his heart: he does not believe the crisis can wait. The doors of the Lord&apos;s house are closed, and they must be opened. Now.',
        },
        {
          kind: 'commentary',
          id: 'c29-filthiness',
          html:
            'The "filthiness" that has accumulated in the temple is not just debris. It is the visible sign of abandonment, of a people turning their backs on covenant. Under Ahaz, the temple had become a museum of neglect. Hezekiah sees it and understands: to restore the kingdom, the temple must be restored. To restore worship, the place of worship must be cleansed.',
        },
        {
          kind: 'hebrew',
          id: 'c29-qadash',
          title: 'Qadash — "Sanctify" or "Set Apart"',
          script: 'קָדַשׁ',
          translit: '<strong>Qadash</strong> · to sanctify; to consecrate; to set apart for sacred use',
          description:
            'The verb "qadash" carries the weight of separation—a thing becomes qadash when it is separated from the common and set apart for the holy. Hezekiah does not ask the Levites to clean the temple. He asks them to sanctify themselves first. The cleansing cannot be merely mechanical; it must be spiritual. The worker must become holy before the work can be holy.',
        },
        {
          kind: 'commentary',
          id: 'c29-fathers-trespassed',
          html:
            'Hezekiah speaks for his people: "Our fathers have trespassed." He does not excuse them, but he does not distance himself from them either. He owns the failure as a national failure. The king understands that he is not merely a political administrator; he is a covenant representative, bound to the God of Israel on behalf of the people he serves.',
        },
        {
          kind: 'carry',
          html:
            'Notice that Hezekiah does not begin with blame or punishment. He begins with a call to return. He does not say, "You must repair the consequences of your fathers&apos; sins." He says, "The Lord hath chosen you to stand before him." He appeals not to judgment, but to purpose. The Levites are chosen. Let them remember what they are chosen for.',
        },
        {
          kind: 'reflection',
          id: 'c29-doors-open',
          prompt:
            'What doors in your own spiritual life need to be opened? What would it mean for you to do immediately what you know needs to be done, rather than waiting?',
        },
      ],
    },

    /* ─── 2 Chronicles 29:12–19 — The Levites Sanctify Themselves ─────────────── */
    {
      ref: '2 Chronicles 29:12–19',
      title: 'The Levites Sanctify Themselves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(12, 'Then the Levites arose, Mahath the son of Amasai, and Joel the son of Azariah, of the sons of the Kohathites: and of the sons of Merari, Kish the son of Abdi, and Azariah the son of Jehalelel: and of the Gershonites; Joah the son of Zimmah, and Eden the son of Joah:'),
            plain(13, 'And of the sons of Elizaphan; Shimri, and Jeiel: and of the sons of Asaph; Zechariah, and Mattaniah:'),
            plain(14, 'And of the sons of Heman; Jehiel, and Shimei: and of the sons of Jeduthun; Shemaiah, and Uzziel.'),
            {
              number: 15,
              spans: [
                t('And they gathered their brethren, and sanctified themselves, and came, according to the commandment of the king, by the words of the Lord, to '),
                t('cleanse the house of the Lord'),
                t('.'),
              ],
            },
            plain(16, 'And the priests went into the inner part of the house of the Lord, to cleanse it, and brought out all the uncleanness that they found in the temple of the Lord into the court of the house of the Lord: and the Levites took it, to carry it out abroad into the brook Kidron.'),
            {
              number: 17,
              spans: [
                t('Now they began on the first day of the first month to sanctify, and on the eighth day of the month came they to the porch of the Lord: so they sanctified the house of the Lord in '),
                hp('eight days', 'c29-eight-days'),
                t('; and in the sixteenth day of the first month they made an end.'),
              ],
            },
            plain(18, 'Then they went in to Hezekiah the king, and said, We have cleansed all the house of the Lord, and the altar of burnt offering, with all the vessels thereof, and the shewbread table, with all the vessels thereof.'),
            plain(19, 'Moreover all the vessels, which king Ahaz in his reign did cast away in his transgression, have we prepared and sanctified, and, behold, they are before the altar of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c29-levites-arise',
          html:
            'The text names the Levites—Mahath, Joel, Kish, Azariah, Joah, Eden, Shimri, Zechariah, and more. They are not faceless workers. They are named, known, their lineages traced through the great families of Levitical service. And when Hezekiah calls, they arise. They do not deliberate. They respond.',
        },
        {
          kind: 'commentary',
          id: 'c29-eight-days',
          html:
            'Eight days. The work of cleansing the entire temple—removing years of accumulated filthiness, restoring vessels, sanctifying the inner court—is completed in eight days. This is not leisurely restoration. This is urgent, focused, coordinated labor. And by the sixteenth day, when the first of the new offering will begin, everything is ready. The work is finished.',
        },
        {
          kind: 'hebrew',
          id: 'c29-tahor',
          title: 'Tahor — "Clean" or "Pure"',
          script: 'טָהוֹר',
          translit: '<strong>Tahor</strong> · clean; pure; ceremonially fit',
          description:
            'In the Old Testament, tahor is not merely the absence of dirt. It is the state of fitness for worship, the condition required to approach the holy. The Levites are preparing the temple to be tahor—not just dusted, but made ritually pure, made ready for the holy presence of God to dwell there.',
        },
        {
          kind: 'commentary',
          id: 'c29-vessels-restored',
          html:
            'Ahaz had cast away the vessels during his reign—the instruments of worship had been discarded as if they were worthless. The Levites find them, prepare them, sanctify them, and set them before the altar. Nothing is lost. Everything can be restored. The work of recovery begins with acknowledgment: these things matter. These vessels belong to God.',
        },
        {
          kind: 'carry',
          html:
            'When we are called to clean up after a period of neglect—whether in our homes, our relationships, our prayer lives—we often feel overwhelmed. But notice that the Levites did not work alone. They worked together. They sanctified themselves first. They moved with purpose and urgency. And in eight days, the work was done. What would change if you approached your own spiritual restoration with this same clarity of purpose and unity?',
        },
        {
          kind: 'reflection',
          id: 'c29-sanctify-selves',
          prompt:
            'The Levites first sanctified themselves, then cleansed the house of the Lord. What would it look like for you to first sanctify yourself—to set yourself apart, to prepare your own heart—before attempting any spiritual work?',
        },
      ],
    },

    /* ─── 2 Chronicles 29:20–30 — The Atoning Sacrifices and Song ──────────── */
    {
      ref: '2 Chronicles 29:20–30',
      title: 'The Atoning Sacrifices and the Song of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(20, 'Then Hezekiah the king rose early, and gathered the rulers of the city, and went up to the house of the Lord.'),
            plain(21, 'And they brought seven bullocks, and seven rams, and seven lambs, and seven he goats, for a sin offering for the kingdom, and for the sanctuary, and for Judah. And he commanded the priests the sons of Aaron to offer them on the altar of the Lord.'),
            plain(22, 'So they killed the bullocks, and the priests received the blood, and sprinkled it on the altar: likewise, when they had killed the rams, they sprinkled the blood upon the altar: they killed also the lambs, and they sprinkled the blood upon the altar.'),
            plain(23, 'And they brought forth the he goats for the sin offering before the king and the congregation; and they laid their hands upon them:'),
          ],
        },
        {
          kind: 'commentary',
          id: '2chr29-sin-offerings',
          html:
            'The cleansing reaches the altar itself. A sin-offering for the kingdom, the sanctuary, and Judah — the king assumes responsibility for what his fathers neglected.',
        },
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(24, 'And the priests killed them, and they made reconciliation with their blood upon the altar, to make an atonement for all Israel: for the king commanded that the burnt offering and the sin offering should be made for all Israel.'),
            plain(25, 'And he set the Levites in the house of the Lord with cymbals, with psalteries, and with harps, according to the commandment of David, and of Gad the king\'s seer, and Nathan the prophet: for so was the commandment of the Lord by his prophets.'),
            {
              number: 26,
              spans: [
                t('And the Levites stood with the instruments of David, and the priests with the trumpets. '),
                t('And when the burnt offering began, the song of the Lord began also with the trumpets, and with the instruments ordained by David'),
                t(': and all the congregation worshipped, the singers sang, and the trumpeters sounded: all this continued until the burnt offering was finished.'),
              ],
            },
            plain(27, 'And when they had made an end of offering, the king and all that were present with him bowed themselves, and worshipped.'),
            plain(28, 'Moreover Hezekiah the king and the princes commanded the Levites to sing praise unto the Lord with the words of David, and of Asaph the seer. And they sang praises with gladness, and they bowed their heads and worshipped.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c29-seven-offerings',
          html:
            'Seven bullocks, seven rams, seven lambs, seven he goats—the number seven signals completeness, wholeness. This is not a token offering. The king brings all that is required. The sevenfold offering is made "for the kingdom, and for the sanctuary, and for Judah"—the sin of the nation, the defilement of God&apos;s house, and the people themselves all require reconciliation.',
        },
        {
          kind: 'commentary',
          id: 'c29-for-all-israel',
          html:
            'The text is clear: the atonement is "for all Israel"—not just Judah. Even though the northern kingdom has been exiled, even though the ten tribes are scattered, Hezekiah makes the offering for them as well. This is a prayer for the whole people of God. This is an act of unity in a time of division.',
        },
        {
          kind: 'hebrew',
          id: 'c29-kippurim',
          title: 'Kippurim — "Atonement" or "Covering"',
          script: 'כִּפֻּרִים',
          translit: '<strong>Kippurim</strong> · atonement; covering; the act of making reconciliation',
          description:
            'The word "kippurim" comes from a root meaning "to cover." Atonement is not erasure; it is a covering. The blood of the offering covers the sin. The debt is paid. The relationship is restored. On the Day of Atonement (Yom Kippur), the great atoning work of the year happens in this same temple—and it will happen again in a perfect, final form in Christ.',
        },
        {
          kind: 'commentary',
          id: 'c29-song-worship',
          html:
            'Here is the moment of restoration: when the burnt offering began, the song of the Lord began also. Worship and offering are simultaneous. The music of David, the harps and psalteries, the trumpets—they all sound at once. This is not worship before the offering, or after. This is the two things happening together. And all the congregation worships. The entire people participates. Worship has been restored.',
        },
        {
          kind: 'christ',
          id: 'c29-christ-atonement',
          title: 'Christ Connection — The True Atonement for All Israel',
          html:
            'Hezekiah makes a sin offering for all Israel—the reconciliation of a nation to God. But the pattern finds its fulfillment in Christ. "Christ our passover is sacrificed for us" (1 Corinthians 5:7). More than that: "But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God" (Hebrews 10:12). The sevenfold offerings of Hezekiah point to that one perfect offering that would atone not just for a nation, not just for one generation, but for all who believe. And it is in that moment of reconciliation—when the atonement is made—that worship erupts. "The song of the Lord began also."',
        },
        {
          kind: 'carry',
          html:
            'Worship does not come before reconciliation. It comes at the moment when reconciliation is made. When you feel far from God, the work is not to try harder to worship, but to understand what stands between you and His presence. When that barrier is addressed, when you have made things right, worship returns—not as obligation, but as the natural response of a heart made whole.',
        },
        {
          kind: 'reflection',
          id: 'c29-song-offered',
          prompt:
            'What prevents your worship? Is there a distance between you and God that needs reconciliation? What would it look like for you to address that distance, and then allow worship to return?',
        },
      ],
    },

    /* ─── 2 Chronicles 29:31–36 — The Freewill Offerings (Suddenly) ─────────── */
    {
      ref: '2 Chronicles 29:31–36',
      title: 'The Abundant Freewill Offerings—"The Thing Was Done Suddenly"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(31, 'Then Hezekiah answered and said, Now ye have consecrated yourselves unto the Lord, come near and bring sacrifices and thank offerings into the house of the Lord. And the congregation brought in sacrifices and thank offerings; and as many as were of a free heart burnt offerings.'),
            plain(32, 'And the number of the burnt offerings, which the congregation brought, was threescore and ten bullocks, an hundred rams, and two hundred lambs: all these were for a burnt offering to the Lord.'),
            plain(33, 'And the consecrated things were six hundred oxen and three thousand sheep.'),
            {
              number: 34,
              spans: [
                t('But the priests were too few, so that they could not flay all the burnt offerings: wherefore their brethren the Levites did help them, till the work was ended, and until the '),
                hy('other priests had sanctified themselves', 'c29-priests-sanctify'),
                t(': for the Levites were more upright in heart to sanctify themselves than the priests.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And also the burnt offerings were in abundance, with the fat of the peace offerings, and the drink offerings for '),
                t('every burnt offering'),
                t('. So the service of the house of the Lord was set in order.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And Hezekiah rejoiced, and all the people, that God had prepared the people: for '),
                hg('the thing was done suddenly', 'c29-suddenly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c29-freewill',
          html:
            'Hezekiah does not demand more offerings. He says, "Come near and bring...as many as were of a free heart." And the response is overwhelming. Seventy bullocks, one hundred rams, two hundred lambs—from a people who had been starved of the opportunity to worship, the freewill offerings pour forth. This is the breaking forth of joy that cannot be contained. When a people are restored to covenant, they give not because they are commanded, but because they cannot help but give.',
        },
        {
          kind: 'commentary',
          id: 'c29-priests-sanctify',
          html:
            'The Levites must help the priests because there are too many offerings. The text notes something remarkable: "The Levites were more upright in heart to sanctify themselves than the priests." The Levites had responded immediately to the king&apos;s call. Some of the priests are still in the process of sanctifying themselves. This is not a criticism of the priesthood, but an observation: readiness of heart matters. When others hesitate, sanctify yourself first.',
        },
        {
          kind: 'hebrew',
          id: 'c29-pitom',
          title: 'Pitom — "Suddenly" or "All at Once"',
          script: 'פִּתְאֹם',
          translit: '<strong>Pitom</strong> · suddenly; unexpectedly; all at once',
          description:
            'The word "pitom" suggests something happening without warning, without gradual buildup. The work was done suddenly—not because it was rushed or sloppy, but because when a people return to covenant, the fruits of that return come swiftly. Joy breaks forth. Worship erupts. The restoration is not a long, slow process. It is a sudden reversal, a moment when heaven and earth align.',
        },
        {
          kind: 'commentary',
          id: 'c29-rejoiced-all',
          html:
            'Hezekiah rejoiced, and all the people rejoiced with him. The king and the people together. This is not the celebration of a monarch who has accomplished something for his subjects; this is the shared joy of a people who have found their way home. The text says God had "prepared the people." Hezekiah did not force this. God prepared the hearts of the people to return, and the people responded. The king simply opened the door.',
        },
        {
          kind: 'carry',
          html:
            'When a life is restored to covenant—when a person, a family, a community turns back to God with sincerity—the results are not slow and gradual. They are sudden. Joy erupts. Worship flows. Sacrificial giving pours forth. This tells us something about the nature of God&apos;s Kingdom: it is not built by incremental, calculating effort. It is built when hearts are turned, and then everything follows swiftly. What would it look like for you to open the doors—to stop holding back and allow the sudden flow of joy and worship that comes from true restoration?',
        },
        {
          kind: 'christ',
          id: 'c29-christ-cleanser',
          title: 'Christ Connection — The True Cleanser of the Temple',
          html:
            'Hezekiah cleanses the temple. But the New Testament shows us another cleansing. Jesus enters the temple in John 2 and overturns the tables of the money changers: "Take these things hence; make not my Father&apos;s house an house of merchandise" (John 2:16). His disciples remember that it is written: "The zeal of thine house hath eaten me up" (John 2:17, quoting Psalm 69:9). But here is the difference—Hezekiah cleanses the temple building so that worship can be restored. Jesus cleanses it to show that His body—the church, the gathered people of God—will become the true temple. The physical temple is a sign pointing forward. The ultimate cleansing comes not of a building, but of hearts. "Know ye not that ye are the temple of the Holy Ghost?" (1 Corinthians 6:19).',
        },
        {
          kind: 'reflection',
          id: 'c29-suddenly',
          prompt:
            'When you return to God in sincere repentance, have you experienced joy breaking forth suddenly? Or are you waiting for restoration to feel gradual? What would it mean to trust that God can prepare your heart for sudden, complete restoration?',
        },
      ],
    },
  ],
};
