// Event listener for the form submission
document.getElementById('forms')?.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const imgElement = document.getElementById("img") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const degreeElement = document.getElementById("degree") as HTMLSelectElement;
    const matricElement = document.getElementById("matric") as HTMLInputElement;
    const interElement = document.getElementById("inter") as HTMLInputElement;
    const gradElement = document.getElementById("grad") as HTMLInputElement;
    const textexpElement = document.getElementById("textexp") as HTMLTextAreaElement;
    const textskillsElement = document.getElementById("textskills") as HTMLTextAreaElement;
    const dateElement = document.getElementById("date") as HTMLInputElement;

    // Get the profile picture URL (base64 or file URL)
    const img = (document.getElementById("profilePic") as HTMLImageElement)?.src || ''; // Update this if needed

    // Collect the form data
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const degree = degreeElement.value;
    const matric = matricElement.value;
    const inter = interElement.value;
    const grad = gradElement.value;
    const textexp = textexpElement.value;
    const textskills = textskillsElement.value;
    const date = dateElement.value;

    // Resume output HTML with profile picture
    const resumeOut = `
        <h2>Resume</h2>
        <p><strong>Profile:</strong> <img src="${img}" alt="Profile Picture" class="profile-img" /></p>
        <p><strong>Name:</strong> <span class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span class="editable">${email}</span></p>
        <p><strong>Phone:</strong> <span class="editable">${phone}</span></p>
        <p><strong>Degree:</strong> <span class="editable">${degree}</span></p>
        <p><strong>Matriculation:</strong> <span class="editable">${matric}</span></p>
        <p><strong>Intermediate:</strong> <span class="editable">${inter}</span></p>
        <p><strong>Graduation:</strong> <span class="editable">${grad}</span></p>
        <h3><strong>Work Experience:</strong> <span class="editable">${textexp}</span></h3>
        <h3><strong>Skills:</strong> <span class="editable">${textskills}</span></h3>
        <p><strong>Date:</strong> <span class="editable">${date}</span></p>
    `;

    // Insert the resume into the page
    const resumeOutElement = document.getElementById('resumeOut');
    if (resumeOutElement) {
        resumeOutElement.innerHTML = resumeOut;
        makeEditable(); // Make the output editable on click
    } else {
        console.error('Resume output element not found!');
    }
});

// Make content editable function
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((element) => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || '';

            // Create input for editing
            if (currentElement.tagName === "SPAN" || currentElement.tagName === "P") {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');

                // Replace span with input
                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();

                // Handle input changes
                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });
            }
        });
    });
}

// Preview Image (Update Image src dynamically)
function previewImage() {
    const imgElement = document.getElementById("img") as HTMLInputElement;
    const profilePic = document.getElementById("profilePic") as HTMLImageElement;

    if (imgElement?.files?.[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            if (profilePic) {
                profilePic.src = event.target?.result as string;  // Set image source to base64
            }
        };
        reader.readAsDataURL(imgElement.files[0]);  // Read the image file
    }
}
