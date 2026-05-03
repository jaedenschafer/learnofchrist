import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 18 — Jethro brings Moses' family back, recognizes the LORD,
 * and counsels him on leadership delegation.
 */
export const EXODUS_18: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 18,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  intros: [
    'Exodus 18 opens after the plagues and the parting of the Red Sea. Moses has led Israel out of Egypt with signs and wonders so unmistakable that his father-in-law Jethro — a Midianite priest, not an Israelite — hears the news and recognizes God&apos;s hand. He brings Zipporah and the boys to Moses and gives him a gift: not gold or supplies, but counsel. A leader who cannot listen to wisdom outside his own tribe will burn himself out doing work that was never meant to fall on one man.',
    'The chapter sets a pattern that echoes through Scripture: delegation as an act of wisdom, not weakness. Moses appoints judges over thousands, hundreds, fifties, and tens, keeping the hardest cases for himself. Later, the Twelve will do the same. The apostles will appoint deacons (Acts 6). Even now, the model holds: a leader who makes space for others to lead is a leader who survives to lead at all.',
  ],

  sections: [
    /* ─── Exodus 18:1–6 — Jethro Comes ────────────────────────────────── */
    {
      ref: 'Exodus 18:1–6',
      title: 'A Priest from Midian',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('When '),
                hy('Jethro', 'jethro-context'),
                t(', the '),
                hy('priest of Midian', 'jethro-context'),
                t(', Moses&apos; father in law, heard of all that God had done for Moses, and for Israel his people, and that the LORD had brought Israel out of Egypt;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jethro-context',
          html:
            'Jethro is not an Israelite. He is a Midianite priest—a Gentile who worships the gods of his people. Yet he hears of God&apos;s work and his heart recognizes the hand of the LORD. Long before Sinai, long before the law, a foreigner comes to faith. This is the pattern that will echo through all of Scripture: God&apos;s covenant people are not the only ones who encounter His reality.',
        },
        {
          kind: 'hebrew',
          id: 'cohen-midyan',
          title: 'Cohen Midyan — &ldquo;priest of Midian&rdquo;',
          script: 'כֹּהֵן מִדְיָן',
          translit: '<strong>cohen</strong> · priest; <strong>Midyan</strong> · Midian',
          description:
            'A foreign priest who serves foreign gods—yet is chosen to give wisdom to Moses. God uses people from outside the covenant to speak truth into the covenant people&apos;s lives.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 2,
              spans: [t('Then Jethro, Moses&apos; father in law, took Zipporah, Moses&apos; wife, after he had sent her back,')],
            },
            {
              number: 3,
              spans: [t('And her two sons; of which the name of the one was Gershom; for he said, I have been a stranger in a strange land:')],
            },
            {
              number: 4,
              spans: [t('And the name of the other was Eliezer; for the God of my father said he, was my help, and delivered me from the sword of Pharaoh:')],
            },
            {
              number: 5,
              spans: [t('So Jethro, Moses&apos; father in law, came with his sons and his wife unto Moses into the wilderness, where he encamped at the mount of God:')],
            },
            {
              number: 6,
              spans: [t('And he said unto Moses, I am thy father in law Jethro, come unto thee, and thy wife, and her two sons with her.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'send-back',
          html:
            'Moses had sent Zipporah and the boys back to Midian earlier (4:20-25). Now Jethro brings them back. A man leading a movement needs his family. The wilderness is hard enough without a leader doing it alone.',
        },
        {
          kind: 'carry',
          html:
            'There are people in your life who can speak wisdom you might not hear from your own tribe—a friend from another tradition, a mentor from a different world, someone wise who sees what you&apos;ve stopped noticing. Jethro could have stayed in Midian. Instead, he traveled to Moses. Don&apos;t dismiss the wisdom that comes from outside your circle.',
        },
        {
          kind: 'reflection',
          id: 'jethro-comes',
          prompt:
            'Who is a Jethro in your life—someone wise from outside your usual world? What have they taught you that you wouldn&apos;t have learned otherwise?',
        },
      ],
    },

    /* ─── Exodus 18:7–12 — Jethro Recognizes the LORD ──────────────────── */
    {
      ref: 'Exodus 18:7–12',
      title: 'Now I Know',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 7,
              spans: [t('And Moses went out to meet his father in law, and did obeisance, and kissed him: and they asked each other of their welfare; and they went into the tent.')],
            },
            {
              number: 8,
              spans: [
                t('And Moses told his father in law all that the LORD had done unto Pharaoh and to the Egyptians for Israel&apos;s sake, and all '),
                hg('the travail', 'c-hardship'),
                t(' that had come upon them by the way, and how '),
                hp('the LORD delivered them', 'christ-deliver'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hardship',
          html:
            'Moses doesn&apos;t hide the cost. He tells Jethro everything—the plagues, the fear, the journey, the hunger. He is honest about what it cost to be freed. A real testimony names the difficulty, not just the triumph.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 9,
              spans: [
                t('And Jethro rejoiced for all the goodness which the LORD had done to Israel, whom he had delivered out of the hand of the Egyptians.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Jethro said, '),
                hp('Blessed be the LORD', 'c-blessed'),
                t(', who hath delivered you out of the hand of the Egyptians, and out of the hand of Pharaoh, who hath delivered the people from under the hand of the Egyptians.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessed',
          html:
            'Jethro blesses the God of Israel publicly. His faith is not a private belief; it is declared as a priest and a witness. When you have truly seen God&apos;s hand, you cannot stay silent about it.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 11,
              spans: [
                t('Now I know that '),
                hy('the LORD is greater than all gods', 'c-greater'),
                t(': for in the thing wherein they dealt proudly he was above them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-greater',
          html:
            'Jethro says this not from doctrine but from evidence. He has seen what happened to every god Pharaoh and Egypt trusted in. The plagues dismantled them one by one. A Midianite priest—who came into this story devoted to other gods—is moved by what he has witnessed to declare the superiority of the LORD.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 12,
              spans: [
                t('And Jethro, Moses&apos; father in law, took a '),
                hg('burnt offering and sacrifices for God', 'c-altar'),
                t(': and Aaron came, and all the elders of Israel, to eat bread with Moses&apos; father in law before God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altar',
          html:
            'A Midianite priest offers sacrifices to the God of Israel. He is not circumcised, not part of the covenant, not even an Israelite—yet he stands at the altar. This is the gospel before the gospel: grace finds people where they are, and their faith is received.',
        },
        {
          kind: 'christ',
          id: 'christ-deliver',
          title: 'Christ Connection — Gentiles Recognize the Light',
          html:
            'Matthew opens his Gospel with Gentile magi from the east who come seeking the newborn King (Matt. 2:1-12). Luke tells of Naaman, a Syrian general, whose faith was greater than Israel&apos;s (Luke 4:25-27). Acts 10 shows Cornelius, a Roman centurion, receiving the Holy Spirit before Peter even finishes speaking. And Jesus Himself says, "I am the light of the world" (John 8:12). Jethro seeing the LORD&apos;s power is the first of many scenes where a Gentile recognizes God&apos;s reality before the covenant people do—a promise that His light is for all peoples.',
        },
        {
          kind: 'carry',
          html:
            'Don&apos;t be surprised when faith or wisdom meets you from an unexpected place. Don&apos;t guard God as if He belongs only to your tradition or your tribe. When you see evidence of His work in someone&apos;s life—in their kindness, their integrity, their courage—receive it as Jethro&apos;s witness was received: with joy and thanksgiving.',
        },
        {
          kind: 'reflection',
          id: 'jethro-knows',
          prompt:
            'When have you seen someone outside your faith community show evidence of knowing God? What did that teach you?',
        },
      ],
    },

    /* ─── Exodus 18:13–18 — A Leader Working Alone ─────────────────────── */
    {
      ref: 'Exodus 18:13–18',
      title: 'Burning Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 13,
              spans: [
                t('And it came to pass on the morrow, that Moses sat to '),
                hg('judge the people', 'c-alone'),
                t(': and the people stood by Moses from the morning unto the evening.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-alone',
          html:
            'Moses is doing all the work himself. Every dispute, every question, every complaint comes to him. He is the only judge, the only mediator, the only one with authority to decide. It is unsustainable.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 14,
              spans: [t('And when Moses&apos; father in law saw all that he did to the people, he said, What is this thing that thou doest to the people? why sittest thou thyself alone, and all the people stand by thee from morning unto even?')],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 15,
              spans: [
                t('And Moses said unto his father in law, Because the people come unto me to enquire of God:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('When they have a matter, they come unto me; and I judge between one and another, and I do make them know the statutes of God, and his laws.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-reason',
          html:
            'Moses&apos;s explanation is noble. He wants to be available, to handle the hard cases, to teach the people God&apos;s ways directly. But Jethro sees what Moses cannot yet see: good intentions are drowning him.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 17,
              spans: [
                t('And Moses&apos; father in law said unto him, The thing that thou doest is not good.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Thou wilt surely wear away, both thou, and this people that is with thee: for this thing is too heavy for thee; thou art not able to perform it thyself alone.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wear-away',
          html:
            'Jethro diagnoses the problem with surgical precision. A leader trying to do everything burns out—but he also harms the people. They are waiting in lines all day. They aren&apos;t learning to hear God themselves. The work is not only unsustainable; it is unwise.',
        },
        {
          kind: 'hebrew',
          id: 'yare-leader',
          title: 'Yare — &ldquo;fear&rdquo; (ability/qualification)',
          script: 'יָרֵא',
          translit: '<strong>yare</strong> · to fear, to revere; by extension, to be capable of, qualified for',
          description:
            'Later in verse 21, the word describes leaders who "fear God." In Jethro&apos;s counsel, it refers to the quality needed in judges—people who possess the capacity, the maturity, the reverence to decide cases justly.',
        },
        {
          kind: 'carry',
          html:
            'If you are leading anything—a team, a family, a church, a project—and you are the only person who can decide, the only one people come to, the only authority—you are not building a movement. You are building a dependency. And you are going to wear away. Make space for others. Train people. Delegate not because you are lazy, but because you love both the people you serve and the people you are failing to develop.',
        },
        {
          kind: 'reflection',
          id: 'burn-out',
          prompt:
            'What are you trying to do alone that was never meant to rest on one person? Who could you invite to share that load?',
        },
      ],
    },

    /* ─── Exodus 18:19–23 — The Counsel ────────────────────────────────── */
    {
      ref: 'Exodus 18:19–23',
      title: 'A Structure for Delegation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 19,
              spans: [
                t('Hearken now unto my voice, I will give thee counsel, and God shall be with thee: Be thou for the people to God-ward, that thou mayest '),
                hg('bring the causes unto God', 'c-spiritual-leader'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spiritual-leader',
          html:
            'Jethro is not saying Moses should stop leading. He is saying Moses should shift what he is doing. Instead of handling every case personally, Moses should be the people&apos;s advocate before God—their intercessor, their teacher, their guide to God&apos;s ways. This is Moses&apos;s true work.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 20,
              spans: [
                t('And thou shalt teach them ordinances and laws, and shalt shew them the '),
                hg('way wherein they must walk', 'c-teach'),
                t(', and the work that they must do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-teach',
          html:
            'Moses is to teach the principles—not just decide cases, but show the people why God asks what He asks. This moves the people from obedience based on authority to obedience based on understanding.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 21,
              spans: [
                t('Moreover thou shalt provide out of all the people '),
                hy('able men, such as fear God', 'c-qualified'),
                t(', men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-qualified',
          html:
            'Jethro is specific about whom to choose: people who fear God, people of truth, people who hate covetousness. Character matters more than credentials. The leaders Moses chooses will set the tone for the nation.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 22,
              spans: [
                t('And let them judge the people at all seasons: and it shall be, that every great matter they shall bring unto thee, but every small matter they shall judge: so shall it be easier for thee, and they shall bear the burden with thee.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('If thou shalt do this thing, and God command thee so, then thou shalt be able to endure, and all this people shall also go to their place in peace.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-endure',
          html:
            'Jethro promises something simple: if Moses listens, he will be able to endure. The people will go forward in peace. This is what delegation makes possible—not laziness, but sustainability. A leader who tries to do everything is a leader who cannot finish the race.',
        },
        {
          kind: 'christ',
          id: 'christ-delegate',
          title: 'Christ Connection — Leaders Who Send Others',
          html:
            'Jesus does this immediately. After training the Twelve, He sends them out two by two (Mark 6:7). Later He sends out the Seventy (Luke 10:1). He doesn&apos;t keep all the work for Himself. In Acts 6, the apostles do the same—they appoint deacons to handle food distribution so they can focus on prayer and teaching. Christ&apos;s pattern is clear: a leader worth following makes space for others to lead. Jethro&apos;s ancient counsel became the apostles&apos; strategy.',
        },
        {
          kind: 'carry',
          html:
            'If you lead, consider: Are you hoarding work that others could do? Are you exhausted while others around you wait for a chance to serve? Are the people learning to hear God themselves, or only from you? The sign of a healthy leader is not how much they do, but how many leaders they make.',
        },
        {
          kind: 'reflection',
          id: 'delegate',
          prompt:
            'In your area of influence, what three tasks could you give to others to develop them and free yourself for your highest calling?',
        },
      ],
    },

    /* ─── Exodus 18:24–27 — Moses Listens ──────────────────────────────── */
    {
      ref: 'Exodus 18:24–27',
      title: 'A Leader Who Listens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 24,
              spans: [
                t('So Moses hearkened to the voice of his father in law, and '),
                hg('did all that he had said', 'c-obey'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Moses chose '),
                hy('able men out of all Israel', 'c-choose-leaders'),
                t(', and made them heads over the people, rulers of thousands, rulers of hundreds, rulers of fifties, and rulers of tens.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-obey',
          html:
            'Moses does not defend himself. He does not insist he knows better. He listens to his father-in-law and acts immediately. This is the mark of a wise leader—the ability to receive counsel even (or especially) from outside your circle.',
        },
        {
          kind: 'commentary',
          id: 'c-choose-leaders',
          html:
            'Moses doesn&apos;t hand power to relatives or favorites. He chooses able men—people of capacity and character. The people of Israel rise into their potential because Moses is willing to release control.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 26,
              spans: [
                t('And they judged the people at all seasons: the hard causes they brought unto Moses, but every small matter they judged themselves.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Moses let his father in law depart; and he went his way into his own land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-depart',
          html:
            'Jethro did not stay to supervise. He gave his counsel and returned to his own land. A true counselor doesn&apos;t stay to manage; he trusts his advice and leaves the other person free to lead. This is the most generous form of influence.',
        },
        {
          kind: 'carry',
          html:
            'There is a gift in being a Jethro—someone who sees a wise path and offers it without needing credit or control. There is also a gift in being a Moses—someone strong enough to listen when wisdom comes from an unexpected place. Look for both in your own life. Offer counsel when you see it needed. Receive it with gratitude and act on it quickly.',
        },
        {
          kind: 'reflection',
          id: 'moses-listens',
          prompt:
            'What counsel have you been resisting? Is it from someone outside your usual circle? What would it cost you to listen?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 18',
    quote:
      'When a Midianite priest saw what God had done for Israel, he said, "Now I know that the LORD is greater than all gods." A leader who listens to counsel from outside his own tribe stays alive long enough to lead. The most wise leaders are those who know their own limits and make space for others to lead.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 18 · Study Guide',
  },
};
