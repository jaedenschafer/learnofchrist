import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 18 — Three visitors at the oaks of Mamre. Abraham offers
 * hospitality to three strangers who turn out to be divine messengers.
 * Sarah laughs at the promise of a son. God reveals the judgment coming
 * on Sodom. Abraham bargains down from 50 righteous to 10 to spare the city.
 *
 * The chapter has two halves: welcome at noon, then a walk toward judgment.
 * Hospitality frames the sacred. Intercession frames the mercy.
 */
export const GENESIS_18: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 18,

  estimatedMinutes: { 5: 7, 10: 11, 15: 15 },
  intros: [
    'Genesis 18 has two halves that echo each other. In the first, Abraham sits at the door of his tent at noon and sees three men walking toward him. He does not know who they are. He runs to meet them and offers them water, shade, and bread — the hospitality of a desert nomad toward strangers. They accept, and one of them speaks the promise Abraham has been waiting for: within a year, Sarah will have a son.',
    'In the second half, the strangers rise to go. Abraham walks with them toward Sodom. And then, at the turning point of the chapter, the Lord says something stunning: "Shall I hide from Abraham that thing which I do?" What follows is not judgment first, but disclosure. Abraham learns what is about to happen to Sodom and Gerar, and he begins to pray — to bargain, even — for the city. He starts at fifty righteous souls and works his way down to ten, and the Lord listens to him each time. Hospitality in the first half has become intercession in the second.',
  ],

  bottomShare: {
    label: 'Share Genesis 18',
    quote:
      'Abraham welcomed three strangers with water, shade, and bread, not knowing they were divine messengers come to promise him a son and to reveal God\'s judgment. His generosity at noon opened a doorway to intercession at sunset.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 18 · Study Guide',
  },

  sections: [
    /* ─── Genesis 18:1–8 — Hospitality at Mamre ──────────────────────── */
    {
      ref: 'Genesis 18:1–8',
      title: 'The Visitors at Noon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD appeared unto him in the '),
                hg('plains of Mamre', 'c-mamre'),
                t(': and he sat in the tent door in the heat of the day;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he lift up his eyes and looked, and, lo, '),
                hg('three men stood by him', 'c-three-men'),
                t(': and when he saw them, he ran to meet them from the tent door, and bowed himself toward the ground,'),
              ],
            },
            {
              number: 3,
              spans: [t('And said, My Lord, if now I have found favour in thy sight, pass not away, I pray thee, from thy servant:')],
            },
            {
              number: 4,
              spans: [
                t('Let a little water, I pray you, be fetched, and '),
                hg('wash your feet', 'c-wash'),
                t(', and rest yourselves under the tree:'),
              ],
            },
            {
              number: 5,
              spans: [t('And I will fetch a morsel of bread, and comfort ye your hearts; after that ye shall pass on: for therefore are ye come to your servant. And they said, So do, as thou hast said.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mamre',
          html:
            'Mamre is a sacred place — an oak grove where God has appeared to Abraham before (Gen. 13:18). Abraham is not taken off guard by divine presence. He is waiting for it, because he has learned to recognize the place where God walks.',
        },
        {
          kind: 'commentary',
          id: 'c-three-men',
          html:
            'Three strangers. No fanfare. Abraham sees them coming and runs toward them before he knows who they are. Hospitality in the ancient world was not a feeling — it was an action, a risk, a commandment. You fed the stranger. You gave water. You did not wait for them to explain themselves; you moved first.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-eshel',
          title: 'Eshel — &ldquo;tree at Mamre&rdquo;',
          script: 'אֵשֶׁל',
          translit: '<strong>eshel</strong> · a tree; a waystop with a well',
          description:
            'Genesis 18:4 mentions Abraham fetching water and resting them under a tree. Verse 8 implies bread and a prepared meal. The <em>eshel</em> becomes iconic in Jewish tradition as a sign of Abraham\'s hospitality — not just shelter but a threshold between the wilderness and rest, where strangers become guests and guests may become angels.',
        },
        {
          kind: 'commentary',
          id: 'c-wash',
          html:
            'Washing feet was an intimate act of service — the master\'s task for a slave. Abraham offers it to strangers. He does not know their rank or station. He simply meets need with his own hands.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 6,
              spans: [t('And Abraham hastened into the tent unto Sarah, and said, Make ready quickly three measures of fine meal, knead it, and make cakes upon the hearth.')],
            },
            {
              number: 7,
              spans: [t('And Abraham ran unto the herd, and fetcht a calf tender and good, and gave it unto a young man; and he hasted to dress it.')],
            },
            {
              number: 8,
              spans: [t('And he took butter, and milk, and the calf which he had dressed, and set it before them; and he stood by them under the tree, and they did eat.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-haste',
          html:
            'Five times in these verses — verses 6, 7 (twice), and implicit in verse 8 — Abraham rushes. He hastens, he runs, his servant hurries. This is not slow hospitality. This is eager service. Abraham is not calculating the cost or wondering if these strangers deserve a calf. He is moving as fast as his hands can move.',
        },
        {
          kind: 'carry',
          html:
            'The strangers at your door come in many forms — the coworker who says something hurtful and you have to choose whether to hear them, the relative whose politics make your jaw tight, the person who smells like need and you want to cross the street. Genesis 18 is not naive about who strangers are. It is ruthlessly clear: feed them anyway. Fetch the water. Prepare the meal. Bow low. Let them sit under your tree. Abraham didn\'t know what he was doing. He only knew it was the shape of hospitality to move first.',
        },
        {
          kind: 'reflection',
          id: 'gen18-hospitality',
          prompt:
            'Who is standing by your tent door right now — someone you want to serve, someone you want to avoid, someone you don\'t yet recognize? What would it look like to offer them water?',
        },
        {
          kind: 'artwork',
          matchTitle: /abraham|hospitality/i,
          matchArtist: /rublev|tissot/i,
          caption: 'Genesis 18:1–8 · Hospitality at Mamre',
        },
      ],
    },

    /* ─── Genesis 18:9–15 — Sarah\'s Laughter ────────────────────────── */
    {
      ref: 'Genesis 18:9–15',
      title: 'The Promise and the Laugh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 9,
              spans: [t('And they said unto him, Where is Sarah thy wife? And he said, Behold, in the tent.')],
            },
            {
              number: 10,
              spans: [
                t('And he said, I will certainly return unto thee '),
                hg('according to the time of life', 'c-appointed-time'),
                t('; and, lo, Sarah thy wife shall have a '),
                hp('son', 'christ-seed-promise'),
                t('. And Sarah heard it in the tent door, which was behind him.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Now Abraham and Sarah were old and well stricken in age; and it ceased to be with Sarah after the manner of women.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Therefore '),
                hy('Sarah laughed', 'hebrew-tsachaq'),
                t(' within herself, saying, After I am waxed old shall I have pleasure, my lord being old also?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-appointed-time',
          html:
            'The phrase is not vague. It means within a year. The promise is not left to someday, some unspecified future. It is given with a date. Abraham is ninety-nine. Sarah is ninety. They have been waiting twenty-five years for this child. And now, a voice in the tent gives them a number.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsachaq',
          title: 'Tsachaq — &ldquo;laughed&rdquo;',
          script: 'צָחַק',
          translit: '<strong>tsachaq</strong> · to laugh, to play, to rejoice',
          description:
            'This is the root of Isaac\'s name — Yitzchak. The child himself will be a "laughter," a living joke that God makes with the world. Sarah\'s laugh is not simple mockery. It is the laugh of the impossible. And the child she bears will carry that laugh in his name forever.',
        },
        {
          kind: 'commentary',
          id: 'c-sarah-laugh',
          html:
            'Don\'t moralize Sarah\'s laughter. She is ninety. Her husband is ninety-nine. The thing she has wanted for twenty-five years is being promised to her <em>now</em>, when her body says no, when every year has said no. Her laugh is the sound of hope and disbelief braided together. It is the sound of someone who has learned not to believe, suddenly being asked to believe.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 13,
              spans: [
                t('And the LORD said unto Abraham, Wherefore did Sarah laugh, saying, Shall I of a surety bear a child, which am so old?'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Is any thing '),
                hg('too hard for the LORD', 'hebrew-peliy'),
                t('? At the time appointed I will return unto thee, according to the time of life, and Sarah shall have a son.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Then Sarah denied, saying, I laughed not; for she was afraid. And he said, Nay; but thou didst laugh.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-peliy',
          title: 'Peliy — &ldquo;hidden from&rdquo; / impossible',
          script: 'פֶּלִיא',
          translit: '<strong>peliy</strong> · too hard, too wonderful, hidden from',
          description:
            'The question "Is anything too hard for the LORD?" contains the idea of something being hidden from God — but the question reverses it. Nothing can be hidden from Him. There is no limitation He has not already surpassed. The question is not about God\'s power; it is about what Sarah believes about His power.',
        },
        {
          kind: 'carry',
          html:
            'You have things you stopped believing were possible. Things you wanted and watched fade year after year. Things you laugh at now because laughing is easier than hope. Genesis 18:14 asks if anything is hidden from God — too hard, too late, too broken. The answer the text is giving is no. Nothing. But the question is not really about God\'s power. It is about whether you will let yourself hope again.',
          },
        {
          kind: 'reflection',
          id: 'gen18-laugh',
          prompt:
            'What did you stop hoping for because it took too long? What would it cost you to let yourself believe again?',
        },
      ],
    },

    /* ─── Genesis 18:16–21 — The Disclosure ──────────────────────────── */
    {
      ref: 'Genesis 18:16–21',
      title: 'Shall I Hide From Him?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 16,
              spans: [t('And the men rose up from thence, and looked toward Sodom: and Abraham went with them to bring them on the way.')],
            },
            {
              number: 17,
              spans: [
                t('And the LORD said, '),
                hp('Shall I hide from Abraham that thing which I do', 'christ-disclosure'),
                t(';'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Seeing that Abraham shall surely become a great and mighty nation, and all the nations of the earth shall be blessed in him?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('For I know him, that he will command his children and his household after him, and they shall keep the way of the LORD, to do justice and judgment; that the LORD may bring upon Abraham all that he hath spoken of him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-disclosure',
          html:
            'The question "Shall I hide from Abraham?" is not actually a question. It is a declaration. God does not hide His plans from His covenant partner. Abraham is not just an observer of God\'s plan. He is brought into it. He is told what God is about to do before it happens. This is the intimacy of covenant.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yada',
          title: 'Yada — &ldquo;I know him&rdquo;',
          script: 'יָדַע',
          translit: '<strong>yada</strong> · to know, to be intimate with',
          description:
            'God says "I know Abraham" — <em>yada</em>, the covenant word of intimate knowledge. This is not distant omniscience. This is the knowledge lovers have, the knowledge a shepherd has of his flock. Knowing, in the Bible, is being bound together. When God says He knows Abraham, He is saying Abraham is His, and God is Abraham\'s.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 20,
              spans: [t('And the LORD said, Because the cry of Sodom and Gomorrah is great, and because their sin is very grievous;')],
            },
            {
              number: 21,
              spans: [
                t('I will go down now, and see whether they have done altogether according to the cry of it, which is come unto me; and if not, '),
                hg('I will know', 'c-know-sodom'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-know-sodom',
          html:
            'God says He will "go down and see" — the language is anthropomorphic, but it is also real. God does not judge from a distance or from report. He comes to the place. He looks. He knows by presence, not by hearsay. The cry of Sodom has reached Him, and before judgment falls, He will see for Himself.',
        },
        {
          kind: 'carry',
          html:
            'God does not hide His plans from those He loves. He brings them in. He tells them what is coming — not to spectate, but to pray, to intercede, to become part of how He moves in the world. If you are walking with God, the big things coming are not secrets kept from you. They are invitations.',
          },
        {
          kind: 'reflection',
          id: 'gen18-disclosure',
          prompt:
            'What is God currently showing you about His plans — for your family, your community, the world? What is He inviting you to do about it?',
        },
      ],
    },

    /* ─── Genesis 18:22–33 — Abraham Bargains ────────────────────────── */
    {
      ref: 'Genesis 18:22–33',
      title: 'The Negotiation for Sodom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 22,
              spans: [
                t('And the men turned their faces from thence, and went toward Sodom: but '),
                hg('Abraham stood yet before the LORD', 'c-standing'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Abraham drew near, and said, Wilt thou also destroy the righteous with the wicked?'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Peradventure there be fifty righteous within the city: wilt thou also destroy and not spare the place for the fifty righteous that are therein?'),
              ],
            },
            {
              number: 25,
              spans: [
                t('That be far from thee to do after this manner, to slay the righteous with the wicked: and that the righteous should be as the wicked, that be far from thee: Shall not the Judge of all the earth do right?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-standing',
          html:
            '"Abraham stood yet before the LORD" — while the strangers walk toward Sodom, Abraham remains before God. He does not walk away. He does not accept the judgment as final. He stands in the gap. This is what intercession looks like: the willingness to stand between God and the judgment, and to plead.',
        },
        {
          kind: 'commentary',
          id: 'c-bargain-start',
          html:
            'Abraham does not ask God to spare Sodom because Sodom is good. He asks Him to spare it because there are righteous people in it. His logic is: don\'t let the innocent pay for the guilty. It is a just prayer, grounded in the character of God. And he begins with fifty righteous people — a hypothesis, really. A number that might be true.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 26,
              spans: [t('And the LORD said, If I find in Sodom fifty righteous within the city, then I will spare all the place for their sakes.')],
            },
            {
              number: 27,
              spans: [
                t('And Abraham answered and said, Behold now, I have taken upon me to speak unto the Lord, which am but dust and ashes:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Peradventure there shall lack five of the fifty righteous: wilt thou destroy all the city for lack of five? And he said, If I find there forty and five, I will not destroy it.'),
              ],
            },
            {
              number: 29,
              spans: [t('And he spake unto him yet again, and said, Peradventure there shall be forty found there. And he said, I will not do it for forty&apos;s sake.')],
            },
            {
              number: 30,
              spans: [
                t('And he said, Oh let not the Lord be angry, and I will speak: Peradventure there shall thirty be found there. And he said, I will not do it, if I find thirty there.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And he said, Behold now, I have taken upon me to speak unto the Lord: Peradventure there shall be twenty found there. And he said, I will not destroy it for twenty&apos;s sake.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And he said, Oh let not the Lord be angry, and I will speak yet but this once: Peradventure ten shall be found there. And he said, I will not destroy it for ten&apos;s sake.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bargain-down',
          html:
            'Abraham bargains. Fifty to forty-five to forty to thirty to twenty to ten. Each time the Lord agrees. The bargaining is not adversarial; it is relational. Abraham is testing the limits of God\'s mercy. And each time, God holds the line: <em>for ten\'s sake I will not destroy it.</em> Ten righteous people. That is the threshold of God\'s mercy. Ten people are enough.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 33,
              spans: [
                t('And the LORD went his way, as soon as he had left communing with Abraham: and Abraham returned unto his place.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'Abraham learns that God is not eagerly waiting for reasons to destroy. He is listening for reasons to spare. And not only listening — he is in conversation about it. God is swayed by intercession. He does not ask Abraham to stop asking. He keeps saying yes to the prayer to spare, yes to the mercy, yes to the smaller and smaller number of righteous that might forestall judgment. The prayer of someone who stands for others changes things.',
          },
        {
          kind: 'reflection',
          id: 'gen18-intercession',
          prompt:
            'Who in your world needs someone to stand in the gap for them? What would it look like to pray for them with the persistence of Abraham?',
        },
        {
          kind: 'christ',
          id: 'christ-intercessor',
          title: 'Christ Connection — The Intercessor',
          html:
            'Abraham stands before the LORD and pleads for the city. The epistle to the Hebrews says of Jesus, "he ever liveth to make intercession for them" (Heb. 7:25). What Abraham does once — stand before God and ask for mercy on those who do not deserve it — Christ does continually. He is the righteous one standing between God\'s judgment and the world, asking for it to be spared. Where Abraham pleads for ten righteous to spare a city, Christ is the One Righteous standing for all of creation.',
        },
        {
          kind: 'artwork',
          matchTitle: /abraham|mamre|visitors|three/i,
          matchArtist: /rublev/i,
          caption: 'Genesis 18:22–33 · Abraham\'s Prayer',
        },
      ],
    },
  ],
};
