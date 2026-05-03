import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Colossians 1 — Christ the Image of God; All Things Created by Him and for Him
 *
 * "Who is the image of the invisible God, the firstborn of every creature:
 * for by him were all things created, that are in heaven, and that are in
 * earth, visible and invisible, whether they be thrones, or dominions, or
 * principalities, or powers: all things were created by him, and for him."
 *
 * Colossians opens with one of Scripture&apos;s most exalted Christologies.
 * Christ as the image of the invisible God, the agent of all creation, the
 * sustainer of the cosmos, the head of the body, the one in whom all fullness
 * dwells, the reconciler of all things.
 */
export const COLOSSIANS_1: RichChapterContent = {
  bookSlug: 'colossians',
  bookName: 'Colossians',
  chapter: 1,

  estimatedMinutes: { 5: 11, 10: 23, 15: 34 },
  intros: [
    'Colossians was written to a church under pressure. False teachers had crept in, teaching that Christ needed to be supplemented by angelic powers, spiritual disciplines, dietary rules, and ascetic practices. They made God sound far away—accessible only through layers of intermediaries. Paul&apos;s response is radical and crystalline: Christ is all-sufficient. He is not merely one power among many; He is the image of God, the creator of all things, the head of the body, the one holding all things together. Christ in you is not a doctrine to be debated. It is the hope of glory—the presence of God made intimate.',
    'This chapter contains one of the Bible&apos;s highest Christologies. The Christ-hymn in verses 15–20 stands among the most exalted descriptions of Jesus ever written. Every phrase announces His supremacy and sufficiency. For a believer under pressure from false teachers, or from any force that makes God sound distant, this chapter is liberation: everything you need is in Christ.',
  ],

  opener: {
    matchArtist: /holman hunt|hunt, william|hunt, william holman/i,
    matchTitle: /light of the world/i,
    caption: 'Christ the Image: The True Light',
  },

  bottomShare: {
    label: 'Share Colossians 1',
    quote:
      'Christ is the image of the invisible God, the firstborn of all creation. By Him all things were created and hold together. Christ in you is the hope of glory.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Colossians 1 · Study Guide',
  },

  sections: [
    /* ─── Colossians 1:1–2 — Greeting ─────────────────────────────────── */
    {
      ref: 'Colossians 1:1–2',
      title: 'Greeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('Paul, an apostle of Jesus Christ by the will of God, and '),
              hy('Timotheus', 'c1-timothy'),
              t(' our brother,')
            ),
            plain(
              2,
              'To the saints and faithful brethren in Christ which are at Colosse: Grace be unto you, and peace, from God our Father and the Lord Jesus Christ.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-timothy',
          html:
            'Timothy, Paul&apos;s close companion and protégé, is mentioned not as a co-author but as a fellow witness. Paul opens letters in the same way: asserting his apostolic authority, then immediately naming partners who can vouch for what follows. This is a letter backed by trustworthy voices.',
        },
      ],
    },

    /* ─── Colossians 1:3–8 — Faith, Hope, Love ─────────────────────── */
    {
      ref: 'Colossians 1:3–8',
      title: 'Faith, Hope, and Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('We give thanks to God and the Father of our Lord Jesus Christ, praying always for you;')
            ),
            verse(
              4,
              t('Since we heard of your '),
              hp('faith in Christ Jesus', 'c1-faith-heard'),
              t(', and of the '),
              hp('love which ye have to all the saints', 'c1-love-saints'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-faith-heard',
          html:
            'The Colossians&apos; faith is known by report. Paul has never visited them; yet their trust in Christ has reached him. A church&apos;s faith radiates. It is not a private thing. When you believe, people see it. When you trust Christ openly, others are reminded that faith is possible.',
        },
        {
          kind: 'commentary',
          id: 'c1-love-saints',
          html:
            'Their love extends to all the saints—not just to their own church, not just to the likeable, but to all believers. This is what the Spirit produces. Love is not sentiment; it is a choice to care for the whole household of faith, regardless of personality or proximity.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              5,
              t('For the '),
              hy('hope which is laid up for you in heaven', 'c1-hope-heaven'),
              t(', whereof ye heard before in the word of the truth of the gospel;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-hope-heaven',
          html:
            'Hope has a location: heaven. It is not vague or wishful. The Colossians have heard about it through the gospel itself. The gospel is not only about forgiveness here; it is about a resurrection, a transformation, an inheritance that awaits. That future reality holds believers steady in the present.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(6, 'Which is come unto you, as it is in all the world; and bringeth forth fruit, as it doth also in you, since the day ye heard of it, and knew the grace of God in truth;'),
            verse(
              7,
              t('As ye also learned of '),
              hy('Epaphras', 'c1-epaphras'),
              t(', our dear fellowservant, who is for you a faithful minister of Christ;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-epaphras',
          html:
            'Epaphras brought the gospel to Colossae. He is a Colossian, a trusted local teacher. Paul names him, giving weight to his ministry. In doing so, Paul reminds the Colossians: your teacher is faithful, he is Christ&apos;s servant, he taught you the truth. When false teachers arrive later with their additions and modifications, the Colossians should remember who brought them the unadorned gospel.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              8,
              t('Who also declared unto us your '),
              hp('love in the Spirit', 'c1-love-spirit'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-love-spirit',
          html:
            'Epaphras has brought Paul a report of the Colossians&apos; love. It is love in the Spirit—not natural affection, but the Spirit-produced fruit of unity and care. This is the substance of his report: faith, hope, and love are flourishing in Colossae.',
        },

        {
          kind: 'carry',
          html:
            'Paul opens with gratitude. His first word is thanksgiving. Before he teaches, before he corrects the false teachers, he celebrates what is true about the Colossians. Your faith is known. Your love extends to the saints. Your hope is secure in heaven. Begin your own prayers the same way: with gratitude for what is true in others before you address what needs correction.',
        },

        {
          kind: 'reflection',
          id: 'c1-faith-hope-love',
          prompt:
            'Faith, hope, and love characterize the Colossian church. Which of these three is strongest in your own spiritual community right now? Where is it weakest?',
        },
      ],
    },

    /* ─── Colossians 1:9–14 — The Prayer ─────────────────────────────── */
    {
      ref: 'Colossians 1:9–12',
      title: 'The Prayer: Filled with Knowledge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              9,
              t('For this cause we also, since the day we heard it, do not cease to pray for you, and to desire that ye might be '),
              hp('filled with the knowledge of his will in all wisdom and spiritual understanding', 'c1-knowledge-will'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-knowledge-will',
          html:
            'Paul prays for more than safety or comfort. He prays that the Colossians would be filled with knowledge—genuine understanding of God&apos;s will. Not information, but intimate knowledge. Not theoretical wisdom, but spiritual wisdom applied to real choices. This is what the false teachers claimed to offer. Paul insists that Christ Himself is the source of this knowledge.',
        },

        {
          kind: 'greek',
          id: 'c1-epignosis',
          title: 'Epignósis — "Knowledge"',
          script: 'ἐπίγνωσις',
          translit: '<strong>epignósis</strong> · full knowledge; intimate knowledge; experiential understanding',
          description:
            'Not mere intellectual assent but relational knowledge—the kind that changes you. When Paul prays for epignósis, he prays for a people who know God not as a concept but as a presence.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              10,
              t('That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work, and increasing in the knowledge of God;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-walk-worthy',
          html:
            'Knowledge of God&apos;s will is not meant to stay in the head. It is meant to reshape how you walk, how you live day to day. A worthy walk means a life aligned with what you now know to be true about God and Christ. Fruitfulness follows naturally when the roots go deep into Christ.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              11,
              t('Strengthened with all might, according to his glorious power, unto all patience and longsuffering with joyfulness;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-patience-power',
          html:
            'The knowledge of God strengthens not with mere willpower but with the power of God&apos;s glory. Patience and longsuffering are not grim resignation; they are shot through with joyfulness. When you truly know God, you can wait. You can endure. You can remain steadfast, not because you are tough, but because God&apos;s power is real and God&apos;s purposes are good.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              12,
              t('Giving thanks unto the Father, which hath made us '),
              hy('meet to be partakers of the inheritance of the saints in light', 'c1-inheritance'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-inheritance',
          html:
            'The Father has qualified us—literally, made us "fit" or "sufficient"—to share in the inheritance reserved for His holy ones. This is not something earned. It is something the Father has prepared. The saints are not waiting in darkness for a distant promise; they are already partakers of an inheritance secured in light.',
        },

        {
          kind: 'carry',
          html:
            'This prayer is not generic. It is specific: knowledge of His will, wisdom for choices, a life that walks worthy, strengthened by His power, enduring with joy, grateful for an inheritance already begun. Pray this for yourself. Pray this for those you love. Ask that they would know God not as a theory but as a transforming power.',
        },

        {
          kind: 'reflection',
          id: 'c1-prayer',
          prompt:
            'Paul prays for knowledge of God&apos;s will, strength for patient endurance, and joyful thanksgiving. Which of these do you most need in your life right now?',
        },
      ],
    },

    /* ─── Colossians 1:13–14 — Translated into the Kingdom ────────────── */
    {
      ref: 'Colossians 1:13–14',
      title: 'Delivered and Translated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              13,
              t('Who hath delivered us from the power of darkness, and hath '),
              hp('translated us into the kingdom of his dear Son', 'c1-translated'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-translated',
          html:
            'This is not language of gradual improvement or personal reformation. The verb is &ldquo;translated,&rdquo; the same word used for Enoch and Philip in Scripture—a sudden, total transfer from one realm to another. Believers have been moved from the kingdom of darkness into the kingdom of God&apos;s beloved Son. The transfer is already complete. This is not future hope; it is present reality.',
        },

        {
          kind: 'greek',
          id: 'c1-methistemi',
          title: 'Methistémi — "Translated"',
          script: 'μετίστημι',
          translit: '<strong>methistémi</strong> · to transfer; to move from one place to another; to transport',
          description:
            'A word of decisive relocation. When applied to believers, it emphasizes the totality of the shift: from one kingdom to another, from one ruler to another. Not improvement in the old system, but placement in a new one.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              14,
              t('In whom we have '),
              hp('redemption through his blood, even the forgiveness of sins', 'c1-redemption'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-redemption',
          html:
            'Redemption is not metaphorical. It is the price paid in Christ&apos;s blood. Forgiveness of sins is not separation from guilt; it is erasure. In the Son&apos;s blood, all sin-debt is canceled. This is why the translation is possible: the blood of the beloved Son has made it legally, morally, spiritually possible for believers to be moved from darkness into light.',
        },

        {
          kind: 'christ',
          id: 'c1-kingdom-blood',
          title: 'Christ Connection — From Darkness to the Kingdom',
          html:
            'Jesus taught: &ldquo;Except a man be born again, he cannot see the kingdom of God&rdquo; (John 3:3). Paul here describes that rebirth as a translation—not self-improvement, but a relocation into a new kingdom, the kingdom of God&apos;s beloved Son. The mechanism is His blood. The result is forgiveness. The location is light. All of this centers Christ: His blood, His kingdom, His light.',
        },

        {
          kind: 'carry',
          html:
            'You have been translated. Not nearly there, not on your way, but already transferred into the kingdom of the beloved Son. This means the authority of darkness over your life is finished. The forgiveness is purchased. The location is changed. Everything you face this week—every temptation, every fear, every false voice—is faced from within the kingdom of light, not darkness. You are no longer under that power.',
        },

        {
          kind: 'reflection',
          id: 'c1-darkness-light',
          prompt:
            'Paul says you have been translated from the power of darkness into Christ&apos;s kingdom. What part of your life still feels like it is under the power of darkness? What would change if you believed you have already been translated?',
        },
      ],
    },

    /* ─── Colossians 1:15 — Image of the Invisible God ──────────────────── */
    {
      ref: 'Colossians 1:15',
      title: 'The Image of the Invisible God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              15,
              t('Who is the '),
              hp('image of the invisible God', 'c1-eikon'),
              t(', the '),
              hp('firstborn of every creature', 'c1-prototokos'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-eikon',
          html:
            'Christ is the image of the invisible God. Not a copy, not a representation that stands apart from the thing itself. The Greek <em>eikon</em> conveys exact likeness, full manifestation. To see Christ is to see God. To study Christ&apos;s character, His mercy, His power, His resolve—is to study God&apos;s character directly. The invisible God has made Himself visible in Christ.',
        },

        {
          kind: 'greek',
          id: 'c1-eikon-word',
          title: 'Eikón — "Image"',
          script: 'εἰκών',
          translit: '<strong>eikón</strong> · image; likeness; exact representation',
          description:
            'Not merely a picture of something else, but an authentic manifestation of the thing itself. An eikon bears the exact character of what it represents. Christ as God&apos;s eikon is God fully expressed.',
        },

        {
          kind: 'commentary',
          id: 'c1-prototokos',
          html:
            'Christ is the firstborn of every creature. This does not mean He is the first created thing (a misreading that has troubled the church since the second century). In Hebrew thought, firstborn means preeminent, holding the position of chief. Christ&apos;s firstborn status means He holds the highest place in creation—supremacy over all things, not sequence among them.',
        },

        {
          kind: 'greek',
          id: 'c1-prototokos-word',
          title: 'Prototókos — "Firstborn"',
          script: 'πρωτότοκος',
          translit: '<strong>prototókos</strong> · firstborn; preeminent; of highest rank and privilege',
          description:
            'In Jewish culture, the firstborn held a place of honor and responsibility. The word denotes rank, not chronology. When Paul calls Christ the firstborn of all creation, he means Christ is preeminent, the chief, the one who holds authority over all things.',
        },

        {
          kind: 'christ',
          id: 'c1-image-connection',
          title: 'Christ Connection — God Made Visible',
          html:
            'Paul writes that Christ is &ldquo;the image of the invisible God.&rdquo; The writer of Hebrews echoes this: Christ is &ldquo;the brightness of his glory, and the express image of his person&rdquo; (Heb. 1:3). John saw it plainly: in Christ, God became flesh. If you want to know what God is like—what He loves, what He values, how He treats the broken—look at Christ. He is God&apos;s full and final word.',
        },

        {
          kind: 'carry',
          html:
            'When you look at Christ, you are looking at God. His compassion for the sick is God&apos;s compassion. His anger at hypocrisy is God&apos;s anger. His welcome of the outcast is God&apos;s welcome. His sacrifice on the cross is God&apos;s heart laid bare. There is no hidden God behind Christ waiting to surprise you with judgment. The God you see in Christ is the God you actually have.',
        },

        {
          kind: 'reflection',
          id: 'c1-image-reflect',
          prompt:
            'Christ is the image of the invisible God. When you think of God, do you think of Christ? What would change in your faith if you did?',
        },
      ],
    },

    /* ─── Colossians 1:16 — All Things Created by Him ──────────────────── */
    {
      ref: 'Colossians 1:16',
      title: 'All Things Created by Him and for Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              16,
              t('For by him were '),
              hp('all things created, that are in heaven, and that are in earth, visible and invisible', 'c1-creation-scope'),
              t(', whether they be '),
              hy('thrones, or dominions, or principalities, or powers', 'c1-powers'),
              t(': '),
              hp('all things were created by him, and for him', 'c1-by-for-him'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-creation-scope',
          html:
            'The scope is absolute: all things in heaven and on earth, visible and invisible. Nothing is excepted. This is a comprehensive claim of Christ&apos;s creative agency. Every star, every atom, every angel, every human being exists because Christ made it. This totality is crucial for Paul&apos;s argument: the false teachers are claiming that certain spiritual powers require special reverence or mediation. Paul insists: Christ made them all. They are not autonomous. They are not intermediaries between God and man. They are creatures, like everything else.',
        },

        {
          kind: 'greek',
          id: 'c1-ktizo',
          title: 'Ktízō — "Created"',
          script: 'κτίζω',
          translit: '<strong>ktízō</strong> · to create; to bring into being; to establish',
          description:
            'The verb emphasizes creation from nothing, not mere assembly. When Paul says all things were created by Christ, he attributes to Christ the very creative power that belongs to God. This is not poetry; it is theological assertion.',
        },

        {
          kind: 'commentary',
          id: 'c1-powers',
          html:
            'The list—thrones, dominions, principalities, powers—refers to spiritual beings and cosmic forces that the Colossians may have feared or revered. Some false teachers taught that these powers stood between God and humanity, requiring special spiritual practices to appease or access. Paul&apos;s answer: Christ made all of them. They are subordinate to Him, not intermediaries between God and believers.',
        },

        {
          kind: 'greek',
          id: 'c1-powers-list',
          title: 'Thronoi, Kyriotētes, Archai, Exousiai — The Cosmic Powers',
          script: 'θρόνοι · κυριότητες · ἀρχαί · ἐξουσίαι',
          translit: '<strong>thronoi</strong> · thrones | <strong>kyriotētes</strong> · lordships/dominions | <strong>archai</strong> · principalities/rulers | <strong>exousiai</strong> · powers/authorities',
          description:
            'Paul names the spiritual beings and forces that may have held the Colossians in fear. By listing them here, he neutralizes their power: all of them were created by Christ. None stands above Him. None can stand between a believer and God.',
        },

        {
          kind: 'commentary',
          id: 'c1-by-for-him',
          html:
            'Christ did not merely create all things; He created them both "by him" and "for him." This means all things exist in relation to Christ. They were made through His agency and toward His purpose. The universe is Christ-centered. Not accidentally—by design. Not as an afterthought—as the fundamental structure of reality. Everything that exists exists in relation to Him.',
        },

        {
          kind: 'carry',
          html:
            'You live in a universe made by Christ, for Christ, held together by Christ. This means the anxieties and fears the false teachers promote—fears of cosmic forces, of malevolent powers, of being caught between authorities—are groundless. There is no power outside Christ&apos;s lordship. There is no force He did not create. You are not navigating a cosmos that might slip beyond His control. You are living in a reality ordered entirely by Him.',
        },

        {
          kind: 'reflection',
          id: 'c1-creation-reflect',
          prompt:
            'All things were created by Christ and for Christ. Does it change your sense of the world to know that everything around you exists in relation to Him? Name one thing you see today that was made by and for Christ.',
        },
      ],
    },

    /* ─── Colossians 1:17 — He Holds All Things Together ──────────────── */
    {
      ref: 'Colossians 1:17',
      title: 'He Holds All Things Together',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              17,
              t('And he is '),
              hp('before all things', 'c1-before'),
              t(', and by him '),
              hy('all things consist', 'c1-consist'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-before',
          html:
            'Christ is "before all things"—not merely chronologically first, but preeminent, superior, held in a position of priority. He precedes all things in rank and power. Everything else is arranged around Him.',
        },

        {
          kind: 'commentary',
          id: 'c1-consist',
          html:
            'Christ holds all things together. The Greek word <em>sunistémi</em> means to cohere, to remain unified, to be held in a state of cohesion. The universe is not spinning in chaos under the dominion of blind chance. It is held in coherence by Christ&apos;s power. Every moment, every atom, every relationship—sustained by His action. If Christ stopped sustaining the cosmos, it would collapse into nothing.',
        },

        {
          kind: 'greek',
          id: 'c1-sunistemi',
          title: 'Sunistémi — "Consist" / "Hold Together"',
          script: 'συνίστημι',
          translit: '<strong>sunistémi</strong> · to hold together; to cohere; to be unified; to sustain',
          description:
            'The verb pictures Christ as the active sustainer of creation. Not a passive first cause who set things in motion and withdrew, but an ongoing power maintaining all reality in coherence. Modern physics might speak of fundamental forces; Scripture names Christ.',
        },

        {
          kind: 'christ',
          id: 'c1-sustainer',
          title: 'Christ Connection — The Sustaining Power',
          html:
            'The writer of Hebrews says Christ is "upholding all things by the word of his power" (Heb. 1:3). This is not a metaphor for God&apos;s general oversight. It is a claim about the nature of reality: Christ is actively, constantly sustaining all things in existence. For believers facing false teachers or any force that makes the world feel chaotic and out of control, this verse offers unshakable ground: Christ is holding all things together—including you.',
        },

        {
          kind: 'carry',
          html:
            'Your life is not fragile. The world is not flying apart. Christ is holding all things together—the atomic structures, the relationships, the circumstances that make up your day. This is not insurance against difficulty; it is assurance that no difficulty can slip outside His knowledge or control. You can rest. You can trust. The one who is holding all things together is the one who loves you.',
        },

        {
          kind: 'reflection',
          id: 'c1-consist-reflect',
          prompt:
            'Christ holds all things together. What in your life feels like it is coming apart? What would change if you believed that even now, Christ is holding it together?',
        },
      ],
    },

    /* ─── Colossians 1:18 — Head of the Body ───────────────────────────── */
    {
      ref: 'Colossians 1:18',
      title: 'The Head of the Body',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              18,
              t('And he is the '),
              hp('head of the body, the church', 'c1-head-body'),
              t(': who is the beginning, the '),
              hp('firstborn from the dead', 'c1-firstborn-dead'),
              t('; that in all things he might have the preeminence.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-head-body',
          html:
            'Christ is not merely the founder of the church or its distant patron. He is the head. In the human body, the head gives direction, coordination, and life to all the members. The body cannot function apart from the head. By calling Christ the head of the body, Paul means the church exists in living union with Christ. His life flows into the church. His will directs the church. The church&apos;s purpose is to manifest His nature.',
        },

        {
          kind: 'greek',
          id: 'c1-kephale',
          title: 'Kephalé — "Head"',
          script: 'κεφαλή',
          translit: '<strong>kephalé</strong> · head; chief; source of life and direction',
          description:
            'The word denotes not just physical location but functional authority and life-source. A head is not optional to a body. Without the head, the body has no direction, no life, no coherence. Christ is not one leader among many; He is the head—the essential source of the church&apos;s life.',
        },

        {
          kind: 'commentary',
          id: 'c1-firstborn-dead',
          html:
            'Christ is the firstborn from the dead—the first to rise, the pioneer of resurrection, the one whose resurrection validates and opens the way for all believers. He is not merely alive; He is alive in a new mode, resurrected in glory. His resurrection proves that death has been conquered. His risen life is the pattern and guarantee of believers&apos; resurrection.',
        },

        {
          kind: 'christ',
          id: 'c1-church-connection',
          title: 'Christ Connection — The Church as Christ&apos;s Body',
          html:
            'Paul explores this image most fully in Ephesians 1:22–23: the church is Christ&apos;s body, and we are members of that body. Christ does not command the church from a distance; the church is His body, an extension of His person and will in the world. This is why false teachers cannot offer anything Christ does not—they are attacking the very coherence of Christ&apos;s body. The Colossians are not in need of supplementary spiritual powers; they are members of Christ&apos;s body, and He supplies everything.',
        },

        {
          kind: 'carry',
          html:
            'You are not an isolated believer. You are a member of Christ&apos;s body. The church is not a human organization with a human hierarchy; it is the living body of Christ, with Christ as the head. This means your life is connected to every other believer. His direction flows to you. His life sustains you. Your role is to respond as a member of His body, coordinated with His purposes.',
        },

        {
          kind: 'reflection',
          id: 'c1-church-reflect',
          prompt:
            'Christ is the head of the church, which is His body. How does knowing that you are part of Christ&apos;s body change the way you see your place in the church and in the world?',
        },
      ],
    },

    /* ─── Colossians 1:19 — All Fullness Dwells in Him ──────────────────── */
    {
      ref: 'Colossians 1:19',
      title: 'All Fullness Dwells in Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              19,
              t('For it pleased the Father that in him should '),
              hp('all fulness dwell', 'c1-fullness'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-fullness',
          html:
            'The Father has chosen to lodge all His fullness in Christ. This is not a small claim. Fullness here means the complete substance, the totality of divine attributes and power. God did not pour some of His nature into Christ and reserve other aspects for Himself or other mediators. The complete divine fullness dwells in Christ. There is nothing lacking in Christ. There is no aspect of God&apos;s character, power, or purpose that Christ does not fully embody.',
        },

        {
          kind: 'greek',
          id: 'c1-pleroma',
          title: 'Plérōma — "Fullness"',
          script: 'πλήρωμα',
          translit: '<strong>plérōma</strong> · fullness; completeness; the complete reality or totality',
          description:
            'Plérōma was also a Gnostic term for the totality of divine emanations. Paul reclaims it: Christ alone contains the entire plérōma. Nothing is absent from Him. No supplementary spiritual power is needed. Christ is complete.',
        },

        {
          kind: 'carry',
          html:
            'All of God is in Christ. Not part of God. Not God filtered through lesser beings. All of God. This means you do not have to search elsewhere for spiritual wisdom, protection, or guidance. You do not have to fear that there is some divine reality you are missing, some angelic realm you haven&apos;t accessed, some secret knowledge you lack. All fullness dwells in Christ. He is enough.',
        },

        {
          kind: 'reflection',
          id: 'c1-fullness-reflect',
          prompt:
            'All of God&apos;s fullness dwells in Christ. When you face a need or a fear, do you look first to Christ or do you search elsewhere? What would change if you believed Christ is fully sufficient?',
        },
      ],
    },

    /* ─── Colossians 1:20 — Peace Through His Blood ──────────────────────── */
    {
      ref: 'Colossians 1:20a',
      title: 'Made Peace Through His Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              20,
              t('And, having '),
              hy('made peace through the blood of his cross', 'c1-peace-blood'),
              t(', by him to reconcile all things unto himself; by him, I say, whether they be things in earth, or things in heaven.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-peace-blood',
          html:
            'Christ&apos;s blood on the cross is the ground of peace. Not metaphorical peace—the reconciliation of all things to God. The universe is in a state of rebellion. Sin has corrupted creation itself (Rom. 8:22). Christ&apos;s death addresses this cosmic rupture. His blood does not merely forgive individual sins; it opens the way for the reconciliation of all things—creation itself—back to God.',
        },

        {
          kind: 'carry',
          html:
            'The peace you have with God is not fragile or conditional. It is grounded in Christ&apos;s blood—in His death for you. Not in your effort, not in your obedience, not in your spiritual performance. In His death. This peace is unshakable. It covers all your sins—past, present, and future. It opens your way to the Father. It is secure.',
        },

        {
          kind: 'reflection',
          id: 'c1-peace-reflect',
          prompt:
            'Christ made peace through His blood. Do you live as though that peace is real? Where in your heart do you still need to accept His peace?',
        },
      ],
    },

    /* ─── Colossians 1:20b — Reconciling All Things ────────────────────── */
    {
      ref: 'Colossians 1:20b',
      title: 'Reconciled in His Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              21,
              t('And you, that were '),
              hy('sometime alienated and enemies in your mind by wicked works', 'c1-alienated'),
              t(', '),
              hp('yet now hath he reconciled in the body of his flesh through death', 'c1-reconciled-flesh'),
              t(', to present you holy and unblameable and unreproveable in his sight:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-alienated',
          html:
            'The Colossians were once enemies of God, their minds hostile through wicked works. This is not guilt that can be felt and moved past—it is a state of alienation, a severing from God. They were cut off. The false teachers were playing on this fear: that the Colossians might slip back into that alienation, that they were not truly safe.',
        },

        {
          kind: 'commentary',
          id: 'c1-reconciled-flesh',
          html:
            'Christ has reconciled them through His flesh and death. Not through abstract theology, not through spiritual techniques, but through His physical body dying on the cross. His death addresses the rupture between God and humanity. It is concrete, historical, effective. And the result: they are presented to the Father holy, blameless, and above reproach. Not because they have earned it, but because Christ&apos;s death has made it possible.',
        },

        {
          kind: 'greek',
          id: 'c1-apokatallasso',
          title: 'Apokatallássō — "Reconcile"',
          script: 'ἀποκαταλλάσσω',
          translit: '<strong>apokatallássō</strong> · to reconcile completely; to restore to friendship; to make peace',
          description:
            'The prefix "apo" intensifies the meaning: a complete, total reconciliation. Not a truce, but a restoration of relationship. The hostility is ended. The alienation is over. Peace is made.',
        },

        {
          kind: 'christ',
          id: 'c1-reconciliation-connection',
          title: 'Christ Connection — Enemies Made Family',
          html:
            'Paul teaches this same mystery in Romans 5:10: "When we were enemies, we were reconciled to God by the death of his Son." And in 2 Corinthians 5:18–19, Paul says that God has "given to us the ministry of reconciliation." Reconciliation is not earned. It is made possible by Christ&apos;s death and offered freely to believers. The Colossians do not earn their holiness or blamelessness; Christ&apos;s death makes them acceptable to the Father.',
        },

        {
          kind: 'carry',
          html:
            'You were once an enemy. The false teachers may have made you doubt that. But Christ&apos;s death has ended that enmity. You are reconciled. You are presented to the Father as holy and blameless—not because you are perfect, but because Christ has made you acceptable. You can stand before God without fear. Your case is settled.',
        },

        {
          kind: 'reflection',
          id: 'c1-reconciliation-reflect',
          prompt:
            'Christ has reconciled you to the Father in His flesh. Do you live as though that reconciliation is complete, or do you still feel alienated from God?',
        },
      ],
    },

    /* ─── Colossians 1:24 — Paul's Sufferings ──────────────────────────── */
    {
      ref: 'Colossians 1:24',
      title: 'Paul&apos;s Sufferings for the Church',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              24,
              t('I now rejoice in my sufferings for you, and '),
              hy('fill up that which is behind of the afflictions of Christ in my flesh for his body&apos;s sake, which is the church', 'c1-sufferings'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-sufferings',
          html:
            'Paul speaks of filling up what is lacking in the afflictions of Christ. This does not mean Christ&apos;s suffering on the cross was insufficient for salvation—Paul makes clear that Christ&apos;s blood fully reconciles. Rather, Paul means there are sufferings connected to Christ&apos;s gospel and the building of His body that believers are called to endure. Paul has embraced those sufferings gladly. He rejoices in them because they serve the church. This is the opposite of the fear the false teachers promote. Paul models trust: if Christ is sufficient, then sufferings borne in Christ&apos;s cause are not punishment but participation in His work.',
        },

        {
          kind: 'carry',
          html:
            'Paul rejoices in affliction. Not because suffering is good, but because his suffering advances Christ&apos;s kingdom and builds the church. This is a radical reorientation of suffering: from something to be escaped to something that can be embraced when it serves Christ&apos;s purposes. If you face affliction, ask: Is this suffering connected to Christ&apos;s work? If so, it is not meaningless. It has a place in God&apos;s purposes.',
        },

        {
          kind: 'reflection',
          id: 'c1-suffering-reflect',
          prompt:
            'Paul rejoices in suffering for the church. How do you view suffering in your own life? Is there a way to embrace it more fully when it advances Christ&apos;s kingdom?',
        },
      ],
    },

    /* ─── Colossians 1:25–27 — The Mystery Revealed ───────────────────── */
    {
      ref: 'Colossians 1:25–27',
      title: 'The Mystery Revealed: Christ in You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              25,
              t('Whereof I am made a minister, according to the dispensation of God which is given to me for you, to '),
              hy('fulfil the word of God', 'c1-word-god'),
              t(';')
            ),
            verse(
              26,
              t('Even '),
              hy('the mystery which hath been hid from ages and from generations, but now is made manifest to his saints', 'c1-mystery-hidden'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-word-god',
          html:
            'Paul is fulfilling the word of God—not as if the gospel was incomplete without Paul, but in the sense that Paul is part of how God has chosen to spread and complete the proclamation of Christ&apos;s sufficiency. His apostolic ministry is integral to God&apos;s plan.',
        },

        {
          kind: 'commentary',
          id: 'c1-mystery-hidden',
          html:
            'The mystery had been hidden for ages. Not because God was keeping it a secret from Himself, but because it was hidden from human understanding until Christ came and revealed it. Now—in Paul&apos;s time and in ours—it is revealed to the saints. The hiddenness is over. Christ has come. The truth is known.',
        },

        {
          kind: 'greek',
          id: 'c1-mysterion',
          title: 'Mystérion — "Mystery"',
          script: 'μυστήριον',
          translit: '<strong>mystérion</strong> · mystery; a secret revealed; a truth hidden from some, revealed to others',
          description:
            'A mystery in Scripture is not something incomprehensible, but something that was previously hidden and is now revealed. The gospel itself is the great mystery—hidden in the Old Testament, revealed in Christ.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              27,
              t('To whom God would make known what is the '),
              hp('riches of the glory of this mystery among the Gentiles', 'c1-gentiles-mystery'),
              t('; which is '),
              hp('Christ in you, the hope of glory', 'c1-christ-in-you'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-gentiles-mystery',
          html:
            'The mystery extends to the Gentiles—not as a second-class revelation, but as a riches equal to Israel&apos;s. God&apos;s glory is being made known among all peoples. Christ is for all nations. This was revolutionary in the first century. The false teachers may have taught that only certain peoples, with certain disciplines, could access God. Paul insists: God&apos;s mystery is being revealed to all the Gentiles.',
        },

        {
          kind: 'commentary',
          id: 'c1-christ-in-you',
          html:
            'The mystery, the secret now revealed, is Christ in you. Not Christ in heaven, waiting. Not Christ as a distant judge. Christ indwelling you, filling you, living in you. And this indwelling is the hope of glory—the assurance of your transformation and resurrection. You are not separated from God by distance or ignorance or the need for intermediaries. Christ in you is God&apos;s presence within you.',
        },

        {
          kind: 'christ',
          id: 'c1-christ-in-you-connection',
          title: 'Christ Connection — Indwelling Presence',
          html:
            'Jesus promised this in John 14:23: "If a man love me, he will keep my words: and my Father will love him, and we will come unto him, and make our abode with him." The Father and Son indwell believers. Not occasionally, not theoretically, but actually present, living in the depths of your being. This is the central promise of the gospel—not rules, not systems, not intermediaries, but Christ Himself, present, alive in you.',
        },

        {
          kind: 'carry',
          html:
            'Christ is in you. Not you striving to find Christ, but Christ present within you. This is not psychology; it is theology. The Holy Spirit indwells believers. Christ Himself dwells in the believer through the Spirit. You are not alone. You are not searching for God from a distance. He is closer than your own breath. And His presence in you is "the hope of glory"—the guarantee that you will be transformed, resurrected, and glorified.',
        },

        {
          kind: 'reflection',
          id: 'c1-christ-in-you-reflect',
          prompt:
            'Christ in you is the hope of glory. Do you know His presence in you? If so, how does it shape your day? If not, what prevents you from believing it?',
        },
      ],
    },

    /* ─── Colossians 1:28–29 — Preaching and Ministry ─────────────────── */
    {
      ref: 'Colossians 1:28–29',
      title: 'Every Person, in All Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              28,
              t('Whom we preach, '),
              hp('warning every man, and teaching every man in all wisdom', 'c1-every-man'),
              t('; that we may '),
              hy('present every man perfect in Christ Jesus', 'c1-present-perfect'),
              t(':')
            ),
            verse(
              29,
              t('Whereunto I also labour, striving according to '),
              hp('his working, which worketh in me mightily', 'c1-his-working'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1-every-man',
          html:
            'Paul preaches Christ to every person in all wisdom. Not one gospel for the educated and another for the simple. Not different truths for different audiences. One Christ, preached with all the wisdom available, directed to every person. The false teachers may have offered secret knowledge for an elite few. Paul opens the gospel to all.',
        },

        {
          kind: 'commentary',
          id: 'c1-present-perfect',
          html:
            'The goal of Paul&apos;s ministry is to present every person perfect in Christ. Not morally flawless, but complete, fully mature, lacking nothing that belongs to a believer in Christ. This goal is possible because Christ Himself is sufficient. Paul is not building people toward perfection; he is presenting them as already complete in Christ.',
        },

        {
          kind: 'commentary',
          id: 'c1-his-working',
          html:
            'Paul&apos;s laboring and striving are sustained by Christ&apos;s working. The power is not Paul&apos;s effort; it is Christ&apos;s action working in him mightily. This is the model of all Christian ministry: human cooperation with divine power. Paul works, but not from his own strength. He strives, but Christ&apos;s energy is the source.',
        },

        {
          kind: 'carry',
          html:
            'You are called to present others to Christ, not by your own power or wisdom, but by Christ&apos;s power working in you. Whether in your family, your workplace, or your community, you are an agent of Christ&apos;s presence. Your role is to be faithful; His role is to work. Your labor is not wasted. It is sustained by His energy and directed toward His purpose.',
        },

        {
          kind: 'reflection',
          id: 'c1-labor-reflect',
          prompt:
            'Paul labors and strives in Christ&apos;s power. Where is Christ calling you to labor for Him? What would change if you believed His power is working in you mightily?',
        },
      ],
    },

    /* ─── Divider ──────────────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Summary ──────────────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'commentary',
          html:
            '<strong>Colossians 1 in Sum:</strong> Paul opens his letter with a thundering affirmation of Christ&apos;s supremacy. Christ is the image of God, the creator of all things, the sustainer of the cosmos, the head of the church, the one in whom all fullness dwells, the reconciler of all things. The false teachers have tried to diminish Christ by adding layers of spiritual disciplines, angelic mediators, and secret knowledge. Paul answers by showing that Christ is not in need of supplementary powers. He is complete. He is sufficient. And the mystery—the truth hidden for ages but now revealed—is that Christ Himself indwells believers. Christ in you. This is the hope of glory. If you are in Christ, you are reconciled, you are translated into the kingdom of light, you are part of His body, and His presence within you guarantees your transformation. No false teacher can offer you anything Christ does not already supply.',
        },
      ],
    },
  ],
};
