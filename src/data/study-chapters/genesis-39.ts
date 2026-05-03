import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 39 — Joseph in Potiphar&apos;s house.
 *
 * The LORD is with Joseph everywhere: in prosperity, in false accusation,
 * in prison. He refuses the wife&apos;s seduction not out of circumstance but
 * conviction: "How then can I do this great wickedness, and sin against God?"
 * Joseph&apos;s testimony to the permanence of God&apos;s presence through both
 * exaltation and humiliation; his refusal grounds itself first in God, not
 * in fear of consequence. In prison as in the house, "the LORD was with Joseph,
 * and that which he did, the LORD made it to prosper."
 */
export const GENESIS_39: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 39,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  intros: [
    'Genesis 39 opens a long descent for Joseph that looks at first like an ascent. Potiphar, an officer of Pharaoh, buys Joseph and sees something in him — favor, competence, the presence of God [res:met-museum-egypt]. Joseph prospers. He is promoted. He has oversight of everything. And then Potiphar&apos;s wife looks at him.',
    'What happens next is a study in how righteousness costs. Joseph is a young man in a foreign land, enslaved, with no ally, no family, no claim to protection [res:bibleodyssey-joseph-egypt]. He could slip with no one the wiser. Instead he refuses daily, naming the refusal plainly: this would be "great wickedness" against God. When she seizes him by the garment, he tears himself free and flees — and she lies, and he is thrown into prison. Yet the chapter&apos;s refrain never wavers: the LORD was with Joseph.',
  ],

  bottomShare: {
    label: 'Share Genesis 39',
    quote:
      'The LORD was with Joseph, and that which he did, the LORD made it to prosper. Joseph refused to sin against God, even at the cost of his freedom. The LORD was with him in the house. The LORD was with him in prison too.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 39 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-39',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 39 — Sefaria',
      url: 'https://www.sefaria.org/Genesis.39',
      description: 'Annotated text with classical and modern Jewish commentary on Joseph in Potiphar&apos;s house.',
    },
    {
      id: 'met-museum-egypt',
      kind: 'museum',
      source: 'The Met',
      label: 'Ancient Egypt — The Metropolitan Museum of Art',
      url: 'https://www.metmuseum.org/art/collection?department=Egyptian%20Art',
      description: 'Egyptian artifacts and cultural context for understanding the world of Joseph and later Genesis figures.',
    },
    {
      id: 'bibleodyssey-joseph-egypt',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Joseph and Egypt — Bible Odyssey',
      url: 'https://www.bibleodyssey.org/en/passages/related-articles/joseph-and-egypt',
      description: 'Scholarly essays on Joseph&apos;s time in Egypt and its historical and theological significance.',
    },
  ],

  sections: [
    /* ─── Genesis 39:1–6 — The Favor of God ────────────────────────────── */
    {
      ref: 'Genesis 39:1–6',
      title: 'Sold into Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 1,
              spans: [
                t('And Joseph was brought down to Egypt; and Potiphar, an officer of Pharaoh, '),
                hg('captain of the guard', 'c-potiphar'),
                t(', bought him of the hands of the Ishmaelites, which had brought him down thither.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the '),
                hp('LORD was with Joseph', 'christ-presence'),
                t(', and he was a prosperous man; and he was in the house of his master the Egyptian.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-potiphar',
          html:
            'Potiphar is the chief of the royal guard — the highest rank anyone enslaved could realistically reach in service. Joseph is sold into the household of the most powerful man he could serve. Yet the text does not credit Potiphar&apos;s eye for talent. It credits what comes next: the LORD was with Joseph.',
        },
        {
          kind: 'commentary',
          id: 'christ-presence',
          html:
            'The refrain that will echo through Genesis 39 begins here. "The LORD was with Joseph." This is not a metaphor. The text grounds Joseph&apos;s prosperity in God&apos;s actual presence with him, not in luck or timing or merit.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 3,
              spans: [
                t('And his master saw that the '),
                hy('LORD was with him', 'hebrew-yhwh-et'),
                t(', and that the LORD made all that he did to prosper in his hand.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Joseph found grace in his sight, and he served him: and he made him '),
                hg('overseer over his house', 'c-overseer'),
                t(', and all that he had he put into his hand.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yhwh-et',
          title: 'Yahweh et — &ldquo;the LORD with&rdquo;',
          script: 'יהוה אֶת־יוֹסֵף',
          translit: '<strong>Yahweh et-Yosef</strong> · the LORD [with] Joseph',
          description:
            'This phrase recurs in verses 2, 3, 21, and 23 — the chapter&apos;s structural backbone. The same God who was with Joseph when he was favored is the same God with him when he is imprisoned. The presence of God does not fluctuate with circumstance.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 5,
              spans: [
                t('And it came to pass from the time that he had made him overseer in his house, and over all that he had, that the LORD blessed the Egyptian&apos;s house for Joseph&apos;s sake: and the blessing of the LORD was upon all that he had in the house, and in the field.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he left all that he had in Joseph&apos;s hand; and he knew not ought he had, save the bread which he did eat. And Joseph was a goodly person, and well favoured.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-overseer',
          html:
            'The overseer position in an Egyptian household was singular authority. Potiphar entrusts Joseph with everything. The text pauses to note Joseph&apos;s appearance — not to flatter him, but to set the stage. Beauty and power together are about to become a vulnerability.',
        },
        {
          kind: 'carry',
          html:
            'What you do competently, done before God, prospers beyond your own strength. Joseph did not engineer his rise — he served. He was not lobbying for promotion — he was faithful in his work. And the blessing spilled outward: Potiphar&apos;s whole household was blessed because of Joseph. Who in your sphere of influence is blessed because of your faithfulness? Who could be if you stayed with what you know is right?',
        },
        {
          kind: 'reflection',
          id: 'gen39-favor',
          prompt:
            'Where are you experiencing the LORD&apos;s favor and prosperity right now? What is He asking you to be faithful with?',
        },
      ],
    },

    /* ─── Genesis 39:7–12 — The Daily Refusal ──────────────────────────── */
    {
      ref: 'Genesis 39:7–12',
      title: 'Not This, Not Ever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 7,
              spans: [
                t('And it came to pass after these things, that his master&apos;s wife cast her eyes upon Joseph; and she said, '),
                hg('Lie with me', 'c-wife'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But he refused, and said unto his master&apos;s wife, Behold, my master wotteth not what is with me in the house, and he hath committed all that he hath to my hand;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('There is none greater in this house than I; neither hath he kept back any thing from me but thee, because thou art his wife: '),
                hp('how then can I do this great wickedness, and sin against God?', 'christ-sin-against-god'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wife',
          html:
            'Potiphar&apos;s wife does not whisper or seduce gently. She commands: "Lie with me." Each day she repeats this (v. 10). There is no privacy in Joseph&apos;s refusal — it is public, domestic, constant. He lives in her house. He serves her daily. She has power over him and every reason to believe he will eventually comply.',
        },
        {
          kind: 'commentary',
          id: 'c-refusal',
          html:
            'Joseph&apos;s refusal rests on two things: his loyalty to Potiphar, who has honored him, and his loyalty to God, which comes first. He lays out the logic: Potiphar has trusted me with everything except you. The boundary is not political or pragmatic. It is covenant.',
        },
        {
          kind: 'commentary',
          id: 'christ-sin-against-god',
          html:
            'Joseph names the sin first as sin against God, not against Potiphar, though he respects Potiphar. This is the hierarchy: when it comes down to it, God&apos;s claim is primary. This logic will echo centuries later in David&apos;s confession: "Against thee, thee only, have I sinned" (Psalm 51:4). And it cuts to the heart of all moral reasoning. Before any human consequence, before any earthly relationship, comes the relationship with God.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 10,
              spans: [
                t('And it came to pass, as she spake to Joseph day by day, that he '),
                hy('hearkened not unto her', 'hebrew-shamah'),
                t(', to lie with her, or to be in her company.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And it came to pass about this time, that Joseph went into the house to do his business; and there was none of the men of the house there within.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And she caught him by his garment, saying, Lie with me: and '),
                hg('he left his garment in her hand, and fled, and got him out', 'c-garment-flee'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shamah',
          title: 'Shamah — &ldquo;to listen, to hear&rdquo;',
          script: 'שָׁמַע',
          translit: '<strong>shamah</strong> · to listen, to hear, to obey',
          description:
            'Joseph did not simply refuse in a moment of weakness. Day after day, "he hearkened not unto her." The Hebrew word means both to hear and to obey. Joseph heard her — her voice, her power over him, her daily invitation — and chose not to obey. Obedience is not forgetting the temptation. It is hearing it and saying no.',
        },
        {
          kind: 'commentary',
          id: 'c-garment-flee',
          html:
            'When she seizes him by his garment, Joseph tears free and runs. The garment is left in her hands — a piece of his dignity abandoned for the sake of his integrity. And she will use it as a lie. He will pay for his faithfulness immediately and visibly. The cost of saying no becomes undeniable.',
        },
        {
          kind: 'carry',
          html:
            'Joseph did not have a moment of doubt and then move on. He was asked daily. The woman he lived under was relentless, and she had power over him. Yet day after day he said no — not because he was naturally virtuous, but because he named the truth: this is wickedness against God. Whatever temptation you face regularly, the first step is not to manage it quietly. It is to call it what it is. Then to say no again tomorrow, and the day after that. Sometimes righteousness is a footrace. Sometimes it costs you your garment.',
        },
        {
          kind: 'reflection',
          id: 'gen39-refuse',
          prompt:
            'What are you hearing "day by day" that you keep saying no to? What would change if you named it "great wickedness" and fled instead of just resisting?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*potiphar/i,
          caption: 'Genesis 39:7–12 · The Flight',
        },
      ],
    },

    /* ─── Genesis 39:13–18 — The Lie ───────────────────────────────────── */
    {
      ref: 'Genesis 39:13–18',
      title: 'False Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 13,
              spans: [
                t('And it came to pass, when she saw that he had left his garment in her hand, and was fled forth,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('That she called unto the men of her house, and spake unto them, saying, See, he hath brought in an Hebrew unto us to mock us; he came in unto me to lie with me, and I cried with a loud voice:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And it came to pass, when he heard that I lifted up my voice and cried, that he left his garment with me, and fled, and got him out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lie-strategy',
          html:
            'She does not scream after he flees. She manufactures the narrative afterward, using the garment as her prop. The story is neat: the foreign slave attempted assault, she cried out, he fled in shame, here is his garment. The lie is structural — it inverts everything Joseph did. His faithfulness becomes attempted seduction. His flight becomes guilt. His garment becomes evidence.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 16,
              spans: [
                t('And she laid up his garment by her, until his lord came home.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And she spake unto him according to these words, saying, The Hebrew servant, which thou hast brought unto us, came in unto me to mock me:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And it came to pass, as I lifted up my voice and cried, that he left his garment with me, and fled out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-potiphar-believes',
          html:
            'The text does not call her out as a liar. It simply shows what happened: Potiphar hears her story and the garment is there to prove it. In Pharaonic Egypt, the word of the master&apos;s wife would outweigh any claim Joseph could make. The justice system itself is against him. He is condemned by the truth being stood on its head, with nothing in his hand to defend himself but his own word and the knowledge of his own heart.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes faithfulness gets you lied about. Tamar, another woman in Genesis, was given a name for acting in covenant faith (Gen 38:26). Potiphar&apos;s wife is given no name — she remains anonymous, the Bible&apos;s small way of marking her namelessness as the cost of deceit. The justice of God runs slower than the justice of Pharaoh. But it runs.',
        },
      ],
    },

    /* ─── Genesis 39:19–20 — Condemned ────────────────────────────────── */
    {
      ref: 'Genesis 39:19–20',
      title: 'Prison',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 19,
              spans: [
                t('And it came to pass, when his master heard the words of his wife, which she spake unto him, saying, After this manner did thy servant to me; that '),
                hg('his wrath was kindled', 'c-wrath'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Joseph&apos;s master took him, and '),
                hp('put him into the prison', 'christ-prison-innocent'),
                t(', a prison, the place where the king&apos;s prisoners were bound: and he was there in the prison.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wrath',
          html:
            'Potiphar believes his wife. His wrath is kindled. Yet notice: the text does not say he executed Joseph. He sends him to prison. Ancient Egypt would have had every right to take Joseph&apos;s life. That Joseph lives — that he is sent to "the prison where the king&apos;s prisoners were bound," likely because Potiphar hesitates — may be the smallest mercy in the chapter. But it is a mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-prison-innocent',
          title: 'Christ Connection — Condemned by False Witness',
          html:
            'Joseph is condemned on the word of one witness, condemned without a trial that would vindicate him. The Gospels put the parallel plainly: Jesus is brought before Pilate on false witness. A woman at a well accuses one man; a woman in Egypt accuses another. Both stand before a judge who can do nothing but execute the sentence. Both are innocent. Isaiah&apos;s picture of the Suffering Servant echoes over both of them: &ldquo;as a sheep before her shearers is dumb, so he openeth not his mouth&rdquo; (Isa. 53:7). Joseph says nothing in his defense. Jesus says nothing in his. The innocent condemned by the guilty is the pattern. It is also the gospel.',
        },
        {
          kind: 'carry',
          html:
            'You may know the feeling of being lied about. Of having something you did with integrity weaponized against you. Of standing in front of someone with power and knowing the truth won&apos;t matter because the lie is what fits their story. Joseph&apos;s story does not end here. But for now, he enters prison. And the chapter insists on telling you who went with him.',
        },
      ],
    },

    /* ─── Genesis 39:21–23 — The LORD in Prison ──────────────────────── */
    {
      ref: 'Genesis 39:21–23',
      title: 'Favored Even in Chains',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 21,
              spans: [
                t('But the '),
                hp('LORD was with Joseph', 'christ-constancy'),
                t(', and shewed him mercy, and gave him favour in the sight of the keeper of the prison.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the keeper of the prison committed to Joseph&apos;s hand all the prisoners that were in the prison; and whatsoever they did there, he was the doer of it.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('The keeper of the prison looked not to any thing that was under his hand; because the '),
                hy('LORD was with him', 'hebrew-yhwh-et-2'),
                t(', and that which he did, the LORD made it to prosper.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prison-favor',
          html:
            'The same pattern repeats [res:sefaria-genesis-39]. Joseph is favored. He is promoted within the prison to overseer of the prisoners. And the reason given is, again, that the LORD was with him. There is no timeline here, no sense that Joseph needed time to grieve his lost position. The chapter moves immediately from his condemnation to his favor. The constancy of the phrase — "the LORD was with Joseph" — suggests that his sense of being with God did not waver.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yhwh-et-2',
          title: 'Yahweh et Joseph (recurrence)',
          script: 'יהוה אֶת־יוֹסֵף',
          translit: '<strong>Yahweh et-Yosef</strong> (again)',
          description:
            'The refrain returns. Verses 2, 3, 21, 23. In the palace. In the prison. The same God. The text is teaching you something about how the world actually works: God&apos;s presence does not depend on your circumstance.',
        },
        {
          kind: 'christ',
          id: 'christ-constancy',
          title: 'Christ Connection — Lo, I Am With You Always',
          html:
            'Jesus steps into Gethsemane and prays, "If it be possible, let this cup pass from me." The cup does not pass. He goes to trial. He goes to prison — worse than prison, to a hill outside the city. His last promise to His followers is this: "Lo, I am with you alway, even unto the end of the world" (Matt. 28:20). Joseph&apos;s constancy in the presence of God — in house and prison both — is a picture of the constancy God promises. Not that you will not suffer. But that you will not be alone. The difference between affliction with God and affliction without Him is everything.',
        },
        {
          kind: 'carry',
          html:
            'If your sense of God&apos;s presence right now depends on your circumstances being good, you are brittle. You will shatter the moment circumstances change — and they will. Joseph learned something in a house he could have taken for granted: the LORD was with him. He learned it, and when the house burned down and he landed in a cell, the learning was there. The presence of God is not a reward for having your life together. It is the ground beneath you, the same ground whether the sun is shining or not.',
        },
        {
          kind: 'reflection',
          id: 'gen39-prison',
          prompt:
            'Where is your faith right now trembling because circumstances have changed? What would it look like to believe "the LORD is with me" in this cell, not in the palace I lost?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*prison/i,
          caption: 'Genesis 39:21–23 · Favored in Captivity',
        },
      ],
    },
  ],
};
