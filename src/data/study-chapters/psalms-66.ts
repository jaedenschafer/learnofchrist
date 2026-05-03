import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Psalm 66 — Make a Joyful Noise
 *
 * The psalm opens with a command: "Make a joyful noise unto God, all ye lands."
 * This is not a whisper. It is not a private prayer. It is a summons to the whole
 * earth to cry out in gladness. And what provokes this joy? The works of God. The
 * terrible things He has done. The psalmist then turns inward: through fire and
 * water God has tested and refined. But He has brought the people through to a
 * place of abundance. Now the question: how does one respond to a God whose works
 * are both terrible and redemptive? With praise that is costly, with offerings that
 * matter, with a life laid open before Him.
 */
export const PSALMS_66: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 66,

  estimatedMinutes: { beginner: 3, intermediate: 5, deep: 8 },
  intros: [
    'Psalm 66 is a corporate psalm—a call to the nations to join in praise of God. "Make a joyful noise unto God, all ye lands." The summons is universal. The God being praised is not the tribal God of Israel alone, but the God of all peoples. And what are the grounds for this universal praise? God\'s works are terrible. He has cast down the enemies of His people. He has brought them through fire and water. The whole earth has seen and known what God has done.',
    'But then the psalm becomes personal. The speaker moves from "us" to "I," from the corporate testimony to individual experience. "Come and see the works of God"—not merely as historical fact, but as an invitation to behold, to witness, to understand. The works of God are not relics of the past. They are living demonstrations of His power and mercy, visible to all who have eyes to see.',
  ],

  sections: [
    /* ─── Psalm 66:1–7 — Come and See ──────────────────────────────────── */
    {
      ref: 'Psalm 66:1–7',
      title: 'The Works of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 66,
          lines: [
            plain(1, 'Make a joyful noise unto God, all ye lands:'),
            plain(2, 'Sing forth the honour of his name: make his praise glorious.'),
            plain(3, 'Say unto God, How terrible art thou in thy works! through the greatness of thy power shall thine enemies submit themselves unto thee.'),
            plain(4, 'All the earth shall worship thee, and shall sing unto thee; they shall sing to thy name. Selah.'),
            plain(5, 'Come and see the works of God: he is terrible in his doing toward the children of men.'),
            plain(6, 'He turned the sea into dry land: they went through the flood on foot: there did we rejoice in him.'),
            plain(7, 'He ruleth by his power for ever; his eyes behold the nations: let not the rebellious exalt themselves. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms66-joyful-noise',
          html:
            'The opening command is direct and unambiguous: "Make a joyful noise unto God, all ye lands." This is not a suggestion. It is not a private devotion. It is a proclamation that sweeps across all nations and peoples. The grounds for this joyfulness are the works of God. But this joy is not naive or surface-level. It acknowledges that God\'s works are "terrible"—awesome, overwhelming, sometimes devastating. Yet it is precisely this terrible power, this awesome might, that calls forth praise.',
        },
        {
          kind: 'commentary',
          id: 'psalms66-submit',
          html:
            '"Through the greatness of thy power shall thine enemies submit themselves unto thee." This is the logic of the psalm: God\'s power is so great that opposition is futile. The enemies of God, the rebellious, will eventually yield. They will "submit themselves"—not because they have changed their minds, but because reality itself enforces the supremacy of God. The psalm calls the worshipper to align oneself with this reality rather than against it.',
        },
        {
          kind: 'commentary',
          id: 'psalms66-come-see',
          html:
            '"Come and see the works of God." This is an invitation to witness, to observe, to draw near and behold. The works of God are not hidden or obscure. They are visible, knowable, available to human understanding. The Red Sea parted. The Flood was crossed on foot. The enemies were subdued. These are not metaphors or myths. They are actions in history that bear witness to God\'s reality and power. The invitation stands across time: come and see. Look. Observe what God has done.',
        },
        {
          kind: 'hebrew',
          id: 'psalms66-nora',
          title: 'Nora — "Terrible" (Awesome)',
          script: 'נוֹרָא',
          translit: '<strong>Nora</strong> · awesome; terrible; inspiring awe and fear; the tremendum',
          description:
            'Nora means awesome in the full sense—inspiring both awe and fear, commanding reverence and trembling. It is the terror of encountering the infinite, the weight of coming face to face with power infinitely greater than oneself. It is not evil terror, but the appropriate response of the finite to the infinite.',
        },
        {
          kind: 'christ',
          id: 'psalms66-christ-come-see',
          title: 'Christ Connection — Come and See',
          html:
            'The invitation "Come and see the works of God" echoes forward to the gospel. When Philip calls Nathanael to follow Jesus, he says, "Come and see." And when John the Baptist\'s disciples ask Jesus where He dwells, Jesus says, "Come and see." The works of God are not merely historical—they are Christological. To see the works of God is ultimately to see Christ, the Word in whom all creation was made and all power is exercised. To see Christ is to see the Father and His power made visible.',
        },
        {
          kind: 'carry',
          html:
            'The psalmist calls us to look at the world and see the works of God. Not as abstract doctrine, but as lived reality. God rules forever. His eyes behold the nations. He sees what we do. This is both a comfort and a challenge. A comfort, because God\'s vigilance means we are not abandoned to chance or chaos. A challenge, because we are always before His eyes—our choices, our hearts, our alignments are all visible to Him who sees all things.',
        },
        {
          kind: 'reflection',
          id: 'psalms66-terrible-works',
          prompt:
            'What "terrible works" of God have you witnessed or read about? What is the difference between being afraid of God and being in awe of Him? How does His terrible power become a grounds for joy?',
        },
      ],
    },

    /* ─── Psalm 66:8–20 — Refined Through Fire ────────────────────────── */
    {
      ref: 'Psalm 66:8–20',
      title: 'Tested and Brought to Abundance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 66,
          lines: [
            plain(8, 'O bless our God, ye people, and make the voice of his praise to be heard:'),
            plain(9, 'Which holdeth our soul in life, and suffereth not our feet to be moved.'),
            plain(10, 'For thou, O God, hast proved us: thou hast tried us, as silver is tried.'),
            plain(11, 'Thou broughtest us into the net; thou laidst affliction upon our loins.'),
            plain(12, 'Thou hast caused men to ride over our heads; we went through fire and through water: but thou broughtest us out into a wealthy place.'),
            plain(13, 'I will go into thy house with burnt offerings: I will pay thee my vows, Which my lips have uttered, and my mouth hath spoken, when I was in trouble.'),
            plain(14, 'I will offer unto thee burnt sacrifices of fatlings, with the incense of rams; I will offer bullocks and goats. Selah.'),
            plain(15, 'Come and hear, all ye that fear God, and I will declare what he hath done for my soul.'),
            plain(16, 'I cried unto him with my mouth, and he was extolled with my tongue.'),
            plain(17, 'If I regard iniquity in my heart, the Lord will not hear me:'),
            plain(18, 'But verily God hath heard me; he hath attended to the voice of my supplication.'),
            plain(19, 'Blessed be God, which hath not turned away my prayer, nor his mercy from me.'),
            plain(20, 'Blessed be God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms66-proved-us',
          html:
            'The tone shifts. The communal praise gives way to personal testimony. The psalmist speaks of being "proved" and "tried"—not as punishment, but as a refiner tests metal. Silver is tried in fire so that impurities may be burned away and the precious metal revealed in its purity. God has tested His people in exactly this way. The language is not gentle: "Thou broughtest us into the net. Thou laidst affliction upon our loins. Thou hast caused men to ride over our heads."',
        },
        {
          kind: 'commentary',
          id: 'psalms66-fire-water',
          html:
            '"We went through fire and through water: but thou broughtest us out into a wealthy place." This is the essential shape of the psalm\'s theology. Testing precedes blessing. The fire and water are not punishments to be escaped, but passages to be endured. And when endured, they lead to abundance—to a "wealthy place," a place of flourishing. The difficulty is not meaningless. It is purposeful, redemptive, clarifying.',
        },
        {
          kind: 'commentary',
          id: 'psalms66-offerings',
          html:
            'The psalmist responds with costly offerings—burnt offerings, sacrifices of fatlings, incense, bullocks, goats. This is not token gratitude. This is the giving of what is precious. In the context of ancient Israel, these are material costs. But they represent something deeper: the offering of oneself, the yielding of that which is most valuable as a response to God\'s mercy.',
        },
        {
          kind: 'hebrew',
          id: 'psalms66-tzaraf',
          title: 'Tzaraf — "Tried" (Refined)',
          script: 'צָרַף',
          translit: '<strong>Tzaraf</strong> · to refine; to test; to purify through fire; to smelt',
          description:
            'Tzaraf is the verb used for refining metals in fire. The impurities burn away, and what remains is pure. When applied to persons, it means to test and refine character, to burn away what is false and reveal what is true. This is a refining that results not in destruction, but in greater purity and worth.',
        },
        {
          kind: 'christ',
          id: 'psalms66-christ-costly-offering',
          title: 'Christ Connection — The Costly Offering',
          html:
            'The psalmist\'s offering of "burnt sacrifices of fatlings" points ultimately to Christ, who offers Himself—not as a partial gift, but as the complete and final sacrifice. The fire and water of affliction that the people endured find their deepest meaning in Christ\'s passion, where He "sweats as it were great drops of blood" in Gethsemane and cries out "My God, why hast thou forsaken me" from the cross. Through His testing comes our redemption, our passage from death to life, from alienation to abundance.',
        },
        {
          kind: 'carry',
          html:
            'The psalmist ends by declaring, "I will declare what he hath done for my soul." This is the burden of those who have been refined—to testify, to tell others what God has done. The path from affliction to abundance, from testing to blessing, is not private or hidden. It is meant to be declared, to be heard, to draw others into the fear of God. We are called not merely to endure our own fire and water, but to speak of it so that others might know that the same God who brings us through is worthy of trust.',
        },
        {
          kind: 'reflection',
          id: 'psalms66-wealthy-place',
          prompt:
            'What fires or waters have you gone through? What did you learn in the refining? Looking back, can you see how God brought you to a "wealthy place"—not necessarily material wealth, but abundance of faith, character, or knowledge?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Come and see the works of God: he is terrible in his doing toward the children of men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 66 · Study Guide',
  },

  hasHebrew: true,
};
