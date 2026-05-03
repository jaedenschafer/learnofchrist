import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Song of Solomon 5 — The Beloved Knocks
 *
 * "I sleep, but my heart waketh: it is the voice of my beloved that knocketh,
 * saying, Open to me, my sister, my love, my dove, my undefiled." The Beloved
 * comes at night, seeking entrance. The Bride is reluctant at first—she has
 * undressed, she does not want to get up. But his knocking, his plea, changes
 * her. She rises to open to him. And then she describes him in lavish detail:
 * "His head is as the most fine gold...his cheeks are as a bed of spices...he
 * is altogether lovely." The Christian tradition reads this as Christ knocking
 * at the door of the human heart, revealed in Revelation: "Behold, I stand at
 * the door, and knock."
 */
export const SONG_5: RichChapterContent = {
  bookSlug: 'song-of-solomon',
  bookName: 'Song of Solomon',
  chapter: 5,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'The Song enters a new phase. The Bride is sleeping, at rest. And in the night, the Beloved comes and knocks. He asks her to rise and open to him. She is reluctant—she has undressed, her feet are wet. To get up and open the door is inconvenient. But his voice, his plea, his knocking—something in the urgency of it moves her. She rises. And in the act of rising to meet him, something shifts. When she opens the door, he has already moved on, and she goes out to seek him. But this seeking transforms her. She is so moved by his presence, even in his absence, that she cannot find words adequate to describe him.',
    'The Bride then bursts into an extended description of her Beloved. Every part of him is precious, beautiful, worthy. And she concludes: "He is altogether lovely." Not perfect in a detached way, but lovely—worthy of love, desirable, the one her soul loves. The description moves from the physical to the essential. He is not just handsome but wonderful in his entirety. And this revelation comes not from seeing him in daylight, but from the urgency of his knocking, the passion of his plea, the reality of his desire for her.',
  ],

  sections: [
    {
      ref: 'Song of Solomon 5:1–9',
      title: 'The Beloved Knocks; The Bride Seeks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'I am come into my garden, my sister, my spouse: I have gathered my myrrh with my spice; I have eaten my honeycomb with my honey; I have drunk my wine with my milk: eat, O friends; drink, yea, drink abundantly, O beloved.'),
            plain(2, 'I sleep, but my heart waketh: it is the voice of my beloved that knocketh, saying, Open to me, my sister, my love, my dove, my undefiled: for my head is filled with dew, and my locks with the drops of the night.'),
            plain(3, 'I have put off my coat; how shall I put it on? I have washed my feet; how shall I defile them?'),
            plain(4, 'My beloved put in his hand by the hole of the door, and my bowels were moved for him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-5-beloved-knocks',
          html:
            'He knocks. She delays. By the time she rises, he is gone. She runs through the city. The watchmen strike her. She calls after him: tell him I am sick with love. Lost, she searches. Found only in longing.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(5, 'I rose up to open to my beloved; and my hands dropped with myrrh, and my fingers with sweet smelling myrrh, upon the handles of the lock.'),
            plain(6, 'I opened to my beloved; but my beloved had withdrawn himself, and was gone: my soul failed when he spake: I sought him, but I could not find him; I called him, but he gave me no answer.'),
            plain(7, 'The watchmen that went about the city found me, they smote me, they wounded me; the keepers of the walls took away my vail from me.'),
            plain(8, 'I charge you, O daughters of Jerusalem, if ye find my beloved, that ye tell him, that I am sick of love.'),
            plain(9, 'What is thy beloved more than another beloved, O thou fairest among women? what is thy beloved more than another beloved, that thou dost so charge us?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song5-i-sleep-heart-waketh',
          html:
            '"I sleep, but my heart waketh: it is the voice of my beloved that knocketh." The Bride is sleeping, at peace. But her heart is awake, alert, attuned. And at the sound of the Beloved&apos;s voice, she is roused from her natural sleep. She hears his plea. He has been traveling—his head is filled with dew, his locks with drops of the night. He has come to her, seeking her, and he is asking her to open.',
        },
        {
          kind: 'commentary',
          id: 'song5-reluctance',
          html:
            '"I have put off my coat; how shall I put it on? I have washed my feet; how shall I defile them?" The Bride is reluctant. She is comfortable where she is. She has undressed, has bathed. To rise and open the door means to inconvenience herself, to disrupt her rest. This is a real moment of hesitation. The Bride does not automatically run to open. But something changes.',
        },
        {
          kind: 'commentary',
          id: 'song5-bowels-moved',
          html:
            '"My beloved put in his hand by the hole of the door, and my bowels were moved for him." The Beloved reaches through the opening. And the Bride is moved. Her resolve breaks. She rises to open to him. His gesture, his reaching toward her, his persistence—it awakens her love and she responds.',
        },
        {
          kind: 'commentary',
          id: 'song5-beloved-gone',
          html:
            '"I opened to my beloved; but my beloved had withdrawn himself, and was gone." By the time she opens the door, he has gone. This is a test. Will she remain faithful, seeking, even when he is not present? "My soul failed when he spake"—she is devastated by his absence. But she rises to seek him. She goes out into the city. The watchmen find her and wound her.',
        },
        {
          kind: 'carry',
          html:
            'The Song teaches that love sometimes means rising even when it is inconvenient, opening even to an absence. The Bride&apos;s willingness to be inconvenienced, to rise and seek, to endure wounding—these mark the authenticity of her love. She loves not because it is comfortable, but because he is worth it.',
        },
        {
          kind: 'reflection',
          id: 'song5-inconvenient-love',
          prompt: 'What would you be willing to be inconvenienced for? What would move you to rise from comfort? Is your love for Christ something you pursue even when it costs you comfort?',
        },
      ],
    },

    {
      ref: 'Song of Solomon 5:10–16',
      title: 'He Is Altogether Lovely',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(10, 'My beloved is white and ruddy, the chiefest among ten thousand.'),
            plain(11, 'His head is as the most fine gold: his locks are bushy, and black as a raven.'),
            plain(12, 'His eyes are as the eyes of doves by the rivers of waters, washed with milk, and fitly set.'),
            plain(13, 'His cheeks are as a bed of spices, as sweet flowers: his lips like lilies, dropping sweet smelling myrrh.'),
            plain(14, 'His hands are as gold rings set with the beryl: his belly is as bright ivory overlaid with sapphires.'),
            plain(15, 'His legs are as pillars of marble, set upon sockets of fine gold: his countenance is as Lebanon, excellent as the cedars.'),
            plain(16, 'His mouth is most sweet: yea, he is altogether lovely. This is my beloved, and this is my friend, O daughters of Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song5-chiefest-ten-thousand',
          html:
            '"My beloved is white and ruddy, the chiefest among ten thousand." The Bride begins her description by saying he stands out among all others. He is distinguished. His complexion combines white and ruddy—he is vital, alive, beautiful. And he is the chiefest—the preeminent one.',
        },
        {
          kind: 'commentary',
          id: 'song5-altogether-lovely',
          html:
            'The Bride moves through his body systematically. His head is fine gold. His eyes are like doves. His cheeks are beds of spices. His lips are lilies. His hands, his belly, his legs—each is compared to something precious. Gold, beryl, ivory, sapphires, marble, cedar. Every part is valuable, beautiful, worthy of praise. And the conclusion: "Yea, he is altogether lovely." Not just parts of him, but his entire being. He is worthy of love in his totality.',
        },
        {
          kind: 'commentary',
          id: 'song5-beloved-friend',
          html:
            '"This is my beloved, and this is my friend, O daughters of Jerusalem." The Bride concludes by naming him in two ways: her beloved and her friend. He is the one she loves passionately, and the one she knows intimately, whom she trusts. There is both desire and companionship, both passion and friendship.',
        },
        {
          kind: 'christ',
          id: 'song5-christ-knocking',
          title: 'Christ Connection — Christ Knocking at the Door',
          html:
            'In Revelation, Christ says, "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me." Christ knocks. He pleads. He comes in the night, seeking entrance into the human heart. Those who hear His voice and open to Him experience His presence. And the Bride&apos;s description of her Beloved—"altogether lovely"—is the revelation of Christ&apos;s beauty. He is not merely our Beloved, but our Friend. We know Him not just as a distant object of worship, but as One who knows us, who desires us, who is present with us.',
        },
        {
          kind: 'reflection',
          id: 'song5-altogether-lovely-2',
          prompt: 'Do you experience Christ as "altogether lovely"? Or do you see Him in parts—merciful in this moment, just in another? What would it mean to see His entire being as beautiful, as worthy of your full devotion and friendship?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I sleep, but my heart waketh: it is the voice of my beloved that knocketh...My beloved is altogether lovely...This is my beloved, and this is my friend.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Song of Solomon 5 · Study Guide',
  },

  hasHebrew: false,
};
