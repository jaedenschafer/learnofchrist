import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 9 — Creation relaunched after judgment, but humanity's sin
 * has come through the flood with us. Covenant after catastrophe, and the first
 * sign that the new world has the same problem as the old.
 *
 * The chapter divides cleanly: covenant with creation (vv.1–7), the rainbow
 * sign (vv.8–17), Noah's nakedness (vv.18–23), Canaan's curse and Shem's
 * blessing (vv.24–29).
 */
export const GENESIS_9: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 9,

  intros: [
    'Noah steps out of the ark to a silent world. One family, eight souls, and the command to begin again. God speaks to him the way He spoke to Adam: be fruitful, multiply, fill the earth. It is Genesis 1 all over again — except for one thing. The flood that was supposed to wash creation clean did not wash humanity clean. Sin got on the ark.',
    'Read this chapter twice and you will see it. The first half is covenant — God drawing a line, making a promise, hanging His bow in the sky as a sign that judgment will not come again by water. But by verse 18, as soon as the ink dries on the covenant, Noah plants, drinks, gets drunk, and everything East of Eden is back. The new world inherited the old problem. Only a different kind of Flood, on a different hill, two thousand years later, would fix that.',
  ],

  bottomShare: {
    label: 'Share Genesis 9',
    quote:
      'After the flood, God makes a covenant: Be fruitful. Multiply. The blood of life cannot be shed carelessly. And the rainbow in the cloud is My sign that I will not destroy the earth with water again. Yet by the chapter\'s end, humanity\'s sin surfaces anew — the flood changed the world, but it did not change the human heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 9 · Study Guide',
  },

  sections: [
    /* ─── Genesis 9:1–7 — The Renewed Creation Mandate ──────────────────── */
    {
      ref: 'Genesis 9:1–7',
      title: 'The Renewed Creation Mandate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('And God blessed Noah and his sons, and said unto them, '),
                hg('Be fruitful, and multiply, and replenish the earth', 'c-creation-echo'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And '),
                hg('the fear of you and the dread of you shall be upon every beast of the earth', 'c-dominion-shifted'),
                t(', and upon every fowl of the air, upon all that moveth upon the earth, and upon all the fishes of the sea; into your hand are they delivered.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Every moving thing that liveth shall be '),
                hg('meat for you', 'c-diet-changed'),
                t('; even as the green herb have I given you all things.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-creation-echo',
          html:
            'God speaks the exact words He spoke to Adam and Eve: <em>Be fruitful, and multiply.</em> The covenant opens with an echo of Genesis 1. Creation is being rebooted. The flood is not the end of the story — it is judgment folded into a fresh start.',
        },
        {
          kind: 'commentary',
          id: 'c-dominion-shifted',
          html:
            'In Genesis 1, humanity rules by making space, blessing, naming things good. Here the language has hardened: <em>fear</em> and <em>dread.</em> The animals will no longer live at peace with their image-bearing cousins. Something in the human heart has changed, and the animals know it. The world after the flood is not as innocent as the world before.',
        },
        {
          kind: 'commentary',
          id: 'c-diet-changed',
          html:
            'Before the flood, humans were vegetarians. God said, &ldquo;Behold, I have given you every herb bearing seed&rdquo; (Genesis 1:29). Now, after the flood, meat enters the human diet. It is a sign of a broken world — killing is now necessary for survival. God permits it, but the permission itself marks how far the world has fallen.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 4,
              spans: [
                t('But '),
                hy('flesh with the life thereof, which is the blood thereof, shall ye not eat', 'hebrew-blood'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And surely '),
                hp('your blood of your lives will I require', 'christ-blood-value'),
                t('; at the hand of every beast will I require it, and at the hand of man; at the hand of every man\'s brother will I require the life of man.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-blood',
          title: 'Dam — &ldquo;blood&rdquo;',
          script: 'דָּם',
          translit: '<strong>dam</strong> · blood; the seat of life itself',
          description:
            'Blood cannot be eaten because blood is life. The Israelites will hear this prohibition over and over (Lev. 3:17, 7:26). The blood of sacrifice will become the sign of covenant. And in the New Testament, Christ\'s blood — poured out, never eaten carelessly — becomes the cost of redemption.',
        },
        {
          kind: 'commentary',
          id: 'c-murder-consequence',
          html:
            'The text turns dark here. Murder is introduced — &ldquo;at the hand of man.&rdquo; Cain killed Abel before the flood and was marked. After the flood, God institutes the principle that will echo through all human law: the shedding of human blood demands an accounting. <em>Your blood of your lives will I require.</em> The world after judgment is governed not only by blessing but by the gravity of consequence.',
        },
        {
          kind: 'christ',
          id: 'christ-blood-value',
          title: 'Christ Connection — Blood That Redeems',
          html:
            'God establishes in this verse what blood means: it is the price of life. Centuries later, every animal sacrificed in the tabernacle and temple will witness to this — blood poured out for sin, blood that covers. Paul names it directly: &ldquo;Without shedding of blood is no remission&rdquo; (Heb. 9:22). And in the Supper, Jesus hands His disciples the cup: &ldquo;This is my blood of the covenant, which is shed for many for the remission of sins&rdquo; (Matt. 26:28). The value God places on human blood — yours, mine, every person\'s — is so high that only God\'s own blood can redeem it.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 6,
              spans: [
                t('Whoso sheddeth man\'s blood, by man shall his blood be shed: for in the '),
                hy('image of God', 'c-image-restated'),
                t(' made he man.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And you, be ye fruitful, and multiply; bring forth abundantly in the earth, and multiply therein.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-image-restated',
          html:
            'Genesis 1 said it. Genesis 9 repeats it: image-of-God dignity is the reason the shedding of human blood carries the weight it does. Murder is not a violation of a rule; it is an assault on God\'s image. The foundation of human dignity is restated after the flood exactly when the world needs it most — in a moment when humanity is starting to doubt that anything in the world is sacred anymore.',
        },

        {
          kind: 'carry',
          html:
            'The person across from you — at work, on the street, in the mirror — bears God\'s image. That is not a feeling, not something to earn. Genesis says it twice now, centuries apart, and each time something broken is happening in the world. That person at the grocery store you do not know, whose politics oppose yours, whose life choices mystify you — they are a living image God has set up in His world. Whatever love costs you today, it costs less than the blood God shed to say that image was worth dying for.',
        },
        {
          kind: 'reflection',
          id: 'gen9-image',
          prompt:
            'Who in your life are you struggling to see as God\'s image right now? What would change if you truly believed their image is as sacred as the image you see in the mirror?',
        },
        {
          kind: 'artwork',
          matchTitle: /noah.*covenant/i,
          caption: 'Genesis 9:1–7 · Covenant Renewed',
        },
      ],
    },

    /* ─── Genesis 9:8–17 — The Covenant and the Bow ──────────────────────── */
    {
      ref: 'Genesis 9:8–17',
      title: 'The Rainbow Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 8,
              spans: [
                t('And God spake unto Noah, and to his sons with him, saying, '),
                hg('And I, behold, I establish my covenant with you', 'c-covenant-established'),
                t(', and with your seed after you;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And with every living creature that is with you, of the fowl, of the cattle, and of every beast of the earth with you; from all that go out of the ark, to every beast of the earth.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And I will establish my covenant with you; neither shall all flesh be cut off any more by the waters of a flood; neither shall there any more be a flood to destroy the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant-established',
          html:
            'God uses the word <em>berit</em> — covenant — seven times in the next eight verses. A covenant is not a negotiation; it is a promise God makes and seals. This one has no conditions. God will never destroy the earth by water again. The sign of it will hang in the sky every time it rains — a visible reassurance that this threat will not come again.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 11,
              spans: [
                t('And God said, This is the token of the covenant which I make between me and you and every living creature that is with you, for perpetual generations:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('I do set '),
                hy('my bow in the cloud', 'hebrew-qeshet'),
                t(', and it shall be for a token of a covenant between me and the earth.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And it shall come to pass, when I bring a cloud over the earth, that the bow shall be seen in the cloud:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And I will remember my covenant, which is between me and you and every living creature of all flesh; and the waters shall no more become a flood to destroy all flesh.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the bow shall be in the cloud; and I will look upon it, that I may remember the everlasting covenant between God and every living creature of all flesh that is upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qeshet',
          title: 'Qeshet — &ldquo;bow, rainbow&rdquo;',
          script: 'קֶשֶׁת',
          translit: '<strong>qeshet</strong> · bow (for shooting); rainbow',
          description:
            'The same Hebrew word means both the weapon of war — an archer\'s bow — and the rainbow in the sky. God takes His war-bow and hangs it in the cloud pointing upward, away from the earth. The instrument of judgment is pointed toward heaven now, not toward us.',
        },
        {
          kind: 'commentary',
          id: 'c-bow-means',
          html:
            'The Hebrew is stunning. God puts <em>His bow</em> in the sky. The bow that shoots arrows of judgment is hung up — pointed away. Every time the sky fills with water and light, the covenant appears. God will remember. The flood will not come again.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 16,
              spans: [
                t('And the bow shall be in the cloud; and I will look upon it, that I may remember the everlasting covenant between God and every living creature of all flesh that is upon the earth.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And God said unto Noah, This is the token of the covenant, which I have established between me and all flesh that is upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-remembering',
          html:
            'God says <em>I will remember</em> twice. Not because He forgets — because He is making a public sign. The covenant is not invisible or private. It hangs in the sky after every storm. Every person on earth, seeing a rainbow, is looking at God\'s word.',
        },
        {
          kind: 'christ',
          id: 'christ-rainbow-wrath',
          title: 'Christ Connection — The Wrath We Will Not Bear',
          html:
            'In the last book of the Bible, John sees a vision of the throne of God, and there is a rainbow encircling it (Rev. 4:3). The bow pointed away from earth is still there. Later, Jesus appears to John with feet "as if they burned in a furnace" and a rainbow on His head (Rev. 10:1). The One who paid the price for sin stands where wrath could have fallen, bearing it Himself. Isaiah called it: &ldquo;the chastisement of our peace was upon him; and with his stripes we are healed&rdquo; (Isa. 53:5). The water-flood will never judge the earth again — but the blood-flood of the cross absorbed the judgment that was meant for us.',
        },
        {
          kind: 'carry',
          html:
            'Every storm carries a promise. When the rain comes and you are afraid, when the dark sky fills with water, you are looking at God\'s covenant word made visible. The flood will not come again. In the same way, whatever judgment you carry — whatever you know you deserve — was borne by the One who could not escape it. The wrath you fear is not coming for you; it came on the hill outside Jerusalem, where His blood soaked the ground.',
        },
        {
          kind: 'reflection',
          id: 'gen9-rainbow',
          prompt:
            'What judgment do you fear? What would it look like to actually believe the wrath is not coming for you — that it came on Him?',
        },
        {
          kind: 'artwork',
          matchTitle: /rainbow|bow/i,
          matchArtist: /noah/i,
          caption: 'Genesis 9:8–17 · The Rainbow Covenant',
        },
      ],
    },

    /* ─── Genesis 9:18–23 — Noah\'s Drunkenness ────────────────────────── */
    {
      ref: 'Genesis 9:18–23',
      title: 'The First Wine and the Second Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 18,
              spans: [
                t('And the sons of Noah, that went forth of the ark, were Shem, and Ham, and Japheth: and '),
                hg('Ham is the father of Canaan', 'c-ham-canaan'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('These are the three sons of Noah: and of them was the whole earth overspread.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Noah began to be an '),
                hg('husbandman, and he planted a vineyard', 'c-vineyard-planted'),
                t(':'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he drank of the wine, and was '),
                hg('drunken', 'c-drunken'),
                t('; and he was uncovered within his tent.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Ham, the father of Canaan, '),
                hg('saw the nakedness of his father', 'c-saw-nakedness'),
                t(', and told his two brethren without.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Shem and Japheth took a garment, and laid it upon both their shoulders, and went backward, and '),
                hg('covered the nakedness of their father', 'c-covered-father'),
                t('; and their faces were backward, and they saw not their father\'s nakedness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ham-canaan',
          html:
            'The text moves fast. Creation renewed. Covenant sealed. And then: <em>Noah began to be a husbandman, and he planted a vineyard.</em> The same man who walked with God and was saved from the flood now gets drunk on the fruit of his own hands. One verse after the covenant is made — while the rainbow is still visible in the sky — sin resurfaces.',
        },
        {
          kind: 'commentary',
          id: 'c-vineyard-planted',
          html:
            'Noah does what all of us do in a broken world: he works the ground, plants, tends, harvests. This is not wrong. But he does it in a world where sin came through the flood. The vineyard is a blessing, but in human hands, blessings are often unraveled.',
        },
        {
          kind: 'commentary',
          id: 'c-drunken',
          html:
            'The man who had the greatest reason to celebrate God\'s faithfulness — he was alive, his whole family was alive, the covenant was made — gets drunk on wine and collapses inside his tent. Do not moralize this. Genesis does not. The text simply reports it. The flood was supposed to cleanse creation of evil. But evil came through the ark in human hearts.',
        },
        {
          kind: 'commentary',
          id: 'c-saw-nakedness',
          html:
            'Ham <em>sees</em> his father\'s nakedness. The text is careful about what it names and what it leaves unsaid. Ham does not cover; he tells. The commentaries have circled this moment for centuries, but the text does not accuse Ham of assault. It says he saw and told. The shame spreads because of what he says — not because of the act of seeing alone.',
        },
        {
          kind: 'commentary',
          id: 'c-covered-father',
          html:
            'Shem and Japheth do something different. They take a garment, walk backward so they do not see, and cover him. The same action Adam and Eve performed on themselves — making coverings for shame — is now performed by sons for a father. Shame in a family spreads or is healed based on whether we speak it or cover it.',
        },
        {
          kind: 'carry',
          html:
            'You have seen this in a family, perhaps in your own. A person falters. News spreads fast — told in hallways, in texts, in tones. Or it is borne by those who will not speak it. The flood did not change the nature of human failure. It did not make us good. But something in how we respond to the failure of someone we love — speaking it or covering it — shapes the entire story that comes after.',
        },
        {
          kind: 'reflection',
          id: 'gen9-drunken',
          prompt:
            'When you see someone you respect stumble — a parent, a leader, a friend — do you tell, or do you cover? What difference does that choice make in their story and in yours?',
        },
      ],
    },

    /* ─── Genesis 9:24–29 — Curse and Blessing ────────────────────────── */
    {
      ref: 'Genesis 9:24–29',
      title: 'The Curse of Canaan, the Blessing of Shem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 24,
              spans: [
                t('And Noah awoke from his wine, and knew what his younger son had done unto him.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And he said, '),
                hg('Cursed be Canaan', 'c-canaan-curse'),
                t('; a servant of servants shall he be unto his brethren.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And he said, Blessed be the LORD God of Shem; and '),
                hp('Canaan shall be his servant', 'c-shem-blessed'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('God shall enlarge Japheth, and he shall dwell in the tents of Shem; and Canaan shall be his servant.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-canaan-curse',
          html:
            'Here is the moment that has been weaponized by generations to justify slavery based on race. Read carefully: the curse falls on <em>Canaan</em>, the grandson — the line that will become the Canaanites, the peoples who occupied the land before Israel entered it. The curse is not on Ham, not on race, not on Africa. It is on Canaan, a specific nation. The text does not say why or what Canaan did. It only says that the violation of a father — whether by Ham or Canaan — carries consequences into the next generation. This is tribal ancient Near Eastern thinking, not a racial curse that spans millennia. Misreading this verse to justify slavery is a misreading, not a biblical one.',
        },
        {
          kind: 'commentary',
          id: 'c-shem-blessed',
          html:
            'While one son faces curse, Shem receives blessing. He will be the ancestor of Abraham, the line through which the covenant moves forward. Japheth too is enlarged. The blessing spreads. What the text is showing is the principle that will echo through the rest of Genesis: your response to others\' failure shapes your own future and the future of your line.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 28,
              spans: [
                t('And Noah lived after the flood three hundred and fifty years.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And all the days of Noah were nine hundred and fifty years: and he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-death-comes',
          html:
            'The flood changes the lifespans. Adam lived 930 years. Noah lived 950, the longest in the Bible. But Genesis counts down now. The descendants will live shorter. Methuselah was already the oldest before the flood, but the pattern is clear: time is shortening. Humanity will not live forever. Death came through the Fall, and the flood did not reverse it.',
        },
        {
          kind: 'christ',
          id: 'christ-second-covenant',
          title: 'Christ Connection — A Better Covering, A Better Covenant',
          html:
            'This chapter shows what Noah cannot do: he cannot save himself or his family from the brokenness that came through the flood. He plants, drinks, falls. His sons respond with shame or revelation. The cycle of human failure continues. But Acts 14:17 records what Peter preached: that God &ldquo;left not himself without witness, in that he did good, and gave us rain from heaven, and fruitful seasons, filling our hearts with food and gladness.&rdquo; The rainbow covenant is real. But it is also a sign pointing forward — to a covenant that does not depend on human effort or shame-managing, but on blood spilled and a life raised. Jesus came and did what Noah could not: broke the cycle of the human heart by entering into judgment and rising out the other side.',
        },
        {
          kind: 'carry',
          html:
            'You are a child of Noah\'s world — the world after judgment, after covenant, after the flood. The world still broken. You will plant vineyards. You will fall. People will see, and you will see them fall too. The difference between a life of hiding and a life of grace is often just the question Shem and Japheth had to answer: Will I cover, or will I tell? The God who walked with Noah walks with you. The covenant is still in the sky.',
        },
        {
          kind: 'reflection',
          id: 'gen9-canaan',
          prompt:
            'Where in your own life are you continuing patterns of blame, of speaking shame instead of covering it with grace? What would it look like to be a Shem in someone\'s story today?',
        },
        {
          kind: 'artwork',
          matchTitle: /noah/i,
          caption: 'Genesis 9:24–29 · Curse and Blessing',
        },
      ],
    },
  ],
};
