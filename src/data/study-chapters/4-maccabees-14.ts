import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_14: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 14,

  intros: [
    'The seventh and youngest brother now stands alone. Six have gone before him into death, each strengthening the next. The author pauses to marvel at the one who stands behind all of them: their mother, who watched her sons die rather than deny God.',
    'In the natural order, mothers protect their young. Birds shield their nestlings. Animals hover over their offspring. Yet this mother—who bore them, nursed them, loved them—sent them into death. The author asks: how is this possible? And answers: because she loved something more.',
  ],

  sections: [
    /* Section 1: The Mother watches her sons pass into death */
    {
      ref: '4 Maccabees 14:1–7',
      title: 'The Mother Watches Her Sons Pass Into Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(1,
              t('And the '),
              hp('mother of the seven', 'mothers-love'),
              t(' stood by, and '),
              hg('as the sons were taken one by one unto death', 'carried-away'),
              t(', she was not moved to despair.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mothers-love',
          html:
            'The title "mother of the seven" becomes her identity. She is known not by her own name but by her relationship to those she bore. Now that relationship is tested in the most extreme way: she must watch each one pass into death while remaining herself unmoved by despair.',
        },
        {
          kind: 'commentary',
          id: 'carried-away',
          html:
            'The mother does not hide. She does not flee. She stands by and watches. This is one of the most striking details in the whole passage: the willingness to bear witness, to be present to suffering rather than to shield herself from it. She is <em>carried along</em> with her sons, each one to death.',
        },
        {
          kind: 'greek',
          id: 'mētēr-1',
          title: 'Mētēr — Mother',
          script: 'μήτηρ',
          translit: '<strong>mētēr</strong> · mother; source of life',
          description:
            'She who bore them now stands witness to their bearing their faith unto death. The bond between mother and child is the primary natural love—yet she will choose a higher love.',
        },
        {
          kind: 'christ',
          id: 'christ-1',
          title: 'Christ Connection — The Mother at the Cross',
          html:
            'Mary stands at the foot of the cross and watches her Son die. "Now there stood by the cross of Jesus his mother… Jesus said unto her, Woman, behold thy son!" (John 19:25–26). The anguish of this mother, sending her sons to death for God\'s sake, echoes forward to the anguish of Christ\'s mother, who does not shield herself but stands present in the suffering.',
        },
        {
          kind: 'carry',
          html:
            'Where do you see the cost of faithfulness in the lives around you? Can you name a mother, father, or loved one who has let go of what they held most dear for the sake of their faith? What did you learn from watching them?',
        },
        {
          kind: 'reflection',
          id: 'reflect-1',
          prompt:
            'The mother "was not moved to despair." What is the difference between not being moved to despair and being glad? Can both be true?',
        },
      ],
    },

    /* Section 2: The natural sympathy of mothers */
    {
      ref: '4 Maccabees 14:8–18',
      title: 'The Author Marvels at Her Unnatural Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(8,
              t('Consider now the '),
              hy('natural sympathy of mothers for their young', 'sympathy-natural'),
              t('. The bird defends her nest. The creature hovers over her offspring.')
            ),
            verse(12,
              hg('Yet this mother', 'yet-mother'),
              t(', though she bore these seven in her womb, though her womb trembled with the birth of each, did not cry out saying, Spare my children.')
            ),
            verse(16,
              t('Instead, as each was taken to his death, she '),
              hp('exhorted him to honor God', 'exhort-honor'),
              t(' and to keep the covenant.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sympathy-natural',
          html:
            'The word here is <em>sympatheia</em>—the natural fellow-feeling, the instinctive recoil of a mother\'s heart from her child\'s suffering. It is the most basic of bonds. Yet this mother subdues it. Not by denying it, but by setting against it something stronger: covenant love.',
        },
        {
          kind: 'commentary',
          id: 'yet-mother',
          html:
            'The word "yet" marks the turning point. Everything before it describes what we would expect: a mother bears children, her womb trembles with the agony of birth, she instinctively cries out to save them. But this mother, endowed with all the same instincts, chooses differently. She does not speak the words of protective desperation.',
        },
        {
          kind: 'commentary',
          id: 'exhort-honor',
          html:
            'Instead of begging them to live, she exhorts them to die well. "Exhort" means to urge forward, to strengthen, to encourage. She becomes not a shield against death but a guide toward it—toward death that honors God and keeps faith with the covenant.',
        },
        {
          kind: 'greek',
          id: 'greek-sympatheia',
          title: 'Sympatheia — Fellow-Feeling; Compassion; Natural Affection',
          script: 'συμπάθεια',
          translit: '<strong>sympatheia</strong> · to suffer with; the instinctive bond of natural affection',
          description:
            'Sympatheia is not weakness. It is the deepest human love. What is remarkable is not that she felt it, but that she felt it and chose something stronger still.',
        },
        {
          kind: 'greek',
          id: 'greek-neossos',
          title: 'Neossos — Young Bird; Nestling; Offspring',
          script: 'νεοσσός',
          translit: '<strong>neossos</strong> · young bird; chick; fledgling',
          description:
            'The mother-bird does not think. She shields her young by instinct. But this mother thinks. She chooses. She acts not from instinct but from faith.',
        },
        {
          kind: 'christ',
          id: 'christ-2',
          title: 'Christ Connection — A Hen Gathering Her Chickens',
          html:
            'Jesus says, "O Jerusalem, Jerusalem, thou that killest the prophets… how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!" (Matthew 23:37). The image of the protective hen is one of the most tender in Scripture—and it is an image of Christ\'s love, His desire to gather and shelter. This mother\'s willingness to let go is the counterpoint: she trusts her children to God\'s wings.',
        },
        {
          kind: 'carry',
          html:
            'What does it mean to exhort someone toward faith when their life is on the line? Have you ever spoken words of encouragement to someone facing loss? How did those words feel when you spoke them?',
        },
        {
          kind: 'reflection',
          id: 'reflect-2',
          prompt:
            'The author contrasts the "natural sympathy" of mothers with this mother\'s exhortation toward death. Are these two things necessarily opposed? Could she have felt both at once?',
        },
      ],
    },

    /* Section 3: The seventh brother */
    {
      ref: '4 Maccabees 14:19–27',
      title: 'The Youngest Goes Last',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(19,
              t('And when the seventh—the youngest, whom the torturers thought to turn by his youth—was brought forth, the mother came near and kissed him.')
            ),
            verse(22,
              t('And she said unto him: '),
              hy('My son, have pity upon me that bare thee nine months in my womb', 'womb-bearing'),
              t(', and gave thee suck three years, and nourished thee, and brought thee up unto this day.')
            ),
            verse(24,
              t('But '),
              hg('do not regard my flesh; consider rather the law and the covenant', 'law-over-flesh'),
              t(', that thou mayest live eternally in God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'womb-bearing',
          html:
            'She speaks of her bond with him in language of the body: the nine months, the milk, the years of nurture. She does not deny the love. She names it. She holds it before him. And then she releases it. This is not indifference dressed as faith. This is the greatest love speaking to the greatest love.',
        },
        {
          kind: 'commentary',
          id: 'law-over-flesh',
          html:
            'She does not say: forget that I carried you, forget that I nursed you. She says: remember it, but choose something greater. The law and the covenant are more enduring than flesh. Flesh feeds, clothes, shelters—and then passes away. But the covenant with God is eternal.',
        },
        {
          kind: 'greek',
          id: 'greek-oiktirmos',
          title: 'Oiktirmos — Compassion; Mercy; Pity for Suffering',
          script: 'οἴκτρμος',
          translit: '<strong>oiktirmos</strong> · compassion in response to suffering; merciful feeling',
          description:
            'She asks him to have pity on her—but not to spare himself. She is asking him to extend to her the mercy of dying well, of staying true, of not breaking her heart by breaking his faith.',
        },
        {
          kind: 'christ',
          id: 'christ-3',
          title: 'Christ Connection — Greater Love Hath No One',
          html:
            'Jesus says, "Greater love hath no man than this, that a man lay down his life for his friends" (John 15:13). The seventh brother now lays down his life. His mother—who gave him life, who fed him at her breast—now exhorts him to that greater love. She loves him so much that she will not let him live dishonored; she will let him die faithful.',
        },
        {
          kind: 'carry',
          html:
            'Is there anything you have "let go" for the sake of faith? Not something forced from you, but something you chose to release? What made that choice possible?',
        },
        {
          kind: 'reflection',
          id: 'reflect-3',
          prompt:
            'The mother reminds her son of her body\'s sacrifice for him—pregnancy, nursing, years of care—and then tells him not to regard her flesh. Is she asking him to forget her love, or to remember it differently?',
        },
      ],
    },

    /* Section 4: The beasts that protect their young */
    {
      ref: '4 Maccabees 14:28–38',
      title: 'Even the Beasts Protect Their Young',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(28,
              t('For consider the '),
              hy('beasts that hover over their offspring', 'beasts-hover'),
              t(', putting themselves in peril from those who hunt them. Even they, though without reason, are moved by a kind of divine love to shield what is theirs.')
            ),
            verse(32,
              t('Yet this mother, endowed with reason, with a mother\'s love more tender than any beast\'s, '),
              hg('gave all her children unto death for the sake of righteousness', 'righteousness-gift'),
              t('.')
            ),
            verse(36,
              t('She did not say: I cannot bear to lose them. '),
              hp('She said: Go. Your covenant is greater than your life. God is worthy', 'covenant-worthy'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'beasts-hover',
          html:
            'The author draws on a world of natural observation: anyone who has watched a mother deer, a hen, a lioness knows this instinct. It is written into the body, into the blood. To overcome it requires something that the beasts do not have: reasoned faith. This mother is reasoning her way past the strongest pull in nature.',
        },
        {
          kind: 'commentary',
          id: 'righteousness-gift',
          html:
            'This is the paradox at the heart of the chapter: she gave her children unto death. Not because she was cruel, but because she loved righteousness more than she loved keeping them alive. She gave what was most precious to her for the sake of something she loved even more.',
        },
        {
          kind: 'commentary',
          id: 'covenant-worthy',
          html:
            'This is her witness. These are the words the author imagines her speaking. Not despair, not bargaining, but a clear affirmation: the covenant is greater than life. God is worthy of all we hold dear. This is the faith that moves her—and moves us when we hear her testimony.',
        },
        {
          kind: 'greek',
          id: 'greek-logos',
          title: 'Logos — Word; Reason; Divine Word',
          script: 'λόγος',
          translit: '<strong>logos</strong> · word; reason; the rational principle of the universe',
          description:
            'The beasts lack logos—reason, the word, the divine ordering principle. This mother has it. She uses it not to deny her love, but to order her love toward something eternal.',
        },
        {
          kind: 'christ',
          id: 'christ-4',
          title: 'Christ Connection — Worthy Is the Lamb',
          html:
            'The Revelation asks: "Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing" (Revelation 5:12). This mother might have said the same of God. She believed Him worthy of her sons. She believed that the covenant was more precious than life itself. That belief shaped everything.',
        },
        {
          kind: 'artwork',
          matchTitle: /martyrdom|mother.*child|protection|nest|young/i,
          matchArtist: /./,
          caption: 'The Mother\'s Vigil — Witnessed Love',
        },
        {
          kind: 'carry',
          html:
            'The mother appealed to reason, not emotion. She reasoned with her son about what was worthy, what was eternal, what was worth dying for. When have you had to reason your way toward a hard choice? What truths did you have to hold in mind?',
        },
      ],
    },

    /* Section 5: The mother\'s martyrdom */
    {
      ref: '4 Maccabees 14:39–46',
      title: 'The Mother\'s Martyrdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(39,
              t('And so the youngest brother died. And the mother, having seen all seven pass into death, did not break. She '),
              hy('ascended the pyre and cast herself into the flames', 'pyre-ascend'),
              t('.')
            ),
            verse(42,
              t('Thus she who bore them was not separated from them. She who gave them life gave them also to death—that death which leads to eternal life. She was a '),
              hp('living witness to the covenant', 'living-witness'),
              t(' until the very end.')
            ),
            verse(45,
              t('The author cries out: O mother! O unnatural nature that was nonetheless the truest nature! '),
              hg('You sent your sons to death and followed them into glory', 'glory-follow'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pyre-ascend',
          html:
            'She does not merely watch her sons die and then retire. She joins them. She ascends the pyre herself. This is the final act of the chapter—the mother becomes martyr alongside her sons. She does not merely endure their martyrdom; she completes her own.',
        },
        {
          kind: 'commentary',
          id: 'living-witness',
          html:
            'A "living witness"—and then a dead one, as she joins them in the flames. But her witness is alive because it speaks across centuries. It is alive in those who hear it and are strengthened. It is alive in us, calling us toward faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'glory-follow',
          html:
            'The author cannot contain his wonder. He cries out his amazement. There is paradox here: this mother did an "unnatural" thing—let go of her own flesh and blood—yet in doing so, she became the truest expression of nature itself, which is made for covenant and worship, not merely for survival.',
        },
        {
          kind: 'greek',
          id: 'greek-martyrdom',
          title: 'Martys — Witness; One Who Testifies unto Death',
          script: 'μάρτυς',
          translit: '<strong>martys</strong> · witness; one who bears witness with the whole self, unto death',
          description:
            'A martyr is not someone who merely dies. A martyr is someone who dies bearing witness. This mother bears witness to faith in the most complete way—with her sons, in the very fire that consumed them.',
        },
        {
          kind: 'christ',
          id: 'christ-5',
          title: 'Christ Connection — To Deny Oneself and Take Up the Cross',
          html:
            'Jesus says: "If any man will come after me, let him deny himself, and take up his cross, and follow me" (Matthew 16:24). The mother denied herself. She took up the cross—the yoke of the covenant, the willingness to die for what she believed. She followed her sons into death and, the author tells us, into glory. This is what it looks like to follow Christ before Christ came.',
        },
        {
          kind: 'reflection',
          id: 'reflect-5',
          prompt:
            'The author calls her martyrdom "unnatural nature that was nonetheless the truest nature." What do you think this means? When is faithfulness "unnatural"? When is it the most natural thing of all?',
        },
      ],
    },

    /* Section 6: The mother as icon */
    {
      ref: '4 Maccabees 14:47–52',
      title: 'What We Learn From Her',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(47,
              t('Behold, then, how great is the power of the faith! For the natural bond was not broken; it was '),
              hp('transformed into something stronger and more eternal', 'faith-stronger'),
              t('.')
            ),
            verse(50,
              t('This mother did not ask: Why does God permit suffering? '),
              hg('She asked: To whom shall I be faithful?', 'faithful-ask'),
              t(' And she answered: To God, even unto death.')
            ),
            verse(52,
              t('And therefore she is worthy of remembrance, and her sons with her, in the communion of the faithful until the end of all days.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'faith-stronger',
          html:
            'This is the great revelation of the chapter: faith does not break the natural bonds. It transfigures them. The mother still loved her sons with a mother\'s love. But that love was caught up into something larger—covenant love, love of God, love of eternity. The natural and the eternal are not opposed in faith; they are woven together.',
        },
        {
          kind: 'commentary',
          id: 'faithful-ask',
          html:
            'She did not get stuck in the question that paralyzes faith: why does God permit suffering? Instead, she asked the question that enables faith: to whom shall I be faithful? She asked not about suffering\'s purpose but about her response. And in that response, she found peace.',
        },
        {
          kind: 'greek',
          id: 'greek-pistis',
          title: 'Pistis — Faith; Fidelity; Trust',
          script: 'πίστις',
          translit: '<strong>pistis</strong> · faith; trust; fidelity; being faithful to a covenant',
          description:
            'Her faith was not a feeling. It was a choice, renewed in each moment, to be faithful to the covenant she had made with God before her sons were born, before she knew what it would cost.',
        },
        {
          kind: 'christ',
          id: 'christ-6',
          title: 'Christ Connection — The Communion of Saints',
          html:
            'Paul speaks of "one body" in Christ, "whether Jews or Gentiles, whether bond or free" (1 Corinthians 12:12–13). The mother and her seven sons are part of this body. Their faithfulness speaks across centuries. They are our witnesses. And we are meant to witness their witness—to let their faith teach us, to let their example strengthen us in our own trials.',
        },
        {
          kind: 'carry',
          html:
            'You are surrounded by witnesses—the faithful who died before you, the faithful who live beside you. Whose witness strengthens your faith? Whose example makes you want to be more faithful? Take time to name someone whose faithfulness has marked you.',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'O mother! O unnatural nature that was nonetheless the truest nature! You sent your sons to death and followed them into glory. The natural bond was not broken; it was transformed into something stronger and more eternal.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 14 · Study Guide',
  },
};
