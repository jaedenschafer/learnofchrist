import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 4 — Peace That Surpasseth Understanding
 *
 * Hear me when I call, O God of my righteousness. Stand in awe, and sin not:
 * commune with your own heart upon your bed, and be still. Lord, lift thou up
 * the light of thy countenance upon us. I will both lay me down in peace, and
 * sleep: for thou, Lord, only makest me dwell in safety. This is the psalm of
 * evening prayer, of the soul finding rest not through the elimination of
 * trouble, but through the presence of God. It is the promise of a peace that
 * the world cannot give, a peace that guards the heart and mind when all else
 * is in turmoil.
 */
export const PSALMS_4: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 4,

  estimatedMinutes: { 5: 2, 10: 7, 15: 8 },
  intros: [
    'Psalm 4 is a psalm for the evening, for the time when the day&apos;s labor is done and the soul returns to the quietness of rest. But it is a quietness that does not come easily. The psalmist opens by calling to God: "Hear me when I call, O God of my righteousness." There is urgency in the appeal. There is trouble, though it is not named. And yet the movement of the psalm is toward peace, toward sleep, toward the knowledge that the Lord makes you dwell in safety.',
    'The psalm speaks to a fundamental human need: the need for peace that does not depend on circumstances. We live in a world of conflict, of rivalry, of competition. Men say to themselves, "Who will show us any good?" and they seek their peace in wealth, in status, in the approval of others. But the psalmist offers a different path. Seek the light of the Lord&apos;s face. Commune with your own heart. Be still. And you will find a peace so deep that you can lay yourself down and sleep, knowing that only the Lord makes you dwell in safety.',
  ],

  sections: [
    /* ─── Psalm 4:1–4 — Standing in Awe ────────────────────────────────────── */
    {
      ref: 'Psalm 4:1–4',
      title: 'When Called, God Answers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Hear me when I call, O God of my righteousness: thou hast enlarged me when I was in distress; have mercy upon me, and hear my prayer.'),
            plain(2, 'O ye sons of men, how long will ye turn my glory into shame? how long will ye love vanity, and seek after leasing?'),
            plain(3, 'But know ye that the Lord hath set apart him that is godly for himself: the Lord will hear when I call unto him.'),
            plain(4, 'Stand in awe, and sin not: commune with your own heart upon your bed, and be still. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms4-hear-me',
          html:
            '"Hear me when I call, O God of my righteousness." The psalm addresses God not as God of power or God of creation, but as "God of my righteousness." This is deeply personal. The psalmist has chosen righteousness, has walked in God&apos;s way, and calls upon God on the basis of that covenant relationship. He is not appealing to arbitrary power. He is appealing to a God who has promised to hear the prayer of the righteous.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-enlarged',
          html:
            '"Thou hast enlarged me when I was in distress." The metaphor is of being hemmed in, confined, unable to move—and then being given room, expanded, freed. God has done this before. God has heard before. The psalmist appeals to history—to the memory of God&apos;s previous deliverances—as the basis for present faith. What God has done, He can do again.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-glory-shame',
          html:
            '"O ye sons of men, how long will ye turn my glory into shame?" There are those who have taken the psalmist&apos;s honor and twisted it into disgrace. They have attacked him, sought to undermine him, spread lies about him. This is the source of the distress. It is not physical danger, but the assault on reputation, the turning of good name into shame. And it weighs upon the soul.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-vanity',
          html:
            '"How long will ye love vanity, and seek after leasing?" The attackers love emptiness. They pursue lies. They have turned from truth and chosen falsehood. The psalmist does not respond to them in kind. Instead, he addresses himself to a deeper reality—the truth that God knows the godly and will hear their prayer.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-godly',
          html:
            '"But know ye that the Lord hath set apart him that is godly for himself." In the midst of the attack on his character, the psalmist affirms something essential: the Lord has set him apart. He is marked as God&apos;s own. Whatever others say, whatever shame they try to heap upon him, this fundamental reality remains: he belongs to God.',
        },
        {
          kind: 'hebrew',
          id: 'psalms4-chasid',
          title: 'Chasid — "Godly One"',
          script: 'חָסִיד',
          translit: '<strong>Chasid</strong> · godly one; one who practices covenant loyalty; one who is faithful',
          description:
            'The word chasid refers to one who practices hesed—covenant loyalty, faithful kindness. The chasid is not merely good in an abstract sense. He is someone who has bound himself to God through covenant, who honors that covenant through faithful obedience, who stands out in a world of vanity and falsehood as one marked by integrity and faith.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-be-still',
          html:
            '"Stand in awe, and sin not: commune with your own heart upon your bed, and be still." This is the path of peace in the face of attack: first, stand in awe. Recognize God&apos;s greatness. Let reverence for Him dwarf your fear of your enemies. Then, sin not—do not respond to their falsehood with falsehood, to their attacks with attacks. Instead, turn inward. Commune with your own heart. Speak to yourself. Tell yourself the truth. And be still. Rest. Cease striving. Let God fight for you.',
        },
      ],
    },

    /* ─── Psalm 4:5–8 — The Light of the Lord ──────────────────────────────── */
    {
      ref: 'Psalm 4:5–8',
      title: 'Safety and Sleep',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(5, 'Offer the sacrifices of righteousness, and put your trust in the Lord.'),
            plain(6, 'There be many that say, Who will shew us any good? Lord, lift thou up the light of thy countenance upon us.'),
            plain(7, 'Thou hast put gladness in my heart, more than in the time when their corn and their wine increased.'),
            plain(8, 'I will both lay me down in peace, and sleep: for thou, Lord, only makest me dwell in safety.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms4-sacrifice',
          html:
            '"Offer the sacrifices of righteousness, and put your trust in the Lord." In the face of the world&apos;s demands for revenge, for defending your honor, for fighting back, the psalmist offers a different response: the sacrifice of righteousness. Not the blood of animals on an altar, but the offering of a life lived in alignment with God&apos;s will. And trust. Put your confidence in the Lord, not in your own vindication.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-good',
          html:
            '"There be many that say, Who will shew us any good?" This is the refrain of the world—a constant questioning about where blessing will come from, where safety is found. Men look around and see only competition, only scarcity, only the need to grasp and fight for their share. The world is weary. It does not know where goodness can be found.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-light',
          html:
            '"Lord, lift thou up the light of thy countenance upon us." But the psalmist knows where goodness comes from. It comes from the face of God—from the turning of His attention toward you with favor. The metaphor is of the sun rising, of darkness giving way to light. When God&apos;s face shines upon you, everything changes. Darkness flees. You see your way. You know you are seen.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-gladness',
          html:
            '"Thou hast put gladness in my heart, more than in the time when their corn and their wine increased." The psalmist compares his joy to the joy of harvest time—when the fields are full, when there is plenty, when material prosperity is evident. And he says that the gladness God has given him exceeds even that joy. This is the remarkable promise of the gospel: that communion with God brings deeper satisfaction than any material possession.',
        },
        {
          kind: 'commentary',
          id: 'psalms4-peace-sleep',
          html:
            '"I will both lay me down in peace, and sleep: for thou, Lord, only makest me dwell in safety." This is the culmination. The psalmist will sleep. Not fitfully, not with anxiety, but in peace. And he will sleep knowing that the only one who makes him dwell safely is the Lord. Not his own vigilance. Not his own power. Not his own righteousness, though he has offered sacrifices of righteousness. Only the Lord.',
        },
        {
          kind: 'christ',
          id: 'psalms4-christ-peace',
          title: 'Christ Connection — Peace I Leave With You',
          html:
            'In John 14:27, Jesus says to His disciples: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid." This is the peace of Psalm 4—a peace that does not depend on the absence of enemies or the safety of circumstances, but on the presence of God. Jesus offers His own peace, the peace that sustained Him at Gethsemane, the peace that allowed Him to sleep in the boat while the storm raged. In Philippians 4:7, Paul writes of "the peace of God, which passeth all understanding" guarding "your hearts and your minds through Christ Jesus." This is the peace the psalmist discovered, and it is ours through Christ.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 4 teaches that true peace is not found in the vindication of your honor, the defeat of your enemies, or the achievement of your goals. It is found in the light of God&apos;s face, in the gladness He puts in your heart, in the knowledge that only He can make you safe. When you feel attacked, when your reputation is threatened, when the world seems to demand that you fight for yourself, this psalm invites you to do something radically different: commune with your own heart, be still, and trust in the Lord.',
        },
        {
          kind: 'reflection',
          id: 'psalms4-whose-peace',
          prompt: 'What would it mean for you to experience a peace greater than any material prosperity? What would you have to trust the Lord with in order to sleep in peace?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will both lay me down in peace, and sleep: for thou, Lord, only makest me dwell in safety. Lord, lift thou up the light of thy countenance upon us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 4 · Study Guide',
  },

  hasHebrew: true,
};
