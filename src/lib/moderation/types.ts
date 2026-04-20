export interface ModerationProviderResult {
  provider: 'openai' | 'aws' | 'google';
  ran: boolean;           // false when provider isn't configured
  error?: string;
  // Flat label → score (0..1) map. Each provider normalizes its own labels
  // into this shape so the rules engine can treat them uniformly.
  labels: Record<string, number>;
  raw: unknown;           // full API response for audit
}

export type ModerationStatus = 'pending' | 'flagged' | 'rejected' | 'approved';

export interface ModerationDecision {
  status: Exclude<ModerationStatus, 'approved'>; // automated pass never auto-approves
  reasons: string[];
  worstScore: number;
  worstLabel: string | null;
  providers: ModerationProviderResult[];
  contextFlags: string[];  // non-score signals (e.g. "high-risk-chapter")
}
