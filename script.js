/**
 * ==========================================
 * FUTURE STUDENT MAINTAINERS
 * Change important site-wide links/settings here.
 * ==========================================
 */

const SITE_CONFIG = {
    websiteFeedbackUrl: "https://forms.gle/pxBk7z8dh8vFdkC1A",
    lastSiteReview: "September 2026"
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
        cost: "Included for UT students",
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
        cost: "Included for UT students",
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
        cost: "Included for UT students",
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
        cost: "Included for UT students",
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
        cost: "Included for UT students",
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
        title: "Guided mindfulness exercise",
        category: "break",
        resourceType: "Student Pick",
        section: "Mindfulness",
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
        title: "Insight Timer App",
        category: "break",
        resourceType: "Community Resource",
        section: "Mindfulness",
        description: "Free library of guided meditations, sleep music, and breathing exercises.",
        url: "https://insighttimer.com/",
        linkText: "Explore Insight Timer",
        tags: ["virtual", "free", "mindfulness"],
        cost: "Some free access",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official business website"
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
        tags: ["virtual", "free", "sports", "mindfulness"],
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
        tags: ["virtual", "free", "sports", "mindfulness"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Student recommendation"
    },
    {
        id: "apl-yoga-meditation",
        title: "Free Yoga & Meditation at Austin Public Library",
        category: "move",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Free community yoga and meditation classes hosted across Austin Public Library branches.",
        url: "https://library.austintexas.gov/",
        linkText: "View APL Events",
        tags: ["off campus", "free", "sports", "mindfulness"],
        cost: "Free",
        hours: "Varies",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "rose-shine-yoga",
        title: "Rose & Shine Yoga",
        category: "move",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Morning yoga sessions surrounded by nature at the Zilker Botanical Garden.",
        url: "https://zilkergarden.org/",
        linkText: "View Zilker Garden",
        tags: ["outdoors", "off campus", "sports", "mindfulness"],
        cost: "Paid",
        hours: "Morning sessions",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "fitness-in-the-park",
        title: "Fitness in the Park / Summer Yoga",
        category: "move",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Free community fitness classes and summer yoga hosted by the Austin Parks Foundation.",
        url: "https://austinparks.org/",
        linkText: "Explore APF",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Free",
        hours: "Seasonal",
        lastVerified: "2026-09-09",
        source: "Community organization"
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
        tags: ["virtual", "free", "sports"],
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
        cost: "Included for UT students",
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
        tags: ["on campus", "included for students", "sports"],
        cost: "Included for UT students",
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
        tags: ["on campus", "included for students", "sports"],
        cost: "Included for UT students",
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
        tags: ["on campus", "sports"],
        cost: "Some free access",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "campus-pickleball",
        title: "Campus Pickleball (RecSports)",
        category: "connect",
        resourceType: "UT Resource",
        section: "Sports & Movement",
        description: "Play pickleball on campus at RecSports daily from 4 PM – 7 PM.",
        url: "https://www.utrecsports.org/sports-adventure/pickleball",
        linkText: "View RecSports Pickleball",
        tags: ["outdoors", "on campus", "included for students", "sports"],
        cost: "Included for UT students",
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
        description: "Public sand volleyball courts maintained across Austin parks for recreational matches.",
        url: "https://www.austintexas.gov/department/parks-and-recreation",
        linkText: "View Parks Info",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Free",
        hours: "Park hours",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "austin-soccer-fields",
        title: "Austin Soccer Fields & Mini-Pitches",
        category: "move",
        resourceType: "Community Resource",
        section: "Sports & Movement",
        description: "Open soccer pitches and fields across Austin parks for pickup games and training.",
        url: "https://www.austintexas.gov/department/parks-and-recreation",
        linkText: "View Soccer Fields",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Free",
        hours: "Park hours",
        lastVerified: "2026-09-09",
        source: "Official business website"
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
        tags: ["outdoors", "off campus", "free", "sports"],
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
        tags: ["outdoors", "off campus", "sports"],
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
        tags: ["outdoors", "off campus", "free", "sports"],
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
        tags: ["outdoors", "off campus", "free", "sports"],
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
        cost: "Included for UT students",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Official UT"
    },
    {
        id: "coffee-run-tour",
        title: "The Coffee Run Tour",
        category: "connect",
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
        category: "connect",
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
        category: "outdoors",
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
        id: "austin-animal-center",
        title: "Austin Animal Center",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Pets & Animals",
        description: "The municipal animal shelter for Austin and Travis County. Visit adoptable pets or explore shelter programs.",
        url: "https://www.austintexas.gov/austin-animal-center",
        linkText: "Visit AAC",
        tags: ["off campus", "free", "pets"],
        cost: "Free",
        hours: "Daily 11 AM – 7 PM",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "aac-volunteer",
        title: "Volunteer with Austin Animal Center",
        category: "connect",
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
        id: "doggie-day-out",
        title: "Doggie Day Out & Weekend Sleepovers",
        category: "connect",
        resourceType: "Community Resource",
        section: "Pets & Animals",
        description: "Take a shelter dog out on a field trip or weekend sleepover to give them a break from the kennel and help them decompress.",
        url: "https://www.austintexas.gov/page/doggie-day-out",
        linkText: "Learn About Day Out",
        tags: ["off campus", "pets"],
        cost: "Free",
        hours: "Daily",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "austin-pets-alive",
        title: "Austin Pets Alive! (APA!)",
        category: "connect",
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
        title: "Austin Creative Reuse",
        category: "break",
        resourceType: "Community Resource",
        section: "Art & Creativity",
        description: "Nonprofit center promoting conservation and creativity through reuse, craft materials, and creative workshops.",
        url: "https://austincreativereuse.org/",
        linkText: "Explore Creative Reuse",
        tags: ["off campus", "art"],
        cost: "Free/Low-cost",
        hours: "Varies",
        lastVerified: "2026-09-09",
        source: "Official business website"
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
        category: "connect",
        resourceType: "Community Resource",
        section: "Art & Creativity",
        description: "Major art museum located on the UT Austin campus featuring extensive collections and Ellsworth Kelly's iconic *Austin* building.",
        url: "https://blantonmuseum.org/",
        linkText: "Visit Blanton Museum",
        tags: ["on campus", "off campus", "art"],
        cost: "Free for students / Paid",
        hours: "Wed–Sun",
        lastVerified: "2026-09-09",
        source: "Official business website"
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
        category: "study",
        resourceType: "UT Resource",
        section: "Art & Creativity",
        description: "Internationally renowned humanities research library and museum on campus housing rare manuscripts, photography, and cultural exhibitions.",
        url: "https://www.hrc.utexas.edu/visiting/",
        linkText: "Plan Your Visit",
        tags: ["on campus", "free", "art"],
        cost: "Free",
        hours: "Tue–Sun",
        lastVerified: "2026-09-09",
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
        tags: ["outdoors", "off campus", "free"],
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
        tags: ["outdoors", "off campus", "free"],
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
        tags: ["outdoors", "off campus", "free"],
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
        tags: ["off campus", "open late"],
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
        id: "medici-flightpath",
        title: "Medici Roasting & Flightpath",
        category: "study",
        resourceType: "Community Resource",
        section: "Coffee Shop Recommendation",
        description: "Medici Guadalupe: 7 AM–7 PM daily. Flightpath Coffeehouse: 7 AM–7 PM daily.",
        url: "https://mediciroasting.com/",
        linkText: "View Coffee Shops",
        tags: ["off campus"],
        cost: "Paid",
        hours: "7 AM–7 PM daily",
        lastVerified: "2026-09-09",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
        url: "https://www.reddit.com/r/UTAustin/s/QfrSBELTXw",
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
    }
];
document.addEventListener("DOMContentLoaded", () => {
    let currentCategory = 'all';
    // 1. Change default resource tag to 'included for students'
    let currentTag = 'included for students';
    // 2. Change default study spot filter to 'openLate'
    let currentStudyFilter = 'openLate';

    const resourceGrid = document.getElementById('resourceGrid');
    const studySpotsGrid = document.getElementById('studySpotsGrid');
    const searchInput = document.getElementById('searchInput');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const resultCount = document.getElementById('resultCount');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const selectorCards = document.querySelectorAll('.selector-card');
    const filterChips = document.querySelectorAll('.filter-chip');
    const studyFilterChips = document.querySelectorAll('.study-filter-chip');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNav = document.getElementById('primary-nav');
    const footerReviewDate = document.getElementById('footerReviewDate');

    if (footerReviewDate) {
        footerReviewDate.textContent = `Last site review: ${SITE_CONFIG.lastSiteReview}`;
    }

    document.querySelectorAll('.dynamic-feedback-link').forEach(link => {
        link.setAttribute('href', SITE_CONFIG.websiteFeedbackUrl);
    });

    if (mobileMenuToggle && primaryNav) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            primaryNav.classList.toggle('active');
        });

        primaryNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                primaryNav.classList.remove('active');
            });
        });
    }

    // Render Resource Cards (Only populates when a filter/search is active)
    function renderResources() {
        const query = searchInput.value.toLowerCase().trim();
        resourceGrid.innerHTML = '';

        // If no search query and 'All' is selected, don't populate resources by default
        if (currentTag === 'all' && currentCategory === 'all' && query === '') {
            resultCount.textContent = "Select a filter or search term to view resources";
            noResultsMessage.style.display = 'none';
            return;
        }

        const filtered = WELLNESS_RESOURCES.filter(res => {
            const matchesCategory = (currentCategory === 'all' || res.category === currentCategory);
            const matchesTag = (currentTag === 'all' || res.tags.includes(currentTag));
            
            const searchString = `${res.title} ${res.description} ${res.section} ${res.resourceType} ${res.tags.join(' ')}`.toLowerCase();
            const matchesSearch = searchString.includes(query);

            return matchesCategory && matchesTag && matchesSearch;
        });

        resultCount.textContent = `${filtered.length} resource${filtered.length === 1 ? '' : 's'} found`;

        if (filtered.length === 0) {
            noResultsMessage.style.display = 'block';
            return;
        } else {
            noResultsMessage.style.display = 'none';
        }

        filtered.forEach(res => {
            const card = document.createElement('article');
            card.className = 'res-card';

            const tagsHtml = res.tags.map(t => `<span class="res-tag">${t}</span>`).join('');
            const costHtml = res.cost ? `<span class="res-tag" style="background-color: var(--sage-light); color: var(--sage-dark);">${res.cost}</span>` : '';
            const hoursHtml = res.hours ? `<span>Hours: ${res.hours}</span>` : '';
            const verifiedHtml = res.lastVerified ? `<span>Last checked: ${res.lastVerified}</span>` : '';

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
                    <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="res-link">${res.linkText} &rarr;</a>
                </div>
            `;
            resourceGrid.appendChild(card);
        });
    }

    // Render Study Spots Cards (Defaults to Open Late)
    function renderStudySpots() {
        studySpotsGrid.innerHTML = '';

        const filteredSpots = STUDY_SPOTS.filter(spot => {
            if (currentStudyFilter === 'all') return true;
            if (currentStudyFilter === 'quiet') return spot.vibe === 'quiet';
            if (currentStudyFilter === 'social') return spot.vibe === 'social';
            if (currentStudyFilter === 'indoor') return spot.type === 'indoor';
            if (currentStudyFilter === 'outdoor') return spot.type === 'outdoor';
            if (currentStudyFilter === 'openLate') return spot.openLate;
            if (currentStudyFilter === 'outlets') return spot.outlets;
            if (currentStudyFilter === 'coffeeNearby') return spot.coffeeNearby;
            return true;
        });

        filteredSpots.forEach(spot => {
            const card = document.createElement('article');
            card.className = 'res-card';

            const typeTag = `<span class="res-tag">${spot.type}</span>`;
            const vibeTag = `<span class="res-tag">${spot.vibe}</span>`;
            const lateTag = spot.openLate ? `<span class="res-tag" style="background-color: #d1fae5; color: #065f46;">open late</span>` : '';
            const outletTag = spot.outlets ? `<span class="res-tag">outlets</span>` : '';
            const coffeeTag = spot.coffeeNearby ? `<span class="res-tag">coffee nearby</span>` : '';

            card.innerHTML = `
                <div>
                    <div class="res-header-meta">
                        <span class="res-category">Study Spot Nook</span>
                        <span class="resource-type-indicator">Student Pick</span>
                    </div>
                    <h3 class="res-title">${spot.name}</h3>
                    <p class="res-desc">Hours: ${spot.hours}</p>
                </div>
                <div class="res-footer">
                    <div class="res-tags-list">
                        ${typeTag}
                        ${vibeTag}
                        ${lateTag}
                        ${outletTag}
                        ${coffeeTag}
                    </div>
                    <a href="${spot.url || 'https://www.reddit.com/r/UTAustin/s/QfrSBELTXw'}" target="_blank" rel="noopener noreferrer" class="res-link">Source &rarr;</a>
                </div>
            `;
            studySpotsGrid.appendChild(card);
        });
    }

    // Selector Card Clicks
    selectorCards.forEach(card => {
        card.addEventListener('click', () => {
            selectorCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentCategory = card.getAttribute('data-category');
            
            currentTag = 'all';
            filterChips.forEach(chip => {
                chip.classList.toggle('active', chip.getAttribute('data-tag') === 'all');
            });

            renderResources();

            if (currentCategory === 'study') {
                const studySection = document.getElementById('study-section');
                if (studySection) studySection.scrollIntoView({ behavior: 'smooth' });
            } else {
                const libraryEl = document.getElementById('library');
                if (libraryEl) libraryEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Tag Filter Clicks
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentTag = chip.getAttribute('data-tag');
            renderResources();
        });
    });

    // Study Spot Filter Clicks
    studyFilterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            studyFilterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentStudyFilter = chip.getAttribute('data-study-filter');
            renderStudySpots();
        });
    });

    // Clear Filters Button
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            currentCategory = 'all';
            currentTag = 'all';
            searchInput.value = '';

            selectorCards.forEach(c => c.classList.remove('active'));
            filterChips.forEach(chip => {
                chip.classList.toggle('active', chip.getAttribute('data-tag') === 'all');
            });

            renderResources();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderResources();
        });
    }

    renderResources();
    renderStudySpots();
});
    }

    // Search Input Listener
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderResources();
        });
    }

    // Initial Renders
    renderResources();
    renderStudySpots();
});
