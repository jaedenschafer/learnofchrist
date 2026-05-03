import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 23 — The Shepherd Psalm
 *
 * "The Lord is my shepherd; I shall not want." These words, perhaps more than
 * any others in Scripture, have brought comfort to the dying, the grieving, the
 * lost. The psalm presents God not as a distant judge but as an intimate
 * caretaker, one who knows His sheep, leads them beside still waters, restores
 * their soul, and walks with them even through the valley of the shadow of
 * death. For Christians, this shepherd finds its ultimate identity in Jesus
 * Christ, who lays down His life for the sheep.
 */
export const PSALMS_23: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 23,

  estimatedMinutes: { 5: 2, 10: 4, 15: 5 },
  intros: [
    'Psalm 23 is perhaps the most beloved psalm in all of Scripture. Its six verses contain a theology of comfort that has sustained believers through every kind of darkness. The psalmist begins in absolute trust: "I shall not want." Not might not want, not usually want—shall not want. This is the confidence of one who knows that his shepherd is faithful. And as the psalm unfolds, it moves through every human circumstance: sustenance, rest, guidance, and the final fear—the shadow of death itself. Yet even in that final valley, the shepherd is present.',
  ],

  sections: [
    {
      ref: 'Psalm 23:1–4',
      title: 'Following the Shepherd',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(1, 'The Lord is my shepherd; I shall not want.'),
            plain(2, 'He maketh me to lie down in green pastures: he leadeth me beside the still waters.'),
            plain(3, 'He restoreth my soul: he leadeth me in the paths of righteousness for his name&apos;s sake.'),
            plain(4, 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms23-shepherd',
          html: 'The first verse establishes everything. Not "The Lord is like a shepherd," but "is my shepherd." The relationship is personal, intimate, possessive in the best sense. This is the God who has chosen me, who tends me, who knows me by name. And the result? "I shall not want." Complete provision. Not occasional provision, not the bare minimum, but a fullness that lacks nothing. This is the confidence that flows from knowing oneself to be in God&apos;s care.',
        },
        {
          kind: 'hebrew',
          id: 'psalms23-shepherd-term',
          title: 'Ro&apos;eh — "Shepherd" (Tender of Sheep)',
          script: 'רֹעֶה',
          translit: '<strong>Ro&apos;eh</strong> · shepherd; one who tends; one who leads and cares for',
          description: 'The Hebrew word ro&apos;eh carries a sense of intimate, day-to-day care. A shepherd is not a distant administrator. He knows each sheep, understands their weaknesses, leads them to water and pasture, protects them from predators, carries the lambs in his own arms. When the psalmist names God "my shepherd," he is claiming the most intimate form of divine care available in human language.',
        },
        {
          kind: 'commentary',
          id: 'psalms23-green-pastures',
          html: 'The imagery shifts to abundance. Green pastures. Still waters. The shepherd does not drive His flock into barren wastelands. He leads them to places of nourishment and rest. And He does not merely point them toward these places—He makes them lie down. He stops them. He forces them to rest when they would otherwise drive themselves to exhaustion. This too is shepherding: to know when your people need not to work but to be still.',
        },
        {
          kind: 'commentary',
          id: 'psalms23-paths-righteousness',
          html: 'Then comes the shepherd&apos;s guidance toward holiness: "He restoreth my soul: he leadeth me in the paths of righteousness for his name&apos;s sake." The sheep is not led in these paths for the sheep&apos;s sake alone, but for the shepherd&apos;s name&apos;s sake. When we walk in righteousness, God is honored. The path is chosen not to gratify us, but to glorify Him—yet in glorifying Him, we find our deepest good.',
        },
        {
          kind: 'christ',
          id: 'psalms23-christ-shepherd',
          title: 'Christ Connection — The Good Shepherd',
          html: 'John 10:11 records Jesus saying, "I am the good shepherd: the good shepherd giveth his life for the sheep." In John 10:14, He adds, "I am the good shepherd, and know my sheep, and am known of mine." Jesus claims the role the psalmist here attributes to God. More, He adds to it: He does not merely tend the sheep; He dies for them. His shepherding reaches its fullest expression in the Cross, where He lays down His life for the very sheep He tends.',
        },
        {
          kind: 'carry',
          html: 'The valley of the shadow of death—we all must walk it. Loss, illness, grief, the approach of our own mortality. Yet the psalm does not say we walk it alone. "Thou art with me." The shepherd&apos;s rod and staff—the very instruments of direction and discipline—become instruments of comfort. In our darkest hour, we are not abandoned. We are tended.',
        },
        {
          kind: 'reflection',
          id: 'psalms23-valley-walk',
          prompt: 'When you face your own valley—loss, fear, uncertainty—do you truly believe that God walks with you? What would it mean for the rod and staff of His discipline to become a source of comfort rather than dread?',
        },
      ],
    },

    {
      ref: 'Psalm 23:5–6',
      title: 'Provision and Homecoming',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(5, 'Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.'),
            plain(6, 'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms23-table',
          html: 'The image shifts from wilderness to banquet. Not merely food, but a table prepared. Not merely anointing, but anointing in the presence of enemies. The psalmist is saying: God does not merely provide in secret. He provides publicly. He honors His own in the sight of those who oppose them. He sets a feast. He pours out blessing until it overflows. There is no restraint in God&apos;s generosity. His cup runs over.',
        },
        {
          kind: 'commentary',
          id: 'psalms23-goodness-mercy',
          html: '"Surely goodness and mercy shall follow me all the days of my life." The word translated "follow" carries the sense of pursuing, chasing, running after. Goodness and mercy do not merely happen to find us. They pursue us. They follow us actively, relentlessly. This is the God whose nature is to bless, who runs after His people with compassion even when they run from Him.',
        },
        {
          kind: 'carry',
          html: 'The final promise is not merely provision in this life but dwelling in the house of the Lord forever. The shepherd&apos;s care does not end at death. The pasture we enter leads to the Father&apos;s house. The still waters we drink from in this life are but a foretaste of the river of life that flows from the throne of God. To be in God&apos;s care is to be destined for His eternal presence.',
        },
        {
          kind: 'reflection',
          id: 'psalms23-dwell-forever',
          prompt: 'As you read these words—"I will dwell in the house of the Lord for ever"—what does that promise stir in you? How might dwelling eternally with God reshape how you live today?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord is my shepherd; I shall not want. ...Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 23 · Study Guide',
  },

  hasHebrew: true,
};
