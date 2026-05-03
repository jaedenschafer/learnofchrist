import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Numbers 30 — The law of vows. Moses speaks to the heads of the tribes:
 * "If a man vow a vow unto the Lord, or swear an oath to bind his soul with a bond;
 * he shall not break his word, he shall do according to all that proceedeth out of his mouth."
 *
 * Then the chapter handles the case of women&apos;s vows:
 * - A daughter&apos;s vow may be confirmed or annulled by her father on the day he hears it.
 * - A married woman&apos;s vow may be confirmed or annulled by her husband on the day he hears it.
 * - If the father or husband holds his peace and then later disallows the vow, "he shall bear her iniquity."
 * - A widow or divorced woman&apos;s vow stands.
 *
 * KEY DOCTRINE:
 * - Words spoken to God are binding. Speech shapes life.
 * - Jesus echoes this: "Let your communication be Yea, yea; Nay, nay" (Matthew 5:33–37).
 * - The household covering (father/husband) is not oppression but accountability.
 * - "He shall bear her iniquity" pictures the cost of headship.
 * - The NT intensifies, not relaxes, the seriousness of words.
 */
export const NUMBERS_30: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 30,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 19 },
  intros: [
    'Numbers 30 opens with four words that sound simple but are radical: "If a man vow a vow unto the Lord, or swear an oath to bind his soul with a bond; he shall not break his word." Words matter. Words bind. A vow made to God is not a casual promise you can undo when circumstances change or feelings shift. Speech to God is covenant language. It shapes your life.',
    'But then the chapter shifts and addresses women—daughters in their father&apos;s house, wives under their husband&apos;s authority, and widows or divorced women standing alone. For each, a principle emerges: the person in spiritual authority over a household may confirm or annul a vow on the day he hears it. If he stays silent and then later disallows it, something remarkable happens: "he shall bear her iniquity." Headship is not tyranny. It is accountability. The one who leads answers for what he allows or forbids.',
    'Beneath the law of vows runs an ancient truth: your words are powerful. They bind you. They bind others. They bind heaven. Jesus will later take this teaching and intensify it, teaching that even our casual words matter. James will warn that the tongue is a fire set among our members. But Numbers 30 begins the conversation: speak carefully, keep your word, and if you carry authority over others, carry it as an answerable weight.',
  ],

  bottomShare: {
    label: 'Share Numbers 30',
    quote:
      'If a man vow a vow unto the Lord, he shall not break his word. Speech to God is binding. A father may annul his daughter&apos;s vow on the day he hears it. A husband may annul his wife&apos;s vow on the day he hears it. A widow or divorced woman&apos;s vow stands. If a head later disallows a vow, he shall bear her iniquity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 30 · Study Guide',
  },

  sections: [
    /* ─── Numbers 30:1–2 — A Man&apos;s Vow ─────────────────────────────────── */
    {
      ref: 'Numbers 30:1–2',
      title: 'A Man&apos;s Vow — The Foundation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(1,
              t('And Moses spake unto the heads of the tribes concerning the children of Israel, saying, This is the thing which the Lord hath commanded.')
            ),
            verse(2,
              t('If a man '),
              hy('vow a vow', 'neder-word'),
              t(' unto the Lord, or '),
              hg('swear an oath to bind his soul with a bond', 'bond-phrase'),
              t('; '),
              hp('he shall not break his word', 'christ-truth'),
              t(', he shall do according to all that proceedeth out of his mouth.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'neder-word',
          title: 'Neder — "vow"',
          script: 'נֶ֫דֶר',
          translit: '<strong>neder</strong> · a vow; a binding promise made to God',
          description:
            'Neder appears throughout Scripture: Hannah&apos;s vow for a son (1 Samuel 1:11), Samson&apos;s Nazirite vow, Jacob&apos;s vow at Bethel. A neder is not casual prayer; it is a promise that binds the speaker to a course of action. The word carries weight.',
        },
        {
          kind: 'commentary',
          id: 'bond-phrase',
          html:
            'Notice the two-part construction: "vow a vow" and "swear an oath to bind his soul with a bond." The repetition is not accident. The chapter wants you to hear it twice. <em>Vow a vow. Bind your soul.</em> Your words have the power to bind you. Speech is not free; it creates obligation. The moment you speak a promise to God, something shifts. You are no longer free to ignore it.',
        },
        {
          kind: 'commentary',
          id: 'break-word-commentary',
          html:
            'The command is absolute: he shall not break his word. Not "he should try not to," not "it is preferable if he doesn&apos;t." <em>He shall not.</em> The grammar admits no exceptions. Once spoken, a vow binds. The person who made it is bound. The person who heard it is bound. Heaven is listening.',
        },
        {
          kind: 'christ',
          id: 'christ-truth',
          title: 'Christ Connection — Let Your Yes Be Yes',
          html:
            'Jesus taught His disciples: "Let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil" (Matthew 5:33–37). He was directly quoting Numbers 30. Your word is your bond. Say what you mean. Mean what you say. Add no swearing by heaven or earth; let your simple "yes" or "no" suffice—because words bind. James picks it up: "Let not many of you become teachers… for in many things we offend all. If any man offend not in word, the same is a perfect man" (James 3:1–2). The tongue is a fire. Words matter eternally.',
        },
        {
          kind: 'carry',
          html:
            'Before you promise, pause. What are you actually saying? Is it something you can do? Something you mean? Because once the words leave your mouth, something shifts. You have bound yourself. This week, before you say "yes" to a commitment, before you say "I will," ask yourself: can I actually do this? Am I saying this because I mean it or because it feels like the right thing to say in the moment? Let Numbers 30 and Jesus both speak: your words matter. They bind you. Choose them carefully.',
        },
        {
          kind: 'reflection',
          id: 'reflection-vow',
          prompt: 'What is a vow or promise you made that still binds you? What would it take to actually fulfill it? And what promises have you made carelessly that you have been slow to keep?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 30:3–5 — The Daughter in Her Father&apos;s House ─────────────── */
    {
      ref: 'Numbers 30:3–5',
      title: 'The Daughter — Father&apos;s Authority',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(3,
              t('If a woman also vow a vow unto the Lord, and '),
              hy('bind herself by a bond', 'issar-word'),
              t(', being in her father&apos;s house in her youth;')
            ),
            verse(4,
              t('And her father heareth her vow, and her bond wherewith she hath bound her soul, and her father shall hold his peace at her: then all her vows shall stand, and every bond wherewith she hath bound her soul shall stand.')
            ),
            verse(5,
              t('But if her father disallow her in the day that he heareth; not any of her vows, or of the bonds wherewith she hath bound her soul, shall stand: and the Lord will forgive her, because her father disallowed her.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'issar-word',
          title: 'Issar — "bond; binding obligation"',
          script: 'אִסָּר',
          translit: '<strong>issar</strong> · a bond; an obligation that binds one to a course of action',
          description:
            'Issar is related to the root "to bind." It describes the effect of a vow: it creates a binding obligation. When a woman makes a vow, she is creating an issar—a constraint on her future, a promise that will guide her action.',
        },
        {
          kind: 'commentary',
          id: 'father-hears',
          html:
            'The father "hears" the vow. Not "finds out secretly," but hears—it is brought to his attention openly. On the day he hears it, he has the power to confirm or annul. If he says nothing ("holds his peace"), the vow stands. If he disallows it immediately, it does not stand, and the woman is released. The key is the immediacy: on the day. This is not a door left open forever.',
        },
        {
          kind: 'commentary',
          id: 'father-covers',
          html:
            'The father&apos;s authority here is not arbitrary power; it is a form of covering. In the ancient Near Eastern context, a father is responsible for his household&apos;s covenant standing with God. If his daughter makes a vow he believes is unwise or will harm the family&apos;s stability, he can disallow it—and God holds him responsible for the discernment. But he cannot be silent and then later disallow it. The law protects the daughter from arbitrary or delayed rejection of her commitment.',
        },
        {
          kind: 'christ',
          id: 'christ-father-covering',
          title: 'Christ Connection — The Father&apos;s Covering',
          html:
            'Ephesians 5:25 pictures Christ as the head of the church as a husband is the head of a wife. But the headship picture goes further back—to fathers, to leaders, to anyone who stands in a protective position over others. The father in Numbers 30 is not a tyrant; he is responsible. He hears, he discerns, he acts in the authority he has been given. Paul teaches wives to "submit yourselves unto your own husbands, as unto the Lord" (Ephesians 5:22)—not because wives are inferior, but because headship is a calling, a weight of responsibility. Christ is the Head. He hears. He knows. He covers.',
        },
        {
          kind: 'carry',
          html:
            'If you are a father or mother, a leader or mentor carrying authority over others: you are responsible for hearing what your children or people are saying. You are called to discern, to affirm what is wise, to gently redirect what is not. And you must do it quickly—not with delay, not with bitterness, but with the weight of your office. If you live under authority—a daughter in her father&apos;s house, a wife, an employee under a leader—trust that the person who hears you carries the weight for how they respond to what you share. You are not invisible to them. Your commitments matter to them too.',
        },
        {
          kind: 'reflection',
          id: 'reflection-daughter',
          prompt: 'Who in your life carries authority over you? How do they "hear" you? And if you carry authority, do you truly hear those under your care, or are you distant, inattentive, unavailable?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 30:6–8 — The Married Woman ────────────────────────────────── */
    {
      ref: 'Numbers 30:6–8',
      title: 'The Wife — Husband&apos;s Authority',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(6,
              t('And if she had a husband, when she vowed, or uttered ought out of her lips, wherewith she bound her soul;')
            ),
            verse(7,
              t('And her husband heard it, and held his peace at her in the day that he heard it: then her vows shall stand, and her bonds wherewith she bound her soul shall stand.')
            ),
            verse(8,
              t('But if her husband disallowed her on the day that he heard it; then he shall make of none effect the vow which she vowed, and that which she uttered with her lips, wherewith she bound her soul: and the Lord will forgive her.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'wife-vow',
          html:
            'The pattern is the same as with the daughter and father. A married woman can vow. Her vows bind her. But her husband, hearing the vow, may on that same day confirm or disallow it. The law grants the husband the same authority a father holds over his daughter. Both are pictures of headship as a form of discernment and care.',
        },
        {
          kind: 'commentary',
          id: 'why-headship',
          html:
            'In modern ears this sounds restrictive—as though the law is limiting a woman&apos;s freedom. But consider the context: a vow, once made, binds not just the woman but the household. If she commits to fasting forty days or giving a tenth of the household&apos;s increase to the temple, that vow affects the whole family&apos;s resources and rhythms. The husband&apos;s authority to confirm or disallow is not control; it is the sharing of responsibility. He carries the weight for the household&apos;s covenants with God. That is burden, not privilege.',
        },
        {
          kind: 'christ',
          id: 'christ-headship-burden',
          title: 'Christ Connection — Headship as Burden',
          html:
            'Paul commands husbands: "Husbands, love your wives, even as Christ also loved the church, and gave himself for it" (Ephesians 5:25). Headship is not dominion. It is self-sacrifice. The model is Christ, who "gave himself." When Numbers 30 later reveals that a head "shall bear her iniquity" if he silently lets her vow proceed and then later disallows it, the law shows that headship is answerable. The head does not get to avoid consequence. He must carry what his household carries. He must answer to God.',
        },
        {
          kind: 'carry',
          html:
            'If you are in marriage or in any relationship where you lead: the person you lead is not an extension of you to command. They are a person whose commitments and desires matter. Hear them. Ask what they are promising, why, what they hope. And if you must disallow a vow, do it with love and explanation—not silence, not contempt, not later rejection after they have already bound themselves. The burden of leadership is not your rights; it is your responsibility to those you lead.',
        },
        {
          kind: 'reflection',
          id: 'reflection-wife',
          prompt: 'How do the people who lead you actually "hear" you? Do they listen to your commitments, or dismiss them? And if you lead, are you truly listening, or are you simply asserting your authority?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 30:9 — The Widow and Divorced Woman ────────────────────── */
    {
      ref: 'Numbers 30:9',
      title: 'The Widow and Divorced Woman — Standing Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(9,
              t('But every vow of a widow, and of her that is divorced, wherewith they have bound their souls, shall '),
              hy('stand against her', 'qum-statement'),
              t('.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'qum-statement',
          title: 'Qum — "stand against; remain firm"',
          script: 'קוּם',
          translit: '<strong>qum</strong> · to stand, to rise, to endure, to remain firm',
          description:
            'A widow&apos;s vow "stands." It remains firm against her—meaning it binds her without any possibility of being annulled by a male authority. She stands alone before God. Her word is her own.',
        },
        {
          kind: 'commentary',
          id: 'widow-power',
          html:
            'A widow or divorced woman has no covering male in the household. Therefore, her vow binds her fully. She alone is responsible to God for her word. There is no father to disallow her, no husband to negate her commitment. This is not punishment; it is recognition. A woman without a household head is answered to God directly. Her word is her own—completely.',
        },
        {
          kind: 'commentary',
          id: 'widow-trust',
          html:
            'Notice what this says about God&apos;s view: He trusts her. The law assumes a widow can make wise covenantal promises. She is not infantilized; she is trusted with her own word. The grief of widowhood is real—she has lost her husband—but her spiritual agency is not diminished. She stands before God as a full covenant-maker. That is a kind of dignity.',
        },
        {
          kind: 'christ',
          id: 'christ-widow',
          title: 'Christ Connection — The Widow&apos;s Trust',
          html:
            'Jesus had special concern for widows. He condemned those who "devour widow&apos;s houses" (Luke 20:47). He honored the widow who gave her last coin (Luke 21:2–3). And one of the qualifications for a church widow to receive support was that "she hath been faithful in all things" (1 Timothy 5:10). God does not patronize the widow. He holds her accountable and honors her trust. Her vow stands. Her word matters. She answers to God directly.',
        },
        {
          kind: 'carry',
          html:
            'Whether you are a widow, a divorced woman, or any person standing without institutional covering, hear this: your word is your own. You are answered to God directly for your promises. There is no buffer, no one else to blame or deflect to. That is terrifying and liberating at once. It means your commitments matter profoundly. It means you are trusted by heaven to be wise. It means you are not less-than for standing alone.',
        },
        {
          kind: 'reflection',
          id: 'reflection-widow',
          prompt: 'Do you stand alone? Are your promises entirely your own responsibility? What vows have you made that you are answerable for without anyone else&apos;s cover?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 30:10–15 — The Head Bears the Iniquity ──────────────────── */
    {
      ref: 'Numbers 30:10–15',
      title: 'The Consequence — He Shall Bear Her Iniquity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(10,
              t('And if she vowed in her husband&apos;s house, or bound her soul by a bond with an oath;')
            ),
            verse(11,
              t('And her husband heard it, and held his peace at her, and disallowed her not: then all her vows shall stand, and every bond wherewith she bound her soul shall stand.')
            ),
            verse(12,
              t('But if her husband hath utterly made them void on the day he heard them; then whatsoever proceeded out of her lips concerning her vows, or concerning the bond of her soul, shall not stand: her husband hath made them void; and the Lord will forgive her.')
            ),
            verse(13,
              t('Every vow, and every binding oath to afflict the soul, her husband may establish it, or her husband may make it void.')
            ),
            verse(14,
              t('But if her husband altogether hold his peace at her from day to day; then he establisheth all her vows, or all her bonds, which are upon her: he confirmeth them, because he held his peace at her in the day that he heard them.')
            ),
            verse(15,
              t('But if he shall any ways make them void after he hath heard them; then '),
              hp('he shall bear her iniquity', 'bear-iniquity'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'immediate-action',
          html:
            'The law is precise: on the day he hears. If the husband holds his peace on that day, the vow stands and he cannot later disallow it. If he disallows it on that day, it does not stand. But if he waits—if he hears but stays silent, letting days pass, and then later says "no"—he has crossed a line. The vow was already bound. She believed she had his support. And now he is breaking her word after she made it.',
        },
        {
          kind: 'commentary',
          id: 'bear-sin',
          html:
            'This is the crucial phrase: "he shall bear her iniquity." He carries the sin. He assumes the guilt. Why? Because she made a covenant with God believing it was confirmed by her covering. He allowed her to proceed, and now he is negating her commitment after the fact. The head does not get to use his authority to destroy covenants once they are made. If he does, he answers to God for the breaking of her word. He bears it.',
        },
        {
          kind: 'hebrew',
          id: 'heper-word',
          title: 'Heper — "annul; make void"',
          script: 'הֵפֵר',
          translit: '<strong>heper</strong> · to break, to annul, to render void',
          description:
            'To heper a vow is to break its power, to declare it null. The root implies destruction of something that was established. When a husband hepers a vow after initially allowing it to stand, he is destroying something his wife has already committed to God. That carries consequence.',
        },
        {
          kind: 'christ',
          id: 'christ-iniquity',
          title: 'Christ Connection — He Bears Our Iniquity',
          html:
            'Isaiah 53:11 says: "He shall see of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many; for he shall bear their iniquities." Jesus, the Head of the church, bears the iniquity of His people. He takes on what we have broken, what we have failed at, what we owe. Numbers 30&apos;s picture of a head bearing the consequence of a broken vow points to Christ, who bears iniquity not as punishment but as love.',
        },
        {
          kind: 'carry',
          html:
            'If you lead anyone—a spouse, a child, an employee, a team—understand that your authority carries consequence. You cannot be careless with it. You cannot affirm someone, let them proceed on a commitment, and then later tear it down. That destroys trust and integrity. You must be decisive, you must be thoughtful, you must be present. And if you fail—if you do destroy a vow someone made in good faith, believing they had your support—you must carry what you have broken. You must repent. You must bear the cost of your own carelessness.',
        },
        {
          kind: 'reflection',
          id: 'reflection-iniquity',
          prompt: 'Have you had someone in authority over you use their power to tear down a promise you made? What did that do to your trust? And if you hold authority, have you been the one to carelessly break someone&apos;s word after letting them proceed? What would it look like to repent?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── The Summary — Speech and Accountability ──────────────────────── */
    {
      ref: 'Numbers 30 · The Whole Arc',
      title: 'Speech Binds. Headship Answers.',
      blocks: [
        {
          kind: 'commentary',
          id: 'speech-power',
          html:
            'Numbers 30 teaches two truths that seem to contradict modernity. First: your words are powerful. They bind you. They shape your future. You cannot unsay them. You cannot promise lightly. The Bible takes speech seriously in ways most of us have forgotten. Second: authority carries accountability. The person who leads is responsible for how they use that leadership. A father, a husband, anyone who stands in a covering role—they answer to God for their discernment and their care. This is not oppression. This is weight. This is burden.',
        },
        {
          kind: 'reflection',
          id: 'reflection-all',
          prompt: 'Where do you stand in Numbers 30&apos;s framework? Are you a maker of vows, binding yourself to God? Are you someone under a covering, trusting others to hear you? Are you someone who leads, answering for how you use that authority? And in each place, what would change if you took Numbers 30&apos;s teaching seriously?',
        },
      ],
    },
  ],
};
