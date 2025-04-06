document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'https://raw.githubusercontent.com/MoAtPsyc/Excel-and-CHC-files/main/CHC_Scoringtable.docx'; 
  link.download = 'CHC_Scoringtable.docx';  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
