import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 24 - the longest chapter in Genesis (67 verses). Abraham sends his
 * unnamed servant to find a wife for Isaac from his own people. The servant
 * prays at the well of Nahor. Rebekah arrives and waters ten camels - meaning
 * a lot of water. The family's blessing. Isaac meets Rebekah at evening in the field.
 *
 * This chapter is a love story that is also a theological pattern: a father
 * sends his servant to bring back a bride for his son. The chapter moves slow,
 * like a wedding. Almost every element has been chosen. Nothing is rushed.
 */
export const GENESIS_24: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 24,

  estimatedMinutes: { beginner: 13, intermediate: 18, deep: 22 },
  opener: {
    matchTitle: /Abraham/i,
    caption: 'Genesis 24',
  },
  intros: [
    'Abraham is old. His son Isaac still has no wife. In the ancient Near East, this is a crisis - the line of the promise dies with him. But Abraham does not panic. He calls his oldest servant, the man who manages everything he owns, and sends him on a journey to find a wife for Isaac among Abraham\'s own people, far to the east in Mesopotamia. The servant must swear an oath: go, find a wife, bring her back.',
    'What follows is a chapter of divine providence so tender and particular that every detail feels chosen. A prayer at a well. A young woman who answers the prayer before the prayer is even finished. Water enough for ten camels - backbreaking work done by one girl with a pitcher. A family who blesses her and lets her go. And at the end, Isaac meeting Rebekah in the evening field, the two of them alone together for the first time.',
    'Centuries later, Christians would read this chapter as a picture: the Father sends His Servant (the Spirit) to call out a bride [res:bibleodyssey-rebekah-isaac] (the Church) for the Son (Christ), with gifts and promises, and the bride says "I will go" without having seen the bridegroom. But the chapter does not announce this. It simply tells the story, slow and beautiful, the way a wedding unfolds.',
  ],

  bottomShare: {
    label: 'Share Genesis 24',
    quote:
      'Abraham\'s servant prays at the well for a sign, and Rebekah arrives and waters his camels. Her family blesses her, and she goes with the servant to marry Isaac. In the evening field, Isaac meets her and loves her.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 24 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-24',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 24 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.24',
      description: 'Hebrew text with rabbinic commentary on providence, the finding of Rebekah, and covenant kinship.',
    },
    {
      id: 'pennmuseum-mesopotamia-customs',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Ancient Mesopotamian Marriage and Family Customs',
      url: 'https://www.penn.museum/collections/west-asia/',
      description: 'Ancient Near Eastern documents on betrothal, servant missions, and matrimonial customs in Abraham&apos;s era.',
    },
    {
      id: 'bibleodyssey-rebekah-isaac',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Isaac and Rebekah: The Covenant Bride',
      url: 'https://www.bibleodyssey.org/articles/isaac-rebekah/',
      description: 'SBL article on divine providence, Rebekah&apos;s journey, and the relationship as a type of Christ and the Church.',
    },
  ],

  sections: [
    /* ─── Genesis 24:1-9 - The Oath and the Mission ──────────────────── */
    {
      ref: 'Genesis 24:1-9',
      title: 'The Oath and the Mission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 1,
              spans: [
                t('And Abraham was '),
                hg('old, and well stricken in age', 'gen24-old'),
                t(': and the LORD had blessed Abraham in all things.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Abraham said unto his eldest servant of his house, that ruled over all that he had, Put, I pray thee, thy hand under my thigh:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And I will make thee '),
                hg('swear by the LORD, the God of heaven, and the God of the earth', 'gen24-oath'),
                t(', that thou shalt not take a wife unto my son of the daughters of the Canaanites, among whom I dwell:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But thou shalt go unto my country, and to my kindred, and take a wife unto my son Isaac.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-servant-journey',
          html:
            'The servant is sent on his mission; now he moves toward Rebekah, the answer to Abraham&apos;s prayer.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 5,
              spans: [
                t('And the servant said unto him, Peradventure the woman will not be willing to follow me unto this land: must I then bring thy son again unto the land from whence thou camest?'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Abraham said unto him, Beware thou that thou bring not my son thither again.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('The LORD God of heaven, which took me from my father\'s house, and from the land of my kindred, and which spake unto me, and that sware unto me, saying, Unto thy seed will I give this land; he shall send his angel before thee, and thou shalt take a wife unto my son from thence.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And if the woman will not be willing to follow thee, then thou shalt be clear from this oath of mine: only bring not my son thither again.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the servant put his hand under the thigh of Abraham his master, and sware to him concerning this matter.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-old',
          html:
            'Abraham is very old now - Genesis 17 set him at ninety when Isaac was born, so Abraham is now at least a hundred and thirty. He is not thinking of himself anymore. He is thinking of the promise God made him: a seed as numerous as the stars. That seed cannot continue if Isaac remains alone[res:sefaria-genesis-24][res:pennmuseum-mesopotamia-customs].',
        },
        {
          kind: 'commentary',
          id: 'gen24-oath',
          html:
            'The oath is not about fear or control. It is about identity. Abraham wants his son to marry someone from his own people, not from the Canaanites among whom he dwells. Later Scripture will show why: the Canaanite nations practice things Abraham\'s God calls abomination. Abraham is trying to protect his son\'s future children from that inheritance. The oath binds the servant to a mission that requires trusting God.',
        },
        {
          kind: 'carry',
          html:
            'When we pray for someone else\'s future - a child\'s choice of a partner, a friend\'s next season, a loved one\'s path - we are doing what Abraham is doing here. We cannot control the outcome. We can only set the boundary, make the oath, and trust that God sees what we cannot. The greatest gift a parent can give a child sometimes is not the answer, but the refusal to make the wrong choice for them.',
        },
        {
          kind: 'reflection',
          id: 'gen24-oath-refl',
          prompt:
            'Is there someone you love whose future you have been trying to control? What would it look like to set a boundary instead and trust God with the ending?',
        },
      ],
    },

    /* ─── Genesis 24:10-21 - The Prayer at the Well ─────────────────── */
    {
      ref: 'Genesis 24:10-21',
      title: 'The Prayer at the Well',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 10,
              spans: [
                t('And the servant took ten camels of the camels of his master, and departed; for all the goods of his master were in his hand: and he arose, and went to Mesopotamia, unto the city of Nahor.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he made his camels to kneel down without the city by a well of water at the time of the evening, even the time that women go out to draw water.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he said, O LORD God of my master Abraham, I pray thee, send me good speed this day, and shew '),
                hy('kindness', 'hebrew-chesed'),
                t(' unto my master Abraham.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Behold, I stand here by the well of water; and the daughters of the men of the city come out to draw water:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-servant-waits',
          html:
            'The servant stations himself; now he prays and watches-faith meets providence at the well.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 14,
              spans: [
                t('And let it come to pass, that the damsel to whom I shall say, Let down thy pitcher, I pray thee, that I may drink; and she shall say, Drink, and I will give thy camels drink also: let the same be she that thou hast appointed for thy servant Isaac; and thereby shall I know that thou hast shewed '),
                hy('kindness', 'hebrew-chesed'),
                t(' unto my master.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And before he had done speaking, behold, Rebekah came out, who was born to Bethuel, son of Milcah, the wife of Nahor, Abraham\'s brother, with her pitcher upon her shoulder.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the damsel was very fair to look upon, a virgin, neither had any man known her: and she went down to the well, and filled her pitcher, and came up.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the servant ran to meet her, and said, Let me, I pray thee, drink a little water of thy pitcher.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And she said, Drink, my lord: and she hasted, and let down her pitcher upon her hand, and gave him drink.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-camels-promise',
          html:
            'She says yes to his first request: Drink. And then, without being asked, she goes further. "I will draw water for thy camels also, until they have done drinking." This is the moment the servant is watching for. This is the sign. Not just kindness, but the kindness that sees beyond the immediate need to the burden that follows.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 19,
              spans: [
                t('And when she had given him drink, she said, I will draw water for thy camels also, until they have done drinking.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And she hasted, and emptied her pitcher into the trough, and ran again unto the well to draw water, and drew for all his camels.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the man wondering at her held his peace, to wit whether the LORD had made his journey prosperous or not.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chesed',
          title: 'Chesed - "kindness, loyalty, covenant love"',
          script: 'חֶסֶד',
          translit: '<strong>chesed</strong> · steadfast kindness, faithful love',
          description:
            'The servant prays for <em>chesed</em> twice in this section. It is the love that keeps a covenant, the loyalty that stays when easier options exist. The servant is not asking God to be lucky; he is asking God to show His faithful love to Abraham\'s family. And the answer arrives before the prayer is finished.',
        },
        {
          kind: 'commentary',
          id: 'gen24-well',
          html:
            'Notice the detail: Rebekah arrives <em>before he had done speaking</em> (v. 15). The prayer is not even complete and the answer is walking toward him. This is not coincidence dressed as narrative. This is a God who is listening, who knows what His people need before they ask, and who moves toward them with tenderness and specificity.',
        },
        {
          kind: 'commentary',
          id: 'gen24-camels',
          html:
            'Ten camels can drink thirty or forty gallons of water each. A well-fed camel drinks until it is full, and Rebekah does not turn the pitcher over to anyone else - she does the work herself, running back and forth, filling and refilling. This is not politeness. This is exhausting, backbreaking labor, the kind of service that tells you something about a person\'s character.',
        },
        {
          kind: 'carry',
          html:
            'Watch for the people in your life who serve without being asked to negotiate first, who see a need and move toward it. Rebekah does not say, "Well, I could try to help if you make it worth my while." She does not calculate the cost. She sees thirst - not just the man\'s but the camels\'s - and her hands move to meet it. That is the kind of generosity that changes everything.',
        },
        {
          kind: 'reflection',
          id: 'gen24-well-refl',
          prompt:
            'When was the last time you saw someone serve like Rebekah - without calculating, just moving toward the need? What did that teach you about what kindness actually looks like?',
        },
      ],
    },

    /* ─── Genesis 24:22-49 - Rebekah's Family ──────────────────────── */
    {
      ref: 'Genesis 24:22-49',
      title: 'The Family\'s Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 22,
              spans: [
                t('And it came to pass, as the camels had done drinking, that the man took a golden earring of half a shekel weight, and two bracelets for her hands of ten shekels weight of gold;'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And said, Whose daughter art thou? tell me, I pray thee: is there room in thy father\'s house for us to lodge in?'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And she said unto him, I am the daughter of Bethuel the son of Milcah, which she bare unto Nahor.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('She said moreover unto him, We have both straw and provender enough, and room to lodge in.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the man bowed down his head, and worshipped the LORD.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And he said, Blessed be the LORD God of my master Abraham, who hath not left destitute my master of his mercy and his truth: I being in the way, the LORD led me to the house of my master\'s brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-split-1',
          html:
            'The servant has blessed the LORD and known, beyond doubt, that this is Rebekah. Now the family must learn what the servant already sees. The questions at the well led to revelation. Now revelation must lead to hospitality-a family opening its home to a stranger with a purpose.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 28,
              spans: [
                t('And the damsel ran, and told them of her mother\'s house these things.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Rebekah had a brother, and his name was Laban: and Laban ran out unto the man, unto the well.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And it came to pass, when he saw the earring and bracelets upon his sister\'s hands, and when he heard the words of Rebekah his sister, saying, Thus spake the man unto me; that he came unto the man; and, behold, he stood by the camels at the well.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And he said, Come in, thou blessed of the LORD; wherefore standest thou without? for I have prepared the house, and room for the camels.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the man came into the house: and he ungirded his camels, and gave straw and provender for the camels, and water to wash his feet, and the feet of the men that were with him.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And there was set meat before him to eat: but he said, I will not eat, until I have told mine errand. And he said, Speak on.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-split-2',
          html:
            'Laban sees the gold and understands immediately: this is a betrothal journey. He welcomes the stranger and feeds him. Then the servant refusesto eat until he has told his errand. There is a protocol to this-the mission comes before the meal. Laban&apos;s hospitality is perfect, but it waits on the servant&apos;s words.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 34,
              spans: [
                t('And he said, I am Abraham\'s servant.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the LORD hath blessed my master greatly; and he is become great: and he hath given him flocks, and herds, and silver, and gold, and menservants, and maidservants, and camels, and asses.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And Sarah my master\'s wife bare a son to my master when she was old: and unto him hath he given all that he hath.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And my master made me swear, saying, Thou shalt not take a wife to my son of the daughters of the Canaanites, in whose land I dwell:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-24-78mid-1',
          html: 'The servant is sent on his mission, praying for a sign. At the well, Rebekah appears--and every detail aligns with his prayer.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 38,
              spans: [
                t('But thou shalt go unto my father\'s house, and to my kindred, and take a wife unto my son.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And I said unto my master, Peradventure the woman will not follow me.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And he said unto me, The LORD, before whom I walk, will send his angel with thee, and prosper thy way; and thou shalt take a wife for my son of my kindred, and of my father\'s house:'),
              ],
            },
            {
              number: 41,
              spans: [
                t('Then shalt thou be clear from this my oath, when thou comest to my kindred; and if they give not thee one, thou shalt be clear from my oath.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-split-3',
          html:
            'The servant has recounted the oath-the binding words Abraham made him swear. Now he will retell the miraculous moment at the well, when the prayer was answered before it was even finished. The retelling is a way of bearing witness. When you tell the story again, you invite others to see what you saw.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 42,
              spans: [
                t('And I came this day unto the well, and said, O LORD God of my master Abraham, if now thou do prosper my way which I go:'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Behold, I stand by the well of water; and it shall come to pass, that when the virgin cometh forth to draw water, and I say to her, Give me, I pray thee, a little water of thy pitcher to drink;'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And she say to me, Both drink thou, and I will also draw for thy camels: let the same be the woman whom the LORD hath appointed out for my master\'s son.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And before I had done speaking in mine heart, behold, Rebekah came forth with her pitcher on her shoulder; and she went down unto the well, and drew water: and I said unto her, Let me drink, I pray thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-24-78mid-2',
          html: 'Laban agrees, Rebekah says yes, and she journeys toward a stranger. The moment Isaac sees her, his mourning for Sarah ends--he loves her.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 46,
              spans: [
                t('And she made haste, and let down her pitcher from her shoulder, and said, Drink, and I will give thy camels drink also: so I drank, and she made the camels drink also.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('And I asked her, and said, Whose daughter art thou? And she said, The daughter of Bethuel, Nahor\'s son, whom Milcah bare unto him: and I put the earring upon her face, and the bracelets upon her hands.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('And I bowed down my head, and worshipped the LORD, and blessed the LORD God of my master Abraham, which had led me in the right way to take my master\'s brother\'s daughter unto his son.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('Now therefore if ye will deal kindly and truly with my master, tell me: and if not, tell me; that I may turn to the right hand, or to the left.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-family',
          html:
            'The family\'s response is key. Laban sees the gold and the camels and understands immediately what this means: this man has come seeking a bride, and he has wealth to prove it. But notice something deeper. They do not haggle. They do not demand more. When they say, "The thing proceedeth from the LORD" (v. 50), they are acknowledging that this is beyond their control, and that it is good.',
        },
        {
          kind: 'carry',
          html:
            'When something in your life starts to move - a relationship, an opportunity, an answer you have been waiting for - the first thing to ask is: <em>Is this from the Lord?</em> The family of Rebekah asked this question and could see the answer clearly. Gold is not the sign; obedience and character are. A young woman who works without complaining, who serves without counting the cost, who comes from a faithful family. That is how you know.',
        },
        {
          kind: 'reflection',
          id: 'gen24-family-refl',
          prompt:
            'How do you know when something is truly from the Lord? What signs are you watching for in the big decisions ahead of you?',
        },
      ],
    },

    /* ─── Genesis 24:50-61 - Rebekah Says "I Will Go" ──────────────── */
    {
      ref: 'Genesis 24:50-61',
      title: 'I Will Go',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 50,
              spans: [
                t('Then Laban and Bethuel answered and said, The thing proceedeth from the LORD: we cannot speak unto thee bad or good.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('Behold, Rebekah is before thee, take her, and go, and let her be thy master\'s son\'s wife, as the LORD hath spoken.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And it came to pass, that when Abraham\'s servant heard their words, he bowed himself to the earth before the LORD.'),
              ],
            },
            {
              number: 53,
              spans: [
                t('And the servant brought forth jewels of silver, and jewels of gold, and raiment, and gave them to Rebekah: he gave also to her brother and to her mother precious things.'),
              ],
            },
            {
              number: 54,
              spans: [
                t('And they did eat and drink, he and the men that were with him, and tarried all night; and they rose up in the morning, and he said, Send me away unto my master.'),
              ],
            },
            {
              number: 55,
              spans: [
                t('And her brother and her mother said, Let the damsel abide with us a few days, at the least ten; after that she shall go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-family-stalls',
          html:
            'Notice the small instinct of love - the family asks for ten more days. The servant has been there one night and they already do not want to let her go. Eliezer has felt this kind of pull on the road from Canaan; he refuses to be slowed by it now. The Lord has prospered the journey; affection is no reason to delay obedience.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 56,
              spans: [
                t('And he said unto them, Hinder me not, seeing the LORD hath prospered my way; send me away that I may go to my master.'),
              ],
            },
            {
              number: 57,
              spans: [
                t('And they said, We will call the damsel, and enquire at her mouth.'),
              ],
            },
            {
              number: 58,
              spans: [
                t('And they called Rebekah, and said unto her, Wilt thou go with this man? And she said, '),
                hp('I will go', 'gen24-iwillgo'),
                t('.'),
              ],
            },
            {
              number: 59,
              spans: [
                t('And they sent away Rebekah their sister, and her nurse, and Abraham\'s servant, and his men.'),
              ],
            },
            {
              number: 60,
              spans: [
                t('And they blessed Rebekah, and said unto her, Thou art our sister, be thou the mother of thousands of millions, and let thy seed possess the gate of those which hate them.'),
              ],
            },
            {
              number: 61,
              spans: [
                t('And Rebekah arose, and her damsels, and they rode upon the camels, and followed the man: and the servant took Rebekah, and went his way.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen24-iwillgo',
          html:
            'The family asks Rebekah herself if she will go. She has not seen Isaac. She does not know what this man looks like or if she will love him. She knows only that the question is asked by people who love her, and that a stranger has come with wealth and gifts and the assurance that this is from the Lord. Her answer is two words: <em>I will go.</em> Not "I might," not "I will try," but "I will go." A choice that changes everything.',
        },
        {
          kind: 'christ',
          id: 'christ-bride',
          title: 'Christ Connection - The Bride Who Has Not Seen the Bridegroom',
          html:
            'Rebekah goes to marry a man she has never seen. She has not heard his voice or looked into his eyes. And yet the chapter frames this not as blindness but as faith. Peter will later say of believers in Christ: "Whom having not seen, ye love" (1 Peter 1:8). The Church is a bride who has not yet seen her Bridegroom face to face, and yet she says "I will go." The servant in the chapter is often read as a picture of the Holy Spirit - bringing gifts, bearing witness, moving toward the bride with assurance. The chapter does not press the picture, but it is there for those with eyes to see it.',
        },
        {
          kind: 'carry',
          html:
            'There are moments in life when you have to choose without seeing the ending. A commitment made in the dark. A "yes" spoken to something your mind cannot yet verify. Rebekah\'s choice is not reckless - she comes from a faithful family, she has been asked by people who love her, and she sees evidence that this is from God. But ultimately she walks toward a future she cannot control and cannot see. That is what faith looks like. That is what love looks like.',
        },
        {
          kind: 'reflection',
          id: 'gen24-iwillgo-refl',
          prompt:
            'What commitment or choice is the Lord asking you to make without showing you the ending? What would it look like to say "I will go" the way Rebekah did?',
        },
      ],
    },

    /* ─── Genesis 24:62-67 - Isaac Meets Rebekah ───────────────────── */
    {
      ref: 'Genesis 24:62-67',
      title: 'Isaac in the Field at Evening',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 62,
              spans: [
                t('And Isaac came from the way of the well Lahai-roi; for he dwelt in the south country.'),
              ],
            },
            {
              number: 63,
              spans: [
                t('And Isaac went out to '),
                hy('meditate', 'hebrew-suach'),
                t(' in the field at the eventide: and he lifted up his eyes, and saw, and, behold, the camels were coming.'),
              ],
            },
            {
              number: 64,
              spans: [
                t('And Rebekah lifted up her eyes, and when she saw Isaac, she lighted off the camel.'),
              ],
            },
            {
              number: 65,
              spans: [
                t('For she had said unto the servant, What man is this that walketh in the field to meet us? And the servant had said, It is my master: therefore she took a vail, and covered herself.'),
              ],
            },
            {
              number: 66,
              spans: [
                t('And the servant told Isaac all things that he had done.'),
              ],
            },
            {
              number: 67,
              spans: [
                t('And Isaac brought her into his mother Sarah\'s tent, and took Rebekah, and '),
                hp('she became his wife', 'gen24-wife'),
                t('; and he '),
                hp('loved her', 'gen24-loved'),
                t(': and Isaac was '),
                hy('comforted', 'hebrew-nacham'),
                t(' after his mother\'s death.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-suach',
          title: 'Suach - "to meditate, to muse, to think"',
          script: 'שׂוּחַ',
          translit: '<strong>suach</strong> · to meditate, to ponder, to think deeply',
          description:
            'Isaac is alone in the field at evening, meditating. He does not know what the day will bring. He knows only that his father has sent a servant to find him a wife. In the quietness of the field, waiting and thinking, Rebekah arrives. Sometimes the answer comes when you have stopped asking and simply become still.',
        },
        {
          kind: 'commentary',
          id: 'gen24-wife',
          html:
            'The sentence is constructed with such economy: <em>she became his wife</em>. Not "he took her" in a forceful way, but "she became his wife" - a becoming, a transformation, a joining of two people into one story.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nacham',
          title: 'Nacham - "comforted, consoled"',
          script: 'נִחַם',
          translit: '<strong>nacham</strong> · to be comforted, to be consoled, to be eased',
          description:
            'Isaac was comforted after his mother\'s death. Not that his grief vanished, but that he was no longer alone in it. Love does not erase loss, but it holds the loss beside itself. The presence of another person who chooses you can ease what a person cannot ease alone.',
        },
        {
          kind: 'commentary',
          id: 'gen24-loved',
          html:
            'And he loved her. That is the ending. Not a description of what he *would* do or *ought* to do, but what he *did*. He looked at this woman who journeyed toward him without seeing him first, who chose him sight unseen, and he loved her. The chapter that began with an oath and a task ends with a man and a woman alone in a tent, and love.',
        },
        {
          kind: 'carry',
          html:
            'Two people chose each other. One sent a messenger. One answered the call. One walked toward a future unknown. One looked up from meditating in the field and saw the answer to what he did not yet know to ask for. Love is not always what we design. Sometimes it arrives when we have stopped trying to arrange it, when we have said yes to what we cannot control. Isaac and Rebekah\'s love story starts with an oath and ends with comfort. It starts with a servant\'s prayer and ends with two people alone together. That is the pattern of love: faith, obedience, and then the grace of a person who loves you back.',
        },
        {
          kind: 'reflection',
          id: 'gen24-evening-refl',
          prompt:
            'When has love arrived when you were not expecting it, the way Rebekah arrived in the field where Isaac was meditating? What did that teach you about how God works?',
        },
        {
          kind: 'artwork',
          matchTitle: /rebekah/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 24:62-67 - Isaac and Rebekah Meet in the Field',
        },
      ],
    },
  ],
};
