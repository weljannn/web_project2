// Task #1: Changing Text Color
function task1() {
    document.getElementById('myElementId').style.color = 'red';
}
// Task #2: Updating Image Source and Alt
function task2() {


    // Select first image
    const image1 = document.getElementById('myImage1');
    
     
    // Select second image
    const image2 = document.getElementById('myImage2');

  
     // Change source and alt text
    image1.onclick= function() {
        image1.src = 'new-image1.jpg';
        image1.alt = 'newImage1';
    }

    
    image2.onclick= function() {
    // Change source and alt text
    image2.src = 'new-image2.jpg';
    image2.alt = 'newImage2';
    }
    console.log('Task 2: Image sources and alt texts updated');
}

// Task #3: Modifying Link URL
function task3() {
    // Select first link
    const link1 = document.getElementById('myLink1');
    
    // Modify href
    link1.href = 'https://example1.com';
    
    // Select second link
    const link2 = document.getElementById('myLink2');
    
    // Modify href
    link2.href = 'https://example2.com';
    
    console.log('Task 3: Link URLs modified');
}

// Task #4: Changing Border Color
function task4() {
    // Select the div element
    const myElement = document.getElementById('myElementId');
    
    // Check if the element exists before changing its style (best practice)
    if (myElement) {
        // Change border color to red
        myElement.style.borderColor = 'red';
        
        console.log('Task 4: Border color changed to red');
    } else {
        console.error('Element with ID myElementId not found');
    }
}

// Call the function when the script loads
task4();

// Task #5: Adding a New Element
function task5() {
    // Select the unordered list
    const list = document.getElementById('myList');
    
    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    
    // Append the new item to the list
    list.appendChild(newItem);
    
    console.log('Task 5: New item added to the list');
}

// Task #6: Removing and Appending Element
function task6() {
    // Select the unordered and ordered lists
    const unorderedList = document.getElementById('myUnorderedList');
    const orderedList = document.getElementById('myOrderedList');
    
    // Remove the first list item from unordered list
    const firstItem = unorderedList.firstElementChild;
    unorderedList.removeChild(firstItem);
    
    // Append the removed item to the ordered list
    orderedList.appendChild(firstItem);
    
    console.log('Task 6: First item moved from unordered to ordered list');
}

// Run all tasks
function runAllTasks() {
    task1();
    task2();
    task3();
    task4();
    task5();
    task6();
}

// Execute tasks when page loads
window.onload = runAllTasks;