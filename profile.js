var _a;
// Event listener for the form submission
(_a = document.getElementById('forms')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    var imgElement = document.getElementById("img");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var degreeElement = document.getElementById("degree");
    var matricElement = document.getElementById("matric");
    var interElement = document.getElementById("inter");
    var gradElement = document.getElementById("grad");
    var textexpElement = document.getElementById("textexp");
    var textskillsElement = document.getElementById("textskills");
    var dateElement = document.getElementById("date");
    // Get the profile picture URL (base64 or file URL)
    var img = ((_a = document.getElementById("profilePic")) === null || _a === void 0 ? void 0 : _a.src) || ''; // Update this if needed
    // Collect the form data
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var degree = degreeElement.value;
    var matric = matricElement.value;
    var inter = interElement.value;
    var grad = gradElement.value;
    var textexp = textexpElement.value;
    var textskills = textskillsElement.value;
    var date = dateElement.value;
    // Resume output HTML with profile picture
    var resumeOut = "\n        <h2>Resume</h2>\n        <p><strong>Profile:</strong> <img src=\"".concat(img, "\" alt=\"Profile Picture\" class=\"profile-img\" /></p>\n        <p><strong>Name:</strong> <span class=\"editable\">").concat(name, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span class=\"editable\">").concat(phone, "</span></p>\n        <p><strong>Degree:</strong> <span class=\"editable\">").concat(degree, "</span></p>\n        <p><strong>Matriculation:</strong> <span class=\"editable\">").concat(matric, "</span></p>\n        <p><strong>Intermediate:</strong> <span class=\"editable\">").concat(inter, "</span></p>\n        <p><strong>Graduation:</strong> <span class=\"editable\">").concat(grad, "</span></p>\n        <h3><strong>Work Experience:</strong> <span class=\"editable\">").concat(textexp, "</span></h3>\n        <h3><strong>Skills:</strong> <span class=\"editable\">").concat(textskills, "</span></h3>\n        <p><strong>Date:</strong> <span class=\"editable\">").concat(date, "</span></p>\n    ");
    // Insert the resume into the page
    var resumeOutElement = document.getElementById('resumeOut');
    if (resumeOutElement) {
        resumeOutElement.innerHTML = resumeOut;
        makeEditable(); // Make the output editable on click
    }
    else {
        console.error('Resume output element not found!');
    }
});
// Make content editable function
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || '';
            // Create input for editing
            if (currentElement.tagName === "SPAN" || currentElement.tagName === "P") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                // Replace span with input
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
                // Handle input changes
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
            }
        });
    });
}
// Preview Image (Update Image src dynamically)
function previewImage() {
    var _a;
    var imgElement = document.getElementById("img");
    var profilePic = document.getElementById("profilePic");
    if ((_a = imgElement === null || imgElement === void 0 ? void 0 : imgElement.files) === null || _a === void 0 ? void 0 : _a[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            if (profilePic) {
                profilePic.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result; // Set image source to base64
            }
        };
        reader.readAsDataURL(imgElement.files[0]); // Read the image file
    }
}
