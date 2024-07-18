function projectPopUp() {
    const body = document.querySelector(".wrapper");
    let projectDiv = document.createElement("div");
    projectDiv.style.display = "none"; // Initially hidden
    projectDiv.style.position = "fixed"; // Use fixed positioning
    projectDiv.style.top = "0";
    projectDiv.style.left = "0";
    projectDiv.style.right = "0";
    projectDiv.style.bottom = "0";
    projectDiv.style.backgroundColor = "rgba(0,0,0,0.5)"; // Optional: Add a semi-transparent backdrop
    projectDiv.style.display = "flex";
    projectDiv.style.justifyContent = "center";
    projectDiv.style.alignItems = "center";

    // Create an inner container for the popup content
    let contentContainer = document.createElement("div");
    contentContainer.style.backgroundColor = "#fff"; // Set background color for visibility
    contentContainer.style.padding = "20px"; // Add some padding
    contentContainer.style.borderRadius = "5px"; // Optional: Round the corners
    contentContainer.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; // Optional: Add a subtle shadow

    function showPopup() {
        if (!body.contains(projectDiv)) {
            const titleElement = document.createElement('h2');
            titleElement.textContent = "Enter the project title";

            const inputElement = document.createElement('input');
            inputElement.type = 'text';

            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Submit';

            contentContainer.appendChild(titleElement);
            contentContainer.appendChild(inputElement);
            contentContainer.appendChild(buttonElement);
            projectDiv.appendChild(contentContainer);
            body.appendChild(projectDiv);
        }
        projectDiv.style.display = "flex";
    }

    function closePopup() {
        projectDiv.style.display = "none";
    }

    return {
        show: showPopup,
        close: closePopup
    };
}

export default projectPopUp;