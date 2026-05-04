import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Titus 2 — Sound Doctrine Produces Godly Living
 *
 * Paul turns from false teachers to the fruitful life produced by sound doctrine.
 * Every age and station—aged men and women, young women and men, servants—are
 * anchored not in rules but in the gospel. The passage culminates in the single
 * most densest Christological statement in the pastorals: Christ&apos;s appearing,
 * His grace, His redemption, His peculiar people.
 */
export const TITUS_2: RichChapterContent = {
  bookSlug: 'titus',
  bookName: 'Titus',
  chapter: 2,

  estimatedMinutes: { beginner: 7, intermediate: 17, deep: 21 },
  intros: [
    'Titus 2 is Paul&apos;s blueprint for a church alive—not a monolith, but a living ecosystem where different ages and stations shine differently. The aged anchor the young. The young invigorate the aged. Women mentor women. Men mentor men. The servant in the kitchen testifies to the gospel as loudly as the elder on the platform. This is not hierarchy designed to dominate. It is order designed to flourish.',
    'But notice where Paul plants the foundation: not in rules or roles, but in a single, breathtaking truth. "The grace of God that bringeth salvation hath appeared to all men." Every instruction in this chapter—to the aged, to young women building homes, to servants, to the young man Titus himself—hangs on one hinge: the incarnate, appearing, coming-again Christ. To live the commands of Titus 2 is not to earn heaven. It is to respond to Someone who has already bought us at infinite cost and is coming to claim us.',
  ],

  opener: {
    matchTitle: /paul/i,
    matchArtist: /tissot/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    quote: 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ; Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Titus 2 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-1john3-titus2',
      kind: 'study',
      source: 'Intertextual Bible',
      label: '1 John 3:2–3 ↔ Titus 2:13–14',
      url: 'https://intertextual.bible/search?q=1+John+3+2+Titus+2+13',
      description: 'Parallel teaching on how the hope of Christ&apos;s appearing motivates purification and zealous good works.',
    },
  ],

  sections: [
    /* ─── Titus 2:1 — Speak the Things Which Become Sound Doctrine ─────── */
    {
      ref: 'Titus 2:1',
      title: 'Speak the Things Which Become Sound Doctrine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('But speak thou '),
              hy('the things which become sound doctrine', 'tit2-become-doctrine'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-become-doctrine',
          html:
            'In the previous chapter, Titus was fighting false teachers—people claiming knowledge they didn&apos;t have, making mountains out of genealogies, producing arguments instead of a life (1 Tim. 1:4–6). Now Paul shifts. Sound doctrine is not primarily an intellectual monument you construct. It is a kind of talk—&ldquo;what <em>becomes</em> sound doctrine&rdquo;—meaning: what befits it, what is worthy of it, what proves it. And the proof is always visible. A man who speaks sound doctrine to an old man should be heard in that old man&apos;s sobriety, gravity, faith, love, patience. [res:sefaria-titus-2]',
        },
        {
          kind: 'greek',
          id: 'tit2-kalopsychos',
          title: 'Kalopsychos — Sound Doctrine',
          script: 'καλοδιδακτος',
          translit: '<strong>kalopsychos</strong> or <strong>kalos</strong> · wholesome; healthy; fitting',
          description:
            'The Greek is not "correct" doctrine (orthos) but "healthy" doctrine (kalos)—the kind that produces soundness of mind and body, the kind you can actually <em>live</em>. False doctrine is a virus. Sound doctrine is medicine.',
        },
        {
          kind: 'carry',
          html:
            'Paul is asking Titus—and asking you—a piercing question: What would it look like if the doctrine you teach was not measured by your applause or your arguments, but by what you produce in the lives of the people who hear you? Not just in the young, whom you expect to change, but in the old, the tired, the ones you thought were past transforming? Sound doctrine proves itself.',
        },
      ],
    },

    /* ─── Titus 2:2–3 — The Aged Men and Women ────────────────────────── */
    {
      ref: 'Titus 2:2–3',
      title: 'The Aged Men and Women',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              2,
              t('That the aged men be '),
              hg('sober, grave, temperate', 'tit2-aged-men'),
              t(', '),
              hy('sound in faith, in charity, in patience', 'tit2-grace-virtues'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-aged-men',
          html:
            'The Greek for aged is <em>presbuteros</em>—literally "the ones who went before." Paul is not talking about chronological age but about seasoned souls, the ones who have weathered storms. These men are to be <em>sober</em> (<em>sōphron</em>—of sound mind), <em>grave</em> (<em>semnos</em>—weighty, dignified), <em>temperate</em> (<em>enkrateia</em>—self-controlled). Not because they are trying to look respectable, but because decades of following Christ have marked them. An aged man who is sober has learned what to worry about and what to let go. An aged man who is grave has learned that his own comfort matters less than his testimony. An aged man who is temperate has learned that no pleasure is worth the cost to his soul.',
        },
        {
          kind: 'greek',
          id: 'tit2-semnos',
          title: 'Semnos — Grave, Dignified',
          script: 'σεμνός',
          translit: '<strong>semnos</strong> · grave; dignified; worthy of respect; weighty',
          description:
            'A semnos old man carries invisible weight. It is not earned through status or bluster. It is worn by the man who has made hard choices and lived them, by the one whose faith has cost him something. The young naturally turn to watch such a man.',
        },
        {
          kind: 'commentary',
          id: 'tit2-grace-virtues',
          html:
            'But notice what holds all three together: not discipline, not achievement, but <em>faith, charity, patience</em>. These are not the fruits of the aged man&apos;s effort alone. They are the harvest of grace. A man aged in faith has learned to trust. A man aged in charity has learned to give. A man aged in patience has learned to wait on God instead of on the world.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              3,
              t('The aged women likewise, that they be '),
              hg('in behaviour as becometh holiness', 'tit2-holiness-behavior'),
              t(', '),
              hy('not false accusers, not given to much wine', 'tit2-aged-women-sins'),
              t(', '),
              hy('teachers of good things', 'tit2-good-teachers'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-holiness-behavior',
          html:
            'An aged woman&apos;s deportment—her manner, her bearing—is itself a sermon. Paul says it should "become holiness," meaning it should be befitting, worthy of, demonstrative of, a holy calling. She is not dressed up or performing. She is a living witness that years in the faith have made her more <em>reverent</em> (the older translation), more aware of the holy, not less.',
        },
        {
          kind: 'commentary',
          id: 'tit2-aged-women-sins',
          html:
            'The specific sins Paul names for the aged women are telling: false accusation and wine. Not the sins of the young and passionate, but the ones age makes peculiar: a tongue that runs free with gossip, a habit that starts as social and becomes a crutch. The danger of age is not fever but cold comfort.',
        },
        {
          kind: 'commentary',
          id: 'tit2-good-teachers',
          html:
            'And then: "teachers of good things." Not officially. Not from a platform. But by reputation, by pattern, by the transmission of wisdom from a woman who has lived well to younger women watching. This is mother-to-daughter teaching, the oldest catechism.',
        },
        {
          kind: 'christ',
          id: 'tit2-aged-christ',
          title: 'Christ Connection — The Pattern of Aging',
          html:
            'Jesus&apos;s final work was to hang on a cross sober and patient, grieving but not despairing, having taught His disciples everything and left them in the Father&apos;s hands. Hebrews 5:8 says "though he were a Son, yet learned he obedience by the things which he suffered." His whole life was a tutorial in aging toward obedience. Every aged person who grows more patient, more trusting, more holy is echoing His pattern.',
        },
        {
          kind: 'carry',
          html:
            'If you are aged in years—or aging into wisdom—Paul is telling you that you are not past usefulness. You are not sidelined. Your gravity is a sermon. Your patience is a school. Your faith is a lighthouse for the young. What would change if you saw the last season of your life not as a diminishment but as a final testimony?',
        },
        {
          kind: 'reflection',
          id: 'tit2-aged',
          prompt: 'If you know a sober, grave, temperate older man or woman, what has marked them? What has decades of faith done to them that is beautiful?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Titus 2:4–5 — The Young Women ──────────────────────────────── */
    {
      ref: 'Titus 2:4–5',
      title: 'The Young Women',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              4,
              t('That they may teach the young women to be '),
              hg('sober, to love their husbands, to love their children', 'tit2-young-women-love'),
              t(',')
            ),
            verse(
              5,
              t('To be '),
              hg('discreet, chaste, keepers at home, good, obedient to their own husbands', 'tit2-young-women-virtue'),
              t(', '),
              hy('that the word of God be not blasphemed', 'tit2-blasphemy-word'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-young-women-love',
          html:
            'This is the pivot: the aged women do not merely teach rules. They teach love. "Love their husbands. Love their children." These are not commands that coerce; they are invitations to a particular kind of treasure. The young woman who has not yet learned this—who still thinks marriage is about romance or self-fulfillment—learns from a woman who has lived long enough to know: love is a choice you keep choosing, and it bears more fruit than any fleeting feeling ever could.',
        },
        {
          kind: 'commentary',
          id: 'tit2-young-women-virtue',
          html:
            'The words that follow—<em>discreet, chaste, keeper of home, good, obedient</em>—are not restrictions. They are the shape that a young woman&apos;s love takes. She is discreet (wise in judgment, not reckless), chaste (pure, undivided), a keeper of home (a builder, a maker of culture), good (generous, kind), obedient to her husband (ordered, accountable). These are not chains. They are the architecture of a life where the people you love most can flourish.',
        },
        {
          kind: 'commentary',
          id: 'tit2-blasphemy-word',
          html:
            'And then Paul names the stakes—perhaps the most countercultural thing he could say: "that the word of God be not blasphemed." The reputation of the gospel hangs on how you love your husband and children. The watching world will judge the Bible not by its logic but by whether it produces homes where love is visible. This is not pressure. It is permission to see your home as mission ground.',
        },
        {
          kind: 'carry',
          html:
            'Young woman—whether you are about to marry, newly married, or building a home with children: you are not sidelined. You are not fulfilling a secondary role. The very love you give daily—to a spouse, to a child, to the people in your home—is the highest missionary work, visible to the world, a defense of the gospel or a wound to it.',
        },
        {
          kind: 'reflection',
          id: 'tit2-young-women',
          prompt: 'What would it mean to love your husband and children as the primary arena where your faith is tested and visible?',
        },
      ],
    },

    /* ─── Titus 2:6 — The Young Men ──────────────────────────────────── */
    {
      ref: 'Titus 2:6',
      title: 'The Young Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              6,
              t('Young men likewise exhort to be '),
              hy('sober minded', 'tit2-sober-mind'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-sober-mind',
          html:
            'Paul&apos;s single word for the young men is soberness of mind—<em>sōphroneo</em>, the same root as <em>sōphron</em> for the aged men. But it is not spoken as a long list of virtues. It is a single demand: clarity. Get your head clear. Stop being swayed by every passion, every impulse, every voice that tells you to take what you want. A young man who keeps his mind sober is a young man who can lead.',
        },
        {
          kind: 'greek',
          id: 'tit2-sophroneo',
          title: 'Sōphroneo — Sober-minded, Self-controlled',
          script: 'σωφρονέω',
          translit: '<strong>sōphroneo</strong> · to be of sound mind; to be self-controlled; to think wisely',
          description:
            'The young are passionate, and passion is beautiful. But passion without clarity is a fire without a hearth—it will burn the whole house down. Sobriety of mind is not coolness or coldness. It is passion ordered by wisdom.',
        },
        {
          kind: 'carry',
          html:
            'Young man: you are being called not to immaturity curbed, but to <em>clarity</em>—the kind of clear-eyed, steady-handed wisdom that makes you worth following. This is not boring. This is dangerous in the best way.',
        },
      ],
    },

    /* ─── Titus 2:7–8 — A Pattern of Good Works ────────────────────────── */
    {
      ref: 'Titus 2:7–8',
      title: 'A Pattern of Good Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              7,
              t('In all things shewing thyself a '),
              hy('pattern of good works', 'tit2-typos-pattern'),
              t(': in doctrine shewing '),
              hg('uncorruptness, gravity, sincerity, Sound speech, that cannot be condemned', 'tit2-doctrine-marks'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-typos-pattern',
          html:
            'Paul is now speaking to Titus directly. Titus is young—old enough to be trusted with a church, young enough to be suspected by some. And Paul&apos;s word to him is unflinching: be a <em>typos</em>, a pattern. Like a king sets up a statue of himself in a distant province, you are to be a living copy of the gospel. Not perfect. But <em>palpable</em>. Visible. A person someone could watch and see what belief looks like.',
        },
        {
          kind: 'commentary',
          id: 'tit2-doctrine-marks',
          html:
            'And how does a young pastor become such a pattern? Paul names five marks: uncorruptness (you are not for sale), gravity (you carry weight), sincerity (you mean what you say), sound speech (your words can be trusted), speech that cannot be condemned (you give no foothold to slander). This is not celebrity. This is integrity.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              8,
              t('That he that is of the contrary part may be ashamed, having no '),
              hg('evil thing to say of you', 'tit2-no-evil-thing'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-no-evil-thing',
          html:
            'Even those who oppose you should have nothing to accuse you of. This is the ultimate test. Not "Do your friends approve of you?" but "Do your enemies have ammunition?" If they do, then your life is a sermon against itself.',
        },
        {
          kind: 'christ',
          id: 'tit2-christ-pattern',
          title: 'Christ Connection — The Original Pattern',
          html:
            'Jesus is called "the image of the invisible God" (Col. 1:15)—the <em>eikon</em>, the living statue, the pattern that shows what God looks like. When Paul calls Titus to be a "pattern," he is using the same word his Master used. The final epistle John ever wrote to the churches said: "he that says he abideth in him ought himself also so to walk, even as he walked" (1 John 2:6). You are a living copy of the One who walked before you.',
        },
        {
          kind: 'carry',
          html:
            'Whether you are a pastor or a parent, a manager or a mentor, a friend or a fellow believer: Paul&apos;s word to Titus is his word to you. Be a pattern. Not because you have it all figured out, but because someone is watching. And what they see might be the only gospel they ever get near.',
        },
        {
          kind: 'reflection',
          id: 'tit2-pattern',
          prompt: 'Who is watching how you live? What would they see if they were to see Christ through you?',
        },
      ],
    },

    /* ─── Titus 2:9–10 — Servants Adorning the Doctrine ─────────────────── */
    {
      ref: 'Titus 2:9–10',
      title: 'Servants Adorning the Doctrine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              9,
              t('Exhort servants to be '),
              hg('obedient unto their own masters', 'tit2-servants-obey'),
              t(', and to '),
              hy('please them well in all things', 'tit2-serve-well'),
              t('; '),
              hg('not answering again', 'tit2-no-talking-back'),
              t(';')
            ),
            verse(
              10,
              t('Not purloining, but shewing all good fidelity; that they may '),
              hp('adorn the doctrine of God our Saviour in all things', 'tit2-adorn-doctrine'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-servants-obey',
          html:
            'Paul is addressing slaves in the Roman household. This is not an endorsement of slavery. It is a strategy of witness within an impossible system. A slave who serves faithfully is not endorsing his chains. He is proving something more powerful: that his soul belongs to a Master higher than the one who holds the paperwork.',
        },
        {
          kind: 'commentary',
          id: 'tit2-serve-well',
          html:
            'A servant is to "please well in all things"—not from fear, but from a conviction that this work is <em>his</em>, that the hands folding the laundry or the voice answering the doorbell are consecrated hands.',
        },
        {
          kind: 'commentary',
          id: 'tit2-no-talking-back',
          html:
            '"Not answering again"—not talking back, not contending. A servant who argues has already surrendered his dignity by needing to win. A servant at peace has surrendered it to the only One worth surrendering to.',
        },
        {
          kind: 'commentary',
          id: 'tit2-adorn-doctrine',
          html:
            'And then the stunning statement: the servant who serves faithfully and faithlessly is not just fulfilling a duty. He is <em>adorning</em>—<em>kosmeo</em> in Greek, the same word for "cosmos," for arranging something into beauty—he is adorning "the doctrine of God our Saviour in all things." The kitchen work becomes a jewel in the crown of the gospel. The slave&apos;s faithfulness becomes a defense of his faith.',
        },
        {
          kind: 'carry',
          html:
            'You may not be a slave, but you are still a servant. You serve a boss, or customers, or people who don&apos;t appreciate you. And Paul is telling you that the way you do that work—without cutting corners, without bitterness, with the kind of fidelity that costs you something—is not beneath you. It is the highest work. You are adorning the gospel. You are making the name of Christ beautiful.',
        },
        {
          kind: 'reflection',
          id: 'tit2-servants',
          prompt: 'Where are you serving under someone else&apos;s authority? How could you "adorn the doctrine" there by doing your work with excellence and a free heart?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Titus 2:11–12 — The Appearing and Its Teaching ───────────────── */
    {
      ref: 'Titus 2:11–12',
      title: 'The Grace of God That Bringeth Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              11,
              t('For '),
              hp('the grace of God that bringeth salvation hath appeared to all men', 'tit2-grace-appeared'),
              t(',')
            ),
            verse(
              12,
              t('Teaching us that, '),
              hg('denying ungodliness and worldly lusts', 'tit2-denial'),
              t(', we should live '),
              hy('soberly, righteously, and godly, in this present world', 'tit2-triple-life'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-grace-appeared',
          html:
            'Now Paul does something breathtaking. He pivots from a list of instructions to their foundation. All of the above—aged men and women steady in faith, young women loving their families, young men clear-headed, leaders living with integrity, servants adorning the doctrine—all of it rests on one hinge: "The grace of God that bringeth salvation hath <em>appeared</em>." Not an idea. Not a law. But a <em>showing</em>—an incarnation, a appearing, a moment in history when grace became visible, touchable, real. That moment was the birth, life, death, and resurrection of Christ. [res:bibleodyssey-incarnation-grace]',
        },
        {
          kind: 'greek',
          id: 'tit2-epephane',
          title: 'Epephanē — Appeared, Became Visible',
          script: 'ἐπεφάνη',
          translit: '<strong>epephanē</strong> · appeared; was revealed; became manifest',
          description:
            'The same word is used in Titus 3:4 of God&apos;s kindness and mercy "appearing." It is the word for the imperial visitation—when a king showed his face to his people. Christ&apos;s incarnation is the ultimate appearing.',
        },
        {
          kind: 'commentary',
          id: 'tit2-denial',
          html:
            'And this appearing teaches us. What does grace teach? <em>Denial</em> of ungodliness and worldly lusts. Not because we are trying to earn the grace, but because we have <em>received</em> it. Gratitude is the only sane response to grace. A man who has been forgiven at infinite cost says: "No thank you" to the things that used to own him.',
        },
        {
          kind: 'commentary',
          id: 'tit2-triple-life',
          html:
            '"Soberly, righteously, and godly, in this present world." Three directions: soberly (toward yourself, clear-eyed about your own heart), righteously (toward others, dealing fairly and honestly), godly (toward God, walking in reverence). All three, all at once, <em>in this present world</em>—not in heaven, not in the future, but here, where the stakes are high and the needs are real.',
        },
        {
          kind: 'christ',
          id: 'tit2-incarnation',
          title: 'Christ Connection — The Incarnation Teaches',
          html:
            'Titus 2:11 is one of the shortest summaries of the incarnation in Scripture: grace appeared. John 1:14: "the Word was made flesh, and dwelt among us, and we beheld his glory, the glory as of the only begotten of the Father, full of grace and truth." The appearing of Christ in human flesh is the appearing of grace itself. And that appearing teaches us how to live.',
        },
        {
          kind: 'carry',
          html:
            'You have received what you did not deserve. You are forgiven when you deserve judgment. You are loved when you deserve abandonment. And that grace is not theoretical. It is a Person. It is an appearing. It is the Christ who walked the earth and showed you what love looks like when it has a face. Now, in this present world, your life is the text where others will learn what that grace produces.',
        },
        {
          kind: 'reflection',
          id: 'tit2-appeared-grace',
          prompt: 'Think of a moment when grace appeared to you, when you felt Christ&apos;s mercy become real. How did that appearing change how you live?',
        },
      ],
    },

    /* ─── Titus 2:13–14 — The Blessed Hope and Redemption ─────────────── */
    {
      ref: 'Titus 2:13–14',
      title: 'The Blessed Hope and the Glorious Appearing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              13,
              t('Looking for that '),
              hp('blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ', 'tit2-blessed-hope'),
              t(';')
            ),
            verse(
              14,
              t('Who '),
              hy('gave himself for us', 'tit2-self-gave'),
              t(', that he might '),
              hg('redeem us from all iniquity', 'tit2-redeem-iniquity'),
              t(', and '),
              hg('purify unto himself a peculiar people, zealous of good works', 'tit2-peculiar-people'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-blessed-hope',
          html:
            'Every instruction in Titus 2 is now revealed to float on one great hope: His coming. The aged are to be sober not because sobriety is intrinsically noble, but because He is coming. The young woman is to love her children not because family is the highest good, but because He is coming and will see it. The servant is to serve faithfully not because the master deserves it, but because He is coming and will judge the faithful and the unfaithful. To live by this hope is to reorient your whole life toward eternity. [res:intertextual-1john3-titus2]',
        },
        {
          kind: 'commentary',
          id: 'tit2-self-gave',
          html:
            'The center of gravity: "Who gave himself for us." Not a transaction. Not a business arrangement. A giving—a pouring-out of self. This is the language of the cross, of the kenosis (Philippians 2), of Christ emptying Himself so that we might be filled.',
        },
        {
          kind: 'commentary',
          id: 'tit2-redeem-iniquity',
          html:
            'The purpose: to "redeem us from all iniquity." Redemption is not merely forgiveness (though it is that). It is recovery—being bought back, restored, retrieved from the marketplace of sin and made your own again. But now you belong to Him. You are no longer slaves of sin. You are slaves of righteousness.',
        },
        {
          kind: 'commentary',
          id: 'tit2-peculiar-people',
          html:
            'And His goal: to "purify unto himself a peculiar people, zealous of good works." <em>Periousios</em>—peculiar, special, one&apos;s own possession. You are not His afterthought. You are not the ones He settled for. You are His treasure, purchased at the cost of His own blood. And you are zealous—burning, eager—for good works. Not from duty. Not from fear. From love for the One who gave Himself for you.',
        },
        {
          kind: 'greek',
          id: 'tit2-periousios',
          title: 'Periousios — Peculiar, Specially Owned',
          script: 'περιούσιος',
          translit: '<strong>periousios</strong> · one&apos;s own possession; chosen treasure; special',
          description:
            'This is the only place this word appears in Scripture. It means literally "belonging around one"—the things a king gathers close, the treasure he guards. You are not a footnote in God&apos;s story. You are the point of it.',
        },
        {
          kind: 'christ',
          id: 'tit2-parousia',
          title: 'Christ Connection — The Second Coming Motivates Purity',
          html:
            '1 John 3:2–3 pairs these same truths: "Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is. And every man that hath this hope in him purifieth himself, even as he is pure." The hope of Christ&apos;s appearing is what purifies you. Not fear. Hope. You are waiting for Someone, and love makes you pure.',
        },
        {
          kind: 'carry',
          html:
            'You are peculiar. Chosen. Specially owned by the One who bought you with His own life. And you are waiting. Not waiting passively, but waiting zealously—eager, alive, producing good works because you belong to someone worth belonging to. Your life right now is the visible form of that waiting.',
        },
        {
          kind: 'reflection',
          id: 'tit2-blessed-hope-2',
          prompt: 'How would your week change if you truly lived as if Christ could appear today? What would you stop doing? What would you start?',
        },
      ],
    },

    /* ─── Titus 2:15 — Speak, Exhort, Rebuke with All Authority ──────── */
    {
      ref: 'Titus 2:15',
      title: 'Speak, Exhort, and Rebuke with Authority',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              15,
              t('These things '),
              hg('speak, and exhort, and rebuke with all authority', 'tit2-final-charge'),
              t('. Let no man despise thee.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit2-final-charge',
          html:
            'Paul&apos;s final word to Titus is a charge: preach this. Exhort—call people up and forward. Rebuke—call sin sin. And do it with authority. Not the authority of your position (you are young, you might be doubted). But the authority of the gospel you carry. You are not guessing. You are carrying the word of the One who gave Himself for the whole world. That is not cockiness. That is clarity. That is a steady hand on the helm.',
        },
        {
          kind: 'carry',
          html:
            'If you are called to teach—whether in a pulpit or a classroom, a small group or a conversation—Paul is speaking to you. Do not whisper. Do not apologize for truth. Do not let the world&apos;s constant noise reduce you to a mumble. Speak. Exhort. Rebuke, when needed. Not with harshness, but with the quiet authority of someone who knows the One he represents. "Let no man despise thee." This is not a threat. It is a promise. A person who stands confidently in the gospel commands respect, not by demanding it but by embodying it.',
        },
        {
          kind: 'artwork',
          matchTitle: /paul|pastoral/i,
          matchArtist: /tissot/i,
          caption: 'Titus 2 · Sound Doctrine and Sound Living',
        },
      ],
    },
  ],

  hasHebrew: false,
};
