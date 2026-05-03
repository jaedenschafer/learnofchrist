import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 12 — Priests, Levites, and the Dedication of the Wall
 *
 * The chapter opens with the roster of priests and Levites who returned from
 * exile with Zerubbabel and Jeshua — the spiritual leaders appointed to rebuild
 * the community. Then it shifts to the great moment: the dedication of the wall
 * of Jerusalem. Two processions of thanksgiving converge at the temple, singing
 * and playing instruments. The joy is so great it echoes "even afar off." The
 * chapter closes by affirming the ancient order of worship, established by David,
 * continued through the ages, and now renewed.
 */
export const NEHEMIAH_12: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 12,

  estimatedMinutes: { 5: 5, 10: 10, 15: 15 },
  intros: [
    'After the walls have been rebuilt — stone by stone, under the leadership of Nehemiah — the moment of dedication arrives. But before the celebration begins, the text pauses to record the names of the priests and Levites who came up with Zerubbabel and Jeshua, the men who led the spiritual life of the returning community. These are the ones who sustained the people through exile and brought them home. They are not footnotes to the story; they are the foundation.',
    'The dedication itself becomes a symphony of joy. Two great companies of the people take to the wall, walking in opposite directions, singing, playing instruments — cymbals, harps, lyres — until they meet together at the house of God. The priests blow their trumpets. The singers sing so loudly that the text declares: "The joy of Jerusalem was heard even afar off." This is not the muted relief of a survivor. This is a people who have discovered that what was lost can be rebuilt, and that rebuilding itself is cause for exultation that echoes beyond the walls.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 12',
    quote:
      'The joy of Jerusalem was heard even afar off — a people gathered to celebrate not what they possessed, but what they had been given the grace to rebuild.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 12 · Study Guide',
  },

  sections: [
    /* ─── Nehemiah 12:1–9 — The Priests and Levites Who Returned ──────── */
    {
      ref: 'Nehemiah 12:1–9',
      title: 'The Priests and Levites Who Returned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              1,
              'Now these are the priests and the Levites that went up with Zerubbabel the son of Shealtiel, and Jeshua: Seraiah, Jeremiah, Ezra,'
            ),
            plain(2, 'Amariah, Malluch, Hattush,'),
            plain(3, 'Shechaniah, Rehum, Meremoth,'),
            plain(4, 'Iddo, Ginnetho, Abijah,'),
            plain(5, 'Miamin, Maadiah, Bilgah,'),
            plain(6, 'Shemaiah, and Joiarib, Jedaiah,'),
            plain(7, 'Sallu, Amok, Hilkiah, Jedaiah. These were the chief of the priests and of their brethren in the days of Jeshua.'),
            plain(8, 'Moreover the Levites: Jeshua, Binnui, Kadmiel, Sherebiah, Judah, and Mattaniah, which was over the thanksgiving, he and his brethren.'),
            plain(
              9,
              'Also Bakbukiah and Unni, their brethren, were over against them in the watches.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh12-priestly-roll',
          html:
            'The text opens with names — layers of names, families that will carry forward the sacred work of priesthood. In Jewish tradition, genealogy is not mere record-keeping; it is affirmation that a person, a line, a calling, matters. These priests are not anonymous. They are named. They are known. And they are the ones whose hands will bless the people, whose voices will lead the prayers, whose sacrifices will rise at the altar.',
        },
        {
          kind: 'commentary',
          id: 'neh12-jeshua-role',
          html:
            'Jeshua appears here as the chief priest, the one who leads alongside Zerubbabel, the civil governor. Their partnership — spiritual and temporal authority working together — becomes the pattern for the restored community. The Levites, too, are listed by function: Mattaniah "over the thanksgiving," Bakbukiah and Unni "over against them in the watches." Each has a calling, a place, a purpose.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that does not easily honor titles or roles. We resist hierarchy. Yet there is something profoundly human in being called by name, being given a place, being told "this is your work in the community." The priests and Levites in Nehemiah are not dictators or tyrants; they are servants appointed to serve the people. Do you know your place? Have you received your calling from God?',
        },
        {
          kind: 'reflection',
          id: 'neh12-calling',
          prompt:
            'The priests and Levites are named and given specific roles — to lead prayer, to sing thanksgiving, to keep watch. What is your calling in your community, and how have you been affirmed in it?',
        },
      ],
    },

    /* ─── Nehemiah 12:10–26 — The Heads of the Fathers' Houses ─────────── */
    {
      ref: 'Nehemiah 12:10–26',
      title: 'The Succession of High Priests',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              10,
              'And Jeshua begat Joiakim, Joiakim also begat Eliashib, and Eliashib begat Joiada,'
            ),
            plain(11, 'And Joiada begat Jonathan, and Jonathan begat Jaddua.'),
            plain(
              12,
              'And in the days of Joiakim were the priests, the chief of the fathers: of Seraiah, Meraiah; of Jeremiah, Hananiah;'
            ),
            {
              number: 22,
              spans: [
                t('The Levites in the days of Eliashib, Joiada, and Johanan, and Jaddua, were recorded chief of the fathers: also the priests, to the reign of Darius the Persian.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh12-succession',
          html:
            'Here is the genealogical chain of high priests, stretching from Jeshua to Jaddua. This succession represents continuity — the priesthood does not die in exile; it is renewed. Each generation passes the mantle to the next. In Jewish memory, this is sacred history: the unbroken line of those who stood before God, who kept the law, who maintained the covenant. And the text records it all, making sure that no one is forgotten.',
        },
        {
          kind: 'hebrew',
          id: 'neh12-avot',
          title: 'Avot — "Fathers" or "Patriarchs"',
          script: 'אָבוֹת',
          translit: '<strong>Avot</strong> · fathers; patriarchs; ancestral heads',
          description:
            'The word "avot" (fathers) appears repeatedly in this section — "chief of the fathers," "fathers&apos; houses." It speaks to the Hebrew concept of corporate identity: a family, a tribe, a people united through ancestral continuity. To belong to the house of your father is to belong to something larger than yourself, a living tradition.',
        },
        {
          kind: 'carry',
          html:
            'Modern life often isolates us from our spiritual ancestors. We do not know the names of those who prayed before us, who suffered for the faith, who passed it on so that we might receive it. Yet we are part of a chain as real as the succession of priests in Nehemiah. You are part of a family — spiritual as well as biological — that stretches back to the apostles and forward to generations yet unborn. What does it mean to you to belong to that line?',
        },
        {
          kind: 'reflection',
          id: 'neh12-ancestors',
          prompt:
            'Think of a spiritual ancestor — someone whose faith shaped your own. How has their example been passed on to you? How will you pass on your faith to those who come after?',
        },
      ],
    },

    /* ─── Nehemiah 12:27–39 — The Dedication of the Wall ────────────────── */
    {
      ref: 'Nehemiah 12:27–39',
      title: 'Two Processions of Thanksgiving',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              27,
              'And at the dedication of the wall of Jerusalem they sought the Levites out of all their places, to bring them to Jerusalem, to keep the dedication with gladness, both with thanksgivings, and with singing, with cymbals, psalteries, and with harps.'
            ),
            plain(
              28,
              'And the sons of the singers gathered themselves together, both out of the plain country round about Jerusalem, and from the villages of Netophathi;'
            ),
            plain(
              29,
              'Also from the house of Gilgal, and out of the fields of Geba and Azmaveth: for the singers had builded them villages round about Jerusalem.'
            ),
            plain(
              30,
              'And the priests and the Levites purified themselves, and purified the people, and the gates, and the wall.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh12-gathering',
          html:
            'The dedication becomes an all-Israel event. Levites are summoned from their towns. Singers gather from the villages around Jerusalem — this is not a small ceremony, but a convocation. The people understand that what they have rebuilt is not merely a wall of stone; it is a boundary around holiness, around community, around covenant. Before the celebration, they purify: the priests, the Levites, the people, the gates, the wall itself. This is not hurried joy. This is joy prepared for.',
        },
        {
          kind: 'hebrew',
          id: 'neh12-chanukkah',
          title: 'Chanukkah — "Dedication"',
          script: 'חֲנֻכָּה',
          translit: '<strong>Chanukkah</strong> · dedication; the act of consecrating',
          description:
            'The word "chanukkah" (dedication) comes from "chanakh," meaning to train or inaugurate. When you dedicate something, you set it apart for its intended purpose — you begin its true work. The dedication of the wall is not merely a celebration of engineering; it is the consecration of Jerusalem itself as a city holy to God.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              31,
              'Then I brought up the princes of Judah upon the wall, and appointed two great companies of them that gave thanks, whereof one went on the right hand upon the wall toward the dung gate:'
            ),
            {
              number: 32,
              spans: [
                t('And after them went Hoshaiah, and half of the princes of Judah,'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And Azariah, Ezra, and Meshullam,'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Judah, and Benjamin, and Shemaiah, and Jeremiah,'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And certain of the priests&apos; sons with trumpets; namely, Zechariah the son of Jonathan, the son of Shemaiah, the son of Mattaniah, the son of Michaiah, the son of Zaccur, the son of Asaph:'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And his brethren, Shemaiah, and Azarael, Milalai, Gilalai, Maai, Nethanel, and Judah, Hanani, with the musical instruments of David the man of God. And Ezra the scribe was before them.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And at the fountain gate, which was over against them, they went up by the stairs of the city of David, at the going up of the wall, above the house of David, even unto the water gate on the east.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And the other company of them that gave thanks went over against them, and I after them, and the half of the people upon the wall, from beyond the tower of the furnaces even unto the broad wall;'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And from above the gate of Ephraim, and above the old gate, and above the fish gate, and the tower of Hananel, and the tower of Meah, even unto the sheep gate: and they stood still in the prison gate.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh12-two-companies',
          html:
            'Nehemiah divides the people into two thanksgiving processions. One goes to the right, along the wall; the other goes the opposite direction. Their path is traced through the gates of Jerusalem: the dung gate, the fountain gate, the water gate, the fish gate, the sheep gate. Each gate marks a place of entrance, a boundary, a passage. The processions walk the perimeter of what they have built, blessing it as they go.',
        },
        {
          kind: 'commentary',
          id: 'neh12-trumpets',
          html:
            'The priests blow trumpets. The singers sing. The text specifies musical instruments — not random noise, but ordered joy. This is worship structured, as David commanded. The music is intentional. It carries meaning. It marks the moment as sacred.',
        },
        {
          kind: 'carry',
          html:
            'When was the last time you gathered with others to celebrate what God has done? Not to celebrate yourself, but to give thanks for grace? The people of Jerusalem did not walk those walls in triumph; they walked singing. They did not boast of their strength; they gave thanks. Thanksgiving is a discipline. It requires gathering, intentionality, and the willingness to recognize that what we have was given to us.',
        },
        {
          kind: 'reflection',
          id: 'neh12-procession',
          prompt:
            'The two processions converge at the temple, walking in opposite directions before meeting. What would it look like for you to make a conscious circuit of thanksgiving around something God has given you or done in your life?',
        },
      ],
    },

    /* ─── Nehemiah 12:40–47 — The Joy Heard Afar Off ─────────────────── */
    {
      ref: 'Nehemiah 12:40–47',
      title: 'The Joy of Jerusalem Heard Even Afar Off',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              40,
              'So stood the two companies of them that gave thanks in the house of God, and I, and the half of the rulers with me:'
            ),
            plain(
              41,
              'And the priests; Eliakim, Maaseiah, Miniamin, Michaiah, Elioenai, Zechariah, and Hananiah, with trumpets;'
            ),
            plain(
              42,
              'And Maaseiah, and Shemaiah, and Eleazar, and Uzzi, and Jehohanan, and Malchijah, and Elam, and Ezer. And the singers sang loud, with Jezrahiah their overseer.'
            ),
            {
              number: 43,
              spans: [
                t('Also that day they offered great '),
                hg('sacrifices', 'neh12-sacrifices'),
                t(', and '),
                hp('rejoiced', 'neh12-rejoiced'),
                t(': for God had made them '),
                hp('rejoice with great joy', 'neh12-great-joy'),
                t(': the wives also and the children '),
                hg('rejoiced', 'neh12-rejoiced-all'),
                t(': so that the joy of Jerusalem was heard even afar off.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh12-sacrifices',
          html:
            'Great sacrifices are offered. This is not ceremonial obligation only; this is abundance poured out in gratitude. The sacrifice says: "I am not holding anything back. All that I have comes from God, and I return it to Him with thanksgiving." In offering, they align themselves with the ancient pattern — the giving that makes the giver whole.',
        },
        {
          kind: 'commentary',
          id: 'neh12-rejoiced',
          html:
            'The word "rejoiced" appears twice in this verse — "they rejoiced" and "the wives also and the children rejoiced." Joy is not solitary. It is shared. The wives, the children — all the household, all the community — join in the celebration. Even servants and strangers are drawn into the sound of it.',
        },
        {
          kind: 'hebrew',
          id: 'neh12-todah',
          title: 'Todah — "Thanksgiving"',
          script: 'תּוֹדָה',
          translit: '<strong>Todah</strong> · thanksgiving; gratitude; a thank-offering',
          description:
            'The root "todah" (thanksgiving) carries both the feeling and the practice. A todah-offering in the temple was not a sin-offering or guilt-offering; it was pure gratitude transformed into ritual action. To give thanks is to acknowledge that what we have was given, not earned.',
        },
        {
          kind: 'commentary',
          id: 'neh12-great-joy',
          html:
            'The phrase is emphatic: "God had made them rejoice with great joy." This is not self-generated happiness. The joy is God&apos;s gift. He has enabled them to rejoice. He has given them cause and capacity for celebration. The accent falls on God&apos;s initiative, on His will to see His people glad.',
        },
        {
          kind: 'commentary',
          id: 'neh12-heard-afar-off',
          html:
            'And then the most extraordinary claim: "the joy of Jerusalem was heard even afar off." The sound travels. It is not contained within the walls. The enemies of Judah, the surrounding nations, the distant peoples — they all hear that Jerusalem rejoices. This is a victory not won by the sword, but by the voice. The joy itself is a proclamation.',
        },
        {
          kind: 'hebrew',
          id: 'neh12-rinnah',
          title: 'Rinnah — "Singing" or "Cry of Joy"',
          script: 'רִנָּה',
          translit: '<strong>Rinnah</strong> · singing; cry of joy; a shout of jubilation',
          description:
            'The Hebrew "rinnah" is not quiet. It is a cry, a shout, a jubilant noise. When the text says the joy was "heard," it carries the sense of "rinnah" — an audible, unmistakable proclamation of gladness that carries across distance.',
        },
        {
          kind: 'christ',
          id: 'neh12-joy-afar-off',
          title: 'Christ Connection — The Joy Heard From Afar',
          html:
            'The joy of Jerusalem echoes beyond the walls, beyond the city, to peoples who do not even know Jerusalem. This pattern resonates with the prophet Habakkuk, who sings of the heavens and declares his joy even in times of famine: "I will rejoice in the God of my salvation" (Hab 3:18). The joy that belongs to God&apos;s people cannot be contained by circumstances. And in the New Testament, this joy finds its completion in the Lamb&apos;s marriage feast (Rev 19:6–9), where the joy of the Bride and Bridegroom is so great that it shakes the heavens. That joy, too, will be "heard afar off" — the entire cosmos bearing witness to the gladness of the redeemed.',
        },
        {
          kind: 'carry',
          html:
            'Can your joy be heard? Not the surface cheerfulness that masks despair, but the deep gladness that comes from knowing you are loved by God, that what was broken is being restored, that you are part of something larger than yourself? The people of Jerusalem did not hide their joy. They sang it so loudly that it traveled beyond the walls. What would change if you let your thanksgiving speak audibly?',
        },
        {
          kind: 'reflection',
          id: 'neh12-joyafar',
          prompt:
            'The joy of Jerusalem was so great it could be heard afar off. What would it look like for your gratitude to God to become visible, audible, unmistakable to others?',
        },
      ],
    },

    /* ─── Nehemiah 12:44–47 — The Ordering of the Priests and Levites ─── */
    {
      ref: 'Nehemiah 12:44–47',
      title: 'The Pattern Established by David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(
              44,
              'And at that time were some appointed over the chambers for the treasures, for the offerings, for the firstfruits, and for the tithes, to gather into them out of the fields of the cities the portions of the law for the priests and for the Levites: for Judah rejoiced for the priests and for the Levites that waited.'
            ),
            plain(
              45,
              'For they performed the duty of their God, and the duty of the purification, according to the commandment of David, and of Solomon his son.'
            ),
            plain(
              46,
              'For in the days of David and Asaph of old there were chief of the singers, and songs of praise and thanksgiving unto God.'
            ),
            plain(
              47,
              'And all Israel in the days of Zerubbabel, and in the days of Nehemiah, gave the portions of the singers and of the porters, every day his portion: and they sanctified holy things unto the Levites; and the Levites sanctified them unto the children of Aaron.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh12-chambers',
          html:
            'Practical arrangements are made: chambers are appointed for the treasures, for the firstfruits and tithes. This is not the romance of the moment only, but the structure that will sustain the community. The people are appointed to gather the portions — the food, the support — that the law requires for the priests and Levites. Worship requires infrastructure. It requires the willing support of the whole community.',
        },
        {
          kind: 'commentary',
          id: 'neh12-rejoiced-for',
          html:
            '"Judah rejoiced for the priests and for the Levites." It is an unusual phrase. They do not rejoice at them, but for them — on their behalf, recognizing the sacred burden they carry. The community understands that the priesthood is a gift, and the support of the priesthood is a joy, not a burden.',
        },
        {
          kind: 'commentary',
          id: 'neh12-david-pattern',
          html:
            'The text reaches back to David and Solomon — to the ancient pattern of worship that sustained Israel in her strength. The dedication of the wall is not an innovation; it is a restoration. What was established in the days of David is now reestablished. The singers, the choirs, the songs of praise — all of it was ordered by David. Now Nehemiah and the people of the restoration follow that same order, continuing what was interrupted but never broken.',
        },
        {
          kind: 'hebrew',
          id: 'neh12-mishmar',
          title: 'Mishmar — "Ward" or "Watch"',
          script: 'מִשְׁמַר',
          translit: '<strong>Mishmar</strong> · ward; watch; a duty or responsibility assigned',
          description:
            'The priests and Levites "performed the duty of their God" — the word "mishmar" (ward, watch) suggests a responsibility taken seriously, something guarded and protected. It is not casual piety, but deliberate stewardship of the sacred.',
        },
        {
          kind: 'christ',
          id: 'neh12-pattern-eternal',
          title: 'Christ Connection — The Pattern That Endures',
          html:
            'What David established continues through exile and restoration. What was interrupted by catastrophe is resumed. This pattern of unbroken continuity in worship finds its ultimate expression in Christ, who is described as "the same yesterday, and to day, and for ever" (Heb 13:8). The order that David established pointed to a worship that would outlast empires, that would survive exile, that would be renewed in each generation. The ultimate worship of God&apos;s people culminates not in a rebuilt wall, but in the Lamb upon the throne, "worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing" (Rev 5:12).',
        },
        {
          kind: 'carry',
          html:
            'You are part of a pattern that stretches back centuries and forward into eternity. The worship you offer, the community you gather with, the songs you sing — these continue something ancient and holy. You are not starting from scratch. You are joining something that was begun before you and will continue after you. Do you feel that weight and privilege?',
        },
        {
          kind: 'reflection',
          id: 'neh12-pattern',
          prompt:
            'What worship or spiritual practice have you inherited from those who came before you? How will you pass it on, renewed and faithful, to the next generation?',
        },
      ],
    },
  ],
};
