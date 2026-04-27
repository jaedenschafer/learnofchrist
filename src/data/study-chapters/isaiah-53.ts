import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 53 — The Suffering Servant of God
 *
 * The greatest of the Servant Songs and perhaps the most Christocentric chapter
 * in all of Scripture. "He hath no form nor comeliness...he is despised and
 * rejected of men...he was wounded for our transgressions, he was bruised for
 * our iniquities." The chapter details the Servant\'s rejection, suffering, death,
 * and vindication. Every verse reverberates with redemptive purpose. This is
 * where Old Testament and New Testament meet.
 */
export const ISAIAH_53: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 53,

  intros: [
    'Isaiah 53 is the gospel in the Old Testament. Here, centuries before Christ came, the prophet describes a man who has no form, no comeliness. He is despised and rejected. He is acquainted with grief. Yet His suffering is not meaningless. It is redemptive. He bears our griefs, carries our sorrows, is wounded for our transgressions. All we like sheep have gone astray, but the Lord has laid on Him the iniquity of us all. He opens not His mouth, submits like a lamb to the slaughter. Yet by His knowledge, by His death, He justifies many and bears their iniquities. The chapter is the theological heart of the Suffering Servant theme: redemption through sacrifice, justification through substitution, healing through wounds.',
    'Every Christian tradition recognizes Christ in these verses. The prophet sees across centuries to the cross. The Servant\'s vindication follows His suffering—His days are prolonged, He sees His seed, His will prospers. Death could not hold Him. Resurrection vindicated what the cross appeared to destroy.',
  ],

  sections: [
    {
      ref: 'Isaiah 53:1–3',
      title: 'The Rejected Servant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 53,
          lines: [
            plain(1, 'Who hath believed our report? and to whom is the arm of the Lord revealed?'),
            plain(2, 'For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him.'),
            plain(3, 'He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa53-report',
          html:
            '"Who hath believed our report?" The prophet opens with a question that echoes through history. The message he brings—that the arm of the Lord is revealed through a suffering, despised servant—is not readily believed. It contradicts earthly standards of power and success.',
        },
        {
          kind: 'commentary',
          id: 'isa53-tender',
          html:
            'The Servant grows up like a tender plant, like a root out of dry ground. He has no form, no comeliness. We see no beauty in Him that would make us desire Him. This is a radical statement. The one who brings redemption does not come in worldly glory. He comes in weakness, in obscurity, in apparent failure. He is despised and rejected of men, a man of sorrows, acquainted with grief. People hide their faces from Him in disgust.',
        },
        {
          kind: 'hebrew',
          id: 'isa53-makob',
          title: 'Makob — "Sorrows" (Makaim)',
          script: 'מַכְאוֹבִים',
          translit: '<strong>Makaim</strong> · sorrows; pains; anguish',
          description:
            'The Hebrew word makaim refers not merely to sadness, but to deep emotional and possibly physical pain. The Servant is intimate with suffering. It is not foreign to Him. It is part of His fabric.',
        },
        {
          kind: 'christ',
          id: 'isa53-rejection',
          title: 'Christ Connection — The Despised One',
          html:
            'Every Gospel account records the rejection of Jesus. "He came unto his own, and his own received him not" (John 1:11). The religious leaders despised Him. The crowds called for His crucifixion. His own disciples abandoned Him. Yet it was precisely in this rejection that He accomplished redemption. The very disfigurement and despising that Isaiah describes became the means of our salvation.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah invites us to see beauty where the world sees only failure. True strength manifests in weakness. True power comes through surrender. The Servant\'s acquaintance with grief is what makes Him able to heal our sorrows. He does not comfort from a distance. He enters into our suffering.',
        },
        {
          kind: 'reflection',
          id: 'isa53-despised',
          prompt: 'Why do you think God chose to bring redemption through a suffering, despised Servant rather than through power and worldly honor? What does this teach about the nature of true redemption?',
        },
      ],
    },

    {
      ref: 'Isaiah 53:4–6',
      title: 'The Substitutionary Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 53,
          lines: [
            plain(4, 'Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.'),
            plain(5, 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.'),
            plain(6, 'All we like sheep have gone astray; we have turned every one to his own way; and the Lord hath laid on him the iniquity of us all.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa53-borne',
          html:
            'The Servant bears our griefs and carries our sorrows. He takes upon Himself what belongs to us. Yet the world misunderstands. They think He is being punished by God, smitten for His own sins. They do not perceive the substitution. They do not see that His wounds are for our transgressions, His bruises for our iniquities.',
        },
        {
          kind: 'commentary',
          id: 'isa53-wounds',
          html:
            '"He was wounded for our transgressions, he was bruised for our iniquities." Here is the heart of redemption. The Servant\'s suffering is not punishment for His own failures. It is the price paid for ours. He is chastised that we might have peace. His stripes—the wounds from His beating—become the means of our healing. This is substitution: He bears what we deserve that we might be free.',
        },
        {
          kind: 'hebrew',
          id: 'isa53-avah',
          title: 'Avah — "Iniquity" (Avon)',
          script: 'עָוֹן',
          translit: '<strong>Avon</strong> · iniquity; guilt; wickedness',
          description:
            'The Hebrew word avon refers to the twisted distortion of the good. It is not merely error, but rebellion, a deliberate turning away from God\'s way. The Servant bears not just our mistakes, but the full weight of our rebellion. He takes our avon upon Himself.',
        },
        {
          kind: 'christ',
          id: 'isa53-substitution',
          title: 'Christ Connection — The Lamb of God',
          html:
            'John the Baptist, seeing Jesus, declares: "Behold the Lamb of God, which taketh away the sin of the world" (John 1:29). Paul writes: "For our sakes he made him to be sin who knew no sin; that we might be made the righteousness of God in him" (2 Cor. 5:21). Christ is Isaiah\'s Servant. He bore our griefs. His stripes heal us. Through His substitutionary death, we are justified and made righteous. We are the sheep who went astray; He is the Shepherd who found us and bore our transgressions.',
        },
        {
          kind: 'carry',
          html:
            'The doctrine of substitution—that the innocent bears the punishment of the guilty—is deeply offensive to modern thinking. It seems unjust, a violation of fairness. Yet it is the heart of the Christian gospel. Someone other than ourselves bears the consequences of our sin. We are forgiven not because we deserve it, but because Someone has paid the price. This is grace beyond measure.',
        },
        {
          kind: 'reflection',
          id: 'isa53-substitution',
          prompt: 'How does it change your understanding of redemption to know that the Servant bore your transgressions, took your wounds? What response does this substitution call forth from you?',
        },
      ],
    },

    {
      ref: 'Isaiah 53:7–9',
      title: 'Silent Obedience unto Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 53,
          lines: [
            plain(7, 'He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth.'),
            plain(8, 'He was taken from prison and from judgment: and who shall declare his generation? for he was cut off out of the land of the living: for the transgression of my people was he stricken.'),
            plain(9, 'And he made his grave with the wicked, and with the rich in his death; because he had done no violence, neither was any deceit in his mouth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa53-silent',
          html:
            'The Servant is oppressed and afflicted, yet He opens not His mouth. He does not cry out, does not defend Himself, does not rail against His accusers. He is brought as a lamb to the slaughter, silent, unresisting. This is not the silence of despair. It is the silence of obedience, of deliberate acceptance.',
        },
        {
          kind: 'commentary',
          id: 'isa53-death',
          html:
            'He is cut off from the land of the living. He is assigned a grave with the wicked, the transgressors. Yet even in death, the prophecy insists: He had done no violence, neither was deceit in His mouth. He is innocent. His death is for the transgressions of the people, not for His own.',
        },
        {
          kind: 'hebrew',
          id: 'isa53-daman',
          title: 'Daman — "Dumb" (Silent)',
          script: 'דָּם',
          translit: '<strong>Daman</strong> · to be silent; to refrain from speech',
          description:
            'The Servant\'s silence is not passive weakness. It is a chosen response, a laying down of self-defense. The Hebrew conveys both muteness and the act of restraint—He could speak but chooses not to.',
        },
        {
          kind: 'christ',
          id: 'isa53-christ-silent',
          title: 'Christ Connection — The Silent Lamb',
          html:
            'In the trial accounts, Jesus repeatedly remains silent. Before the Sanhedrin, before Pilate, He opens not His mouth to defend Himself. The Gospels quote Isaiah 53:7 directly: "As a lamb before her shearers is dumb, so he openeth not his mouth." Yet His silence is not weakness. It is the obedience of the Son to the Father\'s will. He chooses the cross. He lays down His life willingly (John 10:18). His silence is the silence of love, giving Himself for the world.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of noise and self-defense. We rush to justify ourselves, to explain our actions, to win arguments. The Servant teaches a different way: the way of submission, of acceptance, of silence before injustice. This is not cowardice. It is the strength of one who trusts God completely, who is not afraid of what men can do.',
        },
        {
          kind: 'reflection',
          id: 'isa53-silence',
          prompt: 'When have you been falsely accused or unjustly treated? What would it take for you to respond with the Servant\'s silence—not out of fear, but out of trust in God?',
        },
      ],
    },

    {
      ref: 'Isaiah 53:10–12',
      title: 'The Vindication and Exaltation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 53,
          lines: [
            plain(10, 'Yet it pleased the Lord to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin, he shall see his seed, he shall prolong his days, and the pleasure of the Lord shall prosper in his hand.'),
            plain(11, 'He shall see of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many; for he shall bear their iniquities.'),
            plain(12, 'Therefore will I divide him a portion with the great, and he shall divide the spoil with the strong; because he hath poured out his soul unto death: and he was numbered with the transgressors; and he bare the sin of many, and made intercession for the transgressors.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa53-pleased',
          html:
            'The cross is not a cosmic accident. It pleased the Lord to bruise the Servant. The suffering is purposeful, redemptive, part of God\'s eternal plan. When the Servant\'s soul becomes an offering for sin, He shall see His seed. His days shall be prolonged. The pleasure of the Lord shall prosper in His hand. The resurrection follows the crucifixion. Vindication follows suffering.',
        },
        {
          kind: 'commentary',
          id: 'isa53-satisfy',
          html:
            'The Servant sees the travail of His soul and is satisfied. By His knowledge—His divine wisdom, His intimate understanding of God\'s purpose—He justifies many. The righteous Servant bears the iniquities of others and makes them righteous. This is the miracle of substitution: His righteousness becomes their righteousness.',
        },
        {
          kind: 'commentary',
          id: 'isa53-portion',
          html:
            'Therefore God will divide the Servant a portion with the great. He will divide spoil with the strong. This is exaltation. The one who was despised becomes the one who divides the spoil. The one who was rejected becomes the victorious king. He poured out His soul unto death, yet He rose again to inherit all things.',
        },
        {
          kind: 'greek',
          id: 'isa53-dikaioo',
          title: 'Dikaioo — "Justify" (Greek LXX)',
          script: 'δικαιόω',
          translit: '<strong>Dikaioo</strong> · to declare righteous; to justify; to vindicate',
          description:
            'The Greek word dikaioo, used in the Septuagint for "justify," means more than acquittal. It means to declare righteous, to vindicate. By the Servant\'s knowledge, those who believe are not merely forgiven; they are declared righteous, vindicated, made acceptable to God.',
        },
        {
          kind: 'christ',
          id: 'isa53-resurrection',
          title: 'Christ Connection — The Vindicated Servant',
          html:
            'Three days after His crucifixion, Christ rose from the dead. This is the vindication Isaiah promised. Death could not hold Him. The resurrection declared that the cross was not defeat, but victory. By His knowledge, by His understanding of God\'s redemptive purpose, He justifies many—all who believe in Him are made righteous before God. He sees His seed—the children of God, the church, the redeemed from every nation who call Him Lord. His days are indeed prolonged; He is seated at the right hand of God, making intercession for all who come to Him.',
        },
        {
          kind: 'carry',
          html:
            'The Servant\'s satisfaction comes from seeing others redeemed. His joy comes not from reward or honor for Himself, but from the knowledge that His suffering has purchased salvation for multitudes. He takes their sins upon Himself and gives them His righteousness. This is the deepest meaning of redemption: exchange. We give Him our sins; He gives us His righteousness. We die with Him; we rise with Him.',
        },
        {
          kind: 'reflection',
          id: 'isa53-vindication',
          prompt: 'How does the Servant\'s vindication through resurrection change how you view your own suffering? When you face injustice or loss, what does it mean to trust that God\'s ultimate vindication will come?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He was wounded for our transgressions, he was bruised for our iniquities...and with his stripes we are healed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 53 · Study Guide',
  },

  hasHebrew: true,
};
