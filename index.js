function displayDetails(event) {
    // Hide all details divs
    const allDetails = document.querySelectorAll('.stations-text');
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Get the target div from the clicked li's data-target attribute
    const targetId = event.currentTarget.getAttribute('data-target');
    const targetDiv = document.querySelector(targetId);

    // Display the target div
    if (targetDiv) {
        targetDiv.style.display = 'block';
    }
}

// Add event listeners
const listItems = document.querySelectorAll('.stations li');
listItems.forEach(item => {
    item.addEventListener('click', displayDetails);
});


function displayDetails_2(event) {
    const allDetails2 = document.querySelectorAll('.education-text');
    allDetails2.forEach(detail => {
        detail.style.display = 'none';
    });

    const targetId2 = event.currentTarget.getAttribute('data-target');
    const targetDiv2 = document.querySelector(targetId2);

    if (targetDiv2) {
        targetDiv2.style.display = 'block';
    }
}

const listItems2 = document.querySelectorAll('.education-li-li');
listItems2.forEach(item => {
    item.addEventListener('click', displayDetails_2);
});