const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// function to select tab content item
function selectItem(e) {
    // remove border and show from all item
    removeBorder();
    removeShow();
    // add border-bottom to current tab
    this.classList.add('tab-border');
    // grab contentitems from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // add shhow class to the specific contentitem selected
    tabContentItem.classList.add('show');    
}

const removeBorder = () => {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

const removeShow = () => {
    tabContentItems.forEach(content => content.classList.remove('show'))
}

// listen for click on tab-item
tabItems.forEach(item => item.addEventListener('click', selectItem))