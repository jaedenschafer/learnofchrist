import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * James 1 — Faith Tested & Refined
 *
 * James opens with joy in trials, not because trials are good, but because they
 * refine faith into something real. Every good gift flows from the unchanging
 * Father of lights. The Christian is called to be a doer of the word, not a
 * hearer only—faith without works is dead. A life aligned with God&apos;s word
 * becomes a mirror, reflecting Christ back into a broken world.
 */
export const JAMES_1: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 1,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 19 },
  opener: {
    matchTitle: /Saint James the Just/i,
    caption: 'James 1',
  },
  intros: [
    'James writes to believers scattered abroad, facing trials and opposition. His letter is pastoral and direct—he speaks not as a theorist but as one who knows the life of a faith community under pressure. Where does real joy come from when circumstances threaten? Not from the absence of hardship, but from the confidence that God is refining something precious in the fire.',
    'He turns next to the source of all good: the Father of lights, unchanging, utterly generous. This God does not tempt us toward evil. Instead, He invites us to ask for wisdom, to receive His word with gladness, and to become not just hearers but doers—people whose faith shows up in how they treat the broken. Pure religion, James will say, is visiting the fatherless and widows and keeping yourself unstained. That is faith made visible.',
  ],

  sections: [
    /* ─── James 1:1–4 — Count It All Joy ────────────────────────────────── */
    {
      ref: 'James 1:1–4',
      title: 'Joy in Trials',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1, t('James, a servant of God and of the Lord Jesus Christ, to the twelve tribes which are scattered abroad, greeting.')),
            verse(2, t('My brethren, '), hp('count it all joy', 'jam1-chara'), t(' when ye '), hp('fall into divers temptations', 'jam1-peirasmos'), t(';')),
            verse(3, t('Knowing this, that the '), hy('trying of your faith', 'jam1-dokimion'), t(' worketh patience.')),
            verse(4, t('But let patience have her perfect work, that ye may be perfect and entire, wanting nothing.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-chara',
          html:
            'Joy (<em>chara</em>) in James is not happiness in the circumstance itself. It is the deep satisfaction, the delight, that comes from knowing God is at work in you. When you face a trial and hold to faith anyway, something genuine is being forged. You know it. You can feel it. That knowledge itself becomes the occasion for joy—not the trial, but the God-work happening through it[res:sefaria-leviticus-love][res:perseus-pistis][res:intertextual-james-proverbs].',
        },
        {
          kind: 'greek',
          id: 'jam1-peirasmos',
          title: 'Peirasmos — Trial & Temptation',
          script: 'πειρασμός',
          translit: '<strong>peirasmos</strong> · trial, testing; also the enticement to do wrong',
          description:
            'Peirasmos carries a double meaning. It is a test that proves whether something is genuine (like testing gold in fire), but it also means the enticement to abandon faith and do evil. James uses it for both—the outer pressure (trials) and the inner pull (temptation). Either way, faith meets it.',
        },
        {
          kind: 'greek',
          id: 'jam1-dokimion',
          title: 'Dokimion — The Proof of Authenticity',
          script: 'δοκίμιον',
          translit: '<strong>dokimion</strong> · that which is tested and proven genuine; the test itself',
          description:
            'Dokimion is the crucible. Gold in a furnace yields dokimion—genuine gold. Your faith, pressed by trials, yields dokimion—genuine faith, no longer theoretical but proven real. The testing is not punishment; it is refinement.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-trials',
          title: 'Christ Connection — Tested & Perfected',
          html:
            'Jesus was tested in all things yet without sin. His trials did not break Him; they perfected His obedience. Hebrews says "though he were a Son, yet learned he obedience by the things which he suffered" (5:8). In the same way, your trials, when met with faith, perfect you. You are learning the mind of Christ—how to trust the Father even when the path is hard.',
        },
        {
          kind: 'carry',
          html:
            'James says patience must have "her perfect work"—the full expression of faith tested and matured. What trial faces you today? Before you wish it away, ask: What is God building in me through this? That shift—from "how do I escape" to "what am I becoming"—turns a trial into an education in faith.',
        },
        {
          kind: 'reflection',
          id: 'jam1-joy-trials',
          prompt: 'Name one pressure in your life right now. Instead of praying it away first, pray to see what God might be perfecting through it.',
        },
      ],
    },

    /* ─── James 1:5–8 — Ask for Wisdom ────────────────────────────────────── */
    {
      ref: 'James 1:5–8',
      title: 'The Wisdom to Ask',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(5, t('If any of you lack wisdom, let him ask of God, that '), hp('giveth to all men liberally', 'jam1-didomi'), t(', and '), hy('upbraideth not', 'jam1-oneideuo'), t('; and it shall be given him.')),
            verse(6, t('But let him ask in faith, '), hp('nothing wavering', 'jam1-dipsuchos'), t('. For he that wavereth is like a wave of the sea driven with the wind and tossed.')),
            verse(7, t('For let not that man think that he shall receive any thing of the Lord.')),
            verse(8, t('A '), hy('double minded', 'jam1-dipsuchos-full'), t(' man is unstable in all his ways.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-didomi',
          html:
            'God gives liberally—not grudgingly, not with conditions, not with metering out His grace. The Christian who faces trials and lacks wisdom is invited to ask. And God will give. This is not a business transaction. It is the generosity of a Father who delights to answer those who ask.',
        },
        {
          kind: 'greek',
          id: 'jam1-oneideuo',
          title: 'Oneideuo — To Upbraid',
          script: 'ὀνειδίζω',
          translit: '<strong>oneideuo</strong> · to reproach; to shame; to find fault',
          description:
            'God does not upbraid you for asking. He will not make you feel small for admitting you lack wisdom. He will not say "I told you so." He receives the ask with an open hand. Every good teacher does this; God does this perfectly.',
        },
        {
          kind: 'greek',
          id: 'jam1-dipsuchos',
          title: 'Dipsuchos — Double-Minded',
          script: 'δίψυχος',
          translit: '<strong>dipsuchos</strong> · double-souled; divided in allegiance; wavering',
          description:
            'Dipsuchos literally means "two souls" or "two minds." It is the person asking God while doubting God will answer, asking while planning a backup, asking while hedge-betting on other sources. You cannot serve two masters. You cannot ask God and also ask yourself.',
        },
        {
          kind: 'commentary',
          id: 'jam1-dipsuchos-full',
          html:
            'The double-minded person is unstable in all his ways. This is not a small character flaw—it is a fracture. You cannot advance in faith if half of you is allied with faith and the other half is allied with self-protection. Wisdom comes to those who ask believing.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-wisdom',
          title: 'Christ Connection — The Wisdom of God',
          html:
            'Paul calls Jesus "Christ the power of God, and the wisdom of God" (1 Cor. 1:24). To ask God for wisdom is, in the deepest sense, to ask to think with the mind of Christ. When you find yourself wavering, recall that you are not asking a distant God—you are asking the One who became human, who walked the same trials you walk, who knows what it is to choose faith when faithlessness seems safer.',
        },
        {
          kind: 'carry',
          html:
            'What are you wavering about right now? What decision are you making with two minds, hedge-betting, asking God while not really trusting God? Bring that whole thing before Him. Ask for wisdom. Ask believing. Then step forward with both feet.',
        },
        {
          kind: 'reflection',
          id: 'jam1-wisdom-asking',
          prompt: 'Where are you double-minded this week? Ask God for wisdom with your whole heart—no backup plan.',
        },
      ],
    },

    /* ─── James 1:9–15 — The Source of Temptation ────────────────────────── */
    {
      ref: 'James 1:9–15',
      title: 'Where Temptation Comes From',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(12, t('Blessed is the man that endureth temptation: for when he is tried, he shall receive '), hp('the crown of life', 'jam1-crown'), t(', which the Lord hath promised to them that love him.')),
            verse(13, t('Let no man say when he is tempted, '), hp('I am tempted of God', 'jam1-gods-tempt'), t(': for God cannot be tempted with evil, neither '), hy('tempteth he any man', 'jam1-apeirastos'), t(':')),
            verse(14, t('But every man is tempted, when he is '), hy('drawn away of his own lust', 'jam1-epithymia'), t(', and enticed.')),
            verse(15, t('Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth forth death.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-crown',
          html:
            'The crown of life is the full reward of faith. Not a crown of gold or status, but the victor&apos;s crown—the sign that you have finished the race, kept the faith, endured the testing. And it is promised to those who love Him. Not to the smartest, the strongest, the most famous—to those who love Him.',
        },
        {
          kind: 'commentary',
          id: 'jam1-gods-tempt',
          html:
            'James is making a fierce statement: God does not tempt you toward evil. Period. If you are being pulled toward what is destructive, dishonest, or self-serving, that pull does not come from God. It comes from something else—your own desires, the world&apos;s values, the enemy&apos;s voice. But never from God.',
        },
        {
          kind: 'greek',
          id: 'jam1-apeirastos',
          title: 'Apeirastos — Untempable',
          script: 'ἀπείραστος',
          translit: '<strong>apeirastos</strong> · not able to be tempted; incapable of experiencing the pull toward evil',
          description:
            'God is apeirastos—absolutely incapable of being drawn toward evil, and therefore incapable of enticing others toward it. His nature is good. His will is toward good. When you are tempted toward what is harmful, you know it is not God&apos;s voice.',
        },
        {
          kind: 'greek',
          id: 'jam1-epithymia',
          title: 'Epithymia — Desire & Lust',
          script: 'ἐπιθυμία',
          translit: '<strong>epithymia</strong> · desire, craving; often for what is forbidden or destructive',
          description:
            'Epithymia is not wrong in itself—you can have epithymia for good things. But when it becomes the pull that overrides your commitments, your values, your faith, it becomes the hook that draws you away. James traces the line: desire conceived becomes sin; sin finished becomes death.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-tempted',
          title: 'Christ Connection — Tempted Yet Without Sin',
          html:
            'Jesus "was in all points tempted like as we are, yet without sin" (Heb. 4:15). He felt the pull of desire—hunger, the need for acclaim, the way of the cross that led to suffering. But He was never drawn away by it. Instead, He used the same weapons you can use: the word of God, prayer, the remembrance of the Father&apos;s will. He endured temptation. He can help you endure too.',
        },
        {
          kind: 'carry',
          html:
            'If you find yourself being drawn into something you know is wrong, stop and ask: Where is this pull coming from? Is it coming from God? James says no. God does not work that way. So if you&apos;re being enticed, name it. It is not God&apos;s work; it is the work of your own desire. That means you have power over it—not by willpower alone, but by standing alongside Jesus, who has already won.',
        },
        {
          kind: 'reflection',
          id: 'jam1-temptation-source',
          prompt: 'What temptation keeps pulling at you? Can you trace it back to your own desire rather than blaming God or circumstances?',
        },
      ],
    },

    /* ─── James 1:16–18 — Every Good Gift ────────────────────────────────── */
    {
      ref: 'James 1:16–18',
      title: 'The Father of Lights',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(16, t('Do not err, my beloved brethren.')),
            verse(17, t('Every good gift and every '), hp('perfect gift is from above', 'jam1-paterfamilias'), t(', and cometh down from '), hy('the Father of lights', 'jam1-paterfamilias-full'), t(', with whom is '), hg('no variableness, neither shadow of turning', 'jam1-parallax'), t('.')),
            verse(18, t('Of his own will begat he us with the word of truth, that we should be a kind of firstfruits of his creatures.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-paterfamilias',
          html:
            'Every good gift—wisdom, strength, courage, love, peace, joy—comes from above. Not from your own effort, not from the world, not from the enemy. From the Father. The gifts are named "perfect" because they contain no flaw, no hidden poison, no double agenda. They are purely good.',
        },
        {
          kind: 'greek',
          id: 'jam1-paterfamilias-full',
          title: 'The Father of Lights',
          script: 'ὁ Πατὴρ τῶν φώτων',
          translit: '<strong>Pater ton photon</strong> · the Father of lights',
          description:
            'God is not a distant judge or an impersonal force. He is the Father of lights—the source and sustainer of all illumination, all truth, all goodness, all life. Every light in creation is His work. And He is your Father.',
        },
        {
          kind: 'commentary',
          id: 'jam1-parallax',
          html:
            'With God there is "no variableness, neither shadow of turning." The Greek word for variableness (<em>parallage</em>) refers to a shift or change. The sun appears to shift position in the sky (the source of the word "parallax"). With God, no such shift. He does not change moods. He does not turn His face away. He is not moody, unstable, or unreliable. He is constant light.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-unchanging',
          title: 'Christ Connection — Yesterday, Today, Forever',
          html:
            'Hebrews announces "Jesus Christ the same yesterday, and to day, and for ever" (13:8). The unchanging nature of God the Father is the same unchanging character of Christ. When trials come, when you are tempted, when you doubt whether God is good—remember: Jesus is the same yesterday as He is today. The love that healed and forgave in Galilee is the same love at work in your life now.',
        },
        {
          kind: 'carry',
          html:
            'If you find yourself thinking God has changed toward you—that He was generous once but not now, that He was patient but has run out—stop. You are listening to the voice of lies. God does not shift or turn. Every good gift you have ever received came from this unchanging light. That light is still shining.',
        },
        {
          kind: 'reflection',
          id: 'jam1-father-lights',
          prompt: 'What good gift in your life comes from the Father of lights? Hold it for a moment and let gratitude settle in.',
        },
      ],
    },

    /* ─── James 1:19–21 — Quick to Hear, Slow to Speak ──────────────────── */
    {
      ref: 'James 1:19–21',
      title: 'The Practice of Listening',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(19, t('Wherefore, my beloved brethren, let every man be '), hy('swift to hear', 'jam1-tachus'), t(', '), hg('slow to speak', 'jam1-bradus'), t(', '), hp('slow to wrath', 'jam1-orge'), t(':')),
            verse(20, t('For the wrath of man worketh not the righteousness of God.')),
            verse(21, t('Wherefore lay apart all filthiness and superfluity of naughtiness, and receive with meekness '), hp('the engrafted word', 'jam1-emphuton'), t(', which is able to save your souls.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-tachus',
          html:
            'Swift to hear. Not swift to speak, not swift to judge, not swift to defend—swift to listen. This is the posture of a learner, of someone who recognizes the trial as a teacher. When you are under pressure, do you rush to explain yourself, or do you wait to listen—to God, to the person before you, to your own deepest wisdom?',
        },
        {
          kind: 'greek',
          id: 'jam1-bradus',
          title: 'Bradys — Slow',
          script: 'βραδύς',
          translit: '<strong>bradys</strong> · slow, unhurried; opposite of swift',
          description:
            'Bradys appears in "bradycardic"—a slow heartbeat. James is prescribing the opposite of a quick, reactive life. Slow to speak. This is the rhythm of wisdom—listening first, speaking second, and only when you have something worth saying.',
        },
        {
          kind: 'greek',
          id: 'jam1-orge',
          title: 'Orge — Wrath & Anger',
          script: 'ὀργή',
          translit: '<strong>orge</strong> · anger, wrath; the strong emotion that rises when you feel threatened or wronged',
          description:
            'Orge is not sin in itself—even God&apos;s wrath is orge. But the wrath of man, James says, does not work the righteousness of God. Your anger, however justified, however righteous it feels, often produces the opposite of what God would do. Slow to wrath means: pause before you react in anger.',
        },
        {
          kind: 'commentary',
          id: 'jam1-emphuton',
          html:
            'The engrafted word—the word that is planted in you, rooted in you, growing from within. Not a word you hear and forget, not an idea you entertain, but the Word that is received with meekness and allowed to grow into your very being. That word has the power to save your soul.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-meekness',
          title: 'Christ Connection — The Meekness of Jesus',
          html:
            'Jesus says of Himself: "I am meek and lowly in heart" (Mt. 11:29). He does not defend Himself before His accusers. He does not argue. He receives the judgment of God with meekness and lets the word of truth—His own sacrifice, His own resurrection—speak. This is the posture James calls you to: not passivity, but the strength of one who is so sure of God&apos;s work that he does not need to fight for his own vindication.',
        },
        {
          kind: 'carry',
          html:
            'Practice this week: When you are triggered—when someone says something that stings, when circumstances provoke you—pause. Be swift to hear (the other person, your own reaction, God&apos;s voice). Be slow to speak. Be slow to wrath. Then receive the word that comes to you with meekness. Let it grow in you.',
        },
        {
          kind: 'reflection',
          id: 'jam1-hear-speak',
          prompt: 'What would it look like if you were swift to hear and slow to speak in one relationship this week?',
        },
      ],
    },

    /* ─── James 1:22–27 — Doers, Not Hearers Only ────────────────────────── */
    {
      ref: 'James 1:22–27',
      title: 'Faith Made Visible',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(22, t('But '), hp('be ye doers of the word', 'jam1-poietes'), t(', and '), hg('not hearers only', 'jam1-akouo'), t(', deceiving your own selves.')),
            verse(23, t('For if any be a hearer of the word, and '), hy('not a doer', 'jam1-prasso'), t(', he is like unto a man beholding his natural face in a '), hg('glass', 'jam1-esoptron'), t(':')),
            verse(24, t('For he beholdeth himself, and goeth his way, and straightway forgetteth what manner of man he was.')),
            verse(25, t('But '), hp('whoso looketh into the perfect law of liberty', 'jam1-law-liberty'), t(', and continueth therein, this man shall be blessed in his deed.')),
            verse(26, t('If any man among you seem to be religious, and '), hy('bridleth not his tongue', 'jam1-chalinago'), t(', but deceiveth his own heart, this man&apos;s religion is vain.')),
            verse(27, t('Pure religion and undefiled before God and the Father is this, To '), hp('visit the fatherless and widows in their affliction', 'jam1-episkeptomai'), t(', and to keep himself unspotted from the world.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-poietes',
          html:
            'A doer (<em>poietes</em>) is one who practices, who acts, who lets the word translate into life. Not tomorrow, not when circumstances are easier, but now. The word tells you to love your enemy; you begin to practice it. The word calls you to courage; you step into fear anyway. Faith without works is not faith—it is the idea of faith, the shadow of faith, faith that has been heard but not received.',
        },
        {
          kind: 'greek',
          id: 'jam1-akouo',
          title: 'Akouo — To Hear',
          script: 'ἀκούω',
          translit: '<strong>akouo</strong> · to hear, to listen, to perceive by hearing',
          description:
            'Hearing alone is not enough. Many hear the word—in church, in prayer, in the hearts of other believers—and hear it truly. But unless the hearing leads to doing, it is incomplete. The word is not meant to be contemplated; it is meant to be lived.',
        },
        {
          kind: 'greek',
          id: 'jam1-esoptron',
          title: 'Esoptron — Mirror',
          script: 'ἔσοπτρον',
          translit: '<strong>esoptron</strong> · a mirror; that which shows you your own reflection',
          description:
            'Scripture is a mirror. When you read it, you see yourself—your face reflected. You see your sins, your weaknesses, your potential. But if you walk away without doing anything with what you saw, you have forgotten what manner of person you were. The mirror shows the truth; only action transforms it.',
        },
        {
          kind: 'commentary',
          id: 'jam1-prasso',
          html:
            'The difference between a hearer and a doer is the difference between knowing the truth and living the truth. You know you should be patient; the doer practices patience. You know God calls you to generosity; the doer gives. The word is not an end in itself; it is an invitation into a different way of being.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-law-liberty',
          title: 'Christ Connection — The Perfect Law of Liberty',
          html:
            'The "perfect law of liberty" is the law of Christ—the law of love that frees. Jesus said, "If ye love me, keep my commandments" (Jn. 14:15). The law is not a burden that enslaves; it is a way of living that releases you from the grip of self, fear, and sin. "Ye shall know the truth, and the truth shall make you free" (Jn. 8:32). That law is Christ&apos;s law. That freedom is the freedom He died to give you.',
        },
        {
          kind: 'commentary',
          id: 'jam1-law-liberty',
          html:
            'The law of liberty is paradoxical. Law and liberty seem opposed—one constrains, one frees. But God&apos;s law is the law of love, and love is the only law that truly frees. When you give yourself wholly to the law of love—to God and to others—you are free from the tyranny of self, fear, and greed.',
        },
        {
          kind: 'greek',
          id: 'jam1-chalinago',
          title: 'Chalinago — To Bridle',
          script: 'χαλιναγωγέω',
          translit: '<strong>chalinago</strong> · to bridle, to control, to manage with restraint',
          description:
            'A bridle controls a horse&apos;s direction and speed. To bridle your tongue is to take hold of what you say, to let your words serve truth rather than pride, anger, or self-protection. Much of religion is hollow noise unless the tongue is controlled—unless your words align with your faith.',
        },
        {
          kind: 'commentary',
          id: 'jam1-episkeptomai',
          html:
            'To visit the fatherless and widows is not sentimental charity. It is the work of God incarnate. Jesus came to the broken, the abandoned, the outcast. Pure religion—faith that is actual, authentic, undefiled—shows up at the bedside of the sick, the home of the grieving widow, the life of the child with no one to advocate for them. This is not an add-on to faith. It is the heart of it.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-least-these',
          title: 'Christ Connection — As You Have Done to the Least',
          html:
            'In Matthew 25, Jesus separates the righteous from the unrighteous based entirely on how they treated "the least of these"—the hungry, the stranger, the naked, the sick, the prisoner. "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me" (Mt. 25:40). When you visit the fatherless and the widow, you are visiting Christ. That is why pure religion shows up there.',
        },
        {
          kind: 'carry',
          html:
            'The closing word is clear: faith that does not change how you act, especially toward the broken and powerless, is vain religion. It is an echo without substance. But faith that translates into action—swift to hear, slow to speak, quick to help—becomes a life that mirrors Christ back into the world. That is the faith that saves.',
        },
        {
          kind: 'reflection',
          id: 'jam1-doers',
          prompt: 'Who is the "fatherless" or "widow" in your circle—the one who needs someone to show up? How will you be a doer this week?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Count it all joy when ye fall into divers temptations, knowing this, that the trying of your faith worketh patience. Every good gift and every perfect gift is from above. Be ye doers of the word, and not hearers only.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-love',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 19:18 — Thou Shalt Love Thy Neighbor',
      url: 'https://www.sefaria.org/Leviticus.19.18',
      description: 'The foundational commandment James quotes: to love your neighbor as yourself underlies all virtue.',
    },
    {
      id: 'perseus-pistis',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Greek Lexicon — Pistis (Faith)',
      url: 'https://www.perseus.tufts.edu/hopper/morph?l=pistis&la=greek',
      description: 'The Greek word for faith that persists throughout James — trust, belief, and steadfast conviction.',
    },
    {
      id: 'intertextual-james-proverbs',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'James 1:5 ↔ Proverbs 2:6 (Wisdom)',
      url: 'https://intertextual.bible/search?q=Proverbs+2+6+James+1+5',
      description: 'Side-by-side comparison showing how James echoes the OT call to seek wisdom from God.',
    },
  ],

  hasHebrew: false,
};
