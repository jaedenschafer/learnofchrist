import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 23 — The Trial, Crucifixion, and Death
 *
 * The whole multitude rises and leads Jesus to Pilate. "We found this fellow
 * perverting the nation." Pilate interrogates Him: "Art thou the King of the
 * Jews?" Jesus answers: "Thou sayest it." Pilate finds no fault but yields to
 * the crowd. Two malefactors are led with Him to crucifixion. At Golgotha,
 * Jesus is crucified between two thieves. The soldiers divide His garments by
 * casting lots. The people stand beholding. The rulers deride Him: "He saved
 * others; let him save himself." One of the malefactors reviles Him. The other
 * rebukes: "Dost not thou fear God?" To this thief Jesus says: "To day shalt
 * thou be with me in paradise." The sun is darkened. The veil of the temple is
 * rent. Jesus cries: "Father, into thy hands I commend my spirit." He breathes
 * His last.
 */
export const LUKE_23: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 23,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The whole multitude of the elders, chief priests, and scribes rises and brings Jesus to Pilate. They accuse Him: "We found this fellow perverting the nation, and forbidding to give tribute to Caesar, saying that he himself is Christ a King." Pilate interrogates Him: "Art thou the King of the Jews?" Jesus answers: "Thou sayest it." Pilate says to the chief priests and multitude: "I find no fault in this man." But they cry out, saying: "He stirreth up the people, teaching throughout all Jewry, beginning from Galilee to this place." Pilate hears He is a Galilean and sends Him to Herod.',
    'Herod sees Jesus and is glad. He questions Him at length, but Jesus answers nothing. Herod and his men of war mock Jesus, dress Him in a gorgeous robe, and send Him back to Pilate. Pilate calls together the chief priests and rulers and people and says: "Ye have brought this man unto me, as one that perverteth the people: and, behold, I, having examined him before you, have found no fault in this man." Yet Pilate yields. He releases Barabbas, a murderer, and delivers Jesus to their will.',
  ],

  sections: [
    {
      ref: 'Luke 23:1–25',
      title: 'The Trial Before Pilate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(2, 'And they began to accuse him, saying, We found this fellow perverting the nation, and forbidding to give tribute to Caesar, saying that he himself is Christ a King.'),
            plain(4, 'Then said Pilate to the chief priests and to the people, I find no fault in this man.'),
            plain(24, 'And Pilate gave sentence that it should be as they required.'),
            plain(25, 'And he released unto them him that for sedition and murder was cast into prison, whom they had desired; but he delivered Jesus to their will.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke23-trial',
          html:
            'The chief priests accuse Jesus before Pilate. They mischaracterize His claims. Yet Pilate examines Him and finds no fault. Three times Pilate declares Jesus innocent. Yet the multitude cries out. Political pressure overrides justice. Pilate washes his hands, but he is not innocent. He yields to the will of the mob.',
        },
        {
          kind: 'greek',
          id: 'luke23-athoōs',
          title: 'Athoōs — Innocent; Guiltless; Without Fault',
          script: 'ἀθῷος',
          translit: '<strong>Athoōs</strong> · innocent; guiltless; without fault; free from guilt',
          description:
            'Pilate declares Jesus athoōs—innocent, without fault. Yet innocence is no shield against the crowd&apos;s will. Justice yields to political expediency. The innocent are condemned.',
        },
        {
          kind: 'commentary',
          id: 'luke23-barabbas',
          html:
            'The choice is stark: Jesus or Barabbas. One heals the sick and preaches good news. The other commits sedition and murder. The crowd chooses Barabbas. They release a murderer and condemn the innocent. They prefer darkness to light.',
        },
        {
          kind: 'commentary',
          id: 'luke23-pilate-weakness',
          html:
            'Pilate knows Jesus is innocent. Yet he lacks the courage to act on that knowledge. He cares more for his position than for justice. His cowardice is a different sin from the malice of the chief priests, but it is sin. Neutrality in the face of evil is complicity.',
        },
        {
          kind: 'christ',
          id: 'luke23-christ-innocent',
          title: 'Christ Connection — The Innocent Condemned',
          html:
            'The innocent suffer at the hands of the guilty. Yet this is foreknown, foreordained. The Christ is condemned to die, that through His death others might live.',
        },
        {
          kind: 'reflection',
          id: 'luke23-trial-reflect',
          prompt: 'What does it mean that Pilate found Jesus innocent but delivered Him to death? When do we compromise truth under pressure?',
        },
      ],
    },

    {
      ref: 'Luke 23:26–56',
      title: 'The Crucifixion and Resurrection Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(34, 'Then said Jesus, Father, forgive them; for they know not what they do. And they parted his raiment, and cast lots.'),
            plain(43, 'And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.'),
            plain(44, 'And it was about the sixth hour, and there was a darkness over all the earth until the ninth hour.'),
            plain(46, 'And when Jesus had cried with a loud voice, he said, Father, into thy hands I commend my spirit: and having said thus, he gave up the ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke23-crucifixion',
          html:
            'Jesus is led to Golgotha and crucified. Two malefactors are crucified with Him, one on the right, one on the left. Jesus says: "Father, forgive them; for they know not what they do." Even on the cross, He intercedes for those who crucify Him. His enemies pour out mockery. But Jesus does not respond with bitterness.',
        },
        {
          kind: 'commentary',
          id: 'luke23-thief',
          html:
            'One thief reviles Jesus. The other rebukes him: "Dost not thou fear God? for thou art in the same condemnation." This thief sees Jesus in his pain and confesses: "Lord, remember me when thou comest into thy kingdom." Jesus says: "To day shalt thou be with me in paradise." In his last hours, a criminal finds eternal life.',
        },
        {
          kind: 'greek',
          id: 'luke23-paradeisos',
          title: 'Paradeisos — Paradise; Garden of Delight',
          script: 'παράδεισος',
          translit: '<strong>Paradeisos</strong> · paradise; garden; place of bliss',
          description:
            'Paradise is the garden of delight, the place where the righteous dwell in God&apos;s presence. The thief, though a criminal, dies with Christ and enters paradise. The promise is immediate and sure.',
        },
        {
          kind: 'commentary',
          id: 'luke23-darkness',
          html:
            'At the sixth hour, darkness falls over all the earth until the ninth hour. The sun is blotted out. Creation itself goes dark. At the ninth hour, Jesus cries with a loud voice: "Father, into thy hands I commend my spirit." He releases His spirit to God. He breathes His last.',
        },
        {
          kind: 'christ',
          id: 'luke23-christ-atonement',
          title: 'Christ Connection — The Sacrifice Consummated',
          html:
            'Jesus dies as the final sacrifice. His blood is shed for the sin of the world. Yet even in death, He shows mercy—to the thief, to His enemies, to all who believe. His death opens paradise.',
        },
        {
          kind: 'carry',
          html:
            'Name the moment this week when you wanted to defend yourself. When shame tried to hide. When accusation stung. That moment is where the cross leans in. Instead of armor, remember Him. Instead of a counter-argument, remember forgiveness spoken from the worst pain. The carry is not to become passive—it&apos;s to refuse to let self-defense be your god. When the impulse rises, recall His hands, outstretched. That is your angle.',
        },
        {
          kind: 'reflection',
          id: 'luke23-crucifixion-reflect',
          prompt: 'How does Jesus&apos; forgiveness from the cross challenge you? What does it mean that paradise is opened through His death?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I find no fault in this man. Father, forgive them. To day shalt thou be with me in paradise. Into thy hands I commend my spirit.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 23 · Study Guide',
  },

  hasHebrew: false,
};
