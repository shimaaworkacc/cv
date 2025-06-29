 document.getElementById('cvForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profession = document.getElementById('profession').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const preview = `
      <h2 class="fw-bold">${name}</h2>
      <div class="mb-2"><strong>${profession}</strong></div>
      <div class="mb-2"><i class="fa fa-envelope"></i> ${email} &nbsp; <i class="fa fa-phone"></i> ${phone}</div>
      <hr>
      <h5>Professional Summary</h5>
      <p>${summary}</p>
      <h5>Work Experience</h5>
      <p>${experience}</p>
      <h5>Education</h5>
      <p>${education}</p>
      <h5>Skills</h5>
      <p>${skills}</p>
    `;
    document.getElementById('cvPreview').innerHTML = preview;
    document.getElementById('cvResult').classList.remove('d-none');
    document.getElementById('cvResult').scrollIntoView({behavior: 'smooth'});
  });

  // Download as PDF (using window.print as a placeholder)
  document.getElementById('downloadPdfBtn').addEventListener('click', function() {
    window.print();
  });

  // Download as Word (simple export)
  document.getElementById('downloadWordBtn').addEventListener('click', function() {
    const header = "<html><head><meta charset='utf-8'><title>CV</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + document.getElementById('cvPreview').innerHTML + footer;
    const source = 'data:application/msword;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'cv.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  });