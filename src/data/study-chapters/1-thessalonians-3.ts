import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 3 — Timothy Sent; Faith Tested and Strengthened
 *
 * Paul was forcibly separated from the Thessalonian church by opposition in
 * Athens. His anxiety for them was unbearable: would they fall away under
 * persecution? He sent Timothy—brother, minister, fellow-laborer—to strengthen
 * their faith. Timothy returns with news of their steadfastness, and Paul&apos;s
 * heart overflows with joy and thanksgiving. From that gratitude flows a prayer:
 * that God would establish their hearts in holiness at the coming of Christ.
 */
export const FIRST_THESSALONIANS_3: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 3,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 14 },
  topicTags: ['hope', 'second-coming', 'witness', 'love'],
  opener: {
    topical: true,
    caption: '1 Thessalonians 3',
  },
  intros: [
    'Paul could not bear his separation from the Thessalonians. In the grip of anxiety, he sent Timothy from Athens—not as a messenger alone, but as a brother and minister of God, a fellow-laborer in the gospel—to strengthen their faith and learn if they were standing firm under the afflictions pressing upon them.',
    'Timothy returns with encouraging news: the church stands steadfast. Their faith has become the source of Paul&apos;s own life and joy. Out of that gratitude explodes a prayer—that God would perfect what is lacking in their faith, that He would establish their hearts unblameable in holiness, that their love would abound toward one another and toward all people, at the coming of Jesus Christ.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 3',
    quote:
      'Now we live, if ye stand fast in the Lord. For now we are alive, if you stand firm in faith. Night and day praying exceedingly that we might see your face, and might perfect that which is lacking in your faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 3 · Study Guide',
  },

  sections: [
    /* ─── Timothy Sent from Athens ───────────────────────────────────────── */
    {
      ref: '1 Thessalonians 3:1–2',
      title: 'Timothy Sent from Athens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('Wherefore when we could no longer forbear, we thought it good to be left at Athens alone;'),
            ),
            verse(
              2,
              t('And sent Timotheus, our '),
              hy('brother', 'greek-adelphos'),
              t(', and '),
              hg('minister of God', 'c-leitourgos'),
              t(', and our '),
              hp('fellowlabourer in the gospel of Christ', 'christ-coworker'),
              t(', to '),
              hy('establish you', 'greek-sterizo'),
              t(', and to comfort you concerning your faith;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-athens-alone',
          html:
            '&ldquo;Left at Athens alone.&rdquo; Paul had been driven out of Thessalonica by rioting Jews. He went to Berea, then Athens. Alone in that great city of philosophies and idols, his heart could not rest. His concern for the young church was stronger than his own comfort. He could not wait. Love does not delay.',
        },
        {
          kind: 'greek',
          id: 'greek-adelphos',
          title: 'Adelphos — &ldquo;Brother&rdquo;',
          script: 'ἀδελφός',
          translit: '<strong>adelphos</strong> · brother; kinsman in the faith',
          description:
            'Not &ldquo;my assistant&rdquo; or &ldquo;my deputy,&rdquo; but &ldquo;our brother.&rdquo; Timothy is a member of the household of God, standing with Paul as a peer in the gospel. The church is not a hierarchy of one leader and subordinates, but a family.',
        },
        {
          kind: 'commentary',
          id: 'c-leitourgos',
          html:
            '&ldquo;Minister of God.&rdquo; The Greek <em>leitourgos</em> carries overtones of public service—literally a servant who undertakes a public role for others. Timothy is not doing private work but serving in a public, sacred capacity.',
        },
        {
          kind: 'christ',
          id: 'christ-coworker',
          title: 'Christ Connection — Co-Laborers in Christ&apos;s Body',
          html:
            'Paul calls Timothy a &ldquo;fellowlabourer in the gospel of Christ.&rdquo; We are not saved as isolated souls but incorporated into the body of Christ, where every member has a function and every one works alongside others. &ldquo;We are labourers together with God&rdquo; (1 Cor. 3:9). When you strengthen someone else&apos;s faith, you are part of Christ&apos;s own ongoing work in the world.',
        },
        {
          kind: 'greek',
          id: 'greek-sterizo',
          title: 'Stērizo — &ldquo;Establish&rdquo; or &ldquo;Make Firm&rdquo;',
          script: 'στηρίζω',
          translit: '<strong>stērizo</strong> · to establish; to make steady; to fix firmly in place',
          description:
            'From root meaning &ldquo;to stand.&rdquo; Not just to visit, but to stabilize. Faith under pressure tends to waver. Timothy&apos;s task is to make their faith immovable.',
        },
        {
          kind: 'carry',
          html:
            'When you sense someone&apos;s faith wavering—maybe someone facing illness, loss, doubt, or the slow erosion of daily pressure—do not simply pray from a distance. Go. Show up. Use your words to remind them of Christ and His steadiness. Be their Timothy. The fact that Paul could not bear to stay away teaches us that love for someone&apos;s soul is not passive.',
        },
        {
          kind: 'reflection',
          id: 'timothy-sent',
          prompt:
            'Whose faith needs someone to show up and strengthen it right now? What would it look like for you to be their Timothy?',
        },
      ],
    },

    /* ─── "Appointed Thereunto" ───────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 3:3–4',
      title: '&ldquo;We Are Appointed Thereunto&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              3,
              t('That no man should be moved by these afflictions: for yourselves know that we are '),
              hy('appointed thereunto', 'c-appointed'),
              t('.'),
            ),
            verse(
              4,
              t('For verily, when we were with you, we told you before that we should suffer '),
              hg('tribulation', 'c-tribulation'),
              t('; even as it came to pass, and ye know.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-appointed',
          html:
            '&ldquo;Appointed thereunto.&rdquo;[res:intertextual-1thess-3-suffering] Not by accident, and not as punishment. The word carries the sense of a divine appointment, a calling. Believers are &ldquo;appointed&rdquo; to suffer tribulation the way a king is appointed to a throne or a priest to the sanctuary. It sounds strange, but Scripture teaches it repeatedly: suffering is not outside God&apos;s plan for His people—it is part of it. This does not make suffering pleasant, but it makes it meaningful.',
        },
        {
          kind: 'commentary',
          id: 'c-tribulation',
          html:
            'The word for &ldquo;tribulation&rdquo; originally meant &ldquo;pressing; compression.&rdquo; Afflictions press against the believer from outside, testing whether the faith inside will hold or crack. Paul had warned them in advance. No Christian should be surprised by persecution; it is a mark of membership in Christ&apos;s body, not a sign of abandonment.',
        },
        {
          kind: 'commentary',
          id: 'c-when-we-told',
          html:
            '&ldquo;When we were with you, we told you before.&rdquo; Paul had prepared them. He did not give them a shallow gospel that promised comfort; he told them the truth. A pastor who does not warn the flock about coming trials is not faithfully preparing them. Truth spoken beforehand becomes a anchor when the storm arrives.',
        },
        {
          kind: 'carry',
          html:
            'You were not appointed to ease or to success. You were appointed to stand in faith when the pressure comes. That means the afflictions you face now are not accidents in the story—they are the story. They are where your faith grows deep, where you learn God&apos;s faithfulness not in theory but in reality, where you become unshakeable. The tribulation does not mean you were wrong to believe. It means you were right to believe.',
        },
        {
          kind: 'reflection',
          id: 'appointed-reflect',
          prompt:
            'What affliction has pressed against you? Did you face it as accident, as punishment, or as appointment? What would change if you saw it as the latter?',
        },
      ],
    },

    /* ─── "Now We Live, If Ye Stand Fast" ──────────────────────────────────── */
    {
      ref: '1 Thessalonians 3:6–8',
      title: '&ldquo;Now We Live, If Ye Stand Fast&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              6,
              t('But now when Timotheus came from you unto us, and brought us good tidings of your faith and love, and that ye have good remembrance of us always, desiring greatly to see us, as we also to see you:'),
            ),
            verse(
              7,
              t('Therefore, brethren, we were comforted over you in all our affliction and distress by your faith:'),
            ),
            verse(
              8,
              t('For '),
              hg('now we live', 'c-now-live'),
              t(', if ye '),
              hp('stand fast in the Lord', 'christ-stand-fast'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-now-live',
          html:
            '&ldquo;Now we live.&rdquo;[res:sefaria-pastoral-joy-community] Not merely &ldquo;we are relieved&rdquo; or &ldquo;we are glad,&rdquo; but &ldquo;we live.&rdquo; Their steadfastness is Paul&apos;s life. He had been in a state of anxiety so deep it had nearly stopped his living. But word of their faith reverses everything. Their victory is his. Their standing is his standing. The pastor and the flock are bound together.',
        },
        {
          kind: 'commentary',
          id: 'c-they-remember',
          html:
            '&ldquo;Ye have good remembrance of us always, desiring greatly to see us.&rdquo; The relationship is not one-way. The Thessalonians long to see Paul as much as he longs to see them. They hold him and his teaching in their hearts. The gospel creates bonds deeper than family—bonds of shared faith and affection.',
        },
        {
          kind: 'christ',
          id: 'christ-stand-fast',
          title: 'Christ Connection — Standing Fast in the Lord',
          html:
            'Their standing fast is &ldquo;in the Lord.&rdquo; Not in their own strength, not in their own determination, but in Him. Jesus Christ is the rock on which the church is built. &ldquo;Upon this rock I will build my church; and the gates of hell shall not prevail against it&rdquo; (Matt. 16:18). Every believer who stands fast is standing on Christ.',
        },
        {
          kind: 'carry',
          html:
            'Your faith is not only your own. It is a light to those who love you. When you stand fast, you give life to others—maybe to a parent who has been praying for you, a friend who needs to see that faith is real, a younger believer who is watching to see if you will flinch. Your steadfastness is their encouragement. Your falling would be their wound.',
        },
        {
          kind: 'reflection',
          id: 'stand-fast-reflect',
          prompt:
            'Whose life is bound up with your faithfulness? Who is waiting to see if you will stand fast? What do they need to know about Christ that your steadiness can teach them?',
        },
      ],
    },

    /* ─── "What Thanks Can We Render?" ────────────────────────────────────── */
    {
      ref: '1 Thessalonians 3:9–10',
      title: '&ldquo;What Thanks Can We Render?&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              9,
              t('For what '),
              hy('thanks', 'greek-charis'),
              t(' can we render to God again for you, for all the joy wherewith we joy for your sakes before our God;'),
            ),
            verse(
              10,
              t('Night and day praying exceedingly that we might see your face, and might perfect that which is lacking in your faith?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-what-thanks',
          html:
            '&ldquo;What thanks can we render?&rdquo;[res:intertextual-1thess-3-gratitude] Paul is overwhelmed. Language fails him. How do you adequately thank God for such a gift—the steadfastness of people you love in the faith? He settles for saying: nothing. No thanks is sufficient. But we will try anyway.',
        },
        {
          kind: 'greek',
          id: 'greek-charis',
          title: 'Charis — &ldquo;Grace&rdquo; or &ldquo;Thanks&rdquo;',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace; favor; gratitude; thanks',
          description:
            'The same word for both &ldquo;grace&rdquo; (God&apos;s unmerited favor) and &ldquo;thanks&rdquo; (our response to grace). To render thanks is to acknowledge that we have received what we do not deserve.',
        },
        {
          kind: 'commentary',
          id: 'c-night-and-day',
          html:
            '&ldquo;Night and day praying exceedingly.&rdquo; This is not occasional prayer, slipped in between other tasks. This is a lifestyle of intercession. Paul is living in a state of constant, urgent prayer for them. The constancy shows the deepness of the pastoral heart—he cannot stop.',
        },
        {
          kind: 'commentary',
          id: 'c-perfect-faith',
          html:
            '&ldquo;Perfect that which is lacking in your faith.&rdquo; Their faith is not deficient in quality; it is incomplete in development. It is like a stone not yet fully shaped, edges still rough, the full form not yet apparent. Paul prays that God would keep shaping them, finishing the work He has begun.',
        },
        {
          kind: 'carry',
          html:
            'Is there someone in your life whose faithfulness amazes you? Do not let the moment pass. Tell them. Better yet, pray for them. Pray night and day, not just in a moment of sentiment, but as a living habit. Pray that God would bring them to completion, that He would perfect what is lacking. Your intercession is a form of deep love.',
        },
        {
          kind: 'reflection',
          id: 'render-thanks',
          prompt:
            'For whom are you so grateful that you run out of words? When was the last time you told them? When was the last time you prayed for them night and day?',
        },
      ],
    },

    /* ─── "Night and Day Praying" ────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 3:11–12',
      title: '&ldquo;Night and Day Praying&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              11,
              t('Now God himself and our Father, and our Lord Jesus Christ, '),
              hp('direct our way unto you', 'c-direct-way'),
              t('.'),
            ),
            verse(
              12,
              t('And the Lord make you to '),
              hg('increase and abound in love', 'c-increase-abound'),
              t(' one toward another, and toward all men, even as we do toward you:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-direct-way',
          html:
            '&ldquo;Direct our way unto you.&rdquo; Paul is asking that the obstacles preventing his visit—the same opposition that scattered him from Thessalonica—would be removed. He wants to see their faces, to be with them again. He is asking God to make the way possible. Prayer is not resignation to circumstances; it is an appeal to God to move.',
        },
        {
          kind: 'commentary',
          id: 'c-increase-abound',
          html:
            '&ldquo;Increase and abound in love.&rdquo; Love is not static or inert. It is a living thing that grows. Paul prays that their love would multiply—not only toward each other in the church, but toward everyone they meet. Love is the fruit of faith deepening. As the Thessalonians come to know Christ more fully, their love will naturally overflow.',
        },
        {
          kind: 'christ',
          id: 'christ-triple-prayer',
          title: 'Christ Connection — The Triple Prayer',
          html:
            'The prayer names three agents: &ldquo;God himself and our Father, and our Lord Jesus Christ.&rdquo; The Father and the Son work together to direct Paul&apos;s way and to grow the Thessalonians in love. Salvation is not a one-time event; it is an ongoing work of the Godhead in us. We are being established, perfected, and made to abound in love by the God who loved us first.',
        },
        {
          kind: 'carry',
          html:
            'You cannot manufacture love. You cannot will yourself to increase in it. But you can pray. Ask God to grow your love—for people in your church, for your family, even for people you have not yet met. Ask Him to remove obstacles in your path, to direct your way toward the people He loves. Then watch how He answers.',
        },
        {
          kind: 'reflection',
          id: 'increase-abound',
          prompt:
            'Where does your love feel small or measured? Whose love reaches beyond what your love can reach? Ask God to make you increase and abound in love like theirs.',
        },
      ],
    },

    /* ─── The Triple Prayer — Establish Hearts Unblameable ──────────────── */
    {
      ref: '1 Thessalonians 3:13',
      title: 'The Triple Prayer — Establish Hearts Unblameable',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              13,
              t('To the end he may '),
              hy('stablish your hearts', 'greek-sterizo-hearts'),
              t(' unblameable in holiness before God, even our Father, at the coming of our Lord Jesus Christ with all his saints.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-establish-hearts',
          html:
            '&ldquo;Stablish your hearts unblameable in holiness.&rdquo; The word for holiness in Greek is <em>hagiosyne</em>—separated from sin, devoted to God, set apart for His purposes. Paul is praying that their entire inner life—their hearts—would be so thoroughly established in this holiness that they would be irreproachable, unblameable, unable to be convicted of wrongdoing.',
        },
        {
          kind: 'greek',
          id: 'greek-sterizo-hearts',
          title: 'Stērizo — &ldquo;Establish&rdquo; (Heart Version)',
          script: 'στηρίζω',
          translit: '<strong>stērizo</strong> · to stabilize; to make immovable; to confirm',
          description:
            'Same word as in verse 2 (&ldquo;establish you&rdquo;), but now applied to the heart itself. Not just establishing the church, but establishing the inner life. A heart that is stērizo is rooted so deeply in Christ it cannot be shaken.',
        },
        {
          kind: 'commentary',
          id: 'c-at-his-coming',
          html:
            '&ldquo;At the coming of our Lord Jesus Christ with all his saints.&rdquo; The final parousia—Christ&apos;s return in glory—is the moment for which all this establishment is being done. We are being made holy and unblameable in preparation for that day, when He will present us to the Father and we will stand before Him with confidence. Every prayer for holiness now is a prayer that moves us toward that moment.',
        },
        {
          kind: 'christ',
          id: 'christ-parousia',
          title: 'Christ Connection — The Parousia: Christ&apos;s Return',
          html:
            'The Greek <em>parousia</em> means &ldquo;coming&rdquo; or &ldquo;presence&rdquo; and refers to Christ&apos;s return in glory at the end of time. &ldquo;For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God&rdquo; (1 Thess. 4:16). Paul orients all of his pastoral work—all his praying, teaching, and strengthening—toward this moment. Our present holiness is practice for eternity. We are being established not just for today but for the day when we meet Him face to face.',
        },
        {
          kind: 'carry',
          html:
            'You are being made holy not for this world alone but for the coming of Christ. That means every act of obedience now is preparation. Every time you choose gentleness over anger, truth over a convenient lie, self-control over indulgence, you are being established in holiness—shaped for the day when you will stand before Him. When that day comes, you will not be ashamed. You will be unblameable.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'parousia-reflect',
          prompt:
            'What would it mean to live today as if Christ were coming tomorrow? What would you stop doing? What would you start?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'intertextual-1thess-3-suffering',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Suffering as Appointment',
      url: 'https://www.intertextual.bible/',
      description: 'Explores how the New Testament frames suffering not as accident or failure but as appointment—a meaningful part of discipleship and transformation.',
    },
    {
      id: 'sefaria-pastoral-joy-community',
      kind: 'study',
      source: 'Sefaria',
      label: 'Pastoral Joy and Community',
      url: 'https://www.sefaria.org/search?q=pastor%20joy%20people',
      description: 'The biblical vision of spiritual leadership where the pastor&apos;s own joy becomes inseparable from the faithfulness of those entrusted to their care.',
    },
    {
      id: 'intertextual-1thess-3-gratitude',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Overflow of Gratitude',
      url: 'https://www.intertextual.bible/',
      description: 'Traces how biblical thanksgiving is not merely polite acknowledgment but an overwhelming, language-failing response to God&apos;s goodness displayed through others.',
    },
  ],

};
