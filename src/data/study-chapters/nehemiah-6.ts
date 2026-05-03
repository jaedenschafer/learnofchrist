import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 6 — Plots Against Nehemiah; The Wall Finished
 *
 * As the wall nears completion, opposition reaches its peak. Five times
 * Sanballat and Tobiah attempt to lure Nehemiah away from his work with
 * false accusations and intimidation. Five times he refuses: "I am doing a
 * great work, so that I cannot come down." Then comes a hired false prophet,
 * Shemaiah, sent to frighten Nehemiah into the temple to hide — a deception
 * Nehemiah discerns and rejects. With the wall finished in only 52 days, even
 * the enemies acknowledge: "This work was wrought of our God." The chapter
 * shows us the power of unwavering focus and the gift of discernment in the
 * face of fear.
 */
export const NEHEMIAH_6: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 6,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 16 },
  intros: [
    'The wall of Jerusalem is nearly complete. Nehemiah and the people have worked tirelessly, rebuilding what enemies had destroyed, refusing to be discouraged by ridicule, poverty, and exhaustion. But now, as the finishing approaches, opposition mounts. The enemies of Judah — Sanballat, Tobiah, Geshem the Arabian, and their allies — perceive that the wall cannot be stopped by mockery or force. So they change tactics. They will try deception, intimidation, false accusation, and hired prophecy. They will send messengers five times with the same lie: "Come, let us meet together," they say — but they think to do Nehemiah mischief.',
    'What follows is a masterclass in spiritual discernment and the refusal to be distracted. Nehemiah will not abandon his work. He will not fear the false accusations against him. He will recognize the hired prophet and refuse to run. And when the wall is finished on the 25th day of Elul — in just 52 days — even the heathen around Judah will recognize that "this work was wrought of our God." Here we see how the faithful are called to press forward in the face of opposition, and how Christ, the true Builder and Finisher of faith, exemplifies perfect focus on the Father&apos;s work.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 6',
    quote:
      '"I am doing a great work, so that I cannot come down." Nehemiah refuses to be distracted by his enemies&apos; false accusations and hired intimidation. His wall is finished in 52 days. This is the power of unwavering focus on what God has called you to do.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 6 · Study Guide',
  },

  sections: [
    /* ─── Nehemiah 6:1–4 — "I Am Doing a Great Work" ──────────────────── */
    {
      ref: 'Nehemiah 6:1–4',
      title: '"I Am Doing a Great Work; I Cannot Come Down"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('Now it came to pass, when Sanballat, and Tobiah, and Geshem the Arabian, and the rest of our enemies, heard that I had builded the wall, and that there was no breach left therein; (though at that time I had not set up the doors upon the gates;)'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That Sanballat and Geshem sent unto me, saying, '),
                hg('Come, let us meet together', 'neh6-come-meet'),
                t(' in some one of the villages in the plain of Ono. But they thought to do me mischief.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And I sent messengers unto them, saying, '),
                hy('I AM DOING A GREAT WORK, SO THAT I CANNOT COME DOWN', 'neh6-great-work'),
                t(': why should the work cease, whilst I leave it, and come down to you?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('So they sent unto me four times after this sort; and I answered them after the same manner.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh6-come-meet',
          html:
            'The invitation is polite on its face: "Come, let us meet together." But the text is clear: they "thought to do me mischief." They want to draw Nehemiah away from Jerusalem, away from the protection of the city and the wall, where they can harm him. It is a classic distraction — appear friendly, offer a diplomatic solution, and strike when the target is isolated.',
        },
        {
          kind: 'commentary',
          id: 'neh6-great-work',
          html:
            'Nehemiah&apos;s response is a masterpiece of focus. He does not argue about their accusation. He does not enter into negotiation. He simply states: "I am doing a great work." That work — the wall — is the only thing that matters. Not his safety. Not his reputation with his enemies. Not the appearance of willingness to meet. The work.',
        },
        {
          kind: 'hebrew',
          id: 'neh6-melachah',
          title: 'Melachah — "Work" or "Task"',
          script: 'מְלָאכָה',
          translit: '<strong>Melachah</strong> · work; labor; a task entrusted to one',
          description:
            'The word Nehemiah uses is "melachah" — not mere labor or toil, but a task entrusted to you by God. It carries weight. It is sacred work. When Nehemiah says "I am doing a great work," he means: this is not my own ambition. This is what God has given me to do. To abandon it would be to betray that trust.',
        },
        {
          kind: 'hebrew',
          id: 'neh6-yarad',
          title: 'Yarad — "Come Down"',
          script: 'יָרַד',
          translit: '<strong>Yarad</strong> · to come down; to descend; to sink',
          description:
            'The verb is "yarad," which means to descend or come down. Five times Nehemiah refuses to "come down." There is an irony in the verb: to come down from the wall is to abandon the high ground, to surrender the position of strength and safety. Nehemiah will not sink.',
        },
        {
          kind: 'carry',
          html:
            'Are you being called to an important work — in your family, your vocation, your faith, your service? The enemies of that work will not come as enemies. They will come as voices of reason, offers of dialogue, invitations to step away "just for a moment." They will seem reasonable. And in that moment of seeming reason, you will lose what you have built. Nehemiah teaches us: don&apos;t leave your post. The work is worth your focus. The work is worth saying no.',
        },
        {
          kind: 'reflection',
          id: 'great-work-reflection',
          prompt: 'What is the "great work" God has called you to do in this season of your life? What voices tempt you to "come down" from it, and how can you strengthen your refusal?',
        },
      ],
    },

    /* ─── Nehemiah 6:5–9 — The False Letter and Intimidation ───────────── */
    {
      ref: 'Nehemiah 6:5–9',
      title: 'The False Letter and the Threat of Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 5,
              spans: [
                t('Then sent Sanballat his servant unto me in like manner the fifth time with an open letter in his hand;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Wherein was written, '),
                hg('It is reported among the heathen, and Gashmu saith it, that thou and the Jews think to rebel', 'neh6-rebel-report'),
                t(': for which cause thou buildest the wall, that thou mayest be their king, according to these words. Thou hast also appointed prophets to preach of thee at Jerusalem, saying, There is a king in Judah: now shall it be reported to the king according to these words. Come now therefore, let us take counsel together.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then sent I unto him, saying, There are no such things done as thou sayest, but thou '),
                hy('feignest them out of thine own heart', 'neh6-feign'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For they all made us afraid: for they said, Their hands shall be weakened from the work, that it be not done. Now therefore, O God, '),
                hp('STRENGTHEN MY HANDS', 'neh6-strengthen'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Afterward I came unto the house of Shemaiah son of Delaiah son of Mehetabeel, who was shut up; and he said, Let us meet together in the house of God, within the temple, let us shut the doors of the temple: for they will come to slay thee; yea, in the night they will come to slay thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh6-rebel-report',
          html:
            'This is slander. The letter accuses Nehemiah of sedition — of trying to make himself king, of plotting rebellion against Persia. These are capital charges. The goal is clear: intimidate Nehemiah with the threat of execution. Create a paper trail so that if anything happens to him, it can be blamed on Persian authorities rather than on Sanballat&apos;s malice. It is a vicious lie wrapped in plausible language.',
        },
        {
          kind: 'commentary',
          id: 'neh6-feign',
          html:
            'Nehemiah&apos;s response to the lie is swift and clear: "There are no such things done as thou sayest, but thou feignest them out of thine own heart." He does not dignify the accusation with a prolonged defense. He simply calls it what it is: a fabrication. You made this up. And then — the text tells us why they did it: "For they all made us afraid; they said, Their hands shall be weakened from the work, that it be not done." Fear is the weapon. If they can make Nehemiah and the people afraid, the work will stop.',
        },
        {
          kind: 'commentary',
          id: 'neh6-strengthen',
          html:
            'Here Nehemiah turns from the threat to prayer: "Strengthen my hands, O God." He does not ask God to punish his enemies. He does not ask for protection. He asks to be strengthened for the work. His focus returns immediately to the wall. The enemies want to weaken his hands; he asks God to strengthen them. The work, and only the work, is his concern.',
        },
        {
          kind: 'carry',
          html:
            'Lies about us can feel overwhelming, especially when they come in writing, when they are couched in the language of official concern, when they carry the threat of real consequences. We are tempted to spend all our energy defending ourselves, explaining our true intentions, proving the accusations false. But Nehemiah shows us a different way: name the lie, don&apos;t dwell on it, and return your strength to the work. Fear wants to paralyze you. The antidote is not to win an argument; it is to ask God to strengthen your hands for what you were called to do.',
        },
        {
          kind: 'reflection',
          id: 'false-letter-reflection',
          prompt: 'When have you faced accusations or rumors designed to make you afraid or to distract you from your purpose? How did you respond? What would it look like to "strengthen your hands" for your calling instead of defending your reputation?',
        },
      ],
    },

    /* ─── Nehemiah 6:10–14 — Shemaiah the False Prophet; The Discernment ─── */
    {
      ref: 'Nehemiah 6:10–14',
      title: 'Shemaiah the False Prophet — The Refusal to Flee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('Afterward I came unto the house of Shemaiah son of Delaiah son of Mehetabeel, who was '),
                hg('shut up', 'neh6-shut-up'),
                t('; and he said, Let us meet together in the house of God, within the temple, let us shut the doors of the temple: for they will come to slay thee; yea, in the night will they come to slay thee.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And I said, '),
                hp('SHOULD SUCH A MAN AS I FLEE', 'neh6-should-I-flee'),
                t('? and who is there, that, being as I am, would go into the temple to save his life? I will not go in.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And, lo, I perceived that God had not sent him; but that he pronounced this prophecy against me: for Tobiah and Sanballat had hired him.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Therefore was he hired, that I should be afraid, do so, and sin, that they might have matter for an evil report, that they might reproach me.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('My God, '),
                t('THINK THOU UPON TOBIAH AND SANBALLAT ACCORDING TO THESE THEIR WORKS'),
                t(', and on the prophetess Noadiah, and the rest of the prophets, that would have put me in fear.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh6-shut-up',
          html:
            'Shemaiah is "shut up" — either confined by fear or confined physically. The text is ambiguous. What matters is that he is a man afraid, and fear can be contagious. He comes to Nehemiah with an urgent message: they will kill you tonight. Hide in the temple. Shut the doors. The message sounds like it comes from someone who cares, someone who knows danger.',
        },
        {
          kind: 'commentary',
          id: 'neh6-should-I-flee',
          html:
            'Nehemiah&apos;s response is immediate and certain: "Should such a man as I flee?" The question is not really a question. It is a statement. A man who has been called by God to rebuild the wall does not run. A man who has spent his breath declaring "I am doing a great work" does not contradict himself by hiding. Moreover, for Nehemiah — a lay governor — to enter the temple and shut the doors would itself be a violation of the law, a sin. The trap is clever: the enemies have hired someone to frighten Nehemiah into committing a public desecration, which they could then use to discredit him completely.',
        },
        {
          kind: 'commentary',
          id: 'neh6-perceived',
          html:
            'And here is the gift of discernment: "I perceived that God had not sent him." Nehemiah recognizes the hired prophecy. He sees through the deception not by analyzing the words, but by recognizing that the spirit behind it is not of God. A man sent by God would not call the governor to hide from his work. A man sent by God would not invite a leader to commit a desecration. The true prophet strengthens; the false prophet creates panic and violation. Nehemiah knows the difference.',
        },
        {
          kind: 'carry',
          html:
            'We live in a time of competing voices, all claiming authority, all promising safety if we will only listen to them and do what they say. Some are hired — by fear merchants, by those who profit from our anxiety, by enemies who want us to abandon our purpose. The gift Nehemiah models is discernment: not accepting every voice that sounds urgent or afraid. Not running from every threat. Not violating what you know to be right out of panic. The question is always: does this voice strengthen me for my calling, or does it weaken it? Does it call me toward obedience, or does it call me toward sin?',
        },
        {
          kind: 'reflection',
          id: 'shemaiah-reflection',
          prompt: 'When have you heard a voice of alarm — from the news, from others, from your own anxiety — that called you to abandon something good or to do something you knew was wrong? How can you learn to discern between genuine warning and hired fear?',
        },
      ],
    },

    /* ─── Nehemiah 6:15–19 — The Wall Finished; The Heathen Acknowledge ─── */
    {
      ref: 'Nehemiah 6:15–19',
      title: 'The Wall Finished in 52 Days; "This Work Was Wrought of Our God"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 15,
              spans: [
                t('So the '),
                hg('WALL WAS FINISHED IN THE 25TH DAY OF THE MONTH ELUL, IN 52 DAYS', 'neh6-wall-finished'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And it came to pass, that when all our enemies heard thereof, and all the heathen that were about us saw these things, they were much cast down in their own eyes: for they perceived that '),
                hp('this work was wrought of our God', 'neh6-wrought-of-god'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Moreover in those days the nobles of Judah sent many letters unto Tobiah, and the letters of Tobiah came unto them.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For there were many in Judah sworn unto him, because he was the son in law of Shechaniah son of Arah; and his son Johanan had taken the daughter of Meshullam son of Berechiah to wife.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Also they reported his good deeds before me, and uttered my words to him. And Tobiah sent letters to put me in fear.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh6-wall-finished',
          html:
            'Fifty-two days. The wall of Jerusalem — destroyed by Nebuchadnezzar&apos;s armies, mourned by Nehemiah, doubted by the enemies — is complete. The speed is extraordinary. It should have taken months, perhaps years. But Nehemiah&apos;s people, working under the conviction that they were doing God&apos;s work, accomplished it in less than two months. The word is emphatic: "the wall was finished." Done. Complete.',
        },
        {
          kind: 'commentary',
          id: 'neh6-wrought-of-god',
          html:
            'And the enemies — the very ones who mocked, accused, hired false prophets, and threatened death — are forced to acknowledge the truth: "This work was wrought of our God." The heathen themselves see it. They are "cast down in their own eyes." Their opposition has failed utterly. Not because Nehemiah fought them, but because he refused to be distracted. His focus was absolute. And the work was done.',
        },
        {
          kind: 'commentary',
          id: 'neh6-correspondence',
          html:
            'But even as the wall stands complete, the text reminds us that the opposition persists. Tobiah is connected by marriage to the nobles of Judah; his letters come and go. He still sends word "to put me in fear." The battle is not over. Opposition does not end when a work is finished; it may persist in other forms. But the wall stands. The work is done. And that is what matters.',
        },
        {
          kind: 'christ',
          id: 'neh6-christ-connection',
          title: 'Christ Connection — The Finisher Who Cannot Be Stopped',
          html:
            'In John 4:34, Jesus says, "My meat is to do the will of him that sent me, and to finish his work." And in Philippians 1:6: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ." The pattern Nehemiah embodies — unwavering focus on the Father&apos;s work, refusal to be distracted by opposition, discernment in the face of deception, the finishing of the work — these are the marks of Christ Himself. He could not be turned aside. He went to the cross not because He was overcome, but because His work demanded it. His "wall" — His redemptive work, His kingdom — cannot be stopped by human opposition. It is "wrought of our God." And it is finished.',
        },
        {
          kind: 'carry',
          html:
            'What work has God called you to? In your family, in your vocation, in your church, in your healing, in your growth — what is the great work? Nehemiah teaches us: don&apos;t be distracted. Don&apos;t listen to the voice that says, "Come down." Don&apos;t run from the hired fear. Don&apos;t commit sins out of panic. Keep your hands to the work. And when the work is done — when the 52 days have passed, when the wall stands, when even your enemies can see that "this work was wrought of our God" — you will know that it was worth it.',
        },
        {
          kind: 'reflection',
          id: 'wall-finished-reflection',
          prompt: 'Imagine yourself standing before the finished wall of Jerusalem, knowing that you refused to be distracted, that you kept your hands to the work even in the face of mockery and lies. What would that feel like? What does it mean to see the work of your calling actually completed?',
        },
      ],
    },
  ],
};
