import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezra 3 — The Altar Restored, the Foundation Laid, the Mingled Weeping and Joy
 *
 * After the return from exile, the people gather as one to rebuild. First, they
 * build the altar — before the temple itself. Daily offerings resume. Then, in the
 * second year, they lay the foundation of the house of God. The priests sing in
 * their apparel with trumpets. The Levites sing the eternal refrain: "Because he is
 * good, for his mercy endureth for ever toward Israel." All the people shout with
 * a great shout. But some weep — the ancient men who had seen the first house,
 * remembering what was lost. The noise of joy and the noise of weeping cannot be
 * discerned. Both are true. Both are needed.
 */
export const EZRA_3: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 3,

  estimatedMinutes: { 5: 5, 10: 9, 15: 12 },
  intros: [
    'The book of Ezra chronicles the return of the Jewish people from Babylonian exile. After seventy years of captivity, King Cyrus of Persia issues a decree permitting them to go home and rebuild the temple of the Lord. But return is not the same as restoration. The ruins remain. The altar is gone. The daily offerings have ceased. The people must begin again — and in Ezra 3, they do, gathering as one man and taking the first steps toward rebuilt worship.',
    'This chapter captures two essential moments: first, the immediate restoration of the altar and the daily offerings, a recovery of covenant and continuity with the past. Second, the laying of the temple foundation — a moment of mingled tears and shouts. Those who remember the old temple weep at what was lost; those who are young shout with joy at what is being built. The chapter holds both responses as true, and in that holding, it teaches us something about how God&apos;s people live: always remembering, always hoping, always moving forward even as grief and joy intertwine.',
  ],

  bottomShare: {
    quote:
      'When the builders laid the foundation of the house of the Lord, the priests sang, "Because he is good, for his mercy endureth for ever toward Israel." The people shouted with a great shout. But many of the ancient men wept with a loud voice, remembering what was lost. The noise of the shout of joy and the noise of the weeping could not be discerned.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 3 · Study Guide',
  },

  sections: [
    /* ─── Ezra 3:1–3 — The People Gather as One Man, the Altar Built First ──── */
    {
      ref: 'Ezra 3:1–3',
      title: 'The People Gather as One Man, the Altar Built First',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('And when the seventh month was come, and the children of Israel were in the cities, the people gathered themselves together '),
                hy('as one man', 'ezra3-one-man'),
                t(' to Jerusalem.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Then stood up Jeshua the son of Jozadak, and his brethren the priests, and Zerubbabel the son of Shealtiel, and his brethren, and '),
                hg('builded the altar of the God of Israel', 'ezra3-altar-first'),
                t(', to offer burnt offerings thereon, as it is written in the law of Moses the man of God.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And they set the altar upon his bases; for fear was upon them because of the people of those countries: they offered burnt offerings thereon unto the Lord, even burnt offerings morning and evening.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra3-one-man',
          html:
            'The people gather as one man — a phrase that emphasizes unity. They have come home scattered, from different places, in different circumstances. Yet in this moment, they move as one body. There is no debate about whether to begin. There is no hesitation. They come to Jerusalem with a single purpose.',
        },
        {
          kind: 'commentary',
          id: 'ezra3-altar-first',
          html:
            'Notice the order. Not the temple. Not the walls. First, the altar. The leaders understand that before the building can be rebuilt, the relationship with God must be restored. Daily offerings — morning and evening — mark the rhythm of covenant. They rebuild worship itself.',
        },
        {
          kind: 'hebrew',
          id: 'ezra3-echad',
          title: 'Echad — "One"',
          script: 'אֶחָד',
          translit: '<strong>Echad</strong> · one; a unity formed from many',
          description:
            'The Hebrew word "echad" carries weight beyond mere counting. It can mean "one" in number, but more deeply, it means "unified," "together as one." When the people gather "as one man," they are not merely a collection of individuals; they are bound by shared purpose. This same word appears in the Shema: "Hear, O Israel: The Lord our God, the Lord is One" — echad. Unity is both personal and covenantal.',
        },
        {
          kind: 'hebrew',
          id: 'ezra3-mizbeach',
          title: 'Mizbeach — "Altar"',
          script: 'מִזְבֵּחַ',
          translit: '<strong>Mizbeach</strong> · altar; the place of encounter with the holy',
          description:
            'The altar stands at the center of Israel&apos;s covenant life. It is where offerings are made, where blood is poured out, where heaven and earth touch. To build the altar first is to declare: whatever comes next, the relationship with God, the covenant of sacrifice and communion, comes first. The building follows the altar, not the reverse.',
        },
        {
          kind: 'carry',
          html:
            'What comes first in your restoration? Not the perfect circumstances, not the completed vision, not the approval of others — but the return to the One who calls you home. The ancient people understood that worship comes before the building. The daily offering, morning and evening, is the rhythm that holds them steady. What would it mean for you to restore that rhythm first, before you fix everything else?',
        },
        {
          kind: 'reflection',
          id: 'ezra3-altar-first-reflection',
          prompt:
            'The people rebuild the altar before the temple. What does it mean to prioritize your relationship with God, your practices of prayer and communion, before you build everything else in your life?',
        },
      ],
    },

    /* ─── Ezra 3:4–7 — The Feasts Kept, the Foundation Not Yet Laid ──────────── */
    {
      ref: 'Ezra 3:4–7',
      title: 'The Feasts Kept, the Foundation Not Yet Laid',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('They kept also the feast of tabernacles, as it is written, and offered the daily burnt offerings by number, according to the custom, as the duty of every day required; afterward offered the continual burnt offering, both of the new moons, of all the set feasts of the Lord that were consecrated, and of every one that willingly offered a freewill offering unto the Lord.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('From the first day of the seventh month began they to offer burnt offerings unto the Lord. But '),
                hg('the foundation of the temple of the Lord was not yet laid', 'ezra3-foundation-not-yet'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('They gave money also unto the masons, and to the carpenters; and meat, and drink, and oil, unto them of Zidon, and to them of Tyre, to bring cedar trees from Lebanon to the sea of Joppa, according to the grant of Cyrus king of Persia.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('In the second year of their coming unto the house of God at Jerusalem, in the second month, began Zerubbabel the son of Shealtiel, and Jeshua the son of Jozadak, and the remnant of their brethren the priests and the Levites, and all they that were come out of the captivity unto Jerusalem; and appointed the Levites, from twenty years old and upward, to set forward the work of the house of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra3-feasts-kept',
          html:
            'They restore not just the daily offerings, but the entire rhythm of Israel&apos;s sacred calendar. The Feast of Tabernacles. The new moons. All the set feasts — the anchor points of communal remembrance. And freewill offerings, where anyone may bring an offering from the heart. The people have reestablished the structure of covenant worship, the liturgical framework that holds Israel together.',
        },
        {
          kind: 'commentary',
          id: 'ezra3-foundation-not-yet',
          html:
            'A poignant note: the foundation of the temple is not yet laid. The people have been home for months. The altar stands. The offerings resume. The feasts are kept. But the building itself has not begun. There is wisdom in this slowness, this patience. Foundation-work must wait for readiness, for resources, for the right moment.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we must live in the waiting. The altar is up. Worship continues. The feasts are kept. But the great work is not yet begun. To stay faithful in that season — to maintain the daily disciplines, the rhythm of communion, the freewill offering of the heart — is to remain ready for what comes next. What part of your life is in that season of waiting? How will you keep the daily disciplines while the foundation is still being prepared?',
        },
        {
          kind: 'reflection',
          id: 'ezra3-foundation-waiting',
          prompt:
            'The people keep the feasts and make the daily offerings for months before the foundation is laid. What does it mean to be faithful in a season of waiting, before the main work begins?',
        },
      ],
    },

    /* ─── Ezra 3:8–11 — The Foundation Laid with Trumpets and Song ────────────── */
    {
      ref: 'Ezra 3:8–11',
      title: 'The Foundation Laid with Trumpets and the Eternal Refrain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('Then stood Jeshua with his sons and his brethren, Kadmiel and his sons, the sons of Judah, together, to set forward the workmen in the house of God: the sons of Henadad, with their sons and their brethren the Levites.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('When the builders '),
                hy('laid the foundation', 'ezra3-yasad'),
                t(' of the temple of the Lord, they set the priests in their apparel with trumpets, and the Levites the sons of Asaph with cymbals, to praise the Lord, after the ordinance of David king of Israel.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they sang together by course in praising and giving thanks unto the Lord; '),
                hp('"Because he is good, for his mercy endureth for ever toward Israel."', 'ezra3-mercy-endureth'),
                t(' And all the people shouted with a great shout, when they praised the Lord, because the foundation of the house of the Lord was laid.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But many of the priests and Levites and chief of the fathers, who were ancient men, that had seen the first house, when the foundation of this house was laid before their eyes, '),
                hg('wept with a loud voice', 'ezra3-wept-loud'),
                t('; and many shouted aloud for joy: so that the people could not discern the noise of the shout of joy from the noise of the weeping of the people: for the people shouted with a loud shout, and the noise was heard afar off.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra3-yasad',
          html:
            'They lay the foundation. The moment has come. And it is not done in silence or in mere labor. It is done in worship — priests in apparel, Levites with cymbals, trumpets sounding. The physical work of building is wrapped in the sacred work of praise. The foundation-laying is an act of faith and song.',
        },
        {
          kind: 'commentary',
          id: 'ezra3-mercy-endureth',
          html:
            'The refrain that rises is ancient: "Because he is good, for his mercy endureth for ever toward Israel." This very song appears throughout the Psalms (Psalm 136, and echoes in many others). It is the antiphon of Israel — the response that bridges all of time. In exile, they sang it. At the return, they sing it again. Good. Merciful. Forever. These are not new discoveries. They are the eternal truths that survive exile, catastrophe, loss. The mercy that endures forever is as real in the rubble as it was in the glory days.',
        },
        {
          kind: 'hebrew',
          id: 'ezra3-yasad',
          title: 'Yasad — "To Lay" or "To Found"',
          script: 'יָסַד',
          translit: '<strong>Yasad</strong> · to lay a foundation; to establish; to make firm',
          description:
            'The verb "yasad" means to lay a foundation, to establish something so firmly that it will stand. When the builders lay the foundation of the temple, they are not merely placing stones. They are establishing, making firm, creating the sure ground on which everything else will rest. It is an act of faith in the future.',
        },
        {
          kind: 'commentary',
          id: 'ezra3-wept-loud',
          html:
            'Now the deepest truth of this chapter surfaces. As they lay the foundation, as the song rises, as the shouts go up, the ancient men weep. They have seen the first house — the house before exile, in its glory. And as they watch the new foundation being laid, they grieve what was lost. They cannot separate the joy of building from the sorrow of loss. Both rise together. The text does not tell us to choose — to suppress the weeping, to insist only on joy. It honors both. The people shouted with a loud shout, and the noise was heard afar off. But you could not tell which was which — the shout of joy or the weeping. Both were true.',
        },
        {
          kind: 'carry',
          html:
            'Life is often like this moment. Joy and grief intermingled. Building and remembering. The future and the past in one sound. We are taught to choose — to be happy or sad, but not both. Yet here, in Scripture, the people are allowed their tears even as they shout. They remember what was lost even as they celebrate what is being built. There is wisdom in letting both be true. Is there a loss you are grieving while also celebrating something new? Can you let both feelings exist without choosing between them?',
        },
        {
          kind: 'christ',
          id: 'ezra3-foundation-christ',
          title: 'Christ Connection — The True Foundation',
          html:
            'Paul writes: "For other foundation can no man lay than that is laid, which is Jesus Christ" (1 Corinthians 3:11). The foundation of every house of God, every true temple, is Christ. He is the sure stone, the established foundation. And just as the foundation was laid with singing — "Because he is good, for his mercy endureth for ever" — so Christ&apos;s foundation is laid in mercy that does not fail. The same mercy that sustained Israel in exile sustains us now. And like the ancient men at the foundation, we may weep for what we have lost, for what exile has cost us, for how far we have fallen short. Yet we shout too — because in Christ, the true foundation is laid, and it will hold. His mercy endureth forever.',
        },
        {
          kind: 'reflection',
          id: 'ezra3-mingled-emotions',
          prompt:
            'When the foundation was laid, the ancient men wept while the young men shouted. Both responses were true. Have you ever experienced a moment where grief and joy could not be separated? What did you learn?',
        },
      ],
    },
  ],
};
