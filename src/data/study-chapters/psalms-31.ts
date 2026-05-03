import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 31 — Into Your Hands
 *
 * "Into thine hand I commit my spirit." These words, prayed by Jesus on the
 * Cross (Luke 23:46), anchor Psalm 31 in the passion. Yet the psalm is not
 * merely about Christ&apos;s final moments. It is the prayer of one who has
 * endured adversity, who has been mocked and afflicted, yet who maintains faith.
 * "Thou hast known my soul in adversities." God knows us not only in our
 * triumphs, but in our deepest sufferings. And He delivers us.
 */
export const PSALMS_31: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 31,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 31 opens with an act of complete trust: "In thee, O Lord, do I put my trust; let me never be ashamed." Yet the psalm does not describe ease. Instead, it catalogs difficulty: mocking, affliction, sorrow, despair. Yet throughout, the psalmist returns to the fundamental truth: "Thou hast known my soul in adversities." God is not distant from our suffering. He sees. He knows. He remembers. And He will not abandon those who call upon Him.',
  ],

  sections: [
    {
      ref: 'Psalm 31:1–24',
      title: 'Trust Through Adversity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            plain(1, 'In thee, O Lord, do I put my trust; let me never be ashamed: deliver me in thy righteousness.'),
            plain(2, 'Bow down thine ear to me; deliver me speedily: be thou my strong rock, for an house of defence to preserve me.'),
            plain(5, 'Into thine hand I commit my spirit: thou hast redeemed me, O Lord God of truth.'),
            plain(7, 'I will be glad and rejoice in thy mercy: for thou hast considered my trouble; thou hast known my soul in adversities.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms31-trust-to-adversity',
          html:
            'From the opening commitment to trust comes the assurance that God knows the psalmist&apos;s soul—not in abstract form, but in the concrete reality of adversities suffered. The turning point: from trust declaration to the lived experience of God&apos;s intimate knowledge through our deepest pain.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            plain(9, 'Have mercy upon me, O Lord, for I am in trouble: mine eye is consumed with grief, yea, my soul and my belly.'),
            plain(10, 'For my life is spent with grief, and my years with sighing: my strength faileth because of mine iniquity, and my bones are consumed.'),
            plain(14, 'But I trusted in thee, O Lord: I said, Thou art my God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-31-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            plain(15, 'My times are in thy hand: deliver me from the hand of mine enemies, and from them that persecute me.'),
            plain(19, 'Oh how great is thy goodness, which thou hast laid up for them that fear thee; which thou hast wrought for them that trust in thee before the sons of men!'),
            plain(23, 'Love the Lord, all ye his saints: for the Lord preserveth the faithful, and plentifully rewardeth the proud doer.'),
            plain(24, 'Be of good courage, and he shall strengthen your heart, all ye that hope in the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms31-put-trust',
          html: 'The psalm opens with unqualified trust: "In thee, O Lord, do I put my trust; let me never be ashamed." The prayer is not for comfort or ease. It is for deliverance in righteousness, for God to act according to His righteous character. And the psalmist does not expect ease. He expects to be delivered through difficulty, not away from it.',
        },
        {
          kind: 'hebrew',
          id: 'psalms31-hands-commit',
          title: 'Yadot — "Hands" (Into Your Hands)',
          script: 'יָדוֹת',
          translit: '<strong>Yadot</strong> · hands; the instrument of action; place of care',
          description: 'To commit one&apos;s spirit into God&apos;s hands is to place oneself entirely under His care, to relinquish control, to trust that whatever happens, one is safe with Him. It is not a passive surrender to fate, but an active entrusting of oneself to a loving God.',
        },
        {
          kind: 'commentary',
          id: 'psalms31-known-adversity',
          html: 'A remarkable statement: "Thou hast known my soul in adversities." God does not merely know us in our moments of joy and victory. He knows us intimately in our suffering. He sees the tears we cry when no one else sees them. He hears the prayers we whisper in darkness. His knowledge of us is comprehensive, encompassing our worst moments, our deepest pain.',
        },
        {
          kind: 'commentary',
          id: 'psalms31-times-hand',
          html: '"My times are in thy hand." Not merely my salvation or my deliverance, but the whole span of my existence—my days, my years, my seasons. Everything is under God&apos;s authority and care. This does not mean nothing bad will happen. It means that even what appears to be chance or tragedy is held within God&apos;s knowledge and providence.',
        },
        {
          kind: 'christ',
          id: 'psalms31-christ-final-prayer',
          title: 'Christ Connection — The Final Breath',
          html: 'Luke 23:46 records Jesus&apos; final words on the Cross: "Father, into thy hands I commend my spirit." He prays Psalm 31:5. In His moment of deepest abandonment, when He felt the full weight of separation from the Father, He prayed the prayer of trust. He committed Himself into the Father&apos;s hands. And through that prayer, He sanctified every soul who must also relinquish themselves into God&apos;s care.',
        },
        {
          kind: 'carry',
          html: 'To live by this psalm is to learn that trust does not mean the absence of suffering. It means suffering while knowing you are not abandoned. It means crying out in grief while still believing that God knows you, that your times are in His hand, that He will deliver you. And the psalmist ends not in despair, but in exhortation: "Be of good courage, and he shall strengthen your heart, all ye that hope in the Lord."',
        },
        {
          kind: 'reflection',
          id: 'psalms31-hands-final',
          prompt: 'When you reach your own moment of deepest need, would you be able to pray with the psalmist, "Into thine hand I commit my spirit"? What would it take to release control and trust God&apos;s hands completely?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In thee, O Lord, do I put my trust. ...Into thine hand I commit my spirit: thou hast redeemed me, O Lord God of truth. ...Thou hast known my soul in adversities.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 31 · Study Guide',
  },

  hasHebrew: true,
};
