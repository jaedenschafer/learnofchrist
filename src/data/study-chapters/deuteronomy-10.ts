import { hp, hy, hg, t, type RichChapterContent } from './types';

export const DEUTERONOMY_10: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 10,

  estimatedMinutes: { 5: 8, 10: 16, 15: 21 },
  intros: [
    'Deuteronomy 10 is Moses repeating the core story of Sinai — the new tablets, the ark, the Levites set apart — but with one eye always on the reader&apos;s heart. The chapter opens with instruction: cut new stones, build an ark, carry the law inside. But it closes with one of the Bible&apos;s greatest ethical summaries: "What doth the Lord thy God require of thee?" Not ritual or status. Fear, walk, love, serve, keep. Five verbs that hold the whole religion.',
    'At the center lies an act of grace: God, who owns all heaven and all the earth, had a delight in the patriarchs and chose their children. It is pure election, with no explanation — just: He loved them. And from that love flows the call to circumcise your heart, to remember that you were strangers in Egypt, and to love the stranger as your own. The chapter ends by reminding Israel of their cosmic promotion: seventy souls went down; now they are as many as the stars of heaven.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 10',
    quote:
      'The Lord thy God requireth of thee: to fear the Lord thy God, to walk in all his ways, to love him, and to serve him with all thy heart. Circumcise the foreskin of your heart, and love ye the stranger.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 10 · Study Guide',
  },

  sections: [
    /* ─── Deuteronomy 10:1–5 — New Tablets and the Ark ───────────────────── */
    {
      ref: 'Deuteronomy 10:1–5',
      title: 'New Tablets in the Ark',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('At that time the Lord said unto me, '),
                hg('Hew thee two tables', 'd10-stones'),
                t(' of stone like unto the first, and '),
                hg('come up unto me into the mount', 'd10-ascend'),
                t(', and make thee an ark of shittim wood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-stones',
          html:
            'The first tablets were broken in Moses&apos; hands when he came down from Sinai and saw Israel worshiping gold. These new ones are cut by Moses himself, not inscribed by the finger of God, yet the Lord will write on them again. Broken things can be made again. The law is not so fragile that one sin ends it forever.',
        },
        {
          kind: 'commentary',
          id: 'd10-ascend',
          html:
            'Moses goes up alone. Forty days and forty nights without bread or water — a second fast (verse 10 tells us). This is not punishment; this is the cost of standing in God&apos;s presence and bringing His word back down.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 2,
              spans: [
                t('And I will '),
                hy('write on the tables', 'd10-write'),
                t(' the words that were in the first tables which thou brakest, and thou shalt put them in the ark.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And I made an ark of shittim wood, and hewed two tables of stone like unto the first, and went up into the mount, having the two tables in mine hand.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And '),
                hg('he wrote on the tables', 'd10-written-again'),
                t(', according to the first writing, the ten commandments, which the Lord spake unto you in the mount out of the midst of the fire in the day of the assembly: and the Lord gave them unto me.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And I turned myself and came down from the mount, and put the tables in the ark which I had made; '),
                hp('and there they be', 'd10-presence'),
                t(' unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-write',
          html:
            'The Lord writes again, in His own hand. The law is not revoked by Israel&apos;s failure. It stands. The tablets go inside the ark, into darkness, hidden from view. The law lives not on display but in the place of God&apos;s presence — intimate, not ornamental.',
        },
        {
          kind: 'commentary',
          id: 'd10-written-again',
          html:
            'Notice the shift: "He wrote" — the Lord writes directly on these new stones. Moses cut them, but God fills them. There is partnership here. Human effort to prepare, divine word to complete.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tabernacle',
          title: 'Aron — &ldquo;ark&rdquo;',
          script: 'אָרוֹן',
          translit: '<strong>aron</strong> · a chest, a box; the ark of the covenant',
          description:
            'The ark is a wooden box, a dwelling place for the law. It will travel with Israel through the wilderness and into Canaan, a sign that God&apos;s presence and instruction move with His people.',
        },
        {
          kind: 'christ',
          id: 'christ-ark',
          title: 'Christ Connection — The Law Hidden in the Heart',
          html:
            'The law lives inside the ark, not on monuments or in public view. Paul echoes this when he speaks of the circumcision made without hands — Christ writing the law not on stone but on the heart (Colossians 2:11; Romans 2:29). Jesus will tell His disciples, "I have yet many things to say unto you, but ye cannot bear them now" (John 16:12) — the deepest law is hidden in relationship, revealed to those who draw near.',
        },
        {
          kind: 'carry',
          html:
            'If your life feels like a broken moment — a mistake you&apos;ve made, a promise you couldn&apos;t keep, a season when you fell — remember that the tables were broken and then remade. God is not done writing on your story. He will cut new stones. He will write His word again. And this time, the law will not be fragile on display; it will be hidden in the deepest place, safe with Him.',
        },
        {
          kind: 'reflection',
          id: 'd10-tablets',
          prompt:
            'Where have you experienced brokenness in your obedience? What would it mean to believe that God can write on new stones in that very place?',
        },
      ],
    },

    /* ─── Deuteronomy 10:6–9 — Levi and God as Inheritance ─────────────────── */
    {
      ref: 'Deuteronomy 10:6–9',
      title: 'Levi: God as Inheritance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 6,
              spans: [
                t('And the children of Israel took their journey from Beeroth of the children of Jaakan to Mosera: there Aaron died, and was buried; and '),
                hg('Eleazar his son ministered', 'd10-eleazar'),
                t(' in the priest&apos;s office in his stead.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('From thence they journeyed unto Gudgodah; and from Gudgodah to Jotbath, a land of rivers of waters.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-eleazar',
          html:
            'A brief note of succession: Aaron died, Eleazar took his place. The priesthood does not stop. The law does not stop. What looked like an ending is simply a transition.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 8,
              spans: [
                t('At that time the Lord separated '),
                hy('the tribe of Levi', 'd10-levi'),
                t(', to bear '),
                hp('the ark of the covenant of the Lord', 'd10-ark-covenant'),
                t(', to stand before the Lord to minister unto him, and to '),
                hg('bless in his name', 'd10-bless'),
                t(', unto this day.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Wherefore Levi hath no part nor inheritance with his brethren; '),
                hp('the Lord is his inheritance', 'd10-god-inheritance'),
                t(', according as the Lord thy God promised him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-levi',
          html:
            'The Levites are set apart — no land allotment, no inheritance of fields or gold. This is radical. In a world where wealth = land, Levi has nothing. Yet verse 9 turns this into a theology: not-having becomes the condition for having God.',
        },
        {
          kind: 'commentary',
          id: 'd10-god-inheritance',
          html:
            'This may be the most extraordinary sentence in the Torah: the Lord is their inheritance. Not enough food but enough God. Not the security of land but the security of His presence. Levi is a living parable — what does true wealth look like when you own no property? It looks like standing before God, ministering in His name. The message to every reader: what if your inheritance were Him?',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levi',
          title: 'Leviyyim — &ldquo;Levites&rdquo;',
          script: 'לְוִיִּם',
          translit: '<strong>leviyyim</strong> · the tribe set apart for priestly service',
          description:
            'Levi is a tribe without land, without fortune, living off the tithes and offerings of the other tribes. They are the picture of faith — that God Himself is enough.',
        },
        {
          kind: 'commentary',
          id: 'd10-bless',
          html:
            'The Levites bless in His name. Blessing is their work. A people with no property are given the authority to pronounce blessing — to call good upon others, to declare that the Lord is with them.',
        },
        {
          kind: 'christ',
          id: 'christ-levi',
          title: 'Christ Connection — Priesthood in the New Covenant',
          html:
            'Hebrews tells us Jesus is a priest "after the order of Melchizedek" (Hebrews 5:6, 10) — which is to say, a priesthood outside the old tribal line. And then Peter tells the church: "ye are a chosen generation, a royal priesthood… that ye should shew forth the praises of him who hath called you" (1 Peter 2:9). Every believer becomes what Levi was — set apart not to own the world but to stand in God&apos;s presence and bless in His name.',
        },
        {
          kind: 'carry',
          html:
            'The Levites had no land inheritance but had God. You may be in a season where you don&apos;t have what you thought you&apos;d have — security, comfort, the way you imagined your life would look. What if this is an invitation to what Levi learned: that God Himself is inheritance? That standing in His presence is richer than all the fields you could own?',
        },
        {
          kind: 'reflection',
          id: 'd10-levi-ref',
          prompt:
            'What would change in your life if you truly believed that God Himself — His presence, His blessing, His voice — is your inheritance?',
        },
      ],
    },

    /* ─── Deuteronomy 10:10–11 — Fasting and Command ──────────────────────── */
    {
      ref: 'Deuteronomy 10:10–11',
      title: 'Moses Fasts and the Lord Hearkens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 10,
              spans: [
                t('And I stayed in the mount, according to the first time, '),
                hy('forty days and forty nights', 'd10-forty'),
                t('; and the Lord hearkened unto me at that time also, '),
                hp('and the Lord would not destroy thee', 'd10-hearkened'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the Lord said unto me, '),
                hg('Arise, take thy journey before the people', 'd10-arise'),
                t('; that they may go in and possess the land, which I sware unto their fathers to give unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-forty',
          html:
            'Forty is the number of testing and wilderness in Scripture. Forty days of rain, forty years in the desert, forty days in the wilderness after the resurrection. Moses fasts forty days a second time — not for his own need, but to intercede for a people bent on breaking covenant.',
        },
        {
          kind: 'commentary',
          id: 'd10-hearkened',
          html:
            'The Lord listens. Israel was guilty; they deserved destruction; Moses fasted and prayed; the Lord turned. This is what intercession looks like in the Bible. Not earning God&apos;s favor by suffering, but turning His wrath through prayer.',
        },
        {
          kind: 'commentary',
          id: 'd10-arise',
          html:
            'After deep prayer and fasting, the command is simple: arise and go. The spiritual work is done; now comes the obedience — movement, leadership, faithfulness to the promise. Contemplation leads to action.',
        },
        {
          kind: 'carry',
          html:
            'If you have been carrying something heavy — a broken relationship, a failure, a season where others fell away — and you&apos;ve been asking God to undo it, remember Moses. He didn&apos;t fix everything; he prayed forty days. The Lord listened, but He didn&apos;t make everyone holy. He simply said: arise, and continue. Your next step isn&apos;t to fix what broke. It is to trust that God has heard, and to move forward with what He has called you to.',
        },
        {
          kind: 'reflection',
          id: 'd10-arise',
          prompt:
            'What have you been praying about for a long time, and what might God be asking you to do next — not to solve it, but to obey despite it?',
        },
      ],
    },

    /* ─── Deuteronomy 10:12–14 — What Doth the Lord Require ─────────────── */
    {
      ref: 'Deuteronomy 10:12–14',
      title: 'What Doth the Lord Require of Thee?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 12,
              spans: [
                t('And now, Israel, '),
                hp('what doth the Lord thy God require of thee', 'd10-require'),
                t(', but to '),
                hg('fear the Lord thy God', 'd10-fear'),
                t(', to '),
                hg('walk in all his ways', 'd10-walk'),
                t(', and to '),
                hg('love him', 'd10-love'),
                t(', and to '),
                hg('serve the Lord thy God', 'd10-serve'),
                t(' with all thy heart and with all thy soul,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('To '),
                hg('keep the commandments', 'd10-keep'),
                t(' of the Lord, and his statutes, which I command thee this day for thy good?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-require',
          html:
            'This is one of the great ethical summaries of the Old Testament. It is not: bring more sacrifices. Make your clothes nicer. Memorize more law. The requirement is five verbs — fear, walk, love, serve, keep — and behind all of them, relationship. "With all thy heart and with all thy soul." This is not obedience from distance. It is obedience from love.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yare',
          title: 'Yara — &ldquo;fear&rdquo;',
          script: 'יָרֵא',
          translit: '<strong>yara</strong> · to fear, revere, stand in awe',
          description:
            'Not terror, but reverence. The kind of awe you feel when you realize you are in the presence of someone infinitely good and infinitely powerful. The start of wisdom (Psalm 111:10).',
        },
        {
          kind: 'commentary',
          id: 'd10-fear',
          html:
            'The fear of the Lord is the beginning. It is the posture that makes the rest possible — recognizing that He is God and you are not.',
        },
        {
          kind: 'commentary',
          id: 'd10-walk',
          html:
            'To walk in His ways is to pattern your life after His character — the way He divides good from evil, the way He makes room for the small, the way He loves justice and mercy together.',
        },
        {
          kind: 'commentary',
          id: 'd10-love',
          html:
            'Love. Not just obey, but love. The command to love God is the first commandment of all — given by Jesus Himself (Matthew 22:37). Moses knew this long before: the Lord does not want servants who resent Him; He wants people who love Him.',
        },
        {
          kind: 'commentary',
          id: 'd10-serve',
          html:
            'To serve with all your heart and all your soul is to make His will your life&apos;s orientation. Not part-time, not when convenient. All of you, directed toward Him.',
        },
        {
          kind: 'commentary',
          id: 'd10-keep',
          html:
            'To keep His commandments — to hold them, guard them, practice them. And here&apos;s the pivot: they are given "for thy good." God&apos;s law is not punishment imposed from outside. It is a teacher given in love, shaping you into the kind of person who flourishes.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 14,
              spans: [
                t('Behold, '),
                hy('the heaven and the heaven of heavens is the Lord', 'd10-owns-all'),
                t('&apos;s, the earth also, with all that therein is.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-owns-all',
          html:
            'God owns everything. The highest heaven is His. The earth is His. All its creatures and all its seasons. And yet — verse 15 will tell us — He set His love on Israel anyway. Pure grace. He is infinitely big and infinitely rich, and He wants you.',
        },
        {
          kind: 'christ',
          id: 'christ-require',
          title: 'Christ Connection — He Fulfilled It All',
          html:
            'Jesus says the whole law hangs on two commands: love God with all your heart, soul, and mind; love your neighbor as yourself (Matthew 22:37–40). He is quoting Deuteronomy 10:12 — the five verbs of the requirement — and centering them on love. And then He goes further: He is the one who feared God perfectly, walked in God&apos;s ways perfectly, loved with a human heart perfectly, served God even to death, and kept every commandment. He is what the requirement looks like in flesh.',
        },
        {
          kind: 'carry',
          html:
            'You cannot keep this requirement perfectly, and you are not meant to keep it alone. What these five verbs ask for — to fear, to walk, to love, to serve, to keep — is not a burden you have to bear by yourself. You are invited into the life of someone who already has. Fear is available to you when you stand near Him. Walking in His ways becomes possible when you follow the one who is the Way. Love blooms in you because His love reached you first.',
        },
        {
          kind: 'reflection',
          id: 'd10-require-ref',
          prompt:
            'Of the five things God requires — fear, walk, love, serve, keep — which one feels most alive in your life right now, and which one do you most need to ask Him for?',
        },
      ],
    },

    /* ─── Deuteronomy 10:15–18 — God Chose You; Circumcise Your Heart ────── */
    {
      ref: 'Deuteronomy 10:15–18',
      title: 'Circumcision of the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 15,
              spans: [
                t('Only the Lord had a delight in thy fathers to love them, and '),
                hp('he chose their seed after them', 'd10-chose'),
                t(', even you above all people, as it is this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-chose',
          html:
            'No explanation. God had a delight in Abraham, Isaac, and Jacob — not because they were the biggest nation or the most powerful, but because He chose to love them. And that choice extends to their children. Israel is chosen not by merit but by grace.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 16,
              spans: [
                t('Circumcise therefore the '),
                hy('foreskin of your heart', 'd10-circumcise'),
                t(', and '),
                hg('be no more stiffnecked', 'd10-stiff'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-circumcise',
          html:
            'Physical circumcision marked male Israelites as God&apos;s people. But Moses points inward: cut away the hardness that keeps you from hearing Him. Cut away the resistance, the pride, the part of you that argues back. A "circumcision made without hands… by the circumcision of Christ" is how Paul will describe it later (Colossians 2:11) — Jesus doing inwardly what the law could only mark outwardly.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mul',
          title: 'Mul — &ldquo;circumcise&rdquo;',
          script: 'מוּל',
          translit: '<strong>mul</strong> · to cut, to remove the covering',
          description:
            'The physical act removes a covering; the spiritual act removes a barrier to hearing. Circumcision of the heart is the same logic: remove what stands between you and obedience.',
        },
        {
          kind: 'commentary',
          id: 'd10-stiff',
          html:
            'Stiffnecked — the image is of a stubborn ox that won&apos;t turn when the farmer pulls the plow. Israel has been called this before (Exodus 32:9; Deuteronomy 9:13). The call now is: stop. Turn. Soften.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 17,
              spans: [
                t('For the Lord your God is '),
                hg('God of gods, and Lord of lords', 'd10-supremacy'),
                t(', a '),
                hg('great God, a mighty, and a terrible', 'd10-terrible'),
                t(', '),
                hg('which regardeth not persons, nor taketh reward', 'd10-impartial'),
                t(':'),
              ],
            },
            {
              number: 18,
              spans: [
                t('He doth '),
                hp('execute the judgment of the fatherless and widow', 'd10-judge'),
                t(', and '),
                hp('loveth the stranger', 'd10-stranger-love'),
                t(', in giving him food and raiment.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-supremacy',
          html:
            'This is the declaration of monotheism made clear: God is not one god among many. He is the God of gods — the one to whom all other powers bow. There is no other.',
        },
        {
          kind: 'commentary',
          id: 'd10-terrible',
          html:
            'Great and terrible — worthy of awe and reverence. The word for terrible (nora) can also mean wonderful, awesome. This God is beyond ordinary category.',
        },
        {
          kind: 'commentary',
          id: 'd10-impartial',
          html:
            'God shows no partiality, takes no bribes. In a world where wealth decides everything and the strong crush the weak, God stands apart. He doesn&apos;t favor the rich or fear the powerful.',
        },
        {
          kind: 'commentary',
          id: 'd10-judge',
          html:
            'God executes judgment on behalf of the fatherless and widow — those with no advocate in any human court. He is their lawyer, their vindicator, their hope.',
        },
        {
          kind: 'commentary',
          id: 'd10-stranger-love',
          html:
            'And He loves the stranger. The foreigner, the outsider, the one without rights or family connection. He loves that person. Gives him food and raiment. This is the heart of God: it is turned toward those the world forgets.',
        },
        {
          kind: 'christ',
          id: 'christ-circumcised',
          title: 'Christ Connection — Circumcision Made Without Hands',
          html:
            'Paul writes: "in whom also ye are circumcised with the circumcision made without hands… by the circumcision of Christ" (Colossians 2:11). Jesus did not come to keep the external law perfectly so you could keep it too. He came to do the cutting that the external law could only point to — to circumcise the very heart of sin and resistance itself. When you trust Him, that work is done.',
        },
        {
          kind: 'carry',
          html:
            'There is something in you that is hard. A place where you don&apos;t want to hear, don&apos;t want to turn, don&apos;t want to see. Moses calls it stiffneckedness. You might call it pride, or fear, or reasonable skepticism. Whatever the name, the call is the same: circumcise it. Let Him do the cutting. Let the barrier come away.',
        },
        {
          kind: 'reflection',
          id: 'd10-circumcise-ref',
          prompt:
            'What area of your heart have you been defending that God is asking you to open? What would it mean to let Him circumcise your resistance there?',
        },
      ],
    },

    /* ─── Deuteronomy 10:19–22 — Love the Stranger, Remember Egypt ────────── */
    {
      ref: 'Deuteronomy 10:19–22',
      title: 'Love the Stranger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 19,
              spans: [
                t('Love ye therefore the stranger: for ye were '),
                hy('strangers in the land of Egypt', 'd10-egypt'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-egypt',
          html:
            'Remember. You were foreigners once. You had no power, no inheritance, no standing. You depended on the kindness or indifference of a foreign king. And God loved you there, brought you out, set you free. Now, the command is: turn that love outward. Love the stranger as I loved you when you were strangers.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ger',
          title: 'Ger — &ldquo;stranger&rdquo;',
          script: 'גֵּר',
          translit: '<strong>ger</strong> · a foreigner, a sojourner, one resident but not native',
          description:
            'The ger lived in Israel&apos;s towns but had no tribal inheritance, no ancestral claims, no built-in protection. They were vulnerable. And the law says again and again: protect them. Love them. Remember that you were gers in Egypt.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 20,
              spans: [
                t('Thou shalt '),
                hg('fear the Lord thy God', 'd10-fear-again'),
                t('; '),
                hg('him shalt thou serve', 'd10-serve-again'),
                t(', and '),
                hp('to him shalt thou cleave', 'd10-cleave'),
                t(', and swear by his name.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('He is thy praise, and '),
                hg('he is thy God', 'd10-your-god'),
                t(', that hath done for thee these terrible things which thine eyes have seen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-fear-again',
          html:
            'The call circles back to the opening: fear the Lord. It is the posture that makes everything else possible.',
        },
        {
          kind: 'commentary',
          id: 'd10-serve-again',
          html:
            'To serve Him, to cleave to Him, to swear by His name. These are the marks of covenant loyalty — the language of marriage, of total commitment.',
        },
        {
          kind: 'commentary',
          id: 'd10-cleave',
          html:
            'To cleave — to hold fast, to stick to, to not let go. Not a decision you make once and then forget. A daily choosing to hold onto Him.',
        },
        {
          kind: 'commentary',
          id: 'd10-your-god',
          html:
            'Not just "the God" — but "thy God." The God who has done these terrible things you yourself have witnessed. The plagues, the crossing, the cloud and fire. Personal witness becomes the ground of personal relationship.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 22,
              spans: [
                t('Thy fathers went down into Egypt with '),
                hg('threescore and ten persons', 'd10-seventy'),
                t('; and now the Lord thy God hath made thee '),
                hp('as the stars of the heaven for multitude', 'd10-stars'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'd10-seventy',
          html:
            'Jacob and his children went down seventy souls. A small clan, nothing remarkable. But God made a promise (Genesis 46:3) and kept it.',
        },
        {
          kind: 'commentary',
          id: 'd10-stars',
          html:
            'As many as the stars of heaven for multitude. This is the promise made to Abraham (Genesis 15:5). Israel remembers: we were small, we were enslaved, we were nothing — and God made us as numerous as the stars. It is a reminder that they exist by grace, not by their own doing. And the implication: what God did for you, do for the stranger.',
        },
        {
          kind: 'christ',
          id: 'christ-stranger',
          title: 'Christ Connection — The Foreigner Made Family',
          html:
            'Jesus reached out to the woman at the well (a Samaritan woman, an outsider), to Zacchaeus (a tax collector, despised), to the Canaanite woman whose daughter was ill. He made Himself a stranger among them and loved them. And then He told His disciples: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me" (Matthew 25:40). The stranger you meet is met by Him.',
        },
        {
          kind: 'carry',
          html:
            'You were once an outsider to God. You had no claim on Him, no inheritance, no standing. And He loved you anyway. He reached toward you. He brought you into His family. Now it is your turn. The stranger you pass, the refugee, the foreigner, the person on the edge of your community — remember that you were that person once. Love them. Feed them. Clothe them. Not as charity, but as a mirror of the grace that saved you.',
        },
        {
          kind: 'reflection',
          id: 'd10-stranger-ref',
          prompt:
            'Who is a stranger in your community right now? What would it look like to love them the way God loved you when you were powerless and far from home?',
        },
        {
          kind: 'artwork',
          matchTitle: /exodus|crossing|sea|journey/i,
          caption: 'Deuteronomy 10:19–22 · From Stranger to Star',
        },
      ],
    },
  ],
};
