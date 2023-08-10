document.addEventListener("DOMContentLoaded", function() {
  // Table head click event listeners
  const financialRiskHead = document.getElementById("financial-risk");
  const securityRiskHead = document.getElementById("security-risk");
  const privacyRiskHead = document.getElementById("privacy-risk");

  financialRiskHead.addEventListener("click", function() {
    window.location.href = "financial_risk_page.html"; // Replace with the URL of the financial risk page
  });

  securityRiskHead.addEventListener("click", function() {
    window.location.href = "security_risk_page.html"; // Replace with the URL of the security risk page
  });

  privacyRiskHead.addEventListener("click", function() {
    window.location.href = "privacy_risk_page.html"; // Replace with the URL of the privacy risk page
  });
});
