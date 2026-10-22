// English interface texts of Landkarte/entwurf-11/index.html (draft 10: map in the sea with the Langlands fjord and
// the bridge under construction). Copy of the parts of ui-e8.js that the page needs (keys "#e8-…" renamed to "#e11-…"),
// plus the texts of draft 10 at the end. Keys "#…" belong to elements with data-t or data-t-title; the other keys are
// the German texts in the page code. Patterns with {0}, {1} … are filled with numbers and names in the page code.
window.EN_UI = Object.assign(window.EN_UI || {}, {
  "#title": "Landscape of Number Theory and Algebraic Geometry",

  // Bar above the map
  "#e11-plus": "Zoom in",
  "#e11-minus": "Zoom out",
  "#e11-ganz": "Reset",
  "#e11-mass": "Importance by",
  "#e11-m-nutzer": "direct users",
  "#e11-m-folgen": "all subsequent theorems",
  "#e11-fahnen": "Show flags:",
  "#e11-filter": "Show only",
  "#e11-n-alle": "all theorems",
  "#e11-n-einfach": "easy to understand",
  "#e11-n-gross": "great theorems and conjectures",
  "#e11-f-keine": "none",
  "#e11-f-grundlegend": "particularly important",
  "#e11-f-staunen": "astonishing",
  "#e11-f-zusammenhang": "beautiful",
  "#e11-f-verstehen": "astonishing only once understood",
  "#e11-f-einfach": "easy to understand",
  "#e11-f-klassifikation": "classification theorems",
  "#e11-hinweis": "Drag to pan; use the mouse wheel or two fingers to zoom. Clicking a building shows its immediate premises, right-clicking (long press) its immediate consequences; a second click of the same kind ends the selection.",
  "Vergrößerung {0}×": "Magnification {0}×",

  // Search field (Todo B35)
  "Satz suchen …": "Search theorems …",
  "Satz, Vermutung oder Person suchen": "Search for a theorem, conjecture or person",
  "Keine Treffer": "No matches",

  // Switches for the labels (Todo B17 and B20)
  // Toolbar (user, 2026-10-22, todo B64): no colons, names of the switches in lower case, area and subarea
  "#e11-zeigen": "Show labels for",
  "#e11-an-laender": "areas",
  "#e11-an-provinzen": "subareas",
  "#e11-an-provinzen-titel": "Names of the subareas; the borders always stay visible",
  "#e11-an-berge": "theorems",
  "#e11-zeigen-symbole": "Show all",
  "#e11-an-alle": "theorems",
  "#e11-an-netz": "dependencies",
  "#e11-an-netz-titel": "Every dependency as a straight line from a premise to its theorem (first proof), as an overview",
  "#e11-an-analogien": "analogies",
  "#e11-an-analogien-titel": "Every analogy, each with a dove",
  "#e11-an-alle-titel": "Every theorem and conjecture as its symbol at every magnification; the names still follow the levels of detail",
  "#e11-an-baeume": "definitions",

  // Legend to the right of the map (Todo B14)
  "Legende": "Legend",
  "Hauptgebiet der MSC, je eine Farbe": "main area of the MSC, one color each",
  "Grenze zwischen zwei Ländern": "border between two areas",
  "Grenze zwischen Provinzen (dreistellige MSC-Klassen)": "border between subareas (three-character MSC classes)",
  "Grenze zwischen Provinzen": "border between subareas",
  "im Beweis verwendet": "used in proof",
  "Vermutete Korrespondenz(en)": "conjectured correspondence(s)",
  "(Gebiet)": "(area)",
  "(Teilgebiet)": "(subarea)",
  "(Theorie)": "(theory)",
  "Hervorhebung, wählbar unter „Fahnen zeigen“": "highlight, chosen under “Show flags”",
  "gezeigter Beweis eines Satzes (fehlt bei einem einzigen Beweis mit einer Voraussetzung)": "shown proof of a theorem (absent for a single proof with a single premise)",
  "weiterer Beweis; ein Klick zeigt ihn": "further proof; a click shows it",
  "Gebiete": "Regions",
  "keine Daten": "no data",
  "Sätze und Vermutungen": "Theorems and conjectures",
  "bewiesener Satz; Größe nach Bedeutung": "proved theorem; size by importance",
  "Klassifikationssatz": "classification theorem",
  "offene Vermutung": "open conjecture",
  "widerlegte Vermutung": "disproved conjecture",
  "Theorie, die in Beweisen als Ganzes vorausgesetzt wird": "theory presupposed as a whole in proofs",
  "Taube": "Dove",
  "Beim gewählten Satz": "At the selected theorem",
  // Plan step 4.5: buildings and cities
  "Theorie, die in Beweisen als Ganzes vorausgesetzt wird; ihr Name erscheint beim Überfahren": "theory presupposed as a whole in proofs; its name appears on hovering",
  "Analogie ohne logische Abhängigkeit": "analogy without logical dependence",
  // Plan step 3.2 (todo B67): legend of the whole route network
  "Alle Abhängigkeiten": "All dependencies",
  "alle Routen der gezeigten Beweise, gebündelt; Strichstärke nach der Zahl der Beweisketten. Ein durchgehender Weg ist keine Beweiskette": "all routes of the shown proofs, bundled; width by the number of proof chains. A continuous path is not a proof chain",
  "Zoombare Regionalkarte der Zahlentheorie und der algebraischen Geometrie mit Sätzen als Bergen":
    "Zoomable regional map of number theory and algebraic geometry with theorems as mountains",

  // Cartouche and countries
  "Landschaft der": "Landscape of",
  "Analogie": "Analogy",
  "zwischen {0} und {1}": "between {0} and {1}",
  "Zahlentheorie und algebraische Geometrie": "Number theory and algebraic geometry",
  "Entwurf 11 · Langlands-Brücke": "Draft 11 · Langlands bridge",
  "Arithmetische Geometrie": "Arithmetic geometry",

  // Measures and flags
  "direkte Nutzer": "direct users",
  "alle folgenden Sätze": "all subsequent theorems",
  "besonders wichtig": "particularly important",
  "erstaunlich": "astonishing",
  "schön": "beautiful",
  "erst nach dem Verstehen erstaunlich": "astonishing only once understood",
  "einfach zu verstehen": "easy to understand",

  // Kind and state of an element (one line in the info box, todo B44)
  "Bewiesener Satz": "Proved theorem",
  "Vermutung, bedingt bewiesen": "Conjecture, conditionally proved",
  "Widerlegte Vermutung": "Disproved conjecture",
  "Programm": "Programme",
  "Programm: Forschungsprogramm ohne einzelne präzise Aussage": "Programme: research programme without a single precise statement",
  "Theorie": "Theory",
  "Offene Vermutung": "Open conjecture",
  "Vermutung": "Conjecture",
  "(Vermutung)": "(conjecture)",
  "{0}, widerlegt durch {1}": "{0}, disproved by {1}",
  "Widerlegt durch {0}": "Disproved by {0}",

  // Tooltips
  "Beweis": "Proof",
  "Gezeigter Beweis von {0}": "Shown proof of {0}",
  "Einziger Beweis von {0}": "Only proof of {0}",
  "Weiterer Beweis von {0} – Klick zeigt ihn": "Further proof of {0} – click to show it",

  // Info box of an element
  "Schließen": "Close",
  "Klassifikation": "Classification",
  "Lage": "Location",
  "Land": "Area",
  " und ": " and ",
  "Bewiesen von {0}": "Proved by {0}",
  "Vermutet von {0}": "Conjectured by {0}",
  "Personen und Jahr nicht erfasst": "Persons and year not recorded",
  "Provinz": "Subarea",
  "MSC-Klassen": "MSC classes",
  "Alle folgenden Sätze": "All subsequent theorems",
  "Fahne bei": "Flag for",
  "Erscheint ab Vergrößerung {0} (Maß: {1})": "Appears from magnification {0} (measure: {1})",
  "Geschichte": "History",
  "um ": "c. ",
  "vermutet": "conjectured",
  "bewiesen": "proved",
  "bedingt bewiesen": "conditionally proved",
  "teilweise bewiesen": "partially proved",
  "Treffer im Namen": "In the name",
  "Treffer im Volltext": "In the full text",
  "verallgemeinert": "generalized",
  "übertragen": "transferred",
  "widerlegt": "disproved",
  "Beweis beansprucht": "proof claimed",
  "Einwand": "objection",
  "(gezeigt)": "(shown)",
  "Voraussetzungen: Stufe {0} von {1}": "Premises: stage {0} of {1}",
  "Folgerungen: Stufe {0} von {1}": "Consequences: stage {0} of {1}",
  "Voraussetzungen: keine": "Premises: none",
  "Folgerungen: keine": "Consequences: none",
  // Stepping through the proofs (Todo B30)
  "Voraussetzungen aller Beweise: Stufe 1": "Premises of all proofs: stage 1",
  "Vorheriger Beweis (Pfeiltaste links)": "Previous proof (left arrow key)",
  "Nächster Beweis (Pfeiltaste rechts)": "Next proof (right arrow key)",
  "Alle {0} Beweise": "All {0} proofs",
  "Beweis {0} von {1}": "Proof {0} of {1}",
  "alle Beweise": "all proofs",
  "aus": "from",
  "Verwendet im Beweis von": "Used in the proof of",
  "Beziehungen": "Relations",
  // Info box after todo B44: head, statement, sections
  "Grenzt an": "Borders on",
  "Vorausgesetzt in Beweisen von {0} Sätzen": "Presupposed in proofs of {0} theorems",
  "Direkte Nutzer: {0}": "Direct users: {0}",
  "Einordnung": "Classification and measures",
  "In der Karte gezeigt": "Shown on the map",
  "Beweise": "Proofs",
  "Bedingte Beweise": "Conditional proofs",
  "Bedingter Beweis": "Conditional proof",
  "Bedingter Beweis {0} von {1}": "Conditional proof {0} of {1}",
  "Alle {0} bedingten Beweise": "All {0} conditional proofs",
  ", bedingt": ", conditional",
  "Beweisidee": "Proof idea",
  "Erläuterung": "Explanation",
  "alle {0} zeigen": "show all {0}",
  "als Spezialfall von {0}": "as a special case of {0}",
  "enthält als Spezialfall": "contains as a special case",
  "gefunden": "found",
  "Teilresultat zu": "Partial result towards",
  "Teilresultate": "Partial results",
  "Bewiesen äquivalent zu": "Proved equivalent to",
  "Widerlegt": "Disproves",
  "Gegenbeispiel": "Counterexample",
  "Gegenbeispiele": "Counterexamples",
  "Analog zu": "Analogous to",
  "Zeigt die Bedeutung von": "Shows the meaning of",
  "Deutungen": "Interpretations",
  "Nötig für die Formulierung von": "Needed to formulate",
  "Voraussetzungen der Formulierung": "Prerequisites of the formulation",
  "in der Tabelle großer Sätze und Vermutungen": "in the table of major theorems and conjectures",
  "in der Galerie": "in the gallery",
  "Verweise": "Links",
  "im Satzgraphen der arithmetischen Geometrie": "in the theorem graph of arithmetic geometry",
  "im großen Graphen der algebraischen Geometrie": "in the large graph of algebraic geometry",
  "im Satzgraphen der algebraischen Geometrie": "in the theorem graph of algebraic geometry",

  // Below the map
  "Ausgeblendet: {0} × {1}.": "Hidden: {0} × {1}.",
  "Ohne berechnete Lage (Skript entwurf-7-anordnung.js neu ausführen): {0}.":
    "Without computed position (run the script entwurf-7-anordnung.js again): {0}.",
  "{0} (Provinz fehlt)": "{0} (province missing)",
  // Warnings of the model about duplicate proofs of merged theorems (todo B44, F8; console only)
  "Satz {0}: Beweis „{1}“ ({2}) hat dieselben Voraussetzungen wie „{3}“ ({4}) und wird nur einmal gezeigt; Doppel in den Daten entfernen.":
    "Theorem {0}: proof “{1}” ({2}) has the same premises as “{3}” ({4}) and is shown only once; remove the duplicate in the data.",
  "Satz {0}: zwei Beweise mit dem Namen „{1}“ ({2} und {3}) mit verschiedenen Voraussetzungen; Doppel in den Daten prüfen.":
    "Theorem {0}: two proofs named “{1}” ({2} and {3}) with different premises; check the data for a duplicate.",
  "{0} (vorläufig in die Mitte der Provinz „{1}“ gestellt)": "{0} (placed provisionally in the middle of the province “{1}”)",
  "#e11-uebersicht": "Overview of the drafts",


  // Draft 10: sea, fjord, bridge
  "Karte der Zahlentheorie und der algebraischen Geometrie im Meer, mit dem Langlands-Fjord und der Brücke im Bau":
    "Map of number theory and algebraic geometry in the sea, with the Langlands fjord and the bridge under construction",
  "Bewiesene Korrespondenz": "Proved correspondence",
  "Bauplan: Korrespondenz, vermutet": "Construction plan: correspondence, conjectured",
  "Korrespondenz, bewiesen (Brücke)": "Correspondence, proved (bridge)",
  "Bewiesene Richtung": "Proved direction",
  "in beide Richtungen": "in both directions",
  "von der Galois-Seite zur automorphen Seite": "from the Galois side to the automorphic side",
  "von der automorphen Seite zur Galois-Seite": "from the automorphic side to the Galois side",
  "Bewiesene Fälle: {0} eigene Brücken": "Proved cases: {0} bridges of their own",
  "Unbewiesene Teile": "Unproved parts",
  "Länge des Fjords (vorläufig): {0} % der Grenze zwischen den Seiten. Der definitorische Abstand im Begriffsgraphen der arithmetischen Geometrie ({1} von {2} Schritten) ergäbe {3} %; auf Wunsch des Nutzers ist der Fjord mindestens {4} % lang.":
    "Length of the fjord (provisional): {0} % of the border between the sides. The definitional distance in the concept graph of arithmetic geometry ({1} of {2} steps) would give {3} %; at the user's request the fjord is at least {4} % long.",
  "Korrespondenz, teilweise bewiesen (Brücke im Bau)": "Correspondence, partly proved (bridge under construction)",
  "Korrespondenz, vermutet (Bauplan)": "Correspondence, conjectured (construction plan)",
  "Die beiden Seiten": "The two sides",
  "Zuordnung": "Assignment",
  "Erhaltene Größe": "Preserved quantity",
  "Wörterbuch": "Dictionary",
  "Die Liste der unbewiesenen Teile steht vorläufig in der Seite von Entwurf 11, nicht im Datenmodell.":
    "For now the list of unproved parts is part of the page of draft 11, not of the data model.",
  "{0}: Die beiden Seiten grenzen nicht an der Küste aneinander; kein Fjord": "{0}: the two sides do not border each other at the coast; no fjord",
  "Galois → automorph im allgemeinen Fall, etwa für gerade ikosaedrische zweidimensionale Artin-Darstellungen über ℚ: Ihre Automorphie (Artin-Vermutung) ist im Allgemeinen offen.":
    "Galois → automorphic in the general case, for instance for even icosahedral two-dimensional Artin representations over ℚ: their automorphy (Artin conjecture) is open in general.",
  "Automorph → Galois für Maaß-Spitzenformen zum Eigenwert 1/4: Ihnen sollten gerade zweidimensionale Artin-Darstellungen entsprechen; das ist offen.":
    "Automorphic → Galois for Maass cusp forms with eigenvalue 1/4: they should correspond to even two-dimensional Artin representations; this is open.",
  "Allgemeine reduktive Gruppen über Zahlkörpern: Die Zuordnung zwischen automorphen Darstellungen und Galois-Parametern ist im Allgemeinen offen.":
    "General reductive groups over number fields: the assignment between automorphic representations and Galois parameters is open in general.",
  "Die geometrische Langlands-Vermutung ist das geometrische Gegenstück dieser Korrespondenz: Statt Zahlkörpern betrachtet sie Kurven, statt Funktionen Garben. Ihr unverzweigter Fall über Körpern der Charakteristik 0 ist seit 2024 bewiesen (Gaitsgory, Raskin und andere). Sie soll später eine eigene Brücke bekommen.":
    "The geometric Langlands conjecture is the geometric counterpart of this correspondence: instead of number fields it considers curves, instead of functions sheaves. Its unramified case over fields of characteristic 0 has been proved since 2024 (Gaitsgory, Raskin and others). It is to get a bridge of its own later.",

  // What's new (release notes below the map)
  "#e11-neu": "What's new",
  "#e11-neu-r4-zeit": "21 October 2026, 16:15",
  "#e11-neu-r4": `
    <li>Hill ranges and large mountains are smaller. Hill ranges of level 1 have size 32 instead of 48, of level 2 size 30 instead of 40, of level 3 size 28 instead of 32; level 4 stays at 26. A mountain of a size above 13 (levels 1 and 2) grows above this limit with only 0.4 of the former slope; the largest mountain now has size 19 instead of 28. The order of the sizes is kept.</li>
  `,
  "#e11-neu-b52c-zeit": "21 October 2026, 09:30",
  "#e11-neu-b52c": `
    <li>The box shown when hovering over a theorem lists all proofs in historical order in its second line: “Proved by X (year), Y (year), …”. For a conjecture it says “Conjectured by …”. The same line is in the info box. The search suggestions still show only the first originator.</li>
    <li>Every proof point, filled or hollow, shows on hover the name of the proof, the persons and the year, and its role. If persons and year are not recorded, it says “Persons and year not recorded”.</li>
  `,
  "#e11-neu-sym-zeit": "21 October 2026, 01:30",
  "#e11-neu-sym": `
    <li>A counterexample is a cairn (four flat stones stacked), no longer a dragon. An analogy is shown by a dove in the middle of a broken line, no longer by a sailing boat.</li>
  `,
  "#e11-neu-b52b-zeit": "21 October 2026, 00:45",
  "#e11-neu-b52b": `
    <li>Right click on a mountain (consequences): a consequence of stage d is drawn only with the routes from the selected theorem and from consequences of the stages 1 to d − 1. Routes from other premises of the same proof that are themselves consequences of the same stage no longer appear (example: the Artin reciprocity law).</li>
  `,
  "#e11-neu-b52a-zeit": "21 October 2026, 00:15",
  "#e11-neu-b52a": `
    <li>Legend: the rows “Sea”, “Fjord”, “Conditional land”, “Ridge” and “Colour of the route” are gone. The finished bridge is called “Proved correspondence”; the row “Route” now only says “Proof”.</li>
    <li>A conjecture that is proved assuming another conjecture is drawn like any open conjecture (mountain with a cloud cap), without hatched ground. The info box still shows the state “conditionally proved”.</li>
    <li>A conditional proof is drawn like every other proof (red line with chevrons, arrowhead and red proof point); the double line is gone. The info box still says “conditional” for it.</li>
  `,
  "#e11-neu-b42g-zeit": "21 October 2026, 00:15",
  "#e11-neu-b42g": `
    <li>The theory “Algebraic geometry” is dissolved: no drawn proof assumes it as a whole any more. Instead there are new hill ranges for individual theories.</li>
    <li>The quadratic reciprocity law is a theorem of its own with two proofs: the proof with Gauss's lemma and the proof as a late special case of Artin reciprocity. The theorem “Weil II” is new as well.</li>
  `,
  "#e11-neu-b50v2-zeit": "20 October 2026, 21:00",
  "#e11-neu-b50v2": `
    <li>The name of a hill range now stands uniformly half on its symbol: centred horizontally, with the middle of the text on the foot line of the hills. The upper half of the name lies on the lower part of the symbol, the lower half below it. If this place is taken, the name only moves sideways in small steps at the same height; only if that fails too does it stand at one of the earlier places. The names of the hill ranges are therefore placed directly after the mountains of level 1.</li>`,
  "#e11-neu-4-zeit": "20 October 2026, 20:45",
  "#e11-neu-4": `
    <li>The width of a bridge again follows its importance, with the same measure as the size of the mountains (data, editorial rating). The deck is 11 to 20 pixels wide, so that the names stay readable; Artin reciprocity and the modularity theorem are the widest. The construction plan of the general Langlands correspondence is somewhat wider than the widest finished bridge. The order by generality and the names on the deck remain.</li>
  `,
  "#e11-neu-b50-zeit": "20 October 2026, 20:45",
  "#e11-neu-b50": `
    <li>The name of a hill range now preferably stands on the lower part of its own symbol instead of next to it. Proof points and other symbols stay free.</li>
    <li>The names of the most important mountains (level 1, then level 2) are placed before the province names. A province name moves or is left out before the name of such a mountain is left out. If such a name finds no room next to its symbol, it stands further away and is joined to it by a leader line; at the edge of the map it moves sideways into the image. If a name of level 1 still finds no room, the name of a neighbouring mountain of level 1 moves away, provided both then have room. All names of level 1 are now visible on the whole map, including Fermat's Last Theorem and Faltings's theorem.</li>`,
  "#e11-neu-3-zeit": "20 October 2026, 20:30",
  "#e11-neu-3": `
    <li>The bridges are now ordered by generality, no longer by year: correspondences that bridge little stand inside, where the fjord is narrow (Artin reciprocity for GL<sub>1</sub> innermost); more general ones stand further out, where the fjord is wide. The general Langlands correspondence (construction plan) stands at the mouth. Every bridge reaches from bank to bank, so a more general bridge is longer.</li>
    <li>Order from inside to outside: Artin reciprocity, Langlands–Tunnell theorem, modularity theorem, Galois representations attached to modular forms, Serre's conjecture, potential automorphy of symmetric powers, Galois representations attached to self-dual automorphic representations, Galois representations over CM fields, local Langlands correspondence for GL<sub>n</sub>, Langlands correspondence for GL<sub>n</sub> over function fields, geometrization of the local correspondence, Langlands parameters after V. Lafforgue, general Langlands correspondence.</li>
    <li>New bridges instead of mountains: potential automorphy of symmetric powers and Galois representations attached to self-dual automorphic representations.</li>
    <li>The name of a bridge stands on its deck, no longer beside it. All bridges have the same width; only the construction plan of the general Langlands correspondence is somewhat wider. When a bridge appears still depends on its importance.</li>
  `,
  "#e11-neu-2-zeit": "20 October 2026, 20:15",
  "#e11-neu-2": `
    <li>Every correspondence is now a bridge of its own and no longer a mountain. Finished bridges cross the Langlands fjord for Artin reciprocity, the modularity theorem, Serre's conjecture (Khare–Wintenberger), the local Langlands correspondence for GL<sub>n</sub> and the Langlands correspondence for GL<sub>n</sub> over function fields, and for the constructions in one direction with preserved L-function: Galois representations attached to modular forms (Eichler–Shimura, Deligne), the Langlands–Tunnell theorem, Galois representations over CM fields, Langlands parameters after V. Lafforgue and the geometrization of the local correspondence (Fargues–Scholze). Their mountains are gone.</li>
    <li>The bridges stand near the broad end of the fjord, in historical order from the sea inward. Like mountains they appear according to their importance: in the overview only the most important ones, the others when zooming in. The width of a bridge grows with its importance. Names of bridges are horizontal.</li>
    <li>The general Langlands correspondence is a construction plan (a bridge drawn with dashed lines, without a deck) over the same fjord, behind the finished bridges. The Langlands programme in addition has its dashed outline around the whole fjord region.</li>
    <li>Routes from the premises of a correspondence end in the middle of its bridge; routes to the theorems that use it start there. Clicking a bridge opens its info box with the two sides, the proved direction, the preserved quantity and, where meaningful, a dictionary.</li>
    <li>The fjord is deeper: it now cuts in along 80 % of the border between 11R and 11F (provisional; the measure from the concept graph gives about a third).</li>
    <li>Legend: rows for the bridge and the construction plan instead of the bridge under construction with arches.</li>
  `,
  "#e11-neu-1-zeit": "20 October 2026, 20:00",
  "#e11-neu-1": `
    <li>First version of draft 10, based on draft 8: the map lies in the sea. The coast is irregular and is only the border between land and water.</li>
    <li>A fjord cuts from the southern coast along the border between the Galois side (province 11R) and the automorphic side (province 11F) into the country of number theory. At its inner end the land is connected. For now the length of the fjord follows the definitional distance between “Galois representation” and “automorphic representation” in the concept graph of arithmetic geometry.</li>
    <li>The Langlands correspondence crosses the fjord as a bridge under construction. Every arch is a proved partial result; in the middle the arches for the unproved parts are missing. Zooming in shows the names of the arches. Clicking an arch selects the mountain of the partial result.</li>
    <li>Clicking the bridge shows in the info box the two sides, the preserved quantity (the L-function), the dictionary and the list of arches with years and persons. Routes to the correspondence end in the middle of the bridge.</li>
    <li>The partial results remain mountains. They stand as close to the bridgehead of their side as their province allows.</li>
    <li>The dashed outline of the Langlands correspondence is gone; the bridge replaces it.</li>
    <li>New layout: 11F and 11R now border each other at the coast. New province borders compared with draft 8: 11D–11Y, 11D–20D, 11E–11J, 11E–11Y, 11F–11R, 11F–68Q. Removed province borders: 11D–11F, 11E–11F, 11F–11J, 11F–11P, 11F–46E, 11R–68Q, 11Y–68Q. All countries keep their neighbours.</li>
    <li>Legend: new rows for the bridge under construction, the sea and the fjord.</li>
  `,

  // Plan step 2.2: trees and forests (concepts)
  "Begriffe": "Concepts",
  "Begriff (Definition); Größe nach der Zahl der Sätze, in deren Aussage er vorkommt": "concept (definition); size by the number of theorems whose statement uses it",
  "Wald: mindestens fünf Begriffe einer Provinz, die über Definitionen zusammenhängen": "forest: at least five concepts of one subarea that are connected by their definitions",
  "Wald {0}": "Forest {0}",
  "Wald „{0}“": "forest “{0}”",
  "Wald aus {0} Begriffen in der Provinz {1}": "Forest of {0} concepts in the subarea {1}",
  "Name vorläufig, noch nicht freigegeben": "Provisional name, not yet approved",
  "Begriff (Definition)": "Concept (definition)",
  "Definition": "Definition",
  "Definiert mit": "Defined with",
  "Ist ein Fall von": "Is a case of",
  "Verwendet in der Definition von": "Used in the definition of",
  "In der Aussage von {0} Sätzen und Vermutungen": "In the statement of {0} theorems and conjectures",
  "In der Aussage eines Satzes oder einer Vermutung": "In the statement of one theorem or conjecture",
  "In keiner Aussage der Karte": "In no statement on the map",
  "Erscheint ab Vergrößerung {0}": "Appears from magnification {0}",

  // Todo B69 e (user, 2026-10-22): short names of three provinces, only in draft 11 (entwurf-11-modell.js)
  "Zeta- und L-Funktionen": "Zeta and L-functions",
  "Globale Körper": "Global fields",
  "Lokale Körper": "Local fields",
});
