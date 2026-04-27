import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ephesians 1 — Chosen and Blessed Before the Foundation of the World
 *
 * "Blessed be the God and Father of our Lord Jesus Christ, who hath blessed
 * us with all spiritual blessings in heavenly places in Christ." Paul opens
 * his letter to the Ephesians with one of Scripture's most audacious claims:
 * believers are chosen—not because of works, but by divine intention—and
 * predestined to adoption as children. This is not a chapter about human
 * worth or capability. This is about the sheer generosity of God toward
 * those who believe.
 */
export const EPHESIANS_1: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 1,

  intros: [
    'Ephesians 1 begins not with doctrine, but with doxology—blessing. Paul does not first explain what God has done; he first praises God for doing it. And as he praises, he unfolds a cosmic vision of how believers fit into God&apos;s eternal purpose.',
    'The chapter presents a theology of election: believers are chosen, predestined to adoption, forgiven and redeemed. Yet Paul never asks the reader to understand this as constraint or manipulation. Instead, he frames it as grace. The mystery unveiled in this chapter is that God&apos;s choice and human faith are not opposed. Both are real. Both matter.',
  ],

  bottomShare: {
    label: 'Share Ephesians 1',
    quote:
      'Paul celebrates that believers are chosen and blessed with spiritual blessings in heavenly places in Christ. Election is presented not as cold predestination but as a father&apos;s generous intention toward His children.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 1 · Study Guide',
  },

  sections: [
    /* ─── Ephesians 1:1–14 — Chosen and Redeemed in Christ ────────────────── */
    {
      ref: 'Ephesians 1:1–14',
      title: 'Blessed with Spiritual Blessings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('Blessed be the God and Father of our Lord Jesus Christ, who hath '),
                hp('blessed us with all spiritual blessings in heavenly places in Christ', 'e1-blessed'),
                t(';'),
              ],
            },
            {
              number: 4,
              spans: [
                t('According as he hath '),
                hg('chosen us in him before the foundation of the world', 'e1-chosen'),
                t(', that we should be holy and without blame before him in love:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Having '),
                hp('predestinated us unto the adoption of children by Jesus Christ to himself', 'e1-predestined'),
                t(', according to the good pleasure of his will,'),
              ],
            },
            plain(7, 'In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace;'),
            plain(8, 'Wherein he hath abounded toward us in all wisdom and prudence;'),
            {
              number: 9,
              spans: [
                t('Having made known unto us the '),
                hg('mystery of his will', 'e1-mystery'),
                t(', according to his good pleasure which he hath purposed in himself:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e1-blessed',
          html:
            'Paul opens with blessing—"Blessed be the God and Father of our Lord Jesus Christ." This is doxology, not doctrine. Before explaining anything, Paul praises God for spiritual blessings that believers have already received "in heavenly places in Christ." The blessings are not future or conditional. They are present, real, spiritual.',
        },
        {
          kind: 'commentary',
          id: 'e1-chosen',
          html:
            'God "chose us in him before the foundation of the world." This speaks of election not as a decision made at the moment of faith, but as part of God&apos;s eternal intention. Yet Paul does not explore this as a philosophical puzzle about human freedom. Instead, he treats it as a truth that grounds confidence in the reader&apos;s security. You have been chosen. This is not an accident.',
        },
        {
          kind: 'commentary',
          id: 'e1-predestined',
          html:
            'Predestination is presented as a loving intention: God predestined believers "unto the adoption of children." Adoption is not a cold inheritance. It is the choice to bring someone into the family, to give them the status and affection of a child. God&apos;s predestination, in Paul&apos;s framing, is tender.',
        },
        {
          kind: 'commentary',
          id: 'e1-mystery',
          html:
            'Paul speaks of "the mystery of his will." In Scripture, a mystery is not something irrational or unknowable. It is something hidden in the past but now revealed. The mystery Paul will unfold in Ephesians is that Jews and Gentiles are now one body in Christ—the barrier has been broken.',
        },
        {
          kind: 'greek',
          id: 'e1-choicago',
          title: 'Eklektos — "Chosen" or "Elect"',
          script: 'ἐκλεκτός',
          translit: '<strong>Eklektos</strong> · chosen; elect; selected from among many',
          description:
            'The word carries no connotation of rejection of others—it means to be selected from a group. In the context of redemptive history, election means being chosen for a particular role or calling. Paul uses it to assure the Ephesians of their place in God&apos;s intention.',
        },
        {
          kind: 'christ',
          id: 'e1-christ-elect',
          title: 'Christ Connection — The Chosen One Who Makes Others Chosen',
          html:
            'Christ is God&apos;s chosen one (1 Peter 2:4). But in Him, others are also chosen. Paul teaches that believers are chosen "in Christ"—not as an alternative group, but as those who are incorporated into Christ himself. His chosenness becomes theirs. His sonship becomes their adoption. The paradox of the gospel is that election in Christ is both God&apos;s act and the believer&apos;s response of faith.',
        },
        {
          kind: 'carry',
          html:
            'You have been chosen. Not because of what you have done or what you will do. Not because of your merit or your effort. But because, before the foundation of the world, God in Christ looked toward you and said: "I will make you mine." This is the beginning of Paul&apos;s letter. This is the ground of all that follows. What would it mean for you to live as one who is chosen? Not arrogantly, as though you were better. But confidently, as one who belongs to God and has a place in His eternal intention.',
        },
        {
          kind: 'reflection',
          id: 'e1-chosen-reflect',
          prompt: 'You are chosen and predestined to adoption by God. How does that change the way you see yourself, your worth, your place in the world?',
        },
      ],
    },

    /* ─── Ephesians 1:15–23 — Paul&apos;s Prayer for Enlightenment ─────────────── */
    {
      ref: 'Ephesians 1:15–23',
      title: 'Prayer for Spiritual Wisdom and Revelation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(15, 'Wherefore I also, after I heard of your faith in the Lord Jesus, and love unto all the saints,'),
            {
              number: 17,
              spans: [
                t('That the God of our Lord Jesus Christ, the Father of glory, may give unto you the '),
                hp('spirit of wisdom and revelation', 'e1-wisdom'),
                t(' in the knowledge of him:'),
              ],
            },
            plain(18, 'The eyes of your understanding being enlightened; that ye may know what is the hope of his calling, and what the riches of the glory of his inheritance in the saints,'),
            {
              number: 19,
              spans: [
                t('And what is the '),
                hg('exceeding greatness of his power to us-ward who believe', 'e1-power'),
                t(', according to the working of his mighty power,'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Which he wrought in Christ, when he raised him from the dead, and set him at his own right hand in the heavenly places,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Far above all principality, and power, and might, and dominion, and every name that is '),
                hy('named', 'e1-named'),
                t(', not only in this world, but also in that which is to come:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e1-wisdom',
          html:
            'Paul prays for "the spirit of wisdom and revelation." This is not mere intellectual knowledge. It is spiritual discernment—the capacity to understand what Christ means and what His work implies for believers. The spirit of wisdom is a gift, given by God, that transforms how the believer sees truth.',
        },
        {
          kind: 'commentary',
          id: 'e1-power',
          html:
            'Paul speaks of "the exceeding greatness of his power to us-ward who believe." The power Paul has in mind is not abstract or theoretical. It is the power that was "wrought in Christ, when he raised him from the dead." The resurrection is the demonstration of God&apos;s power. And this power is not distant; it works toward believers now.',
        },
        {
          kind: 'commentary',
          id: 'e1-named',
          html:
            'Christ is "far above all principality, and power, and might, and dominion, and every name that is named." Paul affirms Christ&apos;s supremacy not only over earthly authorities but over all spiritual powers—seen and unseen. "Every name that is named" captures the totality: there is no power, no being, that outranks Christ.',
        },
        {
          kind: 'hebrew',
          id: 'e1-dabar',
          title: 'Greek Parallels — Exousia and Dynamis',
          script: 'ἐξουσία · δύναμις',
          translit: '<strong>Exousia</strong> (authority) · <strong>Dynamis</strong> (power); strength; ability',
          description:
            'In Ephesians 1:21, Paul mentions multiple spiritual realities: principality (arche), power (exousia), might (kratos), and dominion (kyriotes). Each word highlights different aspects of authority and power. Yet Christ transcends them all. The multiplication of terms emphasizes: there is nothing left to contend.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s prayer is your prayer. He asks that the eyes of your heart be enlightened. That you would know the hope of God&apos;s calling. That you would comprehend the power that is at work in you—the very power that raised Christ from the dead. This is not passive knowledge. This is spiritual sight. What would change in your life if you truly grasped the power at work in you?',
        },
        {
          kind: 'reflection',
          id: 'e1-power-reflect',
          prompt: 'Paul prays that you would know the exceeding greatness of God&apos;s power working in you. What does that power look like? What would it mean to live in full confidence of it?',
        },
      ],
    },

    /* ─── Ephesians 1 — Election and Love ────────────────────────────────── */
    {
      ref: 'Ephesians 1 · All',
      title: 'Election as an Expression of Love',
      blocks: [
        {
          kind: 'commentary',
          id: 'e1-election-love',
          html:
            'The doctrine of election in Ephesians is never divorced from love. Paul does not present it as cold or mechanical. The election is rooted in God&apos;s intention "that we should be holy and without blame before him in love." And the goal of predestination is adoption—the intimate relationship of children to their father. Election is not about control; it is about belonging.',
        },
        {
          kind: 'christ',
          id: 'e1-christ-integration',
          title: 'Christ Connection — In Christ We Are Integrated into God&apos;s Purpose',
          html:
            'Every blessing Paul mentions is "in Christ." Chosen in Christ. Predestined to adoption through Christ. Redeemed in Christ. This phrase—"in Christ"—is the hinge of Ephesians. It means that believers are not separate from Christ&apos;s own status or calling. His identity becomes theirs. In the New Testament, this integration is not metaphorical; it is the foundation of salvation itself. To be "in Christ" is to participate in His redemptive work.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
