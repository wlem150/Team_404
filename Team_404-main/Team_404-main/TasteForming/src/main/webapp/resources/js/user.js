function showEditRow(index) {
    const editRow = document.querySelector(`#edit-row-${index}`);
    editRow.style.display = 'table-row';
    const dataRow = document.querySelector(`#data-row-${index}`);
    dataRow.style.display = 'none';
};

function cancelRow(index) {
    const editRow = document.querySelector(`#edit-row-${index}`);
    editRow.style.display = 'none';
    const dataRow = document.querySelector(`#data-row-${index}`);
    dataRow.style.display = 'table-row';
};



var currentUrl = window.location.href;

// 메뉴 아이템의 href 속성에서 URL 추출하기
var menuItemUrls = [];
var menuItems = document.querySelectorAll('.nav-item a');
menuItems.forEach(function(menuItem) {
  menuItemUrls.push(menuItem.getAttribute('href'));
});

// 현재 페이지 URL이 메뉴 아이템 URL과 일치하면 active 클래스 추가하기
if (menuItemUrls.includes(currentUrl)) {
  var activeMenuItem = document.querySelector('.nav-item a[href="' + currentUrl + '"]');
  activeMenuItem.classList.add('active');
}
