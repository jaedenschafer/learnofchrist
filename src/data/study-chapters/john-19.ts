import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 19 — Crucifixion and Burial
 *
 * "Behold the man." Pilate presents Jesus, crowned with thorns, bearing a purple
 * robe. The soldiers crucify Him. Above His head, a title: "Jesus of Nazareth, the
 * King of the Jews." He says to Mary: "Woman, behold thy son!" and to the disciple:
 * "Behold thy mother!" Even from the cross, He provides. He says: "I thirst," asking
 * for a drink. Then: "It is finished." His head bows. He gives up the ghost. A
 * soldier pierces His side. Blood and water flow out. Joseph of Arimathea lays His
 * body in a new tomb.
 */
export const JOHN_19: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 19,

  intros: [
    'Pilate brings Jesus out to the crowd, crowned with thorns, wearing a purple robe, his body scarred from the scourging. "Behold the man." Pilate says it as one might point to a spectacle, hoping perhaps that such a broken figure will move the crowd to pity. But they cry: "Crucify him, crucify him!" And so Jesus is led to Golgotha, carrying His cross to the place of the skull.',
    'Crucified between two thieves, Jesus is offered sour wine. A title is placed over His head: "Jesus of Nazareth, the King of the Jews." The soldiers divide His garments by casting lots. Jesus looks at His mother and says to the disciple John: "Woman, behold thy son!" and to John: "Behold thy mother!" Even in agony, He provides. Then: "I thirst." A sponge soaked in vinegar is raised to His lips. And finally: "It is finished." His work is complete. His mission is fulfilled. His head bows. He gives up His spirit. The veil has been torn. The way to the Father is open.',
  ],

  sections: [
    /* ─── John 19:1–27 — The Crucifixion ───────────────────────────────── */
    {
      ref: 'John 19:1–27',
      title: 'Behold the Man; It Is Finished',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(5, 'Then came Jesus out, wearing the crown of thorns, and the purple robe. And Pilate saith unto them, Behold the man!'),
            plain(16, 'Then delivered he him therefore unto them to be crucified. And they took Jesus, and led him away.'),
            plain(17, 'And he bearing his cross went forth into a place called the place of a skull, which is called in the Hebrew Golgotha;'),
            plain(19, 'And Pilate wrote a title, and put it on the cross. And the writing was, JESUS OF NAZARETH THE KING OF THE JEWS.'),
            plain(26, 'When Jesus therefore saw his mother, and the disciple standing by, whom he loved, he saith unto his mother, Woman, behold thy son!'),
            plain(28, 'After this, Jesus knowing that all things were now accomplished, that the scripture might be fulfilled, saith, I thirst.'),
            plain(30, 'When Jesus therefore had received the sour wine, he said, It is finished: and he bowed his head, and gave up the ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john19-behold',
          html:
            '"Behold the man." Pilate presents Jesus to the crowd. He is beaten, crowned with thorns, clothed in mockery. Yet in this broken form, God&apos;s glory is revealed. In His humiliation lies His exaltation. In His weakness, His strength is made perfect. This is the man through whom the world is redeemed.',
        },
        {
          kind: 'commentary',
          id: 'john19-cross',
          html:
            '"He bearing his cross went forth." Jesus carries His own cross to Golgotha. The symbol of shame becomes the instrument of salvation. The cross, meant to break Him, becomes the throne from which He reigns. The execution ground becomes holy ground.',
        },
        {
          kind: 'greek',
          id: 'john19-stauros',
          title: 'Stauros — Cross',
          script: 'σταυρός',
          translit: '<strong>Stauros</strong> · cross; stake; instrument of execution',
          description:
            'The cross was the most shameful death, reserved for slaves and criminals. For a condemned man to be crucified was to be literally cursed, stripped of all dignity. Yet Jesus chooses this death. In it, He takes upon Himself the curse of humanity&apos;s separation from God.',
        },
        {
          kind: 'commentary',
          id: 'john19-title',
          html:
            '"Jesus of Nazareth the King of the Jews." Pilate writes a title meant as mockery. Yet it proclaims truth. Jesus is indeed a king. His kingdom is not of this world, but it is real. From the cross, He reigns. His death is His coronation.',
        },
        {
          kind: 'commentary',
          id: 'john19-mother',
          html:
            '"Woman, behold thy son!" To his mother, Jesus says: "John will care for you." To John: "Your mother is now your responsibility." Even in His death throes, Jesus provides. He does not abandon those He loves. He ensures their care. Love persists even unto death.',
        },
        {
          kind: 'commentary',
          id: 'john19-thirst',
          html:
            '"I thirst." Jesus fully enters human suffering. He experiences physical pain, emotional anguish, spiritual darkness. He does not escape or transcend the full reality of death. He experiences it completely, that He might redeem it completely.',
        },
        {
          kind: 'commentary',
          id: 'john19-finished',
          html:
            '"It is finished." The work is complete. His mission is accomplished. Not just His life, but the work for which His life was given—the redemption of humanity, the opening of the way to God, the defeat of sin and death. All is finished. All is fulfilled.',
        },
        {
          kind: 'christ',
          id: 'john19-christ-redemption',
          title: 'Christ Connection — The Redemptive Death',
          html:
            'Jesus dies not as a victim but as a voluntary offering. His blood is poured out for the life of the world. His broken body becomes the means of healing. In His death, the deepest love is revealed—a love that endures suffering itself rather than abandon the beloved.',
        },
        {
          kind: 'carry',
          html:
            'Christ&apos;s suffering was real. His pain was complete. Yet He endured it for you, for the redemption of the world. You do not face suffering alone. He has walked that path before you. He knows its depths. And He has conquered it.',
        },
        {
          kind: 'reflection',
          id: 'john19-finished',
          prompt: 'What does it mean to you that Jesus&apos; death was the completion of God&apos;s redemptive work? How does His finished work change your relationship to your own struggles?',
        },
      ],
    },

    /* ─── John 19:28–42 — Blood and Water, Burial ────────────────────────── */
    {
      ref: 'John 19:28–42',
      title: 'A Bone of Him Shall Not Be Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(31, 'The Jews therefore, because it was the preparation, that the bodies should not remain upon the cross on the sabbath day, (for that sabbath day was an high day,) besought Pilate that their legs might be broken, and that they might be taken away.'),
            plain(33, 'But when they came to Jesus, and saw that he was dead already, they brake not his legs:'),
            plain(34, 'But one of the soldiers with a spear pierced his side, and forthwith came there out blood and water.'),
            plain(37, 'Again another scripture saith, They shall look on him whom they pierced.'),
            plain(38, 'And after this Joseph of Arimathea, being a disciple of Jesus, but secretly for fear of the Jews, besought Pilate that he might take away the body of Jesus: and Pilate gave him leave. He came therefore, and took the body of Jesus.'),
            plain(42, 'Now in the place where he was crucified there was a garden; and in the garden a new sepulchre, wherein was never man yet laid. There laid they Jesus therefore.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john19-legs',
          html:
            'The soldiers were to break the legs of those crucified, hastening death. But when they came to Jesus, they found Him already dead. A bone of Him shall not be broken—fulfilling prophecy. Even in death, Jesus is treated with the honor due to one who has accomplished His mission.',
        },
        {
          kind: 'commentary',
          id: 'john19-pierced',
          html:
            'One of the soldiers pierces Jesus&apos; side with a spear. Blood and water flow out. A literal detail, yet rich with meaning. Blood speaks of the life given, the covenant enacted. Water speaks of cleansing, of the Spirit. From the dead body flows both the price of redemption and the means of sanctification.',
        },
        {
          kind: 'greek',
          id: 'john19-aima',
          title: 'Aima — Blood',
          script: 'αἷμα',
          translit: '<strong>Aima</strong> · blood; life force; the means of covenant and atonement',
          description:
            'Blood is not merely physical. It represents life, covenant, sacrifice. The blood of Jesus is the price of redemption. Through His blood, sin is forgiven, death is defeated, humanity is reconciled to God.',
        },
        {
          kind: 'commentary',
          id: 'john19-joseph',
          html:
            'Joseph of Arimathea, a disciple but a secret one—one who feared public identification with Jesus—asks Pilate for the body. In death, Joseph risks the public affiliation he avoided in life. He lays Jesus in a new tomb where no one has ever been laid. The burial fulfills Scripture. The tomb is a sign. No death can hold Him.',
        },
        {
          kind: 'christ',
          id: 'john19-christ-burial',
          title: 'Christ Connection — Even the Burial Fulfills',
          html:
            'Every detail of Jesus&apos; death and burial fulfills Old Testament prophecy. He is not a tragic victim whose story ends. He is the fulfillment of God&apos;s long purpose. Even the manner of His death, the piercing of His side, the breaking of no bones, the new tomb—all are written in advance, all testify that He is the Christ.',
        },
        {
          kind: 'carry',
          html:
            'Jesus died. His body was placed in a tomb. The last enemy—death itself—seemed to have won. Yet the tomb is new. No other body rests there. The stage is set for what cannot remain contained, for what death cannot hold.',
        },
        {
          kind: 'reflection',
          id: 'john19-pierced',
          prompt: 'The blood and water that flowed from Jesus&apos; pierced side—what does each represent to you? How do they speak of redemption and cleansing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold the man. It is finished. They shall look on him whom they pierced. A bone of him shall not be broken. Blood and water came out.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 19 · Study Guide',
  },

  hasHebrew: false,
};
