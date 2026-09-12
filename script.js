const SITE_CONFIG = {
    websiteFeedbackUrl: "https://forms.gle/pxBk7z8dh8vFdkC1A",
    lastSiteReview: "September 2026",
    utCampusMapUrl: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178"
};

const WELLNESS_RESOURCES = [
    {
        id: "cmhc",
        title: "UT Counseling and Mental Health Center",
        category: "support",
        resourceType: "UT Resource",
        section: "Mental Health / Support",
        description: "Comprehensive psychological services, psychiatric consultations, and wellbeing programs for students.",
        url: "https://healthyhorns.utexas.edu/cmhc/",
        linkText: "Visit CMHC",
        tags: ["on campus", "virtual", "included for students", "mindfulness"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "cmhc-groups",
        title: "UT CMHC Groups",
        category: "support",
        resourceType: "UT Resource",
        section: "Mental Health / Support",
        description: "Free, confidential, and specialized therapeutic support groups led by mental health professionals.",
        url: "https://www.healthyhorns.utexas.edu/cmhc/groups.html",
        linkText: "View Groups",
        tags: ["virtual", "included for students", "mindfulness"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "thrive-ut",
        title: "THRIVE at UT",
        category: "break",
        resourceType: "UT Resource",
        section: "Mental Health / Support",
        description: "Free mobile app featuring daily micro-routines, peer video stories, and activities focused on mindfulness.",
        url: "https://www.healthyhorns.utexas.edu/cmhc/thrive.html",
        linkText: "Explore Thrive",
        tags: ["virtual", "included for students", "mindfulness"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "cmhc-crisis",
        title: "UT Crisis Resources",
        category: "support",
        resourceType: "UT Resource",
        section: "Mental Health / Support",
        description: "Immediate guidance, walk-in hours, and emergency mental health care connections.",
        url: "https://healthyhorns.utexas.edu/cmhc/crisis.html",
        linkText: "Crisis Details",
        tags: ["virtual", "included for students"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "lifeline-988",
        title: "988 Suicide & Crisis Lifeline",
        category: "support",
        resourceType: "National Resource",
        section: "Crisis Support",
        description: "Free, confidential support available 24/7 via call or text for people in distress.",
        url: "https://988lifeline.org/",
        linkText: "Visit 988 Lifeline",
        tags: ["virtual", "free"],
        cost: "Free",
        hours: "24/7",
        lastVerified: "2026-09-09",
        source: "National organization"
    },
    {
        id: "cmhc-247",
        title: "UT CMHC 24/7 Crisis Line",
        category: "support",
        resourceType: "UT Resource",
        section: "Crisis Support",
        description: "Talk directly with trained counselors regarding urgent mental health concerns at any hour.",
        url: "tel:5124712255",
        linkText: "Call 512-471-2255",
        tags: ["virtual", "included for students"],
        cost: "Included for UT Students",
        hours: "24/7",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "worried-someone",
        title: "Worried about someone?",
        category: "support",
        resourceType: "UT Resource",
        section: "Crisis Support",
        description: "If immediate safety is a concern, stay with them when possible, ask directly about suicide if appropriate, and connect them with professional crisis support.",
        url: "https://healthyhorns.utexas.edu/cmhc/crisis.html",
        linkText: "Crisis Resources",
        tags: ["on campus"],
        cost: "",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },

{
    id: "guided-mindfulness",
    title: "Guided Mindfulness Exercise",
    category: "break",
    resourceType: "Student Pick",
    section: "Mindfulness & Nervous System",
    description: "Trauma-informed guided mindfulness audio/video session for gentle emotional centering and relaxation.",
    url: "https://youtu.be/q1yfvkhmpIw?si=nUoWV-Luk8BvCY6u",
    linkText: "Watch Session",
    tags: ["virtual", "free", "mindfulness"],
    cost: "Free",
    hours: "",
    lastVerified: "2026-09-09",
    source: "Student recommendation"
},

{
    id: "insight-timer",
    title: "Insight Timer",
    category: "break",
    resourceType: "Community Resource",
    section: "Mindfulness & Nervous System",
    description: "Large library of guided meditation, sleep, and breathing content with substantial free access and optional paid features.",
    url: "https://insighttimer.com/",
    linkText: "Explore Insight Timer",
    tags: ["virtual", "mindfulness"],
    cost: "Free & Paid Options",
    hours: "",
    lastVerified: "2026-09-09",
    source: "Official website"
},
    {
        id: "yoga-30days",
        title: "30 Days of Yoga",
        category: "move",
        resourceType: "Student Pick",
        section: "Sports & Movement",
        description: "Comprehensive beginner-friendly yoga playlist for flexibility and physical restoration.",
        url: "https://youtube.com/playlist?list=PLJvDaXFqvSLOqmNzMoGOgKTxa1PqM1UIL&si=3jtoalH_ujjcDh38",
        linkText: "Watch Playlist",
        tags: ["virtual", "free", "sports", "mindfulness", "yoga"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Student recommendation"
    },
    {
        id: "beginner-yoga",
        title: "Beginner Yoga",
        category: "move",
        resourceType: "Student Pick",
        section: "Sports & Movement",
        description: "Gentle restorative flows designed to open tight hips and ease lower back tension.",
        url: "https://youtube.com/playlist?list=PLZB1-W3Nj5KElH4VILggKdPd4glH-YBjm&si=JNp2rNAgSOYMAE-7",
        linkText: "Watch Playlist",
        tags: ["virtual", "free", "sports", "mindfulness", "yoga"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Student recommendation"
    },

{
    id: "apl-yoga-meditation",
    title: "Yoga & Meditation at Austin Public Library",
    category: "move",
    resourceType: "Community Resource",
    section: "Mindfulness & Nervous System",
    description: "Browse current yoga and meditation classes hosted across Austin Public Library branches.",
    url: "https://library.austintexas.gov/events/yoga-meditation-classes",
    linkText: "See Upcoming Classes",
    tags: ["off campus", "free", "sports", "mindfulness", "yoga", "events"],
    cost: "Free",
    hours: "Dates, times, and branches vary",
    lastVerified: "2026-09-11",
    source: "Austin Public Library"
},

{
    id: "rose-shine-yoga",
    title: "Zilker Botanical Garden Events",
    category: "explore",
    resourceType: "Community Resource",
    section: "Events & Things to Do in Austin",
    description: "Browse the current Zilker Botanical Garden calendar for yoga, garden programs, workshops, and seasonal community events.",
    url: "https://zilkergarden.org/events/",
    linkText: "See Zilker Events",
    tags: ["outdoors", "off campus", "mindfulness", "yoga", "events", "art"],
    cost: "Free & Paid Options",
    hours: "Event schedule varies",
    lastVerified: "2026-09-11",
    source: "Zilker Botanical Garden Conservancy"
},

{
    id: "fitness-in-the-park",
    title: "Fitness in the Park / Summer Yoga",
    category: "move",
    resourceType: "Community Resource",
    section: "Sports & Movement",
    description: "Seasonal free community fitness and yoga programming from Austin Parks Foundation. Check the page for current or future series dates.",
    url: "https://austinparks.org/events/fitness-in-the-park-summer-yoga-series-with-habitat/",
    linkText: "Check Current Series",
    tags: ["outdoors", "off campus", "free", "sports", "yoga", "events"],
    cost: "Free",
    hours: "Seasonal",
    lastVerified: "2026-09-11",
    source: "Austin Parks Foundation"
},
    {
        id: "at-home-workouts",
        title: "Short At-Home Workouts",
        category: "move",
        resourceType: "Student Pick",
        section: "Sports & Movement",
        description: "Quick, beginner-friendly morning routines to wake up your body and get blood pumping.",
        url: "https://youtu.be/9g4z0gFlfpA",
        linkText: "Watch Workout",
        tags: ["virtual", "free", "sports", "fitness"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Student recommendation"
    },
    {
        id: "intramural-sports",
        title: "UT Intramural Sports",
        category: "move",
        resourceType: "UT Resource",
        section: "Sports & Movement",
        description: "Join friendly recreational leagues and team tournaments coordinated across campus.",
        url: "https://www.utrecsports.org/intramurals",
        linkText: "View Intramurals",
        tags: ["on campus", "included for students", "sports"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "recreational-sports-center",
        title: "Recreational Sports Center",
        category: "move",
        resourceType: "UT Resource",
        section: "Sports & Movement",
        description: "Main campus fitness facility featuring weight rooms, indoor courts, and equipment.",
        url: "https://www.utrecsports.org/facilities/facility/recreational-sports-center",
        linkText: "Facility Info",
        tags: ["on campus", "included for students", "sports", "fitness"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "gregory-gym",
        title: "Gregory Gym",
        category: "move",
        resourceType: "UT Resource",
        section: "Sports & Movement",
        description: "Historic campus gym with indoor climbing, swimming pool, and modern fitness studios.",
        url: "https://www.utrecsports.org/facilities/facility/gregory-gym",
        linkText: "Gregory Gym Info",
        tags: ["on campus", "included for students", "sports", "fitness"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "texercise",
        title: "TeXercise",
        category: "move",
        resourceType: "UT Resource",
        section: "Sports & Movement",
        description: "Group fitness classes. Students get 3 classes free each academic term, then standard pricing is $30/mo.",
        url: "https://www.utrecsports.org/fitness-and-wellness/texercise",
        linkText: "View Schedule",
        tags: ["on campus", "sports", "fitness"],
        cost: "Free & Paid Options",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "campus-pickleball",
        title: "Campus Pickleball (RecSports)",
        category: "move",
        resourceType: "UT Resource",
        section: "Sports & Movement",
        description: "Play pickleball on campus at RecSports daily from 4 PM – 7 PM.",
        url: "https://www.utrecsports.org/sports-adventure/pickleball",
        linkText: "View RecSports Pickleball",
        tags: ["outdoors", "on campus", "included for students", "sports"],
        cost: "Included for UT Students",
        hours: "Daily 4 PM – 7 PM",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },

{
    id: "austin-sand-volleyball",
    title: "Austin Sand Volleyball Courts",
    category: "move",
    resourceType: "Community Resource",
    section: "Sports & Movement",
    description: "Find public sand volleyball courts across Austin parks for casual play and recreational matches.",
    url: "https://www.austintexas.gov/parks/sand-volleyball-courts",
    linkText: "Find Volleyball Courts",
    tags: ["outdoors", "off campus", "free", "sports"],
    cost: "Free",
    hours: "Park hours vary",
    lastVerified: "2026-09-11",
    source: "City of Austin"
},

{
    id: "austin-soccer-fields",
    title: "Austin Soccer Fields & Mini-Pitches",
    category: "move",
    resourceType: "Community Resource",
    section: "Sports & Movement",
    description: "Find public soccer fields, mini-pitches, and community soccer options across Austin.",
    url: "https://www.austintexas.gov/parks/programs/soccer",
    linkText: "Find Soccer Options",
    tags: ["outdoors", "off campus", "free", "sports"],
    cost: "Free",
    hours: "Field access varies",
    lastVerified: "2026-09-11",
    source: "City of Austin"
},
    {
        id: "austin-parks-map",
        title: "Austin Parks & Recreation Interactive Map",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Official interactive map directory of public parks, sports courts, and facilities across Austin.",
        url: "https://austin-parks-and-recreation-austin.hub.arcgis.com",
        linkText: "Explore Map",
        tags: ["outdoors", "off campus", "free", "sports", "nature"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "barton-springs-pool",
        title: "Barton Springs Pool",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Iconic three-acre natural limestone pool fed by underground springs, maintaining a refreshing 68–70°F year-round.",
        url: "https://www.austintexas.gov/department/barton-springs-pool",
        linkText: "Visit Barton Springs",
        tags: ["outdoors", "off campus", "sports", "water", "outdoor movement", "austin classic"],
        cost: "Paid",
        hours: "Daily (check maintenance hours)",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "barton-creek-greenbelt",
        title: "Barton Creek Greenbelt",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Over seven miles of scenic limestone cliffs, hiking trails, and swimming spots running through Austin.",
        url: "https://www.austintexas.gov/department/barton-creek-greenbelt",
        linkText: "Explore Greenbelt",
        tags: ["outdoors", "off campus", "free", "sports", "nature", "outdoor movement"],
        cost: "Free",
        hours: "Dawn to Dusk",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "zilker-park",
        title: "Zilker Metropolitan Park",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Austin's premier metropolitan park spanning over 350 acres of open green space, picnic spots, and recreational trails.",
        url: "https://www.austintexas.gov/department/zilker-metropolitan-park",
        linkText: "Visit Zilker Park",
        tags: ["outdoors", "off campus", "free", "sports", "nature", "outdoor movement", "austin classic"],
        cost: "Free",
        hours: "5 AM – 10 PM daily",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "ut-running-club",
        title: "UT Running Club",
        category: "move",
        resourceType: "UT Resource",
        section: "Sports & Movement",
        description: "Official RecSports student club offering running training, structured groups, and competitive collegiate competitions for students.",
        url: "https://www.utrecsports.org/sport-clubs/sport/running-club",
        linkText: "Join Club",
        tags: ["outdoors", "on campus", "included for students", "sports"],
        cost: "Included for UT Students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "coffee-run-tour",
        title: "The Coffee Run Tour",
        category: "move",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Community coffee run tour for everyone every Sunday. Connect with local runners and coffee lovers!",
        url: "https://instagram.com/runthecoffeetour",
        linkText: "Instagram @runthecoffeetour",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Free",
        hours: "Sundays",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "morning-jos",
        title: "The Morning Jo's Coffee Run",
        category: "move",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "6 AM morning women-led run group. Build community and stamina bright and early.",
        url: "https://thelooprunning.com/pages/community",
        linkText: "Visit Community Page",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Free",
        hours: "6 AM mornings",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "austin-pickleball-map",
        title: "Austin City Pickleball Courts",
        category: "move",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Official Austin Parks & Recreation map and directory of public pickleball courts with details on free courts updated regularly.",
        url: "https://www.austintexas.gov/parks/programs/pickleball",
        linkText: "View City Map",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "purrfecto-cat-lounge",
        title: "Purr-fecto Cat Lounge",
        category: "break",
        resourceType: "Community Resource",
        section: "Pets & Animals",
        description: "Austin's rescue cat cafe where you can enjoy coffee, cuddles, and relaxation with adoptable feline friends.",
        url: "https://purrfectocatlounge.com/",
        linkText: "Visit Cat Lounge",
        tags: ["off campus", "pets"],
        cost: "Paid",
        hours: "Daily (reservation recommended)",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "aac-volunteer",
        title: "Volunteer with Austin Animal Center",
        category: "break",
        resourceType: "Community Resource",
        section: "Pets & Animals",
        description: "Make a direct impact by volunteering with shelter animals, enrichment programs, and adoption support.",
        url: "https://www.austintexas.gov/department/volunteer-austin-animal-center",
        linkText: "Become a Volunteer",
        tags: ["off campus", "pets"],
        cost: "Free",
        hours: "Varies",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "austin-pets-alive",
        title: "Austin Pets Alive! (APA!)",
        category: "break",
        resourceType: "Community Resource",
        section: "Pets & Animals",
        description: "Renowned animal rescue organization offering volunteer opportunities in dog/cat care, medical clinics, and thrift operations.",
        url: "https://www.austinpetsalive.org/volunteer",
        linkText: "Volunteer with APA!",
        tags: ["off campus", "pets"],
        cost: "Free",
        hours: "Varies",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "the-art-garage",
        title: "The Art Garage",
        category: "break",
        resourceType: "Community Resource",
        section: "Art & Creativity",
        description: "Drop-in art studio and classes featuring pottery painting, canvas painting, and creative workshops.",
        url: "https://www.theartgarageaustin.com/",
        linkText: "Visit Art Garage",
        tags: ["off campus", "art"],
        cost: "Paid",
        hours: "Varies",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },

{
    id: "austin-creative-reuse",
    title: "Austin Creative Reuse Events",
    category: "break",
    resourceType: "Community Resource",
    section: "Art & Creativity",
    description: "Find current creative workshops, reuse events, and community art opportunities from Austin Creative Reuse.",
    url: "https://austincreativereuse.org/events",
    linkText: "See Creative Reuse Events",
    tags: ["off campus", "art", "events"],
    cost: "Free & Paid Options",
    hours: "Event schedule varies",
    lastVerified: "2026-09-11",
    source: "Official organization website"
},
    {
        id: "bob-ross",
        title: "Bob Ross Playlist",
        category: "break",
        resourceType: "Student Pick",
        section: "Art & Creativity",
        description: "Calming, joyful painting sessions to unwind and take a mental break from studying.",
        url: "https://youtube.com/playlist?list=PLAEQD0ULngi67rwmhrkNjMZKvyCReqDV4&si=j3dVPF131UabwOOL",
        linkText: "Watch Playlist",
        tags: ["virtual", "free", "art", "mindfulness"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Student recommendation"
    },

{
    id: "blanton-museum",
    title: "Blanton Museum of Art",
    category: "break",
    resourceType: "UT Resource",
    section: "Art & Creativity",
    description: "Explore exhibitions and the Blanton's permanent collection on the UT Austin campus.",
    url: "https://blantonmuseum.org/visit/",
    linkText: "Plan a Blanton Visit",
    tags: ["on campus", "art", "austin classic"],
    cost: "Included for UT Students",
    hours: "Check current museum hours",
    lastVerified: "2026-09-11",
    source: "Official museum website"
},
    {
        id: "elisabet-ney-museum",
        title: "Elisabet Ney Museum",
        category: "connect",
        resourceType: "Community Resource",
        section: "Art & Creativity",
        description: "Historic studio museum showcasing the striking sculptures and history of German-American artist Elisabet Ney in Hyde Park.",
        url: "https://www.austintexas.gov/department/elisabet-ney-museum",
        linkText: "Visit Elisabet Ney",
        tags: ["off campus", "free", "art"],
        cost: "Free",
        hours: "Wed–Sun 10 AM – 5 PM",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },

{
    id: "harry-ransom-center",
    title: "Harry Ransom Center",
    category: "break",
    resourceType: "UT Resource",
    section: "Art & Creativity",
    description: "Browse rotating exhibitions, manuscripts, photography, books, and cultural collections at your own pace on the UT campus.",
    url: "https://www.hrc.utexas.edu/visit/",
    linkText: "Plan Your Visit",
    tags: ["on campus", "free", "art"],
    cost: "Free",
    hours: "Check current gallery hours",
    lastVerified: "2026-09-11",
    source: "Official UT"
},
    {
        id: "austin-parks",
        title: "Austin Parks and Recreation Map",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Get Outside",
        description: "Explore local green spaces, trails, and public parks across Austin.",
        url: "https://austin-parks-and-recreation-austin.hub.arcgis.com",
        linkText: "Explore Map",
        tags: ["outdoors", "off campus", "free", "nature"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "austin-trail-map",
        title: "Austin Interactive Trail Map",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Get Outside",
        description: "Official interactive ArcGIS map exploring trail networks and greenways across Austin.",
        url: "https://experience.arcgis.com/experience/45149bd4f5874028a43be1574702fb23/",
        linkText: "View Trail Map",
        tags: ["outdoors", "off campus", "free", "nature", "outdoor movement"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "austin-eco-counter",
        title: "Austin Eco-Counter Live Trail Traffic",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Get Outside",
        description: "Real-time pedestrian and bicycle traffic counts across various Austin trail counter stations.",
        url: "https://cityofaustin.eco-counter.us/",
        linkText: "Check Live Traffic",
        tags: ["outdoors", "off campus", "free", "nature", "outdoor movement"],
        cost: "Free",
        hours: "24/7",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "bennu-coffee",
        title: "Bennu Coffee Highland",
        category: "study",
        resourceType: "Community Resource",
        section: "Coffee Shop Recommendation",
        description: "Student recommendation for studying off-campus. Open 24 hours / 7 days a week.",
        url: "https://bennucoffee.com/",
        linkText: "View Bennu Coffee",
        tags: ["off campus", "open late", "outlets"],
        cost: "Paid",
        hours: "24 hours / 7 days",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "epoch-coffee",
        title: "Epoch Coffee (North Loop)",
        category: "study",
        resourceType: "Community Resource",
        section: "Coffee Shop Recommendation",
        description: "Student recommendation for studying off-campus. Open 24 hours daily.",
        url: "https://epochcoffee.com/",
        linkText: "View Epoch Coffee",
        tags: ["off campus", "open late"],
        cost: "Paid",
        hours: "24 hours / 7 days",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },

{
    id: "medici-guadalupe",
    title: "Medici Roasting — Guadalupe",
    category: "study",
    resourceType: "Community Resource",
    section: "Coffee Shop Recommendation",
    description: "Off-campus coffee shop close to UT for studying, coffee, and a change of scenery.",
    url: "https://mediciroasting.com/",
    linkText: "View Medici",
    tags: ["off campus"],
    cost: "Paid",
    hours: "Check current hours",
    lastVerified: "2026-09-11",
    source: "Official business website"
},
{
    id: "flightpath-coffee",
    title: "Flightpath Coffeehouse",
    category: "study",
    resourceType: "Community Resource",
    section: "Coffee Shop Recommendation",
    description: "Longstanding Hyde Park coffeehouse and student study spot with outlets available.",
    url: "https://flightpathcoffeehouse.com/",
    linkText: "View Flightpath",
    tags: ["off campus", "outlets"],
    cost: "Paid",
    hours: "Check current hours",
    lastVerified: "2026-09-11",
    source: "Official business website"
},
    {
        id: "codependent-monkeynest",
        title: "Codependent & Monkey Nest",
        category: "study",
        resourceType: "Community Resource",
        section: "Coffee Shop Recommendation",
        description: "Codependent: Mon–Wed 8A–11P, Thu 8A–mid, Fri 8A–1A, Sat 9A–1A, Sun 9A–9P. Monkey Nest: Mon–Sat 7A–7P, Sun 8A–7P.",
        url: "https://codependentatx.com/",
        linkText: "View Coffee Shops",
        tags: ["off campus", "open late"],
        cost: "Paid",
        hours: "Varies",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
{
    id: "queer-craft-night",
    title: "Queer Craft Night",
    category: "explore",
    resourceType: "Community Resource",
    section: "Art & Creativity",
    description: "A queer-centered community craft gathering in Austin. Check Instagram for upcoming craft nights and event details.",
    url: "https://www.instagram.com/queercraftnight/?hl=en",
    linkText: "See Upcoming Craft Nights",
    tags: ["off campus", "art", "events", "community", "local find"],
    cost: "Price Varies",
    hours: "Check current event details",
    lastVerified: "2026-09-11",
    source: "Community organizer"
},
{
    id: "city-austin-events",
    title: "City of Austin Events",
    category: "explore",
    resourceType: "Community Resource",
    section: "Events & Things to Do in Austin",
    description: "Browse current City of Austin events, programs, community activities, and things happening around town.",
    url: "https://www.austintexas.gov/events",
    linkText: "See Austin Events",
    tags: ["off campus", "events", "whats happening now"],
    cost: "Free & Paid Options",
    hours: "Updated continuously",
    lastVerified: "2026-09-11",
    source: "City of Austin"
},
{
    id: "visit-austin-arts",
    title: "Explore Austin Arts & Culture",
    category: "explore",
    resourceType: "Community Resource",
    section: "Art & Creativity",
    description: "Discover galleries, museums, visual arts, performances, and cultural happenings around Austin.",
    url: "https://www.austintexas.org/things-to-do/arts/explore-austins-arts-culture/",
    linkText: "Explore Austin Arts",
    tags: ["off campus", "art", "events", "whats happening now"],
    cost: "Free & Paid Options",
    hours: "Updated throughout the year",
    lastVerified: "2026-09-11",
    source: "Visit Austin"
},
{
    id: "austin-meditation-community",
    title: "Austin's Meditation Community",
    category: "break",
    resourceType: "Community Resource",
    section: "Mindfulness & Nervous System",
    description: "Beginner-friendly community meditation with free online sessions and recurring Austin meetups. Check the site for current dates and formats.",
    url: "https://www.meditationcommunity.org/",
    linkText: "See Meditation Options",
    tags: ["off campus", "virtual", "free", "mindfulness", "community"],
    cost: "Free",
    hours: "Current schedule varies",
    lastVerified: "2026-09-11",
    source: "Official organization website"
},
{
    id: "worldguessr",
    title: "WorldGuessr",
    category: "doomscroll",
    resourceType: "Free Browser Game",
    section: "Instead of Doomscrolling — Explore",
    description: "Get dropped somewhere in the world, look around, and figure out where you are. A better rabbit hole when you want novelty without opening another feed.",
    url: "https://www.worldguessr.com/",
    linkText: "Explore the World",
    tags: ["doom-explore", "free", "unlimited", "no account", "phone-friendly", "virtual"],
    cost: "Free",
    hours: "Anytime",
    lastVerified: "2026-09-11",
    source: "Official website"
},
{
    id: "openguessr",
    title: "OpenGuessr",
    category: "doomscroll",
    resourceType: "Free Browser Game",
    section: "Instead of Doomscrolling — Explore",
    description: "Explore locations around the world and guess where you landed. Good when you want something interactive instead of passive scrolling.",
    url: "https://openguessr.com/",
    linkText: "Start Exploring",
    tags: ["doom-explore", "free", "unlimited", "no account", "phone-friendly", "virtual"],
    cost: "Free",
    hours: "Anytime",
    lastVerified: "2026-09-11",
    source: "Official website"
},
{
    id: "minesweeper-lab",
    title: "Infinite Minesweeper",
    category: "doomscroll",
    resourceType: "Free Browser Game",
    section: "Instead of Doomscrolling — Puzzle",
    description: "Give your brain one clear thing to focus on. Play a quick Minesweeper board or keep going with an infinite board.",
    url: "https://minesweeperlab.com/",
    linkText: "Start a Puzzle",
    tags: ["doom-puzzle", "free", "unlimited", "no account", "phone-friendly", "calm", "virtual"],
    cost: "Free",
    hours: "Anytime",
    lastVerified: "2026-09-11",
    source: "Official website"
},
{
    id: "cardhearth",
    title: "CardHearth",
    category: "doomscroll",
    resourceType: "Free Game Collection",
    section: "Instead of Doomscrolling — Play",
    description: "Pick something familiar: Solitaire, FreeCell, Spider, Sudoku, Mahjong, Minesweeper, 2048, and other simple games.",
    url: "https://cardhearth.com/",
    linkText: "Pick a Game",
    tags: ["doom-play", "free", "unlimited", "no account", "phone-friendly", "virtual"],
    cost: "Free",
    hours: "Anytime",
    lastVerified: "2026-09-11",
    source: "Official website"
}
];

const STUDY_SPOTS = [
    {
        name: "Moffett Molecular Biology courtyard",
        type: "outdoor",
        vibe: "quiet",
        hours: "Check current access",
        openLate: false,
        outlets: false,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "East Mall outside Jackson Geosciences",
        type: "outdoor",
        vibe: "social",
        hours: "Outdoor access",
        openLate: false,
        outlets: false,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Balcony between Batts and Mezes",
        type: "outdoor",
        vibe: "quiet",
        hours: "Outdoor access",
        openLate: false,
        outlets: false,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "School of Architecture courtyard",
        type: "outdoor",
        vibe: "quiet",
        hours: "Check current access",
        openLate: false,
        outlets: false,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "4th floor WCP",
        type: "indoor",
        vibe: "social",
        hours: "Mon–Thu 7 AM–11 PM; Fri 7 AM–10 PM; Sat 10 AM–10 PM; Sun noon–10 PM",
        openLate: true,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Battle Hall Library",
        type: "indoor",
        vibe: "quiet",
        hours: "Reopened Fall 2026 — Check hours",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Gates Dell Complex (GDC) balconies",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Fri 7 AM–10 PM; closed weekends",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Life Science Library",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Thu 8 AM–9 PM; Fri 8 AM–5 PM",
        openLate: true,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Goldsmith Hall & AIM Reading Room",
        type: "indoor",
        vibe: "quiet",
        hours: "Check current access",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "McCombs 5th floor & Rowling Hall terrace",
        type: "indoor",
        vibe: "social",
        hours: "Check current access",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "San Jacinto & Engineering Research Center",
        type: "indoor",
        vibe: "quiet",
        hours: "Check current access",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Carothers basement & UTC upper floor",
        type: "indoor",
        vibe: "quiet",
        hours: "Check current access",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "LBJ outdoor seating & Holland Family Center",
        type: "outdoor",
        vibe: "quiet",
        hours: "Check current access",
        openLate: false,
        outlets: false,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Liberal Arts patio & Sanchez Building",
        type: "outdoor",
        vibe: "social",
        hours: "Check current access",
        openLate: false,
        outlets: false,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "PCL (Perry-Castañeda Library)",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Fri 7 AM–7 PM; Sun 12–7 PM",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "UT Law Library (Tarlton)",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Fri 8 AM–6 PM",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Benson Latin American Collection",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Fri 9 AM–5 PM",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Fine Arts Library",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Fri 9 AM–5 PM",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Austin Central Library",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Thu 9 AM–8 PM; Fri–Sat 9 AM–5 PM; Sun 12–5 PM",
        openLate: false,
        outlets: true,
        coffeeNearby: true,
        campus: false,
        url: "https://library.austintexas.gov/central",
        lastVerified: "2026-09-09"
    },
    {
        name: "Texas Union",
        type: "indoor",
        vibe: "social",
        hours: "Mon–Fri 7 AM–11 PM; Sat 10 AM–11 PM; Sun noon–11 PM",
        openLate: true,
        outlets: true,
        coffeeNearby: true,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Welch Hall",
        type: "indoor",
        vibe: "quiet",
        hours: "Campus building · Check current access",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178",
        lastVerified: "2026-09-09"
    },
    {
        name: "Health Learning Building (HLB) at Dell Med",
        type: "indoor",
        vibe: "quiet",
        hours: "Check current access",
        openLate: false,
        outlets: true,
        coffeeNearby: false,
        campus: true,
        url: "https://dellmed.utexas.edu/",
        lastVerified: "2026-09-09"
    },
{
    name: "Bennu Coffee Highland",
    type: "indoor",
    vibe: "social",
    hours: "Check current hours",
    openLate: true,
    outlets: true,
    coffeeNearby: true,
    campus: false,
    url: "https://bennucoffee.com/",
    lastVerified: "2026-09-11"
},
{
    name: "Flightpath Coffeehouse",
    type: "indoor",
    vibe: "social",
    hours: "Check current hours",
    openLate: false,
    outlets: true,
    coffeeNearby: true,
    campus: false,
    url: "https://flightpathcoffeehouse.com/",
    lastVerified: "2026-09-11"
}
];


function initEquilibrium() {
    let currentCategory = null;
    let currentFilter = { type: "none", value: "" };
    let currentStudyFilter = "";

    const resourceGrid = document.getElementById("resourceGrid");
    const studySpotsGrid = document.getElementById("studySpotsGrid");
    const searchInput = document.getElementById("searchInput");
    const clearFiltersBtn = document.getElementById("clearFiltersBtn");
    const resultCount = document.getElementById("resultCount");
    const noResultsMessage = document.getElementById("noResultsMessage");
    const selectorCards = document.querySelectorAll(".selector-card");
    const studyFilterChips = document.querySelectorAll(".study-filter-chip");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const primaryNav = document.getElementById("primary-nav");
    const footerReviewDate = document.getElementById("footerReviewDate");
    const filterRow = document.querySelector("#library .filter-tags-row");
    const filterToolbar = document.querySelector("#library .filter-toolbar");

    const FILTER_CONFIG = {
        support: {
            label: "Choose Support",
            options: [
                { label: "All Support", type: "all", value: "all" },
                { label: "Counseling & Groups", type: "section", value: "Mental Health / Support" },
                { label: "Immediate / Crisis", type: "section", value: "Crisis Support" },
                { label: "Virtual", type: "tag", value: "virtual" }
            ]
        },
        move: {
            label: "How Do You Want to Move?",
            options: [
                { label: "All Movement", type: "all", value: "all" },
                { label: "Sports & Movement", type: "tag", value: "sports" },
                { label: "Yoga", type: "tag", value: "yoga" },
                { label: "Fitness", type: "tag", value: "fitness" },
                { label: "Outdoors", type: "tag", value: "outdoors" }
            ]
        },
        outdoors: {
            label: "What Sounds Good Outside?",
            options: [
                { label: "All Outdoors", type: "all", value: "all" },
                { label: "Parks & Nature", type: "tag", value: "nature" },
                { label: "Outdoor Movement", type: "tag", value: "outdoor movement" },
                { label: "Water / Swimming", type: "tag", value: "water" },
                { label: "Free", type: "cost", value: "Free" }
            ]
        },
        break: {
            label: "What Kind of Break?",
            options: [
                { label: "All Break Ideas", type: "all", value: "all" },
                { label: "Art & Creativity", type: "tag", value: "art" },
                { label: "Pets & Animals", type: "tag", value: "pets" },
                { label: "Mindfulness & Nervous System", type: "tag", value: "mindfulness" }
            ]
        },
        explore: {
            label: "Explore Austin",
            options: [
                { label: "All Austin Ideas", type: "all", value: "all" },
                { label: "Events & Things to Do in Austin", type: "tag", value: "events" },
                { label: "Art & Exhibits", type: "tag", value: "art" },
                { label: "Outdoors", type: "tag", value: "outdoors" },
                { label: "Free Things", type: "cost", value: "Free" }
            ]
        },
        doomscroll: {
            label: "Instead of Doomscrolling",
            options: [
                { label: "All", type: "all", value: "all" },
                { label: "Explore", type: "tag", value: "doom-explore" },
                { label: "Puzzle", type: "tag", value: "doom-puzzle" },
                { label: "Play", type: "tag", value: "doom-play" }
            ]
        }
    };

    const TAG_LABELS = {
        "on campus": "On Campus",
        "off campus": "Off Campus",
        "included for students": "Included for Students",
        "virtual": "Virtual",
        "outdoors": "Outdoors",
        "open late": "Open Late",
        "sports": "Sports & Movement",
        "pets": "Pets & Animals",
        "art": "Art & Creativity",
        "mindfulness": "Mindfulness & Nervous System",
        "events": "Events & Things to Do in Austin",
        "yoga": "Yoga",
        "fitness": "Fitness",
        "free": "Free",
        "unlimited": "Unlimited",
        "no account": "No Account",
        "phone-friendly": "Phone-Friendly",
        "calm": "Calm",
        "community": "Community",
        "outlets": "Outlets",
        "nature": "Parks & Nature",
        "water": "Water / Swimming",
        "outdoor movement": "Outdoor Movement",
        "austin classic": "Austin Classic",
        "local find": "Local Find",
        "whats happening now": "What's Happening Now",
        "doom-explore": "Explore",
        "doom-puzzle": "Puzzle",
        "doom-play": "Play",
        "indoor": "Indoor",
        "outdoor": "Outdoor",
        "quiet": "Quiet",
        "social": "Social",
        "coffee nearby": "Coffee Nearby"
    };

    let categoryHelper = document.getElementById("categoryHelper");
    if (!categoryHelper && filterToolbar) {
        categoryHelper = document.createElement("div");
        categoryHelper.id = "categoryHelper";
        categoryHelper.className = "category-helper";
        categoryHelper.hidden = true;
        filterToolbar.insertAdjacentElement("afterend", categoryHelper);
    }

    if (footerReviewDate) {
        footerReviewDate.textContent = `Last site review: ${SITE_CONFIG.lastSiteReview}`;
    }

    document.querySelectorAll(".dynamic-feedback-link").forEach(link => {
        link.href = SITE_CONFIG.websiteFeedbackUrl;
    });

    if (mobileMenuToggle && primaryNav) {
        mobileMenuToggle.addEventListener("click", () => {
            const isExpanded = mobileMenuToggle.getAttribute("aria-expanded") === "true";
            mobileMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
            primaryNav.classList.toggle("active");
        });

        primaryNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuToggle.setAttribute("aria-expanded", "false");
                primaryNav.classList.remove("active");
            });
        });
    }

    function prettyTag(tag) {
        return TAG_LABELS[tag] || tag.replace(/\b\w/g, char => char.toUpperCase());
    }

    function formatVerifiedDate(value) {
        if (!value) return "";
        const parts = value.split("-");
        if (parts.length < 2) return value;

        const date = new Date(
            Number(parts[0]),
            Number(parts[1]) - 1,
            Number(parts[2] || 1)
        );

        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            year: "numeric"
        }).format(date);
    }

    function matchesNeed(res, category) {
        const tags = res.tags || [];

        if (category === "all") return true;
        if (category === "support") return res.category === "support";

        if (category === "move") {
            return res.category === "move" ||
                tags.includes("sports") ||
                tags.includes("yoga") ||
                tags.includes("fitness");
        }

        if (category === "outdoors") {
            return res.category === "outdoors" ||
                tags.includes("outdoors") ||
                tags.includes("nature") ||
                tags.includes("water");
        }

        if (category === "break") {
            return res.category === "break" ||
                tags.includes("art") ||
                tags.includes("pets") ||
                tags.includes("mindfulness");
        }

        if (category === "explore") {
            return res.category === "explore" ||
                tags.includes("events") ||
                tags.includes("art") ||
                tags.includes("outdoors");
        }

        if (category === "doomscroll") {
            return res.category === "doomscroll";
        }

        return res.category === category;
    }

    function matchesCurrentFilter(res) {
        if (currentFilter.type === "none") return false;
        if (currentFilter.type === "all") return true;
        if (currentFilter.type === "tag") return (res.tags || []).includes(currentFilter.value);
        if (currentFilter.type === "section") return res.section === currentFilter.value;
        if (currentFilter.type === "cost") return res.cost === currentFilter.value;
        return true;
    }

    function setCategoryHelper(category) {
        if (!categoryHelper) return;

        if (category === "doomscroll") {
            categoryHelper.innerHTML = `
                <strong>Need something to do with your brain for a few minutes?</strong>
                Pick a different kind of rabbit hole.
                <span>No subscriptions, trials, or daily-play limits — these picks are free to keep using.</span>
            `;
            categoryHelper.hidden = false;
        } else {
            categoryHelper.hidden = true;
            categoryHelper.innerHTML = "";
        }
    }

    function renderFilterRow(category = null) {
        if (!filterRow) return;

        filterRow.innerHTML = "";

        const label = document.createElement("span");
        label.className = "filter-label";

        if (!category || !FILTER_CONFIG[category]) {
            label.textContent = "Browse:";
            filterRow.appendChild(label);

            const allButton = document.createElement("button");
            allButton.type = "button";
            allButton.className = "filter-chip";
            allButton.textContent = "All Ideas";
            allButton.addEventListener("click", () => {
                currentCategory = "all";
                currentFilter = { type: "all", value: "all" };
                selectorCards.forEach(card => card.classList.remove("active"));
                setCategoryHelper(null);
                renderResources();
                renderFilterRow("all");
            });
            filterRow.appendChild(allButton);
            return;
        }

        if (category === "all") {
            label.textContent = "All Ideas";
            filterRow.appendChild(label);

            const resetButton = document.createElement("button");
            resetButton.type = "button";
            resetButton.className = "filter-chip active";
            resetButton.textContent = "Showing All";
            resetButton.disabled = true;
            filterRow.appendChild(resetButton);
            return;
        }

        const config = FILTER_CONFIG[category];
        label.textContent = `${config.label}:`;
        filterRow.appendChild(label);

        config.options.forEach(option => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "filter-chip";
            button.textContent = option.label;

            button.addEventListener("click", () => {
                filterRow.querySelectorAll(".filter-chip").forEach(chip => {
                    chip.classList.remove("active");
                });

                button.classList.add("active");
                currentFilter = { type: option.type, value: option.value };
                renderResources();
            });

            filterRow.appendChild(button);
        });
    }

    function renderResources() {
        if (!resourceGrid || !searchInput) return;

        const query = searchInput.value.trim().toLowerCase();
        const searching = query.length > 0;

        resourceGrid.innerHTML = "";

        if (!searching && currentCategory === null) {
            resultCount.textContent = "Choose what would help above, search directly, or select All Ideas.";
            noResultsMessage.style.display = "none";
            return;
        }

        if (!searching && currentCategory !== "all" && currentFilter.type === "none") {
            resultCount.textContent = "Choose a subcategory to view matching resources.";
            noResultsMessage.style.display = "none";
            return;
        }

        const filtered = WELLNESS_RESOURCES.filter(res => {
            const searchString = [
                res.title,
                res.description,
                res.section,
                res.resourceType,
                res.cost,
                res.hours,
                ...(res.tags || [])
            ].filter(Boolean).join(" ").toLowerCase();

            if (searching) {
                return searchString.includes(query);
            }

            return matchesNeed(res, currentCategory) && matchesCurrentFilter(res);
        });

        resultCount.textContent = `${filtered.length} resource${filtered.length === 1 ? "" : "s"} found`;

        if (filtered.length === 0) {
            noResultsMessage.style.display = "block";
            return;
        }

        noResultsMessage.style.display = "none";

        filtered.forEach(res => {
            const card = document.createElement("article");
            card.className = "res-card";

            const tagsHtml = (res.tags || [])
                .map(tag => `<span class="res-tag">${prettyTag(tag)}</span>`)
                .join("");

            const costHtml = res.cost
                ? `<span class="res-tag res-cost-tag">${res.cost}</span>`
                : "";

            const hoursHtml = res.hours
                ? `<span>Hours: ${res.hours}</span>`
                : "";

            const verifiedHtml = res.lastVerified
                ? `<span>Last checked: ${formatVerifiedDate(res.lastVerified)}</span>`
                : "";

            const directAction =
                res.url.startsWith("tel:") ||
                res.url.startsWith("sms:") ||
                res.url.startsWith("mailto:");

            const linkAttributes = directAction
                ? ""
                : ' target="_blank" rel="noopener noreferrer"';

            card.innerHTML = `
                <div>
                    <div class="res-header-meta">
                        <span class="res-category">${res.section}</span>
                        <span class="resource-type-indicator">${res.resourceType}</span>
                    </div>
                    <h3 class="res-title">${res.title}</h3>
                    <p class="res-desc">${res.description}</p>
                    <div class="res-meta-info">
                        ${hoursHtml}
                        ${verifiedHtml}
                    </div>
                </div>
                <div class="res-footer">
                    <div class="res-tags-list">
                        ${tagsHtml}
                        ${costHtml}
                    </div>
                    <a href="${res.url}"${linkAttributes} class="res-link">${res.linkText} &rarr;</a>
                </div>
            `;

            resourceGrid.appendChild(card);
        });
    }

    function renderStudySpots() {
        if (!studySpotsGrid) return;

        studySpotsGrid.innerHTML = "";

        if (currentStudyFilter === "") {
            studySpotsGrid.innerHTML =
                '<div class="no-results-message">Please select a study spot filter above to view locations.</div>';
            return;
        }

        const filteredSpots = STUDY_SPOTS.filter(spot => {
            if (currentStudyFilter === "all") return true;
            if (currentStudyFilter === "quiet") return spot.vibe === "quiet";
            if (currentStudyFilter === "social") return spot.vibe === "social";
            if (currentStudyFilter === "indoor") return spot.type === "indoor";
            if (currentStudyFilter === "outdoor") return spot.type === "outdoor";
            if (currentStudyFilter === "openLate") return spot.openLate;
            if (currentStudyFilter === "outlets") return spot.outlets;
            if (currentStudyFilter === "coffeeNearby") return spot.coffeeNearby;
            return true;
        });

        if (filteredSpots.length === 0) {
            studySpotsGrid.innerHTML =
                '<div class="no-results-message">No study spots match this filter.</div>';
            return;
        }

        filteredSpots.forEach(spot => {
            const card = document.createElement("article");
            card.className = "res-card";

            const tags = [
                prettyTag(spot.type),
                prettyTag(spot.vibe),
                ...(spot.openLate ? ["Open Late"] : []),
                ...(spot.outlets ? ["Outlets"] : []),
                ...(spot.coffeeNearby ? ["Coffee Nearby"] : [])
            ];

            const isCampusMap = spot.url === SITE_CONFIG.utCampusMapUrl;
            const linkText = isCampusMap ? "Find on UT Campus Map" : "View Location";

            card.innerHTML = `
                <div>
                    <div class="res-header-meta">
                        <span class="res-category">Study Spot</span>
                        <span class="resource-type-indicator">${spot.campus ? "UT Campus" : "Austin"}</span>
                    </div>
                    <h3 class="res-title">${spot.name}</h3>
                    <p class="res-desc">Hours: ${spot.hours}</p>
                </div>
                <div class="res-footer">
                    <div class="res-tags-list">
                        ${tags.map(tag => `<span class="res-tag">${tag}</span>`).join("")}
                    </div>
                    <a href="${spot.url}" target="_blank" rel="noopener noreferrer" class="res-link">${linkText} &rarr;</a>
                </div>
            `;

            studySpotsGrid.appendChild(card);
        });
    }

    selectorCards.forEach(card => {
        card.addEventListener("click", () => {
            selectorCards.forEach(item => item.classList.remove("active"));
            card.classList.add("active");

            const category = card.dataset.category;

            if (category === "study") {
                document.getElementById("study-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                return;
            }

            currentCategory = category;
            currentFilter = { type: "none", value: "" };

            renderFilterRow(category);
            setCategoryHelper(category);
            renderResources();

            document.getElementById("library")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    studyFilterChips.forEach(chip => {
        chip.addEventListener("click", () => {
            studyFilterChips.forEach(item => item.classList.remove("active"));
            chip.classList.add("active");
            currentStudyFilter = chip.dataset.studyFilter;
            renderStudySpots();
        });
    });

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener("click", () => {
            currentCategory = null;
            currentFilter = { type: "none", value: "" };
            currentStudyFilter = "";
            searchInput.value = "";

            selectorCards.forEach(item => item.classList.remove("active"));
            studyFilterChips.forEach(item => item.classList.remove("active"));

            setCategoryHelper(null);
            renderFilterRow();
            renderResources();
            renderStudySpots();
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderResources();
        });
    }

    renderFilterRow();
    renderResources();
    renderStudySpots();

}

/*
 * CodePen-safe startup:
 * - If the HTML is still loading, wait for DOMContentLoaded.
 * - If CodePen has already built the preview DOM, initialize immediately.
 * - The data attribute prevents duplicate initialization if CodePen reruns JS.
 */
function startEquilibrium() {
    if (document.documentElement.dataset.equilibriumInitialized === "true") {
        return;
    }

    document.documentElement.dataset.equilibriumInitialized = "true";
    initEquilibrium();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startEquilibrium, { once: true });
} else {
    startEquilibrium();
}

