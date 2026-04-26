import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 46 — Israel begins the migration to Egypt.
 *
 * At 130 years old, Jacob/Israel is leaving the promised land for the last
 * time. He stops at Beersheba to offer sacrifices. God appears in the night
 * visions and gives the promise that frames the entire Egyptian sojourn:
 * "I will go down with thee into Egypt; and I will also surely bring thee up
 * again." The 70 souls of his household — symbolic of the nations — descend
 * into exile. Joseph, his beloved son, rides up to Beersheba in Pharaoh&apos;s
 * chariot. Father and son embrace and weep. Joseph instructs his brothers what
 * to tell Pharaoh: "Ye are shepherds." The chapter is a threshold moment — the
 * end of one era, the beginning of another, wrapped in worship and reunion.
 */
export const GENESIS_46: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 46,

  intros: [
    'Israel is old. He has lived 130 years, seen Joseph alive against every expectation, buried Isaac at Mamre, and now stands at the edge of a choice: travel south to Egypt, the land of bondage, or stay in Canaan, the land of promise. He chooses to go. But before he steps across the southern border into Egypt, he stops at Beersheba — the place where Abraham once dug a well, the southern boundary of the promised land — to offer sacrifice to the God of his fathers.',
    'God appears to him there, in visions of the night. And God says something that will define Israel&apos;s entire sojourn in Egypt: "I am God, the God of thy father. Fear not to go down into Egypt, for I will there make of thee a great nation. I will go down with thee... and I will also surely bring thee up again." Two movements — down and up — framing exile itself as the space where God walks with His people.',
  ],

  bottomShare: {
    label: 'Share Genesis 46',
    quote:
      'God said to Israel: "I will go down with thee into Egypt; for I will there make of thee a great nation. And I will also surely bring thee up again." Israel journeyed with his 70 souls to Egypt, and Joseph wept on his father&apos;s neck a good while.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 46 · Study Guide',
  },

  sections: [
    /* ─── Genesis 46:1–4 — Beersheba and the Vision ──────────────────── */
    {
      ref: 'Genesis 46:1–4',
      title: 'Beersheba: Worship at the Border',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 1,
              spans: [
                t('And Israel took his journey with all that he had, and came to '),
                hy('Beersheba', 'beersheba-place'),
                t(', and '),
                hg('offered sacrifices', 'c-beersheba-altar'),
                t(' unto the God of his father Isaac.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beersheba-altar',
          html:
            'Israel does not rush down to Egypt. He pauses. Beersheba is the southern border of the promised land — the last place that belongs to Abraham&apos;s covenant before the wilderness and the land of Egypt begin. Israel&apos;s first act is worship. He offers sacrifice to the God of Isaac before crossing over.',
        },
        {
          kind: 'commentary',
          id: 'beersheba-place',
          html:
            'Beersheba — "well of the oath." Abraham dug this well and swore a covenant there. Jacob himself fled here once, years ago, when Esau was hunting him. The place is thick with memory and covenant. When Israel chooses to worship here before Egypt, the text is saying something: <em>I know where I am. I know whose land this is. And I am leaving it with my eyes open.</em>',
        },
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 2,
              spans: [
                t('And God spake unto Israel in the '),
                hy('visions of the night', 'c-night-vision'),
                t(', and said, Jacob, Jacob. And he said, Here am I.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-night-vision',
          html:
            'Visions of the night were a signature of God&apos;s speech to Jacob — at Bethel with the ladder, when he was fleeing Esau, and now at Beersheba when he is leaving the promised land. In the dark, when words from God arrive without introduction, Jacob knows the voice.',
        },
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 3,
              spans: [
                t('And he said, I am God, the God of thy father: fear not to go down into Egypt; for I will there make of thee a great nation.'),
              ],
            },
            {
              number: 4,
              spans: [
                hp('I will go down with thee into Egypt', 'christ-descent'),
                t('; and '),
                hy('I will also surely bring thee up again', 'c-ascent-promise'),
                t(': and '),
                hg('Joseph shall put his hand upon thine eyes', 'c-joseph-eyes'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ascent-promise',
          html:
            'Listen to the two movements: <em>down</em> and <em>up.</em> Not "down and stay." Not "down and forget." Down, then <em>surely</em> up. God is not sending Israel into Egypt as exile, but as a transit — the promised land is the true home, and God Himself will make the journey, accompany the sojourn, and oversee the return. Four hundred years will pass before the Exodus. But God says it now: I will bring you up again.',
        },
        {
          kind: 'commentary',
          id: 'c-joseph-eyes',
          html:
            'Joseph will close his father&apos;s eyes when Israel dies — a sign of honor, of presence, of a life completed in peace. The promise touches not just the journey down and up, but the rest that comes after.',
        },
        {
          kind: 'christ',
          id: 'christ-descent',
          title: 'Christ Connection — God Descends with His People',
          html:
            '&ldquo;I will go down with thee.&rdquo; God is not above exile; He descends into it. This word echoes forward to the incarnation itself: &ldquo;the Word was made flesh, and dwelt among us&rdquo; (John 1:14). The word translated "dwelt" — <em>skēnoō</em> — literally means to pitch a tent, to lodge, to take up temporary residence. Christ doesn&apos;t remain aloof from human suffering; He moves into it, walks through it, suffers it Himself. The God who descends with Israel into Egypt is the same God who descends into human flesh, human death, and human grief. His presence in exile is His nature.',
        },
        {
          kind: 'carry',
          html:
            'If anything in your life feels like descent — a sickness that won&apos;t lift, a relationship that came apart, a season of waiting and confusion — these words were written into the world&apos;s story for you: God does not stand at the top of your Egypt and give you instructions from a distance. He goes down. He dwells. He walks beside you through the time you cannot see the way out of. The way up comes after, and He is the one overseeing it.',
        },
        {
          kind: 'reflection',
          id: 'gen46-descent',
          prompt:
            'What is one place in your life where you need to hear "I will go down with thee"? Say the promise out loud.',
        },
      ],
    },

    /* ─── Genesis 46:5–27 — The 70 Souls ──────────────────────────────── */
    {
      ref: 'Genesis 46:5–27',
      title: 'The 70 Souls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 5,
              spans: [
                t('And Jacob rose up from Beersheba: and the sons of Israel carried Jacob their father, and their little ones, and their wives, in the wagons which Pharaoh had sent to carry him.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And they took their cattle, and their goods, which they had gotten in the land of Canaan, and came into Egypt, Jacob, and all his seed with him:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('His sons, and his sons&apos; sons with him, his daughters, and his sons&apos; daughters, and all his seed brought he with him into Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wagons-provision',
          html:
            'Pharaoh has sent wagons to carry Jacob&apos;s family. Joseph is already installed in Egypt, already wearing Pharaoh&apos;s signet ring, already second in command. The machinery of the nation is arranged to receive Israel&apos;s household — but the text wants you to feel the weight of it. Israel is going down into a land not his, in wagons provided by a foreign king, to live in a foreign kingdom for a season that will stretch into centuries.',
        },
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 8,
              spans: [t('And these are the names of the children of Israel, which came into Egypt, Jacob and his sons: Reuben, Jacob&apos;s firstborn.')],
            },
            {
              number: 9,
              spans: [t('And the sons of Reuben; Hanoch, and Pallu, and Hezron, and Carmi.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-genealogy-note',
          html:
            'Verses 8–27 list the names of Israel&apos;s household — all 70 souls. It&apos;s a genealogy, not a theological meditation, and the text doesn&apos;t demand verse-by-verse commentary. But the number itself carries weight: 70 is the number of the nations of the world in Genesis 10. The seed of Abraham, descending into Egypt as 70, foreshadows the gospel eventually going to all the nations. Israel goes down to Egypt; one day, the gospel will go out to Egypt and all the earth.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-seventy',
          title: 'Shib&apos;im — "seventy"',
          script: 'שִׁבְעִים',
          translit: '<strong>shib&apos;im</strong> · seven times ten; completion, all nations',
          description:
            'In biblical numerology, 70 represents totality and wholeness — the number of Israel&apos;s elders, the number of the nations, the number of years of exile before restoration. Israel descends to Egypt in the form of the nations themselves.',
        },
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 26,
              spans: [
                t('All the souls that came with Jacob into Egypt, which came out of his loins, besides Jacob&apos;s sons&apos; wives, all the souls were '),
                hy('threescore and six', 'c-sixty-six'),
                t(';'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the sons of Joseph, which were born him in Egypt, were two souls: all the souls of the house of Jacob, which came into Egypt, were '),
                hg('seventy', 'c-symbolic-seventy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sixty-six',
          html:
            'Jacob himself is counted as one of the 70. Joseph is already in Egypt, so he is not counted in the descent. His two sons, born in Egypt, are added to complete the 70. The arithmetic matters: it is a closed circle, a household, all bound together.',
        },
        {
          kind: 'commentary',
          id: 'c-symbolic-seventy',
          html:
            'Seventy souls. The same number as the nations God scattered at Babel. The same number as the elders God appointed to share Moses&apos; burden. The same number of disciples Jesus sent out to the nations (Luke 10:1). The number is saying something: when God&apos;s people go into exile, the whole world is somehow folded into that movement. When they are restored, the whole world receives the echo.',
        },
        {
          kind: 'carry',
          html:
            'You are part of a household much larger than your own family. You are part of a people whose story touches the whole world. The 70 souls that went down to Egypt are your ancestors — not your bloodline, but your covenantal line. When you read this story, you are reading the story of how God&apos;s people learn to survive in places that are not home. And you are learning it because your own life will have times like that — seasons where you are not in the place you were meant for, but where you must learn to watch for God&apos;s hand.',
        },
        {
          kind: 'reflection',
          id: 'gen46-seventy',
          prompt:
            'What does it mean to you that you are part of this household of 70, this people whose story reaches across nations and centuries?',
        },
      ],
    },

    /* ─── Genesis 46:28–30 — The Reunion ──────────────────────────────── */
    {
      ref: 'Genesis 46:28–30',
      title: 'Joseph and Jacob: The Embrace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 28,
              spans: [
                t('And he sent Judah before him unto Joseph, to direct his face unto Goshen; and they came into the land of Goshen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judah-ahead',
          html:
            'Judah goes ahead to meet Joseph. This is the same Judah who sold Joseph into slavery, who lied to Jacob about Joseph&apos;s death, who once considered murdering his own brother. By the time Israel reaches Egypt, Judah and Joseph are brothers again — the betrayal is behind them. The text doesn&apos;t dwell on it, but it is there in the simplicity of sending Judah ahead. Some damage has been healed.',
        },
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 29,
              spans: [
                t('And Joseph made ready his chariot, and went up to meet Israel his father, to Goshen, and '),
                hy('presented himself unto him', 'c-presentation'),
                t('; and he '),
                hp('fell on his neck, and wept on his neck a good while', 'christ-reconciliation'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-presentation',
          html:
            'Joseph rides up in Pharaoh&apos;s own chariot — the second man in Egypt. But when he meets his father, the chariot, the rank, the power all fall away. He steps down and embraces Israel. The body language says everything: a son who has become a prince, kneeling to his aged father.',
        },
        {
          kind: 'commentary',
          id: 'c-good-while',
          html:
            'He wept "a good while." Not a quick tear, not a moment of emotion — the Hebrew is saying he wept for an extended time. Jacob wept too. The text lets them weep. These are not tears of grief now, but of reunion — the grief of 22 years of separation, finally released.',
        },
        {
          kind: 'christ',
          id: 'christ-reconciliation',
          title: 'Christ Connection — Horizontal and Vertical Reconciliation',
          html:
            'This is the same posture Jacob took when he saw Esau: he "fell on his neck, and wept" (Gen. 33:4). But now he is on the receiving end — his son falls on his neck. Paul draws out the shape of it: Christ "hath made both one, and hath broken down the middle wall of partition between us… that he might reconcile both unto God… through the cross" (Eph. 2:14–16). Horizontal reconciliation — brother to brother, father to son — and vertical reconciliation — humanity to God — are always connected. When Joseph and Jacob embrace, they are already being drawn into the larger story of Christ reconciling all things.',
        },
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 30,
              spans: [
                t('And Israel said unto Joseph, Now let me die, since I have seen thy face, because thou art yet alive.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-simeon-died',
          html:
            'Israel echoes the words of Simeon in the temple: "Mine eyes have seen thy salvation" (Luke 2:30). Israel is 130 years old. He has been carrying the weight of Joseph&apos;s disappearance — or what he thought was Joseph&apos;s death — his entire adult life. When he sees Joseph alive, the weight lifts. He is ready to go now. His life&apos;s central wound is healed.',
        },
        {
          kind: 'carry',
          html:
            'There is a place in your life where reconciliation is waiting — a broken relationship, a word that was never spoken, a wound that is still fresh. The pattern of this chapter suggests something: God goes down with you into your Egypt. He meets you in the place you didn&apos;t expect to find healing. And when the embrace finally comes, it is worth the whole journey. Joseph did not forgive his brothers in spite of his suffering; the suffering itself became the ground where forgiveness grew. Your waiting, your grief, your exile — God is not wasting it. He is working it into the story of your restoration.',
        },
        {
          kind: 'reflection',
          id: 'gen46-reconcile',
          prompt:
            'Where is reconciliation waiting for you — a relationship you thought was finished, a conversation you thought was over? What would it look like to see that face again?',
        },
      ],
    },

    /* ─── Genesis 46:31–34 — The Instruction ─────────────────────────── */
    {
      ref: 'Genesis 46:31–34',
      title: 'What to Say to Pharaoh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 31,
              spans: [
                t('And Joseph said unto his brethren, and unto his father&apos;s house, I will go up, and shew Pharaoh, and say unto him, My brethren, and my father&apos;s house, which were in the land of Canaan, are come unto me;'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the men are '),
                hy('shepherds', 'hebrew-shephard'),
                t(', for their trade hath been to feed cattle; and they have brought their flocks, and their herds, and all that they have.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shephard',
          title: 'Ra&apos;eh — "shepherd"',
          script: 'רָעֶה',
          translit: '<strong>ra&apos;eh</strong> · to shepherd, to pasture, to tend flocks',
          description:
            'The Egyptians despised shepherds. Shepherding was seen as a contemptible occupation in Egyptian culture — yet Joseph instructs his brothers to tell Pharaoh exactly what they are. They will not hide. They will not pretend. They will be themselves, even in a foreign kingdom.',
        },
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            {
              number: 33,
              spans: [
                t('And it shall come to pass, when Pharaoh shall call you, and shall say, What is your occupation?'),
              ],
            },
            {
              number: 34,
              spans: [
                t('That ye shall say, Thy servants&apos; trade hath been about cattle from our youth even until now, both we, and also our fathers: that ye may dwell in the land of Goshen; for every '),
                hg('shepherd is an abomination unto the Egyptians', 'c-abomination'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abomination',
          html:
            'This seems like a problem at first — shepherds are abhorrent to Egypt — but it is actually a solution. If Pharaoh despises shepherds, he will not want them in his cities. He will be happy to let them settle in Goshen, the marginal land away from Egyptian society. By naming exactly what they are, they secure the space where they will be left alone. Joseph is teaching his family a lesson in exile: don&apos;t become someone else to survive. Be yourself. Tell the truth. Let the world reject you for what you actually are — and you will find the space God made for you.',
        },
        {
          kind: 'carry',
          html:
            'There is a temptation in hard seasons to become someone else — to hide the truth of who you are, to adopt the values of the place that has power over you, to make yourself acceptable by abandoning yourself. Joseph&apos;s instruction is different: tell them the truth. You are a shepherd. You are a person of faith. You are a believer. You belong to a different kingdom. Not with anger or resistance, not with a demand to be accepted — but with a clear voice about who you actually are. The world may not want you. But there is a Goshen somewhere, a place God has made for people like you.',
        },
        {
          kind: 'reflection',
          id: 'gen46-truth',
          prompt:
            'In what situation are you tempted to hide who you are? What would it look like to say the simple truth about yourself instead?',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob|israel/i,
          caption: 'Genesis 46:28–30 · The Reunion',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph|chariot|egypt/i,
          caption: 'Genesis 46:29 · Joseph and His Father',
        },
      ],
    },
  ],
};
