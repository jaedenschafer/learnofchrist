import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 52 — Redemption and the Marred Servant
 *
 * "How beautiful upon the mountains are the feet of him that bringeth good
 * tidings." But before the gospel comes, the Servant\'s visage is marred—"his
 * visage was so marred more than any man, and his form more than the sons of
 * men." The chapter opens with Zion\'s restoration but moves toward the Servant\'s
 * disfigurement. This is the hinge between Isaiah 51\'s comfort and Isaiah 53\'s
 * suffering.
 */
export const ISAIAH_52: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 52,

  estimatedMinutes: { 5: 1, 10: 3, 15: 3 },
  intros: [
    'Isaiah 52 begins with joy: shake off the dust, O captive Zion. The ransomed are returning with singing. But the chapter ends with a stark image. The Servant who brings good tidings will be despised and rejected. His form will be marred beyond any man\'s. Yet kings will shut their mouths at Him, for they shall see what they have not been told. This is the transition to Isaiah 53, the great Suffering Servant chapter. Here we see both the promise of redemption and the cost that redemption demands.',
  ],

  sections: [
    {
      ref: 'Isaiah 52:1–10',
      title: 'The Good News Proclaimed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 52,
          lines: [
            plain(1, 'Awake, awake; put on thy strength, O Zion; put on thy beautiful garments, O Jerusalem, the holy city: for henceforth there shall no more come into thee the uncircumcised and the unclean.'),
            plain(7, 'How beautiful upon the mountains are the feet of him that bringeth good tidings, that publisheth peace; that bringeth good tidings of good, that publisheth salvation; that saith unto Zion, Thy God reigneth!'),
            plain(8, 'Thy watchmen shall lift up the voice; with the voice together shall they sing: for they shall see eye to eye, when the Lord shall bring again Zion.'),
            plain(9, 'Break forth into joy, sing together, ye waste places of Jerusalem: for the Lord hath comforted his people, he hath redeemed Jerusalem.'),
            plain(10, 'The Lord hath made bare his holy arm in the sight of all the nations; and all the ends of the earth shall see the salvation of our God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa52-awake',
          html:
            'Zion is called to awake and put on her beautiful garments. She has been captive, defiled. Now she is restored, and the unclean shall no more enter her. The redeemed are returning. How beautiful are the feet of the gospel-bearer who announces peace and salvation. "Thy God reigneth!" This is the proclamation that transforms all things. The watchmen see eye to eye—they share a common vision of Zion restored.',
        },
        {
          kind: 'hebrew',
          id: 'isa52-yapheh',
          title: 'Yapheh — "Beautiful"',
          script: 'יָפֶה',
          translit: '<strong>Yapheh</strong> · beautiful; lovely; excellently formed',
          description:
            'The Hebrew word yapheh refers to beauty that comes from proper ordering and form. It is not mere ornament, but the beauty of something perfectly fitted to its purpose. The feet of the gospel-bearer are beautiful because they carry the message that restores all things to their proper end: God\'s reign.',
        },
        {
          kind: 'carry',
          html:
            'We live between Isaiah\'s promise and Isaiah\'s suffering. We know the gospel has been proclaimed. We know Christ has come and brought redemption. Yet we also live in a broken world where suffering persists. Isaiah invites us to hold both truths: The Servant has come, and the Servant will come again in full glory. Our task, like the gospel-bearer\'s, is to announce the good news with beautiful feet—feet that carry truth into a world still wounded by sin.',
        },
      ],
    },

    {
      ref: 'Isaiah 52:13–15',
      title: 'The Marred Servant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 52,
          lines: [
            plain(13, 'Behold, my servant shall deal prudently: he shall be exalted and extolled, and be very high.'),
            plain(14, 'As many were astonied at thee; his visage was so marred more than any man, and his form more than the sons of men:'),
            plain(15, 'So shall he sprinkle many nations; the kings shall shut their mouths at him: for that which had not been told them shall they see; and that which they had not heard shall they consider.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa52-prudently',
          html:
            'The Servant shall deal prudently—He acts with divine wisdom. He shall be exalted, extolled, very high. Yet this exaltation comes through a terrible path. His visage is marred more than any man. His form more than the sons of men. This disfigurement is so severe that many are astonished at Him.',
        },
        {
          kind: 'commentary',
          id: 'isa52-marred',
          html:
            'This marring of the Servant\'s form is neither accidental nor a sign of failure. It is redemptive. Through this disfigurement, the Servant will sprinkle—purify, consecrate—many nations. Kings will shut their mouths in awe. What was not told them they shall see. The Servant\'s suffering becomes the medium through which God\'s redemption reaches the nations. His wounds are the source of healing.',
        },
        {
          kind: 'christ',
          id: 'isa52-christ-marred',
          title: 'Christ Connection — The Disfigured Redeemer',
          html:
            'Christ\'s crucifixion marred His body beyond recognition. The Roman soldiers scourged Him, beat Him, pierced His side. His face was beyond beautiful or comely in His last hours. Yet it is precisely through this suffering and disfigurement that He brings salvation to the nations. His wounds, His scars, become the marks of our redemption. He is the Servant of Isaiah, the Gospel-bearer whose feet bring good news, yet whose visage is marred for our sake.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah places before us a radical truth: beauty and redemption can come through ugliness and suffering. We are tempted to seek comfort, to avoid pain, to preserve our dignity. But Isaiah\'s Servant teaches us that true dignity comes through laying down one\'s dignity. True beauty comes through accepting disfigurement for another\'s sake.',
        },
        {
          kind: 'reflection',
          id: 'isa52-marring',
          prompt: 'What would it mean to accept disfigurement, shame, or loss for the sake of bringing redemption to others? How does the Servant\'s example challenge your priorities?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'How beautiful upon the mountains are the feet of him that bringeth good tidings...his visage was so marred more than any man.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 52 · Study Guide',
  },

  hasHebrew: true,
};
