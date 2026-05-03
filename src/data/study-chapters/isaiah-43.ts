import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 43 — I Have Redeemed You; You Are Mine
 *
 * "Fear not: for I have redeemed thee, I have called thee by thy name; thou
 * art mine. When thou passest through the waters, I will be with thee...I am
 * the Lord thy God, the Holy One of Israel, thy Saviour." The God of Israel
 * identifies Himself as Redeemer. The relationship is intimate—God knows His
 * people by name. The protection is comprehensive—God walks with His people
 * through water, fire, every trial. "I have created him for my glory." The
 * ultimate purpose of redemption is that the redeemed glorify their Redeemer.
 */
export const ISAIAH_43: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 43,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Isaiah 43 is one of the most intimate promises in Scripture. God says to the exiled people: Fear not. Why? Because I have redeemed you. You belong to Me. I know you by name. When you pass through the waters, I will be with you. When you walk through the fire, you will not be burned. You are Mine. You are precious in My sight. You are honored, and I love you. This is the promise of redemption—not distant, not formal, but intimate. God knows His people by name. God walks with them through every trial. God will not abandon them. They belong to the Holy One of Israel, their Saviour.',
  ],

  sections: [
    {
      ref: 'Isaiah 43:1–13',
      title: 'Redeemed, Named, Protected',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            plain(1, 'But now thus saith the Lord that created thee, O Jacob, and he that formed thee, O Israel, Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine.'),
            plain(2, 'When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.'),
            plain(3, 'For I am the Lord thy God, the Holy One of Israel, thy Saviour: I gave Egypt for thy ransom, Ethiopia and Seba for thee.'),
            plain(4, 'Since thou wast precious in my sight, thou hast been honourable, and I have loved thee: therefore will I give men for thee, and people for thy life.'),
            plain(5, 'Fear not: for I am with thee: I will bring thy seed from the east, and gather thee from the west;'),
            plain(6, 'I will say to the north, Give up; and to the south, Keep not back: bring my sons from far, and my daughters from the ends of the earth;'),
            plain(7, 'Even every one that is called by my name: for I have created him for my glory: I have formed him; yea, I have made him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah43-creation-witness',
          html:
            'All are created for God&apos;s glory—called by His name, formed by His hand. Now the focus shifts from comfort and protection to witness. The redeemed are not merely saved for their own sake. They exist to declare God&apos;s mighty acts to the nations.',
        },
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            plain(8, 'Bring forth the blind people that have eyes, and the deaf that have ears.'),
            plain(9, 'Let all the nations be gathered together, and let the people be assembled: who among them can declare this, and shew us former things? let them bring forth their witnesses, that they may be justified: or let them hear, and say, It is truth.'),
            plain(10, 'Ye are my witnesses, saith the Lord, and my servant whom I have chosen: that ye may know and believe me, and understand that I am he: before me there was no God formed, neither shall there be after me.'),
            plain(11, 'I, even I, am the Lord; and beside me there is no saviour.'),
            plain(12, 'I have declared, and have saved, and have shewed, when there was no strange god among you: therefore ye are my witnesses, saith the Lord, that I am God.'),
            plain(13, 'Yea, before the day was I am he; and there is none that can deliver out of my hand: I will work, and who shall let it?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah43-created-formed',
          html:
            'The opening words set the tone: "Thus saith the Lord that created thee, O Jacob, and he that formed thee, O Israel." God identifies Himself not as a distant power, but as the one who created and formed this people. There is an intimate relationship implied. The creator knows and cares for the created. The one who formed them will not abandon them.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah43-gadal',
          title: 'Gadal — "Called" (Named, Called by Name)',
          script: 'קָרָא בְשֵׁם',
          translit: '<strong>Karah beshem</strong> · called by name; to name and claim',
          description:
            'The phrase "called thee by thy name" is deeply personal. It means God knows His people individually. Each person is not merely one among millions. Each person is known by name, called, claimed. This level of personal attention runs counter to the feeling of exile and abandonment. God knows you by name.',
        },
        {
          kind: 'commentary',
          id: 'isaiah43-waters-fire',
          html:
            'The promise of protection is comprehensive: "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned." Waters and fire are the ultimate dangers—drowning and burning. But God promises presence through these dangers. God will not prevent the trials. God will walk through them with His people. In the midst of trials, His people will not be destroyed.',
        },
        {
          kind: 'commentary',
          id: 'isaiah43-precious',
          html:
            'God says: "Since thou wast precious in my sight, thou hast been honourable, and I have loved thee." This is staggering. God does not view the exiled people as failures or rejects. God sees them as precious. God honors them. God loves them. The basis for this is not their merit. The basis is God&apos;s gracious choice.',
        },
        {
          kind: 'christ',
          id: 'isaiah43-christ-redeemer',
          title: 'Christ Connection — Our Redeemer',
          html:
            'God says: "I am the Lord thy God...thy Saviour." In the New Testament, Christ is called Savior and Redeemer. He is the one who redeems His people not with gold or silver, but with His own blood. He knows His people by name. He walks with them through every trial. The promise of Isaiah 43 finds its ultimate fulfillment in Christ, who loved the church and gave Himself for it.',
        },
        {
          kind: 'carry',
          html:
            'The promise of this passage is that belonging to God changes everything. Fear is addressed by saying: you are not alone. You belong. You are known by name. You are precious. You are honored. You are loved. Whatever waters you must cross, whatever fires you must walk through, God is with you. This is not a guarantee of ease. It is a guarantee of presence and protection.',
        },
        {
          kind: 'reflection',
          id: 'isaiah43-precious-2',
          prompt: 'Do you truly believe that you are precious in God&apos;s sight? That God honors you? That God loves you? What waters or fires are you facing that require the assurance of God&apos;s presence? How can you let His presence walk with you through them?',
        },
      ],
    },

    {
      ref: 'Isaiah 43:14–28',
      title: 'Behold, I Do a New Thing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            plain(14, 'Thus saith the Lord, your redeemer, the Holy One of Israel; For your sake I have sent to Babylon, and have brought down all their nobles, and the Chaldeans, whose cry is in the ships.'),
            plain(15, 'I am the Lord, your Holy One, the creator of Israel, your King.'),
            plain(16, 'Thus saith the Lord, which maketh a way in the sea, and a path in the mighty waters;'),
            plain(17, 'Which bringeth forth the chariot and horse, the army and the power; they shall lie down together, they shall not rise: they are extinct, they are quenched as tow.'),
            plain(18, 'Remember ye not the former things, neither consider the things of old.'),
            plain(19, 'Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.'),
            plain(20, 'The beast of the field shall honour me, the dragons and the owls: because I give waters in the wilderness, and rivers in the desert, to give drink to my people, my chosen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah43-way-to-formation',
          html:
            'God has sent the Babylonian nobles down and made a way in the wilderness, rivers in the desert. The beasts honor God for this provision. Now comes the turning point: from the promise of God&apos;s new work in nature to God&apos;s intimate relationship with His formed people.',
        },
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            plain(21, 'This people have I formed for myself; they shall shew forth my praise.'),
            plain(22, 'But thou hast not called upon me, O Jacob; but thou hast been weary of me, O Israel.'),
            plain(23, 'Thou hast not brought me the small cattle of thy burnt offerings; neither hast thou honoured me with thy sacrifices. I have not caused thee to serve with an offering, nor wearied thee with incense.'),
            plain(24, 'Thou hast bought me no sweet cane with money, neither hast thou filled me with the fat of thy sacrifices: but thou hast made me to serve with thy sins, thou hast wearied me with thine iniquities.'),
            plain(25, 'I, even I, am he that blotteth out thy transgressions for mine own sake, and will not remember thy sins.'),
            plain(26, 'Put me in remembrance: let us plead together: declare thou, that thou mayest be justified.'),
            plain(27, 'Thy first father hath sinned, and thy teachers have transgressed against me.'),
            plain(28, 'Therefore I have profaned the princes of the sanctuary, and have given Jacob to the curse, and Israel to reproaches.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah43-new-thing',
          html:
            'God says: "Behold, I will do a new thing; now it shall spring forth." The exiles are tempted to remember the past—the Red Sea crossing, the deliverance from Egypt. But God says: do not merely remember former things. Behold what I am doing now. A new deliverance is coming. God will make a way in the wilderness. God will cause rivers to flow in the desert.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah43-hadash',
          title: 'Hadash — "New" (New, Fresh, Recent)',
          script: 'חָדָשׁ',
          translit: '<strong>Hadash</strong> · new, fresh, recent; something not yet seen or done',
          description:
            'The Hebrew hadash refers to something genuinely new. Not a repetition of the past, but something fresh, something never before seen. God promises not merely to repeat the deliverance of old, but to do something new.',
        },
        {
          kind: 'commentary',
          id: 'isaiah43-blotteth-out',
          html:
            'The chapter turns to the reality of Israel&apos;s sin: "Thou hast not called upon me...thou hast been weary of me...thou hast made me to serve with thy sins." Israel has been weary of God. Israel has wearied God with iniquities. But then comes the astounding word: "I, even I, am he that blotteth out thy transgressions for mine own sake, and will not remember thy sins." Forgiveness is not earned. It is given for God&apos;s own sake, so that God&apos;s character is vindicated.',
        },
        {
          kind: 'christ',
          id: 'isaiah43-christ-blot-sins',
          title: 'Christ Connection — Blotting Out Sins',
          html:
            'The promise to blot out sins is fulfilled in Christ. As believers, our sins are blotted out—not because we earned it through perfect obedience, but because Christ paid the price. God&apos;s justice is satisfied. Our sins are removed. We are restored to right relationship with God. This is the new thing God does in Christ.',
        },
        {
          kind: 'carry',
          html:
            'The promise of a new thing challenges the reader to look beyond past disappointments and failures to see what God is doing now. What new way is God opening for you? What new deliverance is coming? The key is not to rely on past victories but to trust in the One who is making new things spring forth.',
        },
        {
          kind: 'reflection',
          id: 'isaiah43-new-thing-2',
          prompt: 'What old thing are you clinging to—a past failure, a past shame, a past disappointment? What new thing might God be inviting you to see or experience? How does the promise that God blots out your sins for His own sake change your sense of possibility?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine...I, even I, am he that blotteth out thy transgressions for mine own sake.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 43 · Study Guide',
  },

  hasHebrew: true,
};
