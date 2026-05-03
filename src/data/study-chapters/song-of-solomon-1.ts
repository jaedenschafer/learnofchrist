import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Song of Solomon 1 — The Beloved's Desire
 *
 * "Let him kiss me with the kisses of his mouth: for thy love is better than
 * wine." The Bride opens the Song with passionate longing. She desires her
 * Beloved with an intensity that transcends all other goods. Wine is precious,
 * but his love surpasses it. The entire Song is a celebration of desire,
 * intimacy, and the beauty of erotic love between a man and a woman. And the
 * Christian tradition reads it as an image of Christ and His Church.
 */
export const SONG_1: RichChapterContent = {
  bookSlug: 'song-of-solomon',
  bookName: 'Song of Solomon',
  chapter: 1,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  intros: [
    'The Song of Solomon is unique in Scripture. It does not mention God by name. It does not present itself as instruction or prophecy. It is simply a love song—or rather, a collection of love songs—between a bride and a bridegroom. It celebrates their desire for each other, their beauty, their intimacy. And it does so with a frankness about the body and sexuality that can surprise the modern reader. The Song affirms that the desire between a man and a woman is good, that the body is beautiful, that erotic love has a place within the covenant of marriage.',
    'The Bride opens with an urgent cry: "Let him kiss me with the kisses of his mouth." She is beside herself with desire. She does not introduce herself slowly. She does not wait. She expresses her longing directly, passionately. And she explains it: his love is better than wine. Wine gladdens the heart, brings joy. But his love—his presence, his affection, his body, his attention—surpasses all of these. The Christian tradition reads this opening cry as the cry of the Church toward Christ, the Bridegroom who is "altogether lovely" and whose love transcends all other goods.',
  ],

  sections: [
    {
      ref: 'Song of Solomon 1:1–7',
      title: 'The Bride&apos;s Desire and Self-Awareness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The Song of songs, which is Solomon&apos;s.'),
            plain(2, 'Let him kiss me with the kisses of his mouth: for thy love is better than wine.'),
            plain(3, 'Because of the savour of thy good ointments thy name is as ointment poured forth, therefore do the virgins love thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-of-solomon-1-78mid-1',
          html:
            'The voices change here — bride to beloved, or beloved to bride. The love song is sung antiphonally.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'Draw me, we will run after thee: the king hath brought me into his chambers: we will be glad and rejoice in thee, let us make the mention of thy love better than wine: the upright love thee.'),
            plain(5, 'I am black, but comely, O ye daughters of Jerusalem, as the tents of Kedar, as the curtains of Solomon.'),
            plain(6, 'Look not upon me, because I am black, because the sun hath looked upon me: my mother&apos;s children were angry with me; they made me the keeper of the vineyards; but mine own vineyard have I not kept.'),
            plain(7, 'Tell me, O thou whom my soul loveth, where thou feedest, where thou makest thy flock to rest at noon: for why should I be as one that turneth aside by the flocks of thy companions?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song1-desire',
          html:
            '"Let him kiss me with the kisses of his mouth: for thy love is better than wine." The Bride opens not with description or narration, but with desire. She wants to be kissed. She wants his affection. She compares it to wine—one of the finest luxuries of the ancient world—and says his love surpasses it. This is the language of preference, of priority. Above all goods, she chooses him.',
        },
        {
          kind: 'commentary',
          id: 'song1-ointment',
          html:
            '"Because of the savour of thy good ointments thy name is as ointment poured forth." His very name is fragrant to her. The scent of his ointments—the markers of his presence, his care for himself, his refinement—all of it speaks to her. His reputation spreads. The virgins love him. But the Bride wants not his attention broadly given, but focused on her.',
        },
        {
          kind: 'commentary',
          id: 'song1-black-comely',
          html:
            '"I am black, but comely, O ye daughters of Jerusalem." The Bride addresses the other maidens and speaks of herself with candor. She is dark-skinned—dark from the sun, dark in appearance. She acknowledges her darkness. But she asserts her comeliness. She is beautiful. The Song affirms that beauty is not one standard. The Bride is dark, and she is lovely. She is willing to be seen, to claim her beauty, not to hide.',
        },
        {
          kind: 'commentary',
          id: 'song1-vineyard',
          html:
            '"My mother&apos;s children were angry with me; they made me the keeper of the vineyards; but mine own vineyard have I not kept." The Bride speaks of her labor, her burden. She has worked—the sun has darkened her from her labor in the vineyards. But she has neglected herself, her own beauty, her own care. And now she seeks her Beloved. She asks him where he feeds his flock, where he rests at noon. She wants to be with him.',
        },
        {
          kind: 'carry',
          html:
            'The Song affirms both the Bride&apos;s desire and her self-knowledge. She wants to be loved, but she does not despise herself. She acknowledges her labor, her dark skin, her neglect of self-care. And yet she asserts her beauty and her right to be loved. She does not wait passively. She seeks her Beloved. She asks him directly where he is. She expresses her longing.',
        },
        {
          kind: 'reflection',
          id: 'song1-desire-express',
          prompt: 'Are you able to express desire? To say what you want? To assert your own beauty even when you see your flaws? What would it mean to pursue the good things you long for, rather than waiting passively?',
        },
      ],
    },

    {
      ref: 'Song of Solomon 1:8–17',
      title: 'The Beloved Speaks and the Bride Replies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(8, 'If thou knowest not, O thou fairest among women, go thy way forth by the footsteps of the flock, and feed thy kids beside the shepherds&apos; tents.'),
            plain(9, 'I have compared thee, O my love, to a company of horses in Pharaoh&apos;s chariots.'),
            plain(10, 'Thy cheeks are comely with rows of jewels, thy neck with chains of gold.'),
            plain(11, 'We will make thee borders of gold with studs of silver.'),
            plain(12, 'While the king sitteth at his table, my spikenard sendeth forth the smell thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song-1-beloved-sought',
          html:
            'She seeks him by night. The watchmen find her. She asks of her beloved. Where is he? The whole city watches her search. Love is not quiet. It cries out. It searches. It will not rest until found.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(13, 'A bundle of myrrh is my wellbeloved unto me; he shall lie all night betwixt my breasts.'),
            plain(14, 'My beloved is unto me as a cluster of camphire in the vineyards of Engedi.'),
            plain(15, 'Behold, thou art fair, my love; behold, thou art fair; thou hast doves&apos; eyes.'),
            plain(16, 'Behold, thou art fair, my beloved, yea, pleasant: also our bed is green.'),
            plain(17, 'The beams of our house are cedar, and our rafters of fir.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'song1-beloved-speaks',
          html:
            'The Beloved responds to the Bride. He affirms her beauty in startling comparisons. "I have compared thee to a company of horses in Pharaoh&apos;s chariots." This is not a conventional compliment. But it suggests strength, beauty, nobility—the fierce grace of a war-horse. He adorns her with jewels and gold. He asserts that while the king sits at his table, her fragrance fills the room. Her presence is more intoxicating than any earthly power.',
        },
        {
          kind: 'commentary',
          id: 'song1-myrrh-cluster',
          html:
            '"A bundle of myrrh is my wellbeloved unto me; he shall lie all night betwixt my breasts." The Bride compares her Beloved to myrrh—a precious resin, fragrant and valuable. He lies upon her breast. She holds him close. The image is intimate, erotic, tender. The Song does not separate the physical and the emotional. She loves him with her whole being—her heart and her body are united.',
        },
        {
          kind: 'christ',
          id: 'song1-christ-bridegroom',
          title: 'Christ Connection — Christ the Bridegroom',
          html:
            'The New Testament presents Jesus as the Bridegroom and the Church as His Bride. "I am the good shepherd," Jesus said, and the Church follows Him, as the Bride in Song follows her Beloved to where he feeds his flock. Paul writes to the Corinthians: "I have espoused you to one husband, that I may present you as a chaste virgin to Christ." The intensity of desire, the affirmation of beauty, the intimate union—these are images the New Testament uses to describe the relationship between Christ and His Church. Christ desires His people with a passionate love. He calls them fair, lovely, beloved.',
        },
        {
          kind: 'reflection',
          id: 'song1-beloved-you',
          prompt: 'If Christ is your Beloved, what does it mean that He compares you to the strength of war-horses, that He adorns you with gold and jewels? How does it feel to be told you are lovely, fair, beloved—not because of what you do, but because you are His?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let him kiss me with the kisses of his mouth: for thy love is better than wine...I am black, but comely...Behold, thou art fair, my love; behold, thou art fair.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Song of Solomon 1 · Study Guide',
  },

  hasHebrew: false,
};
