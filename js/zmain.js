$(function () {
  $(".js-check-all").on("click", function () {
    if ($(this).prop("checked")) {
      $('th input[type="checkbox"]').each(function () {
        $(this).prop("checked", true);
      });
    } else {
      $('th input[type="checkbox"]').each(function () {
        $(this).prop("checked", false);
      });
    }
  });
});
const cutCells = document.querySelectorAll("td.cut-me");

cutCells.forEach((cell) => {
  const original = cell.textContent.trim();
  if (original.length > 10) {
    cell.textContent = original.substring(0, 25) + "...";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPage = 10;
  const tbody = document.querySelector(".custom-table tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  const pagination = document.getElementById("table-pagination");
  const pageCount = Math.ceil(rows.length / rowsPerPage);

  // Render page‑number buttons
  function buildPagination() {
    for (let i = 1; i <= pageCount; i++) {
      const li = document.createElement("li");
      li.className = "page-item";
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(i);
      });
      pagination.appendChild(li);
    }
  }

  // Show only the rows for `pageNum`
  function showPage(pageNum) {
    const start = (pageNum - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    rows.forEach((row, idx) => {
      row.style.display = idx >= start && idx < end ? "" : "none";
    });

    // Highlight active page button
    Array.from(pagination.children).forEach((li, idx) => {
      li.classList.toggle("active", idx === pageNum - 1);
    });
  }

  // Initialize
  if (pageCount > 1) {
    buildPagination();
    showPage(1);
  }
});

// document.documentElement.style.setProperty('--bg-color', '#000');
// document.documentElement.style.setProperty('--button-bg', '#444');
// document.documentElement.style.setProperty('--text-color', '#ccc');

// const root = document.documentElement;

//   document.getElementById("bgColor").addEventListener("input", (e) => {
//     root.style.setProperty("--bg-color", e.target.value);
//   });

//   document.getElementById("textColor").addEventListener("input", (e) => {
//     root.style.setProperty("--text-color", e.target.value);
//   });

//   document.getElementById("btnBg").addEventListener("input", (e) => {
//     root.style.setProperty("--button-bg", e.target.value);
//   });

//   document.getElementById("btnHover").addEventListener("input", (e) => {
//     root.style.setProperty("--button-hover-bg", e.target.value);
//   });

//   document.getElementById("headingColor").addEventListener("input", (e) => {
//     root.style.setProperty("--heading-color", e.target.value);
//   });

const root = document.documentElement;
const setters = [
  { id: "bgColor", var: "--bg-color" },
  { id: "textColor", var: "--text-color" },
  { id: "headingColor", var: "--heading-color" },
  { id: "tableHoverBg", var: "--table-hover-bg" },
  { id: "tableHoverText", var: "--table-hover-text" },
  { id: "detailsTextColor", var: "--details-text-color" },
  { id: "linkColor", var: "--link-color" },
  { id: "linkHoverColor", var: "--link-hover-color" },
  { id: "buttonBg", var: "--button-bg" },
  { id: "buttonHoverBg", var: "--button-hover-bg" },
  { id: "borderColor", var: "--border-color" },
  { id: "tooltipBg", var: "--tooltip-bg" },
  { id: "tooltipText", var: "--tooltip-text" },
  { id: "paginationBg", var: "--pagination-bg" },
  { id: "paginationHoverBg", var: "--pagination-hover-bg" },
  { id: "paginationActiveBg", var: "--pagination-active-bg" },
  { id: "paginationActiveText", var: "--pagination-active-text" },
];

setters.forEach((item) => {
  const input = document.getElementById(item.id);
  input.addEventListener("input", (e) => {
    root.style.setProperty(item.var, e.target.value);
  });
});

const settingsPanel = document.getElementById("theme-settings");
const toggleBtn = document.getElementById("toggleSettings");

toggleBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("hidden");
  if (settingsPanel.classList.contains("hidden")) {
    toggleBtn.textContent = "⚙ Ayarları göstər";
  } else {
    toggleBtn.textContent = "✖ Ayarları gizlət";
  }
});
