import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Hebrews 2 — We See Jesus
 *
 * The author turns from Christ's exaltation above the angels to an even deeper mystery:
 * why He became human. The answer transforms everything. He became one of us—tempted,
 * dying, brother—so that He could taste death, destroy the devil's hold, and lead many
 * sons to glory. Not as a distant judge, but as a merciful High Priest who knows our
 * struggle because He has lived it. "We see Jesus, who was made a little lower than the
 * angels for the suffering of death, crowned with glory and honour; that he by the grace
 * of God should taste death for every man."
 */
export const HEBREWS_2: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 2,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 23 },
  topicTags: ['priest', 'sacrifice', 'faithfulness', 'hope'],
  opener: {
    topical: true,
    caption: 'Hebrews 2',
  },
  intros: [
    'Chapter 1 exalted the Son above the angels, proving His supremacy through Old Testament voices. Chapter 2 asks the harder question: if He is so far above us, what does He have to do with us? The answer is incarnation—the Son entered human flesh, human weakness, human death. Not to remain distant, but to become our brother and High Priest. He did not send someone else into suffering; He bore it Himself.',
    'The chapter weaves Psalm 8 throughout—"What is man, that thou art mindful of him?" That psalm speaks of human glory, now lost through sin. Jesus reclaimed it, not for Himself alone, but for all who follow Him through His suffering. He became lower than the angels for a season—vulnerable, tempted, mortal—and from that place of complete solidarity with us, He opened a way to glory.',
    'For the first time in Hebrews, the focus turns inward to the reader: "we ought to give the more earnest heed," "how shall we escape," "we see Jesus." This chapter is personal. It is about your temptation, your fear of death, your need for help. And it is about One who has stood where you stand.',
  ],

  sections: [
    /* ─── Hebrews 2:1–4 — Give Earnest Heed, Lest You Drift Away ─────────── */
    {
      ref: 'Hebrews 2:1–4',
      title: 'Earnest Heed Lest We Let Them Slip',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('Therefore we ought to give the more '),
              hg('earnest heed', 'heb2-prosecho'),
              t(' to the things which we have heard, lest at any time we should '),
              hg('let them slip', 'heb2-pararheo'),
              t('.'),
            ),
            verse(
              2,
              t('For if the word spoken by angels was steadfast, and every transgression and disobedience received a just recompence of reward;'),
            ),
            verse(
              3,
              t('How shall we '),
              hp('escape', 'heb2-ekpheugo'),
              t(', if we '),
              hg('neglect', 'heb2-ameleo'),
              t(' so great salvation; which at the first began to be spoken by the Lord, and was confirmed unto us by them that heard him,'),
            ),
            verse(
              4,
              t('God also bearing them witness, both with '),
              hy('signs and wonders', 'heb2-semeion'),
              t(', and with divers miracles, and gifts of the Holy Ghost, according to his own will?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-prosecho',
          html:
            'The word translated "give heed" carries the sense of attention, intention, focus. You are drifting, the author warns, not into outright rebellion, but into negligence. The danger is not to your head but to your gravity. Slow, quiet inattention to the gospel.',
        },
        {
          kind: 'greek',
          id: 'heb2-pararheo',
          title: 'Pararheo — Drift Away',
          script: 'παραρρέω',
          translit: '<strong>pararheo</strong> · to flow by, to drift away, to drift past',
          description:
            'A current carries you past the harbor. You are not turning back; you are simply not paying attention to where the shore is. The word is used of a ship drifting past its port. This is how the gospel can slip from your grip—not through argument, but through drift.',
        },
        {
          kind: 'greek',
          id: 'heb2-ekpheugo',
          title: 'Ekpheugo — Escape',
          script: 'ἐκφεύγω',
          translit: '<strong>ekpheugo</strong> · to flee out of; to escape; to get away from',
          description:
            'Escape from what? From judgment. From the consequences of rejecting "so great salvation." But more gently: the gospel is offered as a way out—out of fear, out of the grip of death, out of being alone. To neglect it is to reject the one exit that actually leads somewhere.',
        },
        {
          kind: 'greek',
          id: 'heb2-ameleo',
          title: 'Ameleo — Neglect, Disregard',
          script: 'ἀμελέω',
          translit: '<strong>ameleo</strong> · to neglect; to disregard; to pay no attention to',
          description:
            'The opposite of earnest heed. You do not suddenly reject it; you simply stop paying attention. Stop praying. Stop reading. Stop gathering with believers. The neglect is what kills it.',
        },
        {
          kind: 'greek',
          id: 'heb2-semeion',
          title: 'Semeion — Sign, Wonder',
          script: 'σημεῖον',
          translit: '<strong>semeion</strong> · a sign; a token; a marvel',
          description:
            'God did not leave the gospel to be taken on faith alone. He confirmed it through signs—healings, resurrections, transformations. The witnesses who heard Jesus saw these things with their own eyes. The gospel is not a bare claim; it is a claim backed by works.',
        },
        {
          kind: 'commentary',
          id: 'heb2-neglect',
          html:
            'To neglect salvation is not to loudly reject it, but to treat it as though it matters no more than yesterday&apos;s news. As though "so great" were hyperbole. As though any other pursuit—security, comfort, approval, achievement—were worth the risk of letting it slip.',
        },
        {
          kind: 'carry',
          html:
            'You are being pulled by a hundred currents today—deadlines, screens, expectations, fears, the simple weight of ordinary life. Not one of them is wrong in itself. But they drift you. The author gives one command: give earnest heed. Turn your face to the one who spoke salvation. Turn it again and again. Not in fear of judgment, but because He is worth the attention.',
        },
        {
          kind: 'reflection',
          id: 'heb2-drift',
          prompt:
            'Where are you drifting in your life right now? Not into sin, but into inattention. What would it look like to give earnest heed again?',
        },
      ],
    },

    /* ─── Hebrews 2:5–9 — How Shall We Escape If We Neglect So Great Salvation ── */
    {
      ref: 'Hebrews 2:5–9',
      title: 'We See Jesus Crowned with Glory and Honour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              5,
              t('For unto the angels hath he not put in subjection the world to come, whereof we speak.'),
            ),
            verse(
              6,
              t('But one in a certain place testified, saying, '),
              hy('What is man, that thou art mindful of him?', 'heb2-psalm8-1'),
              t(' or the son of man, that thou visitest him?'),
            ),
            verse(
              7,
              t('Thou madest him a little lower than the '),
              hg('angels', 'heb2-angel-rank'),
              t('; thou '),
              hp('crownedst him with glory and honour', 'heb2-psalm8-crown'),
              t(', and didst set him over the works of thy hands:'),
            ),
            verse(
              8,
              t('Thou hast put all things in subjection under his feet. For in that he put all in subjection under him, he left nothing that is not put under him. But '),
              hg('now we see not yet all things put under him', 'heb2-not-yet'),
              t('.'),
            ),
            verse(
              9,
              t('But we see '),
              hp('Jesus, who was made a little lower than the angels', 'heb2-jesus-lower'),
              t(' for the suffering of death, '),
              hp('crowned with glory and honour', 'heb2-jesus-crowned'),
              t('; that '),
              hp('he by the grace of God should taste death for every man', 'heb2-taste-death'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-psalm8-1',
          html:
            'The author quotes Psalm 8, which opens with wonder at the smallness of humanity in a vast cosmos, yet humanity&apos;s honor in God&apos;s sight. [res:sefaria-psalm8] Humans were made slightly lower than the angels and crowned with glory. That was the plan. That was the birthright. And that is what you have lost.',
        },
        {
          kind: 'commentary',
          id: 'heb2-psalm8-crown',
          html:
            'The crown is the image that pierces the author&apos;s reading. Humans were clothed with glory, their heads crowned with honor. Not by accident, not by earning, but by God&apos;s free design. This is your created status. You have lost it through sin. But Someone has reclaimed it.',
        },
        {
          kind: 'commentary',
          id: 'heb2-taste-death',
          html:
            'To taste is to experience from the inside. To sample. To fully encounter. Jesus did not merely witness death as an observer; He experienced it as victim. He entered the place that seems like the end and came out the other side alive. This is what makes His triumph real.',
        },
        {
          kind: 'greek',
          id: 'heb2-angel-rank',
          title: 'Angel Rank and Human Glory',
          script: 'ἄγγελος',
          translit: '<strong>angelos</strong> · messenger; angel',
          description:
            'In the ancient world, angels were mighty beings. Yet the psalm places humanity slightly below them—lower in order, not in worth. Humans, made in God&apos;s image, were crowned with glory the angels themselves do not possess. This was the birthright.',
        },
        {
          kind: 'commentary',
          id: 'heb2-not-yet',
          html:
            'Here is the paradox the author feels deeply: the psalm speaks of human dominion as already accomplished—"Thou hast put all things in subjection." But the author sees the world as it is. We do not rule. We suffer. We die. We are defeated by forces larger than ourselves. The promise has not yet been fulfilled in us. Which means someone else must fulfill it.',
        },
        {
          kind: 'commentary',
          id: 'heb2-jesus-lower',
          html:
            'Jesus became human—became lower, temporarily, than the angels. He did not send an angel to do the job. He came Himself, vulnerable, limited, capable of hunger, pain, fear. And the reason? To taste death. Not to appear to die or to symbolize death, but to really die, to experience it from the inside, to destroy it.',
        },
        {
          kind: 'greek',
          id: 'heb2-kratos',
          title: 'Kratos — Power, Might',
          script: 'κράτος',
          translit: '<strong>kratos</strong> · strength; might; dominion; power',
          description:
            'The devil has the "power" or "kratos" of death—not ultimate power (that belongs to God), but a kind of dominion, a grip. Death is his weapon. Jesus did not merely defer it; He broke his grip on it.',
        },
        {
          kind: 'greek',
          id: 'heb2-douleia',
          title: 'Douleia — Bondage, Slavery',
          script: 'δουλεία',
          translit: '<strong>douleia</strong> · slavery; bondage; servitude',
          description:
            'Your fear of death has enslaved you—shaped your decisions, your ambitions, your relationships. You have been serving that fear like a master. Jesus came to break the chains.',
        },
        {
          kind: 'greek',
          id: 'heb2-geuomai',
          title: 'Geuomai — Taste',
          script: 'γεύομαι',
          translit: '<strong>geuomai</strong> · to taste; to sample; to experience',
          description:
            'Not a distant observation, but an experience from within. Jesus did not taste death as an observer. He tasted it as one who died—completely, really, bearing our death in His own body. Through that tasting, He transformed death from an end into a passage.',
        },
        {
          kind: 'christ',
          id: 'heb2-jesus-crowned',
          title: 'Christ Connection — The Man Clothed with Glory',
          html:
            'Psalm 8 speaks of humanity crowned with glory. Jesus is the one human in whom that crown is not lost. He wore it—literally, a crown of thorns. But beneath the mockery, He was being crowned with the very glory Psalm 8 promised, because He alone reclaimed it through suffering. Revelation shows Him now as the One who "was dead, and behold, I am alive for evermore" (Rev. 1:18). The human who went lower than the angels came back crowned with an eternal glory no angel possesses.',
        },
        {
          kind: 'carry',
          html:
            'You were made to rule, to have dominion, to be crowned with glory. You feel the loss of it keenly—the powerlessness, the failure, the mortality. The gospel does not ask you to pretend you feel otherwise. But it tells you this: the One who loved you entered that same loss, tasted that same death, and came back crowned. And what He crowned, His power continues to crown in those who follow Him.',
        },
        {
          kind: 'reflection',
          id: 'heb2-crown',
          prompt:
            'What part of your created glory feels most lost to you right now? Where are you aware of being a little lower than the angels? What would it mean to trust that Jesus has reclaimed it?',
        },
      ],
    },

    /* ─── Hebrews 2:10 — Captain of Salvation Made Perfect Through Sufferings ── */
    {
      ref: 'Hebrews 2:10',
      title: 'Captain of Salvation Made Perfect Through Sufferings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              10,
              t('For it became him, for whom are all things, and by whom are all things, in bringing many '),
              hg('sons unto glory', 'heb2-many-sons'),
              t(', to make the '),
              hp('captain of their salvation', 'heb2-archegos'),
              t(' '),
              hg('perfect through sufferings', 'heb2-teleioō'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-many-sons',
          html:
            'Jesus is not saving you out of the world; He is saving you <em>into</em> glory. This is not escape. This is destination. "Many sons unto glory"—you are not alone in this journey, and the journey has an end.',
        },
        {
          kind: 'greek',
          id: 'heb2-archegos',
          title: 'Archēgos — Captain, Pioneer',
          script: 'ἀρχηγός',
          translit: '<strong>archēgos</strong> · pioneer; founder; one who opens a way',
          description:
            'Not a commander who sends you into danger while He stays safe. A pioneer—one who walks the path first, bears the hardship first, opens the way by going through it. Jesus did not conquer death and then sit in heaven asking you to trust Him. He conquered it by dying, and then rose to show you the path through.',
        },
        {
          kind: 'greek',
          id: 'heb2-teleioō',
          title: 'Teleioō — Perfect, Complete',
          script: 'τελειόω',
          translit: '<strong>teleioō</strong> · to complete; to perfect; to bring to full maturity',
          description:
            'Not made perfect in the sense of being sinless—He was already sinless. But made perfect in the sense of being fully equipped, fully capable, fully mature as a High Priest through the experience of suffering. His suffering was His qualification for saving you.',
        },
        {
          kind: 'carry',
          html:
            'Your suffering—the losses you have endured, the weaknesses you live with, the temptations that wear you down—is never random. It is being used to qualify you for something. Just as Christ&apos;s suffering qualified Him to help you, your suffering is qualifying you to help others, to deepen, to become truly alive. The captain who went before you through the worst knows exactly how to bring you through too.',
        },
        {
          kind: 'reflection',
          id: 'heb2-captain',
          prompt:
            'What suffering has Christ walked through that you are now facing? How does it change things to know He has felt it from the inside?',
        },
      ],
    },

    /* ─── Hebrews 2:11–13 — Not Ashamed to Call Them Brethren ───────────── */
    {
      ref: 'Hebrews 2:11–13',
      title: 'Not Ashamed to Call Them Brethren',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              11,
              t('For both he that '),
              hp('sanctifieth', 'heb2-hagiazō'),
              t(' and they who are '),
              hp('sanctified', 'heb2-hagiazō'),
              t(' are '),
              hg('all of one', 'heb2-one'),
              t(': for which cause he is not ashamed to call them '),
              hp('brethren', 'heb2-adelphos'),
              t(','),
            ),
            verse(
              12,
              t('Saying, I will declare thy name unto my brethren, in the midst of the church will I sing praise unto thee.'),
            ),
            verse(
              13,
              t('And again, I will put my trust in him. And again, Behold I and the children which God hath given me.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-one',
          html:
            'He who sanctifies you and you who are sanctified—you have one Father. You share one family line. You are not servant and master, not judge and criminal, not alien and native. You are brothers and sisters to the Son of God. This is the scandal that drives the whole letter.',
        },
        {
          kind: 'greek',
          id: 'heb2-hagiazō',
          title: 'Hagiazō — Sanctify, Set Apart',
          script: 'ἁγιάζω',
          translit: '<strong>hagiazō</strong> · to make holy; to set apart; to consecrate',
          description:
            'Jesus does not just forgive you; He makes you holy. Transforms you into something set apart for God. The same verb is used for both the Sanctifier and the sanctified, because the work moves in one direction: from Him into you.',
        },
        {
          kind: 'greek',
          id: 'heb2-adelphos',
          title: 'Adelphos — Brother, Sibling',
          script: 'ἀδελφός',
          translit: '<strong>adelphos</strong> · brother; one of the same family; fellow believer',
          description:
            'Not servant, not subject, not creature, not favorite. Brother. The closest word for intimate family bond. Jesus claims kinship with you so utterly that He is "not ashamed"—as though there were shame in it, but He refuses it. He claims you.',
        },
        {
          kind: 'christ',
          id: 'heb2-brethren-connection',
          title: 'Christ Connection — Bone of My Bone',
          html:
            'On resurrection morning, Jesus tells Mary Magdalene, "Go to my brethren, and say unto them, I ascend unto my Father, and your Father; and to my God, and your God" (John 20:17). He calls His disciples—weak, broken, faithless—His brethren. He claims the family bond to the end. Paul picks this up: "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren" (Rom. 8:29). You are not an afterthought. You are the reason He came.',
        },
        {
          kind: 'carry',
          html:
            'Every person you feel shame around—the person you feel too small for, too broken for, too ordinary for—Jesus is "not ashamed" of them. He will stand in the church and say their name and call them His brother, His sister. That includes you. The shame is His refusal to feel it.',
        },
        {
          kind: 'reflection',
          id: 'heb2-brethren',
          prompt:
            'Where do you feel ashamed of your weakness? Where would it change your life to know Jesus is not ashamed of you, and calls you His brother/sister?',
        },
      ],
    },

    /* ─── Hebrews 2:14–16 — He Took on Him the Seed of Abraham ────────────── */
    {
      ref: 'Hebrews 2:14–16',
      title: 'He Took Part of the Same; Destroyed Him That Had the Power of Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              14,
              t('Forasmuch then as the children are partakers of '),
              hg('flesh and blood', 'heb2-flesh'),
              t(', he also himself likewise '),
              hg('took part of the same', 'heb2-metecho'),
              t('; that through death he might '),
              hp('destroy', 'heb2-katargeō'),
              t(' him that had the '),
              hg('power of death', 'heb2-kratos'),
              t(', that is, the devil;'),
            ),
            verse(
              15,
              t('And '),
              hp('deliver them', 'heb2-apallasso'),
              t(' who through '),
              hg('fear of death', 'heb2-thanatos-phobos'),
              t(' were all their lifetime '),
              hy('subject to bondage', 'heb2-douleia'),
              t('.'),
            ),
            verse(
              16,
              t('For verily he took not on him the nature of angels; but he took on him the seed of Abraham.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-flesh',
          html:
            '"Flesh and blood"—the physical, mortal, vulnerable human condition. Everything that makes you weak. Jesus did not come as a pure spirit or as a divine phantom. He came as an infant, growing in a mother&apos;s womb, with a human body that could hunger, tire, bleed, and die. He refused to remain above it.',
        },
        {
          kind: 'greek',
          id: 'heb2-metecho',
          title: 'Metechō — Take Part Of, Share In',
          script: 'μετέχω',
          translit: '<strong>metechō</strong> · to share in; to partake of; to have a common portion',
          description:
            'Not to pretend. Not to seem. To actually take part in human mortality. To share what you share. To be bound by the same limits. When He hung on the cross, He was not playing at death; He was death&apos;s real victim, bearing real pain, experiencing real abandonment.',
        },
        {
          kind: 'commentary',
          id: 'heb2-thanatos-phobos',
          html:
            'The fear of death shapes everything. The fear of loss, abandonment, meaninglessness, judgment—all of it flows from this one terror underneath. Most of your small anxieties are shadows of it. Most of your ambition is an attempt to outrun it. Most of your holding on is a refusal to let go.',
        },
        {
          kind: 'greek',
          id: 'heb2-katargeō',
          title: 'Katargeō — Destroy, Render Powerless',
          script: 'καταργέω',
          translit: '<strong>katargeō</strong> · to abolish; to make ineffective; to render null',
          description:
            'Not merely to postpone death or to make it less frightening, but to strip it of its power. Jesus transformed death from an end into a passage. In rising, He did not erase the fact that He died. He changed what dying means.',
        },
        {
          kind: 'greek',
          id: 'heb2-apallasso',
          title: 'Apallassō — Deliver, Set Free',
          script: 'ἀπαλλάσσω',
          translit: '<strong>apallassō</strong> · to free from; to release from; to deliver',
          description:
            'Not just to forgive you for being afraid, but to actually release you from the grip of fear. The promise is not that death will disappear, but that its hold on your life will loosen. You will be free to live, really live, instead of just trying not to die.',
        },
        {
          kind: 'christ',
          id: 'heb2-death-destroyed',
          title: 'Christ Connection — Death Defeated',
          html:
            'The devil is called "him that had the power of death"—not because Satan created death, but because he weaponized it, used it to hold you in fear and bondage. Jesus took that weapon and broke it. Paul exults in this: "O death, where is thy sting? O grave, where is thy victory?… But thanks be to God, which giveth us the victory through our Lord Jesus Christ" (1 Cor. 15:55–57). The one who tasted death did not stay dead. He came back alive, and His rising is proof that death has met its master.',
        },
        {
          kind: 'carry',
          html:
            'You are held by fear you may not even know is there. Fear of not mattering, fear of being forgotten, fear of being exposed, fear of the dark. These are all faces of the one great terror. And Jesus came into that very territory—mortal, vulnerable, alone—and walked through it and came back. Whatever you are afraid of, He has been there first and returned to tell you: the way through is open.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'heb2-fear-death',
          prompt:
            'What fear of death—small or large—is shaping your decisions right now? How would it change things to believe Christ has walked through it and risen on the other side?',
        },
      ],
    },

    /* ─── Hebrews 2:17 — Merciful and Faithful High Priest ──────────────── */
    {
      ref: 'Hebrews 2:17',
      title: 'Made Like Unto His Brethren: Merciful and Faithful High Priest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              17,
              t('Wherefore in all things it behoved him to be made like unto his brethren, that he might be a '),
              hp('merciful', 'heb2-eleos'),
              t(' and '),
              hg('faithful', 'heb2-pistos'),
              t(' high priest in things pertaining to God, to make '),
              hg('reconciliation', 'heb2-hilaskomai'),
              t(' for the sins of the people.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-high-priest-logic',
          html:
            'A high priest must stand between God and people—belonging to both, understanding both, able to speak for both. [res:israel-museum-day-atonement] The old high priests were human, but they did not fully understand God; they were sinful, so they could not fully represent us. Jesus is the only High Priest who can truly represent both sides: fully God, and, except for sin, fully human.',
        },
        {
          kind: 'greek',
          id: 'heb2-eleos',
          title: 'Eleos — Mercy, Compassion',
          script: 'ἔλεος',
          translit: '<strong>eleos</strong> · compassion; mercy; tender care',
          description:
            'Not pity from a distance. Mercy that comes from having stood where you stand, having felt what you feel. His mercies are not abstract philosophy; they are forged in the furnace of temptation, exhaustion, suffering.',
        },
        {
          kind: 'commentary',
          id: 'heb2-pistos',
          html:
            'Faithful—loyal, true, reliable. You can trust His advocacy on your behalf because He has not abandoned you since the moment He became human. He has walked beside you through every age, tasted every kind of suffering His people taste, and He will not turn away from you when you need Him most.',
        },
        {
          kind: 'greek',
          id: 'heb2-hilaskomai',
          title: 'Hilaskomai — Make Reconciliation, Atone',
          script: 'ἱλάσκομαι',
          translit: '<strong>hilaskomai</strong> · to make propitiation; to atone; to satisfy justice and restore relationship',
          description:
            'Not just to forgive, but to do the work that makes forgiveness possible. To stand between you and God&apos;s justice and absorb the blow. To satisfy the demands of a holy God so that reconciliation can actually happen.',
        },
        {
          kind: 'carry',
          html:
            'You are standing before someone or something demanding your guilt today. Another person&apos;s judgment. Your own conscience. The fear that God could never accept you as you are. And your High Priest steps forward and says: I have stood where you stand. I have faced this too. I have made peace between you and Him. He is for you. Rest.',
        },
        {
          kind: 'reflection',
          id: 'heb2-high-priest',
          prompt:
            'What accusation or shame are you carrying before God right now? How does it change things to have a High Priest who knows your struggle from the inside and stands for you?',
        },
      ],
    },

    /* ─── Hebrews 2:18 — He Is Able to Succour Them That Are Tempted ──────── */
    {
      ref: 'Hebrews 2:18',
      title: 'He Is Able to Succour Them That Are Tempted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              18,
              t('For in that he himself hath '),
              hg('suffered being tempted', 'heb2-peirazō'),
              t(', he is '),
              hp('able to succour', 'heb2-boētheō'),
              t(' them that are '),
              hg('tempted', 'heb2-peirazō'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-tempted-real',
          html:
            'Not a theoretical statement. Not "He understands temptation." He suffered being tempted. He felt the pull, the weight, the seduction of it. Matthew and Luke tell us Jesus was tempted in the wilderness by hunger, by power, by control. Hebrews elsewhere tells us He was "in all points tempted like as we are, yet without sin" (Heb. 4:15). He knows exactly what you are facing.',
        },
        {
          kind: 'greek',
          id: 'heb2-peirazō',
          title: 'Peirazō — Tempt, Test, Try',
          script: 'πειράζω',
          translit: '<strong>peirazō</strong> · to tempt to sin; to test; to strain; to try',
          description:
            'The word carries both senses: to be tempted toward sin, and to be tested and tried by difficulty. Jesus was tried by hunger, by the promise of kingdoms, by the way to escape the cross. His temptations were as real as yours. More real, because He refused every shortcut.',
        },
        {
          kind: 'greek',
          id: 'heb2-boētheō',
          title: 'Boētheō — Succour, Help, Come to Aid',
          script: 'βοηθέω',
          translit: '<strong>boētheō</strong> · to run to help; to aid; to come to the rescue',
          description:
            'An image of running toward someone in danger. [res:perseus-boethos] Not distant help, not generic wisdom, but real aid. When you cry out in temptation, He is not too busy, not too disappointed, not too far away. He runs to help.',
        },
        {
          kind: 'christ',
          id: 'heb2-tempted-connection',
          title: 'Christ Connection — Strength in Weakness',
          html:
            'Jesus did not conquer temptation by being immune to it. He conquered it by feeling its full weight and refusing it anyway. Paul writes about this: "God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it" (1 Cor. 10:13). That faithfulness is embodied in Christ. When temptation comes, He does not meet you with distance or disdain. He meets you with the one who has already passed through that exact trial.',
        },
        {
          kind: 'carry',
          html:
            'You are tempted today. Toward lust, toward rage, toward despair, toward numbness, toward the easy lie, toward the thing that will break you. And in that moment, your High Priest—the one who has felt that exact pull and refused it—is able to succour you. Not by removing the temptation, but by running toward you with a way through it. Not by shaming you, but by standing beside you. Ask Him. He is listening.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'heb2-succour',
          prompt:
            'What temptation do you face regularly where you feel most alone? How would it change your resistance to know Christ has been tempted there too and is able to help?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'We see Jesus, who was made a little lower than the angels for the suffering of death, crowned with glory and honour; that he by the grace of God should taste death for every man. He is not ashamed to call us brethren.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 2 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 8:4–5 — "What Is Man That Thou Art Mindful"',
      url: 'https://www.sefaria.org/Psalms.8.4-5',
      description: 'Psalm on human dignity and Christ&apos;s humiliation-exaltation cited in Hebrews 2:6–8.',
    },
    {
      id: 'israel-museum-day-atonement',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'High Priest Vestments and Day of Atonement',
      url: 'https://www.imj.org.il/en/collections/high-priest-atonement',
      description: 'Museum artifacts and background on Jewish high priesthood and sacrificial system.',
    },
    {
      id: 'perseus-boethos',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Greek Lexicon — Boētheō (Help, Succour)',
      url: 'https://www.perseus.tufts.edu/hopper/morph?l=bohqew&la=greek',
      description: 'Lexical note on &ldquo;come to the rescue&rdquo; in Hebrews 2:18.',
    },
  ],

  hasHebrew: false,
};
