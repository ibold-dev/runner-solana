let deferredPrompt;

// Listen for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Show the modal
  const installModal = document.getElementById("install-modal");
  installModal.style.display = "flex";

  // Handle the install button click
  const installButton = document.getElementById("confirm-install");
  installButton.addEventListener("click", async () => {
    installModal.style.display = "none"; // Hide modal
    deferredPrompt.prompt(); // Show install prompt
    const { outcome } = await deferredPrompt.userChoice; // Check user's choice
    console.log(`User response to install prompt: ${outcome}`);
    deferredPrompt = null; // Reset prompt
  });

  // Handle the close button click
  const closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    installModal.style.display = "none";
  });
});

// Optionally, hide the modal if the app is installed
window.addEventListener("appinstalled", () => {
  console.log("PWA was installed");
  const installModal = document.getElementById("install-modal");
  installModal.style.display = "none";
});
