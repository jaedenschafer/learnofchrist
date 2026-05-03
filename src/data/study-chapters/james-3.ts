import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * James 3 — The Tongue and Two Wisdoms
 *
 * James turns to what seems like a simple topic—how we speak—and opens up
 * something profound: the human mouth is a mirror of the human heart. Small as
 * the tongue is, it wields immense power. A bit can steer a horse. A small
 * rudder steers a great ship. And the tongue, this tiny member, boasts of great
 * things and kindles matter how small the fire.
 *
 * From there James moves to wisdom itself. Not all wisdom is the same. There
 * is wisdom from above—pure, peaceable, gentle, full of mercy and good fruits.
 * And there is wisdom from below—earthly, sensual, born of envy and bitter
 * strife. The two cannot dwell in the same heart. One leads to righteousness
 * sown in peace. The other leads to a world of iniquity.
 */
export const JAMES_3: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 3,

  intros: [
    'James begins with a sobering thought: not many should be teachers, because teachers are judged more strictly. To teach is to shape others with words. The tongue is such a small member of the body—but it sets the whole course of life on fire. If you can bridle your tongue, you can bridle the whole body. Yet no man can tame the tongue. It is an unruly evil, full of deadly poison. From the same mouth come blessing and curse. Wisdom from above changes that.',
    'The chapter moves to a fundamental question: what kind of wisdom governs your life? There is wisdom that is earthly and sensual, born of envy and bitter strife. It is devilish in its effects: it boasts, it lies, it tears down. And there is wisdom that comes from above. It is pure, peaceable, gentle, full of mercy and good fruits, without partiality and without hypocrisy. The fruit of righteousness is sown in peace by those who make peace.',
  ],

  opener: {
    matchTitle: /tongue|fire|wisdom/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── James 3:1 — Not Many Teachers ─────────────────────────────── */
    {
      ref: 'James 3:1',
      title: 'Be Not Many Teachers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('My brethren, be not many '),
                hy('masters', 'jam3-didask'),
                t(', knowing that we shall receive the greater '),
                hg('condemnation', 'jam3-krima'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-teachers',
          html:
            'James uses the word <em>didaskaloι</em>—teachers. The responsibility of teaching is not to be taken lightly. Teachers shape how others think and live. They will be judged more strictly, not because God is harsh, but because their influence is vast. A single word misplaced, a half-truth dressed up as gospel, echoes through a community. The standard for those who teach is higher because the stakes are higher.',
        },
        {
          kind: 'greek',
          id: 'jam3-didask',
          title: 'Didaskalos — Teacher',
          script: 'διδάσκαλος',
          translit: '<strong>didaskalos</strong> · teacher; master; instructor',
          description:
            'A teacher in the first-century world was someone who shaped the minds and hearts of others. The authority to teach was not a title but a responsibility—and a peril. Words have weight. Teaching has consequences.',
        },
        {
          kind: 'greek',
          id: 'jam3-krima',
          title: 'Krima — Judgment; Condemnation',
          script: 'κρίμα',
          translit: '<strong>krima</strong> · judgment; decision; condemnation; sentence',
          description:
            'The Greek word carries the weight of a judicial verdict. James is not speaking casually. Those who teach stand under a more exacting judgment. Their words will be weighed. Their influence will be measured. The one who shapes others through speech bears accountability for what the shaping produces.',
        },
        {
          kind: 'carry',
          html:
            'This is not a prohibition on teaching—the church has always had teachers. But it is a warning to anyone who takes that role: your words matter more than you know. If you speak into others&apos; lives, you answer for how your words land, what they produce, where they lead. The weight of it is meant to make you careful, prayerful, humble.',
        },
        {
          kind: 'reflection',
          id: 'jam3-teachers',
          prompt:
            'Have you ever been shaped by a teacher—someone whose words stuck with you and changed how you saw things? How do those words still move you? Now reverse it: whose life have you shaped through your words?',
        },
      ],
    },

    /* ─── James 3:2 — If Any Offend Not in Word ─────────────────────── */
    {
      ref: 'James 3:2',
      title: 'If Any Offend Not in Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('For in many things we offend all. If any man offend not in word, the same is a '),
                t('perfect man'),
                t(', and able also to '),
                hy('bridle the whole body', 'jam3-chalina'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-offend',
          html:
            'The word <em>offend</em> here means <em>stumble</em>, to fall into sin. We stumble in many things—in thought, in deed, in desire. But if a man does not stumble in his words, he has achieved something remarkable. He is <em>teleios</em>—perfect, complete, mature. Not sinless, but whole. A man who masters his speech has mastered the hardest thing: the gateway between the inner self and the world.',
        },
        {
          kind: 'greek',
          id: 'jam3-chalina',
          title: 'Chalinagōgēsai — To Bridle',
          script: 'χαλιναγωγέω',
          translit: '<strong>chalinagōgēsai</strong> · to bridle; to guide with a bridle',
          description:
            'The same word is used of a bit in a horse&apos;s mouth. A small piece of metal, placed rightly, can guide a powerful animal. If you can bridle your tongue—that small but fierce member—you can bridle the whole body. Speech is the test of self-mastery.',
        },
        {
          kind: 'christ',
          id: 'jam3-christ-offend',
          title: 'Christ Connection — The Sinless Word',
          html:
            'The apostle Peter testifies of Christ: <em>&ldquo;Who did no sin, neither was guile found in his mouth&rdquo;</em> (1 Pet 2:22). Jesus stumbled in no word. His tongue was perfect in this sense—always measured, always true, always in service to the Father and the good of the listener. When questioned, He answered with wisdom. When attacked, He did not lash back. When facing His accuser, He remained silent. His words reveal the perfect man.',
        },
        {
          kind: 'carry',
          html:
            'This is not a call to sinless perfection—only Christ has achieved that. But it is an invitation to grow in the mastery of your mouth. The tongue reveals what is in the heart. As your heart is being transformed by grace, your speech will follow. Ask God to make you careful with your words. Ask Him to help you see how much power you wield every time you speak.',
        },
        {
          kind: 'reflection',
          id: 'jam3-offend-not',
          prompt:
            'Recall a time you offended someone with your words. What was true about your heart in that moment? What would it take for you to bridle your tongue in similar situations now?',
        },
      ],
    },

    /* ─── James 3:3–5 — Bits, Helms, Fire ───────────────────────────── */
    {
      ref: 'James 3:3–5',
      title: 'The Small Rudder, the Mighty Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('Behold, we put bits in the horses&apos; mouths, that they may obey us; and we turn about their whole body.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Behold also the '),
                t('ships, which though they be so great, and are driven of fierce winds'),
                t(', yet are they turned about with a very '),
                t('small helm'),
                t(', whithersoever the governor listeth.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Even so the '),
                t('tongue is a little member'),
                t(', and '),
                hp('boasteth great things', 'jam3-boast'),
                t('. Behold, how great a matter a little '),
                hg('fire kindleth', 'jam3-fire-kindleth'),
                t('!'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-bits-ships',
          html:
            'The logic is perfect. A tiny bit in a horse&apos;s mouth directs a large, powerful animal. A small rudder turns a massive ship driven by fierce winds. The principle: small things placed at the right point of leverage can move far greater things. This is the power of the tongue. It is a little member, yet what it accomplishes is vast.',
        },
        {
          kind: 'commentary',
          id: 'jam3-fire-kindleth',
          html:
            'And then the image shifts to fire. A little fire can kindle a great matter—can set aflame a whole forest. So the tongue is a fire. A single word spoken in anger can ignite conflict. A rumor whispered in confidence can spread like flame. Slander, once released, is nearly impossible to retrieve. We speak hundreds of words a day. Most go unnoticed. But the one word that lands wrong, that wounds, that divides—that becomes the fire that burns.',
        },
        {
          kind: 'commentary',
          id: 'jam3-boast',
          html:
            'There is something almost absurd here—the tongue boasts of great things. This small member of the body speaks as if it controls everything. The boast is one of power: <em>I can make you look foolish. I can turn people against you. I can ruin reputations. I can start wars.</em> And in a way, it can. The tongue speaks what the heart desires, and the heart is sometimes eaten up with ambition, envy, the hunger to be greater than it is.',
        },
        {
          kind: 'carry',
          html:
            'You are already equipped with the power to shape the world around you. Every word you speak either builds or tears down, heals or wounds, unites or divides. The question is: will you use that power with care? Will you see your tongue as the bit that directs the horse of your whole life? Or will you let it rage as a fire that destroys what you claim to love?',
        },
        {
          kind: 'reflection',
          id: 'jam3-power-speech',
          prompt:
            'When have you witnessed the power of a single word or phrase to change the course of a conversation, a relationship, or a situation? What did that teach you about the real power you wield when you speak?',
        },
        {
          kind: 'artwork',
          matchTitle: /fire|tongue|rudder|bit|horse|ship|helm/i,
          caption: 'James 3:3–5 · The Tongue as Rudder and Fire',
        },
      ],
    },

    /* ─── James 3:6–8 — The Tongue is a Fire ───────────────────────── */
    {
      ref: 'James 3:6–8',
      title: 'The Tongue Is a Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('And the tongue is a fire, a '),
                hp('world of iniquity', 'jam3-iniquity'),
                t(': so is the tongue among our members, that it defileth the whole body, and setteth on fire the course of nature; and it is set on fire of hell.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('For every kind of beasts, and of birds, and of serpents, and of things in the sea, is tamed, and hath been tamed of mankind:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But the tongue can no man tame; it is an unruly evil, '),
                t('full of deadly poison'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-iniquity',
          html:
            'The tongue is described as a <em>cosmos of unrighteousness</em>—a whole world of iniquity. It is not just one small sin. It is the seat of a thousand sins. Envy lives there. Pride lives there. The lust to dominate, the hunger to wound, the satisfaction of revenge. The tongue gives voice to the ugliest part of the human heart.',
        },
        {
          kind: 'commentary',
          id: 'jam3-defile',
          html:
            'To defile the whole body—the whole person is stained by the sins that the tongue speaks. You cannot separate speech from character. When your words are corrupt, your whole self is seen as corrupt. And the tongue sets on fire <em>the course of nature</em>—perhaps the natural course of life, the normal order of things. It disrupts. It inflames. It is set on fire of hell itself, James says. The ultimate source of such destructive speech is not human weakness but spiritual rebellion.',
        },
        {
          kind: 'greek',
          id: 'jam3-glossa',
          title: 'Glossa — Tongue',
          script: 'γλῶσσα',
          translit: '<strong>glossa</strong> · tongue; language; word; utterance',
          description:
            'The tongue is not just flesh. It is the instrument of language, the means by which the inner self is made audible. When James calls it a world of iniquity, he is speaking of all the speech that flows from it, all the harm that words can do.',
        },
        {
          kind: 'commentary',
          id: 'jam3-tamed',
          html:
            'Mankind has tamed wild beasts—the lion, the serpent, the creatures of the sea. We have broken horses, trained hawks, subdued great animals to our will. But the tongue? No man can tame it. This is the thrust of James&apos;s realism. You cannot discipline your tongue by willpower alone. You cannot make yourself speak rightly simply by resolving to be kinder. Something deeper must change. The tongue must be changed from within.',
        },
        {
          kind: 'carry',
          html:
            'This is sobering, but it is not despair. James names the problem to move you away from the false hope that you can fix this yourself. You cannot tame the tongue. But God can change the heart that the tongue expresses. As the Spirit works in you, as your love for Christ grows, as the fear of God replaces the fear of man, your speech is transformed. Not by gritting your teeth and trying harder, but by being transformed in Christ.',
        },
        {
          kind: 'reflection',
          id: 'jam3-untamed',
          prompt:
            'In what situations do you find your tongue most difficult to control? What does that tell you about what is happening in your heart in those moments?',
        },
      ],
    },

    /* ─── James 3:9–12 — Bless and Curse ───────────────────────────── */
    {
      ref: 'James 3:9–12',
      title: 'Blessing and Curse from One Mouth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('Therewith bless we God, even the Father; and '),
                hp('therewith curse we men', 'jam3-curse'),
                t(', which are made after the similitude of God.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Out of the same mouth proceedeth blessing and cursing. My brethren, these things ought not so to be.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Doth a '),
                hg('fountain send forth at the same place', 'jam3-fountain'),
                t(' sweet water and bitter?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Can the fig tree, my brethren, bear olive berries? either a vine, figs? so can no fountain both yield salt water and fresh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-curse',
          html:
            'The paradox is striking. With the same mouth we bless God, our Creator, and curse men, who are made in God&apos;s image. This is not just hypocrisy; it is a contradiction of the deepest kind. If God is worthy of your blessing, then the creatures made in His image are also worthy of your respect. Yet we praise God on Sunday and wound our neighbor on Monday. We call ourselves followers of Christ and speak of others with contempt. The same mouth.',
        },
        {
          kind: 'commentary',
          id: 'jam3-fountain',
          html:
            'James uses the language of nature to expose the absurdity. A spring does not pour out both fresh water and salt. A fig tree does not bear olives. A grapevine does not produce figs. Each source produces what is in its nature to produce. So it should be with the human mouth. If your heart is turned toward God, if you have been renewed by the Spirit, then your mouth should pour out what the renewed heart produces: blessing, not curse. Kindness, not contempt. Truth spoken in love, not truth spoken in anger.',
        },
        {
          kind: 'carry',
          html:
            'This is a call to integrity. Not perfection, but honesty. If you are blessing God, then let your life match that. If you say you follow Christ, then let the way you speak about others—your family, your enemy, your rival, the stranger—reflect that allegiance. Your mouth reveals what you truly worship. Let it not lie.',
        },
        {
          kind: 'reflection',
          id: 'jam3-same-mouth',
          prompt:
            'Is there a gap between how you speak when you are worship, when you are talking with God, and how you speak in ordinary life? What would it look like to close that gap?',
        },
      ],
    },

    /* ─── James 3:13–15 — The Two Wisdoms ──────────────────────────── */
    {
      ref: 'James 3:13–15',
      title: 'Earthly Wisdom, Sensual and Devilish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 13,
              spans: [
                t('Who is a wise man and endued with knowledge among you? let him shew out of a good conversation his works with '),
                hy('meekness of wisdom', 'jam3-meekness'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But if ye have bitter envying and strife in your hearts, '),
                hp('glory not, and lie not against the truth', 'jam3-glory-lie'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('This wisdom descendeth not from above, but is '),
                hg('earthly, sensual, devilish', 'jam3-earthly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-shew',
          html:
            'James pivots from the power of the tongue to the source of speech: wisdom. True wisdom is not known by the loudness of your voice or the eloquence of your words. It is known by your works. By your conduct. By your character. A truly wise man shows his wisdom through his deeds, done with meekness. <em>Prautes</em>—meekness—is not weakness. It is strength under control, power harnessed for good.',
        },
        {
          kind: 'greek',
          id: 'jam3-meekness',
          title: 'Prautes — Meekness',
          script: 'πραύτης',
          translit: '<strong>prautes</strong> · meekness; gentleness; humility; strength under control',
          description:
            'Meekness in Scripture is not timidity or cowardice. It is the state of being humble before God—aware of your need for Him—while remaining strong. It is power held in reserve, used only in service to good.',
        },
        {
          kind: 'commentary',
          id: 'jam3-glory-lie',
          html:
            'If you harbor bitter envy and strife in your heart, do not claim wisdom. Do not boast of understanding. You are lying against the truth. The presence of envy, the taste for conflict, the hunger to win at another&apos;s expense—these are the markers of a heart far from God. No one who is truly wise, in God&apos;s sense, would wrap such things in the language of wisdom.',
        },
        {
          kind: 'commentary',
          id: 'jam3-earthly',
          html:
            'This wisdom—the wisdom of ambition, envy, strife—is <em>earthly</em>. It is bound to the things of this world, to status and reputation and the scramble for power. It is <em>psychical</em>—soulish, governed by the appetites of the flesh rather than the Spirit. And it is <em>daimoniōdēs</em>—devilish. It belongs to the realm of spiritual rebellion. To claim it as wisdom is to mistake the voice of hell for the voice of heaven.',
        },
        {
          kind: 'carry',
          html:
            'Ask yourself: what wisdom am I pursuing? Is it the kind that puffs me up, that makes me feel superior, that satisfies my hunger to win? Then it is earthly. Or is the wisdom I seek the kind that makes me humbler, kinder, more willing to serve, more at peace? That is the wisdom that comes from above. Your pursuit of wisdom shapes your entire life.',
        },
        {
          kind: 'reflection',
          id: 'jam3-which-wisdom',
          prompt:
            'When you are tempted to envy, when you feel the pull of strife, what are you really hungry for? What would it look like to turn that hunger toward heaven instead?',
        },
      ],
    },

    /* ─── James 3:16–18 — Heavenly Wisdom ──────────────────────────── */
    {
      ref: 'James 3:16–18',
      title: 'The Wisdom From Above',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('For where envying and strife is, there is confusion and every evil work.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But the wisdom that is from above is first '),
                hp('pure', 'jam3-pure'),
                t(', then '),
                hy('peaceable', 'jam3-peaceable'),
                t(', gentle, and '),
                hg('easy to be intreated', 'jam3-peithos'),
                t(', full of mercy and good fruits, without '),
                hy('partiality', 'jam3-partial'),
                t(', and without hypocrisy.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the fruit of righteousness is sown in '),
                hp('peace of them that make peace', 'jam3-make-peace'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-confusion',
          html:
            'Envying and strife produce <em>akatastasia</em>—chaos, disorder, tumult. And where there is chaos, every kind of evil finds room to grow. The person governed by envy and conflict cannot help but drag others with him into the wreckage. His words stir up anger. His actions provoke retaliation. His ambition breeds resentment. The whole community suffers from the domination of earthly wisdom.',
        },
        {
          kind: 'greek',
          id: 'jam3-pure',
          title: 'Hagnos — Pure',
          script: 'ἁγνός',
          translit: '<strong>hagnos</strong> · pure; chaste; without stain; unmixed',
          description:
            'Purity here means unmixed with selfish motives. The wisdom from above is not contaminated by the hunger for power or the desire to dominate. It seeks not its own advantage but the good of the community.',
        },
        {
          kind: 'greek',
          id: 'jam3-peaceable',
          title: 'Eirenikos — Peaceable',
          script: 'εἰρηνικός',
          translit: '<strong>eirenikos</strong> · peaceful; peaceable; promoting peace; marked by peace',
          description:
            'This wisdom does not provoke conflict but seeks to resolve it. It is not combative or quarrelsome. It aims at reconciliation, at unity, at shalom—the wholeness that comes when people are rightly related to one another and to God.',
        },
        {
          kind: 'greek',
          id: 'jam3-peithos',
          title: 'Epieikēs — Easy to Be Intreated',
          script: 'ἐπιεικής',
          translit: '<strong>epieikēs</strong> · gentle; reasonable; willing to listen; open to persuasion',
          description:
            'This wisdom is not rigid or dogmatic. It listens. It is willing to be corrected. It holds its convictions firmly but without the need to dominate others. It yields when yielding serves the truth.',
        },
        {
          kind: 'commentary',
          id: 'jam3-characteristics',
          html:
            'James lists the marks of heavenly wisdom: pure, peaceable, gentle, yielding, merciful, bearing good fruit, without partiality, without hypocrisy. It is a picture of what a person filled with God&apos;s Spirit looks like. Not weak, but strong and humble. Not easily fooled, but gracious. Not indifferent to truth, but willing to hear it from anyone.',
        },
        {
          kind: 'greek',
          id: 'jam3-partial',
          title: 'Adiakritos — Without Partiality',
          script: 'ἀδιάκριτος',
          translit: '<strong>adiakritos</strong> · without doubt; undoubting; without partiality; showing no favoritism',
          description:
            'To judge without partiality is to see people as they are, without the bias of status or appearance. The wisdom from above does not favor the rich over the poor, the powerful over the weak, the friend over the stranger.',
        },
        {
          kind: 'christ',
          id: 'jam3-christ-wisdom',
          title: 'Christ Connection — The Wisdom of God Incarnate',
          html:
            'Paul wrote: <em>&ldquo;Christ, the wisdom of God&rdquo;</em> (1 Cor 1:24). Jesus embodied every characteristic James lists. He was pure—His motives were never mixed with the hunger for power. He was peaceable—He came not to conquer but to reconcile. He was gentle and yielding to the Father&apos;s will, even unto death. He was full of mercy. He played no favorites—He spoke to the Samaritan woman, the tax collector, the Pharisee, the demon-possessed. He was without hypocrisy; His life matched His teaching. And the fruit of His righteousness, sown in peace, has produced a harvest that covers the earth.',
        },
        {
          kind: 'commentary',
          id: 'jam3-sown-peace',
          html:
            'The closing image is seeds sown. Righteousness is not something you possess and hide. It is something you sow. And it must be sown <em>in peace</em>—not forced, not imposed, but planted gently in soil prepared by your own peaceful witness. Those who make peace are the ones who harvest righteousness. Not in their own heart alone, but in the community around them.',
        },
        {
          kind: 'carry',
          html:
            'You are already a bearer of either earthly wisdom or heavenly wisdom. Every word you speak, every choice you make, every way you treat another person—it is seed that you are sowing. Are you sowing seeds of conflict and envy? Or seeds of peace and mercy? The harvest will come. Make sure you are planting the crop you actually want to reap.',
        },
        {
          kind: 'reflection',
          id: 'jam3-make-peace',
          prompt:
            'Where are you being invited to make peace—between people at odds, within yourself, with someone you have hurt or who has hurt you? What would it look like to sow seeds of righteousness in that soil?',
        },
        {
          kind: 'artwork',
          matchTitle: /peace|wisdom|mercy|fruit|pure|gentle/i,
          caption: 'James 3:17–18 · The Wisdom From Above',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share James 3',
    quote:
      'The tongue is a fire, a world of iniquity. If any man offend not in word, the same is a perfect man. The wisdom that is from above is first pure, then peaceable, gentle, full of mercy and good fruits, without partiality, and without hypocrisy. The fruit of righteousness is sown in peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 3 · Study Guide',
  },

  hasHebrew: false,
};
