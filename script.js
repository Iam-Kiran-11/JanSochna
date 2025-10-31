// ====== Header Section JS ======
document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const hiBtn = document.getElementById("lang-hi");
  const enBtn = document.getElementById("lang-en");
  const title = document.getElementById("site-title");
  const subtitle = document.getElementById("site-sub");
  const mobileToggle = document.getElementById("mobileToggle");
  const headerActions = document.getElementById("headerActions");
  const detectBtn = document.getElementById("detectBtn");
  const chooseBtn = document.getElementById("chooseBtn");

  // ===== Language Toggle =====
  function setLanguage(lang) {
    if (lang === "hi") {
      hiBtn.classList.add("active");
      enBtn.classList.remove("active");
      title.textContent = "हमारी आवाज़, हमारे अधिकार";
      subtitle.textContent = "अपने ज़िले की प्रगति देखें";
      document.documentElement.lang = "hi";
    } else {
      enBtn.classList.add("active");
      hiBtn.classList.remove("active");
      title.textContent = "Our Voice, Our Rights";
      subtitle.textContent = "See your district’s progress";
      document.documentElement.lang = "en";
    }
  }

  hiBtn.addEventListener("click", () => setLanguage("hi"));
  enBtn.addEventListener("click", () => setLanguage("en"));

  // ===== Mobile Menu Toggle =====
  mobileToggle.addEventListener("click", () => {
    const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", String(!expanded));

    if (!expanded) {
      headerActions.style.display = "flex";
    } else {
      headerActions.style.display = "";
    }
  });

// ===== Detect Location =====
detectBtn.addEventListener("click", () => {
  detectBtn.disabled = true;
  detectBtn.innerHTML = "⏳ Locating...";

  if (!navigator.geolocation) {
    alert("Geolocation is not supported on this device.");
    resetDetectButton();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      console.log("Latitude:", latitude, "Longitude:", longitude);

      try {
        // Use OpenStreetMap's Nominatim API for reverse geocoding
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();

        // Extract a readable district name
        const district =
          data.address.county ||
          data.address.state_district ||
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.state ||
          "Unknown Location";

        // Show the result beautifully on button
        detectBtn.innerHTML = `📍 ${district}`;
        detectBtn.style.background = "rgba(255,255,255,0.05)";
        detectBtn.style.border = "1px solid rgba(255,255,255,0.1)";
        detectBtn.style.color = "var(--accent-green)";
        detectBtn.style.fontWeight = "600";

        // Optional: alert user
        alert(`You are in ${district}! 🌍`);
      } catch (err) {
        console.error("Error fetching location:", err);
        alert("Could not fetch location details.");
      } finally {
        setTimeout(resetDetectButton, 4000); // Reset after 4 seconds
      }
    },
    (error) => {
      alert("Unable to detect location. Please allow location access or choose manually.");
      resetDetectButton();
    },
    { timeout: 10000, maximumAge: 60000 }
  );
});

function resetDetectButton() {
  detectBtn.disabled = false;
  detectBtn.innerHTML = "📍 Detect My Location";
  detectBtn.style = ""; // resets styles back to original
}


// =========================
// District Modal Logic (Updated)
// =========================
const modal = document.getElementById("districtModal");
const choseBtn = document.getElementById("choseBtn");
const closeBtn = document.querySelector(".close-btn");
const districtButtons = document.querySelectorAll(".district-btn");

// Open modal when "Choose District" is clicked
chooseBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal when "Close" button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside the modal box
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Handle district selection
districtButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedDistrict = btn.textContent.trim();

    // Update the button text to show selected district
    chooseBtn.innerHTML = `🏙️ ${selectedDistrict}`;

    // Optional: change the button color slightly to show it's selected
    chooseBtn.style.background = "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))";
    chooseBtn.style.border = "1px solid rgba(255,255,255,0.08)";
    chooseBtn.style.color = "var(--accent-green)";
    chooseBtn.style.fontWeight = "700";

    // Close modal
    modal.style.display = "none";
  });
});})

