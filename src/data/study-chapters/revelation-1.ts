import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 1 — Vision of the Glorified Christ
 *
 * John&apos;s exile on Patmos gives way to the throne room of heaven. In a vision,
 * he sees the glorified Christ—"I am Alpha and Omega"—holding the seven churches
 * in His hand. This is not the crucified Jesus of the Gospels, but the risen,
 * exalted Lord of all time, "alive for evermore."
 */
export const REVELATION_1: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 1,

  intros: [
    'The Revelation opens not with doctrine but with a vision. John, exiled on the island of Patmos for the sake of the word and the testimony of Jesus, receives a commission to record what he sees. The churches of Asia Minor face tribulation—internal compromise, external pressure, the weight of living as a faithful remnant in a pagan world. They need to see what John sees: that Christ is not absent. He is present, alive, exalted, and in control.',
    'In the throne room, Christ appears not gentle but glorious. His eyes are a flame of fire. His feet are burnished brass. His voice is like the roar of many waters. Yet His hand holds the seven churches. He walks among them. This is the Jesus who speaks to Peter of building His church. This is the Jesus who spoke in parables. But now revealed in power.',
  ],

  sections: [
    {
      ref: 'Revelation 1:1–11',
      title: 'The Revelation Given',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The Revelation of Jesus Christ, which God gave unto him, to shew unto his servants things which must shortly come to pass; and he sent and signified it by his angel unto his servant John:'),
            plain(4, 'John to the seven churches which are in Asia: Grace be unto you, and peace, from him which is, and which was, and which is to come; and from the seven Spirits which are before his throne;'),
            plain(5, 'And from Jesus Christ, who is the faithful witness, and the first begotten of the dead, and the prince of the kings of the earth.'),
            plain(7, 'Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev1-revelation',
          html:
            'The word "revelation" (apokalypsis) means unveiling. John is not inventing but receiving. God gave this vision to Jesus, and Jesus signified it through an angel to John. The chain runs from the Father through the Son to the church. What follows is not John&apos;s speculation but a testimony he is commanded to record. The vision concerns "things which must shortly come to pass"—not distant events but urgent realities to be fulfilled.',
        },
        {
          kind: 'greek',
          id: 'rev1-apokalypsis',
          title: 'Apokalypsis — Revelation',
          script: 'ἀποκάλυψις',
          translit: '<strong>Apokalypsis</strong> · unveiling; revelation; disclosure',
          description:
            'The Greek word apokalypsis means to uncover or lay bare. It is not mystical or esoteric knowledge hidden from others. It is the revelation of things that are real and consequential, now made visible. In the apocalyptic tradition, apokalypsis often refers to the revelation of God&apos;s judgment and the unveiling of the age to come.',
        },
        {
          kind: 'commentary',
          id: 'rev1-faithful-witness',
          html:
            'Jesus is the "faithful witness." He testified to the truth in His earthly ministry and sealed that testimony with His death. He is "the first begotten of the dead"—not the first to be raised, but the preeminent one, the prototype of resurrection. And He is "the prince of the kings of the earth"—not a political ruler like Caesar, but the sovereign to whom all earthly rulers answer.',
        },
        {
          kind: 'christ',
          id: 'rev1-christ-glorified',
          title: 'Christ Connection — The Exalted Lord',
          html:
            'The Christ who appears to John is the same Jesus of the Gospels—the faithful witness who spoke truth and laid down His life. But He appears now in power, exalted and alive forever. His coming with clouds echoes the vision in Daniel 7 and the promise of Matthew 26:64. The One who was pierced will be seen by all. Judgment and redemption flow from His return.',
        },
        {
          kind: 'carry',
          html:
            'John writes to churches facing tribulation. They live in an empire that demands worship of Caesar, that tolerates no other king. Yet the revelation tells them: Christ is the sovereign. His kingdom will not be moved by the politics of this age. When pressure comes, when faithfulness costs, remember—He holds your church in His hand.',
        },
        {
          kind: 'reflection',
          id: 'rev1-sovereign',
          prompt: 'What does it mean to you that Christ is described as the "prince of the kings of the earth"? How does knowing that shift your response to the powers of this world?',
        },
      ],
    },

    {
      ref: 'Revelation 1:12–20',
      title: 'The Vision of the Son of Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks;'),
            plain(13, 'And in the midst of the seven candlesticks one like unto the Son of man, clothed with a garment down to the foot, and girt about the paps with a golden girdle.'),
            plain(14, 'His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire;'),
            plain(15, 'And his feet like unto fine brass, as if they burned in a furnace; and his voice as the sound of many waters.'),
            plain(16, 'And he had in his right hand seven stars: and out of his mouth went a sharp twoedged sword: and his countenance was as the sun shineth in his strength.'),
            plain(17, 'And when I saw him, I fell at his feet as dead. And he laid his right hand upon me, saying unto me, Fear not; I am the first and the last:'),
            plain(18, 'I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev1-vision',
          html:
            'The figure John sees is described as "like unto the Son of man"—recalling Daniel&apos;s vision of one "like the son of man" coming with the clouds of heaven. The seven golden candlesticks represent the seven churches. Christ walks among them, not distant from His people but intimate with them, holding them, walking with them through affliction.',
        },
        {
          kind: 'greek',
          id: 'rev1-huios',
          title: 'Huios Anthropou — Son of Man',
          script: 'ὁ υἱός τοῦ ἀνθρώπου',
          translit: '<strong>Huios anthropou</strong> · the Son of Man; the human one',
          description:
            'In the Gospels, Jesus uses "Son of Man" as His primary self-designation. It combines the vision of Daniel 7—one like a son of man coming with divine authority—with genuine human identity. Here in Revelation, the glorified Christ appears as the Son of Man, embodying both transcendent authority and intimate presence.',
        },
        {
          kind: 'commentary',
          id: 'rev1-keys-death',
          html:
            '"I am alive for evermore, Amen; and have the keys of hell and of death." Christ has conquered death. Death no longer has dominion over Him, and He holds the keys—the authority—over both Hades (the realm of the dead) and death itself. This is the foundation of hope for every persecuted believer. Death cannot destroy what Christ holds.',
        },
        {
          kind: 'christ',
          id: 'rev1-christ-keys',
          title: 'Christ Connection — Master of Death',
          html:
            'Jesus rose from the dead and holds the keys. This is not metaphorical but literal: He has conquered the final enemy. When a believer faces death for the faith, they face it knowing that the One who has the keys is their shepherd. Death is not the end. Christ has opened the way.',
        },
        {
          kind: 'carry',
          html:
            'John falls as dead when he sees Christ in His glory. Yet the first word Christ speaks is "Fear not." The vision is overwhelming, terrifying—but it is also a word of assurance. Christ holds the churches. He walks among them. Whatever comes, He is alive, and He is in control. Let that comfort sustain you.',
        },
        {
          kind: 'reflection',
          id: 'rev1-fear-not',
          prompt: 'What aspects of Christ&apos;s character in this vision comfort you most? When fear comes, how might remembering "Fear not; I am alive for evermore" change your response?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 1 · Study Guide',
  },

  hasHebrew: false,
};
