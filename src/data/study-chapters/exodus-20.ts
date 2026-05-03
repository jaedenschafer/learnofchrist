import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 20 — The Decalogue, spoken directly by God to all Israel.
 *
 * In the shadow of Mount Sinai, God speaks ten words — the heart of His law.
 * But the chapter doesn&apos;t end with commandments. It ends with the people
 * terrified, asking Moses to mediate, and God giving instructions on how to
 * build altars. These three layers — the words themselves, humanity&apos;s fear,
 * and the provision for sacrifice — tell the whole Gospel story in miniature.
 */
export const EXODUS_20: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 20,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 20 },
  intros: [
    'Exodus 20 is the moment three million people stand at the base of a mountain wrapped in smoke and thunder, and hear the voice of God speak directly to them — not through a priest or prophet, but to all Israel at once. The Ten Commandments are the heart of God&apos;s covenant with His people. They are not arbitrary rules. They are the shape of a life lived in covenant friendship with God and with each other.',
    'What makes this chapter extraordinary is what happens after the words are spoken. The people are afraid. They ask Moses to stand between them and God. And instead of withdrawing in anger, God gives them the way forward — instructions on altars, on sacrifice, on how broken people stay in relationship with a holy God. The Decalogue without the altar is impossible. The altar without the Decalogue is empty. Together they show us why we need a mediator, and why that mediator would have to be more than human.',
  ],

  opener: {
    matchTitle: /sinai|mount.*god|moses.*tablets|ten.*commandments/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Exodus 20',
    quote:
      'God speaks ten words to all Israel: no other gods, no graven image, guard His name, remember the Sabbath, honor father and mother, do not kill, do not commit adultery, do not steal, do not bear false witness, do not covet. The law exposes the heart; only grace can satisfy it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 20 · Study Guide',
  },

  sections: [
    /* ─── Exodus 20:1–2 — The Voice of God ───────────────────────────── */
    {
      ref: 'Exodus 20:1–2',
      title: 'The Voice of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('And God spake all these words, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of '),
                hy('bondage', 'hebrew-avdut'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-spake-all',
          html:
            'God does not send a prophet. He does not write on paper. He speaks <em>directly to all Israel</em> — the text says His voice was heard by the entire nation. This is the only place in scripture where God addresses a whole people at once with the full weight of His presence. No mediator. No filter. For a moment, there is only one voice and three million listeners.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-avdut',
          title: 'Avdut — &ldquo;bondage, slavery&rdquo;',
          script: 'עַבְדוּת',
          translit: '<strong>avdut</strong> · the state of being a servant bound to another',
          description:
            'God does not open with a threat or a command. He opens with a reminder: <em>I am the one who freed you.</em> The law comes not to enslave Israel to a tyrant, but to shape the people who have already been set free. Every commandment that follows is spoken into the ears of people who know what it means to have been delivered.',
        },
        {
          kind: 'carry',
          html:
            'The shape of your whole obedience to God rests on a memory: you have been freed. Not because you earned it, not because you kept any rules, but because God saw you in your chains and came down. Whatever hard words God speaks to you today, they are spoken to you as one who is already His — already bought, already set free. You are not obeying to escape bondage. You are obeying because you have already escaped it.',
        },
        {
          kind: 'reflection',
          id: 'exodus20-freedom',
          prompt:
            'What captivity has God freed you from — addiction, shame, someone else&apos;s control, your own fear? How does remembering your own liberation change the way you hear His commands?',
        },
      ],
    },

    /* ─── Exodus 20:3–7 — The Vertical Words ────────────────────────── */
    {
      ref: 'Exodus 20:3–7',
      title: 'Toward God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 3,
              spans: [
                t('Thou shalt have '),
                hg('no other gods before me', 'c-no-other-gods'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Thou shalt not make unto thee any '),
                hy('graven image', 'hebrew-pesel'),
                t(', or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And shewing mercy unto thousands of them that love me, and keep my commandments.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Thou shalt not take the name of the LORD thy God in '),
                hg('vain', 'c-vain-name'),
                t('; for the LORD will not hold him guiltless that taketh his name in vain.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-other-gods',
          html:
            'The Decalogue begins not with a negative but with a claim: <em>I am the LORD thy God.</em> You belong to Me. Therefore — as a consequence — you will have no other gods. This is not a rule imposed from the outside; it flows from a relationship already established. Israel has one God, not because that one God forbids competition, but because covenant loyalty is the whole shape of what Israel is.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pesel',
          title: 'Pesel — &ldquo;graven image&rdquo;',
          script: 'פֶּסֶל',
          translit: '<strong>pesel</strong> · something carved, cut, or engraved from wood or stone',
          description:
            'The prohibition is not against art; it is against carving a likeness of God and treating it as if the carving is God. You cannot fit the infinite God into a stone. You cannot box Him in. Israel is called to worship the God you cannot see, not the idol you can control.',
        },
        {
          kind: 'commentary',
          id: 'c-vain-name',
          html:
            'To take God&apos;s name in vain is not simply to swear carelessly. It is to invoke His name while being false to the relationship His name represents — to use His authority to cover your own lies, or to swear an oath and break it. To bear God&apos;s name is to carry His reputation. Every time you speak as His, you either honor Him or you betray Him.',
        },
        {
          kind: 'christ',
          id: 'christ-no-other-gods',
          title: 'Christ Connection — The Name Above All Names',
          html:
            'Jesus teaches His disciples to pray: &ldquo;Hallowed be thy name.&rdquo; He later tells them that His Father has &ldquo;given all things into his hands&rdquo; (John 13:3). And when the risen Christ speaks His final authority, He says, &ldquo;All power is given unto me in heaven and in earth&rdquo; (Matt. 28:18). The exclusive claim of Exodus 20:3 — you will have no other god — finds its fullness in the claim that every knee shall bow to Him, and every tongue confess that <em>Jesus Christ is Lord</em> (Phil. 2:10–11). The law begins with singularity. The Gospel fulfills it with a Name.',
        },
        {
          kind: 'carry',
          html:
            'The first three commandments are vertical — they are about your loyalty to God alone. Notice what they cost: no other gods means you cannot do whatever you want. No carved image means you cannot control how He appears. No taking His name in vain means you cannot use Him for your own cover. But the first four verses already hint at the trade — He will show &ldquo;mercy unto thousands of them that love me.&rdquo; Loyalty has a face. Obedience has a kiss.',
        },
        {
          kind: 'reflection',
          id: 'exodus20-verticals',
          prompt:
            'Where are you tempted to build a god you can control, or to use God&apos;s name to cover your own agenda? What would it cost to pull that down and serve the God you cannot box in?',
        },
      ],
    },

    /* ─── Exodus 20:8–11 — The Sabbath ───────────────────────────────── */
    {
      ref: 'Exodus 20:8–11',
      title: 'Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 8,
              spans: [
                t('Remember the '),
                hg('sabbath day', 'c-remember-sabbath'),
                t(', to keep it holy.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Six days shalt thou labour, and do all thy work:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the '),
                hy('sabbath day', 'hebrew-shabbat'),
                t(', and hallowed it.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shabbat',
          title: 'Shabbat — &ldquo;sabbath&rdquo;',
          script: 'שַׁבָּת',
          translit: '<strong>shabbat</strong> · from a verb meaning to cease, to stop, to rest',
          description:
            'The word literally means &ldquo;stopping.&rdquo; The seventh day is not a day to do different work; it is a day to stop all work. To observe the Sabbath is to make a weekly declaration: the work is not mine to complete. Creation is God&apos;s, not mine. I can rest.',
        },
        {
          kind: 'commentary',
          id: 'c-remember-sabbath',
          html:
            'Notice the command: not &ldquo;create a Sabbath&rdquo; but &ldquo;remember&rdquo; it. God has already made Sabbath holy. Your work is to <em>keep</em> it — to set it apart, to refuse to fill it with the usual noise. And notice the reach: your servants, your animals, even the foreigner in your gates gets the command to rest. Sabbath is the only commandment that protects the weak as an absolute, before any argument.',
        },
        {
          kind: 'carry',
          html:
            'Work is good — the first six days prove it. But work is not ultimate. There is a day built into creation itself that says: you can stop. The ground will be fine. Your family will be fine. God rested on the seventh day because creation was complete and very good. Stopping is not laziness; it is agreement with reality. The world was made to run without your hands for one whole day a week. What would change if you believed that?',
        },
        {
          kind: 'reflection',
          id: 'exodus20-rest',
          prompt:
            'When you imagine actually stopping for a full day, what fear comes up first — that things will fall apart, that you&apos;ll feel useless, that you&apos;ll have to face something? What does God mean to you when He says you can rest?',
        },
      ],
    },

    /* ─── Exodus 20:12–17 — The Horizontal Words ──────────────────────── */
    {
      ref: 'Exodus 20:12–17',
      title: 'Toward Your Neighbor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 12,
              spans: [
                t('Honour thy '),
                hg('father and thy mother', 'c-honour-parents'),
                t(': that thy days may be long upon the land which the LORD thy God giveth thee.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Thou shalt not '),
                hg('kill', 'hebrew-ratsach'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Thou shalt not commit '),
                hg('adultery', 'hebrew-naaph'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Thou shalt not '),
                hg('steal', 'c-not-steal'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Thou shalt not bear '),
                hg('false witness', 'c-false-witness'),
                t(' against thy neighbour.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Thou shalt not '),
                hy('covet', 'hebrew-chamad'),
                t(' thy neighbour&apos;s house, thou shalt not covet thy neighbour&apos;s wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour&apos;s.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-honour-parents',
          html:
            'This is the boundary between the vertical and the horizontal — the fifth commandment. Honoring father and mother is the hinge. You learn to honor God by first honoring the authorities and elderhood He has placed over you. And notice the promise: <em>that thy days may be long.</em> This is not a rule enforced by punishment; it is a statement about how creation works. A society that honors its elders lives well. A society that discards them fractures.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ratsach',
          title: 'Ratsach — &ldquo;to kill, to murder&rdquo;',
          script: 'רָצַח',
          translit: '<strong>ratsach</strong> · to kill deliberately; narrower than simply taking a life',
          description:
            'The Hebrew word is specific. It does not prohibit all killing — capital punishment and wartime killing are permitted elsewhere in the law. <em>Ratsach</em> refers to murder: unlawful killing, the taking of a life in passion or for gain. The commandment protects human dignity as the image of God.',
        },
        {
          kind: 'commentary',
          id: 'c-not-steal',
          html:
            'Theft is a violation of trust and boundary. When you steal from your neighbor, you announce that your need is more real than their ownership, your desire more legitimate than their labor. You unmake the fabric of community. Notice it comes before coveting — the inner desire comes after the outer act.',
        },
        {
          kind: 'commentary',
          id: 'c-false-witness',
          html:
            'To bear false witness is to use speech — the highest human faculty — for the destruction of your neighbor. Truth-telling is the foundation of law, commerce, and covenant. Once people stop believing each other&apos;s words, nothing holds.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-naaph',
          title: 'Naaph — &ldquo;to commit adultery&rdquo;',
          script: 'נָאַף',
          translit: '<strong>naaph</strong> · to lie with another&apos;s wife; a violation of covenant',
          description:
            'Adultery breaks the covenant you have made with another human. It is a lie told with your body. The commandment protects the integrity of the household and the trust between husband and wife.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chamad',
          title: 'Chamad — &ldquo;to covet, to desire&rdquo;',
          script: 'חָמַד',
          translit: '<strong>chamad</strong> · to desire intensely, to crave for yourself',
          description:
            'Coveting is the only commandment that is interior — it concerns not your actions but your desires. The law reaches inside. You can hide theft and adultery from the world, but coveting tells you who you really are when no one is watching. This is the commandment that kills the self-righteous.',
        },
        {
          kind: 'christ',
          id: 'christ-love-neighbor',
          title: 'Christ Connection — Love as Fulfilling',
          html:
            'Jesus teaches that the second greatest commandment is to love your neighbor as yourself. Then Paul unpacks what that means: &ldquo;Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets&rdquo; (Matt. 7:12). And later: &ldquo;Love worketh no ill to his neighbour: therefore love is the fulfilling of the law&rdquo; (Rom. 13:10). The six horizontal commandments — do not kill, do not commit adultery, do not steal, do not bear false witness, do not covet, and honor your parents — are not separate rules. They are six expressions of one command: love your neighbor as yourself. If you loved him as yourself, you would not murder him, lie about him, take from him, or begrudge his flourishing.',
        },
        {
          kind: 'carry',
          html:
            'These six words are not restrictions on freedom. They are the shape of a life lived in community. When you honor your parents, you build a world where age is valued. When you do not steal or covet, you build a world where people&apos;s work and dignity are safe. When you do not murder or commit adultery, you protect the life and household of another. When you do not lie, you make speech reliable again. What world are you building with your daily choices?',
        },
        {
          kind: 'reflection',
          id: 'exodus20-horizontals',
          prompt:
            'Which of these six commandments presses hardest on your conscience right now — which one do you feel most tempted to break? What is it showing you about where you actually put your loyalty?',
        },
        {
          kind: 'artwork',
          matchTitle: /decalogue|tablets.*stone|moses.*law/i,
          caption: 'Exodus 20:12–17 · The Horizontal Words',
        },
      ],
    },

    /* ─── Exodus 20:18–21 — The Fear of God ──────────────────────────── */
    {
      ref: 'Exodus 20:18–21',
      title: 'Terrified by Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 18,
              spans: [
                t('And all the people saw the '),
                hg('thunderings, and the lightnings', 'c-thunder'),
                t(', and the noise of the trumpet, and the mountain smoking: and when the people saw it, they removed, and stood afar off.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they said unto Moses, Speak thou with us, and we will hear: but let not God speak with us, '),
                hp('lest we die', 'christ-mediation'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Moses said unto the people, Fear not: for God is come to prove you, and that '),
                hg('his fear may be before your faces, that ye sin not', 'c-fear-reverential'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the people stood afar off, and Moses drew near unto the thick darkness where God was.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thunder',
          html:
            'The people do not hear the words and nod along. They hear the voice and they are terrified. Thunder, lightning, the mountain shaking — all the signs of divine presence at its most overwhelming. The experience is physically disorienting. And their response is immediate and human: <em>we cannot do this. We need someone to go between us.</em>',
        },
        {
          kind: 'commentary',
          id: 'c-lest-we-die',
          html:
            'The fear is not imaginary. The law is holy, and the people are not. To stand in the presence of absolute holiness aware of your own corruption is to sense, rightly, that you are in danger. The people are not wrong to be afraid. They are experiencing the truth: they cannot obey perfectly, and a holy God cannot overlook sin. This is why they need a mediator.',
        },
        {
          kind: 'christ',
          id: 'christ-mediation',
          title: 'Christ Connection — The Mediator Who Can Bear It',
          html:
            'The people ask for a mediator, and they get Moses. But centuries later, Paul writes: &ldquo;There is one God, and one mediator between God and men, the man Christ Jesus; who gave himself a ransom for all&rdquo; (1 Tim. 2:5–6). Moses stands between the people and God, but he is only an outline of someone to come. Jesus does not simply stand between. He <em>becomes</em> the bridge — the God who is approachable because He has taken on flesh, and the human who can satisfy the law because He has kept it perfectly. He is the mediation God was pointing toward from the moment the people asked for help.',
        },
        {
          kind: 'commentary',
          id: 'c-fear-reverential',
          html:
            'Moses tells them not to be afraid, but also that the fear is <em>good</em> — that God&apos;s fear should be &ldquo;before your faces, that ye sin not.&rdquo; This is not the fear of terror but the fear of reverence. The healthy awareness that you stand before Someone holy, and that awareness changes how you live.',
        },
        {
          kind: 'carry',
          html:
            'You are in the same place Israel was. You have heard the law and felt its power. And you have also felt its impossibility — you cannot keep all of it. Your own heart, left to itself, will break these words. This is why you need a mediator too. The God who gave the law has also provided the One who can stand between you and your failure. Step forward like Moses does. Let Him draw near the thick darkness on your behalf.',
        },
        {
          kind: 'reflection',
          id: 'exodus20-mediator',
          prompt:
            'When you read the Ten Commandments, where does your conscience fail first? Where do you feel that you need someone to stand between you and the holiness these words describe?',
        },
      ],
    },

    /* ─── Exodus 20:22–26 — Altars and Sacrifice ────────────────────── */
    {
      ref: 'Exodus 20:22–26',
      title: 'How to Approach',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 22,
              spans: [
                t('And the LORD said unto Moses, Thus thou shalt say unto the children of Israel, Ye have seen that I have talked with you from heaven.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Ye shall not make with me gods of silver, neither shall ye make unto you gods of gold.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('An altar of earth thou shalt make unto me, and shalt sacrifice thereon thy burnt offerings, and thy peace offerings, thy sheep, and thine oxen: in all places where I record my name I will come unto thee, '),
                hp('and I will bless thee', 'christ-altar-blessing'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And if thou wilt make me an altar of stone, thou shalt not build it of hewn stone: for if thou lift up thy tool upon it, thou hast polluted it.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Neither shalt thou go up by steps unto mine altar, that thy nakedness be not discovered thereon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altar-of-earth',
          html:
            'After the terror, the provision. God does not leave His people in their fear. Instead, He gives them the way forward: an altar. The material is earth — simple, unmade by human craft. The purpose is twofold: burnt offerings (for atonement) and peace offerings (for fellowship). The broken people can approach the holy God, but only through an intermediary — the death of a substitute.',
        },
        {
          kind: 'commentary',
          id: 'c-no-hewn-stone',
          html:
            'The altar must not be built of <em>hewn stone</em> — stone shaped by a tool. It must be natural. This means: do not try to improve on what God ordains. You cannot make yourself fit for God through your own craftsmanship, your own virtue-building, your own effort. What is offered must be simple and unadorned.',
        },
        {
          kind: 'commentary',
          id: 'c-no-steps',
          html:
            'Steps would expose the priest&apos;s nakedness — his vulnerability, his shame. The approach to God is not meant to be about human dignity or exposure. It is about trust. The very design of the altar says: you come without pretense, without covering, aware of your own exposure, and God meets you there.',
        },
        {
          kind: 'christ',
          id: 'christ-altar-blessing',
          title: 'Christ Connection — The Altar Becomes the Body',
          html:
            'Isaiah will later prophesy of a suffering servant, and the servant&apos;s suffering will be described as a sacrifice — &ldquo;when thou shalt make his soul an offering for sin&rdquo; (Isa. 53:10). At the Last Supper, Jesus takes bread and wine and says, &ldquo;This is my body, which is given for you; this do in remembrance of me&rdquo; (Luke 22:19). The altar of earth, which required the blood of bulls and goats, becomes the person of Jesus. Every temple sacrifice in the Old Testament pointed to this one: the moment when God&apos;s justice and God&apos;s mercy meet in a single, perfect offering. And with that offering, the way to blessing is opened.',
        },
        {
          kind: 'carry',
          html:
            'You stand where Israel stood — aware that you cannot make yourself right, and terrified of the holiness before you. But there is an altar. There is a way to approach. The way is not by your own strength, not by stepping up as if you have earned it, not by hiding your nakedness behind fig leaves of your own making. The way is by trusting the provision God has made. Come as you are, broken and aware, and let the altar stand between you and your fear.',
        },
        {
          kind: 'reflection',
          id: 'exodus20-altar',
          prompt:
            'What would it mean for you to stop trying to make yourself presentable to God, and instead to bring your raw, exposed self to the altar He has made? What are you still trying to craft or earn?',
        },
        {
          kind: 'artwork',
          matchTitle: /altar|sacrifice|offering.*israel/i,
          caption: 'Exodus 20:24–26 · The Way to Approach',
        },
      ],
    },
  ],
};
