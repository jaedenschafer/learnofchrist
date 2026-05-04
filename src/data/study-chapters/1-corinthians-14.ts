import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Corinthians 14 — Tongues and Prophecy in the Gathered Church
 *
 * Chapter 13 taught the Corinthians that love is the ultimate gift. Chapter 14
 * asks: what does love look like when the body gathers? Paul does not forbid
 * tongues; he insists that spiritual gifts—including tongues—must serve the
 * community, not the individual. Prophecy, speaking God&apos;s word in
 * intelligible language, builds up the church where tongues alone cannot.
 * The operating principle throughout is edification: gifts are for the body.
 */
export const FIRST_CORINTHIANS_14: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 14,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 20 },
  topicTags: ['unity', 'love', 'witness', 'wisdom'],
  opener: {
    topical: true,
    caption: '1 Corinthians 14',
  },
  intros: [
    'Chapter 13 crowned love as the supreme good. Chapter 14 turns to the gathered church and asks: how does love express itself when believers come together? The Corinthians prized speaking in tongues—it was ecstatic, immediate, a sign of the Spirit&apos;s power. But Paul, with surgical precision, shows them that love means something different. Love means choosing the gift that builds up others, not the gift that elevates yourself.',
    'Paul does not forbid tongues. He affirms them as a genuine gift from the Spirit. But he insists on priority: prophecy, the intelligible speaking of God&apos;s word, is greater because it edifies the entire body. His concern is not to quench the Spirit, but to ensure that the Spirit&apos;s work in the gathered church is marked by clarity, order, and the kind of love that thinks first of others.',
  ],

  sections: [
    /* ─── 1 Corinthians 14:1–3 — Follow After Charity ───────────────────── */
    {
      ref: '1 Corinthians 14:1–3',
      title: 'Follow After Charity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                hp('Follow after charity', 'cor14-charity'),
                t(', and '),
                hg('desire spiritual gifts', 'cor14-desire'),
                t(', but rather that ye may '),
                hy('prophesy', 'cor14-prophesy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-desire',
          html:
            'Paul does not say, &ldquo;Stop desiring spiritual gifts.&rdquo; He says, &ldquo;Let charity guide what you desire.&rdquo; This is the pivot from chapter 13. Love is not passive; it shapes your preferences. If you love the body, you will hunger for the gifts that serve it.',
        },
        {
          kind: 'greek',
          id: 'cor14-prophesy',
          title: 'Prophesying — προφητεύω',
          script: 'προφητεύω',
          translit: '<strong>propheteúō</strong> · to speak forth God&apos;s word; to prophesy',
          description:
            'Prophecy is not fortune-telling. It is the immediate, Spirit-given speaking of God&apos;s word to the present situation—words of edification, exhortation, and comfort. It happens in real time, in the gathered church, and it requires intelligibility.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 2,
              spans: [
                t('For he that speaketh in an unknown tongue speaketh not unto men, but unto '),
                hg('God', 'cor14-god-alone'),
                t(': for no man understandeth him; howbeit in the spirit he speaketh mysteries.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-god-alone',
          html:
            'A tongue without interpretation is prayer directed to God alone. That is not contemptible—Paul affirms it later. But it does not serve the gathered body[res:theoi-glossolalia-ecstasy]. Paul&apos;s point is anatomical: if you speak what no one can understand, your gift builds up yourself, not others.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 3,
              spans: [
                t('But he that prophesieth speaketh unto men to '),
                hg('edification, and exhortation, and comfort', 'cor14-three-fruit'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-three-fruit',
          html:
            'Three purposes, all other-centered: <em>edification</em> (building up the believer), <em>exhortation</em> (calling to obedience), <em>comfort</em> (consoling the troubled). Prophecy is not for the prophet&apos;s experience; it is for the hearer&apos;s transformation.',
        },
        {
          kind: 'christ',
          id: 'cor14-charity',
          title: 'Christ Connection — The Prophet Who Came to Build',
          html:
            'Jesus spoke God&apos;s word with perfect clarity and always for the good of His hearers. He edified the weary, exhorted the wayward, comforted the grieving. His entire ministry was the living model of what Paul describes: a prophet whose gifts serve the body He came to build.',
        },
        {
          kind: 'carry',
          html:
            'When you use your gifts in your community—whether at work, in your church, at home—do you think first of edifying others, or of being seen? Today, practice choosing the gift that serves, even if it means less recognition for yourself.',
        },
        {
          kind: 'reflection',
          id: 'cor14-edify',
          prompt:
            'What gifts has God given you? How are you using them—for your own experience, or for the edification of those around you?',
        },
      ],
    },

    /* ─── 1 Corinthians 14:4–12 — Greater Is He That Prophesieth ───────── */
    {
      ref: '1 Corinthians 14:4–12',
      title: 'Greater Is He That Prophesieth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 4,
              spans: [
                t('He that speaketh in an unknown tongue edifieth himself; but he that prophesieth edifieth the '),
                hg('church', 'cor14-church'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-church',
          html:
            'Not a building. Not an institution. The church is the assembled people. A tongue edifies the speaker alone; prophecy edifies everyone. The hierarchy is stark.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 5,
              spans: [
                t('I would that ye all spake with tongues, but rather that ye prophesied: for '),
                hp('greater is he that prophesieth than he that speaketh with tongues', 'cor14-hierarchy'),
                t(', except he interpret, that the church may receive edifying.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-hierarchy',
          html:
            'Paul is not ambiguous. Prophecy is greater. A tongue becomes as valuable as prophecy <em>only</em> when it is interpreted—that is, when it is translated into intelligible speech that can edify the body. The exception proves the rule: without understanding, no edification.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 6,
              spans: [
                t('Now, brethren, if I come unto you speaking with tongues, what shall I profit you, except I shall speak to you either by '),
                hg('revelation, or by knowledge, or by prophesying, or by doctrine', 'cor14-four-gifts'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-four-gifts',
          html:
            'Paul names four gifts that serve the gathered body: revelation (a direct word from God), knowledge (understanding), prophecy (forth-speaking), doctrine (teaching). All require intelligibility. All build the other person up.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 7,
              spans: [
                t('And even things without life giving sound, whether pipe or harp, except they give a distinction in the sounds, how shall it be known what is piped or harped?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For if the trumpet give an '),
                hy('uncertain sound', 'cor14-trumpet'),
                t(', who shall prepare himself to the battle?'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'cor14-trumpet',
          title: 'Uncertain sound — ἄδηλος',
          script: 'ἄδηλος',
          translit: '<strong>adelos</strong> · unclear, obscure, unintelligible',
          description:
            'A trumpet is a military instrument; it summons, it commands, it warns. An uncertain sound freezes the army. The principle transfers: spiritual gifts must be clear, must be understood, or they fail their purpose.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 9,
              spans: [
                t('So likewise ye, except ye '),
                hg('utter by the tongue words easy to be understood', 'cor14-utterance'),
                t(', how shall it be known what is spoken? for ye shall speak into the air.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-utterance',
          html:
            'The force of Paul&apos;s argument is cumulative. A pipe without rhythm. A trumpet without clarity. A tongue without interpretation. All are voices entering an empty room. If no one understands, the speaker has not communicated—they have merely made sound.',
        },
        {
          kind: 'carry',
          html:
            'When you speak in your church, on your team, in your family, ask yourself: Does this serve those who hear it, or only myself? Are my words clear? Could someone who doesn&apos;t know my background understand them? Clarity is a form of love.',
        },
        {
          kind: 'reflection',
          id: 'cor14-clarity',
          prompt:
            'In your community, where do you see unclear communication? Where are people speaking but no one understands? How could you help bring clarity?',
        },
      ],
    },

    /* ─── 1 Corinthians 14:13–19 — Pray for Understanding ─────────────── */
    {
      ref: '1 Corinthians 14:13–19',
      title: 'Pray for the Mind as Well as the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 13,
              spans: [
                t('Wherefore let him that speaketh in an unknown tongue '),
                hg('pray that he may interpret', 'cor14-pray-interpret'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-pray-interpret',
          html:
            'If you have the gift of tongues, Paul says, ask God for the gift of interpretation too. Do not be content with ecstasy alone. Seek to make your own gift intelligible to others. This is love: wanting others to understand.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 14,
              spans: [
                t('For if I pray in an unknown tongue, my spirit prayeth, but my '),
                hy('understanding is unfruitful', 'cor14-understanding'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'cor14-understanding',
          title: 'Understanding — νοῦς',
          script: 'νοῦς',
          translit: '<strong>noûs</strong> · mind, intellect; rational understanding',
          description:
            'Paul draws a stark distinction: the spirit can pray; the mind remains dormant. In a tongue, you are aware you are praying, but you do not know what you are saying. Your own reason is not engaged.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 15,
              spans: [
                t('What is it then? '),
                hp('I will pray with the spirit, and I will pray with the understanding also', 'cor14-both'),
                t(': I will sing with the spirit, and I will sing with the understanding also.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-both',
          html:
            'Here is Paul&apos;s own practice and his counsel: both. Pray with the spirit (in ecstasy, in immediacy, in the overflow of feeling). <em>And</em> pray with the understanding (in comprehension, in your rational mind, with your full self engaged). Worship is not body-only or mind-only. It is whole-person.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 16,
              spans: [
                t('Else when thou shalt bless with the spirit, how shall he that '),
                hg('occupieth the room of the unlearned', 'cor14-unlearned'),
                t(' say Amen at thy giving of thanks, seeing he understandeth not what thou sayest?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-unlearned',
          html:
            'The unlearned visitor—someone new to the faith, or skeptical—comes into the church and hears glossolalia, incomprehensible speech. How can they affirm it? How can they say &ldquo;Amen&rdquo; to what they do not understand? They cannot. They are excluded.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 17,
              spans: [
                t('For thou verily givest thanks well, but the other is not '),
                hg('edified', 'cor14-not-edified'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-not-edified',
          html:
            'The speaker may be deeply sincere, beautifully grateful to God. But if the listeners cannot understand, they are not edified. And edification—the building up of the body—is Paul&apos;s measure of what matters.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 18,
              spans: [
                t('I thank my God, I speak with tongues more than ye all:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Yet in the church I had rather speak five words with my understanding, that '),
                hp('by my voice I might teach others also', 'cor14-teach-others'),
                t(', than ten thousand words in an unknown tongue.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-teach-others',
          html:
            'Paul has the gift of tongues in abundance—probably more than any of the Corinthians. Yet in the church gathering, he chooses five intelligible words over ten thousand ecstatic ones. Why? Because his goal is not his own experience. It is theirs. It is teaching, building, serving.',
        },
        {
          kind: 'christ',
          id: 'cor14-both-2',
          title: 'Christ Connection — The Whole Person',
          html:
            'Jesus taught not only in parables and riddles, but in clear speech that anyone could follow. &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). He engaged both heart and mind, both spirit and reason. The gospel requires understanding.',
        },
        {
          kind: 'carry',
          html:
            'In your prayers, in your worship, in your teaching, do you engage your whole self—mind and spirit together? Do not despise the mind. It is not less spiritual to think; it is spiritual to think clearly. And when you speak to others, remember: five words they understand is worth more than ten thousand they cannot.',
        },
        {
          kind: 'reflection',
          id: 'cor14-whole',
          prompt:
            'How do you engage the gift of your intellect in your faith? Where are you being called to think more deeply or to help others understand?',
        },
      ],
    },

    /* ─── 1 Corinthians 14:20–25 — Tongues as a Sign to Unbelievers ────── */
    {
      ref: '1 Corinthians 14:20–25',
      title: 'Tongues as a Sign—to Whom?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 20,
              spans: [
                t('Brethren, be not '),
                hg('children in understanding', 'cor14-children'),
                t(': howbeit in malice be ye children, but in understanding be men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-children',
          html:
            'Maturity is not the absence of innocent joy; it is the presence of wise judgment. Paul is telling the Corinthians: you can be innocent about evil, but grow up about your own behavior. Think through what your gifts accomplish.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('In the law it is written, With men of other tongues and other lips will I speak unto this people; and yet for all that will they not hear me, saith the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-isaiah',
          html:
            'Paul quotes Isaiah 28:11–12[res:sefaria-isaiah-28-11], where God warns Israel that because they reject His prophet, He will speak to them in a language they cannot understand—as judgment, not blessing. The Corinthians are citing this passage to justify their enthusiasm for tongues. Paul flips it: tongues are for a sign <em>to those that believe not</em>, but they harden themselves.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 22,
              spans: [
                t('Wherefore '),
                hy('tongues are for a sign', 'cor14-sign'),
                t(', not to them that believe, but to them that believe not: but prophesying serveth not for them that believe not, but for them which believe.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'cor14-sign',
          title: 'Sign — σημεῖον',
          script: 'σημεῖον',
          translit: '<strong>sēmeîon</strong> · a sign, a token; something that points to a reality beyond itself',
          description:
            'A sign is not the reality itself. The Corinthians thought tongues were the ultimate proof of the Spirit. Paul says they are a sign—and even so, a sign that often hardens unbelievers rather than converting them.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 23,
              spans: [
                t('If therefore the whole church be come together into one place, and all speak with tongues, and there come in those that are unlearned, or unbelievers, '),
                hg('will they not say that ye are mad', 'cor14-mad'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-mad',
          html:
            'Paul imagines a visitor walking into a Corinthian church where everyone is speaking in tongues at once. No translation. No interpretation. Just a wall of ecstatic utterance. The visitor&apos;s first thought: you are mad, possessed, out of your minds. The gift intended as a sign becomes a scandal.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 24,
              spans: [
                t('But if all prophesy, and there come in one that believeth not, or one unlearned, '),
                hp('he is convicted of all, he is judged of all', 'cor14-convicted'),
                t(':'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And thus are the secrets of his heart made manifest; and so falling down on his face he will worship God, and report that God is in you of a truth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-convicted',
          html:
            'Now flip the scene. If everyone prophesies—speaks God&apos;s word intelligibly—the unbeliever hears the truth about God, about sin, about redemption. The secrets of his heart are exposed. Not by mystical power, but by the clarity of God&apos;s word landing in his ear. He is moved to worship. He recognizes: God is <em>really</em> here.',
        },
        {
          kind: 'christ',
          id: 'cor14-convicted-2',
          title: 'Christ Connection — The Word That Pierces',
          html:
            '&ldquo;The word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit&rdquo; (Heb. 4:12). The unbeliever does not need ecstasy; they need clarity. They need to hear the word of Christ, intelligibly spoken, so that their own heart stands revealed and the Spirit can work conviction.',
        },
        {
          kind: 'carry',
          html:
            'When you witness to someone, when you speak truth to a questioner or skeptic, forget the mystical language they cannot access. Speak clearly about Jesus, about sin, about grace. Let the naked truth do the work. God&apos;s word does not need our special effects to pierce the heart.',
        },
        {
          kind: 'reflection',
          id: 'cor14-witness',
          prompt:
            'How do you explain your faith to someone who doesn&apos;t share it? Are you clear, or cloudy? What would it look like to speak the gospel in words they can actually understand?',
        },
      ],
    },

    /* ─── 1 Corinthians 14:26–33 — Order in the Gathering ──────────────── */
    {
      ref: '1 Corinthians 14:26–33',
      title: 'Let All Things Be Done Unto Edifying',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 26,
              spans: [
                t('How is it then, brethren? when ye come together, every one of you hath a psalm, hath a doctrine, hath a tongue, hath a revelation, hath an interpretation. '),
                hg('Let all things be done unto edifying', 'cor14-edifying-principle'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-edifying-principle',
          html:
            'The Corinthian service is chaotic. Everyone brings something—a psalm, a teaching, a tongue, a revelation. No one is waiting for the other. No one is thinking about whether it serves[res:bibleodyssey-early-worship]. Paul reduces it to one principle: <em>edification</em>. That word is the key to the entire chapter. Let it govern everything.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 27,
              spans: [
                t('If any man speak in an unknown tongue, let it be by two, or at the most three, and that by course; and let one interpret.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-order-tongues',
          html:
            'Paul gives practical rules. Two or three tongues per gathering, not everyone at once. <em>By course</em> (one at a time, in order). And <em>one must interpret</em>. Without interpretation, no tongues should be spoken in the gathered church. This is not a restriction on the Spirit; it is a protection for the body.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 28,
              spans: [
                t('But if there be no interpreter, let him keep silence in the church; and let him speak to himself, and to God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-silence',
          html:
            'If no interpreter is present, the tongue-speaker remains silent in the public worship. They can pray in tongues privately, at home—&ldquo;to himself, and to God.&rdquo; But in the gathered church, intelligibility is non-negotiable.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 29,
              spans: [
                t('Let the prophets speak two or three, and let the other '),
                hg('judge', 'cor14-judge'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-judge',
          html:
            'Prophecy is intelligible, so it can be weighed. Two or three prophets speak. Others listen and judge—not harshly, but critically. Does this align with Scripture? Is the tone consistent with the Spirit? Is it true? The church is not gullible. Prophecy is open to assessment.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 30,
              spans: [
                t('If any thing be revealed to another that sitteth by, let the first hold his peace.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-orderly-revelation',
          html:
            'Even prophets can wait. If one prophet is speaking and another receives a revelation, the first one stops. The gift does not override the person&apos;s will. Prophets have agency. They can wait.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 31,
              spans: [
                t('For ye may all prophesy one by one, that all may learn, and all may be comforted.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the spirits of the prophets are subject to the prophets.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'cor14-subject',
          title: 'Subject — ὑποτάσσω',
          script: 'ὑποτάσσω',
          translit: '<strong>hypotássō</strong> · to arrange under; to subject; to obey',
          description:
            'This is Paul&apos;s most striking claim: even the Spirit-enabled prophetic gift remains under the prophet&apos;s own control. The Spirit does not override the person. The gift is not an alien force seizing them. They remain themselves.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 33,
              spans: [
                t('For God is not the author of '),
                hp('confusion', 'cor14-god-peace'),
                t(', but of peace, as in all churches of the saints.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-god-peace',
          html:
            'This is the theological anchor. God is the God of peace, order, clarity. Wherever chaos reigns—people speaking over each other, no one understanding, no leadership—something other than God is at work. Paul is not quenching the Spirit. He is inviting the Corinthians to recognize God&apos;s true character.',
        },
        {
          kind: 'christ',
          id: 'cor14-god-peace-2',
          title: 'Christ Connection — Peace as the Mark of His Presence',
          html:
            '&ldquo;Peace I leave with you, my peace I give unto you&rdquo; (John 14:27). Where Jesus reigns, there is order. Where the Spirit works, there is clarity, not chaos. &ldquo;God hath not given us the spirit of fear; but of power, and of love, and of a sound mind&rdquo; (2 Tim. 1:7). The Spirit produces self-control.',
        },
        {
          kind: 'carry',
          html:
            'Look at your own worship, your own use of your gifts. Does it produce peace and clarity, or confusion? Does it build others up, or elevate yourself? If you are in a community marked by chaos—everyone speaking, no one hearing, no order—something needs to change. Invite clarity. Insist on order. That is honoring God.',
        },
        {
          kind: 'reflection',
          id: 'cor14-order',
          prompt:
            'In your church or community, where do you see confusion? Where could you help bring order, not to quench the Spirit, but to make room for Him?',
        },
      ],
    },

    /* ─── 1 Corinthians 14:34–40 — Women in the Church; Let All Be Done Decently ─ */
    {
      ref: '1 Corinthians 14:34–40',
      title: 'Gathered Worship and the Way of Order',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 34,
              spans: [
                t('Let your women keep silence in the churches: for it is not permitted unto them to speak; but they are commanded to be under obedience, as also saith the law.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And if they will learn any thing, let them ask their husbands at home: for it is a shame for women to speak in the church.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-women-silence',
          html:
            'These verses are among the most contested in Scripture. Paul himself says in 1 Corinthians 11:5 that women prophesy in the church—which requires speaking. The context here is the disruptive Corinthian assembly. &ldquo;Keep silence&rdquo; likely means: do not contribute to the chaos. Do not add voices to the confusion of uninterpreted tongues and competing prophecies[res:sefaria-women-synagogue]. The principle is order, not the silencing of women&apos;s gifts.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 36,
              spans: [
                t('What? came the word of God out from you? or came it unto you only?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-word-of-god',
          html:
            'Paul challenges the Corinthians directly: Are you the source of God&apos;s word? Did it originate with you? No. You received it. You do not get to make up the rules as you go along. There is a standard—God&apos;s word—that stands above your preferences and your chaos.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 37,
              spans: [
                t('If any man think himself to be a prophet, or spiritual, let him acknowledge that the things that I write unto you are the commandments of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-commandments',
          html:
            'This is a sober statement. Paul is claiming apostolic authority. What he writes is not mere opinion; it is the Lord&apos;s commandment. The Corinthians must accept it as such.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 38,
              spans: [
                t('But if any man be ignorant, let him be ignorant.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-ignorant',
          html:
            'A cutting remark. If someone refuses to recognize Paul&apos;s authority, if they are willfully closed to what the Lord is saying through him, Paul leaves them to their ignorance. The door is open to receive; it remains open to refuse.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 39,
              spans: [
                t('Wherefore, brethren, '),
                hg('covet to prophesy', 'cor14-covet-prophesy'),
                t(', and forbid not to speak with tongues.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-covet-prophesy',
          html:
            'Paul&apos;s final word balances the chapter. He affirms both gifts. Covet prophecy—yes, pursue the greater gift. But forbid not tongues. The gift is real. Just—use it wisely.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 40,
              spans: [
                t('Let all things be done '),
                hp('decently and in order', 'cor14-decently-order'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor14-decently-order',
          html:
            'This is where the chapter lands. Not &ldquo;quench the Spirit.&rdquo; Not &ldquo;forbid the gifts.&rdquo; Simply: <em>decently and in order.</em> The Greek word <em>euschēmōn</em> (decent) suggests something fitting, becoming, beautiful. Order is not legalism; it is beauty. It is the stage on which the Spirit can work.',
        },
        {
          kind: 'greek',
          id: 'cor14-euschemon',
          title: 'Decent — εὐσχήμων',
          script: 'εὐσχήμων',
          translit: '<strong>euschḗmōn</strong> · well-formed; fitting; becoming; decent',
          description:
            'Paul uses a word that suggests beauty and propriety. When the church gathers, let it be beautiful. Let it be fitting. Let it reflect that God is a God of peace, not chaos.',
        },
        {
          kind: 'christ',
          id: 'cor14-decently-order-2',
          title: 'Christ Connection — The Head and the Body',
          html:
            '&ldquo;The head from which all the body by joints and bands having nourishment ministered, and knit together, increaseth with the increase of God&rdquo; (Col. 2:19). The church is Christ&apos;s body. A body without coordination is a convulsion. A body with each member in its place is alive, purposeful, growing. Order is not the opposite of life; it is the condition for it.',
        },
        {
          kind: 'carry',
          html:
            'Wherever you gather with other believers—in a formal service, a small group, a prayer circle—think about whether it is orderly. Whether it is beautiful. Whether everyone has a chance to hear and be edified. You are not enforcing rules for their own sake. You are creating space for God to work.',
        },
        {
          kind: 'reflection',
          id: 'cor14-decently',
          prompt:
            'Think of a time you gathered with believers. Was it marked by decent order? Or was there confusion? What would it take to make that gathering more beautiful, more fitting, more purposeful?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Corinthians 14',
    quote:
      'Follow after charity, and desire spiritual gifts—but let all things be done unto edifying. For God is not the author of confusion, but of peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 14 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-28-11',
      kind: 'study',
      source: 'Sefaria Library',
      label: 'Isaiah 28:11–12 — The Quotation Paul Uses',
      url: 'https://www.sefaria.org/Isaiah.28.11-12?lang=en',
      description: 'Open-access Hebrew Scripture text showing the source Paul quotes at 1 Corinthians 14:21 — God&apos;s warning to Israel via foreign tongues.',
    },
    {
      id: 'bibleodyssey-early-worship',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Worship Practices in the Early Church',
      url: 'https://www.bibleodyssey.org/en/passages/Worship-in-the-Early-Church/',
      description: 'Scholarly overview of how early churches ordered their gatherings — prophecy, tongues, teaching, and the principle of edification that Paul enforces.',
    },
    {
      id: 'theoi-glossolalia-ecstasy',
      kind: 'archive',
      source: 'Theoi Classical Texts &amp; Database',
      label: 'Ecstatic Speech &amp; Glossolalia in Greco-Roman Religion',
      url: 'https://www.theoi.com/Text/OvidMetamorphoses1.html',
      description: 'Classical parallels to glossolalia in mystery cults and oracle sites — context for understanding the phenomenon Paul addresses and its distinction from intelligible prophecy.',
    },
    {
      id: 'sefaria-women-synagogue',
      kind: 'study',
      source: 'Sefaria Library',
      label: 'Women&apos;s Participation in Synagogue Worship',
      url: 'https://www.sefaria.org/search?q=women+synagogue+worship',
      description: 'Textual search through Jewish law and practice regarding women&apos;s roles in gathered worship — essential for interpreting Paul&apos;s instructions at 1 Corinthians 14:34–35.',
    },
  ],

  hasHebrew: false,
};
