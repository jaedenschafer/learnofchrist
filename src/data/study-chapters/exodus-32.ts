import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 32 — the golden calf.
 *
 * While Moses is on the mountain receiving the law, the people demand gods
 * to go before them. Aaron makes a calf of gold. Idolatry spreads; God&apos;s
 * anger burns. Moses descends, sees the dancing and the calf, breaks the
 * tablets in anger. The Levites slay 3000. But the chapter doesn&apos;t end in
 * judgment. It ends with Moses&apos;s intercession on the mountain: &ldquo;blot
 * me, I pray thee, out of thy book&rdquo; — an offer of substitutionary love
 * that echoes through the rest of scripture.
 */
export const EXODUS_32: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 32,

  estimatedMinutes: { beginner: 10, intermediate: 15, deep: 19 },
  intros: [
    'Exodus 32 opens with Moses on a mountain — forty days, receiving the law written by God&apos;s finger on tablets of stone. Below, the people are restless. They have been set free from Egypt, but freedom without a visible God feels too strange, too much. So they ask Aaron for gods they can see and touch. And Aaron, the high priest, gives them what they ask for.',
    'What unfolds is Israel&apos;s first confrontation with idolatry, and God&apos;s first full display of anger against His own people. Yet even inside the judgment, God makes room for intercession — Moses steps between the people and the curse, offering himself as a ransom. It is the Old Testament&apos;s starkest image of substitutionary love, and Paul will echo it centuries later: &ldquo;I could wish that myself were accursed from Christ for my brethren.&rdquo;',
  ],

  bottomShare: {
    label: 'Share Exodus 32',
    quote:
      'While Moses receives the law, Israel demands gods of gold. Aaron makes a calf; the people dance and worship. Moses comes down, breaks the tablets, and intercedes: &ldquo;blot me out of thy book.&rdquo; His substitutionary love prefigures the Cross.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 32 · Study Guide',
  },

  resources: [
    {
      id: 'golden-calf',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Golden Calf Incident',
      url: 'https://www.bibleodyssey.org/dictionary/golden-calf/',
      description: 'Study of apostasy and significance.',
    },
    {
      id: 'apis-calf',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'Apis Bull & Calf Worship',
      url: 'https://www.britishmuseum.org/collection/',
      description: 'Egyptian bull cult and Israelite syncretism.',
    },
  ],

  sections: [
    /* ─── Exodus 32:1–6 — The Making of the Calf ───────────────────────── */
    {
      ref: 'Exodus 32:1–6',
      title: 'The People Demand Gods',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 1,
              spans: [
                t('And when the people saw that Moses '),
                hg('delayed to come down out of the mount', 'c-delayed'),
                t(', the people gathered themselves together unto Aaron, and said unto him, '),
                hy('Up, make us gods which shall go before us', 'hebrew-elohim'),
                t('; for as for this Moses, the man that brought us up out of the land of Egypt, we know not what is become of him.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Aaron said unto them, Break off the golden earrings which are in the ears of your wives, of your sons, and of your daughters, and bring them unto me.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And all the people brake off the golden earrings which were in their ears, and brought them unto Aaron.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he received them at their hand, and '),
                hg('fashioned it with a graving tool, after he had made it a molten calf', 'c-calf-made'),
                t(': and they said, These be thy gods, O Israel, which brought thee up out of the land of Egypt.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And when Aaron saw it, '),
                hg('he built an altar before it', 'c-altar'),
                t('; and Aaron made proclamation, and said, To morrow is a feast to the LORD.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And they rose up early on the morrow, and offered burnt offerings, and brought peace offerings; and the people sat down to eat and to drink, and rose up to '),
                hy('play', 'hebrew-tsahak'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-elohim',
          title: 'Elohim — &ldquo;gods&rdquo;',
          script: 'אֱלֹהִים',
          translit: '<strong>elohim</strong> · gods; God (plural form, singular meaning)',
          description:
            'The word for God is plural — a form that scholars have debated for centuries. But here, used for the calf, it is unmistakably plural: gods. The people want not the one God, but gods they can see, touch, and direct. The visible always tempts us away from the invisible.',
        },
        {
          kind: 'commentary',
          id: 'c-delayed',
          html:
            'Moses isn&apos;t late; he is simply not back yet. Forty days is what God said it would take, and God keeps His word. But the people interpret delay as abandonment. The moment a visible guide disappears, fear rushes in — and the first thing fear does is make something to replace what it lost. Notice the speed: without Moses, they don&apos;t wait, they don&apos;t pray, they demand. What fills the absence of faith is almost always noise and urgency[res:golden-calf].',
        },
        {
          kind: 'commentary',
          id: 'c-calf-made',
          html:
            'Aaron doesn&apos;t refuse. He collects the gold, fashions it, and makes a calf. Later he will tell Moses: &ldquo;I cast it into the fire, and there came out this calf&rdquo; (v. 24) — a stunning evasion. The calf just <em>happened</em> to come out; he had nothing to do with it. It is one of scripture&apos;s most graceful moments of observing blame-shifting without moralizing. The high priest, at the moment of Israel&apos;s first public sin, is already reaching for a story that makes him passive. We do the same. Addictions just happen. Words we regret just slip out. The choices we make keep happening to us[res:apis-calf].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsahak',
          title: 'Tsahak — &ldquo;to play&rdquo;',
          script: 'צָחַק',
          translit: '<strong>tsahak</strong> · to laugh, to play, to make sport; from the same root as Isaac',
          description:
            'The same verb describes Isaac playing with Rebekah (Genesis 26:8) and children playing in the streets (Zechariah 8:5). Here it carries an edge — the people are not innocently playing but lost in ecstatic worship of a false god. What looks like joy in idolatry is always, at its heart, a kind of spiritual intoxication.',
        },
        {
          kind: 'commentary',
          id: 'c-altar',
          html:
            'Aaron doesn&apos;t try to stop them. He sees them worshiping the calf and simply builds an altar. Tomorrow, he announces, there will be a feast to the <em>LORD</em> — the same God Moses is on the mountain meeting with. Aaron is trying to have it both ways. The calf can coexist with true worship. The visible and the invisible can share a holy day. This is how idolatry usually arrives: not as an enemy to God, but as a helper. An aid to faith, not a replacement for it. The first sin of the Christian is not usually abandoning God outright; it is adding something to God, something we can control, something that makes faith more concrete.',
        },
        {
          kind: 'carry',
          html:
            'What golden calf are you quietly casting into the fire right now — the image of success, the perfect relationship, the amount of money that will finally be enough, the approval you are chasing? What would change if you let yourself name it as an idol instead of a solution? The calf can seem like worship. It feels like movement. But the moment you build an altar to it, you have done what Aaron did — you have made God share a throne he has never offered to share.',
        },
        {
          kind: 'reflection',
          id: 'exodus32-calf',
          prompt:
            'What good thing are you tempted to trust more than God right now? How has it started to feel sacred to you?',
        },
      ],
    },

    /* ─── Exodus 32:7–14 — God&apos;s Anger and Moses&apos;s Intercession ──────── */
    {
      ref: 'Exodus 32:7–14',
      title: 'God&apos;s Wrath and Moses&apos;s Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 7,
              spans: [
                t('And the LORD said unto Moses, Go, get thee down; for '),
                hg('thy people, which thou broughtest out of the land of Egypt, have corrupted themselves', 'c-corrupted'),
                t(':'),
              ],
            },
            {
              number: 8,
              spans: [
                t('They have turned aside quickly out of the way which I commanded them: they have made them a molten calf, and have worshipped it, and have sacrificed thereunto, and said, These be thy gods, O Israel, which have brought thee up out of the land of Egypt.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the LORD said unto Moses, '),
                hg('I have seen this people, and, behold, it is a stiffnecked people', 'c-stiffnecked'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Now therefore let me alone, that my wrath may wax hot against them, and that I may consume them: and I will make of thee a great nation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-corrupted',
          html:
            'God calls them <em>thy people</em> — not mine, but yours. Moses brought them out; they are his charge. The moment they fell into idolatry, the legal relationship shifted. But notice what God is doing with this phrase. He is giving Moses something to hold onto. If they are Moses&apos;s people, then Moses has standing to intercede for them. God is, in a strange way, making room for compassion by placing the responsibility.',
        },
        {
          kind: 'commentary',
          id: 'c-stiffnecked',
          html:
            'The Hebrew word describes a stubborn ox, refusing the yoke. It is God&apos;s diagnosis of Israel&apos;s problem — not weakness, but rebellion. A stiff neck is active resistance. And it makes what happens next even more stark: God says <em>let me alone</em> — step back, Moses. Let me do what a just God must do.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 11,
              spans: [
                t('And '),
                hp('Moses besought the LORD his God', 'c-intercession'),
                t(', and said, LORD, why doth thy wrath wax hot against thy people which thou hast brought forth out of the land of Egypt with great power, and with a mighty hand?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Wherefore should the Egyptians speak, and say, For mischief did he bring them out, to slay them in the mountains, and to consume them from the face of the earth? Turn from thy fierce wrath, and repent of this evil against thy people.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Remember Abraham, Isaac, and Israel, thy servants, to whom thou swarest by thine own self, and saidst unto them, I will multiply your seed as the stars of heaven, and all this land that I have spoken of will I give unto your seed, and they shall inherit it for ever.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the LORD repented of the evil which he thought to do unto his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-intercession',
          html:
            'Moses doesn&apos;t try to defend Israel. He doesn&apos;t argue that they didn&apos;t really worship the calf. He stands between God and the people and asks for mercy on the basis of God&apos;s own character and promises. <em>Turn from thy fierce wrath, and repent of this evil.</em> The word &ldquo;repent&rdquo; means to turn, to change course. Moses is asking God to change His course — which is a stunning thing to ask, and God honors it. He <em>does</em> turn. The wrath is averted. Not because Israel deserved it, but because someone stood in the gap.',
        },
        {
          kind: 'christ',
          id: 'christ-intercession',
          title: 'Christ Connection — The Substitute&apos;s Love',
          html:
            'Moses&apos;s intercession is beautiful, but notice what it stops short of. He asks for mercy; he doesn&apos;t offer himself. Yet what he offers foreshadows something deeper. Paul, centuries later, echoes this prayer almost exactly: &ldquo;I could wish that myself were accursed from Christ for my brethren&rdquo; (Rom. 9:3). What Moses only <em>offered</em>, Christ actually <em>did</em>. He didn&apos;t just stand between God and sinners and pray. He became the curse for them (Gal. 3:13), took the wrath they deserved into His own body, and gave them the mercy they didn&apos;t earn. Intercession becomes incarnation. The gap is not just crossed; it is healed from the inside.',
        },
        {
          kind: 'carry',
          html:
            'When your worst self is exposed — the addiction, the affair, the theft, the words that can&apos;t be taken back — and you feel the weight of what you&apos;ve done, the story of the cross says: someone is standing in the gap for you. Not to excuse it, but to pay for it. The wrath you deserve is being turned away not because you&apos;re good but because someone who is good loved you enough to stand there.',
        },
        {
          kind: 'reflection',
          id: 'exodus32-intercession',
          prompt:
            'When have you felt someone stand up for you when you didn&apos;t deserve it? What would it mean to let Christ&apos;s intercession go deeper — not just prayers spoken for you, but His own self offered in your place?',
        },
      ],
    },

    /* ─── Exodus 32:15–20 — The Descent and the Broken Law ─────────────── */
    {
      ref: 'Exodus 32:15–20',
      title: 'The Tablets Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 15,
              spans: [
                t('And Moses turned, and went down from the mount, and the two tables of the testimony were in his hand: the tables were '),
                hg('written on both their sides', 'c-both-sides'),
                t('; on the one side and on the other were they written.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the tables were the work of God, and the writing was the writing of God, graven upon the tables.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And when Joshua heard the noise of the people as they shouted, he said unto Moses, There is a noise of war in the camp.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he said, It is not the voice of them that shout for mastery, nor the voice of them that cry for being overcome: but the noise of them that sing do I hear.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And it came to pass, as soon as he came nigh unto the camp, that he saw the calf, and the dancing: and '),
                hp('Moses&apos; anger waxed hot', 'c-moses-anger'),
                t(', and he cast the tables out of his hands, and '),
                hg('brake them beneath the mount', 'c-tablets-broken'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he took the calf which they had made, and burnt it in the fire, and ground it to powder, and strawed it upon the water, and made the children of Israel drink of it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-both-sides',
          html:
            'The tablets are written on both sides — a detail suggesting completeness, fullness, the whole law. God has held nothing back. And now, coming down with the full revelation in his hands, Moses sees the people worshiping an image instead of receiving what God wrote for them.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-anger',
          html:
            'Moses&apos;s anger is kindled, and he breaks the tablets. It is not a loss of control — it is a prophetic act. The law, offered to a people in active rebellion, is broken. They have already broken the covenant in their hearts; Moses is making their condition visible. Breaking what is written on stone is a way of saying: you have already torn apart what this means.',
        },
        {
          kind: 'commentary',
          id: 'c-tablets-broken',
          html:
            'The broken tablets foreshadow something deeper. Centuries later, Jeremiah will prophesy that God will write the law not on tablets of stone but on the hearts of His people — a covenant so different, so internal, that it cannot be broken by outward rebellion. And Jesus, the fulfillment of every word on those tablets, will have <em>His</em> body broken to establish that new covenant. The broken tablets are an Old Testament picture of the broken body of Christ — and the transformation that happens because one covenant fails is replaced by a better one, written not in stone but in blood.',
        },
        {
          kind: 'carry',
          html:
            'The moment you know you&apos;ve broken a law — spoken vows, made promises, told God you would do something and didn&apos;t — shame is quick to tell you the tablets are shattered forever. But the gospel says something different: the law, once broken, is not abandoned but fulfilled. The covenant fails so that a better covenant can begin. Your breaking is not the end of God&apos;s word to you; it is the beginning of His grace toward you.',
        },
        {
          kind: 'reflection',
          id: 'exodus32-broken',
          prompt:
            'Where have you broken a promise to yourself or to God? What would it look like to stop trying to fix the broken tablets and let them be replaced by something written on your heart instead?',
        },
      ],
    },

    /* ─── Exodus 32:21–29 — The Judgment ──────────────────────────────── */
    {
      ref: 'Exodus 32:21–29',
      title: 'The Levites&apos; Stand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 21,
              spans: [
                t('And Moses said unto Aaron, What did this people unto thee, that thou hast brought so great a sin upon them?'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Aaron said, Let not the anger of my lord wax hot: thou knowest the people, that they are set on mischief.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For they said unto me, Make us gods which shall go before us: for as for this Moses, the man that brought us up out of the land of Egypt, we know not what is become of him.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And I said unto them, Whosoever hath any gold, let them break it off. And they brought it unto me: '),
                hg('then I cast it into the fire, and there came out this calf', 'c-blame-shift'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And when Moses saw that the people were naked; (for Aaron had made them naked unto their shame among their enemies:)'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Then Moses stood in the gate of the camp, and said, Who is on the LORD&apos;s side? let him come unto me. And all the sons of Levi gathered themselves together unto him.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And he said unto them, Thus saith the LORD God of Israel, Put every man his sword by his side, and go in and out from gate to gate throughout the camp, and '),
                hg('slay every man his brother, and every man his companion, and every man his neighbour', 'c-slay'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the children of Levi did according to the word of Moses: and there fell of the people that day about three thousand men.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('For Moses had said, Consecrate yourselves to day to the LORD, even every man upon his son, and upon his brother; that he may bestow upon you a blessing this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blame-shift',
          html:
            'Aaron&apos;s answer is one of the most graceful moments of blame-shifting in scripture. He doesn&apos;t deny what happened. But <em>then I cast it into the fire, and there came out this calf</em> — passive magic. The calf simply materialized. He fashioned it and built an altar to it, but in his telling, he was just an observer of his own choices. It is how shame works in all of us: we narrate ourselves as passive, as victims of our own decisions, as people to whom things happen. Moses doesn&apos;t shame Aaron, doesn&apos;t mock him. But he also doesn&apos;t accept the story. The judgment that follows is God&apos;s response to the sin, not Moses&apos;s anger at Aaron.',
        },
        {
          kind: 'commentary',
          id: 'c-slay',
          html:
            'The command to slay comes as a call to covenant loyalty. <em>Who is on the LORD&apos;s side?</em> The Levites choose God over family, friend, and neighbor. It is one of the Bible&apos;s harshest moments — three thousand people slain — and yet it establishes the Levites as the priestly tribe, set apart for God&apos;s service. The judgment is real and terrible. But it is also the beginning of their calling.',
        },
        {
          kind: 'carry',
          html:
            'This is hard scripture. The judgment is extreme, and there is no softening it. But notice what happens because of it: the Levites become the priestly line. Sometimes the hardest thing faith asks of us is to turn from something beloved — a relationship, a path, a version of ourselves — and in that turning, we discover what we were actually made for. The breaking is real. So is the calling that waits on the other side of it.',
        },
        {
          kind: 'reflection',
          id: 'exodus32-loyalty',
          prompt:
            'What would it look like to choose God&apos;s side in a situation where choosing costs you something — a relationship, a comfort, a way of life you&apos;ve known?',
        },
      ],
    },

    /* ─── Exodus 32:30–35 — Moses&apos;s Final Intercession ──────────────── */
    {
      ref: 'Exodus 32:30–35',
      title: 'The Ransom Offered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 30,
              spans: [
                t('And it came to pass on the morrow, that Moses said unto the people, Ye have sinned a great sin: and now I will go up unto the LORD; peradventure I shall make an atonement for your sin.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Moses returned unto the LORD, and said, Oh, this people have sinned a great sin, and have made them gods of gold.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Yet now, if thou wilt forgive them; and if not, '),
                hp('blot me, I pray thee, out of thy book which thou hast written', 'christ-blotted'),
                t('.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And the LORD said unto Moses, Whosoever hath sinned against me, him will I blot out of my book.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Therefore now go, lead the people unto the place of which I have spoken unto thee: behold, mine Angel shall go before thee: nevertheless in the day when I '),
                hy('visit', 'hebrew-paqad'),
                t(', I will '),
                hy('visit their sin upon them', 'hebrew-paqad'),
                t('.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the LORD smote the people, because they made the calf, which Aaron made.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-paqad',
          title: 'Paqad — &ldquo;to visit&rdquo;',
          script: 'פָּקַד',
          translit: '<strong>paqad</strong> · to visit, to account for, to remember',
          description:
            'The word carries the weight of divine reckoning. God will visit — He will show up, call account, remember. Every sin will be accounted for. Yet in verse 34, God says to <em>go</em> — He does not revoke the call to lead the people. Moses is sent forward into his calling even though the sin is not forgotten.',
        },
        {
          kind: 'commentary',
          id: 'c-blot-out',
          html:
            'Moses offers himself as a substitute. <em>Blot me out of thy book.</em> He is not asking for forgiveness for himself; he is asking to be removed from the book of the living so that Israel might be spared. It is the Old Testament&apos;s clearest statement of substitutionary love. And God refuses it. The law is just: <em>whosoever hath sinned against me, him will I blot out.</em> Each person stands alone before God. Moses cannot die in Israel&apos;s place.',
        },
        {
          kind: 'christ',
          id: 'christ-blotted',
          title: 'Christ Connection — The One Who Was Blotted Out',
          html:
            'What Moses offered and God refused, Jesus actually accomplished. Paul echoes Moses&apos;s prayer and takes it further: &ldquo;I could wish that myself were accursed from Christ for my brethren, my kinsmen according to the flesh&rdquo; (Rom. 9:3). And then — unlike Moses — he does it. He becomes accursed (Gal. 3:13), takes the blotting out into His own body, dies so that others might have their names written permanently in the book of life (Rev. 3:5). Moses only offered; Christ <em>was</em> the offering. What the law demands — that each person account for themselves — is satisfied. But not by humanity. By God Himself, entering human flesh and doing what Moses wanted to do but couldn&apos;t.',
        },
        {
          kind: 'carry',
          html:
            'Shame tells you that your sin is too big, that God has written you out of His book, that you are too far gone. But the cross says something different: someone was written out for you. Not instead of consequences — there are real consequences, and God doesn&apos;t erase them. But your name is not the one blotted from the book of life. You get to walk forward into your calling, like Moses did, carrying the weight of what you&apos;ve done and what you&apos;ve been forgiven for.',
        },
        {
          kind: 'reflection',
          id: 'exodus32-ransom',
          prompt:
            'What sin do you feel has written you out of God&apos;s book? How does it change things to know that someone else has already been blotted in your place?',
        },
      ],
    },
  ],
};
