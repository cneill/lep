var settings = { "img_dir"    : "img"
               , "num_cols"   : 3
               , "box_container" : ".container"
               }


// a list of all our boxes (which can later
// be saved in SQL) with all their info


// CATEGORIES
// student
// univ
// austin

var boxes = [ { "name" : "Longhorn Entrepreneurship Agency"
              , "id"   : "lea"
              , "content" : 
                  { "text" : "LEA is a dedicated team of students who develop initiatives that unify and grow the Longhorn Startup Community by encouraging coordination, cooperation and engagement between various entrepreneurship groups and individuals on-campus. We connect potential student entrepreneurs to the resources most valuable to them on-campus and around Austin."
                  }
              , "connect" : 
                  { "url"  : "http://utlea.org"
                  , "fb"      : "utlea"
                  , "twitter" : "UTLEA"
                  , "email"   : "info@utlea.org"
                  , "director": "Grant Heimer"
                  }
              , "category": "student"
              }
            , { "name" : "Longhorn Startup Program"
              , "id"   : "lsp"
              , "content" : 
                  { "text"  : "Longhorn Startup fosters interdisciplinary startup innovation at the University of Texas at Austin. The program features three tracks - Seminar, Lab & Studio. Longhorn Startup Seminar introduces students to the world of startups through experiences of people who have built successes and learned from failures. Longhorn Startup Lab is the ultimate startup challenge for student entrepreneurs. Students must apply to the program as a team and should already have a startup in progress. Longhorn Startup Studio provides UT professors one-on-one guidance in technology commercialization from the Longhorn Startup team including Bob Metcalfe and Joshua Baer."
                  }
              , "connect" : 
                  { "url"  : "http://longhornstartup.com"
                  , "fb"      : ""
                  , "twitter" : "LonghornStartup"
                  , "email"   : ""
                  , "director": ["Bob Metcalfe", "Joshua Baer"]
                  }
              , "category": "univ"
              }
            , { "name" : "Liberal Arts Entrepreneur Course"
              , "id"   : "laec"
              , "content" : 
                  { "text"  : "This three-credit, upper-division course is designed to help you use your creativity, innovative ideas, and skills to create an entrepreneurial business. By the end of the course you will have a fully developed launch-ready business plan. Whether you choose to immediately embark on your entrepreneurial career is up to you. Projects can be profit-making or nonprofit service-based ventures. We are just as open-minded as you are creative. Limited to Liberal Arts students with 60+ credit hours. A limited number of Bridging Discipline students with non-liberal arts majors are eligible to apply."
                  }
              , "connect" : 
                  { "url"   : "http://www.utexas.edu/cola/orgs/lacs/Students/Courses/Entrepreneurship.php"
                  , "fb"      : ""
                  , "twitter" : ""
                  , "email"   : ""
                  , "director": ""
                  }
              , "category": "univ"
              }
            , { "name" : "Austin Technology Incubator"
              , "id"   : "ati"
              , "content" : 
                  { "text"  : "ATI has been the link between UT and the Central Texas Startup Community since the late 1980's. They provide strategic counsel, operational guidance, and infrastructure support to their member companies to help them transition into successful, high growth technology businesses. Out of the 100-150 companies that apply yearly, ATI typically admits only 5-10 into membership in the incubator. Its mission is to promote economic development in Central Texas through entrepreneurial wealth and job creation, and provide a \"teaching laboratory\" in applied entrepreneurship for UT-Austin students. Although ATI is part of UT-Austin, there is no requirement that ATI companies have any formal connection to UT other than ATI membership."
                  }
              , "connect" : 
                  {"url"   : "http://ati.utexas.edu"
                  , "fb"      : ""
                  , "twitter" : "ATI_UT"
                  , "email"   : "kcox@ati.utexas.edu"
                  , "director": "Kyle Cox"
                  }
              , "category": "univ"
              }
            , { "name" : "Dell Social Innovation Challenge"
              , "id"   : "dsic"
              , "content" : 
                  { "text"  : "The Dell Social Innovation Challenge identifies and supports promising young social innovators who dedicate themselves to solving the world's most pressing problems with their transformative ideas. We provide university students with world-class teaching and training, start-up capital, and access to a network of mentors and advisors. Operating out of  the University of Texas at Austin LBJ School of Public Affairs, DSIC has developed a world-wide community of student innovators since it was launched by the RGK Center for Philanthropy in 2007."
                  }
              , "connect" : 
                  {"url"  : "http://dellchallenge.org"
                  , "fb"      : "DellSocialInnovation"
                  , "twitter" : "DellSocialInnov"
                  , "email"   : "support@dellchallenge.org"
                  , "director": ""
                  }
              , "category": "austin"
              }
            , { "name" : "3 Day Startup"
              , "id"   : "3ds"
              , "content" : 
                  { "text"  : "Originally a UT student organization, 3 Day Startup has spread to other schools in North America, Europe, South America, the Middle East and Asia. The idea of 3 Day Startup is simple: start tech companies over the course of three days. They rent work space for a weekend, recruit 45 student participants from a wide range of backgrounds, cater food and drinks, and bring in top-notch entrepreneurs and investors. The participants pick the best startup ideas during the Friday brainstorming session and deliver prototypes and investor pitches on Sunday night. 38 events have led to 33 companies receiving $8.5 million in funding, and 13 companies from 3DS have been accepted in top accelerators such as Y-combinator, Tech Stars, 500 Startups, and Capital Factory."
                  }
              , "connect" : 
                  {"url"  : "http://austin.3daystartup.org"
                  , "fb"      : "3DayStartup"
                  , "twitter" : "3DayStartup"
                  , "email"   : "founders@3daystartup.org"
                  , "director": ""
                  }
              , "category": "austin"
              }
            , { "name" : "Technology Entrepreneurship Society"
              , "id"   : "tes"
              , "content" : 
                  { "text"  : "TES focuses on identifying, cultivating, and supporting current and future student entrepreneurs in the UT technological community. They encourage undergrads to follow their creative interests, and connect them with people who can help convert their ideas into marketable products or services. TES embodies the Longhorn Startup Community culture, mindset and talent pool, hosting speaker series and interactive events throughout the semester."
                  }
              , "connect" : 
                  {"url"  : "http://studentorgs.engr.utexas.edu/tes/"
                  , "fb"      : "groups/2200268947/"
                  , "twitter" : "TESatUT"
                  , "email"   : ""
                  , "director": ""
                  }
              , "category": "student"
              }
            , { "name" : "McCombs Entrepreneur Society"
              , "id"   : "mes"
              , "content" : 
                  { "text"  : "McCombs' Entrepreneur Society (ES) is an organization that brings together MBA students with a common interest in entrepreneurship. Counting 30% of the full time MBA students as dues-paying members, ES is one of McCombs' largest, most active student organizations. They put on a variety of events for student entrepreneurs throughout the semester, including networking events, informational seminars, and hosting guest speakers."
                  }
              , "connect" : 
                  //{"url"  : "http://esmccombs.com/other-organizations/"
                  {"url"  : "https://www.facebook.com/pages/McCombs-Entrepreneur-Society/202470679763099"
                  , "fb"      : ""
                  , "twitter" : ""
                  , "email"   : "Thomas.coffey@utexas.edu"
                  , "director": "Thomas Coffey"
                  }
              , "category": "student"
              }
            , { "name" : "National Collegiate Innovators and Inventors Alliance"
              , "id"   : "nciia"
              , "content" : 
                  { "text"  : "With a membership of nearly 200 colleges and universities from all over the United States, the National Collegiate Innovators and Inventors Alliance (NCIIA) engages more than 5,000 student and faculty innovators and entrepreneurs each year, helping them commercialize their ideas to create successful, socially beneficial innovations and businesses. They provide nascent student start-ups with early stage funding, business strategy development training, mentoring, and investment. The NCIIA provides faculty with funding for courses and programs, opportunities for recognition, and entrepreneurship education training and networking."
                  }
              , "connect" : 
                  {"url"  : "http://nciia.wordpress.com/"
                  , "fb"      : ""
                  , "twitter" : "NCIIA"
                  , "email"   : ""
                  , "director": "Issac Sanchez"
                  }
              , "category": "austin"
              }
            , { "name" : "Texas Venture Labs"
              , "id"   : "tvl"
              , "content" : 
                  { "text"  : "TVL is a campus initiative with two missions: helping start-ups from UT and Central Texas raise capital and take their innovations to market, and creating an experience that transforms UT graduate students into future entrepreneurs and business leaders. They connect local start-up companies with teams of 4-6 talented and entrepreneurial graduate and Ph.D. students from the MBA, Law, Engineering, and Natural Sciences programs to conduct special projects. TVL teams have conducted successful market validation, financial analysis, business model assessment, competitive analysis and due diligence review projects, amongst others."
                  }
              , "connect" : 
                  {"url"  : "http://www.mccombs.utexas.edu/Centers/Texas-Venture-Labs/"
                  , "fb"      : "pages/Texas-Venture-Labs/115688735113650"
                  , "twitter" : "TXVentureLabs"
                  , "email"   : "infoTVL@mccombs.utexas.edu"
                  , "director": "Jon Brumley"
                  }
              , "category": "student"
              }
            , { "name" : "IC&#178; Institute"
              , "id"   : "ic2"
              , "content" : 
                  { "text"  : "As an interdisciplinary research unit of The University of Texas at Austin, the IC&#178; Institute advances the theory and practice of entrepreneurial wealth creation. The theories and hypotheses developed at IC&#178; are put to the test in several renowned programs: the Austin Technology Incubator, one of the world's most prominent business incubators, the Bureau of Business Research, which provides Texas leaders with research to strengthen the state's economy, and the Global Commercialization Group, which catalyzes emerging knowledge-based economies around the world. Supporting these programs is a proactive staff, an award-winning faculty, the alumni of the ATI program, as well as a network of about 240 Global Fellows who extend the talent reach of the institute at home and abroad."
                  }
              , "connect" : 
                  { "url"  : "http://ic2.utexas.edu"
                  , "fb"      : ""
                  , "twitter" : ""
                  , "email"   : "info@ic2.utexas.edu"
                  , "director": ""
                  }
              , "category": "univ"
              }
            , { "name" : "Herb Kelleher Center for Entrepreneurship"
              , "id"   : "hkce"
              , "content" : 
                  { "text"  : "When Herb Kelleher founded Southwest Airlines in 1967, he changed the airline industry. Prior to this, flying was a luxury reserved for the wealthy and those traveling for business.  Southwest decided to compete with cars and trains instead of other airlines, and made flying affordable for everyone by cutting out extra expenses like food. Today, Southwest is still one of the most profitable airlines. The Herb Kelleher Center for Entrepreneurship Growth and Renewal focuses on teaching, learning, and researching entrepreneurship and business enterprise. The entrepreneurial research done in McCombs and around the university enables companies to improve their strategy and growth, and facilitates renewal in mature companies that would otherwise languish."
                  }
              , "connect" : 
                  {"url"  : "http://www.mccombs.utexas.edu/Centers/Kelleher-Center.aspx"
                  , "fb"      : ""
                  , "twitter" : ""
                  , "email"   : "John.Butler@mccombs.utexas.edu"
                  , "director": "John Butler"
                  }
              , "category": "univ"
              }
            , { "name" : "McCombs Entrepreneur-in-Residence, Brett Hurt"
              , "id"   : "eir"
              , "content" : 
                  { "text"  : "Brett Hurt is the 2013-2014 Entrepreneur-in-Residence at the Herb Kelleher Center for Entrepreneurship in McCombs School of Business. He is available to speak with students, and hosts the popular EIR Money Talks Speaker Series with the help of Laura Kilcrease, the previous McCombs EIR.  Brett is the founder of several successful companies, most recently Bazaarvoice, and a partner at the new Venture Capital firm that bears his name, Hurt+Harbach."
                  }
              , "connect" : 
                  {"url"  : "https://www.mccombs.utexas.edu/Centers/Kelleher-Center/Entrepreneur-in-Residence.aspx"
                  , "fb"      : "McCombsEntrepreneur"
                  , "twitter" : "McCombsEIR"
                  , "email"   : "brett.hurt@mccombs.utexas.edu"
                  , "director": "Brett Hurt"
                  }
              , "category": "univ"
              }
            , { "name" : "Bridging Disciplines Programs Emphasizing Entrepreneurship"
              , "id"   : "bdp"
              , "content" : 
                  { "text"  : "The BDP concentrations represent areas of innovative faculty research, teaching, and collaboration at UT Austin. Each program is guided by a cross-college panel of faculty members with research experience related to the BDP topic.<br /><br /><b><a href='http://www.utexas.edu/ugs/bdp/programs/sen' target='_blank'>Social Entrepreneurship &amp; Non-Profits</a></b><br />The Social Entrepreneurship and Non-Profits BDP brings together students who are interested in pursuing a career in the public service sector and expanding their involvement in the community.<br /><b><a href='http://www.utexas.edu/ugs/bdp/programs/ice' target='_blank'>Innovation, Creativity &amp; Entrepreneurship</a></b><br />The Innovation, Creativity and Entrepreneurship BDP teaches students about the entrepreneurial process and the history of innovation in the United States and around the world."
                  }
              , "connect" : 
                  {"url"  : ""
                  , "fb"      : ""
                  , "twitter" : ""
                  , "email"   : ""
                  , "director": ""
                  }
              , "category": "univ"
              }
            ]
