import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 130 — Out of the Depths
 *
 * "Out of the depths have I cried unto thee, O Lord."
 * "If thou, Lord, shouldest mark iniquities, O Lord, who shall stand?"
 * "There is forgiveness with thee."
 * A song of ascents expressing deep repentance and hope.
 * From the very depths of despair and sin, the cry goes up to God.
 * Christ connection: forgiveness in Christ; redemption of souls;
 * the mercy that awaits even in the greatest depths.
 */
export const PSALMS_130: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 130,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 130 is perhaps the most intimate meditation on sin, forgiveness, and hope in all of Scripture. The psalmist descends to the depths—not of waters or danger, but of sin, of guilt, of despair. "Out of the depths have I cried unto thee, O Lord." From that ultimate place of desolation, the cry ascends to God. And then comes the revolutionary declaration: "But there is forgiveness with thee." Not judgment, not punishment alone, but forgiveness. Mercy. Pardon. The God who could justly punish instead offers reconciliation. This psalm moves from the depths to steadfast hope.',
  ],

  sections: [
    {
      ref: 'Psalm 130:1–8',
      title: 'From Depths to Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 130,
          lines: [
            plain(1, 'Out of the depths have I cried unto thee, O Lord.'),
            plain(2, 'Lord, hear my voice: let thine ears be attentive to the voice of my supplications.'),
            plain(3, 'If thou, Lord, shouldest mark iniquities, O Lord, who shall stand?'),
            plain(4, 'But there is forgiveness with thee: that thou mayest be feared.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-130-78mid-1',
          html:
            'Cry from the depths for forgiveness opens into waiting and hope in God&apos;s redemption. Desperation becomes trust.',
        },
        {
          kind: 'scripture',
          chapter: 130,
          lines: [
            plain(5, 'I wait for the Lord, my soul doth wait, and in his word do I hope.'),
            plain(6, 'My soul waiteth for the Lord more than they that watch for the morning: I say, more than they that watch for the morning.'),
            plain(7, 'Let Israel hope in the Lord: for with the Lord there is mercy, and with him is plenteous redemption.'),
            plain(8, 'And he shall redeem Israel from all his iniquities.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps130-cry',
          html:
            'The psalmist does not begin with excuses or explanations. He does not minimize his sin or blame others. He cries out of the depths. The depths are where guilt collects, where the weight of transgression settles, where despair seems reasonable. From that place of utter darkness, he calls to the Lord. And he asks for something simple: that the Lord hear him.',
        },
        {
          kind: 'commentary',
          id: 'ps130-justice',
          html:
            '"If thou, Lord, shouldest mark iniquities, O Lord, who shall stand?" The psalmist acknowledges the impossible. If God were to mark, to record, to keep account of every iniquity—every failure, every betrayal, every sin—who could stand before Him? No one. The very weight of sin would crush anyone who stood alone before a God who marked every transgression. Yet the psalmist does not despair at this truth.',
        },
        {
          kind: 'commentary',
          id: 'ps130-forgive',
          html:
            '"But there is forgiveness with thee." The word "but" transforms everything. All that has been said—the depths, the iniquities, the impossibility—is true. Yet there is another truth equally real: forgiveness rests with God. Not as an afterthought or a hesitant concession, but as the very character of God. Forgiveness is who He is. And this forgiveness is not mere tolerance or forgetting. It is the active remission of guilt, the breaking of the chains of shame.',
        },
        {
          kind: 'commentary',
          id: 'ps130-fear',
          html:
            '"That thou mayest be feared." The forgiveness is not offered so that sin becomes acceptable or consequences disappear. It is offered so that the one forgiven may come to fear God rightly—not with terror, but with reverence, with the deep awe of one who has been forgiven and knows the measure of that forgiveness.',
        },
        {
          kind: 'commentary',
          id: 'ps130-wait',
          html:
            'The final section is a pivot to hope. "I wait for the Lord, my soul doth wait, and in his word do I hope." The psalmist has moved from crying out to waiting. The cry was urgent. But the waiting is patient. He trusts that the Lord will respond. And he watches for the Lord the way night watchers watch for morning—with absolute certainty that morning will come, yet with patient hope.',
        },
        {
          kind: 'christ',
          id: 'ps130-christ-redemption',
          title: 'Christ Connection — Plenteous Redemption',
          html:
            'The psalmist declares: "With the Lord there is mercy, and with him is plenteous redemption." This redemption is fully realized in Christ. He is the mercy of God made flesh, the forgiveness incarnate, the redemption purchased at infinite cost. His death pays the debt that the psalmist cannot pay. His rising offers a way out of the depths that human power cannot provide. In Christ, the impossible becomes real: the forgiven stand before God, not because they have earned innocence, but because their guilt has been transferred and borne by another.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 130 speaks to anyone who knows the depths—not just of difficulty, but of guilt, of shame, of recognized sin. It tells you that even from there, your cry can reach the Lord. That the depths are not beyond His power to rescue. That there is forgiveness waiting for you, not as something you have earned, but as something offered freely by a merciful God.',
        },
        {
          kind: 'reflection',
          id: 'ps130-depths',
          prompt:
            'What depths have you known? What sin or shame has pulled you down? How does the declaration that "there is forgiveness with thee" change your sense of possibility? What would it mean to wait for the Lord in hope from the place where you are now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Out of the depths have I cried unto thee, O Lord. If thou, Lord, shouldest mark iniquities, O Lord, who shall stand? But there is forgiveness with thee.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 130 · Study Guide',
  },
};
