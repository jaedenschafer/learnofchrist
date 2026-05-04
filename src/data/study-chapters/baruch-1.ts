import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Baruch 1 — The Scroll of Confession from Exile
 *
 * Baruch, the faithful scribe of Jeremiah, writes from Babylon in the fifth
 * year after Jerusalem&apos;s burning. He gathers the words of the exiled
 * community and reads them aloud—their confession of sin, their plea for
 * forgiveness, their prayer for those still in Jerusalem. This is penitential
 * literature: the honest reckoning of a people who have walked away from God,
 * and who now, in exile, turn their faces homeward.
 */
export const BARUCH_1: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 13, deep: 19 },
  opener: {
    matchTitle: /Baruch/i,
    caption: 'Baruch 1',
  },
  intros: [
    'Baruch was Jeremiah&apos;s scribe—the one who wrote down the prophet&apos;s words and walked with him through the fall of Jerusalem. Now, five years after the city burned and the people were carried to Babylon, Baruch composes a letter. It is not his voice alone, but the voice of the exiled community itself. He gathers their confessions, their prayers, their lament—and reads them aloud to those who have been torn from home.',
    'Baruch 1 records a moment of collective reckoning. The exiles stand in Babylon, in the fifth year of captivity, and hear their own words read back to them: "We have sinned against the Lord our God, and shame is come upon us." Yet this confession is not despair. It is the first step toward restoration. In speaking sin aloud, in naming what they have done, they make possible what had seemed impossible: a path back to God.',
    'For readers long after, this book becomes a mirror. It shows what honest repentance looks like—not hiding, not minimizing, but a full acknowledgment of having turned away. And it shows what the exiled life teaches: that God&apos;s mercy is not locked behind the gates of Jerusalem, but reaches into Babylon itself, to anyone who turns.',
  ],

  sections: [
    /* ─── Baruch 1:1–14 — The Setting and the Scroll ─────────────────────────── */
    {
      ref: 'Baruch 1:1–14',
      title: 'Baruch Gathers the Exiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1, t('And these are the words of the book which Baruch the son of Neriah, the son of Maaseiah, the son of king Josiah, wrote in Babylon;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-baruch-identity',
          html:
            'Baruch introduces himself by his lineage. He is not an outsider or a latecomer. He is of the royal household. More than that, he is Jeremiah&apos;s scribe—the one who sat with the prophet through the siege and after. Now he becomes the voice through which the whole community speaks. The scroll he writes is not prophecy; it is confession. [res:sefaria-jer-25] [res:bible-odyssey-babylonian-exile]',
        },
        {
          kind: 'hebrew',
          id: 'bar1-galut',
          title: 'Galut — "Exile"',
          script: 'גָּלוּת',
          translit: '<strong>Galut</strong> · exile; dispersion; state of being far from home',
          description:
            'Galut is not merely geographical displacement. It is spiritual displacement, the sense of being far from the place where God dwells. The exiles in Babylon experience both kinds of distance at once—from Jerusalem and from the Temple, the seat of God&apos;s presence.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('And he read the words of this book in the hearing of Jeconiah, and all the people that came to hear;')
            ),
            verse(4, t('In the ears of the mighty men, and of the elders, and of all the people, small and great, even all that dwelt at Babylon by the river Sud.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-gathered',
          html:
            'The reading is public. Everyone gathers—mighty men and elders, small and great. This is not a private confession whispered in shame. It is a communal act. The scroll is read aloud in the hearing of all. This matters: confession spoken before witnesses is more powerful than confession hidden away. When you speak your sin aloud, you own it fully[res:sefaria-baruch-1].',
        },
        {
          kind: 'carry',
          html:
            'Baruch could have written in private. Instead, he gathers the exiles and reads to them. He gives them back their own voice, heard by the whole community at once. This is the power of corporate worship and confession. You are not alone in your struggle. Others have fallen and risen. Others are turning. When you speak alongside them, you remember: repentance is not a solitary act.',
        },
        {
          kind: 'reflection',
          id: 'bar1-witness',
          prompt:
            'What is the difference between confessing sin in private and confessing it in the presence of others? Why might Baruch insist on gathering the entire community to hear? Where do you need witnesses to your turning?',
        },
      ],
    },

    /* ─── Baruch 1:15–22 — "We Have Sinned" ──────────────────────────────────── */
    {
      ref: 'Baruch 1:15–22',
      title: 'The Weight of Transgression',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              15,
              t('And we say, Righteousness belongeth unto the Lord our God: but unto us and to our fathers perpetual shame, as at this day;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-righteous-god',
          html:
            'The exiles make a sharp distinction. "Righteousness belongeth unto the Lord our God." God is just; God is good; God is true. "But unto us and to our fathers perpetual shame." They do not blame God for the exile. They blame themselves. They have sinned. The captivity is the fruit of their own transgression.',
        },
        {
          kind: 'greek',
          id: 'bar1-dikaiosyne',
          title: 'Dikaiosynē — "Righteousness"',
          script: 'δικαιοσύνη',
          translit: '<strong>Dikaiosynē</strong> · righteousness; justice; right standing',
          description:
            'Dikaiosynē is not a fuzzy concept. It is right action, right standing, the way things ought to be. The exiles confess that God alone possesses this. They do not. They have wandered into shame.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              16,
              t('For we have sinned before the Lord your God, and disobeyed him, and have not hearkened unto the voice of the Lord our God, to walk in the commandments that he gave before us:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-disobeyed',
          html:
            'The exiles do not hedge or rationalize. "We have sinned... and disobeyed him." The accusation is clear. They heard the voice of God—through prophets, through the law, through their own consciences—and they did not listen. They did not walk in the commandments. This is the root of the exile.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              17,
              t('Now therefore hear our prayer, O Lord, and our supplications, and deliver us for thine own name&apos;s sake: for we are left a few among the heathen, where thou hast scattered us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-few-scattered',
          html:
            'The exiles are diminished. "We are left a few among the heathen." They are foreigners in a foreign land, separated from their own, separated from the Temple, separated from God&apos;s house. Yet notice what they ask: not revenge on Babylon, not immediate return, but "Hear our prayer." They ask to be heard. That is mercy enough.',
        },
        {
          kind: 'carry',
          html:
            'It is easy to confess when you are comfortable. The exiles confess when they are far from home, diminished, scattered among those who do not know their God. Yet they speak anyway. Repentance is not a luxury of the comfortable. It is often the only recourse left to the desperate—and it is a resource of infinite value.',
        },
        {
          kind: 'reflection',
          id: 'bar1-sin-owned',
          prompt:
            'The exiles do not blame circumstance or bad luck. They own their sin directly: "We have sinned... and disobeyed him." What sin are you tempted to minimize or reframe? What would it look like to own it fully?',
        },
      ],
    },

    /* ─── Baruch 1:15–20 (Continuation) — The Catalogue of Sins ──────────────── */
    {
      ref: 'Baruch 1:18–20',
      title: 'The Parade of Our Unfaithfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              18,
              t('For we remember not the commandments of the Lord, but have turned every one to the imagination of his own evil heart;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-imagination',
          html:
            'Here is the diagnosis: "we have turned every one to the imagination of his own evil heart." Not forced corruption. Not external compulsion. Internal defection. Each person choosing their own way, following the imagination of their own evil heart. This is sin as turning inward, as self-love replacing love of God.',
        },
        {
          kind: 'hebrew',
          id: 'bar1-yetzer',
          title: 'Yetzer — "Imagination" or "Inclination"',
          script: 'יֵצֶר',
          translit: '<strong>Yetzer</strong> · imagination; inclination; impulse; the inner pull of the human will',
          description:
            'The yetzer is not external evil. It is the bent of the human heart itself. Rabbinic tradition speaks of the yetzer ha-tov and yetzer ha-ra—the good inclination and the evil inclination, both present in every person. The exiles confess that they have given way to the evil inclination.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              19,
              t('Therefore the Lord hath made the pestilence, and the famine, and the sword, and destruction to come upon us, as at this day.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-judgement',
          html:
            '"Therefore the Lord hath made the pestilence, and the famine, and the sword, and destruction." The exile is not random suffering. It is consequence. God has brought judgment, but not out of cruelty. Out of faithfulness to His own law. The covenant said clearly: obey, and be blessed; disobey, and be cursed. The exiles are experiencing the curse they chose.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(20, t('Now therefore hear our prayer, O Lord; have mercy upon us: for we are a sinful people, and commit our soul unto thee.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-mercy-ask',
          html:
            'The exiles do not ask for justice. They have received justice. Now they ask for mercy—something unearned, undeserved. "Have mercy upon us." And they place themselves in God&apos;s hands: "commit our soul unto thee." This is the posture of true repentance. Not defense. Not negotiation. Surrender.',
        },
        {
          kind: 'christ',
          id: 'bar1-christ-sin-owned',
          title: 'Christ Connection — The One Who Bears Our Sins',
          html:
            'The exiles say: "We are a sinful people." They stand and own it. In the gospel, Jesus stands before God and says, in effect, "I bear their sin. I take it into myself." Paul writes: "him who knew no sin he hath made to be sin on our behalf; that we might become the righteousness of God in him" (2 Corinthians 5:21). The exiles own their sin. Christ owns it for them. Both acts are necessary for restoration.',
        },
        {
          kind: 'carry',
          html:
            'The exiles catalogue their sins not to wallow, but to be honest. Repentance without honesty is fantasy. You cannot be forgiven for sin you refuse to acknowledge. What the exiles teach is this: name it, own it, and place it at the feet of God. Then wait for mercy.',
        },
        {
          kind: 'reflection',
          id: 'bar1-soul-commit',
          prompt:
            'What does it mean to commit your soul to God? Not your reputation, not your comfort, but your soul—the deepest part of yourself. What would change if you actually did?',
        },
      ],
    },

    /* ─── Baruch 1:21–27 — A Message Sent to Jerusalem ──────────────────────── */
    {
      ref: 'Baruch 1:21–27',
      title: 'Pray for Us in Jerusalem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              21,
              t('Wherefore hear our prayer, O Lord, and cause us to return: for we are but a few that are left in the midst of the heathen, where thou hast scattered us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-return-request',
          html:
            'Notice the exiles do not demand immediate return. They ask God to "cause us to return." This is not a demand on God. It is a petition. They acknowledge they cannot restore themselves. Only God can. And so they wait in Babylon, speaking their repentance into the darkness, hoping God will hear.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              25,
              t('And they sent them word: Behold, we send you the money to buy you sacrifices for the sin offering, that ye may pray for us unto the Lord our God; that we may be delivered from the captivity which the Lord hath brought upon us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-money-sent',
          html:
            'This is remarkable. The exiles in Babylon gather money—likely from whatever small means they have—and send it to Jerusalem so that those still there can offer sacrifices on their behalf. They believe that prayer offered in Jerusalem, in the place of the Temple, will be heard more readily. So they pay for intercessors. This is faith: the conviction that God still listens, and that sacrifice still matters.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              26,
              t('And pray ye unto the Lord our God for us; for we have sinned against him: and the wrath of the Lord and his anger are not turned away from us unto this day.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-pray-for-us',
          html:
            'The exiles send a desperate message: "Pray ye unto the Lord our God for us." They do not believe they can pray themselves out of exile. They need intercessors. They need the prayers of those still in Jerusalem, still closer to the Temple, still in the land God promised. This reveals a deep theology: we do not stand alone before God. We need one another&apos;s intercession.',
        },
        {
          kind: 'christ',
          id: 'bar1-christ-intercession',
          title: 'Christ Connection — The Great Intercessor',
          html:
            'The exiles ask those in Jerusalem to pray for them. In the gospel, Jesus tells Peter: "I have prayed for thee, that thy faith fail not" (Luke 22:32). And Hebrews says: "He is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Hebrews 7:25). Jesus is the Intercessor for all who are far from God, scattered and broken. His prayers on your behalf never cease.',
        },
        {
          kind: 'carry',
          html:
            'You are not meant to stand alone. The exiles knew this. They sent word to those still in Jerusalem: pray for us. Whose prayers do you need? For whom are you praying? Both asking and offering intercession is part of the life of repentance.',
        },
        {
          kind: 'reflection',
          id: 'bar1-intercession',
          prompt:
            'Who are the people you need to pray for you? And for whom has God called you to pray? How does intercession change your understanding of repentance—not as a solitary act, but as something held together by a community?',
        },
      ],
    },

    /* ─── Baruch 1:28–36 — The Heart of the Confession ──────────────────────── */
    {
      ref: 'Baruch 1:28–36',
      title: 'To the Lord Our God Belongeth Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              28,
              t('Yet hear our prayer, O Lord; for to the Lord our God belongeth righteousness, but unto us the confusion of faces, as at this day;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-core-confession',
          html:
            'This is the heart of Baruch. "To the Lord our God belongeth righteousness, but unto us the confusion of faces." God is righteous. We are ashamed. The word translated "confusion" points not to confused thinking, but to the crushing weight of shame. The exiles stand before God with their faces flushed, unable to meet His gaze, because they have turned from Him.',
        },
        {
          kind: 'greek',
          id: 'bar1-aischyne',
          title: 'Aischynē Prosōpōn — "Confusion of Faces"',
          script: 'αἰσχύνη προσώπου',
          translit: '<strong>Aischynē prosōpōn</strong> · shame of face; the burning shame visible on the face',
          description:
            'Aischynē is shame; prosōpon is face. Together they describe the visible burning shame that makes you want to hide your face. It is the feeling of being exposed, of having your failure visible to all. The exiles feel this acutely in Babylon, far from home and God.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              30,
              t('O Lord our God, that thou wouldest hear the prayer of thy servants and their supplications, and cause us to be delivered from the captivity which the Lord hath brought upon us;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-delivrance-pray',
          html:
            'The exiles ask for deliverance, but not deliverance from suffering as such. They ask deliverance "from the captivity which the Lord hath brought upon us." They are not asking God to reverse His judgment. They are asking Him to bring restoration after judgment, the way mercy follows wrath in the covenant cycle.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              34,
              t('For thou art the Lord our God, and we will praise thee, O Lord: for the fear of the Lord is upon us; therefore we have turned from the iniquities of our fathers that wrought evil before thee.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-fear-turning',
          html:
            '"The fear of the Lord is upon us; therefore we have turned from the iniquities of our fathers." The exiles do not say they have turned from iniquity because they are good. They have turned because the fear of the Lord is upon them. They have felt God&apos;s weight. And that weight has turned them around. This is the function of exile: to make God real, to make His word unavoidable.',
        },
        {
          kind: 'carry',
          html:
            'Shame is not a comfortable place. But it can become a place where turning is possible. The exiles carry the shame of their captivity into prayer. And in prayer, shame becomes confession. Confession becomes petition. And petition opens the way home. You do not have to stay in shame. But you do not escape it by denying it. You confess it.',
        },
        {
          kind: 'reflection',
          id: 'bar1-shame-turn',
          prompt:
            'The exiles say: "The fear of the Lord is upon us; therefore we have turned from the iniquities of our fathers." What does it look like to feel God&apos;s presence so powerfully that it turns you away from sin? Where do you need that kind of turning in your own life?',
        },
      ],
    },

    /* ─── Baruch 1:36–45 — The Catalogue of Sins Continues ──────────────────── */
    {
      ref: 'Baruch 1:36–45',
      title: 'The Sins of Our Fathers and Ourselves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              36,
              t('For we have sinned before the Lord our God, and we have disobeyed him, and we have not hearkened unto the voice of the Lord our God, to walk in the commandments that the Lord hath set before us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-commandments-heard',
          html:
            'The exiles are clear on the historical fact: they heard God. God gave commandments. God set them before Israel. Israel did not walk in them. This is not misunderstanding. It is willful disobedience. The exile is not a mistake or a tragedy that befell them. It is the consequence they deserved.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              37,
              t('From the day that the Lord brought our fathers out of the land of Egypt, until this day, we have been disobedient unto the Lord our God; and we are not ashamed.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-generations',
          html:
            'The exiles trace the sin back not to one moment, but to a pattern. From Egypt to now, a long history of disobedience. And worse, they confess: "we are not ashamed"—or rather, we have not been ashamed, until now. Exile has broken through their numbness. Captivity has made shame real.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              40,
              t('Hear our prayer, O Lord, and our petition, and deliver us for thine own name&apos;s sake, and give us favour in the sight of them which have led us away captive;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-favour-captors',
          html:
            'The exiles ask not for the destruction of Babylon, but for favor in the sight of their captors. This is remarkable humility. They have been conquered, enslaved, deported. Yet they ask to find favor with those who conquered them. This is the wisdom exile teaches: survival lies not in resistance but in grace.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              42,
              t('And it shall be a sign of thy favour, if thou dost deliver us from the captivity which the Lord hath brought upon us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar1-sign-favour',
          html:
            'The exiles connect deliverance with God&apos;s favor. If God restores them, it will be proof that He has accepted their repentance. This is faith: the belief that God listens to confession and that His mercy can pierce through even the darkest exile.',
        },
        {
          kind: 'carry',
          html:
            'The exiles do not minimize their sin or their time in exile. They confess both fully. But they do not despair. They believe that God&apos;s name itself—His reputation for mercy, for faithfulness, for keeping covenant—is at stake in their restoration. And so they pray in the confidence that God cares about His own name more than He cares about punishing them further.',
        },
        {
          kind: 'reflection',
          id: 'bar1-favour',
          prompt:
            'What would it mean to pray for favor, not just for yourself, but for the sake of God&apos;s name? How does praying for God&apos;s reputation to be upheld change the way you bring your confession to Him?',
        },
      ],
    },

    /* ─── Closing Reflection on the Scroll ───────────────────────────────────── */
    {
      ref: 'Baruch 1 · The Power of Confession',
      title: 'Speaking Truth in the Place of Exile',
      blocks: [
        {
          kind: 'commentary',
          id: 'bar1-power-confession',
          html:
            'Baruch reads the scroll to the gathered exiles. He does not read a prophecy of immediate return. He does not read promises of revenge on Babylon. He reads something simpler and more powerful: the truth. We sinned. We turned away. We deserve this. But God is righteous, and His name endures. If we confess, if we turn, if we repent—there may be a way home.',
        },
        {
          kind: 'commentary',
          id: 'bar1-apocrypha-note',
          html:
            'Whatever its canonical status, Baruch preserves for us the spiritual intuition of exiled Judaism: that captivity itself becomes a classroom, that shame can be transformed into confession, and that repentance—even in the face of judgment—opens a path toward God.',
        },
        {
          kind: 'artwork',
          matchTitle: /babylon|exile|captivity/i,
          caption: 'Exile in Babylon · Psalm 137: "By the rivers of Babylon, there we sat down, yea, we wept"',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-jer-25',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 25 — Seventy Years of Exile',
      url: 'https://www.sefaria.org/Jeremiah.25',
      description: 'Canonical theme paralleling Baruch&apos;s exile narrative and restoration hope.',
    },
    {
      id: 'bible-odyssey-babylonian-exile',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Babylonian Exile and Diaspora',
      url: 'https://www.bibleodyssey.org/dictionary/babylonian-exile/',
      description: 'SBL entry on historical and theological context of Judean exile.',
    },
    {
      id: 'sefaria-baruch-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Baruch 1 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Baruch.1',
      description: 'The Hebrew text of Baruch 1 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  bottomShare: {
    quote:
      'To the Lord our God belongeth righteousness, but unto us the confusion of faces... Yet hear our prayer, O Lord; have mercy upon us: for we are a sinful people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 1 · Study Guide',
  },

  hasHebrew: true,
};
