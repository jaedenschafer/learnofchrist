import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hosea 6 — "Come, and let us return unto the Lord"
 *
 * "Come, and let us return unto the Lord: for he hath torn, and he will heal us;
 * he hath smitten, and he will bind us up." After two days He will revive us;
 * in the third day He will raise us up. This chapter echoes with resurrection hope
 * and is quoted in the New Testament as a prophecy of Christ&apos;s resurrection.
 */
export const HOSEA_6: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 6,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  intros: [
    'Hosea 6 opens with a call to return. "Come, and let us return unto the Lord." The tone shifts again — from judgment to hope. God has torn Israel, but He will also heal. He has smitten them, but He will bind them up. The wound is not final. Restoration is coming.',
    'The chapter contains one of the most striking passages about resurrection: "After two days will he revive us: in the third day he will raise us up." Early Christians saw in this language a prophecy of Christ&apos;s resurrection on the third day. Hosea speaks of Israel&apos;s restoration, and that very language becomes a sign of Christ&apos;s victory over death.',
  ],

  bottomShare: {
    label: 'Share Hosea 6',
    quote:
      '"After two days will he revive us: in the third day he will raise us up." Hosea speaks of restoration, and his words echo with the promise of Christ&apos;s resurrection.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 6 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hosea-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 6 · Texts & Translations',
      url: 'https://www.sefaria.org/Hosea.6',
      description: 'Primary sources on the call to repentance and the promise of healing and revival in Hosea.',
    },
    {
      id: 'intertextual-hosea-6-resurrection',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hosea 6:2 ↔ Resurrection Promise',
      url: 'https://intertextual.bible/search?query=hosea+6',
      description: 'Intertextual connections between Hosea&apos;s "third day" language and New Testament resurrection theology.',
    },
    {
      id: 'sefaria-hosea-6-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 6 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Hosea.6',
      description: 'The Hebrew text of Hosea 6 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    {
      ref: 'Hosea 6:1–3',
      title: 'The Call to Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('Come, and let us return unto the Lord: for he hath torn, and he will heal us; he hath smitten, and '),
                hp('he will bind us up', 'hosea6-heal'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('After two days will he revive us: in the third day he will '),
                hp('raise us up', 'hosea6-resurrection'),
                t(', and we shall live in his sight.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Then shall we know, if we follow on to know the Lord: his going forth is prepared as the morning; and he shall come unto us as the rain, as the latter and former rain unto the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea6-heal',
          html:
            'God has torn Israel so that she knows the depth of her need, but He will heal. He has smitten her, but He will bind her up. The language is of a physician — one who wounds in order to heal, who strips away the infected tissue so that new growth can come[res:intertextual-hosea-6-resurrection][res:sefaria-hosea-6].',
        },
        {
          kind: 'commentary',
          id: 'hosea6-resurrection',
          html:
            'The imagery of reviving and raising up is resurrection language. "After two days will he revive us: in the third day he will raise us up." The New Testament sees in this language a prophecy of Christ. As Israel is raised on the third day, so Christ is raised on the third day. The resurrection of God&apos;s people is prefigured in the resurrection of Israel[res:sefaria-hosea-6-v1].',
        },
        {
          kind: 'hebrew',
          id: 'hosea6-yada',
          title: 'Yada — "To Know"',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · to know; to be intimate with; to recognize',
          description:
            'The chapter ends with "then shall we know, if we follow on to know the Lord." The word "yada" means intimate knowing, recognition, relational knowledge. It is the same word used of sexual union — the deepest intimacy.',
        },
        {
          kind: 'christ',
          id: 'hosea6-christ-resurrection',
          title: 'Christ Connection — Resurrection on the Third Day',
          html:
            'Paul quotes Hosea 6:2 in 1 Corinthians 15 as a prophecy of Christ&apos;s resurrection: "Christ died for our sins...and rose again the third day" (1 Corinthians 15:3–4). What Hosea spoke of Israel&apos;s restoration becomes the language of Christ&apos;s victory over death. In His resurrection, Christ becomes the Firstfruits of all who are raised.',
        },
        {
          kind: 'carry',
          html:
            'The call to return begins with acknowledging the tear and the wound. But it does not end in despair. It ends with the promise of healing, of revival, of being raised up. In your own life, can you acknowledge the brokenness and still trust in God&apos;s power to heal and revive you?',
        },
        {
          kind: 'reflection',
          id: 'hosea6-return',
          prompt: 'The chapter calls Israel to return, knowing that God will heal and raise her up. What brings you back to God? What makes you willing to trust Him despite the wounds?',
        },
      ],
    },

    {
      ref: 'Hosea 6:4–11',
      title: 'Mercy, Not Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(4, 'O Ephraim, what shall I do unto thee? O Judah, what shall I do unto thee? for your goodness is as a morning cloud, and as the early dew it goeth away.'),
            plain(5, 'Therefore have I hewed them by the prophets; I have slain them by the words of my mouth: and thy judgments are as the light that goeth forth.'),
            plain(6, 'For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.'),
            plain(7, 'But they like men have transgressed the covenant: there have they dealt treacherously against me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-6-78mid-1',
          html:
            '&quot;Come, and let us return unto the LORD&quot; gives way to the LORD&apos;s lament — &quot;your goodness is as a morning cloud.&quot; Repentance that fades is no repentance at all.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(8, 'Gilead is a city of them that work iniquity, and is polluted with blood.'),
            plain(9, 'And as troops of robbers wait for a man, so the company of priests murder in the way by consent: for they commit lewdness.'),
            plain(10, 'I have seen an horrible thing in the house of Israel: there is the whoredom of Ephraim, Israel is defiled.'),
            plain(11, 'Also, O Judah, he hath set an harvest for thee, when I returned the captivity of my people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea6-mercy',
          html:
            '"For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings." This is one of the most important statements in the Old Testament. God does not desire external ritual divorced from the heart. He desires mercy — compassion toward others — and knowledge of Himself — relationship. Sacrifice without mercy is empty. Ritual without relationship is worthless.',
        },
        {
          kind: 'carry',
          html:
            'Your goodness is as a morning cloud that goes away. Your turning to God is fleeting. What God desires is not your grand gestures of piety but your sustained mercy toward others and your pursuit of intimate knowledge of Him. What would it look like for you to offer God not burnt offerings but mercy?',
        },
        {
          kind: 'reflection',
          id: 'hosea6-mercy-reflection',
          prompt: 'God desires mercy and knowledge of Him more than sacrifice. What sacrifices are you making that might be empty? Where does He call you to mercy?',
        },
      ],
    },

    {
      ref: 'Hosea 6 · All',
      title: 'Resurrection and Mercy',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea6-theme',
          html:
            'Hosea 6 weaves together two themes: resurrection (the revival and raising up of Israel) and mercy (what God truly desires from His people). The two are not separate. True resurrection begins when we stop trying to impress God with external ritual and instead offer Him our hearts — compassion toward others, intimate relationship with Him.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
