document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const btn = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown__menu");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("show");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown__menu.show").forEach((menu) => {
      menu.classList.remove("show");
    });
  });
});

// // ==== PAGINATION LOGIC ====
// const rows = Array.from(document.querySelectorAll(".custom-table tbody tr"));
// const pagination = document.querySelector(".pagination-container");
// const prevBtn = pagination.querySelector("[data-action='prev']");
// const nextBtn = pagination.querySelector("[data-action='next']");
// const itemsPerPage = 10; // səhifə başına 15 satır
// let currentPage = 1;
// const totalPages = Math.ceil(rows.length / itemsPerPage);

// function renderPagination() {
//   // 1) Satırları göstər/gizlə
//   rows.forEach((row, i) => {
//     const start = (currentPage - 1) * itemsPerPage;
//     const end = currentPage * itemsPerPage;
//     row.style.display = i >= start && i < end ? "" : "none";
//   });

//   // 2) Mövcud nömrəli düymələri sil
//   pagination.querySelectorAll(".page-number").forEach((btn) => btn.remove());

//   // 3) Yeni nömrəli düymələri prevBtn-dən əvvəl sırala
//   for (let i = 1; i <= totalPages; i++) {
//     const btn = document.createElement("button");
//     btn.className = `page-btn page-number${i === currentPage ? " active" : ""}`;
//     btn.textContent = i;
//     btn.addEventListener("click", () => {
//       currentPage = i;
//       renderPagination();
//     });
//     nextBtn.before(btn);
//   }

//   // 4) Prev/Next düymələrinin aktivliyini tənzimlə
//   prevBtn.disabled = currentPage === 1;
//   nextBtn.disabled = currentPage === totalPages;
// }

// // Prev/Next eventləri
// prevBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (currentPage > 1) {
//     currentPage--;
//     renderPagination();
//   }
// });
// nextBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (currentPage < totalPages) {
//     currentPage++;
//     renderPagination();
//   }
// });

// // ilkin render
// renderPagination();
