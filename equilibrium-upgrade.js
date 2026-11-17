/* The Equilibrium: simplified navigation and resource discovery.
   Load AFTER script.js. No accounts or AI service required. */

(() => {
  "use strict";

  function startUpgrade() {
    if (document.getElementById("eq-upgrade")) return;

    if (typeof WELLNESS_RESOURCES === "undefined") {
      console.error("Load script.js before equilibrium-upgrade.js.");
      return;
    }

    const main = document.querySelector("main");
    if (!main) return;

    const escapeHTML = value =>
      String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[character]);

    const feedbackURL =
      typeof SITE_CONFIG !== "undefined"
        ? SITE_CONFIG.websiteFeedbackUrl
        : "https://forms.gle/pxBk7z8dh8vFdkC1A";

    /* New resources. MAP Basic is intentionally not included. */
    const additions = [
      {
        id: "austin-tree-of-the-year",
        title: "Explore Austin's Remarkable Trees",
        category: "outdoors",
        resourceType: "Community Resource",
        section: "Nature & Local Discoveries",
        description:
          "Discover award-winning Austin trees on a self-guided outing. Use the previous-winners map to choose a destination and check location access before visiting.",
        url: "https://goo.gl/maps/fMnFiHMkPp7YPTYK8",
        linkText: "Explore the Tree Map",
        tags: ["outdoors", "nature", "off campus", "local find"],
        cost: "Map is free; location costs may vary",
        eligibility: "Check each location's access and visiting rules.",
        hours: "Varies by location",
        source: "Austin Tree of the Year Awards"
      },
      {
        id: "posh-austin-events",
        title: "Find Austin Events",
        category: "explore",
        resourceType: "Community Resource",
        section: "Events & Social Activities",
        description:
          "Discover Austin events and find an outing that interests you. Check each listing for ticket prices, fees, age restrictions, and registration requirements.",
        url:
          "https://posh.vip/explore?location=custom" +
          "&place=Austin%2C%20TX&lat=30.267153&lng=-97.7430608",
        linkText: "Browse Austin Events",
        tags: ["events", "community", "off campus", "local find"],
        cost: "Varies by event; fees may apply",
        eligibility: "Age limits and registration vary by event.",
        hours: "Check event listings",
        source: "POSH"
      },
      {
        id: "austin-vintage-guide",
        title: "Explore Austin's Vintage Shops",
        category: "explore",
        resourceType: "Community Resource",
        section: "Local Discoveries & Creative Inspiration",
        description:
          "Plan your own vintage-shop outing and find creative inspiration around Austin. Explore local businesses at your own pace and meet shopkeepers along the way.",
        url: "https://www.vintagearoundtownguide.com/map",
        linkText: "Explore the Vintage Map",
        tags: ["art", "community", "off campus", "local find"],
        cost: "Map is free; purchases optional",
        eligibility: "Check individual shop hours and access.",
        hours: "Varies by shop",
        source: "Austin Vintage Around Town Guide"
      }
    ];

    const sourceResources = [...WELLNESS_RESOURCES];

    additions.forEach(resource => {
      if (!sourceResources.some(item => item.id === resource.id)) {
        sourceResources.push(resource);
      }
    });

    /* Bring the existing study directory into the same finder. */
    const studyResources =
      typeof STUDY_SPOTS === "undefined"
        ? []
        : STUDY_SPOTS.map((spot, index) => ({
            id: `eq-study-${index}`,
            title: spot.name,
            category: "study",
            resourceType: spot.campus
              ? "UT Resource"
              : "Community Resource",
            section: "Study Spots",
            description:
              `A ${spot.vibe || "welcoming"} ` +
              `${spot.type || ""} study spot ` +
              `${spot.campus ? "on campus" : "in Austin"}.`,
            url: spot.url,
            linkText: spot.campus ? "View Campus Map" : "View Location",
            cost: "Not listed; check location",
            eligibility: spot.campus
              ? "Check building access and any student ID requirements."
              : "Check location access and purchase requirements.",
            hours: spot.hours,
            lastVerified: spot.lastVerified,
            source: "Existing student-curated study directory",
            tags: [
              "study",
              spot.type,
              spot.vibe,
              spot.campus ? "on campus" : "off campus",
              spot.openLate ? "open late" : "",
              spot.outlets ? "outlets" : "",
              spot.coffeeNearby ? "coffee nearby" : ""
            ].filter(Boolean)
          }));

    const allResources = [...sourceResources, ...studyResources];

    function normalize(resource, index) {
      const tags = (resource.tags || []).map(tag =>
        String(tag).toLowerCase()
      );

      const audienceText =
        `${resource.resourceType || ""} ${resource.eligibility || ""}`;

      const audience = /dell/i.test(audienceText)
        ? "dell"
        : /UT Resource/i.test(resource.resourceType || "") ||
          tags.includes("included for students")
        ? "ut"
        : "community";

      const virtual = tags.includes("virtual");
      const physical = tags.some(tag =>
        ["on campus", "off campus", "outdoors", "indoor", "outdoor"]
          .includes(tag)
      );

      const setting =
        virtual && physical ? "both" :
        virtual ? "online" :
        physical ? "in-person" : "unknown";

      /* Strict free filter: unknown or mixed prices are not called free. */
      const costGroup =
        /^free$/i.test((resource.cost || "").trim())
          ? "free"
          : /free.*paid|paid.*free|varies|may vary|may apply/i
              .test(resource.cost || "")
          ? "mixed"
          : /^paid$/i.test(resource.cost || "")
          ? "paid"
          : /included/i.test(resource.cost || "")
          ? "included"
          : "unknown";

      const isGuide =
        /map|guide|directory|events|calendar/i.test(
          `${resource.title} ${resource.section || ""} ` +
          `${resource.linkText || ""}`
        );

      const allTags = [...new Set([
        ...tags,
        resource.category,
        audience === "community" ? "community resource" : `${audience} students`,
        setting === "unknown" ? "format not specified" : setting,
        isGuide ? "guide or directory" : "resource"
      ].filter(Boolean))];

      return {
        ...resource,
        key: resource.id || `eq-resource-${index}`,
        tags: allTags,
        audience,
        setting,
        costGroup,
        isGuide
      };
    }

    const resources = allResources.map(normalize);

    const topicOptions = [
      ["all", "All resources"],
      ["support", "Talk to someone"],
      ["study", "Find a study spot"],
      ["move", "Move my body"],
      ["outdoors", "Get outside"],
      ["break", "Take a break"],
      ["explore", "Explore Austin"],
      ["doomscroll", "Try a screen break"]
    ];

    const interestOptions = [
      ["any", "Anything"],
      ["unwind", "Unwind"],
      ["outside", "Get outside"],
      ["move", "Get moving"],
      ["connect", "Connect"],
      ["inspire", "Get inspired"]
    ];

    function options(items) {
      return items.map(([value, label]) =>
        `<option value="${escapeHTML(value)}">${escapeHTML(label)}</option>`
      ).join("");
    }

    function matchesTopic(resource, topic) {
      const tags = resource.tags;
      if (topic === "all") return true;
      if (resource.category === topic) return true;
      if (topic === "move") {
        return tags.some(tag => ["sports", "fitness", "yoga"].includes(tag));
      }
      if (topic === "outdoors") {
        return tags.some(tag => ["outdoors", "nature", "water"].includes(tag));
      }
      if (topic === "break") {
        return tags.some(tag => ["art", "pets", "mindfulness"].includes(tag));
      }
      if (topic === "explore") {
        return resource.category === "connect" ||
          tags.some(tag => ["events", "art", "outdoors", "community"].includes(tag));
      }
      return false;
    }

    function matchesInterest(resource, interest) {
      const tags = resource.tags;
      if (interest === "any") return true;
      if (interest === "outside") return matchesTopic(resource, "outdoors");
      if (interest === "move") return matchesTopic(resource, "move");
      if (interest === "unwind") return matchesTopic(resource, "break");
      if (interest === "inspire") return tags.includes("art");
      if (interest === "connect") {
        return resource.category === "connect" ||
          tags.some(tag => ["community", "events"].includes(tag)) ||
          /group|club|volunteer|league/i.test(resource.title);
      }
      return false;
    }

    function safeForPicker(resource) {
      const text =
        `${resource.title} ${resource.section || ""} ${resource.description}`;

      return resource.category !== "support" &&
        resource.category !== "study" &&
        !/crisis|suicid|psychiatr|counseling|clinical|therapy|therapeutic/i.test(text);
    }

    function matchesSetting(resource, setting) {
      return setting === "any" ||
        resource.setting === setting ||
        resource.setting === "both";
    }

    function shortDescription(resource) {
      const text = resource.description || "";
      return text.match(/^.*?[.!?](?:\s|$)/)?.[0].trim() || text;
    }

    function accessLabel(resource) {
      if (resource.eligibility) return resource.eligibility;
      if (resource.audience === "dell") return "Dell Med; check eligibility.";
      if (resource.audience === "ut") return "UT students; check eligibility.";
      return "Check provider access, age limits, and registration.";
    }

    function resourceCard(resource) {
      const direct = /^(tel:|sms:|mailto:)/i.test(resource.url || "");
      const attributes = direct
        ? ""
        : 'target="_blank" rel="noopener noreferrer"';

      return `
        <article class="eq-card">
          <h3>${escapeHTML(resource.title)}</h3>
          <p>${escapeHTML(shortDescription(resource))}</p>
          <p class="eq-meta">
            <strong>Cost:</strong>
            ${escapeHTML(resource.cost || "Not listed; check provider")}<br>
            <strong>Access:</strong> ${escapeHTML(accessLabel(resource))}
          </p>
          <details class="eq-details">
            <summary>More details<span class="sr-only">
              about ${escapeHTML(resource.title)}
            </span></summary>
            <p>${escapeHTML(resource.description)}</p>
            ${resource.hours
              ? `<p><strong>Hours:</strong> ${escapeHTML(resource.hours)}</p>`
              : ""}
            ${resource.lastVerified
              ? `<p><strong>Last checked:</strong>
                   ${escapeHTML(resource.lastVerified)}</p>`
              : ""}
            ${resource.source
              ? `<p><strong>Source:</strong> ${escapeHTML(resource.source)}</p>`
              : ""}
            <div class="eq-tags">
              ${resource.tags.map(tag =>
                `<span>${escapeHTML(tag)}</span>`
              ).join("")}
            </div>
          </details>
          <a class="eq-primary eq-resource-link"
             href="${escapeHTML(resource.url)}" ${attributes}>
            ${escapeHTML(resource.linkText || "Explore resource")} →
          </a>
        </article>`;
    }

    /* Hide the old finder after it has initialized.
       Existing resource data remains intact. */
    const oldSelector =
      document.getElementById("selector-heading")?.closest("section");

    [
      oldSelector,
      document.getElementById("library"),
      document.getElementById("study-section"),
      document.getElementById("feedback-section")
    ].filter(Boolean).forEach(section => {
      section.hidden = true;
    });

    /* Remove the Machine Minds credit and link from the displayed page. */
    document.querySelectorAll('a[href*="machinemindsautomation.com"]')
      .forEach(link => {
        if (link.closest(".prototype-banner")) {
          const text = document.createElement("span");
          text.textContent = "For Students by Students";
          link.replaceWith(text);
        } else {
          link.remove();
        }
      });

    const footerCredit = document.querySelector(".footer-brand p");
    if (footerCredit) {
      footerCredit.textContent =
        "Created and designed by Natalie Rivas, Wellness Coordinator, " +
        "via the Dell Med Psychiatry Interest Group.";
    }

    /* One feedback entry point, in the navigation. */
    document.querySelectorAll(".outdated-prompt").forEach(item => item.remove());

    document.querySelectorAll(
      'footer a[href*="forms.gle"], footer a[href="#feedback-section"]'
    ).forEach(link => {
      (link.closest("li") || link.closest("p") || link).remove();
    });

    /* Keep the introduction short, preserving background under details. */
    const hero = document.querySelector(".hero");
    if (hero) {
      const heading = hero.querySelector("h1");
      if (heading) heading.textContent = "What do you need today?";

      const introduction = hero.querySelector(".hero-single > p");
      if (introduction) {
        const original = introduction.textContent;
        introduction.textContent =
          "Find a starting point for your wellbeing in Austin.";

        if (!hero.querySelector("details")) {
          const about = document.createElement("details");
          about.className = "eq-details";
          about.innerHTML = `
            <summary>About The Equilibrium</summary>
            <p>${escapeHTML(original)}</p>`;
          introduction.after(about);
        }
      }
    }

    /* Replace the nav node to avoid duplicate old event listeners. */
    const oldNav = document.getElementById("primary-nav");
    const oldToggle = document.querySelector(".mobile-menu-toggle");

    let nav;
    let toggle;

    if (oldNav) {
      nav = oldNav.cloneNode(false);
      nav.innerHTML = `
        <a href="#home">Home</a>
        <a href="#eq-resources">Resources</a>
        <details class="eq-ut-menu">
          <summary>UT Students</summary>
          <div class="eq-ut-options">
            <a href="#eq-resources" data-eq-view="ut">UT-wide resources</a>
            <a href="#eq-resources" data-eq-view="dell">Dell Med resources</a>
            <a href="#eq-resources" data-eq-view="campus-study">
              Campus study spots
            </a>
          </div>
        </details>
        <a href="#new-to-austin">New to Austin</a>
        <a href="#maps">Maps &amp; guides</a>
        <a href="${escapeHTML(feedbackURL)}"
           target="_blank" rel="noopener noreferrer">Feedback</a>
        <a href="#crisis" class="eq-urgent-link">Urgent help</a>`;
      oldNav.replaceWith(nav);
    }

    if (oldToggle && nav) {
      toggle = oldToggle.cloneNode(true);
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", "primary-nav");
      oldToggle.replaceWith(toggle);

      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("active", !expanded);
      });
    }

    function closeNavigation() {
      if (!nav) return;
      nav.classList.remove("active");
      nav.querySelectorAll("details").forEach(menu => { menu.open = false; });
      toggle?.setAttribute("aria-expanded", "false");
    }

    nav?.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        const openMenu = nav.querySelector("details[open]");
        if (openMenu) {
          openMenu.open = false;
          openMenu.querySelector("summary").focus();
        } else {
          closeNavigation();
          toggle?.focus();
        }
      }
    });

    /* Smart picker + full finder + newcomer starting points. */
    const upgrade = document.createElement("div");
    upgrade.id = "eq-upgrade";
    upgrade.innerHTML = `
      <section class="container section-padding" id="eq-picker"
               aria-labelledby="eq-picker-heading">
        <div class="eq-panel">
          <h2 id="eq-picker-heading">Pick something for me</h2>
          <p>Not sure where to start? Find one idea for your next break.</p>

          <div class="eq-field">
            <label for="eq-interest">What sounds good?</label>
            <select id="eq-interest">${options(interestOptions)}</select>
          </div>

          <details class="eq-details" id="eq-picker-options">
            <summary>Narrow my options</summary>
            <div class="eq-controls">
              <div class="eq-field">
                <label for="eq-picker-budget">Budget</label>
                <select id="eq-picker-budget">
                  <option value="any">Any budget</option>
                  <option value="free">Free only</option>
                </select>
              </div>
              <div class="eq-field">
                <label for="eq-picker-setting">Setting</label>
                <select id="eq-picker-setting">
                  <option value="any">Anywhere</option>
                  <option value="in-person">In person</option>
                  <option value="online">Online</option>
                </select>
              </div>
            </div>
            <label class="eq-checkbox">
              <input id="eq-include-ut" type="checkbox">
              Include UT student options
            </label>
          </details>

          <button type="button" class="eq-primary" id="eq-pick">
            Pick something for me
          </button>
          <p id="eq-pick-status" class="eq-status" role="status"></p>
          <div id="eq-suggestion"></div>
          <div class="eq-actions" id="eq-pick-actions" hidden>
            <button type="button" class="eq-secondary" id="eq-another">
              Try another
            </button>
            <button type="button" class="eq-secondary" id="eq-matches">
              See all matches
            </button>
            <button type="button" class="eq-secondary" id="eq-change">
              Change preferences
            </button>
          </div>
        </div>
      </section>

      <section class="container section-padding" id="eq-resources"
               aria-labelledby="eq-resources-heading">
        <h2 id="eq-resources-heading" tabindex="-1">Find a resource</h2>
        <p>Choose what would help, or search by name.</p>

        <form id="eq-filter-form" class="eq-controls" role="search">
          <div class="eq-field eq-search-field">
            <label for="eq-search">Search resources</label>
            <input id="eq-search" type="search"
                   placeholder="Search by name or keyword">
          </div>
          <div class="eq-field">
            <label for="eq-topic">I want to…</label>
            <select id="eq-topic">${options(topicOptions)}</select>
          </div>
          <div class="eq-field">
            <label for="eq-cost">Cost</label>
            <select id="eq-cost">
              <option value="any">Any cost</option>
              <option value="free">Free only</option>
              <option value="included">Included for eligible students</option>
            </select>
          </div>
          <div class="eq-field">
            <label for="eq-audience">Resource access</label>
            <select id="eq-audience">
              <option value="all">All resources</option>
              <option value="community">Community resources</option>
              <option value="ut">UT-wide resources</option>
              <option value="dell">Dell Med resources</option>
            </select>
          </div>
          <div class="eq-field">
            <label for="eq-setting">Setting</label>
            <select id="eq-setting">
              <option value="any">Anywhere</option>
              <option value="in-person">In person</option>
              <option value="online">Online</option>
            </select>
          </div>
          <button type="button" class="eq-secondary" id="eq-reset">
            Clear filters
          </button>
        </form>

        <p id="eq-collection-note" class="eq-status"></p>
        <p id="eq-result-count" role="status"></p>
        <div id="eq-results" class="eq-grid"></div>
      </section>

      <section class="container section-padding" id="new-to-austin"
               aria-labelledby="eq-new-heading">
        <div class="eq-panel">
          <h2 id="eq-new-heading" tabindex="-1">New to Austin?</h2>
          <p>Start with a place to explore, people to meet, or somewhere to study.</p>
          <div class="eq-start-grid">
            <button type="button" class="eq-start"
                    data-eq-view="local">
              <strong>Explore local places</strong>
              <span>Parks, remarkable trees, and creative discoveries.</span>
            </button>
            <button type="button" class="eq-start"
                    data-eq-view="community">
              <strong>Find community</strong>
              <span>Groups, volunteering, and local events.</span>
            </button>
            <button type="button" class="eq-start"
                    data-eq-view="study">
              <strong>Find a study spot</strong>
              <span>Community places to settle in and focus.</span>
            </button>
          </div>
          <a href="#eq-resources" data-eq-view="ut">
            Here for UT? View student resources →
          </a>
        </div>
      </section>`;

    if (hero) hero.after(upgrade);
    else main.prepend(upgrade);

    const byId = id => document.getElementById(id);

    function focusSection(id) {
      const section = byId(id);
      if (!section) return;
      const target = section.querySelector("h2, h1") || section;
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      section.scrollIntoView({ block: "start", behavior: "auto" });
    }

    function pickerPreferences() {
      return {
        interest: byId("eq-interest").value,
        budget: byId("eq-picker-budget").value,
        setting: byId("eq-picker-setting").value,
        includeUT: byId("eq-include-ut").checked
      };
    }

    function pickerMatches(resource, preferences) {
      return safeForPicker(resource) &&
        (preferences.includeUT || resource.audience === "community") &&
        matchesInterest(resource, preferences.interest) &&
        (preferences.budget !== "free" || resource.costGroup === "free") &&
        matchesSetting(resource, preferences.setting);
    }

    function preferenceExplanation(preferences) {
      const labels = [];
      if (preferences.interest !== "any") {
        labels.push(
          interestOptions.find(([key]) => key === preferences.interest)[1]
        );
      }
      if (preferences.budget === "free") labels.push("free");
      if (preferences.setting !== "any") {
        labels.push(preferences.setting === "online" ? "online" : "in person");
      }
      return labels.length
        ? `Matches your choices: ${labels.join(" · ")}.`
        : "An activity idea to help you get started.";
    }

    /* Track suggestions only in this page session.
       No personal profile, cookies, or additional tracking is used. */
    let seen = new Set();
    let previousPreferenceKey = "";
    let restartRound = false;

    function pickSuggestion() {
      const preferences = pickerPreferences();
      const key = JSON.stringify(preferences);

      if (key !== previousPreferenceKey || restartRound) {
        seen.clear();
        previousPreferenceKey = key;
        restartRound = false;
      }

      const pool = resources.filter(resource =>
        pickerMatches(resource, preferences)
      );

      const status = byId("eq-pick-status");
      const another = byId("eq-another");
      byId("eq-pick-actions").hidden = false;

      if (!pool.length) {
        byId("eq-suggestion").innerHTML = "";
        status.textContent =
          "No ideas match those preferences yet. Try changing your choices.";
        another.hidden = true;
        byId("eq-matches").hidden = true;
        return;
      }

      const remaining = pool.filter(resource => !seen.has(resource.key));

      if (!remaining.length) {
        status.textContent =
          "You've explored every matching idea. Start a new round or change your preferences.";
        another.textContent = "Start a new round";
        restartRound = true;
        return;
      }

      /* Direct destinations/activities receive more weight than directories.
         Filters are always respected; no paid fallback for Free only. */
      const weighted = remaining.map(resource => ({
        resource,
        weight: resource.isGuide ? 1 : 3
      }));
      let draw = Math.random() *
        weighted.reduce((total, item) => total + item.weight, 0);
      let chosen = weighted[weighted.length - 1].resource;

      for (const item of weighted) {
        draw -= item.weight;
        if (draw < 0) {
          chosen = item.resource;
          break;
        }
      }

      seen.add(chosen.key);
      byId("eq-suggestion").innerHTML = resourceCard(chosen);
      status.textContent = preferenceExplanation(preferences);
      another.hidden = false;
      another.textContent = "Try another";
      byId("eq-matches").hidden = false;
    }

    byId("eq-pick").addEventListener("click", pickSuggestion);
    byId("eq-another").addEventListener("click", pickSuggestion);

    byId("eq-change").addEventListener("click", () => {
      byId("eq-picker-options").open = true;
      byId("eq-interest").focus();
    });

    [
      "eq-interest",
      "eq-picker-budget",
      "eq-picker-setting",
      "eq-include-ut"
    ].forEach(id => {
      byId(id).addEventListener("change", () => {
        byId("eq-suggestion").innerHTML = "";
        byId("eq-pick-actions").hidden = true;
        byId("eq-pick-status").textContent =
          "Preferences updated. Pick an idea when you're ready.";
        seen.clear();
        restartRound = false;
      });
    });

    let activeCollection = "";
    let matchingPreferences = null;

    function matchesCollection(resource) {
      if (activeCollection === "picker" && matchingPreferences) {
        return pickerMatches(resource, matchingPreferences);
      }
      if (activeCollection === "local") {
        return resource.audience === "community" &&
          (resource.category === "outdoors" ||
            resource.tags.includes("local find") ||
            resource.tags.includes("art"));
      }
      if (activeCollection === "community") {
        return resource.audience === "community" &&
          matchesInterest(resource, "connect") &&
          safeForPicker(resource);
      }
      return true;
    }

    function renderFinder() {
      const query = byId("eq-search").value.trim().toLowerCase();
      const topic = byId("eq-topic").value;
      const cost = byId("eq-cost").value;
      const audience = byId("eq-audience").value;
      const setting = byId("eq-setting").value;

      const filtered = resources.filter(resource => {
        const searchable = [
          resource.title,
          resource.description,
          resource.section,
          resource.cost,
          ...resource.tags
        ].join(" ").toLowerCase();

        return (!query || searchable.includes(query)) &&
          matchesTopic(resource, topic) &&
          (cost === "any" || resource.costGroup === cost) &&
          (audience === "all" || resource.audience === audience) &&
          matchesSetting(resource, setting) &&
          matchesCollection(resource);
      });

      byId("eq-result-count").textContent =
        `${filtered.length} resource${filtered.length === 1 ? "" : "s"} found`;

      byId("eq-results").innerHTML = filtered.length
        ? filtered.map(resourceCard).join("")
        : `<p class="eq-empty">
             No matching resources are listed yet. Change a filter or select
             Clear filters to browse more options.
           </p>`;
    }

    function resetFinder() {
      byId("eq-filter-form").reset();
      activeCollection = "";
      matchingPreferences = null;
      byId("eq-collection-note").textContent = "";
    }

    byId("eq-filter-form").addEventListener("submit", event => {
      event.preventDefault();
      renderFinder();
    });

    byId("eq-search").addEventListener("input", renderFinder);

    ["eq-topic", "eq-cost", "eq-audience", "eq-setting"].forEach(id => {
      byId(id).addEventListener("change", () => {
        /* Explicit filter changes leave curated/picker mode. */
        activeCollection = "";
        matchingPreferences = null;
        byId("eq-collection-note").textContent = "";
        renderFinder();
      });
    });

    byId("eq-reset").addEventListener("click", () => {
      resetFinder();
      renderFinder();
    });

    byId("eq-matches").addEventListener("click", () => {
      resetFinder();
      matchingPreferences = { ...pickerPreferences() };
      activeCollection = "picker";
      byId("eq-cost").value =
        matchingPreferences.budget === "free" ? "free" : "any";
      byId("eq-setting").value = matchingPreferences.setting;
      byId("eq-audience").value =
        matchingPreferences.includeUT ? "all" : "community";
      byId("eq-collection-note").textContent =
        preferenceExplanation(matchingPreferences) +
        " Showing activity suggestions only. Change a filter to browse more broadly.";
      renderFinder();
      focusSection("eq-resources");
    });

    function openView(view) {
      resetFinder();

      if (view === "ut" || view === "dell") {
        byId("eq-audience").value = view;
      } else if (view === "campus-study") {
        byId("eq-topic").value = "study";
        byId("eq-audience").value = "ut";
      } else if (view === "study") {
        byId("eq-topic").value = "study";
        byId("eq-audience").value = "community";
      } else if (view === "local" || view === "community") {
        activeCollection = view;
      }

      if (["local", "community", "study"].includes(view)) {
        byId("eq-collection-note").innerHTML =
          '<a href="#new-to-austin">← Back to New to Austin</a>';
      }

      renderFinder();
      focusSection("eq-resources");
    }

    document.querySelectorAll("[data-eq-view]").forEach(control => {
      control.addEventListener("click", event => {
        event.preventDefault();
        openView(control.dataset.eqView);
        closeNavigation();
      });
    });

    /* Rebuild footer links to remove old finder event handlers. */
    document.querySelectorAll('footer a[href="#library"], footer a[href="#study-section"]')
      .forEach(link => {
        const replacement = link.cloneNode(true);
        const study = link.getAttribute("href") === "#study-section";
        replacement.href = "#eq-resources";
        replacement.addEventListener("click", event => {
          event.preventDefault();
          resetFinder();
          if (study) byId("eq-topic").value = "study";
          renderFinder();
          focusSection("eq-resources");
        });
        link.replaceWith(replacement);
      });

    /* Preserve all existing UT maps; add community maps/guides. */
    const maps = byId("maps");
    if (maps) {
      maps.hidden = false;
      const title = maps.querySelector("h2");
      if (title) title.textContent = "Maps & guides";
      const description = maps.querySelector(".section-header p");
      if (description) {
        description.textContent =
          "Find your way around campus and discover places across Austin.";
      }

      const mapGrid = maps.querySelector(".maps-grid");
      if (mapGrid) {
        const existingURLs = new Set(
          [...mapGrid.querySelectorAll("a")].map(link => link.href)
        );

        resources.filter(resource =>
          resource.category !== "study" &&
          /map|guide/i.test(`${resource.title} ${resource.linkText || ""}`) &&
          !/support|crisis/i.test(resource.section || "")
        ).forEach(resource => {
          const absolute = new URL(resource.url, location.href).href;
          if (!existingURLs.has(absolute)) {
            mapGrid.insertAdjacentHTML("beforeend", resourceCard(resource));
            existingURLs.add(absolute);
          }
        });
      }

      main.append(maps);
    }

    /* Crisis support goes last in main, directly before the footer. */
    const crisis = byId("crisis");
    if (crisis) {
      crisis.hidden = false;
      crisis.classList.add("section-padding");
      main.append(crisis);
    }

    /* Accessible in-page navigation, including the bottom urgent-help panel. */
    nav?.querySelectorAll('a[href^="#"]:not([data-eq-view])')
      .forEach(link => {
        link.addEventListener("click", event => {
          event.preventDefault();
          const id = link.getAttribute("href").slice(1);

          if (id === "eq-resources") {
            resetFinder();
            renderFinder();
          }

          closeNavigation();
          focusSection(id);
        });
      });

    byId("eq-collection-note").addEventListener("click", event => {
      const link = event.target.closest('a[href="#new-to-austin"]');
      if (link) {
        event.preventDefault();
        focusSection("new-to-austin");
      }
    });

    const styles = document.createElement("style");
    styles.textContent = `
      [hidden] { display: none !important; }

      #eq-upgrade {
        color: var(--charcoal, #2c3531);
      }

      #eq-upgrade h2, #eq-upgrade h3 {
        color: inherit;
      }

      #eq-upgrade h2 { margin-bottom: .6rem; }
      #eq-upgrade p { margin: .65rem 0; }
      #eq-upgrade section, #maps, #crisis {
        scroll-margin-top: 120px;
      }

      .eq-panel {
        background: var(--sage-light, #e8ede9);
        border-radius: 20px;
        padding: clamp(1.2rem, 4vw, 2.5rem);
      }

      .eq-controls {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        gap: 1rem;
        align-items: end;
        margin: 1.3rem 0;
      }

      .eq-search-field { grid-column: 1 / -1; }

      .eq-field {
        display: flex;
        flex-direction: column;
        gap: .4rem;
        min-width: 0;
      }

      #eq-picker > .eq-panel > .eq-field {
        max-width: 420px;
        margin-top: 1.2rem;
      }

      .eq-field label { font-weight: 600; }

      .eq-field select, .eq-field input {
        width: 100%;
        min-height: 46px;
        padding: .7rem .8rem;
        border: 1px solid var(--muted-blue, #6b8292);
        border-radius: 10px;
        background: var(--warm-ivory, #fbf9f5);
        color: var(--charcoal, #2c3531);
        font: inherit;
        font-size: 16px;
      }

      .eq-primary, .eq-secondary, .eq-start {
        min-height: 46px;
        border-radius: 10px;
        padding: .75rem 1rem;
        font: inherit;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
      }

      .eq-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #385246;
        color: #fff;
        border: 1px solid #385246;
      }

      .eq-primary:hover { background: #2c4137; color: #fff; }

      .eq-secondary {
        color: var(--charcoal, #2c3531);
        background: transparent;
        border: 1px solid currentColor;
      }

      .eq-grid, .eq-start-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
        gap: 1.2rem;
        margin-top: 1.2rem;
      }

      .eq-card {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        min-width: 0;
        padding: 1.4rem;
        border-radius: 16px;
        background: var(--white, #fff);
        color: var(--charcoal, #2c3531);
        border: 1px solid var(--sage-green, #4a6b5d);
        overflow-wrap: anywhere;
      }

      .eq-card h3 { font-size: 1.2rem; }
      .eq-meta { font-size: .9rem; line-height: 1.65; }
      .eq-resource-link { margin-top: auto; }

      #eq-suggestion {
        max-width: 650px;
        margin-top: 1rem;
      }

      .eq-details { margin: .7rem 0; }
      .eq-details summary {
        cursor: pointer;
        font-weight: 600;
        padding: .65rem 0;
        min-height: 44px;
      }

      .eq-tags {
        display: flex;
        flex-wrap: wrap;
        gap: .4rem;
        margin: .8rem 0;
      }

      .eq-tags span {
        padding: .2rem .6rem;
        border: 1px solid currentColor;
        border-radius: 30px;
        font-size: .78rem;
      }

      .eq-actions {
        display: flex;
        flex-wrap: wrap;
        gap: .7rem;
        margin-top: 1rem;
      }

      .eq-checkbox {
        display: flex;
        gap: .7rem;
        align-items: center;
        min-height: 44px;
      }

      .eq-checkbox input {
        width: 20px;
        height: 20px;
      }

      .eq-start {
        text-align: left;
        background: var(--warm-ivory, #fbf9f5);
        color: var(--charcoal, #2c3531);
        border: 1px solid var(--sage-green, #4a6b5d);
      }

      .eq-start strong, .eq-start span { display: block; }
      .eq-start span { margin-top: .5rem; font-size: .9rem; }
      .eq-start-grid { margin-bottom: 1.3rem; }
      .eq-empty { grid-column: 1 / -1; padding: 1rem; }

      #primary-nav {
        display: flex;
        flex-wrap: wrap;
        gap: .4rem 1rem;
        align-items: center;
      }

      #primary-nav > a,
      #primary-nav .eq-ut-menu > summary {
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        padding: .45rem .2rem;
        font-size: .9rem;
      }

      .eq-ut-menu { position: relative; }
      .eq-ut-menu summary { cursor: pointer; }
      .eq-ut-menu summary::after { content: " ▾"; margin-left: .4rem; }

      .eq-ut-options {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 100;
        min-width: 220px;
        padding: .6rem;
        border-radius: 12px;
        border: 1px solid var(--sage-green, #4a6b5d);
        background: var(--warm-ivory, #fbf9f5);
        box-shadow: 0 10px 25px rgba(0,0,0,.12);
      }

      #primary-nav .eq-ut-options a {
        display: block;
        padding: .8rem;
        color: var(--charcoal, #2c3531);
      }

      #primary-nav .eq-urgent-link {
        text-decoration: underline;
        font-weight: 600;
      }

      #eq-upgrade :is(a, button, input, select, summary):focus-visible,
      #primary-nav :is(a, summary):focus-visible {
        outline: 3px solid var(--burnt-orange, #bf5700);
        outline-offset: 4px;
      }

      @media (max-width: 1100px) {
        .nav-container { flex-wrap: wrap; }
        .mobile-menu-toggle { display: flex; }
        #primary-nav {
          display: none;
          position: static;
          width: 100%;
          flex-direction: column;
          align-items: stretch;
          padding: 1rem 0;
        }
        #primary-nav.active { display: flex; }
        .eq-ut-options {
          position: static;
          box-shadow: none;
          margin: .4rem 0;
        }
      }

      @media (max-width: 600px) {
        .eq-controls { grid-template-columns: 1fr; }
        .eq-actions { flex-direction: column; }
        .eq-actions button { width: 100%; }
        .eq-card { padding: 1rem; }
      }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto !important; }
        #eq-upgrade * { transition: none !important; }
      }
    `;
    document.head.append(styles);

    renderFinder();

    /* Support existing bookmarks and direct links. */
    const hash = location.hash;
    if (hash === "#library") focusSection("eq-resources");
    if (hash === "#study-section") {
      resetFinder();
      byId("eq-topic").value = "study";
      renderFinder();
      focusSection("eq-resources");
    }
    if (["#new-to-austin", "#maps", "#crisis", "#eq-resources"].includes(hash)) {
      focusSection(hash.slice(1));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startUpgrade, { once: true });
  } else {
    startUpgrade();
  }
})();
/* Polished activity picker */
(() => {
  function polishPicker() {
    const picker = document.getElementById("eq-picker");
    const select = document.getElementById("eq-interest");

    if (!picker || !select || picker.dataset.polished) return;
    picker.dataset.polished = "true";

    const panel = picker.querySelector(".eq-panel");
    const heading = document.getElementById("eq-picker-heading");
    const introduction = heading.nextElementSibling;

    const eyebrow = document.createElement("span");
    eyebrow.className = "eq-picker-eyebrow";
    eyebrow.textContent = "A LITTLE INSPIRATION";
    heading.before(eyebrow);

    heading.textContent = "Find your next little reset.";

    if (introduction?.tagName === "P") {
      introduction.textContent =
        "Choose a mood. We’ll suggest somewhere to start.";
    }

    /* Native radio buttons provide keyboard support without a dropdown. */
    const field = select.closest(".eq-field");
    const choices = document.createElement("fieldset");
    choices.className = "eq-mood-choices";

    const legend = document.createElement("legend");
    legend.textContent = "What sounds good?";
    choices.append(legend);

    const names = {
      any: "Surprise me",
      unwind: "Unwind",
      outside: "Get outside",
      move: "Get moving",
      connect: "Connect",
      inspire: "Get inspired"
    };

    [...select.options].forEach(option => {
      const label = document.createElement("label");
      label.className = "eq-mood-option";

      const radio = document.createElement("input");
      radio.type = "radio
