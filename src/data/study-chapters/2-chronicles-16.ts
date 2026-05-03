import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Chronicles 16 — Asa's Later Compromise with Syria; Hanani's Rebuke
 *
 * In the twilight of his reign, King Asa abandons the faith that sustained
 * him for decades. When Baasha of Israel threatens Judah, Asa reaches not to
 * the Lord but to Ben-hadad of Syria—paying for a political alliance with
 * the treasures of God's house. The prophet Hanani confronts him with words
 * of fire: "Because thou hast relied on the king of Syria, and not relied on
 * the Lord thy God... FOR THE EYES OF THE LORD RUN TO AND FRO THROUGHOUT THE
 * WHOLE EARTH, TO SHEW HIMSELF STRONG IN THE BEHALF OF THEM WHOSE HEART IS
 * PERFECT TOWARD HIM."
 *
 * Asa's response? Rage. He imprisons the prophet. His later years bring
 * disease of the feet, yet "in his disease he sought not to the Lord, but to
 * the physicians." A king who once trusted utterly has learned to trust
 * himself—and reaped the harvest of a divided heart.
 */
export const CHRONICLES_2_16: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 16,

  estimatedMinutes: { 5: 5, 10: 10, 15: 14 },
  intros: [
    'For most of his reign, Asa has been a king of extraordinary faith. He tore down idols. He led Judah in covenant renewal. He cried out to the Lord against an overwhelming Ethiopian army, and the Lord delivered him with a mighty hand. But something shifts in his later years—a subtle, fatal shift from reliance on God to reliance on himself.',
    'When Baasha of Israel threatens Judah&apos;s northern border, Asa faces a choice. Does he cry out to the Lord as he once did? Instead, he descends into Judah&apos;s treasury, withdraws the silver and gold that belonged to God&apos;s house, and purchases an alliance with the pagan king of Syria. The move works—Baasha retreats. But it comes at a cost Asa cannot yet see.',
    'The prophet Hanani arrives with a message that will shatter the king&apos;s confidence and, worse, his patience with God&apos;s spokesmen. In this chapter, we encounter one of Scripture&apos;s most penetrating truths: that the eyes of the Lord range to and fro, always watching for the heart that is wholly His. We also witness what happens when a man of faith receives correction and cannot bear it.',
  ],

  bottomShare: {
    quote:
      'For the eyes of the Lord run to and fro throughout the whole earth, to show himself strong in the behalf of them whose heart is perfect toward him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 16 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 16:1–6 — Asa Hires the Syrian Against Baasha ────────── */
    {
      ref: '2 Chronicles 16:1–6',
      title: 'Asa Hires the Syrian Against Baasha',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              1,
              'In the thirty and sixth year of the reign of Asa Baasha king of Israel came up against Judah, and built Ramah, to the intent that he might let none go out or come in to Asa king of Judah.'
            ),
            {
              number: 2,
              spans: [
                t('Then Asa brought out silver and gold out of the treasures of the house of the Lord and of the king&apos;s house, and sent to '),
                hg('Ben-hadad king of Syria', '2ch16-benhadad'),
                t(' that dwelt at Damascus, saying,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('There is a league between me and thee, as there was between my father and thy father: behold, I have sent thee silver and gold; go, break thy league with Baasha king of Israel, that he may depart from me.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Ben-hadad hearkened unto king Asa, and sent the captains of his armies against the cities of Israel; and they smote Ijon, and Dan, and Abel-maim, and all the store cities of Naphtali.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it came to pass, when Baasha heard it, that he left off building of Ramah, and let his work cease.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Then Asa the king took all Judah; and they carried away the stones of Ramah, and the timber thereof, wherewith Baasha was building; and he built therewith Geba and Mizpah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2ch16-context',
          html:
            'Asa is in the thirty-sixth year of his reign—a reign marked by loyalty to God and radical faithfulness. And now, in his latter days, a king of Israel named Baasha threatens the northern border by fortifying Ramah, a strategic stronghold that could choke off Judah&apos;s movement. It is a genuine military threat, and Asa must decide how to meet it.',
        },
        {
          kind: 'commentary',
          id: '2ch16-benhadad',
          html:
            'But Asa does not turn to the Lord as he once did. Instead, he reaches into the treasury—both the king&apos;s house and the house of the Lord—and withdraws silver and gold to purchase an alliance with Ben-hadad of Syria. The move is pragmatic. It works. Ben-hadad&apos;s armies strike at Israel&apos;s northern cities, Baasha abandons his building project, and Asa is safe. But something has shifted. The king who once cried out to the Lord in desperate faith now relies on human cunning and earthly treasure.',
        },
        {
          kind: 'hebrew',
          id: '2ch16-shaan',
          title: 'שָׁעַן — "Lean" or "Rely"',
          script: 'שָׁעַן',
          translit: '<strong>Shaan</strong> · to lean upon, depend on, trust in; to support oneself by',
          description:
            'The word "shaan" means to lean on something for support—to depend utterly on it. When Asa "leans" on the king of Syria, he is using the same Hebrew word the prophet will use to describe what he should have done instead: lean on the Lord. The parallel is devastating. There are only so many things a heart can lean upon; Asa is leaning on the wrong one.',
        },
        {
          kind: 'carry',
          html:
            'In moments of pressure, we reach for what we trust. For Asa, faith has been an answer to emergencies—when the odds were impossible, when only God could help. But now that he faces a manageable threat—one that can be solved with gold and diplomacy—he forgets that his victories came not because he had no other options, but because he chose the Lord even when he did. What situations in your life do you handle yourself, without turning to the Lord?',
        },
        {
          kind: 'reflection',
          id: '2ch16-pressure',
          prompt:
            'When you face a problem you can solve with your own resources—money, influence, intellect—do you stop to ask God what He would have you do? What would change if you brought even your "manageable" problems to Him?',
        },
      ],
    },

    /* ─── 2 Chronicles 16:7–9 — Hanani's Rebuke: The Eyes of the Lord ────────── */
    {
      ref: '2 Chronicles 16:7–9',
      title: "Hanani&apos;s Rebuke: The Eyes of the Lord",
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 7,
              spans: [
                t('And at that time Hanani the seer came to Asa king of Judah, and said unto him, Because thou hast '),
                hy('relied on the king of Syria', '2ch16-relied'),
                t(', and not relied on the Lord thy God, therefore is the host of the king of Syria escaped out of thine hand.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Were not the Ethiopians and the Lubims a huge host, with very many chariots and horsemen? yet, because thou didst rely on the Lord, he delivered them into thine hand.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('FOR THE '),
                hp('EYES OF THE LORD RUN TO AND FRO THROUGHOUT THE WHOLE EARTH, TO SHEW HIMSELF STRONG IN THE BEHALF OF THEM WHOSE HEART IS PERFECT TOWARD HIM', '2ch16-eyes'),
                t('. Herein thou hast done foolishly: therefore from henceforth thou shalt have wars.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2ch16-relied',
          html:
            'Hanani the seer speaks with the clarity of a man speaking God&apos;s word. He does not soften his message or court the king&apos;s favor. "Because thou hast relied on the king of Syria, and not relied on the Lord thy God—therefore is the host of the king of Syria escaped out of thine hand." The contrast is absolute. You trusted the wrong god. And therefore, you did not see the victory you might have had.',
        },
        {
          kind: 'commentary',
          id: '2ch16-ethiopians',
          html:
            'Hanani reminds Asa of his earlier triumph: When the Ethiopians and Libyans came with an overwhelming host—"very many chariots and horsemen"—Asa relied on the Lord, and the Lord delivered them into his hand. That victory was real. That deliverance was total. Why, then, does Asa now doubt? Why does he now reach for Syria instead of the God who has already proven Himself?',
        },
        {
          kind: 'hebrew',
          id: '2ch16-ayin',
          title: 'עַ֫יִן — "Eye" or "Eyes"',
          script: 'עַיִן',
          translit: '<strong>Ayin</strong> · eye; sight; presence; point of view',
          description:
            'The Hebrew word "ayin," or eye, carries layers of meaning. The physical eye, yes—but also the mind&apos;s eye, awareness, insight, and presence. When Hanani speaks of "the eyes of the Lord" running to and fro throughout the earth, he is speaking of God&apos;s constant vigilance, His never-ceasing awareness, His watchfulness over all creation. Nothing escapes those eyes. And they look for hearts that are wholly His.',
        },
        {
          kind: 'commentary',
          id: '2ch16-eyes',
          html:
            'This verse is one of the most extraordinary affirmations in Scripture. "For the eyes of the Lord run to and fro throughout the whole earth, to show himself strong in the behalf of them whose heart is perfect toward him." The image is kinetic, active, alive: the eyes of the Lord are perpetually surveying the earth, always searching, always looking. And what are they looking for? Not the strong. Not the rich. Not those who have solved their problems through clever diplomacy. They look for hearts that are whole—hearts that are entirely, undividedly, unreservedly devoted to Him.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s eyes are on the whole earth. Not just on the palace, not just on the powerful, not just on those whose prayers are eloquent. They look for hearts—whole hearts, perfect hearts, hearts that have not turned to division. Asa had such a heart once. In that moment of faith, when the Ethiopians surrounded him, his heart was entire, and the Lord showed himself strong. But now his heart is divided. He trusts God for the impossible, but not for the possible. He trusts God for war, but not for peace. He trusts God when he has no other choice, but not when he has choices.',
        },
        {
          kind: 'reflection',
          id: '2ch16-eyes',
          prompt:
            'What would it look like for your heart to be entirely devoted to the Lord—not just in emergencies, but in ordinary decisions and possibilities? Where are you holding back from wholehearted reliance?',
        },
      ],
    },

    /* ─── 2 Chronicles 16:10 — Asa's Rage and the Imprisoned Prophet ─────────── */
    {
      ref: '2 Chronicles 16:10',
      title: 'Asa Cannot Bear Correction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 10,
              spans: [
                t('Then Asa was wroth with the seer, and '),
                hg('put him in a prison house', '2ch16-prison'),
                t('; for he was in a rage with him because of this thing. And Asa oppressed some of the people the same time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2ch16-prison',
          html:
            'Asa&apos;s response to Hanani&apos;s word is not repentance. It is fury. He is wroth with the seer. And his wrath does not stop at words—he throws Hanani into prison. The man who brought the word of the Lord, the one who spoke truth to a king, is imprisoned for his faithfulness. And as if that were not enough, "Asa oppressed some of the people the same time." His anger spills over onto others. The king who once led the people in covenant renewal now oppresses them.',
        },
        {
          kind: 'commentary',
          id: '2ch16-pattern',
          html:
            'This is the pattern of a man who cannot hear correction. Asa can accept victory. He can accept the Lord&apos;s favor. But he cannot accept the Lord&apos;s word when it contradicts his own judgment. A true man of faith listens to the prophet. He may grieve, he may resist at first—but a heart truly devoted to God bends when God speaks. Asa bends his knee to no one, not even to the God he has served.',
        },
        {
          kind: 'carry',
          html:
            'There is a hardening that happens in us when we refuse correction. We become defenders of our own choices rather than seekers of truth. We silence the voices that would call us back. We surround ourselves with those who affirm our decisions. Asa has the power to silence Hanani, but he does not have the power to silence the Lord. That power is beyond the reach of any earthly king.',
        },
        {
          kind: 'reflection',
          id: '2ch16-correction',
          prompt:
            'Can you recall a time someone spoke a hard truth to you and you reacted with anger or shame? What would it take for you to hear correction as a word of love rather than as an attack?',
        },
      ],
    },

    /* ─── 2 Chronicles 16:11–14 — The Diseased Feet; Seeking Physicians, Not the Lord ────── */
    {
      ref: '2 Chronicles 16:11–14',
      title: 'Disease of the Feet: Seeking Physicians, Not the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(
              11,
              'And, behold, the acts of Asa, first and last, are written in the book of the kings of Judah and Israel.'
            ),
            {
              number: 12,
              spans: [
                t('And Asa in the thirty and ninth year of his reign was diseased in his feet, until his disease was exceeding great: '),
                hg('yet in his disease he sought not to the Lord', '2ch16-disease'),
                t(', '),
                hy('but to the physicians', '2ch16-physicians'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Asa slept with his fathers, and died in the forty and first year of his reign.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they buried him in his own sepulchres, which he had made for himself in the city of David, and laid him in the bed which was filled with sweet odours and divers kinds of spices prepared by the apothecaries&apos; art: and they made a very great burning for him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2ch16-disease',
          html:
            'Three years after Hanani&apos;s rebuke, Asa develops a disease of the feet—a malady that is exceeding great. The text does not tell us what the disease is, only that it is severe. And more importantly, it tells us this: "In his disease he sought not to the Lord, but to the physicians." Asa does not repent. He does not call out to the God who once delivered him. Instead, he leans on medicine, on earthly remedies, on the skills of human practitioners. Again, Asa chooses the visible over the spiritual. Again, he relies on what he can see and touch rather than on the One who sees and knows his heart.',
        },
        {
          kind: 'hebrew',
          id: '2ch16-rofe',
          title: 'רֹ֫פֵא — "Physician"',
          script: 'רֹפֵא',
          translit: '<strong>Rofe</strong> · physician; healer; one who mends',
          description:
            'The Hebrew word "rofe," or physician, is a neutral word—there is nothing inherently wrong with seeking medical help. But in Asa&apos;s case, the problem is not that he sought physicians. The problem is that he sought physicians *instead of* the Lord. He did not seek the God whose eyes run to and fro, the God who showed himself strong on behalf of those with whole hearts. He sought only the remedies that human hands could provide.',
        },
        {
          kind: 'commentary',
          id: '2ch16-death',
          html:
            'Asa dies without returning to the Lord. He is buried with great ceremony—the bed filled with sweet odors, the spices prepared by the apothecaries&apos; art, a very great burning. He receives the honors of a king. But there is no mention of spiritual renewal, no sign of repentance, no return to the Lord. A man whose heart was once whole is buried with a divided heart.',
        },
        {
          kind: 'christ',
          id: '2ch16-physician',
          title: 'Christ Connection — The Great Physician',
          html:
            'In the New Testament, Jesus speaks of Himself as a physician: "They that are whole have no need of the physician: but they that are sick" (Mark 2:17). But Christ is no ordinary healer. He is the Great Physician who does not merely treat symptoms but heals souls—He touches the root of our disease, which is separation from God. When we are diseased in our spiritual feet—unable to walk in the way the Lord leads—He is the One to whom we cry out. Asa sought the physicians of his day and found only temporary relief. But those who seek Christ find healing of the whole person, healing that begins not with medicine but with the return of the divided heart to wholeness in God.',
        },
        {
          kind: 'carry',
          html:
            'Asa&apos;s story teaches us something painful: that the trajectory of a life is not determined by a single choice, but by the pattern of choices. A king who once served the Lord with his whole heart became a man who could not bear correction. A man who once cried out to God in desperate faith learned to solve his problems without Him. And by the time disease came, the habit of independence was so deep that even facing death, he did not turn back. What habits of self-reliance are you cultivating that might one day prevent you from turning to the Lord?',
        },
        {
          kind: 'reflection',
          id: '2ch16-physician',
          prompt:
            'Asa sought physicians instead of the Lord. In your own life, what do you reach for when trouble comes—remedies and fixes that might help, but without turning to God? What would it look like to seek Him first?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
