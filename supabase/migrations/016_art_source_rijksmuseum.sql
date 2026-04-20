-- Add 'rijksmuseum' to the art_source enum. Unlike the per-artist
-- Wikimedia sources (dore, tissot, schnorr, caravaggio, raphael, rubens,
-- fra-angelico, etc.), this is a single cross-artist source pulling from
-- the Rijksmuseum's keyless Linked Open Data APIs (data.rijksmuseum.nl).
-- Covers Dutch Golden Age painters (Pieter Lastman, Ferdinand Bol,
-- Aert de Gelder, Jan Victors) plus Dutch/Flemish biblical printmakers
-- (Lucas van Leyden, Jan Saenredam, Maarten van Heemskerck, Adriaen
-- Collaert, Crispijn van de Passe, Jan Luyken).

ALTER TYPE art_source ADD VALUE IF NOT EXISTS 'rijksmuseum';
