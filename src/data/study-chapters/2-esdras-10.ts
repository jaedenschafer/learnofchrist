import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 10 — The Vision of the Mourning Woman
 *
 * In one of the most luminous passages of the apocrypha, Ezra wanders into a
 * flowery field, grieving over Zion. He encounters a woman wailing for her dead
 * son. In his compassion-turned-rebuke, Ezra tells her that Zion&apos;s griefs are
 * infinitely greater than hers. As he speaks, the woman is transfigured—she
 * becomes a vast city, glorious and radiant. The angel interprets: the woman IS
 * Zion, the heavenly Jerusalem, appearing to comfort Ezra. The personal grief of
 * a mother becomes the eschatological hope of all creation. This chapter stands
 * as one of the most beautiful in the apocryphal writings.
 */
export const SECOND_ESDRAS_10: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 10,

  estimatedMinutes: { beginner: 9, intermediate: 19, deep: 23 },
  intros: [
    'After days of fasting and prayer, Ezra finds himself in a flowery field, away from the city, trying to gather his thoughts. Grief has followed him—grief over Jerusalem, over God&apos;s silence, over the state of the world. And there, in that quiet place, he encounters a woman weeping. She has lost her only son, the child of thirty years of waiting. Her sorrow seems absolute. But as Ezra speaks to her, something shifts. The woman does not disappear into sadness; she transforms.',
    'What begins as a vision of personal loss becomes a revelation of cosmic restoration. The woman is Zion herself—the city of God, grieving her separation from the Beloved, yet appointed to be crowned in glory. Her mourning is not meaningless; it is the birth-pain of a new creation. The chapter invites us to see our own sorrows not as the end of the story but as the prelude to restoration beyond imagining.',
  ],

  opener: {
    matchArtist: /tissot|doré|blake/i,
    matchTitle: /woman|vision|zion|transfigur/i,
    caption: 'The Vision of the Mourning Woman',
  },

  sections: [
    /* ─── 2 Esdras 10:1–5 — Ezra in the Flowery Field ────────────────────── */
    {
      ref: '2 Esdras 10:1–5',
      title: 'Ezra in the Flowery Field',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, that when I was walking in the field, and my heart was grieved, '),
                hp('I was very much troubled', 'ezra-troubled'),
                t(': for I saw a woman against me, and, behold, she made great lamentation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-troubled',
          html:
            'Ezra is not sitting in the city now but walking in an open field—a place of solitude where grief can breathe. He is troubled not by external circumstances alone but by something deeper: the weight of unanswered questions, the silence of God, the suffering of Zion. Into that troubled state, he encounters the woman&apos;s lamentation. He does not create her grief; he finds it already there.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 2,
              spans: [
                t('And she said unto me, Who art thou? and '),
                hg('I said, I am Ezra', 'ezra-names-self'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-names-self',
          html:
            'The meeting begins with a simple exchange of names. But in the context of the apocalypse, Ezra&apos;s name carries weight—the scribe, the one who wrestles with theodicy, the voice of Israel&apos;s complaint. He names himself, stakes his place in the conversation. He is not a neutral observer but a participant in Zion&apos;s grief.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 3,
              spans: [
                t('Then said I unto her, '),
                hp('Why weepest thou? and why art thou so grieved in thy mind?', 'ezra-asks'),
                t(''),
              ],
            },
            {
              number: 4,
              spans: [
                t('And she said unto me, '),
                hg('I am a woman that was barren, and bear not children', 'barren-woman'),
                t(': but I had a son, and when he was of age, I went to make him a marriage; and my son went into his wedding chamber, and, behold, he fell down and died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-asks',
          html:
            'Ezra breaks his silence with a question—not offering advice but asking her to voice her sorrow. There is care in this question, a recognition that her grief needs to be articulated. He does not yet know who she is, only that she is suffering. His first move is to listen.',
        },
        {
          kind: 'commentary',
          id: 'barren-woman',
          html:
            'The woman&apos;s story unfolds: barren for thirty years, then at last, a son. Not merely a child born in youth but a gift after long waiting—a sign that hope itself was not lost. And then, on his wedding day, at the threshold of his own future, he dies. The woman has lost not just a son but the lineage he would have begun. She is childless again.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 5,
              spans: [
                t('Thereupon I then comforted her; but she said unto me, '),
                hp('Let me alone, that I may bewail myself, and add more lamentation', 'let-alone-lament'),
                t(': for I am much troubled.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'let-alone-lament',
          html:
            'Ezra approaches her with compassion, offering comfort as one might to any mourner. Yet the woman refuses comfort. She insists on the right to her grief—to name it fully, to add to it, to let it have its voice. There is a dignity in her refusal. She will not be rushed past her sorrow into false peace.',
        },

        {
          kind: 'carry',
          html:
            'When you encounter the grief of another—whether in a friend, a stranger, or in yourself—the first impulse is often to comfort, to minimize, to point toward hope. But sometimes what is needed is not comfort yet but presence, and the honoring of sorrow as real. The woman&apos;s refusal teaches us: let grief speak. Do not silence it. The transformation that will come later cannot happen without this fullness of lamentation.',
        },

        {
          kind: 'reflection',
          id: 'grieving-seen',
          prompt:
            'When has someone tried to comfort you too quickly, before your grief had fully named itself? What did it feel like to be told your sorrow was incomplete or should be less than it was?',
        },
      ],
    },

    /* ─── 2 Esdras 10:7–10 — The Woman Mourning Her Son ────────────────────── */
    {
      ref: '2 Esdras 10:7–10',
      title: 'The Woman Mourning Her Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 7,
              spans: [
                t('And the angel that came to visit me at the first heard the voice of her mourning, and said unto me, '),
                hp('This woman before thee', 'angel-speaks'),
                t(': ask her wherefore she mourneth, and she shall tell thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'angel-speaks',
          html:
            'The angel—who has guided Ezra throughout his visions—has heard the woman&apos;s cry. His instruction is simple: ask. Do not assume; ask her to name her sorrow. This is itself a kind of grace. The angel recognizes that her grief is not incidental but central, worthy of being spoken and heard.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 8,
              spans: [
                t('And I said, '),
                hg('Let her tell me her sorrow', 'let-her-tell'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And she said unto me, I am myself afflicted in my soul, and my spirit is troubled exceedingly. '),
              ],
            },
            {
              number: 10,
              spans: [
                t('For I was married a husband thirty years, and had no children by him. '),
                hp('But every hour and every day these thirty years have I prayed unto the Lord', 'thirty-years-prayer'),
                t(', that thou wouldest give me a son: and the Lord heard me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'let-her-tell',
          html:
            'The angel instructs Ezra, and Ezra obeys. He does not assume he understands her sorrow; he asks her to name it. This is itself a form of grace—to be asked to speak your grief, to be given voice and hearing. The woman unfolds her story: not recent loss but the accumulation of decades.',
        },
        {
          kind: 'commentary',
          id: 'thirty-years-prayer',
          html:
            'Thirty years. Not a few months of longing but three decades of prayer, of waiting, of hope deferred. And then answered. The woman has tasted both the bitterness of barrenness and the sweetness of God&apos;s hearing. She knows what it is to have faith tested over the long years, and to see that faith honored. Yet that very answer, that gift, is now taken from her.',
        },

        {
          kind: 'carry',
          html:
            'There is a particular kind of grief that comes to those who have waited long and had their waiting answered, only to have the gift taken away. To have prayed thirty years and received a son, only to have the son die on his wedding day—this is not random sorrow. It is sorrow complicated by the memory of answered prayer, by the knowledge that God heard you, and by the seeming cruelty of that hearing being followed by loss.',
        },

        {
          kind: 'reflection',
          id: 'prayer-answered-taken',
          prompt:
            'Have you ever had a prayer answered in ways that seemed to increase your sorrow rather than ease it? How did you process the feeling of God&apos;s faithfulness in the context of renewed loss?',
        },
      ],
    },

    /* ─── 2 Esdras 10:13–16 — Ezra Rebukes Her with Zion&apos;s Griefs ──────────── */
    {
      ref: '2 Esdras 10:13–16',
      title: 'Ezra Rebukes Her with Zion&apos;s Greater Griefs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 13,
              spans: [
                t('Then said I unto her, '),
                hp('Consider thy dwelling, whose mother is Zion', 'zion-mother'),
                t(': for as Jerusalem hath more children than thou, so hath Zion more sorrows.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zion-mother',
          html:
            'This is Ezra&apos;s rebuttal to her grief. But note: it is not cruel. He is not dismissing her loss. Rather, he is placing her personal sorrow in a larger context. Zion is the mother of all—she has more children, and because she has more children, she carries griefs that multiply beyond any individual loss. He invites the woman to see her sorrow as part of a larger cosmic mourning.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 14,
              spans: [
                t('For ask the earth, and she shall tell thee, that it is she which ought to mourn in that so many are come to destruction. '),
              ],
            },
            {
              number: 15,
              spans: [
                t('For all the world is full of great sorrows, '),
                hg('and every city lameneteth her children', 'cities-lament-children'),
                t(': and many fields have been sown, but the fruits thereof have been utter destroyed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cities-lament-children',
          html:
            'Ezra speaks as a prophet-witness who has seen the destruction of Jerusalem, the exile of Israel, the suffering of the nations. Every city mourns her children—this is not a fate unique to the woman, but woven into the fabric of human history. Zion&apos;s grief encompasses all these particular griefs. She is the archetype of mourning, the mother whose sorrow contains all sorrows.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 16,
              spans: [
                t('The field is full of corruption, and the ground is grieved, and in every place great sorrows are wrought. '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'field-corrupted',
          html:
            'The language escalates from personal loss to cosmic decline. The field itself—the earth from which all life springs—is full of corruption. The ground is grieved, as though the earth itself mourns. This is not poetic exaggeration but theological truth: all creation groans. And Zion bears the weight of all this groaning.',
        },

        {
          kind: 'christ',
          id: 'christ-compassion-reframe',
          title: 'Christ Connection — Reframing Sorrow in the Larger Story',
          html:
            'Jesus does something similar when He meets women weeping: He does not deny their sorrow but reframes it. To Mary at the tomb (John 20) and to the Canaanite woman (Matthew 15), He does not say "your grief is insignificant." Rather, He opens a larger narrative in which their personal pain becomes part of God&apos;s redemptive purpose. "Blessed are they that mourn: for they shall be comforted" (Matthew 5:4). Not because their mourning doesn&apos;t matter, but because it matters so much that God meets it with resurrection, with restoration, with the healing of all things.',
        },

        {
          kind: 'commentary',
          html:
            '<strong>A Word on Ezra&apos;s Rebuke:</strong> Some readers hear Ezra as harsh here—as if he is telling the woman her son doesn&apos;t matter. But this is a misreading. He is not saying her sorrow is less than it appears. He is saying that her sorrow is real precisely because she is part of a world whose mother is Zion, and Zion&apos;s sorrow is infinite. He is inviting her to see her loss not as isolated but as caught up in the great mourning of creation itself. This is the beginning of her transformation.',
        },

        {
          kind: 'carry',
          html:
            'When your personal grief feels boundless, the instinct is to protect that grief, to keep it close and singular. But what Ezra offers is different: he invites you to see that your sorrow is not alone. Zion mourns with you. All creation groans with you. Your loss is part of a larger story—and that story is heading toward restoration. This is not comfort that cheapens your grief; it is comfort that dignifies it by placing it in the context of God&apos;s redemptive purpose.',
        },

        {
          kind: 'reflection',
          id: 'grief-in-larger-story',
          prompt:
            'Where do you tend to isolate your sorrow, keeping it singular and private? What would change if you understood your grief as part of Zion&apos;s mourning—part of creation&apos;s groaning for restoration?',
        },
      ],
    },

    /* ─── 2 Esdras 10:25–27 — She Is Transfigured ──────────────────────────── */
    {
      ref: '2 Esdras 10:25–27',
      title: 'She Is Transfigured into a City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 25,
              spans: [
                t('But it shall come to pass, that when she seeth the calamity of the generation that is to come after her, she shall laugh again. '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shall-laugh-again',
          html:
            'Ezra speaks of a transformation that will come—a vision beyond the present moment. The woman will not laugh because her son returns or her loss is erased. She will laugh because she will see, from a vantage point beyond time, the ultimate purposes of God. Her perspective will shift. Her understanding will enlarge. And in that enlarged vision, laughter will be possible again.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 26,
              spans: [
                t('For look about thee, and behold the city of Zion: and, behold, '),
                hp('the light thereof beginneth to shine exceedingly', 'light-shines'),
                t(', and the foundations thereof are shaking and trembling.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'light-shines',
          html:
            'The shift happens as Ezra is speaking. The woman—<em>she herself</em>—begins to shine. Light emanates from her. And beneath her, the foundations tremble. She is not being restored to what she was; she is being transformed into something far greater. She is becoming a city.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 27,
              spans: [
                t('And when she saw it, she was much afraid: but I said unto her, '),
                hg('Be not afraid; for the Almighty is merciful', 'be-not-afraid'),
                t(': for it is not so, but rejoice, because thou hast seen the glory, and that thou art wholly enlightened.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'be-not-afraid',
          html:
            'The woman is afraid—transformation is frightening. The light that shines from her is too bright for mortal comprehension. But Ezra comforts her: this is not judgment but mercy. What she sees is the glory of who she truly is. She has been enlightened—not by receiving new information, but by being shown her own nature revealed.',
        },

        {
          kind: 'artwork',
          matchTitle: /transfigur|light|woman|city|zion/i,
          caption: '2 Esdras 10:25–27 · The Transfiguration',
        },

        {
          kind: 'carry',
          html:
            'There is a particular kind of fear that comes when you are seen for who you truly are—when the masks fall away and the light of your real identity is revealed. This is not the fear of judgment but the awe of recognition. When you meet yourself—your true self, glorious and beloved—you are afraid. But that fear is the beginning of enlightenment. The Almighty does not offer destruction; He offers the revelation of your glory.',
        },

        {
          kind: 'reflection',
          id: 'seen-truly',
          prompt:
            'When have you caught a glimpse of your true identity in God—beloved, called, glorious? What did it feel like? And how did fear and joy mix in that moment?',
        },
      ],
    },

    /* ─── 2 Esdras 10:28–37 — "She IS the Heavenly Jerusalem" ──────────────── */
    {
      ref: '2 Esdras 10:28–37',
      title: '"She IS the Heavenly Jerusalem"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 28,
              spans: [
                t('And, behold, '),
                hp('whereas thou sawest a woman mourning', 'woman-mourning-seen'),
                t(', now thou seest the city greatly built up: and whereas she complained of the loss of her son, now thou seest her exalted glory.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'woman-mourning-seen',
          html:
            'The angel now speaks, drawing the final curtain back. What Ezra thought he saw—a woman mourning her son—was never merely that. It was a veil drawn over a deeper reality. Beneath the veil was always the city. The mourning was the city&apos;s mourning. The love for a son was the city&apos;s love for her people. And now the veil is lifted, and the city stands revealed in her glory.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 29,
              spans: [
                t('For whereas she said unto thee, That her son was dead; even so is it, that '),
                hg('this is the interpretation: The city which thou sawest is Zion', 'zion-interpretation'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zion-interpretation',
          html:
            'The interpretation: she is Zion. Not a symbol of Zion, not a representation of Zion, but Zion herself—the city, the mother, the beloved of God, appearing in human form. The death of her son represents the exile, the destruction of the temple, the severing of the covenant people from their land. Her grief is Jerusalem&apos;s grief. Her mourning is the mourning of the holy city.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 30,
              spans: [
                t('And whereas she said that she had been thirty years barren, '),
                hp('it is because there were made thirty years of offerings in Zion', 'thirty-years-offerings'),
                t(': and when the three hundred years shall be expired, even then shall Zion conceive, and bring forth that which hath long been desired.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'thirty-years-offerings',
          html:
            'The thirty years of barrenness correspond to the thirty years of offerings in Zion—a measure of time that holds both loss and hope. The text moves into eschatological language: after three hundred years, Zion will conceive and give birth. The apocalyptic calendar is being sketched. But the key point is: barrenness does not last forever. The purpose of God will flower. The beloved city will bear children again.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 31,
              spans: [
                t('Now concerning the mourning of her, whereas thou sawest her mourn, and complainest for the loss of her son: This is the interpretation:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('This woman whom thou sawest is Zion: and whereas she said unto thee, Even so have I been delivered of a son that made me barren: '),
                hp('This is the meaning: whereas in time Zion shall appear glorious and exalted', 'zion-glorious-time'),
                t('; whereas in thy sight the city now looks lowered and afflicted, yet she shall be showed forth with great glory.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zion-glorious-time',
          html:
            'The text gathers its threads. Zion&apos;s mourning is not permanent; it is a season. What Ezra sees now—the lowered, afflicted city—is not the final word. In time, she will appear glorious and exalted. The promise moves beyond individual deliverance into the scope of all creation. Zion will be restored, crowned, made radiant.',
        },

        {
          kind: 'christ',
          id: 'christ-heavenly-jerusalem',
          title: 'Christ Connection — The Heavenly Jerusalem Descending',
          html:
            'John sees the same vision in Revelation 21:2–4: "And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband… And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." The woman mourning in the field becomes the bride adorned. The grieving mother becomes the glorious city. And the one who unites them is the Bridegroom—Christ himself, who comes to wipe away all tears.',
        },

        {
          kind: 'commentary',
          html:
            '<strong>A Parallel Vision:</strong> This vision echoes Galatians 4:26, where Paul writes: "But Jerusalem which is above is free, which is the mother of us all." The woman is not merely a historical Jerusalem but the heavenly city, the mother of believers, appearing to comfort Ezra. She is both mourning and glorious—both the church suffering now and the church triumphant in the age to come.',
        },

        {
          kind: 'carry',
          html:
            'If the woman is Zion, and Zion is your mother, then your own sorrows are caught up in hers. You are not outside the story of her mourning; you are part of it. You are one of her children. And the promise that her mourning will become glory is a promise that encompasses you too. Your grief has a mother. Your suffering is held within the suffering of the beloved city. And her restoration is yours.',
        },

        {
          kind: 'reflection',
          id: 'zion-mother-2',
          prompt:
            'What does it mean to you that Zion is your mother? How does that knowledge change the way you understand your own sorrow and your hope for restoration?',
        },
      ],
    },

    /* ─── 2 Esdras 10:38–44 — The Angel&apos;s Interpretation and Comfort ────────── */
    {
      ref: '2 Esdras 10:38–44',
      title: 'The Angel&apos;s Interpretation: Comfort Given',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 38,
              spans: [
                t('Now as for thy saying, That she complained by reason of her son: This is the interpretation: '),
                hg('She thou sawest weeping is Zion, and her complaint which thou heardest is the prayer of Jerusalem', 'zion-complaint-prayer'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zion-complaint-prayer',
          html:
            'The angel returns to the beginning—to the moment when Ezra heard the woman weeping. That weeping was not meaningless sorrow but prayer. Zion does not simply mourn; she prays. Her complaint is not despair but petition. She is calling out to God, and God hears her voice.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 39,
              spans: [
                t('Whereas she said unto thee, That she had been thirty years barren; Even thus it is, that in Zion have been made three hundred and thirty years, and she hath born to thee '),
                hp('mighty sons', 'mighty-sons'),
                t(': and she mourneth for them, because also herself at the last shall die with them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mighty-sons',
          html:
            'The interpretation deepens. Zion has borne mighty sons—generations of believers, faithful witnesses, martyrs, saints. Yet she mourns them because she knows she too will pass through death. The text suggests a kind of solidarity in suffering: the mother grieves with her children, identifies with them in their pain and death. She is not distant or untouched. She, too, must pass through the water of judgment.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 40,
              spans: [
                t('Now when the multitude of the infirmities assembled together in her heart, then was an agony made, and she caused a cry to be heard: whereupon the city was shaken.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'agony-made',
          html:
            'The accumulation of sorrows—the multitude of infirmities—assembles in Zion&apos;s heart, and she cries out. It is an agony, a birth-cry. And the city itself trembles at her voice. Her mourning is not private; it shakes creation. Her pain has cosmic resonance.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 41,
              spans: [
                t('And after this I saw her, not as a woman of mourning, but '),
                hp('she appeared unto me as a city builded, and a place showed itself wherein was great multitude of houses gathered together', 'city-builded'),
                t(': then was I afraid, and cried with a loud voice, and said, '),
              ],
            },
            {
              number: 42,
              spans: [
                t('O Lady, what city is this?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'city-builded',
          html:
            'The transformation is complete now. The woman is no more. In her place stands a city—vast, built up, full of multitudes. Ezra&apos;s fear and awe are fitting. He asks: "O Lady, what city is this?" He uses a term of honor, of veneration. He recognizes that what stands before him is not a vision but a revelation of reality.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 43,
              spans: [
                t('And she said, '),
                hp('This is Zion—the city that I build and reveal', 'zion-revealed'),
                t(': and it is showed you here, that you may be comforted concerning the troubles of Zion; for as you saw her mourning, so shall you now behold her glory.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zion-revealed',
          html:
            'Zion speaks directly to Ezra now. She confirms her own identity and explains her appearing: she has come to comfort him. She has come bearing the knowledge that mourning is not the final state. She shows herself in glory so that Ezra—and all who read this vision—will be comforted. The purpose of the vision is explicit: comfort.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 44,
              spans: [
                t('And whereas she said unto thee, That her son is dead; even so is the interpretation: The cause that the city was destroyed was, that she saw the calamity of her children.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'son-dead-interpretation',
          html:
            'The final piece of the interpretation. The death of her son (in its eschatological sense) was the destruction of the temple, the exile, the severing of the bond between God and Israel. But that death, while real, is not final. The city stands. The mother lives. And she will be restored more glorious than before.',
        },

        {
          kind: 'greek',
          id: 'greek-metanoia',
          title: 'Metanoia — A Change of Mind and Heart',
          script: 'μετάνοια',
          translit: '<strong>metanoia</strong> · repentance; a turning around; transformation of perspective',
          description:
            'Though 2 Esdras is technically apocryphal, it shares the language of Greek theology. The vision given to Ezra is a metanoia—a complete turning of perspective. What he saw as mourning is revealed as glory. What appeared as loss is shown as the prelude to restoration. The woman herself undergoes metanoia, her identity transformed from a grieving mother into a glorious city.',
        },

        {
          kind: 'christ',
          id: 'christ-comfort-mourners',
          title: 'Christ Connection — Comfort to All Who Mourn',
          html:
            'Matthew 5:4 declares: "Blessed are they that mourn: for they shall be comforted." The woman who appears to Ezra is that comfort. She comes not to erase grief but to show that grief is not the end of the story. Christ Himself is moved by the tears of those who mourn—at Lazarus&apos; tomb, He weeps. And then He raises. The comfort He offers is not false hope but resurrection hope: the dead will rise, the city will be restored, tears will be wiped away. Zion herself appears to comfort Ezra because she knows this truth. Her mourning ends in glory.',
        },

        {
          kind: 'commentary',
          html:
            '<strong>The Purpose of the Vision:</strong> This vision was given "that you may be comforted concerning the troubles of Zion." If you are troubled by the suffering of God&apos;s people, by the brokenness of creation, by your own grief—this vision is meant for you. You are not alone in your mourning. And the one who appears to comfort you is Zion herself, crowned in glory, inviting you to see beyond present sorrow to eschatological restoration.',
        },

        {
          kind: 'carry',
          html:
            'You live in the time of Zion&apos;s mourning. You see the city lowered and afflicted. You may yourself be grieving loss, separation, the weight of a world not yet redeemed. But Zion appears to you in this vision to say: this is not the end. I am being restored. My mourning will become laughter. My children will be gathered. And you—you are part of my restoration. Your sorrow is held within my sorrow. Your hope is held within my hope. Rejoice, for the glory is coming.',
        },

        {
          kind: 'reflection',
          id: 'comforted-by-zion',
          prompt:
            'How does it change your perspective on your own suffering to know that you are part of Zion&apos;s mourning—and that Zion&apos;s restoration is assured? What comfort does that give you?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Esdras 10',
    quote:
      'And whereas she said unto me, That her son is dead; this is Zion, the city of God, grieving and yet appointed to glory. For whereas thou sawest a woman mourning, now thou seest the city greatly built up—exalted in splendor beyond all imagining.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 10 · Study Guide',
  },

};
