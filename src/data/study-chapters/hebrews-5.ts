import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Hebrews 5 — A High Priest After the Order of Melchisedec
 *
 * The author has established Christ as superior to angels, to Moses, to all earthly
 * authority. Now he addresses a central question: is Christ a legitimate High Priest?
 * Priesthood in Judaism descended from Aaron and was bound by the Law. Jesus was from
 * Judah, not Levi. He had no legal standing as a priest—until the author points to
 * Melchisedec. A priest forever, a king of righteousness, without genealogy. Jesus is
 * such a priest—not by human law but by divine oath. And His priesthood is rooted in
 * real human suffering, real learned obedience, real compassion for the weak.
 */
export const HEBREWS_5: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 5,

  intros: [
    'For Jewish believers, the priesthood was everything. It was the mechanism of atonement, the appointed mediator between God and people. To claim Jesus was the true High Priest was radical. The author could not point to Levitical lineage. So he pointed to something deeper—Psalm 110, which speaks of a priest after the order of Melchisedec. This figure predates the Law. This priest is eternal. This establishes Jesus&apos; priesthood on a foundation more ancient and enduring than Aaron&apos;s.',
    'But the passage also emphasizes Christ&apos;s humanity. He offered up prayers and supplications with strong crying and tears. He learned obedience through suffering. He was made perfect through what He suffered. This is not abstract priesthood. It is rooted in incarnate experience—flesh that wept, tears shed in the garden, obedience tested and proven.',
  ],

  opener: {
    matchTitle: /priest|melchisedec|high priest/i,
    matchArtist: /rembrandt|tissot|munkacsy/i,
    caption: 'The Priest Forever',
  },

  bottomShare: {
    quote: 'So also Christ glorified not himself to be made an high priest; but he that said unto him, Thou art my Son, to day have I begotten thee. As he saith also in another place, Thou art a priest for ever after the order of Melchisedec.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 5 · Study Guide',
  },

  sections: [
    /* ─── Hebrews 5:1–2 — Every High Priest Taken From Among Men ──────── */
    {
      ref: 'Hebrews 5:1–2',
      title: 'Every High Priest Taken From Among Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(1,
              t('For every high priest taken from among men is ordained for men in things pertaining to God, that he may offer both '),
              hg('gifts and sacrifices for sins', 'heb5-gifts-sacrifices'),
              t(':'),
            ),
            verse(2,
              hg('Who can have compassion on the ignorant', 'heb5-metriopathe'),
              t(', and on them that are out of the way; for that he himself also is '),
              hp('compassed with infirmity', 'heb5-infirmity'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-gifts-sacrifices',
          html:
            'The high priest is a human middleman. He stands between God and sinners. His job is to bring offerings—the blood that atones, the flesh that satisfies God&apos;s justice. Every priest in Israel served this role, repeating the same sacrifices year after year because they could never truly remove sin.',
        },
        {
          kind: 'greek',
          id: 'heb5-metriopathe',
          title: 'Metriopatheō — &ldquo;Have compassion&rdquo;',
          script: 'μετριοπαθέω',
          translit: '<strong>metriopathe&oacute;</strong> · to be able to sympathize, feel with moderation',
          description:
            'The high priest&apos;s compassion is not sentimental. It is measured, appropriate, rooted in his own weakness. He does not look down from a throne of perfect strength. He stands in the middle, understanding both God&apos;s holiness and human frailty because he shares that frailty himself.',
        },
        {
          kind: 'commentary',
          id: 'heb5-infirmity',
          html:
            'Every high priest is "compassed with infirmity"—surrounded by weakness. He gets sick. He gets tired. He struggles with temptation. He dies. He is weak by nature, and this weakness makes him fit for his job. A priest who cannot sympathize with suffering has no business representing the suffering.',
        },
        {
          kind: 'carry',
          html:
            'You have a High Priest who knows weakness from the inside. He was not spared the weight of flesh, the pull of temptation, the weight of sorrow. His compassion is not theoretical. He is compassed with infirmity. He gets you.',
        },
        {
          kind: 'reflection',
          id: 'heb5-compassion-weakness',
          prompt: 'In what weakness are you most ashamed to approach God? How does it change things to know your Priest meets you there?',
        },
      ],
    },

    /* ─── Hebrews 5:4 — No Man Taketh This Honour Unto Himself ────────── */
    {
      ref: 'Hebrews 5:4',
      title: 'No Man Taketh This Honour Unto Himself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(4,
              t('And no man taketh this honour unto himself, but he that is '),
              hp('called of God', 'heb5-called-of-god'),
              t(', as was Aaron.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-called-of-god',
          html:
            'Priesthood is not a career you choose. It is not a position you earn or campaign for. It is a calling. Aaron did not wake up and decide to be high priest. God chose him. This is the foundation of all legitimate priesthood—not ambition, not popularity, not earned credentials, but divine appointment.',
        },
        {
          kind: 'greek',
          id: 'heb5-klesis',
          title: 'Klesis — &ldquo;Called&rdquo;',
          script: 'κλῆσις',
          translit: '<strong>kl&ecirc;sis</strong> · a calling, an invitation, a divine summons',
          description:
            'The same word used for your own calling in Christ. You are not self-appointed to faith. You are called. Chosen. Summoned by God Himself. Just as a priest stands in his calling, you stand in yours.',
        },
        {
          kind: 'carry',
          html:
            'You did not choose to follow Christ. He chose you. You did not earn your way into His family. You were called. This calling is not fragile or conditional. It is not dependent on your performance or your feelings today. You are called.',
        },
        {
          kind: 'reflection',
          id: 'heb5-called-vocation',
          prompt: 'What does it change in your daily life to remember that you were called by God, not self-appointed? How does that reframe your work, your relationships, your next decision?',
        },
      ],
    },

    /* ─── Hebrews 5:5–6 — Christ Glorified Not Himself ────────────────── */
    {
      ref: 'Hebrews 5:5–6',
      title: 'Christ Glorified Not Himself to Be Made an High Priest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(5,
              t('So also Christ glorified not himself to be made an high priest; but he that said unto him, '),
              hp('Thou art my Son, to day have I begotten thee', 'heb5-begotten'),
              t('.'),
            ),
            verse(6,
              t('As he saith also in another place, '),
              hp('Thou art a priest for ever after the order of Melchisedec', 'heb5-melchisedec-forever'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-begotten',
          html:
            'The author quotes Psalm 2:7 and Psalm 110:4. Jesus did not seize priesthood. The Father exalted Him, appointed Him, declared Him Son and Priest. This is the pattern of Christ&apos;s whole life—He glorified not Himself. He did not cling to His rights. He emptied Himself. And because He did, the Father raised Him up and gave Him a name above every name.',
        },
        {
          kind: 'commentary',
          id: 'heb5-melchisedec-forever',
          html:
            'A priest forever after the order of Melchisedec—this is the claim that settles the question. Jesus&apos; priesthood does not end. It is not bound by mortal lifespan. He intercedes forever. Every priest before Him eventually died and was replaced. Not Jesus. He stands eternal, offering a final and perfect sacrifice that never grows old.',
        },
        {
          kind: 'christ',
          id: 'heb5-begotten',
          title: 'Christ Connection — Humility Before Exaltation',
          html:
            'Paul describes it in Philippians 2:6–9: Jesus, though in the form of God, emptied Himself, took the form of a servant, humbled Himself unto death. "Wherefore God also hath highly exalted him, and given him a name which is above every name." Christ&apos;s priesthood is built on the foundation of His refusal to seize or grasp. The Father did the exalting. The Son did the obedience.',
        },
        {
          kind: 'greek',
          id: 'heb5-doxa',
          title: 'Doxa — &ldquo;Glorified&rdquo;',
          script: 'δόξα',
          translit: '<strong>doxa</strong> · glory, honor, splendor; to be recognized, exalted',
          description:
            'Jesus did not grasp for recognition. He made Himself nothing. And in that emptiness, the Father filled Him with glory—not a glory Christ seized, but a glory the Father gave.',
        },
        {
          kind: 'artwork',
          matchTitle: /christ\s+in\s+glory|ascension|exaltation/i,
          caption: 'Hebrews 5:5–6 · The Exalted Priest',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that says grasp, climb, promote yourself. Christ teaches you otherwise. He teaches you that glory comes to the humble, that exaltation follows self-emptying, that the Father sees what you do in secret. You don&apos;t have to fight for your worth. You are already seen, already known, already loved.',
        },
        {
          kind: 'reflection',
          id: 'heb5-humility-exaltation',
          prompt: 'Where are you grasping for recognition or exaltation today? What would it look like to empty yourself instead and trust the Father to exalt you?',
        },
      ],
    },

    /* ─── Hebrews 5:7 — In the Days of His Flesh, With Strong Crying and Tears ─── */
    {
      ref: 'Hebrews 5:7',
      title: 'In the Days of His Flesh, With Strong Crying and Tears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(7,
              t('Who in the days of his flesh, when he had '),
              hp('offered up prayers and supplications with strong crying and tears', 'heb5-strong-crying'),
              t(' unto him that was able to save him from death, and was heard in that he feared;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-strong-crying',
          html:
            'This is the garden of Gethsemane. Jesus on His knees, sweat like drops of blood, crying out to the Father. Not resigned. Not serene. Desperate. His priesthood is not abstract theology. It is rooted in the night He faced the cup and asked if it could pass from Him. It is rooted in the reality that He did not want to die—yet He chose to anyway.',
        },
        {
          kind: 'greek',
          id: 'heb5-isxys',
          title: 'Ischys — &ldquo;Strong crying&rdquo;',
          script: 'ἰσχύς',
          translit: '<strong>ischy&oacute;s</strong> · strength, might, power; earnestness',
          description:
            'Not gentle prayer. Intensive, fervent, all-consuming prayer. The kind of praying that comes from the depths. Gethsemane was not a time of polite petition. It was a time of wrestling with God.',
        },
        {
          kind: 'christ',
          id: 'heb5-strong-crying',
          title: 'Christ Connection — Gethsemane',
          html:
            'Matthew 26:39: "He went a little further, and fell on his face, and prayed, saying, O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt." This is Christ&apos;s priesthood in action. Not detached. Not cold. Real prayer, real tears, real wrestling with the will of the Father. And the Father heard Him not by removing the cup but by strengthening Him to drink it.',
        },
        {
          kind: 'carry',
          html:
            'Your prayers matter. Not because they change God, but because they are real encounters between you and the One who listens. Jesus prayed with tears. He did not suppress His longing or His fear. He brought it all to the Father. You can do the same. The Father hears you too.',
        },
        {
          kind: 'reflection',
          id: 'heb5-prayers-tears',
          prompt: 'What are you afraid to pray out loud? What prayer is stuck in your throat that you need to voice to the Father like Jesus did?',
        },
      ],
    },

    /* ─── Hebrews 5:8–9 — Though He Were a Son, Yet Learned He Obedience ── */
    {
      ref: 'Hebrews 5:8–9',
      title: 'Though He Were a Son, Yet Learned He Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(8,
              t('Though he were a Son, yet '),
              hp('learned he obedience by the things which he suffered', 'heb5-learned-obedience'),
              t(';'),
            ),
            verse(9,
              t('And being made perfect, he became the '),
              hp('author of eternal salvation', 'heb5-author-salvation'),
              t(' unto all them that obey him;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-learned-obedience',
          html:
            'This is the heart of Hebrews 5. The eternal Son learned obedience. Not that He was ever disobedient. But obedience—real, tested, costly obedience—is not something an infinite being knows by nature. It has to be lived. It has to be earned. Christ earned it in the flesh, on the cross, in the willingness to surrender His life. His obedience was forged in suffering.',
        },
        {
          kind: 'commentary',
          id: 'heb5-author-salvation',
          html:
            'Christ is the author—the originator, the source, the one who brought it into being. Eternal salvation is not a state humans stumbled into. It is a redemption made and offered by Christ Himself. And it belongs to those who obey Him—who align their will with His and follow where He leads.',
        },
        {
          kind: 'greek',
          id: 'heb5-hypakoē',
          title: 'Hypakoē — &ldquo;Obedience&rdquo;',
          script: 'ὑπακοή',
          translit: '<strong>hypako&ecirc;</strong> · obedience, listening under (hypo + akoē), submission',
          description:
            'Obedience is listening under—placing yourself under another&apos;s authority and will. This is what Christ did. He placed Himself under the Father&apos;s will, even unto death. And in that submission, He perfected obedience itself.',
        },
        {
          kind: 'christ',
          id: 'heb5-learned-obedience',
          title: 'Christ Connection — Our Pattern of Obedience',
          html:
            '1 Peter 2:21–23: "For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps: Who did no sin, neither was guile found in his mouth: Who, when he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously." Christ&apos;s obedience through suffering is not His alone. It is the pattern for you. Your obedience, too, is tested and perfected through what you suffer.',
        },
        {
          kind: 'greek',
          id: 'heb5-aitios',
          title: 'Aitios — &ldquo;Author&rdquo;',
          script: 'αἴτιος',
          translit: '<strong>aitios</strong> · cause, origin, author; one who brings something into being',
          description:
            'Christ is not just a guide or a model. He is the originator, the cause, the source of eternal salvation. His obedience created a way where there was none. His death opened a door that no one else could open.',
        },
        {
          kind: 'carry',
          html:
            'You are called to follow Christ&apos;s pattern of obedience—not obedience that avoids suffering, but obedience that walks straight through it, hands open, trusting the Father all the way. Your obedience is not about being perfect or never struggling. It is about bowing your will to His, again and again, in whatever you face. That is how you become mature.',
        },
        {
          kind: 'reflection',
          id: 'heb5-obedience-suffering',
          prompt: 'What has suffering taught you about obedience that comfort never could? Where is Christ asking you to obey Him through something difficult right now?',
        },
        {
          kind: 'artwork',
          matchTitle: /crucifixion|cross|passion/i,
          caption: 'Hebrews 5:8–9 · Obedience Through Suffering',
        },
      ],
    },

    /* ─── Hebrews 5:11 — Of Whom We Have Many Things to Say, and Hard to Be Uttered ──── */
    {
      ref: 'Hebrews 5:11',
      title: 'Dull of Hearing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(11,
              t('Of whom we have many things to say, and hard to be uttered, seeing ye are '),
              hg('dull of hearing', 'heb5-dull-hearing'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-dull-hearing',
          html:
            'The author has reached a point where he could plunge into deep waters—the order of Melchisedec, the nature of Christ&apos;s eternal priesthood, the shadows and types of the Old Testament. But he stops. His readers have become dull. Sluggish. Inattentive. They are no longer listening with the focus needed for complex theological truth.',
        },
        {
          kind: 'greek',
          id: 'heb5-nōthroi',
          title: 'Nōthroi — &ldquo;Dull&rdquo;',
          script: 'νωθροί',
          translit: '<strong>n&ocirc;throi</strong> · sluggish, slow, dull, torpid',
          description:
            'The same word used elsewhere for sluggish, slothful, sleepy. These believers have not been actively persecuted or attacked. They have been slowly lulled to sleep. Spiritual sluggishness is a slow drift, a gradual dimming of attention.',
        },
        {
          kind: 'carry',
          html:
            'Are you dull in hearing? Do you find yourself checking out of teaching, skimming prayers, half-listening to the word? This is not a fixed condition. Dullness comes from choices—distraction, comfort, lack of exercise. Wake up. Lean in. Listen.',
        },
        {
          kind: 'reflection',
          id: 'heb5-dull-attention',
          prompt: 'Where have you grown dull in your faith? What spiritual disciplines have you stopped practicing? What would re-sharpen your attention?',
        },
      ],
    },

    /* ─── Hebrews 5:12 — Milk and Not Strong Meat ───────────────────────── */
    {
      ref: 'Hebrews 5:12',
      title: 'Have Need of Milk, and Not of Strong Meat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(12,
              t('For when for the time ye ought to be teachers, ye have need that one teach you again which be the '),
              hg('first principles of the oracles of God', 'heb5-first-principles'),
              t('; and are become such as have need of '),
              hy('milk, and not of strong meat', 'heb5-milk-meat'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-first-principles',
          html:
            'By now, these believers should be able to teach others. They should have deepened in their understanding, moved past the basics, become anchors in the faith. Instead, they need to go back to the alphabet. This is not just slowness—it is regression.',
        },
        {
          kind: 'commentary',
          id: 'heb5-milk-meat',
          html:
            'Milk and meat: a metaphor for the difference between elementary and mature teaching. Milk is sustaining but incomplete. An infant needs it. But the author is calling these believers to grow. Not to stay dependent on basic doctrine, but to press toward depth, complexity, and maturity in understanding God&apos;s word.',
        },
        {
          kind: 'greek',
          id: 'heb5-gala',
          title: 'Gala — &ldquo;Milk&rdquo;',
          script: 'γάλα',
          translit: '<strong>gala</strong> · milk; sustenance; elementary, basic',
          description:
            'Milk is nourishing. An infant cannot live without it. But an adult who has never moved past milk is stunted. The metaphor is not cruel—it is a call to grow up. You cannot stay a baby forever.',
        },
        {
          kind: 'carry',
          html:
            'Are you still eating milk when you should be eating meat? Have you been a Christian for years but never gone deeper? Never wrestled with hard questions, never studied the hard passages, never let the faith challenge you to grow? There is no shame in being young in faith. There is only shame in refusing to mature.',
        },
        {
          kind: 'reflection',
          id: 'heb5-spiritual-maturity',
          prompt: 'What does spiritual milk look like for you? What would strong meat look like? What is keeping you from it?',
        },
      ],
    },

    /* ─── Hebrews 5:13–14 — Senses Exercised to Discern Good and Evil ──────── */
    {
      ref: 'Hebrews 5:13–14',
      title: 'Senses Exercised to Discern Both Good and Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(13,
              t('For every one that useth milk is unskilful in the word of righteousness: for he is a babe.'),
            ),
            verse(14,
              t('But strong meat belongeth to them that are of full age, even those who by reason of '),
              hp('use have their senses exercised to discern both good and evil', 'heb5-senses-exercised'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-senses-exercised',
          html:
            'Maturity is not a sudden event. It comes through use—repetition, practice, exposure, engagement. You exercise your spiritual senses the way an athlete exercises muscles. You learn to discern through failure and success, through testing and proving, through making mistakes and learning from them. This takes time. This takes persistence. This is how you grow.',
        },
        {
          kind: 'greek',
          id: 'heb5-aisthētēria',
          title: 'Aisthētēria — &ldquo;Senses&rdquo;',
          script: 'αἰσθητήρια',
          translit: '<strong>aisth&ecirc;t&ecirc;ria</strong> · sense organs, organs of perception; discernment',
          description:
            'The spiritual equivalent of your physical senses. You perceive truth and falsehood with your spirit the way you perceive light and sound with your body. These senses are honed by practice.',
        },
        {
          kind: 'christ',
          id: 'heb5-discern-good-evil',
          title: 'Christ Connection — The Deep Things of God',
          html:
            '1 Corinthians 2:10–15 describes how the Spirit teaches you to discern: "For the Spirit searcheth all things, yea, the deep things of God… But the natural man receiveth not the things of the Spirit of God: for they are foolishness unto him: neither can he know them, because they are spiritually discerned. But he that is spiritual judgeth all things." As you grow in Christ, the Spirit trains your discernment. You learn to recognize His voice.',
        },
        {
          kind: 'artwork',
          matchTitle: /wisdom|truth|light|discernment/i,
          caption: 'Hebrews 5:14 · Mature Discernment',
        },
        {
          kind: 'carry',
          html:
            'What are you practicing? What are you training your spiritual senses on? If you are only consuming entertainment and distraction, your senses will be dull. If you are wrestling with Scripture, sitting in silence, learning to listen to the Spirit, praying without ceasing—your senses will sharpen. You become what you practice.',
        },
        {
          kind: 'reflection',
          id: 'heb5-spiritual-exercise',
          prompt: 'What spiritual practices have sharpened your discernment in the past? Where have you grown most in your ability to discern truth from falsehood? What would it look like to double down there?',
        },
      ],
    },
  ],

  hasHebrew: false,
};
