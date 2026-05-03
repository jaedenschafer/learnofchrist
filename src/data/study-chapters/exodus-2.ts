import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 2 - Moses born hidden; saved from the river; raised in Pharaoh&apos;s house;
 * kills an Egyptian; flees to Midian; marries Zipporah; begins his exile while God
 * prepares him. God hears Israel&apos;s groaning.
 *
 * The chapter is less about action than about a deliverer being forged in silence.
 * No miracles, no great acts - only a mother&apos;s courage, a woman&apos;s compassion,
 * a man learning that his Egyptian power is not his path, and time in the wilderness
 * that will remake him.
 */
export const EXODUS_2: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 2,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 14 },
  intros: [
    'Exodus 1 ended in suffocation: Pharaoh enslaved Israel, made their lives bitter, tried to murder their sons. Exodus 2 opens not with a plague or a sign, but with a birth - a son hidden, a basket placed in the river, a royal daughter&apos;s hand drawing him out. God&apos;s rescue of Israel does not begin with thunder. It begins with a mother&apos;s faithfulness and a baby breathing.',
    'Moses grows up inside the very power that is crushing his people. He learns Egypt&apos;s wisdom, walks Pharaoh&apos;s halls, and then one day he sees an Egyptian beating a Hebrew. What he does in that moment - killing the oppressor - reveals a man caught between two worlds, belonging fully to neither. He flees to Midian, and there begins 40 years of obscurity. God&apos;s great deliverers are often hidden for decades before they are ever known.',
  ],

  bottomShare: {
    label: 'Share Exodus 2',
    quote:
      'A woman hid her newborn son three months, then placed him in an ark of bulrushes by the river. Pharaoh&apos;s daughter drew him out and raised him in the royal house. Moses grew to manhood hidden among his oppressors, then fled to Midian, where God was preparing him for deliverance.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 2 · Study Guide',
  },

  sections: [
    /* ── Exodus 2:1-10 - Hidden and Drawn Out ────────────────────────── */
    {
      ref: 'Exodus 2:1-10',
      title: 'Hidden and Drawn Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And there went a man of the house of Levi, and took him a wife of the daughters of Levi.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the woman conceived, and bare a '),
                hg('son', 'c-son-hope'),
                t(': and when she saw him that he was a goodly child, she '),
                hy('hid him three months', 'hebrew-teva'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-son-hope',
          html:
            'Exodus 1 ends with an edict: kill every Hebrew boy. Into that sentence comes a boy - not hidden because he is weak, but because his mother saw he was beautiful. She risked death to keep him alive. Already, before he is named or known, a woman&apos;s faith is his first shield.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('And when she could not longer hide him, she took for him an '),
                hy('ark of bulrushes', 'hebrew-teva'),
                t(', and daubed it with slime and with pitch, and put the child therein; and she laid it in the flags by the river&apos;s brink.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-teva',
          title: 'Teva&apos; - "ark, basket"',
          script: 'תֵּבָה',
          translit: '<strong>teva&apos;</strong> · a small ark, a vessel for salvation through water',
          description:
            'The same Hebrew word used for Noah&apos;s ark. Moses is saved through flood-waters in a tiny ark, just as Noah&apos;s family was. The womb, the river, the wilderness - God&apos;s rescues often come through water.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('And his sister stood afar off, to wit what would be done to him.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the daughter of Pharaoh came down to wash herself at the river; and her maidens walked along by the river&apos;s side; and when she saw the '),
                hy('ark among the flags', 'c-found'),
                t(', she sent her maid to fetch it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-found',
          html:
            'The one woman in Egypt with the power to protect a Hebrew boy is the daughter of the one man who wants them dead. She walks to the river on a particular morning, sees a basket, and sends her maid to fetch it. Nothing here is accident.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [
                t('And when she had opened it, she saw the child: and, behold, the babe wept. And she had compassion on him, and said, This is one of the Hebrews&apos; children.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then said his sister to Pharaoh&apos;s daughter, Shall I go and call to thee a nurse of the Hebrew women, that she may nurse the child for thee?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Pharaoh&apos;s daughter said to her, Go. And the maid went and called the child&apos;s mother.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mercy',
          html:
            'The sister&apos;s quick thinking is almost hidden in the narrative, but look: she proposes exactly what would save the boy. His own mother gets to nurse him, raising him among his people, and Pharaoh&apos;s daughter pays her for it. A Hebrew woman ends up inside the royal house, whispering Israel&apos;s God to the man who will one day lead her people out.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 9,
              spans: [
                t('And Pharaoh&apos;s daughter said unto her, Take this child away, and nurse it for me: and I will give thee thy wages. And the woman took the child, and nursed it.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the child grew, and she brought him unto Pharaoh&apos;s daughter, and he became her '),
                hp('son', 'christ-hidden-heir'),
                t(': and she called his name '),
                hg('Moshe', 'c-name-moshe'),
                t('; for she said, Because I drew him out of the water.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-name-moshe',
          html:
            'The name <em>Moshe</em> (מֹשֶׁה) comes from the Hebrew root for "to draw out." His Egyptian name, given by Pharaoh&apos;s daughter, carries his whole story: he was drawn out of the water, and one day he will draw his people out of slavery. The woman who names him knows none of this. She only knows she saved a beautiful child. The name God&apos;s work into her mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-hidden-heir',
          title: 'Christ Connection - Hidden Heir in an Enemy House',
          html:
            'Moses grows up inside Pharaoh&apos;s court - the house of the oppressor - while learning in secret that he belongs to Israel. Jesus was born under a sentence of death from a king (Herod), and His mother hid Him, then fled to Egypt to protect Him. Later, Jesus stood before another Pharaoh-like figure (Caiaphas), a man with power to destroy, and chose to lay down that power rather than seize it. Both men are hidden heirs, raised in enemy houses, learning that the world&apos;s power is not their inheritance.',
        },
        {
          kind: 'carry',
          html:
            'If your own belonging feels tangled right now - caught between two places, two loyalties, two versions of yourself - this chapter holds a story for you. Moses was Pharaoh&apos;s son and Israel&apos;s son, and for years he could be fully at home in neither. The chapter doesn&apos;t rush to resolve it. He will have to leave everything and spend 40 years in the wilderness before he knows who he is. Sometimes becoming who you are meant to be requires first becoming lost.',
        },
        {
          kind: 'reflection',
          id: 'sec1-reflect',
          prompt: 'Where do you sense you belong? Where does that belonging cost you? What would it look like to honor that cost?',
        },
      ],
    },

    /* ── Exodus 2:11-15 - A Man Between Worlds ──────────────────────────── */
    {
      ref: 'Exodus 2:11-15',
      title: 'A Man Between Worlds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('And it came to pass in those days, when Moses was grown, that he went out unto his brethren, and looked on their '),
                hg('burdens', 'c-burdens'),
                t(': and he spied an Egyptian smiting a Hebrew, one of his brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-burdens',
          html:
            'After growing up in Pharaoh&apos;s house, Moses finally sees his people. And what he sees - their burdens, their suffering - breaks something open in him. He is no longer just observing; he is moved by his people&apos;s pain. This is the first moment where his divided identity matters.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('And he looked this way and that way, and when he saw that there was no man, he '),
                hg('smote the Egyptian, and hid him in the sand', 'c-kill-hide'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kill-hide',
          html:
            'Moses kills an Egyptian. The act is fierce, hidden, and unmeasured. He looks left and right, then strikes. Then hides the body in sand. This is not the work of a deliverer; this is the work of a man in rage, acting alone, using the only kind of power he knows: the power to dominate. It is a preview of every failed messiah who tried to overthrow Rome by force, every revolutionary who thought the sword was the way. God&apos;s deliverers, when they finally deliver, do it God&apos;s way - never this way.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('And when he went out the second day, behold, two men of the Hebrews strove together: and he said to him that did the wrong, Wherefore smitest thou thy fellow?'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he said, Who made thee a prince and a judge over us? intendest thou to kill me, as thou killedst the Egyptian? And '),
                hy('Moses feared', 'c-moses-fear'),
                t(', and said, Surely this thing is known.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-fear',
          html:
            'Moses is recognized, and he is terrified. His secret is out. He tried to step into a role - judge, defender, prince - and was rejected by the very people he thought he was protecting. The Hebrews don&apos;t see him as their deliverer; they see a man caught between two worlds, safe and unsafe at once.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('Now when Pharaoh heard this thing, he sought to slay Moses. But Moses fled from the face of Pharaoh, and dwelt in the land of Midian: and he sat down by a well.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-midian-flight',
          html:
            'Moses flees. He abandons everything - his rank, his safety, his identity as Pharaoh&apos;s son. He leaves behind the only home he has ever known. The man who will one day lead Israel to freedom is now a fugitive, a nobody, sitting by a well in a foreign land. He does not know that 40 years will pass in this emptiness before he ever sees his calling. God sometimes hides his greatest servants in plain obscurity for longer than they can imagine.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a season of having to leave everything - a job that defined you, a community you belonged to, a version of yourself that no longer fits - the wilderness ahead is not wasted time. Moses spent 40 years there. God was not distant during those years; He was making a shepherd out of a prince. Whatever wilderness you are entering now is where God learns you the things you could never have learned in the halls of power. Don&apos;t despise the hidden years.',
        },
        {
          kind: 'reflection',
          id: 'sec2-reflect',
          prompt: 'What version of yourself have you had to leave behind? What are you learning in that leaving?',
        },
      ],
    },

    /* ── Exodus 2:16-22 - A New Name, A New Family ──────────────────────── */
    {
      ref: 'Exodus 2:16-22',
      title: 'A New Name, A New Family',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 16,
              spans: [
                t('Now the priest of Midian had seven daughters: and they came and drew water, and filled the troughs to water their father&apos;s flock.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the shepherds came and drove them away: but Moses stood up and helped them, and watered their flock.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-waters-flock',
          html:
            'In Egypt, Moses killed. In Midian, his first act is to help. He sees women being pushed away from the well, and he steps in - not with rage, but with quiet service. This is not a small thing. In the wilderness, Moses is learning what power looks like when it is not rooted in dominance.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('And when they came to Reuel their father, he said, How is it that ye are come so soon to day?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they said, An Egyptian delivered us out of the hand of the shepherds, and also drew water for us, and watered the flock.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he said unto his daughters, And where is he? why is it that ye have left the man? call him, that he may eat bread.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reuel-welcome',
          html:
            'Reuel sees something in Moses and welcomes him. A man with nothing - no home, no rank, no future that he can see - is brought in from the wilderness and given bread. It is a small hospitality. It becomes his second chance at belonging.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 21,
              spans: [
                t('And Moses was content to dwell with the man: and he gave Moses '),
                hg('Zipporah his daughter', 'c-zipporah'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And she bare him a son: and he called his name '),
                hy('Gershom', 'hebrew-gershom'),
                t(': for he said, I have been a stranger in a strange land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-zipporah',
          html:
            'Moses marries. He makes a family. His life in Midian is no longer borrowed - it is rooted. Zipporah will stand with him through what is coming; she will witness the plagues and walk with him toward the Red Sea. His salvation begins in a marriage to a woman who is not his blood, but becomes his bone.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gershom',
          title: 'Gershom - "stranger there"',
          script: 'גֵּרְשֹׁם',
          translit: '<strong>ger-shom</strong> · <strong>ger</strong> (stranger) + <strong>sham</strong> (there)',
          description:
            'Moses names his son after his own exile. <em>I have been a stranger in a strange land.</em> Even in the moment of finding a home, he carries the weight of displacement. A deliverer who has not himself been free cannot lead others to freedom.',
        },
        {
          kind: 'christ',
          id: 'christ-shepherd-exile',
          title: 'Christ Connection - Shepherd in Exile',
          html:
            'Moses becomes a shepherd in Midian - unknown, unmeasured by the world&apos;s standards. He tends sheep for decades before he ever tends a nation. Jesus stepped away from His throne and took the form of a servant, becoming shepherd to people who did not recognize Him. Both are called to shepherd those they have suffered alongside. The deliverer who has known exile - displacement, rejection, the loss of status - is the one who can truly shepherd the broken.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a season that feels like settling - a humbler job than you hoped, a smaller life than you planned, a place you didn&apos;t choose - this chapter suggests that God is not distant from your resignation. He may be building something in the smallness. A shepherd learns patience. An exile learns compassion. A man who has lost everything learns to value things that cannot be taken. Whatever is being made in this wilderness, it is not wasted time.',
        },
        {
          kind: 'reflection',
          id: 'sec3-reflect',
          prompt: 'What small, humble work is in front of you right now? What could God be teaching you through it?',
        },
      ],
    },

    /* ── Exodus 2:23-25 - God Hears the Groaning ───────────────────────────── */
    {
      ref: 'Exodus 2:23-25',
      title: 'God Hears the Groaning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 23,
              spans: [
                t('And it came to pass in process of time, that the king of Egypt died: and the children of Israel sighed by reason of the bondage, and they cried, and their cry came up unto God by reason of the bondage.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cry-bondage',
          html:
            'Years pass. Moses sits in Midian. Israel groans in Egypt. The king dies, but slavery continues. And in that continuation, in the <em>refusal</em> of anything to change, Israel finally opens their mouths and cries. Sometimes a people have to reach absolute despair before they can cry out.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 24,
              spans: [
                t('And '),
                hg('God heard their groaning', 'c-hears'),
                t(', and '),
                hp('God remembered his covenant', 'christ-remembers'),
                t(' with Abraham, with Isaac, and with Jacob.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hears',
          html:
            'The moment Israel cries out is the moment God&apos;s work becomes visible. This is not God&apos;s first moment of knowing Israel&apos;s pain - He has known it all along, through Moses&apos; hiding, through his growing up, through his 40 years in Midian. But God listens for the cry. The cry is the people&apos;s turning toward Him. Only then does deliverance begin.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 25,
              spans: [
                t('Wherefore God looked upon the children of Israel, and '),
                hy('God had respect unto them', 'c-respect'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-respect',
          html:
            'The chapter ends not with action, but with God <em>looking</em> - seeing, having respect for, turning toward. The deliverer is ready (Moses in Midian). The people are ready (Israel crying out). The covenant God swore to Abraham, centuries before, is about to be fulfilled. But Exodus 2 doesn&apos;t rush to the miracle. It ends in the pause before everything changes. God has looked. The next chapter will show what He does.',
        },
        {
          kind: 'christ',
          id: 'christ-remembers',
          title: 'Christ Connection - God&apos;s Covenant Memory',
          html:
            'God remembers His covenant with Abraham. The whole of Israel&apos;s redemption hangs on that memory - a promise made centuries before, to a man long dead, kept alive by God alone. Jesus is the fulfillment of that covenant, the seed of Abraham through whom "all nations shall be blessed" (Gen. 12:3). The cry of the enslaved is never forgotten by God. The longer the waiting, the deeper the deliverance when it comes.',
        },
        {
          kind: 'carry',
          html:
            'If you are groaning right now - in exhaustion, in injustice, in despair that nothing will ever change - this chapter is written for you. God hears. He has always heard. The groaning itself is a kind of prayer, and God listens not for your eloquence, but for the honesty of your need. The fact that you are still groaning means the Spirit is still breathing, still pulling, still refusing to let you settle into despair. A cry that reaches God is a cry on its way to being answered.',
        },
        {
          kind: 'reflection',
          id: 'sec4-reflect',
          prompt: 'Where are you groaning, in small ways or large? What would it mean to cry that out loud?',
        },
      ],
    },
  ],
};
