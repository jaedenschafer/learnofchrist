import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 3 Maccabees 7 — The closing chapter of 3 Maccabees. The king who plotted
 * destruction now writes a decree of restoration. The enslaved are freed, their
 * rights restored. The Jews establish a feast of remembrance—the Feast of
 * Deliverance—so that future generations will know what God has done. The book
 * ends with thanksgiving and the establishment of a memorial feast.
 *
 * DOCTRINAL CARE: Apocrypha — stay neutral. The execution of apostates is
 * troubling—handle as historical record without endorsement. NEVER use
 * "Trinity" or forbidden tradition phrases.
 *
 * PACING: 1–3 verses per scripture block. Callouts = Greek/Hebrew terms.
 * Christ Connections anchor to marked phrases in scripture (hp tone).
 * Carry boxes ground in specific verses. Reflections are second-person warm.
 */

export const THIRD_MACCABEES_7: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 7,

  intros: [
    'From the brink of death, the Jews are saved. The king who plotted their destruction reverses his decree. His own heart was turned by the God he never served. The enslaved are freed, their goods restored, their rights re-established.',
    'In Jerusalem, they gather to celebrate. They establish a feast—not like other feasts, but a memorial feast, so that their children and their children&apos;s children will know: this is what the Lord has done.',
  ],

  sections: [
    /* ─── 3 Maccabees 7:1–8 — Ptolemy&apos;s Second Decree ────────────────── */
    {
      ref: '3 Maccabees 7:1–8',
      title: 'Ptolemy&apos;s Second Decree',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(1,
              hp('Ptolemy made a proclamation throughout all his kingdom:', 'mac3-7-decree'),
              t(' "Let all the Jews go free, and restore unto them their goods and their lands."')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-7-decree',
          html:
            'The oppressor becomes the herald of deliverance. What started as a death sentence from the same king now flows out as a decree of honor. The reversal is absolute—and it comes from Ptolemy&apos;s own mouth. No intermediary. The God who turned his heart to darkness has now turned it to light.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(2,
              t('And Ptolemy sent '),
              hy('letters', 'mac3-7-epistoles'),
              t(' unto all his officers throughout the land, saying, "Treat the Jews with honor, for the God of heaven has shown His power in their behalf. Let their burden be lifted, and let none oppress them."')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac3-7-epistoles',
          title: 'Epistolē — Letter; Decree',
          script: 'ἐπιστολή',
          translit: '<strong>epistolē</strong> · letter; official proclamation',
          description:
            'The king&apos;s letters are not private. They are official decrees, sent to every provincial officer. What Ptolemy says now reaches every ear in Egypt. The proclamation of deliverance is as public as the sentence of death.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(3,
              t('And he caused '),
              hg('the enslaved to be released', 'mac3-7-released'),
              t(' from their bondage, and commanded that they be allowed to return unto their homes.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-7-released',
          html:
            'Not freed in name only, but freed to go home. The prison doors open. The labor camps empty. The Jews begin the long journey back to Jerusalem. A people who lived under a death sentence walks free—not by their own strength, but by the hand of God, working through the very king who condemned them.',
        },

        {
          kind: 'christ',
          id: 'mac3-7-christ-hearts',
          title: 'Christ Connection — Hearts Turned by God',
          html:
            'The book of Proverbs says, "The king&apos;s heart is in the hand of the Lord, as the rivers of water: he turneth it whithersoever he will" (Proverbs 21:1). Ptolemy did not choose to let the Jews go. God chose for him. This is the glory of the Christ-to-come—not that He needs to overthrow earthly rulers by force, but that He can turn their hearts as easily as water flows. Jesus&apos; own crucifixion will be the perfect expression of this power: not defending Himself with armies, but asking forgiveness for those who kill Him, so that through Him even our enemies become sons of God.',
        },

        {
          kind: 'carry',
          html:
            'Is there someone in your life whose heart seems as hard as a stone? Someone whose resistance feels absolute? God&apos;s hand on Ptolemy&apos;s heart is not a rare miracle for the Bible only. It is how He works. Pray for those who oppose you—not because they are good, but because God holds their hearts in His hands, and what looks unmovable can turn like a river.',
        },

        {
          kind: 'reflection',
          id: 'mac3-7-decree-reflect',
          prompt:
            'Ptolemy rescinded his death sentence. Has God ever reversed something you thought was final—a closed door, a failed hope, a sentence you had given yourself? What changed?',
        },
      ],
    },

    /* ─── 3 Maccabees 7:9–22 — The Jews&apos; Rights Restored ──────────────── */
    {
      ref: '3 Maccabees 7:9–22',
      title: 'The Jews&apos; Rights Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(9,
              t('And the king commanded that all their '),
              hg('lands and possessions', 'mac3-7-goods'),
              t(' be restored unto them without harm.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-7-goods',
          html:
            'More than freedom of the body—restoration of what was taken. The homes they owned, the fields they tended, the flocks, the shops, the workshops. Everything the state had seized in its rage was to be made whole again. This is not theoretical grace; it is material, tangible, in houses and land.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(10,
              t('And he caused '),
              hp('restitution', 'mac3-7-christ-restore'),
              t(' to be made for all losses they had suffered. And every one who had been wronged received compensation.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Ptolemy does not merely free them; he pays. The economy itself is reset. Those who lost everything in the terror now receive payment—a public acknowledgment that what was taken was wrong. Forgiveness here is not "let it go"; it is "let it be made right."',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(11,
              t('And the Jews were allowed to assemble together and to worship the God of their fathers, and none were permitted to trouble them or to speak against them.')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'Freedom to worship—freedom to gather, to pray, to remember God in the way your conscience tells you to. It may seem small until you do not have it. When you gather with your people to worship, you are not practicing religion; you are exercising a freedom that millions have never known. That gathering is an act of thanksgiving for a grace you may not have to fight for, but must never take for granted.',
        },

        {
          kind: 'christ',
          id: 'mac3-7-christ-restore',
          title: 'Christ Connection — Restoration Through the Cross',
          html:
            'Ptolemy&apos;s restoration is good—but temporary. It rests on a king&apos;s whim. The restoration Christ brings is eternal. Hebrews 9:12 says Christ "by his own blood entered in once into the holy place, having obtained eternal redemption." What was lost to sin is not paid for with gold; it is bought back with the blood of the Son of God. The restitution is not a temporary reprieve—it is a forever home in the presence of the Father. Every material restoration in Scripture points to the one restoration that cannot be revoked.',
        },

        {
          kind: 'reflection',
          id: 'mac3-7-restore-reflect',
          prompt:
            'Where are you still waiting for something to be made right? What would it mean to trust God with the restitution you still hope for?',
        },
      ],
    },

    /* ─── 3 Maccabees 7:23–35 — The Feast of Deliverance ────────────────── */
    {
      ref: '3 Maccabees 7:23–35',
      title: 'The Feast of Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(23,
              t('And the Jews made '),
              hp('seven days of feasting', 'mac3-7-christ-feast'),
              t(' in every place, calling it the Feast of Deliverance, that the mercy of God might be remembered.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-7-feasting',
          html:
            'Seven days—the number of completion. They do not celebrate for a day and move on. They gather and feast for a full week. Food, wine, music, the company of the living. A feast is not a solemn thing; it is joy made visible. The Jews who lived through the terror are now commanded to rejoice.',
        },

        {
          kind: 'greek',
          id: 'mac3-7-heorte',
          title: 'Heortē — Feast; Festival',
          script: 'ἑορτή',
          translit: '<strong>heortē</strong> · feast; sacred festival',
          description:
            'A heortē is not a meal; it is a sacred gathering. It marks a moment when God acted, and makes that moment present again. Every time the feast is kept, the deliverance is re-membered, made present, brought back to life.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(24,
              t('And they ordained this feast to be kept by the Jews in Egypt and by their children after them, saying, "Let this day be a witness unto all generations that the Lord hath saved us from death."')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'When you celebrate—whether a birthday, an anniversary, or a day set apart to remember God&apos;s faithfulness—you are doing what 3 Maccabees does. You are telling the next generation: here is what God did. This day matters. This is why we gather. The feast itself becomes a sermon. Your joy becomes a testimony.',
        },

        {
          kind: 'greek',
          id: 'mac3-7-lytrosis',
          title: 'Lytrōsis — Redemption; Deliverance',
          script: 'λύτρωσις',
          translit: '<strong>lytrōsis</strong> · redemption; ransom; deliverance from captivity',
          description:
            'Lytrōsis is not merely rescue; it is the payment of a price. God redeemed Israel out of Egypt—not by decree, but at cost. The Greeks saw this word everywhere in the New Testament when Christ is called the Redeemer. One word, two testaments: God always buys back His people.',
        },

        {
          kind: 'christ',
          id: 'mac3-7-christ-feast',
          title: 'Christ Connection — The Marriage Supper of the Lamb',
          html:
            'The Feast of Deliverance points forward to the marriage supper of the Lamb (Revelation 19:9). When Christ returns, there will be feasting—not in sorrow, but in perfect joy. We will sit at the table with the One who saved us. The wine we drink will be the wine of the eternal kingdom, the food the bread of life itself. Every feast now is a rehearsal, a taste, a promise of that supper to come. When you feast in remembrance of God&apos;s salvation, you are saying: "Lord, come quickly."',
        },

        {
          kind: 'reflection',
          id: 'mac3-7-feast-reflect',
          prompt:
            'What deliverance of God do you need to feast over? How might your joy become a witness to your family, your church, your children?',
        },
      ],
    },

    /* ─── 3 Maccabees 7:36–42 — The Seven Days of Feasting ────────────────── */
    {
      ref: '3 Maccabees 7:36–42',
      title: 'Seven Days of Feasting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(36,
              t('And '),
              hg('every house was filled with joy', 'mac3-7-chara'),
              t(', and the people ate and drank and sang songs of praise unto the God of their salvation.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac3-7-chara',
          title: 'Chara — Joy; Gladness',
          script: 'χαρά',
          translit: '<strong>chara</strong> · joy; gladness; delight',
          description:
            'Not contentment, not mere relief. Chara is the joy of being alive again, of dancing, of being reunited with the people you love. It fills every house—not just one gathering, but home after home, family after family, all celebrating at once.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(37,
              t('And they sang, saying, "The Lord hath turned our mourning into dancing. He hath put off our sackcloth and girded us with gladness."')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'They quote Psalm 30:11, which they know by heart. The ancient words, written long before, now become their own song. They are not the first to be delivered; they are part of a long line of people whom God has saved. The feast connects them backward to the ancestors and forward to the children who will keep the feast after them.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(38,
              t('And the women made garlands, and the men wreathed themselves with flowers, and children played in the streets in safety.')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'There is a place in Scripture for tears, for mourning, for sitting in silence when words fail. But there is also a place for wreaths of flowers, for children playing in the streets, for bodies that dance. Joy is not frivolous. It is the most serious response a human can make to the God who saves. When you let yourself be happy—truly happy, without guilt—you are honoring His work. You are saying: this is what you have done, and I will not pretend it is small.',
        },

        {
          kind: 'reflection',
          id: 'mac3-7-joy-reflect',
          prompt:
            'Mourning turned to dancing. In your own story, what sorrow has God turned to joy? How long did the feast last?',
        },
      ],
    },

    /* ─── 3 Maccabees 7:43–50 — The Condemned Freed & Apostates Dealt ────────── */
    {
      ref: '3 Maccabees 7:43–50',
      title: 'The Condemned Freed; Apostates Dealt With',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(43,
              t('And Ptolemy issued another decree, saying, "Let all the Jews who were condemned to death be released from their chains and set free."')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Not just an end to the terror; the actual prisoners are let out. The ones whose names were on the death lists, who sat in dungeons waiting for execution, walk free into daylight. Their death was coming; the king has turned away from it.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(44,
              t('And '),
              hg('there were found certain among the Jews who had sacrificed to Dionysus and had apostatized from the law of their God.', 'mac3-7-apostasia'),
              t(' And the people identified them and brought them forward.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-7-apostasia-comment',
          html:
            '<strong>NOTE ON APOSTASY:</strong> 3 Maccabees does not minimize apostasy—it is recorded as a real sin, a real breach. These were Jews who, under torture and threat, sacrificed to Dionysus to save their own lives. The text does not condemn them with cruelty; it simply names what they did. What follows is difficult—a chapter of historical faith wrestling with judgment.',
        },

        {
          kind: 'greek',
          id: 'mac3-7-apostasia',
          title: 'Apostasia — Apostasy; Falling Away',
          script: 'ἀποστασία',
          translit: '<strong>apostasia</strong> · apostasy; renunciation; falling away from faith',
          description:
            'Apostasia is not mere doubt; it is a public act of renunciation. These Jews did not simply fail to keep the law in secret—they publicly sacrificed to an idol. The word will appear again in the New Testament for those who turn away from Christ.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(45,
              t('And the congregation of the Jews, in their righteousness, executed them, that they might cleanse the covenant and sanctify the law of the Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-7-apostates-dealt',
          html:
            '<strong>DOCTRINAL WARNING:</strong> The execution of apostates is recorded here as historical fact. The text does not explicitly condemn it; it presents it as an act of covenant-keeping. But we read it now with post-cross eyes. Jesus will say to His followers: "Love your enemies. Pray for those who persecute you" (Matthew 5:44). The mercy of Christ is broader than any ancient covenant code. We hold the text as true history without endorsing every action within it. God permitted many things in the old covenant that Christ Himself later forbade. We honor Scripture by reading it honestly, not by pretending every action in it models our own behavior.',
        },

        {
          kind: 'carry',
          html:
            'Apostasy is real—a real turning away from God, a real breach of covenant. The text does not excuse it. But neither does it justify cruelty. The Jews who kept the law were right to grieve what their brothers had done. But the Christ who came later will teach a harder thing: forgive them seventy times seven. Hold the tension. Covenant matters. Faithfulness matters. And mercy, in the end, is the highest law.',
        },

        {
          kind: 'reflection',
          id: 'mac3-7-apostasy-reflect',
          prompt:
            'Have you ever renounced something you believed? Or seen someone else do it? What did it cost them? What might calling them back look like?',
        },
      ],
    },

    /* ─── 3 Maccabees 7:51–60 — The Journey Home and Memorial Feast ────────── */
    {
      ref: '3 Maccabees 7:51–60',
      title: 'The Journey Home; The Memorial Feast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(51,
              t('And the Jews made their way homeward, and '),
              hp('they praised God with songs along the road', 'mac3-7-christ-praise'),
              t(', saying, "The Lord hath brought us out of Egypt a second time. He hath saved us from death. His mercy endureth forever."')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'A road full of singing. Families walking northward toward Jerusalem, their possessions restored, their chains broken. The same God who brought them out of Egypt in the days of Moses has done it again. He is a God who saves His people across generations. What He did once, He does again.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(52,
              t('And when they came to Jerusalem, they entered the temple of the Lord, and '),
              hg('they offered sacrifices and kept feast', 'mac3-7-memorial'),
              t(' for seven days.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-7-memorial',
          html:
            'Back in the city. Back at the temple. The worship space is restored, and so are the worshippers. The sacrifice they offer is not a sacrifice of appeasement—it is a sacrifice of thanksgiving. They give something to God in gratitude for what He has given them: their lives.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(53,
              t('And the people determined that the Feast of Deliverance should be observed every year, that all future generations might know how God hath remembered His covenant and hath saved His people.')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'A feast is not a one-time thing; it is a law written into the future. Your children will keep it. Their children will keep it. What God has done becomes the fabric of your people&apos;s calendar, as regular as seasons. What you celebrate today is a gift to the next generation—you are teaching them, by the very feast you keep, that God can be trusted.',
        },

        {
          kind: 'christ',
          id: 'mac3-7-christ-praise',
          title: 'Christ Connection — Eternal Praise',
          html:
            'The Jews sang on the road home. They praise in the temple. The book of Revelation shows us the eternal future: "And I saw a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, standing before the throne and before the Lamb, clothed with white robes, and palms in their hands; and crying with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb" (Revelation 7:9–10). The Feast of Deliverance is a shadow of that endless feast, when the saints of all ages will sing together the deliverance that Christ has won.',
        },

        {
          kind: 'reflection',
          id: 'mac3-7-memorial-reflect',
          prompt:
            'What festival could you establish in your own family or community to remember God&apos;s faithfulness? What deliverance would it commemorate?',
        },

        {
          kind: 'artwork',
          matchTitle: /feast|celebration|exodus/i,
          matchArtist: /tissot/i,
          caption: '3 Maccabees 7 — The Feast of Deliverance',
        },
      ],
    },

    /* ─── Final reflection: The Book&apos;s Arc ──────────────────────────────── */
    {
      ref: '3 Maccabees 7:51–60 — The Closing',
      title: 'The Book Closes in Thanksgiving',
      blocks: [
        {
          kind: 'commentary',
          html:
            '<strong>From Terror to Feast:</strong> 3 Maccabees begins with Ptolemy threatening genocide. It ends with Ptolemy issuing a decree of restoration, and the Jews feasting in remembrance. No single hero saves them—not Judas Maccabee (he does not appear in this book), not a warrior king, not a clever plot. God works through providential means: the king&apos;s mind is turned, the enslaved are freed, the condemned are released. The story moves in the shape of the Psalms: from darkness to light, from lament to praise, from a people near death to a people singing. And the feast the Jews establish is meant to last forever—a weekly or annual act of witness, saying to every generation that comes after: <em>this is what the Lord has done.</em>',
        },
        {
          kind: 'carry',
          html:
            'The book of 3 Maccabees does not have a sword-swinging hero or a dramatic battle. Its power is quieter: it shows you a God who is at work even when you cannot see the mechanism. A king&apos;s heart turns. Doors open. The enslaved walk free. And the people who lived through the terror do not forget—they feast. They create a liturgy. They hand it to their children and say: tell this story so that you, too, will know that God is real, that He loves us, that He saves.',
        },
        {
          kind: 'reflection',
          id: 'mac3-7-closing',
          prompt:
            'As you close this book, what is the deliverance you are carrying home with you? What feast, what practice, what regular act of remembrance might you establish to keep that deliverance alive in your heart and in your family?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Ptolemy made proclamation: "Let all the Jews go free. Restore unto them their goods and their lands." The Jews returned to Jerusalem with songs and praises. They established the Feast of Deliverance—that their children might know: the Lord hath saved us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 7 · Study Guide',
    label: 'Share 3 Maccabees 7',
  },
};
