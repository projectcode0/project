document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const inputs = document.querySelectorAll("input, textarea");
    let isEditing = false;
  
    // Initially, disable inputs and hide Save button
    inputs.forEach(input => {
      input.disabled = true;
    });
  
    saveBtn.style.display = "none"; // Hide the "Save Changes" button initially
  
    // Toggle Edit Mode
    editBtn.addEventListener("click", () => {
      if (isEditing) {
        // Save changes (In this example, we just log the changes)
        console.log("Profile saved");
  
        // Re-disable inputs after saving
        inputs.forEach(input => {
          input.disabled = true;
        });
  
        // Hide the "Save Changes" button again
        saveBtn.style.display = "none";
  
        // Change button text back to "Edit Profile"
        editBtn.textContent = "Edit Profile";
        editBtn.style.backgroundColor = "#ffcc00"; // Original button color
      } else {
        // Enable inputs for editing
        inputs.forEach(input => {
          input.disabled = false;
        });
  
        // Show the "Save Changes" button
        saveBtn.style.display = "inline-block";
  
        // Change button text to "Save Changes"
        editBtn.textContent = "Save Changes";
        editBtn.style.backgroundColor = "#1a73e8"; // Button color when in editing mode
      }
  
      // Toggle the editing state
      isEditing = !isEditing;
    });
  });
  