import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezra 1 — Cyrus's Decree: The Return Begins
 *
 * In the first year of Cyrus king of Persia, the Lord stirs the heart of
 * a pagan king to fulfill the word spoken by Jeremiah: Jerusalem will be
 * rebuilt. Cyrus issues a decree across his vast empire giving the Jews
 * permission — and material support — to return to their homeland and restore
 * the temple. The exiled people rise up. The people around them give them
 * silver, gold, and precious things. The temple vessels, looted by
 * Nebuchadnezzar decades before, are counted out and entrusted to
 * Sheshbazzar to carry home. After seventy years in captivity, the word of
 * the Lord begins to come to pass.
 */
export const EZRA_1: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 1,

  estimatedMinutes: { beginner: 4, intermediate: 8, deep: 12 },
  intros: [
    'The book of Ezra opens in the first year of Cyrus king of Persia — not a Jewish king, not a king of Israel, but a pagan emperor who has just conquered Babylon and inherited an empire. Yet before we hear from any Israelite leader, we hear Cyrus speak. The Lord, we are told, stirred up his spirit. And the king makes a proclamation that will change the course of Jewish history: the exiles may return. The temple may be rebuilt. The holy city may rise again.',
    'This is the fulfillment of a word spoken seventy years earlier through Jeremiah — that after seventy years of captivity, the Lord would bring His people home. The timeline has come. Not through a Jewish rebellion, not through military might, but through the heart of a foreign king stirred by God Himself. This chapter tells us something stark and beautiful: God can move even pagan rulers to accomplish His purposes. His word does not fail, no matter how long the silence lasts.',
  ],

  bottomShare: {
    label: 'Share Ezra 1',
    quote:
      'The word of the Lord, spoken seventy years earlier through Jeremiah, comes to pass when God stirs the heart of a pagan king to release His people from captivity and restore the temple.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 1 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-cyrus',
      kind: 'museum',
      source: 'British Museum',
      label: 'The Cyrus Cylinder',
      url: 'https://www.britishmuseum.org/collection/objects/w3679',
      description: 'Ancient Persian decree permitting Judean return and temple reconstruction.',
    },
  ],

  sections: [
    /* ─── Ezra 1:1–2 — The Proclamation Issued ──────────────────────────── */
    {
      ref: 'Ezra 1:1–2',
      title: 'Cyrus Proclaims the Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Now in the first year of Cyrus king of Persia, '),
                hg('that the word of the Lord by the mouth of Jeremiah might be fulfilled', 'ez1-jeremiah-word'),
                t(', the Lord stirred up the spirit of Cyrus king of Persia, that he made a proclamation throughout all his kingdom, and put it also in writing, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Thus saith Cyrus king of Persia, The Lord God of heaven hath given me all the kingdoms of the earth; and he hath '),
                hg('charged me to build him an house at Jerusalem', 'ez1-charged-to-build'),
                t(', which is in Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez1-jeremiah-word',
          html:
            'The chapter opens with a striking theological claim: Cyrus&apos;s proclamation fulfills the word spoken by Jeremiah decades earlier. Jeremiah had prophesied that after seventy years of captivity, the Lord would bring His people home (Jer. 29:10). The timeline is now complete. What seemed impossible in the darkness of exile — that a foreign king would ever permit the return — is about to happen. The word of the Lord does not fail, even when deliverance comes through unexpected means. [res:british-museum-cyrus]',
        },
        {
          kind: 'commentary',
          id: 'ez1-charged-to-build',
          html:
            'Cyrus claims that "The Lord God of heaven" — note: not his gods, but the God of heaven — has given him all kingdoms and charged him to build a house for God at Jerusalem. Whether Cyrus fully understood the God of Israel or was simply acknowledging the local deity of the people he had conquered, his words are extraordinary. A pagan king is saying that God Himself has commissioned him to rebuild the temple. This is the language of divine calling applied to a Gentile ruler.',
        },
        {
          kind: 'hebrew',
          id: 'ez1-koresh',
          title: 'Koresh — "Cyrus"',
          script: 'כּ֫וֹרֶשׁ',
          translit: '<strong>Koresh</strong> · Cyrus; Persian king',
          description:
            'The name Koresh (Cyrus) appears in Aramaic and Hebrew sources. He is the founder of the Achaemenid Persian Empire and is known to history as a liberator of conquered peoples — he even freed Babylonian captives and restored the statues of their gods. In the Bible, he becomes an unlikely instrument of God&apos;s purposes, a non-believer through whom the Lord fulfills His covenant promise to restore His people.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes God accomplishes His will through people and powers we would never expect. Cyrus was a pagan king, a foreigner, a conquerer — and yet God stirred his spirit to free the captives and fund the rebuilding of God&apos;s house. What does it mean to trust that God can move even those who don&apos;t know His name to accomplish His purposes? Where in your own life might you be missing how God is working through unexpected instruments?',
        },
        {
          kind: 'reflection',
          id: 'proclamation-reflects',
          prompt: 'When you read that God "stirred up the spirit" of a pagan king, what does that tell you about how far God&apos;s reach extends? How does it change the way you see Providence at work?',
        },
      ],
    },

    /* ─── Ezra 1:3–4 — Permission and Support ──────────────────────────── */
    {
      ref: 'Ezra 1:3–4',
      title: 'Who Will Go Up to Rebuild',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('Who is there among you of all his people? his God be with him, and let him go up to Jerusalem, which is in Judah, and '),
                hp('build the house of the Lord God of Israel', 'ez1-christ-building'),
                t(', (he is the God,) which is in Jerusalem.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And whosoever remaineth in any place where he sojourneth, let the men of his place help him with silver, and with gold, and with goods, and with beasts, '),
                hg('beside the freewill offering for the house of God that is in Jerusalem', 'ez1-freewill'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez1-christ-building',
          html:
            'Cyrus invites anyone with the will to go up to Jerusalem and build the house of God. This is an invitation to participation in something larger than themselves — not merely a restoration of a building, but the rebuilding of the people&apos;s covenant center, the place where God dwells among His people. The phrasing "let him go up" echoes the ancient pilgrimage language of Scripture. Jerusalem is high ground, spiritually and geographically. Going up means ascending toward God.',
        },
        {
          kind: 'commentary',
          id: 'ez1-freewill',
          html:
            'Not only does Cyrus permit the return — he mandates support. The people who remain behind in Babylon and throughout the empire are to assist those returning with silver, gold, goods, and beasts "beside the freewill offering." This is both practical aid and a freewill offering, given willingly for a sacred purpose. The king ensures that those called to rebuild will not go unprovided for.',
        },
        {
          kind: 'carry',
          html:
            'The invitation to rebuild is not made to a select few, but to whoever has the heart to go. God often calls people to participate in something that transcends their own comfort or preference. Do you see the call to join in God&apos;s work — to rebuild, to restore, to serve — as something that would reshape your life? What would it mean for you to "go up" to something that God is doing?',
        },
        {
          kind: 'reflection',
          id: 'who-will-go',
          prompt: 'Cyrus asks, "Who is there among you of all his people?" that will go up and build? What does it cost to answer yes to that kind of call? What keeps you from answering?',
        },
      ],
    },

    /* ─── Ezra 1:5–6 — Those Whose Spirit God Raised ────────────────────── */
    {
      ref: 'Ezra 1:5–6',
      title: 'Whose Spirit God Raised',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 5,
              spans: [
                t('Then rose up the chief of the fathers of Judah and Benjamin, and the priests, and the Levites, '),
                hy('with all them whose spirit God had raised', 'ez1-spirit-raised'),
                t(', to go up to build the house of the Lord which is in Jerusalem.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And all they that were about them strengthened their hands with vessels of silver, '),
                hg('gold, with goods, with beasts, with precious things', 'ez1-strengthened'),
                t(', beside all that was willingly offered.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez1-spirit-raised',
          html:
            'The response is described simply: those "whose spirit God had raised" rose up to go. Not those who had the most wealth, not those with political power, but those whose spirit had been stirred by God. The language echoes Cyrus himself — God stirred his spirit. Now God is stirring the spirit of His people. The same divine hand that moves pagan kings to release captives also moves ordinary people to sacrifice comfort and return to a ruined city to rebuild a sanctuary.',
        },
        {
          kind: 'greek',
          id: 'ez1-pneuma',
          title: 'Pneuma / Ruach — "Spirit" or "Breath"',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · spirit; breath; wind; the animating force',
          description:
            'In Hebrew, ruach means both the natural wind and the divine Spirit — the breath of life, the animating force from God. When God "raised the spirit" of His people, He was awakening in them a willingness, a courage, a calling from within. This is not external coercion but an interior stirring that moves the heart to respond to God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'ez1-strengthened',
          html:
            'The people who do not go — those who remain in Babylon and throughout the empire — actively support the returning remnant. They give silver, gold, goods, beasts, and precious things. This is the community at work. Those called to go are not abandoned; they are sent with the prayers, the resources, and the active support of the whole people. The rebuilding is a corporate task, even for those who don&apos;t make the journey themselves.',
        },
        {
          kind: 'carry',
          html:
            'God is still raising spirits today — stirring hearts to serve, to build, to restore. Not everyone is called to the same task, but everyone can participate. Some go; some support those who go. Some are in the thick of the work; some send resources and prayers from a distance. All are essential to what God is building. Where is God raising your spirit to participate in His work, whether by going or by supporting those who do?',
        },
        {
          kind: 'reflection',
          id: 'spirit-raised-reflects',
          prompt: 'Has God ever raised your spirit to do something that required you to leave behind comfort or certainty? How did you know it was God stirring you, and not just your own desire?',
        },
      ],
    },

    /* ─── Ezra 1:7–11 — The Vessels Numbered and Returned ──────────────── */
    {
      ref: 'Ezra 1:7–11',
      title: 'The Vessels Brought Forth and Numbered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('Also Cyrus the king brought forth the vessels of the house of the Lord, which '),
                hg('Nebuchadnezzar had brought forth out of Jerusalem', 'ez1-vessels-captivity'),
                t(', and had put them in the house of his gods;'),
              ],
            },
            plain(8, 'Cyrus brought them forth by the hand of Mithredath the treasurer, numbered them unto Sheshbazzar, the prince of Judah.'),
            plain(9, 'And this is the number of them: thirty chargers of gold, a thousand chargers of silver, nine and twenty knives,'),
            plain(10, 'Thirty bowls of gold, and four hundred and ten bowls of silver of a second sort, and other vessels a thousand.'),
            {
              number: 11,
              spans: [
                t('All the vessels of gold and of silver were five thousand and four hundred. All these did Sheshbazzar bring up with them of the captivity that were brought up from Babylon unto '),
                t('Jerusalem'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez1-vessels-captivity',
          html:
            'Decades earlier, when Nebuchadnezzar destroyed Jerusalem, he looted the temple, taking the sacred vessels and placing them in the house of his gods in Babylon — a sign of conquest and desecration. Now Cyrus brings them forth. He does not keep them as trophies of conquest; he returns them, numbered and accounted for, to be carried back to Jerusalem and to the restored temple. The vessels — instruments of sacred service — are returning home.',
        },
        {
          kind: 'hebrew',
          id: 'ez1-kelim',
          title: 'Kelim — "Vessels"',
          script: 'כֵּלִים',
          translit: '<strong>Kelim</strong> · vessels; instruments; implements; vessels of service',
          description:
            'The word kelim refers to the vessels — bowls, chargers, knives, and implements used in temple worship. These are not mere objects; they are instruments of sacred service, dedicated to God&apos;s worship. When Nebuchadnezzar took them, he defiled them. When Cyrus returns them, he restores them to their purpose.',
        },
        {
          kind: 'commentary',
          id: 'ez1-sheshbazzar',
          html:
            'Sheshbazzar, the prince of Judah, is entrusted with the vessels. He is the custodian of the sacred things being returned. The numbering is meticulous: thirty chargers of gold, a thousand of silver, twenty-nine knives, thirty bowls of gold, four hundred ten of silver, and a thousand other vessels — 5,400 in all. Nothing is lost or misplaced. What was plundered is accounted for and returned in its entirety.',
        },
        {
          kind: 'christ',
          id: 'ez1-christ-connection',
          title: 'Christ Connection — The One Who Restores What Was Lost',
          html:
            'Just as God stirs Cyrus to release the captives and restore the temple vessels, Christ is the ultimate Restorer. He comes as the "true temple," the dwelling place of God (John 2:19–21). What was broken by sin — our capacity to be in right relationship with God — Christ restores. "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly" (John 10:10). And in Acts 1:11, the angels tell the disciples to go up to Jerusalem to wait for the promised Holy Spirit — echoing the call "let him go up to Jerusalem." Christ gathers the scattered and brings them home.',
        },
        {
          kind: 'artwork',
          matchTitle: /return|exile|jerusalem|cyrus|babylon|vessel/i,
          matchArtist: undefined,
          caption: 'Ezra 1:7–11 — The Vessels Returned from Babylon',
        },
        {
          kind: 'carry',
          html:
            'The meticulous accounting of the vessels tells us something about God: He does not forget what was lost. He does not leave the plunder in enemy hands. What was taken is restored. In your own life, where have you experienced loss — of joy, of trust, of purpose? God is the restorer. He calls you home, not to the place of captivity, but to His house, to a life of sacred purpose.',
        },
        {
          kind: 'reflection',
          id: 'vessels-returned',
          prompt: 'The sacred vessels, stolen in exile, are numbered and returned — nothing lost, nothing forgotten. What in your own spiritual life has been stolen or lost that you need God to restore? How does it comfort you that God accounts for what belongs to Him?',
        },
      ],
    },
  ],
};
