import { hp, hy, hg, t, type RichChapterContent } from './types';

export const DEUTERONOMY_18: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 18,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'Deuteronomy 18 gathers three distinct provisions: the priest&apos;s portion from sacrifice and harvest, a prohibition against the divination and necromancy that surrounds Israel, and the promise of a Prophet like Moses. The chapter begins with the practical matter of how priests are sustained—the Lord is their inheritance—and rises to the central theological promise of Deuteronomy: God will not leave His people without a living word. He will raise up a Prophet from among them, one whose words carry the very authority of God.',
    'For the first readers of Deuteronomy, written on the cusp of entry into Canaan, the surrounding nations were thick with soothsayers, witch-craft, and mediums—all channels through which people sought hidden knowledge and power. Against this, Moses says: you shall not do so. Instead, listen. A Prophet comes. And the New Testament will say plainly: that Prophet is Jesus, the one Word through whom God speaks.',
  ],

  sections: [
    /* ─── Deuteronomy 18:1–8 — The Priest's Portion ───────────────────────── */
    {
      ref: 'Deuteronomy 18:1–8',
      title: 'The Lord Is Their Inheritance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('The priests the Levites, and '),
                hy('all the tribe of Levi', 'hebrew-levi'),
                t(', shall have '),
                hg('no part nor inheritance with Israel', 'c-no-inheritance'),
                t(': they shall eat '),
                hy('the offerings of the Lord made by fire', 'c-fire-offerings'),
                t(', and his inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-inheritance',
          html:
            'The Levites receive no tribal land. Every other tribe divides Canaan by lot. Levi gets nothing—no fields, no vineyards, no inheritance of earth. This is by divine design.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levi',
          title: 'Levi — &ldquo;joined&rdquo;',
          script: 'לֵוִי',
          translit: '<strong>Levi</strong> · the name carries the sense of being attached or joined',
          description:
            'The tribe is set apart, not scattered among the others. Their inheritance is God Himself, and their wealth is what belongs to the altar.',
        },
        {
          kind: 'commentary',
          id: 'c-fire-offerings',
          html:
            'The offerings made by fire on the altar—the burnt offerings, sin offerings, grain offerings—are described as &ldquo;the offerings of the Lord.&rdquo; What belongs to God on the altar becomes the priest&apos;s sustenance. The boundary between God&apos;s portion and the priest&apos;s portion has become a threshold.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 2,
              spans: [
                t('Therefore shall they have no inheritance among their brethren: '),
                hp('the Lord is their inheritance', 'c-lord-inheritance'),
                t(', as he hath said unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-lord-inheritance',
          title: 'Christ Connection — Christ in You, the Hope of Glory',
          html:
            'Paul writes to the Gentiles: &ldquo;Christ in you, the hope of glory&rdquo; (Col. 1:27). And again: &ldquo;For to me to live is Christ&rdquo; (Phil. 1:21). The Levite&apos;s inheritance—that the Lord Himself is enough, that the altar sustains, that no land is needed because God&apos;s presence suffices—becomes in the New Testament the inheritance of every believer. The Lord becomes your inheritance. Christ becomes your sustenance, your daily bread, your all.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 3,
              spans: [
                t('And this shall be the priest&apos;s due from the people, from them that offer a sacrifice, whether it be ox or sheep; and they shall give unto the priest the shoulder, and the two cheeks, and the maw.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('The firstfruits also of thy '),
                hg('corn, and wine, and oil', 'c-firstfruits'),
                t(', and the first of the fleece of thy sheep, shalt thou give him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-firstfruits',
          html:
            'The priest receives parts of every major sacrifice—the choicest portions—and the firstfruits of the harvest. This is not payment for services. It is a declaration: what comes first, what is best, belongs to the Lord&apos;s servant. A household that honors the altar eats last.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 5,
              spans: [
                t('For the Lord thy God hath chosen him out of all thy tribes, to stand to minister in the name of the Lord, him and his sons for ever.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And if a Levite come from any of thy gates out of all Israel, where he sojourned, and come with all the desire of his soul unto the place which the Lord shall choose; Then he shall minister in the name of the Lord his God, like all his brethren the Levites, which stand there before the Lord.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Notwithstanding he shall eat the same portions with them beside his own inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levite-equal',
          html:
            'Even a Levite who comes late, who has been displaced, who arrives from the scattered places—he still stands as equal. He shares equally in the altar&apos;s portions. Belonging to the service of the Lord is a status no circumstance can diminish.',
        },

        {
          kind: 'carry',
          html:
            'You work for income, security, retirement, the tangible things that come from labor. The priest works in the knowledge that God&apos;s service is its own sustenance. If you have chosen to follow Christ—to minister in His name, to give time, focus, and energy to His people—you are in that priestly order. Your inheritance is not what you accumulate. It is the presence of God, and the knowledge that He feeds those He calls. What does it look like this week to actually believe that?',
        },
        {
          kind: 'reflection',
          id: 'inheritance-lord',
          prompt: 'If the Lord truly were your inheritance, how would it change what you worry about, what you pursue, what you hold?',
        },
      ],
    },

    /* ─── Deuteronomy 18:9–14 — Abominations of the Nations ──────────────────── */
    {
      ref: 'Deuteronomy 18:9–14',
      title: 'Abominations of the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 9,
              spans: [
                t('When thou art come into the land which the Lord thy God giveth thee, thou shalt not learn to do after the abominations of those nations.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('There shall not be found among you any one that maketh his son or his daughter to '),
                hy('pass through the fire', 'hebrew-fire'),
                t(', or that useth '),
                hg('divination, or an observer of times, or an enchanter, or a witch, Or a charmer, or a consulter with familiar spirits, or a wizard, or a necromancer', 'c-abominations'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-fire',
          title: 'Esh — &ldquo;fire&rdquo;',
          script: 'אֵשׁ',
          translit: '<strong>esh</strong> · fire; also used of burning, consuming',
          description:
            'To pass through fire is to offer a child in a pagan sacrifice, often to Molech. The law forbids not only the act but learning the practice—Israel shall not even come to know it as an option.',
        },
        {
          kind: 'commentary',
          id: 'c-abominations',
          html:
            'The list is precise: <em>divination</em> (reading omens), <em>observer of times</em> (astrologer, one who reads the calendar for power), <em>enchanter</em> (spell-caster), <em>witch</em> (one who practices sorcery), <em>charmer</em> (one who works through words and incantations), <em>familiar spirits</em> (household spirits or ghosts), <em>wizard</em> (knowing one, seer), <em>necromancer</em> (one who conjures the dead). The variety shows how fertile the human appetite is for hidden knowledge, for shortcuts to power, for voices that bypass God.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 11,
              spans: [
                t('For all that do these things are an abomination unto the Lord: and because of these abominations the Lord thy God doth drive them out from before thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-drive-out',
          html:
            'The Canaanites are not destroyed because of military power or racial superiority. They are driven out because of these abominations. God&apos;s holiness cannot coexist with the structures of divination, the seeking of spiritual power outside His channels.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 12,
              spans: [
                t('Thou shalt be '),
                hy('perfect with the Lord thy God', 'hebrew-tamim'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tamim',
          title: 'Tamim — &ldquo;perfect, whole, complete&rdquo;',
          script: 'תָּמִים',
          translit: '<strong>tamim</strong> · whole, complete, without blemish, single-eyed',
          description:
            'The word means integrity, undivided allegiance. Not perfection in morality, but wholeness—an eye that is single, a heart that is not split between God and the spirits, between the Lord and the hidden voices.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 13,
              spans: [
                t('For these nations, which thou shalt possess, hearkened unto '),
                hg('observers of times, and unto diviners', 'c-nations-listen'),
                t(': but as for thee, the Lord thy God hath not suffered thee so to do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nations-listen',
          html:
            'Israel&apos;s neighbors listen to the diviners. That is why they are dispossessed. Israel is told: you will not. The Lord hath not suffered you to do so—not because He forbids you by arbitrary law, but because He has chosen you as His own. Your revelation comes through another channel.',
        },

        {
          kind: 'carry',
          html:
            'The hunger for hidden knowledge runs deep. Astrology, tarot, numerology, the voices on social media that claim to see your future or unlock your potential—they are the modern form of what Deuteronomy forbids. The temptation is to have your life explained, controlled, predicted by something other than trust in God&apos;s word and presence. But wholeness with the Lord means you stop listening to the diviners. You stop seeking power through parallel channels. You are single-eyed: God is enough. What voice have you been listening to that splits your allegiance?',
        },
        {
          kind: 'reflection',
          id: 'abominations',
          prompt: 'Where do you still listen to the diviners—the voices promising knowledge, power, or control outside of God? What would it cost to truly be whole with the Lord?',
        },
      ],
    },

    /* ─── Deuteronomy 18:15–19 — The Prophet Like Moses ──────────────────────── */
    {
      ref: 'Deuteronomy 18:15–19',
      title: 'A Prophet Like Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 15,
              spans: [
                t('The Lord thy God will raise up unto thee a '),
                hy('Prophet from the midst of thee', 'hebrew-navi'),
                t(', of thy brethren, '),
                hp('like unto me', 'c-like-moses'),
                t('; unto him ye shall hearken;'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-navi',
          title: 'Navi — &ldquo;prophet&rdquo;',
          script: 'נָבִיא',
          translit: '<strong>navi</strong> · one who speaks for God, the mouth of God',
          description:
            'A prophet is not a fortune-teller. He is the one chosen by God to carry His word. His speech is God&apos;s speech. He speaks what God commands.',
        },
        {
          kind: 'commentary',
          id: 'c-like-moses',
          html:
            'Moses is the standard. No figure in the Old Testament stands higher—not David, not Solomon. Moses spoke face to face with God. A Prophet like Moses would be one who knows God this way, who speaks with absolute authority, who mediates between God and His people.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 16,
              spans: [
                t('According to all that thou desiredst of the Lord thy God in Horeb in the day of the assembly, saying, '),
                hg('Let me not hear again the voice of the Lord, neither let me see this great fire', 'c-horeb'),
                t('; lest I die.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the Lord said unto me, They have well spoken that which they have spoken.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('I will raise them up a Prophet from among their brethren, '),
                hp('like unto thee', 'c-prophet-like-thee'),
                t(', and will put my words in his mouth; and he shall speak unto them all that I shall command him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-horeb',
          html:
            'At Sinai (Horeb), Israel heard God&apos;s voice directly—thunder, fire, the shaking of the mountain. The experience terrified them. They asked Moses to be their intermediary: do not let us hear God&apos;s voice directly. Let Moses stand between us and God. God grants this request, and in the same breath, He promises something greater: a Prophet will come who will stand as Moses does, carrying God&apos;s words with full authority.',
        },
        {
          kind: 'christ',
          id: 'c-prophet-like-thee',
          title: 'Christ Connection — The Prophet Like Moses',
          html:
            'Acts 3:22 quotes this verse of Jesus directly: &ldquo;Moses truly said unto the fathers, A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear in all things whatsoever he shall say unto you.&rdquo; Again in Acts 7:37. And Matthew 17 culminates the point: at the Transfiguration, Jesus stands between Moses and Elijah, and the voice from heaven says, &ldquo;This is my beloved Son… hear ye him&rdquo; (Matt. 17:5). Jesus is the Prophet. The words in His mouth are God&apos;s words. To reject Him is to reject the Father.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 19,
              spans: [
                t('And it shall come to pass, that whosoever will not hearken unto my words which he shall speak in my name, I will require it of him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-require',
          html:
            'To refuse the Prophet&apos;s words is to refuse God Himself. The stakes could not be higher. The Prophet speaks in God&apos;s name, with God&apos;s authority. To hear him is to hear God. To reject him is to be answerable to God.',
        },

        {
          kind: 'carry',
          html:
            'You have heard the Prophet. Jesus speaks God&apos;s words. Not as an advisor, not as one voice among many, but as the one through whom God addresses the world. The question Deuteronomy leaves you with is simple: will you hear Him? Will you arrange your life around what He says, or will you listen to other voices—the culture, your preferences, your fears? Wholeness with God means answering this: the Prophet has spoken. I will listen.',
        },
        {
          kind: 'reflection',
          id: 'prophet-heard',
          prompt: 'Where are you still not hearing the Prophet? What words of Jesus have you not yet let reshape you?',
        },
      ],
    },

    /* ─── Deuteronomy 18:20–22 — The Test of True Prophecy ─────────────────── */
    {
      ref: 'Deuteronomy 18:20–22',
      title: 'The Test of True Prophecy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 20,
              spans: [
                t('But the prophet, which shall presume to speak a word in my name, which I have not commanded him to speak, or that shall speak in the name of other gods, even that prophet shall die.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-false-prophet-death',
          html:
            'A false prophet is not a small problem. If a prophet speaks in God&apos;s name but God has not commanded it, he is a liar. He has usurped God&apos;s authority and led people astray. The law is unsparing.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 21,
              spans: [
                t('And if thou say in thine heart, How shall we know the word which the Lord hath not spoken?'),
              ],
            },
            {
              number: 22,
              spans: [
                t('When a prophet speaketh in the name of the Lord, if the thing follow not, nor come to pass, that is the thing which the Lord hath not spoken, but the prophet hath spoken it presumptuously: thou shalt not be afraid of him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-test-prophecy',
          html:
            'The test is simple and absolute. If a prophet claims to speak for the Lord and says a thing will happen, and it does not happen, then he has spoken presumptuously. He does not speak for God. This is not a matter of interpretation or opinion. The word either comes to pass, or it does not.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zdon',
          title: 'Zdon — &ldquo;presumption&rdquo;',
          script: 'זָדוֹן',
          translit: '<strong>zdon</strong> · arrogance, willfulness, speaking beyond one&apos;s authority',
          description:
            'The false prophet acts with zdon—he steps beyond his place. He presumes to speak for God without commission. The word carries the weight of sin, not mere mistake.',
        },

        {
          kind: 'carry',
          html:
            'In your own life, you will hear many voices claiming to speak for God. Some will be warm, comforting, culturally relevant, personally compelling. But the test is not their tone or their popularity. The test is: does what they say align with Scripture? Does it come to pass? Does it match the character of Jesus? If a teacher claims God has revealed something new that contradicts God&apos;s revealed word, you are not bound by respect or deference. You are called to test. And if the prophecy fails, you are told plainly: fear him not.',
        },
        {
          kind: 'reflection',
          id: 'test-word',
          prompt: 'What voice have you followed without testing it? What would it look like to actually evaluate whether it aligns with Jesus and Scripture?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 18',
    quote:
      'The Lord thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me; unto him ye shall hearken.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 18:15 · Study Guide',
  },
};
