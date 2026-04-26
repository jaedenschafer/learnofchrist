import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 42 — Joseph tests his brothers.
 *
 * Famine forces Jacob to send ten older brothers to Egypt for grain.
 * They bow before the vizier without recognizing him. Joseph tests them,
 * demands they bring Benjamin, imprisons Simeon. The brothers confess:
 * "we are verily guilty concerning our brother." Joseph weeps. The chapter
 * closes with Jacob refusing to send Benjamin — yet the machinery of
 * reconciliation is already turning.
 */
export const GENESIS_42: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 42,

  intros: [
    'Twenty-two years have passed. Joseph&apos;s brothers sold him into slavery, his father has grieved him as dead, and the young man is now the vizier of Egypt — the second ruler in the land. A famine sweeps across the ancient world, and Jacob, desperate, sends his ten older sons to Egypt to buy grain. They kneel before the man who holds their lives in his hands, and they do not know him.',
    'Genesis 42 is where recognition becomes resurrection. Joseph tests his brothers with a cruelty that is not cruelty — it is the only way to know if they have changed. And in the middle of his interrogation, something breaks through: the brothers speak to each other in Hebrew, thinking this Egyptian cannot hear them. &ldquo;We are verily guilty,&rdquo; they say. Twenty-two years of buried knowledge surfaces in one sentence. Joseph hears it and weeps in secret. The dream of his youth — the sheaves bowing to his sheaf — is happening in front of him, and his brothers still do not see.',
  ],

  sections: [
    /* ─── Genesis 42:1–5 — Jacob Sends Them Down ───────────────────────── */
    {
      ref: 'Genesis 42:1–5',
      title: 'The Famine and the Journey',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            {
              number: 1,
              spans: [
                t('Now when Jacob saw that there was corn in Egypt, Jacob said unto his sons, Why do ye look upon one another?'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he said, Behold, I have heard that there is corn in Egypt: get you down thither, and buy for us from thence; that we may '),
                hg('live, and not die', 'c-live-not-die'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Joseph&apos;s ten brethren went down to buy corn in Egypt.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But Benjamin, Joseph&apos;s brother, Jacob sent not with his brethren; for he said, Lest peradventure mischief befall him.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the sons of Israel came to buy corn among those that came: for the famine was in the land of Canaan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-live-not-die',
          html:
            'Jacob sends them down under the weight of a simple but absolute need: live or die. The famine has stripped away anything extraneous. There is no negotiating, no sending some of the brothers later. It is now. And Benjamin — the youngest, Joseph&apos;s only full brother, Jacob&apos;s last link to Rachel — stays home. Jacob fears losing another son. That fear will echo through the chapter and hold the whole family hostage before this is done.',
        },
        {
          kind: 'carry',
          html:
            'Desperation has a way of moving people. Jacob doesn&apos;t send his sons to Egypt because he wants an adventure or thinks it will be good for them. He sends them because the alternative is starvation. Sometimes the work God asks us to do is built on a famine of our own — a longing we can&apos;t fill alone, a depletion that forces us to travel to a place we wouldn&apos;t go otherwise. The things we resist most are often the journeys that change us most.',
        },
        {
          kind: 'reflection',
          id: 'gen42-famine',
          prompt:
            'What hunger or depletion in your life is pushing you somewhere you didn&apos;t expect to go? Is there a place you&apos;ve been avoiding because you thought you didn&apos;t need it?',
        },
      ],
    },

    /* ─── Genesis 42:6–9 — Bowing Before the Vizier ───────────────────── */
    {
      ref: 'Genesis 42:6–9',
      title: 'The Dream Fulfilled Unseen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            {
              number: 6,
              spans: [
                t('And Joseph was the governor over the land, and he it was that sold to all the people of the land: and Joseph&apos;s brethren came, and '),
                hp('bowed down themselves before him', 'christ-unrecognized'),
                t(' with their faces to the earth.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Joseph '),
                hy('saw his brethren, and he knew them', 'hebrew-yada'),
                t(', but they knew not him.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Joseph remembered the dreams which he dreamed of them, and said unto them, Ye are spies; to see the nakedness of the land ye are come.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And they said unto him, Nay, my lord, but to buy food are thy servants come.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yada',
          title: 'Yada — &ldquo;to know&rdquo;',
          script: 'יָדַע',
          translit: '<strong>yada</strong> · to know, to recognize, to be acquainted with',
          description:
            'The Hebrew is asymmetrical: <em>vayyakker yosef et-echav v&apos;hem lo hikkiruhu</em> — Joseph knew his brothers, and they knew him not. Recognition is not mutual here. Joseph sees exactly who stands before him. They see an Egyptian, a stranger, a man in power. The distance between knowing and being known will haunt the entire passage.',
        },
        {
          kind: 'commentary',
          id: 'c-bowing',
          html:
            'The dream of his youth comes true exactly as he saw it: &ldquo;Behold, your sheaves bowed themselves to my sheaf&rdquo; (Gen. 37:7). But Joseph does not gloat. Instead, he accuses them of being spies. This is not the opening move of a man savoring his elevation; it is the opening move of a test. Joseph is not looking to humiliate his brothers. He is looking to know if they have become men of honor or if they are still the kind of men who sell a boy to slavers.',
        },
        {
          kind: 'christ',
          id: 'christ-unrecognized',
          title: 'Christ Connection — He Came to His Own',
          html:
            '&ldquo;He came unto his own, and his own received him not&rdquo; (John 1:11). The brothers stand in front of the one who saves them and do not see him. A pattern Israel will repeat with Messiah. The Saviour comes veiled — in a servant&apos;s form, in judgment, in mystery — and the people He has come to rescue do not recognize Him. The distance between who Christ is and who we see will be the distance of the whole Gospel until at last we see Him as He is.',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*dreams|dream.*bow/i,
          matchArtist: /tissot/i,
          caption: 'The Dream Fulfilled — Genesis 42:6–9',
        },
        {
          kind: 'carry',
          html:
            'The brothers cannot see the brother who saves them. How much have we missed because we looked but didn&apos;t recognize? How many small salvations have walked past us in plain sight, and we thought they were trials? Joseph stands in front of his brothers, and the whole provision of Egypt is in his hands — and they argue that they are not spies, they are just hungry. What would change if you started looking for the face of rescue in a place where you only expected a test?',
        },
        {
          kind: 'reflection',
          id: 'gen42-dream',
          prompt:
            'Where in your life has something happened that you prayed for, but failed to recognize it when it arrived? What did you miss because you were looking for it in a different shape?',
        },
      ],
    },

    /* ─── Genesis 42:10–17 — The Test and the Prison ──────────────────── */
    {
      ref: 'Genesis 42:10–17',
      title: 'The Accusation and the Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            {
              number: 10,
              spans: [
                t('And they said unto him, Nay, my lord; but to buy food are thy servants come. We are all one man&apos;s sons; we are true men; thy servants are no spies.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he said unto them, Nay, but to see the nakedness of the land ye are come.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they said, Thy servants are twelve brethren, the sons of one man in the land of Canaan; and, behold, the youngest is this day with our father, and one is not.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Joseph said unto them, That is it that I spake unto you, saying, Ye are spies:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Hereby ye shall be proved: By the life of Pharaoh ye shall not go hence, except your youngest brother come hither.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Send one of you, and let him fetch your brother, and ye shall be kept in ward, that your words may be proved, whether there be any truth in you: or else by the life of Pharaoh surely ye are spies.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he put them all together into ward three days.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Joseph said unto them the third day, This do, and live; for I fear God:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-test',
          html:
            'Joseph&apos;s test is not cruelty. It is the only way to know whether his brothers have changed — whether they are still the men who could sell their own brother into slavery. Will they sacrifice one of their own again? Or have they learned something about the cost of betrayal? He accuses them, imprisons them, demands they bring Benjamin. Every move is designed to show him the shape of their hearts.',
        },
        {
          kind: 'commentary',
          id: 'c-three-days',
          html:
            'Three days in prison. The number echoes through the Joseph story — three days waiting for death, three days before resurrection. It is the shape of the deepest transformation: death, waiting, and rising on the third day. When Joseph&apos;s brothers speak to each other in the prison dark, something shifts. The test is working.',
        },
        {
          kind: 'commentary',
          id: 'c-fear-god',
          html:
            'In the middle of the test, Joseph says something that clarifies everything: &ldquo;I fear God.&rdquo; This is not a man crushing his enemies. This is a man who has learned to live before an Audience larger than himself. His brothers betrayed him before men. Joseph will have the chance to betray them before no one who would know. Instead he chooses to fear God. That distinction changes everything about what happens next.',
        },
        {
          kind: 'carry',
          html:
            'The test Joseph puts his brothers through is hard. But a test that is not hard is not a test. If you are being tested — if circumstances are pressing on what you say you believe, if you are being forced to choose between your comfort and your integrity — do not assume you are abandoned. The test may be the kindest thing that can happen to you. It is the only way your own heart can become clear to you. And it may be the only way you can ever truly forgive the people who hurt you, because you will have to know whether they have changed.',
        },
        {
          kind: 'reflection',
          id: 'gen42-test',
          prompt:
            'Where are you being tested right now — where circumstances are pressing on what you believe? What is the test revealing about who you are becoming?',
        },
      ],
    },

    /* ─── Genesis 42:18–24 — The Conscience Breaks ────────────────────── */
    {
      ref: 'Genesis 42:18–24',
      title: 'We Are Verily Guilty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            {
              number: 18,
              spans: [
                t('And Joseph said unto them the third day, This do, and live; for I fear God:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('If ye be true men, let one of your brethren be bound in the house of your prison: go ye, carry corn for the famine of your houses:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But bring your youngest brother unto me; so shall your words be verified, and ye shall not die. And they did so.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And they said one to another, '),
                hy('We are verily guilty concerning our brother', 'hebrew-ashemim'),
                t(': for we saw the anguish of his soul, when he besought us, and we would not hear; therefore is this distress come upon us.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Reuben answered them, saying, Spake I not unto you, saying, Do not sin against the child; and ye would not hear? therefore, behold, his blood is required.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And they knew not that Joseph understood them; for he spake unto them by an interpreter.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And '),
                hp('he turned himself about from them, and wept', 'christ-weeping'),
                t('; and returned to them again, and communed with them, and took from them Simeon, and bound him before their eyes.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ashemim',
          title: 'Ashemim — &ldquo;we are guilty&rdquo;',
          script: 'אֲשֵׁמִים',
          translit: '<strong>ashemim</strong> · guilty, culpable, deserving punishment',
          description:
            'The brothers speak in Hebrew, thinking the Egyptian cannot hear them. The confession comes out in their own tongue, in the language of home: <em>aval ashemim anachnu</em> — &ldquo;indeed, we are guilty.&rdquo; The word <em>aval</em> means &ldquo;truly, verily&rdquo; — this is not a hesitant thought; it is a conviction that has been buried for twenty-two years and is finally breaking surface. What happened to Joseph is not a story they tell anymore. It is an unpaid debt they carry.',
        },
        {
          kind: 'commentary',
          id: 'c-conscience',
          html:
            'This is the first time the brothers have spoken the truth of what they did. For more than twenty years, they have carried the lie — told their father that Joseph is dead, lived with the knowledge that they sold him. The guilt has been a kind of slow poison, and they did not even know it until the prison dark and the accusation of a stranger forced them to speak. &ldquo;We saw the anguish of his soul,&rdquo; they say. They remember his crying. They remember ignoring it. The conscience, once awakened, speaks in the language of the first wrong.',
        },
        {
          kind: 'commentary',
          id: 'c-reuben',
          html:
            'Reuben reminds them that he had warned them. He had tried to save Joseph, tried to send him back to their father. But Reuben&apos;s objection was not enough, and the rest of the brothers went ahead. Now, in this dark room far from home, Reuben speaks the words none of them have dared to speak: &ldquo;his blood is required.&rdquo; The debt is still unpaid. Even after all these years, it hangs over them.',
        },
        {
          kind: 'christ',
          id: 'christ-weeping',
          title: 'Christ Connection — The Weeping Saviour',
          html:
            'Joseph hears his brothers confess in Hebrew and weeps — weeps in secret, where they cannot see him. &ldquo;Jesus wept&rdquo; (John 11:35), over a tomb he was about to open. &ldquo;He beheld the city, and wept over it&rdquo; (Luke 19:41). The Saviour weeps over the people who don&apos;t yet recognize Him, who are still asleep in their guilt, who do not know that the One standing in front of them has already forgiven them. Joseph&apos;s tears are the tears of rescue waiting for recognition.',
        },
        {
          kind: 'carry',
          html:
            'The conscience is sometimes the only voice that can wake us up. When the weight of something gets heavy enough, when the prison dark gets deep enough, the truth finds its way out. You may have been carrying guilt for so long you forgot you were carrying it. The test, the prison, the darkness — sometimes these are the only conditions where honesty becomes possible. And sometimes, in the moment you speak the truth of what you did, the One who has been listening all along is the very One whose forgiveness you most need.',
        },
        {
          kind: 'reflection',
          id: 'gen42-guilty',
          prompt:
            'What wrong have you been carrying for years, the way the brothers carried their betrayal of Joseph? What would it take to finally speak it out loud?',
        },
      ],
    },

    /* ─── Genesis 42:25–26 — The Silver in the Sack ──────────────────── */
    {
      ref: 'Genesis 42:25–26',
      title: 'Grace in the Hidden',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            {
              number: 25,
              spans: [
                t('Then Joseph commanded to fill their sacks with corn, and to restore every man&apos;s money into his sack, and to give them provision for the way: and thus did he unto them.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And they laded their asses with the corn, and departed thence.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-silver',
          html:
            'Joseph gives them grain — as much as they need — and secretly returns their silver to their sacks. They have paid for nothing. They will discover the silver later, and it will terrify them: they will think they are thieves, that Egypt will come after them. But the truth is simpler. Joseph gives them what they need without payment. It is grace in its purest form — help given to the undeserving, given before they even ask for it.',
        },
        {
          kind: 'commentary',
          id: 'c-provision',
          html:
            'The journey back to Canaan is long. Joseph orders that they be given provision for the way — not just grain, but everything they need. He is thinking ahead about their survival. This is what a redeemer does: he thinks about the long road ahead, the obstacles you will face, the places where you might fail. He gives not just for today but for the journey.',
        },
        {
          kind: 'christ',
          id: 'christ-grace',
          title: 'Christ Connection — Without Money and Without Price',
          html:
            'Joseph&apos;s brothers pay nothing for what they receive. Isaiah saw the shape of the gospel and spoke it centuries later: &ldquo;Ho, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat; yea, come, buy wine and milk without money and without price&rdquo; (Isa. 55:1). The Christ pattern is always: provision given. The cost paid by Another. The grace hidden in the dark until the journey home when the discovery breaks you open.',
        },
        {
          kind: 'carry',
          html:
            'You came with what you thought you had to offer — your work, your effort, your payment. But the One who feeds you has already put back more than you gave. The grain is coming home with you. The silver will surprise you on the road. You will terrify yourself thinking you are thieves, when the truth is you have been given everything you need and more. The only payment that was ever going to matter, someone else already made.',
        },
        {
          kind: 'reflection',
          id: 'gen42-silver',
          prompt:
            'Where in your life have you been waiting to &ldquo;pay your way&rdquo; in order to deserve what you need? What would it look like to receive it as a gift instead?',
        },
      ],
    },

    /* ─── Genesis 42:27–28 — The Terror of Grace ──────────────────────── */
    {
      ref: 'Genesis 42:27–28',
      title: 'Fear and Wondering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            {
              number: 27,
              spans: [
                t('And as one of them opened his sack to give his ass provender in the inn, he espied his money; for, behold, it was in his sack&apos;s mouth.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And he said unto his brethren, My money is restored; and, lo, it is even in my sack: and their heart failed them, and they were afraid, saying one to another, '),
                hy('What is this that God hath done unto us', 'c-god-done'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-done',
          html:
            'The discovery terrifies them. They do not interpret it as grace; they interpret it as a trap. They see the silver and think: we are thieves. Egypt will pursue us. The God who has been distant for so long is suddenly moving, but they cannot read what direction He is moving. Fear can hide grace. The brothers are so accustomed to judgment that when mercy arrives, they cannot recognize it. They stand on the edge of a gift and see only danger.',
        },
        {
          kind: 'commentary',
          id: 'c-heart-failed',
          html:
            'Their hearts fail them. This is real terror — not imagination, but the body responding to what feels like a trap. But the reader knows what the brothers do not: there is no trap. The man who gave them the grain, who put back their silver, who thought about their journey — he is their brother. He is not their enemy. He is working toward their redemption, even while they are afraid.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes grace comes and we misinterpret it as judgment. Something unexpected happens and instead of wondering if it is good, we prepare for the worst. We have been wrong before, disappointed before, hurt before. So we brace. We assume the worst. We gather the evidence of the trap we are sure is coming. But what if, just this once, the unexpected thing is a gift? What if the person you are afraid of is actually the one who saves you?',
        },
        {
          kind: 'reflection',
          id: 'gen42-afraid',
          prompt:
            'When was the last time something good happened and you were certain it was actually bad? What made you change your mind — or did you ever?',
        },
      ],
    },

    /* ─── Genesis 42:29–38 — Jacob Refuses ──────────────────────────── */
    {
      ref: 'Genesis 42:29–38',
      title: 'Jacob&apos;s Refusal, and the Ransom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            {
              number: 29,
              spans: [
                t('And they came unto Jacob their father unto the land of Canaan, and told him all that befell unto them; saying,'),
              ],
            },
            {
              number: 30,
              spans: [
                t('The man, who is the lord of the land, spake roughly to us, and took us for spies of the country.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And it came to pass as they emptied their sacks, that, behold, every man&apos;s bundle of money was in his sack: and when both they and their father saw the bundles of money, they were afraid.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And Jacob their father said unto them, Me have ye bereaved of my children: Joseph is not, and Simeon is not, and ye will take Benjamin away: all these things are against me.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And Reuben spake unto his father, saying, Slay my two sons, if I bring him not to thee: deliver him into my hand, and I will bring him to thee again.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And he said, '),
                hp('My son shall not go down with you', 'christ-ransom'),
                t('; for his brother is dead, and he is left alone: if mischief befall him by the way in the which ye go, then shall ye bring down my gray hairs with sorrow to the grave.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jacob-bereaved',
          html:
            'Jacob is counting his losses. Joseph is gone — dead, as far as he knows. Simeon is imprisoned in Egypt. Now his sons want to take Benjamin, the youngest, the last son of Rachel. The old man feels the weight of grief accumulating. He reads the silver in the sacks as a judgment, not a gift. Fear speaks louder than grace in a heart that has already lost so much.',
        },
        {
          kind: 'commentary',
          id: 'c-reuben-offer',
          html:
            'Reuben offers something startling: &ldquo;Slay my two sons, if I bring him not to thee.&rdquo; He is offering to stake his own children on his promise. But Jacob refuses the offer. He will not accept it. Two chapters later, Judah will make a different offer — not of his sons, but of himself. And Jacob will accept it. By then, something will have shifted. Substitution — the willingness to give yourself so that another can go free — will have become the language the family understands.',
        },
        {
          kind: 'commentary',
          id: 'c-gray-hairs',
          html:
            'Jacob is old. He has lost his wife Rachel long ago. He has lost the son he loved best. Every additional loss now feels like it will crush him. He speaks from the deepest kind of grief — not the fresh agony of new loss, but the exhaustion of a man who has been carrying sorrow for so long that one more burden might be the one that breaks him. This is the state of his heart when the machinery of reconciliation is turning, unseen, in Egypt.',
        },
        {
          kind: 'christ',
          id: 'christ-ransom',
          title: 'Christ Connection — The Ransom and the Acceptance',
          html:
            'Reuben offers his own sons in place of Benjamin. Jacob refuses. But centuries later, Judah will stand before Joseph (though he does not know it is Joseph) and say: &ldquo;Let me, I pray thee, be a surety for the lad… Now therefore, I pray thee, let thy servant abide instead of the lad a bondman to my lord&rdquo; (Gen. 44:33-34). This time, it is the man himself offering, not his children. And it is this offer — not the same blood, but the willingness to die in another&apos;s place — that will unlock Joseph&apos;s heart. &ldquo;Greater love hath no man than this,&rdquo; Jesus says, &ldquo;that a man lay down his life for his friends&rdquo; (John 15:13). Judah&apos;s offer is the shadow of the Cross.',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob.*father|father.*patriarch/i,
          matchArtist: /tissot|rembrandt/i,
          caption: 'Jacob Refuses to Send Benjamin — Genesis 42:36–38',
        },
        {
          kind: 'carry',
          html:
            'Jacob&apos;s fear keeps him from the very thing that would restore him. He will not send Benjamin, not yet. He does not know that his refusal will be honored, that another chapter will wait, that his fear will eventually give way to trust. We do not always see why God asks what He asks. We do not always understand the path He is taking us by. But the story of Jacob teaches: the thing you are most afraid to let go of may be the only thing that will take you home.',
        },
        {
          kind: 'reflection',
          id: 'gen42-refused',
          prompt:
            'What are you still holding too tightly? What child of your heart — what dream, what person, what control — are you refusing to risk because you&apos;ve lost too much already?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 42',
    quote:
      'Famine forces Jacob to send his sons to Egypt for grain. They bow before their brother, the vizier, but do not recognize him. Joseph tests them, weeps in secret, and in their dark prison, the brothers confess: "We are verily guilty." Grace returns their silver unseen. Jacob refuses to send Benjamin. The machinery of reconciliation is turning.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 42 · Study Guide',
  },
};
