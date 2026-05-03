import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 11 — Clean and Unclean Animals
 *
 * The laws that shape Israel&apos;s daily life. Cattle that part the hoof and chew
 * the cud are clean; pigs and camels fail one test or the other. Fish must have
 * both fins and scales. Birds of prey and carrion-eaters are forbidden. The
 * category of &apos;unclean&apos; is not about danger or disease — it&apos;s about set-apartness.
 *
 * Every meal, Israel was reminded: you belong to a holy God. Mark 7:18–19 and
 * Acts 10 reveal Christ cleansing all foods, teaching that the new covenant
 * people are made holy not by what enters the mouth but by faith in Him.
 */

export const LEVITICUS_11: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 11,

  estimatedMinutes: { 5: 8, 10: 14, 15: 19 },
  intros: [
    'Leviticus 11 lays out the animals Israel may eat and those it must avoid. The chapter divides the world into two categories: clean (tahor) and unclean (tame). A clean animal meets certain physical marks — cattle must both part the hoof and chew the cud. If an animal fails either test, it is unclean, and eating it makes the Israelite unclean. The same rules apply to birds, fish, swarming things, and every creature that walks the earth.',
    'At first, these rules sound like hygiene laws. But they are not. Pigs are unclean not because they carry disease — camels are clean even though they live in dust and filth. The unclean animals are unclean because God says they are. The point is not safety; the point is obedience. Every time Israel set the table, chose what to eat, chose what to touch, Israel was choosing to be set apart. The food laws were not rules about purity in the body — they were reminders, carved into daily life, that the people belonged to a holy God.',
    'The chapter crescendos not with a new rule but with a summons: "Ye shall be holy; for I am holy" (v. 44–45). This is the heart of Leviticus. Not hygiene. Not harm. Holiness — the call to be separate, consecrated, devoted. And that call, though the food laws fall away at the cross, never stops ringing.',
  ],

  opener: {
    matchTitle: /Codex Amiatinus.*Leviticus 11/i,
    matchArtist: /codex amiatinus|monkwearmouth/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Leviticus 11:1–8 — The Divided Hoof and Cud ────────────────────── */
    {
      ref: 'Leviticus 11:1–8',
      title: 'Four-Footed Beasts: The Double Mark',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses and to Aaron, saying unto them,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, saying, These are the beasts which ye shall eat among all the beasts that are on the earth.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Whatsoever '),
                hg('parteth the hoof', 'lev11-hoof'),
                t(' and is '),
                hg('clovenfooted', 'lev11-hoof'),
                t(' and '),
                hg('cheweth the cud', 'lev11-cud'),
                t(', among the beasts, that shall ye eat.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Nevertheless these shall ye not eat of them that chew the cud, or of them that divide the hoof: as the camel, because he cheweth the cud, but divideth not the hoof; he is '),
                hg('unclean', 'lev11-unclean'),
                t(' unto you.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the coney, because he cheweth the cud, but divideth not the hoof; he is unclean unto you.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the hare, because he cheweth the cud, but divideth not the hoof; he is unclean unto you.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the '),
                hg('swine', 'lev11-swine'),
                t(', though he divide the hoof, and be clovenfooted, yet he cheweth not the cud; he is unclean unto you.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Of their flesh shall ye not eat, and their carcase shall ye not touch; they are unclean unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev11-hoof',
          html:
            'An animal that is clean for eating must <em>both</em> part its hoof and chew the cud. One mark is not enough. A camel chews the cud but does not divide the hoof — unclean. A pig divides the hoof but does not chew the cud — unclean. Only an animal that meets <em>both</em> conditions passes. The principle is: true cleanness is not partial. Israel&apos;s separation from the nations was to be complete, not mixed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tahor',
          title: 'Tahor — &ldquo;clean&rdquo;',
          script: 'טָהוֹר',
          translit: '<strong>tahor</strong> · pure, clean, set apart',
          description:
            'Not about hygiene or disease, but about belonging to a holy God, which translates in daily life as separation from the unclean. A tahor animal is one Israel may eat; eating it affirms that Israel belongs to the holy God.',
        },
        {
          kind: 'commentary',
          id: 'lev11-cud',
          html:
            'Animals that chew the cud are reflective creatures — they return to their food, digest it slowly, are present to the process of nourishment. The metaphor is clear: Israel is called to ruminate on God&apos;s Word, to turn it over in the heart, not to gulp down spiritual food without thought.',
        },
        {
          kind: 'commentary',
          id: 'lev11-unclean',
          html:
            'The Hebrew word <em>tame</em> (unclean) appears constantly throughout Leviticus. An unclean animal makes the person who touches or eats it unclean. But uncleanness is not permanent sin — washing and time restore the person. The food laws taught Israel that holiness and unholiness are real categories, that what you consume shapes what you are.',
        },
        {
          kind: 'commentary',
          id: 'lev11-swine',
          html:
            'The pig is the iconic example of the <em>almost-clean</em> animal. It divides the hoof perfectly but chews no cud. It is not forbidden because it is dirty or dangerous — a pig is a useful animal. It is forbidden because it fails the test. The lesson is subtler than we usually notice: partial obedience is not obedience. A mark incomplete is not a mark at all.',
        },
        {
          kind: 'carry',
          html:
            'If you&apos;ve ever been the person who meets one of the two marks — hard-working but not present to what matters, or thoughtful but not decisive, or consistent in prayer but loose with integrity — you might recognize the pig in yourself. And if you have, you&apos;ve probably also felt the tension: <em>why isn&apos;t one mark enough?</em> The food laws whisper an answer. Holiness doesn&apos;t come in pieces. The God of Israel calls for the whole of you — not ninety percent, not one good thing to balance a failure. This week, ask: where am I offering half-obedience as if it were whole?',
        },
        {
          kind: 'reflection',
          id: 'lev11-reflection-1',
          prompt:
            'Which matters more to you in a crisis — to be methodical and careful, or to move quickly and decisively? Which mark do you naturally have? What would it cost to develop the other?',
        },
      ],
    },

    /* ─── Leviticus 11:9–12 — Fish and the Waters ────────────────────────── */
    {
      ref: 'Leviticus 11:9–12',
      title: 'Creatures of the Water: Fins and Scales',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 9,
              spans: [
                t('These shall ye eat of all that are in the waters: whatsoever hath '),
                hg('fins and scales', 'lev11-fins-scales'),
                t(' in the waters, in the seas, and in the rivers, them shall ye eat.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And all that have not fins and scales in the seas, and in the rivers, of all that move in the waters, and of any living thing which is in the waters, they shall be an abomination unto you:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('They shall be even an abomination unto you; ye shall not eat of their flesh, but ye shall have their carcase in abomination.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Whatsoever hath no fins nor scales in the waters, that shall be an abomination unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev11-fins-scales',
          html:
            'The rule for water creatures is simpler than for land animals: only creatures with <em>both</em> fins and scales are clean. No fins and scales, no eating. This excludes eels, catfish, shellfish, squid, and every other creature of the water that does not fit the pattern. The exactness of the rule — not one or the other, but both — mirrors the perfectness demanded of land animals.',
        },
        {
          kind: 'carry',
          html:
            'The water is the boundary place between the known world and the unknown, the mapped realm and the chaos. Only fish that are clearly marked, obviously scaled, visibly finned — only those are permissible. The unclean creatures of the water are the odd ones, the boundary-dwellers, the ones you cannot pin down. The food laws invite Israel to stay on solid ground, to choose what is clear, to resist the call of the chaotic margins.',
        },
        {
          kind: 'reflection',
          id: 'lev11-reflection-2',
          prompt:
            'What is a relationship, a habit, or a choice that feels like a creature of murky water to you — one you can&apos;t quite see clearly? Why have you avoided naming it?',
        },
      ],
    },

    /* ─── Leviticus 11:13–19 — Birds of Prey and Carrion ────────────────────── */
    {
      ref: 'Leviticus 11:13–19',
      title: 'The Birds: A List of the Forbidden',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 13,
              spans: [
                t('And these are they which ye shall have in abomination among the fowls; they shall not be eaten, they are an abomination: the eagle, and the ossifrage, and the ospray,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the vulture, and the kite after his kind;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Every raven after his kind;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the owl, and the night hawk, and the cuckow, and the hawk after his kind,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the little owl, and the cormorant, and the great owl,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the swan, and the pelican, and the gier eagle,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the stork, the heron after her kind, and the lapwing, and the bat.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev11-birds',
          html:
            'The forbidden birds are not random. Nearly all of them are predators, carrion-eaters, or scavengers. Eagles and vultures tear living or dead flesh. Ravens and crows pick at carcases. Owls hunt in darkness. The pattern is clear: creatures that live by violence, that feed on death, that work in shadow are unclean. But notice who is <em>not</em> listed: no clean animals are named. The absence is deliberate. The point is not to catalog the permitted, but to make the Israelite familiar with the forbidden.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nesheshim',
          title: 'Neshashim — &ldquo;swarming things&rdquo;',
          script: 'נְשָׁמִים',
          translit: '<strong>neshashim</strong> · creatures that creep, swarm, writhe',
          description:
            'The word carries a sense of unease — things that move in ways that unsettle us, that multiply without clear boundaries, that elude categorization. Every animal you cannot easily sort into clean or unclean is a neshasham.',
        },
        {
          kind: 'carry',
          html:
            'If the prohibited birds teach anything, it is this: Israel was not called to associate with violence. Not the violence of raptors tearing flesh, not the violence of scavengers feeding on the dead. The table is a boundary. What you eat shapes your soul. To refuse the predator is a small way of refusing predation, of choosing a life ordered by something other than hunger and force.',
        },
        {
          kind: 'reflection',
          id: 'lev11-reflection-3',
          prompt:
            'What are you consuming — not at the dinner table, but through screens, through news, through your inner world? Are you feeding on violence, even in small doses?',
        },
      ],
    },

    /* ─── Leviticus 11:20–23 — Swarming Things on the Ground ───────────────── */
    {
      ref: 'Leviticus 11:20–23',
      title: 'Swarming Creatures: The Exception',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 20,
              spans: [
                t('All fowls that creep, going upon all four, shall be an abomination unto you.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Yet these may ye eat of every flying creeping thing that goeth upon all four, which have '),
                hg('legs above their feet', 'lev11-legs'),
                t(', to leap withal upon the earth;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Even these of them ye may eat; the locust after his kind, and the bald locust after his kind, and the beetle after his kind, and the grasshopper after his kind.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But all other flying creeping things, which have four feet, shall be an abomination unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev11-legs',
          html:
            'The detail is almost tender: insects with legs <em>above</em> their feet are clean. In other words, insects built to leap upward, to press against the earth but propel themselves skyward. Locusts and grasshoppers fit the mark. But insects that creep only, that hug the ground without rising, remain unclean. Even in the smallest creatures, the principle holds: what reaches upward is permissible; what only crawls stays forbidden.',
        },
        {
          kind: 'carry',
          html:
            'The Israelite might be hungry, might face a locust plague and wonder if the rules still held. The text answers: yes, even then. But also: I have made room. You may eat the locust, the grasshopper, the cricket — the small creatures that leap toward the sky. Even in constraint, there is a path. Even in the rules against you, there is something left to sustain you.',
        },
        {
          kind: 'reflection',
          id: 'lev11-reflection-4',
          prompt:
            'When you are confined by a boundary or limit in your life — financial, relational, circumstantial — do you look for what you cannot have, or do you notice what remains?',
        },
      ],
    },

    /* ─── Leviticus 11:24–40 — Defilement and the Unclean ───────────────────── */
    {
      ref: 'Leviticus 11:24–40',
      title: 'Uncleanness as Contagion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 24,
              spans: [
                t('And for these ye shall be unclean: whosoever toucheth the carcase of them shall be unclean until the even;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And whosoever beareth ought of the carcase of them shall wash his clothes, and be unclean until the even.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('The carcases of every '),
                hg('beast', 'lev11-beast'),
                t(' which divideth the hoof, and is not clovenfooted, nor cheweth the cud, are unclean unto you: every one that toucheth them shall be unclean.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And whatsoever goeth upon his paws, among all manner of beasts that go on all four, those are unclean unto you: whoso toucheth their carcase shall be unclean until the even.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And he that beareth the carcase of them shall wash his clothes, and be unclean until the even: they are unclean unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev11-beast',
          html:
            'The text is meticulous about contagion. Touching an unclean carcase makes you unclean until evening. Carrying it requires a wash. The rule is not about disease — leprosy does not spread by touching a pig&apos;s corpse — but about symbolic transfer. Uncleanness is not a substance you can see; it is a state that clings to you and must be ritually shed. The logic teaches Israel that separation is not optional. To eat with the holy God, you must be clean.',
        },
        {
          kind: 'commentary',
          id: 'lev11-defilement',
          html:
            'The recurring cycle — touch, become unclean, wash, wait until evening, become clean — imprints a rhythm on daily life. It is not one great act of purity but a thousand small ones, woven into habit. Every encounter with the forbidden carries a cost, a washing, a waiting. The cost is not punishment; it is a reminder that you belong to a holy God.',
        },
        {
          kind: 'carry',
          html:
            'In our time, we have forgotten the power of small rituals to shape the soul. We do not have to wash if we touch an unclean animal. But we live in a world that is anything but careful about what touches us — what we see, hear, read, consume, entertain. The food laws are gone. But the deeper principle remains: what you allow near you shapes who you become. If you are becoming someone you do not recognize, ask yourself what has been touching you. What carcase have you been carrying? What would it cost to set it down and wash?',
        },
        {
          kind: 'reflection',
          id: 'lev11-reflection-5',
          prompt:
            'What have you been carrying lately that leaves you feeling unclean? Not sin, necessarily — just something that clings, that makes you feel less yourself. What would washing your clothes and waiting until evening look like for you?',
        },
      ],
    },

    /* ─── Leviticus 11:41–43 — The Swarming Things ────────────────────────── */
    {
      ref: 'Leviticus 11:41–43',
      title: 'Creeping Things and the Commandment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 41,
              spans: [
                t('And every creeping thing that creepeth upon the earth shall be an abomination; it shall not be eaten.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('Whatsoever goeth upon the belly, and whatsoever goeth upon all four, or whatsoever hath more feet among all creeping things that creep upon the earth, them ye shall not eat; for they are an abomination.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Ye shall not make yourselves '),
                hy('abominable', 'lev11-shiqqotz'),
                t(' with any creeping thing that creepeth, neither shall ye make yourselves unclean with them, that ye should be defiled thereby.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev11-shiqqotz',
          title: 'Shiqqotz — &ldquo;abominable&rdquo;',
          script: 'שִׁקְּצִים',
          translit: '<strong>shiqqotz</strong> · loathsome, detestable, that which causes revulsion',
          description:
            'The word appears rarely and carries intense moral disgust. To eat the unclean is not merely to break a rule; it is to defile yourself with something abominable, to voluntarily bring revulsion upon yourself.',
        },
        {
          kind: 'commentary',
          id: 'lev11-abominable',
          html:
            'The chapter reaches a kind of crescendo in verse 43. Not "you shall not eat" — that has been stated clearly. But now: you shall not <em>make yourselves abominable.</em> The emphasis shifts from the action to the transformation it works in you. To eat the unclean is to voluntarily absorb the unclean into yourself. Your body becomes the temple you have chosen to defile.',
        },
        {
          kind: 'carry',
          html:
            'The culture whispers that you can consume poison and remain untouched, can look at degradation and stay pure, can live carelessly and become wise. The food laws contradict this entirely. You are not sealed off from what you take in. Your body is not separate from your choices. What you consume becomes part of you. Choose wisely.',
        },
        {
          kind: 'reflection',
          id: 'lev11-reflection-6',
          prompt:
            'What does it mean to make yourself abominable? Can something be abominable without being sinful? Are there things you have taken in that have left you feeling defiled?',
        },
        {
          kind: 'artwork',
          matchTitle: /Vivian Bible.*Leviticus 11/i,
          matchArtist: /Master C|Vivian/i,
          caption: 'Leviticus 11:41–43 · Creeping Things',
        },
      ],
    },

    /* ─── Leviticus 11:44–47 — The Summons to Holiness ──────────────────── */
    {
      ref: 'Leviticus 11:44–47',
      title: 'I Am Holy; You Shall Be Holy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 44,
              spans: [
                t('For I am the LORD your God: '),
                hp('ye shall therefore sanctify yourselves', 'lev11-kadosh'),
                t(', and '),
                hp('ye shall be holy', 'lev11-kadosh'),
                t('; for I am holy: neither shall ye defile yourselves with any manner of creeping thing that creepeth upon the earth.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('For I am the LORD that bringeth you up out of the land of Egypt, to be your God: ye shall therefore be holy, for I am holy.'),
              ],
            },
            {
              number: 46,
              spans: [
                t('This is the law of the beasts, and of the fowl, and of every living creature that moveth in the waters, and of every creature that creepeth upon the earth:'),
              ],
            },
            {
              number: 47,
              spans: [
                t('To make a difference between the unclean and the clean, and between the beast that may be eaten and the beast that may not be eaten.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'lev11-christ',
          title: 'Christ Connection — All Foods Cleansed',
          html:
            'Mark 7:18–19 records Jesus&apos; stunning reversal: &ldquo;Perceive ye that whatsoever thing from without entereth into the man, it cannot defile him… Thus he declared all meats clean.&rdquo; What was unclean has been cleansed by His word, just as creation was spoken clean in Genesis 1. But the principle stands eternally: you are made holy not by what you eat, but by whom you eat with, whom you belong to, what you have faith in. Acts 10 shows Peter learning this through a vision — "What God hath cleansed, that call not thou common." Holiness in the new covenant is not about boundaries drawn around animals. It is about hearts cleansed by the blood of Christ.',
        },
        {
          kind: 'hebrew',
          id: 'lev11-kadosh',
          title: 'Kadosh — &ldquo;holy&rdquo;',
          script: 'קָדוֹשׁ',
          translit: '<strong>kadosh</strong> · set apart, separate, consecrated, holy',
          description:
            'To be kadosh is not to be righteous or sinless. It is to be separated from the common, dedicated to the Lord. Israel&apos;s food laws made their tables a kind of altar — sacred space, set apart. Every meal was a small act of consecration.',
        },
        {
          kind: 'commentary',
          id: 'lev11-holy',
          html:
            'The word <em>holy</em> appears four times in these four verses. The repetition is relentless. "Ye shall be holy, for I am holy… ye shall be holy, for I am holy." It is not an option. It is not a suggestion for the zealous. It is the foundation of the covenant. The God who claimed Israel is holy, and therefore Israel must be holy. The food laws are one expression of that summons, but they are not the deepest expression. The deepest is the call to separate yourself from everything common, everything unclean, everything that would pull you from your God.',
        },
        {
          kind: 'commentary',
          id: 'lev11-difference',
          html:
            'The final verse is a capstone: the law exists "to make a difference between the unclean and the clean." The purpose is discrimination — not malice, but discernment. To know the difference. To choose the clean. To stay separate. In a world that wants to blur every category, to call everything equally valid, the food laws ask Israel: will you maintain the boundaries that make you you?',
        },
        {
          kind: 'carry',
          html:
            'The food laws have ended. You are free to eat the pig, the shellfish, the raven. No law condemns you. But the summons has not ended. "Ye shall be holy; for I am holy." That call moves from your plate to your entire life. Who are you spending time with? Whose voice are you listening to? Whose values are shaping your choices? Whose God are you following? Holiness in the new covenant is less about boundaries than about belonging. You belong to a holy God. Therefore separate yourself — from everything that would pull you from Him, from everything that would make you less yourself. Make the difference. The table was just the beginning.',
        },
        {
          kind: 'reflection',
          id: 'lev11-reflection-7',
          prompt:
            'What does it mean for you, now, to "be holy, for He is holy"? Not the old rules — but the call behind them. What boundaries would you need to draw? What would you need to refuse? What would you need to choose?',
        },
        {
          kind: 'artwork',
          matchTitle: /Codex Amiatinus.*Leviticus 11/i,
          matchArtist: /codex amiatinus|monkwearmouth/i,
          caption: 'Leviticus 11:44–47 · The Commandment to Be Holy',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Ye shall be holy; for I am holy. The food laws teach Israel that daily choice is an act of consecration — you belong to God, and every choice either draws you toward Him or away.',
    snippet: 'Leviticus 11 · Study Guide',
    ref: 'Leviticus 11:44',
  },

  hasHebrew: true,
};
