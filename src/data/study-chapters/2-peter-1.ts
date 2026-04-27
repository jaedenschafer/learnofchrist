import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Peter 1 — Divine Nature & Precious Promises
 *
 * Peter writes to believers to stir up their memory of the gospel they have received.
 * God has given us exceeding great and precious promises. Through these, we partake
 * of the divine nature, escaping the corruption that is in the world through lust.
 * Add to your faith virtue, knowledge, temperance, patience, godliness, brotherly
 * kindness, and love. Holy men of God spoke as they were moved by the Holy Spirit.
 */
export const SECOND_PETER_1: RichChapterContent = {
  bookSlug: '2-peter',
  bookName: '2 Peter',
  chapter: 1,

  intros: [
    'Peter writes a second epistle to the same scattered believers. He begins with a reminder: you have received faith as precious as ours. The God who loves you is the God who calls you. His divine power has given us all things necessary for life and godliness—not through human achievement but through His promises.',
    'He then lists the virtues that should characterize the believer: faith, virtue, knowledge, temperance, patience, godliness, brotherly kindness, charity. These are not burdensome additions to faith but the natural expression of a heart transformed by the gospel. As we add these one to another, our faith becomes fruitful and our calling sure.',
  ],

  sections: [
    /* ─── 2 Peter 1:1–11 — Precious Promises ───────────────────────── */
    {
      ref: '2 Peter 1:1–11',
      title: 'Divine Nature & Virtue',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Simon Peter, a servant and an apostle of Jesus Christ, to them that have obtained like precious faith with us through the righteousness of God and our Saviour Jesus Christ:'),
            plain(3, 'According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue:'),
            plain(4, 'Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.'),
            plain(5, 'And beside this, giving all diligence, add to your faith virtue; and to virtue knowledge; and to knowledge temperance; and to temperance patience; and to patience godliness; and to godliness brotherly kindness; and to brotherly kindness charity.'),
            plain(8, 'For if these things be in you, and abound, they make you that ye shall neither be barren nor unfruitful in the knowledge of our Lord Jesus Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2pet1-promises',
          html:
            'Peter speaks of exceeding great and precious promises. Not wishes or hopes, but promises—God&apos;s solemn commitments to those who believe. Through these promises, we escape the corruption of the world. We are not transported out of the world physically, but we are freed from its grip internally. We can walk through the world without being shaped by its lusts.',
        },
        {
          kind: 'greek',
          id: '2pet1-arete',
          title: 'Arete — Virtue',
          script: 'ἀρετή',
          translit: '<strong>Arete</strong> · virtue; excellence; moral goodness; distinguished character',
          description:
            'Virtue is not a vague ideal but the concrete expression of faith. It is excellence in conduct, character, and service. Faith becomes virtue when it moves us to act rightly.',
        },
        {
          kind: 'commentary',
          id: '2pet1-divine-nature',
          html:
            'The promise to partake of the divine nature has stirred debate throughout history. Peter means that we share in God&apos;s character—His holiness, His love, His faithfulness. We become like Him. This is not to say we become God, but that through transformation in Christ we increasingly reflect His character and align ourselves with His purposes.',
        },
        {
          kind: 'christ',
          id: '2pet1-christ-virtue',
          title: 'Christ Connection — The Pattern of Virtue',
          html:
            'Jesus embodies all these virtues. His faith was absolute. His virtue was evident in every action. His knowledge of God was direct and unmediated. His temperance was perfect. His patience with sinners endless. His godliness was complete. We are called to be conformed to His image, to become like Him.',
        },
        {
          kind: 'carry',
          html:
            'Peter calls for diligence—earnest effort. Add virtue to faith. Add knowledge to virtue. Add temperance to knowledge. This is not passive. It requires will, intention, practice. Yet it is not bootstrapping ourselves into godliness. The power comes from God. Our part is to yield to that power and work it out in our lives.',
        },
        {
          kind: 'reflection',
          id: '2pet1-virtue',
          prompt: 'Which virtue does Peter list do you most need to develop? How might faith deepen in you through that growth?',
        },
      ],
    },

    /* ─── 2 Peter 1:16–21 — Prophetic Word ──────────────────────────── */
    {
      ref: '2 Peter 1:16–21',
      title: 'The Prophetic Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(16, 'For we have not followed cunningly devised fables, when we made known unto you the power and coming of our Lord Jesus Christ, but were eyewitnesses of his majesty.'),
            plain(17, 'For he received from God the Father honour and glory, when there came such a voice to him from the excellent glory, This is my beloved Son, in whom I am well pleased.'),
            plain(19, 'We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place, until the day dawn, and the day star arise in your hearts:'),
            plain(20, 'Knowing this first, that no prophecy of the scripture is of any private interpretation.'),
            plain(21, 'For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2pet1-eyewitness',
          html:
            'Peter speaks as an eyewitness. He saw the transfiguration—Jesus transformed, His face shining like the sun, His garments white as light. He heard the Father&apos;s voice from heaven: "This is my beloved Son, in whom I am well pleased." This is not myth or invention. It is testimony to what he saw and heard.',
        },
        {
          kind: 'greek',
          id: '2pet1-mythos',
          title: 'Mythos — Fable',
          script: 'μῦθος',
          translit: '<strong>Mythos</strong> · myth; fable; a story devised for effect',
          description:
            'Peter contrasts eyewitness testimony with fabricated stories. The gospel is not clever fiction. It is grounded in historical events that he personally witnessed. The power and coming of Christ are not invented but real.',
        },
        {
          kind: 'commentary',
          id: '2pet1-prophecy',
          html:
            'Yet Peter says the prophetic word is "more sure." This is striking. Even the eyewitness testimony of the transfiguration is confirmed by and subordinate to the prophetic word—the Old Testament predictions of Christ. Scripture is the stable foundation. It is a lamp shining in darkness until the full day of Christ dawns in believers&apos; hearts.',
        },
        {
          kind: 'christ',
          id: '2pet1-christ-prophecy',
          title: 'Christ Connection — Fulfilled Promise',
          html:
            'Christ is the fulfillment of prophecy. The Old Testament is filled with predictions of His coming. Peter, who witnessed His glory, affirms that the prophetic word has proven true. Scripture&apos;s promises are being worked out in real time, and they will be consummated at His return.',
        },
        {
          kind: 'carry',
          html:
            'Peter emphasizes that no prophecy of Scripture is of private interpretation. Scripture&apos;s meaning is not invented by individual readers. Holy men spoke as they were moved by the Holy Spirit. The same Spirit who inspired the prophets guides our reading. We come to Scripture not as autonomous interpreters but as disciples of the Spirit.',
        },
        {
          kind: 'reflection',
          id: '2pet1-scripture',
          prompt: 'How has Scripture been like "a light that shineth in a dark place" for you? What promise are you holding onto?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'According as his divine power hath given unto us all things that pertain unto life and godliness. Whereby are given unto us exceeding great and precious promises. We have also a more sure word of prophecy. Holy men of God spake as they were moved by the Holy Ghost.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Peter 1 · Study Guide',
  },

  hasHebrew: false,
};
