document.addEventListener("DOMContentLoaded", () => {
    const dropZone = document.getElementById("dropZone");
    const fileInput = document.getElementById("fileInput");
    const logs = document.getElementById("logs");
    const deployments = document.getElementById("deployments");
  
    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.style.borderColor = "#005bb5";
    });
  
    dropZone.addEventListener("dragleave", () => {
      dropZone.style.borderColor = "#0070f3";
    });
  
    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      handleFiles(e.dataTransfer.files);
    });
  
    document.getElementById("fileButton").addEventListener("click", () => {
      fileInput.click();
    });
  
    fileInput.addEventListener("change", (e) => {
      handleFiles(e.target.files);
    });
  
    function handleFiles(files) {
      Array.from(files).forEach((file) => {
        const log = document.createElement("li");
        log.textContent = `Uploading ${file.name}...`;
        logs.appendChild(log);
  
        // Simulate Deployment
        setTimeout(() => {
          log.textContent = `${file.name} deployed successfully!`;
          const deploymentLink = document.createElement("li");
          deploymentLink.innerHTML = `<a href="#" target="_blank">${file.name} (View Deployment)</a>`;
          deployments.appendChild(deploymentLink);
        }, 2000);
      });
    }
  });
  