-- Wikidata Q-IDs for phase 13 named artists.
-- 9 auto-resolved by scripts/backfill-wikidata-ids.mjs:
--   * cherubino-alberti-zaccaria-mattia → Q2553402
--   * claude-mellan → Q1274026
--   * crispijn-van-de-passe → Q140096
--   * georg-pencz → Q698624
--   * giorgio-ghisi → Q1010603
--   * giovanni-domenico-tiepolo → Q435316
--   * giulio-bonasone → Q1527962
--   * simone-cantarini → Q573430
--   * stefano-della-bella → Q921242
-- 1 manual override (year mismatch):
--   * andrea-schiavone-andrea-meldola → Q495060
-- 2 manual manuscript-Q overrides (anonymous workshops, no person Q):
--   * vivian-bible-master → Q3522635 (Vivian Bible / First Bible of Charles the Bald)
--   * codex-amiatinus-master → Q1064784 (Codex Amiatinus)
-- 5 Anonymous buckets — left null (no canonical person or manuscript Q).

update public.artists set wikidata_id = 'Q2553402' where slug = 'cherubino-alberti-zaccaria-mattia';
update public.artists set wikidata_id = 'Q1274026' where slug = 'claude-mellan';
update public.artists set wikidata_id = 'Q140096'  where slug = 'crispijn-van-de-passe';
update public.artists set wikidata_id = 'Q698624'  where slug = 'georg-pencz';
update public.artists set wikidata_id = 'Q1010603' where slug = 'giorgio-ghisi';
update public.artists set wikidata_id = 'Q435316'  where slug = 'giovanni-domenico-tiepolo';
update public.artists set wikidata_id = 'Q1527962' where slug = 'giulio-bonasone';
update public.artists set wikidata_id = 'Q573430'  where slug = 'simone-cantarini';
update public.artists set wikidata_id = 'Q921242'  where slug = 'stefano-della-bella';

-- Manual overrides
update public.artists set wikidata_id = 'Q495060'  where slug = 'andrea-schiavone-andrea-meldola';
update public.artists set wikidata_id = 'Q3522635' where slug = 'vivian-bible-master';
update public.artists set wikidata_id = 'Q1064784' where slug = 'codex-amiatinus-master';
