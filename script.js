/**
 * ================================================================
 * FUTURE MAINTAINERS:
 * MOST RESOURCE UPDATES HAPPEN IN THE ARRAYS BELOW.
 * YOU GENERALLY DO NOT NEED TO EDIT THE HTML.
 * 
 * HOW TO ADD A RESOURCE:
 * Copy one curly-bracket object block from WELLNESS_RESOURCES, paste it,
 * and edit its title, description, url, tags, and category.
 * 
 * HOW TO REMOVE A RESOURCE:
 * Delete its object block from the array.
 * 
 * HOW TO UPDATE A LINK OR VERIFIED DATE:
 * Change the string values for url or lastVerified.
 * ================================================================
 */

const SITE_CONFIG = {
    lastSiteReview: "September 2026",
    websiteFeedbackUrl: "https://forms.gle/pxBk7z8dh8vFdkC1A"
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
        tags: ["on campus", "virtual", "included for students", "sports", "animals", "art"],
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
        tags: ["virtual", "included for students", "30+ min"],
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
        tags: ["5 min", "virtual", "included for students"],
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
        tags: ["15 min", "virtual", "free"],
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
        tags: ["5 min", "15 min", "virtual", "free"],
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
        section: "Movement",
        description: "Comprehensive beginner-friendly yoga playlist for flexibility and physical restoration.",
        url: "https://youtube.com/playlist?list=PLJvDaXFqvSLOqmNzMoGOgKTxa1PqM1UIL&si=3jtoalH_ujjcDh38",
        linkText: "Watch Playlist",
        tags: ["30+ min", "virtual", "free", "sports"],
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
        section: "Movement",
        description: "Gentle restorative flows designed to open tight hips and ease lower back tension.",
        url: "https://youtube.com/playlist?list=PLZB1-W3Nj5KElH4VILggKdPd4glH-YBjm&si=JNp2rNAgSOYMAE-7",
        linkText: "Watch Playlist",
        tags: ["15 min", "virtual", "free", "sports"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Student recommendation"
    },
    {
        id: "at-home-workouts",
        title: "Short At-Home Workouts",
        category: "move",
        resourceType: "Student Pick",
        section: "Movement",
        description: "Quick, beginner-friendly morning routines to wake up your body and get blood pumping.",
        url: "https://youtu.be/9g4z0gFlfpA",
        linkText: "Watch Workout",
        tags: ["15 min", "virtual", "free"],
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
        section: "Movement & Recreation",
        description: "Join friendly recreational leagues and team tournaments coordinated across campus.",
        url: "https://www.utrecsports.org/intramurals",
        linkText: "View Intramurals",
        tags: ["on campus", "included for students"],
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
        section: "Movement & Recreation",
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
        section: "Movement & Recreation",
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
        section: "Movement & Recreation",
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
        id: "ut-running-club",
        title: "UT Running Club",
        category: "move",
        resourceType: "UT Resource",
        section: "Running & Training",
        description: "Official RecSports student club offering running training, structured groups, and competitive collegiate competitions for students.",
        url: "https://www.utrecsports.org/sport-clubs/sport/running-club",
        linkText: "Join Club",
        tags: ["outdoors", "on campus", "included for students", "sports", "animals"],
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
        section: "Community & Coffee Run",
        description: "Community coffee run tour for everyone every Sunday. Connect with local runners and coffee lovers!",
        url: "https://instagram.com/runthecoffeetour",
        linkText: "Instagram @runthecoffeetour",
        tags: ["outdoors", "off campus", "free"],
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
        section: "Running Group",
        description: "6 AM morning women-led run group. Build community and stamina bright and early.",
        url: "https://thelooprunning.com/pages/community",
        linkText: "Visit Community Page",
        tags: ["outdoors", "off campus", "free", "5 min", "sports"],
        cost: "Free",
        hours: "6 AM mornings",
        lastVerified: "2026-09-09",
        source: "Community organization"
    },
    {
        id: "campus-pickleball",
        title: "Campus Pickleball (RecSports)",
        category: "connect",
        resourceType: "UT Resource",
        section: "Pickleball & Sports",
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
        id: "austin-pickleball-map",
        title: "Austin City Pickleball Courts",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Pickleball Courts Map",
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
        id: "bennu-coffee",
        title: "Bennu Coffee Highland",
        category: "study",
        resourceType: "Community Resource",
        section: "Coffee Shop Recommendation",
        description: "Student recommendation for studying off-campus. Open 24/7 with plenty of power outlets for longer study sessions.",
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
        description: "Off-campus coffee shop near UT for a change of scenery while studying.",
        url: "https://mediciroasting.com/",
        linkText: "View Medici",
        tags: ["off campus"],
        cost: "Paid",
        hours: "7 AM–7 PM daily",
        lastVerified: "2026-09-09",
        source: "Official business website"
    },
    {
        id: "flightpath-coffeehouse",
        title: "Flightpath Coffeehouse",
        category: "study",
        resourceType: "Community Resource",
        section: "Coffee Shop Recommendation",
        description: "Hyde Park coffeehouse with a quieter study-friendly feel, outdoor seating, and access to power outlets.",
        url: "https://flightpathcoffeehouse.com/",
        linkText: "View Flightpath",
        tags: ["off campus", "outlets"],
        cost: "Paid",
        hours: "7 AM–7 PM daily",
        lastVerified: "2026-09-10",
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
        id: "crisis-text-line",
        title: "Crisis Text Line",
        category: "support",
        resourceType: "National Resource",
        section: "Crisis Support",
        description: "Free, confidential, 24/7 text-based support. Text HOME to 741741 in the U.S. to connect with a trained volunteer Crisis Counselor.",
        url: "https://www.crisistextline.org/",
        linkText: "Visit Crisis Text Line",
        tags: ["virtual", "free"],
        cost: "Free",
        hours: "24/7",
        lastVerified: "2026-09-10",
        source: "Official organization"
    },
    {
        id: "austin-sand-volleyball",
        title: "Austin Sand Volleyball Courts",
        category: "move",
        resourceType: "Community Resource",
        section: "Community Sports",
        description: "Find more than 45 public sand volleyball courts around Austin. Most are free to play; bring friends or use the city directory to find a court near you.",
        url: "https://www.austintexas.gov/parks/sand-volleyball-courts",
        linkText: "Find Volleyball Courts",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Most courts free",
        hours: "Varies by park",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "austin-soccer",
        title: "Austin Public Soccer Fields & Mini-Pitches",
        category: "connect",
        resourceType: "Community Resource",
        section: "Community Sports",
        description: "City directory of public soccer fields, mini-pitches, multipurpose fields, and adult community soccer organizations around Austin.",
        url: "https://www.austintexas.gov/parks/programs/soccer",
        linkText: "Explore Soccer Options",
        tags: ["outdoors", "off campus", "free", "sports"],
        cost: "Public fields; league costs vary",
        hours: "Varies by location",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "art-garage",
        title: "The Art Garage",
        category: "break",
        resourceType: "Community Resource",
        section: "Make Something",
        description: "Low-pressure, walk-in creative time with paint-your-own pottery, mosaics, fused glass, classes, and workshops at three Austin locations.",
        url: "https://www.theartgarageaustin.com/",
        linkText: "Explore The Art Garage",
        tags: ["off campus", "30+ min", "art"],
        cost: "Paid",
        hours: "Open 7 days; hours vary by day",
        lastVerified: "2026-09-10",
        source: "Official business website"
    },
    {
        id: "austin-creative-reuse",
        title: "Austin Creative Reuse",
        category: "break",
        resourceType: "Community Resource",
        section: "Make Something",
        description: "Affordable donated art and craft materials for making something at home, plus community events, Make & Takes, reuse markets, and volunteering.",
        url: "https://austincreativereuse.org/",
        linkText: "Browse Creative Reuse",
        tags: ["off campus", "30+ min", "art"],
        cost: "Low-cost supplies; some free events",
        hours: "Tue–Sat 11 AM–7 PM; Sun 12–6 PM; Mon closed",
        lastVerified: "2026-09-10",
        source: "Official organization website"
    },
    {
        id: "purrfecto-cat-lounge",
        title: "Purr-fecto Cat Lounge",
        category: "break",
        resourceType: "Community Resource",
        section: "Spend Time With Animals",
        description: "Book time to relax and socialize with adoptable rescue cats on South Lamar. The lounge also hosts occasional creative and wellness events with cats.",
        url: "https://purrfectocatlounge.com/",
        linkText: "Visit Purr-fecto",
        tags: ["off campus", "30+ min", "animals"],
        cost: "Paid",
        hours: "Mon, Wed–Thu 11 AM–7 PM; Fri–Sun 11 AM–8 PM; Tue closed",
        lastVerified: "2026-09-10",
        source: "Official business website"
    },
    {
        id: "austin-animal-center-volunteer",
        title: "Volunteer with Austin Animal Center",
        category: "connect",
        resourceType: "Community Resource",
        section: "Spend Time With Animals",
        description: "Get more involved with shelter pets through formal volunteer roles such as cat enrichment, dog enrichment, adoption support, and animal socialization.",
        url: "https://www.austintexas.gov/animal-services/volunteer",
        linkText: "See Volunteer Options",
        tags: ["off campus", "30+ min", "free", "animals", "volunteer"],
        cost: "Free",
        hours: "Volunteer onboarding and shifts vary",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "visit-austin-animal-center",
        title: "Visit Austin Animal Center",
        category: "break",
        resourceType: "Community Resource",
        section: "Spend Time With Animals",
        description: "Drop in during open shelter hours to browse adoptable cats and dogs and spend some low-pressure time around animals. Check the shelter's current visitor and adoption hours before going.",
        url: "https://www.austintexas.gov/services/adopt-pet",
        linkText: "Plan a Shelter Visit",
        tags: ["off campus", "30+ min", "free", "animals", "drop in"],
        cost: "Free to visit",
        hours: "Walk-in adoption and pet reclaim generally 11 AM–7 PM daily",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "austin-animal-center-doggie-day-out",
        title: "Doggie Day Out & Weekend Sleepovers",
        category: "connect",
        resourceType: "Community Resource",
        section: "Spend Time With Animals",
        description: "Spend a few hours or a weekend with an eligible Austin Animal Center dog through the shelter's community outing and sleepover programs. Staff help match participants with an appropriate dog.",
        url: "https://www.austintexas.gov/animal-services/special-programs",
        linkText: "See Dog Outing Programs",
        tags: ["off campus", "30+ min", "free", "animals", "dogs", "outing"],
        cost: "Free",
        hours: "Program days and pickup times vary; check current details",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "austin-pets-alive-volunteer",
        title: "Austin Pets Alive! — Spend Time Helping Pets",
        category: "connect",
        resourceType: "Community Resource",
        section: "Spend Time With Animals",
        description: "Volunteer with cats or dogs through shelter enrichment, walking, adoption support, events, fostering, and other roles. A good option if being around animals helps you decompress and you want a more ongoing way to connect.",
        url: "https://www.austinpetsalive.org/volunteer",
        linkText: "Explore APA! Volunteer Roles",
        tags: ["off campus", "30+ min", "animals", "volunteer"],
        cost: "Free to volunteer",
        hours: "Opportunities and requirements vary by role",
        lastVerified: "2026-09-10",
        source: "Official organization website"
    },
    {
        id: "barton-springs",
        title: "Barton Springs Pool",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Get Outside",
        description: "Spring-fed outdoor swimming in Zilker Park. The water stays about 68–70°F year-round; check current hours, admission, parking, and closures before going.",
        url: "https://www.austintexas.gov/services/visit-barton-springs-pool",
        linkText: "Plan a Barton Springs Visit",
        tags: ["outdoors", "off campus", "30+ min", "sports"],
        cost: "Paid admission during fee season",
        hours: "Generally 5 AM–10 PM; Thursday cleaning closure 9 AM–7 PM",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "barton-creek-greenbelt",
        title: "Barton Creek Greenbelt",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Get Outside",
        description: "More than 12 miles of trails for walking, hiking, biking, and getting away from the city for a while. The City page includes trailheads, maps, parking, and current-use guidance.",
        url: "https://www.austintexas.gov/parks/locations/barton-creek-greenbelt",
        linkText: "Explore the Greenbelt",
        tags: ["outdoors", "off campus", "free", "30+ min", "sports"],
        cost: "Free; some parking areas may charge",
        hours: "Park facilities close after 10 PM",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "zilker-park",
        title: "Zilker Park",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Get Outside",
        description: "A 350+ acre park for open space, trails, recreation, Barton Springs, gardens, and signature Austin events. Check the City page for park access and event impacts.",
        url: "https://www.austintexas.gov/parks/locations/zilker-metropolitan-park",
        linkText: "Explore Zilker Park",
        tags: ["outdoors", "off campus", "free", "30+ min", "sports"],
        cost: "Park access free; some activities/events cost extra",
        hours: "Generally 5 AM–10 PM unless otherwise posted",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "austin-events",
        title: "What's Happening Around Austin?",
        category: "connect",
        resourceType: "Community Resource",
        section: "Local Events",
        description: "Browse the City of Austin's current events calendar for public events, including events at Zilker and other parks and cultural spaces.",
        url: "https://www.austintexas.gov/ace/events",
        linkText: "Browse Austin Events",
        tags: ["off campus", "outdoors"],
        cost: "Free and paid events",
        hours: "Updated throughout the year",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "relaxation-science",
        title: "Slow Breathing & Progressive Relaxation",
        category: "break",
        resourceType: "Evidence-Informed",
        section: "Reset Your System",
        description: "A science-grounded overview of slow breathing, progressive muscle relaxation, guided imagery, and other techniques that can help elicit the body's relaxation response. Think skills, not 'nervous-system hacks.'",
        url: "https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know",
        linkText: "See What the Science Says",
        tags: ["5 min", "15 min", "virtual", "free"],
        cost: "Free",
        hours: "Anytime",
        lastVerified: "2026-09-10",
        source: "NIH / NCCIH"
    },
    {
        id: "cold-water-evidence",
        title: "Cold Water: What We Actually Know",
        category: "break",
        resourceType: "Evidence-Informed",
        section: "Reset Your System",
        description: "Cold-water immersion causes real acute physiological changes, but evidence for broad mental-health or 'nervous-system reset' claims is still limited and mixed. Use this as context—not as a treatment recommendation.",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0317615",
        linkText: "Read the Evidence Review",
        tags: ["virtual", "free"],
        cost: "Free",
        hours: "Anytime",
        lastVerified: "2026-09-10",
        source: "Peer-reviewed systematic review"
    },
    {
        id: "bob-ross",
        title: "Bob Ross Playlist",
        category: "break",
        resourceType: "Student Pick",
        section: "Fun & Breaks",
        description: "Calming, joyful painting sessions to unwind and take a mental break from studying.",
        url: "https://youtube.com/playlist?list=PLAEQD0ULngi67rwmhrkNjMZKvyCReqDV4&si=j3dVPF131UabwOOL",
        linkText: "Watch Playlist",
        tags: ["30+ min", "virtual", "free", "art"],
        cost: "Free",
        hours: "",
        lastVerified: "2026-09-09",
        source: "Student recommendation"
    },

    {
        id: "blanton-low-pressure",
        title: "Wander the Blanton Museum of Art",
        category: "break",
        resourceType: "Low-Pressure Activity",
        section: "Low-Pressure Activities",
        description: "Take a quiet, self-paced walk through the Blanton’s galleries on the UT Austin campus. UT Austin students get free admission, and Tuesdays are free for everyone.",
        url: "https://blantonmuseum.org/",
        linkText: "Visit the Blanton",
        tags: ["on campus", "30+ min", "art", "quiet", "free for UT students", "paid option"],
        cost: "FREE with UT Austin ID; FREE for everyone Tuesdays; otherwise paid admission",
        hours: "Tue–Fri 10 AM–5 PM; Sat 10 AM–8 PM; Sun 10 AM–5 PM",
        lastVerified: "2026-09-10",
        source: "Official museum website"
    },
    {
        id: "elisabet-ney-low-pressure",
        title: "Elisabet Ney Museum",
        category: "break",
        resourceType: "Low-Pressure Activity",
        section: "Low-Pressure Activities",
        description: "A small historic Hyde Park art museum and grounds that can make for a slower-paced outing. Important: the museum is currently closed for renovations and expects to reopen in Spring 2027; its programs and events may still be worth checking.",
        url: "https://www.austintexas.gov/ney",
        linkText: "Check Reopening & Programs",
        tags: ["off campus", "art", "quiet", "free", "temporarily closed"],
        cost: "FREE admission when open",
        hours: "Temporarily closed for renovations; reopening expected Spring 2027",
        lastVerified: "2026-09-10",
        source: "City of Austin"
    },
    {
        id: "harry-ransom-center-low-pressure",
        title: "Browse the Harry Ransom Center",
        category: "break",
        resourceType: "Low-Pressure Activity",
        section: "Low-Pressure Activities",
        description: "Browse rotating exhibitions, manuscripts, photography, books, and other cultural collections at your own pace on the UT campus. Admission to the exhibition galleries is free.",
        url: "https://www.hrc.utexas.edu/visit/",
        linkText: "Plan a Free Visit",
        tags: ["on campus", "30+ min", "art", "quiet", "free"],
        cost: "FREE",
        hours: "Galleries Tue–Fri 10 AM–5 PM; Sat–Sun 12–5 PM",
        lastVerified: "2026-09-10",
        source: "Harry Ransom Center"
    },
    {
        id: "oddwood-low-pressure",
        title: "Games & Pizza at Oddwood",
        category: "break",
        resourceType: "Low-Pressure Activity",
        section: "Low-Pressure Activities",
        description: "Keep it casual with arcade/video games and pizza at Oddwood Brewing. You can make the activity itself low-cost and decide whether you want to buy food or drinks.",
        url: "https://www.oddwoodales.com/",
        linkText: "Check Oddwood",
        tags: ["off campus", "30+ min", "games", "social", "free activity", "paid option"],
        cost: "FREE game options; food & drinks cost extra",
        hours: "Check current hours before going",
        lastVerified: "2026-09-10",
        source: "Official business website"
    },
    {
        id: "pins-mechanical-low-pressure",
        title: "Play at Pins Mechanical Co.",
        category: "break",
        resourceType: "Low-Pressure Activity",
        section: "Low-Pressure Activities",
        description: "Pick your budget: classic arcade games, patio pong, Hookie, bocce, and Giant Jenga are free; ping pong is 25¢, pinball and foosball are $1, and duckpin bowling is paid per game. No reservation is needed for regular activities.",
        url: "https://www.pinsbar.com/locations/austin",
        linkText: "See Austin Games & Prices",
        tags: ["off campus", "30+ min", "games", "social", "free activity", "paid option", "open late"],
        cost: "FREE + PAID options: many games free; duckpin bowling $8–$9/person/game; pinball $1/play; ping pong 25¢",
        hours: "Mon–Thu 4 PM–12 AM; Fri 12 PM–2 AM; Sat 11 AM–2 AM; Sun 11 AM–12 AM",
        lastVerified: "2026-09-10",
        source: "Official business website"
    },

    {
        id: "apl-yoga-meditation",
        title: "Free Yoga & Meditation at Austin Public Library",
        category: "move",
        resourceType: "Community Yoga",
        section: "Yoga Options",
        description: "Browse free yoga and guided meditation classes hosted across Austin Public Library branches. The calendar includes options such as beginner-friendly yoga, bilingual yoga, chair yoga, and recurring adult classes, so you can pick a location and date that works for you.",
        url: "https://library.austintexas.gov/events/yoga-meditation-classes",
        linkText: "See Upcoming Free Classes",
        tags: ["off campus", "30+ min", "free", "yoga", "community", "in person", "sports"],
        cost: "FREE",
        hours: "Dates, times, and library branches vary",
        lastVerified: "2026-09-10",
        source: "Austin Public Library"
    },
    {
        id: "zbg-rose-shine-yoga",
        title: "Rose & Shine Yoga at Zilker Botanical Garden",
        category: "move",
        resourceType: "Community Yoga",
        section: "Yoga Options",
        description: "An all-levels, 60-minute yoga class in the garden with a gentle, somatic approach. The September 26 class is free with garden admission; use the event page to register and check future dates.",
        url: "https://zilkergarden.org/event/rose-and-shine-free-yoga-in-the-garden-2/",
        linkText: "See Rose & Shine",
        tags: ["off campus", "outdoors", "30+ min", "yoga", "community", "paid option", "sports"],
        cost: "Yoga class FREE with Garden admission",
        hours: "Current class: Sept. 26, 10–11 AM; check for future dates",
        lastVerified: "2026-09-10",
        source: "Zilker Botanical Garden Conservancy"
    },
    {
        id: "apf-habitat-summer-yoga",
        title: "Fitness in the Park — Summer Yoga with Habitat",
        category: "move",
        resourceType: "Seasonal Community Yoga",
        section: "Yoga Options",
        description: "Austin Parks Foundation and Habitat Retreats offer a free, all-levels sunrise yoga series at Zilker Park, followed by an optional Barton Springs plunge. The 2026 summer series ran Fridays through September 4, so this card links to the program page for future seasonal dates rather than presenting it as currently active.",
        url: "https://austinparks.org/events/fitness-in-the-park-summer-yoga-series-with-habitat/",
        linkText: "Check Future Summer Series",
        tags: ["off campus", "outdoors", "30+ min", "free", "yoga", "community", "seasonal", "sports"],
        cost: "FREE when offered; RSVP required",
        hours: "2026 series ended Sept. 4; check for future dates",
        lastVerified: "2026-09-10",
        source: "Austin Parks Foundation"
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
        name: "Bennu Coffee Highland",
        type: "indoor",
        vibe: "social",
        hours: "24 hours / 7 days",
        openLate: true,
        outlets: true,
        wifi: true,
        coffeeShop: true,
        patio: false,
        coffeeNearby: true,
        campus: false,
        url: "https://bennucoffee.com/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Flightpath Coffeehouse",
        type: "indoor",
        vibe: "quiet",
        hours: "7 AM–7 PM daily",
        openLate: false,
        outlets: true,
        wifi: true,
        coffeeShop: true,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://flightpathcoffeehouse.com/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Epoch Coffee — North Loop",
        type: "indoor",
        vibe: "social",
        hours: "24 hours / 7 days",
        openLate: true,
        outlets: true,
        wifi: true,
        coffeeShop: true,
        patio: false,
        coffeeNearby: true,
        campus: false,
        url: "https://epochcoffee.com/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Carpenter Coffee Bar",
        type: "indoor",
        vibe: "social",
        hours: "Check current hours",
        openLate: false,
        outlets: true,
        wifi: true,
        coffeeShop: true,
        patio: false,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/carpenter-hotel/10209/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Mozart's Coffee Roasters",
        type: "outdoor",
        vibe: "social",
        hours: "Check current hours",
        openLate: false,
        outlets: false,
        wifi: true,
        coffeeShop: true,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/mozarts-coffee-roasters/4332/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Palomino Coffee",
        type: "indoor",
        vibe: "quiet",
        hours: "Check current hours",
        openLate: false,
        outlets: false,
        wifi: false,
        coffeeShop: true,
        patio: false,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/palomino-coffee/15968/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Sa-Tén Coffee & Eats — Canopy",
        type: "indoor",
        vibe: "quiet",
        hours: "Check current hours",
        openLate: false,
        outlets: true,
        wifi: false,
        coffeeShop: true,
        patio: false,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/sa-t%C3%A9n-coffee-%26-eats-%28canopy%29/8100/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Ani's Day & Night",
        type: "indoor",
        vibe: "social",
        hours: "Check current hours",
        openLate: false,
        outlets: true,
        wifi: true,
        coffeeShop: true,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/anis-day-and-night/13434/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Better Half Coffee & Cocktails",
        type: "indoor",
        vibe: "social",
        hours: "Open until 10 PM or later most days; check current hours",
        openLate: true,
        outlets: false,
        wifi: false,
        coffeeShop: true,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/better-half-coffee-%26-cocktails/9901/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Wright Bros. Brew & Brew",
        type: "indoor",
        vibe: "social",
        hours: "Check current hours",
        openLate: false,
        outlets: true,
        wifi: true,
        coffeeShop: true,
        patio: false,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/wright-bros-brew-%26-brew/8155/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Cosmic Coffee + Beer Garden",
        type: "outdoor",
        vibe: "social",
        hours: "Check current hours",
        openLate: false,
        outlets: false,
        wifi: false,
        coffeeShop: true,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/cosmic-coffee-%2B-beer-garden/10063/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Community Garden",
        type: "indoor",
        vibe: "quiet",
        hours: "Laptop-friendly Tue–Fri 9 AM–5 PM",
        openLate: false,
        outlets: true,
        wifi: false,
        coffeeShop: true,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/community-garden/14130/",
        lastVerified: "2026-09-10"
    },
    {
        name: "The Meteor",
        type: "indoor",
        vibe: "social",
        hours: "Check current hours",
        openLate: false,
        outlets: false,
        wifi: false,
        coffeeShop: true,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/the-meteor/10677/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Spokesman",
        type: "indoor",
        vibe: "social",
        hours: "Check current hours",
        openLate: false,
        outlets: true,
        wifi: false,
        coffeeShop: true,
        patio: false,
        coffeeNearby: true,
        campus: false,
        url: "https://www.austintexas.org/listings/spokesman/9614/",
        lastVerified: "2026-09-10"
    },
    {
        name: "Austin Central Library",
        type: "indoor",
        vibe: "quiet",
        hours: "Mon–Thu 9 AM–8 PM; Fri–Sat 9 AM–5 PM; Sun 12–5 PM",
        openLate: false,
        outlets: true,
        wifi: true,
        coffeeShop: false,
        patio: true,
        coffeeNearby: true,
        campus: false,
        url: "https://library.austintexas.gov/central",
        lastVerified: "2026-09-10"
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


/**
 * Contextual filters shown only after a student chooses a main need.
 * This keeps the homepage clean while still allowing specific filtering.
 */
const RESOURCE_FILTERS = {
    all: [
        { label: "Any", type: "all", value: "all" },
        { label: "Sports & movement", type: "tag", value: "sports" },
        { label: "Pets & animals", type: "tag", value: "animals" },
        { label: "Art & creativity", type: "tag", value: "art" },
        { label: "5 min", type: "tag", value: "5 min" },
        { label: "15 min", type: "tag", value: "15 min" },
        { label: "30+ min", type: "tag", value: "30+ min" },
        { label: "On campus", type: "tag", value: "on campus" },
        { label: "Off campus", type: "tag", value: "off campus" },
        { label: "Virtual", type: "tag", value: "virtual" },
        { label: "Outdoors", type: "tag", value: "outdoors" },
        { label: "Open late", type: "tag", value: "open late" },
        { label: "Included for students", type: "tag", value: "included for students" }
    ],
    support: [
        { label: "Any support", type: "all", value: "all" },
        { label: "Counseling & groups", type: "section", value: "Mental Health / Support" },
        { label: "Immediate / crisis", type: "section", value: "Crisis Support" },
        { label: "24/7", type: "hours", value: "24/7" },
        { label: "Virtual", type: "tag", value: "virtual" },
        { label: "Included for students", type: "tag", value: "included for students" }
    ],
    study: [
        { label: "Any study resource", type: "all", value: "all" },
        { label: "Open late", type: "tag", value: "open late" },
        { label: "Coffee shops", type: "section", value: "Coffee Shop Recommendation" },
        { label: "Outlets", type: "tag", value: "outlets" },
        { label: "Off campus", type: "tag", value: "off campus" }
    ],
    move: [
        { label: "Any movement", type: "all", value: "all" },
        { label: "At home / virtual", type: "tag", value: "virtual" },
        { label: "Campus recreation", type: "section", value: "Movement & Recreation" },
        { label: "Yoga options", type: "section", value: "Yoga Options" },
        { label: "Running", type: "section", value: "Running & Training" },
        { label: "Community sports", type: "section", value: "Community Sports" },
        { label: "Outdoors", type: "tag", value: "outdoors" },
        { label: "Included for students", type: "tag", value: "included for students" }
    ],
    outdoors: [
        { label: "Any outdoor idea", type: "all", value: "all" },
        { label: "Parks & trails", type: "section", value: "Get Outside" },
        { label: "Courts", type: "section", value: "Pickleball Courts Map" },
        { label: "Free", type: "tag", value: "free" },
        { label: "30+ min", type: "tag", value: "30+ min" }
    ],
    break: [
        { label: "Any break", type: "all", value: "all" },
        { label: "Sports & movement", type: "tag", value: "sports" },
        { label: "Pets & animals", type: "tag", value: "animals" },
        { label: "Art & creativity", type: "tag", value: "art" },
        { label: "Mindfulness", type: "section", value: "Mindfulness" },
        { label: "Reset your system", type: "section", value: "Reset Your System" },
        { label: "Make something", type: "section", value: "Make Something" },
        { label: "Spend time with animals", type: "section", value: "Spend Time With Animals" },
        { label: "Animal volunteering", type: "tag", value: "volunteer" },
        { label: "Low-pressure activities", type: "section", value: "Low-Pressure Activities" },
        { label: "Free options", type: "tag", value: "free" },
        { label: "Free + paid options", type: "tag", value: "paid option" },
        { label: "Fun & low-pressure", type: "section", value: "Fun & Breaks" },
        { label: "5 min", type: "tag", value: "5 min" },
        { label: "15 min", type: "tag", value: "15 min" },
        { label: "30+ min", type: "tag", value: "30+ min" }
    ],
    connect: [
        { label: "Any connection", type: "all", value: "all" },
        { label: "Sports & movement", type: "tag", value: "sports" },
        { label: "Pets & animals", type: "tag", value: "animals" },
        { label: "Art & creativity", type: "tag", value: "art" },
        { label: "Running & coffee", type: "section", value: "Community & Coffee Run" },
        { label: "Sports", type: "section-multi", value: ["Pickleball & Sports", "Community Sports"] },
        { label: "Animals", type: "section", value: "Spend Time With Animals" },
        { label: "Animal volunteering", type: "tag", value: "volunteer" },
        { label: "Local events", type: "section", value: "Local Events" },
        { label: "Free", type: "tag", value: "free" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    let currentCategory = null;
    let currentFilter = { type: "all", value: "all" };
    let currentStudyFilter = 'all';

    const resourceGrid = document.getElementById('resourceGrid');
    const studySpotsGrid = document.getElementById('studySpotsGrid');
    const searchInput = document.getElementById('searchInput');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const resultCount = document.getElementById('resultCount');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const resourcePrompt = document.getElementById('resourcePrompt');
    const contextualFilterToolbar = document.getElementById('contextualFilterToolbar');
    const contextualFilterHeading = document.getElementById('contextualFilterHeading');
    const dynamicFilterChips = document.getElementById('dynamicFilterChips');
    const selectorCards = document.querySelectorAll('.selector-card');
    const studyFilterChips = document.querySelectorAll('.study-filter-chip');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNav = document.getElementById('primary-nav');
    const footerReviewDate = document.getElementById('footerReviewDate');

    if (footerReviewDate) {
        footerReviewDate.textContent = `Last site review: ${SITE_CONFIG.lastSiteReview}`;
    }

    document.querySelectorAll('[data-feedback-link]').forEach(link => {
        link.href = SITE_CONFIG.websiteFeedbackUrl;
    });

    if (mobileMenuToggle && primaryNav) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
            primaryNav.classList.toggle('active');
        });

        primaryNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                primaryNav.classList.remove('active');
            });
        });
    }

    function formatVerifiedDate(value) {
        if (!value) return "";
        const [year, month, day] = value.split("-").map(Number);
        if (!year || !month) return value;
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            year: "numeric"
        }).format(new Date(year, month - 1, day || 1));
    }

    function matchesSpecificFilter(res) {
        const { type, value } = currentFilter;
        if (type === "all") return true;
        if (type === "tag") return (res.tags || []).includes(value);
        if (type === "section") return res.section === value;
        if (type === "section-multi") return value.includes(res.section);
        if (type === "hours") return res.hours === value;
        return true;
    }

    function renderContextualFilters(category) {
        dynamicFilterChips.innerHTML = '';
        const options = RESOURCE_FILTERS[category] || RESOURCE_FILTERS.all;

        const headings = {
            all: "Narrow all ideas",
            support: "What kind of support?",
            study: "What kind of study option?",
            move: "How do you want to move?",
            outdoors: "What sounds good outside?",
            break: "What kind of break?",
            connect: "How do you want to connect?"
        };

        contextualFilterHeading.textContent = headings[category] || "Narrow it down";

        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `filter-chip${index === 0 ? ' active' : ''}`;
            button.textContent = option.label;

            button.addEventListener('click', () => {
                dynamicFilterChips.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
                button.classList.add('active');
                currentFilter = { type: option.type, value: option.value };
                renderResources();
            });

            dynamicFilterChips.appendChild(button);
        });

        contextualFilterToolbar.hidden = false;
    }

    function resourceSearchString(res) {
        return [
            res.title,
            res.description,
            res.section,
            res.resourceType,
            res.cost,
            res.hours,
            res.source,
            ...(res.tags || [])
        ].filter(Boolean).join(' ').toLowerCase();
    }

    function renderResources() {
        const query = searchInput.value.toLowerCase().trim();
        const hasSearch = query.length > 0;
        const hasCategoryChoice = currentCategory !== null;

        if (!hasCategoryChoice && !hasSearch) {
            resourceGrid.innerHTML = '';
            resourceGrid.hidden = true;
            resourcePrompt.hidden = false;
            noResultsMessage.hidden = true;
            resultCount.textContent = '';
            contextualFilterToolbar.hidden = true;
            return;
        }

        const filtered = WELLNESS_RESOURCES.filter(res => {
            const categoryToUse = currentCategory || 'all';
            const matchesCategory = categoryToUse === 'all' || res.category === categoryToUse;
            const matchesFilter = matchesSpecificFilter(res);
            const matchesSearch = !hasSearch || resourceSearchString(res).includes(query);
            return matchesCategory && matchesFilter && matchesSearch;
        });

        resourcePrompt.hidden = true;
        resourceGrid.hidden = false;
        resultCount.textContent = `${filtered.length} idea${filtered.length === 1 ? '' : 's'} found`;

        if (filtered.length === 0) {
            resourceGrid.innerHTML = '';
            noResultsMessage.hidden = false;
            return;
        }

        noResultsMessage.hidden = true;
        resourceGrid.innerHTML = '';

        filtered.forEach(res => {
            const card = document.createElement('article');
            card.className = 'res-card';

            const tagsHtml = (res.tags || []).map(t => `<span class="res-tag">${t}</span>`).join('');
            const costHtml = res.cost ? `<span class="res-tag res-tag-cost">${res.cost}</span>` : '';
            const hoursHtml = res.hours ? `<span>Hours: ${res.hours}</span>` : '';
            const verifiedHtml = res.lastVerified ? `<span>Last checked: ${formatVerifiedDate(res.lastVerified)}</span>` : '';
            const externalAttrs = res.url && (res.url.startsWith('tel:') || res.url.startsWith('sms:'))
                ? ''
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
                    <a href="${res.url}"${externalAttrs} class="res-link">${res.linkText} &rarr;</a>
                </div>
            `;
            resourceGrid.appendChild(card);
        });
    }

    function renderStudySpots() {
        if (!studySpotsGrid) return;
        studySpotsGrid.innerHTML = '';

        const filteredSpots = STUDY_SPOTS.filter(spot => {
            if (currentStudyFilter === 'all') return true;
            if (currentStudyFilter === 'quiet') return spot.vibe === 'quiet';
            if (currentStudyFilter === 'social') return spot.vibe === 'social';
            if (currentStudyFilter === 'indoor') return spot.type === 'indoor';
            if (currentStudyFilter === 'outdoor') return spot.type === 'outdoor';
            if (currentStudyFilter === 'openLate') return spot.openLate;
            if (currentStudyFilter === 'outlets') return spot.outlets;
            if (currentStudyFilter === 'wifi') return spot.wifi;
            if (currentStudyFilter === 'coffeeShop') return spot.coffeeShop;
            if (currentStudyFilter === 'patio') return spot.patio;
            if (currentStudyFilter === 'coffeeNearby') return spot.coffeeNearby;
            return true;
        });

        filteredSpots.forEach(spot => {
            const card = document.createElement('article');
            card.className = 'res-card';

            const typeTag = `<span class="res-tag">${spot.type}</span>`;
            const vibeTag = `<span class="res-tag">${spot.vibe}</span>`;
            const lateTag = spot.openLate ? `<span class="res-tag res-tag-positive">open late</span>` : '';
            const outletTag = spot.outlets ? `<span class="res-tag">outlets</span>` : '';
            const wifiTag = spot.wifi ? `<span class="res-tag">Wi-Fi</span>` : '';
            const coffeeShopTag = spot.coffeeShop ? `<span class="res-tag">coffee shop</span>` : '';
            const patioTag = spot.patio ? `<span class="res-tag">outdoor seating</span>` : '';
            const coffeeTag = spot.coffeeNearby && !spot.coffeeShop ? `<span class="res-tag">coffee nearby</span>` : '';

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
                        ${wifiTag}
                        ${coffeeShopTag}
                        ${patioTag}
                        ${coffeeTag}
                    </div>
                    <div class="study-card-links">
                        <a href="${spot.url || 'https://www.reddit.com/r/UTAustin/s/QfrSBELTXw'}" target="_blank" rel="noopener noreferrer" class="res-link">Source &rarr;</a>
                        ${spot.campus ? `<a href="https://experience.arcgis.com/experience/81d900a3c906482e9731a7a71eaaa178" target="_blank" rel="noopener noreferrer" class="res-link res-link-map">Find on UT map &rarr;</a>` : ''}
                    </div>
                </div>
            `;
            studySpotsGrid.appendChild(card);
        });
    }

    selectorCards.forEach(card => {
        card.addEventListener('click', () => {
            selectorCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            currentCategory = card.getAttribute('data-category');
            currentFilter = { type: "all", value: "all" };
            renderContextualFilters(currentCategory);
            renderResources();

            const target = currentCategory === 'study'
                ? document.getElementById('study-section')
                : document.getElementById('library');

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    studyFilterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            studyFilterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentStudyFilter = chip.getAttribute('data-study-filter');
            renderStudySpots();
        });
    });

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            currentCategory = null;
            currentFilter = { type: "all", value: "all" };
            searchInput.value = '';

            selectorCards.forEach(c => c.classList.remove('active'));
            dynamicFilterChips.innerHTML = '';
            contextualFilterToolbar.hidden = true;
            renderResources();

            const selector = document.getElementById('selector-heading');
            if (selector) selector.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            if (searchInput.value.trim().length > 0 && currentCategory === null) {
                currentFilter = { type: "all", value: "all" };
            }
            renderResources();
        });
    }

    renderResources();
    renderStudySpots();
});
