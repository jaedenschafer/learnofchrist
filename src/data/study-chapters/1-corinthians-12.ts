import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 12 — Spiritual Gifts and the Body of Christ
 *
 * "Now concerning spiritual gifts, brethren, I would not have you ignorant."
 * The Corinthians are divided by fascination with the more spectacular gifts,
 * especially tongues. Paul redirects them: all gifts come from the same Spirit;
 * all serve the same Lord; all flow from the same God. The church is not a
 * competition. It is a body—one, with many members, each essential, each cared for.
 */
export const FIRST_CORINTHIANS_12: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 12,

  estimatedMinutes: { beginner: 9, intermediate: 18, deep: 25 },
  intros: [
    'The Corinthian church is fractured by envy over spiritual gifts. Some members boast of glossolalia—speaking in languages they cannot understand. Others emphasize prophecy or the power to work miracles. The church has turned gifts into a hierarchy, a ladder of status. The least impressive gifts are despised. The showy ones are coveted. Division has replaced unity.',
    'Paul writes to demolish this hierarchy. He does not deny that spiritual gifts are real, powerful, and given by God. But he redefines what makes a gift valuable. A gift is not valuable because it is impressive to an audience. It is valuable because it builds up the body. One Spirit distributes them. One Lord coordinates them. One God works through them all. And the church—the body of Christ—is stronger when every member is honored, not just the flashy ones.',
    'By the chapter&apos;s end, Paul will have invited the Corinthians into a vision so radical it still feels countercultural: a body where the feeble members are necessary, where the insignificant are given special honor, where no one can say "I don&apos;t need you." This is the church Christ intends. This is the body Paul calls them to become.',
  ],

  sections: [
    /* ─── 1 Corinthians 12:1–3 — Concerning Spiritual Gifts ──────────────── */
    {
      ref: '1 Corinthians 12:1–3',
      title: 'Concerning Spiritual Gifts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              1,
              hy('Now concerning spiritual gifts', 'cor12-pneumatika'),
              t(', brethren, I would not have you ignorant.')
            ),
            verse(2, t('Ye know that ye were Gentiles, carried away unto these dumb idols, even as ye were led.')),
            verse(
              3,
              t('Wherefore I give you to understand, that no man speaking by the Spirit of God calleth Jesus '),
              t('accursed'),
              t(': and that no man can say that Jesus is the Lord, but by the '),
              hy('Holy Ghost', 'cor12-pneuma-hagion'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-1-ignorant',
          html:
            'Paul opens with "I would not have you ignorant." This is Paul&apos;s way of saying: this matters. You are missing something essential about how God&apos;s Spirit works. The Corinthians think they understand gifts. They do not. They have made them into weapons of pride.',
        },
        {
          kind: 'greek',
          id: 'cor12-pneumatika',
          title: 'Pneumatika — Spiritual Gifts',
          script: 'πνευματικά',
          translit: '<strong>pneumatika</strong> · spiritual gifts; things of the Spirit; spiritual phenomena',
          description:
            'The word draws from pneuma—spirit, breath, wind. A spiritual gift is not something you buy or study. It is something breathed into you by God&apos;s Spirit. It is His wind moving in you.',
        },
        {
          kind: 'commentary',
          id: 'cor12-1-pagans',
          html:
            'Paul reminds them: you were once pagans, "carried away unto dumb idols." You did not understand the Spirit then. The false gods of Corinth could not speak. They were silent, empty. But the Spirit of the true God has a voice. It has purpose. And that purpose is to declare Jesus is Lord.',
        },
        {
          kind: 'commentary',
          id: 'cor12-1-accursed',
          html:
            'No one truly speaking by God&apos;s Spirit would curse Jesus. This may reflect actual chaos in Corinth—ecstatic speech that people could not understand, that might have sounded like cursing to outsiders. Or it may simply be Paul&apos;s test: the Spirit of God always confesses Jesus as Lord. That is the litmus test. Everything else flows from that.',
        },
        {
          kind: 'greek',
          id: 'cor12-pneuma-hagion',
          title: 'Pneuma Hagion — Holy Spirit',
          script: 'πνεῦμα ἅγιον',
          translit: '<strong>pneuma hagion</strong> · the Holy Spirit; the Spirit of holiness',
          description:
            'The Spirit is both power and presence. The same Spirit who hovered over chaos at creation moves inside each believer, breathing the confession that Jesus is Lord. No gift, no matter how spectacular, comes from anywhere else.',
        },
        {
          kind: 'christ',
          id: 'cor12-christ-accursed',
          title: 'Christ Connection — Jesus Is Lord',
          html:
            'The Spirit&apos;s work is always to point to Christ. "Ye cannot say that Jesus is the Lord, but by the Holy Ghost." This confession—Jesus is Lord—is the center of everything. It means Jesus has been raised. It means He has conquered death. It means He holds your future. Every gift serves this truth. Every gift is meant to build up those who believe it.',
        },
        {
          kind: 'carry',
          html:
            'When you speak or act in the Spirit&apos;s power, what comes out? Does it build up Christ&apos;s lordship in the hearts of others? Does it point them toward Him? Or have you made your gift about yourself? The Spirit&apos;s test is simple: does this draw others to Jesus?',
        },
        {
          kind: 'reflection',
          id: 'cor12-1-jesus-lord',
          prompt: 'What does it mean to you, right now, that Jesus is Lord? How would your day change if you truly lived under His lordship?',
        },
      ],
    },

    /* ─── 1 Corinthians 12:4–7 — Diversities of Gifts ─────────────────────── */
    {
      ref: '1 Corinthians 12:4–7',
      title: 'Diversities of Gifts, Same Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              4,
              t('Now there are '),
              hg('diversities of gifts', 'cor12-gifts-diverse'),
              t(', but the same Spirit.')
            ),
            verse(
              5,
              t('And there are differences of '),
              hy('administrations', 'cor12-diakoniai'),
              t(', but the same Lord.')
            ),
            verse(
              6,
              t('And there are diversities of '),
              hy('operations', 'cor12-energemata'),
              t(', but it is the same God which worketh all in all.')
            ),
            verse(
              7,
              t('But the '),
              t('manifestation of the Spirit'),
              t(' is given to every man to '),
              hg('profit withal', 'cor12-profit'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-gifts-diverse',
          html:
            'Paul establishes the rhythm that runs through the whole chapter: diversity and unity, side by side. There are diversities—plural, numerous, wide-ranging. But they all come from the same Spirit. The point is not that all gifts are the same. The point is that all gifts are <em>one</em> in their source.',
        },
        {
          kind: 'greek',
          id: 'cor12-diakoniai',
          title: 'Diakoniai — Administrations',
          script: 'διακονίαι',
          translit: '<strong>diakoniai</strong> · service; ministry; administration; ways of serving',
          description:
            'The same root as deacon. These are not flashy gifts but humble ones—the work of serving, administering, organizing. The Corinthians value prophecy; Paul reminds them that the quiet work of care and administration is also from the Lord.',
        },
        {
          kind: 'greek',
          id: 'cor12-energemata',
          title: 'Energemata — Operations',
          script: 'ἐνεργήματα',
          translit: '<strong>energemata</strong> · workings; operations; effects; that which is worked or accomplished',
          description:
            'The visible results of spiritual power. Miracles, healings, deliverance. But Paul insists: the same God who works miracles also works quietly through service and care. All are His operations.',
        },
        {
          kind: 'commentary',
          id: 'cor12-profit',
          html:
            '&quot;The manifestation of the Spirit is given to every man to profit withal.&quot; Here is Paul&apos;s redefinition of what a gift is <em>for</em>. Not for the ego of the gifted one. Not for status. For profit—for the building up, the strengthening, the benefit of others. A gift is only truly functioning when it serves the body.',
        },
        {
          kind: 'christ',
          id: 'cor12-christ-diversity',
          title: 'Christ Connection — Unity in Diversity',
          html:
            'In Christ, diversity is not a problem to solve. It is the design. "Different gifts, same Spirit. Different administrations, same Lord. Different operations, same God." This is the trinitarian rhythm of God&apos;s work—three in relationship, one in purpose. The church mirrors this mystery: many members, one body, animated by one Spirit toward one Lord in obedience to one God.',
        },
        {
          kind: 'carry',
          html:
            'You have been given a gift—a particular way God has chosen to work through you. Your gift looks different from your neighbor&apos;s. That is not a mistake. That is design. But your gift is not yours to hoard or to glory in. It is given <em>to profit</em>—to build up those around you. What would change if you started asking every day: how can my gift serve someone else today?',
        },
        {
          kind: 'reflection',
          id: 'cor12-4-gifts-why',
          prompt: 'What spiritual gift has God given you? How are you using it to build up others, and not just to feel capable or impressive?',
        },
      ],
    },

    /* ─── 1 Corinthians 12:8–10 — The List of Gifts ────────────────────────── */
    {
      ref: '1 Corinthians 12:8–10',
      title: 'The Manifestation of Gifts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              8,
              t('For to one is given by the Spirit the word of '),
              t('wisdom'),
              t('; to another the word of '),
              t('knowledge'),
              t(' by the same Spirit;')
            ),
            verse(
              9,
              t('To another '),
              t('faith'),
              t(' by the same Spirit; to another the gifts of '),
              t('healing'),
              t(' by the same Spirit;')
            ),
            verse(
              10,
              t('To another the working of '),
              t('miracles'),
              t('; to another '),
              t('prophecy'),
              t('; to another '),
              t('discerning of spirits'),
              t('; to another divers kinds of '),
              t('tongues'),
              t('; to another the '),
              t('interpretation of tongues'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-list-variety',
          html:
            'Paul lists the gifts. Not because this list is exhaustive—he will add more in verse 28. But because the Corinthians need to see: look how different these are from each other. Wisdom is not healing. Knowledge is not faith. Prophecy is not tongues. They are as different as eyes and ears. And God gives them all.',
        },
        {
          kind: 'commentary',
          id: 'cor12-8-wisdom-knowledge',
          html:
            'Wisdom and knowledge are paired—both are intellectual gifts. Wisdom is the ability to see how God&apos;s truth applies to a situation. Knowledge is the ability to perceive a truth the Spirit wants revealed. These are the gifts the Corinthians probably value. They sound impressive. But Paul will show that they are no more important than the seemingly humbler ones.',
        },
        {
          kind: 'commentary',
          id: 'cor12-9-faith-healing',
          html:
            'Faith here is not saving faith—that everyone has—but faith as a gift: the ability to trust God in circumstances where others would despair. Healing is the power to restore bodies broken by sickness. Both are deeply needed. Both are humble—they require you to surrender control.',
        },
        {
          kind: 'commentary',
          id: 'cor12-10-miracles-prophecy',
          html:
            'Miracles are the working of God&apos;s power over the laws of nature. Prophecy is the speaking of God&apos;s word into the present moment. Discerning of spirits is the ability to sense whether a spiritual presence is from God or not. These are the gifts the Corinthians covet most. Paul lists them here not to exalt them but to place them alongside the others.',
        },
        {
          kind: 'commentary',
          id: 'cor12-10-tongues',
          html:
            'Tongues—glossolalia, speaking in languages not learned. Interpretation of tongues—the ability to translate or give the meaning of what has been said. The Corinthians have made tongues a status symbol. Paul includes them in the list, but notice: they come last, and they are paired with interpretation. A tongue without interpretation benefits no one but the speaker.',
        },
        {
          kind: 'carry',
          html:
            'You may look at this list and feel envious. "I don&apos;t have any of those gifts." Or you may have one and feel proud. But Paul is about to tell you something that will reframe everything: these are not the only gifts. And the ones you are missing, the body needs from someone else. And the one you have? It is not for you to glory in. It is for the building up of the body.',
        },
        {
          kind: 'reflection',
          id: 'cor12-10-gifts-list',
          prompt: 'Which gifts on this list do you wish you had? Why? What would change if you truly believed that your actual gifts are the ones you need for your season?',
        },
      ],
    },

    /* ─── 1 Corinthians 12:11 — All Worketh by the Same Spirit ────────────── */
    {
      ref: '1 Corinthians 12:11',
      title: 'All Worketh by That Same Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              11,
              t('But all these worketh that one and the selfsame Spirit, '),
              hy('dividing to every man severally', 'cor12-merizo'),
              t(' as he will.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-11-one-spirit',
          html:
            'This is the turning point. All these gifts—the impressive and the humble, the visible and the invisible, the ones you want and the ones you don&apos;t understand—all come from one Spirit. <em>Selfsame</em>. Identical. No schism in the source. All are equally His work.',
        },
        {
          kind: 'greek',
          id: 'cor12-merizo',
          title: 'Merizo — Dividing Severally',
          script: 'μερίζω',
          translit: '<strong>merizo</strong> · divide; distribute; allot; apportion to each one individually',
          description:
            'The Spirit does not give all gifts to all people. He divides them out. He knows what each person needs, what each body needs, and He apportions accordingly. You do not get to choose. Neither do you get to demand someone else&apos;s gift. The Spirit is the Giver. Trust Him.',
        },
        {
          kind: 'commentary',
          id: 'cor12-11-as-he-will',
          html:
            '"As he will." The Spirit is sovereign. This is the most important phrase in the chapter. The Spirit decides. Not you. Not your preference. Not what looks impressive to the crowd. The Spirit divides to every man severally—<em>to each one, individually</em>—as <em>He</em> decides. This should humble the Corinthians. It should silence their boasting.',
        },
        {
          kind: 'christ',
          id: 'cor12-christ-spirit-sovereign',
          title: 'Christ Connection — The Spirit&apos;s Sovereignty',
          html:
            'Jesus promised the Spirit would be sent to empower the church. The Spirit gives gifts "as he will." This is not a small phrase. It means the Spirit is sovereign, wise, and present. Jesus entrusted His church to the Spirit&apos;s care and gifting. You are not competing with God over what gifts you should have. You are partnering with the Spirit in using the gift He has given you.',
        },
        {
          kind: 'carry',
          html:
            'Somewhere today, you will be tempted to envy someone else&apos;s gift or to feel small about your own. In that moment, remember: the Spirit—the same Spirit who rose Jesus from the dead, who moved on the waters at creation, who indwells you right now—that Spirit has looked at you and said, "This is what you need. This is what the body needs from you." He does not make mistakes.',
        },
        {
          kind: 'reflection',
          id: 'cor12-11-as-he-will',
          prompt: 'Can you say with honesty that the gift the Spirit has given you is the right one for you? What would it mean to actually trust that?',
        },
      ],
    },

    /* ─── 1 Corinthians 12:12–13 — One Body, Many Members ─────────────────── */
    {
      ref: '1 Corinthians 12:12–13',
      title: 'Baptized into One Body',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              12,
              t('For as the body is one, and hath many members, and all the members of that one body, being many, are '),
              t('one body'),
              t(': so also is Christ.')
            ),
            verse(
              13,
              t('For by one Spirit are we all '),
              hy('baptized into one body', 'cor12-baptizo-soma'),
              t(', whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-12-one-body',
          html:
            'Paul shifts to metaphor. The body is one organism. It has many members—hands, feet, eyes, ears. But they are not competing parts. They are parts of a single body. The eye does not say to the hand, "I don&apos;t need you." The hand does not say to the foot, "I am more important." They work together. They share one life. They are members of one body.',
        },
        {
          kind: 'commentary',
          id: 'cor12-12-christ',
          html:
            '"So also is Christ." The church is not just like a body. The church <em>is</em> Christ&apos;s body. The Corinthians are not a collection of individuals happening to meet together. They are a living organism animated by Christ&apos;s presence, breathing with His breath, moved by His will.',
        },
        {
          kind: 'greek',
          id: 'cor12-baptizo-soma',
          title: 'Baptizo Soma — Baptized into Body',
          script: 'βαπτίζω σῶμα',
          translit: '<strong>baptizo</strong> · baptize; immerse · <strong>soma</strong> · body',
          description:
            'Baptism immerses you into the body. It is not an individual ritual. It is incorporation—you disappear into something larger than yourself. Your identity is no longer just you. It is you as a member of the body of Christ.',
        },
        {
          kind: 'commentary',
          id: 'cor12-13-jew-gentile',
          html:
            '"Whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit." This is revolutionary. The categories that divided the ancient world—ethnicity, social status—are erased in the body of Christ. All drink from one Spirit. All are equally members. This would have scandalized the Corinthians, many of whom had belonged to the social elite.',
        },
        {
          kind: 'christ',
          id: 'cor12-christ-one-body',
          title: 'Christ Connection — The Body of Christ',
          html:
            'Ephesians deepens this: "The church, which is his body, the fulness of him that filleth all in all" (Eph. 1:23). You are not just a member of an organization. You are a limb of Christ. Your faithfulness, your service, your presence—these are extensions of His presence in the world. When you use your gift to build up the body, you are literally extending Christ&apos;s work on the earth.',
        },
        {
          kind: 'carry',
          html:
            'You are not a disconnected individual. You are part of a body. Your neighbor&apos;s joy is your joy because you share one life. Your neighbor&apos;s struggle is your struggle. When one member suffers, all suffer. When one rejoices, all rejoice. This is not sentiment. This is the literal anatomy of your spiritual life.',
        },
        {
          kind: 'reflection',
          id: 'cor12-12-body-member',
          prompt: 'Do you experience yourself as a member of Christ&apos;s body, or as a disconnected individual? What would change in how you live if you truly grasped your membership?',
        },
        {
          kind: 'artwork',
          matchTitle: /body|member|limb/i,
          caption: '1 Corinthians 12:12–13 · One Body, Many Members',
        },
      ],
    },

    /* ─── 1 Corinthians 12:14–20 — The Hand and the Foot ────────────────── */
    {
      ref: '1 Corinthians 12:14–20',
      title: 'The Foot Cannot Say to the Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(14, t('For the body is not one member, but many.')),
            verse(
              15,
              t('If the foot shall say, Because I am not the '),
              t('hand'),
              t(', I am not of the body; is it therefore not of the body?')
            ),
            verse(
              16,
              t('And if the ear shall say, Because I am not the eye, I am not of the body; is it therefore not of the body?')
            ),
            verse(
              17,
              t('If the whole body were an eye, where were the hearing? If the whole were hearing, where were the smelling?')
            ),
            verse(18, t('But now hath God set the members every one of them in the body, as it hath pleased him.')),
            verse(
              19,
              t('And if they were all one member, where were the body?')
            ),
            verse(
              20,
              t('But now are they many members, yet but one body.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-14-many-members',
          html:
            'Paul is speaking to the Corinthians who feel insignificant. They don&apos;t have the gift of prophecy or tongues, so they feel like non-members. But Paul says no. The body is <em>not</em> one member. It is many. And every member matters, or the whole body fails.',
        },
        {
          kind: 'commentary',
          id: 'cor12-15-foot-hand',
          html:
            'The foot says, "I am not the hand, so I am not of the body." This is the voice of the Corinthian who feels inadequate. But Paul asks: is it therefore not of the body? Of course it is. The foot is part of the body. It has a different function from the hand, but it is no less essential. Try walking without feet.',
        },
        {
          kind: 'commentary',
          id: 'cor12-17-whole-eye',
          html:
            '"If the whole body were an eye, where were the hearing?" Paul uses absurdity to make his point. If everyone had the same gift—if the whole church was all prophecy or all healing—the body would be crippled. You need hands. You need ears. You need a stomach. You need parts that are hidden, that do unglamorous work.',
        },
        {
          kind: 'commentary',
          id: 'cor12-18-god-set',
          html:
            '"God hath set the members every one of them in the body, as it hath pleased him." This is crucial. You did not choose your place in the body. God set you there. He arranged the members according to His pleasure, His wisdom, His design. If you are a foot instead of a hand, that is not a mistake. That is His arrangement.',
        },
        {
          kind: 'carry',
          html:
            'You may feel like the foot while others seem to be the hand. You may do invisible work—logistics, care, service—while others preach or lead. But the body does not move forward without feet. Your hidden faithfulness is holding the whole body up. God sees it. The body needs it. Your function is not less valuable because it is less visible.',
        },
        {
          kind: 'reflection',
          id: 'cor12-15-foot-function',
          prompt: 'Where do you feel insignificant in the body of Christ? What would it mean to believe that your function—exactly as it is—is essential and arranged by God?',
        },
      ],
    },

    /* ─── 1 Corinthians 12:21–26 — No Need of Thee; Feeble Members Necessary ─ */
    {
      ref: '1 Corinthians 12:21–26',
      title: 'The Feeble Members Are Necessary',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              21,
              t('And the eye cannot say unto the hand, I have no need of thee: nor again the head to the feet, I have no need of you.')
            ),
            verse(
              22,
              t('Nay, much rather those members of the body, which seem to be more feeble, are '),
              t('necessary'),
              t(':')
            ),
            verse(
              23,
              t('And those members of the body which we think to be less honourable, upon these we bestow more abundant honour; and our uncomely parts have more abundant comeliness;')
            ),
            verse(
              24,
              t('For our comely parts have no need: but God hath tempered the body together, having given '),
              t('more abundant honour'),
              t(' to that part which lacked:')
            ),
            verse(
              25,
              t('That there should be no '),
              hy('schism in the body', 'cor12-schisma'),
              t('; but that the members should have the '),
              hg('same care one for another', 'cor12-merimna'),
              t('.')
            ),
            verse(
              26,
              t('And whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-21-need',
          html:
            'The eye is valuable. The head is valuable. But notice: Paul says the eye cannot say to the hand, "I don&apos;t need you." And the head cannot say to the feet, "I don&apos;t need you." The strong cannot write off the weak. The visible cannot ignore the invisible. Interdependence is built into the body&apos;s design.',
        },
        {
          kind: 'commentary',
          id: 'cor12-22-feeble-necessary',
          html:
            'Here is the inversion that would have shocked the Corinthians: "Those members which seem to be more feeble, are necessary." The weak are not a burden to be tolerated. They are essential to the body&apos;s functioning. A body without its hidden, "feeble" parts—organs, bones, the nervous system—would collapse.',
        },
        {
          kind: 'greek',
          id: 'cor12-schisma',
          title: 'Schisma — Schism',
          script: 'σχίσμα',
          translit: '<strong>schisma</strong> · split; tear; division; separation',
          description:
            'A schism is a tear in the fabric. The Corinthian church has been torn by competition, by hierarchy, by the despising of lesser gifts. Paul is calling them to repair the tear by honoring the whole body.',
        },
        {
          kind: 'commentary',
          id: 'cor12-23-uncomely',
          html:
            '"Our uncomely parts have more abundant comeliness." The parts of our body we are ashamed of—the intestines, the genitals—God covers with honor. He protects them. He cares for them. In the same way, the members of the church who feel ashamed, who feel hidden or despised, should be given more honor, not less.',
        },
        {
          kind: 'commentary',
          id: 'cor12-24-tempered',
          html:
            '"God hath tempered the body together." The word "tempered" suggests skillful arrangement, like a musician tuning an instrument. God has arranged the body with care, with wisdom. He has given more honor to the parts that lack it. This is His design for harmony.',
        },
        {
          kind: 'greek',
          id: 'cor12-merimna',
          title: 'Merimna — Care',
          script: 'μέριμνα',
          translit: '<strong>merimna</strong> · care; concern; solicitude; anxious care for another',
          description:
            'The body is held together not by hierarchy but by mutual care. Each member cares for the others. This is not natural. It requires vigilance, deliberation, sacrifice. But it is God&apos;s intention for the body.',
        },
        {
          kind: 'commentary',
          id: 'cor12-26-suffer-rejoice',
          html:
            '"Whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it." This is the test of whether you truly belong to the body. When a neighbor grieves, do you grieve? When a neighbor is celebrated, do you celebrate? If you feel envy or indifference, you have not yet grasped what it means to be one body.',
        },
        {
          kind: 'carry',
          html:
            'The next time someone in your community is struggling—their marriage is failing, their faith is wavering, their job has ended—that is not someone else&apos;s problem. That is your body suffering. You should suffer with them. And when someone is honored or experiencing joy, that is your body rejoicing. You should rejoice. This is not optional. This is the anatomy of the church.',
        },
        {
          kind: 'reflection',
          id: 'cor12-26-care',
          prompt: 'Whose suffering could you enter more fully? Whose joy could you celebrate without envy? Where is God calling you to practice mutual care?',
        },
      ],
    },

    /* ─── 1 Corinthians 12:27–28 — Ye Are the Body of Christ ────────────── */
    {
      ref: '1 Corinthians 12:27–28',
      title: 'Members of Christ, Arranged by God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              27,
              t('Now ye are the body of Christ'),
              t(', and members in particular.')
            ),
            verse(
              28,
              t('And God hath set some in the church, first apostles, secondarily prophets, thirdly teachers; after that miracles, then gifts of healings, helps, governments, diversities of tongues.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-27-ye-are',
          html:
            '"Now ye are the body of Christ." Paul does not say you are like a body. You are <em>the body of Christ</em>. You are His literal, physical presence in the world. When you act, Christ acts. When you serve, Christ serves. When you love, Christ loves. This is the most staggering claim Paul could make to the Corinthians—and to us.',
        },
        {
          kind: 'commentary',
          id: 'cor12-27-particular',
          html:
            '"Members in particular." You are not a generic member. You are <em>this particular</em> member. Your specific story, your specific gifts, your specific location in the body. God knows you by name. He has not hidden you in the crowd. He has set you, specifically, where you are.',
        },
        {
          kind: 'commentary',
          id: 'cor12-28-god-set',
          html:
            '"God hath set some in the church, first apostles, secondarily prophets, thirdly teachers." Paul lists the roles in order of apparent importance. But notice: he immediately begins to flatten the hierarchy. Apostles, prophets, teachers come first, yes. But then—miracles, healings, helps, governments, tongues. Helps? Governments? These are practical, invisible gifts. Yet they are listed on the same footing as prophecy.',
        },
        {
          kind: 'carry',
          html:
            'You are the body of Christ. Not will be. Are. Right now, in your weakness, in your specific gift, in your exact location in the world, you are extending Christ&apos;s presence. Someone needs your faithfulness. Someone needs your particular skill, your particular encouragement, your particular love. Christ has positioned you there. Stop waiting to be impressive. Start being present.',
        },
        {
          kind: 'reflection',
          id: 'cor12-27-particular-role',
          prompt: 'In what particular way are you the body of Christ? What role has God set you in, right now, in your specific church or community?',
        },
      ],
    },

    /* ─── 1 Corinthians 12:29–31 — Covet Earnestly the Best Gifts ──────────── */
    {
      ref: '1 Corinthians 12:29–31',
      title: 'A More Excellent Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(29, t('Are all apostles? are all prophets? are all teachers? are all workers of miracles?')),
            verse(30, t('Have all the gifts of healing? do all speak with tongues? do all interpret?')),
            verse(
              31,
              t('But '),
              hg('covet earnestly the best gifts', 'cor12-zelos-gifts'),
              t(': and yet shew I unto you a '),
              t('more excellent way'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor12-29-rhetorical',
          html:
            'The questions are rhetorical. Of course not all are apostles. Of course not all are prophets. Of course not all have healing or tongues. If they did, the body would not be a body. It would be a blob. Paul is using satire to make the point that the Corinthians have been chasing impossible things—they want everyone to be impressive.',
        },
        {
          kind: 'greek',
          id: 'cor12-zelos-gifts',
          title: 'Zēlos — Covet Earnestly',
          script: 'ζῆλος',
          translit: '<strong>zēlos</strong> · zeal; earnest desire; fervent aspiration',
          description:
            'Paul&apos;s instruction surprises many: covet earnestly the best gifts. But in context, this is not permission to be envious. It is permission to aspire. Desire the gifts that build up the body most. But know that the Spirit decides which ones you receive.',
        },
        {
          kind: 'commentary',
          id: 'cor12-31-more-excellent',
          html:
            '"Yet shew I unto you a more excellent way." And with that line, Paul pivots. He has spent the chapter defending spiritual gifts as real, powerful, and necessary. But gifts are not the point. What is more excellent than prophecy, more powerful than miracles, more necessary than any individual gift? Love. The next chapter is Paul&apos;s hymn to love—and it is the climax of everything he has been saying.',
        },
        {
          kind: 'christ',
          id: 'cor12-excellent-way',
          title: 'Christ Connection — The Way of Love',
          html:
            'Jesus summarized the entire law in two commands: love God, and love your neighbor as yourself (Matt. 22:37–40). Every gift Paul has listed serves this. Prophecy, healing, teaching—they are all channels for love. But love itself, unadorned and costly, is more excellent than any gift. In the cross, Jesus gave the ultimate proof: love that lays down its life.',
        },
        {
          kind: 'carry',
          html:
            'You may have a gift. You may have many gifts. But if they are not expressions of love—real, costly, other-focused love—they are noise. They are nothing. Paul is about to show you what love looks like. Let it remake you.',
        },
        {
          kind: 'reflection',
          id: 'cor12-31-love-gifts',
          prompt: 'What gift are you using right now? Is it an expression of love for God and for others, or have you made it about yourself?',
        },
        {
          kind: 'artwork',
          matchTitle: /love|heart/i,
          caption: '1 Corinthians 12:31 · The More Excellent Way',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Now ye are the body of Christ, and members in particular. Covet earnestly the best gifts: and yet shew I unto you a more excellent way.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 12 · Study Guide',
  },

  hasHebrew: false,
};
