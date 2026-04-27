import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * James 3 — The Power of the Tongue
 *
 * James turns to a theme both simple and profound: the power of the tongue. Such a
 * small member of the body, yet it sets the course of our whole life—for good or ill.
 * Wise speech comes from a peaceful heart. Bitter words and sweet cannot flow from
 * the same spring. Heavenly wisdom is gentle, full of mercy, fruitful in peace.
 */
export const JAMES_3: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 3,

  intros: [
    'James now addresses something that touches every believer: the tongue. He uses vivid imagery—the bit in the horse&apos;s mouth, the rudder of a ship—to show how small the tongue is and how vast its power. We speak thousands of words each day, often without thought. Yet our words shape our relationships, our reputation, our legacy. They encourage or wound. They build up or tear down. They can carry the life of Christ or the poison of hell.',
    'He moves from the power of the tongue to the question of wisdom itself. What kind of wisdom guides your speech? There is wisdom from above—pure, peaceable, gentle—and wisdom from below, full of envy and selfishness. The two cannot dwell together. A man who is wise will show his wisdom through meekness and good conduct, not through boasting or bitter words.',
  ],

  sections: [
    /* ─── James 3:1–8 — The Tongue ──────────────────────────────────────── */
    {
      ref: 'James 3:1–8',
      title: 'The Power of Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'My brethren, be not many masters, knowing that we shall receive the greater condemnation.'),
            plain(2, 'For in many things we offend all. If any man offend not in word, the same is a perfect man, able also to bridle the whole body.'),
            plain(5, 'Even so the tongue is a little member, and boasteth great things. Behold, how great a matter a little fire kindleth!'),
            plain(6, 'And the tongue is a fire, a world of iniquity: so is the tongue among our members, that it defileth the whole body, and setteth on fire the course of nature; and it is set on fire of hell.'),
            plain(8, 'But the tongue can no man tame; it is an unruly evil, full of deadly poison.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-teachers',
          html:
            'James begins with a warning: not many should aspire to be teachers, for teachers will be judged more strictly. To teach is to shape others through words. The responsibility is grave. But his larger point applies to all: perfection in God&apos;s sight is bound up with mastery of speech. If you can bridle your tongue, you can govern the whole body.',
        },
        {
          kind: 'greek',
          id: 'jam3-glossa',
          title: 'Glossa — Tongue',
          script: 'γλῶσσα',
          translit: '<strong>Glossa</strong> · tongue; language; word; speech',
          description:
            'The Greek word glossa refers not just to the physical organ but to the speech that flows from it. It carries the sense of what the tongue produces—words with power to build or destroy, to bless or curse.',
        },
        {
          kind: 'commentary',
          id: 'jam3-fire',
          html:
            'The image is arresting: the tongue is a fire. Small, yes, but capable of immense destruction. A single word spoken in anger can ignite conflict that burns for years. Slander spreads like flame through a community. Yet the same tongue that wounds can comfort. The same mouth that curses can bless. All depends on what fire fuels it—the fire of selfishness or the fire of love.',
        },
        {
          kind: 'christ',
          id: 'jam3-christ-words',
          title: 'Christ Connection — Words That Heal',
          html:
            'Jesus spoke with absolute authority. His words cast out demons, healed the sick, forgave the sinner. Yet they came wrapped in gentleness and truth. He spoke to the woman at the well, the Roman centurion, the disciples—each word matched to the need of the listener. His tongue was a tool of mercy.',
        },
        {
          kind: 'carry',
          html:
            'James says no man can tame the tongue. This is not hopelessness but realism. We cannot discipline the tongue by willpower alone. We must ask God to change what the tongue expresses—our hearts. As we are transformed in Christ, our speech is transformed. The wellspring changes, and the water flowing from it becomes clean.',
        },
        {
          kind: 'reflection',
          id: 'jam3-tongue',
          prompt: 'When have your words wounded someone? What would it mean to let your tongue be transformed by God?',
        },
      ],
    },

    /* ─── James 3:13–18 — Heavenly Wisdom ──────────────────────────────── */
    {
      ref: 'James 3:13–18',
      title: 'Wisdom From Above',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(13, 'Who is a wise man and endued with knowledge among you? let him shew out of a good conversation his works with meekness of wisdom.'),
            plain(14, 'But if ye have bitter envying and strife in your hearts, glory not, and lie not against the truth.'),
            plain(15, 'This wisdom descendeth not from above, but is earthly, sensual, devilish.'),
            plain(17, 'But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy.'),
            plain(18, 'And the fruit of righteousness is sown in peace of them that make peace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam3-wisdom-meek',
          html:
            'True wisdom is shown not by eloquence but by works done in meekness. The word "meekness" does not mean weakness but strength under control—power harnessed for good. A wise person does not boast. He does not advertise himself. He shows wisdom through his life, his actions, his character.',
        },
        {
          kind: 'greek',
          id: 'jam3-sophia-ano',
          title: 'Sophia Ano — Wisdom From Above',
          script: 'σοφία ἄνω',
          translit: '<strong>Sophia ano</strong> · wisdom from above; heavenly wisdom; divine understanding',
          description:
            'Heavenly wisdom is the opposite of earthly wisdom. It does not spring from ambition or pride but from alignment with God. It seeks not personal glory but the good of the community. It is marked by purity, peace, and gentleness.',
        },
        {
          kind: 'commentary',
          id: 'jam3-earthly-wisdom',
          html:
            'James contrasts two sources of wisdom. Earthly wisdom is marked by envy and strife. Those who claim wisdom while harboring bitterness in their hearts are liars. They speak falsely about what wisdom is. True wisdom from above is pure—unmixed with selfish motives. It is peaceable, not quarrelsome. It is gentle, yielding, full of mercy. It bears good fruit.',
        },
        {
          kind: 'christ',
          id: 'jam3-christ-meek',
          title: 'Christ Connection — The Meek & Gentle King',
          html:
            'Jesus embodied this wisdom. He was pure, peaceable, gentle. When wronged, he did not strike back with accusation but with forgiveness. He bore the fruit of righteousness by sowing peace even to the point of his own death. In him, we see what wisdom from above looks like made flesh.',
        },
        {
          kind: 'carry',
          html:
            'The final line is profound: "the fruit of righteousness is sown in peace of them that make peace." Peace is not passivity. It is the active work of reconciliation, of bridging divides, of speaking truth in love. Those who make peace sow the seeds of righteousness that will bear fruit for generations.',
        },
        {
          kind: 'reflection',
          id: 'jam3-wisdom',
          prompt: 'Where in your life are you tempted by earthly wisdom—the pursuit of status, the desire to win arguments? How might heavenly wisdom change your approach?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If any man offend not in word, the same is a perfect man. The tongue is a fire. The wisdom that is from above is first pure, then peaceable, gentle, full of mercy. The fruit of righteousness is sown in peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 3 · Study Guide',
  },

  hasHebrew: false,
};
