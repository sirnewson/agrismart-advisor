/*
 * Script for the AgriSmart Advisor MVP.
 *
 * This script listens for form submissions and then generates
 * basic agronomic advice based on hard-coded rules. The rules
 * are simplified and meant only as examples for an MVP; in
 * practice, these would be replaced with data-driven models
 * or API calls to agronomic knowledge bases.
 */

document.getElementById('advisorForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const crop = document.getElementById('crop').value;
  const ph = parseFloat(document.getElementById('ph').value);
  const rainfall = document.getElementById('rainfall').value;

  let advice = '';
  if (!crop || isNaN(ph) || !rainfall) {
    advice = '<p>Please fill in all fields.</p>';
  } else {
    // Generate crop-specific advice
    if (crop === 'maize') {
      advice += '<h3>Maize Advice</h3>';
      advice += ph < 5.5 || ph > 7.0
        ? '<p>Adjust soil pH to 5.5–7.0 for optimal maize growth.</p>'
        : '<p>Your soil pH is within the ideal range for maize.</p>';
      if (rainfall === 'high') {
        advice +=
          '<p>Plant at the onset of rains. Consider early maturing varieties.</p>';
      } else if (rainfall === 'medium') {
        advice += '<p>Ensure supplemental irrigation if rainfall is inconsistent.</p>';
      } else {
        advice += '<p>Rainfall is too low; maize may not thrive without irrigation.</p>';
      }
      advice +=
        '<p>Recommended fertilizer: Balanced NPK (10-26-10) at 50 kg/acre at planting.</p>';
    } else if (crop === 'beans') {
      advice += '<h3>Beans Advice</h3>';
      advice += ph < 6.0 || ph > 7.5
        ? '<p>Adjust soil pH to 6.0–7.5 for optimal beans growth.</p>'
        : '<p>Your soil pH is within the ideal range for beans.</p>';
      advice +=
        rainfall === 'low'
          ? '<p>Select drought-tolerant bean varieties and consider mulching.</p>'
          : '<p>Beans prefer well-distributed moderate rainfall; avoid waterlogging.</p>';
      advice +=
        '<p>Recommended fertilizer: Phosphorus-rich (e.g., DAP) at 30 kg/acre at planting.</p>';
    } else if (crop === 'wheat') {
      advice += '<h3>Wheat Advice</h3>';
      advice += ph < 6.0 || ph > 7.0
        ? '<p>Adjust soil pH to 6.0–7.0 for optimal wheat growth.</p>'
        : '<p>Your soil pH is within the ideal range for wheat.</p>';
      if (rainfall === 'high') {
        advice += '<p>Ensure proper drainage to prevent fungal diseases.</p>';
      } else if (rainfall === 'medium') {
        advice += '<p>Plant at start of rainy season for good yields.</p>';
      } else {
        advice += '<p>Consider drought-tolerant varieties and conservation tillage.</p>';
      }
      advice +=
        '<p>Recommended fertilizer: Nitrogen top-dressing (urea) at tillering stage.</p>';
    } else {
      advice = '<p>No advice available for the selected crop.</p>';
    }
  }

  const recDiv = document.getElementById('recommendations');
  recDiv.innerHTML = advice;
  recDiv.classList.remove('hidden');
});
