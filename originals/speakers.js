var speakers = [
	{name: "Ade Oshineye", id: "ade"},
	{name: "Alan Green", id: "alangreen"},
	{name: "Alex Levich", id: "levich"},
	{name: "Silvia Pfeiffer", id: "silviapf"},
	{name: "Peter Fernandez", id: "fernandezp"},
	{name: "Steve Bazyl", id: "sbazyl"},
	{name: "Rachel Shearer", id: "rshearer"},
	{name: "Andrés Ferraté", id: "andresf"},
	{name: "Pete LePage", id: "petele"},
	{name: "Timothy Jordan", id: "timothyjordan"},
	{name: "Wesley Chun", id: "wesc"},
	{name: "Shannon -jj Behrens", id: "jjinux"},
	{name: "Les Vogel", id: "lesv"},
	{name: "Jarek Wilkiewicz", id: "jarekw"},
	{name: "Eric Bidelman", id: "ericbidelman"},
	{name: "Paul Irish", id: "paulirish"},
	{name: "Don Dodge", id: "dondodge"},
	{name: "Simon Olson", id: "simono"},
	{name: "Chris Schalk", id: "cschalk"},
	{name: "Bruno Oliveira", id: "btco"},
	{name: "Ralf Botchen", id: "botchen"},
	{name: "Trevor Johns", id: "trevorjohns"},
	{name: "Alice  Boxhall", id: "aboxhall"},
	{name: "Saurabh Gupta", id: "sagupta"},
	{name: "James Whittaker", id: "docjamesw"},
	{name: "Dan Galpin", id: "dgalpin"},
	{name: "Alejandro Villanueva", id: "alejandv"},
	{name: "Eiji Kitamura", id: "agektmr"},
	{name: "Andrew Gerrand", id: "adg"},
	{name: "Lilli Thompson", id: "lilli"},
	{name: "Christian  Kurzke", id: "cgk"},
	{name: "Mano Marks", id: "mmarks"},
	{name: "Ilmari  Heikkinen", id: "ilmari"},
	{name: "Sam Dutton", id: "dutton"},
	{name: "Paul  Kinlan", id: "paulkinlan"},
	{name: "Iein Valdez", id: "iein"},
	{name: "Brad Abrams", id: "bma"},
	{name: "Chris Chabot", id: "chabotc"},
	{name: "Artem Kazachkov", id: "kazachkov"},
	{name: "Iky Sandorffy", id: "isandorffy"},
	{name: "Sparky Rhode"},
	{name: "Richard Hyndman", id: "rhyndman"},
	{name: "Nick Butcher", id: "nbutcher"},
	{name: "Michael  Nicklas"},
	{name: "Jonathan Beri", id: "jberi"},
	{name: "Alexei Masterov", id: "masterov"},
	{name: "Nicolas Garnier", id: "nivco"},
	{name: "Ryan Boyd", id: "ryanboyd"},
	{name: "Fred Sauer", id: "fredsa"},
	{name: "Ido Green", id: "idog"},
	{name: "Mike West", id: "mkwst"},
	{name: "Takashi  Matsuo", id: "tmatsuo"},
	{name: "Johan  Euphrosine", id: "proppy"},
	{name: "Greg Schechter", id: "schechter"},
	{name: "Jeffrey  Posnick", id: "jeffy"},
	{name: "Rich Hyndman"},
	{name: "Nick Butcher"},
	{name: "Wolff Dobson", id: "wolff"},
	{name: "Veronika Striessnig", id: "vstriessnig"},
	{name: "Daniel  Clifford", id: "danno"},
	{name: "Chris Broadfoot"},
	{name: "Toru Maesaka", id: "tmaesaka"},
	{name: "Michael  Manoochehri", id: "manoochehri"},
	{name: "Guy Flysher", id: "guyfl"},
	{name: "Marc Cohen", id: "marccohen"},
	{name: "Ankur  Kotwal", id: "kotwal"},
	{name: "Tony  Chan", id: "htchan"},
	{name: "Peng  Ying", id: "pying"},
	{name: "Ryosuke  Matsuuchi", id: "ryosukem"},
	{name: "Paul Saxman", id: "saxman"},
	{name: "Tim Bray", id: "twbray"},
	{name: "Mihai Ionescu", id: "mihai"},
	{name: "Matt  Ward", id: "mattward"},
	{name: "Volker Markl", id: "volkermarkl"},
	{name: "Anja  Feldmann", id: "anjafeldmann"},
	{name: "Klaus-Robert Müller", id: "klausrobertmueller"},
	{name: "Pamela  Greene", id: "pamg"},
	{name: "Dominic  Battré", id: "battre"},
	{name: "Takuya Oikawa", id: "takuya"},
	{name: "Phil Harnish", id: "philharnish"},
	{name: "Hideto Kazawa", id: "kazawa"},
	{name: "Yugui Sonada", id: "yugui"},
	{name: "Fumitoshi Ukai", id: "ukai"},
	{name: "Ken Miura", id: "miuraken"},
	{name: "Masanori Goto", id: "gotom"},
	{name: "Joichi Ito"},
	{name: "Julia Ferraioli", id: "juliaferraioli"},
	{name: "Nobuyuki Hayashi"},
	{name: "Gen Ito"},
	{name: "Akira Sasaki"},
	{name: "Makoto Anjo"},
	{name: "Bernhard Bauer", id: "bauerb"},
	{name: "Nick Mihailovski", id: "nm"},
	{name: "Ikai Lan", id: "ikai"},
	{name: "Wolfgang Reisig", id: "wolfgangreisig"},
	{name: "Johann‐Christoph  Freytag", id: "jcfreytag"},
	{name: "Igmar  Eveslage", id: "igmareveslage"},
	{name: "Anders Sandholm", id: "sandholm"},
	{name: "German GTUG Community"},
	{name: "Yinnon Haviv", id: "yinnon"},
	{name: "Mike Kwong", id: "mkwong"},
	{name: "Michael Fink", id: "fink"},
	{name: "Satish Kambala", id: "satishk"},
	{name: "Rob Pike", id: "r"},
	{name: "Patrick Meenan", id: "pmeenan"},
	{name: "Robert Hamilton", id: "rhamilton"},
	{name: "Dylan Lorimer", id: "edylan"},
	{name: "Roman Nurik", id: "romannurik"},
	{name: "Joe Beda", id: "jbeda"},
	{name: "Craig McLuckie", id: "craigmcl"},
	{name: "Marius Renn", id: "renn"},
	{name: "Brian Fitzpatrick", id: "fitz"},
	{name: "Ben Collins-Sussman", id: "sussman"},
	{name: "Danny Hermes", id: "dhermes"},
	{name: "Thomas Kotzmann", id: "kotzmann"},
	{name: "Dror Shimshowitz", id: "dror"},
	{name: "Sean Wohltman", id: "seanwohltman"},
	{name: "Navneet Joneja", id: "njoneja"},
	{name: "Bo Majewski", id: "majewski"},
	{name: "Eric Lundberg", id: "ericlundberg"},
	{name: "Jeff Sharkey", id: "jsharkey"},
	{name: "Alan Viverette", id: "alanv"},
	{name: "Martijn Coenen", id: "maco"},
	{name: "Sean Askay", id: "alchemist"},
	{name: "Alex Faaborg", id: "faaborg"},
	{name: "Ossama Alami", id: "ossamaa"},
	{name: "Rebecca  Moore", id: "rmoore"},
	{name: "Dave Thau", id: "thau"},
	{name: "Craig Chambers", id: "chambers"},
	{name: "Ged Ellis", id: "ged"},
	{name: "Mike Evanoff", id: "mevanoff"},
	{name: "Greg Darke", id: "darke"},
	{name: "Stephen Hines", id: "srhines"},
	{name: "Sriram Saroop", id: "saroop"},
	{name: "Chandan Pitta", id: "chandanp"},
	{name: "Andrew Jeon", id: "jeon"},
	{name: "Mayuresh Saoji", id: "mayuresh"},
	{name: "Amanda Surya", id: "amandas"},
	{name: "Marzia Niccolai", id: "marzia"},
	{name: "Shaun Cox", id: "shauncox"},
	{name: "Malte Ubl", id: "malteubl"},
	{name: "Enoch Lau", id: "enochlau"},
	{name: "Ali Pasha", id: "apasha"},
	{name: "Jon Larimer", id: "jlarimer"},
	{name: "Nabil Naghdy", id: "naghdy"},
	{name: "Arvind Jain", id: "arvind"},
	{name: "Kenny Root", id: "kroot"},
	{name: "Zoltan Szego", id: "zszego"},
	{name: "Jason Sams", id: "jsams"},
	{name: "Alex Sakhartchouk", id: "alexst"},
	{name: "Patrick Mork", id: "madmork"},
	{name: "Kushagra Shrivastava", id: "kushagra"},
	{name: "Ross McIlroy", id: "rmcilroy"},
	{name: "Eric Pollmann", id: "pollmann"},
	{name: "Alfred Fuller", id: "arfuller"},
	{name: "Daniel  Sandler", id: "dsandler"},
	{name: "Dan Holevoet", id: "danielholevoet"},
	{name: "Antonio Fuentes", id: "afuentes"},
	{name: "Sven Mawson", id: "sven"},
	{name: "Richard Fulcher", id: "rfulcher"},
	{name: "Yaniv Inbar", id: "yanivi"},
	{name: "Roberto Peon", id: "fenix"},
	{name: "Dave Burke", id: "daveburke"},
	{name: "Dave Day", id: "davidday"},
	{name: "Amit Weinstein", id: "amitw"},
	{name: "A.J. Crane", id: "ajcrane"},
	{name: "Nick Bray", id: "ncbray"},
	{name: "Ali Afshar", id: "afshar"},
	{name: "Akshay Kannan", id: "akshayk"},
	{name: "Drew Csillag", id: "dcsillag"},
	{name: "Erik Kay", id: "erikkay"},
	{name: "Colton McAnlis", id: "colton"},
	{name: "Jan Kleinert", id: "jkleinert"},
	{name: "Tom Wiltzius", id: "wiltzius"},
	{name: "Francesco Nerieri", id: "nero"},
	{name: "Reto Meier", id: "retomeier"},
	{name: "Xavier Ducrohet", id: "xav"},
	{name: "Chet Haase", id: "chet"},
	{name: "Romain Guy", id: "romainguy"},
	{name: "Kenneth Lui", id: "kennethlui"},
	{name: "Lauren Usui", id: "laurenusui"},
	{name: "Christian  Robertson", id: "robertsonc"},
	{name: "Adam  Powell", id: "adamp"},
	{name: "Philip Milne", id: "pmilne"},
	{name: "Tor Norbye", id: "tnorbye"},
	{name: "Jiajing Wang", id: "jjwang"},
	{name: "Luke  Mahe", id: "lukem"},
	{name: "Horia  Ciurdar", id: "horia"},
	{name: "Anton Hansson", id: "hansson"},
	{name: "Nicolas  Roard", id: "nicolasroard"},
	{name: "Chris Yerga", id: "yerga"},
	{name: "Ellie Powers", id: "epowers"},
	{name: "Nat Duca", id: "nduca"},
	{name: "James Hawkins", id: "jhawkins"},
	{name: "Gabriel Cohen", id: "gabec"},
	{name: "Troy Trimble", id: "ttrimble"},
	{name: "David Chandler", id: "drfibonacci"},
	{name: "T.V.  Raman", id: "raman"}
]
