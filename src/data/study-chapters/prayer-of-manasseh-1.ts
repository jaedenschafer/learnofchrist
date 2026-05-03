import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Prayer of Manasseh 1 — The King&apos;s Repentance
 *
 * Manasseh, king of Judah, reigned fifty-five years—the longest reign in Judah&apos;s
 * monarchy. For most of it, he did what was evil in the sight of the Lord: altars
 * to foreign gods, innocent blood shed, the nation led into darkness. In his later
 * years, he was captured and carried into exile in Babylon. In captivity, something
 * shifts. He recognizes his own need. He turns to the God he had rejected.
 *
 * This brief prayer is Scripture&apos;s most powerful testimony to genuine repentance—
 * not from a saint but from a king whose hands are stained. Manasseh names his sins
 * without excuse, anchors his hope in God&apos;s mercy alone, and is restored. The prayer
 * reads like the voice of every sinner who has ever said, "I have gone too far. And yet
 * I will ask." The answer is always the same.
 */
export const PRAYER_OF_MANASSEH_1: RichChapterContent = {
  bookSlug: 'prayer-of-manasseh',
  bookName: 'Prayer of Manasseh',
  chapter: 1,

  intros: [
    'When Manasseh ascended Judah&apos;s throne as a boy, he inherited a nation God had chosen. Within a few years, he erected altars to Baal and Asherah in the very temple his ancestor David had built. He consulted mediums and spiritists. He shed innocent blood. And his people followed him into the dark. For fifty-five years, Judah turned away. Then, in exile—bound in chains in a foreign land—something breaks in the king. He bows. He asks.',
    'This prayer gives words to his turning. It is the prayer of someone who has looked at himself and cannot excuse what he sees. Manasseh names his sins as numerous as the sands of the sea. He does not plead his rank or his former power. He simply cries out: You are the God of the repentant. Save me, the unworthy. And God answers. Manasseh is restored to his throne, humbled, and he spends his remaining years undoing the darkness he had made. His prayer is a door anyone who has wandered far can still walk through.',
  ],

  sections: [
    /* ─── Verses 1–3: Invocation of the God of the Fathers ─────────────────── */
    {
      ref: 'Prayer of Manasseh 1–3',
      title: 'Invoking the God of the Fathers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('O Lord, '),
              hp('Almighty God of our fathers', 'pom-fathers-comm'),
              t(', God of Abraham, Isaac, and Jacob, and of all their righteous seed;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-fathers-comm',
          html:
            'Manasseh does not begin with his own case. He begins with God&apos;s covenant—the ancient promise made to Abraham, Isaac, and Jacob. He anchors his prayer in continuity with the faithful who came before. His father was evil; his grandfather was good. Manasseh stands outside both lines for a moment and cries to the God who has always kept His promises.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              2,
              t('Thou hast made heaven and earth, with all the ornament thereof: and thou hast made all the stars to tremble: and thou restrainest the water of the sea by thy word of command.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-creator',
          html:
            'Before he names his need, Manasseh names God&apos;s power. The God he addresses rules the cosmos. The stars tremble at His word. The waters obey Him. This is not small comfort to a man in chains; it is the foundation for hope itself. The same God who speaks creation into being can speak forgiveness into being.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('Thou art dreadful: and who may abide the fierceness of thine anger? and after thee may no man endure.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-dreadful',
          html:
            'Manasseh speaks of God&apos;s dread power. He is not flattering. He is being honest. This is the God whose anger no one can withstand. The sinner approaching such a God is approaching something awesome and terrible. Yet—and this is the prayer&apos;s pivot—he approaches anyway.',
        },
        {
          kind: 'carry',
          html:
            'When you come to God with what you&apos;ve done, you don&apos;t begin by excusing yourself. You begin by remembering who He is: sovereign, faithful to His covenant, more powerful than all the forces arrayed against you. Only from that grounding can you speak the truth about yourself.',
        },
      ],
    },

    /* ─── Verses 4–6: The God Who Appointed Repentance ──────────────────────── */
    {
      ref: 'Prayer of Manasseh 4–6',
      title: 'The God Who Appointed Repentance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              4,
              t('Thy mercies are so many, that they cannot be numbered: and '),
              hg('thy compassions', 'pom-compassion'),
              t(' are innumerable.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-compassion',
          html:
            'After the dread comes the mercy. In a single turn, Manasseh shifts from God&apos;s power to God&apos;s heart. His mercies cannot be numbered. His compassions are innumerable. This is the hinge on which the prayer swings: You are more terrible than sin, and more merciful than sin is deep.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              5,
              t('But thou, being the author of men, wast not angry with me for ever: and thou hast appointed repentance unto sinners, that they may be saved.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-repentance-appoint',
          html:
            'Here is the gospel before the gospel: God has <em>appointed repentance unto sinners, that they may be saved.</em> Repentance is not something sinners must earn. It is something God has ordained as the way back home. This is Manasseh&apos;s hope. Not that he is good enough to return, but that God has made a way for the unworthy to come.',
        },
        {
          kind: 'greek',
          id: 'pom-metanoia',
          title: 'Metanoia — &ldquo;Repentance&rdquo;',
          script: 'μετάνοια',
          translit: '<strong>metanoia</strong> · a turning; a change of mind; a complete reversal of direction',
          description:
            'Metanoia is not remorse alone. It is a turning. The sinner faced one way; now he faces the other. The mind, the will, the direction of the heart all reverse. It is a total reorientation.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              6,
              t('Thou, O Lord, that art the God of the just, hast appointed repentance not to the just, but to sinners.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-god-just',
          html:
            'This echo is deliberate. God is <em>the God of the just</em>, yet He appoints repentance to sinners. His justice does not exclude mercy; His mercy accomplishes what justice requires. In appointing repentance as a way back, God shows Himself both righteous and compassionate.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to clean yourself up to approach God. Repentance is His gift to you. He has appointed it. It is waiting. You need only to turn.',
        },
      ],
    },

    /* ─── Verses 7–8: The Multiplied Transgression ──────────────────────────── */
    {
      ref: 'Prayer of Manasseh 7–8',
      title: 'The Burden of Sin Acknowledged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              7,
              t('Thou, O Lord, being full of compassion and longsuffering, and repenting of the evils of men, hast appointed repentance and salvation unto sinners, and hast commanded me to repent ere I die.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-longsuffering',
          html:
            'The text emphasizes God&apos;s longsuffering—His patience. He did not strike Manasseh dead in his idolatry. He waited. He bore with the king&apos;s evil for decades. And now, in exile, He still calls. This is the patient love of God: He makes way for repentance because He does not want the sinner to die in his sin.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              8,
              t('I have sinned, O Lord, I have sinned; and I acknowledge mine iniquities.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-acknowledge',
          html:
            'The confession is simple, direct, and doubled. <em>I have sinned. I have sinned.</em> No explanation. No mitigation. Just truth. The word &ldquo;acknowledge&rdquo; means to confess openly, to admit without evasion. Manasseh stands before God in absolute transparency.',
        },
        {
          kind: 'christ',
          id: 'pom-christ-publican',
          title: 'Christ Connection — The Publican&apos;s Prayer',
          html:
            'Luke 18 records Jesus teaching about two men at prayer. A Pharisee recites his righteous deeds. A publican stands off, bowing his head, and says only, &ldquo;God be merciful to me a sinner.&rdquo; Jesus says the publican goes down justified, not the righteous man. Manasseh&apos;s prayer is the publican&apos;s prayer. It is the prayer that brings restoration.',
        },
        {
          kind: 'carry',
          html:
            'When you confess sin before God, do not soften it with context. Do not explain it away with the pressures you were under or the expectations placed on you. Name it. Acknowledge it. This honest admission is itself a gift—it breaks the power of the lie you had been telling yourself.',
        },
        {
          kind: 'reflection',
          id: 'pom-acknowledge-prompt',
          prompt: 'What would it mean for you to simply acknowledge a sin without excusing it? What have you been explaining instead of confessing?',
        },
      ],
    },

    /* ─── Verses 9–10: "Above the Number of the Sands of the Sea" ──────────── */
    {
      ref: 'Prayer of Manasseh 9–10',
      title: 'The Weight of Transgression',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              9,
              t('Behold, I am bound with many iron bands, that I cannot lift up mine head, neither have I any release: for I have provoked thy wrath, and done evil before thee: I did not thy commandments, neither kept I thy law.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-iron-bands',
          html:
            'Manasseh speaks of literal chains—the chains of exile—but also of the inner chains sin creates. <em>I cannot lift up mine head.</em> It is the posture of shame, of a neck bent under the weight of what one has done. He had broken God&apos;s commandments. He had not kept His law. And now the consequences bind him.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              10,
              t('I have sinned, O Lord, I have sinned, and I acknowledge mine iniquities. I beseech thee, I beseech thee, forgive me.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-beseech',
          html:
            'Again the doubled confession. Again the plea—doubled now as well. <em>I beseech thee, I beseech thee.</em> The repetition is not redundancy. It is the voice of one drowning, calling out, calling out. When Manasseh says his transgressions are multiplied, he speaks with the weight of a man who has lived with them.',
        },
        {
          kind: 'carry',
          html:
            'Do not move past your sin too quickly. Let yourself feel its weight for a moment. Let yourself acknowledge what you have done and its cost. Only from that place of honest reckoning can real forgiveness take root.',
        },
      ],
    },

    /* ─── Verses 11–12: "Bowed Down with Iron Bands" ──────────────────────────── */
    {
      ref: 'Prayer of Manasseh 11–12',
      title: 'Bowed Down and Unable',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              11,
              t('Do not destroy me, O God, together with the wicked: for I have sinned, O Lord, I am not worthy to behold and to see the height of heaven for the multitude of mine iniquities; I am bowed down with many iron bands, that I am unable to lift up mine head, neither have I any release: neither have I performed thy commandments, neither have I kept thy law.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-unworthiness',
          html:
            'Manasseh continues his lament but adds something crucial: <em>Do not destroy me, O God, together with the wicked.</em> He acknowledges that destruction is what the wicked receive. Yet he appeals to God&apos;s character—You, O God, are merciful. Do not deal with me as my sins deserve. The prayer swings between the weight of sin and the hope of mercy.',
        },
        {
          kind: 'hebrew',
          id: 'pom-asham-heb',
          title: 'Asham — &ldquo;Guilt&rdquo;',
          script: 'אָשָׁם',
          translit: '<strong>asham</strong> · guilt; transgression; the weight of culpability',
          description:
            'Asham is not mere emotion. It is the objective fact of guilt—the burden one carries for what one has done. Manasseh carries the weight of his transgressions. He does not shift blame to his advisors or the nation&apos;s traditions. The guilt is his, and he bears it.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              12,
              t('And now I am afflicted: for I am bound in these iron bands, in prison I am bowed down, that I cannot lift up mine head; neither is there any release for my sins: I have sinned, and am shut up, and cannot go forth.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-afflicted',
          html:
            'The repetition of the image—bowed down, bound, unable to lift the head—underscores the reality of the sinner&apos;s condition. Manasseh is not dramatizing. He is imprisoned both literally and spiritually. He cannot escape on his own. His only hope is the mercy of the One he has offended.',
        },
        {
          kind: 'carry',
          html:
            'There is a moment in genuine repentance when you acknowledge: I cannot fix this myself. I am bound. I cannot lift myself up. This is not despair; it is the beginning of hope—because the moment you admit you cannot save yourself is the moment you can ask the One who can.',
        },
      ],
    },

    /* ─── Verses 13–14: "I Bow the Knee of My Heart" ──────────────────────── */
    {
      ref: 'Prayer of Manasseh 13–14',
      title: 'The Bowing of the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              13,
              t('Now therefore I bow the knee of my heart, beseeching thee of grace. I have sinned, O Lord, I have sinned, and I know mine iniquities; I do not deny them.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-bow-heart',
          html:
            'This is the turning point. <em>I bow the knee of my heart.</em> It is not the knees of the body alone—though Manasseh may have been on his knees in that Babylonian prison. It is the bowing of the innermost self. The will, the pride, the resistance—all of it bends before God. And in that bowing, he asks for grace. Not justice. Not what he deserves. Grace.',
        },
        {
          kind: 'greek',
          id: 'pom-charis',
          title: 'Charis — &ldquo;Grace&rdquo;',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace; unmerited favor; gift given freely, not earned',
          description:
            'Charis is the word for grace in every New Testament letter. It means favor that is not owed. Manasseh does not ask for judgment according to his works. He asks for charis—the gift that comes not because he deserves it but because God is kind.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              14,
              t('I I beseech thee therefore, forgive me, I beseech thee, forgive me, destroy me not for mine iniquities; neither lay up in store for me punishment and damnation, O Lord; but after thy gentleness make me to repent, O Lord.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-gentleness',
          html:
            'The plea is urgent: <em>Forgive me, I beseech thee, forgive me.</em> But notice what Manasseh asks for—not just the erasure of his guilt, but <em>gentleness</em> that calls him to repentance. He wants not only mercy but transformation. He wants to become someone who does not return to his idolatries. He is asking for the God who is kind in order to make him kind.',
        },
        {
          kind: 'christ',
          id: 'pom-christ-knee',
          title: 'Christ Connection — Every Knee Shall Bow',
          html:
            'Paul writes, &ldquo;That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth&rdquo; (Philippians 2:10). Manasseh bows the knee of his heart to God. Christ promises that all creation will eventually bow at His name. The bowing Manasseh begins in exile is the same bowing that will fill all creation when Christ returns as Lord. His private repentance echoes an eternal reality.',
        },
        {
          kind: 'carry',
          html:
            'Bowing the knee of your heart is not weakness. It is the hardest and strongest thing a human can do—to stop resisting, to admit need, to turn toward the God you have been fleeing. In that bowing, pride dies. And in its place, something new can grow.',
        },
        {
          kind: 'reflection',
          id: 'pom-bow-prompt',
          prompt: 'What would it mean for you to bow the knee of your heart? What resistance in you would that require setting down?',
        },
      ],
    },

    /* ─── Verse 15: The Doxology ──────────────────────────────────────────────── */
    {
      ref: 'Prayer of Manasseh 15',
      title: 'Thou Art the God of the Repentant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              15,
              t('And thou, O Lord, art the God, even the God of them that repent; and in me thou wilt shew all thy goodness: for thou wilt save me, that am unworthy, according to thy great mercy. Therefore I will praise thee for ever all the days of my life: for all the powers of the heavens do praise thee, and thine is the glory for ever and ever. Amen.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pom-final-doxology',
          html:
            'The prayer ends not in the sorrow where it began but in hope and praise. <em>Thou art the God of them that repent.</em> This is the heart of the prayer. Not the God of the perfect, but of those who have fallen and come home. Manasseh names himself unworthy, yet he names also what God will do: <em>thou wilt save me, that am unworthy, according to thy great mercy.</em> The prayer moves from confession to certainty. From asking to praising. All the heavens join in that praise. And his own voice joins them.',
        },
        {
          kind: 'commentary',
          id: 'pom-unworthy',
          html:
            'Notice the finality: Manasseh speaks as though the answer is already given. <em>Thou wilt save me.</em> Not "thou mayest" or "if thou wilt," but the certainty of one who has heard God say yes. This is faith in its truest form—not confidence in one&apos;s own worthiness, but confidence in God&apos;s character and promise. The unworthy is saved not because he deserves it but because the God of mercy says so.',
        },
        {
          kind: 'hebrew',
          id: 'pom-kampsō',
          title: 'Kampsō — &ldquo;To Bend the Knee&rdquo;',
          script: 'κάμπτω',
          translit: '<strong>kampsō</strong> · to bend; to bow; to genuflect',
          description:
            'The Greek word for bowing appears often in the New Testament in contexts of submission and worship. Manasseh bends. The redeemed bend. One day, all creation will bend at the name of Jesus. It is a posture that runs through all of Scripture.',
        },
        {
          kind: 'christ',
          id: 'pom-christ-repent',
          title: 'Christ Connection — Come unto Me, All Ye That Labour',
          html:
            'Jesus says, &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls&rdquo; (Matthew 11:28–29). Manasseh comes. He is heavy laden. He is unworthy. Yet the God of the repentant—the God that Christ embodies—receives him. The same invitation stands open for every sinner who has ever wandered far.',
        },
        {
          kind: 'carry',
          html:
            'If you have sinned greatly—if you have done what you never thought you could do, if you have betrayed the good in yourself, if you have lived far from God—Manasseh&apos;s prayer is yours. The God of the repentant is waiting. He is not waiting for you to become worthy. He is waiting for you to come home. And when you do, the heavens will add their voices to yours in praise.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'pom-final-prompt',
          prompt: 'Manasseh was restored. He spent his remaining years undoing the darkness he had made. If God restored you fully, what would you spend your time undoing or building?',
        },
        {
          kind: 'artwork',
          matchTitle: /repentance|penitent|sorrow|supplication/i,
          caption: 'Prayer of Manasseh · The Turning of the King',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'I bow the knee of my heart, beseeching thee of grace. I have sinned, and thou wilt save me, that am unworthy, according to thy great mercy. For thou art the God of them that repent.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Prayer of Manasseh · Study Guide',
  },

  hasHebrew: true,
};
