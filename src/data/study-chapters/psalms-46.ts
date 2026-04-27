import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 46 — God With Us
 *
 * "God is our refuge and strength, a very present help in trouble." "Be still,
 * and know that I am God." The psalm moves from chaos (rivers and mountains
 * shaking) to peace through the presence of God. "The Lord of hosts is with us."
 * Christ is Immanuel—God with us—the ultimate fulfillment of this promise.
 */
export const PSALMS_46: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 46,

  intros: [
    'Psalm 46 begins with one of Scripture&apos;s most foundational promises: "God is our refuge and strength, a very present help in trouble." Note the specificity: not an abstract God, but "our" God. Not a distant God, but present. Not a God for some other time, but present help "in trouble"—right now, in the midst of difficulty. The psalmist then describes the kind of trouble: the earth itself shaking, the mountains being carried into the midst of the sea, waters roaring and foaming. This is total disorder. This is the undoing of creation itself.',
    'Yet in the midst of chaos, a voice speaks: "Be still, and know that I am God." The refusal to panic, the call to stillness, is rooted in a single fact: God is present. God is on the throne. God&apos;s city—Jerusalem—will not be moved because God is in its midst. For Christian readers, this presence reaches its fullness in Christ, who is Immanuel—God with us. The One who cannot be shaken, who brings peace in the midst of chaos, who calls us to stillness and trust.',
  ],

  sections: [
    {
      ref: 'Psalm 46:1–7',
      title: 'Refuge in the Chaos',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            plain(1, 'God is our refuge and strength, a very present help in trouble.'),
            plain(2, 'Therefore will not we fear, though the earth be removed, and though the mountains be carried into the midst of the sea;'),
            plain(3, 'Though the waters thereof roar and be troubled, though the mountains shake with the swelling thereof. Selah.'),
            plain(4, 'There is a river the streams whereof shall make glad the city of God, the holy place of the tabernacles of the most High.'),
            plain(5, 'God is in the midst of her; she shall not be moved: God shall help her, and that right early.'),
            plain(6, 'The heathen raged, the kingdoms were moved: he uttered his voice, the earth melted.'),
            plain(7, 'The Lord of hosts is with us; the God of Jacob is our refuge. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms46-refuge-strength',
          html:
            'The opening line is the entire thesis of the psalm. God is refuge—a place of safety, a fortress. But He is also strength—the power to endure, to act, to overcome. And He is not these things in general. He is "our" refuge, "our" strength. The covenant connection is immediate. He belongs to His people. He is bound to them.',
        },
        {
          kind: 'hebrew',
          id: 'psalms46-machase',
          title: 'Machase — "Refuge"',
          script: 'מַחֲסֶה',
          translit: '<strong>Machase</strong> · refuge; shelter; place of safety',
          description:
            'Machase describes a place where one runs for safety. Not a place one visits casually, but a place one flees to when danger is near. To call God one&apos;s machase is to declare that He is the ultimate safe place, the destination when all else fails.',
        },
        {
          kind: 'commentary',
          id: 'psalms46-chaos',
          html:
            'Then the psalmist paints a picture of total chaos: the earth removed, mountains carried into the sea, waters roaring and troubled. This is not small trouble. This is cosmic disorder. This is creation coming undone. If such things were to happen—"though" they happen—the people need fear not. Why? Because God is their refuge.',
        },
        {
          kind: 'commentary',
          id: 'psalms46-river',
          html:
            'But the psalm does not stay in chaos. It moves to order. "There is a river the streams whereof shall make glad the city of God." While the world roars with disorder, God&apos;s city is made glad by a river. This is refreshment, life, joy. The image suggests that even when the created world is shaking, God&apos;s city—those who dwell in Him—is fed and refreshed.',
        },
        {
          kind: 'commentary',
          id: 'psalms46-midst',
          html:
            '"God is in the midst of her; she shall not be moved." This is the crucial assurance. The city will not be moved because God is in her midst. Not standing at the gate, but in the center, at the heart, present among His people. And God will help, "and that right early"—immediately, without delay.',
        },
        {
          kind: 'reflection',
          id: 'psalms46-refuge-call',
          prompt: 'When the world around you shakes—personal loss, global crisis, uncertainty—can you retreat to the truth that God is your refuge? What would stillness and trust look like in that moment?',
        },
      ],
    },

    {
      ref: 'Psalm 46:8–11',
      title: 'Be Still and Know',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            plain(8, 'Come, behold the works of the Lord, what desolations he hath made in the earth.'),
            plain(9, 'He maketh wars to cease unto the end of the earth; he breaketh the bow, and cutteth the spear in sunder; he burneth the chariot in the fire.'),
            plain(10, 'Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.'),
            plain(11, 'The Lord of hosts is with us; the God of Jacob is our refuge. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms46-come-behold',
          html:
            '"Come, behold the works of the Lord." The psalmist invites the reader to witness. Look at what God has done. In the midst of cosmic chaos, God has brought forth desolation—not the desolation of chaos, but the desolation of judgment, where God has broken the instruments of war. Bows are broken, spears are cut in two, chariots are burned. This is God working to bring peace.',
        },
        {
          kind: 'commentary',
          id: 'psalms46-wars-cease',
          html:
            '"He maketh wars to cease unto the end of the earth." This is the ultimate promise—the cessation of human warfare, the end of conflict. And not through human exhaustion, but through God&apos;s intervention. God is the One who brings peace, who breaks the instruments of destruction.',
        },
        {
          kind: 'hebrew',
          id: 'psalms46-rapah',
          title: 'Rapah — "Be Still"',
          script: 'רָפָה',
          translit: '<strong>Rapah</strong> · be still; relax; let go; stop striving',
          description:
            'Rapah is not merely silence. It means to stop struggling, to release your grip, to let go of the need to control. To "be still" in the sense this verse intends is to surrender, to trust, to allow God to be God.',
        },
        {
          kind: 'commentary',
          id: 'psalms46-be-still-know',
          html:
            '"Be still, and know that I am God." This is the word that will echo through millennia. It is the call of God to His anxious people: stop. Release. Let go of the illusion that you control outcomes. Accept the reality: I am God. Not you. Not your enemies. Not circumstance. God. And in that acceptance, peace becomes possible.',
        },
        {
          kind: 'commentary',
          id: 'psalms46-exalted',
          html:
            'And God will be exalted. "I will be exalted among the heathen, I will be exalted in the earth." The whole world will recognize God&apos;s power and majesty. Not everyone will submit. But everyone will know. The revelation will be universal.',
        },
        {
          kind: 'christ',
          id: 'psalms46-christ-immanuel',
          title: 'Christ Connection — Immanuel, God With Us',
          html:
            'In Matthew 1:23, the angel announces to Joseph: "Behold, a virgin shall be with child, and shall bring forth a son: and they shall call his name Immanuel: which being interpreted is, God with us." Psalm 46&apos;s promise—that God is present, that His city cannot be shaken because He is in its midst—reaches its fulfillment in Christ. Jesus is God present in human flesh. He is the refuge that cannot be moved. He is the One who calls us to "come unto me, all ye that labour and are heavy laden, and I will give you rest." In Christ, the promise of Psalm 46 is made personal and intimate. God is with us.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 46 teaches that in the midst of chaos—personal or cosmic—the answer is not to panic, not to scheme, not to grasp for control, but to be still. To release. To know that God is God. To recognize that His presence is the only refuge that cannot be shaken. And to understand that this is not a hope for some future moment, but a present reality. "A very present help in trouble." God is here. Now. In this moment. The question is whether you will be still enough to know it.',
        },
        {
          kind: 'reflection',
          id: 'psalms46-still-know',
          prompt: 'What would "be still and know that I am God" mean for you in the chaos you face right now? What would it take to release your striving and trust in God&apos;s presence?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God is our refuge and strength, a very present help in trouble...Be still, and know that I am God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 46 · Study Guide',
  },

  hasHebrew: true,
};
