import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 68 — The God of Victory
 *
 * "Let God arise, let his enemies be scattered: let them also that hate him
 * flee before him." This psalm celebrates the triumph of God over all opposing
 * forces. From the scattered enemies to the ransomed captives, the psalm shows
 * a God whose power extends over all the earth, and whose care extends to the
 * most vulnerable among His people.
 */
export const PSALMS_68: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 68,

  estimatedMinutes: { 5: 2, 10: 3, 15: 5 },
  intros: [
    'Psalm 68 is a psalm of cosmic scope. It opens with the majestic command: "Let God arise, let his enemies be scattered." The enemies do not stand and fight. They flee. They are scattered like smoke before the wind. Yet this is not a psalm about divine violence for its own sake. It is a psalm about a God whose power serves justice, whose strength secures the weak, whose triumph means the liberation of the captive.',
    'The psalm moves from the scattered enemies to the ascended Lord, from the judgment of the wicked to the protection of the vulnerable. It shows a God who is both terrible and tender, both mighty and merciful. And it culminates in a vision of God as the source of strength for His people, the one who makes all strongholds and kingdoms bow before Him.',
  ],

  sections: [
    {
      ref: 'Psalm 68:1–10',
      title: 'The Arising God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 68,
          lines: [
            plain(1, 'Let God arise, let his enemies be scattered: let them also that hate him flee before him.'),
            plain(2, 'As smoke is driven away, so drive them away: as wax melteth before the fire, so let the wicked perish at the presence of God.'),
            plain(4, 'Sing unto God, sing praises to his name: extol him that rideth upon the heavens by his name JAH, and rejoice before him.'),
            plain(5, 'A father of the fatherless, and a judge of the widows, is God in his holy habitation.'),
            plain(9, 'Thou, O God, didst send a plentiful rain, whereby thou didst confirm thine inheritance, when it was weary.'),
            plain(10, 'Thy congregation hath dwelt therein: thou, O God, hast prepared of thy goodness for the poor.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms68-arise',
          html: 'The psalm opens with an imperative command: "Let God arise." This is not a polite request, but a declaration that God stands, that He breaks His silence, that He takes action. And as He arises, His enemies are scattered. The mere presence of God is enough to disperse all opposition.',
        },
        {
          kind: 'hebrew',
          id: 'psalms68-yachad',
          title: 'Yachad — "Scattered" (Dispersed)',
          script: 'יָחַד',
          translit: '<strong>Yachad</strong> · scatter, disperse, drive away',
          description: 'The Hebrew word yachad speaks of scattering, of dispersion as the natural consequence of God&apos;s arising. The enemies do not flee because they are brave enough to resist and then retreat. They flee because they cannot stand before God.',
        },
        {
          kind: 'commentary',
          id: 'psalms68-father',
          html: 'Yet the psalm immediately reveals the purpose behind this terrible power: "A father of the fatherless, and a judge of the widows, is God in his holy habitation." God&apos;s might is not exercised for its own sake. It is exercised on behalf of the vulnerable—the orphans, the widows, those without protection in the world.',
        },
        {
          kind: 'commentary',
          id: 'psalms68-rain',
          html: 'God sends rain to confirm His inheritance, to satisfy His people when they are weary. He prepares goodness for the poor. This is a God of both judgment and provision, both power and tenderness.',
        },
        {
          kind: 'christ',
          id: 'psalms68-christ-victor',
          title: 'Christ Connection — The Victorious Judge',
          html: 'Christ is the God who arises with power over all opposing forces—death, sin, the powers of darkness. Yet He exercises that power for the most vulnerable: the poor, the sick, the demon-possessed, those without a protector. His victory is always in service of the weak.',
        },
        {
          kind: 'carry',
          html: 'If you are vulnerable, if you have been scattered by the winds of circumstance, remember this psalm. God arises on behalf of the fatherless, the widows, the weak. His strength is not distant. It is present in your holy place, in your sanctuary. He will not let you be finally scattered.',
        },
        {
          kind: 'reflection',
          id: 'psalms68-arise-arise',
          prompt: 'What would it mean to ask God to arise in a situation where you feel powerless? What does it mean that His power serves the weak?',
        },
      ],
    },

    {
      ref: 'Psalm 68:28–35',
      title: 'The Ascended Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 68,
          lines: [
            plain(28, 'Thy God hath commanded thy strength: strengthen, O God, that which thou hast wrought for us.'),
            plain(30, 'Rebuke the company of spearmen, the multitude of the bulls, with the calves of the people, till every one submit himself with pieces of silver: scatter thou the people that delight in war.'),
            plain(32, 'Sing unto God, ye kingdoms of the earth; O sing praises unto the Lord; Selah:'),
            plain(33, 'To him that rideth upon the heavens of heavens, which were of old; lo, he doth send out his voice, and that a mighty voice.'),
            plain(35, 'O God, thou art terrible out of thy holy places: the God of Israel is he that giveth strength and power unto his people. Blessed be God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms68-commanded',
          html: 'God has commanded strength—He has established it as an objective reality, not dependent on human feeling or circumstance. The plea is that God strengthen what He has already wrought, that He sustain what He has begun.',
        },
        {
          kind: 'commentary',
          id: 'psalms68-rebuke',
          html: 'The psalm calls for the rebuking of all powers that resist God—the spearmen, the bulls, the people who delight in war. And as they are rebuked, they submit, they scatter. Even the powers of the earth bow before the one who rides the heavens.',
        },
        {
          kind: 'commentary',
          id: 'psalms68-final',
          html: 'The psalm ends with a declaration of God&apos;s terrible nature and His tender provision. "O God, thou art terrible out of thy holy places...thou...giveth strength and power unto his people." Terrifying to enemies, but the source of strength to the faithful.',
        },
        {
          kind: 'christ',
          id: 'psalms68-christ-ascended',
          title: 'Christ Connection — Ascended to Heavens',
          html: 'Paul quotes this psalm to describe Christ&apos;s ascension: He ascended up on high, leading captivity captive. Christ rides the heavens. He sends forth His voice—the voice of the Gospel—throughout all the earth. His enemies submit. His people receive strength.',
        },
        {
          kind: 'carry',
          html: 'You serve a God who is both terrible and merciful, both powerful and caring. You need not fear the forces arrayed against you, for your God rides the heavens. You can participate in His victory by remaining faithful, by gathering with His people, and by remembering that strength and power flow from Him to those who trust in Him.',
        },
        {
          kind: 'reflection',
          id: 'psalms68-strength',
          prompt: 'What strength has God already commanded in your life or in His church? How will you accept and exercise the power He offers?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let God arise, let his enemies be scattered...A father of the fatherless, and a judge of the widows, is God in his holy habitation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 68 · Study Guide',
  },

  hasHebrew: true,
};
