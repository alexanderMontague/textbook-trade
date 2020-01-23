const mcmasterCourses = [
  { value: "ANTHROP", label: "ANTHROP (Anthropology)" },
  { value: "ARABIC", label: "ARABIC (Arabic)" },
  { value: "ART", label: "ART (Art)" },
  { value: "ARTHIST", label: "ARTHIST (Art History)" },
  { value: "ARTSSCI", label: "ARTSSCI (Arts & Science)" },
  { value: "ASTRON", label: "ASTRON (Astronomy)" },
  { value: "AUTOTECH", label: "AUTOTECH (Automotive and Vehicle Tech)" },
  { value: "BIOCHEM", label: "BIOCHEM (Biochemistry)" },
  { value: "BIOLOGY", label: "BIOLOGY (Biology)" },
  {
    value: "BIOMEDDC",
    label: "BIOMEDDC (Biomedical Discovery & Commercialization)"
  },
  { value: "BIOPHYS", label: "BIOPHYS (Biophysics)" },
  { value: "BIOSAFE", label: "BIOSAFE (Biosafety)" },
  { value: "BIOTECH", label: "BIOTECH (Biotechnology)" },
  { value: "CAYUGA", label: "CAYUGA (Cayuga)" },
  { value: "CHEM", label: "CHEM (Chemistry)" },
  { value: "CHEMBIO", label: "CHEMBIO (Chemical Biology)" },
  { value: "CHEMENG", label: "CHEMENG (Chemical Engineering)" },
  { value: "CHINESE", label: "CHINESE (Chinese)" },
  { value: "CIVENG", label: "CIVENG (Civil Engineering)" },
  { value: "CIVTECH", label: "CIVTECH (Civil Eng Infrastructure Tech)" },
  { value: "CLASSICS", label: "CLASSICS (Classics)" },
  { value: "CMST", label: "CMST (Communication Studies)" },
  { value: "CMTYENGA", label: "CMTYENGA (Community Engagement)" },
  { value: "COLLAB", label: "COLLAB (Collaborative)" },
  { value: "COMMERCE", label: "COMMERCE (Commerce)" },
  { value: "COMPENG", label: "COMPENG (Computer Engineering)" },
  { value: "COMPSCI", label: "COMPSCI (Computer Science)" },
  { value: "EARTHSC", label: "EARTHSC (Earth Sciences)" },
  { value: "ECON", label: "ECON (Economics)" },
  { value: "ELECENG", label: "ELECENG (Electrical Engineering)" },
  { value: "ENGINEER", label: "ENGINEER (Engineering)" },
  { value: "ENGLISH", label: "ENGLISH (English)" },
  { value: "ENGNMGT", label: "ENGNMGT (Engineering & Management Program)" },
  { value: "ENGPHYS", label: "ENGPHYS (Engineering Physics)" },
  { value: "ENGSOCTY", label: "ENGSOCTY (Engineering & Society Program)" },
  { value: "ENGTECH", label: "ENGTECH (Engineering Technology)" },
  { value: "ENRTECH", label: "ENRTECH (Energy Engineering Tech)" },
  { value: "ENVIRSC", label: "ENVIRSC (Environmental Science)" },
  { value: "EXPLORE", label: "EXPLORE (Interdisciplinary Experiences)" },
  { value: "FRENCH", label: "FRENCH (French)" },
  { value: "GENTECH", label: "GENTECH (General Technology)" },
  { value: "GEOG", label: "GEOG (Geography)" },
  { value: "GERMAN", label: "GERMAN (German)" },
  { value: "GLOBALZN", label: "GLOBALZN (Globalization Studies)" },
  { value: "GREEK", label: "GREEK (Greek)" },
  { value: "HEBREW", label: "HEBREW (Hebrew)" },
  { value: "HISTORY", label: "HISTORY (History)" },
  {
    value: "HLTHAGE",
    label: "HLTHAGE (Health Sciences (Engineering, Midwifery, Nursing))"
  },
  { value: "HTHSCI", label: "HTHSCI (Health Sciences)" },
  { value: "HUMAN", label: "HUMAN (Humanities)" },
  { value: "HUMBEHV", label: "HUMBEHV (Human Behaviour)" },
  {
    value: "IBEHS",
    label: "IBEHS (Integrated Biomedical Engineering and Health Sciences)"
  },
  { value: "IBH", label: "IBH (Integrated Business and Humanities)" },
  { value: "INDIGST", label: "INDIGST (Indigenous Studies)" },
  { value: "INNOVATE", label: "INNOVATE (Innovation)" },
  { value: "INTENG", label: "INTENG (International Engagement)" },
  { value: "INUKTUT", label: "INUKTUT (Inuktitut)" },
  { value: "ISCI", label: "ISCI (Integrated Science)" },
  { value: "ITALIAN", label: "ITALIAN (Italian)" },
  { value: "JAPANESE", label: "JAPANESE (Japanese)" },
  { value: "KINESIOL", label: "KINESIOL (Kinesiology)" },
  { value: "LABRST", label: "LABRST (Labour Studies)" },
  { value: "LATIN", label: "LATIN (Latin)" },
  { value: "LIFESCI", label: "LIFESCI (Life Sciences)" },
  { value: "LINGUIST", label: "LINGUIST (Linguistics)" },
  { value: "MANTECH", label: "MANTECH (Manufacturing Technology)" },
  { value: "MATH", label: "MATH (Mathematics)" },
  { value: "MATLS", label: "MATLS (Materials)" },
  { value: "MECHENG", label: "MECHENG (Mechanical Engineering)" },
  { value: "MECHTRON", label: "MECHTRON (Mechatronics)" },
  { value: "MEDPHYS", label: "MEDPHYS (Medical Physics)" },
  { value: "MEDRADSC", label: "MEDRADSC (Medical Radiation Sciences)" },
  { value: "MELD", label: "MELD (McMaster English Language Development)" },
  { value: "MIDWIF", label: "MIDWIF (Midwifery)" },
  { value: "MMEDIA", label: "MMEDIA (Multimedia)" },
  { value: "MOHAWK", label: "MOHAWK (Mohawk)" },
  { value: "MOLBIOL", label: "MOLBIOL (Molecular Biology)" },
  { value: "MUSIC", label: "MUSIC (Music)" },
  { value: "MUSICCOG", label: "MUSICCOG (Music Cognition)" },
  { value: "NEUROSCI", label: "NEUROSCI (Neuroscience)" },
  { value: "NURSING", label: "NURSING (Nursing)" },
  { value: "OJIBWE", label: "OJIBWE (Ojibwe)" },
  { value: "PEACEST", label: "PEACEST (Peace Studies)" },
  { value: "PHARMAC", label: "PHARMAC (Pharmacology)" },
  { value: "PHILOS", label: "PHILOS (Philosophy)" },
  { value: "PHYSICS", label: "PHYSICS (Physics)" },
  { value: "PNB", label: "PNB (Psychology, Neuroscience & Behaviour)" },
  { value: "POLISH", label: "POLISH (Polish)" },
  { value: "POLSCI", label: "POLSCI (Political Science)" },
  { value: "PROCTECH", label: "PROCTECH (Process Automation Technology)" },
  { value: "PSYCH", label: "PSYCH (Psychology)" },
  { value: "RECONCIL", label: "RECONCIL (Reconciliation)" },
  { value: "RELIGST", label: "RELIGST (Religious Studies)" },
  { value: "RUSSIAN", label: "RUSSIAN (Russian)" },
  { value: "SANSKRIT", label: "SANSKRIT (Sanskrit)" },
  { value: "SEP", label: "SEP (School for Eng Practice)" },
  { value: "SCIENCE", label: "SCIENCE (Science)" },
  { value: "SCICOMM", label: "SCICOMM (Science Communication)" },
  { value: "SMRTTECH", label: "SMRTTECH (Smart Engineering Technology)" },
  { value: "SOCPSY", label: "SOCPSY (Social Psychology)" },
  { value: "SOCSCI", label: "SOCSCI (Social Sciences)" },
  { value: "SOCWORK", label: "SOCWORK (Social Work)" },
  { value: "SOCIOL", label: "SOCIOL (Sociology)" },
  { value: "SFWRENG", label: "SFWRENG (Software Engineering)" },
  {
    value: "SFWRTECH",
    label: "SFWRTECH (Software Engineering Technology)"
  },
  { value: "SPANISH", label: "SPANISH (Spanish)" },
  { value: "STATS", label: "STATS (Statistics)" },
  { value: "SUSTAIN", label: "SUSTAIN (Sustainability)" },
  { value: "THTRFLM", label: "THTRFLM (Theatre & Film)" },
  { value: "WHMIS", label: "WHMIS (WHMIS)" },
  { value: "WOMENST", label: "WOMENST (Women's Studies)" }
];

export default mcmasterCourses;
