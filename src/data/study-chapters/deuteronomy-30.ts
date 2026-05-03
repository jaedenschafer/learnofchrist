import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 30 — The Great Return Promise.
 *
 * One of the most theologically rich chapters in the Pentateuch. The core promise:
 * even after exile and curse, God promises gathering, circumcision of heart, and
 * the proximity of the Word — all fulfilled in Christ and the Spirit&apos;s work.
 * Romans 10:6–9 quotes Deuteronomy 30:12–14 as the gospel itself.
 */
export const DEUTERONOMY_30: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 30,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 15 },
  intros: [
    'Deuteronomy 30 stands at the hinge of all of Scripture. For forty years, Israel has wandered in the wilderness. Moses has rehearsed the law — the blessings if Israel obeys, the curses if Israel turns away. Now, at the end of his farewell, he speaks a promise that echoes through the rest of the Bible: even after exile and judgment, God will gather His scattered people. He will circumcise their hearts. He will bring them home.',
    'The chapter opens with Israel still in exile, still facing the curses of broken covenant. But the God who gives the law also promises to restore the heart that receives it. This is the gospel in the Book of the Law. And when the apostle Paul wants to teach the churches what faith is, what the gospel actually does — he quotes directly from Deuteronomy 30:12–14 and identifies the "word" with Christ Himself.',
  ],

  sections: [
    /* ─── Deuteronomy 30:1–3 — The Return Promise ──────────────────────── */
    {
      ref: 'Deuteronomy 30:1–3',
      title: '"And Shalt Return unto the Lord Thy God"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 1,
              spans: [
                t('And it shall come to pass, when '),
                hg('all these things', 'deut-return-1'),
                t(' are come upon thee, the blessing and the curse, which I have set before thee, and thou shalt '),
                hp('call them to mind', 'deut-repent'),
                t(' among all the nations, whither the Lord thy God hath driven thee;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-return-1',
          html:
            'The chapter assumes Israel will fall. "When all these things are come" — blessing and curse both. The blessing comes if Israel obeys; the curse comes if Israel turns away. This is not a hope; this is the reality of a covenant people who wrestle with their own hearts. But into that reality, God speaks a word: <em>when you return</em>. Not <em>if</em> you return — <em>when</em>. The return is not in question. It is promised.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 2,
              spans: [
                t('And shalt '),
                hp('return unto the Lord thy God', 'deut-return-promise'),
                t(', and shalt obey his voice according to all that I command thee this day, thou and thy children, with '),
                hy('all thine heart', 'hebrew-levav'),
                t(', and with all thy soul;'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levav',
          title: '"All Thine Heart" — לב — <em>levav</em>',
          script: 'לֵבָב',
          translit: '<strong>levav</strong> · the seat of will, intellect, emotion — the whole self',
          description:
            'The heart in Hebrew is not sentiment; it is the command center. To love with all your heart is to turn your entire being toward God — will, mind, desire, all aligned.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 3,
              spans: [
                t('That then the Lord thy God will '),
                hg('turn thy captivity', 'deut-turn-captivity'),
                t(', and have compassion upon thee, and will return and gather thee from all the nations, whither the Lord thy God hath scattered thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-turn-captivity',
          html:
            'The promise is spoken while Israel is still in captivity. God does not wait for Israel to fix itself first. He responds to the returning heart with gathering, compassion, and homecoming. The exile is not the end of the story — it is the place where God&apos;s faithfulness becomes most visible.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a season of exile — whether spiritual, emotional, or circumstantial — you are not outside the reach of this promise. The very confession that you have strayed is where God&apos;s gathering begins. He is not waiting for you to clean yourself up. He responds to the turning itself.',
        },
        {
          kind: 'reflection',
          id: 'deut-return-refl',
          prompt:
            'Where have you strayed from obedience? What would change in your heart if you actually believed God promises to gather you, not punish you, when you return?',
        },
      ],
    },

    /* ─── Deuteronomy 30:4–6 — Circumcision of the Heart ───────────────── */
    {
      ref: 'Deuteronomy 30:4–6',
      title: '"The Lord Thy God Will Circumcise Thine Heart"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 4,
              spans: [
                t('If any of thine be driven out unto the uttermost parts of heaven, from thence will the Lord thy God '),
                hg('gather thee', 'deut-gather-uttermost'),
                t(', and from thence will he fetch thee:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-gather-uttermost',
          html:
            'The promise is cosmic in scale. <em>Uttermost parts of heaven</em> — the farthest distances imaginable — do not exceed God&apos;s reach. There is no exile so complete that God cannot gather His people from it. This becomes a metaphor for spiritual distance: no sin, no apostasy, no seeming abandonment of the faith is too great for God&apos;s gathering grace.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 5,
              spans: [
                t('And the Lord thy God will bring thee into the land which thy fathers possessed, and thou shalt possess it; and he will do thee good, and '),
                hg('multiply thee above thy fathers', 'deut-multiply-fathers'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-multiply-fathers',
          html:
            'The return is not a bare restoration to the status quo. God promises multiplication beyond the original inheritance. Restoration through God&apos;s hand always ends in abundance.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 6,
              spans: [
                t('And '),
                hp('the Lord thy God will circumcise thine heart', 'deut-circumcise-heart'),
                t(', and the heart of thy seed, to '),
                hy('love the Lord thy God', 'hebrew-mul'),
                t(' with all thine heart, and with all thy soul, that thou mayest live.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mul',
          title: '"Circumcise" — מוּל — <em>mul</em>',
          script: 'מוּל',
          translit: '<strong>mul</strong> · to cut away, to remove the foreskin; metaphorically, to remove what hinders',
          description:
            'The physical circumcision was the sign of the covenant. Here, God promises a circumcision of the heart — the removal of what prevents love, the opening of the inner self to obedience. This is the work of the Spirit.',
        },
        {
          kind: 'christ',
          id: 'deut-circumcise-heart',
          title: 'Christ Connection — The Circumcision of the Spirit',
          html:
            'Paul quotes this promise directly: "Circumcision is that of the heart, in the spirit… whose praise is not of men, but of God" (Romans 2:29). The law demands obedience; the Spirit makes obedience possible by circumcising the heart — by removing the hardness that refuses love. "Therefore if any man be in Christ, he is a new creature" (2 Corinthians 5:17). The inward change Deuteronomy promises, Christ delivers through His Spirit.',
        },
        {
          kind: 'carry',
          html:
            'You cannot circumcise your own heart. You can confess, repent, and turn — but the transformation of the heart from stone to flesh, from resistant to open — that is God&apos;s work. The promise of Deuteronomy 30 is that when you turn, He does the deeper work. The part that hinders love is what He removes.',
        },
        {
          kind: 'reflection',
          id: 'deut-circumcise-refl',
          prompt:
            'What part of your heart feels hard or resistant to God? Can you ask Him to do the circumcising work you cannot do yourself?',
        },
      ],
    },

    /* ─── Deuteronomy 30:7–10 — Blessing Upon the Enemies ──────────────── */
    {
      ref: 'Deuteronomy 30:7–10',
      title: '"Curses Upon Thine Enemies"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 7,
              spans: [
                t('And the Lord thy God will put all these curses upon thine enemies, and on them that hate thee, which persecuted thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-enemies',
          html:
            'The curses that would fall on an unfaithful Israel are redirected onto those who oppose her. This is the language of imprecatory prayer — the acknowledgment that God is not neutral toward those who wage war against His people. The suffering and curse belong to the enemy, not to the returning people.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 8,
              spans: [
                t('And thou shalt return and '),
                hg('obey the voice of the Lord', 'deut-obey-voice'),
                t(', and do all his commandments which I command thee this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-obey-voice',
          html:
            'Obedience is the return. Not in a transactional sense — obedience does not earn God&apos;s gathering — but in the sense that the turning of the heart naturally finds expression in hearing and obeying God&apos;s voice. The restored relationship moves the person toward alignment with God&apos;s will.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 9,
              spans: [
                t('And the Lord thy God will make thee '),
                hg('plenteous in every work', 'deut-plenteous'),
                t(' of thine hand, in the fruit of thy body, and in the fruit of thy cattle, and in the fruit of thy land, for good: for the Lord will again rejoice over thee for good, as he rejoiced over thy fathers;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-plenteous',
          html:
            'Blessing flows into every dimension of life — work, family, livestock, land. This is not prosperity theology; it is the promise that God&apos;s joy in restoring His people overflows into concrete abundance. And God&apos;s own emotion — "the Lord will again rejoice over thee" — is named. God does not restore reluctantly; He is glad.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 10,
              spans: [
                t('If thou shalt hearken unto the voice of the Lord thy God, to keep his commandments and his statutes which are written in this book of the law, and if thou turn unto the Lord thy God with all thine heart, and with all thy soul.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The cycle is clear: turn with all your heart and soul, listen to God&apos;s voice, obey His commands. And God responds with gathering, circumcision of the heart, and abundance. It is not a chain of earning; it is a pattern of return and reception.',
        },
      ],
    },

    /* ─── Deuteronomy 30:11–14 — The Word Very Nigh ──────────────────────── */
    {
      ref: 'Deuteronomy 30:11–14',
      title: '"The Word Is Very Nigh unto Thee"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 11,
              spans: [
                t('For '),
                hg('this commandment which I command thee this day', 'deut-commandment'),
                t(', it is not hidden from thee, neither is it far off.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-commandment',
          html:
            'Moses is speaking to a people who fear the law is too high, too distant, too obscure for them to grasp. He answers: the commandment is not hidden. It is not a secret written in heaven. It is right here, knowable, within reach.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 12,
              spans: [
                t('It is not in heaven, that thou shouldest say, Who shall go up for us to heaven, and bring it unto us, that we may hear it, and do it?'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 13,
              spans: [
                t('Neither is it beyond the sea, that thou shouldest say, Who shall go over the sea for us, and bring it unto us, that we may hear it, and do it?'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'deut-word-near',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'The apostle Paul quotes these exact verses in Romans 10:6–9 and identifies "the word" with Christ and faith. "Say not in thine heart, Who shall ascend into heaven? (that is, to bring Christ down from above:) Or, Who shall descend into the deep? (that is, to bring up Christ again from the dead.) But what saith it? The word is nigh thee, even in thy mouth, and in thy heart… If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved" (Romans 10:6–9). The Word that was nigh in the law became flesh and dwelt among us. The gospel is that Christ — the Way, the Truth, the Life — is not distant. He is here. He is accessible. He is present.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 14,
              spans: [
                t('But '),
                hy('the word is very nigh unto thee', 'deut-word-nigh'),
                t(', '),
                hg('in thy mouth, and in thy heart', 'deut-mouth-heart'),
                t(', that thou mayest do it.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'deut-word-nigh',
          title: '"Very Nigh" — קָרוֹב — <em>qarov</em>',
          script: 'קָרוֹב',
          translit: '<strong>qarov</strong> · near, close at hand; intimate, immediate',
          description:
            'Not distant theology, not a Word locked in heaven. The commandment — the way of life — is close. It is intimate. It is here.',
        },
        {
          kind: 'commentary',
          id: 'deut-mouth-heart',
          html:
            'In thy mouth — the word you speak, the confession, the name you call upon. In thy heart — the seat of belief, the root of will and desire. The commandment is not in some remote place; it is in the two places where you live: where you speak and where you believe. To obey is to align those two — what you confess with what you believe.',
        },
        {
          kind: 'carry',
          html:
            'Whatever the law seemed to demand, Paul makes clear what Christ&apos;s presence demands: not a heroic journey to heaven or the abyss, but a simple confession of faith. The hardest thing is made the simplest. The Word is not far from you. It is on your lips. It is in your heart. The obedience Christ calls for begins with a word and a belief — both of which are already within reach.',
        },
        {
          kind: 'reflection',
          id: 'deut-nigh-refl',
          prompt:
            'What would it change in your faith to truly believe the Word — Christ — is not far off, but already very near? In your mouth? In your heart?',
        },
      ],
    },

    /* ─── Deuteronomy 30:15–20 — Choose Life ───────────────────────────── */
    {
      ref: 'Deuteronomy 30:15–20',
      title: '"Choose Life, That Both Thou and Thy Seed May Live"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 15,
              spans: [
                t('See, I have '),
                hp('set before thee', 'deut-choice'),
                t(' this day '),
                hy('life and good, and death and evil', 'hebrew-chayim'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chayim',
          title: '"Life" — חַיִּים — <em>chayim</em>',
          script: 'חַיִּים',
          translit: '<strong>chayim</strong> · life; vitality; the abundance of living',
          description:
            'Not mere existence, but flourishing. The life that comes from obedience, from the circumcised heart, from alignment with God&apos;s way.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 16,
              spans: [
                t('In that I command thee this day to '),
                hg('love the Lord thy God', 'deut-love-command'),
                t(', to walk in his ways, and to keep his commandments and his statutes and his judgments, that thou mayest live and multiply: and the Lord thy God shall bless thee in the land whither thou goest to possess it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-love-command',
          html:
            'Love is commanded. This seems like a paradox — how can you command the heart? But in the biblical understanding, love is not first a feeling; it is a direction of the will. To love God is to walk in His ways, to keep His statutes. The command is the framework within which love moves.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 17,
              spans: [
                t('But if thine heart turn away, so that thou wilt not hear, but shalt be drawn away, and '),
                hg('worship other gods, and serve them', 'deut-turn-away'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 18,
              spans: [
                t('I denounce unto you this day, that ye shall surely perish, and that ye shall not prolong your days upon the land whither thou passest over Jordan to go to possess it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-turn-away',
          html:
            'The alternative is stated without softening. If the heart turns away, if you worship other gods and serve them — you shall perish. The covenant carries real consequence. But here is the point Moses is making: this is a choice set before you. You are not a puppet. You see the stakes. You choose.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 19,
              spans: [
                t('I call '),
                hg('heaven and earth', 'deut-witnesses'),
                t(' to record this day against you, that I have set before you '),
                hp('life and death, blessing and cursing', 'deut-life-death'),
                t(': therefore '),
                hy('choose life', 'hebrew-shuv'),
                t(', that both thou and thy seed may live:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-witnesses',
          html:
            'Heaven and earth are called as witnesses to the covenant. This is not a small thing. The cosmos itself is testimony. The choice made here echoes forever.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shuv',
          title: '"Return" — שׁוּב — <em>shuv</em>',
          script: 'שׁוּב',
          translit: '<strong>shuv</strong> · to return, to repent, to turn back toward',
          description:
            'The word that echoes through the chapter. To choose life is to shuv — to return, to turn toward God, to come home.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 20,
              spans: [
                t('That thou mayest '),
                hg('love the Lord thy God, and that thou mayest obey his voice, and that thou mayest cleave unto him', 'deut-cleave'),
                t(': for '),
                hp('he is thy life, and the length of thy days', 'deut-he-is-life'),
                t(': that thou mayest dwell in the land which the Lord sware unto thy fathers, to Abraham, to Isaac, and to Jacob, to give them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-cleave',
          html:
            'Love, obey, cleave — the three verbs that sum up the entire covenant. Cleave is the language of Genesis 2:24, where man leaves father and mother to cleave to his wife. Here it is the soul&apos;s adhesion to God. Not a feeling that comes and goes, but a commitment that holds.',
        },
        {
          kind: 'christ',
          id: 'deut-he-is-life',
          title: 'Christ Connection — "I Am the Life"',
          html:
            'Jesus says, "I am the way, the truth, and the life" (John 14:6). The promise of Deuteronomy 30:20 — "He is thy life" — becomes personal and incarnate. Not just God as the giver of life, but Christ as life itself. To choose life is to choose Him. To cleave to Him is to have the abundance that God promised to the returning people.',
        },
        {
          kind: 'carry',
          html:
            'You are standing in the same place Moses set Israel. Life and death are before you. Blessing and cursing. The choice is real. It is not determined; it is not hidden from you. You can choose to love God, to obey His voice, to cleave to Him — because He has made Himself near. He is in your mouth. He is in your heart. The choice for life is the simplest and the hardest thing you will do. It is to turn, and to keep turning, toward Him.',
        },
        {
          kind: 'reflection',
          id: 'deut-choose-life-refl',
          prompt:
            'In a concrete way, today or this week — what does choosing life look like for you? Where is God calling you to love, obey, and cleave to Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'See, I have set before thee this day life and good, and death and evil… therefore choose life, that both thou and thy seed may live.',
    snippet:
      'Deuteronomy 30 — the promise of return, circumcision of heart, and the nearness of God&apos;s Word. A study guide from Learn of Christ.',
    ref: 'Deuteronomy 30:15, 19 · Study Guide',
  },

  hasHebrew: true,
};
