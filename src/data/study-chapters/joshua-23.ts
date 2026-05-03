import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 23 — Joshua's first farewell. An elderly Joshua calls Israel to
 * remember God's faithfulness, obey the law, avoid idolatry, and cling to
 * the Lord. The chapter anchors on the promise-keeping God and the peril of
 * covenant-breaking.
 */
export const JOSHUA_23: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 23,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 16 },
  intros: [
    'After decades of conquest, Joshua is old. The Lord has given Israel rest from all enemies. Now, near the end of his life, Joshua gathers the nation&apos;s leaders to remind them of what God has done and warn them of what lies ahead.',
    'This is Joshua&apos;s first farewell address — a call to remember. He stands between two eras: the forty years of wandering and conquest now finished, and a future when Israel will live as a nation in their own land. His words are urgent. The danger is subtle. Not foreign armies — those God has already defeated. The real threat is the slow erosion of covenant loyalty, the creeping influence of pagan neighbors, the forgetting of who fights for them.',
  ],

  sections: [
    /* ─── Joshua 23:1–5 — The Lord Has Done All This ─────────────────── */
    {
      ref: 'Joshua 23:1–5',
      title: 'The Lord Has Done All This',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass a long time after that the Lord had given rest unto Israel from all their enemies round about, that Joshua waxed old and stricken in age.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Joshua called for all Israel, and for their elders, and for their heads, and for their judges, and for their officers, and said unto them, I am old and '),
                hg('stricken in age', 'josh-old'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And ye have seen all that the Lord your God hath done unto all these nations because of you; for the '),
                hp('Lord your God is he that hath fought for you', 'christ-fighter'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Behold, I have divided unto you by lot these nations that remain, to be an inheritance for your tribes, from Jordan, with all the nations that I have cut off, even unto the great sea westward.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the Lord your God, he shall '),
                t('expel them from before you'),
                t('; and ye shall possess their land, as the Lord your God hath promised unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh-old',
          html:
            'Joshua&apos;s age is not incidental. He is passing the torch. The people he addresses are younger — they will live in this land long after he is gone. His final words carry urgency because they contain everything he has learned across a lifetime of walking with God.',
        },
        {
          kind: 'commentary',
          id: 'christ-fighter',
          html:
            'This is the foundation of everything Joshua will say next. Israel did not win their battles through military genius, tactics, or strength. <em>&ldquo;The Lord your God, he it is that hath fought for you.&rdquo;</em> Everything that follows — every warning, every call to faithfulness — rests on this truth. A grateful people obey. A forgetful people drift.',
        },
        {
          kind: 'christ',
          id: 'christ-fighter-2',
          title: 'Christ Connection — The One Who Fights for Us',
          html:
            'Paul echoes this promise across the centuries: &ldquo;If God be for us, who can be against us?&rdquo; (Romans 8:31). The God who fought for Joshua&apos;s generation fights for every generation of believers who put their trust in Him. Jesus taught His disciples the same security: &ldquo;Peace I leave with you, not as the world giveth, give I unto you&rdquo; (John 14:27). The victory is already won; our task is to remain faithful.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chazaq',
          title: 'Chazaq — &ldquo;strong, courageous&rdquo;',
          script: 'חָזַק',
          translit: '<strong>chazaq</strong> · to grow strong, harden, strengthen',
          description:
            'The verb appears often in Joshua&apos;s mouth. <em>Chazaq</em> is not the strength of muscles but of resolve — the steadfastness born when you know God is with you. It is what Israel must now become in their inheritance.',
        },
        {
          kind: 'carry',
          html:
            'If you have known God&apos;s faithfulness in your own life — moments when He proved Himself, times He fought for you when you had no strength — Joshua&apos;s first move is to tell you: remember. Write it down. Speak it aloud. Let it become part of your identity. A soul that remembers what God has done is fortified against the temptations that come next.',
        },
        {
          kind: 'reflection',
          id: 'remember-faithfulness',
          prompt:
            'Can you name one specific time when God fought for you, when circumstances turned in your favor in a way only He could have arranged? What would it mean to live today with that memory vivid and active in your heart?',
        },
      ],
    },

    /* ─── Joshua 23:6–8 — Be Very Courageous to Keep the Law ──────────── */
    {
      ref: 'Joshua 23:6–8',
      title: 'Be Very Courageous to Keep the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 6,
              spans: [
                t('Be ye therefore very courageous to keep and to do all that is written in the book of the law of Moses, that ye '),
                hg('turn not aside therefrom to the right hand or to the left', 'josh-straight'),
                t(';'),
              ],
            },
            {
              number: 7,
              spans: [
                t('That ye come not among these nations, these that remain among you; neither make mention of the name of their gods, nor cause to swear by them, neither serve them, nor '),
                hg('bow yourselves unto them', 'josh-bow'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But '),
                hp('cleave unto the Lord your God', 'christ-cleave'),
                t(', as ye have done unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh-straight',
          html:
            'The metaphor is a narrow path. Turn right, you stumble into compromise. Turn left, you abandon the law altogether. Faithfulness is not weakness — it takes <em>very courageous</em> strength to walk a straight line when the pressure to veer is constant and quiet.',
        },
        {
          kind: 'commentary',
          id: 'josh-bow',
          html:
            'The bowing is not merely external ritual. To bow is to assign lordship. To participate in a neighbor&apos;s religious life — even in small ways, even socially — is to transfer some of your allegiance. Joshua names this as the primary danger. Not invasion. Not starvation. The slow syncretism of blended worship.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-davaq',
          title: 'Davaq — &ldquo;cleave, cling, stick&rdquo;',
          script: 'דָּבַק',
          translit: '<strong>davaq</strong> · to adhere, cling tightly, unite',
          description:
            'The same word used in Genesis 2:24 of marriage: &ldquo;Therefore shall a man leave his father and mother, and shall cleave unto his wife.&rdquo; Joshua calls for covenant intimacy with God. This is not distant duty but intimate belonging.',
        },
        {
          kind: 'christ',
          id: 'christ-cleave',
          title: 'Christ Connection — Marriage to Christ',
          html:
            'Paul uses marriage language for the Church: &ldquo;I have espoused you to one husband, that I may present you as a chaste virgin to Christ&rdquo; (2 Corinthians 11:2). To cleave to the Lord is to be bound to Him with the same totality as a marriage covenant. All other loves flow from that one. And the dangers are the same: divided loyalty, the slow erosion of intimacy, the eye that wanders.',
        },
        {
          kind: 'carry',
          html:
            'Faithfulness does not live in grand gestures. It lives in the thousand small choices: which media you consume, which friendships shape your thinking, what you laugh at, what you admire. Joshua is not naive — he knows Israel lives among pagan peoples. But he is clear: your primary loyalty, your truest cleaving, goes to the Lord. Let that steadiness permeate every decision.',
        },
        {
          kind: 'reflection',
          id: 'cleaving-straight',
          prompt:
            'Where are you tempted to bow to a contemporary &ldquo;god&rdquo; — success, security, approval, comfort? What would it mean to consciously cleave to the Lord instead, just as Joshua commanded?',
        },
      ],
    },

    /* ─── Joshua 23:9–10 — One of You Shall Chase a Thousand ──────────── */
    {
      ref: 'Joshua 23:9–10',
      title: 'One of You Shall Chase a Thousand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 9,
              spans: [
                t('For the Lord hath driven out from before you great nations and strong: but as for you, no man hath been able to stand before you unto this day.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('One man of you shall '),
                hp('chase a thousand', 'josh-thousand'),
                t(': for the Lord your God, he it is that fighteth for you, as he hath promised you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh-thousand',
          html:
            'This is not hyperbole — it is witness. It echoes Deuteronomy 32:30: &ldquo;How should one chase a thousand, and two put ten thousand to flight, except their Rock had sold them?&rdquo; The arithmetic is impossible unless God is the fourth member of the army. Joshua has watched it happen. A vastly outnumbered people defeated enemies ten times their number. The difference: they fought for the Lord, and the Lord fought for them.',
        },
        {
          kind: 'carry',
          html:
            'This promise lives. It is not ancient history. When you are outnumbered — by circumstance, by temptation, by grief, by opposition — and you stand with God, the odds shift. You are not truly alone. The God who can turn a thousand into nothing is with you. This does not make life easy. It makes it possible.',
        },
        {
          kind: 'reflection',
          id: 'josh-strength',
          prompt:
            'Have you ever felt outnumbered by what you faced — spiritually, emotionally, practically? What would it mean to believe that God&apos;s presence tips the scales, even when the situation does not change?',
        },
      ],
    },

    /* ─── Joshua 23:11–13 — Take Good Heed ... Ye Love the Lord ───────── */
    {
      ref: 'Joshua 23:11–13',
      title: 'Take Good Heed That Ye Love the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 11,
              spans: [
                t('Take good heed therefore unto yourselves, that ye '),
                hg('love the Lord your God', 'josh-love'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Else if ye do in any wise go back, and cleave unto the remnant of these nations, these that remain among you, and shall make marriages with them, and go in unto them, and they to you:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Know ye for a certainty that the Lord your God will no more drive out any of these nations from before you: but they shall be '),
                hg('snares, and traps', 'josh-snares'),
                t(' unto you, and '),
                hg('scourges in your sides', 'josh-scourges'),
                t(', and '),
                hg('thorns in your eyes', 'josh-thorns'),
                t(', until ye perish from off this good land which the Lord your God hath given you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh-love',
          html:
            'Joshua pivots from obedience to love. The law must be kept, but not from fear alone. The foundation is affection. <em>Love</em> the Lord. If you do, you will not compromise. You cannot cling to Him while embracing what He has forbidden. Love is the filter through which all choices run.',
        },
        {
          kind: 'commentary',
          id: 'josh-snares',
          html:
            'Joshua is visceral about the consequences. Those who appear harmless — the remaining pagan nations, the attractive neighbors, the possibility of intermarriage — become snares and traps. They ensnare by proximity and familiarity. What looked innocent becomes a cage.',
        },
        {
          kind: 'commentary',
          id: 'josh-scourges',
          html:
            'A <em>scourge</em> is a whip that wounds. Mixed allegiance does not merely fail — it actively harms. It becomes an internal wound, a constant painful reminder of the broken covenant. This is not vindictive punishment but the natural consequence of unfaithfulness. You cannot serve two masters.',
        },
        {
          kind: 'commentary',
          id: 'josh-thorns',
          html:
            'The language stacks — snares, scourges, thorns. Each cuts a different way. Thorns in your eyes are the worst — they cloud your vision, make you unable to see clearly. A compromised person loses sight of the Lord. The world presses in.',
        },
        {
          kind: 'carry',
          html:
            'Notice Joshua does not say Israel cannot <em>live among</em> unbelievers. They live surrounded by them. But they cannot blur the lines, cannot treat pagan practices as equivalent, cannot intermarry in a way that unites them spiritually. The world is not evil, but mixing requires extreme intentionality. Most Christians drift toward syncretism not by choice but by inch.',
        },
        {
          kind: 'reflection',
          id: 'josh-drift',
          prompt:
            'Where are you tempted to treat what the Lord forbids as culturally acceptable or personally harmless? What would it look like to take that seriously as a snare?',
        },
      ],
    },

    /* ─── Joshua 23:14 — Not One Thing Hath Failed ──────────────────────── */
    {
      ref: 'Joshua 23:14',
      title: 'Not One Thing Hath Failed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 14,
              spans: [
                t('And, behold, this day I am going the way of all the earth: and ye know in all your hearts and in all your souls, that '),
                hp('not one thing hath failed of all the good things which the Lord your God spake concerning you', 'josh-promises'),
                t('; all are come to pass unto you, and not one thing hath failed thereof.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh-going',
          html:
            'Joshua says he is &ldquo;going the way of all the earth&rdquo; — a poetic way of naming his approaching death. Death is a journey, not an ending. This frame transforms what could be a sad farewell into a hand-off. Joshua is not leaving the story; he is moving to the next chapter.',
        },
        {
          kind: 'commentary',
          id: 'josh-promises',
          html:
            'The capstone verse. Joshua does not argue <em>for</em> faith — he points to evidence. Every promise made to the patriarchs, every word spoken through Moses, every assurance given before the conquest: <em>not one has failed</em>. This is the fact of their experience. They can touch it, measure it, live in it. If God has been this faithful, what reason is there to doubt Him now?',
        },
        {
          kind: 'christ',
          id: 'josh-promises-2',
          title: 'Christ Connection — All Promises Yes and Amen',
          html:
            '&ldquo;For all the promises of God in him are yea, and in him Amen, unto the glory of God by us&rdquo; (2 Corinthians 1:20). In Christ, every promise of God is affirmed. Nothing fails. Nothing is revoked. Joshua&apos;s confidence — &ldquo;not one thing hath failed&rdquo; — is the confidence every believer can inherit through Christ&apos;s resurrection. The promises of God are not luck. They are character.',
        },
        {
          kind: 'carry',
          html:
            'Review your own story. Where has God kept His word to you? Not in fantasy — in real circumstances. A promise kept is the strongest anchor for the next promise. Faith is not blind; it is built on a history of God&apos;s faithfulness you have already witnessed. Remind yourself today of one promise He has kept.',
        },
        {
          kind: 'reflection',
          id: 'josh-faithfulness',
          prompt:
            'What specific promise of God — to comfort you, provide for you, lead you, strengthen you — can you point to as already fulfilled in your life? How does that history change the way you face the future?',
        },
      ],
    },

    /* ─── Joshua 23:15–16 — The Warning of Curses ─────────────────────── */
    {
      ref: 'Joshua 23:15–16',
      title: 'The Warning of Curses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 15,
              spans: [
                t('Therefore it shall come to pass, that as all good things are come upon you, which the Lord your God promised you; so shall the Lord bring upon you all '),
                hg('evil things', 'josh-evil'),
                t(', until he have destroyed you from off this good land which the Lord your God hath given you.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('When ye have '),
                hg('transgressed the covenant of the Lord your God', 'josh-transgress'),
                t(', which he commanded you, and have gone and served other gods, and bowed yourselves to them; then shall the anger of the Lord be kindled against you, and ye shall '),
                hp('perish quickly from off the good land', 'josh-perish'),
                t(' which he hath given unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh-evil',
          html:
            'This is not cruelty — it is symmetry. The God who is faithful to bless is equally faithful to warn. <em>&ldquo;As all good things are come upon you... so shall the Lord bring upon you all evil things.&rdquo;</em> God&apos;s word is one. His promises are not magical wishes he secretly hopes will not be claimed. They are binding. Both blessing and curse are real.',
        },
        {
          kind: 'commentary',
          id: 'josh-transgress',
          html:
            'Breaking covenant is deliberate. It is not accident or weakness — it is a choice to turn and serve other gods, to bow to other lords. Joshua does not say &ldquo;if you slip&rdquo; or &ldquo;if you waver.&rdquo; He says if you transgress — cross the line, reject the covenant intentionally.',
        },
        {
          kind: 'commentary',
          id: 'josh-perish',
          html:
            'The consequence is swift. &ldquo;Ye shall perish <em>quickly</em>.&rdquo; The blessing of God&apos;s presence cannot be stripped away slowly and still leave you standing. His hand is what holds the nation. Remove it, and collapse comes fast. Israel will learn this lesson through centuries of exile and restoration.',
        },
        {
          kind: 'greek',
          id: 'greek-chrestotes',
          title: 'Chrestotes — &ldquo;goodness, kindness&rdquo; (Romans 11:22)',
          script: 'χρηστότης',
          translit: '<strong>chrestotés</strong> · excellence, useful goodness; paired with severity',
          description:
            'Paul writes: &ldquo;Behold therefore the goodness and severity of God.&rdquo; Joshua shows both here. The God who promises is the God who warns. Both are merciful — one saves, one wakes.',
        },
        {
          kind: 'carry',
          html:
            'This is hard language. Do not soften it by saying &ldquo;God only wants the best for you.&rdquo; True, but incomplete. God also says: there are real consequences to real disobedience. If you love Him, keep His covenant. If you abandon His covenant, He will not pretend the betrayal did not happen. This is not harshness — it is the only kind of love that takes sin seriously.',
        },
        {
          kind: 'reflection',
          id: 'josh-covenant-cost',
          prompt:
            'How does it change your understanding of God&apos;s love to know that He takes covenant-breaking seriously — that there are real consequences, not just forgiveness? What does that say about His respect for your freedom?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 23',
    quote:
      'Not one thing hath failed of all the good things which the Lord your God spake concerning you; all are come to pass unto you, and not one thing hath failed thereof.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 23:14 · Study Guide',
  },

  hasHebrew: true,
};
