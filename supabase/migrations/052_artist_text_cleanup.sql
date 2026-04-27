-- Artist text cleanup — fix two classes of corruption that crept into
-- public.artists across earlier seed phases:
--
--   (1) Mojibake: UTF-8 bytes for em-dash, en-dash, curly quotes, ellipsis,
--       and accented Latin letters were once interpreted as Mac Roman and
--       then re-encoded as UTF-8, leaving sequences like "‚Äî" where an
--       em-dash should be, "√§" where "ä" should be, etc.
--
--   (2) Over-escaped apostrophes: dollar-quoted SQL bodies don't need
--       single-quote doubling, but several seed migrations (026, 027, …)
--       wrote `Amsterdam''s`, `Lions'' Den`, `Lorenzo de'' Medici`, etc.
--       The literal text in the database currently has `''` where it
--       should have a single `'`.
--
-- This migration defines two helper functions, applies them to every
-- artist text + jsonb column the hub page reads (bio_long, bio, name,
-- nationality, bio_sources, notable_works), then drops the helpers.

-- ─── Helpers ───────────────────────────────────────────────────────────

create or replace function pg_temp.fix_mojibake(input text)
returns text
language sql
immutable
as $func$
  select
    case when $1 is null then null else
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace(
      replace($1,
        '‚Äî', '—'),     -- E2 80 94  em dash
        '‚Äì', '–'),     -- E2 80 93  en dash
        '‚Äô', ''''),    -- E2 80 99  right single quote → ASCII apostrophe
        '‚Äò', ''''),    -- E2 80 98  left single quote → ASCII apostrophe
        '‚Äú', '"'),     -- E2 80 9C  left double quote → ASCII quote
        '‚Äù', '"'),     -- E2 80 9D  right double quote → ASCII quote
        '‚Ä¶', '…'),     -- E2 80 A6  ellipsis
        '‚Ä¢', '•'),     -- E2 80 A2  bullet
        '√†', 'à'),
        '√°', 'á'),
        '√¢', 'â'),
        '√£', 'ã'),
        '√§', 'ä'),
        '√•', 'å'),
        '√¶', 'æ'),
        '√ß', 'ç'),
        '√®', 'è'),
        '√©', 'é'),
        '√™', 'ê'),
        '√´', 'ë'),
        '√≠', 'í'),
        '√Æ', 'î'),
        '√Ø', 'ï'),
        '√±', 'ñ'),
        '√≤', 'ò'),
        '√≥', 'ó'),
        '√¥', 'ô'),
        '√µ', 'õ'),
        '√∂', 'ö'),
        '√∏', 'ø'),
        '√π', 'ù'),
        '√∫', 'ú'),
        '√ª', 'û'),
        '√º', 'ü'),
        '√Ω', 'ý'),
        '√Ä', 'À'),
        '√Å', 'Á'),
        '√â', 'É'),
        '√ç', 'Í'),
        '√ë', 'Ñ'),
        '√ñ', 'Ö'),
        '√ò', 'Ø'),
        '√ô', 'Ù'),
        '√ú', 'Ü'),
        '''''', '''')   -- collapse SQL-escape leakage `''` → `'`
    end;
$func$;

-- For jsonb we operate on the textual JSON representation. The replacement
-- targets are bytes that occur inside string values, never inside JSON
-- syntax, so the resulting text is always valid JSON and cast back cleanly.
-- The double-quote replacements are tricky because `"` is JSON-significant,
-- so we map them to ASCII apostrophes (which, after this migration, the
-- editor can selectively upgrade to typographic quotes if desired).
create or replace function pg_temp.fix_mojibake_jsonb(input jsonb)
returns jsonb
language plpgsql
immutable
as $func$
declare
  txt text;
begin
  if input is null then
    return null;
  end if;
  txt := input::text;

  txt := replace(txt, '‚Äî', '—');
  txt := replace(txt, '‚Äì', '–');
  txt := replace(txt, '‚Äô', '''');
  txt := replace(txt, '‚Äò', '''');
  -- For double-quote mojibake inside JSON: collapse to apostrophes so we
  -- never emit an unescaped `"` mid-string.
  txt := replace(txt, '‚Äú', '''');
  txt := replace(txt, '‚Äù', '''');
  txt := replace(txt, '‚Ä¶', '…');
  txt := replace(txt, '‚Ä¢', '•');
  txt := replace(txt, '√†', 'à');
  txt := replace(txt, '√°', 'á');
  txt := replace(txt, '√¢', 'â');
  txt := replace(txt, '√£', 'ã');
  txt := replace(txt, '√§', 'ä');
  txt := replace(txt, '√•', 'å');
  txt := replace(txt, '√¶', 'æ');
  txt := replace(txt, '√ß', 'ç');
  txt := replace(txt, '√®', 'è');
  txt := replace(txt, '√©', 'é');
  txt := replace(txt, '√™', 'ê');
  txt := replace(txt, '√´', 'ë');
  txt := replace(txt, '√≠', 'í');
  txt := replace(txt, '√Æ', 'î');
  txt := replace(txt, '√Ø', 'ï');
  txt := replace(txt, '√±', 'ñ');
  txt := replace(txt, '√≤', 'ò');
  txt := replace(txt, '√≥', 'ó');
  txt := replace(txt, '√¥', 'ô');
  txt := replace(txt, '√µ', 'õ');
  txt := replace(txt, '√∂', 'ö');
  txt := replace(txt, '√∏', 'ø');
  txt := replace(txt, '√π', 'ù');
  txt := replace(txt, '√∫', 'ú');
  txt := replace(txt, '√ª', 'û');
  txt := replace(txt, '√º', 'ü');
  txt := replace(txt, '√Ω', 'ý');
  txt := replace(txt, '√Ä', 'À');
  txt := replace(txt, '√Å', 'Á');
  txt := replace(txt, '√â', 'É');
  txt := replace(txt, '√ç', 'Í');
  txt := replace(txt, '√ë', 'Ñ');
  txt := replace(txt, '√ñ', 'Ö');
  txt := replace(txt, '√ò', 'Ø');
  txt := replace(txt, '√ô', 'Ù');
  txt := replace(txt, '√ú', 'Ü');
  -- SQL-escape leakage. In JSON-as-text, an apostrophe is just an
  -- apostrophe (no escaping needed), so `''` → `'` is safe.
  txt := replace(txt, '''''', '''');

  return txt::jsonb;
end;
$func$;

-- ─── Apply to text columns ─────────────────────────────────────────────

update public.artists
   set name        = pg_temp.fix_mojibake(name),
       nationality = pg_temp.fix_mojibake(nationality),
       bio         = pg_temp.fix_mojibake(bio),
       bio_long    = pg_temp.fix_mojibake(bio_long)
 where (name        is not null and (name        like '%‚Ä%' or name        like '%√%' or name        like '%''''%'))
    or (nationality is not null and (nationality like '%‚Ä%' or nationality like '%√%' or nationality like '%''''%'))
    or (bio         is not null and (bio         like '%‚Ä%' or bio         like '%√%' or bio         like '%''''%'))
    or (bio_long    is not null and (bio_long    like '%‚Ä%' or bio_long    like '%√%' or bio_long    like '%''''%'));

-- ─── Apply to jsonb columns ────────────────────────────────────────────

update public.artists
   set bio_sources   = pg_temp.fix_mojibake_jsonb(bio_sources),
       notable_works = pg_temp.fix_mojibake_jsonb(notable_works)
 where bio_sources::text   like '%‚Ä%'
    or bio_sources::text   like '%√%'
    or bio_sources::text   like '%''''%'
    or notable_works::text like '%‚Ä%'
    or notable_works::text like '%√%'
    or notable_works::text like '%''''%';

-- pg_temp.* helpers vanish at session end — no explicit drop needed.
