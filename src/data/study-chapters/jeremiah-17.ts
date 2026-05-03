import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 17 — The Heart Deceitful Above All Things
 *
 * "The heart is deceitful above all things, and desperately wicked: who can
 * know it?" Yet the Lord searches the heart and tries the reins. Those who
 * trust in man are cursed; those who trust in the Lord are blessed. The chapter
 * moves from diagnosis of the human heart to the contrast of two kinds of faith
 * — faith in flesh and faith in God.
 */
export const JEREMIAH_17: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 17,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  intros: [
    'Jeremiah 17 contains one of Scripture&apos;s most famous and most unsettling diagnoses: "The heart is deceitful above all things, and desperately wicked: who can know it?" This is not poetry about human frailty. It is a statement of the human condition — the heart that we trust most, that we feel most certain about, is the very place where deception lives. We lie to ourselves about our motives, our desires, our righteousness. We cannot even trust our own inner knowing.',
    'And yet the chapter does not leave us in despair. The Lord searches the heart. The one thing we cannot know about ourselves — the truth of our hearts — God sees clearly. And the chapter offers a way forward: blessed is the man that trusteth in the Lord, cursed is the man that trusteth in man. The remedy for the deceitful heart is not to trust the heart more, but to turn away from it entirely and place faith in God alone.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 17',
    quote:
      '"The heart is deceitful above all things... but blessed is the man that trusteth in the Lord." Jeremiah reveals both our condition and our salvation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 17 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 17:1–4 — Sin Written on the Heart ──────────────────── */
    {
      ref: 'Jeremiah 17:1–4',
      title: 'Sin Inscribed Deep',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('The sin of Judah is written with a pen of iron, and with the point of a diamond: it is graven upon the table of their heart, and upon the horns of your altars;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Whilst their children remember their altars and their groves by the green trees upon the high hills.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('O my mountain in the field, I will give thy substance and all thy treasures to the spoil, and thy high places for sin, throughout all thy borders.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And thou, even thyself, shalt discontinue from thine heritage that I gave thee; and I will cause thee to serve thine enemies in the land which thou knowest not: for ye have kindled a fire in mine anger, which shall burn for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer17-written',
          html: 'Sin is inscribed on the heart "with a pen of iron, and with the point of a diamond" — the image is one of permanence. The sin is not superficial; it is carved deeply. And the inscription is visible not just inwardly but in external action — the children remember the altars of idolatry, the high places of false worship. The sin has become the inheritance of the people[res:babylonian-chronicle][res:sefaria-jeremiah-17].',
        },
        {
          kind: 'commentary',
          id: 'jer17-discontinue',
          html: 'The consequence is stark: they will be forced to discontinue from their heritage, the land God gave them. They will serve enemies in a land they know not. The fire kindled by their disobedience will burn forever. This is the severity that comes when sin has been so deeply inscribed in the heart that repentance seems impossible[res:lachish-letters].',
        },
        {
          kind: 'carry',
          html: 'Sin, when allowed to deepen, becomes inscribed. It moves from choice to character, from action to identity. The early choice to trust idols becomes the settled conviction of the heart, passed on to children. Where are you allowing sin to be inscribed? What small acts of disobedience are you permitting to become grooves worn deep?',
        },
        {
          kind: 'reflection',
          id: 'jer17-inscribed',
          prompt: 'Judah&apos;s sin is written with iron and diamond — carved deep. What sins have you allowed to become inscribed in your own life? What would it take to break free from them?',
        },
      ],
    },

    /* ─── Jeremiah 17:5–10 — Cursed, Blessed, and the Searching God ────────── */
    {
      ref: 'Jeremiah 17:5–10',
      title: 'Two Kinds of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 5,
              spans: [
                t('Thus saith the Lord; '),
                hg('Cursed be the man that trusteth in man', 'jer17-cursed-man'),
                t(', and maketh flesh his arm, and whose heart departeth from the Lord.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For he shall be like the heath in the desert, and shall not see when good cometh; but shall inhabit the parched places in the wilderness, in a salt land and not inhabited.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Blessed is the man that '),
                hp('trusteth in the Lord', 'jer17-blessed-trust'),
                t(', and whose hope the Lord is.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For he shall be as a tree planted by the waters, and that spreadeth out her roots by the river: and shall not see when heat cometh, but her leaf shall be green; and shall not be careful in the year of drought, neither shall cease from yielding fruit.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('The heart is '),
                hg('deceitful above all things, and desperately wicked', 'jer17-heart-deceit'),
                t(': who can know it?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('I the Lord search the heart, I try the reins, even to give every man according to his ways, and according to the fruit of his doings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer17-cursed-man',
          html: 'The curse is specific: the man who trusts in man, who makes flesh his arm. Flesh — the human body, human strength, human wisdom — becomes his confidence. And the consequence is drought, desolation. He becomes like the heath in the desert, unable to see goodness or flourish.',
        },
        {
          kind: 'commentary',
          id: 'jer17-blessed-trust',
          html:
            'In stark contrast, the man who trusts in the Lord is blessed. He is like a tree planted by waters, spreading out roots by a river. In the year of drought, when others wither, this tree remains green. The difference is not in the climate or the trial — both face heat and drought. The difference is in the source of nourishment. One is rooted in flesh; the other in God.',
        },
        {
          kind: 'commentary',
          id: 'jer17-heart-deceit',
          html:
            '"The heart is deceitful above all things, and desperately wicked" — the Hebrew conveys a condition of being twisted, sick. This is the diagnosis that justifies the comparison. We cannot trust our own hearts, our own instincts, our own inner knowledge. We are deceived about our deepest selves. Therefore, we must not root ourselves in what the heart tells us; we must root ourselves in God.',
        },
        {
          kind: 'hebrew',
          id: 'jer17-aqob',
          title: 'Akob — "Deceitful"',
          script: 'עָקוֹב',
          translit: '<strong>Akob</strong> · crooked; deceitful; perverse',
          description:
            'The Hebrew "akob" carries the sense of something twisted, something that follows a crooked path. The heart is not merely dishonest; it is fundamentally twisted, unable to walk a straight path toward truth. This is why trusting the heart is futile — it is working against its own honesty.',
        },
        {
          kind: 'christ',
          id: 'jer17-christ-trust',
          title: 'Christ Connection — The Trust That Works',
          html:
            'Jesus embodies what trust in the Lord produces. Like the tree planted by waters, He is rooted in the Father: "I and my Father are one" (John 10:30). He does not rely on the flesh; He relies on God. And in the Beatitudes, He calls the people to trust: "Blessed are they that mourn... blessed are the merciful... blessed are they which are persecuted." The blessed life is the life that trusts not in human favor or flesh, but in God&apos;s kingdom.',
        },
        {
          kind: 'carry',
          html:
            'Your heart deceives you. You believe you know your motives, but you lie to yourself. The only remedy is to stop trusting the heart and start trusting God. This is not suppression of the heart; it is healing of it. When you trust God rather than flesh, the heart begins to be healed, and its desires begin to align with God&apos;s purposes.',
        },
        {
          kind: 'reflection',
          id: 'jer17-trust-choice',
          prompt: 'When have you trusted your heart and been deceived? What would it mean to trust the Lord instead?',
        },
      ],
    },

    /* ─── Jeremiah 17:11–13 — The Unjust Gain and the Living God ───────────── */
    {
      ref: 'Jeremiah 17:11–13',
      title: 'Unjust Gain and True Riches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 11,
              spans: [
                t('As the partridge sitteth on eggs, and hatcheth them not; so he that getteth riches, and not by right, shall leave them in the midst of his days, and at his end shall be a fool.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('A glorious high throne from the beginning is the place of our sanctuary.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('O Lord, the hope of Israel, all that forsake thee shall be '),
                hp('ashamed', 'jer17-ashamed'),
                t('; and they that depart from me shall be written in the earth, because they have forsaken the Lord, the fountain of living waters.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer17-ashamed',
          html:
            'Those who forsake God will be ashamed. There is a moment of reckoning when the illusion of unjust gain falls away. The partridge sits on eggs it does not hatch — a vivid image of effort without fruit. The man who gathers riches unjustly will leave them behind in the midst of his days. His labor produces nothing he can carry with him.',
        },
        {
          kind: 'commentary',
          id: 'jer17-fountain',
          html:
            'God is the "fountain of living waters." To depart from Him is to leave the only source of life and drink from broken cisterns instead. The shame that comes to those who forsake God is not arbitrary; it is the natural consequence of turning away from life itself.',
        },
        {
          kind: 'carry',
          html:
            'The world promises that riches gathered unjustly will satisfy. But Jeremiah shows the bankruptcy of that promise. What you gain by betraying God, by cutting corners, by serving flesh rather than the Lord — you will not be able to keep. The only riches that endure are the riches of trust in God, the fountain of living waters.',
        },
        {
          kind: 'reflection',
          id: 'jer17-fountain-life',
          prompt: 'God is the fountain of living waters. From what other fountains have you been drinking? What would it mean to return to God as your source?',
        },
      ],
    },

    /* ─── Jeremiah 17:14–18 — Jeremiah's Prayer and Complaint ──────────── */
    {
      ref: 'Jeremiah 17:14–18',
      title: 'Heal Me, O Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 14,
              spans: [
                t('Heal me, O Lord, and I shall be healed; save me, and I shall be saved: for thou art my praise.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Behold, they say unto me, Where is the word of the Lord? let it come now.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('As for me, I have not hastened from being a pastor to follow thee: neither have I desired the woeful day; thou knowest: that which came out of my lips was right before thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Be not a terror unto me: thou art my refuge in the day of evil.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Let them be confounded that persecute me, but let not me be confounded: let them be afraid, but let not me be afraid: bring upon them the day of evil, and destroy them with double destruction.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer17-heal',
          html:
            'Jeremiah himself must live out what he proclaims. He asks God to heal him, to save him, because he is trusting in God, not in flesh. His enemies scoff: "Where is the word of the Lord?" They mock him for his faithfulness. Yet Jeremiah maintains: "I have not hastened from being a pastor to follow thee."',
        },
        {
          kind: 'commentary',
          id: 'jer17-pastor',
          html:
            'Jeremiah says he has not been hasty to leave the pastoral role, to abandon his people. He has stayed faithful to his call even as they mock him. He has not sought the "woeful day" of judgment — he has not wanted exile to come. But he has been faithful to speak what God gave him to speak.',
        },
        {
          kind: 'carry',
          html:
            'Jeremiah faces persecution for speaking truth. His enemies mock, his message is delayed, his faithfulness is questioned. Yet he does not turn to flesh for vindication. He turns to God: "Heal me... save me." He asks God to be his refuge, his protection. And he trusts that God will ultimately vindicate him, though not yet.',
        },
        {
          kind: 'reflection',
          id: 'jer17-faithful',
          prompt: 'Jeremiah has been faithful even when mocked and doubted. Where are you called to maintain faithfulness when the world questions your message?',
        },
      ],
    },

    /* ─── Jeremiah 17:19–27 — The Sabbath and the King ────────────────── */
    {
      ref: 'Jeremiah 17:19–27',
      title: 'The Sabbath Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 19,
              spans: [
                t('Thus said the Lord unto me; Go and stand in the gate of the children of the people, whereby the kings of Judah come in, and by the which they go out, and in all the gates of Jerusalem;'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And say unto them, Hear ye the word of the Lord, ye kings of Judah, and all Judah, and all the inhabitants of Jerusalem, that enter in by these gates:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Thus saith the Lord; Take heed to yourselves, and bear no burden on the sabbath day, nor bring it in by the gates of Jerusalem;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Neither carry forth a burden out of your houses on the sabbath day, neither do ye any work: but hallow ye the sabbath day, as I commanded your fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer17-sabbath-fire',
          html:
            'God shifts from defending the Sabbath to threatening fire that devours gates. Rest becomes judgment.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 23,
              spans: [
                t('But they obeyed not, neither inclined their ear, but made their neck stiff, that they might not hear, nor receive instruction.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And it shall come to pass, if ye diligently hearken unto me, saith the Lord, to bring in no burden through the gates of this city on the sabbath day, but hallow the sabbath day, to do no work therein;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Then shall there enter into the gates of this city kings and princes sitting upon the throne of David, exercising judgment, and there shall be this city forever.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And they shall come from the cities of Judah, and from the places about Jerusalem, and from the land of Benjamin, and from the plain, and from the mountains, and from the south, bringing burnt offerings, and sacrifices, and meat offerings, and incense, and bringing sacrifices of praise, unto the house of the Lord.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('But if ye will not hearken unto me to hallow the sabbath day, and not to bear a burden, even entering in at the gates of Jerusalem on the sabbath day; then will I kindle a fire in the gates thereof, and it shall devour the palaces of Jerusalem, and it shall not be quenched.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer17-sabbath',
          html:
            'The Sabbath becomes the test of covenant faithfulness. To keep the Sabbath is to trust God for provision, to stop working, to acknowledge that life comes from God, not from human effort. The people refuse: they make their necks stiff. And the consequence is destruction. But obedience brings restoration — kings and princes, worship, permanence.',
        },
        {
          kind: 'carry',
          html:
            'The Sabbath is not a burden laid on us; it is an invitation to stop, to rest, to trust that God sustains what we cannot sustain by our own work. In our age of constant busyness, the Sabbath is prophetic. Will you trust God enough to stop? Will you hallow the day of rest?',
        },
        {
          kind: 'reflection',
          id: 'jer17-sabbath-keep',
          prompt: 'The Sabbath is a sign of trust in God. How do you keep Sabbath in your own life? What would it mean to truly rest from labor one day a week?',
        },
      ],
    },

    /* ─── Jeremiah 17 · The Heart and the Source ────────────────────────── */
    {
      ref: 'Jeremiah 17 · All',
      title: 'Trusting Beyond the Heart',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer17-diagnosis-remedy',
          html:
            'The chapter moves from diagnosis (the deceitful heart) through contrast (cursed and blessed) to implication (trust God, rest in the Sabbath). The remedy for the heart deceived is not introspection but transformation — looking away from the heart toward God, trusting not what we feel but what God has promised, resting not in human strength but in God&apos;s provision.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],  resources: [
    {
      id: 'babylonian-chronicle',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Chronicle (Jerusalem siege)',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA25091',
      description: 'Cuneiform tablet documenting the Babylonian assault on Jerusalem in 597 and 587 BCE.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    }
    {
      id: 'sefaria-jeremiah-17',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 17 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.17',
      description: 'The Hebrew text of Jeremiah 17 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],
};
