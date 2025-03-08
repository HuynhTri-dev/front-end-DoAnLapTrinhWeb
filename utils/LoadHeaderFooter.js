function loadComponent(id, file) {
  $.get(file, function (content) {
    $("#" + id).html(content);
  });
}

// Gọi hàm để tải header và footer
loadComponent("header", "../components/header.html");
loadComponent("footer", "../components/footer.html");
loadComponent("messenger", "../components/messenger.html");
loadComponent("detailStartup", "../components/detailBox.html");
loadComponent("userInfo", "../components/userInfo.html");
