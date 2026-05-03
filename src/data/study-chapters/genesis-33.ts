import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 33 — Jacob meets Esau.
 *
 * Twenty years of dread compressed into a moment. The man who deceived and
 * fled now returns to face the brother he wronged. And instead of rage and
 * bloodshed, there is running, embrace, and tears. In the reconciliation
 * of these two men, the Old Testament shows what grace looks like before
 * the cross — and the pattern the New Testament will echo forever.
 */
export const GENESIS_33: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 33,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 13 },
  intros: [
    'Jacob has crossed the Jabbok. He has wrestled all night with God and been renamed Israel — "you have struggled with God, and have prevailed." But the dread that has haunted him for twenty years is about to arrive in person. Esau is coming. Four hundred men at his side.',
    'What happens next is the most stunning moment in Jacob&apos;s long story of scheming and scrambling. In a single chapter, two brothers who should have blood between them embrace instead. The older brother runs to the younger like a father in a parable. The deceiver finds himself on the receiving end of mercy. And in the space where murder could have been, Jacob names his God: "I have seen thy face, as though I had seen the face of God." To meet your brother face to face — with all the wrong between you — is the same thing as meeting God face to face.',
  ],

  bottomShare: {
    label: 'Share Genesis 33',
    quote:
      'Jacob sent gift after gift to Esau before him, and ran to meet him, fell on his neck, and wept. And Esau ran to meet him, and embraced him. The grace that passed between them in that moment was the first prodigal-father story the Old Testament could tell.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 33 · Study Guide',
  },

  sections: [
    /* ─── Genesis 33:1–3 — He Lifted Up His Eyes ──────────────────────── */
    {
      ref: 'Genesis 33:1–3',
      title: 'The Sight of His Brother',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 1,
              spans: [
                t('And Jacob '),
                hg('lifted up his eyes, and looked, and, behold, Esau came', 'c-lifted-eyes'),
                t(', and with him four hundred men. And he divided the children unto Leah, and unto Rachel, and unto the two handmaids.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he put the handmaids and their children foremost, and Leah and her children after, and Rachel and Joseph '),
                hg('hindermost', 'c-order'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he passed over before them, and '),
                hg('bowed himself to the ground seven times', 'c-bow-seven'),
                t(', until he came near to his brother.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lifted-eyes',
          html:
            'Jacob lifts his eyes and sees the thing he has been running from his whole life. Not an abstraction — the concrete arrival. Four hundred men. For years, the fear has lived in his stomach as a story he told himself. Now it has a face and a number. And in the next moment, the story will be shattered by something he did not write.',
        },
        {
          kind: 'commentary',
          id: 'c-order',
          html:
            'Notice the arrangement: the servants first, Leah and her children next, Rachel and Joseph last — the ones he loves most, placed where they would be safest if violence erupted. Jacob is still thinking like a man trying to minimize loss. He does not yet know that mercy is coming; he is only preparing for the worst.',
        },
        {
          kind: 'commentary',
          id: 'c-bow-seven',
          html:
            'Seven times. It is a full number — complete, thoroughgoing. Jacob is doing the one thing a man of his pride does not ordinarily do: he is abasing himself before the very brother he cheated. He is not asking permission. He is asking for grace without knowing if grace will come.',
        },
        {
          kind: 'reflection',
          id: 'gen33-fear',
          prompt: 'When you face someone you have wronged, does your default become self-protection or self-abasement? What would it look like to bow seven times instead?',
        },
      ],
    },

    /* ─── Genesis 33:4–5 — He Ran to Meet Him ────────────────────────── */
    {
      ref: 'Genesis 33:4–5',
      title: 'The Embrace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 4,
              spans: [
                t('And '),
                hp('Esau ran to meet him, and embraced him, and fell on his neck, and wept', 'christ-prodigal'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he lifted up his eyes, and saw the women and the children; and said, Who are those with thee? And he said, The children which God hath graciously given thy servant.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-minchah',
          title: 'Shalach — &ldquo;sent, ran&rdquo;',
          script: 'שָׁלַח',
          translit: '<strong>shalach</strong> (here as "ran") · the same root used for all the gifts Jacob sent beforehand; running and giving are the same verb-family',
          description:
            'The Hebrew link between the gifts Jacob sends and Esau&apos;s running to meet him is intentional. Both are acts of sending, of movement toward the other. But Esau&apos;s is unplanned, unrehearsed, pure. He is not sending a gift and waiting to see if it placates. He is moving toward his brother because something in him is already reconciled.',
        },
        {
          kind: 'christ',
          id: 'christ-prodigal',
          title: 'Christ Connection — The Prodigal Father',
          html:
            'Luke 15:20 borrows these exact verbs for the father in the prodigal parable: the father <em>ran</em>, <em>fell on his neck, and kissed him.</em> It is not an accident. The brother who had every right to kill, every grievance to assert, every claim to retaliation — he runs like a father to his son. Esau becomes the first picture of grace in Scripture&apos;s narrative. Not grace that must be earned. Grace that runs to meet the one who is still far off. Grace that embraces before a word is spoken.',
        },
        {
          kind: 'carry',
          html:
            'You know what it is like to bow seven times. To approach someone with apology and fear because you have genuinely failed them. But have you ever been the Esau in someone&apos;s story? When you have the right to anger and you choose to run instead — when you embrace the person who wronged you before they can finish explaining why — you are not being naive or weak. You are prophesying. You are showing the world what the Father is like.',
        },
        {
          kind: 'reflection',
          id: 'gen33-embrace',
          prompt:
            'Is there someone in your life who has wronged you, and whom you have the power to forgive but haven&apos;t? What would it cost you to run to meet them instead of waiting for them to prove they deserve it?',
        },
      ],
    },

    /* ─── Genesis 33:8–11 — Nay, I Pray Thee ──────────────────────────── */
    {
      ref: 'Genesis 33:8–11',
      title: 'The Gift Pressed, The Blessing Accepted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 8,
              spans: [
                t('And Esau said, What meanest thou by all this drove which I met? And he said, These are to find grace in the sight of my lord.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Esau said, I have enough, my brother; keep that thou hast unto thyself.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Jacob said, Nay, I pray thee, if now I have found grace in thy sight, then '),
                hg('receive my present at my hand', 'c-minchah'),
                t(': for therefore I have seen thy face, as though I had '),
                hp('seen the face of God', 'christ-face-of-god'),
                t(', and thou wast pleased with me.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Take, I pray thee, my blessing that is brought to thee; because God hath dealt graciously with me, and because I have enough. And he urged him, and he took it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-minchah',
          html:
            'Jacob calls his gifts a <em>minchah</em> — the same word used for the grain offering brought to the altar. But notice: the gift only becomes an offering <em>after</em> grace has been given. Jacob sends the gifts hoping they will buy peace, but the real transaction has already happened. Esau&apos;s embrace is the grace; the gifts are what flows <em>from</em> a grace already received. The pattern matters: we do not give to obtain grace. We give because grace is already ours.',
        },
        {
          kind: 'christ',
          id: 'christ-face-of-god',
          title: 'Christ Connection — To See the Face of the Brother',
          html:
            'Jacob says it three times across these verses: <em>I have seen thy face.</em> A man does not say this lightly. The last time Jacob said these words, they were about his encounter at Peniel — "I have seen God face to face, and my life is preserved" (32:30). To see your brother&apos;s face in forgiveness is, for Jacob, the same thing as seeing God&apos;s face. Jesus later makes this explicit: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me" (Matt. 25:40). The reconciliation between humans is never separate from the reconciliation with God. They are the same story, told from different angles.',
        },
        {
          kind: 'commentary',
          id: 'c-face-of-god-alt',
          html:
            'The echo is unmistakable. At Peniel, Jacob wrestled with God and said, "I have seen God face to face." Now he sees Esau&apos;s face in forgiveness and says nearly the same thing. The text is deliberately linking them. To be forgiven by someone you wronged, and to be received without condition, is not a lesser version of encountering God. It is the same mystery, dressed in human flesh.',
        },
        {
          kind: 'carry',
          html:
            'You have probably spent energy on a gift — time, money, thought — offered as a bribe before you knew if forgiveness was even coming. It feels hollow, doesn&apos;t it? The gift doesn&apos;t do what you hoped it would. But if grace has already come — if someone has already chosen you, already embraced you without condition — then your gift is something different. It becomes an overflow, a response, a way of saying <em>thank you</em> instead of <em>please forgive me.</em> That gift carries a whole different weight.',
        },
        {
          kind: 'reflection',
          id: 'gen33-gift',
          prompt:
            'Have you ever offered a gift hoping it would earn you grace? What changed when you finally understood that grace was free — and your gift could be something altogether different?',
        },
      ],
    },

    /* ─── Genesis 33:12–15 — Let My Lord Go Before ───────────────────── */
    {
      ref: 'Genesis 33:12–15',
      title: 'The Careful Parting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 12,
              spans: [
                t('And Esau said, Let us take our journey, and let us go, and I will go before thee.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Jacob said unto him, My lord knoweth that the children are tender, and the flocks and herds with young are with me: and if men should overdrive them one day, all the flock will die.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Let my lord, I pray thee, pass over before his servant: and I will lead on softly, according as the cattle that goeth before me and the children be able to endure, until I come unto my lord unto Seir.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Esau said, Let me now leave with thee some of the folk that are with me. And he said, What needeth it? let me find grace in the sight of my lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tender-children',
          html:
            'Jacob&apos;s excuse about the children being tender and the animals being unable to keep pace — read carefully. It sounds reasonable, doesn&apos;t it? But if grace is genuine, why the deflection? The text is showing you something: the moment after forgiveness, when you have to decide whether to trust it. Jacob has received Esau&apos;s embrace. He has felt what it felt like to be unconditionally loved. And now his first instinct is to protect himself, to find reasons to stay separate, to keep control of the pace. Grace and lingering caution can exist at the same time.',
        },
        {
          kind: 'commentary',
          id: 'c-seir',
          html:
            'Jacob promises to come to Seir — Esau&apos;s homeland, where Esau wants him to go. But he will not actually do it. The chapter ends with Jacob heading to Succoth and then Shechem, not Seir. The moment he is alone, he goes his own way. This is not a villainous choice; it is a very human one. He has received mercy, but he has not received the courage to stay close to the person who offered it. Sometimes grace opens a door, but we are still too afraid to walk through it.',
        },
        {
          kind: 'carry',
          html:
            'When you have received grace — real, unearned forgiveness — watch what you do next. Do you find yourself drawing closer, or looking for reasons to maintain distance? Do you trust that the embrace you received is permanent, or do you slip back into self-protection? There is no shame in the answer. The question itself is the thing worth noticing.',
        },
      ],
    },

    /* ─── Genesis 33:16–20 — El-Elohe-Israel ──────────────────────────── */
    {
      ref: 'Genesis 33:16–20',
      title: 'The New Name, The New Altar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 16,
              spans: [
                t('So Esau returned that day on his way unto Seir.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Jacob journeyed to Succoth, and built him an house, and made booths for his cattle: therefore the name of the place is called Succoth.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Jacob came to Shalem, a city of Shechem, which is in the land of Canaan, when he came from Padan-aram; and '),
                hg('pitched his tent before the city', 'c-shechem'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he bought a parcel of a field, where he had spread his tent, at the hand of the children of Hamor, Shechem&apos;s father, for an hundred pieces of money.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he '),
                hg('erected there an altar, and called the name of it El-elohe-Israel', 'hebrew-el-elohe-israel'),
                t('. [God, the God of Israel]'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-el-elohe-israel',
          title: 'El-Elohe-Israel — &ldquo;God, the God of Israel&rdquo;',
          script: 'אֵל אֱלֹהֵי יִשְׂרָאֵל',
          translit: '<strong>el elohe israel</strong> · God the God of Israel; a proper naming of the divine, anchored to a man&apos;s new identity',
          description:
            'Jacob does not name the altar after himself or his victory or his escape. He names it after his God — but he names that God by his own new name, Israel. The God of Israel is the God of the man who has struggled with God and prevailed. What Jacob names here is not a generic deity. It is the God of his particular story, the God who showed him grace through his brother&apos;s face.',
        },
        {
          kind: 'commentary',
          id: 'c-shechem',
          html:
            'Shechem is where Jacob will face the assault on his daughter Dinah in chapter 34. This is not the end of his story. The chapter does not close in peace or safety. But what closes is the long arc of flight and fear that has defined him since chapter 27. He is no longer running. He is building. He is naming. He is claiming a place. He is a man who has been forgiven, and because he has been forgiven — even incompletely, even cautiously — he can now start to live.',
        },
        {
          kind: 'reflection',
          id: 'gen33-naming',
          prompt:
            'Jacob names his altar after God — but by the name he was given when he was transformed. What name would your altar bear? What has God called you that is truer than the name you carried before?',
        },
      ],
    },
  ],
};
