import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 14 — The Last Supper and Gethsemane
 *
 * A woman anoints Jesus with costly spikenard, pouring it on His head. Some
 * murmur—such expensive oil should be given to the poor. But Jesus affirms her:
 * "She hath done what she could: she is come aforehand to anoint my body to the
 * burying." Jesus keeps the Passover with His disciples. Taking bread, He blesses
 * and breaks it: "This is my body." Taking the cup: "This is my blood of the new
 * testament, which is shed for many." Then He goes to Gethsemane, where the
 * agony begins. "Father, all things are possible unto thee; take away this cup
 * from me." Three times He returns from prayer to find the disciples sleeping.
 * Then comes the betrayal. Judas kisses Jesus. The disciples flee. Peter denies
 * Him three times. The chapter shows Christ&apos;s sacrifice prepared—His body and
 * blood given—and the beginning of His passion and abandonment.
 */
export const MARK_14: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 14,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 7 },
  intros: [
    'Mark 14 begins with preparations for death. A woman comes to Jesus in Bethany and pours costly spikenard on His head. Some are indignant, saying the perfume should have been sold and the money given to the poor. But Jesus says: "She hath done what she could: she is come aforehand to anoint my body to the burying." She intuits what is coming. She honors Him in advance of His death. Her act of love is defensive preparation, an anointing for burial.',
    'Jesus keeps the Passover with His disciples. The meal that commemorates Israel&apos;s deliverance becomes the foundation of a new covenant. Taking bread, Jesus blesses, breaks it, and says: "This is my body." Taking the cup, He says: "This is my blood of the new testament, which is shed for many." The old Passover pointed to deliverance from Egypt. The new covenant, sealed in Christ&apos;s body and blood, points to deliverance from sin. Then Jesus goes to Gethsemane to pray. The agony intensifies. "Father, all things are possible unto thee; take away this cup from me: nevertheless not what I will, but what thou wilt." Three times He prays. Three times He finds the disciples asleep. Then the betrayal. Judas kisses Jesus. He is arrested. The disciples flee. Peter denies Him.',
  ],

  sections: [
    /* ─── Mark 14:1–42 — Anointing, Supper, and Prayer ──────────────── */
    {
      ref: 'Mark 14:1–42',
      title: 'Body and Blood, Cup and Passion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(8, 'She hath done what she could: she is come aforehand to anoint my body to the burying.'),
            plain(22, 'And as they did eat, Jesus took bread, and blessed, and brake it, and gave to them, and said, Take, eat: this is my body.'),
            plain(24, 'And he said unto them, This is my blood of the new testament, which is shed for many.'),
            plain(36, 'And he said, Abba, Father, all things are possible unto thee; take away this cup from me: nevertheless not what I will, but what thou wilt.'),
            plain(50, 'And they all forsook him, and fled.'),
            plain(66, 'And Peter said, I know not this man of whom ye speak.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark14-anointing',
          html:
            'The woman who anoints Jesus with costly nard understands what the disciples do not: that Jesus is about to die. Her act is an anticipatory burial anointing, a gesture of honor and love. Jesus says: "She hath done what she could: she is come aforehand to anoint my body to the burying." Her wastefulness (as others see it) is wisdom. She pours out what is precious for the one who is about to be poured out.',
        },
        {
          kind: 'commentary',
          id: 'mark14-new-covenant',
          html:
            'Jesus establishes the Eucharist—the meal that will sustain the church until His return[res:intertextual-passover-eucharist]. Bread becomes the symbol of His body given. Wine becomes the symbol of His blood shed for the forgiveness of sins. The old Passover is fulfilled and transcended. The Lamb of God is slain. His death inaugurates a new covenant, written not on stone but in the hearts of those who partake of His body and blood.',
        },
        {
          kind: 'greek',
          id: 'mark14-diathēkē',
          title: 'Diathēkē — Covenant, Testament',
          script: 'διαθήκη',
          translit: '<strong>Diathēkē</strong> · covenant; testament; agreement; will',
          description:
            'The new covenant (diathēkē) is established by Jesus&apos; death. It supersedes and fulfills the old covenant at Sinai. It is sealed in His blood and made available to all who believe.',
        },
        {
          kind: 'commentary',
          id: 'mark14-gethsemane',
          html:
            'In Gethsemane, Jesus prays with intensity: "Abba, Father, all things are possible unto thee; take away this cup from me: nevertheless not what I will, but what thou wilt."[res:bible-odyssey-gethsemane] This is not the calm acceptance of a fatalistic hero. This is the prayer of one facing genuine suffering, genuine death, yet subordinating His will to the Father&apos;s. The cup represents the passion—the suffering, the betrayal, the death He is about to endure.',
        },
        {
          kind: 'greek',
          id: 'mark14-abba',
          title: 'Abba — Father',
          script: 'ἀββά',
          translit: '<strong>Abba</strong> · father; daddy (intimate, familial form)',
          description:
            'The Aramaic word Abba is intimate and familial—like "Daddy." It expresses Jesus&apos; deep relationship with the Father even in the midst of suffering. Even in agony, He addresses God with intimate trust.',
        },
        {
          kind: 'commentary',
          id: 'mark14-betrayal',
          html:
            'Judas betrays Jesus with a kiss—the sign of affection becomes the sign of betrayal. The disciples all flee. Peter, who swore he would die with Jesus, denies Him three times: "I know not this man of whom ye speak." The disciples&apos; abandonment is complete. Jesus faces the trial, the cross, alone.',
        },
        {
          kind: 'christ',
          id: 'mark14-christ-ransom',
          title: 'Christ Connection — The Lamb of God',
          html:
            'Jesus&apos; body and blood, offered at the Last Supper, prefigure His sacrifice on the cross. He is the Lamb of God whose blood is shed for the sins of the world. His death inaugurates a new covenant in which all who believe are made God&apos;s children.',
        },
        {
          kind: 'carry',
          html:
            'The passage from the woman&apos;s anointing to the disciples&apos; abandonment shows the extremes of discipleship: extravagant love and profound failure. The woman understands and honors. The disciples flee and deny. Yet both are met by Jesus with mercy.',
        },
        {
          kind: 'reflection',
          id: 'mark14-body-blood',
          prompt: 'What does it mean for you to partake of Jesus&apos; body and blood? How does consuming the symbols of His sacrifice change your understanding of your covenant with God?',
        },
      ],
    },

    /* ─── Mark 14:43–72 — Arrest and Denial ───────────────────────────── */
    {
      ref: 'Mark 14:43–72',
      title: 'Betrayal and Denial',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(43, 'And immediately, while he yet spake, cometh Judas, one of the twelve, and with him a great multitude with swords and staves, from the chief priests and the scribes and the elders.'),
            plain(51, 'And there followed him a certain young man, having a linen cloth cast about his naked body; and the young men laid hold on him:'),
            plain(52, 'And he left the linen cloth, and fled from them naked.'),
            plain(66, 'And as Peter was beneath in the palace, there cometh one of the maids of the high priest:'),
            plain(72, 'And the second time the cock crew. And Peter called to mind the word that Jesus said unto him, Before the cock crow twice, thou shalt deny me thrice. And when he thought thereon, he wept.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark14-judas-kiss',
          html:
            'Judas comes with a great multitude carrying swords and staves. He kisses Jesus to identify Him—the kiss is a sign of affection transformed into betrayal. Jesus is arrested. One young man, having a linen cloth about his naked body, follows Jesus as He is led away. The young men grab him, and he flees naked, leaving the linen cloth behind. This is likely Mark&apos;s cryptic way of describing his own presence and escape.',
        },
        {
          kind: 'commentary',
          id: 'mark14-peter-denial',
          html:
            'As Jesus is tried before the Sanhedrin, Peter sits warming himself by a fire in the courtyard. A maid identifies him as one of Jesus&apos; followers. Peter denies it. He goes out into the porch. Another maid says he is one of them. He denies it again. After a while, bystanders say: "Surely thou art one of them: for thou art a Galilean, and thy speech agreeth thereto." Peter curses and swears: "I know not this man of whom ye speak."[res:sefaria-peter-confession] And the cock crows. Twice. Peter remembers Jesus&apos; words and weeps.',
        },
        {
          kind: 'greek',
          id: 'mark14-arneomai',
          title: 'Arneomai — Deny',
          script: 'ἀρνέομαι',
          translit: '<strong>Arneomai</strong> · deny; reject; repudiate',
          description:
            'Peter&apos;s denial is not mere fear. It is a complete repudiation. He uses the strongest language available to distance himself from Jesus. Yet his weeping shows repentance. Even in his deepest failure, Peter is capable of grief and restoration.',
        },
        {
          kind: 'commentary',
          id: 'mark14-weeping',
          html:
            'Peter&apos;s tears mark the turning point. His denial is met not with judgment but with memory and sorrow. Later, the risen Jesus will restore Peter with the words: "Lovest thou me?" The failure is not final. Even those who have denied Jesus can be restored.',
        },
        {
          kind: 'christ',
          id: 'mark14-christ-abandoned',
          title: 'Christ Connection — Abandoned for Our Sakes',
          html:
            'Jesus is betrayed, arrested, abandoned by His disciples. Yet His suffering is voluntary—undertaken for the forgiveness of humanity&apos;s sins. The shame and abandonment He experiences on the cross are redemptive. Through His passion, He conquers sin and death.',
        },
        {
          kind: 'carry',
          html:
            'Peter&apos;s denial reveals the frailty of human faith. Yet Jesus&apos; response is not anger but restoration. The gospel is a gospel of second chances, of grace that pursues even those who have denied their Lord.',
        },
        {
          kind: 'reflection',
          id: 'mark14-deny-affirm',
          prompt: 'Where have you denied Jesus—in action, in speech, in your choices? What would it take for you to weep with repentance and receive restoration?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'This is my body...This is my blood of the new testament, which is shed for many. Not what I will, but what thou wilt.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 14 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-passover-eucharist',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Passover & the Eucharist',
      url: 'https://intertextual.bible/text/exodus-12/mark-14.22',
      description: 'Intertextual links showing how Jesus transformed the Passover meal into a new covenant meal commemorating His death.',
    },
    {
      id: 'bible-odyssey-gethsemane',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gethsemane & Jesus\' Agony',
      url: 'https://www.bibleodyssey.org/dictionary/gethsemane/',
      description: 'Open-access entry on the garden prayer and Jesus\' human struggle with His coming death, revealing His genuine humanity and willing submission.',
    },
    {
      id: 'sefaria-peter-confession',
      kind: 'study',
      source: 'Sefaria',
      label: 'Peter&apos;s Denial & Restoration',
      url: 'https://www.sefaria.org/Mishnah/Sanhedrin/7.5?lang=bi',
      description: 'Jewish legal context on oath-taking and denial, illuminating Peter&apos;s triple denial and later restoration in John 21.',
    },
  ],

  hasHebrew: false,
};
