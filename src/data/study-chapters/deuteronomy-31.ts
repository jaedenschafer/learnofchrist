import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 31 — Moses&apos; farewell. At 120 years old, the lawgiver steps aside
 * for Joshua, knowing Israel will break covenant. Yet God prepares witnesses and mercy.
 * The transition from law to grace-through-type; the seven-year Torah reading; the
 * foreknowledge of sin met by foreknown gospel.
 */
export const DEUTERONOMY_31: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 31,

  estimatedMinutes: { 5: 10, 10: 14, 15: 18 },
  intros: [
    'Deuteronomy 31 is Moses&apos; farewell. He is 120 years old, told he will not cross the Jordan. His life of leadership is over. But before he steps down, he leaves Israel with three great gifts: a charge to Joshua, a public covenant-reading ceremony to happen every seven years, and a written law placed inside the ark—not on the mercy seat, but beside it. "I know thy rebellion," he says. God&apos;s mercy is not naive.',
    'This chapter is where law hands over to grace in type and shadow. Joshua means "Yahweh saves"—the name itself points to Christ. And Moses&apos; words to Israel—"the Lord thy God, he it is that doth go with thee"—are quoted in Hebrews 13:5 as the church&apos;s daily promise. A farewell that reaches across centuries.',
  ],

  sections: [
    /* ─── Deuteronomy 31:1–3 — "I Can No More Go Out and Come In" ──────────── */
    {
      ref: 'Deuteronomy 31:1–3',
      title: '"I Can No More Go Out and Come In"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 1,
              spans: [
                t('And Moses went and spake these words unto all Israel.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he said unto them, '),
                hy('I am an hundred and twenty years old', 'deu-age'),
                t('; '),
                hy('I can no more go out and come in', 'deu-no-more'),
                t(': also the Lord hath said unto me, '),
                hp('Thou shalt not go over this Jordan', 'christ-joshua'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('But the Lord thy God, he will go over before thee, and '),
                hg('he will destroy these nations', 'deu-go-before'),
                t(' before thee, and thou shalt possess them: and '),
                hp('Joshua, he shall go over before thee', 'christ-joshua'),
                t(', as the Lord hath said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-age',
          html:
            'Moses is 120 years old — the span of a full human life under the old covenant. His eyes are not dim; his natural force is not abated. But the season of his leadership is finished. This is not failure. This is the natural order: one generation must yield to the next.',
        },
        {
          kind: 'commentary',
          id: 'deu-no-more',
          html:
            'The phrase "go out and come in" refers to the duties of a leader—to lead armies, to judge, to shepherd. Moses has done this for forty years. Now he cannot. But before he steps aside, he does the most important thing a leader can do: he names his successor and commissions him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chazaq',
          title: 'Chazaq — "be strong"',
          script: 'חָזַק',
          translit: '<strong>chazaq</strong> · to be strong, firm, courageous',
          description:
            'This verb appears five times in Deuteronomy 31, always addressed to Joshua. Strength here is not the absence of fear, but obedience in the face of it. God says it first; Moses says it after; the repeated word is the whole message.',
        },
        {
          kind: 'christ',
          id: 'christ-joshua',
          title: 'Christ Connection — Joshua, Type of the Savior',
          html:
            'Joshua is Yehoshua in Hebrew—literally "Yahweh saves." He goes where Moses cannot. Moses represents the law, which brings us to awareness of sin but cannot bring us into rest. Joshua, whose very name is the Messiah&apos;s name in Greek form (Jesus), is the one who brings Israel in. Hebrews 4:8 draws this explicitly: "if Jesus [Joshua] had given them rest" — the rest the law could not give. The transition here shadows the gospel: the law was our tutor to bring us to Christ, and Christ is the one who brings us in.',
        },
        {
          kind: 'carry',
          html:
            'This season of your life may feel like an ending—a role you&apos;re aging out of, a work you can&apos;t continue, a version of yourself that&apos;s passing. But look at Moses: before he steps down, he names what&apos;s next. He commissions his successor. He makes sure what he&apos;s built doesn&apos;t die with him. That same call to stewardship in transition is likely yours right now.',
        },
        {
          kind: 'reflection',
          id: 'deu-31-ending',
          prompt: 'Where are you being asked to step back from something you&apos;ve led or built? Who is God calling you to commission?',
        },
      ],
    },

    /* ─── Deuteronomy 31:4–8 — "I Will Never Leave Thee, Nor Forsake Thee" ────── */
    {
      ref: 'Deuteronomy 31:4–8',
      title: '"I Will Never Leave Thee, Nor Forsake Thee"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 4,
              spans: [
                t('And the Lord shall do unto them as he did to Sihon and to Og, kings of the Amorites, and unto the land of them, whom he destroyed.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the Lord shall give them up before your face, that ye may do unto them '),
                hy('according unto all the commandments', 'deu-commandment'),
                t(' which I have commanded you.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Be strong and of a good courage, fear not, '),
                hy('nor be afraid of them', 'deu-fear-not'),
                t(': for the Lord thy God, '),
                hp('he it is that doth go with thee', 'christ-go-with'),
                t('; '),
                hp('he will not fail thee, nor forsake thee', 'christ-promise'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-commandment',
          html:
            'The word "commandments" here is plural—the whole of the Torah Moses has just given. The law is not a burden imposed on Israel arbitrarily; it is a map for living in covenant with their God. Joshua is to lead according to it.',
        },
        {
          kind: 'christ',
          id: 'christ-promise',
          title: 'Christ Connection — The Promise That Never Fails',
          html:
            'This promise—"I will not fail thee, nor forsake thee"—is quoted directly in Hebrews 13:5: "I will never leave thee, nor forsake thee." Paul places it in the mouths of the first-century church. What Moses speaks to Joshua at the Jordan crossing becomes the believer&apos;s daily comfort two thousand years later. The same God who walked with Israel in wilderness walks with us in our own. The promise is not location-dependent or era-dependent—it is rooted in the character of God Himself.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 7,
              spans: [
                t('And Moses called unto Joshua, and said unto him in the sight of all Israel, '),
                hg('Be strong and of a good courage', 'deu-courage'),
                t(': for thou must go with this people unto the land which the Lord hath sworn unto their fathers to give them; and thou shalt cause them to inherit it.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the Lord, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-courage',
          html:
            'Moses repeats the commission twice—once as God speaks it to him, once as he speaks it aloud to Joshua in the sight of all Israel. The repetition is deliberate. Joshua hears it from the Lord&apos;s own lips and from Moses&apos; lips. There is no ambiguity. There is no hiding. What Joshua is called to do is publicly witnessed, publicly endorsed.',
        },
        {
          kind: 'carry',
          html:
            'The promise "I will not fail thee, nor forsake thee" is not for great moments of triumph. It&apos;s spoken to Joshua before he enters an unknown land to fight wars he&apos;s never fought, leading people he doesn&apos;t fully control, against enemies stronger than Israel. It&apos;s a promise for Tuesday morning. For the text you don&apos;t know how to answer. For the leadership moment where you feel utterly alone. For the day when you remember how much you don&apos;t know. He will not fail thee.',
        },
        {
          kind: 'reflection',
          id: 'deu-31-promise',
          prompt: 'When have you felt God walk with you even when you were afraid? How does Moses&apos; promise to Joshua speak to your own uncertain territory right now?',
        },
      ],
    },

    /* ─── Deuteronomy 31:9–13 — The Seven-Year Torah Reading ────────────────── */
    {
      ref: 'Deuteronomy 31:9–13',
      title: 'The Seven-Year Torah Reading',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 9,
              spans: [
                t('And '),
                hy('Moses wrote this law', 'deu-wrote-law'),
                t(', and delivered it unto the priests the sons of Levi, which bare the ark of the covenant of the Lord, and unto all the elders of Israel.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Moses commanded them, saying, At the end of every seven years, in the solemnity of the year of release, in the feast of tabernacles,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('When all Israel is come to appear before the Lord thy God in the place which he shall choose, thou shalt '),
                hg('read this law before all Israel', 'deu-read-aloud'),
                t(' in their hearing;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Gather the people together, men, and women, and children, and thy stranger that is within thy gates, '),
                hg('that they may hear, and that they may learn, and fear the Lord your God, and observe to do all the words of this law', 'deu-learn-fear'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And that their children, which have not known any thing, may hear, and learn to fear the Lord your God, as long as ye live in the land whither ye go over Jordan to possess it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-wrote-law',
          html:
            'Moses physically writes the law. This is not oral tradition left to memory; it is inscribed, preserved, entrusted to the priestly order. The written word survives the speaker. The law is meant to outlast Moses himself.',
        },
        {
          kind: 'commentary',
          id: 'deu-read-aloud',
          html:
            'Every seven years—a sabbath cycle—the entire law is read aloud to all Israel: men, women, children, strangers. Not once, not for the elite, but cyclically, for everyone. This is the church&apos;s inheritance: a yearly or multi-year reading cycle (Advent, Lent, Ordinary Time, Lectionary) that ensures the whole Scripture is heard, not cherry-picked passages. God ordained public, rhythmic encounter with His word.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shir',
          title: 'Shir — "song"',
          script: 'שִׁיר',
          translit: '<strong>shir</strong> · song, poem',
          description:
            'Later in this chapter, the law will be set in a song—a vehicle for memory. What is sung is remembered longer than what is merely spoken. God knew this when He ordered the Psalms.',
        },
        {
          kind: 'commentary',
          id: 'deu-learn-fear',
          html:
            '"That they may hear, and that they may learn, and fear the Lord." Three actions: hearing, learning, fearing. Not in the sense of terror, but in the sense of reverence—the fear that comes from knowing who God is and how safe you are with Him. The seven-year rhythm embeds this in the national memory. Every seven years, no one misses it.',
        },
        {
          kind: 'carry',
          html:
            'Public, rhythmic encounter with Scripture is not legalism—it is mercy. A reading cycle means you don&apos;t rely on your own knowledge, your own mood, your own preference for favorite passages. The whole story gets read whether you like it or not. The hard passages get read. The genealogies get read. The judgment gets read. You are not the final editor of what you hear from God.',
        },
        {
          kind: 'reflection',
          id: 'deu-31-cycle',
          prompt: 'How does your own rhythm of encountering Scripture work? Is it curated and comfortable, or does it include the hard passages and genealogies?',
        },
      ],
    },

    /* ─── Deuteronomy 31:14–18 — Foreknown Sin, Foreknown Judgment ────────────── */
    {
      ref: 'Deuteronomy 31:14–18',
      title: 'Foreknown Sin, Foreknown Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 14,
              spans: [
                t('And the Lord said unto Moses, Behold, thy days approach that thou must die: call Joshua, and present yourselves in the tabernacle of the congregation, that I may give him a charge. And Moses and Joshua went, and presented themselves in the tabernacle of the congregation.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the Lord appeared in the tabernacle in a pillar of cloud: and the pillar of the cloud stood over the door of the tabernacle.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the Lord said unto Moses, Behold, thou shalt '),
                hy('sleep with thy fathers', 'deu-sleep'),
                t('; and this people will rise up, and go a whoring after the gods of the strangers of the land, whither they go to be among them, and will '),
                hg('forsake me, and break my covenant', 'deu-break-covenant'),
                t(' which I have made with them.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then my anger shall be kindled against them in that day, and I will forsake them, and I will hide my face from them, and they shall be devoured, and '),
                hy('many evils and troubles shall befall them', 'deu-evils'),
                t('; so that they will say in that day, Are not these evils come upon us, because our God is not among us?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And I will surely hide my face in that day for all the evils which they shall have wrought, in that they are turned unto other gods.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-sleep',
          html:
            'The phrase "sleep with thy fathers" is a euphemism for death—honorable death, the death of the righteous. Moses will not live to see Israel&apos;s failure, but God tells him it is coming. He will know it beforehand.',
        },
        {
          kind: 'commentary',
          id: 'deu-break-covenant',
          html:
            'God says plainly: they will break the covenant. Not "they might," not "they could"—they will. This is not surprise or failure on God&apos;s part. He knows the human heart. He knows Israel will fail. But He makes the covenant anyway. He makes it knowing it will be broken. And He already has a plan for that broken covenant.',
        },
        {
          kind: 'christ',
          id: 'christ-mercy',
          title: 'Christ Connection — Mercy Knows the Breaking',
          html:
            'God foreknows Israel&apos;s sin and commands both the law—which will expose the breaking—and the temple—where sacrifice will cover it. His mercy is not naive. He is not shocked by human failure. And when the covenant breaks, He does not simply destroy. He hides His face, allows the people to experience the consequence of their choice (the exiling and scattering), and then—as the Bible will show—He comes again with a new covenant written not on stone but on the heart (Jeremiah 31:33). The God of Deuteronomy 31 is already planning redemption through the Son.',
        },
        {
          kind: 'carry',
          html:
            'If you are aware of a way you will likely fail—a pattern you can&apos;t quite break, a weakness you keep returning to, a compromise you know is coming—God already knows it too. He is not waiting to be surprised by you. And His plan is not to destroy you for failing. His plan is already making room for your failure and mercy beyond it. That is not permission to sin carelessly. It is permission to stop performing as if you don&apos;t.',
        },
        {
          kind: 'reflection',
          id: 'deu-31-known',
          prompt: 'What do you keep failing at, the thing you know is coming? How does it change things to know that God knew it before He made the covenant with you?',
        },
      ],
    },

    /* ─── Deuteronomy 31:19–27 — The Song as Witness ─────────────────────────── */
    {
      ref: 'Deuteronomy 31:19–27',
      title: 'The Song as Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 19,
              spans: [
                t('Now therefore write ye '),
                hg('this song for you', 'deu-song-witness'),
                t(', and teach it the children of Israel: put it in their mouths, that '),
                hp('this song may be a witness for me', 'christ-song'),
                t(' against them.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('For when I shall have brought them into the land which I sware unto their fathers, that floweth with milk and honey; and they shall have eaten and waxed fat; then will they turn unto other gods, and serve them, and provoke me, and break my covenant.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And it shall come to pass, when many evils and troubles are befallen them, that '),
                hg('this song shall testify against them as a witness', 'deu-song-witness'),
                t('; for it shall not be forgotten out of the mouths of their seed: for I know the imagination of their heart which they go about, even now, before I have brought them into the land which I sware.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-song-witness',
          html:
            'God commands that the law be set in a song—Deuteronomy 32 will record it. Why a song? Because people remember songs. Songs lodge in the mouth and memory in a way mere prose does not. When Israel sins and forgets, the song will still be there, remembered unconsciously, carrying the memory of covenant forward. The song is a mercy: it is the voice of God they cannot quite kill.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 22,
              spans: [
                t('So Moses wrote this song the same day, and taught it the children of Israel.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he gave Joshua the son of Nun a charge, and said, Be strong and of a good courage: for thou shalt bring the children of Israel into the land which I sware unto them: and I will be with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-joshua-charge',
          html:
            'Moses gives the charge to Joshua that very day. The song is written. The law is written. Joshua is commissioned. Everything is in place for Moses to step down. He has prepared his successor not by removing obstacles, but by providing witnesses: a written law, a song, a public charge.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 24,
              spans: [
                t('And it came to pass, when Moses had made an end of writing '),
                hy('the words of this law in a book', 'deu-book-law'),
                t(', until they were finished,'),
              ],
            },
            {
              number: 25,
              spans: [
                t('That Moses commanded the Levites, which bare the ark of the covenant of the Lord, saying,'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Take this book of the law, and put it in the side of the ark of the covenant of the Lord your God, that it may be there '),
                hp('for a witness against thee', 'christ-mercy-higher'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('For I know thy rebellion, and thy stiff neck: behold, while I yet alive with you this day, ye have been rebellious against the Lord; and how much more after my death?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-book-law',
          html:
            'The law is written in a book—a complete, physical, preservable form. This is not an oral tradition subject to erosion. It is ink on parchment, placed where it cannot be lost.',
        },
        {
          kind: 'christ',
          id: 'christ-mercy-higher',
          title: 'Christ Connection — Mercy Beside the Law',
          html:
            'The book of the law is placed "in the side of the ark"—not on the mercy seat (the cover), but beside it, beneath it. The law sits lower than mercy. The law witnesses against Israel; mercy witnesses for them. When judgment would fall, the blood on the mercy seat (shed once for all in Christ) stands between the law and the accused. Hebrews 9 applies this directly: Christ&apos;s blood "speaketh better things than that of Abel"—the law cries out for justice, but blood cries out for mercy.',
        },
        {
          kind: 'carry',
          html:
            'You carry a law within you—the conscience, the memory of what you should have done, the witness of your own rebellion. It is real. It is not silenced. But it does not have the final word. Mercy is positioned above it. Not denying it, but overruling it. When you look at the law and see your failure written there, you can also look up and see mercy.',
        },
        {
          kind: 'reflection',
          id: 'deu-31-law-mercy',
          prompt: 'Where is the law crying out in your own conscience right now? Can you see mercy positioned higher?',
        },
      ],
    },

    /* ─── Deuteronomy 31:28–30 — Heaven and Earth as Witness ────────────────── */
    {
      ref: 'Deuteronomy 31:28–30',
      title: 'Heaven and Earth as Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 28,
              spans: [
                t('Gather unto me all the elders of your tribes, and your officers, that I may speak these words in their ears, and '),
                hg('call heaven and earth to record', 'deu-heaven-earth'),
                t(' against them.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('For I know that after my death ye will utterly corrupt yourselves, and turn aside from the way which I have commanded you; and '),
                hy('evil shall befall you in the latter days', 'deu-latter-days'),
                t('; because ye will do evil in the sight of the Lord, to provoke him to anger through the work of your hands.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Moses spake in the ears of all the congregation of Israel the words of this song, until they were ended.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deu-heaven-earth',
          html:
            'Calling heaven and earth to witness is an ancient covenant formula. The heavens and the earth themselves are summoned as unchanging witnesses to what has been sworn. Nothing can be hidden from them. This is the most solemn form of oath-taking the ancient world knew.',
        },
        {
          kind: 'commentary',
          id: 'deu-latter-days',
          html:
            'Moses predicts judgment in "the latter days"—the coming exile. But the phrase also echoes with prophetic weight. What Moses foresees of Israel&apos;s scattered future will resonate through the whole Old Testament hope for restoration, and ultimately into the New Testament promise of Christ&apos;s return. Even in judgment, the biblical arc bends toward redemption.',
        },
        {
          kind: 'carry',
          html:
            'Notice what Moses does in his final act: he speaks. He gathers people and he speaks the song into their ears. The song—the mercy-filled, covenant-remembering song—is the last thing he gives before he dies. Not threats alone, not warnings alone. A song. Something that can be sung, remembered, passed on. That is the legacy of a wise leader: not fear, but a song people will carry.',
        },
        {
          kind: 'reflection',
          id: 'deu-31-legacy',
          prompt: 'What song—what remembered mercy, what proof of God&apos;s faithfulness—are you leaving for those who come after you?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 31',
    quote:
      '"The Lord thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee." What Moses spoke to Joshua by the Jordan has become the church&apos;s daily promise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 31 · Study Guide',
  },
};
