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
                  { "text"  : "ATI is a program of the IC&#178; Institute of The University of Texas at Austin, and has been the link between UT and the Central Texas Startup Community since the late 1980's. The incubator harnesses its resources to provide strategic counsel, operational guidance, and infrastructure support to its member companies to help them transition into successful, high growth technology businesses. Out of an annual \"pipeline\" of 100-150 prospective companies, ATI typically admits only 5-10 into membership in the incubator.   It has a dual mission:  promote economic development in Central Texas through entrepreneurial wealth and job creation, and provide a \"teaching laboratory\" in applied entrepreneurship for UT-Austin students. Although ATI is part of The University of Texas at Austin, there is no requirement that ATI companies have any formal connection to The University other than ATI membership."
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
                  { "text"  : "The Dell Social Innovation Challenge identifies and supports promising young social innovators who dedicate themselves to solving the world's most pressing problems with their transformative ideas. We provide university students with world-class teaching and training, as well as with start-up capital and access to a network of mentors and advisors. Ran out of the University of Texas at Austin LBJ School of Public Affairs, DSIC has developed a world-wide community of student innovators since it was launched by the RGK Center for Philanthropy in 2007."
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
                  { "text"  : "Originally a UT student organization, 3 Day Startup is now a 501(c)(3) non-profit organization. The program has spread to other schools in North America, Europe, South America, the Middle East and Asia. The idea of 3 Day Startup is simple: start tech companies over the course of three days. We rent work space for an entire weekend, recruit 45 student participants from a wide range of backgrounds, cater food and drinks, and bring in top-notch entrepreneurs and investors. The participants pick the best ideas for startups during the Friday brainstorming session and deliver prototypes and investor pitches on Sunday night. 38 events on 4 continents have given rise to 33 companies receiving 8.5 million in funding. 13 companies from 3DS have been accepted in top accelerators such as Y-combinator, Tech Stars, 500 Startups, and Capital Factory."
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
                  { "text"  : "TES focuses on identifying, cultivating, and supporting the current and future entrepreneurs in the UT technological community. We exist to encourage undergrads to follow their creative interests and connect them with people necessary to convert those ideas into a marketable product or service. Hosting speaker series and interactive events throughout the semester, TES embodies the Longhorn Startup Community culture, mindset and talent pool."
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
                  { "text"  : "McCombs' Entrepreneur Society (ES) is an organization that brings together MBA students with a common interest in entrepreneurship. Counting 30% of the full time MBA students as dues-paying members, ES is one of McCombs' largest student organizations. It is also among the most active. This spring ES will be hosting a series of Whiteboarding events at which aspiring entrepreneurs can get feedback on their business ideas, a happy hour for MBA students from other programs visiting Austin for SXSW, an panel discussion headlined by Austin entrepreneur Tito Beveridge of Tito's Vodka, an event for admitted students at the MBA program's preview weekend highlighting the many entrepreneurial resources McCombs, the University of Texas, and Austin have to offer, and ES Connections, a networking and recruiting event that introduces MBA students to local startups."
                  }
              , "connect" : 
                  {"url"  : "http://esmccombs.com/other-organizations/"
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
                  { "text"  : "The National Collegiate Innovators and Inventors Alliance (NCIIA) supports technology innovation and entrepreneurship in higher education to create experiential learning opportunities and successful, socially beneficial innovations and businesses. With a membership of nearly 200 colleges and universities from all over the United States, the NCIIA engages more than 5,000 student and faculty innovators and entrepreneurs each year, helping them to bring their concepts to commercialization. The NCIIA 'pipeline' provides nascent student start-ups with early stage funding, business strategy development training, mentoring, and investment. The NCIIA provides faculty with funding for courses and programs, opportunities for recognition, and entrepreneurship education training and networking. Isaac Sanchez is the UT-Austin NCIIA Student Ambassador for 2012-2013. He is working to bring funding to UT entrepreneurial activities, while also starting new initiatives."
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
                  { "text"  : "TVL is a campus-wide initiative with two missions: \n - Accelerate start-ups from UT and Central Texas towards raising capital and taking their innovations to market \n - Create an experience that transforms UT Graduate students into future entrepreneurs and business leaders \n TVL connects local start-up companies with talented and entrepreneurial graduate and Ph.D. students from the MBA, Law, Engineering, and Natural Sciences programs to conduct special projects that help move these businesses forward.  Teams of 4-6 students interact closely with the entrepreneur and/or investors to make an immediate impact during their engagement. TVL teams have conducted successful market validation, financial analysis, business model assessment, competitive analysis and due diligence review projects, amongst others."
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
            , { "name" : "IC2 Institute"
              , "id"   : "ic2"
              , "content" : 
                  { "text"  : "As an interdisciplinary research unit of The University of Texas at Austin, the IC&#178; Institute has advanced the Theory and Practice of Entrepreneurial Wealth Creation.  The theories and hypotheses developed at IC&#178; are tested in life-scale through several world-recognized programs: the Austin Technology Incubator, one of the world's most prominent business incubators, the Bureau of Business Research, to provide Texas leaders with research data to strengthen the state's economy, and the Global Commercialization Group, to catalyze emerging knowledge-based economies throughout the world. Supporting these programs is a proactive staff, an award-winning faculty, the alumni of ATI program, as well as a network of about 240 Global Fellows who extend the talent reach of the institute at home and abroad. Eighteen of these are Endowed Fellows: professors at The University of Texas at Austin whose research is supplemented by the IC&#178; Institute in order to directly support the creation of new knowledge."
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
            // , { "name" : "Master of Science in Technology Commercialization Program"
            //   , "id"   : "mstc"
            //   , "content" : 
            //       { "text"  : "At the University of Texas at Austin, we are proud of saying, \"What starts here changes world.\" Intelligently commercialized technology is an excellent method for changing the world. The Master of Science in Technology Commercialization (MSTC) Program develops knowledge and skills in how to identify new technologies with market potential, bring them to market, and create wealth in the process. The Texas MSTC Program ranked #9 in the world by Eduniversal for entrepreneurship programs. Eduniversal ranks 4,000 master's degree programs worldwide into 30 specializations. The rankings are based on the reputation of the program and the university, the career prospects and salary level of the first employment after graduation, and the satisfaction feedback of the students."
          
            //       }
            //   , "connect" : 
            //       { "url : "http://www.mccombs.utexas.edu/mstc"
            //       , "fb" : ""
            //       , "twitter" : "UTexasMcCombs"
            //       , "email"   : ""
            //       , "director": ""
            //       }

            //   , "category": ""
            //   }
            , { "name" : "Herb Kelleher Center for Entrepreneurship"
              , "id"   : "hkce"
              , "content" : 
                  { "text"  : "Entrepreneurship is about vision and passion. New ideas that change industries. In 1967, Herb Kelleher founded Southwest Airlines. Prior to this, flying was a luxury and only those that were wealthy or traveling for business used airplanes. With the start of Southwest Airlines, the industry changed. Southwest Airlines decided to compete with cars and trains instead of other airlines. By cutting out all the extra expenses such as food, flying was made affordable for everyone. And today, Southwest Airlines is still one of the most profitable airlines. Herb's entrepreneurial vision and smarts are reflected in the Center, both in name and spirit. \n The Herb Kelleher Center for Entrepreneurship Growth and Renewal is not just about new ventures, it's also about teaching, learning and researching entrepreneurship and business enterprise. The entrepreneurial research done at McCombs, by both McCombs faculty and faculty around the university enables companies in Texas and the nation to improve their course of action, advance company growth with more effective preparation and initiate renewal in mature companies that would otherwise languish."
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
            , { "name" : "McCombs Entrepreneur-in-Residence, Laura Kilcrease"
              , "id"   : "eir"
              , "content" : 
                  { "text"  : "Laura Kilcrease is the 2012-2013 Entrepreneur-in-Residence at the Herb Kelleher Center for Entrepreneurship in McCombs School of Business. She is available to speak with students, and hosts the popular EIR Money Talks Speaker Series. In Fall 2012 she brought successful Austin entrepreneur, Brett Hurt, to the 40 acres to talk about his recent IPO as CEO of BazaarVoice. Laura is known as the Founding Director of the Austin Technology Incubator and also is managing director of her Austin-based Venture Capital firm, Triton Ventures. "
                  }
              , "connect" : 
                  {"url"  : "https://www.mccombs.utexas.edu/Centers/Kelleher-Center/Entrepreneur-in-Residence.aspx"
                  , "fb"      : ""
                  , "twitter" : ""
                  , "email"   : "Laura.Kilcrease@mccombs.utexas.edu"
                  , "director": "Laura Kilcrease"
                  }
              , "category": "univ"
              }

            ]
