import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 28 — Resurrection and Commission
 *
 * Mary Magdalene and the other Mary go to the sepulchre. An earthquake. An angel:
 * "He is not here: for he is risen, as he said." The disciples are told to go into
 * Galilee where they will see Him. Jesus appears to the women: "All hail!" He tells
 * them: "Go tell my brethren." To the disciples on a mountain: "All power is given
 * unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing
 * them... teaching them to observe all things whatsoever I have commanded you: and,
 * lo, I am with you alway, even unto the end of the world."
 */
export const MATTHEW_28: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 28,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /Apparition of Jesus to/i,
    caption: 'Matthew 28',
  },
  intros: [
    'In the end of the sabbath, as it begins to dawn toward the first day of the week, Mary Magdalene and the other Mary come to see the sepulchre. Behold, there is a great earthquake. An angel of the Lord descends from heaven, rolls away the stone from the sepulchre, and sits upon it. His countenance is like lightning; his raiment white as snow. The angel speaks to the women: "Fear not ye: for I know that ye seek Jesus, which was crucified. He is not here: for he is risen, as he said."',
    'The angel tells them to go quickly and tell His disciples: "He is risen from the dead; and, behold, he goeth before you into Galilee; there shall ye see him." As the women depart with fear and great joy, Jesus Himself meets them, saying "All hail!" They come and hold Him by the feet and worship Him. Jesus says: "Go tell my brethren that they go into Galilee, and there shall they see me." Then, on a mountain in Galilee, Jesus meets the eleven disciples and gives them the Great Commission.',
  ],

  sections: [
    /* ─── Matthew 28:1–10 — The Resurrection ───────────────────────────────── */
    {
      ref: 'Matthew 28:1–10',
      title: 'He Is Risen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(1, 'In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.'),
            plain(2, 'And, behold, there was a great earthquake: for the angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat upon it.'),
            plain(5, 'And the angel answered and said unto the women, Fear not ye: for I know that ye seek Jesus, which was crucified.'),
            plain(6, 'He is not here: for he is risen, as he said. Come, see the place where the Lord lay.'),
            plain(9, 'And as they went to tell his disciples, behold, Jesus met them, saying, All hail. And they came and held him by the feet, and worshipped him.'),
            plain(10, 'Then said Jesus unto them, Be not afraid: go tell my brethren that they go into Galilee, and there shall they see me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt28-women',
          html:
            'Mary Magdalene and the other Mary approach the tomb early on the first day of the week—not to worship a dead rabbi, but to anoint His body with spices. Yet they find the stone rolled away. An angel, seated upon the stone with a countenance like lightning and raiment white as snow, greets them: "Fear not." This is the first announcement: "He is not here: for he is risen, as he said."',
        },
        {
          kind: 'commentary',
          id: 'matt28-resurrection',
          html:
            'The resurrection is not a resuscitation or a vision [res:bibleodyssey-resurrection]. It is a new existence—the body is real (Jesus can be held) yet transformed (He appears and disappears). Jesus has passed through death and entered a new mode of being. He is not a ghost but a living presence. The sealed tomb cannot contain Him. The stone is rolled away not because He needed help to escape, but to testify to those who come[res:sefaria-daniel-7-13].',
        },
        {
          kind: 'greek',
          id: 'matt28-anastasis',
          title: 'Anastasis — Resurrection',
          script: 'ἀνάστασις',
          translit: '<strong>Anastasis</strong> · resurrection; rising up; the rising from the dead',
          description:
            'Anastasis means a rising up, a standing again. The resurrection is not escape from the body but transformation of the body. It is not a spiritual principle but a concrete, historical event—Jesus rose bodily on the third day.',
        },
        {
          kind: 'commentary',
          id: 'matt28-behold',
          html:
            'As the women depart with fear and great joy, Jesus Himself meets them. "All hail!" They come and hold Him by the feet and worship Him. The risen Christ is not untouchable or distant. He allows Himself to be held. He receives worship. Yet He is also beyond their grasp—He appears and disappears at will. The resurrection is both physical and transcendent.',
        },
        {
          kind: 'christ',
          id: 'matt28-christ-risen',
          title: 'Christ Connection — Christ Risen and Exalted',
          html:
            'The resurrection vindicates all of Jesus&apos; claims. Death could not hold Him. The grave is empty. He rises not as one resuscitated to die again, but as the victor over death itself. In His resurrection, all believers have hope. The same power that raised Jesus from the dead will raise those who believe in Him.',
        },
        {
          kind: 'carry',
          html:
            'The women hold Jesus by the feet and worship. They touch the risen Christ—He is not a phantom but a presence. The resurrection is not merely a doctrine but an encounter. It changes everything. Where death seemed final, hope emerges. Where despair reigned, joy comes.',
        },
        {
          kind: 'reflection',
          id: 'matt28-risen',
          prompt: 'What would the resurrection mean to you personally? How might it change the way you live if you truly believed Christ is risen and alive?',
        },
      ],
    },

    /* ─── Matthew 28:11–20 — The Great Commission ──────────────────────── */
    {
      ref: 'Matthew 28:11–20',
      title: 'Go Ye Therefore',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(16, 'Then the eleven disciples went away into Galilee, into a mountain where Jesus had appointed them.'),
            plain(17, 'And when they saw him, they worshipped him: but some doubted.'),
            plain(18, 'And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth.'),
            plain(19, 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:'),
            plain(20, 'Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt28-galilee',
          html:
            'The eleven disciples go to Galilee, to the mountain where Jesus has appointed them. When they see Him, they worship Him. Yet Matthew notes: "Some doubted." Even in the presence of the risen Christ, doubt lingers. Faith is not the absence of doubt but the courage to trust despite it. Jesus does not condemn their doubt. He speaks to them with power and authority.',
        },
        {
          kind: 'commentary',
          id: 'matt28-all-power',
          html:
            '"All power is given unto me in heaven and in earth." Jesus speaks as one who has conquered death, who has been exalted to God&apos;s right hand, who now possesses universal authority. This is the foundation of the Great Commission. Not by their own power do the disciples go. They go in the name and by the authority of the risen Christ.',
        },
        {
          kind: 'greek',
          id: 'matt28-exousia',
          title: 'Exousia — Power; Authority',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · power; authority; right to govern; permission',
          description:
            'Jesus claims exousia—the right to rule, the power to command, the authority over all things. This is not brute force but legitimate dominion. All the disciples&apos; authority flows from His.',
        },
        {
          kind: 'commentary',
          id: 'matt28-commission',
          html:
            '"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost" [res:intertextual-great-commission]. The Great Commission is universal in scope. Not to the Jews only, but to all nations. Not merely to proclaim the gospel, but to make disciples—to teach them to observe all that Jesus has commanded.',
        },
        {
          kind: 'commentary',
          id: 'matt28-father-son-spirit',
          html:
            '"In the name of the Father, and of the Son, and of the Holy Ghost." The baptismal formula presents the three persons through whom God works: the Father (creator, source), the Son (redeemer), and the Holy Spirit (sustainer, transformer). Believers are baptized into covenant relationship with the triune God.',
        },
        {
          kind: 'commentary',
          id: 'matt28-always',
          html:
            '"Lo, I am with you alway, even unto the end of the world." The promise of presence. The risen Christ does not abandon His disciples. Though He is ascended, He remains present through the Spirit, in the gathered church, in the hearts of believers. This is not a vague spiritual principle but a concrete assurance: "I am with you."',
        },
        {
          kind: 'christ',
          id: 'matt28-christ-commissions',
          title: 'Christ Connection — Christ Commissions and Abides',
          html:
            'Jesus rises from the dead, ascends to universal authority, and sends His disciples to all nations with a promise of abiding presence. The church is born from the Great Commission—called to witness, to baptize, to teach, empowered by the risen Christ who remains always with them.',
        },
        {
          kind: 'carry',
          html:
            'The Great Commission is not for clergy alone or for the first disciples. It is for all believers. You are called to share your faith, to make disciples, to teach others what Christ has taught you. And you do not go alone. Christ is with you, always.',
        },
        {
          kind: 'reflection',
          id: 'matt28-commission-2',
          prompt: 'What does the Great Commission ask of you? How might you go and teach and baptize—in your sphere of influence, with those you know?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost... Lo, I am with you alway.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 28 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-great-commission',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Great Commission — Gospel Parallels',
      url: 'https://intertextual.bible/search?q=Matthew+28+19',
      description: 'Comparison of the Great Commission across Matthew, Mark, Luke, and John, with implications for Christian mission and discipleship.',
    },
    {
      id: 'sefaria-daniel-7-13',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 7:13–14 — The Son of Man in Glory',
      url: 'https://www.sefaria.org/Daniel.7.13',
      description: 'Old Testament prophecy of the Son of Man receiving dominion and glory, which Jesus fulfills in His resurrection and exaltation.',
    },
  ],

  hasHebrew: false,
};
