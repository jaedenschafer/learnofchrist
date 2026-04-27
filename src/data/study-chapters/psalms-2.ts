import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 2 — The Anointed King
 *
 * Why do the heathen rage? Why do the kings of the earth set themselves against
 * the Lord and His anointed? This is the second psalm, and it is one of the
 * most explicitly Messianic texts in the Old Testament. While the psalmist may
 * have written of an earthly king of Israel, the church has always read this
 * psalm as a prophecy of Christ—the Son whom the Father declares and empowers,
 * who will break His enemies with a rod of iron, whose inheritance is the
 * nations. To ask for this King is to inherit the earth. To trust in Him is to
 * be blessed beyond measure.
 */
export const PSALMS_2: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 2,

  intros: [
    'Psalm 2 opens with an urgent question: "Why do the heathen rage, and the people imagine a vain thing?" It is a question born of bewilderment—a bewilderment that God Himself seems to share. For the kings of the earth have set themselves, and the rulers take counsel together, against the Lord and against His anointed. They imagine they can overthrow the One who sits in the heavens. They suppose their rebellion matters. And God, from His throne, laughs. He has them in derision. For He has already set His king upon His holy hill of Zion.',
    'What follows is one of the oldest and most direct Messianic promises in Scripture. God declares to His anointed Son: "Thou art my Son; this day have I begotten thee." He promises to give Him the heathen for His inheritance and the uttermost parts of the earth for His possession. His rule will break the nations like a potter&apos;s vessel. And all who seek shelter in Him, who place their trust in Him, will be blessed. The psalm is a proclamation both of judgment and of grace—a summons to all the rulers of the earth to kiss the Son, to submit to Him, lest His wrath be kindled. But underneath the warning is an invitation: come, trust, be blessed.',
  ],

  sections: [
    /* ─── Psalm 2:1–3 — Why Do the Heathen Rage? ────────────────────────── */
    {
      ref: 'Psalm 2:1–3',
      title: 'The Futile Rebellion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Why do the heathen rage, and the people imagine a vain thing?'),
            plain(2, 'The kings of the earth set themselves, and the rulers take counsel together, against the Lord, and against his anointed, saying,'),
            plain(3, 'Let us break their bands asunder, and cast away their cords from us.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms2-why',
          html:
            'The psalm begins not with assertion but with question—a question that expresses bewilderment. Why would the heathen rage against the Lord? Why would they imagine a vain thing—a thing that has no foundation, no reality, no power? The tone is almost incredulous. The psalmist stands back and surveys the scene of human rebellion, and he finds it absurd. Kings gather. Rulers conspire. They pool their intelligence and their strength. And yet they set themselves against One whose throne is in heaven, whom the earth cannot touch, whom no human power can diminish.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-anointed',
          html:
            'The rebellion is "against the Lord, and against his anointed." The anointed one is God&apos;s representative, His chosen instrument. To rebel against the anointed is to rebel against the Lord Himself. There is no separation. The two are so identified that to touch one is to touch the other. Throughout the Old Testament, the anointed one may be the king of Israel, the priest, the prophet. But here, in this psalm, the church has always seen the ultimate anointed one—the Messiah, the Christ, the Son of God Himself.',
        },
        {
          kind: 'hebrew',
          id: 'psalms2-mashiach',
          title: 'Mashiach — "Anointed One"',
          script: 'מָשִׁיחַ',
          translit: '<strong>Mashiach</strong> · anointed one; anointed with oil; the Messiah',
          description:
            'The word mashiach literally means "anointed with oil." In Israel, kings were anointed with oil to signify God&apos;s choice and blessing. Priests and prophets were anointed as well. By the time of the Psalms, the term has taken on a deeper significance—it refers to the one God has chosen, the one upon whom His Spirit rests. Christians understand this to be Jesus, the ultimate anointed one, anointed not with oil but with the Holy Spirit, whom God sent to be the king of kings.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-bands',
          html:
            'The conspirators speak: "Let us break their bands asunder, and cast away their cords from us." They experience God&apos;s authority as a burden, a bondage, something to be thrown off. They do not understand that the law of the Lord is perfect, converting the soul. They see only restraint. They do not see freedom. And so they rebel, imagining that by breaking free from the bonds of God&apos;s rule, they will find liberation. But they are about to discover that they have chosen slavery instead.',
        },
      ],
    },

    /* ─── Psalm 2:4–9 — The Throne in Heaven ────────────────────────────── */
    {
      ref: 'Psalm 2:4–9',
      title: 'God&apos;s Sovereign Response',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(4, 'He that sitteth in the heavens shall laugh: the Lord shall have them in derision.'),
            plain(5, 'Then shall he speak unto them in his wrath, and vex them in his sore displeasure:'),
            plain(6, 'Yet have I set my king upon my holy hill of Zion.'),
            plain(7, 'I will declare the decree: The Lord hath said unto me, Thou art my Son; this day have I begotten thee.'),
            plain(8, 'Ask of me, and I shall give thee the heathen for thine inheritance, and the uttermost parts of the earth for thy possession.'),
            plain(9, 'Thou shalt break them with a rod of iron; thou shalt dash them in pieces like a potter&apos;s vessel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms2-laugh',
          html:
            'God&apos;s response to this rebellion is laughter—not mockery, but the laughter of one who sees the whole picture, who knows the ending before the beginning. From the throne of heaven, where all things are gathered into His sight, God looks upon the rage of the kings and laughs. He has them in derision. They think they are plotting. They do not see that their rebellion is part of a drama whose script was written before time began.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-wrath',
          html:
            'Yet God&apos;s laughter will give way to speech. He will speak to them in wrath, vex them in His sore displeasure. The kings who thought they could throw off the cords of God&apos;s rule will find themselves bound by His judgment. But this judgment is not arbitrary. It is the response of a God who will not tolerate endless rebellion, endless turning away. His wrath is the necessary counterpart to His love—the refusal to leave His beloved world in the grip of those who would destroy it.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-hill-zion',
          html:
            'But even as God speaks in wrath, He declares His purpose: "Yet have I set my king upon my holy hill of Zion." The word "yet" is crucial. It marks a turn from judgment to grace. God has not abandoned His plan. He has not been thwarted. His anointed one will reign. The rebellion of the kings changes nothing. God&apos;s purposes stand.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-begotten',
          html:
            'Then God declares the most intimate and personal relationship between Father and Son: "Thou art my Son; this day have I begotten thee." This verse echoes at the baptism of Jesus, when the voice from heaven declares, "Thou art my beloved Son, in whom I am well pleased." It is a declaration not of adoption, but of generation—an eternal relationship of Father and Son. And it is declared "this day"—not as a past event fixed in history, but as a present declaration, valid and active in every moment.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-inheritance',
          html:
            'What is the inheritance of this Son? "I shall give thee the heathen for thine inheritance, and the uttermost parts of the earth for thy possession." The nations themselves are the inheritance. Not Israel alone, but every people, every tongue, every nation will be gathered under the rule of God&apos;s anointed. And His rule will be total. "Thou shalt break them with a rod of iron; thou shalt dash them in pieces like a potter&apos;s vessel." This is not gentle. This is not negotiation. This is the victory of the righteous over the forces that oppose God.',
        },
        {
          kind: 'christ',
          id: 'psalms2-christ-messiah',
          title: 'Christ Connection — The Messianic King',
          html:
            'Acts 4 explicitly applies this psalm to Jesus. When Peter and John are arrested for preaching Christ, the church prays and quotes Psalm 2: "Why did the Gentiles rage, and the people imagine vain things? The kings of the earth stood up, and the rulers were gathered together against the Lord, and against his Christ" (Acts 4:25–26). The early church saw in the crucifixion the very scene Psalm 2 describes—the rebellion of the nations, the setting themselves against God&apos;s anointed. And yet, the psalm assures us, the throne in heaven is unmoved. The decree has been declared. The Son will inherit the nations. The rod of iron will rule them all. Christ&apos;s resurrection is the declaration of the Father: Thou art my Son.',
        },
        {
          kind: 'carry',
          html:
            'To live under the kingship of God&apos;s anointed is to align yourself with the ultimate victor. The forces of rebellion may rage. They may seem to gain ground. But the psalm assures us that the throne is secure, the decree is settled, and the inheritance is certain. What the earthly powers imagine as rebellion is, from heaven&apos;s vantage point, already defeated.',
        },
        {
          kind: 'reflection',
          id: 'psalms2-whose-side',
          prompt: 'Are there ways in which you are rebelling against God&apos;s rule, imagining you can break free by casting away His law? What would it mean to ask Him, as the Son does, for the nations as your inheritance?',
        },
      ],
    },

    /* ─── Psalm 2:10–12 — Kiss the Son ──────────────────────────────────── */
    {
      ref: 'Psalm 2:10–12',
      title: 'The Summons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'Be wise now therefore, O ye kings: be instructed, ye judges of the earth.'),
            plain(11, 'Serve the Lord with fear, and rejoice with trembling.'),
            plain(12, 'Kiss the Son, lest he be angry, and ye perish from the way, when his wrath is kindled but a little. Blessed are all they that put their trust in him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms2-wise',
          html:
            'The psalm now turns to address the very kings and judges who have been conspiring. It is an appeal to reason, to self-interest, to survival: "Be wise now therefore." Wisdom here is not clever planning or shrewd strategy. It is the recognition of reality. It is the seeing of things as they truly are. The kings who rage are not wise. They do not see. The wise king is the one who recognizes that he cannot stand against the Lord.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-serve',
          html:
            'What is the alternative to rebellion? "Serve the Lord with fear, and rejoice with trembling." Serve—which means place yourself under, acknowledge His authority, do His will. With fear—not cowering dread, but reverent awe. And rejoice—find your joy, not in grasping for power, but in serving One who is infinitely greater than you. With trembling—in full recognition that you are nothing, that He is all.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-kiss',
          html:
            '"Kiss the Son, lest he be angry, and ye perish from the way." To kiss the Son is to make submission visible. It is to draw near, to show affection, to pledge allegiance. It is to take the posture of a vassal before a king. And it must be done quickly, while there is still time. For His wrath can be kindled. Those who refuse to kiss the Son will perish from the way—they will be cut off, removed from the path that leads to life.',
        },
        {
          kind: 'commentary',
          id: 'psalms2-blessed',
          html:
            'But the final word is blessing: "Blessed are all they that put their trust in him." Trust—which means to flee to Him for refuge, to lean upon Him, to commit yourself entirely to His care. Those who do so are blessed. Not because they have gained wealth or power in this world, but because they have gained eternal life, the favor of God, the security that comes from being on the side of the One who cannot be defeated.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 2 offers the world a choice. Rage against God, imagine vain things, cast away His cords—and perish. Or serve Him with fear and trembling, kiss the Son in submission and affection, and be blessed. The choice is presented urgently, but with mercy. There is still time. There is still an invitation. The gates are not yet barred. Come, the psalm says. Come and be blessed.',
        },
        {
          kind: 'reflection',
          id: 'psalms2-which-path',
          prompt: 'What would it look like for you to "kiss the Son"—to make visible, in your daily life, your submission to Christ&apos;s kingship? Where are you still rebelling, still imagining you can cast away His cords?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Why do the heathen rage? Yet have I set my king upon my holy hill of Zion. Blessed are all they that put their trust in him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 2 · Study Guide',
  },

  hasHebrew: true,
};
