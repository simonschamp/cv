//HTML2PDF JavaScript plus  pdf button script
document.addEventListener("DOMContentLoaded", function () {
  // Initialize sidenav
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems, {
    edge: "right",
    draggable: false,
    preventScrolling: true,
  });

  // Download PDF
  document.getElementById("downloadPDF").addEventListener("click", function () {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.onload = () => {
      html2pdf()
        .from(document.body)
        .set({
          margin: 0.5,
          filename: "Simon_Ihegbu_CV.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        })
        .save();
    };
    document.body.appendChild(script);
  });
});
