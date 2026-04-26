import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 44 — Joseph hides his silver cup in Benjamin&apos;s sack. The steward
 * catches up with the brothers. The cup is found. They tear their clothes and return.
 * Judah speaks: 27 verses of intercession (vv. 18–34). The longest direct speech
 * in Genesis. Judah, who once proposed selling his brother for silver, now offers
 * his own body in place of Benjamin&apos;s. Substitutionary atonement in narrative form.
 */
export const GENESIS_44: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 44,

  intros: [
    'Genesis 44 is the moment the entire Joseph story turns. Everything before — the pit, the slavery, the false accusation in Egypt, the years in prison — points to this chapter. And everything after points back to it. A cup is hidden. A game of guilt and innocence plays out on the road. But the real drama is what happens inside Judah&apos;s heart.',
    'This is the chapter where the man who once said, "Let us sell him to the Ishmaelites" (37:27) becomes the man who says, "Let me be a slave in his place." Not a rule change. Not a law that forced him. Something deeper: a metamorphosis. Judah has been remade from the inside by twenty years of memory and the weight of his own debt to his father Jacob.',
    'The chapter shows no resolution. Judah makes his offer and then — silence. We don&apos;t yet know what Joseph will do. The text leaves us in that gap. Faith waits. The cross hasn&apos;t come yet. But the shape of it is already here.',
  ],

  bottomShare: {
    label: 'Share Genesis 44',
    quote:
      'Judah, the man who once sold his brother for silver, now offers himself as a slave instead: "Let thy servant abide instead of the lad a bondman to my lord." Genesis 44 is substitution made flesh — the gospel before the gospel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 44 · Study Guide',
  },

  sections: [
    /* ─── Genesis 44:1–13 — The Cup Hidden and Found ────────────────────── */
    {
      ref: 'Genesis 44:1–13',
      title: 'The Cup Hidden and Found',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            {
              number: 1,
              spans: [
                t('And he commanded the steward of his house, saying, Fill the men&apos;s sacks with food, as much as they can carry, and put '),
                hg('every man&apos;s money in his sack&apos;s mouth', 'gen44-money-returned'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And put my cup, the '),
                hy('silver cup', 'hebrew-kesef'),
                t(', in the sack&apos;s mouth of the youngest, and his corn money. And he did according to the word that Joseph spake.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('As soon as the morning was light, the men were sent away, they and their asses.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And when they were gone out of the city, and not yet far off, Joseph said unto his steward, Up, follow after the men; and when thou dost overtake them, say unto them, '),
                hg('Wherefore have ye rewarded evil for good?', 'gen44-evil-for-good'),
                t(''),
              ],
            },
            {
              number: 5,
              spans: [
                t('Is not this it in which my lord drinketh, and whereby indeed he divineth? ye have done evil in so doing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen44-money-returned',
          html:
            'Joseph commanded that the brothers&apos; money be returned to them — the very price they thought they had to pay. Grace quietly did the work before anyone asked for it. The brothers didn&apos;t know it yet, but they were eating for free.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kesef',
          title: 'Kesef — &ldquo;silver&rdquo;',
          script: 'כֶּסֶף',
          translit: '<strong>kesef</strong> · silver; wealth',
          description:
            'Kesef is the same word for the twenty pieces of silver the brothers received for selling Joseph in chapter 37. The cup is made of the very substance of their original sin. The test of innocence returns them to the moment of guilt.',
        },
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            {
              number: 6,
              spans: [
                t('And he overtook them, and he spake unto them these words.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And they said unto him, Wherefore saith my lord these words? God forbid that thy servants should do according to this thing:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Behold, the money which we found in our sacks&apos; mouths, we brought again unto thee out of the land of Canaan: how then should we steal out of thy lord&apos;s house silver or gold?'),
              ],
            },
            {
              number: 9,
              spans: [
                t('With whomsoever of thy servants it be found, both let him die, and '),
                hg('we also will be my lord&apos;s bondmen', 'gen44-bondage-oath'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he said, Now also let it be according unto your words: he with whom it is found shall be my servant; and ye shall be blameless.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then they speedily took down every man his sack to the ground, and opened every man his sack.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he searched, and began at the eldest, and left at the youngest: and the cup was found in Benjamin&apos;s sack.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Then they '),
                hg('rent their clothes', 'gen44-tearing'),
                t(', and laded every man his ass, and returned to the city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen44-evil-for-good',
          html:
            'Joseph&apos;s steward calls out the brothers for "rewarding evil for good." The same phrase applies to what the brothers did to Joseph in chapter 37: they answered his trust with betrayal. Now they stand accused of the very sin they once committed. The test mirrors the original crime.',
        },
        {
          kind: 'commentary',
          id: 'gen44-bondage-oath',
          html:
            'The brothers&apos; first instinct is to bind themselves — both death for the thief and bondage for all of them if the cup is found with any. They don&apos;t yet understand how prophetic their own words are. One of them will stand in front of the lord of Egypt and volunteer exactly this: bondage for himself in place of another.',
        },
        {
          kind: 'commentary',
          id: 'gen44-tearing',
          html:
            'Tearing clothes is the posture of mourning and anguish in Israel. The brothers stand before innocence destroyed — or so they think — and they tear their clothes. They haven&apos;t yet admitted what they&apos;ve done, but they feel the weight of it. Guilt is beginning to break through.',
        },
        {
          kind: 'carry',
          html:
            'The brothers accused of theft are actually innocent. Yet they tear their clothes in grief. Sometimes you carry a weight that isn&apos;t technically yours — a family debt, a pattern that passes down, a secret you never told. That weight is real. The first step is to feel it, not to hide it under a smile. Torn clothes are honest. God comes to honest people.',
        },
      ],
    },

    /* ─── Genesis 44:14–17 — Before the Lord ──────────────────────────────── */
    {
      ref: 'Genesis 44:14–17',
      title: 'Before the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            {
              number: 14,
              spans: [
                t('And Judah and his brethren came to Joseph&apos;s house; for he was yet there: and they fell before him on the ground.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Joseph said unto them, What deed is this that ye have done? wot ye not that '),
                hg('such a man as I can certainly divine?', 'gen44-divine'),
                t(''),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Judah said, What shall we say unto my lord? what shall we speak? or how shall we clear ourselves? '),
                hp('God hath found out the iniquity of thy servants', 'gen44-god-found'),
                t(': behold, we are my lord&apos;s servants, both we, and he also with whom the cup is found.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he said, God forbid that I should do so: but the man in whose hand the cup is found, he shall be my servant; and as for you, get you up in peace unto your father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen44-divine',
          html:
            'Joseph claims a power the Old Testament usually reserves for God — divining the hidden things. He is testing whether the brothers still judge a man by his external success, the way they once judged Joseph. The brothers fell before him once out of fear. Will they again? Or have they learned something about judging another?',
        },
        {
          kind: 'christ',
          id: 'gen44-god-found',
          title: 'Christ Connection — God Who Finds Out',
          html:
            'Judah says, "God hath found out the iniquity of thy servants." He is confessing to more than the cup. He is confessing to what the cup represents — the silver their father paid for, the brother they sold, the decades of concealment. Before Joseph even announces his identity, God is working through Judah&apos;s conscience. Paul writes: "Be sure your sin will find you out" (Num. 32:23). But that finding is mercy. Unconfessed sin spreads. Confessed sin heals. Judah&apos;s words are the beginning of healing for all of them.',
        },
        {
          kind: 'reflection',
          id: 'gen44-found-out',
          prompt:
            'What iniquity is God quietly finding out in your life right now — something you thought was hidden? What would change if you saw that finding as an act of mercy instead of judgment?',
        },
      ],
    },

    /* ─── Genesis 44:18–34 — Judah&apos;s Intercession ───────────────────────────── */
    {
      ref: 'Genesis 44:18–34',
      title: 'Judah&apos;s Intercession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 44,
          lines: [
            {
              number: 18,
              spans: [
                t('Then Judah came near unto him, and said, '),
                hp('Oh my lord, let thy servant, I pray thee, speak a word in my lord&apos;s ears', 'gen44-judah-speaks'),
                t(', and let not thine anger burn against thy servant: for thou art even as Pharaoh.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('My lord asked his servants, saying, Have ye a father, or a brother?'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And we said unto my lord, We have a father, an old man, and a child of his old age, a little one: and his brother is dead, and he alone is left of his mother, and '),
                hg('his father loveth him', 'gen44-father-loves'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And thou saidst unto thy servants, Bring him down unto me, that I may set mine eyes upon him.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And we said unto my lord, The lad cannot leave his father: for if he should leave his father, his father would die.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And thou saidst unto thy servants, Except your youngest brother come down with you, ye shall see my face no more.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And it came to pass when we came up unto thy servant my father, we told him the words of my lord.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And our father said, Go again, and buy us a little food.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And we said, We cannot go down: if our youngest brother be with us, then will we go down: for we may not see the man&apos;s face, except our youngest brother be with us.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And thy servant my father said unto us, '),
                hg('Ye know that my wife bare me two sons', 'gen44-two-sons'),
                t(':'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the one went out from me, and I said, Surely he is torn in pieces: and I saw him not since:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('But if ye take this also from me, and mischief befall him, ye shall bring down my grey hairs with sorrow to the grave.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Now therefore when I come to thy servant my father, and the lad be not with us; seeing that his life is bound up in the lad&apos;s life;'),
              ],
            },
            {
              number: 31,
              spans: [
                t('It shall come to pass, when he seeth that the lad is not with us, that he will die: and thy servants shall bring down the grey hairs of thy servant our father with sorrow to the grave.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('For '),
                hp('thy servant became surety for the lad unto my father', 'gen44-surety'),
                t(', saying, If I bring him not unto thee, then I shall bear the blame to my father for ever.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Now therefore, I pray thee, '),
                hp('let thy servant abide instead of the lad a bondman to my lord', 'gen44-instead'),
                t('; and let the lad go up with his brethren.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('For how shall I go up to my father, and the lad be not with me? lest peradventure I see the evil that shall come on my father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen44-judah-speaks',
          html:
            'Judah steps forward. Not the oldest brother — Reuben would normally speak — but Judah. The man who once said, "What profit is it if we slay our brother?" (37:26) and sold Joseph instead. Now he will speak on behalf of the youngest brother. His repentance has made him Reuben&apos;s superior in this moment. Conscience ranks higher than age.',
        },
        {
          kind: 'commentary',
          id: 'gen44-father-loves',
          html:
            'Judah recounts their entire journey: the first request, the revelation that they had another brother, the summons to bring him. He tells Joseph everything — knowing Joseph already knows. But saying it out loud is different. Saying it forces Judah to <em>see</em> the trajectory from his own betrayal twenty years ago to this moment, standing before the power that could destroy him.',
        },
        {
          kind: 'commentary',
          id: 'gen44-two-sons',
          html:
            'Judah recites what Jacob said: "My wife bare me two sons." One gone. One remaining. What Judah is doing, very carefully, is reminding Joseph of something Joseph might want to ignore: you and I share the same father. Same family. Same loss. Benjamin is not some anonymous boy. He is your brother.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tachat',
          title: 'Tachat — &ldquo;instead of&rdquo;',
          script: 'תַּחַת',
          translit: '<strong>tachat</strong> · in place of; underneath',
          description:
            'The word for substitution. Judah uses it in the climactic moment: "Let thy servant abide <em>tachat</em> the lad" — in his place, underneath the weight that should fall on Benjamin. This is the vocabulary of the cross — one standing under the judgment meant for another.',
        },
        {
          kind: 'commentary',
          id: 'gen44-surety',
          html:
            'Judah quotes his own pledge from 43:9: "I will be surety for him." He is a man of his word. Now he will prove it. He doesn&apos;t ask for time. He doesn&apos;t ask for mercy. He walks into his own sentence. This is what covenant looks like: a promise kept when the cost is more than you imagined.',
        },
        {
          kind: 'christ',
          id: 'gen44-instead',
          title: 'Christ Connection — Substitution Made Flesh',
          html:
            '&ldquo;Let thy servant abide instead of the lad.&rdquo; Here is substitutionary atonement — the gospel itself — written into a man&apos;s offer. Judah, whose name will become synonymous with the Messiah ("the Lion of the tribe of Judah," Hebrews 7:14), becomes the first picture of Christ in the narrative. The man who once sold his brother for silver now offers his own body. Not coerced. Not commanded. Offered. "No man taketh it from me," Jesus will say, "but I lay it down of myself" (John 10:18). Judah lays down his future so Benjamin can walk free. It is the shape of the cross, centuries before the cross.',
        },
        {
          kind: 'carry',
          html:
            'Judah had decades to forget what he did to Joseph. He could have built a good life in Canaan and never told anyone. But something wouldn&apos;t let him rest. The memory of his brother&apos;s face. The weight of the secret. When the chance came to put his own life on the line to save Benjamin, he didn&apos;t hesitate. Unfinished business does that — it makes you reckless with mercy when the moment finally comes. What unfinished business in your own story is calling you to lay something down?',
        },
        {
          kind: 'reflection',
          id: 'gen44-lay-down',
          prompt:
            'Judah offered his future for his brother&apos;s freedom. What would you have to lay down for someone you&apos;ve hurt — or for someone you love? What is the cost of being a person of your word?',
        },
        {
          kind: 'artwork',
          matchTitle: /judah|joseph|benjamin|cup|egyptian/i,
          caption: 'Genesis 44:18–34 · Judah&apos;s Intercession',
        },
      ],
    },

    /* ─── Silence and the Moment ──────────────────────────────────────────── */
    {
      ref: 'Genesis 44: The Text Ends Here',
      title: 'The Unfinished Seventh Day',
      blocks: [
        {
          kind: 'commentary',
          id: 'gen44-silence',
          html:
            'Judah finishes speaking. The text does not tell us Joseph&apos;s response. Not yet. Genesis 44 ends in suspension — Judah&apos;s offer made, Benjamin&apos;s fate still hanging. We will have to wait until chapter 45 to learn what the lord of Egypt will do. The text is letting us sit in the gap.',
        },
        {
          kind: 'commentary',
          id: 'gen44-holy-saturday',
          html:
            'This is the Thursday afternoon of the Bible&apos;s story. The substitution has been offered. The sentence could go either way. We don&apos;t know if Joseph will accept, if he will relent, if he will reveal himself. Judah has made his move. The rest is silence. Two thousand years of readers have sat in this silence and seen their own future written here: they have a Brother who has already made the offer, who has already stepped forward, and they are waiting for Him to speak.',
        },
        {
          kind: 'christ',
          id: 'gen44-new-covenant',
          title: 'Christ Connection — The Covenant Fulfilled',
          html:
            'The covenant God made with Judah was this: a scepter will not depart from him, and his line will produce rulers (49:10). Joseph was the favored son. Joseph had the coat. Joseph showed the dreams. But God had in mind a greater covenant: that Judah—not Joseph—would be the line of the Messiah. This chapter is the turning point. Judah, remade by grief and memory, becomes the vessel. And in that vessel, one greater than Judah will come — the Lion of the tribe of Judah, who will make the final substitution and reverse the ancient sale. Where Judah offered himself and was released, the Lamb will offer Himself and will rise. The covenant is not with Judah&apos;s strength. It is with his willingness to lay himself down.',
        },
        {
          kind: 'carry',
          html:
            'You are in the silence with Judah. You have made your confession. You have seen your own iniquity. You have heard the promise that someone will stand in your place. And you are waiting. The answer hasn&apos;t come yet. That&apos;s where faith lives — not in the certainty of the outcome, but in the willingness to wait for a God who has already promised to seek and to save. He is coming. The silence is not emptiness. It is the space where you learn to trust.',
        },
        {
          kind: 'reflection',
          id: 'gen44-the-silence',
          prompt:
            'What in your life are you waiting for God to speak about? What would change if you believed He is already moving, even in the silence?',
        },
      ],
    },
  ],
};
