import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 11 — Saul Delivers Jabesh-gilead
 *
 * The Ammonite Nahash lays siege to Jabesh-gilead with a cruel ultimatum:
 * covenant with servitude and the plucking out of all right eyes. The elders
 * plead for seven days to find a deliverer. News reaches Gibeah, where Saul
 * hears the tidings and is filled with the Spirit of God. His anger kindled,
 * he summons all Israel, threatens the reluctant with loss of their oxen, and
 * routs the Ammonites utterly. In mercy, Saul refuses to execute the dissenters
 * who earlier doubted him. Samuel convenes the kingdom at Gilgal, and Saul is
 * confirmed as king. This is Saul at his best: a deliverer in the Spirit,
 * mighty in battle, merciful in victory. Christ the Deliverer arriving at the
 * eleventh hour; the King who refuses revenge in His hour of triumph.
 */
export const SAMUEL_1_11: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 11,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  intros: [
    'Saul has been anointed king, but the kingdom is not yet established. Some of Israel welcome him; others doubt. Then Nahash the Ammonite lays siege to Jabesh-gilead with a demand so cruel it defines the moment: surrender and forfeit the right eye of every man, a humiliation that incapacitates as warriors and marks them as defeated. The elders of Jabesh send messengers across Israel, and the tidings reach Gibeah. It is into this moment of national peril that Saul steps forward—not claiming power, but filled with the Spirit of God.',
    'What happens next unfolds quickly. Saul summons all Israel, musters the tribes, and in a single dawn assault routs the Ammonites and saves Jabesh. But the chapter&apos;s deepest moment comes after. Saul is offered a chance to execute the men who doubted him. He refuses. "There shall not a man be put to death this day: for today the Lord hath wrought salvation in Israel." The Spirit of God had kindled his anger into courage, not into cruelty. He rightly attributes the victory to God, not himself. And Samuel seizes the moment to confirm the kingdom. Saul, in this chapter, is the deliverer Israel needed—and a foreshadowing of the One who saves not through revenge, but through mercy and the Spirit of God.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|van dyke/i,
    matchTitle: /saul|ammon|jabesh|gilead|deliver|victory/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 11',
    quote:
      "Saul, filled with the Spirit of God, delivered Jabesh-gilead from the Ammonite&apos;s cruel siege. In victory, he showed mercy to those who had doubted him, saying: &quot;There shall not a man be put to death this day: for today the Lord hath wrought salvation in Israel.&quot;",
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 11 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priesthood',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],

  sections: [
    /* ─── 1 Samuel 11:1–3 — Nahash's Cruel Offer ──────────────────────────── */
    {
      ref: '1 Samuel 11:1–3',
      title: 'The Cruel Demand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('Then '),
                hg('Nahash the Ammonite came up, and encamped against Jabesh-gilead', 'sam11-nahash-siege'),
                t(': and all the men of Jabesh said unto Nahash, '),
                t('Make a covenant with us, and we will serve thee'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Nahash said unto them, '),
                hg('On this condition will I make a covenant with you, that I may thrust out all your right eyes, and lay it for a reproach upon all Israel', 'sam11-eye-taking'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the elders of Jabesh said unto him, Give us seven days&apos; respite, that we may send messengers unto all the coasts of Israel: and then, if there be no man to save us, we will come out unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sam11-nahash-siege',
          html:
            'Nahash is the first named enemy in Israel&apos;s monarchy. The name itself means "serpent"—a whisper of the Fall, the ancient enemy who works through temptation and cruelty. Jabesh-gilead lies east of the Jordan, in Gilead. It is an outlying city, far from the central power of Israel.[res:sefaria-hannah-prayer][res:bible-odyssey-eli][res:iaa-shiloh]',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nahash',
          title: 'Nahash — "Serpent"',
          script: 'נָחָשׁ',
          translit: '<strong>Nahash</strong> · a snake; also the Hebrew word for the serpent of Genesis 3',
          description:
            'The name carries weight in the biblical imagination. Like the serpent in the garden, Nahash works through a twisted covenant that enslaves. He offers "peace" at the price of utter humiliation and incapacity.',
        },
        {
          kind: 'commentary',
          id: 'sam11-eye-taking',
          html:
            'The eye-plucking is not mere cruelty—it is calculated humiliation and military incapacity. An army of men without right eyes cannot fight, cannot hunt, cannot see the approach of enemies. Nahash is not simply conquering Jabesh; he is marking them as defeated, as forever unfit to stand as warriors. The "reproach upon all Israel" is broadcast: this is what happens to those who resist Ammon.',
        },
        {
          kind: 'carry',
          html:
            'When evil presents itself with terms that sound reasonable—"just this one thing, and peace will come"—we are meeting Nahash&apos;s ancient strategy. The serpent always offers a bargain that costs more than we can see. Jabesh knew better than to accept humiliation as the price of survival. Their refusal to close that covenant in silence, their choice to send messengers across all Israel, is their first act of defiance.',
        },
        {
          kind: 'reflection',
          id: 'cruel-demand',
          prompt:
            'When have you seen evil dressed up as a reasonable deal? What made you—or should have made you—resist the terms, rather than accept humiliation as the cost of peace?',
        },
      ],
    },

    /* ─── 1 Samuel 11:4–8 — The Spirit Comes Upon Saul ────────────────────── */
    {
      ref: '1 Samuel 11:4–8',
      title: 'The Messengers Reach Gibeah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('And when the messengers came to Gibeah of Saul, they told the tidings in the ears of the people: and all the people '),
                hg('lifted up their voices, and wept', 'sam11-weeping'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And, behold, Saul came after the herd out of the field; and Saul said, '),
                hg('What aileth the people that they weep', 'sam11-saul-asks'),
                t('? And they told him the tidings of Jabesh.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And '),
                hp('the Spirit of God came upon Saul when he heard those tidings', 'christ-spirit-saul'),
                t(', and '),
                hy('his anger was kindled greatly', 'sam11-anger-kindled'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sam11-weeping',
          html:
            'The weeping is not despair alone—it is the cry of a people who have looked to their new king and felt his absence. Saul has been anointed but not yet proven. The Ammonite threat is the test of his worth.',
        },
        {
          kind: 'commentary',
          id: 'sam11-saul-asks',
          html:
            'Saul comes from the field, following the herd. He is not in the palace, not in council. He is a man working his land—still living as a farmer, not yet wholly settled into kingship. The tidings find him outside the seat of power.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit-saul',
          title: 'Christ Connection — The Spirit for Deliverance',
          html:
            'Saul at his best moment is filled with the Spirit of God. This is the same phrase used of Samson (Judg. 14:6, 14:19), of David (1 Sam. 16:13), of the judges who delivered Israel. The Spirit comes not to make a king comfortable, but to make him a deliverer—to kindle his anger against what oppresses God&apos;s people and to give him the strength and clarity to act. The Spirit of God still comes upon those who are called to free others. Christ is the perfect instantiation of that calling—the Spirit upon Him without measure (John 3:34) to deliver the captive and the bound.',
        },
        {
          kind: 'commentary',
          id: 'sam11-anger-kindled',
          html:
            'Anger and the Spirit of God are not opposed here. Some anger is righteous. Saul&apos;s anger, kindled by the Spirit, is directed at evil—at the cruelty of Nahash, at the incapacity imposed on Jabesh. This anger becomes fuel for deliverance. The Spirit does not calm Saul into inaction; it stirs him to act.',
        },

        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 7,
              spans: [
                t('And he took a yoke of oxen, and '),
                hg('hewed them in pieces, and sent them throughout all the coasts of Israel by the hand of messengers, saying, Whosoever cometh not forth after Saul and after Samuel, so shall it be done unto his oxen', 'sam11-summons'),
                t('. And '),
                hp('the fear of the Lord fell on the people', 'christ-fear-lord'),
                t('; and they came out with one consent.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And when he numbered them in Bezek, the children of Israel were three hundred thousand, and the men of Judah thirty thousand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sam11-summons',
          html:
            'The hewed oxen are a summons as extreme as Nahash&apos;s threat. Saul is signaling: this is the moment that tests whether you are truly Israel. Hesitate now, and your oxen—your livelihood, your future—will be destroyed. The messengers carry not just words, but a visceral statement: the crisis is complete; there is no middle path.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yare',
          title: 'Yare — "Fear"',
          script: 'יָרֵא',
          translit: '<strong>yare</strong> · to fear, to revere, to stand in awe of',
          description:
            'The same word is used of Nahash earlier in the chapter: he "feared" Israel&apos;s numbers (verse 15 will use it again). But here, "the fear of the Lord fell on the people." Two kinds of fear meet in this narrative: the fear of a king that enslaves, and the fear of God that liberates.',
        },
        {
          kind: 'christ',
          id: 'christ-fear-lord',
          title: 'Christ Connection — The Fear of the Lord',
          html:
            'The fear of the Lord is not terror—it is awe, reverence, a recognition that something larger than human power is at work. When the fear of the Lord fell on Israel, they moved with one consent. Later, Jesus teaches: "Fear not them which kill the body, but rather fear him which is able to destroy both soul and body in hell: but fear God" (Matt. 10:28). The fear of God frees us from the fear of human power. It unites fragmented people into one purpose.',
        },
        {
          kind: 'carry',
          html:
            'When you hear a true call to justice—a call that stirs something true in you, that kindles your righteous anger at what is wrong—the fear of the Lord is what makes you say yes, even when it costs. The Spirit speaks in that moment, and we are free to say yes with all our strength because we fear God more than the cost to ourselves.',
        },
        {
          kind: 'reflection',
          id: 'spirit-stirred',
          prompt:
            'When has the Spirit of God stirred righteous anger in you? What was it about that moment that made you know it was more than your own emotion?',
        },
      ],
    },

    /* ─── 1 Samuel 11:9–13 — The Battle and Mercy ──────────────────────────── */
    {
      ref: '1 Samuel 11:9–13',
      title: 'The Battle and Victory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 9,
              spans: [
                t('And they said unto the messengers that came, Thus shall ye say unto the men of Jabesh-gilead, Tomorrow, by that time the sun be hot, ye shall have help.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the messengers came and shewed the men of Jabesh; and they were glad.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the men of Jabesh said, Tomorrow we will come out unto you, and ye shall do with us all that seemeth good unto you.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And it came to pass on the morrow, that Saul put the people in three companies; and they came into the midst of the host in the morning watch, and '),
                hg('slew the Ammonites until the heat of the day', 'sam11-ammonites-slain'),
                t(': and they which remained were scattered, so that two of them were not left together.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the people said unto Saul, '),
                hg('Who is he that said, Shall Saul reign over us? bring the men, that we may put them to death', 'sam11-death-threat'),
                t('. And Saul said, '),
                hp('There shall not a man be put to death this day: for today the Lord hath wrought salvation in Israel', 'christ-mercy-triumph'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sam11-ammonites-slain',
          html:
            'The battle unfolds with simple clarity. Saul divides his forces and strikes at the morning watch—the hour between darkness and dawn, when vigilance is lowest. The slaughter is complete: the Ammonites are not merely routed, they are utterly destroyed, scattered so thoroughly that no two remain together. Nahash&apos;s army is no more.',
        },
        {
          kind: 'commentary',
          id: 'sam11-death-threat',
          html:
            'In the moment of triumph, voices arise calling for blood. The people want to execute those who doubted Saul—who earlier had said "Shall Saul reign over us?" (10:27). The temptation to use power to settle old scores is acute. A king in his first hour of victory is offered the chance to silence his enemies forever.',
        },
        {
          kind: 'christ',
          id: 'christ-mercy-triumph',
          title: 'Christ Connection — The King Who Shows Mercy',
          html:
            'Saul&apos;s refusal to execute—"There shall not a man be put to death this day"—is his finest moment. In that refusal, he shows that the Spirit that filled him was not a spirit of vengeance, but of deliverance. Jesus later teaches His disciples: "I came not to judge the world, but to save the world" (John 12:47). And later: "Father, forgive them; for they know not what they do" (Luke 23:34). The King who has won complete victory over His enemies is the One who chooses mercy. Saul, in this moment, foreshadows that truth.',
        },
        {
          kind: 'carry',
          html:
            'Victory is a moment when power is most absolute, and the temptation to use it for our own satisfaction is most real. But a true deliverer—a true king—is known not by how harshly he punishes the vanquished, but by whether he can show mercy when he has the power to destroy. Saul learned this in a day. Can we learn it without having to win a war first?',
        },
        {
          kind: 'reflection',
          id: 'mercy-triumph',
          prompt:
            'When you have won something—an argument, a competition, the upper hand in a difficult situation—what was your first instinct? To mercy or to vindication? What would it look like to choose mercy in your next moment of advantage?',
        },
      ],
    },

    /* ─── 1 Samuel 11:14–15 — The Kingdom Confirmed ─────────────────────────── */
    {
      ref: '1 Samuel 11:14–15',
      title: 'The Kingdom Renewed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 14,
              spans: [
                t('Then said Samuel to the people, '),
                hg('Come, and let us go to Gilgal, and renew the kingdom there', 'sam11-gilgal-renew'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And all the people went to Gilgal; and there they made Saul king before the Lord in Gilgal; and there they sacrificed peace offerings before the Lord; and there Saul and all the men of Israel '),
                hp('rejoiced greatly', 'christ-joy-kingdom'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sam11-gilgal-renew',
          html:
            'Samuel seizes the moment. The doubters have been silenced by Saul&apos;s victory and his mercy. The whole people—even Judah with its separate count—have shown their consent. Gilgal is the place where Israel entered the Promised Land under Joshua (Josh. 4:19–20). To renew the kingdom there is to anchor Saul&apos;s rule in the continuity of God&apos;s purposes. This is not a coronation invented by popular will; it is the renewal of a kingdom rooted in God&apos;s plan.',
        },
        {
          kind: 'commentary',
          id: 'sam11-sacrifice-peace',
          html:
            'Peace offerings were voluntary gifts, brought to seal a covenant and to create a feast of communion before God. At Gilgal, the people offer not complaint or obligation, but gratitude. The sacrifices are their way of saying: this is a gift we receive from God&apos;s hand. This king, this kingdom, this deliverance—all of it is God&apos;s work, and we receive it with joy.',
        },
        {
          kind: 'christ',
          id: 'christ-joy-kingdom',
          title: 'Christ Connection — Joy in the Kingdom',
          html:
            'The joy in this moment echoes forward in Scripture. Jesus tells His disciples: "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full" (John 15:11). The kingdom of God is a kingdom of joy—not the false cheer of pretending things are easy, but the deep gladness that comes from knowing that God is king, that justice is established, that the innocent are delivered. When Saul and all Israel "rejoiced greatly" at Gilgal, they were celebrating a sign: a deliverer had come, and God&apos;s kingdom was being renewed.',
        },
        {
          kind: 'carry',
          html:
            'There is a particular joy that comes when justice is established—when the oppressor is stopped, the innocent are protected, and a true leader rises to guard them. Hold that joy. It is a foretaste of the final kingdom, when all oppression will be ended, all injustice undone, and all who belong to God will rejoice in His presence without fear.',
        },
        {
          kind: 'reflection',
          id: 'kingdom-joy',
          prompt:
            'When have you felt that deeper joy—not the relief that a threat is gone, but the gladness that justice is real, that someone or something true is in charge? What does that joy tell you about what you are made to hope for?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
