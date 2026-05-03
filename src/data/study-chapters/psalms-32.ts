import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 32 — Blessed Forgiveness
 *
 * "Blessed is he whose transgression is forgiven, whose sin is covered." Romans
 * 4:7–8 quotes these words to describe the righteousness that comes through
 * faith rather than works. The psalmist moves from confession of sin to joy in
 * forgiveness. "I acknowledged my sin unto thee, and thou forgavest the iniquity
 * of my sin." This is not a psalm about avoiding sin, but about being restored
 * after falling. It is about the grace that meets us when we admit our brokenness
 * and turn to God.
 */
export const PSALMS_32: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 32,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'Psalm 32 is a song of grace. It begins with celebration and moves through confession to restoration. The psalmist teaches that blessedness comes not through perfection, but through the courageous admission of sin and the experience of forgiveness. There is relief in this psalm—the relief of one who has carried a burden and finally set it down, who has kept silence and finally spoken, who has withheld confession and finally come clean.',
  ],

  sections: [
    {
      ref: 'Psalm 32:1–7',
      title: 'Confession and Forgiveness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(1, 'Blessed is he whose transgression is forgiven, whose sin is covered.'),
            plain(2, 'Blessed is the man unto whom the Lord imputeth not iniquity, and in whose spirit there is no guile.'),
            plain(3, 'When I kept silence, my bones waxed old through my roaring all the day long.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-32-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(4, 'For day and night thy hand was heavy upon me: my moisture is turned into the drought of summer. Selah.'),
            plain(5, 'I acknowledged my sin unto thee, and mine iniquity have I not hid. I said, I will confess my transgressions unto the Lord; and thou forgavest the iniquity of my sin. Selah.'),
            plain(6, 'For this shall every one that is godly pray unto thee in a time when thou mayest be found: surely in the floods of great waters they shall not come nigh unto him.'),
            plain(7, 'Thou art my hiding place; thou shalt preserve me from trouble; thou shalt compass me about with songs of deliverance. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms32-blessed-forgiven',
          html: 'The psalm opens not with a plea for forgiveness, but with celebration of it: "Blessed is he whose transgression is forgiven, whose sin is covered." The blessedness described is not the absence of sin, but the reality of its removal. The sin remains factually true—something genuinely wrong was committed—but it is covered. It is not imputed. It is not held against the sinner.',
        },
        {
          kind: 'hebrew',
          id: 'psalms32-nasa-avon',
          title: 'Nasa Avon — "Forgiven" (Taken Away)',
          script: 'נָשָׂא עָוֹן',
          translit: '<strong>Nasa avon</strong> · to forgive; to lift up iniquity; to take away sin',
          description: 'The Hebrew phrase nasa avon literally means "to lift up or bear iniquity." God lifts our sin from us. He bears what we cannot bear. This is not mere cancellation; it is the positive action of God taking our burden upon Himself. In Christian understanding, this is what the Cross accomplishes.',
        },
        {
          kind: 'commentary',
          id: 'psalms32-kept-silence',
          html: 'The psalmist then describes the cost of silence: "When I kept silence, my bones waxed old." Unconfessed sin is a disease. It eats away at the soul. The bones, which should be strong and support the body, wax old. The psalmist roars all day long in internal agony. God&apos;s hand is heavy upon him. His moisture turns to the drought of summer. Withheld confession brings not peace but torment.',
        },
        {
          kind: 'commentary',
          id: 'psalms32-acknowledged',
          html: 'Then comes the turning point: "I acknowledged my sin unto thee, and mine iniquity have I not hid. I said, I will confess my transgressions unto the Lord; and thou forgavest the iniquity of my sin." The moment of confession becomes the moment of release. The psalmist does not need to perform penance or earn restoration. He confesses, and forgiveness is given.',
        },
        {
          kind: 'christ',
          id: 'psalms32-christ-justification',
          title: 'Christ Connection — Justification by Faith',
          html: 'Romans 4:7–8 applies these verses to justification through faith in Christ: "Saying, Blessed are they whose iniquities are forgiven, and whose sins are covered. Blessed is the man to whom the Lord will not impute sin." Through Christ&apos;s sacrifice, our sin is forgiven not because we have earned it, but because Christ has borne it. Our iniquity is not imputed to us because it is imputed to Him. We are blessed not through our perfection, but through His.',
        },
        {
          kind: 'carry',
          html: 'The psalm teaches that attempting to hide sin destroys us, while confessing it liberates us. This is not about earning God&apos;s favor through confession. It is about moving from the exhaustion of pretense into the relief of honesty, from the weight of secrecy into the lightness of forgiveness.',
        },
        {
          kind: 'reflection',
          id: 'psalms32-confess-freedom',
          prompt: 'Is there sin you have been keeping silence about, carrying as a burden? What would it mean to acknowledge it before God and accept His forgiveness? How might confession become a moment of liberation for you?',
        },
      ],
    },

    {
      ref: 'Psalm 32:8–11',
      title: 'Instruction and Joy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(8, 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye.'),
            plain(9, 'Be ye not as the horse, or as the mule, which have no understanding: whose mouth must be held in with bit and bridle, lest they come near unto thee.'),
            plain(10, 'Many sorrows shall be to the wicked: but he that trusteth in the Lord, mercy shall compass him about.'),
            plain(11, 'Be glad in the Lord, and rejoice, ye righteous: and shout for joy, all ye that are upright in heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms32-instruct-teach',
          html: 'God promises instruction: "I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye." The freed sinner is not left to wander. God guides with more than commands. He guides "with mine eye"—a personal, intimate guidance. God sees you and directs your path.',
        },
        {
          kind: 'commentary',
          id: 'psalms32-not-mule',
          html: '"Be ye not as the horse, or as the mule, which have no understanding: whose mouth must be held in with bit and bridle." A creature without understanding must be forced to obedience. But the human who has experienced forgiveness, who has been freed from the burden of unconfessed sin, can follow willingly, moved not by force but by love.',
        },
        {
          kind: 'carry',
          html: 'The psalm ends with a call to joy: "Be glad in the Lord, and rejoice, ye righteous." Those who have been forgiven, those who trust in the Lord, are surrounded by mercy. Sorrow belongs to the wicked. But the righteous—those who have confessed and received forgiveness—are called to rejoice. The proper end of forgiveness is not mere relief but joy.',
        },
        {
          kind: 'reflection',
          id: 'psalms32-glad-rejoice',
          prompt: 'As one who has been forgiven through Christ, are you living in the gladness this psalm describes? What would it mean to truly rejoice in His mercy, not just once, but daily?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed is he whose transgression is forgiven, whose sin is covered. ...I acknowledged my sin unto thee, and thou forgavest the iniquity of my sin.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 32 · Study Guide',
  },

  hasHebrew: true,
};
