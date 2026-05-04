import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 3 — David's Sons and the Davidic Line
 *
 * The genealogy of David's house is the spine of Israel's hope. Twelve sons
 * born in Hebron during David's reign there; thirty-three years in Jerusalem
 * with more sons — including Solomon, born of Bathsheba. The chapter then
 * traces the kingly succession through exile: Solomon, Rehoboam, and down
 * through Josiah, the last good king. Then it follows the post-exile line
 * through Zerubbabel, the leader of the return, whose descendants continue
 * into the Chronicler's own era. Throughout exile and return, the line
 * persists. The Davidic promise is unbroken.
 */
export const CHRONICLES_1_3: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 3,

  estimatedMinutes: { beginner: 3, intermediate: 8, deep: 11 },
  topicTags: ['kingship', 'worship', 'covenant', 'faithfulness'],
  opener: {
    topical: true,
    caption: '1 Chronicles 3',
  },
  intros: [
    'The book of 1 Chronicles is genealogy — bloodlines, lineages, family records stretching from Adam to the Chronicler&apos;s own day. But genealogy in Scripture is not mere ancestry. It is the thread of God&apos;s purpose woven through history. And in 1 Chronicles 3, we encounter the genealogy that matters most to Israel: the line of David.',
    'David&apos;s sons are born to him in Hebron, then in Jerusalem. Some will die in obscurity; one, Solomon, will build the temple. Then comes the succession of kings — the good ones and the wicked, the faithful and the faithless — down through the exile itself. Yet even in exile, even when a pagan empire has conquered Judah and burned the temple, the line persists. Zerubbabel leads the return, and his descendants continue. Israel can be defeated, the monarchy can fall, the temple can be destroyed — but the Davidic line cannot. That is the promise. That is what the genealogy preserves.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 3',
    quote:
      'The Davidic line persists through exile and return. Even when kingdoms fall, God&apos;s promise to raise up a king from David&apos;s house endures — a promise fulfilled in Christ, the King who was raised from the dead.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 3 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-levites',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Levites and Levitical Cities',
      url: 'https://www.bibleodyssey.org/dictionary/levite/',
      description: 'SBL study entry on Levite origins, roles, and tribal allotments.',
    },
    {
      id: 'sefaria-1-chronicles-3',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 3 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.3',
      description: 'The Hebrew text of 1 Chronicles 3 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-1-chronicles-overview-3',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '1 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/1-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 1 Chronicles.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 3:1–9 — David's Sons in Hebron and Jerusalem ──── */
    {
      ref: '1 Chronicles 3:1–9',
      title: 'The Sons of David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Now these were the sons of David, which were born unto him in Hebron; the firstborn Amnon, of Ahinoam the Jezreelitess; the second Daniel, of Abigail the Carmelitess;'),
            plain(2, 'The third Absalom the son of Maacah the daughter of Talmai king of Geshur; the fourth Adonijah the son of Haggith;'),
            plain(3, 'The fifth Shephatiah of Abital; the sixth Ithream by Eglah his wife.'),
            plain(4, 'These six were born unto him in Hebron; and there he reigned seven years and six months: and in Jerusalem he reigned thirty and three years.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr3-hebron-jerusalem',
          html:
            'The chronicler marks the transition — six sons born in Hebron, the rest in Jerusalem. The capital changes; the line keeps narrowing toward the Christ. [res:bibleodyssey-levites]',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 5,
              spans: [
                t('And these were born unto him in Jerusalem; Shimea, and Shobab, and Nathan, and '),
                t('Solomon'),
                t(', four, of Bath-shua the daughter of Ammiel:'),
              ],
            },
            plain(6, 'Ibhar also, and Elishama, and Eliphelet,'),
            plain(7, 'And Nogah, and Nepheg, and Japhia,'),
            plain(8, 'And Elishama, and Eliada, and Eliphelet, nine.'),
            {
              number: 9,
              spans: [
                t('These were all the sons of David, beside the sons of the concubines, and '),
                hg('Tamar their sister', 'davidic-tamar'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebron-reign',
          html:
            'David reigns in Hebron for seven years and six months — a period of consolidation after the death of Saul, when David is still establishing his authority over all twelve tribes. Then comes the move to Jerusalem, the capture of Jebus and its transformation into the seat of the kingdom. Thirty-three years in Jerusalem — the great reign, the building of the kingdom, the expansion of Israel&apos;s territory and power[res:sefaria-1-chronicles-3][res:bibleodyssey-1-chronicles-overview-3].',
        },
        {
          kind: 'commentary',
          id: 'mothers-of-sons',
          html:
            'The text carefully names the mothers of David&apos;s sons. This is not accidental. In Hebrew genealogy, maternity matters — it establishes legitimacy, tribal connection, and the weight of covenantal promise. Amnon&apos;s mother is Ahinoam; Absalom&apos;s is Maacah, a daughter of a foreign king; Solomon&apos;s is Bath-shua, who would bear the dynasty forward. Each name carries history.',
        },
        {
          kind: 'hebrew',
          id: 'davidic-sons',
          title: 'Zerubbabel — "Seed of Babylon"',
          script: 'זְרֻבָּבֶל',
          translit: '<strong>Zerubbabel</strong> · seed; Babylon',
          description:
            'This name appears later in the chapter — Zerubbabel, meaning "seed [of] Babylon." It is an ironic name, given to the post-exile leader born in exile. Yet it becomes a name of hope: the seed of Babylon becomes the one who leads Israel home. A child born in captivity becomes the instrument of return.',
        },
        {
          kind: 'commentary',
          id: 'davidic-tamar',
          html:
            'Tamar is named among the sons — the one daughter whose story is so significant that she is included in the genealogical record alongside her brothers. She is Absalom&apos;s sister, remembered in 2 Samuel 13 as a victim of David&apos;s son Amnon, a tragedy that echoes through the royal house. Her naming here is an act of remembrance.',
        },
        {
          kind: 'carry',
          html:
            'David&apos;s house, like every human house, is marked by both glory and shame. Some of his sons will be righteous; others will be wicked, violent, or foolish. Yet the promise to David is not conditional on the virtue of every son. The promise holds. The line continues. In our own families, we carry both the strengths and the wounds of those who came before. And yet God&apos;s covenant with us does not depend on our perfection.',
        },
        {
          kind: 'reflection',
          id: 'sons-of-david',
          prompt: 'David&apos;s sons include both future kings and men who will cause great harm. How do you understand God&apos;s faithfulness to a family line marked by such complexity and failure?',
        },
      ],
    },

    /* ─── 1 Chronicles 3:10–14 — The Succession: Solomon through Josiah ── */
    {
      ref: '1 Chronicles 3:10–14',
      title: 'The Kingly Line and the Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 10,
              spans: [
                t('And '),
                hy("Solomon&apos;s son", 'davidic-succession'),
                t(' was Rehoboam, Abia his son, Asa his son, Jehoshaphat his son,'),
              ],
            },
            plain(11, 'Joram his son, Ahaziah his son, Joash his son,'),
            plain(12, 'Amaziah his son, Azariah his son, Jotham his son,'),
            plain(13, 'Ahaz his son, Hezekiah his son, Manasseh his son,'),
            plain(14, 'Amon his son, Josiah his son.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'davidic-succession',
          html:
            'This is the line of David\'s throne: from Solomon, through his son Rehoboam (who would split the kingdom), down through Hezekiah (the great reformer), down to Josiah (the last good king of Judah). Some of these kings are righteous; others are deeply wicked — Ahaz offers his own son in fire to foreign gods; Manasseh is captured and exiled before he repents. But the line holds. Even through unfaithfulness, the throne passes from son to son, preserving the dynasty.',
        },
        {
          kind: 'hebrew',
          id: 'davidic-josia',
          title: 'Hezekiah — "God is My Strength"',
          script: 'חִזְקִיָּה',
          translit: '<strong>Hezekiah</strong> · God strengthens',
          description:
            'Among these kings, Hezekiah stands out. His reign is marked by reform, by trust in God when an enemy army surrounds Jerusalem. He cleanses the temple, restores the Passover, and when the Assyrian king threatens destruction, Hezekiah trusts, and the angel of the Lord destroys the enemy camp. His name, "God is my strength," reflects the faith he demonstrated.',
        },
        {
          kind: 'commentary',
          id: 'josiah-last-good',
          html:
            'Josiah is the last good king of Judah. He begins his reign as a boy, seeks God, reforms the temple, and discovers the Book of the Law. He weeps at the word of God. Yet even Josiah cannot save the kingdom — he dies in battle against Egypt, and within a generation, Babylon has conquered Jerusalem and burned the temple. The line of good kings ends. The judgment that the prophets have proclaimed comes to pass.',
        },
        {
          kind: 'carry',
          html:
            'Even the greatest of earthly kings cannot save themselves or their kingdoms from the consequences of national sin. David&apos;s line persists not because of the virtue of every descendant, but because God made a covenant with David that death itself cannot break. In our own lives, we may fail; those we love may fail; but God&apos;s promises to us are not suspended by our failures.',
        },
        {
          kind: 'reflection',
          id: 'kingly-line',
          prompt: 'This genealogy includes both righteous and wicked kings. What does it mean that God preserved the line through the wickedness of some kings? Does that suggest anything about how God relates to human failure?',
        },
      ],
    },

    /* ─── 1 Chronicles 3:15–16 — Josiah's Sons and the Last Kings ──── */
    {
      ref: '1 Chronicles 3:15–16',
      title: "Josiah&apos;s Sons and the Shadow of Exile",
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(15, 'And the sons of Josiah were, the firstborn Johanan, the second Jehoiakim, the third Zedekiah, the fourth Shallum.'),
            plain(16, 'And the sons of Jehoiakim: Jeconiah his son, Zedekiah his son.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'josiah-sons',
          html:
            'Josiah dies and his sons take the throne in turn — or are placed there by surrounding empires. Jehoiakim becomes a vassal of Egypt, then Babylon. Jeconiah (also called Coniah) reigns briefly and is captured by Nebuchadnezzar, carried to Babylon in chains. The text is sparse, but the silence is deafening: the great kingdom, the Davidic throne, has fallen to a foreign power. The king is not on his throne; he is in exile.',
        },
        {
          kind: 'commentary',
          id: 'jeconiah-exile',
          html:
            'Jeconiah is the king in chains. Jeremiah the prophet has pronounced a curse on him: "Write ye this man childless, a man that shall not prosper in his days: for no man of his seed shall prosper, sitting upon the throne of David" (Jeremiah 22:30). And yet — this is the genealogy of his descendants. The very line through whom hope will be restored is the line that seems to have been cut off.',
        },
        {
          kind: 'carry',
          html:
            'When everything seems lost — when the kingdom has fallen, the king is in chains, and the prophecy declares no descendants will sit on the throne — the genealogy continues. God&apos;s promise does not depend on military victory, political power, or the success of human schemes. It holds in exile, in captivity, in the darkest hour.',
        },
        {
          kind: 'reflection',
          id: 'exile-shadow',
          prompt: 'Jeconiah is cursed, yet his line continues. When has something that seemed cursed or destroyed in your life actually carried hidden hope forward?',
        },
      ],
    },

    /* ─── 1 Chronicles 3:17–24 — Jeconiah&apos;s Line and the Return ──── */
    {
      ref: '1 Chronicles 3:17–24',
      title: 'The Return: Zerubbabel and the Line Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(17, 'And the sons of Jeconiah; Assir, Salathiel his son,'),
            plain(18, 'Malchiram also, and Pedaiah, and Shenazar, Jecamiah, Hoshama, and Nedabiah.'),
            {
              number: 19,
              spans: [
                t('And the sons of Pedaiah were, '),
                hy('Zerubbabel', 'davidic-zerubbabel'),
                t(', and Shimei: and the sons of Zerubbabel; Meshullam, and Hananiah, and Shelomith their sister:'),
              ],
            },
            plain(20, 'And Hashubah, and Ohel, and Berechiah, and Hasadiah, Jushab-hesed, five.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-3-mid-20',
          html:
            '<p>These names represent the leaders and builders God raised up for specific roles.</p>',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(21, 'And the sons of Hananiah; Pelatiah, and Jesaiah: the sons of Rephaiah, the sons of Arnan, the sons of Obadiah, the sons of Shechaniah.'),
            plain(22, 'And the sons of Shechaniah; Shemaiah: and the sons of Shemaiah; Hattush, and Igal, and Bariah, and Neariah, and Shaphat, six.'),
            plain(23, 'And the sons of Neariah; Elioenai, and Hezekiah, and Azrikam, three.'),
            plain(24, 'And the sons of Elioenai, were, Hodaiah, and Eliashib, and Pelaiah, and Akkub, and Johanan, and Delaiah, and Anani, seven.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'davidic-zerubbabel',
          html:
            'Zerubbabel emerges from exile as the leader who guides the return of the Jewish people to Jerusalem. He is the grandson of Jeconiah, born in Babylon, named with a name that carries the irony of captivity and the hope of return. When the temple lies in ruins and the city is desolate, Zerubbabel lays the foundation stones of the new temple, and though the older exiles weep at the sight — remembering the glory of Solomon&apos;s temple — they weep and rejoice together. The line has come home.',
        },
        {
          kind: 'hebrew',
          id: 'zerubbabel-name',
          title: 'Zerubbabel — "Seed of Babylon"',
          script: 'זְרֻבָּבֶל',
          translit: '<strong>Zerubbabel</strong> · seed (זֶרַע) + Babylon (בָּבֶל)',
          description:
            'His name is a paradox. Born in exile, he carries Babylon in his very name. Yet he becomes the instrument of Israel&apos;s restoration. The seed planted in the soil of captivity grows into the tree that bears fruit in the promised land. His name itself is a prophecy: from exile, from the place of judgment, restoration will come.',
        },
        {
          kind: 'commentary',
          id: 'continuing-line',
          html:
            'The genealogy continues after Zerubbabel — through his son Hananiah and beyond, names stretching into the Chronicler&apos;s own era. These are not great kings. They are names, records, witnesses that the Davidic line did not die in exile. It was preserved. It continues. And with it, the promise.',
        },
        {
          kind: 'christ',
          id: 'davidic-christ',
          title: 'Christ Connection — The King from David&apos;s Line',
          html:
            'Matthew 1 opens with "The book of the generation of Jesus Christ, the son of David" — and then lists a genealogy that mirrors this one. Matthew traces Jesus through Solomon, through the exiled kings, through Zerubbabel, down to Joseph. Luke 3 traces a different line, possibly through Nathan rather than Solomon, tracing the maternal line. But both Gospels are insistent on a single claim: Jesus is born of David&apos;s line. He is the one for whom this genealogy was written. When the angel Gabriel appears to Mary, he tells her: "And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS. He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David" (Luke 1:31–32). The line that passed through exile, through captivity, through the fire of judgment, produces the King. And Acts 13:23 proclaims: "Of this man&apos;s seed hath God according to his promise raised to Israel a Saviour, Jesus." The one raised from the dead is David&apos;s seed.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world of endings — kingdoms fall, dreams collapse, the future seems cut off. But this genealogy teaches that God&apos;s promises hold even through exile, even through the destruction of everything we build. The King you are waiting for comes not from a throne of human glory, but from a line that has been tested in captivity and refined in judgment. And He comes not with the weapons of earthly kings, but as the one who dies and is raised — conquering death itself.',
        },
        {
          kind: 'reflection',
          id: 'davidic-promise',
          prompt: 'The Davidic line survives exile and captivity to produce the Messiah. What would it mean for your own life to trust that God&apos;s promises hold, not in the moment of triumph, but in the time of exile and loss?',
        },
      ],
    },
  ],
};
